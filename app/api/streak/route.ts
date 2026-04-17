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

    const dailyActivities = profile.daily_activities ?? 0;
    const lastDate: string | null = profile.last_activity_date;

    let activeStreak = profile.streak ?? 0;
    if (lastDate) {
      const last = new Date(lastDate + 'T00:00:00Z');
      const diffDays = Math.round((todayDate.getTime() - last.getTime()) / 86400000);
      if (diffDays > 1) activeStreak = 0;
    } else {
      activeStreak = 0;
    }

    const weekStartDate = new Date(todayDate);
    if (activeStreak > 1) {
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
    const weekStart = dayFlags === 0 ? today : computedWeekStart;

    return NextResponse.json({ streak: activeStreak, dailyActivities, dayFlags, weekStartDate: weekStart, today });
  } catch {
    return NextResponse.json({ streak: 0, dailyActivities: 0, dayFlags: 0, weekStartDate: null, today: null });
  }
}
