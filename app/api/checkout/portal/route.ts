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
      .select("display_name")
      .eq("user_id", user.id)
      .maybeSingle();

    const creem = new Creem({
      apiKey,
      server: process.env.NODE_ENV === "production" ? "prod" : "test",
    });

    let customerId: string | undefined;
    let lookupError: unknown = null;

    if (user.email) {
      try {
        const customer = await creem.customers.retrieve(undefined, user.email);
        customerId = customer.id;
      } catch (error) {
        lookupError = error;
        console.log("Creem customer lookup failed, creating a new customer record.", error);
      }
    }

    if (!customerId) {
      if (!user.email) {
        return NextResponse.json({ error: "User email is required to create a portal session" }, { status: 400 });
      }

      try {
        const customer = await creem.customers.create({
          email: user.email,
          name: profile?.display_name || user.user_metadata?.full_name || user.user_metadata?.name || user.email,
          metadata: { referenceId: user.id },
        });

        customerId = customer.id;
      } catch (createError) {
        console.error("Creem customer creation failed:", createError);

        try {
          const customer = await creem.customers.retrieve(undefined, user.email);
          customerId = customer.id;
        } catch (retryError) {
          console.error("Creem customer retry lookup failed:", retryError);
          const message =
            createError instanceof Error
              ? createError.message
              : lookupError instanceof Error
                ? lookupError.message
                : "Unknown Creem error";

          return NextResponse.json(
            { error: `Failed to resolve Creem customer: ${message}` },
            { status: 500 },
          );
        }
      }
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
