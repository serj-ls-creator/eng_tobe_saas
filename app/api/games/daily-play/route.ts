import { NextRequest, NextResponse } from 'next/server';

import { createSupabaseServerClient } from '@/lib/supabase';

const GAME_TYPES = ['wordle', 'wordsearch'] as const;
type GameType = (typeof GAME_TYPES)[number];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const gameType = body?.gameType as GameType;
    if (!GAME_TYPES.includes(gameType)) {
      return NextResponse.json({ error: 'Invalid game type' }, { status: 400 });
    }

    const supabase = createSupabaseServerClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ allowed: false, reason: 'sign_in_required' }, { status: 401 });
    }

    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('is_premium, premium_expires_at')
      .eq('user_id', user.id)
      .maybeSingle();
    if (profileError || !profile) {
      return NextResponse.json({ error: 'Profile not found' }, { status: 404 });
    }

    const premiumActive = Boolean(profile.is_premium) &&
      (!profile.premium_expires_at || new Date(profile.premium_expires_at) > new Date());
    if (premiumActive) {
      return NextResponse.json({ allowed: true, premium: true });
    }

    if (profile.is_premium && profile.premium_expires_at) {
      await supabase.from('profiles').update({ is_premium: false }).eq('user_id', user.id);
    }

    const today = new Date().toISOString().slice(0, 10);
    const { error: insertError } = await supabase
      .from('game_daily_plays')
      .insert({ user_id: user.id, game_type: gameType, played_on: today });

    if (insertError?.code === '23505') {
      return NextResponse.json({ allowed: false, premium: false, reason: 'already_played' });
    }
    if (insertError) {
      console.error('Could not record daily game play:', insertError);
      return NextResponse.json({ error: 'Could not start game' }, { status: 500 });
    }

    return NextResponse.json({ allowed: true, premium: false });
  } catch (error) {
    console.error('Daily game access check failed:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
