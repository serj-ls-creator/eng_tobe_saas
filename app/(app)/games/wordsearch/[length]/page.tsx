'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { TopBar } from '@/components/layout/TopBar';
import { usePoints } from '@/lib/usePoints';
import { addPoints } from '@/lib/add-points';
import { completeActivity } from '@/lib/complete-activity';
import { createMixedPuzzle, createPuzzle, GRID_COLS, GRID_ROWS, type Cell, type Puzzle } from '@/data/games/wordsearch/generator';
import words4 from '@/data/games/wordsearch/words-4';
import words5 from '@/data/games/wordsearch/words-5';
import words6 from '@/data/games/wordsearch/words-6';
import words7 from '@/data/games/wordsearch/words-7';

const WORD_LISTS: Record<number, string[]> = { 4: words4, 5: words5, 6: words6, 7: words7 };
const CELL_KEY = (cell: Cell) => `${cell.row},${cell.col}`;

function samePath(selection: Cell[], answer: Cell[]) {
  if (selection.length !== answer.length) return false;
  return selection.every((cell, index) => CELL_KEY(cell) === CELL_KEY(answer[index])) ||
    selection.every((cell, index) => CELL_KEY(cell) === CELL_KEY(answer[answer.length - index - 1]));
}

function getStraightPath(start: Cell, end: Cell): Cell[] {
  const rowDelta = end.row - start.row;
  const colDelta = end.col - start.col;
  if (rowDelta !== 0 && colDelta !== 0 && Math.abs(rowDelta) !== Math.abs(colDelta)) return [start];
  const steps = Math.max(Math.abs(rowDelta), Math.abs(colDelta));
  if (steps === 0) return [start];
  const rowStep = Math.sign(rowDelta);
  const colStep = Math.sign(colDelta);
  return Array.from({ length: steps + 1 }, (_, index) => ({
    row: start.row + rowStep * index,
    col: start.col + colStep * index,
  }));
}

