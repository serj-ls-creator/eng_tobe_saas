'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { TopBar } from '@/components/layout/TopBar';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CompletionModal } from '@/components/ui/CompletionModal';
import { FlyingWords } from '@/components/ui/FlyingWords';
import { useSoundEffects } from '@/hooks/useSoundEffects';
import { usePoints } from '@/lib/usePoints';
import { A1_C2_PHRASES } from '@/data/sentences/a1-c2-phrases';

interface GameQuestion {
  id: string;
  a1Phrase: string;
  correctOptions: string[];
  wrongOption: string;
  allOptions: string[];
}

type AnswerState = 'idle' | 'correct' | 'wrong';

export default function ErrorHuntPage() {
  const router = useRouter();
  const points = usePoints();
  const { playCorrect, playWrong } = useSoundEffects();
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questions, setQuestions] = useState<GameQuestion[]>([]);
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

  // Generate game questions
  useEffect(() => {
    if (!mounted) return;

    const generateQuestions = () => {
      const gameQuestions: GameQuestion[] = [];
      const usedPhrases = new Set<string>();
      
      // Get 10 random phrases
      const shuffledPhrases = [...A1_C2_PHRASES].sort(() => Math.random() - 0.5);
      const selectedPhrases = shuffledPhrases.slice(0, 10);
      
      for (const phrase of selectedPhrases) {
        if (usedPhrases.has(phrase.id)) continue;
        usedPhrases.add(phrase.id);
        
        const a1Phrase = phrase.levels.A1;
        const correctOptions = [
          phrase.levels.A2,
          phrase.levels.B1,
          phrase.levels.B2,
          phrase.levels.C1,
          phrase.levels.C2
        ];
        
        // Get a wrong option from another phrase
        let wrongOption = '';
        const otherPhrases = A1_C2_PHRASES.filter(p => p.id !== phrase.id);
        if (otherPhrases.length > 0) {
          const randomPhrase = otherPhrases[Math.floor(Math.random() * otherPhrases.length)];
          const levels = ['A2', 'B1', 'B2', 'C1', 'C2'];
          const randomLevel = levels[Math.floor(Math.random() * levels.length)];
          wrongOption = randomPhrase.levels[randomLevel as keyof typeof randomPhrase.levels];
        }
        
        // Mix all options
        const allOptions = [...correctOptions, wrongOption].sort(() => Math.random() - 0.5);
        
        gameQuestions.push({
          id: phrase.id,
          a1Phrase,
          correctOptions,
          wrongOption,
          allOptions
        });
      }
      
      return gameQuestions;
    };

    const gameQuestions = generateQuestions();
    setQuestions(gameQuestions);
  }, [mounted]);

  // Shuffle options whenever current question changes
  useEffect(() => {
    if (!questions.length) return;
    const currentQuestion = questions[currentIndex];
    if (!currentQuestion) return;

    setShuffledOptions(currentQuestion.allOptions);
    setAnswerState('idle');
    setSelectedIndex(null);
  }, [currentIndex, questions]);

  const handleSelect = useCallback((option: string, index: number) => {
    if (answerState !== 'idle') return;

    const currentQuestion = questions[currentIndex];
    const isWrongOption = option === currentQuestion.wrongOption;

    setSelectedIndex(index);
    setAnswerState(isWrongOption ? 'correct' : 'wrong');

    if (isWrongOption) {
      playCorrect();
    } else {
      playWrong();
    }

    if (isWrongOption) {
      setCorrectCount(prev => prev + 1);
    }

    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        setShowCompletion(true);
      }
    }, 1500);
  }, [answerState, currentIndex, playCorrect, playWrong, questions]);

  const handleBackToActivities = () => {
    router.push('/sentences/a1-c2');
  };

  if (!mounted || !questions.length) {
    return (
      <div className="min-h-screen bg-black text-white" suppressHydrationWarning={true}>
        <TopBar points={points} />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p>Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  const getOptionStyle = (index: number) => {
    if (answerState === 'idle') {
      return 'bg-slate-800/60 border-white/10 hover:bg-slate-700/60 hover:border-white/20 cursor-pointer';
    }

    const isWrongOption = shuffledOptions[index] === currentQuestion.wrongOption;

    if (answerState === 'correct' && index === selectedIndex) {
      // Player found the wrong option - show green
      return 'bg-green-500/20 border-green-500/40 text-green-400';
    }

    if (answerState === 'wrong') {
      if (index === selectedIndex) {
        // Player selected a correct option (which is wrong for the game) - show red
        return 'bg-red-500/20 border-red-500/40 text-red-400';
      }
      if (isWrongOption) {
        // Show the actual wrong option in green so player can see it
        return 'bg-green-500/20 border-green-500/40 text-green-400';
      }
    }

    return 'bg-slate-800/30 border-white/5 opacity-50';
  };

  return (
    <div className="min-h-screen bg-black text-white relative" suppressHydrationWarning={true}>
      <TopBar points={points} />

      <FlyingWords words={questions.map(q => q.a1Phrase)} />

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/sentences/a1-c2"
            className="inline-flex items-center text-xs text-slate-500 hover:text-slate-300 transition-colors mb-4"
          >
            <span className="mr-2">←</span>
            Back to A1 to C2
          </Link>

          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-2">
              Error Hunt
            </h1>
            <p className="text-slate-400">
              Find the incorrect option for each phrase
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-slate-400">Progress</span>
            <span className="text-sm text-cyan-400 font-medium">
              {currentIndex + 1} / {questions.length}
            </span>
          </div>
          <Progress value={((currentIndex + 1) / questions.length) * 100} />
        </div>

        {/* A1 Phrase Display */}
        <div className="mb-8">
          <Card className="p-8 text-center border border-white/10">
            <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-3">
              A1 Phrase
            </div>
            <h2 className="text-3xl font-bold text-white">
              {currentQuestion.a1Phrase}
            </h2>
          </Card>
        </div>

        {/* Options */}
        <div className="space-y-3 max-w-md mx-auto">
          <div className="text-center mb-4">
            <p className="text-sm text-slate-400">
              Which option is <span className="text-red-400 font-semibold">incorrect</span>?
            </p>
          </div>
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
          total={questions.length}
          categoryId="sentences"
          subcategoryName="Error Hunt"
          words={questions.filter((_, index) => index < correctCount).map(q => q.a1Phrase)}
          onNextSubcategory={handleBackToActivities}
          onBackToTopics={handleBackToActivities}
        />
      )}
    </div>
  );
}
