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
    .select("is_premium, premium_expires_at")
    .eq("user_id", user.id)
    .maybeSingle();

  if (!data?.is_premium) return false;

  // If premium was bought with points, check expiry
  if (data.premium_expires_at) {
    const expired = new Date(data.premium_expires_at) < new Date();
    if (expired) {
      // Auto-revoke expired premium
      await supabase
        .from('profiles')
        .update({ is_premium: false })
        .eq('user_id', user.id);
      return false;
    }
  }

  return true;
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
    .select("id, user_id, is_premium, premium_expires_at, creem_customer_id, creem_subscription_status, streak, total_streak, last_activity_date, daily_activities, created_at, display_name, avatar, points")
    .eq("user_id", user.id)
    .maybeSingle();

  if (data) {
    let streak = data.streak ?? 0;
    let totalStreak = data.total_streak ?? 0;
    const lastDate = data.last_activity_date;
    const rawDailyActivities = data.daily_activities ?? 0;

    if (lastDate) {
      const today = new Date().toISOString().slice(0, 10);
      const last = new Date(lastDate + 'T00:00:00Z');
      const todayDate = new Date(today + 'T00:00:00Z');
      const diffDays = Math.round((todayDate.getTime() - last.getTime()) / 86400000);
      
      if (diffDays > 1 || (diffDays === 1 && rawDailyActivities < 4)) {
        streak = 0;
        totalStreak = 0;
      }
    } else {
      streak = 0;
      totalStreak = 0;
    }
    data.streak = streak;
    data.total_streak = totalStreak;
  }

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
    
    // If missed a whole day (diffDays > 1) OR did not complete daily goal yesterday (diffDays === 1 and dailyActivities < 4)
    if (diffDays > 1 || (diffDays === 1 && dailyActivities < 4)) {
      activeStreak = 0;
    }
  } else {
    activeStreak = 0;
  }

  // weekStart = last completed day - (streak-1) days
  // anchor = lastDate if today not yet completed, else today
  const anchorDate = lastDate ? new Date(lastDate + 'T00:00:00Z') : todayDate;
  const weekStartDate = new Date(anchorDate);
  if (activeStreak > 0) {
    weekStartDate.setUTCDate(weekStartDate.getUTCDate() - (activeStreak - 1));
  }
  const computedWeekStart = weekStartDate.toISOString().slice(0, 10);

  const { data: weekRow } = await supabase
    .from('weekly_streak')
    .select('day_flags, days_completed, bonus_awarded')
    .eq('user_id', user.id)
    .eq('week_start_date', computedWeekStart)
    .maybeSingle();

  const weekStart = computedWeekStart;

  return {
    streak: activeStreak,
    dailyActivities,
    dayFlags: weekRow?.day_flags ?? 0,
    weekStartDate: weekStart,
    today,
  };
});
