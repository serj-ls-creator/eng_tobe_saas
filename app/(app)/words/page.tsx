import type { Metadata } from "next";
import Link from "next/link";
import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { WordsTree } from "@/components/words/WordsTree";
import { CATS } from "@/constants/categories";
import { isPremium } from "@/lib/isPremium";
import { getLearningProgressSnapshot } from "@/lib/learning-progress";
import { createPageMetadata } from "@/lib/metadata";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = createPageMetadata({
  title: "English Words and Vocabulary Practice",
  description: "Expand your English vocabulary with practical words, topic flashcards, and interactive practice exercises.",
});

export default async function WordsPage() {
  const premium = await isPremium();
  const progress = await getLearningProgressSnapshot();

  return (
    <>
      <TopBar title="Words" />
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
          <div className="mb-2 text-[10px] uppercase tracking-[0.28em] text-cyan-300">Practice</div>
          <h1 className="mb-2 text-3xl font-black text-white">Words</h1>
          <p className="max-w-md text-sm leading-6 text-zinc-200">
            Expand your vocabulary from basic to advanced levels with interactive exercises
          </p>
        </div>

        <WordsTree categories={CATS} isPremium={premium} progress={progress} />
      </div>
    </>
  );
}
