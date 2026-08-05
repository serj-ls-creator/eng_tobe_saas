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

// ─── Types ────────────────────────────────────────────────────────────────────

interface PageProps {
  params: {
    topicId: string;
    subcategoryId: string;
    mode: 'positive' | 'negative' | 'question' | 'mix';
  };
}

type AnswerState = 'idle' | 'correct' | 'wrong';
type ResponseType = 'positive' | 'negative' | 'question';

// A token in the sentence: either a visible word or a blank slot
type Token =
  | { type: 'word'; text: string }
  | { type: 'blank'; correctAnswer: string; slotIndex: number };

interface RoundItem {
  dialogue: DialogueItem;
  responseType: ResponseType;
  sentence: string;
  tokens: Token[];       // words + blanks in order
  blanks: string[];      // correct answers, indexed by slotIndex
}

// ─── Constants ────────────────────────────────────────────────────────────────

const TARGET_WORDS = ['at', 'on', 'in', 'of', 'a', 'the'];
const EMPTY_LABEL = 'nothing';
// All answer buttons shown to the player
const ANSWER_OPTIONS = [...TARGET_WORDS, EMPTY_LABEL];

const MODE_LABELS: Record<ResponseType, { label: string; color: string }> = {
  positive: { label: 'Positive Response', color: 'text-emerald-400' },
  negative: { label: 'Negative Response', color: 'text-red-400' },
  question: { label: 'Question Reply',    color: 'text-cyan-400'    },
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function shuffleArray<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Build tokens for a sentence.
 * - Real target words are removed and replaced with blank slots.
 * - If no target words found, insert 2 fake blanks at non-edge positions,
 *   whose correct answer is EMPTY_LABEL.
 */
function buildTokens(sentence: string): { tokens: Token[]; blanks: string[] } {
  const words = sentence.split(/\s+/).filter(Boolean);
  const tokens: Token[] = [];
  const blanks: string[] = [];

  // Check whether the sentence contains any target words
  const hasTargets = words.some(w => TARGET_WORDS.includes(w.toLowerCase()));

  if (hasTargets) {
    for (const word of words) {
      const lower = word.toLowerCase();
      if (TARGET_WORDS.includes(lower)) {
        const slotIndex = blanks.length;
        blanks.push(lower);
        tokens.push({ type: 'blank', correctAnswer: lower, slotIndex });
      } else {
        tokens.push({ type: 'word', text: word });
      }
    }
  } else {
    // No target words → insert 2 fake blanks at non-edge positions
    // We need at least 3 words to pick 2 non-edge indices
    const wordTokens: Token[] = words.map(w => ({ type: 'word' as const, text: w }));

    if (words.length <= 2) {
      // Edge case: very short sentence, just put one fake blank in middle
      const slotIndex = 0;
      blanks.push(EMPTY_LABEL);
      wordTokens.splice(1, 0, { type: 'blank', correctAnswer: EMPTY_LABEL, slotIndex });
      return { tokens: wordTokens, blanks };
    }

    // Pick 2 distinct non-edge indices (1 … length-2)
    const candidates = Array.from({ length: words.length - 2 }, (_, i) => i + 1);
    const shuffled = shuffleArray(candidates);
    const positions = shuffled.slice(0, 2).sort((a, b) => a - b);

    // Build tokens with blanks inserted (offset shifts as we insert)
    let offset = 0;
    for (const pos of positions) {
      const slotIndex = blanks.length;
      blanks.push(EMPTY_LABEL);
      wordTokens.splice(pos + offset, 0, { type: 'blank', correctAnswer: EMPTY_LABEL, slotIndex });
      offset++;
    }
    return { tokens: wordTokens, blanks };
  }

  return { tokens, blanks };
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function FillInGamePage({ params }: PageProps) {
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

  // filled[slotIndex] = answer chosen so far (null = not yet filled)
  const [filled, setFilled] = useState<(string | null)[]>([]);
  // which slot is active (next to fill)
  const [activeSlot, setActiveSlot] = useState(0);

  useEffect(() => { setMounted(true); }, []);

  // ── Build rounds ──────────────────────────────────────────────────────────
  useEffect(() => {
    if (!mounted) return;
    const topic = EVERYDAY_SITUATIONS.find(t => t.id === topicId);
    if (!topic) return;
    const subcat = topic.subcategories.find(s => s.id === subcategoryId);
    if (!subcat) return;

    setSubcategoryName(subcat.name);

    const responseTypes: ResponseType[] = ['positive', 'negative', 'question'];
    const built: RoundItem[] = subcat.dialogues.map((dialogue, i) => {
      const responseType: ResponseType =
        mode === 'mix' ? responseTypes[i % 3] : (mode as ResponseType);
      const sentence = dialogue[responseType];
      const { tokens, blanks } = buildTokens(sentence);
      return { dialogue, responseType, sentence, tokens, blanks };
    });

    setRounds(mode === 'mix' ? shuffleArray(built) : built);
  }, [mounted, topicId, subcategoryId, mode]);

  // ── Reset slot state on new round ─────────────────────────────────────────
  useEffect(() => {
    if (!rounds.length) return;
    const round = rounds[currentIndex];
    if (!round) return;
    setFilled(Array(round.blanks.length).fill(null));
    setActiveSlot(0);
    setAnswerState('idle');
  }, [currentIndex, rounds]);

  // ── Handle answer button click ────────────────────────────────────────────
  const handleAnswer = useCallback((option: string) => {
    if (answerState !== 'idle') return;
    const round = rounds[currentIndex];
    if (!round) return;

    const newFilled = [...filled];
    newFilled[activeSlot] = option;
    setFilled(newFilled);

    const nextSlot = activeSlot + 1;

    if (nextSlot < round.blanks.length) {
      // More slots to fill — just advance
      setActiveSlot(nextSlot);
    } else {
      // All slots filled — check answer
      const allCorrect = newFilled.every(
        (answer, idx) => answer === round.blanks[idx]
      );

      setAnswerState(allCorrect ? 'correct' : 'wrong');
      if (allCorrect) {
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
  }, [answerState, activeSlot, currentIndex, filled, playCorrect, playWrong, rounds]);

  // ── Remove last filled slot (undo) ────────────────────────────────────────
  const handleUndo = useCallback(() => {
    if (answerState !== 'idle') return;
    if (activeSlot === 0) return;
    const newFilled = [...filled];
    newFilled[activeSlot - 1] = null;
    setFilled(newFilled);
    setActiveSlot(activeSlot - 1);
  }, [answerState, activeSlot, filled]);

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
        <div className="container mx-auto px-4 py-8 text-center"><p>Loading...</p></div>
      </div>
    );
  }

  const round = rounds[currentIndex];
  const { label: typeLabel, color: typeColor } = MODE_LABELS[round.responseType];

  // ── Slot colour helpers ───────────────────────────────────────────────────
  const getSlotStyle = (slotIndex: number) => {
    if (answerState === 'correct')
      return 'bg-green-500/20 border-green-500/50 text-green-400';
    if (answerState === 'wrong') {
      const answer = filled[slotIndex];
      const correct = round.blanks[slotIndex];
      return answer === correct
        ? 'bg-green-500/20 border-green-500/50 text-green-400'
        : 'bg-red-500/20 border-red-500/50 text-red-400';
    }
    if (slotIndex === activeSlot)
      return 'bg-cyan-500/10 border-cyan-400/60 text-cyan-300 animate-pulse';
    if (filled[slotIndex] !== null)
      return 'bg-slate-700/60 border-white/20 text-white';
    return 'bg-slate-800/40 border-white/10 text-zinc-600';
  };

  const getSlotLabel = (slotIndex: number) => {
    const val = filled[slotIndex];
    if (val !== null) return val === EMPTY_LABEL ? '∅' : val;
    return '___';
  };

  const getAnswerBtnStyle = (option: string) => {
    const base =
      'px-4 h-10 rounded-lg border-2 text-sm font-medium transition-all duration-200 ';
    if (answerState !== 'idle')
      return base + 'bg-slate-800/30 border-white/5 opacity-50 cursor-default';
    return base + 'bg-slate-800/60 border-white/10 hover:bg-slate-700/60 hover:border-white/20 cursor-pointer';
  };

  // ── Render sentence with slots inline ────────────────────────────────────
  const renderSentence = () => (
    <p className="text-base text-white leading-relaxed flex flex-wrap gap-x-1 gap-y-2 items-center">
      {round.tokens.map((token, i) => {
        if (token.type === 'word') {
          return <span key={i}>{token.text}</span>;
        }
        // blank slot
        const si = token.slotIndex;
        const label = getSlotLabel(si);
        const showCorrect = answerState === 'wrong' && filled[si] !== round.blanks[si];
        return (
          <span key={i} className="inline-flex flex-col items-center gap-0.5">
            <button
              className={`min-w-[44px] px-2 h-8 rounded-lg border-2 text-xs font-bold transition-all duration-200 ${getSlotStyle(si)}`}
              onClick={() => {
                if (answerState === 'idle' && si < activeSlot) {
                  // allow clicking a previously-filled slot to re-activate it
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
              <span className="text-[9px] text-emerald-400 font-semibold">
                {round.blanks[si] === EMPTY_LABEL ? '∅' : round.blanks[si]}
              </span>
            )}
          </span>
        );
      })}
    </p>
  );

  return (
    <div className="min-h-screen bg-black text-white relative" suppressHydrationWarning>
      <TopBar points={points} />
      <FlyingWords words={rounds.map(r => r.dialogue.prompt.split(' ').slice(0, 3).join(' '))} />

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="mb-6">
          <Link
            href={`/sentences/everyday-situations/${topicId}/${subcategoryId}/fill-the-gap`}
            className="inline-flex items-center text-xs text-slate-500 hover:text-slate-300 transition-colors mb-4"
          >
            <span className="mr-2">←</span>
            Back to {subcategoryName}
          </Link>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-1">Fill the Gap</h1>
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

        {/* Prompt */}
        <div className="mb-4">
          <Card className="p-6 border border-white/10">
            <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-3">
              Statement / Question
            </div>
            <p className="text-lg text-white leading-relaxed">{round.dialogue.prompt}</p>
          </Card>
        </div>

        {/* Response type */}
        <div className="mb-4 text-center">
          <span className={`text-xs uppercase tracking-[0.25em] font-semibold ${typeColor}`}>
            Fill in: {typeLabel}
          </span>
        </div>

        {/* Sentence with blanks */}
        <div className="mb-6">
          <Card className="p-5 border border-white/10">
            <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-3">
              Complete the reply
            </div>
            {renderSentence()}
          </Card>
        </div>

        {/* Answer buttons */}
        <div className="mb-8">
          <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-3 text-center">
            Choose a word
          </div>
          <div className="flex justify-center gap-2 flex-wrap">
            {ANSWER_OPTIONS.map(option => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className={getAnswerBtnStyle(option)}
              >
                {option === EMPTY_LABEL ? '∅ nothing' : option}
              </button>
            ))}
            {answerState === 'idle' && activeSlot > 0 && (
              <button
                onClick={handleUndo}
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
            activityId: 'fill-the-gap',
            activityName: 'Fill the Gap',
            title: subcategoryName,
            href: `/sentences/everyday-situations/${topicId}/${subcategoryId}/fill-the-gap/${mode}`,
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
