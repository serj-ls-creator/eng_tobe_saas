import { notFound } from 'next/navigation';

import { PronunciationLevelClient } from '@/components/words/PronunciationLevelClient';
import { PRONUNCIATION_LEVELS } from '@/data/words/pronounce/pronunciation';

interface PageProps {
  params: {
    levelId: string;
  };
}

export default async function PronunciationLevelPage({ params }: PageProps) {
  const exists = PRONUNCIATION_LEVELS.some((level) => level.id === params.levelId);
  if (!exists) {
    notFound();
  }

  return <PronunciationLevelClient levelId={params.levelId} />;
}
