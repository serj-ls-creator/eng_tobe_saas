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
import { articleLevels, type FillGapItem, type ArticleAnswer } from '@/data/grammar/article/fill_the_gap';

interface PageProps {
  params: {
    levelId: string;
  };
}

type AnswerState = 'idle' | 'correct' | 'wrong';

type Token =
  | { type: 'word'; text: string }
  | { type: 'blank'; correctAnswer: ArticleAnswer; slotIndex: number };

interface RoundItem {
  id: string;
  sentence: string;
  tokens: Token[];
  blanks: ArticleAnswer[];
  explanation: string;
}

const ANSWER_OPTIONS: { value: ArticleAnswer; label: string }[] = [
  { value: 'a', label: 'a' },
  { value: 'an', label: 'an' },
  { value: 'the', label: 'the' },
  { value: '', label: '∅ no article' },
];

function buildTokensFromItem(item: FillGapItem): { tokens: Token[]; blanks: ArticleAnswer[] } {
  const parts = item.sentence.split('___');
  const tokens: Token[] = [];
  const blanks: ArticleAnswer[] = [...item.answers];

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
        correctAnswer: item.answers[index] ?? '',
        slotIndex: index,
      });
    }
  });

  return { tokens, blanks };
}

export default function ArticlesFillGapGamePage({ params }: PageProps) {
  const { levelId } = params;
  const router = useRouter();
  const points = usePoints();
  const { playCorrect, playWrong } = useSoundEffects();

  const levelNum = useMemo(() => {
    const parsed = parseInt(levelId.replace('level-', ''), 10);
    return isNaN(parsed) ? 1 : parsed;
  }, [levelId]);

  const level = useMemo(() => {
    return articleLevels.find((l) => l.level === levelNum) ?? articleLevels[0];
  }, [levelNum]);

  const nextLevel = useMemo(() => {
    return articleLevels.find((l) => l.level === levelNum + 1);
  }, [levelNum]);

  const [mounted, setMounted] = useState(false);
  const [rounds, setRounds] = useState<RoundItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answerState, setAnswerState] = useState<AnswerState>('idle');
  const [correctCount, setCorrectCount] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);

  const [filled, setFilled] = useState<(ArticleAnswer | null)[]>([]);
  const [activeSlot, setActiveSlot] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !level) return;
    const built: RoundItem[] = level.items.map((item) => {
      const { tokens, blanks } = buildTokensFromItem(item);
      return {
        id: item.id,
        sentence: item.sentence,
        tokens,
        blanks,
        explanation: item.explanation,
      };
    });
    setRounds(built);
    setCurrentIndex(0);
    setCorrectCount(0);
    setShowCompletion(false);
  }, [mounted, level]);

  useEffect(() => {
    if (!rounds.length) return;
    const currentRound = rounds[currentIndex];
    if (!currentRound) return;
    setFilled(Array(currentRound.blanks.length).fill(null));
    setActiveSlot(0);
    setAnswerState('idle');
  }, [currentIndex, rounds]);

  const handleAnswer = useCallback(
    (option: ArticleAnswer) => {
      if (answerState !== 'idle') return;
      const currentRound = rounds[currentIndex];
      if (!currentRound) return;

      const newFilled = [...filled];
      newFilled[activeSlot] = option;
      setFilled(newFilled);

      const nextSlot = activeSlot + 1;

      if (nextSlot < currentRound.blanks.length) {
        setActiveSlot(nextSlot);
      } else {
        const allCorrect = newFilled.every(
          (ans, idx) => ans === currentRound.blanks[idx]
        );

        setAnswerState(allCorrect ? 'correct' : 'wrong');
        if (allCorrect) {
          playCorrect();
          setCorrectCount((prev) => prev + 1);
        } else {
          playWrong();
        }

        setTimeout(() => {
          if (currentIndex < rounds.length - 1) {
            setCurrentIndex((prev) => prev + 1);
          } else {
            setShowCompletion(true);
          }
        }, 1800);
      }
    },
    [activeSlot, answerState, currentIndex, filled, playCorrect, playWrong, rounds]
  );

  const handleUndo = useCallback(() => {
    if (answerState !== 'idle') return;
    if (activeSlot === 0) return;
    const newFilled = [...filled];
    newFilled[activeSlot - 1] = null;
    setFilled(newFilled);
    setActiveSlot(activeSlot - 1);
  }, [activeSlot, answerState, filled]);

  const handleBackToLevels = () => {
    router.push('/grammar/articles/fill-the-gap');
  };

  const handleNextLevel = () => {
    if (nextLevel) {
      router.push(`/grammar/articles/fill-the-gap/level-${nextLevel.level}`);
    } else {
      router.push('/grammar/articles/fill-the-gap');
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

  const getSlotStyle = (slotIndex: number) => {
    if (answerState === 'correct') {
      return 'bg-green-500/20 border-green-500/50 text-green-400 shadow-[0_0_12px_rgba(34,197,94,0.25)]';
    }
    if (answerState === 'wrong') {
      const ans = filled[slotIndex];
      const correct = currentRound.blanks[slotIndex];
      return ans === correct
        ? 'bg-green-500/20 border-green-500/50 text-green-400'
        : 'bg-red-500/20 border-red-500/50 text-red-400 shadow-[0_0_12px_rgba(239,68,68,0.25)]';
    }
    if (slotIndex === activeSlot) {
      return 'bg-cyan-500/10 border-cyan-400/60 text-cyan-300 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.2)]';
    }
    if (filled[slotIndex] !== null) {
      return 'bg-slate-700/60 border-white/20 text-white';
    }
    return 'bg-slate-800/40 border-white/10 text-zinc-600';
  };

  const getSlotLabel = (slotIndex: number) => {
    const val = filled[slotIndex];
    if (val !== null) return val === '' ? '∅' : val;
    return '___';
  };

  const getAnswerBtnStyle = () => {
    const base =
      'px-4 h-11 rounded-xl border-2 text-sm font-medium transition-all duration-200 ';
    if (answerState !== 'idle') {
      return base + 'bg-slate-800/30 border-white/5 opacity-50 cursor-default';
    }
    return (
      base +
      'bg-slate-800/60 border-white/10 hover:bg-slate-700/60 hover:border-cyan-400/40 cursor-pointer text-white'
    );
  };

  const renderSentence = () => (
    <div className="text-lg sm:text-xl text-white leading-relaxed flex flex-wrap gap-x-2 gap-y-3 items-center justify-start">
      {currentRound.tokens.map((token, i) => {
        if (token.type === 'word') {
          return (
            <span key={i} className="font-normal text-zinc-100">
              {token.text}
            </span>
          );
        }

        const si = token.slotIndex;
        const label = getSlotLabel(si);
        const showCorrect =
          answerState === 'wrong' && filled[si] !== currentRound.blanks[si];

        return (
          <span key={i} className="inline-flex flex-col items-center gap-1">
            <button
              type="button"
              className={`min-w-[48px] px-2.5 h-9 rounded-xl border-2 text-xs sm:text-sm font-bold transition-all duration-200 ${getSlotStyle(
                si
              )}`}
              onClick={() => {
                if (answerState === 'idle' && si < activeSlot) {
                  const newFilled = [...filled];
                  newFilled[si] = null;
                  for (let j = si + 1; j < newFilled.length; j++) newFilled[j] = null;
                  setFilled(newFilled);
                  setActiveSlot(si);
                }
              }}
            >
              {label}
            </button>
            {showCorrect && (
              <span className="text-[10px] text-emerald-400 font-bold tracking-wider">
                {currentRound.blanks[si] === '' ? '∅' : currentRound.blanks[si]}
              </span>
            )}
          </span>
        );
      })}
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white relative" suppressHydrationWarning>
      <TopBar points={points} />
      <FlyingWords words={['a', 'an', 'the', 'zero article', 'grammar', 'practice']} />

      <div className="container mx-auto px-4 py-8 relative z-10 max-w-2xl">
        {/* Header */}
        <div className="mb-6">
          <Link
            href="/grammar/articles/fill-the-gap"
            className="inline-flex items-center text-xs text-slate-500 hover:text-slate-300 transition-colors mb-4"
          >
            <span className="mr-2">&larr;</span>
            Back to Levels
          </Link>
          <div className="text-center">
            <div className="text-[10px] uppercase tracking-[0.28em] text-cyan-300 mb-1">
              Articles &middot; Level {level.level}
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white mb-1">{level.title}</h1>
            <p className="text-slate-400 text-xs sm:text-sm">{level.description}</p>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs sm:text-sm text-slate-400">Progress</span>
            <span className="text-xs sm:text-sm text-cyan-400 font-semibold">
              {currentIndex + 1} / {rounds.length}
            </span>
          </div>
          <Progress value={((currentIndex + 1) / rounds.length) * 100} />
        </div>

        {/* Sentence with blanks */}
        <div className="mb-6">
          <Card className="p-6 border border-white/10 bg-slate-900/60 backdrop-blur-sm">
            <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-4">
              Choose the correct article for each blank
            </div>
            {renderSentence()}

            {/* Explanation on answer */}
            {answerState !== 'idle' && currentRound.explanation && (
              <div
                className={`mt-5 p-3.5 rounded-xl border text-xs sm:text-sm leading-relaxed transition-all ${
                  answerState === 'correct'
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                    : 'bg-red-500/10 border-red-500/30 text-zinc-200'
                }`}
              >
                <div className="font-bold text-[10px] uppercase tracking-wider mb-1 text-zinc-400">
                  Rule & Explanation
                </div>
                <div>{currentRound.explanation}</div>
              </div>
            )}
          </Card>
        </div>

        {/* Answer buttons */}
        <div className="mb-8">
          <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-3 text-center">
            Select an article
          </div>
          <div className="flex justify-center gap-2.5 flex-wrap">
            {ANSWER_OPTIONS.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(option.value)}
                className={getAnswerBtnStyle()}
              >
                {option.label}
              </button>
            ))}
            {answerState === 'idle' && activeSlot > 0 && (
              <button
                onClick={handleUndo}
                className="w-11 h-11 rounded-xl border-2 border-white/10 bg-slate-800/60 hover:bg-slate-700/60 hover:border-white/20 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-200 cursor-pointer text-base"
                title="Undo last selection"
              >
                &#9003;
              </button>
            )}
          </div>
        </div>
      </div>

      {showCompletion && (
        <CompletionModal
          completed={correctCount}
          total={rounds.length}
          categoryId="articles"
          subcategoryName={`Level ${level.level}: ${level.title}`}
          progressPayload={{
            section: 'grammar',
            categoryId: 'articles',
            topicId: 'fill-the-gap',
            levelId: `level-${level.level}`,
            activityId: 'fill-the-gap',
            activityName: 'Fill the Gap',
            title: `Articles — Level ${level.level}: ${level.title}`,
            href: `/grammar/articles/fill-the-gap/level-${level.level}`,
            score: correctCount,
            total: rounds.length,
          }}
          onNextSubcategory={nextLevel ? handleNextLevel : undefined}
          onBackToTopics={handleBackToLevels}
        />
      )}
    </div>
  );
}
