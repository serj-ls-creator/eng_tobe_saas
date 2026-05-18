'use client';

import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { TopBar } from '@/components/layout/TopBar';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';
import { CompletionModal } from '@/components/ui/CompletionModal';
import { usePoints } from '@/lib/usePoints';
import { SENT_CATS } from '@/constants/categories';
import { EVERYDAY_SITUATIONS, DialogueItem } from '@/data/sentences/everyday-situations';
import { StrictEnglishTTS } from '@/components/audio/StrictEnglishTTS';

interface PageProps {
  params: {
    topicId: string;
    subcategoryId: string;
  };
}

export default function EverydayCardsPage({ params }: PageProps) {
  const { topicId, subcategoryId } = params;
  const router = useRouter();
  
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);
  const [dialogues, setDialogues] = useState<DialogueItem[]>([]);
  const [subcategory, setSubcategory] = useState<any>(null);
  const [mounted, setMounted] = useState(false);
  const points = usePoints();

  // Prevent hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // Load data after mount
  useEffect(() => {
    if (!mounted) return;
    
    // Find everyday-situations category
    const category = SENT_CATS.find(cat => cat.id === "everyday-situations");
    if (!category) return;

    const topic = category.topics?.find(t => t.id === topicId);
    if (!topic) return;

    const subcat = topic.subcategories?.find(s => s.id === subcategoryId);
    if (!subcat) return;

    setSubcategory(subcat);

    // Find in dialogue datasets
    const foundTopic = EVERYDAY_SITUATIONS.find(t => t.id === topicId);
    if (foundTopic) {
      const foundSubcat = foundTopic.subcategories.find(s => s.id === subcategoryId);
      if (foundSubcat) {
        setDialogues(foundSubcat.dialogues);
      }
    }
  }, [topicId, subcategoryId, mounted]);

  const handleNext = () => {
    if (currentCardIndex < dialogues.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  const handleNextSubcategory = () => {
    router.push(`/sentences/everyday-situations/${topicId}/${subcategoryId}`);
  };

  const handleBackToTopics = () => {
    router.push(`/sentences/everyday-situations/${topicId}/${subcategoryId}`);
  };

  if (!mounted || !dialogues.length || !subcategory) {
    return (
      <div className="min-h-screen bg-black text-white" suppressHydrationWarning={true}>
        <TopBar points={points} />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-zinc-500">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  const currentDialogue = dialogues[currentCardIndex];

  return (
    <div className="min-h-screen bg-black text-white" suppressHydrationWarning={true}>
      <TopBar points={points} />
      
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Header */}
        <div className="mb-6">
          <Link 
            href={`/sentences/everyday-situations/${topicId}/${subcategoryId}`}
            className="inline-flex items-center text-xs text-zinc-500 hover:text-zinc-300 transition-colors mb-4"
          >
            <span className="mr-2">←</span>
            Back to {subcategory.name}
          </Link>
          
          <div className="text-center">
            <h1 className="text-2xl font-black text-white mb-1">
              Dialogue Cards
            </h1>
            <p className="text-sm text-cyan-400">
              {subcategory.name}
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-zinc-500">Dialogue Progress</span>
            <span className="text-xs text-cyan-400 font-bold">
              {currentCardIndex + 1} / {dialogues.length}
            </span>
          </div>
          <Progress value={((currentCardIndex + 1) / dialogues.length) * 100} className="h-1 bg-zinc-800" />
        </div>

        {/* Card */}
        <div className="mb-8">
          <Card className="w-full p-6 md:p-8 border border-zinc-800 bg-zinc-950/80 backdrop-blur-md rounded-[24px] shadow-2xl relative overflow-hidden">
            {/* Elegant glowing top edge gradient */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
            
            {/* Prompt Statement */}
            <div className="mb-8 flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400/70 mb-2">Statement / Question</div>
                <h2 className="text-lg md:text-xl font-bold text-white leading-relaxed">{currentDialogue.prompt}</h2>
              </div>
              <StrictEnglishTTS text={currentDialogue.prompt} className="mt-1 flex-shrink-0" />
            </div>

            {/* Answer Options */}
            <div className="space-y-4">
              {/* Positive */}
              <div className="group flex items-start gap-4 p-4 rounded-xl border border-emerald-500/10 bg-emerald-500/[0.02] transition-all duration-300 hover:border-emerald-500/30 hover:bg-emerald-500/[0.05]">
                <div className="flex-1">
                  <span className="inline-block text-[9px] font-black uppercase tracking-[0.1em] text-emerald-400 border border-emerald-400/20 px-2 py-0.5 rounded-md mb-2 bg-emerald-950/40">
                    Positive Response
                  </span>
                  <p className="text-zinc-200 text-sm leading-relaxed">{currentDialogue.positive}</p>
                </div>
                <StrictEnglishTTS text={currentDialogue.positive} className="flex-shrink-0" />
              </div>

              {/* Negative */}
              <div className="group flex items-start gap-4 p-4 rounded-xl border border-rose-500/10 bg-rose-500/[0.02] transition-all duration-300 hover:border-rose-500/30 hover:bg-rose-500/[0.05]">
                <div className="flex-1">
                  <span className="inline-block text-[9px] font-black uppercase tracking-[0.1em] text-rose-400 border border-rose-400/20 px-2 py-0.5 rounded-md mb-2 bg-rose-950/40">
                    Negative Response
                  </span>
                  <p className="text-zinc-200 text-sm leading-relaxed">{currentDialogue.negative}</p>
                </div>
                <StrictEnglishTTS text={currentDialogue.negative} className="flex-shrink-0" />
              </div>

              {/* Question */}
              <div className="group flex items-start gap-4 p-4 rounded-xl border border-cyan-500/10 bg-cyan-500/[0.02] transition-all duration-300 hover:border-cyan-500/30 hover:bg-cyan-500/[0.05]">
                <div className="flex-1">
                  <span className="inline-block text-[9px] font-black uppercase tracking-[0.1em] text-cyan-400 border border-cyan-400/20 px-2 py-0.5 rounded-md mb-2 bg-cyan-950/40">
                    Question Reply
                  </span>
                  <p className="text-zinc-200 text-sm leading-relaxed">{currentDialogue.question}</p>
                </div>
                <StrictEnglishTTS text={currentDialogue.question} className="flex-shrink-0" />
              </div>
            </div>
          </Card>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between gap-4">
          <button
            onClick={handlePrevious}
            disabled={currentCardIndex === 0}
            className="flex-1 bg-zinc-900 hover:bg-zinc-800 disabled:bg-zinc-950 disabled:text-zinc-700 text-zinc-300 font-bold py-3 px-6 rounded-xl border border-zinc-800/80 transition-colors text-sm"
          >
            ← Previous
          </button>
          
          {currentCardIndex === dialogues.length - 1 ? (
            <button
              onClick={() => setShowCompletion(true)}
              className="flex-1 bg-cyan-400 hover:bg-cyan-500 text-black font-extrabold py-3 px-6 rounded-xl transition-colors text-sm"
            >
              Finish
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex-1 bg-cyan-400 hover:bg-cyan-500 text-black font-extrabold py-3 px-6 rounded-xl transition-colors text-sm"
            >
              Next →
            </button>
          )}
        </div>
      </div>

      {/* Completion Modal */}
      {showCompletion && (
        <CompletionModal
          noPoints
          completed={dialogues.length}
          total={dialogues.length}
          categoryId="everyday-situations"
          subcategoryName={subcategory.name}
          progressPayload={{
            section: 'sentences',
            categoryId: 'everyday-situations',
            topicId,
            subcategoryId,
            activityId: 'cards',
            activityName: 'Cards',
            title: subcategory.name,
            href: `/sentences/everyday-situations/${topicId}/${subcategoryId}/cards`,
          }}
          onNextSubcategory={handleNextSubcategory}
          onBackToTopics={handleBackToTopics}
        />
      )}
    </div>
  );
}
