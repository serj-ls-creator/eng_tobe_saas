import type { GrammarLesson, LessonBlock, LessonExample, LessonMistake } from "@/constants/grammar-lessons/types";
import { ADJECTIVE_LESSONS } from "@/constants/grammar-lessons/adjectives";
import { ADVERB_LESSONS } from "@/constants/grammar-lessons/adverbs";
import { CONDITIONAL_LESSONS } from "@/constants/grammar-lessons/conditionals";
import { GERUND_INFINITIVE_LESSONS } from "@/constants/grammar-lessons/gerunds-infinitives";
import { MODAL_LESSONS } from "@/constants/grammar-lessons/modals";
import { NOUN_LESSONS } from "@/constants/grammar-lessons/nouns";
import { PARTICIPLE_LESSONS } from "@/constants/grammar-lessons/participles";
import { PASSIVE_VOICE_LESSONS } from "@/constants/grammar-lessons/passive-voice";
import { PHRASAL_VERB_LESSONS } from "@/constants/grammar-lessons/phrasal-verbs";
import { PREPOSITION_LESSONS } from "@/constants/grammar-lessons/prepositions";
import { PRONOUN_LESSONS } from "@/constants/grammar-lessons/pronouns";
import { QUANTIFIER_LESSONS } from "@/constants/grammar-lessons/quantifiers";
import { QUESTION_LESSONS } from "@/constants/grammar-lessons/questions";
import { REPORTED_SPEECH_LESSONS } from "@/constants/grammar-lessons/reported-speech";
import { SENTENCE_LESSONS } from "@/constants/grammar-lessons/sentences";
import { VERB_LESSONS } from "@/constants/grammar-lessons/verbs";
import { TENSE_LESSONS } from "@/constants/grammar-lessons/tenses";
import { GRAMMAR_EXAMPLES } from "@/constants/grammar-examples";
import { articleLevels } from "@/data/grammar/article/fill_the_gap";

export interface MistakeOption {
  text: string;
  incorrect: boolean;
  correction?: string;
  explanation?: string;
}

export interface MistakeRound {
  id: string;
  options: MistakeOption[];
}

export interface MistakeLevel {
  level: number;
  title: string;
  description: string;
  items: MistakeRound[];
}

export const MISTAKE_LEVELS = [
  { level: 1, title: "Starter", description: "Find a clear mistake in a short, everyday sentence." },
  { level: 2, title: "Developing", description: "Check grammar in familiar sentences with more detail." },
  { level: 3, title: "Intermediate", description: "Look closely at longer sentences and connected ideas." },
  { level: 4, title: "Advanced", description: "Spot a less obvious error in a complex sentence." },
] as const;

const LESSONS: Record<string, Record<string, GrammarLesson>> = {
  adjectives: ADJECTIVE_LESSONS,
  adverbs: ADVERB_LESSONS,
  "conditional-sentences": CONDITIONAL_LESSONS,
  "gerunds-infinitives": GERUND_INFINITIVE_LESSONS,
  modals: MODAL_LESSONS,
  nouns: NOUN_LESSONS,
  participles: PARTICIPLE_LESSONS,
  "passive-voice": PASSIVE_VOICE_LESSONS,
  "phrasal-verbs": PHRASAL_VERB_LESSONS,
  prepositions: PREPOSITION_LESSONS,
  pronouns: PRONOUN_LESSONS,
  quantifiers: QUANTIFIER_LESSONS,
  questions: QUESTION_LESSONS,
  "reported-speech": REPORTED_SPEECH_LESSONS,
  sentences: SENTENCE_LESSONS,
  verbs: VERB_LESSONS,
  tenses: TENSE_LESSONS,
};

const fallbackCorrect = [
  "Mia usually takes the bus to work.",
  "We have already finished our homework.",
  "They were waiting outside when the shop opened.",
  "If you need help, please ask your teacher.",
  "The book that you gave me is very useful.",
  "She said that she would call us the next day.",
  "The documents will be checked before the meeting.",
  "He enjoys learning new words in his free time.",
];

