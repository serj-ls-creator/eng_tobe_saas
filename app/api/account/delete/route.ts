import { NextResponse } from "next/server";

import { createSupabaseAdminClient, createSupabaseServerClient } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const supabase = createSupabaseServerClient();
    const {
      data: { user }
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ deleted: false, error: "You must be signed in to delete your account." }, { status: 401 });
    }

    const body = (await req.json().catch(() => null)) as { confirm?: string } | null;

    if (!body?.confirm || body.confirm.trim().toUpperCase() !== "DELETE") {
      return NextResponse.json(
        { deleted: false, error: "Confirmation phrase is missing or invalid." },
        { status: 400 }
      );
    }

    let admin: ReturnType<typeof createSupabaseAdminClient>;

    try {
      admin = createSupabaseAdminClient();
    } catch (e) {
      console.error("Account deletion is not configured:", e);
      return NextResponse.json(
        {
          deleted: false,
          error: "Account deletion is not available right now. Please contact support."
        },
        { status: 500 }
      );
    }

    const { error: progressError } = await admin.from("learning_activity_progress").delete().eq("user_id", user.id);
    if (progressError) {
      console.error("Failed to delete learning progress:", progressError);
    }

    const { error: profileError } = await admin.from("profiles").delete().eq("user_id", user.id);
    if (profileError) {
      console.error("Failed to delete profile:", profileError);
    }

    const { error: deleteError } = await admin.auth.admin.deleteUser(user.id);
    if (deleteError) {
      console.error("Failed to delete auth user:", deleteError);

      const devDetails =
        process.env.NODE_ENV !== "production"
          ? deleteError.message
          : undefined;

      return NextResponse.json(
        {
          deleted: false,
          error: devDetails
            ? `Account deletion failed: ${devDetails}`
            : "Account deletion failed. Please contact support if this keeps happening."
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ deleted: true });
  } catch (error) {
    console.error("Unexpected account deletion error:", error);
    return NextResponse.json({ deleted: false, error: "Failed to delete account." }, { status: 500 });
  }
}
