import Link from "next/link";
import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { GRAMMAR_SECTIONS } from "@/constants/grammar";
import { GrammarTree } from "@/components/grammar/GrammarTree";
import { TensesSection } from "@/components/grammar/TensesSection";
import { getLearningProgressSnapshot } from "@/lib/learning-progress";
import { isPremium } from "@/lib/isPremium";

export const dynamic = 'force-dynamic';

export default async function GrammarPage() {
  const progress = await getLearningProgressSnapshot();
  const premium = await isPremium();
  const grammarSections = GRAMMAR_SECTIONS.filter((section) => section.id !== "tenses");
  const tensesSection = GRAMMAR_SECTIONS.find((section) => section.id === "tenses");

  return (
    <>
      <TopBar title="Grammar" />
      <div className="content-shell pb-4">
        <div className="mb-4">
          <Link 
            href="/home" 
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="mb-6 rounded-[28px] border border-cyan-400/20 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.22),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_35%),linear-gradient(180deg,_rgba(15,23,42,0.96),_rgba(2,6,23,0.96))] p-5">
          <div className="mb-2 text-[10px] uppercase tracking-[0.28em] text-cyan-300">Practice</div>
          <h1 className="mb-2 text-3xl font-black text-white">Grammar</h1>
          <p className="max-w-md text-sm leading-6 text-zinc-200">
            Learn the rules that help you build clear, accurate English sentences.
          </p>
        </div>

        <GrammarTree sections={grammarSections} progress={progress} />
        {tensesSection ? <TensesSection section={tensesSection} progress={progress} isPremium={premium} /> : null}
      </div>
    </>
  );
}
