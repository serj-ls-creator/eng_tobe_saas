'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { TopBar } from '@/components/layout/TopBar';
import { Card } from '@/components/ui/card';
import { CompletionModal } from '@/components/ui/CompletionModal';
import { FlyingWords } from '@/components/ui/FlyingWords';
import { usePoints } from '@/lib/usePoints';
import { A1_C2_PHRASES } from '@/data/sentences/a1-c2-phrases';

interface PhrasePair {
  id: string;
  a1Phrase: string;
  matchingPhrase: string;
}

export default function SentencePairsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const points = usePoints();
  
  const [pairs, setPairs] = useState<PhrasePair[]>([]);
  const [mounted, setMounted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<string>('A2');
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
  const [leftFontSizes, setLeftFontSizes] = useState<number[]>([]);
  const [rightFontSizes, setRightFontSizes] = useState<number[]>([]);

  useEffect(() => setMounted(true), []);

  // Calculate font size based on text length and container width
  const calculateFontSize = (text: string, containerWidthPercent: number): number => {
    if (typeof window === 'undefined') return 14; // Default for SSR
    
    const baseFontSize = 10; // base font size in px (very reduced)
    const minFontSize = 1;   // minimum font size (atomic)
    const maxFontSize = 10;  // maximum font size (very reduced)
    
    // Very conservative character width for better accuracy
    const avgCharWidth = 4; // Ultra ultra conservative
    
    // Get container width based on viewport and percentage
    const containerWidth = (window.innerWidth * containerWidthPercent) / 100;
    
    // Account for all padding and elements:
    // - px-4 = 16px left + 16px right = 32px
    // - ✓ icon with mr-2 = 8px 
    // - Right spacer w-3 = 12px (increased)
    // - Additional safety margin = 16px (increased for flex)
    const totalPadding = 32 + 8 + 12 + 16; // 68px total
    
    const availableTextWidth = containerWidth - totalPadding;
    
    // Calculate how much space the text needs
    const textWidth = text.length * avgCharWidth;
    
    // More aggressive scaling - add buffer
    const buffer = 1.8; // 80% buffer for safety
    const adjustedTextWidth = textWidth * buffer;
    
    // If text fits with buffer, use base font size
    if (adjustedTextWidth <= availableTextWidth) {
      return baseFontSize;
    }
    
    // Calculate scaled font size
    const scaleFactor = availableTextWidth / adjustedTextWidth;
    const newFontSize = Math.max(minFontSize, Math.min(maxFontSize, baseFontSize * scaleFactor));
    
    return Math.round(newFontSize);
  };
  
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
    const gamePairs: PhrasePair[] = [];
    const shuffled = [...A1_C2_PHRASES].sort(() => Math.random() - 0.5).slice(0, 10);
    
    for (const phrase of shuffled) {
      const a1Phrase = phrase.levels.A1;
      let matchingPhrase = '';
      
      if (selectedLevel.toLowerCase() === 'random') {
        const levels = ['A2', 'B1', 'B2', 'C1', 'C2'];
        const randomLevel = levels[Math.floor(Math.random() * levels.length)];
        matchingPhrase = phrase.levels[randomLevel as keyof typeof phrase.levels];
      } else {
        matchingPhrase = phrase.levels[selectedLevel.toUpperCase() as keyof typeof phrase.levels];
      }
      
      gamePairs.push({ id: phrase.id, a1Phrase, matchingPhrase });
    }
    
    setPairs(gamePairs);
    const shuffledRight = gamePairs.map(p => p.matchingPhrase).sort(() => Math.random() - 0.5);
    setShuffledPhrases(shuffledRight);
    
    // Calculate font sizes for left column (A1 phrases)
    const leftSizes = gamePairs.map(pair => calculateFontSize(pair.a1Phrase, 35));
    setLeftFontSizes(leftSizes);
    
    // Calculate font sizes for right column (matching phrases)
    const rightSizes = shuffledRight.map(phrase => calculateFontSize(phrase, 65));
    setRightFontSizes(rightSizes);
  }, [mounted, selectedLevel]);

  // Update font sizes on window resize
  useEffect(() => {
    const handleResize = () => {
      if (!pairs.length || !shuffledPhrases.length) return;
      
      const leftSizes = pairs.map(pair => calculateFontSize(pair.a1Phrase, 35));
      setLeftFontSizes(leftSizes);
      
      const rightSizes = shuffledPhrases.map(phrase => calculateFontSize(phrase, 65));
      setRightFontSizes(rightSizes);
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
    const isCorrect = leftPhrase.matchingPhrase === rightPhrase;

    if (isCorrect) {
      setMatchedLeft(prev => new Set(prev).add(selectedLeft));
      setMatchedRight(prev => new Set(prev).add(index));
      setSelectedLeft(null);
      setSelectedRight(null);
      if (matchedLeft.size + 1 === pairs.length) setTimeout(() => setShowCompletion(true), 600);
    } else {
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
  }, [isLocked, selectedLeft, pairs, shuffledPhrases, matchedLeft, matchedRight]);

  const getLeftStyle = (index: number) => {
    if (matchedLeft.has(index)) return 'bg-green-500/20 border-green-500/50 text-green-400 cursor-default';
    if (wrongLeft === index) return 'bg-red-500/20 border-red-500/50 text-red-400 cursor-default';
    if (selectedLeft === index) return 'bg-cyan-500/20 border-cyan-400/60 text-cyan-300 cursor-pointer ring-1 ring-cyan-400/40';
    return 'bg-slate-800/60 border-white/10 text-white hover:bg-slate-700/60 hover:border-white/20 cursor-pointer';
  };

  const getRightStyle = (index: number) => {
    if (matchedRight.has(index)) return 'bg-green-500/20 border-green-500/50 text-green-400 cursor-default';
    if (wrongRight === index) return 'bg-red-500/20 border-red-500/50 text-red-400 cursor-default';
    if (selectedRight === index) return 'bg-cyan-500/20 border-cyan-400/60 text-cyan-300 cursor-pointer ring-1 ring-cyan-400/40';
    if (selectedLeft === null) return 'bg-slate-800/60 border-white/10 text-slate-400 cursor-not-allowed opacity-60';
    return 'bg-slate-800/60 border-white/10 text-white hover:bg-slate-700/60 hover:border-white/20 cursor-pointer';
  };

  if (!mounted || !pairs.length) {
    return (
      <div className="min-h-screen bg-black text-white" suppressHydrationWarning={true}>
        <TopBar points={points} />
        <div className="container mx-auto px-4 py-8 text-center">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white relative" suppressHydrationWarning={true}>
      <TopBar points={points} />
      <FlyingWords words={pairs.map(p => p.a1Phrase)} />
      <div className="container mx-auto px-4 py-8 relative z-10 max-w-2xl">
        <div className="mb-8">
          <Link href="/sentences/a1-c2/pairs" className="inline-flex items-center text-xs text-slate-500 hover:text-slate-300 transition-colors mb-4">
            <span className="mr-2">←</span> Back to Level Selection
          </Link>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-2">Sentence Pairs</h1>
            <p className="text-slate-400">Level: <span className="text-cyan-400">{selectedLevel}</span></p>
          </div>
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
            completed={score} total={10} categoryId="sentences"
            subcategoryName={`Pairs - ${selectedLevel.toUpperCase()}`}
            words={pairs.filter((_, index) => index < matchedLeft.size).map(p => p.a1Phrase)}
            onNextSubcategory={() => router.push('/sentences/a1-c2/pairs')}
            onBackToTopics={() => router.push('/sentences/a1-c2')}
          />
        )}
      </div>
    </div>
  );
}
