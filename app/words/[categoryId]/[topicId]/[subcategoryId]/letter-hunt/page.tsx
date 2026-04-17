'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { TopBar } from '@/components/layout/TopBar';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CompletionModal } from '@/components/ui/CompletionModal';
import { FlyingWords } from '@/components/ui/FlyingWords';
import { usePoints } from '@/lib/usePoints';
import { PEOPLE } from '@/data/words/basicadvanced/people';
import { WORLD } from '@/data/words/basicadvanced/world';
import { LIFE } from '@/data/words/basicadvanced/life';
import { MIND } from '@/data/words/basicadvanced/mind';
import { DIGITAL } from '@/data/words/basicadvanced/digital';
import { CHARACTER } from '@/data/words/antonyms/character';
import { STATE } from '@/data/words/antonyms/state';
import { ACTION } from '@/data/words/antonyms/action';
import { FEELING } from '@/data/words/antonyms/feeling';
import { AT_WORK } from '@/data/words/rudepolite/at_work';
import { WITH_STRANGERS } from '@/data/words/rudepolite/with_strangers';
import { IN_CONFLICT } from '@/data/words/rudepolite/in_conflict';
import { ONLINE_TEXTING } from '@/data/words/rudepolite/online_texting';
import { EMAILS_MESSAGES } from '@/data/words/formalinformal/emails_messages';
import { MEETINGS_PRESENTATIONS } from '@/data/words/formalinformal/meetings_presentations';
import { EVERYDAY_CONVERSATION } from '@/data/words/formalinformal/everyday_conversation';
import { WRITTEN_DOCUMENTS } from '@/data/words/formalinformal/written_documents';
import { PAST_MEMORY } from '@/data/words/timewords/past_memory';
import { PRESENT_NOW } from '@/data/words/timewords/present_now';
import { FUTURE_PLANS } from '@/data/words/timewords/future_plans';
import { DURATION_FREQUENCY } from '@/data/words/timewords/duration_frequency';
import { GEN_Z_SLANG } from '@/data/words/slang/gen_z_slang';
import { INTERNET_SOCIAL_MEDIA } from '@/data/words/slang/internet_social_media';
import { EMOTIONS_REACTIONS } from '@/data/words/slang/emotions_reactions';
import { STREET_URBAN } from '@/data/words/slang/street_urban';
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
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Build the puzzle for one word:
 * - hiddenIndices: positions in `advanced` that are blanked out
 * - letterPool: shuffled array of { letter, id } — missing letters + decoys
 */
function buildPuzzle(advanced: string, wrong: string[]) {
  const letters = advanced.split('');
  const len = letters.length;

  // Hide roughly half the letters (min 2, max len-1)
  const hideCount = Math.max(2, Math.min(len - 1, Math.ceil(len / 2)));

  // Pick random indices to hide
  const allIndices = Array.from({ length: len }, (_, i) => i);
  const hiddenIndices = shuffleArray(allIndices).slice(0, hideCount);

  // Collect the missing letters
  const missingLetters = hiddenIndices.map(i => letters[i]);

  // Collect decoy letters from wrong answers (take first few unique letters not already in pool)
  const decoyCount = Math.min(3, hideCount); // add up to 3 decoys
  const decoys: string[] = [];
  for (const w of wrong) {
    for (const ch of w.split('')) {
      if (decoys.length >= decoyCount) break;
      // Only add letters that aren't already in missingLetters pool (to keep it fair-ish)
      if (!missingLetters.includes(ch) && /[a-zA-Z]/.test(ch)) {
        decoys.push(ch);
      }
    }
    if (decoys.length >= decoyCount) break;
  }

  // Build pool: missing + decoys, each with unique id
  const pool = shuffleArray([
    ...missingLetters.map((letter, i) => ({ letter, id: `m-${i}` })),
    ...decoys.map((letter, i) => ({ letter, id: `d-${i}` })),
  ]);

  return { hiddenIndices: new Set(hiddenIndices), pool };
}

