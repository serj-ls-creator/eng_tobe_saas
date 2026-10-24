"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Flame, Menu, Star, X } from "lucide-react";

import { UI_TEXT } from "@/constants/ui";
import { Progress } from "@/components/ui/progress";

interface TopBarProps {
  title?: string;
  backHref?: string;
  showBrand?: boolean;
  points?: number;
  streak?: number;
}

const POINTS_GOAL = 20000;

export function TopBar({ title, backHref, showBrand = false, points = 0, streak = 0 }: TopBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPointsModal, setShowPointsModal] = useState(false);
  const [showStreakModal, setShowStreakModal] = useState(false);
  const menuItems = [
    { label: "Home", href: "/home" },
    { label: "Words", href: "/words" },
    { label: "Sentences", href: "/sentences" },
    { label: "Phrasal verbs", href: "/phrasal-verbs" },
    { label: "Idioms", href: "/idioms" },
    { label: "Grammar + Tenses", href: "/grammar" },
    { label: "Games", href: "/games" },
    { label: "My Vocabulary", href: "/vocabulary" },
    { label: "Recall", href: "/recall" },
    { label: "Profile", href: "/profile" },
    { label: "Store", href: "/store" },
    { label: "More", href: "/more" },
  ];

  const pointsForDisplay = Math.min(points, POINTS_GOAL);
  const pointsProgress = Math.min((points / POINTS_GOAL) * 100, 100);

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-border bg-background backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-[430px] items-center justify-between px-4">
          <div className="flex items-center gap-2">
            {backHref ? (
              <Link href={backHref} className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/5">
                <ChevronLeft className="h-5 w-5 text-zinc-400" />
              </Link>
            ) : null}
            {showBrand ? (
              <>
                <Image src="/logo.svg" alt={UI_TEXT.appName} width={32} height={32} />
                <div>
                  <h1 className="text-base font-bold">{UI_TEXT.appName}</h1>
                  <p className="text-[11px] text-zinc-500">{UI_TEXT.homeSubtitle}</p>
                </div>
              </>
            ) : (
              <span className="text-sm font-semibold">{title}</span>
            )}
          </div>

          <div className="ml-auto mr-2 flex shrink-0 items-center gap-2">
            {/* Points counter — shown on every page */}
            <button
              type="button"
              onClick={() => setShowPointsModal(true)}
              aria-label="View points info"
              className="flex items-center gap-1.5 rounded-full bg-yellow-500/10 px-2.5 py-1 transition-colors hover:bg-yellow-500/20"
            >
              <Star className="h-3.5 w-3.5 text-yellow-400" />
              <span className="text-xs font-semibold text-yellow-400">
                {points.toLocaleString('en-US')}
              </span>
            </button>

            {/* Streak counter — only on the home page, to the right of the points pill */}
            {showBrand ? (
              <button
                type="button"
                onClick={() => setShowStreakModal(true)}
                aria-label="View streak info"
                className="flex items-center gap-1.5 rounded-full bg-yellow-500/10 px-2.5 py-1 transition-colors hover:bg-yellow-500/20"
              >
                <Flame className="h-3.5 w-3.5 animate-fire-pulse text-yellow-400" />
                <span className="text-xs font-semibold text-yellow-400">
                  {`Day ${streak || 0}`}
                </span>
              </button>
            ) : null}
          </div>

          <div className={`relative shrink-0 ${menuOpen ? "z-50" : ""}`}>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="app-page-menu"
              onClick={() => setMenuOpen((open) => !open)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-300 transition-colors hover:border-white/20 hover:text-white"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            {menuOpen && (
              <>
                <button
                  type="button"
                  aria-label="Close menu"
                  className="fixed inset-0 z-40 cursor-default"
                  onClick={() => setMenuOpen(false)}
                />
                <nav id="app-page-menu" className="absolute right-0 top-full z-50 mt-2 max-h-[min(75vh,34rem)] w-56 overflow-y-auto rounded-2xl border border-white/10 bg-zinc-900 py-2 shadow-xl shadow-black/40">
                  {menuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-neutral-300 transition-colors hover:bg-white/[0.06] hover:text-white"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Points tooltip modal */}
      {showPointsModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm"
          onClick={() => setShowPointsModal(false)}
        >
          <div
            className="w-full max-w-sm rounded-3xl border border-white/15 bg-zinc-900 p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <div className="flex items-start gap-2">
                <Star className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400" />
                <div>
                  <h2 className="text-lg font-bold text-white">Earn points for every activity</h2>
                  <p className="mt-2 text-sm text-zinc-400">
                    Collect 20,000 to get Premium for 1 month.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowPointsModal(false)}
                aria-label="Close"
                className="rounded-full p-1 text-zinc-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-5">
              <div className="mb-2 text-xs font-semibold text-yellow-400">
                {pointsForDisplay.toLocaleString('en-US')} / 20,000
              </div>
              <Progress value={pointsProgress} />
            </div>

            <Link
              href="/store"
              onClick={() => setShowPointsModal(false)}
              className="mt-5 flex h-11 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-4 text-sm font-bold text-black transition-opacity hover:opacity-95"
            >
              Go to Store
            </Link>
          </div>
        </div>
      )}

      {/* Streak tooltip modal */}
      {showStreakModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm"
          onClick={() => setShowStreakModal(false)}
        >
          <div
            className="w-full max-w-sm rounded-3xl border border-white/15 bg-zinc-900 p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <div className="flex items-start gap-2">
                <Flame className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400" />
                <div>
                  <h2 className="text-lg font-bold text-white">Total days without skips</h2>
                  <p className="mt-2 text-sm text-zinc-400">
                    Practice every day to keep your streak alive.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowStreakModal(false)}
                aria-label="Close"
                className="rounded-full p-1 text-zinc-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-5 flex items-center justify-center gap-2">
              <Flame className="h-7 w-7 animate-fire-pulse text-yellow-400" />
              <span className="text-4xl font-bold text-white">{streak || 0}</span>
              <span className="mb-1 self-end text-sm text-zinc-500">days</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
