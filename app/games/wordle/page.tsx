'use client';
import Link from 'next/link';
import { TopBar } from '@/components/layout/TopBar';
import { Card } from '@/components/ui/card';
import { usePoints } from '@/lib/usePoints';

export default function WordlePage() {
  const points = usePoints();
  return (
    <>
      <TopBar points={points} />
      <div className="content-shell">
        <div className="mb-6">
          <Link href="/games" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
            ← Back to Games
          </Link>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Wordle</h1>
          <p className="text-zinc-400 text-sm">Guess the hidden word in 6 tries</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { letters: 5, color: '#00E5FF', label: 'Easy', desc: '5 letters' },
            { letters: 6, color: '#A855F7', label: 'Medium', desc: '6 letters' },
            { letters: 7, color: '#FFD93D', label: 'Hard', desc: '7 letters' },
            { letters: 8, color: '#FF3D71', label: 'Expert', desc: '8 letters' },
          ].map(({ letters, color, label, desc }) => (
            <Link key={letters} href={`/games/wordle/${letters}`}>
              <Card className="p-6 text-center hover:border-white/20 transition-colors cursor-pointer">
                <div className="text-4xl font-black mb-2" style={{ color }}>{letters}</div>
                <div className="text-white font-semibold text-sm mb-1">{label}</div>
                <div className="text-zinc-500 text-xs">{desc}</div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-8 p-4 rounded-xl bg-slate-900/60 border border-white/5">
          <p className="text-xs text-zinc-500 text-center leading-relaxed">
            Each color shows how close your guess is.<br />
            <span className="text-green-400">Green</span> = correct position ·{' '}
            <span className="text-yellow-400">Yellow</span> = wrong position ·{' '}
            <span className="text-zinc-600">Grey</span> = not in word
          </p>
        </div>
      </div>
    </>
  );
}
