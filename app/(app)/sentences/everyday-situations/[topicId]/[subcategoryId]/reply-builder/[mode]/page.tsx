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
import { EVERYDAY_SITUATIONS, type DialogueItem } from '@/data/sentences/everyday-situations';

interface PageProps {
  params: {
    topicId: string;
    subcategoryId: string;
    mode: 'positive' | 'negative' | 'question' | 'mix';
  };
}

type AnswerState = 'idle' | 'correct' | 'wrong';

type ResponseType = 'positive' | 'negative' | 'question';

interface RoundItem {
  dialogue: DialogueItem;
  responseType: ResponseType;
  targetSentence: string;
}

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Tokenise a sentence into words (preserves punctuation attached to word)
function tokenise(sentence: string): string[] {
  return sentence.split(/\s+/).filter(Boolean);
}

const MODE_LABELS: Record<ResponseType, { label: string; color: string }> = {
  positive: { label: 'Positive Response', color: 'text-emerald-400' },
  negative: { label: 'Negative Response', color: 'text-red-400' },
  question: { label: 'Question Reply',    color: 'text-cyan-400'    },
};

export default function ReplyBuilderGamePage({ params }: PageProps) {
  const { topicId, subcategoryId, mode } = params;
  const router = useRouter();
  const points = usePoints();
  const { playCorrect, playWrong } = useSoundEffects();

  const [mounted, setMounted] = useState(false);
  const [rounds, setRounds] = useState<RoundItem[]>([]);
  const [subcategoryName, setSubcategoryName] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answerState, setAnswerState] = useState<AnswerState>('idle');
  const [correctCount, setCorrectCount] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);

  // Word slots
  const [shuffledWords, setShuffledWords] = useState<string[]>([]);
  const [placedWords, setPlacedWords] = useState<(string | null)[]>([]);
  const [usedIndices, setUsedIndices] = useState<number[]>([]);

  useEffect(() => { setMounted(true); }, []);

  // Build rounds on mount
  useEffect(() => {
    if (!mounted) return;

    const topic = EVERYDAY_SITUATIONS.find(t => t.id === topicId);
    if (!topic) return;
    const subcat = topic.subcategories.find(s => s.id === subcategoryId);
    if (!subcat) return;

    setSubcategoryName(subcat.name);

    const responseTypes: ResponseType[] = ['positive', 'negative', 'question'];

    const built: RoundItem[] = subcat.dialogues.map((dialogue, i) => {
      let responseType: ResponseType;
      if (mode === 'mix') {
        responseType = responseTypes[i % 3];
      } else {
        responseType = mode as ResponseType;
      }
      return {
        dialogue,
        responseType,
        targetSentence: dialogue[responseType],
      };
    });

    // Shuffle the order of rounds for mix mode
    setRounds(mode === 'mix' ? shuffleArray(built) : built);
  }, [mounted, topicId, subcategoryId, mode]);

  // Reset word slots when round changes
  useEffect(() => {
    if (!rounds.length) return;
    const round = rounds[currentIndex];
    if (!round) return;

    const words = tokenise(round.targetSentence);
    setShuffledWords(shuffleArray(words));
    setPlacedWords(Array(words.length).fill(null));
    setUsedIndices([]);
    setAnswerState('idle');
  }, [currentIndex, rounds]);

  const handleWordClick = useCallback((wordIndex: number) => {
    if (answerState !== 'idle') return;
    if (usedIndices.includes(wordIndex)) return;

    const newUsed = [...usedIndices, wordIndex];
    setUsedIndices(newUsed);

    const newPlaced = [...placedWords];
    const nextSlot = newPlaced.findIndex(slot => slot === null);
    if (nextSlot === -1) return;
    newPlaced[nextSlot] = shuffledWords[wordIndex];
    setPlacedWords(newPlaced);

    // Check if all words placed
    if (newPlaced.every(slot => slot !== null)) {
      const assembled = newPlaced.join(' ');
      const target = rounds[currentIndex].targetSentence;
      const isCorrect = assembled === target;

      setAnswerState(isCorrect ? 'correct' : 'wrong');

      if (isCorrect) {
        playCorrect();
        setCorrectCount(prev => prev + 1);
      } else {
        playWrong();
      }

      setTimeout(() => {
        if (currentIndex < rounds.length - 1) {
          setCurrentIndex(prev => prev + 1);
        } else {
          setShowCompletion(true);
        }
      }, 1500);
    }
  }, [answerState, currentIndex, placedWords, playCorrect, playWrong, rounds, shuffledWords, usedIndices]);

  const handleSlotClick = useCallback((slotIndex: number) => {
    if (answerState !== 'idle') return;
    if (placedWords[slotIndex] === null) return;

    const newUsed = usedIndices.filter((_, i) => i !== slotIndex);

    const rebuiltPlaced: (string | null)[] = Array(shuffledWords.length).fill(null);
    let slot = 0;
    for (const usedIdx of newUsed) {
      rebuiltPlaced[slot] = shuffledWords[usedIdx];
      slot++;
    }

    setPlacedWords(rebuiltPlaced);
    setUsedIndices(newUsed);
  }, [answerState, placedWords, shuffledWords, usedIndices]);

  const handleBackToActivities = () => {
    router.push(`/sentences/everyday-situations/${topicId}/${subcategoryId}`);
  };

  const handleBackToTopics = () => {
    router.push(`/sentences/everyday-situations/${topicId}`);
  };

  if (!mounted || !rounds.length || !subcategoryName) {
    return (
      <div className="min-h-screen bg-black text-white" suppressHydrationWarning>
        <TopBar points={points} />
        <div className="container mx-auto px-4 py-8 text-center">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  const round = rounds[currentIndex];
  const { label: typeLabel, color: typeColor } = MODE_LABELS[round.responseType];
  const targetWords = tokenise(round.targetSentence);

  const getSlotColor = (index: number) => {
    if (answerState === 'correct') return 'bg-green-500/20 border-green-500/40 text-green-400';
    if (answerState === 'wrong') {
      const correctWord = targetWords[index];
      return placedWords[index] === correctWord
        ? 'bg-green-500/20 border-green-500/40 text-green-400'
        : 'bg-red-500/20 border-red-500/40 text-red-400';
    }
    if (placedWords[index] !== null) return 'bg-slate-700/60 border-white/20 text-white';
    return 'bg-slate-800/40 border-white/10 text-zinc-600';
  };

  const getWordStyle = (index: number) => {
    if (usedIndices.includes(index)) return 'bg-slate-800/30 border-white/5 opacity-30 cursor-default';
    if (answerState !== 'idle') return 'bg-slate-800/30 border-white/5 opacity-50 cursor-default';
    return 'bg-slate-800/60 border-white/10 hover:bg-slate-700/60 hover:border-white/20 cursor-pointer';
  };

  return (
    <div className="min-h-screen bg-black text-white relative" suppressHydrationWarning>
      <TopBar points={points} />

      <FlyingWords words={rounds.map(r => r.dialogue.prompt.split(' ').slice(0, 3).join(' '))} />

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="mb-6">
          <Link
            href={`/sentences/everyday-situations/${topicId}/${subcategoryId}/reply-builder`}
            className="inline-flex items-center text-xs text-slate-500 hover:text-slate-300 transition-colors mb-4"
          >
            <span className="mr-2">←</span>
            Back to {subcategoryName}
          </Link>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-1">Reply Builder</h1>
            <p className="text-slate-400 text-sm">{subcategoryName}</p>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-slate-400">Progress</span>
            <span className="text-sm text-cyan-400 font-medium">
              {currentIndex + 1} / {rounds.length}
            </span>
          </div>
          <Progress value={((currentIndex + 1) / rounds.length) * 100} />
        </div>

        {/* Prompt card */}
        <div className="mb-4">
          <Card className="p-6 border border-white/10">
            <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-3">
              Statement / Question
            </div>
            <p className="text-lg text-white leading-relaxed">
              {round.dialogue.prompt}
            </p>
          </Card>
        </div>

        {/* Response type label */}
        <div className="mb-4 text-center">
          <span className={`text-xs uppercase tracking-[0.25em] font-semibold ${typeColor}`}>
            Build: {typeLabel}
          </span>
        </div>

        {/* Answer slots */}
        <div className="mb-5">
          <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-3 text-center">
            Your answer
          </div>
          <div className="flex justify-center gap-1.5 flex-wrap">
            {placedWords.map((word, index) => (
              <button
                key={`slot-${index}`}
                onClick={() => handleSlotClick(index)}
                className={`min-w-[40px] px-3 h-10 rounded-lg border-2 flex items-center justify-center text-sm font-medium transition-all duration-200 ${getSlotColor(index)}`}
              >
                {word ?? '·'}
              </button>
            ))}
          </div>
        </div>

        {/* Shuffled words */}
        <div className="mb-8">
          <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-3 text-center">
            Available words
          </div>
          <div className="flex justify-center gap-2 flex-wrap">
            {shuffledWords.map((word, index) => (
              <button
                key={`word-${index}`}
                onClick={() => handleWordClick(index)}
                className={`px-3 h-10 rounded-lg border-2 flex items-center justify-center text-sm font-medium transition-all duration-200 ${getWordStyle(index)}`}
              >
                {word}
              </button>
            ))}
            {answerState === 'idle' && usedIndices.length > 0 && (
              <button
                onClick={() => {
                  const newUsed = usedIndices.slice(0, -1);
                  const rebuiltPlaced: (string | null)[] = Array(shuffledWords.length).fill(null);
                  let slot = 0;
                  for (const usedIdx of newUsed) {
                    rebuiltPlaced[slot] = shuffledWords[usedIdx];
                    slot++;
                  }
                  setPlacedWords(rebuiltPlaced);
                  setUsedIndices(newUsed);
                }}
                className="w-10 h-10 rounded-lg border-2 border-white/10 bg-slate-800/60 hover:bg-slate-700/60 hover:border-white/20 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-200 cursor-pointer"
              >
                ⌫
              </button>
            )}
          </div>
        </div>
      </div>

      {showCompletion && (
        <CompletionModal
          completed={correctCount}
          total={rounds.length}
          categoryId="everyday-situations"
          subcategoryName={subcategoryName}
          progressPayload={{
            section: 'sentences',
            categoryId: 'everyday-situations',
            topicId,
            subcategoryId,
            activityId: 'reply-builder',
            activityName: 'Reply Builder',
            title: subcategoryName,
            href: `/sentences/everyday-situations/${topicId}/${subcategoryId}/reply-builder/${mode}`,
            score: correctCount,
            total: rounds.length,
          }}
          onNextSubcategory={handleBackToActivities}
          onBackToTopics={handleBackToTopics}
        />
      )}
    </div>
  );
}