export default function LetterHuntPage({ params }: PageProps) {
  const { categoryId, topicId, subcategoryId } = params;
  const router = useRouter();

  const points = usePoints();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [words, setWords] = useState<any[]>([]);
  const [subcategory, setSubcategory] = useState<any>(null);
  const [mounted, setMounted] = useState(false);
  const [answerState, setAnswerState] = useState<AnswerState>('idle');
  const [correctCount, setCorrectCount] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);

  // Puzzle state
  const [hiddenIndices, setHiddenIndices] = useState<Set<number>>(new Set());
  const [letterPool, setLetterPool] = useState<{ letter: string; id: string }[]>([]);
  // Slots: array matching advanced.length — null = empty, string = filled letter
  const [slots, setSlots] = useState<(string | null)[]>([]);
  // Which pool ids have been used
  const [usedIds, setUsedIds] = useState<string[]>([]);

  useEffect(() => { setMounted(true); }, []);

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
        people: PEOPLE, world: WORLD, life: LIFE, mind: MIND, digital: DIGITAL,
      };
      const data = dataMap[topicId];
      if (data) {
        const found = data.find((s: any) => s.id === subcategoryId);
        if (found) setWords(found.words);
      }
    } else if (categoryId === 'antonyms') {
      const dataMap: Record<string, any> = {
        character: CHARACTER,
        state: STATE,
        action: ACTION,
        feeling: FEELING,
      };
      const data = dataMap[topicId];
      if (data) {
        const found = data.find((s: any) => s.id === subcategoryId);
        if (found) setWords(found.words);
      }
    } else if (categoryId === 'rude-polite') {
      const dataMap: Record<string, any> = {
        'at-work': AT_WORK,
        'with-strangers': WITH_STRANGERS,
        'in-conflict': IN_CONFLICT,
        'online-texting': ONLINE_TEXTING,
      };
      const data = dataMap[topicId];
      if (data) {
        const found = data.find((s: any) => s.id === subcategoryId);
        if (found) setWords(found.words);
      }
    } else if (categoryId === 'formal-informal') {
      const dataMap: Record<string, any> = {
        'emails-messages': EMAILS_MESSAGES,
        'meetings-presentations': MEETINGS_PRESENTATIONS,
        'everyday-conversation': EVERYDAY_CONVERSATION,
        'written-documents': WRITTEN_DOCUMENTS,
      };
      const data = dataMap[topicId];
      if (data) {
        const found = data.find((s: any) => s.id === subcategoryId);
        if (found) setWords(found.words);
      }
    } else if (categoryId === 'time-words') {
      const dataMap: Record<string, any> = {
        'past-memory': PAST_MEMORY,
        'present-now': PRESENT_NOW,
        'future-plans': FUTURE_PLANS,
        'duration-frequency': DURATION_FREQUENCY,
      };
      const data = dataMap[topicId];
      if (data) {
        const found = data.find((s: any) => s.id === subcategoryId);
        if (found) setWords(found.words);
      }
    } else if (categoryId === 'slang') {
      const dataMap: Record<string, any> = {
        'gen-z-slang': GEN_Z_SLANG,
        'internet-social-media': INTERNET_SOCIAL_MEDIA,
        'emotions-reactions': EMOTIONS_REACTIONS,
        'street-urban': STREET_URBAN,
      };
      const data = dataMap[topicId];
      if (data) {
        const found = data.find((s: any) => s.id === subcategoryId);
        if (found) setWords(found.words);
      }
    }
  }, [mounted, categoryId, topicId, subcategoryId]);

  // Build puzzle when word changes
  useEffect(() => {
    if (!words.length) return;
    const word = words[currentIndex];
    if (!word) return;

    const { hiddenIndices: hi, pool } = buildPuzzle(word.advanced, word.wrong);
    setHiddenIndices(hi);
    setLetterPool(pool);
    setSlots(Array(word.advanced.length).fill(null));
    setUsedIds([]);
    setAnswerState('idle');
  }, [currentIndex, words]);

  // Find next empty hidden slot
  const nextEmptySlot = useCallback((currentSlots: (string | null)[]) => {
    const hiddenArr = Array.from(hiddenIndices).sort((a, b) => a - b);
    return hiddenArr.find(i => currentSlots[i] === null) ?? -1;
  }, [hiddenIndices]);

  const handleLetterClick = useCallback((id: string, letter: string) => {
    if (answerState !== 'idle') return;
    if (usedIds.includes(id)) return;

    const targetSlot = nextEmptySlot(slots);
    if (targetSlot === -1) return;

    const newSlots = [...slots];
    newSlots[targetSlot] = letter;
    const newUsed = [...usedIds, id];

    setSlots(newSlots);
    setUsedIds(newUsed);

    // Check if all hidden slots are filled
    const allFilled = Array.from(hiddenIndices).every(i => newSlots[i] !== null);
    if (allFilled) {
      const word = words[currentIndex];
      const isCorrect = word.advanced.split('').every(
        (ch: string, i: number) => newSlots[i] === ch || !hiddenIndices.has(i)
      );

      setAnswerState(isCorrect ? 'correct' : 'wrong');
      if (isCorrect) setCorrectCount(prev => prev + 1);

      setTimeout(() => {
        if (currentIndex < words.length - 1) {
          setCurrentIndex(prev => prev + 1);
        } else {
          setShowCompletion(true);
        }
      }, 1500);
    }
  }, [answerState, usedIds, slots, hiddenIndices, nextEmptySlot, words, currentIndex]);

  // Erase last placed letter
  const handleErase = useCallback(() => {
    if (answerState !== 'idle') return;
    if (usedIds.length === 0) return;

    const lastId = usedIds[usedIds.length - 1];
    const newUsed = usedIds.slice(0, -1);

    // Find the slot that holds the letter placed by lastId
    // We placed letters in order into hidden slots — reconstruct
    const hiddenArr = Array.from(hiddenIndices).sort((a, b) => a - b);
    const slotToErase = hiddenArr[newUsed.length]; // the slot at position newUsed.length

    const newSlots = [...slots];
    newSlots[slotToErase] = null;

    setSlots(newSlots);
    setUsedIds(newUsed);
  }, [answerState, usedIds, slots, hiddenIndices]);

  const handleBackToActivities = () => router.push(`/words/${categoryId}/${topicId}/${subcategoryId}`);
  const handleBackToTopics = () => router.push(`/words/${categoryId}/${topicId}`);

  if (!mounted || !words.length || !subcategory) {
    return (
      <div className="min-h-screen bg-black text-white" suppressHydrationWarning={true}>
        <TopBar points={points} />
        <div className="container mx-auto px-4 py-8 text-center"><p>Loading...</p></div>
      </div>
    );
  }

  const currentWord = words[currentIndex];

  // Slot color
  const getSlotStyle = (index: number) => {
    if (!hiddenIndices.has(index)) {
      // Visible letter — static
      return 'bg-slate-900/60 border-white/5 text-zinc-400 cursor-default';
    }
    if (answerState === 'correct') {
      return 'bg-green-500/20 border-green-500/40 text-green-400';
    }
    if (answerState === 'wrong') {
      const correct = currentWord.advanced[index];
      const placed = slots[index];
      if (placed === correct) return 'bg-green-500/20 border-green-500/40 text-green-400';
      return 'bg-red-500/20 border-red-500/40 text-red-400';
    }
    if (slots[index] !== null) return 'bg-slate-700/60 border-white/20 text-white';
    // Next to fill — highlight
    const nextSlot = nextEmptySlot(slots);
    if (index === nextSlot) return 'bg-slate-800/60 border-cyan-400/40 text-zinc-600 animate-pulse';
    return 'bg-slate-800/40 border-white/10 text-zinc-600';
  };

  const getPoolLetterStyle = (id: string) => {
    if (usedIds.includes(id)) return 'bg-slate-800/30 border-white/5 opacity-30 cursor-default';
    if (answerState !== 'idle') return 'bg-slate-800/30 border-white/5 opacity-50 cursor-default';
    return 'bg-slate-800/60 border-white/10 hover:bg-slate-700/60 hover:border-white/20 cursor-pointer';
  };

  return (
    <div className="min-h-screen bg-black text-white relative" suppressHydrationWarning={true}>
      <TopBar points={points} />
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
            <h1 className="text-2xl font-bold text-white mb-2">Letter Hunt</h1>
            <p className="text-slate-400">{subcategory.name}</p>
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

        {/* Basic word */}
        <div className="mb-8">
          <Card className="p-8 text-center border border-white/10">
            <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-3">
              {categoryId === 'antonyms' ? 'Word' : categoryId === 'rude-polite' ? 'Rude' : categoryId === 'formal-informal' ? 'Informal' : 'Basic word'}
            </div>
            <h2 className="text-3xl font-bold text-white">{currentWord.basic}</h2>
          </Card>
        </div>

        {/* Synonym with blanks */}
        <div className="mb-6">
          <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-3 text-center">
            {categoryId === 'antonyms' ? 'Antonym' : categoryId === 'rude-polite' ? 'Polite' : categoryId === 'formal-informal' ? 'Formal' : 'Advanced synonym'}
          </div>
          <div className="flex justify-center gap-1.5 flex-wrap">
            {currentWord.advanced.split('').map((letter: string, index: number) => {
              const isSpace = letter === ' ';
              if (isSpace) {
                return <div key={`slot-${index}`} className="w-3" />;
              }
              return (
                <div
                  key={`slot-${index}`}
                  className={`w-10 h-12 rounded-lg border-2 flex items-center justify-center text-lg font-bold transition-all duration-200 ${getSlotStyle(index)}`}
                >
                  {hiddenIndices.has(index)
                    ? (slots[index] ?? '·')
                    : letter}
                </div>
              );
            })}
          </div>
        </div>

        {/* Letter pool */}
        <div className="mb-8">
          <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 mb-3 text-center">
            Missing letters
          </div>
          <div className="flex justify-center gap-2 flex-wrap items-center">
            {letterPool.map(({ letter, id }) => (
              <button
                key={id}
                onClick={() => handleLetterClick(id, letter)}
                className={`w-10 h-12 rounded-lg border-2 flex items-center justify-center text-lg font-bold transition-all duration-200 ${getPoolLetterStyle(id)}`}
              >
                {letter}
              </button>
            ))}
            {answerState === 'idle' && usedIds.length > 0 && (
              <button
                onClick={handleErase}
                className="w-10 h-12 rounded-lg border-2 border-white/10 bg-slate-800/60 hover:bg-slate-700/60 hover:border-white/20 flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-200 cursor-pointer"
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
