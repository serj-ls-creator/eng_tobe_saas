import Link from "next/link";
import { BookOpenText, MessageCircleMore, Lightbulb, User, Gamepad2 } from "lucide-react";

import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
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
    subtitle: "Wordle & more",
    icon: <Gamepad2 className="h-5 w-5" />
  }
];

export default async function HomePage() {
  const profile = await getCurrentProfile();
  const premium = await isPremium();

  return (
    <>
      <TopBar showBrand />
      
      <div className="content-shell relative z-10 overflow-hidden">
        {/* Flying words background - expanded area with visibility mask */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Full screen flying area */}
          <div className="absolute inset-0">
            <div className="flying-word text-lg" style={{ "--op": "0.15", "--dur": "30s", "--mx": "50px", "--my": "0px", "--tilt": "8deg", top: "80vh", left: "10%" } as React.CSSProperties}>Vocabulary</div>
            <div className="flying-word text-base" style={{ "--op": "0.12", "--dur": "27s", "--mx": "-40px", "--my": "0px", "--tilt": "-6deg", top: "60vh", left: "25%" } as React.CSSProperties}>Grammar</div>
            <div className="flying-word text-lg" style={{ "--op": "0.1", "--dur": "33s", "--mx": "60px", "--my": "0px", "--tilt": "10deg", top: "40vh", left: "40%" } as React.CSSProperties}>Practice</div>
            <div className="flying-word text-base" style={{ "--op": "0.14", "--dur": "28.5s", "--mx": "-45px", "--my": "0px", "--tilt": "7deg", top: "70vh", left: "55%" } as React.CSSProperties}>Fluency</div>
            <div className="flying-word text-lg" style={{ "--op": "0.11", "--dur": "31.5s", "--mx": "55px", "--my": "0px", "--tilt": "-8deg", top: "50vh", left: "70%" } as React.CSSProperties}>Success</div>
            <div className="flying-word text-base" style={{ "--op": "0.13", "--dur": "25.5s", "--mx": "-50px", "--my": "0px", "--tilt": "9deg", top: "30vh", left: "85%" } as React.CSSProperties}>English</div>
            <div className="flying-word text-base" style={{ "--op": "0.09", "--dur": "34.5s", "--mx": "40px", "--my": "0px", "--tilt": "-5deg", top: "90vh", left: "15%" } as React.CSSProperties}>Learning</div>
            <div className="flying-word text-sm" style={{ "--op": "0.1", "--dur": "30s", "--mx": "-35px", "--my": "0px", "--tilt": "6deg", top: "20vh", left: "30%" } as React.CSSProperties}>Speaking</div>
            <div className="flying-word text-base" style={{ "--op": "0.08", "--dur": "36s", "--mx": "45px", "--my": "0px", "--tilt": "-7deg", top: "85vh", left: "60%" } as React.CSSProperties}>Writing</div>
            <div className="flying-word text-sm" style={{ "--op": "0.12", "--dur": "27s", "--mx": "-40px", "--my": "0px", "--tilt": "8deg", top: "45vh", left: "75%" } as React.CSSProperties}>Reading</div>
            <div className="flying-word text-base" style={{ "--op": "0.1", "--dur": "33s", "--mx": "50px", "--my": "0px", "--tilt": "-9deg", top: "25vh", left: "90%" } as React.CSSProperties}>Listen</div>
            <div className="flying-word text-sm" style={{ "--op": "0.11", "--dur": "28.5s", "--mx": "-38px", "--my": "0px", "--tilt": "7deg", top: "75vh", left: "45%" } as React.CSSProperties}>Study</div>
            <div className="flying-word text-base" style={{ "--op": "0.1", "--dur": "29s", "--mx": "35px", "--my": "0px", "--tilt": "6deg", top: "55vh", left: "20%" } as React.CSSProperties}>Improve</div>
            <div className="flying-word text-sm" style={{ "--op": "0.09", "--dur": "32s", "--mx": "-42px", "--my": "0px", "--tilt": "-7deg", top: "35vh", left: "65%" } as React.CSSProperties}>Online</div>
          </div>
        </div>

        <div className="relative z-20 overflow-y-auto px-4 pt-4 pb-4">
          <div className="fade-up">
            {profile ? (
              <Link href="/profile">
                <StreakBar isLoggedIn />
              </Link>
            ) : (
              <StreakBar isLoggedIn={false} />
            )}
          </div>

          <section className="mb-5 mt-5 relative">
            <h2 className="fade-up fade-up-d2 mb-3 text-sm font-semibold relative z-10">{UI_TEXT.homeTitle}</h2>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((item, index) => (
                <Link key={item.href} href={item.href}>
                  <Card className={`p-4 fade-up fade-up-d${Math.min(index + 2, 5)}`}>
                    <div className="mb-2 text-cyan-400">{item.icon}</div>
                    <div className="text-base font-medium">{item.title}</div>
                    <div className="text-xs text-zinc-500">{item.subtitle}</div>
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
            <section className="mt-4">
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
      </div>
    </>
  );
}
