'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { TopBar } from '@/components/layout/TopBar';
import { Card } from '@/components/ui/card';
import { A1_C2_PHRASES, Phrase } from '@/data/sentences/a1-c2-phrases';

interface PageProps {
  params: {
    phraseId: string;
  };
}

export default function PhrasePage({ params }: PageProps) {
  const { phraseId } = params;
  const router = useRouter();
  
  const [mounted, setMounted] = useState(false);
  const [phrase, setPhrase] = useState<Phrase | null>(null);
  const [leftColumnVisible, setLeftColumnVisible] = useState(false);
  const [rightRowVisible, setRightRowVisible] = useState<boolean[]>(new Array(6).fill(false));

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // Find phrase by ID (decode from URL)
    const foundPhrase = A1_C2_PHRASES.find(p => p.id === phraseId);
    if (foundPhrase) {
      setPhrase(foundPhrase);
      
      // Animate left column first (faster)
      setTimeout(() => setLeftColumnVisible(true), 100);
      
      // Animate right column rows one by one
      const levelsCount = 6; // A1, A2, B1, B2, C1, C2
      for (let index = 0; index < levelsCount; index++) {
        const delay = index === 0 ? 1000 : 1500 + (index - 1) * 667; // First row after 1s, others after 1.5s with 667ms intervals
        setTimeout(() => {
          setRightRowVisible(prev => {
            const newRowVisible = [...prev];
            newRowVisible[index] = true;
            return newRowVisible;
          });
        }, delay);
      }
    }
  }, [mounted, phraseId]);

  if (!mounted || !phrase) {
    return (
      <div className="min-h-screen bg-black text-white" suppressHydrationWarning={true}>
        <TopBar points={0} />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p>Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const;

  return (
    <div className="min-h-screen bg-black text-white" suppressHydrationWarning={true}>
      <TopBar points={0} />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/sentences/a1-c2/phrases/all-phrases"
            className="inline-flex items-center text-xs text-slate-500 hover:text-slate-300 transition-colors mb-4"
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
            <div key={level} className="grid grid-cols-[15%_85%] gap-6 mb-3">
              {/* Left column - Level */}
              <div 
                className={`transition-all duration-[3500ms] transform delay-${index * 750} ${
                  leftColumnVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
              >
                <div className="flex items-center">
                  <div className="text-lg font-black text-yellow-300">{level}</div>
                </div>
              </div>

              {/* Right column - Phrase */}
              <div 
                className={`transition-all duration-[4000ms] transform ${
                  rightRowVisible[index] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}
              >
                <div className="flex items-center">
                  <div className="text-sm font-medium text-white">{phrase.levels[level]}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
