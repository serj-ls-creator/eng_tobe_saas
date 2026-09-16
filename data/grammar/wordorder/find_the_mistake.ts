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
    description: "Swap the 2 parts to correct basic SVO word order, frequency adverbs, and modal verbs",
    items: [
      {
        id: "l1-1",
        tokens: ["On busy weekdays,", "our office manager", "can", "prepare", "always", "fresh coffee for the team."],
        swapPair: [3, 4],
        correctSentence: "On busy weekdays, our office manager can always prepare fresh coffee for the team.",
        explanation: "Frequency adverbs go between the modal verb ('can') and the main verb ('prepare'): 'can always prepare'."
      },
      {
        id: "l1-2",
        tokens: ["During the winter season,", "the local trains", "usually", "are", "crowded in the morning."],
        swapPair: [2, 3],
        correctSentence: "During the winter season, the local trains are usually crowded in the morning.",
        explanation: "Adverbs of frequency go AFTER the verb 'to be': 'are usually crowded'."
      },
      {
        id: "l1-3",
        tokens: ["Before going to bed,", "the little boy", "his teeth", "brushes", "thoroughly."],
        swapPair: [2, 3],
        correctSentence: "Before going to bed, the little boy brushes his teeth thoroughly.",
        explanation: "In English, the verb precedes the object (SVO): 'brushes his teeth'."
      },
      {
        id: "l1-4",
        tokens: ["My grandfather", "is", "forgetting", "constantly", "where he placed his glasses."],
        swapPair: [2, 3],
        correctSentence: "My grandfather is constantly forgetting where he placed his glasses.",
        explanation: "Adverbs of frequency go directly after the auxiliary verb: 'is constantly forgetting'."
      },
      {
        id: "l1-5",
        tokens: ["Sarah and her sister", "visit", "rarely", "their cousins", "during the school semester."],
        swapPair: [1, 2],
        correctSentence: "Sarah and her sister rarely visit their cousins during the school semester.",
        explanation: "Adverbs of frequency (rarely) go before the main verb: 'rarely visit'."
      },
      {
        id: "l1-6",
        tokens: ["Every Sunday morning,", "my uncle", "delicious pancakes", "makes", "for the whole family."],
        swapPair: [2, 3],
        correctSentence: "Every Sunday morning, my uncle makes delicious pancakes for the whole family.",
        explanation: "Subject + Verb + Object (SVO): 'makes (verb) delicious pancakes (object)'."
      },
      {
        id: "l1-7",
        tokens: ["During exam week,", "the students", "sleep", "hardly", "ever", "more than five hours."],
        swapPair: [2, 3],
        correctSentence: "During exam week, the students hardly ever sleep more than five hours.",
        explanation: "Adverbs of frequency (hardly ever) go before the main verb: 'hardly ever sleep'."
      },
      {
        id: "l1-8",
        tokens: ["The customer service agents", "in our branch", "always", "are", "friendly and patient with clients."],
        swapPair: [2, 3],
        correctSentence: "The customer service agents in our branch are always friendly and patient with clients.",
        explanation: "Adverbs of frequency go after the verb 'to be': 'are always'."
      },
      {
        id: "l1-9",
        tokens: ["When driving in thick fog,", "you", "forget", "never", "should", "to turn on your headlights."],
        swapPair: [2, 4],
        correctSentence: "When driving in thick fog, you should never forget to turn on your headlights.",
        explanation: "The modal verb comes before the frequency adverb: 'should never forget'."
      },
      {
        id: "l1-10",
        tokens: ["After a hard workout,", "the athletes", "drink", "sometimes", "a protein shake at the gym."],
        swapPair: [2, 3],
        correctSentence: "After a hard workout, the athletes sometimes drink a protein shake at the gym.",
        explanation: "Adverbs of frequency go before the main verb: 'sometimes drink'."
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
    description: "Swap the 2 parts across diverse sentence positions so direct objects remain directly connected to their verbs",
    items: [
      {
        id: "l3-1",
        tokens: ["The experienced surgeon", "the complex operation", "performed", "without any complications", "this morning."],
        swapPair: [1, 2],
        correctSentence: "The experienced surgeon performed the complex operation without any complications this morning.",
        explanation: "In English, the verb must precede its direct object (SVO): 'performed the complex operation'."
      },
      {
        id: "l3-2",
        tokens: ["The foreign delegate", "spoke", "fluently", "three European languages", "at the global summit."],
        swapPair: [2, 3],
        correctSentence: "The foreign delegate spoke three European languages fluently at the global summit.",
        explanation: "Do not separate the transitive verb ('spoke') from its direct object ('three European languages') with an adverb."
      },
      {
        id: "l3-3",
        tokens: ["During the annual meeting,", "the board of directors", "unanimously", "approved", "without any hesitation", "the revised budget proposal."],
        swapPair: [4, 5],
        correctSentence: "During the annual meeting, the board of directors unanimously approved the revised budget proposal without any hesitation.",
        explanation: "Prepositional adverbial phrases ('without any hesitation') cannot split the verb from its direct object."
      },
      {
        id: "l3-4",
        tokens: ["After reviewing the feedback,", "the chief architect", "modified", "immediately", "the preliminary blueprints", "to satisfy safety codes."],
        swapPair: [3, 4],
        correctSentence: "After reviewing the feedback, the chief architect modified the preliminary blueprints immediately to satisfy safety codes.",
        explanation: "Keep the verb ('modified') and its direct object ('the preliminary blueprints') together without inserting adverbs."
      },
      {
        id: "l3-5",
        tokens: ["At the ancient ruins,", "the archaeology team", "unearthed", "in the deep cave", "a golden artifact", "dating back centuries."],
        swapPair: [3, 4],
        correctSentence: "At the ancient ruins, the archaeology team unearthed a golden artifact in the deep cave dating back centuries.",
        explanation: "The direct object ('a golden artifact') directly follows the transitive verb ('unearthed') before location phrases."
      },
      {
        id: "l3-6",
        tokens: ["Despite the pouring rain,", "the enthusiastic spectators", "at the stadium", "watched", "intently", "the entire tennis match."],
        swapPair: [4, 5],
        correctSentence: "Despite the pouring rain, the enthusiastic spectators at the stadium watched the entire tennis match intently.",
        explanation: "The adverb ('intently') goes after the direct object: 'watched the entire tennis match intently'."
      },
      {
        id: "l3-7",
        tokens: ["The software development company", "launched", "in international markets", "its cloud platform", "last quarter."],
        swapPair: [2, 3],
        correctSentence: "The software development company launched its cloud platform in international markets last quarter.",
        explanation: "The direct object ('its cloud platform') precedes the prepositional phrase of location."
      },
      {
        id: "l3-8",
        tokens: ["Throughout the winter season,", "our family", "enjoys", "very much", "preparing hot cocoa", "together by the fireplace."],
        swapPair: [3, 4],
        correctSentence: "Throughout the winter season, our family enjoys preparing hot cocoa very much together by the fireplace.",
        explanation: "Place 'very much' after the complete direct object ('preparing hot cocoa'), not between the verb and object."
      },
      {
        id: "l3-9",
        tokens: ["The careless commuter", "his leather wallet", "lost", "in the crowded subway station", "this morning."],
        swapPair: [1, 2],
        correctSentence: "The careless commuter lost his leather wallet in the crowded subway station this morning.",
        explanation: "The verb must precede the direct object (SVO): 'lost (verb) his leather wallet (object)'."
      },
      {
        id: "l3-10",
        tokens: ["During the heated debate,", "neither spokesperson", "addressed", "directly", "the most critical question", "asked by journalists."],
        swapPair: [3, 4],
        correctSentence: "During the heated debate, neither spokesperson addressed the most critical question directly asked by journalists.",
        explanation: "The direct object directly follows the transitive verb 'addressed' before manner adverbs like 'directly'."
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
        tokens: ["Could you please explain", "why", "is", "the executive committee", "delaying the financial announcement until next month?"],
        swapPair: [2, 3],
        correctSentence: "Could you please explain why the executive committee is delaying the financial announcement until next month?",
        explanation: "In embedded clauses after 'why', use statement word order (Subject before auxiliary): 'why the executive committee is delaying'."
      },
      {
        id: "l4-2",
        tokens: ["Under no circumstances", "employees", "should", "disclose confidential client data", "to unauthorized third parties."],
        swapPair: [1, 2],
        correctSentence: "Under no circumstances should employees disclose confidential client data to unauthorized third parties.",
        explanation: "Prepositional negative phrases ('Under no circumstances') require subject-auxiliary inversion: 'should employees disclose'."
      },
      {
        id: "l4-3",
        tokens: ["At the international summit,", "the president", "negotiated", "throughout the entire night", "behind closed doors", "with determination."],
        swapPair: [3, 5],
        correctSentence: "At the international summit, the president negotiated with determination behind closed doors throughout the entire night.",
        explanation: "Follow the MPT order: Manner ('with determination') → Place ('behind closed doors') → Time ('throughout the entire night')."
      },
      {
        id: "l4-4",
        tokens: ["The dedicated research scientists", "should", "have", "been", "always", "consulted prior to major policy changes."],
        swapPair: [3, 4],
        correctSentence: "The dedicated research scientists should have always been consulted prior to major policy changes.",
        explanation: "In complex verb chains ('should have been'), the adverb goes after the auxiliary verbs: 'should have always been'."
      },
      {
        id: "l4-5",
        tokens: ["Not only", "the corporation", "did", "expand into overseas markets,", "but it also doubled its workforce."],
        swapPair: [1, 2],
        correctSentence: "Not only did the corporation expand into overseas markets, but it also doubled its workforce.",
        explanation: "Negative coordinator 'Not only' triggers subject-auxiliary inversion: 'Not only did the corporation expand'."
      },
      {
        id: "l4-6",
        tokens: ["After reviewing the survey results,", "the board", "put", "until next quarter", "off", "the decision to restructure."],
        swapPair: [3, 4],
        correctSentence: "After reviewing the survey results, the board put off the decision to restructure until next quarter.",
        explanation: "Do not separate the phrasal verb particle ('off') from its verb with an adverbial phrase: 'put off the decision'."
      },
      {
        id: "l4-7",
        tokens: ["Hardly", "the distinguished keynote speaker", "had", "stepped onto the stage", "when the audience erupted in applause."],
        swapPair: [1, 2],
        correctSentence: "Hardly had the distinguished keynote speaker stepped onto the stage when the audience erupted in applause.",
        explanation: "Negative restrictive adverb 'Hardly' requires inversion: 'Hardly had the speaker stepped'."
      },
      {
        id: "l4-8",
        tokens: ["In the final presentation,", "the consultant", "described", "to all stakeholders", "the recovery strategy", "in great detail."],
        swapPair: [3, 4],
        correctSentence: "In the final presentation, the consultant described the recovery strategy to all stakeholders in great detail.",
        explanation: "Place the direct object ('the recovery strategy') directly after 'described' before the prepositional phrase ('to all stakeholders')."
      },
      {
        id: "l4-9",
        tokens: ["We would appreciate it", "if you could clarify", "how much", "will", "the proposed construction project", "cost the city."],
        swapPair: [3, 4],
        correctSentence: "We would appreciate it if you could clarify how much the proposed construction project will cost the city.",
        explanation: "Embedded clauses introduced by 'how much' use statement order (Subject before modal auxiliary): 'how much the project will cost'."
      },
      {
        id: "l4-10",
        tokens: ["Only after completing thorough background checks", "the security agency", "will", "grant access", "to the classified database."],
        swapPair: [1, 2],
        correctSentence: "Only after completing thorough background checks will the security agency grant access to the classified database.",
        explanation: "Clauses beginning with 'Only after...' require inversion in the main clause: 'will the security agency grant'."
      }
    ]
  }
];
