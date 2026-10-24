'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BookPlus, CheckCircle2, X, XCircle } from 'lucide-react';

import { TopBar } from '@/components/layout/TopBar';
import { Card } from '@/components/ui/card';
import { CompletionModal } from '@/components/ui/CompletionModal';
import { FlyingWords } from '@/components/ui/FlyingWords';
import { Progress } from '@/components/ui/progress';
import { StrictEnglishTTS, speakStrictEnglish } from '@/components/audio/StrictEnglishTTS';
import {
  PRONUNCIATION_LEVELS,
  type PronunciationLevel,
  type PronunciationWordItem,
} from '@/data/words/pronounce/pronunciation';
import { useSoundEffects } from '@/hooks/useSoundEffects';
import { createSupabaseBrowserClient } from '@/lib/supabase-browser';
import { usePoints } from '@/lib/usePoints';

interface PronunciationLevelClientProps {
  levelId: string;
}

type AnswerState = 'idle' | 'correct' | 'wrong';

function shuffleArray<T>(items: T[]): T[] {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

export function PronunciationLevelClient({ levelId }: PronunciationLevelClientProps) {
  const router = useRouter();
  const points = usePoints();
  const { playCorrect, playWrong } = useSoundEffects();

  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [answerState, setAnswerState] = useState<AnswerState>('idle');
  const [correctCount, setCorrectCount] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  const [autoPronounce, setAutoPronounce] = useState(true);
  const [checkingAuth, setCheckingAuth] = useState(false);
  const [showSignupPrompt, setShowSignupPrompt] = useState(false);

  const autoPronounceTimerRef = useRef<number | null>(null);
  const advanceTimerRef = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const levelIndex = PRONUNCIATION_LEVELS.findIndex((item) => item.id === levelId);
  const level: PronunciationLevel = useMemo(
    () => (levelIndex !== -1 ? PRONUNCIATION_LEVELS[levelIndex] : PRONUNCIATION_LEVELS[0]),
    [levelIndex],
  );

  const nextLevel = levelIndex >= 0 && levelIndex < PRONUNCIATION_LEVELS.length - 1
    ? PRONUNCIATION_LEVELS[levelIndex + 1]
    : null;

  const shuffledWords = useMemo(() => shuffleArray(level.words), [level]);
  const currentWord: PronunciationWordItem | undefined = shuffledWords[currentIndex];

  // Stop any active speech on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      if (autoPronounceTimerRef.current) {
        window.clearTimeout(autoPronounceTimerRef.current);
      }
      if (advanceTimerRef.current) {
        window.clearTimeout(advanceTimerRef.current);
      }
    };
  }, []);

  // Shuffle options for each new word
  useEffect(() => {
    if (!currentWord) return;
    const allOptions = [currentWord.correctPronunciation, ...currentWord.wrongPronunciations];
    setShuffledOptions(shuffleArray(allOptions));
    setAnswerState('idle');
    setSelectedIndex(null);
  }, [currentIndex, currentWord]);

  const handleSelect = (option: string, index: number) => {
    if (answerState !== 'idle' || !currentWord) return;

    const isCorrect = option === currentWord.correctPronunciation;
    setSelectedIndex(index);
    setAnswerState(isCorrect ? 'correct' : 'wrong');

    if (isCorrect) {
      playCorrect();
      setCorrectCount((prev) => prev + 1);
    } else {
      playWrong();
    }

    if (autoPronounce) {
      if (autoPronounceTimerRef.current) {
        window.clearTimeout(autoPronounceTimerRef.current);
      }
      autoPronounceTimerRef.current = window.setTimeout(() => {
        speakStrictEnglish(currentWord.word);
      }, 160);
    }

    if (advanceTimerRef.current) {
      window.clearTimeout(advanceTimerRef.current);
    }
    advanceTimerRef.current = window.setTimeout(() => {
      if (currentIndex < shuffledWords.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        setShowCompletion(true);
      }
    }, 2500);
  };

  const handleAddToVocabulary = async () => {
    if (!currentWord || checkingAuth) return;
    setCheckingAuth(true);
    try {
      const {
        data: { user },
      } = await createSupabaseBrowserClient().auth.getUser();
      if (!user) {
        setShowSignupPrompt(true);
        return;
      }
      router.push(`/vocabulary/add?word=${encodeURIComponent(currentWord.word)}`);
    } catch (error) {
      console.error('Failed to check authentication:', error);
      setShowSignupPrompt(true);
    } finally {
      setCheckingAuth(false);
    }
  };

  if (!mounted || !currentWord) {
    return (
      <div className="min-h-screen bg-black text-white" suppressHydrationWarning>
        <TopBar points={points} />
        <div className="activity-shell">
          <div className="text-center py-12">
            <p className="text-sm text-zinc-500">Loading pronunciation challenge...</p>
          </div>
        </div>
      </div>
    );
  }

  const getOptionStyle = (index: number) => {
    if (answerState === 'idle') {
      return 'answer-option-idle cursor-pointer hover:border-cyan-400/40 hover:bg-white/[0.06] text-white';
    }

    const isCorrectOption = shuffledOptions[index] === currentWord.correctPronunciation;

    if (answerState === 'correct' && index === selectedIndex) {
      return 'bg-green-500/20 border-green-500/40 text-green-400 font-semibold';
    }

    if (answerState === 'wrong') {
      if (index === selectedIndex) {
        return 'bg-red-500/20 border-red-500/40 text-red-400 font-semibold';
      }
      if (isCorrectOption) {
        return 'bg-green-500/20 border-green-500/40 text-green-400 font-semibold';
      }
    }

    return 'bg-slate-800/30 border-white/5 opacity-40 cursor-default';
  };

  return (
    <div className="min-h-screen bg-black text-white relative" suppressHydrationWarning>
      <TopBar points={points} />

      <FlyingWords words={shuffledWords.map((w) => w.word)} />

      <div className="activity-shell relative z-10 pb-10">
        {/* Navigation & Header */}
        <div className="mb-6">
          <Link
            href="/words/pronounce/pronunciation"
            className="inline-flex items-center text-xs text-zinc-500 hover:text-zinc-300 transition-colors mb-3"
          >
            <span className="mr-2">←</span>
            Back to Levels
          </Link>

          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-1">Pronunciation</h1>
            <p className="text-xs text-zinc-400">{level.name}</p>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-5">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-zinc-400">Progress</span>
            <span className="text-xs text-cyan-400 font-medium">
              {currentIndex + 1} / {shuffledWords.length}
            </span>
          </div>
          <Progress value={((currentIndex + 1) / shuffledWords.length) * 100} />
        </div>

        {/* Controls: Auto Pronounce & Add to Vocabulary */}
        <div className="mx-auto mb-4 flex w-full max-w-md items-center justify-between gap-2">
          <div className="flex shrink-0 items-center gap-2">
            <span className="text-xs text-zinc-400">Auto Pronounce</span>
            <button
              type="button"
              onClick={() => setAutoPronounce((v) => !v)}
              className={`rounded-lg px-2.5 py-1.5 text-[10px] font-bold transition-colors ${
                autoPronounce
                  ? 'bg-cyan-400 text-black hover:bg-cyan-300'
                  : 'bg-white/5 text-zinc-400 hover:bg-white/10'
              }`}
            >
              {autoPronounce ? 'On' : 'Off'}
            </button>
          </div>

          <button
            type="button"
            onClick={handleAddToVocabulary}
            disabled={checkingAuth}
            className="flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-3 py-1.5 text-[11px] font-bold leading-[15px] text-black shadow-md shadow-cyan-500/10 transition-all hover:opacity-95 active:scale-[0.98] disabled:opacity-60"
          >
            <BookPlus className="h-3.5 w-3.5 shrink-0" />
            <span>{checkingAuth ? 'Checking...' : 'Add to My Vocabulary'}</span>
          </button>
        </div>

        {/* Main Word Card */}
        <div className="mb-4">
          <Card className="rounded-[28px] border border-white/10 bg-zinc-900/80 p-7 text-center relative overflow-hidden transition-all duration-300">
            <div className="mb-2 text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-semibold">
              Word
            </div>

            <h2 className="text-4xl font-black tracking-tight text-white mb-2">
              {currentWord.word}
            </h2>

            {/* Transcription & Audio appears after user answers */}
            {answerState !== 'idle' ? (
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-center gap-3 transition-opacity duration-300">
                <span className="text-base font-mono font-medium tracking-wide text-cyan-300 px-3 py-1 rounded-lg bg-cyan-950/50 border border-cyan-500/30">
                  {currentWord.transcription}
                </span>

                <StrictEnglishTTS text={currentWord.word} />
              </div>
            ) : (
              <div className="h-5 mt-3 flex items-center justify-center">
                <span className="text-[10px] text-zinc-600 uppercase tracking-widest">
                  Tap the correct pronunciation
                </span>
              </div>
            )}
          </Card>
        </div>

        {/* Correct / Wrong feedback banner */}
        <div className="mb-4 flex min-h-10 items-center justify-center">
          {answerState === 'correct' && (
            <div className="flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-300 animate-in fade-in zoom-in-95 duration-200">
              <CheckCircle2 className="h-4 w-4 text-green-400" />
              Correct!
            </div>
          )}
          {answerState === 'wrong' && (
            <div className="flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-300 animate-in fade-in zoom-in-95 duration-200">
              <XCircle className="h-4 w-4 text-red-400" />
              Incorrect
            </div>
          )}
        </div>

        {/* 5 Pronunciation Options */}
        <div className="space-y-2.5 max-w-md mx-auto">
          {shuffledOptions.map((option, index) => (
            <button
              key={`${currentIndex}-${index}-${option}`}
              onClick={() => handleSelect(option, index)}
              disabled={answerState !== 'idle'}
              className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 ${getOptionStyle(
                index,
              )}`}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium tracking-wide">{option}</span>
                {answerState !== 'idle' && option === currentWord.correctPronunciation && (
                  <CheckCircle2 className="h-4 w-4 text-green-400 shrink-0" />
                )}
                {answerState === 'wrong' && index === selectedIndex && (
                  <XCircle className="h-4 w-4 text-red-400 shrink-0" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Guest Sign-up prompt modal */}
      {showSignupPrompt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-3xl border border-white/15 bg-zinc-900 p-6 shadow-2xl">
            <div className="mb-3 flex items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-bold text-white">Create an account to save words</h2>
                <p className="mt-2 text-sm text-zinc-400">
                  Sign up or log in to access My Vocabulary and save this word.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowSignupPrompt(false)}
                aria-label="Close"
                className="rounded-full p-1 text-zinc-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-2">
              <Link
                href="/auth/signup"
                className="rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-3 py-2.5 text-center text-xs font-bold text-black"
              >
                Sign Up
              </Link>
              <Link
                href="/auth/login"
                className="rounded-xl border border-white/10 bg-zinc-800 px-3 py-2.5 text-center text-xs font-bold text-white hover:bg-zinc-700"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Completion Modal */}
      {showCompletion && (
        <CompletionModal
          completed={correctCount}
          total={shuffledWords.length}
          categoryId="pronounce"
          subcategoryName={`Pronunciation • ${level.name}`}
          progressPayload={{
            section: 'words',
            categoryId: 'pronounce',
            topicId: 'pronunciation',
            levelId: level.id,
            activityId: 'pronunciation',
            activityName: 'Pronunciation',
            title: `Pronunciation • ${level.name}`,
            href: `/words/pronounce/pronunciation/${level.id}`,
            score: correctCount,
            total: shuffledWords.length,
          }}
          nextSubcategoryLabel="Next Level"
          backToTopicsLabel="Back to Levels"
          onNextSubcategory={
            nextLevel
              ? () => router.push(`/words/pronounce/pronunciation/${nextLevel.id}`)
              : undefined
          }
          onBackToTopics={() => router.push('/words/pronounce/pronunciation')}
          onGoHome={() => router.push('/home')}
        />
      )}
    </div>
  );
}
