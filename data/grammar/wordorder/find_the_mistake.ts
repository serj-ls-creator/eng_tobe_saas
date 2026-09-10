/**
 * Find the Mistake content for Word Order in Grammar.
 *
 * 4 levels, 10 sentences each (40 items total).
 * In each sentence, one token/chunk is in the wrong position.
 * The player taps the token that is out of order.
 */

export interface WordOrderMistakeItem {
  id: string;
  tokens: string[];
  mistakeIndex: number;
  correctSentence: string;
  explanation: string;
  translation?: string;
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
    description: "Spot misplaced adverbs of frequency and broken Subject-Verb-Object order",
    items: [
      {
        id: "l1-1",
        tokens: ["I", "drink", "always", "coffee", "in the morning."],
        mistakeIndex: 2,
        correctSentence: "I always drink coffee in the morning.",
        explanation: "Adverbs of frequency (always) go before the main verb: 'I always drink coffee'.",
        translation: "Я всегда пью кофе по утрам."
      },
      {
        id: "l1-2",
        tokens: ["He", "plays", "never", "video games", "on weekdays."],
        mistakeIndex: 2,
        correctSentence: "He never plays video games on weekdays.",
        explanation: "Adverbs of frequency (never) go before the main verb: 'He never plays'.",
        translation: "Он никогда не играет в видеоигры по будням."
      },
      {
        id: "l1-3",
        tokens: ["She", "usually", "is", "tired", "after work."],
        mistakeIndex: 1,
        correctSentence: "She is usually tired after work.",
        explanation: "Adverbs of frequency go AFTER the verb 'to be': 'She is usually tired'.",
        translation: "Она обычно уставшая после работы."
      },
      {
        id: "l1-4",
        tokens: ["They", "pizza", "eat", "every Friday night."],
        mistakeIndex: 1,
        correctSentence: "They eat pizza every Friday night.",
        explanation: "In English, the basic order is Subject + Verb + Object (SVO): 'They eat pizza'.",
        translation: "Они едят пиццу каждую пятницу вечером."
      },
      {
        id: "l1-5",
        tokens: ["We", "sometimes", "are", "late", "for class."],
        mistakeIndex: 1,
        correctSentence: "We are sometimes late for class.",
        explanation: "Adverbs of frequency go AFTER the verb 'to be': 'We are sometimes late'.",
        translation: "Мы иногда опаздываем на занятия."
      },
      {
        id: "l1-6",
        tokens: ["Tom", "watches", "often", "documentaries", "in the evening."],
        mistakeIndex: 2,
        correctSentence: "Tom often watches documentaries in the evening.",
        explanation: "Adverbs of frequency (often) go before the main verb: 'Tom often watches'.",
        translation: "Том часто смотрит документальные фильмы по вечерам."
      },
      {
        id: "l1-7",
        tokens: ["Anna", "a new car", "bought", "last week."],
        mistakeIndex: 1,
        correctSentence: "Anna bought a new car last week.",
        explanation: "Verb comes before Object: 'Anna bought a new car'.",
        translation: "Анна купила новую машину на прошлой неделе."
      },
      {
        id: "l1-8",
        tokens: ["My brother", "reads", "rarely", "books", "at home."],
        mistakeIndex: 2,
        correctSentence: "My brother rarely reads books at home.",
        explanation: "Adverbs of frequency (rarely) go before the main verb: 'rarely reads'.",
        translation: "Мой брат редко читает книги дома."
      },
      {
        id: "l1-9",
        tokens: ["The children", "always", "are", "happy", "at the playground."],
        mistakeIndex: 1,
        correctSentence: "The children are always happy at the playground.",
        explanation: "Adverbs of frequency go after the verb 'to be': 'are always'.",
        translation: "Дети всегда счастливы на детской площадке."
      },
      {
        id: "l1-10",
        tokens: ["He", "German", "speaks", "very well."],
        mistakeIndex: 1,
        correctSentence: "He speaks German very well.",
        explanation: "Subject + Verb + Object (SVO): 'He speaks German'.",
        translation: "Он очень хорошо говорит по-немецки."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // LEVEL 2 — Manner, Place, Time (MPT Order)
  // ─────────────────────────────────────────────
  {
    level: 2,
    title: "Manner, Place & Time",
    description: "Identify misplaced adverbs of manner (how), place (where), and time (when)",
    items: [
      {
        id: "l2-1",
        tokens: ["She", "ate", "breakfast", "in the kitchen", "quickly", "this morning."],
        mistakeIndex: 3,
        correctSentence: "She ate breakfast quickly in the kitchen this morning.",
        explanation: "Order of adverbs is Manner → Place → Time: 'quickly (manner) in the kitchen (place)'.",
        translation: "Она быстро позавтракала на кухне этим утром."
      },
      {
        id: "l2-2",
        tokens: ["The boy", "played", "at 9 o'clock", "happily", "in the park."],
        mistakeIndex: 2,
        correctSentence: "The boy played happily in the park at 9 o'clock.",
        explanation: "Manner (happily) → Place (in the park) → Time (at 9 o'clock).",
        translation: "Мальчик радостно играл в парке в 9 часов."
      },
      {
        id: "l2-3",
        tokens: ["We", "walked", "yesterday", "slowly", "along the beach."],
        mistakeIndex: 2,
        correctSentence: "We walked slowly along the beach yesterday.",
        explanation: "Manner (slowly) → Place (along the beach) → Time (yesterday).",
        translation: "Вчера мы медленно гуляли по пляжу."
      },
      {
        id: "l2-4",
        tokens: ["He", "drove", "to the office", "carefully", "in the snow."],
        mistakeIndex: 2,
        correctSentence: "He drove carefully to the office in the snow.",
        explanation: "Manner (carefully) comes before Place (to the office).",
        translation: "Он осторожно поехал на машине в офис по снегу."
      },
      {
        id: "l2-5",
        tokens: ["The band", "performed", "last night", "brilliantly", "at the concert."],
        mistakeIndex: 2,
        correctSentence: "The band performed brilliantly at the concert last night.",
        explanation: "Manner (brilliantly) → Place (at the concert) → Time (last night).",
        translation: "Группа блестяще выступила на концерте прошлым вечером."
      },
      {
        id: "l2-6",
        tokens: ["She", "slept", "all night", "peacefully", "in her bed."],
        mistakeIndex: 2,
        correctSentence: "She slept peacefully in her bed all night.",
        explanation: "Manner (peacefully) → Place (in her bed) → Time (all night).",
        translation: "Она спокойно спала в своей кровати всю ночь."
      },
      {
        id: "l2-7",
        tokens: ["They", "studied", "at the library", "hard", "before the exam."],
        mistakeIndex: 2,
        correctSentence: "They studied hard at the library before the exam.",
        explanation: "Manner (hard) comes before Place (at the library).",
        translation: "Они усердно занимались в библиотеке перед экзаменом."
      },
      {
        id: "l2-8",
        tokens: ["The birds", "sang", "at dawn", "sweetly", "in the trees."],
        mistakeIndex: 2,
        correctSentence: "The birds sang sweetly in the trees at dawn.",
        explanation: "Manner (sweetly) → Place (in the trees) → Time (at dawn).",
        translation: "Птицы сладко пели на деревьях на рассвете."
      },
      {
        id: "l2-9",
        tokens: ["He", "worked", "last week", "diligently", "at his desk."],
        mistakeIndex: 2,
        correctSentence: "He worked diligently at his desk last week.",
        explanation: "Manner (diligently) → Place (at his desk) → Time (last week).",
        translation: "На прошлой неделе он прилежно работал за своим столом."
      },
      {
        id: "l2-10",
        tokens: ["We", "sat", "in the garden", "quietly", "after dinner."],
        mistakeIndex: 2,
        correctSentence: "We sat quietly in the garden after dinner.",
        explanation: "Manner (quietly) comes before Place (in the garden).",
        translation: "Мы тихо сидели в саду после ужина."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // LEVEL 3 — Verb & Object Separation
  // ─────────────────────────────────────────────
  {
    level: 3,
    title: "Verb & Object Separation",
    description: "Detect words incorrectly splitting the verb from its direct object",
    items: [
      {
        id: "l3-1",
        tokens: ["She", "speaks", "fluently", "English", "and French."],
        mistakeIndex: 2,
        correctSentence: "She speaks English and French fluently.",
        explanation: "Never separate a verb from its direct object: 'speaks English fluently'.",
        translation: "Она свободно говорит по-английски и по-французски."
      },
      {
        id: "l3-2",
        tokens: ["I", "like", "very much", "Italian food."],
        mistakeIndex: 2,
        correctSentence: "I like Italian food very much.",
        explanation: "Do not put 'very much' between the verb and object: 'like Italian food very much'.",
        translation: "Мне очень нравится итальянская еда."
      },
      {
        id: "l3-3",
        tokens: ["He", "finished", "quickly", "his homework", "before dinner."],
        mistakeIndex: 2,
        correctSentence: "He finished his homework quickly before dinner.",
        explanation: "The direct object follows the verb directly: 'finished his homework quickly'.",
        translation: "Он быстро закончил домашнее задание перед ужином."
      },
      {
        id: "l3-4",
        tokens: ["They", "watched", "last night", "a great movie", "together."],
        mistakeIndex: 2,
        correctSentence: "They watched a great movie together last night.",
        explanation: "Time cannot separate the verb from its object: 'watched a great movie'.",
        translation: "Прошлым вечером они вместе смотрели отличный фильм."
      },
      {
        id: "l3-5",
        tokens: ["She", "opened", "carefully", "the old envelope."],
        mistakeIndex: 2,
        correctSentence: "She opened the old envelope carefully.",
        explanation: "Verb and object stay together: 'opened the old envelope carefully'.",
        translation: "Она осторожно открыла старый конверт."
      },
      {
        id: "l3-6",
        tokens: ["We", "cleaned", "yesterday", "the entire house."],
        mistakeIndex: 2,
        correctSentence: "We cleaned the entire house yesterday.",
        explanation: "Verb and object cannot be split by time: 'cleaned the entire house'.",
        translation: "Вчера мы убрали весь дом."
      },
      {
        id: "l3-7",
        tokens: ["He", "lost", "in the park", "his keys", "this afternoon."],
        mistakeIndex: 2,
        correctSentence: "He lost his keys in the park this afternoon.",
        explanation: "Object directly follows verb: 'lost his keys in the park'.",
        translation: "Сегодня днем он потерял ключи в парке."
      },
      {
        id: "l3-8",
        tokens: ["I", "enjoy", "a lot", "playing chess", "with my grandfather."],
        mistakeIndex: 2,
        correctSentence: "I enjoy playing chess a lot with my grandfather.",
        explanation: "Verb and object must not be separated: 'enjoy playing chess a lot'.",
        translation: "Мне очень нравится играть в шахматы с дедушкой."
      },
      {
        id: "l3-9",
        tokens: ["She", "bought", "at the market", "fresh vegetables", "this morning."],
        mistakeIndex: 2,
        correctSentence: "She bought fresh vegetables at the market this morning.",
        explanation: "Object comes before place: 'bought fresh vegetables at the market'.",
        translation: "Она купила свежие овощи на рынке этим утром."
      },
      {
        id: "l3-10",
        tokens: ["He", "understood", "immediately", "the lesson."],
        mistakeIndex: 2,
        correctSentence: "He understood the lesson immediately.",
        explanation: "Do not put adverb between verb and object: 'understood the lesson immediately'.",
        translation: "Он сразу понял урок."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // LEVEL 4 — Advanced Mixed Challenge
  // ─────────────────────────────────────────────
  {
    level: 4,
    title: "Advanced Mixed Challenge",
    description: "Tackle complex sentence structures: embedded questions, inversion, phrasal verbs, and multi-part adverbs",
    items: [
      {
        id: "l4-1",
        tokens: ["Can you tell me", "where", "does the director", "work", "during the week?"],
        mistakeIndex: 2,
        correctSentence: "Can you tell me where the director works during the week?",
        explanation: "In indirect questions, use normal statement word order (Subject + Verb) without auxiliary 'does': 'where the director works'.",
        translation: "Можете ли вы подсказать, где директор работает в течение недели?"
      },
      {
        id: "l4-2",
        tokens: ["Rarely", "she has seen", "such an impressive", "performance", "at the opera."],
        mistakeIndex: 1,
        correctSentence: "Rarely has she seen such an impressive performance at the opera.",
        explanation: "When starting with a negative adverb (Rarely, Seldom, Never), the auxiliary must precede the subject: 'Rarely has she seen'.",
        translation: "Редко ей доводилось видеть столь впечатляющее представление в опере."
      },
      {
        id: "l4-3",
        tokens: ["The committee", "discussed", "thoroughly in great detail", "the proposed", "environmental budget."],
        mistakeIndex: 2,
        correctSentence: "The committee discussed the proposed environmental budget thoroughly in great detail.",
        explanation: "Never separate a transitive verb ('discussed') from its direct object ('the proposed environmental budget') with an adverbial phrase.",
        translation: "Комитет подробно и во всех деталях обсудил предложенный экологический бюджет."
      },
      {
        id: "l4-4",
        tokens: ["The senior engineer", "has been always", "dedicated to", "finding", "innovative solutions."],
        mistakeIndex: 1,
        correctSentence: "The senior engineer has always been dedicated to finding innovative solutions.",
        explanation: "In compound tenses (has been), frequency adverbs go directly after the FIRST auxiliary verb: 'has always been'.",
        translation: "Ведущий инженер всегда был предан поиску инновационных решений."
      },
      {
        id: "l4-5",
        tokens: ["The orchestra", "performed", "in the cathedral", "wonderfully", "at the annual festival yesterday."],
        mistakeIndex: 2,
        correctSentence: "The orchestra performed wonderfully in the cathedral at the annual festival yesterday.",
        explanation: "Follow the MPT rule: Manner ('wonderfully') comes before Place ('in the cathedral') and Time ('yesterday').",
        translation: "Оркестр чудесно выступил в соборе на ежегодном фестивале вчера."
      },
      {
        id: "l4-6",
        tokens: ["After years of hesitation,", "he gave", "eventually", "up", "his stressful corporate job."],
        mistakeIndex: 2,
        correctSentence: "After years of hesitation, he eventually gave up his stressful corporate job.",
        explanation: "Adverbs cannot split a verb from its phrasal particle: 'he eventually gave up'.",
        translation: "После долгих лет сомнений он в конце концов бросил свою стрессовую работу в корпорации."
      },
      {
        id: "l4-7",
        tokens: ["I wonder", "what", "did the research team", "discover", "during their expedition."],
        mistakeIndex: 2,
        correctSentence: "I wonder what the research team discovered during their expedition.",
        explanation: "Indirect questions use statement order without auxiliary 'did': 'what the research team discovered'.",
        translation: "Интересно, что исследовательская группа обнаружила во время своей экспедиции."
      },
      {
        id: "l4-8",
        tokens: ["No sooner", "the flight had landed", "than the heavy storm", "started across", "the city."],
        mistakeIndex: 1,
        correctSentence: "No sooner had the flight landed than the heavy storm started across the city.",
        explanation: "Sentences starting with 'No sooner' require inverted auxiliary order: 'No sooner had the flight landed'.",
        translation: "Не успел самолет приземлиться, как по всему городу началась сильная буря."
      },
      {
        id: "l4-9",
        tokens: ["The manager", "explained", "the new employees", "the complete", "onboarding process."],
        mistakeIndex: 2,
        correctSentence: "The manager explained the complete onboarding process to the new employees.",
        explanation: "Verbs like 'explain' cannot take a person direct object without a preposition: 'explained the process to the new employees'.",
        translation: "Менеджер объяснил новым сотрудникам весь процесс адаптации."
      },
      {
        id: "l4-10",
        tokens: ["What project", "they have been", "working on tirelessly", "for the past", "six months?"],
        mistakeIndex: 1,
        correctSentence: "What project have they been working on tirelessly for the past six months?",
        explanation: "In questions, the auxiliary verb must precede the subject: 'have they been working on'.",
        translation: "Над каким проектом они без устали работали последние шесть месяцев?"
      }
    ]
  }
];
