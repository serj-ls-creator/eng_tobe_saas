'use client';

import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { TopBar } from '@/components/layout/TopBar';
import { PhrasalVerbFlipCard } from '@/components/cards/PhrasalVerbFlipCard';
import { Progress } from '@/components/ui/progress';
import { CompletionModal } from '@/components/ui/CompletionModal';
import { usePoints } from '@/lib/usePoints';
import { SENT_CATS } from '@/constants/categories';
import { WORK_CAREER, RELATIONSHIPS_SOCIAL, MIND_EMOTIONS, DAILY_LIFE, PhrasalVerb, Subcategory } from '@/data/sentences/phrasal-verbs';

interface PageProps {
  params: {
    topicId: string;
    subcategoryId: string;
  };
}

export default function CardsPage({ params }: PageProps) {
  const { topicId, subcategoryId } = params;
  const router = useRouter();
  
  // State with safe initialization
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);
  const [words, setWords] = useState<PhrasalVerb[]>([]);
  const [subcategory, setSubcategory] = useState<any>(null);
  const [mounted, setMounted] = useState(false);
  const points = usePoints();

  // Prevent hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // Load data only after mount
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
      if (found) setWords(found.verbs);
    }
  }, [topicId, subcategoryId, mounted]);

  
  const handleNext = () => {
    if (currentCardIndex < words.length - 1) {
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

  const handleNextSubcategory = () => {
    router.push(`/sentences/phrasal-verbs/${topicId}/${subcategoryId}`);
  };

  const handleBackToTopics = () => {
    router.push(`/sentences/phrasal-verbs/${topicId}/${subcategoryId}`);
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

  const currentWord = words[currentCardIndex];

  return (
    <div className="min-h-screen bg-black text-white" suppressHydrationWarning={true}>
      <TopBar points={points} />
      
      <div className="container mx-auto px-4 py-8">
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
              Cards
            </h1>
            <p className="text-slate-400">
              {subcategory.name}
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-slate-400">Progress</span>
            <span className="text-sm text-cyan-400 font-medium">
              {currentCardIndex + 1} / {words.length}
            </span>
          </div>
          <Progress value={((currentCardIndex + 1) / words.length) * 100} />
        </div>

        {/* Card */}
        <div className="mb-12">
          <PhrasalVerbFlipCard 
            verb={currentWord}
            isFlipped={isFlipped}
            onFlip={handleFlip}
            frontLabel="Phrasal Verb"
            backLabel="Meaning"
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between gap-4 max-w-md mx-auto">
          <button
            onClick={handlePrevious}
            disabled={currentCardIndex === 0}
            className="flex-1 bg-slate-800 hover:bg-slate-700 disabled:bg-slate-900 disabled:text-slate-600 text-white font-medium py-3 px-6 rounded-xl transition-colors"
          >
            Previous
          </button>
          
          {currentCardIndex === words.length - 1 ? (
            <button
              onClick={() => setShowCompletion(true)}
              className="flex-1 bg-cyan-400 hover:bg-cyan-500 text-black font-semibold py-3 px-6 rounded-xl transition-colors"
            >
              Finish
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex-1 bg-cyan-400 hover:bg-cyan-500 text-black font-semibold py-3 px-6 rounded-xl transition-colors"
            >
              Next
            </button>
          )}
        </div>
      </div>

      {/* Completion Modal */}
      {showCompletion && (
        <CompletionModal
          noPoints
          completed={words.length}
          total={words.length}
          categoryId="phrasal-verbs"
          subcategoryName={subcategory.name}
          onNextSubcategory={handleNextSubcategory}
          onBackToTopics={handleBackToTopics}
        />
      )}
    </div>
  );
}
