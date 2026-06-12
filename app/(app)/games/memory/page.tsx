'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { TopBar } from '@/components/layout/TopBar';
import { Card } from '@/components/ui/card';
import { Brain, Lightbulb } from 'lucide-react';
import { usePoints } from '@/lib/usePoints';

const CATEGORIES = [
  { id: 'words',  label: 'Words',  desc: 'Basic → Advanced', color: '#00E5FF', Icon: Brain     },
  { id: 'idioms', label: 'Idioms', desc: 'Idiom → Meaning',   color: '#A855F7', Icon: Lightbulb },
];

const SIZES = [
  { id: '3x4', label: '3 × 4', desc: '6 pairs · Easy'   },
  { id: '4x4', label: '4 × 4', desc: '8 pairs · Medium' },
  { id: '3x6', label: '3 × 6', desc: '9 pairs · Hard'   },
];

export default function MemorySetupPage() {
  const router = useRouter();
  const points = usePoints();
  const [selectedCat, setSelectedCat] = useState<string | null>(null);

  const accent = selectedCat === 'idioms' ? '#A855F7' : '#00E5FF';

  return (
    <>
      <TopBar points={points} />
      <div className="content-shell pb-8">
        <div className="mb-4">
          <Link href="/games" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
            ← Back to Games
          </Link>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Memory</h1>
          <p className="text-zinc-400 text-sm">Find matching pairs to win</p>
        </div>

        {/* Step 1 — Category */}
        <div className="mb-6">
          <div className="mb-2 text-[10px] uppercase tracking-[0.3em] text-zinc-600">Category</div>
          <div className="grid grid-cols-2 gap-3">
            {CATEGORIES.map(({ id, label, desc, color, Icon }, index) => {
              const active = selectedCat === id;
              return (
                <button
                  key={id}
                  onClick={() => setSelectedCat(id)}
                  className={`fade-up fade-up-d${index + 1} text-left p-4 rounded-xl border transition-all duration-200 w-full`}
                  style={{
                    borderColor: active ? color : 'rgba(255,255,255,0.22)',
                    background:  active ? `${color}12` : 'rgba(15,23,42,0.8)',
                    boxShadow:   active ? `0 0 20px ${color}20` : 'none',
                  }}
                >
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-lg mb-3"
                    style={{ backgroundColor: `${color}20` }}
                  >
                    <Icon className="h-4 w-4" style={{ color }} />
                  </div>
                  <div className="text-sm font-semibold text-white mb-0.5">{label}</div>
                  <div className="text-[11px] text-zinc-500">{desc}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2 — Difficulty */}
        <div
          className="transition-opacity duration-300"
          style={{ opacity: selectedCat ? 1 : 0.3, pointerEvents: selectedCat ? 'auto' : 'none' }}
        >
          <div className="mb-2 text-[10px] uppercase tracking-[0.3em] text-zinc-600">Difficulty</div>
          <div className="grid grid-cols-3 gap-3">
            {SIZES.map(({ id, label, desc }, index) => (
              <div key={id} className={`fade-up fade-up-d${index + 3}`}>
                <button
                  onClick={() => selectedCat && router.push(`/games/memory/${selectedCat}/${id}`)}
                  disabled={!selectedCat}
                  className="w-full"
                >
                  <Card className="p-4 text-center hover:border-white/20 transition-colors cursor-pointer active:scale-[0.97]">
                    <div className="text-lg font-black mb-1" style={{ color: accent }}>{label}</div>
                    <div className="text-[10px] text-zinc-500 leading-snug">{desc}</div>
                  </Card>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 p-4 rounded-xl bg-slate-900/60 border border-white/5">
          <p className="text-xs text-zinc-500 text-center leading-relaxed">
            Tap a card to flip · Find its pair · Match all to win
          </p>
        </div>
      </div>
    </>
  );
}
