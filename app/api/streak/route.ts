import { NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabase';

export async function GET() {
  try {
    const supabase = createSupabaseServerClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json(
      { streak: 0, dailyActivities: 0, dayFlags: 0, weekStartDate: null, today: null },
      { headers: { 'Cache-Control': 'no-store' } }
    );

    const today = new Date().toISOString().slice(0, 10);
    const todayDate = new Date(today + 'T00:00:00Z');

    const { data: profile } = await supabase
      .from('profiles')
      .select('streak, last_activity_date, daily_activities')
      .eq('user_id', user.id)
      .maybeSingle();

    if (!profile) return NextResponse.json(
      { streak: 0, dailyActivities: 0, dayFlags: 0, weekStartDate: today, today },
      { headers: { 'Cache-Control': 'no-store' } }
    );

    const rawDailyActivities = profile.daily_activities ?? 0;
    const lastDate: string | null = profile.last_activity_date;

    // Reset daily counter if last activity was not today
    const dailyActivities = Math.min(lastDate === today ? rawDailyActivities : 0, 4);

    // Check if streak is still active
    let activeStreak = profile.streak ?? 0;
    if (lastDate) {
      const last = new Date(lastDate + 'T00:00:00Z');
      const diffDays = Math.round((todayDate.getTime() - last.getTime()) / 86400000);
      if (diffDays > 1) activeStreak = 0;
    } else {
      activeStreak = 0;
    }

    // Get the most recent weekly_streak row for this user
    // This gives us the authoritative week_start_date
    const { data: weekRows } = await supabase
      .from('weekly_streak')
      .select('week_start_date, day_flags, days_completed')
      .eq('user_id', user.id)
      .order('week_start_date', { ascending: false })
      .limit(1);

    const weekRow = weekRows?.[0] ?? null;

    let dayFlags = 0;
    let weekStart = today; // default: no streak yet, start from today

    if (activeStreak > 0 && weekRow) {
      // If 7-day week was completed (bonus awarded), treat as reset ONLY on next day
      if (weekRow.days_completed >= 7 && weekRow.day_flags === 127) {
        // Check if the week was completed today — if so, still show full week
        const weekWasCompletedToday = lastDate === today;
        if (weekWasCompletedToday) {
          // Show all 7 filled circles today
          weekStart = weekRow.week_start_date;
          dayFlags = 127;
        } else {
          // Next day after completing — reset display
          activeStreak = 0;
          dayFlags = 0;
          weekStart = today;
        }
      } else {
        // Use the stored week_start_date — it's always correct
        weekStart = weekRow.week_start_date;
        dayFlags = weekRow.day_flags;
      }
    } else if (activeStreak === 0 && lastDate === today) {
      // streak was reset to 0 today (just completed 7-day week)
      // Show full week if weekRow has day_flags=127, or derive from dailyActivities=4
      if (weekRow && weekRow.day_flags === 127) {
        weekStart = weekRow.week_start_date;
        dayFlags = 127;
      } else if (!weekRow) {
        // No weekly_streak table — if daily is complete today and streak was just reset,
        // show 7 filled circles (best effort)
        if (dailyActivities >= 4) {
          dayFlags = 127;
          // weekStart = today - 6 days
          const ws = new Date(todayDate);
          ws.setUTCDate(ws.getUTCDate() - 6);
          weekStart = ws.toISOString().slice(0, 10);
        }
      }
    } else if (activeStreak > 0 && !weekRow) {
      // No row yet (table missing or first time) — derive from streak
      // Use the last COMPLETED day as anchor
      // A day is completed when daily_activities reached 4
      // If today's activities < 4, last completed day = lastDate only if streak was incremented
      // We can't know for sure without weekly_streak, so use streak count
      dayFlags = (1 << activeStreak) - 1;
      // weekStart = today - (activeStreak - 1) but anchored to last completed day
      // Since we don't have weekly_streak, best guess: streak days ending at lastDate
      if (lastDate) {
        const lastCompleted = new Date(lastDate + 'T00:00:00Z');
        // If today has activities but day not yet complete, last completed = yesterday
        const lastCompletedDay = (dailyActivities < 4 && lastDate === today)
          ? (() => { const d = new Date(todayDate); d.setUTCDate(d.getUTCDate() - 1); return d; })()
          : lastCompleted;
        const ws = new Date(lastCompletedDay);
        ws.setUTCDate(ws.getUTCDate() - (activeStreak - 1));
        weekStart = ws.toISOString().slice(0, 10);
      }
    }

    return NextResponse.json(
      { streak: activeStreak, dailyActivities, dayFlags, weekStartDate: weekStart, today },
      { headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate' } }
    );
  } catch {
    return NextResponse.json(
      { streak: 0, dailyActivities: 0, dayFlags: 0, weekStartDate: null, today: null },
      { headers: { 'Cache-Control': 'no-store' } }
    );
  }
}
