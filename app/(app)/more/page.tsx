import type { Metadata } from "next";
import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { MoreClient } from "@/components/more/MoreClient";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "More Learning Tools and Resources",
  description: "Explore extra English learning resources, app settings, support, and legal information.",
});

export default function MorePage() {
  return (
    <>
      <TopBar title="More" />
      <MoreClient />
    </>
  );
}
