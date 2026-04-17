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

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Build the puzzle: replace one word in the idiom with a wrong word.
 * Returns:
 *  - displayWords: the idiom words with one replaced
 *  - mistakeIndex: which word position was replaced
 *  - wrongWord: the replacement word
 */
function buildPuzzle(idiom: string, wrong: string[]) {
  const words = idiom.split(' ');

  // Pick a random position to corrupt
  const mistakeIndex = Math.floor(Math.random() * words.length);
  const originalWord = words[mistakeIndex];

  // Pick a replacement word from wrong answers that differs from the original
  // Try to find a single word from wrong answers
  let wrongWord = '';
  const candidates: string[] = [];
  for (const w of wrong) {
    for (const part of w.split(' ')) {
      const clean = part.replace(/[^a-zA-Z']/g, '');
      if (clean.length > 1 && clean.toLowerCase() !== originalWord.toLowerCase()) {
        candidates.push(clean);
      }
    }
  }

  if (candidates.length > 0) {
    wrongWord = pickRandom(candidates);
  } else {
    // Fallback: use first word of first wrong answer
    wrongWord = wrong[0].split(' ')[0] || 'wrong';
  }

  const displayWords = [...words];
  displayWords[mistakeIndex] = wrongWord;

  return { displayWords, mistakeIndex, wrongWord };
}

export default function FindMistakePage({ params }: PageProps) {
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

  // Puzzle state
  const [displayWords, setDisplayWords] = useState<string[]>([]);
  const [mistakeIndex, setMistakeIndex] = useState<number>(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

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

    const { displayWords: dw, mistakeIndex: mi } = buildPuzzle(idiom.idiom, idiom.wrong);
    setDisplayWords(dw);
    setMistakeIndex(mi);
    setSelectedIndex(null);
    setAnswerState('idle');
  }, [currentIndex, idioms]);

  const handleWordClick = useCallback((index: number) => {
    if (answerState !== 'idle') return;

    setSelectedIndex(index);
    const isCorrect = index === mistakeIndex;

    setAnswerState(isCorrect ? 'correct' : 'wrong');
    if (isCorrect) setCorrectCount(prev => prev + 1);

    setTimeout(() => {
      if (currentIndex < idioms.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        setShowCompletion(true);
      }
    }, 1500);
  }, [answerState, mistakeIndex, currentIndex, idioms]);

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
  const levelName = levelId.replace('level-', 'Level ');

  const getWordStyle = (index: number) => {
    // After answer
    if (answerState !== 'idle') {
      // The mistake position
      if (index === mistakeIndex) {
        // Always highlight the correct answer green
        return 'bg-green-500/20 border-green-500/50 text-green-400 cursor-default';
      }
      // The wrong click (only if different from mistakeIndex)
      if (answerState === 'wrong' && index === selectedIndex) {
        return 'bg-red-500/20 border-red-500/50 text-red-400 cursor-default';
      }
      // All other words — dim
      return 'bg-slate-800/30 border-white/5 text-zinc-600 cursor-default opacity-50';
    }

    // Idle — all words look clickable
    return 'bg-slate-800/60 border-white/10 text-white active:bg-slate-700/60 cursor-pointer';
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
            <h1 className="text-2xl font-bold text-white mb-2">Find the Mistake</h1>
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

        {/* Idiom with one wrong word — tap to identify */}
        <div className="mb-4">
          <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-3 text-center">
            Tap the wrong word
          </div>
          <div className="flex justify-center gap-2 flex-wrap">
            {displayWords.map((word, index) => (
              <button
                key={`word-${index}`}
                onClick={() => handleWordClick(index)}
                disabled={answerState !== 'idle'}
                className={`px-3 py-2.5 rounded-xl border-2 text-sm font-semibold transition-all duration-200 min-w-[2.5rem] ${getWordStyle(index)}`}
              >
                {word}
              </button>
            ))}
          </div>
        </div>

        {/* Hint after wrong answer */}
        {answerState === 'wrong' && (
          <p className="text-center text-xs text-slate-500 mt-3">
            The correct word is{' '}
            <span className="text-green-400 font-semibold">
              &quot;{currentIdiom.idiom.split(' ')[mistakeIndex]}&quot;
            </span>
          </p>
        )}
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
