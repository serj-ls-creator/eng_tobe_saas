'use client';

import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { TopBar } from '@/components/layout/TopBar';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { FlipCard } from '@/components/cards/FlipCard';
import { CompletionModal } from '@/components/ui/CompletionModal';
import { PEOPLE } from '@/data/words/basicadvanced/people';
import { WORLD } from '@/data/words/basicadvanced/world';
import { LIFE } from '@/data/words/basicadvanced/life';
import { MIND } from '@/data/words/basicadvanced/mind';
import { DIGITAL } from '@/data/words/basicadvanced/digital';
import { CHARACTER } from '@/data/words/antonyms/character';
import { STATE } from '@/data/words/antonyms/state';
import { ACTION } from '@/data/words/antonyms/action';
import { FEELING } from '@/data/words/antonyms/feeling';
import { AT_WORK } from '@/data/words/rudepolite/at_work';
import { WITH_STRANGERS } from '@/data/words/rudepolite/with_strangers';
import { IN_CONFLICT } from '@/data/words/rudepolite/in_conflict';
import { ONLINE_TEXTING } from '@/data/words/rudepolite/online_texting';
import { EMAILS_MESSAGES } from '@/data/words/formalinformal/emails_messages';
import { MEETINGS_PRESENTATIONS } from '@/data/words/formalinformal/meetings_presentations';
import { EVERYDAY_CONVERSATION } from '@/data/words/formalinformal/everyday_conversation';
import { WRITTEN_DOCUMENTS } from '@/data/words/formalinformal/written_documents';
import { PAST_MEMORY } from '@/data/words/timewords/past_memory';
import { PRESENT_NOW } from '@/data/words/timewords/present_now';
import { FUTURE_PLANS } from '@/data/words/timewords/future_plans';
import { DURATION_FREQUENCY } from '@/data/words/timewords/duration_frequency';
import { GEN_Z_SLANG } from '@/data/words/slang/gen_z_slang';
import { INTERNET_SOCIAL_MEDIA } from '@/data/words/slang/internet_social_media';
import { EMOTIONS_REACTIONS } from '@/data/words/slang/emotions_reactions';
import { STREET_URBAN } from '@/data/words/slang/street_urban';
import { CATS } from '@/constants/categories';

interface PageProps {
  params: {
    categoryId: string;
    topicId: string;
    subcategoryId: string;
  };
}

export default function CardsPage({ params }: PageProps) {
  const { categoryId, topicId, subcategoryId } = params;
  const router = useRouter();
  
  // State with safe initialization
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);
  const [words, setWords] = useState<any[]>([]);
  const [subcategory, setSubcategory] = useState<any>(null);
  const [mounted, setMounted] = useState(false);

  // Prevent hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // Load data only after mount
  useEffect(() => {
    if (!mounted) return;
    
    // Find category and topic
    const category = CATS.find(cat => cat.id === categoryId);
    if (!category) return;

    const topic = category.topics?.find(t => t.id === topicId);
    if (!topic) return;

    const subcat = topic.subcategories?.find(s => s.id === subcategoryId);
    if (!subcat) return;

    setSubcategory(subcat);

    // Load words — all categories
    const ALL_DATA: Record<string, Record<string, any[]>> = {
      'basic-advanced': { people: PEOPLE, world: WORLD, life: LIFE, mind: MIND, digital: DIGITAL },
      'antonyms': { character: CHARACTER, state: STATE, action: ACTION, feeling: FEELING },
      'rude-polite': { 'at-work': AT_WORK, 'with-strangers': WITH_STRANGERS, 'in-conflict': IN_CONFLICT, 'online-texting': ONLINE_TEXTING },
      'formal-informal': { 'emails-messages': EMAILS_MESSAGES, 'meetings-presentations': MEETINGS_PRESENTATIONS, 'everyday-conversation': EVERYDAY_CONVERSATION, 'written-documents': WRITTEN_DOCUMENTS },
      'time-words': { 'past-memory': PAST_MEMORY, 'present-now': PRESENT_NOW, 'future-plans': FUTURE_PLANS, 'duration-frequency': DURATION_FREQUENCY },
      'slang': { 'gen-z-slang': GEN_Z_SLANG, 'internet-social-media': INTERNET_SOCIAL_MEDIA, 'emotions-reactions': EMOTIONS_REACTIONS, 'street-urban': STREET_URBAN },
    };

    const topicData = ALL_DATA[categoryId]?.[topicId];
    if (topicData) {
      const found = topicData.find((s: any) => s.id === subcategoryId);
      if (found) setWords(found.words);
    }
  }, [categoryId, topicId, subcategoryId, mounted]);

  
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
    // This would navigate to next subcategory
    // For now, just go back to topics
    router.push(`/words/${categoryId}/${topicId}`);
  };

  const handleBackToTopics = () => {
    router.push(`/words/${categoryId}/${topicId}`);
  };

  if (!mounted || !words.length || !subcategory) {
    return (
      <div className="min-h-screen bg-black text-white" suppressHydrationWarning={true}>
        <TopBar />
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
      <TopBar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href={`/words/${categoryId}/${topicId}`}
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
          <FlipCard 
            word={currentWord}
            isFlipped={isFlipped}
            onFlip={handleFlip}
            frontLabel={categoryId === 'antonyms' ? 'Word' : categoryId === 'rude-polite' ? 'Rude' : categoryId === 'formal-informal' ? 'Informal' : 'Basic'}
            backLabel={categoryId === 'antonyms' ? 'Antonym' : categoryId === 'rude-polite' ? 'Polite' : categoryId === 'formal-informal' ? 'Formal' : 'Advanced'}
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
          completed={words.length}
          total={words.length}
          categoryId={categoryId}
          subcategoryName={subcategory.name}
          onNextSubcategory={handleNextSubcategory}
          onBackToTopics={handleBackToTopics}
        />
      )}
    </div>
  );
}
