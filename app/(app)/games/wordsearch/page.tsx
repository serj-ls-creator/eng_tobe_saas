'use client';

import Link from 'next/link';
import { TopBar } from '@/components/layout/TopBar';
import { Card } from '@/components/ui/card';
import { usePoints } from '@/lib/usePoints';

const LEVELS = [
  { length: 4, label: 'Easy', color: '#00E5FF', description: '4 letters per word' },
  { length: 5, label: 'Normal', color: '#A855F7', description: '5 letters per word' },
  { length: 6, label: 'Hard', color: '#FFD93D', description: '6 letters per word' },
  { length: 7, label: 'Expert', color: '#FF3D71', description: '7 letters per word' },
  { length: 'mix', label: 'Mix', color: '#34D399', description: '4, 5, 6 and 7 letters' },
];

export default function WordsearchPage() {
  const points = usePoints();
  return (
    <>
      <TopBar points={points} />
      <div className="content-shell pb-8">
        <div className="mb-6">
          <Link href="/games" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">← Back to Games</Link>
        </div>
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-white">Wordsearch</h1>
          <p className="text-sm text-zinc-400">Find all the hidden words</p>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-zinc-500">
            Touch the first letter and drag your finger to the last. Words can go across, down, or diagonally. They can go both ways.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {LEVELS.map(({ length, label, color, description }) => (
            <Link key={length} href={`/games/wordsearch/${length}`} className={length === 'mix' ? 'col-span-2 mx-auto w-1/2' : ''}>
              <Card className="cursor-pointer p-6 text-center transition-colors hover:border-white/20">
                <div className="mb-2 text-4xl font-black" style={{ color }}>{typeof length === 'number' ? length : 'Mix'}</div>
                <div className="mb-1 text-sm font-semibold text-white">{label}</div>
                <div className="text-xs text-zinc-500">{description}</div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
