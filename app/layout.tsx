import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { BottomNav } from "@/components/layout/BottomNav";
import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "English to be",
  description: "Mobile-first English learning SaaS with freemium access."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="app-shell bg-background">
          <main className="flex-1">{children}</main>
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
