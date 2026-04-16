'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { TopBar } from '@/components/layout/TopBar';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CompletionModal } from '@/components/ui/CompletionModal';
import { FlyingWords } from '@/components/ui/FlyingWords';
import { PEOPLE } from '@/data/words/basicadvanced/people';
import { WORLD } from '@/data/words/basicadvanced/world';
import { LIFE } from '@/data/words/basicadvanced/life';
import { MIND } from '@/data/words/basicadvanced/mind';
import { DIGITAL } from '@/data/words/basicadvanced/digital';
import { CATS } from '@/constants/categories';

interface PageProps {
  params: {
    categoryId: string;
    topicId: string;
    subcategoryId: string;
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

export default function UnscramblePage({ params }: PageProps) {
  const { categoryId, topicId, subcategoryId } = params;
  const router = useRouter();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [words, setWords] = useState<any[]>([]);
  const [subcategory, setSubcategory] = useState<any>(null);
  const [mounted, setMounted] = useState(false);
  const [answerState, setAnswerState] = useState<AnswerState>('idle');
  const [correctCount, setCorrectCount] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);

  // Letter state
  const [scrambledLetters, setScrambledLetters] = useState<string[]>([]);
  const [placedLetters, setPlacedLetters] = useState<(string | null)[]>([]);
  const [usedIndices, setUsedIndices] = useState<number[]>([]);

  // Prevent hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // Load data only after mount
  useEffect(() => {
    if (!mounted) return;

    const category = CATS.find(cat => cat.id === categoryId);
    if (!category) return;

    const topic = category.topics?.find(t => t.id === topicId);
    if (!topic) return;

    const subcat = topic.subcategories?.find(s => s.id === subcategoryId);
    if (!subcat) return;

    setSubcategory(subcat);

    if (categoryId === 'basic-advanced') {
      const dataMap: Record<string, any> = {
        people: PEOPLE,
        world: WORLD,
        life: LIFE,
        mind: MIND,
        digital: DIGITAL,
      };

      const data = dataMap[topicId];
      if (data) {
        const found = data.find((s: any) => s.id === subcategoryId);
        if (found) {
          setWords(found.words);
        }
      }
    }
  }, [mounted, categoryId, topicId, subcategoryId]);

  // Initialize scrambled letters when current word changes
  useEffect(() => {
    if (!words.length) return;
    const currentWord = words[currentIndex];
    if (!currentWord) return;

    const letters: string[] = currentWord.advanced.split('');
    const shuffled = shuffleArray<string>(letters);
    setScrambledLetters(shuffled);
    setPlacedLetters(Array(letters.length).fill(null));
    setUsedIndices([]);
    setAnswerState('idle');
  }, [currentIndex, words]);

  const handleLetterClick = useCallback((letterIndex: number) => {
    if (answerState !== 'idle') return;
    if (usedIndices.includes(letterIndex)) return;

    const newUsed = [...usedIndices, letterIndex];
    setUsedIndices(newUsed);

    const newPlaced = [...placedLetters];
    const nextSlot = newPlaced.findIndex(slot => slot === null);
    if (nextSlot === -1) return;
    newPlaced[nextSlot] = scrambledLetters[letterIndex];
    setPlacedLetters(newPlaced);

    // Check if all letters are placed
    const currentWord = words[currentIndex];
    if (newPlaced.every(slot => slot !== null)) {
      const assembled = newPlaced.join('');
      const isCorrect = assembled === currentWord.advanced;

      setAnswerState(isCorrect ? 'correct' : 'wrong');

      if (isCorrect) {
        setCorrectCount(prev => prev + 1);
      }

      setTimeout(() => {
        if (currentIndex < words.length - 1) {
          setCurrentIndex(prev => prev + 1);
        } else {
          setShowCompletion(true);
        }
      }, 1500);
    }
  }, [answerState, usedIndices, placedLetters, scrambledLetters, words, currentIndex]);

  const handleSlotClick = useCallback((slotIndex: number) => {
    if (answerState !== 'idle') return;
    if (placedLetters[slotIndex] === null) return;

    // Find which scrambled letter index was placed at this slot
    // We need to track the mapping - reconstruct from usedIndices order
    const newPlaced = [...placedLetters];
    const removedLetter = newPlaced[slotIndex];
    newPlaced[slotIndex] = null;

    // Find the scrambled letter index that corresponds to this placed letter
    // We need to find it in usedIndices based on the order they were placed
    const placedOrder = usedIndices;
    const letterToRemove = placedOrder[slotIndex];
    
    const newUsed = usedIndices.filter(i => i !== letterToRemove);
    
    // Rebuild placed letters without gaps (shift left)
    const rebuiltPlaced: (string | null)[] = Array(scrambledLetters.length).fill(null);
    let slot = 0;
    for (const usedIdx of newUsed) {
      rebuiltPlaced[slot] = scrambledLetters[usedIdx];
      slot++;
    }

    setPlacedLetters(rebuiltPlaced);
    setUsedIndices(newUsed);
  }, [answerState, placedLetters, usedIndices, scrambledLetters]);

  const handleBackToActivities = () => {
    router.push(`/words/${categoryId}/${topicId}/${subcategoryId}`);
  };

  const handleBackToTopics = () => {
    router.push(`/words/${categoryId}/${topicId}`);
  };

  if (!mounted || !words.length || !subcategory) {
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

  const currentWord = words[currentIndex];

  const getSlotColor = (index: number) => {
    if (answerState === 'correct') return 'bg-green-500/20 border-green-500/40 text-green-400';
    if (answerState === 'wrong') {
      const correctLetter = currentWord.advanced[index];
      const placedLetter = placedLetters[index];
      if (placedLetter === correctLetter) return 'bg-green-500/20 border-green-500/40 text-green-400';
      return 'bg-red-500/20 border-red-500/40 text-red-400';
    }
    if (placedLetters[index] !== null) return 'bg-slate-700/60 border-white/20 text-white';
    return 'bg-slate-800/40 border-white/10 text-zinc-600';
  };

  const getScrambledLetterStyle = (index: number) => {
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

      <FlyingWords words={words.map(w => w.advanced)} />

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="mb-8">
          <Link
            href={`/words/${categoryId}/${topicId}/${subcategoryId}`}
            className="inline-flex items-center text-xs text-slate-500 hover:text-slate-300 transition-colors mb-4"
          >
            <span className="mr-2">←</span>
            Back to {subcategory.name}
          </Link>

          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-2">
              Unscramble
            </h1>
            <p className="text-slate-400">
              {subcategory.name}
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-slate-400">Progress</span>
            <span className="text-sm text-cyan-400 font-medium">
              {currentIndex + 1} / {words.length}
            </span>
          </div>
          <Progress value={((currentIndex + 1) / words.length) * 100} />
        </div>

        {/* Word Display */}
        <div className="mb-8">
          <Card className="p-8 text-center border border-white/10">
            <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-3">
              Basic word
            </div>
            <h2 className="text-3xl font-bold text-white">
              {currentWord.basic}
            </h2>
          </Card>
        </div>

        {/* Placed Letters (Answer Slots) */}
        <div className="mb-6">
          <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-3 text-center">
            Your answer
          </div>
          <div className="flex justify-center gap-2 flex-wrap">
            {placedLetters.map((letter, index) => (
              <button
                key={`slot-${index}`}
                onClick={() => handleSlotClick(index)}
                className={`w-10 h-12 rounded-lg border-2 flex items-center justify-center text-lg font-bold transition-all duration-200 ${getSlotColor(index)}`}
              >
                {letter || '·'}
              </button>
            ))}
          </div>
        </div>

        {/* Scrambled Letters */}
        <div className="mb-8">
          <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-3 text-center">
            Available letters
          </div>
          <div className="flex justify-center gap-2 flex-wrap items-center">
            {scrambledLetters.map((letter, index) => (
              <button
                key={`letter-${index}`}
                onClick={() => handleLetterClick(index)}
                className={`w-10 h-12 rounded-lg border-2 flex items-center justify-center text-lg font-bold transition-all duration-200 ${getScrambledLetterStyle(index)}`}
              >
                {letter}
              </button>
            ))}
            {answerState === 'idle' && usedIndices.length > 0 && (
              <button
                onClick={() => {
                  const newUsed = usedIndices.slice(0, -1);
                  const newPlaced: (string | null)[] = Array(scrambledLetters.length).fill(null);
                  let slot = 0;
                  for (const usedIdx of newUsed) {
                    newPlaced[slot] = scrambledLetters[usedIdx];
                    slot++;
                  }
                  setPlacedLetters(newPlaced);
                  setUsedIndices(newUsed);
                }}
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
          total={words.length}
          categoryId={categoryId}
          subcategoryName={subcategory.name}
          onNextSubcategory={handleBackToActivities}
          onBackToTopics={handleBackToTopics}
        />
      )}
    </div>
  );
}