const MANUAL_MISTAKES: Record<string, Record<string, LessonMistake[]>> = {
  adjectives: {
    "adjective-order": [
      { incorrect: "She bought a cotton blue lovely dress.", correct: "She bought a lovely blue cotton dress.", explanation: "Opinion adjectives usually come before colour and material adjectives." },
      { incorrect: "They live in a wooden old small house.", correct: "They live in a small old wooden house.", explanation: "Use the usual adjective order: size, age, then material." },
      { incorrect: "He has a sports new Italian car.", correct: "He has a new Italian sports car.", explanation: "Age and origin normally come before the purpose or type of a noun." },
    ],
  },
  tenses: {
    "what-are-tenses": [
      { incorrect: "I have finished my homework yesterday.", correct: "I finished my homework yesterday.", explanation: "Use the past simple with a finished time such as yesterday." },
      { incorrect: "She is go to work every day.", correct: "She goes to work every day.", explanation: "Use the present simple for a regular habit." },
      { incorrect: "They will goes home tomorrow.", correct: "They will go home tomorrow.", explanation: "Use the base verb after will." },
    ],
    "present-past-future": [
      { incorrect: "The train will leaves at six tomorrow.", correct: "The train leaves at six tomorrow.", explanation: "Use the present simple for a fixed timetable. After will, use the base verb: will leave." },
      { incorrect: "We was at home last night.", correct: "We were at home last night.", explanation: "Use were with we in the past simple." },
      { incorrect: "I am study English now.", correct: "I am studying English now.", explanation: "Use be + verb-ing for an action in progress now." },
    ],
    "tense-aspects": [
      { incorrect: "At eight last night, I was read a book.", correct: "At eight last night, I was reading a book.", explanation: "Use was/were + verb-ing for an action in progress at a past time." },
      { incorrect: "She has been know him for years.", correct: "She has known him for years.", explanation: "Know is a stative verb and is usually not continuous." },
      { incorrect: "They had finish before we arrived.", correct: "They had finished before we arrived.", explanation: "Use a past participle after had in the past perfect." },
    ],
    "regular-irregular-verbs-tenses": [
      { incorrect: "She has went to work.", correct: "She has gone to work.", explanation: "Use the past participle gone after has; went is the past simple form." },
      { incorrect: "We buyed some apples yesterday.", correct: "We bought some apples yesterday.", explanation: "Buy is irregular: buy, bought, bought." },
      { incorrect: "He has taked the wrong bus.", correct: "He has taken the wrong bus.", explanation: "Take is irregular: take, took, taken." },
    ],
    "auxiliary-verbs-be-do-have": [
      { incorrect: "He doesn't can swim.", correct: "He can't swim.", explanation: "Do not use do/does with a modal verb. Put not after can." },
      { incorrect: "Does she is working today?", correct: "Is she working today?", explanation: "Use be before the subject in a present continuous question; do not add does." },
      { incorrect: "They have finish the task.", correct: "They have finished the task.", explanation: "Use a past participle after have in a perfect form." },
    ],
  },
};

function cleanSentence(value: string): string {
  return value
    .replace(/^Not:\s*/i, "")
    .replace(/\s+\([^)]*\)\s*$/, "")
    .trim();
}

const SENTENCE_CONTEXT_SUBJECTS = [
  "Anna", "Ben", "Chloe", "Daniel", "Emma", "Liam", "Mia", "Noah", "our teacher", "a student",
  "the manager", "my cousin", "our guide", "the new student", "one classmate"
];
const SENTENCE_CONTEXT_ACTIONS = [
  "wrote this sentence in a message", "read this sentence aloud in class", "put this sentence on the board",
  "shared this sentence with the group", "used this sentence in a story", "added this sentence to a notebook",
  "showed this sentence to a friend", "included this sentence in a report", "practised this sentence after class",
  "copied this sentence into an exercise"
];

function sentenceKey(sentence: string): string {
  return sentence.toLocaleLowerCase().replace(/[^a-z0-9]+/g, "").trim();
}

