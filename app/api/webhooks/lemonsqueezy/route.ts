import { NextRequest, NextResponse } from "next/server";

import { UI_TEXT } from "@/constants/ui";
import { parseWebhookPayload, verifyWebhookSignature } from "@/lib/payments";
import { createSupabaseAdminClient } from "@/lib/supabase";

const PREMIUM_DAYS = 30;

function addDaysUtc(date: Date, days: number): Date {
  const next = new Date(date);
  next.setUTCDate(next.getUTCDate() + days);
  return next;
}

async function findUserIdByEmail(adminClient: ReturnType<typeof createSupabaseAdminClient>, email: string): Promise<string | null> {
  // Fallback path when `custom_data.user_id` was not included.
  // Supabase Auth Admin does not provide a direct get-by-email in older SDKs,
  // so we paginate through users.
  // This is acceptable for small projects; for larger scale, store user_id in `custom_data`.
  const perPage = 1000;

  for (let page = 1; page <= 20; page += 1) {
    const { data, error } = await adminClient.auth.admin.listUsers({ page, perPage });

    if (error) {
      return null;
    }

    const match = data.users.find((u) => u.email?.toLowerCase() === email.toLowerCase());
    if (match?.id) {
      return match.id;
    }

    if (data.users.length < perPage) {
      return null;
    }
  }

  return null;
}

export async function POST(request: NextRequest) {
  const rawBody = await request.text();
  const signature = request.headers.get("x-signature");

  if (!verifyWebhookSignature(rawBody, signature)) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  const payload = parseWebhookPayload(rawBody);
  const eventName = payload.meta?.event_name;
  const adminClient = createSupabaseAdminClient();

  const email = payload.data?.attributes?.user_email;
  const userIdFromCustomData = payload.meta?.custom_data?.user_id;

  if (!eventName) {
    return NextResponse.json({ error: "Invalid webhook payload" }, { status: 400 });
  }

  const resolvedUserId = userIdFromCustomData ?? (email ? await findUserIdByEmail(adminClient, email) : null);

  if (!resolvedUserId) {
    return NextResponse.json({ error: "Unable to resolve user" }, { status: 400 });
  }

  if (eventName === "order_created") {
    // For one-time payments, we only grant premium when the order is paid.
    // Lemon Squeezy sends `data.attributes.status` (e.g. "paid").
    const status = payload.data?.attributes?.status;
    if (status !== "paid") {
      return NextResponse.json({ message: "Ignored non-paid order" });
    }

    const { data: profile, error: profileError } = await adminClient
      .from("profiles")
      .select("premium_expires_at")
      .eq("user_id", resolvedUserId)
      .maybeSingle();

    if (profileError) {
      return NextResponse.json({ error: "Failed to load profile" }, { status: 500 });
    }

    // Extend from now OR from current expiry if still active — same behavior as points purchase.
    const now = new Date();
    const currentExpiry = profile?.premium_expires_at ? new Date(profile.premium_expires_at) : null;
    const baseDate = currentExpiry && currentExpiry > now ? currentExpiry : now;
    const newExpiry = addDaysUtc(baseDate, PREMIUM_DAYS);

    // Basic idempotency heuristic:
    // Lemon Squeezy can retry the same webhook. If we just extended to ~30 days,
    // a duplicate request would extend again. To avoid that WITHOUT a separate
    // webhook-events table, we detect "already applied" if the current expiry
    // is already ~30 days in the future.
    if (currentExpiry && currentExpiry > now) {
      const diffMs = currentExpiry.getTime() - now.getTime();
      const diffDays = diffMs / (1000 * 60 * 60 * 24);
      if (diffDays > 27 && diffDays < 33) {
        return NextResponse.json({ message: UI_TEXT.webhooksOk });
      }
    }

    const { error: updateError } = await adminClient
      .from("profiles")
      .update({
        is_premium: true,
        premium_expires_at: newExpiry.toISOString()
      })
      .eq("user_id", resolvedUserId);

    if (updateError) {
      return NextResponse.json({ error: "Failed to update premium status" }, { status: 500 });
    }
  }

  if (eventName === "order_refunded") {
    const { error: updateError } = await adminClient
      .from("profiles")
      .update({ is_premium: false, premium_expires_at: null })
      .eq("user_id", resolvedUserId);

    if (updateError) {
      return NextResponse.json({ error: "Failed to revoke premium" }, { status: 500 });
    }
  }

  if (eventName === "subscription_created" || eventName === "subscription_resumed") {
    // If you later sell subscriptions, keep old behavior: mark premium.
    await adminClient.from("profiles").update({ is_premium: true }).eq("user_id", resolvedUserId);
  }

  if (eventName === "subscription_updated") {
    // Lemon Squeezy sends subscription status in `data.attributes.status`.
    // We treat "active" as premium, and revoke for terminal statuses.
    const status = payload.data?.attributes?.status;
    const lower = status?.toLowerCase();
    if (lower === "cancelled" || lower === "canceled" || lower === "expired" || lower === "refunded") {
      await adminClient
        .from("profiles")
        .update({ is_premium: false, premium_expires_at: null })
        .eq("user_id", resolvedUserId);
    } else if (lower) {
      await adminClient.from("profiles").update({ is_premium: true }).eq("user_id", resolvedUserId);
    }
  }

  if (eventName === "subscription_cancelled" || eventName === "subscription_expired") {
    await adminClient
      .from("profiles")
      .update({ is_premium: false, premium_expires_at: null })
      .eq("user_id", resolvedUserId);
  }

  return NextResponse.json({ message: UI_TEXT.webhooksOk });
}
