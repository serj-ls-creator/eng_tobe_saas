'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { TopBar } from '@/components/layout/TopBar';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CompletionModal } from '@/components/ui/CompletionModal';
import { FlyingWords } from '@/components/ui/FlyingWords';
import { useSoundEffects } from '@/hooks/useSoundEffects';
import { usePoints } from '@/lib/usePoints';
import { adjectiveOrderLevels, type AdjectiveBuilderItem } from '@/data/grammar/adjectiveorder/sentence_builder';

interface PageProps {
  params: {
    levelId: string;
  };
}

type AnswerState = 'idle' | 'correct' | 'wrong';

type Token =
  | { type: 'word'; text: string }
  | { type: 'blank'; slotIndex: number; correctAnswer: string };

interface RoundItem {
  id: string;
  sentence: string;
  tokens: Token[];
  adjectives: string[];
  explanation: string;
  translation?: string;
}

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function buildTokensFromItem(item: AdjectiveBuilderItem): { tokens: Token[] } {
  const parts = item.sentence.split('___');
  const tokens: Token[] = [];

  parts.forEach((part, index) => {
    if (part) {
      const words = part.split(/\s+/).filter(Boolean);
      words.forEach((word) => {
        tokens.push({ type: 'word', text: word });
      });
    }
    if (index < parts.length - 1) {
      tokens.push({
        type: 'blank',
        slotIndex: index,
        correctAnswer: item.adjectives[index] ?? '',
      });
    }
  });

  return { tokens };
}