function makeSentenceUnique(sentence: string, used: Set<string>, seed: number): { text: string; frame?: (value: string) => string } {
  const clean = cleanSentence(sentence);
  const key = sentenceKey(clean);
  if (!used.has(key)) {
    used.add(key);
    return { text: clean };
  }

  const variants = SENTENCE_CONTEXT_SUBJECTS.length * SENTENCE_CONTEXT_ACTIONS.length;
  for (let attempt = 0; attempt < variants; attempt += 1) {
    const index = (seed + attempt) % variants;
    const subject = SENTENCE_CONTEXT_SUBJECTS[Math.floor(index / SENTENCE_CONTEXT_ACTIONS.length)];
    const action = SENTENCE_CONTEXT_ACTIONS[index % SENTENCE_CONTEXT_ACTIONS.length];
    const frame = (value: string) => `${subject} ${action}: “${cleanSentence(value)}”`;
    const framed = frame(clean);
    const framedKey = sentenceKey(framed);
    if (!used.has(framedKey)) {
      used.add(framedKey);
      return { text: framed, frame };
    }
  }

  // The grammar datasets are small enough that the context variants above should not run out.
  const fallback = `${SENTENCE_CONTEXT_SUBJECTS[seed % SENTENCE_CONTEXT_SUBJECTS.length]} wrote this sentence down: “${clean}”`;
  used.add(sentenceKey(fallback));
  return { text: fallback, frame: (value) => `${SENTENCE_CONTEXT_SUBJECTS[seed % SENTENCE_CONTEXT_SUBJECTS.length]} wrote this sentence down: “${cleanSentence(value)}”` };
}

function lessonMistakes(lesson: GrammarLesson | undefined): LessonMistake[] {
  return lesson?.blocks.flatMap((block) => block.type === "mistakes" ? block.items : []) ?? [];
}

function lessonExamples(lesson: GrammarLesson | undefined): string[] {
  if (!lesson) return [];
  return lesson.blocks.flatMap((block: LessonBlock) => {
    if (block.type === "text" || block.type === "examples") {
      return (block.examples as LessonExample[] | undefined)?.map((example) => cleanSentence(example.text)) ?? [];
    }
    return [];
  }).filter((sentence) => sentence.length > 12 && !/\bnot\s*:/i.test(sentence) && !/[→↔]/.test(sentence));
}

function hash(value: string): number {
  return [...value].reduce((sum, character) => sum + character.charCodeAt(0), 0);
}

