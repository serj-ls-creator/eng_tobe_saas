import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { SentencesTree } from "@/components/sentences/SentencesTree";
import { SENT_CATS } from "@/constants/categories";
import { isPremium } from "@/lib/isPremium";
import { getLearningProgressSnapshot } from "@/lib/learning-progress";
import { createPageMetadata } from "@/lib/metadata";
import sentencesArt from "@/data/pic/sentences.png";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = createPageMetadata({
  title: "Real English Sentences and Daily Dialogues",
  description: "Practice common English sentences and dialogues for everyday life, travel, and conversations.",
});

export default async function SentencesPage() {
  const premium = await isPremium();
  const progress = await getLearningProgressSnapshot();

  return (
    <>
      <TopBar title="Sentences" />
      <div className="content-shell pb-4">
        <div className="mb-4">
          <Link 
            href="/home" 
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            {"<-"} Back to Home
          </Link>
        </div>

        <div className="mb-6 section-hero relative overflow-hidden p-5">
          <Image
            src={sentencesArt}
            alt=""
            aria-hidden="true"
            draggable={false}
            className="pointer-events-none absolute right-0 top-1/2 w-[60%] -translate-y-1/2 select-none opacity-80"
          />
          <div className="relative z-10 mb-2 text-[10px] uppercase tracking-[0.28em] text-cyan-300">Practice</div>
          <h1 className="relative z-10 mb-2 text-3xl font-black text-white">Sentences</h1>
          <p className="relative z-10 max-w-md text-sm leading-6 text-zinc-200">
            Master sentence patterns and structures from beginner to advanced levels
          </p>
        </div>

        <SentencesTree categories={SENT_CATS} isPremium={premium} progress={progress} />
      </div>
    </>
  );
}
