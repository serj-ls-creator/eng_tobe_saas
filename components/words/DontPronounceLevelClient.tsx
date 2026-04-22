'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { TopBar } from '@/components/layout/TopBar';
import { Card } from '@/components/ui/card';
import { CompletionModal } from '@/components/ui/CompletionModal';
import { Progress } from '@/components/ui/progress';
import { SILENT_WORD_LEVELS } from '@/data/words/pronounce/silent_words';
import { usePoints } from '@/lib/usePoints';

interface DontPronounceLevelClientProps {
  levelId: string;
}

type AnswerState = 'idle' | 'correct' | 'wrong';

export function DontPronounceLevelClient({ levelId }: DontPronounceLevelClientProps) {
  const router = useRouter();
  const points = usePoints();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [answerState, setAnswerState] = useState<AnswerState>('idle');
  const [correctCount, setCorrectCount] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);

  const level = useMemo(
    () => SILENT_WORD_LEVELS.find((item) => item.id === levelId) ?? SILENT_WORD_LEVELS[0],
    [levelId],
  );

  const currentWord = level.words[currentIndex];

  const moveNext = () => {
    if (currentIndex < level.words.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedIndex(null);
      setAnswerState('idle');
      return;
    }

    setShowCompletion(true);
  };

  const handleSelect = (index: number) => {
    if (answerState !== 'idle') return;

    const isCorrect = index === currentWord.silentIndex;
    setSelectedIndex(index);
    setAnswerState(isCorrect ? 'correct' : 'wrong');

    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
    }

    window.setTimeout(() => {
      moveNext();
    }, 1500);
  };

  const getLetterStyle = (index: number) => {
    const base = 'w-12 h-14 rounded-xl border-2 flex items-center justify-center text-xl font-black transition-all duration-200';

    if (answerState === 'idle') {
      return `${base} bg-slate-800/60 border-white/10 text-white hover:bg-slate-700/70 hover:border-cyan-300/40 cursor-pointer`;
    }

    if (index === currentWord.silentIndex) {
      return `${base} bg-green-500/20 border-green-500/40 text-green-400`;
    }

    if (index === selectedIndex) {
      return `${base} bg-red-500/20 border-red-500/40 text-red-400`;
    }

    return `${base} bg-slate-900/40 border-white/5 text-zinc-600 cursor-default`;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <TopBar points={points} />

      <div className="content-shell pb-8">
        <div className="mb-4">
          <Link href="/words/pronounce/dont-pronounce" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
            ← Back to Levels
          </Link>
        </div>

        <div className="mb-6 text-center">
          <div className="mb-2 text-[10px] uppercase tracking-[0.3em] text-zinc-600">Silent Letter</div>
          <h1 className="text-3xl font-black text-white">Don&apos;t Pronounce</h1>
          <p className="mt-2 text-sm text-zinc-400">{level.name}</p>
        </div>

        <div className="mb-8">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-zinc-400">Progress</span>
            <span className="text-sm font-medium text-cyan-400">
              {currentIndex + 1} / {level.words.length}
            </span>
          </div>
          <Progress value={((currentIndex + 1) / level.words.length) * 100} />
        </div>

        <div className="mb-8">
          <Card className="rounded-[28px] border border-white/10 p-8 text-center">
            <div className="mb-3 text-[10px] uppercase tracking-[0.3em] text-zinc-600">Word</div>
            <h2 className="text-4xl font-black tracking-[0.04em] text-white">{currentWord.word}</h2>
          </Card>
        </div>

        <div className="mb-4 text-center text-[10px] uppercase tracking-[0.3em] text-zinc-600">
          Tap the silent letter
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {currentWord.word.split('').map((letter, index) => (
            <button
              key={`${currentWord.word}-${index}`}
              onClick={() => handleSelect(index)}
              disabled={answerState !== 'idle'}
              className={getLetterStyle(index)}
            >
              {letter}
            </button>
          ))}
        </div>

        {showCompletion && (
          <CompletionModal
            completed={correctCount}
            total={level.words.length}
            categoryId="pronounce"
            subcategoryName={`Don't Pronounce • ${level.name}`}
            onBackToTopics={() => router.push('/words/pronounce/dont-pronounce')}
          />
        )}
      </div>
    </div>
  );
}
