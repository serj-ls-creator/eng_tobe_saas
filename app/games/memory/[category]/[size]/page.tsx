'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { TopBar } from '@/components/layout/TopBar';
import { FlyingWordsEng } from '@/components/ui/FlyingWordsEng';
import { usePoints } from '@/lib/usePoints';
import { addPoints } from '@/lib/useAddPoints';
import { completeActivity } from '@/lib/useCompleteActivity';

// ── Word data ────────────────────────────────────────────────────────────────
import { PEOPLE }  from '@/data/words/basicadvanced/people';
import { WORLD }   from '@/data/words/basicadvanced/world';
import { LIFE }    from '@/data/words/basicadvanced/life';
import { MIND }    from '@/data/words/basicadvanced/mind';
import { DIGITAL } from '@/data/words/basicadvanced/digital';

// ── Idiom data ───────────────────────────────────────────────────────────────
import { FOOD_IDIOMS }      from '@/data/idioms/food_idioms';
import { WEATHER_IDIOMS }   from '@/data/idioms/weather_idioms';
import { EMOTIONAL_IDIOMS } from '@/data/idioms/emotional_idioms';
import { BODY_IDIOMS }      from '@/data/idioms/body_parts_idioms';
import { ANIMAL_IDIOMS }    from '@/data/idioms/animal_idioms';
import { BUSINESS_IDIOMS }  from '@/data/idioms/business_idioms';
import { SLANG_IDIOMS }     from '@/data/idioms/slang_idioms';

// ── Types ────────────────────────────────────────────────────────────────────
interface PageProps { params: { category: string; size: string } }

interface MemCard {
  id: number;
  pairId: number;
  text: string;
  type: 'word' | 'meaning';
  isFlipped: boolean;
  isMatched: boolean;
}

// ── Config ───────────────────────────────────────────────────────────────────
function getPairCount(size: string) {
  if (size === '3x4') return 6;
  if (size === '4x4') return 8;
  return 9; // 3x6
}
function getCols(size: string) { return size === '4x4' ? 4 : 3; }

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildWordCards(count: number): MemCard[] {
  const all = [...PEOPLE, ...WORLD, ...LIFE, ...MIND, ...DIGITAL]
    .flatMap(s => s.words)
    .filter((w, i, arr) => arr.findIndex(x => x.basic === w.basic) === i);
  const picked = shuffle(all).slice(0, count);
  const cards: MemCard[] = [];
  picked.forEach((w, i) => {
    cards.push({ id: i * 2,     pairId: i, text: w.basic,    type: 'word',    isFlipped: false, isMatched: false });
    cards.push({ id: i * 2 + 1, pairId: i, text: w.advanced, type: 'meaning', isFlipped: false, isMatched: false });
  });
  return shuffle(cards);
}

