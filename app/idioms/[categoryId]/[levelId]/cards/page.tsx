"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TopBar } from "@/components/layout/TopBar";
import { Progress } from "@/components/ui/progress";
import { IdiomFlipCard } from "@/components/cards/IdiomFlipCard";
import { CompletionModal } from "@/components/ui/CompletionModal";
import { getIdiomsByLevel, getCategoryName, type IdiomCategory } from "@/lib/idioms";
import { IDIOM_CATS } from "@/constants/categories";
import { notFound } from "next/navigation";
import { usePoints } from "@/lib/usePoints";

interface IdiomCardsPageProps {
  params: {
    categoryId: string;
    levelId: string;
  };
}

export default function IdiomCardsPage({ params }: IdiomCardsPageProps) {
  const router = useRouter();
  const points = usePoints();
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);
  const [idioms, setIdioms] = useState<any[]>([]);
  const [category, setCategory] = useState<any>(null);
  const [mounted, setMounted] = useState(false);

  // Prevent hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // Load data only after mount
  useEffect(() => {
    if (!mounted) return;
    
    const foundCategory = IDIOM_CATS.find(cat => cat.id === params.categoryId);
    if (!foundCategory) return;
    
    const levelNumber = parseInt(params.levelId.replace('level-', ''));
    const idiomsData = getIdiomsByLevel(params.categoryId as IdiomCategory, levelNumber);
    
    setCategory(foundCategory);
    setIdioms(idiomsData);
  }, [mounted, params.categoryId, params.levelId]);

  const handleNext = () => {
    if (currentCardIndex < idioms.length - 1) {
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

  const handleBackToActivities = () => {
    router.push(`/idioms/${params.categoryId}/${params.levelId}`);
  };

  const handleBackToLevels = () => {
    router.push(`/idioms/${params.categoryId}`);
  };

  if (!mounted || !idioms.length || !category) {
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

  const currentIdiom = idioms[currentCardIndex];
  const levelName = params.levelId.replace('level-', 'Level ');

  return (
    <div className="min-h-screen bg-black text-white" suppressHydrationWarning={true}>
      <TopBar points={points} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href={`/idioms/${params.categoryId}/${params.levelId}`}
            className="inline-flex items-center text-xs text-slate-500 hover:text-slate-300 transition-colors mb-4"
          >
            <span className="mr-2">{"<-"}</span>
            Back to Activities
          </Link>
          
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-2">
              Cards
            </h1>
            <p className="text-slate-400">
              {category.name} - {levelName}
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-slate-400">Progress</span>
            <span className="text-sm text-cyan-400 font-medium">
              {currentCardIndex + 1} / {idioms.length}
            </span>
          </div>
          <Progress value={((currentCardIndex + 1) / idioms.length) * 100} />
        </div>

        {/* Card */}
        <div className="mb-12">
          <IdiomFlipCard 
            idiom={currentIdiom}
            isFlipped={isFlipped}
            onFlip={handleFlip}
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
          
          {currentCardIndex === idioms.length - 1 ? (
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
          completed={idioms.length}
          total={idioms.length}
          categoryId={params.categoryId}
          subcategoryName={`${category.name} - ${levelName}`}
          onNextSubcategory={handleBackToActivities}
          onBackToTopics={handleBackToLevels}
        />
      )}
    </div>
  );
}
