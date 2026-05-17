import { NextRequest, NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const { points, activityType } = await req.json();

    if (typeof points !== 'number' || points < 0) {
      return NextResponse.json({ error: 'Invalid points' }, { status: 400 });
    }

    // Server-side validation of points based on activityType
    let maxAllowedPoints = 10; // Default maximum points allowed per transaction is 10
    
    if (activityType === 'negotiation') {
      maxAllowedPoints = 10;
    } else if (activityType === 'wordle' || activityType === 'memory') {
      maxAllowedPoints = 10;
    } else if (activityType === 'completion-modal') {
      maxAllowedPoints = 20; // Allow up to 20 points for lesson completions
    } else {
      // If activityType is not provided or unknown, restrict strictly to 10 points
      maxAllowedPoints = 10;
    }

    if (points > maxAllowedPoints) {
      return NextResponse.json({ error: 'Unauthorized: points amount exceeds allowable limit for this activity' }, { status: 403 });
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
