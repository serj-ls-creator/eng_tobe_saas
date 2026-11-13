import { NextResponse } from "next/server";

import { createSupabaseServerClient } from "@/lib/supabase";
import { getCurrentProfileWithPremium } from "@/lib/isPremium";

export async function GET() {
  try {
    const { profile, premium } = await getCurrentProfileWithPremium();
    return NextResponse.json({ profile, premium });
  } catch (error) {
    console.error('Error fetching profile:', error);
    return NextResponse.json({ profile: null, premium: false });
  }
}
