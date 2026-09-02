/**
 * Sentence builder data for Adjective Order in Grammar.
 *
 * Each level contains 10 sentences with missing adjectives.
 * Adjectives must be placed in the natural English order (OSASCOMP):
 * 1. Opinion
 * 2. Size
 * 3. Age
 * 4. Shape
 * 5. Colour
 * 6. Origin
 * 7. Material
 * 8. Purpose / Type
 */

export interface AdjectiveBuilderItem {
  id: string;
  sentence: string;
  adjectives: string[];
  explanation: string;
  translation?: string;
}

export interface AdjectiveBuilderLevel {
  level: number;
  title: string;
  description: string;
  items: AdjectiveBuilderItem[];
}

export const adjectiveOrderLevels: AdjectiveBuilderLevel[] = [
  // ─────────────────────────────────────────────
  // LEVEL 1 — Two Adjectives (Basic combinations)
  // ─────────────────────────────────────────────
  {
    level: 1,
    title: "Basic Pairs",
    description: "Combine 2 adjectives in the correct natural order",
    items: [
      {
        id: "l1-1",
        sentence: "They live in a ___ ___ house on the hill.",
        adjectives: ["lovely", "old"],
        explanation: "Opinion (lovely) → Age (old)",
        translation: "Они живут в милом старом доме на холме."
      },
      {
        id: "l1-2",
        sentence: "He drives a ___ ___ car to work every day.",
        adjectives: ["fast", "red"],
        explanation: "Opinion (fast) → Colour (red)",
        translation: "Он каждый день ездит на работу на быстрой красной машине."
      },
      {
        id: "l1-3",
        sentence: "She wore a ___ ___ scarf to the theatre.",
        adjectives: ["warm", "woollen"],
        explanation: "Opinion (warm) → Material (woollen)",
        translation: "Она надела в театр теплый шерстяной шарф."
      },
      {
        id: "l1-4",
        sentence: "We sat at a ___ ___ table in the garden.",
        adjectives: ["large", "wooden"],
        explanation: "Size (large) → Material (wooden)",
        translation: "Мы сидели за большим деревянным столом в саду."
      },
      {
        id: "l1-5",
        sentence: "I found an ___ ___ coin in the attic.",
        adjectives: ["old", "silver"],
        explanation: "Age (old) → Material (silver)",
        translation: "Я нашел на чердаке старинную серебряную монету."
      },
      {
        id: "l1-6",
        sentence: "Look at that ___ ___ cat sleeping in the sun.",
        adjectives: ["cute", "little"],
        explanation: "Opinion (cute) → Size (little)",
        translation: "Посмотри на того милого маленького кота, спящего на солнце."
      },
      {
        id: "l1-7",
        sentence: "They bought a ___ ___ mirror for the hall.",
        adjectives: ["round", "metal"],
        explanation: "Shape (round) → Material (metal)",
        translation: "Они купили круглое металлическое зеркало для прихожей."
      },
      {
        id: "l1-8",
        sentence: "He bought a ___ ___ jacket for the winter.",
        adjectives: ["black", "leather"],
        explanation: "Colour (black) → Material (leather)",
        translation: "Он купил черную кожаную куртку на зиму."
      },
      {
        id: "l1-9",
        sentence: "We visited a ___ ___ café near the river.",
        adjectives: ["charming", "French"],
        explanation: "Opinion (charming) → Origin (French)",
        translation: "Мы посетили очаровательное французское кафе возле реки."
      },
      {
        id: "l1-10",
        sentence: "She loves her ___ ___ shoes for jogging.",
        adjectives: ["new", "running"],
        explanation: "Age (new) → Purpose (running)",
        translation: "Ей очень нравятся ее новые кроссовки для бега."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // LEVEL 2 — Three Adjectives (Classic triplets)
  // ─────────────────────────────────────────────
  {
    level: 2,
    title: "Classic Triplets",
    description: "Arrange 3 adjectives: Opinion, Size, Age, Shape, Colour, Origin, Material",
    items: [
      {
        id: "l2-1",
        sentence: "She bought a ___ ___ ___ dress for the wedding.",
        adjectives: ["gorgeous", "long", "silk"],
        explanation: "Opinion (gorgeous) → Size (long) → Material (silk)",
        translation: "Она купила великолепное длинное шелковое платье на свадьбу."
      },
      {
        id: "l2-2",
        sentence: "He found a ___ ___ ___ box in his grandfather's garage.",
        adjectives: ["heavy", "old", "wooden"],
        explanation: "Size (heavy) → Age (old) → Material (wooden)",
        translation: "Он нашел тяжелый старый деревянный ящик в гараже дедушки."
      },
      {
        id: "l2-3",
        sentence: "They adopted a ___ ___ ___ puppy from the shelter.",
        adjectives: ["playful", "little", "brown"],
        explanation: "Opinion (playful) → Size (little) → Colour (brown)",
        translation: "Они взяли из приюта игривого маленького коричневого щенка."
      },
      {
        id: "l2-4",
        sentence: "We stayed in a ___ ___ ___ cottage by the lake.",
        adjectives: ["cosy", "ancient", "stone"],
        explanation: "Opinion (cosy) → Age (ancient) → Material (stone)",
        translation: "Мы остановились в уютном старинном каменном коттедже у озера."
      },
      {
        id: "l2-5",
        sentence: "He rides a ___ ___ ___ bike around the city.",
        adjectives: ["sleek", "modern", "racing"],
        explanation: "Opinion (sleek) → Age (modern) → Purpose (racing)",
        translation: "Он ездит по городу на стильном современном гоночном велосипеде."
      },
      {
        id: "l2-6",
        sentence: "She keeps a ___ ___ ___ ring in her jewellery box.",
        adjectives: ["tiny", "round", "gold"],
        explanation: "Size (tiny) → Shape (round) → Material (gold)",
        translation: "Она хранит крошечное круглое золотое кольцо в шкатулке."
      },
      {
        id: "l2-7",
        sentence: "They ordered a ___ ___ ___ pizza for dinner.",
        adjectives: ["delicious", "large", "Italian"],
        explanation: "Opinion (delicious) → Size (large) → Origin (Italian)",
        translation: "Они заказали вкусную большую итальянскую пиццу на ужин."
      },
      {
        id: "l2-8",
        sentence: "He purchased a ___ ___ ___ sports car last week.",
        adjectives: ["stunning", "new", "red"],
        explanation: "Opinion (stunning) → Age (new) → Colour (red)",
        translation: "На прошлой неделе он купил потрясающий новый красный спорткар."
      },
      {
        id: "l2-9",
        sentence: "We bought a ___ ___ ___ carpet for the living room.",
        adjectives: ["beautiful", "square", "Turkish"],
        explanation: "Opinion (beautiful) → Shape (square) → Origin (Turkish)",
        translation: "Мы купили красивый квадратный турецкий ковер для гостиной."
      },
      {
        id: "l2-10",
        sentence: "She carried a ___ ___ ___ bag on her shoulder.",
        adjectives: ["fashionable", "black", "leather"],
        explanation: "Opinion (fashionable) → Colour (black) → Material (leather)",
        translation: "Она несла на плече модную черную кожаную сумку."
      }
    ]
  },

  // ─────────────────────────────────────────────
  // LEVEL 3 — Master Challenge (Subtle & Complex)
  // ─────────────────────────────────────────────
  {
    level: 3,
    title: "Master Challenge",
    description: "Complex combinations with Origin, Purpose, Materials, and abstract qualities",
    items: [
      {
        id: "l3-1",
        sentence: "They rented a ___ ___ ___ apartment in the city centre.",
        adjectives: ["luxurious", "spacious", "modern"],
        explanation: "Opinion (luxurious) → Size (spacious) → Age (modern)",
        translation: "Они сняли роскошную просторную современную квартиру в центре города."
      },
      {
        id: "l3-2",
        sentence: "He gifted her an ___ ___ ___ necklace for their anniversary.",
        adjectives: ["exquisite", "antique", "diamond"],
        explanation: "Opinion (exquisite) → Age (antique) → Material (diamond)",
        translation: "Он подарил ей изысканное антикварное бриллиантовое колье на годовщину."
      },
      {
        id: "l3-3",
        sentence: "We sat around a ___ ___ ___ table during the meeting.",
        adjectives: ["huge", "oval", "conference"],
        explanation: "Size (huge) → Shape (oval) → Purpose (conference)",
        translation: "Во время встречи мы сидели за огромным овальным столом для переговоров."
      },
      {
        id: "l3-4",
        sentence: "She works with an ___ ___ ___ laptop on the train.",
        adjectives: ["expensive", "slim", "Japanese"],
        explanation: "Opinion (expensive) → Size (slim) → Origin (Japanese)",
        translation: "Она работает в поезде за дорогим тонким японским ноутбуком."
      },
      {
        id: "l3-5",
        sentence: "He drank from a ___ ___ ___ mug every morning.",
        adjectives: ["charming", "green", "ceramic"],
        explanation: "Opinion (charming) → Colour (green) → Material (ceramic)",
        translation: "Каждое утро он пил из очаровательной зеленой керамической кружки."
      },
      {
        id: "l3-6",
        sentence: "They discovered a ___ ___ ___ statue in the ruins.",
        adjectives: ["mysterious", "ancient", "Greek"],
        explanation: "Opinion (mysterious) → Age (ancient) → Origin (Greek)",
        translation: "В руинах они обнаружили загадочную древнюю греческую статую."
      },
      {
        id: "l3-7",
        sentence: "She packed a ___ ___ ___ bag for the weekend trip.",
        adjectives: ["handy", "little", "sleeping"],
        explanation: "Opinion (handy) → Size (little) → Purpose (sleeping)",
        translation: "Она упаковала удобный маленький спальный мешок для поездки на выходные."
      },
      {
        id: "l3-8",
        sentence: "He bought a ___ ___ ___ suit for the interview.",
        adjectives: ["smart", "dark", "woollen"],
        explanation: "Opinion (smart) → Colour (dark) → Material (woollen)",
        translation: "Он купил элегантный темный шерстяной костюм для собеседования."
      },
      {
        id: "l3-9",
        sentence: "We admired the ___ ___ ___ tower in the town square.",
        adjectives: ["magnificent", "tall", "clock"],
        explanation: "Opinion (magnificent) → Size (tall) → Purpose (clock)",
        translation: "Мы любовались великолепной высокой часовой башней на городской площади."
      },
      {
        id: "l3-10",
        sentence: "She served soup in ___ ___ ___ bowls at the party.",
        adjectives: ["delicate", "white", "porcelain"],
        explanation: "Opinion (delicate) → Colour (white) → Material (porcelain)",
        translation: "На вечеринке она подавала суп в изящных белых фарфоровых тарелках."
      }
    ]
  }
];
