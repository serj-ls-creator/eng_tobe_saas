import type { Metadata } from "next";
import { VocabularyAuthGuard } from "@/components/vocabulary/VocabularyAuthGuard";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Personal Vocabulary & Custom Word Sets",
  description: "Save new English words, organize custom vocabulary lists, and practice your personal word bank.",
});

export default function VocabularyLayout({ children }: { children: React.ReactNode }) {
  return <VocabularyAuthGuard>{children}</VocabularyAuthGuard>;
}
