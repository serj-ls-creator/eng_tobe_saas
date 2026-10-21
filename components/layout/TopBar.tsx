"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Flame, Menu, Star, X } from "lucide-react";

import { UI_TEXT } from "@/constants/ui";

interface TopBarProps {
  title?: string;
  backHref?: string;
  showBrand?: boolean;
  points?: number;
  streak?: number;
}

export function TopBar({ title, backHref, showBrand = false, points = 0, streak = 0 }: TopBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
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

  return (
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
        <div className="ml-auto mr-2 flex shrink-0 items-center gap-1.5 rounded-full bg-yellow-500/10 px-2.5 py-1">
          {showBrand ? (
            <Flame className="h-3.5 w-3.5 animate-fire-pulse text-yellow-400" />
          ) : (
            <Star className="h-3.5 w-3.5 text-yellow-400" />
          )}
          <span className="text-xs font-semibold text-yellow-400">
            {showBrand ? `Day ${streak || 0}` : points.toLocaleString('en-US')}
          </span>
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
  );
}
