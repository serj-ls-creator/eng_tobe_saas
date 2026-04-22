import Link from 'next/link';
import { redirect } from 'next/navigation';
import { ArrowRight, Crown, Sparkles } from 'lucide-react';

import { TopBarServer as TopBar } from '@/components/layout/TopBarServer';
import { Card } from '@/components/ui/card';
import { negotiationQuests } from '@/data/games/negotiation/perfect-suit';
import { isPremium } from '@/lib/isPremium';

export default async function NegotiationPage() {
  const premium = await isPremium();

  if (!premium) {
    redirect('/premium');
  }

  const [quest] = negotiationQuests;

  return (
    <>
      <TopBar title="Negotiation" />
      <div className="content-shell pb-8">
        <div className="mb-4">
          <Link href="/games" className="text-xs text-zinc-500 transition-colors hover:text-zinc-300">
            ← Back to Games
          </Link>
        </div>

        <div className="mb-6 rounded-[28px] border border-yellow-400/20 bg-[radial-gradient(circle_at_top_right,_rgba(250,204,21,0.20),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(34,211,238,0.18),_transparent_40%),linear-gradient(180deg,_rgba(15,23,42,0.96),_rgba(2,6,23,0.96))] p-5">
          <div className="mb-3 flex items-center gap-2 text-yellow-200">
            <Crown className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-[0.24em]">Quest Selection</span>
          </div>
          <h1 className="mb-2 text-3xl font-black text-white">Negotiation</h1>
          <p className="max-w-md text-sm leading-6 text-zinc-200">
            Enter a branching dialogue, read the seller&apos;s tactics, and finish with the strongest possible deal.
          </p>
        </div>

        <Link href={`/games/negotiation/${quest.id}`}>
          <Card className="overflow-hidden rounded-[28px] border border-cyan-400/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.16),rgba(250,204,21,0.10),rgba(255,255,255,0.05))] p-5 transition-all hover:border-cyan-300/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <div className="mb-2 flex items-center gap-2 text-cyan-300">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-xs font-semibold uppercase tracking-[0.24em]">Quest 01</span>
                </div>
                <h2 className="mb-2 text-2xl font-black text-white">{quest.title}</h2>
                <p className="max-w-md text-sm leading-6 text-zinc-200">{quest.description}</p>
              </div>
              <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-3">
                <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-400">Starting Price</div>
                <div className="mt-1 text-xl font-black text-yellow-300">${quest.originalPrice}</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-3">
                <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-400">Best Reward</div>
                <div className="mt-1 text-xl font-black text-cyan-300">10 pts</div>
              </div>
            </div>
          </Card>
        </Link>
      </div>
    </>
  );
}
