'use client';

import { useState, useEffect } from 'react';
import { createSupabaseBrowserClient } from '@/lib/supabase-browser';

export function usePoints(): number {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    const supabase = createSupabaseBrowserClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) return;
      supabase
        .from('profiles')
        .select('points')
        .eq('user_id', user.id)
        .maybeSingle()
        .then(({ data }) => {
          if (data?.points) setPoints(data.points);
        });
    });
  }, []);

  return points;
}
