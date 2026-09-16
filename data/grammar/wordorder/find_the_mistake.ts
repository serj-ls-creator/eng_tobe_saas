/**
 * Find the Mistake content for Word Order in Grammar.
 *
 * 4 levels, 10 sentences each (40 items total).
 * In each sentence, a pair of tokens is in swapped/incorrect positions.
 * The player selects the 2 tokens that should swap places to correct the word order.
 */

export interface WordOrderMistakeItem {
  id: string;
  tokens: string[];
  swapPair: [number, number];
  correctSentence: string;
  explanation: string;
}

export interface WordOrderMistakeLevel {
  level: number;
  title: string;
  description: string;
  items: WordOrderMistakeItem[];
}

export const wordOrderMistakeLevels: WordOrderMistakeLevel[] = [
  // ─────────────────────────────────────────────
  // LEVEL 1 — Basic SVO & Frequency Adverbs
  // ─────────────────────────────────────────────
  {
    level: 1,
    title: "Basic SVO & Frequency Adverbs",
    description: "Find the 2 words that need to swap places (frequency adverbs and SVO order)",
    items: [
      {
        id: "l1-1",
        tokens: ["I", "drink", "always", "coffee", "in the morning."],
        swapPair: [1, 2],
        correctSentence: "I always drink coffee in the morning.",
        explanation: "Adverbs of frequency (always) go before the main verb: 'I always drink coffee'."
      },
      {
        id: "l1-2",
        tokens: ["He", "plays", "never", "video games", "on weekdays."],
        swapPair: [1, 2],
        correctSentence: "He never plays video games on weekdays.",
        explanation: "Adverbs of frequency (never) go before the main verb: 'He never plays'."
      },
      {
        id: "l1-3",
        tokens: ["She", "usually", "is", "tired", "after work."],
        swapPair: [1, 2],
        correctSentence: "She is usually tired after work.",
        explanation: "Adverbs of frequency go AFTER the verb 'to be': 'She is usually tired'."
      },
      {
        id: "l1-4",
        tokens: ["They", "pizza", "eat", "every Friday night."],
        swapPair: [1, 2],
        correctSentence: "They eat pizza every Friday night.",
        explanation: "In English, the basic order is Subject + Verb + Object (SVO): 'They eat pizza'."
      },
      {
        id: "l1-5",
        tokens: ["We", "sometimes", "are", "late", "for class."],
        swapPair: [1, 2],
        correctSentence: "We are sometimes late for class.",
        explanation: "Adverbs of frequency go AFTER the verb 'to be': 'We are sometimes late'."
      },
      {
        id: "l1-6",
        tokens: ["Tom", "watches", "often", "documentaries", "in the evening."],
        swapPair: [1, 2],
        correctSentence: "Tom often watches documentaries in the evening.",
        explanation: "Adverbs of frequency (often) go before the main verb: 'Tom often watches'."
      },
      {
        id: "l1-7",
        tokens: ["Anna", "a new car", "bought", "last week."],
        swapPair: [1, 2],
        correctSentence: "Anna bought a new car last week.",
        explanation: "Verb comes before Object: 'Anna bought a new car'."
      },
      {
        id: "l1-8",
        tokens: ["My brother", "reads", "rarely", "books", "at home."],
        swapPair: [1, 2],
        correctSentence: "My brother rarely reads books at home.",
        explanation: "Adverbs of frequency (rarely) go before the main verb: 'rarely reads'."
      },
      {
        id: "l1-9",
        tokens: ["The children", "always", "are", "happy", "at the playground."],
        swapPair: [1, 2],
        correctSentence: "The children are always happy at the playground.",
        explanation: "Adverbs of frequency go after the verb 'to be': 'are always'."
      },
      {
        id: "l1-10",
        tokens: ["He", "German", "speaks", "very well."],
        swapPair: [1, 2],
        correctSentence: "He speaks German very well.",
        explanation: "Subject + Verb + Object (SVO): 'He speaks German'."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // LEVEL 2 — Manner, Place, Time (MPT Order)
  // ─────────────────────────────────────────────
  {
    level: 2,
    title: "Manner, Place & Time",
    description: "Swap the 2 parts in longer sentences to follow the natural Manner (how) → Place (where) → Time (when) order",
    items: [
      {
        id: "l2-1",
        tokens: ["During the morning rush,", "she", "ate", "her breakfast", "in the kitchen", "quickly", "before leaving for work."],
        swapPair: [4, 5],
        correctSentence: "During the morning rush, she ate her breakfast quickly in the kitchen before leaving for work.",
        explanation: "Manner (quickly) precedes Place (in the kitchen) and Time: Manner → Place → Time."
      },
      {
        id: "l2-2",
        tokens: ["The children", "played", "all afternoon", "in the sunny park", "cheerfully", "with their new friends."],
        swapPair: [2, 4],
        correctSentence: "The children played cheerfully in the sunny park all afternoon with their new friends.",
        explanation: "Manner (cheerfully) comes before Place (in the sunny park) and Time (all afternoon)."
      },
      {
        id: "l2-3",
        tokens: ["After a long day,", "the weary travelers", "arrived", "at midnight", "at the mountain cabin", "feeling exhausted."],
        swapPair: [3, 4],
        correctSentence: "After a long day, the weary travelers arrived at the mountain cabin at midnight feeling exhausted.",
        explanation: "Place (at the mountain cabin) precedes Time (at midnight): Place → Time."
      },
      {
        id: "l2-4",
        tokens: ["The dedicated team", "completed", "the complex project", "in the conference room", "successfully", "ahead of schedule."],
        swapPair: [3, 4],
        correctSentence: "The dedicated team completed the complex project successfully in the conference room ahead of schedule.",
        explanation: "Manner (successfully) goes before Place (in the conference room) and Time (ahead of schedule)."
      },
      {
        id: "l2-5",
        tokens: ["The renowned pianist", "performed", "at the royal theatre", "magnificently", "during the grand opening ceremony."],
        swapPair: [2, 3],
        correctSentence: "The renowned pianist performed magnificently at the royal theatre during the grand opening ceremony.",
        explanation: "Manner (magnificently) comes before Place (at the royal theatre) and Time."
      },
      {
        id: "l2-6",
        tokens: ["Every morning before sunrise,", "she", "runs", "along the river bank", "energetically", "to stay in shape."],
        swapPair: [3, 4],
        correctSentence: "Every morning before sunrise, she runs energetically along the river bank to stay in shape.",
        explanation: "Manner (energetically) precedes Place (along the river bank)."
      },
      {
        id: "l2-7",
        tokens: ["The architecture students", "studied", "the ancient blueprints", "in the archive", "intently", "all afternoon."],
        swapPair: [3, 4],
        correctSentence: "The architecture students studied the ancient blueprints intently in the archive all afternoon.",
        explanation: "Manner (intently) comes before Place (in the archive) and Time (all afternoon)."
      },
      {
        id: "l2-8",
        tokens: ["Last weekend,", "my grandparents", "sat", "until dusk", "on the front porch", "talking about old times."],
        swapPair: [3, 4],
        correctSentence: "Last weekend, my grandparents sat on the front porch until dusk talking about old times.",
        explanation: "Place (on the front porch) goes before Time (until dusk): Place → Time."
      },
      {
        id: "l2-9",
        tokens: ["Despite the pouring rain,", "he", "cycled", "this morning", "through the dense forest", "bravely."],
        swapPair: [3, 5],
        correctSentence: "Despite the pouring rain, he cycled bravely through the dense forest this morning.",
        explanation: "Manner (bravely) comes before Place (through the dense forest) and Time (this morning)."
      },
      {
        id: "l2-10",
        tokens: ["The young artist", "painted", "in her private studio", "passionately", "while listening to classical music."],
        swapPair: [2, 3],
        correctSentence: "The young artist painted passionately in her private studio while listening to classical music.",
        explanation: "Manner (passionately) comes before Place (in her private studio)."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // LEVEL 3 — Verb & Object Separation
  // ─────────────────────────────────────────────
  {
    level: 3,
    title: "Verb & Object Separation",
    description: "Swap the 2 parts so the direct object stays directly with its verb",
    items: [
      {
        id: "l3-1",
        tokens: ["She", "speaks", "fluently", "English and French."],
        swapPair: [2, 3],
        correctSentence: "She speaks English and French fluently.",
        explanation: "Never separate a verb from its direct object: 'speaks English and French fluently'."
      },
      {
        id: "l3-2",
        tokens: ["I", "like", "very much", "Italian food."],
        swapPair: [2, 3],
        correctSentence: "I like Italian food very much.",
        explanation: "Do not put 'very much' between the verb and object: 'like Italian food very much'."
      },
      {
        id: "l3-3",
        tokens: ["He", "finished", "quickly", "his homework", "before dinner."],
        swapPair: [2, 3],
        correctSentence: "He finished his homework quickly before dinner.",
        explanation: "The direct object follows the verb directly: 'finished his homework quickly'."
      },
      {
        id: "l3-4",
        tokens: ["They", "watched", "last night", "a great movie."],
        swapPair: [2, 3],
        correctSentence: "They watched a great movie last night.",
        explanation: "Time cannot separate the verb from its object: 'watched a great movie last night'."
      },
      {
        id: "l3-5",
        tokens: ["She", "opened", "carefully", "the old envelope."],
        swapPair: [2, 3],
        correctSentence: "She opened the old envelope carefully.",
        explanation: "Verb and object stay together: 'opened the old envelope carefully'."
      },
      {
        id: "l3-6",
        tokens: ["We", "cleaned", "yesterday", "the entire house."],
        swapPair: [2, 3],
        correctSentence: "We cleaned the entire house yesterday.",
        explanation: "Verb and object cannot be split by time: 'cleaned the entire house yesterday'."
      },
      {
        id: "l3-7",
        tokens: ["He", "lost", "in the park", "his keys", "this afternoon."],
        swapPair: [2, 3],
        correctSentence: "He lost his keys in the park this afternoon.",
        explanation: "Object directly follows verb: 'lost his keys in the park'."
      },
      {
        id: "l3-8",
        tokens: ["I", "enjoy", "a lot", "playing chess", "with my grandfather."],
        swapPair: [2, 3],
        correctSentence: "I enjoy playing chess a lot with my grandfather.",
        explanation: "Verb and object must not be separated: 'enjoy playing chess a lot'."
      },
      {
        id: "l3-9",
        tokens: ["She", "bought", "at the market", "fresh vegetables", "this morning."],
        swapPair: [2, 3],
        correctSentence: "She bought fresh vegetables at the market this morning.",
        explanation: "Object comes before place: 'bought fresh vegetables at the market'."
      },
      {
        id: "l3-10",
        tokens: ["He", "understood", "immediately", "the lesson."],
        swapPair: [2, 3],
        correctSentence: "He understood the lesson immediately.",
        explanation: "Do not put adverb between verb and object: 'understood the lesson immediately'."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // LEVEL 4 — Advanced Mixed Challenge
  // ─────────────────────────────────────────────
  {
    level: 4,
    title: "Advanced Mixed Challenge",
    description: "Swap the 2 misplaced parts across complex structures (inversion, embedded questions, compound verbs)",
    items: [
      {
        id: "l4-1",
        tokens: ["Can you tell me", "where", "is", "the director", "working this week?"],
        swapPair: [2, 3],
        correctSentence: "Can you tell me where the director is working this week?",
        explanation: "In indirect questions, use normal statement word order (Subject + Verb): 'where the director is working'."
      },
      {
        id: "l4-2",
        tokens: ["Rarely", "she", "has", "seen such an impressive", "opera performance."],
        swapPair: [1, 2],
        correctSentence: "Rarely has she seen such an impressive opera performance.",
        explanation: "When starting with a negative adverb (Rarely, Seldom, Never), the auxiliary must precede the subject: 'Rarely has she seen'."
      },
      {
        id: "l4-3",
        tokens: ["The committee", "discussed", "thoroughly", "the environmental budget", "at the meeting."],
        swapPair: [2, 3],
        correctSentence: "The committee discussed the environmental budget thoroughly at the meeting.",
        explanation: "Never separate a transitive verb ('discussed') from its direct object ('the environmental budget') with an adverb."
      },
      {
        id: "l4-4",
        tokens: ["The senior engineer", "has", "been", "always", "dedicated to his team."],
        swapPair: [2, 3],
        correctSentence: "The senior engineer has always been dedicated to his team.",
        explanation: "In compound tenses (has been), frequency adverbs go directly after the FIRST auxiliary verb: 'has always been'."
      },
      {
        id: "l4-5",
        tokens: ["The orchestra", "performed", "in the cathedral", "wonderfully", "yesterday evening."],
        swapPair: [2, 3],
        correctSentence: "The orchestra performed wonderfully in the cathedral yesterday evening.",
        explanation: "Follow the MPT rule: Manner ('wonderfully') comes before Place ('in the cathedral') and Time ('yesterday evening')."
      },
      {
        id: "l4-6",
        tokens: ["After months of doubt,", "he", "gave", "eventually", "up his stressful job."],
        swapPair: [2, 3],
        correctSentence: "After months of doubt, he eventually gave up his stressful job.",
        explanation: "Adverbs cannot split a verb from its phrasal particle: 'he eventually gave up'."
      },
      {
        id: "l4-7",
        tokens: ["Do you know", "why", "is", "the manager", "leaving the company?"],
        swapPair: [2, 3],
        correctSentence: "Do you know why the manager is leaving the company?",
        explanation: "Indirect questions use statement order (Subject + Verb): 'why the manager is leaving'."
      },
      {
        id: "l4-8",
        tokens: ["No sooner", "the flight", "had", "landed than the storm", "began."],
        swapPair: [1, 2],
        correctSentence: "No sooner had the flight landed than the storm began.",
        explanation: "Sentences starting with 'No sooner' require inverted auxiliary order: 'No sooner had the flight landed'."
      },
      {
        id: "l4-9",
        tokens: ["The manager", "explained", "to the team", "the new project", "in detail."],
        swapPair: [2, 3],
        correctSentence: "The manager explained the new project to the team in detail.",
        explanation: "Put the direct object before the prepositional phrase: 'explained the new project to the team'."
      },
      {
        id: "l4-10",
        tokens: ["What project", "they", "have", "been working on", "all afternoon?"],
        swapPair: [1, 2],
        correctSentence: "What project have they been working on all afternoon?",
        explanation: "In questions, the auxiliary verb must precede the subject: 'have they been working on'."
      }
    ]
  }
];
