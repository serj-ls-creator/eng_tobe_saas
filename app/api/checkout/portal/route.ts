import { NextResponse } from "next/server";

import { createSupabaseServerClient } from "@/lib/supabase";

export async function POST() {
  try {
    const supabase = createSupabaseServerClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const apiKey = process.env.CREEM_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "CREEM_API_KEY is not configured" }, { status: 500 });
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("display_name, creem_customer_id")
      .eq("user_id", user.id)
      .maybeSingle();

    const customerId = profile?.creem_customer_id;

    if (!customerId) {
      if (!user.email) {
        return NextResponse.json({ error: "User email is required to create a portal session" }, { status: 400 });
      }

      return NextResponse.json(
        {
          error: "Creem customer is not linked yet for this account. Please re-open the latest subscription email or contact support so we can sync it.",
        },
        { status: 409 },
      );
    }

    const creemTestMode = process.env.CREEM_TEST_MODE === "true";
    const creemBaseUrl = creemTestMode
      ? "https://test-api.creem.io"
      : "https://api.creem.io";

    const response = await fetch(`${creemBaseUrl}/v1/customers/billing`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-api-key": apiKey,
      },
      body: JSON.stringify({ customer_id: customerId }),
    });

    const responseText = await response.text();

    if (!response.ok) {
      console.error("Creem portal creation failed:", response.status, responseText);
      return NextResponse.json(
        {
          error: `Creem portal request failed (${response.status})`,
          details: responseText,
        },
        { status: response.status === 401 || response.status === 403 ? 502 : response.status },
      );
    }

    let payload: { customer_portal_link?: string } = {};
    try {
      payload = JSON.parse(responseText) as { customer_portal_link?: string };
    } catch {
      console.error("Creem portal response was not JSON:", responseText);
      return NextResponse.json(
        { error: "Creem portal response was invalid" },
        { status: 502 },
      );
    }

    return NextResponse.json({
      portal_url: payload.customer_portal_link,
    });
  } catch (error) {
    console.error("Failed to create Creem customer portal session:", error);
    return NextResponse.json({
      error: error instanceof Error ? error.message : "Failed to create portal session",
    }, { status: 500 });
  }
}
