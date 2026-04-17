import { NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabase';

const PREMIUM_COST = 20000;
const PREMIUM_DAYS = 30;

export async function POST() {
  try {
    const supabase = createSupabaseServerClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { data: profile } = await supabase
      .from('profiles')
      .select('points, is_premium, premium_expires_at')
      .eq('user_id', user.id)
      .maybeSingle();

    if (!profile) return NextResponse.json({ error: 'Profile not found' }, { status: 404 });

    const points = profile.points ?? 0;
    if (points < PREMIUM_COST) {
      return NextResponse.json({
        error: 'Not enough points',
        needed: PREMIUM_COST - points,
      }, { status: 400 });
    }

    // Calculate new expiry: extend from now or from current expiry if still active
    const now = new Date();
    let baseDate = now;
    if (profile.premium_expires_at) {
      const currentExpiry = new Date(profile.premium_expires_at);
      if (currentExpiry > now) baseDate = currentExpiry; // extend from current expiry
    }
    const newExpiry = new Date(baseDate);
    newExpiry.setUTCDate(newExpiry.getUTCDate() + PREMIUM_DAYS);

    await supabase
      .from('profiles')
      .update({
        points: points - PREMIUM_COST,
        is_premium: true,
        premium_expires_at: newExpiry.toISOString(),
      })
      .eq('user_id', user.id);

    return NextResponse.json({
      success: true,
      premium_expires_at: newExpiry.toISOString(),
      points_remaining: points - PREMIUM_COST,
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
