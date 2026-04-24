import { TopBar } from './TopBar';
import { createSupabaseServerClient } from '@/lib/supabase';

interface TopBarServerProps {
  title?: string;
  backHref?: string;
  showBrand?: boolean;
}

async function getUserData(): Promise<{ points: number; streak: number }> {
  try {
    const supabase = createSupabaseServerClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { points: 0, streak: 0 };

    const { data } = await supabase
      .from('profiles')
      .select('points, streak, total_streak, last_activity_date')
      .eq('user_id', user.id)
      .maybeSingle();

    if (!data) return { points: 0, streak: 0 };

    // Check if total_streak is still active (not missed a day)
    let totalStreak = data.total_streak ?? 0;
    if (data.last_activity_date) {
      const today = new Date().toISOString().slice(0, 10);
      const last = new Date(data.last_activity_date + 'T00:00:00Z');
      const todayDate = new Date(today + 'T00:00:00Z');
      const diffDays = Math.round((todayDate.getTime() - last.getTime()) / 86400000);
      if (diffDays > 1) totalStreak = 0;
    } else {
      totalStreak = 0;
    }

    return { points: data.points ?? 0, streak: totalStreak };
  } catch {
    return { points: 0, streak: 0 };
  }
}

export async function TopBarServer(props: TopBarServerProps) {
  const { points, streak } = await getUserData();
  return <TopBar {...props} points={points} streak={streak} />;
}
