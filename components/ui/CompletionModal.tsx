'use client';

import { useState, useEffect } from 'react';
import { Card } from './card';
import { useRouter } from 'next/navigation';

interface CompletionModalProps {
  completed: number;
  total: number;
  categoryId: string;
  subcategoryName: string;
  words?: string[];
  onNextSubcategory?: () => void;
  onBackToTopics?: () => void;
}

export function CompletionModal({ 
  completed, 
  total, 
  categoryId, 
  subcategoryName,
  words,
  onNextSubcategory,
  onBackToTopics 
}: CompletionModalProps) {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isExcellent = completed === total;
  
  const getPerformanceRating = () => {
    if (completed >= 10) return { title: 'Excellent!', color: 'text-green-400' };
    if (completed >= 9) return { title: 'Great job!', color: 'text-cyan-400' };
    if (completed >= 8) return { title: 'Good effort!', color: 'text-yellow-400' };
    if (completed >= 7) return { title: 'Keep trying!', color: 'text-orange-400' };
    if (completed >= 5) return { title: 'Practice more!', color: 'text-red-400' };
    return { title: 'Try again!', color: 'text-red-400' };
  };

  const performance = getPerformanceRating();

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50" suppressHydrationWarning={true}>
      <Card className="w-full max-w-md p-8 text-center" suppressHydrationWarning={true}>
        {/* Success Icon */}
        <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl">+ </span>
        </div>

        {/* Title */}
        <h2 className={`text-2xl font-bold text-white mb-2 ${performance.color}`}>
          {performance.title}
        </h2>

        {/* Stats */}
        <p className="text-cyan-400 text-lg font-semibold mb-4">
          {completed} of {total} correct
        </p>

        {/* Description */}
        <p className="text-slate-400 mb-8">
          {isExcellent ? (
            <>
              You've mastered all words in <span className="text-white font-medium">{subcategoryName}</span>. 
              Ready for the next challenge?
            </>
          ) : completed >= 9 ? (
            <>
              Great job! You got {completed} of {total} correct in <span className="text-white font-medium">{subcategoryName}</span>. 
              You're doing really well!
            </>
          ) : completed >= 8 ? (
            <>
              Good effort! You got {completed} of {total} correct in <span className="text-white font-medium">{subcategoryName}</span>. 
              Keep practicing to improve!
            </>
          ) : completed >= 7 ? (
            <>
              Keep trying! You got {completed} of {total} correct in <span className="text-white font-medium">{subcategoryName}</span>. 
              Review and Practice more!
            </>
          ) : completed >= 5 ? (
            <>
              Practice more! You got {completed} of {total} correct in <span className="text-white font-medium">{subcategoryName}</span>. 
              Review and Practice more!
            </>
          ) : (
            <>
              Practice more! You got {completed} of {total} correct in <span className="text-white font-medium">{subcategoryName}</span>. 
              Don't give up and keep learning!
            </>
          )}
        </p>

        
        {/* Action Buttons */}
        <div className="space-y-3">
          {onNextSubcategory && (
            <button
              onClick={onNextSubcategory}
              className="w-full bg-cyan-400 hover:bg-cyan-500 text-black font-semibold py-3 px-6 rounded-xl transition-colors"
            >
              Next Subcategory
            </button>
          )}
          
          {onBackToTopics && (
            <button
              onClick={onBackToTopics}
              className="w-full bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 px-6 rounded-xl transition-colors"
            >
              Back to Topics
            </button>
          )}
        </div>
      </Card>
    </div>
  );
}
