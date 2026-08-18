/**
 * Fill-the-gap content for the Articles game (a / an / the / — ).
 *
 * How blanks work:
 * - Each blank in `sentence` is marked with "___".
 * - `answers` holds the correct value for each blank, in order.
 * - Use "" (empty string) for the zero article (no article needed).
 *
 * 5 levels, 10 sentences each, easy → hard.
 */

export type ArticleAnswer = "a" | "an" | "the" | "";

export interface FillGapItem {
  id: string;
  sentence: string;
  answers: ArticleAnswer[];
  explanation: string;
}

export interface ArticleLevel {
  level: number;
  title: string;
  description: string;
  items: FillGapItem[];
}

export const articleLevels: ArticleLevel[] = [
  // ─────────────────────────────────────────────
  // LEVEL 1 — First Steps
  // Basic a/an, first vs. second mention, sound not spelling
  // ─────────────────────────────────────────────
  {
    level: 1,
    title: "First Steps",
    description: "Basic a/an, new vs. known things, sound not spelling",
    items: [
      {
        id: "l1-1",
        sentence: "I need ___ umbrella today.",
        answers: ["an"],
        explanation: "\"Umbrella\" starts with a vowel sound → an.",
      },
      {
        id: "l1-2",
        sentence: "She has ___ cat and ___ dog.",
        answers: ["a", "a"],
        explanation: "Both are new, singular, countable nouns → a.",
      },
      {
        id: "l1-3",
        sentence: "He is ___ honest man.",
        answers: ["an"],
        explanation: "The \"h\" in \"honest\" is silent, so it starts with a vowel sound → an.",
      },
      {
        id: "l1-4",
        sentence: "It takes ___ hour to get there.",
        answers: ["an"],
        explanation: "\"Hour\" starts with a vowel sound (silent h) → an.",
      },
      {
        id: "l1-5",
        sentence: "My brother works at ___ university.",
        answers: ["a"],
        explanation: "\"University\" starts with a \"y\" sound, a consonant sound → a.",
      },
      {
        id: "l1-6",
        sentence: "I saw ___ bird in the tree. ___ bird was singing.",
        answers: ["a", "the"],
        explanation: "First mention → a. Second mention, now known → the.",
      },
      {
        id: "l1-7",
        sentence: "She wants to buy ___ car. ___ car she likes is red.",
        answers: ["a", "the"],
        explanation: "New idea → a. Already specific and known → the.",
      },
      {
        id: "l1-8",
        sentence: "This is ___ European city.",
        answers: ["a"],
        explanation: "\"European\" starts with a \"y\" sound → a.",
      },
      {
        id: "l1-9",
        sentence: "She has ___ MBA from a top school.",
        answers: ["an"],
        explanation: "\"MBA\" is pronounced \"em-bee-ay\", starting with a vowel sound → an.",
      },
      {
        id: "l1-10",
        sentence: "I met ___ old friend yesterday.",
        answers: ["an"],
        explanation: "\"Old\" starts with a vowel sound → an.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // LEVEL 2 — General or Specific
  // Zero article (plurals/uncountables) + the (unique things, superlatives, order)
  // ─────────────────────────────────────────────
  {
    level: 2,
    title: "General or Specific",
    description: "No article for general ideas, the for unique or specific things",
    items: [
      {
        id: "l2-1",
        sentence: "___ cats are independent animals.",
        answers: [""],
        explanation: "Talking about cats in general → no article.",
      },
      {
        id: "l2-2",
        sentence: "I need ___ water, please.",
        answers: [""],
        explanation: "\"Water\" is uncountable and general here → no article.",
      },
      {
        id: "l2-3",
        sentence: "___ sun is very bright today.",
        answers: ["the"],
        explanation: "There is only one sun → the.",
      },
      {
        id: "l2-4",
        sentence: "She is ___ best student in the class.",
        answers: ["the"],
        explanation: "Superlatives (best, worst, tallest...) → the.",
      },
      {
        id: "l2-5",
        sentence: "He was ___ first person to finish the race.",
        answers: ["the"],
        explanation: "Order words (first, next, last...) → the.",
      },
      {
        id: "l2-6",
        sentence: "___ money can't buy happiness.",
        answers: [""],
        explanation: "\"Money\" is uncountable, general idea → no article.",
      },
      {
        id: "l2-7",
        sentence: "___ internet has changed our lives.",
        answers: ["the"],
        explanation: "A unique, one-of-a-kind thing → the.",
      },
      {
        id: "l2-8",
        sentence: "I love ___ music in general.",
        answers: [""],
        explanation: "General idea, not one specific song or genre → no article.",
      },
      {
        id: "l2-9",
        sentence: "This is ___ most beautiful place I've ever seen.",
        answers: ["the"],
        explanation: "Superlative → the.",
      },
      {
        id: "l2-10",
        sentence: "___ children need love and support.",
        answers: [""],
        explanation: "Children in general, not specific ones → no article.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // LEVEL 3 — Places and Names
  // Zero article with proper nouns + geographic exceptions (rivers, seas, mountain ranges vs. single peaks/lakes)
  // ─────────────────────────────────────────────
  {
    level: 3,
    title: "Places and Names",
    description: "Countries, rivers, mountains and other place-name rules",
    items: [
      {
        id: "l3-1",
        sentence: "I live in ___ Germany.",
        answers: [""],
        explanation: "Most country names take no article.",
      },
      {
        id: "l3-2",
        sentence: "She studies in ___ United States.",
        answers: ["the"],
        explanation: "Countries with plural or \"union\" names take the.",
      },
      {
        id: "l3-3",
        sentence: "___ Nile is the longest river in Africa.",
        answers: ["the"],
        explanation: "Rivers always take the.",
      },
      {
        id: "l3-4",
        sentence: "___ Mount Everest is very tall.",
        answers: [""],
        explanation: "Single mountain names take no article.",
      },
      {
        id: "l3-5",
        sentence: "They sailed across ___ Atlantic Ocean.",
        answers: ["the"],
        explanation: "Oceans and seas always take the.",
      },
      {
        id: "l3-6",
        sentence: "___ Alps are located in Europe.",
        answers: ["the"],
        explanation: "Mountain ranges (groups of mountains) take the.",
      },
      {
        id: "l3-7",
        sentence: "I want to visit ___ Netherlands next year.",
        answers: ["the"],
        explanation: "A short list of countries always takes the: the Netherlands, the UK, the USA...",
      },
      {
        id: "l3-8",
        sentence: "___ Japan has many beautiful temples.",
        answers: [""],
        explanation: "Most country names take no article.",
      },
      {
        id: "l3-9",
        sentence: "___ Lake Baikal is very deep and clear.",
        answers: [""],
        explanation: "Single lake names take no article.",
      },
      {
        id: "l3-10",
        sentence: "___ Philippines consists of many islands.",
        answers: ["the"],
        explanation: "Groups of islands take the.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // LEVEL 4 — Everyday Expressions
  // Fixed expressions with places, meals, times of day, general institutions
  // ─────────────────────────────────────────────
  {
    level: 4,
    title: "Everyday Expressions",
    description: "Fixed phrases: school, home, work, meals and time of day",
    items: [
      {
        id: "l4-1",
        sentence: "I go to ___ school every day.",
        answers: [""],
        explanation: "\"Go to school\" as a routine activity → no article.",
      },
      {
        id: "l4-2",
        sentence: "She went to ___ school to talk to the teacher.",
        answers: ["the"],
        explanation: "Here \"school\" means a specific building, not the routine → the.",
      },
      {
        id: "l4-3",
        sentence: "We had dinner at ___ home.",
        answers: [""],
        explanation: "\"Home\" usually takes no article in fixed expressions.",
      },
      {
        id: "l4-4",
        sentence: "He is at ___ work right now.",
        answers: [""],
        explanation: "\"At work\" is a fixed expression → no article.",
      },
      {
        id: "l4-5",
        sentence: "They travel by ___ car every morning.",
        answers: [""],
        explanation: "Transport with \"by\" takes no article: by car, by bus, by train.",
      },
      {
        id: "l4-6",
        sentence: "I usually wake up in ___ morning.",
        answers: ["the"],
        explanation: "Parts of the day after \"in\" take the: in the morning/afternoon/evening.",
      },
      {
        id: "l4-7",
        sentence: "He visited his friend in ___ hospital.",
        answers: ["the"],
        explanation: "As a visitor going to a specific building → the.",
      },
      {
        id: "l4-8",
        sentence: "We go to ___ bed at eleven o'clock.",
        answers: [""],
        explanation: "\"Go to bed\" is a fixed expression → no article.",
      },
      {
        id: "l4-9",
        sentence: "I have ___ lunch at noon every day.",
        answers: [""],
        explanation: "Meal names usually take no article.",
      },
      {
        id: "l4-10",
        sentence: "She is in ___ prison for robbery.",
        answers: [""],
        explanation: "\"In prison\" as a general state (being a prisoner) takes no article.",
      },
    ],
  },

  // ─────────────────────────────────────────────
  // LEVEL 5 — Mixed Challenge
  // Multiple blanks per sentence, combining several rules at once
  // ─────────────────────────────────────────────
  {
    level: 5,
    title: "Mixed Challenge",
    description: "Longer sentences that combine several rules at once",
    items: [
      {
        id: "l5-1",
        sentence: "I saw ___ elephant at ___ zoo yesterday.",
        answers: ["an", "the"],
        explanation: "\"Elephant\" starts with a vowel sound → an. \"Zoo\" is a specific, known place → the.",
      },
      {
        id: "l5-2",
        sentence: "___ Amazon River flows through ___ Brazil.",
        answers: ["the", ""],
        explanation: "Rivers take the. Most country names take no article.",
      },
      {
        id: "l5-3",
        sentence: "She bought ___ new phone. ___ phone is very fast.",
        answers: ["a", "the"],
        explanation: "New item → a. Already mentioned, now known → the.",
      },
      {
        id: "l5-4",
        sentence: "Tigers are ___ endangered species, and ___ WWF works to protect them.",
        answers: ["an", "the"],
        explanation: "\"Endangered\" starts with a vowel sound → an. Organization names/acronyms often take the.",
      },
      {
        id: "l5-5",
        sentence: "He is ___ only person who knows ___ truth.",
        answers: ["the", "the"],
        explanation: "\"Only\" works like a superlative → the. \"The truth\" is a specific, known idea → the.",
      },
      {
        id: "l5-6",
        sentence: "I need ___ hour to finish ___ report.",
        answers: ["an", "the"],
        explanation: "\"Hour\" starts with a vowel sound → an. \"Report\" is a specific, known one → the.",
      },
      {
        id: "l5-7",
        sentence: "___ Netherlands is famous for ___ tulips.",
        answers: ["the", ""],
        explanation: "\"The Netherlands\" always takes the. Tulips in general → no article.",
      },
      {
        id: "l5-8",
        sentence: "She is ___ university student who wants to visit ___ Alps this summer.",
        answers: ["a", "the"],
        explanation: "\"University\" starts with a consonant sound → a. Mountain ranges take the.",
      },
      {
        id: "l5-9",
        sentence: "We watched ___ sunset from ___ top of ___ mountain.",
        answers: ["the", "the", "the"],
        explanation: "All three are specific and known in this context → the.",
      },
      {
        id: "l5-10",
        sentence: "I bought ___ umbrella because ___ weather was terrible, and now ___ umbrella is broken.",
        answers: ["an", "the", "the"],
        explanation: "\"Umbrella\" starts with a vowel sound → an. \"Weather\" here is specific (today's) → the. Already mentioned umbrella → the.",
      },
    ],
  },
];