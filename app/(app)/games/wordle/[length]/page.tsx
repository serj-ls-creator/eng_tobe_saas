'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Flame } from 'lucide-react';
import { TopBar } from '@/components/layout/TopBar';
import { WORDS_5, WORDS_6, WORDS_7, WORDS_8 } from '@/data/games/wordle-words';
import { usePoints } from '@/lib/usePoints';
import { addPoints } from '@/lib/add-points';
import { completeActivity, type ActivityResult } from '@/lib/complete-activity';

interface PageProps {
  params: { length: string };
}

type LetterState = 'correct' | 'present' | 'absent' | 'empty' | 'active';

interface GuessLetter {
  char: string;
  state: LetterState;
}

const KEYBOARD_ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

function getWordList(length: number): string[] {
  switch (length) {
    case 5: return WORDS_5;
    case 6: return WORDS_6;
    case 7: return WORDS_7;
    case 8: return WORDS_8;
    default: return WORDS_5;
  }
}

function pickRandom(arr: string[]): string {
  return arr[Math.floor(Math.random() * arr.length)];
}

type DailyAccess = 'checking' | 'allowed' | 'blocked' | 'sign-in' | 'error';

export default function WordleGamePage({ params }: PageProps) {
  const router = useRouter();
  const wordLength = parseInt(params.length) || 5;
  const MAX_GUESSES = 6;

  const points = usePoints();
  const [dailyAccess, setDailyAccess] = useState<DailyAccess>('checking');
  const [isPremium, setIsPremium] = useState(false);
  const [targetWord, setTargetWord] = useState('');
  const [guesses, setGuesses] = useState<GuessLetter[][]>([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [shake, setShake] = useState(false);
  const [message, setMessage] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [keyStates, setKeyStates] = useState<Record<string, LetterState>>({});
  const [hintLetter, setHintLetter] = useState<string | null>(null);
  const [hintUsed, setHintUsed] = useState(false);
  const [activityResult, setActivityResult] = useState<ActivityResult | null>(null);
  const awardedRef = useRef(false);

  const startGame = useCallback(async () => {
    setDailyAccess('checking');
    try {
      const response = await fetch('/api/games/daily-play', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ gameType: 'wordle' }),
      });
      const access = await response.json();
      if (response.status === 401) {
        setDailyAccess('sign-in');
        return;
      }
      if (!response.ok) throw new Error(access.error || 'Could not check game access');
      if (!access.allowed) {
        setIsPremium(false);
        setDailyAccess('blocked');
        return;
      }

      setIsPremium(Boolean(access.premium));
      setTargetWord(pickRandom(getWordList(wordLength)));
      setGuesses([]);
      setCurrentGuess('');
      setGameOver(false);
      setWon(false);
      setShowResult(false);
      setKeyStates({});
      setHintLetter(null);
      setHintUsed(false);
      setActivityResult(null);
      awardedRef.current = false;
      setMounted(true);
      setDailyAccess('allowed');
    } catch {
      setDailyAccess('error');
    }
  }, [wordLength]);

  const initialRouteRef = useRef<string | null>(null);
  useEffect(() => {
    if (initialRouteRef.current === params.length) return;
    initialRouteRef.current = params.length;
    void startGame();
  }, [params.length, startGame]);

  useEffect(() => {
    if (!showResult || !won || awardedRef.current) return;
    awardedRef.current = true;
    void addPoints(10, 'wordle');
    completeActivity().then(setActivityResult);
  }, [showResult, won]);

  const evaluateGuess = useCallback(
    (guess: string, target: string): GuessLetter[] => {
      const result: GuessLetter[] = guess
        .split('')
        .map((char) => ({ char, state: 'absent' as LetterState }));
      const used = new Array(target.length).fill(false);

      // First pass: correct positions
      for (let i = 0; i < guess.length; i++) {
        if (guess[i] === target[i]) {
          result[i].state = 'correct';
          used[i] = true;
        }
      }

      // Second pass: present but wrong position
      for (let i = 0; i < guess.length; i++) {
        if (result[i].state === 'correct') continue;
        for (let j = 0; j < target.length; j++) {
          if (!used[j] && guess[i] === target[j]) {
            result[i].state = 'present';
            used[j] = true;
            break;
          }
        }
      }

      return result;
    },
    [],
  );

  const submitGuess = useCallback(() => {
    if (currentGuess.length !== wordLength) {
      setShake(true);
      setMessage(`Word must be ${wordLength} letters`);
      setTimeout(() => {
        setShake(false);
        setMessage('');
      }, 1000);
      return;
    }

    const evaluated = evaluateGuess(currentGuess, targetWord);
    const newGuesses = [...guesses, evaluated];
    setGuesses(newGuesses);

    // Update keyboard key states
    setKeyStates((prev) => {
      const next = { ...prev };
      const priority: Record<LetterState, number> = {
        correct: 3,
        present: 2,
        absent: 1,
        empty: 0,
        active: 0,
      };
      evaluated.forEach(({ char, state }) => {
        if (!next[char] || priority[state] > priority[next[char]]) {
          next[char] = state;
        }
      });
      return next;
    });

    setCurrentGuess('');

    const isWin = currentGuess === targetWord;
    if (isWin) {
      setWon(true);
      setGameOver(true);
      setTimeout(() => setShowResult(true), 1500);
    } else if (newGuesses.length >= MAX_GUESSES) {
      setGameOver(true);
      setTimeout(() => setShowResult(true), 1500);
    }
  }, [currentGuess, wordLength, targetWord, guesses, evaluateGuess]);

  const handleKey = useCallback(
    (key: string) => {
      if (gameOver || dailyAccess !== 'allowed') return;
      if (key === 'ENTER') {
        submitGuess();
        return;
      }
      if (key === '⌫' || key === 'BACKSPACE') {
        setCurrentGuess((prev) => prev.slice(0, -1));
        return;
      }
      if (/^[A-Z]$/.test(key) && currentGuess.length < wordLength) {
        setCurrentGuess((prev) => prev + key);
      }
    },
    [gameOver, dailyAccess, submitGuess, currentGuess, wordLength],
  );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase();
      if (key === 'ENTER') handleKey('ENTER');
      else if (key === 'BACKSPACE') handleKey('⌫');
      else if (/^[A-Z]$/.test(key)) handleKey(key);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [handleKey]);

  const handleHint = useCallback(() => {
    if (gameOver || !targetWord || hintUsed) return;
    const undiscovered = targetWord.split('').filter(
      (ch, i, arr) => arr.indexOf(ch) === i &&
        keyStates[ch] !== 'correct' && keyStates[ch] !== 'present'
    );
    if (undiscovered.length === 0) return;
    const pick = undiscovered[Math.floor(Math.random() * undiscovered.length)];
    setHintLetter(pick);
    setHintUsed(true);
    setTimeout(() => setHintLetter(null), 2500);
  }, [gameOver, targetWord, keyStates, hintUsed]);

  const getKeyStyle = (key: string) => {
    const state = keyStates[key];
    const isHint = hintLetter === key;
    const base =
      'rounded-lg font-bold text-xs transition-colors select-none cursor-pointer flex items-center justify-center';
    if (key === 'ENTER' || key === '⌫') {
      return `${base} bg-slate-700 text-white hover:bg-slate-600 px-2 h-10 text-[10px]`;
    }
    if (isHint) {
      return `${base} bg-cyan-400 text-black w-8 h-10 ring-2 ring-cyan-300`;
    }
    switch (state) {
      case 'correct':
        return `${base} bg-green-500 text-white w-8 h-10`;
      case 'present':
        return `${base} bg-yellow-500 text-black w-8 h-10`;
      case 'absent':
        return `${base} bg-slate-800 text-zinc-600 w-8 h-10`;
      default:
        return `${base} bg-slate-700 text-white hover:bg-slate-600 w-8 h-10`;
    }
  };

  const getCellStyle = (state: LetterState, hasChar: boolean) => {
    const base =
      'flex items-center justify-center font-black text-lg rounded-lg border-2 transition-all duration-300 select-none';
    switch (state) {
      case 'correct':
        return `${base} bg-green-500/20 border-green-500 text-green-400`;
      case 'present':
        return `${base} bg-yellow-500/20 border-yellow-500 text-yellow-400`;
      case 'absent':
        return `${base} bg-slate-800/80 border-slate-700 text-zinc-500`;
      default:
        return `${base} ${hasChar ? 'border-white/50 text-white' : 'border-white/25 text-transparent'}`;
    }
  };

  if (dailyAccess !== 'allowed' || !mounted || !targetWord) {
    const gateTitle = dailyAccess === 'checking'
      ? 'Checking your daily game…'
      : dailyAccess === 'blocked'
        ? 'Free game used'
        : dailyAccess === 'sign-in'
          ? 'Sign in to play'
          : dailyAccess === 'error'
            ? 'Could not start the game'
            : 'Loading…';
    const gateMessage = dailyAccess === 'blocked'
      ? 'You have used your free Wordle today. Come back tomorrow or get Premium to play more.'
      : dailyAccess === 'sign-in'
        ? 'Sign in to play and save your daily progress.'
        : dailyAccess === 'error'
          ? 'Please try again.'
          : '';
    return (
      <div className="min-h-screen bg-black text-white">
        <TopBar points={points} />
        <div className="mx-auto max-w-sm px-4 pt-20 text-center">
          <h1 className="mb-3 text-xl font-bold text-white">{gateTitle}</h1>
          {gateMessage && <p className="mb-5 text-sm leading-6 text-zinc-400">{gateMessage}</p>}
          {dailyAccess === 'blocked' && <Link href="/premium" className="mb-3 block rounded-xl bg-cyan-400 px-5 py-3 font-bold text-black">Get Premium</Link>}
          {dailyAccess === 'sign-in' && <Link href="/auth/login" className="mb-3 block rounded-xl bg-cyan-400 px-5 py-3 font-bold text-black">Sign in</Link>}
          {dailyAccess === 'error' && <button onClick={() => void startGame()} className="mb-3 w-full rounded-xl bg-cyan-400 px-5 py-3 font-bold text-black">Try again</button>}
          <Link href="/games" className="block rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 font-medium text-white">Back to Games</Link>
        </div>
      </div>
    );
  }

  // Build display grid: completed guesses + active row + empty rows
  const displayRows: { letters: GuessLetter[]; isActive: boolean }[] = [];

  guesses.forEach((g) => displayRows.push({ letters: g, isActive: false }));

  if (!gameOver) {
    const activeRow: GuessLetter[] = Array.from({ length: wordLength }, (_, i) => ({
      char: currentGuess[i] || '',
      state: 'empty' as LetterState,
    }));
    displayRows.push({ letters: activeRow, isActive: true });
  }

  while (displayRows.length < MAX_GUESSES) {
    displayRows.push({
      letters: Array.from({ length: wordLength }, () => ({ char: '', state: 'empty' as LetterState })),
      isActive: false,
    });
  }

  const cellSize =
    wordLength <= 5
      ? 'w-12 h-12'
      : wordLength === 6
        ? 'w-10 h-10'
        : wordLength === 7
          ? 'w-9 h-9'
          : 'w-8 h-8';

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <TopBar points={points} />

      <div className="flex-1 flex flex-col items-center px-4 py-4 max-w-lg mx-auto w-full">
        {/* Header */}
        <div className="w-full flex items-center justify-between mb-4">
          <Link
            href="/games/wordle"
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            ← Back
          </Link>
          <div className="text-center">
            <h1 className="text-lg font-bold text-white">Wordle</h1>
            <p className="text-xs text-zinc-500">
              {wordLength} letters · 6 tries
            </p>
          </div>
          <div className="w-12" />
        </div>

        {/* Inline message */}
        {message && (
          <div className="mb-3 px-4 py-2 bg-slate-800 rounded-xl text-sm text-white border border-white/10">
            {message}
          </div>
        )}

        {/* Guess grid */}
        <div className={`mb-4 ${shake ? 'animate-bounce' : ''}`}>
          <div className="flex flex-col gap-1.5">
            {displayRows.map((row, ri) => (
              <div key={ri} className="flex gap-1.5">
                {row.letters.map((cell, ci) => (
                  <div
                    key={ci}
                    className={`${cellSize} ${getCellStyle(cell.state, !!cell.char)}`}
                  >
                    {cell.char}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Action buttons: Delete · Hint · Check */}
        <div className="flex gap-2 mb-4 w-full max-w-xs">
          <button
            onClick={() => handleKey('⌫')}
            disabled={gameOver || currentGuess.length === 0}
            className="flex-1 py-3 rounded-xl border border-white/10 bg-slate-800 text-white text-sm font-medium hover:bg-slate-700 disabled:opacity-30 transition-colors"
          >
            ⌫
          </button>
          <button
            onClick={handleHint}
            disabled={gameOver || hintUsed}
            title={hintUsed ? 'Hint already used' : 'Hint'}
            className={`w-12 py-3 rounded-xl border transition-colors flex items-center justify-center text-lg
              ${hintUsed
                ? 'border-white/5 bg-slate-900 text-zinc-700 cursor-not-allowed opacity-40'
                : 'border-yellow-500/30 bg-yellow-500/10 text-yellow-400 hover:bg-yellow-500/20'
              }`}
          >
            💡
          </button>
          <button
            onClick={() => handleKey('ENTER')}
            disabled={gameOver || currentGuess.length !== wordLength}
            className="flex-1 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-500 disabled:opacity-30 text-black text-sm font-bold transition-colors"
          >
            Check ✓
          </button>
        </div>

        {/* On-screen keyboard */}
        <div className="flex flex-col gap-1.5 items-center w-full">
          {KEYBOARD_ROWS.map((row, ri) => (
            <div key={ri} className="flex gap-1 justify-center">
              {row.map((key) => (
                <button
                  key={key}
                  onClick={() => handleKey(key)}
                  className={getKeyStyle(key)}
                >
                  {key}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Result modal */}
      {showResult && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="w-full max-w-sm bg-slate-900 border border-white/10 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">{won ? '🎉' : '😔'}</div>
            <h2
              className={`text-2xl font-bold mb-2 ${won ? 'text-green-400' : 'text-red-400'}`}
            >
              {won ? 'Brilliant!' : 'Game Over'}
            </h2>
            <p className="text-zinc-400 mb-2 text-sm">
              {won
                ? `You got it in ${guesses.length} ${guesses.length === 1 ? 'try' : 'tries'}!`
                : 'Better luck next time'}
            </p>
            {!won && (
              <p className="text-white font-bold text-lg mb-6">
                Answer:{' '}
                <span className="text-cyan-400">{targetWord}</span>
              </p>
            )}
            {won && <div className="mb-4 rounded-xl border border-yellow-400/20 bg-yellow-400/10 px-4 py-3 text-sm font-bold text-yellow-300">+10 points</div>}
            {won && activityResult && (
              <div className={`mb-5 flex items-center justify-between rounded-xl border px-4 py-3 ${activityResult.dailyActivities >= 4 ? 'border-yellow-400/30 bg-yellow-400/10' : 'border-white/10 bg-white/[0.04]'}`}>
                <div className="flex items-center gap-2">
                  <Flame className={`h-4 w-4 ${activityResult.dailyActivities >= 4 ? 'text-yellow-300' : 'text-zinc-500'}`} />
                  <span className={`text-sm font-medium ${activityResult.dailyActivities >= 4 ? 'text-yellow-200' : 'text-zinc-300'}`}>
                    {activityResult.dailyActivities >= 4 ? 'Daily streak completed' : 'Daily progress'}
                  </span>
                </div>
                <span className="text-sm font-bold text-cyan-300">{Math.min(activityResult.dailyActivities, 4)}/4</span>
              </div>
            )}
            <div className="space-y-3 mt-6">
              {isPremium ? (
                <button onClick={() => void startGame()} className="w-full bg-cyan-400 hover:bg-cyan-500 text-black font-bold py-3 px-6 rounded-xl transition-colors">Play Again</button>
              ) : (
                <Link href="/premium" className="block w-full bg-cyan-400 hover:bg-cyan-500 text-black font-bold py-3 px-6 rounded-xl transition-colors">Get Premium</Link>
              )}
              <button
                onClick={() => router.push('/games/wordle')}
                className="w-full bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 px-6 rounded-xl transition-colors"
              >
                Change Difficulty
              </button>
              <button onClick={() => router.push('/games')} className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 font-medium text-white hover:bg-white/[0.08]">Back to Games</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
