import { NextResponse } from "next/server";
import { Creem } from "creem";

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

    const creem = new Creem({
      apiKey,
      server: process.env.NODE_ENV === "production" ? "prod" : "test",
    });

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

    const links = await creem.customers.generateBillingLinks({
      customerId,
    });

    return NextResponse.json({
      portal_url: links.customerPortalLink,
    });
  } catch (error) {
    console.error("Failed to create Creem customer portal session:", error);
    return NextResponse.json({ error: "Failed to create portal session" }, { status: 500 });
  }
}
