'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { TopBar } from '@/components/layout/TopBar';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CompletionModal } from '@/components/ui/CompletionModal';
import { FlyingWords } from '@/components/ui/FlyingWords';
import { getIdiomsByLevel, type IdiomCategory } from '@/lib/idioms';
import { IDIOM_CATS } from '@/constants/categories';
import { usePoints } from '@/lib/usePoints';

interface PageProps {
  params: {
    categoryId: string;
    levelId: string;
  };
}

type AnswerState = 'idle' | 'correct' | 'wrong';

function shuffleArray<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Build the word-level puzzle for one idiom.
 * - hiddenIndices: word positions in the idiom that are blanked out
 * - wordPool: shuffled array of { word, id } — missing words + decoys from wrong answers
 */
function buildPuzzle(idiom: string, wrong: string[]) {
  const words = idiom.split(' ');
  const len = words.length;

  // Hide roughly half the words (min 1, max len-1)
  const hideCount = Math.max(1, Math.min(len - 1, Math.ceil(len / 2)));

  const allIndices = Array.from({ length: len }, (_, i) => i);
  const hiddenIndices = shuffleArray(allIndices).slice(0, hideCount);

  const missingWords = hiddenIndices.map(i => words[i]);

  // Collect decoy words from wrong answers — split each wrong answer into words,
  // pick words not already in the missing pool
  const decoyCount = Math.min(3, hideCount);
  const decoys: string[] = [];
  const missingSet = new Set(missingWords.map(w => w.toLowerCase()));

  for (const wrongAnswer of wrong) {
    for (const w of wrongAnswer.split(' ')) {
      if (decoys.length >= decoyCount) break;
      const clean = w.replace(/[^a-zA-Z']/g, '');
      if (clean.length > 1 && !missingSet.has(clean.toLowerCase())) {
        decoys.push(clean);
        missingSet.add(clean.toLowerCase());
      }
    }
    if (decoys.length >= decoyCount) break;
  }

  const pool = shuffleArray([
    ...missingWords.map((word, i) => ({ word, id: `m-${i}` })),
    ...decoys.map((word, i) => ({ word, id: `d-${i}` })),
  ]);

  return { hiddenIndices: new Set(hiddenIndices), pool };
}

export default function FillBlanksPage({ params }: PageProps) {
  const { categoryId, levelId } = params;
  const router = useRouter();

  const points = usePoints();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [idioms, setIdioms] = useState<any[]>([]);
  const [category, setCategory] = useState<any>(null);
  const [mounted, setMounted] = useState(false);
  const [answerState, setAnswerState] = useState<AnswerState>('idle');
  const [correctCount, setCorrectCount] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);

  // Puzzle state — word-level
  const [hiddenIndices, setHiddenIndices] = useState<Set<number>>(new Set());
  const [wordPool, setWordPool] = useState<{ word: string; id: string }[]>([]);
  // Slots: array matching idiom.split(' ').length — null = empty, string = filled word
  const [slots, setSlots] = useState<(string | null)[]>([]);
  // Which pool ids have been used (in order)
  const [usedIds, setUsedIds] = useState<string[]>([]);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted) return;

    const foundCategory = IDIOM_CATS.find(cat => cat.id === categoryId);
    if (!foundCategory) return;

    const levelNumber = parseInt(levelId.replace('level-', ''));
    const idiomsData = getIdiomsByLevel(categoryId as IdiomCategory, levelNumber);

    setCategory(foundCategory);
    setIdioms(idiomsData);
  }, [mounted, categoryId, levelId]);

  // Build puzzle when idiom changes
  useEffect(() => {
    if (!idioms.length) return;
    const idiom = idioms[currentIndex];
    if (!idiom) return;

    const { hiddenIndices: hi, pool } = buildPuzzle(idiom.idiom, idiom.wrong);
    setHiddenIndices(hi);
    setWordPool(pool);
    setSlots(Array(idiom.idiom.split(' ').length).fill(null));
    setUsedIds([]);
    setAnswerState('idle');
  }, [currentIndex, idioms]);

  // Find next empty hidden slot (in word-index order)
  const nextEmptySlot = useCallback((currentSlots: (string | null)[]) => {
    const hiddenArr = Array.from(hiddenIndices).sort((a, b) => a - b);
    return hiddenArr.find(i => currentSlots[i] === null) ?? -1;
  }, [hiddenIndices]);

  const handleWordClick = useCallback((id: string, word: string) => {
    if (answerState !== 'idle') return;
    if (usedIds.includes(id)) return;

    const targetSlot = nextEmptySlot(slots);
    if (targetSlot === -1) return;

    const newSlots = [...slots];
    newSlots[targetSlot] = word;
    const newUsed = [...usedIds, id];

    setSlots(newSlots);
    setUsedIds(newUsed);

    // Check if all hidden slots are filled
    const allFilled = Array.from(hiddenIndices).every(i => newSlots[i] !== null);
    if (allFilled) {
      const idiomWords = idioms[currentIndex].idiom.split(' ');
      const isCorrect = idiomWords.every(
        (w: string, i: number) =>
          !hiddenIndices.has(i) || newSlots[i]?.toLowerCase() === w.toLowerCase()
      );

      setAnswerState(isCorrect ? 'correct' : 'wrong');
      if (isCorrect) setCorrectCount(prev => prev + 1);

      setTimeout(() => {
        if (currentIndex < idioms.length - 1) {
          setCurrentIndex(prev => prev + 1);
        } else {
          setShowCompletion(true);
        }
      }, 1500);
    }
  }, [answerState, usedIds, slots, hiddenIndices, nextEmptySlot, idioms, currentIndex]);

  // Erase last placed word
  const handleErase = useCallback(() => {
    if (answerState !== 'idle') return;
    if (usedIds.length === 0) return;

    const newUsed = usedIds.slice(0, -1);
    const hiddenArr = Array.from(hiddenIndices).sort((a, b) => a - b);
    const slotToErase = hiddenArr[newUsed.length];

    const newSlots = [...slots];
    newSlots[slotToErase] = null;

    setSlots(newSlots);
    setUsedIds(newUsed);
  }, [answerState, usedIds, slots, hiddenIndices]);

  const handleBackToActivities = () => router.push(`/idioms/${categoryId}/${levelId}`);
  const handleBackToLevels = () => router.push(`/idioms/${categoryId}`);

  if (!mounted || !idioms.length || !category) {
    return (
      <div className="min-h-screen bg-black text-white" suppressHydrationWarning={true}>
        <TopBar points={points} />
        <div className="container mx-auto px-4 py-8 text-center"><p>Loading...</p></div>
      </div>
    );
  }

  const currentIdiom = idioms[currentIndex];
  const idiomWords = currentIdiom.idiom.split(' ');
  const levelName = levelId.replace('level-', 'Level ');

  // Slot style for each word position
  const getSlotStyle = (index: number) => {
    if (!hiddenIndices.has(index)) {
      return 'bg-slate-900/60 border-white/5 text-zinc-400 cursor-default';
    }
    if (answerState === 'correct') {
      return 'bg-green-500/20 border-green-500/40 text-green-400';
    }
    if (answerState === 'wrong') {
      const correct = idiomWords[index].toLowerCase();
      const placed = slots[index]?.toLowerCase();
      if (placed === correct) return 'bg-green-500/20 border-green-500/40 text-green-400';
      return 'bg-red-500/20 border-red-500/40 text-red-400';
    }
    if (slots[index] !== null) return 'bg-slate-700/60 border-white/20 text-white';
    const nextSlot = nextEmptySlot(slots);
    if (index === nextSlot) return 'bg-slate-800/60 border-cyan-400/40 text-zinc-600 animate-pulse';
    return 'bg-slate-800/40 border-white/10 text-zinc-600';
  };

  const getPoolWordStyle = (id: string) => {
    if (usedIds.includes(id)) return 'bg-slate-800/30 border-white/5 opacity-30 cursor-default';
    if (answerState !== 'idle') return 'bg-slate-800/30 border-white/5 opacity-50 cursor-default';
    return 'bg-slate-800/60 border-white/10 hover:bg-slate-700/60 hover:border-white/20 cursor-pointer';
  };

  return (
    <div className="min-h-screen bg-black text-white relative" suppressHydrationWarning={true}>
      <TopBar points={points} />
      <FlyingWords words={idioms.map(i => i.idiom)} />

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="mb-8">
          <Link
            href={`/idioms/${categoryId}/${levelId}`}
            className="inline-flex items-center text-xs text-slate-500 hover:text-slate-300 transition-colors mb-4"
          >
            <span className="mr-2">←</span>
            Back to Activities
          </Link>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-2">Fill the Blanks</h1>
            <p className="text-slate-400">{category.name} · {levelName}</p>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-slate-400">Progress</span>
            <span className="text-sm text-cyan-400 font-medium">
              {currentIndex + 1} / {idioms.length}
            </span>
          </div>
          <Progress value={((currentIndex + 1) / idioms.length) * 100} />
        </div>

        {/* Meaning */}
        <div className="mb-8">
          <Card className="p-6 text-center border border-white/10">
            <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-3">
              Meaning
            </div>
            <p className="text-lg font-semibold text-white leading-snug">
              {currentIdiom.meaning}
            </p>
          </Card>
        </div>

        {/* Idiom with blanks */}
        <div className="mb-6">
          <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-3 text-center">
            Complete the idiom
          </div>
          <div className="flex justify-center gap-2 flex-wrap">
            {idiomWords.map((word: string, index: number) => (
              <div
                key={`slot-${index}`}
                className={`px-3 py-2.5 rounded-xl border-2 flex items-center justify-center text-sm font-semibold transition-all duration-200 min-w-[2.5rem] ${getSlotStyle(index)}`}
              >
                {hiddenIndices.has(index)
                  ? (slots[index] ?? '___')
                  : word}
              </div>
            ))}
          </div>
        </div>

        {/* Word pool */}
        <div className="mb-8">
          <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-3 text-center">
            Missing words
          </div>
          <div className="flex justify-center gap-2 flex-wrap items-center">
            {wordPool.map(({ word, id }) => (
              <button
                key={id}
                onClick={() => handleWordClick(id, word)}
                className={`px-3 py-2.5 rounded-xl border-2 text-sm font-semibold transition-all duration-200 ${getPoolWordStyle(id)}`}
              >
                {word}
              </button>
            ))}
            {answerState === 'idle' && usedIds.length > 0 && (
              <button
                onClick={handleErase}
                className="w-10 h-10 rounded-xl border-2 border-white/10 bg-slate-800/60 hover:bg-slate-700/60 hover:border-white/20 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-200 cursor-pointer"
              >
                ⌫
              </button>
            )}
          </div>
        </div>
      </div>

      {showCompletion && (
        <CompletionModal
          completed={correctCount}
          total={idioms.length}
          categoryId={categoryId}
          subcategoryName={`${category.name} · ${levelName}`}
          onNextSubcategory={handleBackToActivities}
          onBackToTopics={handleBackToLevels}
        />
      )}
    </div>
  );
}
