import type { Metadata } from "next";
import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { AboutClient } from "@/components/about/AboutClient";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About English to be - Language Learning App",
  description: "Learn English in English with small daily steps and interactive exercises designed for real progress.",
});

export default function AboutPage() {
  return (
    <>
      <TopBar title="About App" />
      <AboutClient />
    </>
  );
}
