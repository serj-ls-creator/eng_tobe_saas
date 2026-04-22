import Link from 'next/link';
import { redirect } from 'next/navigation';

import { TopBarServer as TopBar } from '@/components/layout/TopBarServer';
import { Card } from '@/components/ui/card';
import { SILENT_WORD_LEVELS } from '@/data/words/pronounce/silent_words';
import { isPremium } from '@/lib/isPremium';

export default async function DontPronouncePage() {
  const premium = await isPremium();

  if (!premium) {
    redirect('/premium');
  }

  return (
    <>
      <TopBar title="Don't Pronounce" />
      <div className="content-shell pb-8">
        <div className="mb-4">
          <Link href="/words" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
            ← Back to Words
          </Link>
        </div>

        <div className="mb-6 rounded-[28px] border border-cyan-400/20 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.22),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_35%),linear-gradient(180deg,_rgba(15,23,42,0.96),_rgba(2,6,23,0.96))] p-5">
          <div className="mb-2 text-[10px] uppercase tracking-[0.28em] text-cyan-300">Pronounce</div>
          <h1 className="mb-2 text-3xl font-black text-white">Don&apos;t Pronounce</h1>
          <p className="max-w-md text-sm leading-6 text-zinc-200">
            Choose the silent letter in each word. Every level contains 10 words.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {SILENT_WORD_LEVELS.map((level, index) => (
            <Link key={level.id} href={`/words/pronounce/dont-pronounce/${level.id}`}>
              <Card className={`fade-up fade-up-d${Math.min(index + 1, 5)} overflow-hidden rounded-[24px] border border-white/10 p-4 transition-all hover:border-cyan-300/40 hover:bg-white/[0.08]`}>
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
