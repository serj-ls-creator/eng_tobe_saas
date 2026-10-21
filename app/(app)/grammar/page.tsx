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

        <div className="mb-6 section-hero p-5">
          <div className="mb-2 text-[10px] uppercase tracking-[0.28em] text-theme">Practice</div>
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
