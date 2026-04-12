import { NextRequest, NextResponse } from "next/server";

import { UI_TEXT } from "@/constants/ui";
import { parseWebhookPayload, verifyWebhookSignature } from "@/lib/payments";
import { createSupabaseAdminClient } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  const rawBody = await request.text();
  const signature = request.headers.get("x-signature");

  if (!verifyWebhookSignature(rawBody, signature)) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  const payload = parseWebhookPayload(rawBody);
  const eventName = payload.meta?.event_name;
  const userId = payload.meta?.custom_data?.user_id;

  if (!eventName || !userId) {
    return NextResponse.json({ error: "Invalid webhook payload" }, { status: 400 });
  }

  if (eventName === "subscription_created" || eventName === "subscription_resumed" || eventName === "order_created") {
    const adminClient = createSupabaseAdminClient();
    await adminClient.from("profiles").update({ is_premium: true }).eq("user_id", userId);
  }

  if (eventName === "subscription_cancelled" || eventName === "subscription_expired") {
    const adminClient = createSupabaseAdminClient();
    await adminClient.from("profiles").update({ is_premium: false }).eq("user_id", userId);
  }

  return NextResponse.json({ message: UI_TEXT.webhooksOk });
}
