'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { TopBar } from '@/components/layout/TopBar';
import { Card } from '@/components/ui/card';
import { CompletionModal } from '@/components/ui/CompletionModal';
import { FlyingWords } from '@/components/ui/FlyingWords';
import { usePoints } from '@/lib/usePoints';
import { SENT_CATS } from '@/constants/categories';
import { WORK_CAREER, RELATIONSHIPS_SOCIAL, MIND_EMOTIONS, DAILY_LIFE, PhrasalVerb, Subcategory } from '@/data/sentences/phrasal-verbs';

interface PageProps {
  params: {
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
  const { topicId, subcategoryId } = params;
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

    // Find category and topic
    const category = SENT_CATS.find(cat => cat.id === "phrasal-verbs");
    if (!category) return;

    const topic = category.topics?.find(t => t.id === topicId);
    if (!topic) return;

    const subcat = topic.subcategories?.find(s => s.id === subcategoryId);
    if (!subcat) return;

    setSubcategory(subcat);

    // Load phrasal verbs data
    const ALL_DATA: Record<string, any[]> = {
      'work-career': WORK_CAREER,
      'relationships-social': RELATIONSHIPS_SOCIAL,
      'mind-emotions': MIND_EMOTIONS,
      'daily-life': DAILY_LIFE,
    };

    const topicData = ALL_DATA[topicId];
    if (topicData) {
      const found = topicData.find((s: any) => s.id === subcategoryId);
      if (found) {
        const pairs: WordPair[] = found.verbs.map((w: PhrasalVerb) => ({
          basic: w.basic,
          advanced: w.advanced,
        }));
        setWords(pairs);
        const synonyms = pairs.map(p => p.advanced);
        setShuffledSynonyms([...synonyms].sort(() => Math.random() - 0.5));
      }
    }
  }, [mounted, topicId, subcategoryId]);

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
    router.push(`/sentences/phrasal-verbs/${topicId}/${subcategoryId}`);
  };

  const handleBackToTopics = () => {
    router.push(`/sentences/phrasal-verbs/${topicId}`);
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

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="mb-8">
          <Link
            href={`/sentences/phrasal-verbs/${topicId}/${subcategoryId}`}
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
              Select a phrasal verb on the left, then its meaning on the right
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

        {/* Two-column layout */}
        <div className="grid grid-cols-10 gap-2">
          {/* Left column - narrow */}
          <div className="col-span-3">
            <div className="space-y-2">
              <div className="text-[10px] uppercase tracking-[0.25em] text-zinc-600 text-center mb-3 h-4 flex items-center justify-center">
                Phrasal Verb
              </div>
              {words.map((pair, index) => (
                <button
                  key={`left-${index}`}
                  onClick={() => handleSelectLeft(index)}
                  disabled={matchedLeft.has(index) || isLocked}
                  className={`w-full text-left px-4 py-4 rounded-xl border transition-all duration-200 text-sm font-medium h-16 flex flex-col justify-center ${getLeftStyle(index)}`}
                >
                  <div className="flex items-start">
                    {matchedLeft.has(index) && (
                      <span className="mr-2 text-green-400 mt-0.5">✓</span>
                    )}
                    <span className="leading-relaxed break-words" style={{lineHeight: '1.4', wordBreak: 'break-word', maxWidth: '100%'}}>
                      {pair.basic}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right column - wide */}
          <div className="col-span-7">
            <div className="space-y-2">
              <div className="text-[10px] uppercase tracking-[0.25em] text-zinc-600 text-center mb-3 h-4 flex items-center justify-center">
                Meaning
              </div>
              {shuffledSynonyms.map((synonym, index) => (
                <button
                  key={`right-${index}`}
                  onClick={() => handleSelectRight(index)}
                  disabled={matchedRight.has(index) || isLocked || selectedLeft === null}
                  className={`w-full text-left px-4 py-4 rounded-xl border transition-all duration-200 text-sm font-medium h-16 flex items-center ${getRightStyle(index)}`}
                >
                  {matchedRight.has(index) && (
                    <span className="mr-2 text-green-400">✓</span>
                  )}
                  <span className="leading-relaxed">{synonym}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Hint */}
        {selectedLeft !== null && (
          <p className="text-center text-xs text-cyan-400/70 mt-4 animate-pulse">
            Now pick the meaning for &quot;{words[selectedLeft].basic}&quot;
          </p>
        )}
      </div>

      {/* Completion Modal */}
      {showCompletion && (
        <CompletionModal
          completed={score}
          total={10}
          categoryId="phrasal-verbs"
          subcategoryName={subcategory.name}
          onNextSubcategory={handleBackToActivities}
          onBackToTopics={handleBackToTopics}
        />
      )}
    </div>
  );
}
