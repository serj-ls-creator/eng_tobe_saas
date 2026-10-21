"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { BottomNav } from "@/components/layout/BottomNav";

const routeThemes: Array<[string, string]> = [
  ["/vocabulary", "vocabulary"],
  ["/phrasal-verbs", "phrasal-verbs"],
  ["/idioms", "idioms"],
  ["/sentences/phrasal-verbs", "phrasal-verbs"],
  ["/sentences", "sentences"],
  ["/games", "games"],
  ["/grammar", "grammar"],
  ["/words", "words"],
  ["/recall", "words"],
  ["/profile", "profile"],
  ["/store", "store"],
  ["/premium", "store"],
  ["/more", "more"],
  ["/technical-support", "more"],
  ["/about", "more"],
  ["/contact", "more"],
  ["/delete-account", "more"],
  ["/auth", "more"],
  ["/home", "home"]
];

function getRouteTheme(pathname: string) {
  return routeThemes.find(([prefix]) => pathname === prefix || pathname.startsWith(`${prefix}/`))?.[1] ?? "home";
}

export function ThemedAppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="app-shell" data-theme={getRouteTheme(pathname)}>
      <main className="flex-1">{children}</main>
      <BottomNav />
    </div>
  );
}
