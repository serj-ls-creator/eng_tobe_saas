export interface SilentWordItem {
  word: string;
  silentLetter: string;
  silentIndex: number;
}

export interface SilentWordLevel {
  id: string;
  name: string;
  words: SilentWordItem[];
}

export const SILENT_WORD_LEVELS: SilentWordLevel[] = [
  {
    id: "level-1",
    name: "Level 1",
    words: [
      { word: "would", silentLetter: "l", silentIndex: 3 },
      { word: "could", silentLetter: "l", silentIndex: 3 },
      { word: "should", silentLetter: "l", silentIndex: 4 },
      { word: "knight", silentLetter: "k", silentIndex: 0 },
      { word: "knife", silentLetter: "k", silentIndex: 0 },
      { word: "know", silentLetter: "k", silentIndex: 0 },
      { word: "knock", silentLetter: "k", silentIndex: 0 },
      { word: "knee", silentLetter: "k", silentIndex: 0 },
      { word: "knew", silentLetter: "k", silentIndex: 0 },
      { word: "wrap", silentLetter: "w", silentIndex: 0 },
    ],
  },
  {
    id: "level-2",
    name: "Level 2",
    words: [
      { word: "write", silentLetter: "w", silentIndex: 0 },
      { word: "wrong", silentLetter: "w", silentIndex: 0 },
      { word: "wrist", silentLetter: "w", silentIndex: 0 },
      { word: "wreck", silentLetter: "w", silentIndex: 0 },
      { word: "lamb", silentLetter: "b", silentIndex: 3 },
      { word: "climb", silentLetter: "b", silentIndex: 4 },
      { word: "bomb", silentLetter: "b", silentIndex: 3 },
      { word: "thumb", silentLetter: "b", silentIndex: 4 },
      { word: "comb", silentLetter: "b", silentIndex: 3 },
      { word: "debt", silentLetter: "b", silentIndex: 2 },
    ],
  },
  {
    id: "level-3",
    name: "Level 3",
    words: [
      { word: "doubt", silentLetter: "b", silentIndex: 3 },
      { word: "subtle", silentLetter: "b", silentIndex: 2 },
      { word: "hour", silentLetter: "h", silentIndex: 0 },
      { word: "honest", silentLetter: "h", silentIndex: 0 },
      { word: "ghost", silentLetter: "h", silentIndex: 1 },
      { word: "heir", silentLetter: "h", silentIndex: 0 },
      { word: "herb", silentLetter: "h", silentIndex: 0 },
      { word: "honor", silentLetter: "h", silentIndex: 0 },
      { word: "island", silentLetter: "s", silentIndex: 2 },
      { word: "castle", silentLetter: "t", silentIndex: 3 },
    ],
  },
  {
    id: "level-4",
    name: "Level 4",
    words: [
      { word: "listen", silentLetter: "t", silentIndex: 3 },
      { word: "often", silentLetter: "t", silentIndex: 2 },
      { word: "fasten", silentLetter: "t", silentIndex: 3 },
      { word: "soften", silentLetter: "t", silentIndex: 3 },
      { word: "hasten", silentLetter: "t", silentIndex: 3 },
      { word: "moisten", silentLetter: "t", silentIndex: 4 },
      { word: "calm", silentLetter: "l", silentIndex: 2 },
      { word: "palm", silentLetter: "l", silentIndex: 2 },
      { word: "psalm", silentLetter: "p", silentIndex: 0 },
      { word: "receipt", silentLetter: "p", silentIndex: 5 },
    ],
  },
  {
    id: "level-5",
    name: "Level 5",
    words: [
      { word: "scene", silentLetter: "c", silentIndex: 1 },
      { word: "science", silentLetter: "c", silentIndex: 1 },
      { word: "autumn", silentLetter: "n", silentIndex: 5 },
      { word: "column", silentLetter: "n", silentIndex: 5 },
      { word: "solemn", silentLetter: "n", silentIndex: 5 },
      { word: "sword", silentLetter: "w", silentIndex: 1 },
      { word: "answer", silentLetter: "w", silentIndex: 3 },
      { word: "two", silentLetter: "w", silentIndex: 1 },
      { word: "whole", silentLetter: "w", silentIndex: 0 },
      { word: "who", silentLetter: "w", silentIndex: 0 },
    ],
  },
  {
    id: "level-6",
    name: "Level 6",
    words: [
      { word: "whose", silentLetter: "w", silentIndex: 0 },
      { word: "whom", silentLetter: "w", silentIndex: 0 },
      { word: "sign", silentLetter: "g", silentIndex: 2 },
      { word: "design", silentLetter: "g", silentIndex: 4 },
      { word: "align", silentLetter: "g", silentIndex: 3 },
      { word: "gnome", silentLetter: "g", silentIndex: 0 },
      { word: "gnarl", silentLetter: "g", silentIndex: 0 },
      { word: "gnat", silentLetter: "g", silentIndex: 0 },
      { word: "foreign", silentLetter: "g", silentIndex: 5 },
      { word: "reign", silentLetter: "g", silentIndex: 3 },
    ],
  },
  {
    id: "level-7",
    name: "Level 7",
    words: [
      { word: "muscle", silentLetter: "c", silentIndex: 3 },
      { word: "scissors", silentLetter: "c", silentIndex: 1 },
      { word: "yacht", silentLetter: "c", silentIndex: 2 },
      { word: "psychology", silentLetter: "p", silentIndex: 0 },
      { word: "pneumonia", silentLetter: "p", silentIndex: 0 },
      { word: "pterodactyl", silentLetter: "p", silentIndex: 0 },
      { word: "fetch", silentLetter: "t", silentIndex: 2 },
      { word: "match", silentLetter: "t", silentIndex: 2 },
      { word: "watch", silentLetter: "t", silentIndex: 2 },
      { word: "witch", silentLetter: "t", silentIndex: 2 },
    ],
  },
  {
    id: "level-8",
    name: "Level 8",
    words: [
      { word: "catch", silentLetter: "t", silentIndex: 2 },
      { word: "wrinkle", silentLetter: "w", silentIndex: 0 },
      { word: "folklore", silentLetter: "l", silentIndex: 2 },
      { word: "half", silentLetter: "l", silentIndex: 2 },
      { word: "calf", silentLetter: "l", silentIndex: 2 },
      { word: "talk", silentLetter: "l", silentIndex: 2 },
      { word: "walk", silentLetter: "l", silentIndex: 2 },
      { word: "chalk", silentLetter: "l", silentIndex: 3 },
      { word: "stalk", silentLetter: "l", silentIndex: 3 },
      { word: "yolk", silentLetter: "l", silentIndex: 2 },
    ],
  },
  {
    id: "level-9",
    name: "Level 9",
    words: [
      { word: "folk", silentLetter: "l", silentIndex: 2 },
      { word: "knob", silentLetter: "k", silentIndex: 0 },
      { word: "kneel", silentLetter: "k", silentIndex: 0 },
      { word: "knit", silentLetter: "k", silentIndex: 0 },
      { word: "knack", silentLetter: "k", silentIndex: 0 },
      { word: "wrestle", silentLetter: "w", silentIndex: 0 },
      { word: "wrath", silentLetter: "w", silentIndex: 0 },
      { word: "wrought", silentLetter: "w", silentIndex: 0 },
      { word: "rhyme", silentLetter: "h", silentIndex: 1 },
      { word: "rhythm", silentLetter: "h", silentIndex: 1 },
    ],
  },
  {
    id: "level-10",
    name: "Level 10",
    words: [
      { word: "rhinoceros", silentLetter: "h", silentIndex: 1 },
      { word: "exhaust", silentLetter: "h", silentIndex: 2 },
      { word: "exhibit", silentLetter: "h", silentIndex: 2 },
      { word: "vehicle", silentLetter: "h", silentIndex: 2 },
      { word: "mortgage", silentLetter: "t", silentIndex: 3 },
      { word: "Wednesday", silentLetter: "d", silentIndex: 2 },
      { word: "raspberry", silentLetter: "p", silentIndex: 3 },
      { word: "cupboard", silentLetter: "p", silentIndex: 2 },
      { word: "iron", silentLetter: "r", silentIndex: 1 },
      { word: "colonel", silentLetter: "l", silentIndex: 2 },
    ],
  },
];
