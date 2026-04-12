import Link from "next/link";
import { BookOpenText, Gamepad2, Lightbulb, MessageCircleMore } from "lucide-react";

import { TopBar } from "@/components/layout/TopBar";
import { Card } from "@/components/ui/card";
import { StreakBar } from "@/components/ui/StreakBar";
import { UI_TEXT } from "@/constants/ui";
import { getCurrentProfile, isPremium } from "@/lib/isPremium";

const quickLinks = [
  {
    href: "/words",
    title: "Words",
    subtitle: "8 categories",
    icon: <BookOpenText className="h-5 w-5" />
  },
  {
    href: "/sentences",
    title: "Sentences",
    subtitle: "A1 to C2",
    icon: <MessageCircleMore className="h-5 w-5" />
  },
  {
    href: "/idioms",
    title: "Idioms",
    subtitle: "7 topics",
    icon: <Lightbulb className="h-5 w-5" />
  },
  {
    href: "/games",
    title: "Games",
    subtitle: "Coming soon",
    icon: <Gamepad2 className="h-5 w-5" />
  }
];

export default async function HomePage() {
  const profile = await getCurrentProfile();
  const premium = await isPremium();

  return (
    <>
      <TopBar showBrand />
      <div className="content-shell">
        <div className="fade-up">
          <StreakBar streak={profile?.streak ?? 7} completedTasks={2} totalTasks={4} />
        </div>

        <section className="mb-5 mt-5">
          <h2 className="fade-up fade-up-d2 mb-3 text-sm font-semibold">{UI_TEXT.homeTitle}</h2>
          <div className="grid grid-cols-2 gap-2">
            {quickLinks.map((item, index) => (
              <Link key={item.href} href={item.href}>
                <Card className={`p-3.5 fade-up fade-up-d${Math.min(index + 2, 5)}`}>
                  <div className="mb-1.5 text-cyan-400">{item.icon}</div>
                  <div className="text-sm font-medium">{item.title}</div>
                  <div className="text-[10px] text-zinc-500">{item.subtitle}</div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        <section className="fade-up fade-up-d4">
          <div className="relative group overflow-hidden rounded-2xl p-[1px]">
            {/* Медленная обводка (6 секунд) */}
            <div 
              className="absolute inset-[-500%] animate-[spin_6s_linear_infinite] 
                         bg-[conic-gradient(from_90deg_at_50%_50%,#00f2ff_0%,#7000ff_50%,#00f2ff_100%)]" 
            />
            
            {/* Существующий Card без изменений */}
            <Card className="relative h-full w-full rounded-[14px] overflow-hidden border-2 border-transparent bg-[linear-gradient(#0a0a0a,#0a0a0a),conic-gradient(from_0deg,#FF3D71,#A855F7,#00E5FF,#FF3D71)] bg-origin-border bg-clip-padding p-4">
              <div className="mb-2 text-[10px] uppercase tracking-[0.3em] text-zinc-500">{UI_TEXT.wordOfDayTitle}</div>
              <div className="mb-1 flex items-center gap-2">
                <span className="text-sm text-zinc-500 line-through">{UI_TEXT.wordOfDayBefore}</span>
                <span className="text-cyan-400">-&gt;</span>
              </div>
              <div className="text-lg font-semibold">{UI_TEXT.wordOfDayAfter}</div>
              <div className="mt-1 text-[11px] text-zinc-500">{UI_TEXT.wordOfDayDescription}</div>
            </Card>
          </div>
        </section>

        {!premium ? (
          <section className="mt-5">
            <Card className="fade-up fade-up-d5 p-4">
              <div className="mb-2 text-sm font-semibold">{UI_TEXT.premiumTitle}</div>
              <p className="mb-4 text-xs leading-relaxed text-zinc-500">{UI_TEXT.premiumSubtitle}</p>
              <Link
                href="/premium"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-cyan-400 px-4 text-sm font-semibold text-black"
              >
                {UI_TEXT.premiumCta}
              </Link>
            </Card>
          </section>
        ) : null}
      </div>
    </>
  );
}
