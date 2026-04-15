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

export default function IdiomMultipleChoicePage({ params }: PageProps) {
  const { categoryId, levelId } = params;
  const router = useRouter();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [idioms, setIdioms] = useState<any[]>([]);
  const [category, setCategory] = useState<any>(null);
  const [mounted, setMounted] = useState(false);
  const [answerState, setAnswerState] = useState<AnswerState>('idle');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);

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

  useEffect(() => {
    if (!idioms.length) return;
    const currentIdiom = idioms[currentIndex];
    if (!currentIdiom) return;

    const allOptions = [currentIdiom.meaning, ...currentIdiom.wrong];
    const shuffled = [...allOptions].sort(() => Math.random() - 0.5);
    setShuffledOptions(shuffled);
    setAnswerState('idle');
    setSelectedIndex(null);
  }, [currentIndex, idioms]);

  const handleSelect = useCallback((option: string, index: number) => {
    if (answerState !== 'idle') return;

    const currentIdiom = idioms[currentIndex];
    const isCorrect = option === currentIdiom.meaning;

    setSelectedIndex(index);
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
  }, [answerState, currentIndex, idioms]);

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

  const getOptionStyle = (index: number) => {
    if (answerState === 'idle') {
      return 'bg-slate-800/60 border-white/10 hover:bg-slate-700/60 hover:border-white/20 cursor-pointer';
    }

    const isCorrectOption = shuffledOptions[index] === currentIdiom.meaning;

    if (answerState === 'correct' && index === selectedIndex) {
      return 'bg-green-500/20 border-green-500/40 text-green-400';
    }

    if (answerState === 'wrong') {
      if (index === selectedIndex) {
        return 'bg-red-500/20 border-red-500/40 text-red-400';
      }
      if (isCorrectOption) {
        return 'bg-green-500/20 border-green-500/40 text-green-400';
      }
    }

    return 'bg-slate-800/30 border-white/5 opacity-50';
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
              Multiple Choice
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

        {/* Idiom Display */}
        <div className="mb-8">
          <Card className="p-8 text-center border border-white/10">
            <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-3">
              Idiom
            </div>
            <h2 className="text-3xl font-bold text-white">
              {currentIdiom.idiom}
            </h2>
          </Card>
        </div>

        {/* Options */}
        <div className="space-y-3 max-w-md mx-auto">
          {shuffledOptions.map((option, index) => (
            <button
              key={`${currentIndex}-${index}`}
              onClick={() => handleSelect(option, index)}
              disabled={answerState !== 'idle'}
              className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${getOptionStyle(index)}`}
            >
              <span className="text-sm font-medium">{option}</span>
            </button>
          ))}
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
