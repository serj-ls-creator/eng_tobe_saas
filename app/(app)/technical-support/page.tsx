import type { Metadata } from "next";
import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { TechnicalSupportClient } from "@/components/technical-support/TechnicalSupportClient";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Technical Support and Troubleshooting",
  description: "Find help with sign-in issues, mobile layout problems, sound settings, and technical questions.",
});

export default function TechnicalSupportPage() {
  return (
    <>
      <TopBar title="Technical Support" />
      <TechnicalSupportClient />
    </>
  );
}
