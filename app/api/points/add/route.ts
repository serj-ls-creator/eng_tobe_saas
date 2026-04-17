import { NextRequest, NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const { points } = await req.json();

    if (typeof points !== 'number' || points < 0) {
      return NextResponse.json({ error: 'Invalid points' }, { status: 400 });
    }

    const supabase = createSupabaseServerClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Increment points in profiles table
    const { data, error } = await supabase.rpc('increment_points', {
      user_id_input: user.id,
      points_to_add: points,
    });

    if (error) {
      // Fallback: manual read-then-write if RPC doesn't exist
      const { data: profile } = await supabase
        .from('profiles')
        .select('points')
        .eq('user_id', user.id)
        .maybeSingle();

      const currentPoints = profile?.points ?? 0;

      const { error: updateError } = await supabase
        .from('profiles')
        .update({ points: currentPoints + points })
        .eq('user_id', user.id);

      if (updateError) {
        return NextResponse.json({ error: updateError.message }, { status: 500 });
      }

      return NextResponse.json({ points: currentPoints + points });
    }

    return NextResponse.json({ points: data });
  } catch (e) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
