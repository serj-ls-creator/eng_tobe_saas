import { notFound, redirect } from 'next/navigation';

import { NegotiationQuestClient } from '@/components/games/NegotiationQuestClient';
import { perfectSuitQuest } from '@/data/games/negotiation/perfect-suit';
import { isPremium } from '@/lib/isPremium';

interface PageProps {
  params: {
    questId: string;
  };
}

export default async function NegotiationQuestPage({ params }: PageProps) {
  const premium = await isPremium();

  if (!premium) {
    redirect('/premium');
  }

  if (params.questId !== perfectSuitQuest.id) {
    notFound();
  }

  return <NegotiationQuestClient quest={perfectSuitQuest} />;
}
