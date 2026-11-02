import type { Metadata } from "next";

export const APP_NAME = "English to be";
export const TITLE_SUFFIX = ` | ${APP_NAME}`;
export const DEFAULT_TITLE = "Learn English - Small steps. Real progress! | English to be";
export const DEFAULT_DESCRIPTION =
  "Learn English step by step with daily vocabulary, grammar rules, and fun interactive practice.";

interface PageMetadataInput {
  title: string;
  description?: string;
}

/**
 * Normalizes title string by removing duplicate "| English to be" suffix
 * if already present, ensuring clean output with Next.js root layout title template (%s | English to be).
 */
export function normalizeTitle(title: string): string {
  const trimmed = title.trim();
  if (trimmed.endsWith(TITLE_SUFFIX)) {
    return trimmed.slice(0, -TITLE_SUFFIX.length).trim();
  }
  return trimmed;
}

/**
 * Builds standard metadata for static and dynamic pages.
 * Works seamlessly with Next.js title template (%s | English to be).
 */
export function createPageMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
}: PageMetadataInput): Metadata {
  const cleanTitle = normalizeTitle(title);
  const fullTitle = `${cleanTitle}${TITLE_SUFFIX}`;

  return {
    title: cleanTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      siteName: APP_NAME,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
