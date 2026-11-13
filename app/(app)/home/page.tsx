import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpenText,
  MessageCircleMore,
  Lightbulb,
  Gamepad2,
  Rocket,
  BookOpen,
  BookMarked,
  ChevronRight,
} from "lucide-react";

import { TopBar } from "@/components/layout/TopBar";
import { Card } from "@/components/ui/card";
import { StreakBar } from "@/components/ui/StreakBar";
import { WordOfDayCard } from "@/components/home/WordOfDayCard";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";
import { UI_TEXT } from "@/constants/ui";
import { getCurrentProfileWithPremium } from "@/lib/isPremium";
import { getWordOfTheDay } from "@/data/wordsOfTheDay";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Daily English Practice and Dashboard",
  description: "Continue your daily English learning with words, idioms, sentences, grammar, and interactive games.",
});

const quickLinks = [
  { href: "/words", title: "Words", subtitle: "7 categories", icon: BookOpenText, color: "#00E5FF" },
  { href: "/idioms", title: "Idioms", subtitle: "7 topics", icon: Lightbulb, color: "#F472B6" },
  { href: "/phrasal-verbs", title: "Phrasal verbs", subtitle: "4 topics", icon: Rocket, color: "#A855F7" },
  { href: "/sentences", title: "Sentences", subtitle: "A1 to C2", icon: MessageCircleMore, color: "#34D399" },
  { href: "/grammar", title: "Grammar + Tenses", subtitle: "24 topics", icon: BookOpen, color: "#4FD1FF" },
  { href: "/games", title: "Games", subtitle: "Wordle & more", icon: Gamepad2, color: "#FFD93D" },
];

export default async function AppHomePage() {
  const { profile, premium } = await getCurrentProfileWithPremium();
  const wordOfTheDay = getWordOfTheDay();

  const streakBlock = (
    <div className="fade-up">
      {profile ? (
        <Link href="/profile" className="block">
          <StreakBar isLoggedIn />
        </Link>
      ) : (
        <StreakBar isLoggedIn={false} />
      )}
    </div>
  );

  const wordOfDayBlock = (
    <section className="fade-up fade-up-d4">
      <WordOfDayCard
        title={UI_TEXT.wordOfDayTitle}
        simple={wordOfTheDay.simple}
        synonym={wordOfTheDay.synonym}
        transcription={wordOfTheDay.transcription}
        explanation={wordOfTheDay.explanation}
        isLoggedIn={!!profile}
      />
    </section>
  );

  return (
    <>
      <TopBar showBrand points={profile?.points ?? 0} streak={profile?.total_streak ?? 0} />

      <div className="content-shell pb-6">
        <ErrorBoundary>
          <div className="space-y-4">
            {profile ? streakBlock : wordOfDayBlock}

            <section>
              <h2 className="fade-up fade-up-d2 mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Practice sections
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Link key={item.href} href={item.href}>
                      <Card className={`p-4 transition-colors hover:bg-white/[0.04] fade-up fade-up-d${Math.min(index + 2, 5)}`}>
                        <div
                          className="mb-3 flex h-9 w-9 items-center justify-center rounded-control"
                          style={{ backgroundColor: `${item.color}18`, color: item.color }}
                        >
                          <Icon className="h-4.5 w-4.5" />
                        </div>
                        <div className="text-sm font-medium text-white">{item.title}</div>
                        <div className="mt-0.5 text-xs text-zinc-400">{item.subtitle}</div>
                      </Card>
                    </Link>
                  );
                })}

                <Link href="/vocabulary" className="col-span-2">
                  <Card className="p-4 transition-colors hover:bg-white/[0.04] fade-up fade-up-d5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-control bg-purple-500/15 text-purple-400">
                          <BookMarked className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-white">My Vocabulary</span>
                            <span className="rounded-full bg-purple-500/15 px-2 py-0.5 text-[10px] font-medium text-purple-300">
                              Personal
                            </span>
                          </div>
                          <p className="mt-0.5 truncate text-xs text-zinc-400">
                            Save custom words, search dictionary & practice
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 shrink-0 text-zinc-500" />
                    </div>
                  </Card>
                </Link>
              </div>
            </section>

            {profile ? wordOfDayBlock : streakBlock}

            {!premium ? (
              <section className="pt-1">
                <Card className="fade-up fade-up-d5 p-4">
                  <div className="mb-1 text-sm font-semibold text-white">{UI_TEXT.premiumTitle}</div>
                  <p className="mb-3 text-xs leading-relaxed text-zinc-400">{UI_TEXT.premiumSubtitle}</p>
                  <Link
                    href="/store"
                    className="inline-flex h-10 items-center justify-center rounded-control bg-cyan-400 px-4 text-xs font-semibold text-black transition-colors hover:bg-cyan-300 active:scale-[0.98]"
                  >
                    {UI_TEXT.premiumCta}
                  </Link>
                </Card>
              </section>
            ) : null}
          </div>
        </ErrorBoundary>
      </div>
    </>
  );
}
