import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { BottomNav } from "@/components/layout/BottomNav";
import { PwaRegister } from "@/components/pwa/PwaRegister";
import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "English to be",
  description: "Mobile-first English learning SaaS with freemium access.",
  applicationName: "English to be",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "English to be"
  },
  formatDetection: {
    telephone: false
  }
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <PwaRegister />
        <div className="app-shell bg-background">
          <main className="flex-1">{children}</main>
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
