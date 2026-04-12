"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpenText, Gamepad2, Home, Lightbulb, MessageCircleMore } from "lucide-react";

import type { NavItem } from "@/types";
import { cn } from "@/lib/utils";

const navItems: NavItem[] = [
  {
    href: "/",
    label: "Home",
    icon: <Home className="h-5 w-5" />,
    match: ["/"]
  },
  {
    href: "/words",
    label: "Words",
    icon: <BookOpenText className="h-5 w-5" />,
    match: ["/words"]
  },
  {
    href: "/sentences",
    label: "Sentences",
    icon: <MessageCircleMore className="h-5 w-5" />,
    match: ["/sentences"]
  },
  {
    href: "/idioms",
    label: "Idioms",
    icon: <Lightbulb className="h-5 w-5" />,
    match: ["/idioms"]
  },
  {
    href: "/games",
    label: "Games",
    icon: <Gamepad2 className="h-5 w-5" />,
    match: ["/games"]
  }
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky bottom-0 z-40 border-t border-white/10 bg-[#050505]/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-shell items-center justify-around px-2">
        {navItems.map((item) => {
          const isActive = item.match?.includes(pathname) ?? pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative flex min-w-0 flex-1 flex-col items-center gap-1 px-1 py-2"
            >
              <span className={cn("text-zinc-600 transition-colors", isActive && "text-white")}>{item.icon}</span>
              <span className={cn("text-[10px] text-zinc-600 transition-colors", isActive && "text-white")}>
                {item.label}
              </span>
              {isActive ? <span className="absolute bottom-0 h-0.5 w-4 rounded-full bg-white" /> : null}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
