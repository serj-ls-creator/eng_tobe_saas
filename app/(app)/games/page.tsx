import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { GAME_CATS } from "@/constants/categories";
import { isPremium } from "@/lib/isPremium";
import { createPageMetadata } from "@/lib/metadata";
import gamesArt from "@/data/pic/games.png";

export const metadata: Metadata = createPageMetadata({
  title: "Fun English Games and Word Practice",
  description: "Play fun English word games like Wordle, Wordsearch, and Memory to practice your vocabulary.",
});

export default async function GamesPage() {
  const premium = await isPremium();

  return (
    <>
      <TopBar title="Games" />
      <div className="content-shell">
        <div className="mb-4">
          <Link 
            href="/home" 
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="mb-6 section-hero relative overflow-hidden p-5">
          <Image
            src={gamesArt}
            alt=""
            aria-hidden="true"
            draggable={false}
            className="pointer-events-none absolute right-0 top-1/2 w-[60%] -translate-y-1/2 select-none opacity-80"
          />
          <div className="relative z-10 mb-2 text-[10px] uppercase tracking-[0.28em] text-cyan-300">Practice</div>
          <h1 className="relative z-10 mb-2 text-3xl font-black text-white">Games</h1>
          <p className="relative z-10 max-w-md text-sm leading-6 text-zinc-200">
            Expand your vocabulary from basic to advanced levels with interactive exercises
          </p>
        </div>

        <div className="mb-4 space-y-2">
          {GAME_CATS.map((category, index) => (
            <div key={category.id} className={`fade-up fade-up-d${Math.min(index + 1, 5)}`}>
              <CategoryCard
                title={category.name}
                description={category.description}
                icon={category.icon}
                color={category.color}
                href={category.href}
                locked={!category.isFree && !premium}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