export default function AdjectiveOrderSentenceBuilderGamePage({ params }: PageProps) {
  const { levelId } = params;
  const router = useRouter();
  const points = usePoints();
  const { playCorrect, playWrong } = useSoundEffects();

  const levelNum = useMemo(() => {
    const parsed = parseInt(levelId.replace('level-', ''), 10);
    return isNaN(parsed) ? 1 : parsed;
  }, [levelId]);

  const level = useMemo(() => {
    return adjectiveOrderLevels.find((l) => l.level === levelNum) ?? adjectiveOrderLevels[0];
  }, [levelNum]);

  const nextLevel = useMemo(() => {
    return adjectiveOrderLevels.find((l) => l.level === levelNum + 1);
  }, [levelNum]);

  const [mounted, setMounted] = useState(false);
  const [rounds, setRounds] = useState<RoundItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answerState, setAnswerState] = useState<AnswerState>('idle');
  const [correctCount, setCorrectCount] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);

  // Current question state
  const [scrambledWords, setScrambledWords] = useState<string[]>([]);
  const [placedWords, setPlacedWords] = useState<(string | null)[]>([]);
  const [usedIndices, setUsedIndices] = useState<number[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !level) return;
    const built: RoundItem[] = level.items.map((item) => {
      const { tokens } = buildTokensFromItem(item);
      return {
        id: item.id,
        sentence: item.sentence,
        tokens,
        adjectives: item.adjectives,
        explanation: item.explanation,
        translation: item.translation,
      };
    });
    setRounds(built);
    setCurrentIndex(0);
    setCorrectCount(0);
    setShowCompletion(false);
  }, [mounted, level]);

  // Setup current round words
  useEffect(() => {
    if (!rounds.length) return;
    const currentRound = rounds[currentIndex];
    if (!currentRound) return;

    const shuffled = shuffleArray(currentRound.adjectives);
    setScrambledWords(shuffled);
    setPlacedWords(Array(currentRound.adjectives.length).fill(null));
    setUsedIndices([]);
    setAnswerState('idle');
  }, [currentIndex, rounds]);

  const handleWordClick = useCallback(
    (wordIndex: number) => {
      if (answerState !== 'idle') return;
      if (usedIndices.includes(wordIndex)) return;

      const currentRound = rounds[currentIndex];
      if (!currentRound) return;

      const wordToPlace = scrambledWords[wordIndex];
      const emptySlotIndex = placedWords.findIndex((w) => w === null);
      if (emptySlotIndex === -1) return;

      const newPlaced = [...placedWords];
      newPlaced[emptySlotIndex] = wordToPlace;
      const newUsed = [...usedIndices, wordIndex];

      setPlacedWords(newPlaced);
      setUsedIndices(newUsed);

      // If all slots are now filled, validate
      if (!newPlaced.some((w) => w === null)) {
        const isCorrect = newPlaced.every(
          (word, idx) => word === currentRound.adjectives[idx]
        );

        if (isCorrect) {
          setAnswerState('correct');
          playCorrect();
          setCorrectCount((prev) => prev + 1);

          setTimeout(() => {
            if (currentIndex < rounds.length - 1) {
              setCurrentIndex((prev) => prev + 1);
            } else {
              setShowCompletion(true);
            }
          }, 1600);
        } else {
          setAnswerState('wrong');
          playWrong();
        }
      }
    },
    [answerState, currentIndex, placedWords, playCorrect, playWrong, rounds, scrambledWords, usedIndices]
  );

  const handleSlotClick = useCallback(
    (slotIndex: number) => {
      if (answerState !== 'idle') return;
      const wordInSlot = placedWords[slotIndex];
      if (!wordInSlot) return;

      // Find the used index matching this slot
      const usedIdx = usedIndices[slotIndex];
      const newPlaced = [...placedWords];
      newPlaced[slotIndex] = null;

      // Compact remaining placed words to the left
      const remainingWords = newPlaced.filter((w) => w !== null);
      const compactedPlaced = [
        ...remainingWords,
        ...Array(newPlaced.length - remainingWords.length).fill(null),
      ];

      const newUsed = usedIndices.filter((idx) => idx !== usedIdx);

      setPlacedWords(compactedPlaced);
      setUsedIndices(newUsed);
    },
    [answerState, placedWords, usedIndices]
  );

  const handleUndo = useCallback(() => {
    if (answerState !== 'idle') return;
    if (usedIndices.length === 0) return;

    const lastSlotIndex = placedWords.findLastIndex ? placedWords.findLastIndex((w) => w !== null) : placedWords.reduce((last, w, i) => w !== null ? i : last, -1);
    if (lastSlotIndex === -1) return;

    const newPlaced = [...placedWords];
    newPlaced[lastSlotIndex] = null;
    const newUsed = usedIndices.slice(0, -1);

    setPlacedWords(newPlaced);
    setUsedIndices(newUsed);
  }, [answerState, placedWords, usedIndices]);

  const handleNextAfterError = () => {
    if (currentIndex < rounds.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setShowCompletion(true);
    }
  };

  const handleBackToLevels = () => {
    router.push('/grammar/adjective-order/sentence-builder');
  };

  const handleNextLevel = () => {
    if (nextLevel) {
      router.push(`/grammar/adjective-order/sentence-builder/level-${nextLevel.level}`);
    } else {
      router.push('/grammar/adjective-order/sentence-builder');
    }
  };

  if (!mounted || !rounds.length || !level) {
    return (
      <div className="min-h-screen bg-black text-white" suppressHydrationWarning>
        <TopBar points={points} />
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-zinc-500">Loading...</p>
        </div>
      </div>
    );
  }

  const currentRound = rounds[currentIndex];
  const progressPercent = ((currentIndex + 1) / rounds.length) * 100;

  const getSlotStyle = (slotIndex: number) => {
    if (answerState === 'correct') {
      return 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.3)] font-semibold';
    }
    if (answerState === 'wrong') {
      const isWordCorrect = placedWords[slotIndex] === currentRound.adjectives[slotIndex];
      return isWordCorrect
        ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 font-semibold'
        : 'bg-rose-500/20 border-rose-400 text-rose-300 shadow-[0_0_12px_rgba(244,63,94,0.3)] font-semibold';
    }
    if (placedWords[slotIndex] !== null) {
      return 'bg-cyan-500/15 border-cyan-400/80 text-cyan-200 cursor-pointer hover:bg-cyan-500/25 hover:border-cyan-300 transition-colors font-semibold';
    }
    return 'bg-white/[0.04] border-dashed border-white/20 text-zinc-600';
  };

  return (
    <>
      <TopBar points={points} />
      <FlyingWords words={['opinion', 'size', 'age', 'shape', 'colour', 'origin', 'material', 'purpose']} />

      <div className="content-shell pb-12">
        {/* Navigation / Header */}
        <div className="mb-4 flex items-center justify-between">
          <Link
            href="/grammar/adjective-order/sentence-builder"
            className="text-xs text-zinc-500 transition-colors hover:text-zinc-300"
          >
            &larr; Back to Levels
          </Link>
          <span className="text-xs font-medium text-zinc-400">
            Level {level.level} &mdash; {level.title}
          </span>
        </div>

        {/* Progress header */}
        <div className="mb-6">
          <div className="mb-2 flex items-center justify-between text-xs text-zinc-400">
            <span>Question {currentIndex + 1} of {rounds.length}</span>
            <span>{Math.round(progressPercent)}%</span>
          </div>
          <Progress value={progressPercent} className="h-2 bg-white/10" />
        </div>

        {/* Main Exercise Card */}
        <Card className="mb-6 p-6 border-white/10 bg-slate-900/60 backdrop-blur">
          <div className="mb-2 text-[11px] font-bold uppercase tracking-wider text-cyan-400">
            Order the Adjectives
          </div>

          {/* Sentence with blank slots */}
          <div className="mt-4 text-base sm:text-lg text-white leading-relaxed flex flex-wrap gap-x-2 gap-y-3 items-center justify-start min-h-[72px]">
            {currentRound.tokens.map((token, i) => {
              if (token.type === 'word') {
                return (
                  <span key={i} className="font-normal text-zinc-100">
                    {token.text}
                  </span>
                );
              }

              const si = token.slotIndex;
              const placed = placedWords[si];

              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleSlotClick(si)}
                  disabled={answerState !== 'idle' || placed === null}
                  className={`inline-flex items-center justify-center min-w-[76px] px-3.5 py-1.5 rounded-xl border text-sm sm:text-base transition-all ${getSlotStyle(
                    si
                  )}`}
                >
                  {placed || '___'}
                </button>
              );
            })}
          </div>

          {/* Translation hint if available */}
          {currentRound.translation && (
            <div className="mt-4 text-xs italic text-zinc-400 border-t border-white/5 pt-3">
              {currentRound.translation}
            </div>
          )}

          {/* Error explanation and correct answer reveal */}
          {answerState === 'wrong' && (
            <div className="mt-5 rounded-2xl border border-rose-500/30 bg-rose-500/10 p-4 fade-up">
              <div className="text-xs font-bold uppercase tracking-wider text-rose-300 mb-1">
                Correct order:
              </div>
              <div className="text-sm sm:text-base font-bold text-white mb-2">
                {currentRound.adjectives.join(' ')}
              </div>
              <div className="text-xs text-rose-200/90 leading-relaxed">
                {currentRound.explanation}
              </div>
            </div>
          )}

          {/* Success explanation note */}
          {answerState === 'correct' && (
            <div className="mt-5 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 fade-up">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-300 mb-1">
                Well done!
              </div>
              <div className="text-xs text-emerald-200/90 leading-relaxed">
                {currentRound.explanation}
              </div>
            </div>
          )}
        </Card>

        {/* Word Choices Grid */}
        <div className="space-y-4">
          <div className="text-xs font-semibold text-zinc-400">
            Tap the adjectives in the correct sequence:
          </div>

          <div className="flex flex-wrap gap-2.5 items-center">
            {scrambledWords.map((word, index) => {
              const isUsed = usedIndices.includes(index);

              return (
                <button
                  key={`${word}-${index}`}
                  onClick={() => handleWordClick(index)}
                  disabled={isUsed || answerState !== 'idle'}
                  className={`px-4 py-2.5 rounded-xl border text-sm sm:text-base font-medium transition-all ${
                    isUsed
                      ? 'bg-white/[0.02] border-white/5 text-zinc-600 opacity-40 cursor-default'
                      : answerState !== 'idle'
                      ? 'bg-white/[0.04] border-white/10 text-zinc-400 cursor-default'
                      : 'bg-white/[0.06] border-white/15 text-white hover:bg-white/[0.12] hover:border-cyan-400/60 hover:text-cyan-200 active:scale-95 shadow-sm'
                  }`}
                >
                  {word}
                </button>
              );
            })}

            {/* Undo button */}
            {usedIndices.length > 0 && answerState === 'idle' && (
              <button
                onClick={handleUndo}
                className="px-3.5 py-2.5 rounded-xl border border-white/15 bg-white/[0.04] text-zinc-300 hover:bg-white/[0.1] hover:text-white transition-all active:scale-95"
                title="Undo last word"
              >
                ⌫
              </button>
            )}
          </div>

          {/* Continue button after error */}
          {answerState === 'wrong' && (
            <div className="pt-2">
              <button
                onClick={handleNextAfterError}
                className="w-full py-3.5 px-5 rounded-2xl bg-cyan-400 text-black font-bold text-sm hover:bg-cyan-300 transition-colors active:scale-[0.99]"
              >
                Continue &rarr;
              </button>
            </div>
          )}
        </div>

        {/* Completion Modal */}
        {showCompletion && (
          <CompletionModal
            completed={correctCount}
            total={rounds.length}
            categoryId="adjective-order"
            subcategoryName={level.title}
            onNextSubcategory={nextLevel ? handleNextLevel : undefined}
            onBackToTopics={handleBackToLevels}
          />
        )}
      </div>
    </>
  );
}
