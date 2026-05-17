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

    // Call the thread-safe database function to perform all calculations and updates atomically
    const { data, error } = await supabase.rpc('complete_user_activity', {
      user_id_input: user.id,
      today_input: today,
    });

    if (error) {
      console.error('RPC Error:', error);
      return NextResponse.json({ error: error.message || 'Database error' }, { status: 500 });
    }

    if (data && data.error) {
      return NextResponse.json({ error: data.error }, { status: data.error === 'Profile not found' ? 404 : 400 });
    }

    return NextResponse.json({
      streak: data.streak,
      dailyActivities: data.dailyActivities,
      dayCompleted: data.dayCompleted,
      weeklyBonus: data.weeklyBonus,
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
