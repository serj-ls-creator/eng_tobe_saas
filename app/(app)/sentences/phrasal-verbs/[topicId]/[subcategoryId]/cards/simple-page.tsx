'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { WORK_CAREER, RELATIONSHIPS_SOCIAL, MIND_EMOTIONS, DAILY_LIFE, PhrasalVerb, Subcategory } from '@/data/sentences/phrasal-verbs';

interface PageProps {
  params: {
    topicId: string;
    subcategoryId: string;
  };
}

export default function SimpleCardsPage({ params }: PageProps) {
  const { topicId, subcategoryId } = params;
  
  const [verbs, setVerbs] = useState<PhrasalVerb[]>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const ALL_DATA: Record<string, Subcategory[]> = {
      'work-career': WORK_CAREER,
      'relationships-social': RELATIONSHIPS_SOCIAL,
      'mind-emotions': MIND_EMOTIONS,
      'daily-life': DAILY_LIFE,
    };

    const topicData = ALL_DATA[topicId];
    if (topicData) {
      const found = topicData.find((s: Subcategory) => s.id === subcategoryId);
      if (found && found.verbs) {
        setVerbs(found.verbs);
      }
    }
  }, [topicId, subcategoryId, mounted]);

  if (!mounted || !verbs.length) {
    return (
      <div className="min-h-screen bg-black text-white p-8">
        <div className="text-center">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  const currentVerb = verbs[currentCardIndex];

  const handleNext = () => {
    if (currentCardIndex < verbs.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setIsFlipped(false);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link 
            href={`/sentences/phrasal-verbs/${topicId}/${subcategoryId}`}
            className="text-cyan-400 hover:text-cyan-300"
          >
            ← Back
          </Link>
          <h1 className="text-3xl font-bold text-center mt-4">Cards</h1>
          <p className="text-center text-gray-400">
            {currentCardIndex + 1} / {verbs.length}
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div 
            className="w-96 h-64 bg-gray-800 rounded-2xl flex flex-col justify-center items-center p-8 cursor-pointer border border-gray-700"
            onClick={handleFlip}
          >
            <div className="text-sm text-gray-500 mb-4">
              {isFlipped ? 'Meaning' : 'Phrasal Verb'}
            </div>
            <div className="text-xl text-center">
              {isFlipped ? currentVerb.advanced : currentVerb.basic}
            </div>
            <div className="text-xs text-gray-500 mt-4">
              Click to flip
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={handlePrevious}
            disabled={currentCardIndex === 0}
            className="px-6 py-3 bg-gray-700 rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          {currentCardIndex === verbs.length - 1 ? (
            <button
              onClick={() => alert('Finished!')}
              className="px-6 py-3 bg-cyan-500 text-black rounded-lg font-semibold"
            >
              Finish
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-6 py-3 bg-cyan-500 text-black rounded-lg font-semibold"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
