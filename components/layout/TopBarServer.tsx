import { TopBar } from './TopBar';
import { createSupabaseServerClient } from '@/lib/supabase';

interface TopBarServerProps {
  title?: string;
  backHref?: string;
  showBrand?: boolean;
}

async function getUserPoints(): Promise<number> {
  try {
    const supabase = createSupabaseServerClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return 0;
    const { data } = await supabase
      .from('profiles')
      .select('points')
      .eq('user_id', user.id)
      .maybeSingle();
    return data?.points ?? 0;
  } catch {
    return 0;
  }
}

export async function TopBarServer(props: TopBarServerProps) {
  const points = await getUserPoints();
  return <TopBar {...props} points={points} />;
}
