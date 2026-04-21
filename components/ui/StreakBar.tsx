'use client';

import { useState, useEffect } from 'react';
import { Flame, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { UI_TEXT } from '@/constants/ui';
import Link from 'next/link';

interface StreakData {
  streak: number;
  dailyActivities: number;
  dayFlags: number;
  weekStartDate: string | null;
  today: string | null;
}

interface StreakBarProps {
  isLoggedIn?: boolean;
}

function dayLetter(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00Z');
  return ['S', 'M', 'T', 'W', 'T', 'F', 'S'][d.getUTCDay()];
}

export function StreakBar({ isLoggedIn = false }: StreakBarProps) {
  const [data, setData] = useState<StreakData>({
    streak: 0,
    dailyActivities: 0,
    dayFlags: 0,
    weekStartDate: null,
    today: null,
  });

  useEffect(() => {
    if (!isLoggedIn) return;
    fetch(`/api/streak?t=${Date.now()}`, { cache: 'no-store' })
      .then(r => r.json())
      .then(setData)
      .catch(() => {});
  }, [isLoggedIn]);

  const { streak, dailyActivities, dayFlags, weekStartDate, today } = data;
  const totalTasks = 4;
  const progress = isLoggedIn ? Math.min((dailyActivities / totalTasks) * 100, 100) : 0;

  // Build 7 day slots
  const todayStr = today ?? new Date().toISOString().slice(0, 10);
  const startStr = weekStartDate ?? todayStr;

  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(startStr + 'T00:00:00Z');
    d.setUTCDate(d.getUTCDate() + i);
    const dateStr = d.toISOString().slice(0, 10);
    const letter = dayLetter(dateStr);
    const isCompleted = isLoggedIn && !!(dayFlags & (1 << i));
    const isToday = dateStr === todayStr;
    return { letter, isCompleted, isToday };
  });

  return (
    <Card className="p-4">
      {/* Day circles */}
      <div className="mb-4 flex items-center justify-between">
        {days.map((day, index) => (
          <div key={index} className="flex flex-col items-center gap-1">
            <span className="text-[10px] font-medium text-white">{day.letter}</span>
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs transition-all ${
                day.isCompleted
                  ? 'border-yellow-500/60 bg-yellow-500/20 text-yellow-400'
                  : day.isToday && isLoggedIn
                  ? 'border-cyan-400/40 bg-cyan-400/10 text-cyan-400/60'
                  : 'border-white/10 bg-white/[0.03] text-zinc-700'
              }`}
            >
              {day.isCompleted ? '✓' : (day.isToday && isLoggedIn) ? '·' : ''}
            </div>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="mb-2 flex items-center justify-between text-xs">
        <span className="text-zinc-500">{UI_TEXT.dailyProgress}</span>
        <span className="text-cyan-400">
          {isLoggedIn ? Math.min(dailyActivities, totalTasks) : 0}/{totalTasks} tasks
        </span>
      </div>
      <Progress value={progress} />

      {/* Bottom row: streak badge + hint */}
      <div className="mt-3 flex items-center justify-between">
        <div className="inline-flex items-center gap-1 rounded-full bg-yellow-500/10 px-2.5 py-1 text-xs font-semibold text-yellow-400">
          <Flame className="h-3.5 w-3.5" />
          {isLoggedIn && streak > 0 ? `Day ${streak}` : 'Start streak!'}
        </div>

        {isLoggedIn ? (
          <div className="flex items-center gap-1 text-[10px] text-zinc-500">
            <span>7 days</span>
            <span className="text-zinc-600">=</span>
            <Star className="h-3 w-3 text-yellow-400" />
            <span className="text-yellow-400 font-semibold">1000</span>
          </div>
        ) : (
          <Link
            href="/auth/login"
            className="text-[10px] text-cyan-400/70 hover:text-cyan-400 transition-colors"
            onClick={e => e.stopPropagation()}
          >
            Sign in to save progress →
          </Link>
        )}
      </div>
    </Card>
  );
}
