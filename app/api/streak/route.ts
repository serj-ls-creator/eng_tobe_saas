import { NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabase';

export async function GET() {
  try {
    const supabase = createSupabaseServerClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ streak: 0, dailyActivities: 0, dayFlags: 0, weekStartDate: null, today: null });

    const today = new Date().toISOString().slice(0, 10);
    const todayDate = new Date(today + 'T00:00:00Z');

    const { data: profile } = await supabase
      .from('profiles')
      .select('streak, last_activity_date, daily_activities')
      .eq('user_id', user.id)
      .maybeSingle();

    if (!profile) return NextResponse.json({ streak: 0, dailyActivities: 0, dayFlags: 0, weekStartDate: today, today });

    const rawDailyActivities = profile.daily_activities ?? 0;
    const lastDate: string | null = profile.last_activity_date;

    // Reset daily counter if last activity was not today
    const dailyActivities = lastDate === today ? rawDailyActivities : 0;

    let activeStreak = profile.streak ?? 0;
    if (lastDate) {
      const last = new Date(lastDate + 'T00:00:00Z');
      const diffDays = Math.round((todayDate.getTime() - last.getTime()) / 86400000);
      if (diffDays > 1) activeStreak = 0;
    } else {
      activeStreak = 0;
    }

    // weekStart = date of day 1 of the streak
    // = last completed day - (streak - 1) days
    // Use lastDate as anchor (last day that was completed), not today
    const anchorDate = lastDate ? new Date(lastDate + 'T00:00:00Z') : todayDate;
    const weekStartDate = new Date(anchorDate);
    if (activeStreak > 0) {
      weekStartDate.setUTCDate(weekStartDate.getUTCDate() - (activeStreak - 1));
    }
    const computedWeekStart = weekStartDate.toISOString().slice(0, 10);

    const { data: weekRow, error: weekError } = await supabase
      .from('weekly_streak')
      .select('day_flags')
      .eq('user_id', user.id)
      .eq('week_start_date', computedWeekStart)
      .maybeSingle();

    // Fallback if table doesn't exist or no row: derive flags from streak count
    let dayFlags = 0;
    if (weekError) {
      dayFlags = activeStreak > 0 ? (1 << activeStreak) - 1 : 0;
    } else if (weekRow) {
      dayFlags = weekRow.day_flags;
    } else {
      // Table exists but no row yet — derive from streak
      dayFlags = activeStreak > 0 ? (1 << activeStreak) - 1 : 0;
    }
    const weekStart = computedWeekStart;

    return NextResponse.json(
      { streak: activeStreak, dailyActivities, dayFlags, weekStartDate: weekStart, today },
      { headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate' } }
    );
  } catch {
    return NextResponse.json({ streak: 0, dailyActivities: 0, dayFlags: 0, weekStartDate: null, today: null });
  }
}
