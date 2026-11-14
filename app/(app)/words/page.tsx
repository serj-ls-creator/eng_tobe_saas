import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { WordsTree } from "@/components/words/WordsTree";
import { CATS } from "@/constants/categories";
import { isPremium } from "@/lib/isPremium";
import { getLearningProgressSnapshot } from "@/lib/learning-progress";
import { createPageMetadata } from "@/lib/metadata";
import wordsArt from "@/data/pic/words.png";

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
            className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <ArrowLeft className="h-3 w-3" /> Back to Home
          </Link>
        </div>

        <div className="mb-6 section-hero relative overflow-hidden p-4">
          <Image
            src={wordsArt}
            alt=""
            aria-hidden="true"
            draggable={false}
            className="pointer-events-none absolute right-0 top-1/2 w-[60%] -translate-y-1/2 select-none opacity-80"
          />
          <div className="relative z-10 mb-2 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-theme" aria-hidden="true" />
            <span className="text-xs font-medium text-zinc-400">Practice</span>
          </div>
          <h1 className="relative z-10 mb-2 text-3xl font-semibold text-foreground">Words</h1>
          <p className="relative z-10 max-w-md text-sm leading-relaxed text-zinc-300">
            Expand your vocabulary from basic to advanced levels with interactive exercises
          </p>
        </div>

        <WordsTree categories={CATS} isPremium={premium} progress={progress} />
      </div>
    </>
  );
}
