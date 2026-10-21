import Link from 'next/link';

import { TopBarServer as TopBar } from '@/components/layout/TopBarServer';
import { Card } from '@/components/ui/card';
import { SILENT_WORD_LEVELS } from '@/data/words/pronounce/silent_words';
import { buildProgressKey, getLearningProgressSnapshot, getProgressCardClass } from '@/lib/learning-progress';

export const dynamic = 'force-dynamic';

export default async function DontPronouncePage() {
  const progress = await getLearningProgressSnapshot();

  return (
    <>
      <TopBar title="Don't Pronounce" />
      <div className="content-shell pb-8">
        <div className="mb-4">
          <Link href="/words" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
            ← Back to Words
          </Link>
        </div>

        <div className="mb-6 section-hero p-5">
          <div className="mb-2 text-[10px] uppercase tracking-[0.28em] text-cyan-300">Pronounce</div>
          <h1 className="mb-2 text-3xl font-black text-white">Don&apos;t Pronounce</h1>
          <p className="max-w-md text-sm leading-6 text-zinc-200">
            Choose the silent letter in each word. Every level contains 10 words.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {SILENT_WORD_LEVELS.map((level, index) => (
            <Link key={level.id} href={`/words/pronounce/dont-pronounce/${level.id}`}>
              <Card className={`fade-up fade-up-d${Math.min(index + 1, 5)} overflow-hidden rounded-[24px] border p-4 transition-all hover:border-cyan-300/40 hover:bg-white/[0.08] ${
                getProgressCardClass(
                  progress.activityStatuses[
                    buildProgressKey({
                      section: "words",
                      categoryId: "pronounce",
                      topicId: "dont-pronounce",
                      levelId: level.id,
                      activityId: "dont-pronounce"
                    })
                  ] ?? "none"
                ) || "border-white/10"
              }`}>
                <div className="mb-2 text-sm font-semibold text-white">{level.name}</div>
                <div className="text-[11px] leading-relaxed">
                  <div className="text-zinc-500">Silent letter practice</div>
                  <div className="font-medium text-cyan-400">{level.words.length} words</div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
