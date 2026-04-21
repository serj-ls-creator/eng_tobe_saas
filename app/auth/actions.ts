"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

import { createSupabaseAdminClient, createSupabaseServerClient } from "@/lib/supabase";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

const signupSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6)
});

export async function loginAction(_: { error: string | null }, formData: FormData) {
  const parsed = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password")
  });

  if (!parsed.success) {
    return { error: "Please enter a valid email and password." };
  }

  const supabase = createSupabaseServerClient();
  const { error } = await supabase.auth.signInWithPassword(parsed.data);

  if (error) {
    return { error: error.message };
  }

  redirect("/");
}

export async function signupAction(_: { error: string | null }, formData: FormData) {
  const parsed = signupSchema.safeParse({
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    password: formData.get("password")
  });

  if (!parsed.success) {
    return { error: "Please complete all fields correctly.", success: false };
  }

  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase.auth.signUp({
    email: parsed.data.email,
    password: parsed.data.password,
    options: {
      data: {
        full_name: parsed.data.fullName
      }
    }
  });

  if (error) {
    return { error: error.message, success: false };
  }

  if (data.user) {
    const adminClient = createSupabaseAdminClient();
    const { error: profileError } = await adminClient.from("profiles").upsert({
      user_id: data.user.id,
      is_premium: false,
      streak: 0
    });

    if (profileError) {
      console.error("Failed to upsert profile during signup:", profileError);
    }
  }

  return { error: null, success: true };
}

export async function signInWithGoogle() {
  const supabase = createSupabaseServerClient();
  const headerStore = await headers();
  const forwardedProto = headerStore.get("x-forwarded-proto");
  const forwardedHost = headerStore.get("x-forwarded-host");
  const derivedOrigin = forwardedProto && forwardedHost ? `${forwardedProto}://${forwardedHost}` : null;
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? process.env.NEXT_PUBLIC_APP_URL ?? derivedOrigin ?? "http://localhost:3000";

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${siteUrl}/auth/callback`
    }
  });

  if (error) {
    console.error("Google Auth Error:", error.message);
    return;
  }

  if (data.url) {
    redirect(data.url);
  }
}
