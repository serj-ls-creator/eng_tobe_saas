import { cache } from "react";

import { createSupabaseBrowserClient } from "@/lib/supabase";

export const updateProfile = cache(async (updates: { display_name?: string; avatar?: string }) => {
  const supabase = createSupabaseBrowserClient();
  
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    throw new Error("User not authenticated");
  }

  const { error } = await supabase
    .from("profiles")
    .update(updates)
    .eq("user_id", user.id)
    .select();

  if (error) {
    throw error;
  }

  return true;
});
