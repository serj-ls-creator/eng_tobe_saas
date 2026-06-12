'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

import { TopBar } from '@/components/layout/TopBar';
import { Card } from '@/components/ui/card';
import { StrictEnglishTTS } from '@/components/audio/StrictEnglishTTS';
import { Phrase } from '@/data/sentences/a1-c2-phrases';
import { recordLearningProgress } from '@/lib/learning-progress-client';
import { usePoints } from '@/lib/usePoints';

interface PhraseClientProps {
  phrase: Phrase;
}

export function PhraseClient({ phrase }: PhraseClientProps) {
  const points = usePoints();
  const [leftColumnVisible, setLeftColumnVisible] = useState(false);
  const [rightRowVisible, setRightRowVisible] = useState<boolean[]>(new Array(6).fill(false));
  const progressRecordedRef = useRef(false);

  useEffect(() => {
    // Reset states on phrase change
    setLeftColumnVisible(false);
    setRightRowVisible(new Array(6).fill(false));
    
    // Animate left column first
    const timerLeft = setTimeout(() => setLeftColumnVisible(true), 100);
    
    // Animate right column rows one by one
    const timersRight: NodeJS.Timeout[] = [];
    const levelsCount = 6; // A1, A2, B1, B2, C1, C2
    for (let index = 0; index < levelsCount; index++) {
      const delay = index === 0 ? 500 : 750 + (index - 1) * 334;
      const timer = setTimeout(() => {
        setRightRowVisible(prev => {
          const newRowVisible = [...prev];
          newRowVisible[index] = true;
          return newRowVisible;
        });
      }, delay);
      timersRight.push(timer);
    }
    
    return () => {
      clearTimeout(timerLeft);
      timersRight.forEach(clearTimeout);
    };
  }, [phrase.id]);

  useEffect(() => {
    // Record learning progress once when page is viewed
    if (progressRecordedRef.current) return;
    progressRecordedRef.current = true;
    
    recordLearningProgress({
      section: 'sentences',
      categoryId: 'a1-c2',
      topicId: 'phrases',
      subcategoryId: phrase.id,
      activityId: 'phrase-view',
      activityName: 'Phrase View',
      title: phrase.title,
      href: `/sentences/a1-c2/phrases/all-phrases/${phrase.id}`,
    });
  }, [phrase]);

  const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const;

  return (
    <div className="min-h-screen bg-black text-white">
      <TopBar points={points} />

      <div className="content-shell">
        {/* Header */}
        <div className="mb-6">
          <Link
            href="/sentences/a1-c2/phrases/all-phrases"
            className="inline-flex items-center text-xs text-zinc-500 hover:text-zinc-300 transition-colors mb-4"
          >
            <span className="mr-2">←</span>
            Back to Phrases
          </Link>

          <div className="text-center">
            <h1 
              className={`text-2xl font-black text-yellow-400 mb-2 transition-all duration-700 transform ${
                leftColumnVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}
            >
              {phrase.title}
            </h1>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="max-w-4xl mx-auto">
          {levels.map((level, index) => (
            <div key={level} className="grid grid-cols-[15%_85%] gap-1 mb-3">
              {/* Left column - Level */}
              <div 
                className={`transition-all duration-[3500ms] transform delay-${index * 750} ${
                  leftColumnVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
              >
                <div className="flex items-center justify-center p-3 bg-white/[0.02] border border-white/10 rounded-lg">
                  <div className="text-lg font-black text-yellow-300">{level}</div>
                </div>
              </div>

              {/* Right column - Phrase */}
              <div 
                className={`transition-all duration-[4000ms] transform ${
                  rightRowVisible[index] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}
              >
                <Card className="p-3 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-white">{phrase.levels[level]}</div>
                    <StrictEnglishTTS text={phrase.levels[level]} />
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
