'use client';

import { Flame, Sparkles } from 'lucide-react';

import { Card } from '@/components/ui/card';
import type { NegotiationEnding } from '@/data/games/negotiation/perfect-suit';
import type { ActivityResult } from '@/lib/useCompleteActivity';

interface NegotiationResultModalProps {
  ending: NegotiationEnding;
  activityResult: ActivityResult | null;
  onRestart: () => void;
  onBack: () => void;
}

const DAILY_GOAL = 4;

const accentByType = {
  ideal: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10',
  good: 'text-cyan-400 border-cyan-400/30 bg-cyan-400/10',
  acceptable: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10',
  bad: 'text-orange-400 border-orange-400/30 bg-orange-400/10',
  terrible: 'text-rose-400 border-rose-400/30 bg-rose-400/10',
} as const;

export function NegotiationResultModal({
  ending,
  activityResult,
  onRestart,
  onBack,
}: NegotiationResultModalProps) {
  const accent = accentByType[ending.type];
  const dailyCompleted = (activityResult?.dailyActivities ?? 0) >= DAILY_GOAL;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <Card className="w-full max-w-md rounded-[28px] border border-white/10 bg-[#0b0f1a]/95 p-7 text-white shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
        <div className="mb-5 flex items-center justify-between gap-3">
          <div className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] ${accent}`}>
            {ending.shortLabel}
          </div>
          <div className="rounded-full bg-white/5 px-3 py-1 text-sm font-semibold text-yellow-300">
            +{ending.points} points
          </div>
        </div>

        <h2 className="mb-2 text-3xl font-black tracking-tight">{ending.title}</h2>
        <p className="mb-4 text-sm text-zinc-300">{ending.outcome}</p>

        <div className="mb-4 rounded-3xl border border-white/8 bg-white/[0.04] p-4">
          <div className="mb-2 flex items-center gap-2 text-cyan-300">
            <Sparkles className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em]">Why This Ending</span>
          </div>
          <p className="text-sm leading-6 text-zinc-200">{ending.explanation}</p>
        </div>

        <div className="mb-5 rounded-3xl border border-white/8 bg-white/[0.03] p-4">
          <div className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">Key Lessons</div>
          <div className="space-y-2">
            {ending.lessons.map((lesson) => (
              <div key={lesson} className="rounded-2xl bg-white/[0.04] px-3 py-2 text-sm text-zinc-200">
                {lesson}
              </div>
            ))}
          </div>
        </div>

        {activityResult && (
          <div
            className={`mb-5 flex items-center justify-between rounded-2xl border px-4 py-3 ${
              dailyCompleted
                ? 'border-yellow-400/30 bg-yellow-400/10'
                : 'border-white/8 bg-white/[0.04]'
            }`}
          >
            <div className="flex items-center gap-2">
              <Flame className={`h-4 w-4 ${dailyCompleted ? 'text-yellow-300' : 'text-zinc-500'}`} />
              <span className={`text-sm font-medium ${dailyCompleted ? 'text-yellow-200' : 'text-zinc-300'}`}>
                {dailyCompleted ? 'Daily streak completed' : 'Daily progress'}
              </span>
            </div>
            <span className={`text-sm font-bold ${dailyCompleted ? 'text-yellow-200' : 'text-cyan-300'}`}>
              {dailyCompleted ? '4/4' : `${activityResult.dailyActivities}/4`}
            </span>
          </div>
        )}

        <div className="space-y-3">
          <button
            onClick={onRestart}
            className="w-full rounded-2xl bg-cyan-400 px-5 py-3 font-semibold text-black transition-colors hover:bg-cyan-300"
          >
            Play Again
          </button>
          <button
            onClick={onBack}
            className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 font-medium text-white transition-colors hover:bg-white/[0.08]"
          >
            Back to Quests
          </button>
        </div>
      </Card>
    </div>
  );
}
