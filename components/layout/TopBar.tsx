import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Flame, Star } from "lucide-react";

import { UI_TEXT } from "@/constants/ui";

interface TopBarProps {
  title?: string;
  backHref?: string;
  showBrand?: boolean;
  points?: number;
  streak?: number;
}

export function TopBar({ title, backHref, showBrand = false, points = 0, streak = 0 }: TopBarProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-[#050505]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-shell items-center justify-between px-4">
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
        <div className="flex items-center gap-1.5 rounded-full bg-yellow-500/10 px-2.5 py-1">
          {showBrand ? (
            <Flame className="h-3.5 w-3.5 animate-fire-pulse text-yellow-400" />
          ) : (
            <Star className="h-3.5 w-3.5 text-yellow-400" />
          )}
          <span className="text-xs font-semibold text-yellow-400">
            {showBrand ? `Day ${streak || 0}` : points.toLocaleString()}
          </span>
        </div>
      </div>
    </header>
  );
}
