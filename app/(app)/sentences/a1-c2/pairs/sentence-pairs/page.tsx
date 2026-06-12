import { Metadata } from 'next';
import SentencePairsGame from './SentencePairsGame';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Sentence Pairs Game',
};

export default function SentencePairsPage() {
  return <SentencePairsGame />;
}
