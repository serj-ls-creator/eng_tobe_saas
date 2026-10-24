import Link from 'next/link';

import { TopBarServer as TopBar } from '@/components/layout/TopBarServer';
import { Card } from '@/components/ui/card';
import { PRONUNCIATION_LEVELS } from '@/data/words/pronounce/pronunciation';
import { buildProgressKey, getLearningProgressSnapshot, getProgressCardClass } from '@/lib/learning-progress';

export const dynamic = 'force-dynamic';

export default async function PronunciationLevelsPage() {
  const progress = await getLearningProgressSnapshot();

  return (
    <>
      <TopBar title="Pronunciation" />
      <div className="content-shell pb-8">
        <div className="mb-4">
          <Link href="/words" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
            ← Back to Words
          </Link>
        </div>

        <div className="mb-6 section-hero p-5">
          <div className="mb-2 text-[10px] uppercase tracking-[0.28em] text-cyan-300">Pronounce</div>
          <h1 className="mb-2 text-3xl font-black text-white">Pronunciation</h1>
          <p className="max-w-md text-sm leading-6 text-zinc-200">
            Choose the correct pronunciation for tricky English words. Every level contains 10 words.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {PRONUNCIATION_LEVELS.map((level, index) => {
            const status =
              progress.activityStatuses[
                buildProgressKey({
                  section: 'words',
                  categoryId: 'pronounce',
                  topicId: 'pronunciation',
                  levelId: level.id,
                  activityId: 'pronunciation',
                })
              ] ?? 'none';

            return (
              <Link key={level.id} href={`/words/pronounce/pronunciation/${level.id}`}>
                <Card
                  className={`fade-up fade-up-d${Math.min(index + 1, 5)} overflow-hidden rounded-[24px] border p-4 transition-all hover:border-cyan-300/40 hover:bg-white/[0.08] ${
                    getProgressCardClass(status) || 'border-white/10'
                  }`}
                >
                  <div className="mb-2 text-sm font-semibold text-white">{level.name}</div>
                  <div className="text-[11px] leading-relaxed">
                    <div className="line-clamp-1 text-zinc-500">
                      {level.description ?? 'Tricky word practice'}
                    </div>
                    <div className="font-medium text-cyan-400">{level.words.length} words</div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
