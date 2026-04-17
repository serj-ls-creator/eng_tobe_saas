'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { TopBar } from '@/components/layout/TopBar';
import { WORDS_5, WORDS_6, WORDS_7, WORDS_8 } from '@/data/games/wordle-words';
import { usePoints } from '@/lib/usePoints';
import { addPoints } from '@/lib/useAddPoints';
import { completeActivity } from '@/lib/useCompleteActivity';

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

export default function WordleGamePage({ params }: PageProps) {
  const router = useRouter();
  const wordLength = parseInt(params.length) || 5;
  const MAX_GUESSES = 6;

  const points = usePoints();
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

  useEffect(() => {
    setMounted(true);
    const words = getWordList(wordLength);
    setTargetWord(pickRandom(words));
  }, [wordLength]);

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

    const isWin = currentGuess === targetWord;    if (isWin) {
      setWon(true);
      setGameOver(true);
      addPoints(10);
      completeActivity();
      setTimeout(() => setShowResult(true), 1500);
    } else if (newGuesses.length >= MAX_GUESSES) {
      setGameOver(true);
      setTimeout(() => setShowResult(true), 1500);
    }
  }, [currentGuess, wordLength, targetWord, guesses, evaluateGuess]);

  const handleKey = useCallback(
    (key: string) => {
      if (gameOver) return;
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
    [gameOver, submitGuess, currentGuess, wordLength],
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

  if (!mounted || !targetWord) {
    return (
      <div className="min-h-screen bg-black text-white">
        <TopBar points={points} />
        <div className="text-center pt-20 text-zinc-500">Loading…</div>
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
            <div className="space-y-3 mt-6">
              <button
                onClick={() => {
                  const words = getWordList(wordLength);
                  setTargetWord(pickRandom(words));
                  setGuesses([]);
                  setCurrentGuess('');
                  setGameOver(false);
                  setWon(false);
                  setShowResult(false);
                  setKeyStates({});
                  setHintLetter(null);
                  setHintUsed(false);
                }}
                className="w-full bg-cyan-400 hover:bg-cyan-500 text-black font-bold py-3 px-6 rounded-xl transition-colors"
              >
                Play Again
              </button>
              <button
                onClick={() => router.push('/games/wordle')}
                className="w-full bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 px-6 rounded-xl transition-colors"
              >
                Change Difficulty
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
