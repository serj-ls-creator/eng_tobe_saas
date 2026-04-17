'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { TopBar } from '@/components/layout/TopBar';
import { Card } from '@/components/ui/card';
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

type PairState = 'idle' | 'correct' | 'wrong';

interface WordPair {
  basic: string;
  advanced: string;
}

export default function SynonymPairPage({ params }: PageProps) {
  const { categoryId, topicId, subcategoryId } = params;
  const router = useRouter();

  const points = usePoints();
  const [words, setWords] = useState<WordPair[]>([]);
  const [subcategory, setSubcategory] = useState<any>(null);
  const [mounted, setMounted] = useState(false);

  // Shuffled right column
  const [shuffledSynonyms, setShuffledSynonyms] = useState<string[]>([]);

  // Which left word is selected (index into words[])
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  // Which right synonym is selected (index into shuffledSynonyms[])
  const [selectedRight, setSelectedRight] = useState<number | null>(null);

  // Matched pairs: set of left indices that are correctly matched
  const [matchedLeft, setMatchedLeft] = useState<Set<number>>(new Set());
  // Matched right indices
  const [matchedRight, setMatchedRight] = useState<Set<number>>(new Set());

  // Wrong flash: indices that should flash red
  const [wrongLeft, setWrongLeft] = useState<number | null>(null);
  const [wrongRight, setWrongRight] = useState<number | null>(null);

  // Score: starts at 10, -1 per wrong attempt, min 0
  const [score, setScore] = useState(10);
  const [mistakes, setMistakes] = useState(0);

  const [showCompletion, setShowCompletion] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const category = CATS.find(cat => cat.id === categoryId);
    if (!category) return;

    const topic = category.topics?.find(t => t.id === topicId);
    if (!topic) return;

    const subcat = topic.subcategories?.find(s => s.id === subcategoryId);
    if (!subcat) return;

    setSubcategory(subcat);

    const loadWords = (data: any) => {
      const found = data.find((s: any) => s.id === subcategoryId);
      if (found) {
        const pairs: WordPair[] = found.words.map((w: any) => ({
          basic: w.basic,
          advanced: w.advanced,
        }));
        setWords(pairs);
        const synonyms = pairs.map(p => p.advanced);
        setShuffledSynonyms([...synonyms].sort(() => Math.random() - 0.5));
      }
    };

    if (categoryId === 'basic-advanced') {
      const dataMap: Record<string, any> = {
        people: PEOPLE,
        world: WORLD,
        life: LIFE,
        mind: MIND,
        digital: DIGITAL,
      };
      const data = dataMap[topicId];
      if (data) loadWords(data);
    } else if (categoryId === 'antonyms') {
      const dataMap: Record<string, any> = {
        character: CHARACTER,
        state: STATE,
        action: ACTION,
        feeling: FEELING,
      };
      const data = dataMap[topicId];
      if (data) loadWords(data);
    } else if (categoryId === 'rude-polite') {
      const dataMap: Record<string, any> = {
        'at-work': AT_WORK,
        'with-strangers': WITH_STRANGERS,
        'in-conflict': IN_CONFLICT,
        'online-texting': ONLINE_TEXTING,
      };
      const data = dataMap[topicId];
      if (data) loadWords(data);
    } else if (categoryId === 'formal-informal') {
      const dataMap: Record<string, any> = {
        'emails-messages': EMAILS_MESSAGES,
        'meetings-presentations': MEETINGS_PRESENTATIONS,
        'everyday-conversation': EVERYDAY_CONVERSATION,
        'written-documents': WRITTEN_DOCUMENTS,
      };
      const data = dataMap[topicId];
      if (data) loadWords(data);
    } else if (categoryId === 'time-words') {
      const dataMap: Record<string, any> = {
        'past-memory': PAST_MEMORY,
        'present-now': PRESENT_NOW,
        'future-plans': FUTURE_PLANS,
        'duration-frequency': DURATION_FREQUENCY,
      };
      const data = dataMap[topicId];
      if (data) loadWords(data);
    } else if (categoryId === 'slang') {
      const dataMap: Record<string, any> = {
        'gen-z-slang': GEN_Z_SLANG,
        'internet-social-media': INTERNET_SOCIAL_MEDIA,
        'emotions-reactions': EMOTIONS_REACTIONS,
        'street-urban': STREET_URBAN,
      };
      const data = dataMap[topicId];
      if (data) loadWords(data);
    }
  }, [mounted, categoryId, topicId, subcategoryId]);

  const handleSelectLeft = useCallback((index: number) => {
    if (isLocked) return;
    if (matchedLeft.has(index)) return;
    if (wrongLeft === index) return;

    setSelectedLeft(index);
    setSelectedRight(null);
  }, [isLocked, matchedLeft, wrongLeft]);

  const handleSelectRight = useCallback((index: number) => {
    if (isLocked) return;
    if (matchedRight.has(index)) return;
    if (selectedLeft === null) return;

    setSelectedRight(index);

    const leftWord = words[selectedLeft];
    const rightSynonym = shuffledSynonyms[index];
    const isCorrect = leftWord.advanced === rightSynonym;

    if (isCorrect) {
      // Mark as matched
      setMatchedLeft(prev => new Set(prev).add(selectedLeft));
      setMatchedRight(prev => new Set(prev).add(index));
      setSelectedLeft(null);
      setSelectedRight(null);

      // Check if all matched
      if (matchedLeft.size + 1 === words.length) {
        setTimeout(() => setShowCompletion(true), 600);
      }
    } else {
      // Wrong pair — flash red, deduct score
      setIsLocked(true);
      setWrongLeft(selectedLeft);
      setWrongRight(index);
      setMistakes(prev => prev + 1);
      setScore(prev => Math.max(0, prev - 1));

      setTimeout(() => {
        setWrongLeft(null);
        setWrongRight(null);
        setSelectedLeft(null);
        setSelectedRight(null);
        setIsLocked(false);
      }, 1000);
    }
  }, [isLocked, selectedLeft, words, shuffledSynonyms, matchedLeft, matchedRight]);

  const getLeftStyle = (index: number) => {
    if (matchedLeft.has(index)) {
      return 'bg-green-500/20 border-green-500/50 text-green-400 cursor-default';
    }
    if (wrongLeft === index) {
      return 'bg-red-500/20 border-red-500/50 text-red-400 cursor-default';
    }
    if (selectedLeft === index) {
      return 'bg-cyan-500/20 border-cyan-400/60 text-cyan-300 cursor-pointer ring-1 ring-cyan-400/40';
    }
    return 'bg-slate-800/60 border-white/10 text-white hover:bg-slate-700/60 hover:border-white/20 cursor-pointer';
  };

  const getRightStyle = (index: number) => {
    if (matchedRight.has(index)) {
      return 'bg-green-500/20 border-green-500/50 text-green-400 cursor-default';
    }
    if (wrongRight === index) {
      return 'bg-red-500/20 border-red-500/50 text-red-400 cursor-default';
    }
    if (selectedRight === index) {
      return 'bg-cyan-500/20 border-cyan-400/60 text-cyan-300 cursor-pointer ring-1 ring-cyan-400/40';
    }
    if (selectedLeft === null) {
      return 'bg-slate-800/60 border-white/10 text-slate-400 cursor-not-allowed opacity-60';
    }
    return 'bg-slate-800/60 border-white/10 text-white hover:bg-slate-700/60 hover:border-white/20 cursor-pointer';
  };

  const handleBackToActivities = () => {
    router.push(`/words/${categoryId}/${topicId}/${subcategoryId}`);
  };

  const handleBackToTopics = () => {
    router.push(`/words/${categoryId}/${topicId}`);
  };

  if (!mounted || !words.length || !subcategory) {
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

  const matchedCount = matchedLeft.size;
  const totalPairs = words.length;

  return (
    <div className="min-h-screen bg-black text-white relative" suppressHydrationWarning={true}>
      <TopBar points={points} />

      <FlyingWords words={words.map(w => w.advanced)} />

      <div className="container mx-auto px-4 py-8 relative z-10 max-w-2xl">
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
              Synonym Pair
            </h1>
            <p className="text-slate-400 mb-1">
              {subcategory.name}
            </p>
            <p className="text-xs text-slate-500">
              Select a word on the left, then its synonym on the right
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div className="flex justify-between items-center mb-6 px-1">
          <div className="text-sm text-slate-400">
            Matched:{' '}
            <span className="text-cyan-400 font-semibold">
              {matchedCount} / {totalPairs}
            </span>
          </div>
          <div className="text-sm text-slate-400">
            Score:{' '}
            <span className={`font-semibold ${score >= 8 ? 'text-green-400' : score >= 5 ? 'text-yellow-400' : 'text-red-400'}`}>
              {score} / 10
            </span>
          </div>
        </div>

        {/* Game grid */}
        <div className="grid grid-cols-2 gap-3">
          {/* Left column — basic words */}
          <div className="space-y-2">
            <div className="text-[10px] uppercase tracking-[0.25em] text-zinc-600 text-center mb-3">
              {categoryId === 'antonyms' ? 'Word' : categoryId === 'rude-polite' ? 'Rude' : categoryId === 'formal-informal' ? 'Informal' : 'Basic'}
            </div>
            {words.map((pair, index) => (
              <button
                key={`left-${index}`}
                onClick={() => handleSelectLeft(index)}
                disabled={matchedLeft.has(index) || isLocked}
                className={`w-full text-left px-4 py-3 rounded-xl border transition-all duration-200 text-sm font-medium ${getLeftStyle(index)}`}
              >
                {matchedLeft.has(index) && (
                  <span className="mr-2 text-green-400">✓</span>
                )}
                {pair.basic}
              </button>
            ))}
          </div>

          {/* Right column — shuffled synonyms */}
          <div className="space-y-2">
            <div className="text-[10px] uppercase tracking-[0.25em] text-zinc-600 text-center mb-3">
              {categoryId === 'antonyms' ? 'Antonym' : categoryId === 'rude-polite' ? 'Polite' : categoryId === 'formal-informal' ? 'Formal' : 'Advanced'}
            </div>
            {shuffledSynonyms.map((synonym, index) => (
              <button
                key={`right-${index}`}
                onClick={() => handleSelectRight(index)}
                disabled={matchedRight.has(index) || isLocked || selectedLeft === null}
                className={`w-full text-left px-4 py-3 rounded-xl border transition-all duration-200 text-sm font-medium ${getRightStyle(index)}`}
              >
                {matchedRight.has(index) && (
                  <span className="mr-2 text-green-400">✓</span>
                )}
                {synonym}
              </button>
            ))}
          </div>
        </div>

        {/* Hint */}
        {selectedLeft !== null && (
          <p className="text-center text-xs text-cyan-400/70 mt-4 animate-pulse">
            Now pick the synonym for &quot;{words[selectedLeft].basic}&quot;
          </p>
        )}
      </div>

      {/* Completion Modal */}
      {showCompletion && (
        <CompletionModal
          completed={score}
          total={10}
          categoryId={categoryId}
          subcategoryName={subcategory.name}
          onNextSubcategory={handleBackToActivities}
          onBackToTopics={handleBackToTopics}
        />
      )}
    </div>
  );
}
