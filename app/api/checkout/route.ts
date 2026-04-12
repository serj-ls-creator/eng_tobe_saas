import { NextRequest, NextResponse } from "next/server";

import { createCheckoutUrl, validateCheckoutRequest } from "@/lib/payments";
import { createSupabaseServerClient } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get("content-type") ?? "";

    let payload: unknown;

    if (contentType.includes("application/json")) {
      payload = await request.json();
    } else {
      const formData = await request.formData();
      payload = {
        variantId: Number(formData.get("variantId"))
      };
    }

    const validated = validateCheckoutRequest(payload);
    const supabase = createSupabaseServerClient();
    const {
      data: { user }
    } = await supabase.auth.getUser();

    if (!user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const checkoutUrl = await createCheckoutUrl({
      ...validated,
      userId: user.id,
      email: user.email
    });

    if (contentType.includes("application/json")) {
      return NextResponse.json({ checkoutUrl });
    }

    return NextResponse.redirect(checkoutUrl);
  } catch {
    return NextResponse.json({ error: "Invalid checkout payload" }, { status: 400 });
  }
}
