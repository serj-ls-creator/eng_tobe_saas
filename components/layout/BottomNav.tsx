"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Brain, ShoppingBag, Settings, User, Home } from "lucide-react";

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
    href: "/recall",
    label: "Recall",
    icon: <Brain className="h-5 w-5" />,
    match: ["/recall"]
  },
  {
    href: "/profile",
    label: "Profile",
    icon: <User className="h-5 w-5" />,
    match: ["/profile"]
  },
  {
    href: "/store",
    label: "Store",
    icon: <ShoppingBag className="h-5 w-5" />,
    match: ["/store"]
  },
  {
    href: "/settings",
    label: "Settings",
    icon: <Settings className="h-5 w-5" />,
    match: ["/settings"]
  }
];

export function BottomNav() {
  const pathname = usePathname();

  // Hide bottom nav on activity pages
  const isActivityPage = pathname.includes('/activities') || 
                         pathname.includes('/cards') ||
                         pathname.includes('/transcribe') ||
                         pathname.includes('/unscramble') ||
                         pathname.includes('/quiz') ||
                         pathname.includes('/match') ||
                         pathname.includes('/synonym-pair') ||
                         pathname.includes('/multiple-choice') ||
                         pathname.includes('/letter-hunt');

  if (isActivityPage) {
    return null;
  }

  return (
    <nav className="sticky bottom-0 z-40 border-t border-white/10 bg-[#050505]/95 backdrop-blur-xl">
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
