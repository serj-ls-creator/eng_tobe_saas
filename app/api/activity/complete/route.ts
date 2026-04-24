import { NextRequest, NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabase';

// UTC date string YYYY-MM-DD
function utcDateStr(date = new Date()): string {
  return date.toISOString().slice(0, 10);
}

// Day-of-week index 0=Mon … 6=Sun (ISO week)
function isoDow(date = new Date()): number {
  return (date.getUTCDay() + 6) % 7; // Sun=0 → 6, Mon=1 → 0
}

export async function POST(_req: NextRequest) {
  try {
    const supabase = createSupabaseServerClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const today = utcDateStr();
    const todayDate = new Date(today + 'T00:00:00Z');

    // ── 1. Load current profile ──────────────────────────────────────────────
    const { data: profile } = await supabase
      .from('profiles')
      .select('streak, last_activity_date, daily_activities, points, total_streak')
      .eq('user_id', user.id)
      .maybeSingle();

    if (!profile) return NextResponse.json({ error: 'Profile not found' }, { status: 404 });

    const lastDate: string | null = profile.last_activity_date;
    let streak: number = profile.streak ?? 0;
    let totalStreak: number = profile.total_streak ?? 0;
    let dailyActivities: number = profile.daily_activities ?? 0;
    let points: number = profile.points ?? 0;
    let dayCompleted = false;

    // ── 2. Reset daily counter if new day ────────────────────────────────────
    if (lastDate !== today) {
      if (lastDate) {
        const last = new Date(lastDate + 'T00:00:00Z');
        const diffDays = Math.round((todayDate.getTime() - last.getTime()) / 86400000);
        if (diffDays > 1) {
          streak = 0;
          totalStreak = 0; // missed a day — reset total streak too
        }
      }
      dailyActivities = 0;
    }

    // ── 3. Increment daily activity count (cap at 4) ─────────────────────────
    const prevActivities = dailyActivities;
    if (dailyActivities < 4) {
      dailyActivities += 1;
    }

    // ── 4. Check if day is now complete (crossed 4 activities threshold) ─────
    if (prevActivities < 4 && dailyActivities >= 4) {
      dayCompleted = true;
      streak += 1;
      totalStreak += 1; // total streak always increments on day completion
    }

    // ── 5. Update profile ────────────────────────────────────────────────────
    await supabase
      .from('profiles')
      .update({
        streak,
        total_streak: totalStreak,
        daily_activities: dailyActivities,
        last_activity_date: today,
      })
      .eq('user_id', user.id);

    // ── 6. Weekly streak logic ───────────────────────────────────────────────
    let weeklyBonus = false;

    if (dayCompleted) {
      const weekStartDate = new Date(todayDate);
      weekStartDate.setUTCDate(weekStartDate.getUTCDate() - (streak - 1));
      const weekStart = utcDateStr(weekStartDate);

      const { data: weekRow, error: weekError } = await supabase
        .from('weekly_streak')
        .select('*')
        .eq('user_id', user.id)
        .eq('week_start_date', weekStart)
        .maybeSingle();

      // Only proceed with weekly_streak if table exists
      if (!weekError) {
        const dayIndex = streak - 1;
        const newFlag = weekRow ? (weekRow.day_flags | (1 << dayIndex)) : (1 << dayIndex);

        if (!weekRow) {
          await supabase.from('weekly_streak').insert({
            user_id: user.id,
            week_start_date: weekStart,
            days_completed: streak,
            day_flags: newFlag,
            bonus_awarded: false,
          });
        } else {
          await supabase
            .from('weekly_streak')
            .update({ days_completed: streak, day_flags: newFlag })
            .eq('id', weekRow.id);
        }

        if (streak === 7 && (!weekRow || !weekRow.bonus_awarded)) {
          points += 1000;
          weeklyBonus = true;
          await supabase.from('profiles').update({ points }).eq('user_id', user.id);
          await supabase
            .from('weekly_streak')
            .update({ bonus_awarded: true })
            .eq('user_id', user.id)
            .eq('week_start_date', weekStart);
        }

        // Reset streak after completing 7 days — new week starts fresh next day
        if (streak === 7) {
          streak = 0;
          await supabase
            .from('profiles')
            .update({ streak: 0 })
            .eq('user_id', user.id);
        }
      }
    }

    return NextResponse.json({
      streak,
      dailyActivities,
      dayCompleted,
      weeklyBonus,
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
