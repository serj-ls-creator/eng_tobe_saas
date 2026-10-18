export interface LessonExample {
  text: string;
  highlight?: string;
  note?: string;
}

export interface LessonMistake {
  incorrect: string;
  correct: string;
  explanation: string;
}

export type LessonBlock =
  | { type: "text"; title: string; body: string; examples?: LessonExample[] }
  | { type: "table"; title: string; intro?: string; headings: string[]; rows: string[][]; highlightCells?: string[] }
  | { type: "mistakes"; title: string; items: LessonMistake[] }
  | { type: "examples"; title: string; intro?: string; examples: LessonExample[] }
  | { type: "tip"; title: string; body: string };

export interface GrammarLesson {
  intro: string;
  blocks: LessonBlock[];
  review: string[];
}
