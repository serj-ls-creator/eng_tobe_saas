import { notFound } from 'next/navigation';

import { DontPronounceLevelClient } from '@/components/words/DontPronounceLevelClient';
import { SILENT_WORD_LEVELS } from '@/data/words/pronounce/silent_words';

interface PageProps {
  params: {
    levelId: string;
  };
}

export default async function DontPronounceLevelPage({ params }: PageProps) {

  const exists = SILENT_WORD_LEVELS.some((level) => level.id === params.levelId);
  if (!exists) {
    notFound();
  }

  return <DontPronounceLevelClient levelId={params.levelId} />;
}
