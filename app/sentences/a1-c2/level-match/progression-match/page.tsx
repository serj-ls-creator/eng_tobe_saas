'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { TopBar } from '@/components/layout/TopBar';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CompletionModal } from '@/components/ui/CompletionModal';
import { usePoints } from '@/lib/usePoints';
import { A1_C2_PHRASES } from '@/data/sentences/a1-c2-phrases';
import { useSoundEffects } from '@/hooks/useSoundEffects';

type RevealState = 'idle' | 'revealed';
type PairResult = 'correct' | 'wrong' | null;

type LevelKey = keyof (typeof A1_C2_PHRASES)[number]['levels'];
const RIGHT_LEVELS: LevelKey[] = ['A2', 'B1', 'B2', 'C1', 'C2'];

type Round = {
  id: string;
  leftA1: string;
  candidateRight: string;
  correctRight: string;
  isMatch: boolean;
  rightLevel: LevelKey;
};

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function LevelMatchPage() {
  const router = useRouter();
  const points = usePoints();
  const { playCorrect, playWrong } = useSoundEffects();

  const [mounted, setMounted] = useState(false);
  const [rounds, setRounds] = useState<Round[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [revealState, setRevealState] = useState<RevealState>('idle');
  const [pairResult, setPairResult] = useState<PairResult>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const selected = [...A1_C2_PHRASES].sort(() => Math.random() - 0.5).slice(0, 10);

    const nextRounds: Round[] = selected.map((phrase) => {
      const rightLevel = pickRandom(RIGHT_LEVELS);
      const correctRight = phrase.levels[rightLevel] || phrase.title;
      const shouldMatch = Math.random() < 0.5;

      let candidateRight = correctRight;
      if (!shouldMatch) {
        const wrongSource = pickRandom(A1_C2_PHRASES.filter((p) => p.id !== phrase.id));
        const wrongLevel = pickRandom(RIGHT_LEVELS);
        candidateRight = wrongSource.levels[wrongLevel] || wrongSource.title;
      }

      return {
        id: phrase.id,
        leftA1: phrase.levels.A1 || phrase.title,
        candidateRight,
        correctRight,
        isMatch: shouldMatch,
        rightLevel,
      };
    });

    setRounds(nextRounds);
  }, [mounted]);

  const currentRound = rounds[currentIndex];

  const progressValue = useMemo(() => {
    if (!rounds.length) return 0;
    return ((currentIndex + 1) / rounds.length) * 100;
  }, [currentIndex, rounds.length]);

  const handleAnswer = (answerIsMatch: boolean) => {
    if (revealState !== 'idle') return;
    if (!currentRound) return;

    const ok = answerIsMatch === currentRound.isMatch;
    setRevealState('revealed');
    setPairResult(ok ? 'correct' : 'wrong');
    if (ok) {
      setCorrectCount((prev) => prev + 1);
      playCorrect();
    } else {
      playWrong();
    }

    setTimeout(() => {
      if (currentIndex < rounds.length - 1) {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentIndex((prev) => prev + 1);
          setRevealState('idle');
          setPairResult(null);
          setTimeout(() => {
            setIsTransitioning(false);
          }, 100);
        }, 300);
      } else {
        setShowCompletion(true);
      }
    }, 1500);
  };

  const handleBackToActivities = () => {
    router.push('/sentences/a1-c2');
  };

  const rightCardColor =
    revealState === 'revealed'
      ? pairResult === 'correct'
        ? 'border-green-500/40 bg-green-500/10'
        : 'border-red-500/40 bg-red-500/10'
      : 'border-white/10 bg-white/[0.03]';

  if (!mounted || !rounds.length || !currentRound) {
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

  return (
    <div className="min-h-screen bg-black text-white" suppressHydrationWarning={true}>
      <TopBar points={points} />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            href="/sentences/a1-c2"
            className="inline-flex items-center text-xs text-slate-500 hover:text-slate-300 transition-colors mb-4"
          >
            <span className="mr-2">←</span>
            Back to A1 to C2
          </Link>

          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-2">Level Match</h1>
            <p className="text-slate-400">Decide if the level phrase matches the A1 phrase</p>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-slate-400">Progress</span>
            <span className="text-sm text-cyan-400 font-medium">
              {currentIndex + 1} / {rounds.length}
            </span>
          </div>
          <Progress value={progressValue} />
        </div>

        <div className="mb-8 grid grid-cols-2 gap-3 max-w-xl mx-auto">
          <Card
            className={`p-4 text-center border border-white/10 min-h-[120px] flex flex-col transition-all duration-200 ${
              isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 pt-1">A1</div>
            <div className="flex-1 flex items-center justify-center">
              <div className="text-lg font-bold text-white whitespace-normal break-words">{currentRound.leftA1}</div>
            </div>
          </Card>

          <Card
            className={`p-0 border transition-all duration-200 ${rightCardColor} min-h-[120px] ${
              isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            <div className="p-4 text-center h-full flex flex-col">
              <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 pt-1">{currentRound.rightLevel}</div>
              <div className="flex-1 flex items-center justify-center">
                <div className="relative mx-auto w-full [perspective:1000px]">
                  <div
                    className={`relative w-full transition-transform duration-500 [transform-style:preserve-3d] ${
                      revealState === 'revealed' ? '[transform:rotateY(180deg)]' : ''
                    }`}
                  >
                    <div className="w-full [backface-visibility:hidden]">
                      <div className="text-lg font-bold text-white whitespace-normal break-words">{currentRound.candidateRight}</div>
                    </div>
                    <div className="absolute inset-0 w-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <div className="text-lg font-bold text-white whitespace-normal break-words">{currentRound.correctRight}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

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
          total={rounds.length}
          categoryId="sentences"
          subcategoryName="Level Match"
          onNextSubcategory={handleBackToActivities}
          onBackToTopics={handleBackToActivities}
        />
      )}
    </div>
  );
}
