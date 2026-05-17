'use client';

import { useState, useEffect, useRef } from 'react';
import { Card } from './card';
import { usePathname, useRouter } from 'next/navigation';
import { Flame } from 'lucide-react';
import { addPoints } from '@/lib/useAddPoints';
import type { RecordLearningProgressPayload } from '@/lib/learning-progress-shared';
import { completeActivity, type ActivityResult } from '@/lib/useCompleteActivity';
import { recordLearningProgress } from '@/lib/useLearningProgress';

interface CompletionModalProps {
  completed: number;
  total: number;
  categoryId: string;
  subcategoryName: string;
  words?: string[];
  noPoints?: boolean;
  progressPayload?: RecordLearningProgressPayload;
  onNextSubcategory?: () => void;
  onBackToTopics?: () => void;
}

function formatActivityName(activityId: string): string {
  return activityId
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function inferProgressPayload({
  pathname,
  categoryId,
  subcategoryName,
  completed,
  total,
  noPoints
}: {
  pathname: string;
  categoryId: string;
  subcategoryName: string;
  completed: number;
  total: number;
  noPoints: boolean;
}): RecordLearningProgressPayload | null {
  const segments = pathname.split('/').filter(Boolean);

  if (segments[0] === 'words' && segments.length >= 5) {
    const [, inferredCategoryId, topicId, subcategoryId, activityId] = segments;
    return {
      section: 'words',
      categoryId: inferredCategoryId,
      topicId,
      subcategoryId,
      activityId,
      activityName: formatActivityName(activityId),
      title: subcategoryName,
      href: pathname,
      score: noPoints ? undefined : completed,
      total: noPoints ? undefined : total,
    };
  }

  if (segments[0] === 'sentences' && segments[1] === 'phrasal-verbs' && segments.length >= 5) {
    const [, inferredCategoryId, topicId, subcategoryId, activityId] = segments;
    return {
      section: 'sentences',
      categoryId: inferredCategoryId,
      topicId,
      subcategoryId,
      activityId,
      activityName: formatActivityName(activityId),
      title: subcategoryName,
      href: pathname,
      score: noPoints ? undefined : completed,
      total: noPoints ? undefined : total,
    };
  }

  if (segments[0] === 'sentences' && segments[1] === 'a1-c2' && segments.length >= 4) {
    const [, inferredCategoryId, topicId, subcategoryId] = segments;
    return {
      section: 'sentences',
      categoryId: inferredCategoryId,
      topicId,
      subcategoryId,
      activityId: topicId,
      activityName: formatActivityName(topicId),
      title: subcategoryName,
      href: pathname,
      score: completed,
      total,
    };
  }

  if (segments[0] === 'idioms' && segments.length >= 4) {
    const [, inferredCategoryId, levelId, activityId] = segments;
    return {
      section: 'idioms',
      categoryId: inferredCategoryId,
      levelId,
      activityId,
      activityName: formatActivityName(activityId),
      title: subcategoryName,
      href: pathname,
      score: noPoints ? undefined : completed,
      total: noPoints ? undefined : total,
    };
  }

  if (segments[0] === 'words' && segments[1] === 'pronounce' && segments[2] === 'dont-pronounce' && segments[3]) {
    return {
      section: 'words',
      categoryId,
      topicId: 'dont-pronounce',
      levelId: segments[3],
      activityId: 'dont-pronounce',
      activityName: "Don't Pronounce",
      title: subcategoryName,
      href: pathname,
      score: completed,
      total,
    };
  }

  return null;
}

export function CompletionModal({ 
  completed, 
  total, 
  categoryId, 
  subcategoryName,
  words,
  noPoints = false,
  progressPayload,
  onNextSubcategory,
  onBackToTopics 
}: CompletionModalProps) {
  const [mounted, setMounted] = useState(false);
  const [activityResult, setActivityResult] = useState<ActivityResult | null>(null);
  const pointsHandledRef = useRef(false);
  const progressSavedRef = useRef(false);
  const pathname = usePathname();
  const router = useRouter();
  const effectiveProgressPayload =
    progressPayload ??
    inferProgressPayload({
      pathname,
      categoryId,
      subcategoryName,
      completed,
      total,
      noPoints,
    });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Award points + record activity once when modal appears (not for cards)
  useEffect(() => {
    if (!mounted || noPoints || pointsHandledRef.current) return;
    pointsHandledRef.current = true;
    if (completed > 0) {
      addPoints(completed, 'completion-modal');
    }
    completeActivity().then(result => {
      if (result) setActivityResult(result);
    });
  }, [mounted, noPoints]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!mounted || !effectiveProgressPayload || progressSavedRef.current) return;
    progressSavedRef.current = true;
    recordLearningProgress(effectiveProgressPayload);
  }, [effectiveProgressPayload, mounted]);

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
  const DAILY_GOAL = 4;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50" suppressHydrationWarning={true}>
      <Card className="w-full max-w-md p-8 text-center" suppressHydrationWarning={true}>
        {/* Success Icon */}
        <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl">+</span>
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
        <p className="text-slate-400 mb-6">
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

        {/* Daily streak progress — only for logged-in users (activityResult present) */}
        {!noPoints && activityResult && (
          <div className={`mb-6 rounded-xl px-4 py-3 flex items-center justify-between ${
            activityResult.dailyActivities >= DAILY_GOAL
              ? 'bg-yellow-500/15 border border-yellow-500/30'
              : 'bg-slate-800/60 border border-white/8'
          }`}>
            <div className="flex items-center gap-2">
              <Flame className={`h-4 w-4 ${activityResult.dailyActivities >= DAILY_GOAL ? 'text-yellow-400' : 'text-zinc-500'}`} />
              <span className={`text-sm font-medium ${activityResult.dailyActivities >= DAILY_GOAL ? 'text-yellow-400' : 'text-zinc-400'}`}>
                {activityResult.dailyActivities >= DAILY_GOAL
                  ? '🎉 Daily streak done!'
                  : `Daily progress`}
              </span>
            </div>
            {activityResult.dailyActivities < DAILY_GOAL && (
              <span className="text-sm font-bold text-cyan-400">
                {activityResult.dailyActivities}/{DAILY_GOAL}
              </span>
            )}
          </div>
        )}

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
