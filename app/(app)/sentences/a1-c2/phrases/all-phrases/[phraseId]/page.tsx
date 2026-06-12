import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { A1_C2_PHRASES } from '@/data/sentences/a1-c2-phrases';
import { PhraseClient } from './PhraseClient';

interface PageProps {
  params: {
    phraseId: string;
  };
}

// 1. Statically generate paths for all phrases at build time (SSG)
export function generateStaticParams() {
  return A1_C2_PHRASES.map((phrase) => ({
    phraseId: phrase.id,
  }));
}

// 2. Generate dynamic, search-engine-optimized metadata for each page (SEO)
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { phraseId } = params;
  const phrase = A1_C2_PHRASES.find(p => p.id === phraseId);
  
  if (!phrase) {
    return {
      title: 'Phrase Not Found | Tobee',
    };
  }

  return {
    title: `How to say: "${phrase.title}" in English (A1-C2) | Tobee`,
    description: `Learn how to express "${phrase.title}" in English across all CEFR levels from A1 to C2. Perfect pronunciation and context-appropriate examples on Tobee.`,
    keywords: [phrase.title, 'english phrases', 'CEFR levels', 'learn english', 'Tobee phrases'],
  };
}

// 3. React Server Component (RSC) page
export default async function PhrasePage({ params }: PageProps) {
  const { phraseId } = params;
  
  const phrase = A1_C2_PHRASES.find(p => p.id === phraseId);
  if (!phrase) {
    notFound();
  }

  return <PhraseClient phrase={phrase} />;
}
