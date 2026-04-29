import Link from "next/link";
import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { WordsTree } from "@/components/words/WordsTree";
import { CATS } from "@/constants/categories";
import { isPremium } from "@/lib/isPremium";

export default async function WordsPage() {
  const premium = await isPremium();

  return (
    <>
      <TopBar title="Words" />
      <div className="content-shell pb-4">
        <div className="mb-4">
          <Link 
            href="/" 
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="mb-6 rounded-[28px] border border-cyan-400/20 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.22),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_35%),linear-gradient(180deg,_rgba(15,23,42,0.96),_rgba(2,6,23,0.96))] p-5">
          <div className="mb-2 text-[10px] uppercase tracking-[0.28em] text-cyan-300">Practice</div>
          <h1 className="mb-2 text-3xl font-black text-white">Words</h1>
          <p className="max-w-md text-sm leading-6 text-zinc-200">
            Expand your vocabulary from basic to advanced levels with interactive exercises
          </p>
        </div>

        <WordsTree categories={CATS} isPremium={premium} />
      </div>
    </>
  );
}
