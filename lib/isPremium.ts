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
    .select("id, user_id, is_premium, streak, last_activity_date, daily_activities, created_at, display_name, avatar, points")
    .eq("user_id", user.id)
    .maybeSingle();

  // Add email from auth user
  if (data && user.email) {
    return { ...data, email: user.email };
  }

  return data;
});

export const getWeeklyStreak = cache(async () => {
  const supabase = createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const { data: profile } = await supabase
    .from('profiles')
    .select('streak, last_activity_date, daily_activities')
    .eq('user_id', user.id)
    .maybeSingle();

  if (!profile) return null;

  const streak = profile.streak ?? 0;
  const dailyActivities = profile.daily_activities ?? 0;
  const lastDate: string | null = profile.last_activity_date;

  const today = new Date().toISOString().slice(0, 10);
  const todayDate = new Date(today + 'T00:00:00Z');

  // Check if streak is still active (not missed a day)
  let activeStreak = streak;
  if (lastDate) {
    const last = new Date(lastDate + 'T00:00:00Z');
    const diffDays = Math.round((todayDate.getTime() - last.getTime()) / 86400000);
    if (diffDays > 1) activeStreak = 0;
  } else {
    activeStreak = 0;
  }

  // week_start = today when streak <= 1, else today - (streak-1) days
  const weekStartDate = new Date(todayDate);
  if (activeStreak > 1) {
    weekStartDate.setUTCDate(weekStartDate.getUTCDate() - (activeStreak - 1));
  }
  const computedWeekStart = weekStartDate.toISOString().slice(0, 10);

  const { data: weekRow } = await supabase
    .from('weekly_streak')
    .select('day_flags, days_completed, bonus_awarded')
    .eq('user_id', user.id)
    .eq('week_start_date', computedWeekStart)
    .maybeSingle();

  // If no days completed yet, always show week starting from today
  const dayFlags = weekRow?.day_flags ?? 0;
  const weekStart = dayFlags === 0 ? today : computedWeekStart;

  return {
    streak: activeStreak,
    dailyActivities,
    dayFlags,
    weekStartDate: weekStart,
    today,
  };
});