export default function WordsearchGamePage() {
  const params = useParams<{ length: string }>();
  const wordLength = Number(params.length);
  const isMix = params.length === 'mix';
  const sourceWords = WORD_LISTS[wordLength] ?? words4;
  const points = usePoints();
  const [puzzle, setPuzzle] = useState<Puzzle | null>(null);
  const [selection, setSelection] = useState<Cell[]>([]);
  const [foundWords, setFoundWords] = useState<string[]>([]);
  const [isSelecting, setIsSelecting] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [gameId, setGameId] = useState(0);
  const [recorded, setRecorded] = useState(false);

  const newPuzzle = useCallback(() => {
    setPuzzle(isMix ? createMixedPuzzle(WORD_LISTS) : createPuzzle(sourceWords));
    setSelection([]);
    setFoundWords([]);
    setShowResult(false);
    setRecorded(false);
    setGameId((id) => id + 1);
  }, [isMix, sourceWords]);

  useEffect(() => { newPuzzle(); }, [newPuzzle]);

  const selectionKeys = useMemo(() => new Set(selection.map(CELL_KEY)), [selection]);
  const foundCellKeys = useMemo(() => {
    const keys = new Set<string>();
    puzzle?.words.filter(({ word }) => foundWords.includes(word)).forEach(({ cells }) => {
      cells.forEach((cell) => keys.add(CELL_KEY(cell)));
    });
    return keys;
  }, [puzzle, foundWords]);

  const finishSelection = useCallback((picked: Cell[]) => {
    if (!puzzle || picked.length < 2) { setSelection([]); return; }
    const match = puzzle.words.find(({ word, cells }) => !foundWords.includes(word) && samePath(picked, cells));
    if (match) {
      const nextFound = [...foundWords, match.word];
      setFoundWords(nextFound);
      if (nextFound.length === puzzle.words.length) setShowResult(true);
    }
    setSelection([]);
  }, [puzzle, foundWords]);

  useEffect(() => {
    if (!showResult || recorded) return;
    setRecorded(true);
    addPoints(10, 'wordsearch');
    completeActivity();
  }, [showResult, recorded]);

  useEffect(() => {
    const stopSelection = () => setIsSelecting(false);
    window.addEventListener('pointerup', stopSelection);
    window.addEventListener('pointercancel', stopSelection);
    return () => {
      window.removeEventListener('pointerup', stopSelection);
      window.removeEventListener('pointercancel', stopSelection);
    };
  }, []);

  const beginSelection = (cell: Cell) => {
    if (foundCellKeys.has(CELL_KEY(cell))) return;
    setIsSelecting(true);
    setSelection([cell]);
  };

  const extendSelection = (cell: Cell) => {
    if (!isSelecting || selection.length === 0) return;
    const path = getStraightPath(selection[0], cell);
    setSelection(path);
  };

  const handleGridPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isSelecting) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const cellSize = bounds.width / GRID_COLS;
    const col = Math.floor((event.clientX - bounds.left) / cellSize);
    const row = Math.floor((event.clientY - bounds.top) / cellSize);
    if (row < 0 || row >= GRID_ROWS || col < 0 || col >= GRID_COLS) return;
    extendSelection({ row, col });
  };

  const validLength = isMix || [4, 5, 6, 7].includes(wordLength);

  return (
    <div className="min-h-screen bg-black text-white">
      <TopBar points={points} />
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center px-3 py-4 sm:px-4">
        <div className="mb-5 flex w-full items-center justify-between">
          <Link href="/games/wordsearch" className="text-xs text-zinc-500 hover:text-zinc-300">← Back</Link>
          <div className="text-center">
            <h1 className="text-lg font-bold">Wordsearch</h1>
            <p className="text-xs text-zinc-500">{isMix ? 'Find words of different lengths' : `Find the ${wordLength}-letter words`}</p>
          </div>
          <button onClick={newPuzzle} className="text-xs text-cyan-300 hover:text-cyan-200">New game</button>
        </div>

        {!validLength ? <p className="text-sm text-zinc-400">Choose a level to play.</p> : puzzle && (
          <>
            <div className="w-full overflow-hidden rounded-lg border border-white/20">
              <div
                className="grid select-none touch-none"
                style={{ gridTemplateColumns: `repeat(${GRID_COLS}, minmax(0, 1fr))` }}
                onPointerMove={handleGridPointerMove}
                onPointerUp={() => { setIsSelecting(false); finishSelection(selection); }}
              >
                {puzzle.grid.flatMap((row, rowIndex) => row.map((letter, colIndex) => {
                  const cell = { row: rowIndex, col: colIndex };
                  const key = CELL_KEY(cell);
                  const found = foundCellKeys.has(key);
                  const active = selectionKeys.has(key);
                  return (
                    <button
                      key={key}
                      type="button"
                      aria-label={`Row ${rowIndex + 1}, column ${colIndex + 1}, ${letter}`}
                      onPointerDown={(event) => {
                        event.preventDefault();
                        event.currentTarget.setPointerCapture(event.pointerId);
                        beginSelection(cell);
                      }}
                      className={`flex aspect-square min-w-0 items-center justify-center border-r border-b border-white/10 text-[11px] font-bold sm:text-sm ${found ? 'bg-emerald-500/70 text-white' : active ? 'bg-cyan-400 text-slate-950' : 'bg-slate-900 text-zinc-100 hover:bg-slate-800'}`}
                    >{letter}</button>
                  );
                }))}
              </div>
            </div>

            <div className="mt-5 w-full">
              <div className="mb-2 flex items-center justify-between text-xs text-zinc-500">
                <span>Words to find</span><span>{foundWords.length} / {puzzle.words.length}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {puzzle.words.map(({ word }) => (
                  <span key={word} className={`rounded-lg border px-3 py-2 text-sm font-semibold tracking-wide ${foundWords.includes(word) ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300 line-through' : 'border-white/10 bg-slate-900 text-white'}`}>{word}</span>
                ))}
              </div>
              <p className="mt-4 text-center text-xs text-zinc-500">Select a word from first letter to last letter.</p>
            </div>
          </>
        )}
      </div>

      {showResult && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-slate-900 p-8 text-center">
            <div className="mb-3 text-4xl">🎉</div>
            <h2 className="mb-2 text-2xl font-bold text-emerald-400">Great work!</h2>
            <p className="mb-6 text-sm text-zinc-400">You found all the words.</p>
            <button onClick={newPuzzle} className="w-full rounded-xl bg-cyan-400 px-6 py-3 font-bold text-black hover:bg-cyan-300">Play again</button>
          </div>
        </div>
      )}
      <span className="sr-only" aria-live="polite">Game {gameId}</span>
    </div>
  );
}
