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

export default function MultipleChoicePage({ params }: PageProps) {
  const { categoryId, topicId, subcategoryId } = params;
  const router = useRouter();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [words, setWords] = useState<any[]>([]);
  const [subcategory, setSubcategory] = useState<any>(null);
  const [mounted, setMounted] = useState(false);
  const [answerState, setAnswerState] = useState<AnswerState>('idle');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);

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

  // Shuffle options whenever current word changes
  useEffect(() => {
    if (!words.length) return;
    const currentWord = words[currentIndex];
    if (!currentWord) return;

    const allOptions = [currentWord.advanced, ...currentWord.wrong];
    const shuffled = [...allOptions].sort(() => Math.random() - 0.5);
    setShuffledOptions(shuffled);
    setAnswerState('idle');
    setSelectedIndex(null);
  }, [currentIndex, words]);

  const handleSelect = useCallback((option: string, index: number) => {
    if (answerState !== 'idle') return;

    const currentWord = words[currentIndex];
    const isCorrect = option === currentWord.advanced;

    setSelectedIndex(index);
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
  }, [answerState, currentIndex, words]);

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

  const getOptionStyle = (index: number) => {
    if (answerState === 'idle') {
      return 'bg-slate-800/60 border-white/10 hover:bg-slate-700/60 hover:border-white/20 cursor-pointer';
    }

    const isCorrectOption = shuffledOptions[index] === currentWord.advanced;

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
              Multiple Choice
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
            <h2 className="text-3xl font-bold text-white mb-2">
              {currentWord.basic}
            </h2>
            <p className="text-cyan-400 text-sm">
              {currentWord.transcription}
            </p>
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
