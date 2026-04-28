export interface Phrase {
  id: string;
  title: string;
  levels: {
    A1: string;
    A2: string;
    B1: string;
    B2: string;
    C1: string;
    C2: string;
  };
}

export const A1_C2_PHRASES: Phrase[] = [
  {
    id: "i-dont-understand",
    title: "I don't understand",
    levels: {
      A1: "I don't understand",
      A2: "I don't get it",
      B1: "Could you explain?",
      B2: "Could you walk me through it?",
      C1: "Could you clarify the main point?",
      C2: "Could you clarify the nuance?"
    }
  },
  // Другие фразы будут добавлены позже
];
