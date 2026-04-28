'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { TopBar } from '@/components/layout/TopBar';
import { CompletionModal } from '@/components/ui/CompletionModal';
import { FlyingWords } from '@/components/ui/FlyingWords';
import { usePoints } from '@/lib/usePoints';
import { A1_C2_PHRASES } from '@/data/sentences/a1-c2-phrases';

interface PhrasePair {
  id: string;
  a1Phrase: string;
  matchingPhrase: string;
}

export default function SentencePairsGame() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const points = usePoints();
  
  const [mounted, setMounted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState('A2');
  const [pairs, setPairs] = useState<PhrasePair[]>([]);
  const [shuffledPhrases, setShuffledPhrases] = useState<string[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [selectedRight, setSelectedRight] = useState<number | null>(null);
  const [matchedLeft, setMatchedLeft] = useState<Set<number>>(new Set());
  const [matchedRight, setMatchedRight] = useState<Set<number>>(new Set());
  const [wrongLeft, setWrongLeft] = useState<number | null>(null);
  const [wrongRight, setWrongRight] = useState<number | null>(null);
  const [score, setScore] = useState(10);
  const [mistakes, setMistakes] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  type LevelKey = keyof (typeof A1_C2_PHRASES)[number]['levels'];

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const level = searchParams.get('level');
    if (level) {
      setSelectedLevel(level.toUpperCase());
    } else {
      setSelectedLevel('A2');
    }
  }, [searchParams]);

  useEffect(() => {
    if (!mounted) return;
    
    // Generate 10 random A1 phrases
    const availablePhrases = [...A1_C2_PHRASES];
    const shuffled = availablePhrases.sort(() => Math.random() - 0.5);
    const selectedPhrases = shuffled.slice(0, 10);
    
    const gamePairs: PhrasePair[] = selectedPhrases.map(phrase => {
      let matchingPhrase = '';
      
      if (selectedLevel.toLowerCase() === 'random') {
        // Random level from A2-C2
        const levels: LevelKey[] = ['A2', 'B1', 'B2', 'C1', 'C2'];
        const randomLevel = levels[Math.floor(Math.random() * levels.length)];
        matchingPhrase = phrase.levels[randomLevel] || phrase.levels.A2 || phrase.title;
      } else {
        // Specific level
        const levelKey = selectedLevel as LevelKey;
        matchingPhrase = phrase.levels[levelKey] || phrase.title;
      }
      
      return {
        id: phrase.id,
        a1Phrase: phrase.levels.A1 || phrase.title,
        matchingPhrase
      };
    });
    
    // Shuffle right column phrases
    const rightPhrases = gamePairs.map(pair => pair.matchingPhrase);
    const shuffledRight = [...rightPhrases].sort(() => Math.random() - 0.5);
    
    setPairs(gamePairs);
    setShuffledPhrases(shuffledRight);
  }, [mounted, selectedLevel]);

  // Update font sizes on window resize
  useEffect(() => {
    const handleResize = () => {
      if (!pairs.length || !shuffledPhrases.length) return;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [pairs, shuffledPhrases]);

  const handleSelectLeft = useCallback((index: number) => {
    if (isLocked || matchedLeft.has(index) || wrongLeft === index) return;
    setSelectedLeft(index);
    setSelectedRight(null);
  }, [isLocked, matchedLeft, wrongLeft]);

  const handleSelectRight = useCallback((index: number) => {
    if (isLocked || matchedRight.has(index) || selectedLeft === null) return;
    setSelectedRight(index);

    const leftPhrase = pairs[selectedLeft];
    const rightPhrase = shuffledPhrases[index];
    
    if (leftPhrase.matchingPhrase === rightPhrase) {
      // Correct match
      setIsLocked(true);
      setTimeout(() => {
        setMatchedLeft(prev => new Set([...prev, selectedLeft]));
        setMatchedRight(prev => new Set([...prev, index]));
        setSelectedLeft(null);
        setSelectedRight(null);
        setIsLocked(false);
        
        // Check if all pairs are matched
        if (matchedLeft.size + 1 === pairs.length) {
          setShowCompletion(true);
        }
      }, 800);
    } else {
      // Wrong match
      setWrongLeft(selectedLeft);
      setWrongRight(index);
      setScore(prev => Math.max(0, prev - 1));
      setMistakes(prev => prev + 1);
      
      setTimeout(() => {
        setWrongLeft(null);
        setWrongRight(null);
        setSelectedLeft(null);
        setSelectedRight(null);
      }, 1000);
    }
  }, [isLocked, matchedRight, selectedLeft, pairs, shuffledPhrases, matchedLeft, score]);

  const getLeftStyle = (index: number) => {
    if (matchedLeft.has(index)) return 'bg-green-500/20 border-green-400/40 text-green-300';
    if (wrongLeft === index) return 'bg-red-500/20 border-red-400/40 text-red-300';
    if (selectedLeft === index) return 'bg-cyan-500/20 border-cyan-400/40 text-cyan-300';
    return 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20';
  };

  const getRightStyle = (index: number) => {
    if (matchedRight.has(index)) return 'bg-green-500/20 border-green-400/40 text-green-300';
    if (wrongRight === index) return 'bg-red-500/20 border-red-400/40 text-red-300';
    if (selectedRight === index) return 'bg-cyan-500/20 border-cyan-400/40 text-cyan-300';
    return 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20';
  };

  const handleBackToLevels = () => {
    router.push('/sentences/a1-c2/pairs');
  };

  const handleBackToMain = () => {
    router.push('/sentences/a1-c2');
  };

  if (!mounted) {
    return (
      <>
        <TopBar points={points} />
        <div className="content-shell">
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-white">Loading...</div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <TopBar points={points} />
      <FlyingWords words={pairs.map(p => p.a1Phrase)} />
      <div className="content-shell">
        <div className="mb-4 flex items-center justify-between">
          <Link 
            href="/sentences/a1-c2/pairs"
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            ← Back to Pairs
          </Link>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-2">Sentence Pairs</h1>
            <p className="text-slate-400">Level: <span className="text-cyan-400">{selectedLevel}</span></p>
          </div>
          <div className="w-20"></div>
        </div>
        <div className="flex justify-between items-center mb-6 px-1">
          <div className="text-sm text-slate-400">Matched: <span className="text-cyan-400">{matchedLeft.size} / {pairs.length}</span></div>
          <div className="text-sm text-slate-400">Score: <span className={`font-semibold ${score >= 8 ? 'text-green-400' : score >= 5 ? 'text-yellow-400' : 'text-red-400'}`}>{score} / 10</span></div>
        </div>
        <div className="grid grid-cols-2 gap-3" style={{gridTemplateColumns: '30% 70%'}}>
          <div className="space-y-2">
            <div className="text-[10px] uppercase tracking-[0.25em] text-zinc-600 text-center mb-3">A1 Phrases</div>
            {pairs.map((pair, index) => (
              <button key={`left-${index}`} onClick={() => handleSelectLeft(index)} disabled={matchedLeft.has(index) || isLocked} className={`w-full text-left px-4 py-3 rounded-xl border transition-all font-medium whitespace-nowrap overflow-hidden flex items-center ${getLeftStyle(index)}`} style={{fontSize: '11px', height: '44px'}}>
                {matchedLeft.has(index) && <span className="mr-2 text-green-400 flex-shrink-0">✓</span>}
                <span className="flex-1 min-w-0">{pair.a1Phrase}</span>
                <span className="w-3 flex-shrink-0"></span>
              </button>
            ))}
          </div>
          <div className="space-y-2">
            <div className="text-[10px] uppercase tracking-[0.25em] text-zinc-600 text-center mb-3">{selectedLevel.toLowerCase() === 'random' ? 'Mixed Levels' : `${selectedLevel} Phrases`}</div>
            {shuffledPhrases.map((phrase, index) => (
              <button key={`right-${index}`} onClick={() => handleSelectRight(index)} disabled={matchedRight.has(index) || isLocked || selectedLeft === null} className={`w-full text-left px-4 py-3 rounded-xl border transition-all font-medium whitespace-nowrap overflow-hidden flex items-center ${getRightStyle(index)}`} style={{fontSize: '10px', height: '44px'}}>
                {matchedRight.has(index) && <span className="mr-2 text-green-400 flex-shrink-0">✓</span>}
                <span className="flex-1 min-w-0">{phrase}</span>
                <span className="w-3 flex-shrink-0"></span>
              </button>
            ))}
          </div>
        </div>
        {selectedLeft !== null && (
          <p className="text-center text-xs text-cyan-400/70 mt-4 animate-pulse">Find the matching phrase for &quot;{pairs[selectedLeft].a1Phrase}&quot;</p>
        )}
        {showCompletion && (
          <CompletionModal
            completed={score}
            total={10}
            categoryId="sentences"
            subcategoryName={`Pairs - ${selectedLevel.toUpperCase()}`}
            words={pairs.map(p => p.a1Phrase)}
            onNextSubcategory={handleBackToLevels}
            onBackToTopics={handleBackToMain}
          />
        )}
      </div>
    </>
  );
}
