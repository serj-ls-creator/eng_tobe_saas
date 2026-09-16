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
import { wordOrderMistakeLevels, type WordOrderMistakeItem } from '@/data/grammar/wordorder/find_the_mistake';

interface PageProps {
  params: {
    levelId: string;
  };
}

type AnswerState = 'idle' | 'correct' | 'wrong';

export default function WordOrderFindMistakeGamePage({ params }: PageProps) {
  const { levelId } = params;
  const router = useRouter();
  const points = usePoints();
  const { playCorrect, playWrong } = useSoundEffects();

  const levelNum = useMemo(() => {
    const parsed = parseInt(levelId.replace('level-', ''), 10);
    return isNaN(parsed) ? 1 : parsed;
  }, [levelId]);

  const level = useMemo(() => {
    return wordOrderMistakeLevels.find((l) => l.level === levelNum) ?? wordOrderMistakeLevels[0];
  }, [levelNum]);

  const nextLevel = useMemo(() => {
    return wordOrderMistakeLevels.find((l) => l.level === levelNum + 1);
  }, [levelNum]);

  const [mounted, setMounted] = useState(false);
  const [rounds, setRounds] = useState<WordOrderMistakeItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answerState, setAnswerState] = useState<AnswerState>('idle');
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !level) return;
    setRounds(level.items);
    setCurrentIndex(0);
    setCorrectCount(0);
    setShowCompletion(false);
  }, [mounted, level]);

  useEffect(() => {
    setSelectedIndices([]);
    setAnswerState('idle');
  }, [currentIndex]);

  const currentRound = rounds[currentIndex];

  const handleTokenClick = useCallback(
    (index: number) => {
      if (answerState !== 'idle' || !currentRound) return;

      // If already selected, deselect it
      if (selectedIndices.includes(index)) {
        setSelectedIndices((prev) => prev.filter((i) => i !== index));
        return;
      }

      // If selecting the first item
      if (selectedIndices.length === 0) {
        setSelectedIndices([index]);
        return;
      }

      // Selecting the second item -> evaluate the pair
      const newSelected = [selectedIndices[0], index];
      setSelectedIndices(newSelected);

      const sortedSelected = [...newSelected].sort((a, b) => a - b);
      const sortedTarget = [...currentRound.swapPair].sort((a, b) => a - b);
      const isCorrect =
        sortedSelected[0] === sortedTarget[0] && sortedSelected[1] === sortedTarget[1];

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
        }, 1800);
      } else {
        setAnswerState('wrong');
        playWrong();
      }
    },
    [answerState, currentIndex, currentRound, playCorrect, playWrong, rounds.length, selectedIndices]
  );

  const handleNextAfterError = () => {
    if (currentIndex < rounds.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setShowCompletion(true);
    }
  };

  const handleBackToLevels = () => {
    router.push('/grammar/word-order/find-the-mistake');
  };

  const handleNextLevel = () => {
    if (nextLevel) {
      router.push(`/grammar/word-order/find-the-mistake/level-${nextLevel.level}`);
    } else {
      router.push('/grammar/word-order/find-the-mistake');
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

  const progressPercent = ((currentIndex + 1) / rounds.length) * 100;

  const getTokenStyle = (index: number) => {
    if (answerState === 'idle') {
      if (selectedIndices.includes(index)) {
        return 'bg-cyan-500/20 border-cyan-400 text-cyan-200 shadow-[0_0_12px_rgba(34,211,238,0.35)] scale-[1.03] font-bold';
      }
      return 'bg-white/[0.06] border-white/15 text-white hover:bg-white/[0.12] hover:border-cyan-400/60 hover:text-cyan-200 active:scale-95 shadow-sm';
    }

    const isTargetPair = currentRound.swapPair.includes(index);
    const isUserSelected = selectedIndices.includes(index);

    if (answerState === 'correct') {
      if (isTargetPair) {
        return 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.35)] font-bold';
      }
      return 'bg-white/[0.02] border-white/5 text-zinc-500 opacity-40 cursor-default';
    }

    // answerState === 'wrong'
    if (isTargetPair) {
      return 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.35)] font-bold';
    }
    if (isUserSelected) {
      return 'bg-rose-500/20 border-rose-400 text-rose-300 shadow-[0_0_12px_rgba(244,63,94,0.35)] font-bold';
    }
    return 'bg-white/[0.02] border-white/5 text-zinc-500 opacity-40 cursor-default';
  };

  return (
    <>
      <TopBar points={points} />
      <FlyingWords words={['subject', 'verb', 'object', 'manner', 'place', 'time', 'frequency', 'questions']} />

      <div className="content-shell pb-12">
        {/* Navigation / Header */}
        <div className="mb-4 flex items-center justify-between">
          <Link
            href="/grammar/word-order/find-the-mistake"
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
            Find the Mistake &middot; Swap Pair
          </div>
          <p className="text-xs text-zinc-300 mb-5">
            Tap the <span className="font-semibold text-cyan-300">2 words or phrases</span> that need to swap places:
            {selectedIndices.length === 1 && (
              <span className="ml-1.5 text-cyan-400 font-medium animate-pulse">
                (1 of 2 selected &mdash; tap second word)
              </span>
            )}
          </p>

          {/* Interactive sentence tokens */}
          <div className="flex flex-wrap gap-2 sm:gap-2.5 items-center justify-start min-h-[64px]">
            {currentRound.tokens.map((token, index) => (
              <button
                key={`${token}-${index}`}
                onClick={() => handleTokenClick(index)}
                disabled={answerState !== 'idle'}
                type="button"
                className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl border text-sm sm:text-base font-medium transition-all ${getTokenStyle(
                  index
                )}`}
              >
                {token}
              </button>
            ))}
          </div>

          {/* Error explanation and correct sentence reveal */}
          {answerState === 'wrong' && (
            <div className="mt-5 rounded-2xl border border-rose-500/30 bg-rose-500/10 p-4 fade-up">
              <div className="text-xs font-bold uppercase tracking-wider text-rose-300 mb-1">
                Words to swap: &quot;{currentRound.tokens[currentRound.swapPair[0]]}&quot; &harr; &quot;{currentRound.tokens[currentRound.swapPair[1]]}&quot;
              </div>
              <div className="text-xs text-zinc-400 mb-1">Correct sentence:</div>
              <div className="text-sm sm:text-base font-bold text-white mb-2">
                {currentRound.correctSentence}
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
              <div className="text-xs text-zinc-400 mb-1">Correct sentence:</div>
              <div className="text-sm sm:text-base font-bold text-white mb-2">
                {currentRound.correctSentence}
              </div>
              <div className="text-xs text-emerald-200/90 leading-relaxed">
                {currentRound.explanation}
              </div>
            </div>
          )}
        </Card>

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

        {/* Completion Modal */}
        {showCompletion && (
          <CompletionModal
            completed={correctCount}
            total={rounds.length}
            categoryId="word-order"
            subcategoryName={level.title}
            onNextSubcategory={nextLevel ? handleNextLevel : undefined}
            onBackToTopics={handleBackToLevels}
          />
        )}
      </div>
    </>
  );
}
