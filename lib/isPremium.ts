import { cache } from "react";

import { createSupabaseServerClient } from "@/lib/supabase";

export const isPremium = cache(async (): Promise<boolean> => {
  const supabase = createSupabaseServerClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    return false;
  }

  const { data } = await supabase
    .from("profiles")
    .select("is_premium")
    .eq("user_id", user.id)
    .maybeSingle();

  return Boolean(data?.is_premium);
});

export const getCurrentProfile = cache(async () => {
  const supabase = createSupabaseServerClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  const { data } = await supabase
    .from("profiles")
    .select("id, user_id, is_premium, streak, created_at")
    .eq("user_id", user.id)
    .maybeSingle();

  return data;
});
