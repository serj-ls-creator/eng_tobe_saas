import { NextResponse } from "next/server";

import { isPremium } from "@/lib/isPremium";

export async function GET() {
  return NextResponse.json({
    isPremium: await isPremium()
  });
}
