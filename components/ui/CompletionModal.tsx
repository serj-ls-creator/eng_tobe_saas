'use client';

import { useState, useEffect } from 'react';
import { Card } from './card';
import { useRouter } from 'next/navigation';

interface CompletionModalProps {
  completed: number;
  total: number;
  categoryId: string;
  subcategoryName: string;
  onNextSubcategory?: () => void;
  onBackToTopics?: () => void;
}

export function CompletionModal({ 
  completed, 
  total, 
  categoryId, 
  subcategoryName,
  onNextSubcategory,
  onBackToTopics 
}: CompletionModalProps) {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50" suppressHydrationWarning={true}>
      <Card className="w-full max-w-md p-8 text-center" suppressHydrationWarning={true}>
        {/* Success Icon */}
        <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl">+ </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-white mb-2">
          Excellent!
        </h2>

        {/* Stats */}
        <p className="text-cyan-400 text-lg font-semibold mb-4">
          {completed} of {total} completed
        </p>

        {/* Description */}
        <p className="text-slate-400 mb-8">
          You've mastered all words in <span className="text-white font-medium">{subcategoryName}</span>. 
          Ready for the next challenge?
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
