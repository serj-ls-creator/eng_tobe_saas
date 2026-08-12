'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { TopBar } from '@/components/layout/TopBar';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CompletionModal } from '@/components/ui/CompletionModal';
import { usePoints } from '@/lib/usePoints';
import { ALL_SENTENCE_CATS } from '@/constants/categories';
import { useSoundEffects } from '@/hooks/useSoundEffects';
import { WORK_CAREER, RELATIONSHIPS_SOCIAL, MIND_EMOTIONS, DAILY_LIFE, PhrasalVerb, Subcategory } from '@/data/sentences/phrasal-verbs';

interface PageProps {
  params: {
    topicId: string;
    subcategoryId: string;
  };
}

type RevealState = 'idle' | 'revealed';

type PairResult = 'correct' | 'wrong' | null;

export default function PairMatchPage({ params }: PageProps) {
  const { topicId, subcategoryId } = params;
  const router = useRouter();
  const points = usePoints();
  const { playCorrect, playWrong } = useSoundEffects();

  const [mounted, setMounted] = useState(false);
  const [words, setWords] = useState<PhrasalVerb[]>([]);
  const [revealState, setRevealState] = useState<RevealState>('idle');
  const [pairResult, setPairResult] = useState<PairResult>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);
  const [isMatch, setIsMatch] = useState(false);
  const [candidateRight, setCandidateRight] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [subcategory, setSubcategory] = useState<any>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Find category and topic
    const category = ALL_SENTENCE_CATS.find(cat => cat.id === "phrasal-verbs");
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

  const currentWord = words[currentIndex];

  useEffect(() => {
    if (!mounted) return;
    if (!currentWord) return;
    if (isTransitioning) return; // Блокируем обновление во время перехода

    const shouldMatch = Math.random() < 0.5;
    const right = shouldMatch ? currentWord.advanced : (currentWord.wrong ? currentWord.wrong[Math.floor(Math.random() * currentWord.wrong.length)] : currentWord.advanced);

    setIsMatch(shouldMatch);
    setCandidateRight(right);
  }, [currentIndex, currentWord, mounted, isTransitioning]);

  const handleAnswer = (answerIsMatch: boolean) => {
    if (revealState !== 'idle') return;
    const ok = answerIsMatch === isMatch;

    setRevealState('revealed');
    setPairResult(ok ? 'correct' : 'wrong');

    if (ok) {
      setCorrectCount(prev => prev + 1);
      playCorrect();
    } else {
      playWrong();
    }

    setTimeout(() => {
      if (currentIndex < words.length - 1) {
        // Сначала исчезаем старые карточки
        setIsTransitioning(true);
        
        setTimeout(() => {
          // Применяем новые данные пока карточки скрыты
          const nextIndex = currentIndex + 1;
          const nextWord = words[nextIndex];
          if (nextWord) {
            const shouldMatch = Math.random() < 0.5;
            const right = shouldMatch ? nextWord.advanced : (nextWord.wrong ? nextWord.wrong[Math.floor(Math.random() * nextWord.wrong.length)] : nextWord.advanced);
            
            // Меняем все данные пока карточки скрыты
            setCurrentIndex(nextIndex);
            setRevealState('idle');
            setPairResult(null);
            setIsMatch(shouldMatch);
            setCandidateRight(right);
          }
          
          setTimeout(() => {
            // Плавно появляем новые карточки
            setIsTransitioning(false);
          }, 100);
        }, 300); // Даем время на исчезновение старых карточек
      } else {
        setShowCompletion(true);
      }
    }, 1500); // 1.5 секунды задержки
  };

  const handleBackToActivities = () => {
    router.push(`/sentences/phrasal-verbs/${topicId}/${subcategoryId}/pair-match`);
  };

  const handleBackToTopics = () => {
    router.push(`/sentences/phrasal-verbs/${topicId}`);
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

  const rightCardColor =
    revealState === 'revealed'
      ? pairResult === 'correct'
        ? 'border-green-500/40 bg-green-500/10'
        : 'border-red-500/40 bg-red-500/10'
      : 'border-white/10 bg-white/[0.03]';

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
            <h1 className="text-2xl font-bold text-white mb-2">Pair Match</h1>
            <p className="text-slate-400">Verify phrasal verb pairs</p>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-slate-400">Progress</span>
            <span className="text-sm text-cyan-400 font-medium">
              {currentIndex + 1} / {words.length}
            </span>
          </div>
          <Progress value={((currentIndex + 1) / words.length) * 100} />
        </div>

        {/* Cards */}
        <div className="mb-8 grid grid-cols-2 gap-3 max-w-xl mx-auto">
          <Card className={`p-4 text-center border border-white/10 min-h-[120px] flex flex-col transition-all duration-200 ${
            isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}>
              <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 pt-1">Phrasal Verb</div>
              <div className="flex-1 flex items-center justify-center">
                <div className="text-lg font-bold text-white whitespace-normal break-words">{currentWord.basic}</div>
              </div>
            </Card>

            <Card className={`p-0 border transition-all duration-200 ${rightCardColor} min-h-[120px] ${
              isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}>
              <div className="p-4 text-center h-full flex flex-col">
                <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 pt-1">Meaning</div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="relative mx-auto w-full [perspective:1000px]">
                    <div
                      className={`relative w-full transition-transform duration-500 [transform-style:preserve-3d] ${
                        revealState === 'revealed' ? '[transform:rotateY(180deg)]' : ''
                      }`}
                    >
                      <div className="w-full [backface-visibility:hidden]">
                        <div className="text-sm font-bold text-white whitespace-normal break-words">{candidateRight}</div>
                      </div>
                      <div className="absolute inset-0 w-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="text-sm font-bold text-white whitespace-normal break-words">{currentWord.advanced}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
        </div>

        {/* Controls */}
        <div className="flex justify-between gap-4 max-w-xl mx-auto">
          <button
            onClick={() => handleAnswer(true)}
            disabled={revealState !== 'idle'}
            className="flex-1 bg-cyan-400 hover:bg-cyan-500 disabled:bg-slate-900 disabled:text-slate-600 text-black font-semibold py-3 px-6 rounded-xl transition-colors"
          >
            Correct
          </button>
          <button
            onClick={() => handleAnswer(false)}
            disabled={revealState !== 'idle'}
            className="flex-1 bg-slate-800 hover:bg-slate-700 disabled:bg-slate-900 disabled:text-slate-600 text-white font-medium py-3 px-6 rounded-xl transition-colors"
          >
            Incorrect
          </button>
        </div>
      </div>

      {showCompletion && (
        <CompletionModal
          completed={correctCount}
          total={words.length}
          categoryId="phrasal-verbs"
          subcategoryName={subcategory.name}
          progressPayload={{
            section: 'sentences',
            categoryId: 'phrasal-verbs',
            topicId,
            subcategoryId,
            activityId: 'pair-match',
            activityName: 'Pair Match',
            title: subcategory.name,
            href: `/sentences/phrasal-verbs/${topicId}/${subcategoryId}/pair-match`,
            score: correctCount,
            total: words.length,
          }}
          onNextSubcategory={handleBackToActivities}
          onBackToTopics={handleBackToTopics}
        />
      )}
    </div>
  );
}