function buildIdiomCards(count: number): MemCard[] {
  const all = shuffle([
    ...FOOD_IDIOMS, ...WEATHER_IDIOMS, ...EMOTIONAL_IDIOMS,
    ...BODY_IDIOMS, ...ANIMAL_IDIOMS, ...BUSINESS_IDIOMS, ...SLANG_IDIOMS,
  ]).slice(0, count);
  const cards: MemCard[] = [];
  all.forEach((item, i) => {
    cards.push({ id: i * 2,     pairId: i, text: item.idiom,   type: 'word',    isFlipped: false, isMatched: false });
    cards.push({ id: i * 2 + 1, pairId: i, text: item.meaning, type: 'meaning', isFlipped: false, isMatched: false });
  });
  return shuffle(cards);
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function MemoryGamePage({ params }: PageProps) {
  const { category, size } = params;
  const router = useRouter();

  const pairCount  = getPairCount(size);
  const cols       = getCols(size);
  const isIdioms   = category === 'idioms';
  const accent     = isIdioms ? '#A855F7' : '#00E5FF';
  const accentRgb  = isIdioms ? '168,85,247' : '0,229,255';
  const sizeLabel  = size.replace('x', ' × ');
  const catLabel   = isIdioms ? 'Idioms' : 'Words';

  const points = usePoints();
  const [cards, setCards]             = useState<MemCard[]>([]);
  const [flipped, setFlipped]         = useState<number[]>([]);
  const [locked, setLocked]           = useState(false);
  const [moves, setMoves]             = useState(0);
  const [matched, setMatched]         = useState(0);
  const [showResult, setShowResult]   = useState(false);
  const [mounted, setMounted]         = useState(false);

  const initGame = useCallback(() => {
    const newCards = isIdioms ? buildIdiomCards(pairCount) : buildWordCards(pairCount);
    setCards(newCards);
    setFlipped([]);
    setLocked(false);
    setMoves(0);
    setMatched(0);
    setShowResult(false);
  }, [isIdioms, pairCount]);

  useEffect(() => { setMounted(true); initGame(); }, [initGame]);

  const handleCardClick = useCallback((index: number) => {
    if (locked || cards[index].isFlipped || cards[index].isMatched || flipped.length === 2) return;

    const next = cards.map((c, i) => i === index ? { ...c, isFlipped: true } : c);
    setCards(next);
    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length < 2) return;

    setMoves(m => m + 1);
    const [a, b] = newFlipped;

    if (next[a].pairId === next[b].pairId) {
      // ✅ Match
      setTimeout(() => {
        setCards(prev => prev.map((c, i) =>
          i === a || i === b ? { ...c, isMatched: true } : c
        ));
        setMatched(m => {
          const n = m + 1;
          if (n === pairCount) {
            addPoints(10);
            completeActivity();
            setTimeout(() => setShowResult(true), 500);
          }
          return n;
        });
        setFlipped([]);
      }, 400);
    } else {
      // ❌ No match — flip back after 1 second
      setLocked(true);
      setTimeout(() => {
        setCards(prev => prev.map((c, i) =>
          i === a || i === b ? { ...c, isFlipped: false } : c
        ));
        setFlipped([]);
        setLocked(false);
      }, 1000);
    }
  }, [locked, cards, flipped, pairCount]);

  if (!mounted || cards.length === 0) {
    return (
      <div className="h-screen bg-black text-white flex items-center justify-center">
        <p className="text-zinc-500">Loading…</p>
      </div>
    );
  }

  return (
    <div className="h-screen bg-black text-white flex flex-col overflow-hidden relative">

      {/* ── Keyframes injected once */}
      <style>{`
        @keyframes gradientMoveCard {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes shakeCard {
          0%,100% { transform: rotateY(180deg) rotateZ(0deg); }
          25%     { transform: rotateY(180deg) rotateZ(-1.5deg); }
          75%     { transform: rotateY(180deg) rotateZ(1.5deg); }
        }
      `}</style>

      <div className="relative z-10 flex flex-col h-full">
        <TopBar points={points} />

        <div className="flex flex-col flex-1 px-3 py-2 max-w-lg mx-auto w-full overflow-hidden">

          {/* Header */}
          <div className="flex items-center justify-between mb-2 shrink-0">
            <Link href="/games/memory" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
              ← Back
            </Link>
            <div className="text-center">
              <span className="text-xs font-semibold text-white">Memory</span>
              <span className="text-zinc-600 text-xs"> · {catLabel} · {sizeLabel}</span>
            </div>
            <div className="text-xs font-semibold" style={{ color: accent }}>
              {matched}/{pairCount}
            </div>
          </div>

          {/* Grid — flying words clipped to this area only */}
          <div
            className="flex-1 grid gap-1.5 min-h-0 relative overflow-hidden"
            style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
          >
            {/* Flying words visible only inside grid bounds */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <FlyingWordsEng />
            </div>

            {cards.map((card, index) => (
              <MemCardTile
                key={card.id}
                card={card}
                accent={accent}
                accentRgb={accentRgb}
                isIdiom={isIdioms}
                onClick={() => handleCardClick(index)}
              />
            ))}
          </div>

          {/* Footer */}
          <div className="shrink-0 mt-1.5 text-center text-[10px] text-zinc-700">
            {moves} moves
          </div>
        </div>
      </div>

      {/* Result modal */}
      {showResult && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center p-6 z-50">
          <div className="w-full max-w-sm bg-slate-900 border border-white/10 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-green-400 mb-2">All matched!</h2>
            <p className="text-zinc-400 text-sm mb-6">
              Completed in <span className="text-white font-semibold">{moves}</span> moves
            </p>
            <div className="space-y-3">
              <button
                onClick={initGame}
                className="w-full py-3 rounded-xl font-bold text-sm text-black transition-colors"
                style={{ backgroundColor: accent }}
              >
                Play Again
              </button>
              <button
                onClick={() => router.push('/games/memory')}
                className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition-colors"
              >
                Change Size
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Card tile — copies FlipCard aesthetics ────────────────────────────────────
interface TileProps {
  card: MemCard;
  accent: string;
  accentRgb: string;
  isIdiom: boolean;
  onClick: () => void;
}

function MemCardTile({ card, accent, accentRgb, isIdiom, onClick }: TileProps) {
  const { isFlipped, isMatched, text, type } = card;
  const faceUp = isFlipped || isMatched;

  // Adaptive font size — idioms get larger minimum
  const fs = isIdiom
    ? (text.length > 40 ? '9px'
     : text.length > 28 ? '10px'
     : text.length > 16 ? '12px'
     : '14px')
    : (text.length > 35 ? '9px'
     : text.length > 25 ? '10px'
     : text.length > 15 ? '12px'
     : text.length > 8  ? '14px'
     : '15px');

  const typeLabel = type === 'word'
    ? (isIdiom ? 'idiom' : 'word')
    : (isIdiom ? 'meaning' : 'advanced');

  return (
    <div
      className="relative w-full h-full cursor-pointer select-none"
      style={{ perspective: '1500px', position: 'relative', zIndex: 1 }}
      onClick={onClick}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          // Exact same easing as FlipCard
          transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
          transformStyle: 'preserve-3d',
          transform: faceUp ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* ── Back face: dark with ? */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            background: 'rgba(15,23,42,0.40)',
            borderRadius: '12px',
            border: `1px solid rgba(${accentRgb},0.40)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              fontSize: '1.5rem',
              fontWeight: 900,
              color: accent,
              opacity: 0.70,
              userSelect: 'none',
            }}
          >
            ?
          </span>
        </div>

        {/* ── Front face: matched = green, else accent gradient + shake */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            borderRadius: '12px',
            border: `1px solid ${isMatched ? 'rgba(34,197,94,0.55)' : `rgba(${accentRgb},0.35)`}`,
            background: isMatched
              ? 'rgba(5,46,22,0.50)'
              : 'linear-gradient(135deg, rgba(15,23,42,0.60) 0%, rgba(30,41,59,0.60) 50%, rgba(15,23,42,0.60) 100%)',
            backgroundSize: '200% 200%',
            boxShadow: isMatched
              ? '0 0 20px rgba(34,197,94,0.20)'
              : faceUp
                ? `0 0 20px rgba(${accentRgb},0.15)`
                : 'none',
            transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
            // gradientMove + shake exactly like FlipCard
            animation: isMatched
              ? 'none'
              : faceUp
                ? 'gradientMoveCard 6s ease infinite, shakeCard 0.3s ease-in-out'
                : 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '4px',
            overflow: 'hidden',
          }}
        >
          {/* Type label — pinned to top */}
          <span
            style={{
              position: 'absolute',
              top: '4px',
              left: 0,
              right: 0,
              textAlign: 'center',
              fontSize: '7px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: isMatched ? '#4ade80' : '#64748b',
            }}
          >
            {typeLabel}
          </span>

          {/* Main text — centered in card */}
          <p
            style={{
              fontSize: fs,
              fontWeight: type === 'meaning' ? 700 : 600,
              color: isMatched ? '#86efac' : type === 'meaning' ? '#ffffff' : '#cbd5e1',
              textAlign: 'center',
              margin: 0,
              lineHeight: 1.3,
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
              width: '100%',
              paddingTop: '10px',
              // max 3 lines
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            } as React.CSSProperties}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
