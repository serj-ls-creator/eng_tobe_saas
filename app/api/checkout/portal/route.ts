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

    const creem = new Creem({
      apiKey,
      server: process.env.NODE_ENV === "production" ? "prod" : "test",
    });

    let customerId: string | undefined;

    if (user.email) {
      try {
        const customer = await creem.customers.retrieve(undefined, user.email);
        customerId = customer.id;
      } catch (error) {
        console.log("Creem customer lookup failed, creating a new customer record.", error);
      }
    }

    if (!customerId) {
      if (!user.email) {
        return NextResponse.json({ error: "User email is required to create a portal session" }, { status: 400 });
      }

      const customer = await creem.customers.create({
        email: user.email,
        name: user.user_metadata?.full_name || user.user_metadata?.name || user.email,
        metadata: { referenceId: user.id },
      });

      customerId = customer.id;
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
