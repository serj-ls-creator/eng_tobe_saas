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

interface PageProps {
  params: {
    categoryId: string;
    levelId: string;
  };
}

type AnswerState = 'idle' | 'correct' | 'wrong';

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function getDistractorWords(idioms: any[], currentIndex: number, count: number): string[] {
  const otherIdioms = idioms.filter((_, i) => i !== currentIndex);
  const allWords: string[] = [];
  for (const idiom of otherIdioms) {
    allWords.push(...idiom.idiom.split(' '));
  }
  const uniqueWords = [...new Set(allWords)];
  const shuffled = shuffleArray(uniqueWords);
  return shuffled.slice(0, count);
}

export default function SentenceBuilderPage({ params }: PageProps) {
  const { categoryId, levelId } = params;
  const router = useRouter();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [idioms, setIdioms] = useState<any[]>([]);
  const [category, setCategory] = useState<any>(null);
  const [mounted, setMounted] = useState(false);
  const [answerState, setAnswerState] = useState<AnswerState>('idle');
  const [correctCount, setCorrectCount] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);

  // Word state
  const [scrambledWords, setScrambledWords] = useState<string[]>([]);
  const [placedWords, setPlacedWords] = useState<(string | null)[]>([]);
  const [usedIndices, setUsedIndices] = useState<number[]>([]);

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
    setIdioms(idiomsData);
  }, [mounted, categoryId, levelId]);

  // Initialize scrambled words when current idiom changes
  useEffect(() => {
    if (!idioms.length) return;
    const currentIdiom = idioms[currentIndex];
    if (!currentIdiom) return;

    const idiomWords: string[] = currentIdiom.idiom.split(' ');
    const distractorCount = Math.max(2, 6 - idiomWords.length);
    const distractors = getDistractorWords(idioms, currentIndex, distractorCount);
    const allWords = [...idiomWords, ...distractors];
    const shuffled = shuffleArray(allWords);

    setScrambledWords(shuffled);
    setPlacedWords(Array(idiomWords.length).fill(null));
    setUsedIndices([]);
    setAnswerState('idle');
  }, [currentIndex, idioms]);

  const handleWordClick = useCallback((wordIndex: number) => {
    if (answerState !== 'idle') return;
    if (usedIndices.includes(wordIndex)) return;

    const newUsed = [...usedIndices, wordIndex];
    setUsedIndices(newUsed);

    const newPlaced = [...placedWords];
    const nextSlot = newPlaced.findIndex(slot => slot === null);
    if (nextSlot === -1) return;
    newPlaced[nextSlot] = scrambledWords[wordIndex];
    setPlacedWords(newPlaced);

    // Check if all slots are filled
    const currentIdiom = idioms[currentIndex];
    if (newPlaced.every(slot => slot !== null)) {
      const assembled = newPlaced.join(' ');
      const isCorrect = assembled === currentIdiom.idiom;

      setAnswerState(isCorrect ? 'correct' : 'wrong');

      if (isCorrect) {
        setCorrectCount(prev => prev + 1);
      }

      setTimeout(() => {
        if (currentIndex < idioms.length - 1) {
          setCurrentIndex(prev => prev + 1);
        } else {
          setShowCompletion(true);
        }
      }, 1500);
    }
  }, [answerState, usedIndices, placedWords, scrambledWords, idioms, currentIndex]);

  const handleSlotClick = useCallback((slotIndex: number) => {
    if (answerState !== 'idle') return;
    if (placedWords[slotIndex] === null) return;

    const letterToRemove = usedIndices[slotIndex];
    const newUsed = usedIndices.filter(i => i !== letterToRemove);

    const rebuiltPlaced: (string | null)[] = Array(placedWords.length).fill(null);
    let slot = 0;
    for (const usedIdx of newUsed) {
      rebuiltPlaced[slot] = scrambledWords[usedIdx];
      slot++;
    }

    setPlacedWords(rebuiltPlaced);
    setUsedIndices(newUsed);
  }, [answerState, placedWords, usedIndices, scrambledWords]);

  const handleBackspace = useCallback(() => {
    if (answerState !== 'idle') return;
    if (usedIndices.length === 0) return;

    const newUsed = usedIndices.slice(0, -1);
    const newPlaced: (string | null)[] = Array(placedWords.length).fill(null);
    let slot = 0;
    for (const usedIdx of newUsed) {
      newPlaced[slot] = scrambledWords[usedIdx];
      slot++;
    }
    setPlacedWords(newPlaced);
    setUsedIndices(newUsed);
  }, [answerState, usedIndices, placedWords, scrambledWords]);

  const handleBackToActivities = () => {
    router.push(`/idioms/${categoryId}/${levelId}`);
  };

  const handleBackToLevels = () => {
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

  const currentIdiom = idioms[currentIndex];
  const levelName = levelId.replace('level-', 'Level ');

  const getSlotColor = (index: number) => {
    if (answerState === 'correct') return 'bg-green-500/20 border-green-500/40 text-green-400';
    if (answerState === 'wrong') {
      const correctWord = currentIdiom.idiom.split(' ')[index];
      const placedWord = placedWords[index];
      if (placedWord === correctWord) return 'bg-green-500/20 border-green-500/40 text-green-400';
      return 'bg-red-500/20 border-red-500/40 text-red-400';
    }
    if (placedWords[index] !== null) return 'bg-slate-700/60 border-white/20 text-white';
    return 'bg-slate-800/40 border-white/10 text-zinc-600';
  };

  const getScrambledWordStyle = (index: number) => {
    if (usedIndices.includes(index)) {
      return 'bg-slate-800/30 border-white/5 opacity-30 cursor-default';
    }
    if (answerState !== 'idle') {
      return 'bg-slate-800/30 border-white/5 opacity-50 cursor-default';
    }
    return 'bg-slate-800/60 border-white/10 hover:bg-slate-700/60 hover:border-white/20 cursor-pointer';
  };

  return (
    <div className="min-h-screen bg-black text-white relative" suppressHydrationWarning={true}>
      <TopBar />

      <FlyingWords words={idioms.map(w => w.idiom)} />

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
            <h1 className="text-2xl font-bold text-white mb-2">
              Sentence Builder
            </h1>
            <p className="text-slate-400">
              {category.name} - {levelName}
            </p>
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

        {/* Meaning Display */}
        <div className="mb-8">
          <Card className="p-8 text-center border border-white/10">
            <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-3">
              Meaning
            </div>
            <h2 className="text-2xl font-bold text-white">
              {currentIdiom.meaning}
            </h2>
          </Card>
        </div>

        {/* Placed Words (Answer Slots) */}
        <div className="mb-6">
          <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-3 text-center">
            Your answer
          </div>
          <div className="flex justify-center gap-2 flex-wrap">
            {placedWords.map((word, index) => (
              <button
                key={`slot-${index}`}
                onClick={() => handleSlotClick(index)}
                className={`min-w-[60px] h-12 px-3 rounded-lg border-2 flex items-center justify-center text-sm font-bold transition-all duration-200 ${getSlotColor(index)}`}
              >
                {word || '·'}
              </button>
            ))}
          </div>
        </div>

        {/* Scrambled Words */}
        <div className="mb-8">
          <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-3 text-center">
            Available words
          </div>
          <div className="flex justify-center gap-2 flex-wrap items-center">
            {scrambledWords.map((word, index) => (
              <button
                key={`word-${index}`}
                onClick={() => handleWordClick(index)}
                className={`min-w-[60px] h-12 px-3 rounded-lg border-2 flex items-center justify-center text-sm font-bold transition-all duration-200 ${getScrambledWordStyle(index)}`}
              >
                {word}
              </button>
            ))}
            {answerState === 'idle' && usedIndices.length > 0 && (
              <button
                onClick={handleBackspace}
                className="w-10 h-12 rounded-lg border-2 border-white/10 bg-slate-800/60 hover:bg-slate-700/60 hover:border-white/20 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-200 cursor-pointer"
              >
                ⌫
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Completion Modal */}
      {showCompletion && (
        <CompletionModal
          completed={correctCount}
          total={idioms.length}
          categoryId={categoryId}
          subcategoryName={`${category.name} - ${levelName}`}
          onNextSubcategory={handleBackToActivities}
          onBackToTopics={handleBackToLevels}
        />
      )}
    </div>
  );
}