function shuffle<T>(items: T[], seed: number): T[] {
  const result = [...items];
  let state = seed || 1;
  for (let index = result.length - 1; index > 0; index -= 1) {
    state = (state * 48271) % 2147483647;
    const swapIndex = state % (index + 1);
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

function buildArticleLevels(): MistakeLevel[] {
  const levels = articleLevels.slice(0, 4);
  const usedSentences = new Set<string>();
  return MISTAKE_LEVELS.map((meta, levelIndex) => {
    const source = levels[levelIndex];
    const items = source.items.map((item, itemIndex) => {
      const answers = [...item.answers];
      const correct = item.sentence.replace(/___/g, () => answers.shift() ?? "");
      const wrongAnswers = [...item.answers];
      const correctArticle = wrongAnswers[0] ?? "";
      wrongAnswers[0] = (["a", "an", "the", ""] as const).find((article) => article !== correctArticle) ?? "the";
      const wrong = item.sentence.replace(/___/g, () => wrongAnswers.shift() ?? "");
      const correctPool = source.items
        .filter((other) => other.id !== item.id)
        .map((other) => {
          const otherAnswers = [...other.answers];
          return other.sentence.replace(/___/g, () => otherAnswers.shift() ?? "").trim();
        });
      const distractors = shuffle([...new Set([correct, ...correctPool])].filter((sentence) => sentence !== wrong), hash(`${item.id}-article-options`)).slice(0, 4);
      while (distractors.length < 4) {
        const candidate = fallbackCorrect[(itemIndex + distractors.length) % fallbackCorrect.length];
        if (candidate !== wrong && !distractors.includes(candidate)) distractors.push(candidate);
      }
      const options: MistakeOption[] = [
        ...distractors.map((text) => ({ text, incorrect: false })),
        { text: wrong, incorrect: true, correction: correct, explanation: item.explanation },
      ];
      const uniqueOptions = options.map((option, optionIndex) => {
        const unique = makeSentenceUnique(option.text, usedSentences, hash(`${item.id}-${levelIndex}-${optionIndex}`));
        return {
          ...option,
          text: unique.text,
          ...(option.correction && unique.frame ? { correction: unique.frame(option.correction) } : {})
        };
      });
      return { id: `article-${levelIndex + 1}-${itemIndex + 1}`, options: shuffle(uniqueOptions, hash(item.id)) };
    });
    return { ...meta, items };
  });
}

const ARTICLE_LEVELS = buildArticleLevels();

export function getGrammarMistakeLevels(categoryId: string, topicId: string): MistakeLevel[] | null {
  if (categoryId === "articles" && topicId === "articles") return ARTICLE_LEVELS;

  const lesson = LESSONS[categoryId]?.[topicId];
  if (!lesson && !MANUAL_MISTAKES[categoryId]?.[topicId]) return null;

  const sourceMistakes = lessonMistakes(lesson);
  const mistakes = sourceMistakes.length ? sourceMistakes : MANUAL_MISTAKES[categoryId]?.[topicId] ?? [];
  if (!mistakes.length) return null;

  const correctPool = [...new Set([
    ...mistakes.map((mistake) => cleanSentence(mistake.correct)),
    ...lessonExamples(lesson),
    ...(GRAMMAR_EXAMPLES[topicId] ?? []).map(cleanSentence),
  ])].filter((sentence) => sentence.length > 12 && !/\bnot\s*:/i.test(sentence));
  const safePool = correctPool.length >= 4 ? correctPool : [...new Set([...correctPool, ...fallbackCorrect])];
  const usedSentences = new Set<string>();

  return MISTAKE_LEVELS.map((levelInfo) => {
    const items = Array.from({ length: 10 }, (_, roundIndex) => {
      const mistake = mistakes[(roundIndex + levelInfo.level - 1) % mistakes.length];
      const incorrect = cleanSentence(mistake.incorrect);
      const sortedCorrect = [...safePool].filter((sentence) => sentence !== incorrect).sort((left, right) => left.length - right.length);
      const bandStart = Math.floor((levelInfo.level - 1) * sortedCorrect.length / 4);
      const bandEnd = Math.max(bandStart + 1, Math.floor(levelInfo.level * sortedCorrect.length / 4));
      const band = sortedCorrect.slice(bandStart, bandEnd);
      const candidates = band.length >= 3 ? band : sortedCorrect;
      const rotated = [...candidates.slice((roundIndex * 3) % candidates.length), ...candidates.slice(0, (roundIndex * 3) % candidates.length)];
      const selectedCorrect = [cleanSentence(mistake.correct), ...rotated.filter((sentence) => sentence !== cleanSentence(mistake.correct))].slice(0, 4);
      let fallbackIndex = roundIndex;
      while (selectedCorrect.length < 4) {
        const candidate = fallbackCorrect[fallbackIndex % fallbackCorrect.length];
        fallbackIndex += 1;
        if (candidate !== incorrect && !selectedCorrect.includes(candidate)) selectedCorrect.push(candidate);
      }

      const options: MistakeOption[] = [
        ...selectedCorrect.map((text) => ({ text, incorrect: false })),
        { text: incorrect, incorrect: true, correction: cleanSentence(mistake.correct), explanation: mistake.explanation },
      ];
      const uniqueOptions = options.map((option, optionIndex) => {
        const unique = makeSentenceUnique(option.text, usedSentences, hash(`${categoryId}-${topicId}-${levelInfo.level}-${roundIndex}-${optionIndex}`));
        return {
          ...option,
          text: unique.text,
          ...(option.correction && unique.frame ? { correction: unique.frame(option.correction) } : {})
        };
      });
      return { id: `${categoryId}-${topicId}-l${levelInfo.level}-r${roundIndex + 1}`, options: shuffle(uniqueOptions, hash(`${categoryId}-${topicId}-${levelInfo.level}-${roundIndex}`)) };
    });
    return { ...levelInfo, items };
  });
}

