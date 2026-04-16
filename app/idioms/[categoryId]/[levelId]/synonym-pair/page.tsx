'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { TopBar } from '@/components/layout/TopBar';
import { CompletionModal } from '@/components/ui/CompletionModal';
import { FlyingWords } from '@/components/ui/FlyingWords';
import { getIdiomsByLevel, type IdiomCategory } from '@/lib/idioms';
import { IDIOM_CATS } from '@/constants/categories';

interface PageProps {
  params: {
    categoryId: string;
    levelId: string;
  };
}

interface IdiomPair {
  idiom: string;
  meaning: string;
}

export default function IdiomSynonymPairPage({ params }: PageProps) {
  const { categoryId, levelId } = params;
  const router = useRouter();

  const [idioms, setIdioms] = useState<IdiomPair[]>([]);
  const [category, setCategory] = useState<any>(null);
  const [mounted, setMounted] = useState(false);

  // Shuffled right column
  const [shuffledMeanings, setShuffledMeanings] = useState<string[]>([]);

  // Selected indices
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [selectedRight, setSelectedRight] = useState<number | null>(null);

  // Matched sets
  const [matchedLeft, setMatchedLeft] = useState<Set<number>>(new Set());
  const [matchedRight, setMatchedRight] = useState<Set<number>>(new Set());

  // Wrong flash
  const [wrongLeft, setWrongLeft] = useState<number | null>(null);
  const [wrongRight, setWrongRight] = useState<number | null>(null);

  // Score
  const [score, setScore] = useState(10);

  const [showCompletion, setShowCompletion] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const foundCategory = IDIOM_CATS.find(cat => cat.id === categoryId);
    if (!foundCategory) return;

    const levelNumber = parseInt(levelId.replace('level-', ''));
    const idiomsData = getIdiomsByLevel(categoryId as IdiomCategory, levelNumber);

    setCategory(foundCategory);

    const pairs: IdiomPair[] = idiomsData.map(i => ({
      idiom: i.idiom,
      meaning: i.meaning,
    }));
    setIdioms(pairs);

    const meanings = pairs.map(p => p.meaning);
    setShuffledMeanings([...meanings].sort(() => Math.random() - 0.5));
  }, [mounted, categoryId, levelId]);

  const handleSelectLeft = useCallback((index: number) => {
    if (isLocked) return;
    if (matchedLeft.has(index)) return;

    setSelectedLeft(index);
    setSelectedRight(null);
  }, [isLocked, matchedLeft]);

  const handleSelectRight = useCallback((index: number) => {
    if (isLocked) return;
    if (matchedRight.has(index)) return;
    if (selectedLeft === null) return;

    setSelectedRight(index);

    const leftIdiom = idioms[selectedLeft];
    const rightMeaning = shuffledMeanings[index];
    const isCorrect = leftIdiom.meaning === rightMeaning;

    if (isCorrect) {
      const newMatchedLeft = new Set(matchedLeft).add(selectedLeft);
      const newMatchedRight = new Set(matchedRight).add(index);
      setMatchedLeft(newMatchedLeft);
      setMatchedRight(newMatchedRight);
      setSelectedLeft(null);
      setSelectedRight(null);

      if (newMatchedLeft.size === idioms.length) {
        setTimeout(() => setShowCompletion(true), 600);
      }
    } else {
      setIsLocked(true);
      setWrongLeft(selectedLeft);
      setWrongRight(index);
      setScore(prev => Math.max(0, prev - 1));

      setTimeout(() => {
        setWrongLeft(null);
        setWrongRight(null);
        setSelectedLeft(null);
        setSelectedRight(null);
        setIsLocked(false);
      }, 1000);
    }
  }, [isLocked, selectedLeft, idioms, shuffledMeanings, matchedLeft, matchedRight]);

  const getLeftStyle = (index: number) => {
    if (matchedLeft.has(index)) {
      return 'bg-green-500/20 border-green-500/50 text-green-400 cursor-default';
    }
    if (wrongLeft === index) {
      return 'bg-red-500/20 border-red-500/50 text-red-400 cursor-default';
    }
    if (selectedLeft === index) {
      return 'bg-cyan-500/20 border-cyan-400/60 text-cyan-300 cursor-pointer ring-1 ring-cyan-400/40';
    }
    return 'bg-slate-800/60 border-white/10 text-white hover:bg-slate-700/60 hover:border-white/20 cursor-pointer';
  };

  const getRightStyle = (index: number) => {
    if (matchedRight.has(index)) {
      return 'bg-green-500/20 border-green-500/50 text-green-400 cursor-default';
    }
    if (wrongRight === index) {
      return 'bg-red-500/20 border-red-500/50 text-red-400 cursor-default';
    }
    if (selectedLeft === null) {
      return 'bg-slate-800/60 border-white/10 text-slate-400 cursor-not-allowed opacity-60';
    }
    return 'bg-slate-800/60 border-white/10 text-white hover:bg-slate-700/60 hover:border-white/20 cursor-pointer';
  };

  const handleBackToActivities = () => {
    router.push(`/idioms/${categoryId}/${levelId}`);
  };

  const handleBackToTopics = () => {
    router.push(`/idioms/${categoryId}`);
  };

  if (!mounted || !idioms.length || !category) {
    return (
      <div className="min-h-screen bg-black text-white" suppressHydrationWarning={true}>
        <TopBar />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p>Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  const matchedCount = matchedLeft.size;
  const totalPairs = idioms.length;
  const levelName = levelId.replace('level-', 'Level ');

  return (
    <div className="min-h-screen bg-black text-white relative" suppressHydrationWarning={true}>
      <TopBar />

      <FlyingWords words={idioms.map(i => i.idiom)} />

      <div className="container mx-auto px-4 py-8 relative z-10 max-w-2xl">
        {/* Header */}
        <div className="mb-6">
          <Link
            href={`/idioms/${categoryId}/${levelId}`}
            className="inline-flex items-center text-xs text-slate-500 hover:text-slate-300 transition-colors mb-4"
          >
            <span className="mr-2">←</span>
            Back to {category.name} — {levelName}
          </Link>

          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-1">
              Synonym Pair
            </h1>
            <p className="text-slate-400 text-sm mb-1">
              {category.name} · {levelName}
            </p>
            <p className="text-xs text-slate-500">
              Select an idiom on the left, then its meaning on the right
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div className="flex justify-between items-center mb-5 px-1">
          <div className="text-sm text-slate-400">
            Matched:{' '}
            <span className="text-cyan-400 font-semibold">
              {matchedCount} / {totalPairs}
            </span>
          </div>
          <div className="text-sm text-slate-400">
            Score:{' '}
            <span className={`font-semibold ${score >= 8 ? 'text-green-400' : score >= 5 ? 'text-yellow-400' : 'text-red-400'}`}>
              {score} / 10
            </span>
          </div>
        </div>

        {/* Game grid */}
        <div className="grid grid-cols-2 gap-3">
          {/* Left column — idioms */}
          <div className="space-y-2">
            <div className="text-[10px] uppercase tracking-[0.25em] text-zinc-600 text-center mb-3">
              Idiom
            </div>
            {idioms.map((pair, index) => (
              <button
                key={`left-${index}`}
                onClick={() => handleSelectLeft(index)}
                disabled={matchedLeft.has(index) || isLocked}
                className={`w-full text-left px-3 py-2.5 rounded-xl border transition-all duration-200 ${getLeftStyle(index)}`}
              >
                <span className="text-xs font-medium leading-snug">
                  {matchedLeft.has(index) && (
                    <span className="mr-1 text-green-400">✓ </span>
                  )}
                  {pair.idiom}
                </span>
              </button>
            ))}
          </div>

          {/* Right column — shuffled meanings */}
          <div className="space-y-2">
            <div className="text-[10px] uppercase tracking-[0.25em] text-zinc-600 text-center mb-3">
              Meaning
            </div>
            {shuffledMeanings.map((meaning, index) => (
              <button
                key={`right-${index}`}
                onClick={() => handleSelectRight(index)}
                disabled={matchedRight.has(index) || isLocked || selectedLeft === null}
                className={`w-full text-left px-3 py-2.5 rounded-xl border transition-all duration-200 ${getRightStyle(index)}`}
              >
                <span className="text-xs font-medium leading-snug">
                  {matchedRight.has(index) && (
                    <span className="mr-1 text-green-400">✓ </span>
                  )}
                  {meaning}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Hint */}
        {selectedLeft !== null && (
          <p className="text-center text-xs text-cyan-400/70 mt-4 animate-pulse">
            Now pick the meaning for &quot;{idioms[selectedLeft].idiom}&quot;
          </p>
        )}
      </div>

      {/* Completion Modal */}
      {showCompletion && (
        <CompletionModal
          completed={score}
          total={10}
          categoryId={categoryId}
          subcategoryName={`${category.name} · ${levelName}`}
          onNextSubcategory={handleBackToActivities}
          onBackToTopics={handleBackToTopics}
        />
      )}
    </div>
  );
}
