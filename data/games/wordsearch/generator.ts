export const GRID_ROWS = 14;
export const GRID_COLS = 10;

export type Cell = { row: number; col: number };
export type PlacedWord = { word: string; cells: Cell[] };
export type Puzzle = { grid: string[][]; words: PlacedWord[] };

const DIRECTIONS = [
  [-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1],
] as const;
const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function tryBuild(words: string[], count: number): PlacedWord[] | null {
  const selected: PlacedWord[] = [];
  const occupied = new Set<string>();
  const place = (wordIndex: number): boolean => {
    if (selected.length === count) return true;
    if (wordIndex >= words.length || selected.length + words.length - wordIndex < count) return false;

    const word = words[wordIndex];
    const attempts: { row: number; col: number; dr: number; dc: number; reverse: boolean }[] = [];
    for (let row = 0; row < GRID_ROWS; row++) {
      for (let col = 0; col < GRID_COLS; col++) {
        for (const [dr, dc] of DIRECTIONS) {
          const endRow = row + dr * (word.length - 1);
          const endCol = col + dc * (word.length - 1);
          if (endRow >= 0 && endRow < GRID_ROWS && endCol >= 0 && endCol < GRID_COLS) {
            attempts.push({ row, col, dr, dc, reverse: Math.random() < 0.5 });
          }
        }
      }
    }
    for (const attempt of shuffle(attempts).slice(0, 90)) {
      const cells = Array.from({ length: word.length }, (_, i) => ({
        row: attempt.row + attempt.dr * i,
        col: attempt.col + attempt.dc * i,
      }));
      if (cells.some(({ row, col }) => occupied.has(`${row},${col}`))) continue;
      cells.forEach(({ row, col }) => occupied.add(`${row},${col}`));
      selected.push({ word, cells: attempt.reverse ? [...cells].reverse() : cells });
      if (place(wordIndex + 1)) return true;
      selected.pop();
      cells.forEach(({ row, col }) => occupied.delete(`${row},${col}`));
    }
    return place(wordIndex + 1);
  };
  return place(0) ? selected : null;
}

function makePuzzle(placed: PlacedWord[]): Puzzle {
  const grid = Array.from({ length: GRID_ROWS }, () => Array.from({ length: GRID_COLS }, () => ''));
  for (const entry of placed) {
    entry.cells.forEach(({ row, col }, index) => { grid[row][col] = entry.word[index]; });
  }
  for (let row = 0; row < GRID_ROWS; row++) {
    for (let col = 0; col < GRID_COLS; col++) {
      if (!grid[row][col]) grid[row][col] = LETTERS[Math.floor(Math.random() * LETTERS.length)];
    }
  }
  return { grid, words: shuffle(placed) };
}

export function createPuzzle(sourceWords: string[]): Puzzle {
  const eligible = shuffle([...new Set(sourceWords.map((word) => word.toUpperCase()))])
    .filter((word) => /^[A-Z]+$/.test(word) && word.length <= GRID_ROWS && word.length <= GRID_COLS);

  for (let round = 0; round < 30; round++) {
    const firstLetters: Record<string, number> = {};
    const chosen = shuffle(eligible).filter((word) => {
      const first = word[0];
      if ((firstLetters[first] ?? 0) >= 2) return false;
      firstLetters[first] = (firstLetters[first] ?? 0) + 1;
      return true;
    }).slice(0, 10);

    for (let count = chosen.length; count >= 7; count--) {
      const placed = tryBuild(shuffle(chosen), count);
      if (!placed) continue;
      return makePuzzle(placed);
    }
  }
  return createPuzzle(sourceWords);
}

const MIX_COUNTS: Record<number, number> = { 7: 2, 6: 2, 5: 3, 4: 3 };

export function createMixedPuzzle(wordLists: Record<number, string[]>): Puzzle {
  const lists = Object.entries(MIX_COUNTS).map(([length, count]) => {
    const wordLength = Number(length);
    const eligible = [...new Set(wordLists[wordLength] ?? [])]
      .map((word) => word.toUpperCase())
      .filter((word) => word.length === wordLength && /^[A-Z]+$/.test(word));
    return { length: wordLength, count, eligible };
  });

  while (true) {
    const firstLetters: Record<string, number> = {};
    const selected: string[] = [];
    let canSelect = true;
    for (const { count, eligible } of lists) {
      let added = 0;
      for (const word of shuffle(eligible)) {
        const first = word[0];
        if ((firstLetters[first] ?? 0) >= 2) continue;
        firstLetters[first] = (firstLetters[first] ?? 0) + 1;
        selected.push(word);
        added++;
        if (added === count) break;
      }
      if (added < count) { canSelect = false; break; }
    }
    if (!canSelect) continue;
    const placed = tryBuild(shuffle(selected), 10);
    if (placed) return makePuzzle(placed);
  }
}
