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
        explanation: "Opinion (lovely) → Age (old)"
      },
      {
        id: "l1-2",
        sentence: "He drives a ___ ___ car to work every day.",
        adjectives: ["fast", "red"],
        explanation: "Opinion (fast) → Colour (red)"
      },
      {
        id: "l1-3",
        sentence: "She wore a ___ ___ scarf to the theatre.",
        adjectives: ["warm", "woollen"],
        explanation: "Opinion (warm) → Material (woollen)"
      },
      {
        id: "l1-4",
        sentence: "We sat at a ___ ___ table in the garden.",
        adjectives: ["large", "wooden"],
        explanation: "Size (large) → Material (wooden)"
      },
      {
        id: "l1-5",
        sentence: "I found an ___ ___ coin in the attic.",
        adjectives: ["ancient", "silver"],
        explanation: "Age (ancient) → Material (silver)"
      },
      {
        id: "l1-6",
        sentence: "Look at that ___ ___ cat sleeping in the sun.",
        adjectives: ["cute", "little"],
        explanation: "Opinion (cute) → Size (little)"
      },
      {
        id: "l1-7",
        sentence: "They bought a ___ ___ mirror for the hallway.",
        adjectives: ["round", "metal"],
        explanation: "Shape (round) → Material (metal)"
      },
      {
        id: "l1-8",
        sentence: "He bought a ___ ___ jacket for the winter.",
        adjectives: ["black", "leather"],
        explanation: "Colour (black) → Material (leather)"
      },
      {
        id: "l1-9",
        sentence: "We visited a ___ ___ café near the river.",
        adjectives: ["charming", "French"],
        explanation: "Opinion (charming) → Origin (French)"
      },
      {
        id: "l1-10",
        sentence: "She loves her ___ ___ shoes.",
        adjectives: ["new", "running"],
        explanation: "Age (new) → Purpose (running)"
      }
    ]
  },

  // ─────────────────────────────────────────────
  // LEVEL 2 — Three Adjectives (Classic triplets)
  // ─────────────────────────────────────────────
  {
    level: 2,
    title: "Classic Triplets",
    description: "Order 3 adjectives correctly before a single noun",
    items: [
      {
        id: "l2-1",
        sentence: "She bought a ___ ___ ___ dress for the wedding.",
        adjectives: ["gorgeous", "long", "silk"],
        explanation: "Opinion (gorgeous) → Size (long) → Material (silk)"
      },
      {
        id: "l2-2",
        sentence: "He found a ___ ___ ___ box in his grandfather's garage.",
        adjectives: ["heavy", "old", "wooden"],
        explanation: "Size (heavy) → Age (old) → Material (wooden)"
      },
      {
        id: "l2-3",
        sentence: "They adopted a ___ ___ ___ puppy from the shelter.",
        adjectives: ["playful", "little", "brown"],
        explanation: "Opinion (playful) → Size (little) → Colour (brown)"
      },
      {
        id: "l2-4",
        sentence: "We stayed in a ___ ___ ___ cottage by the lake.",
        adjectives: ["cosy", "ancient", "stone"],
        explanation: "Opinion (cosy) → Age (ancient) → Material (stone)"
      },
      {
        id: "l2-5",
        sentence: "He rides a ___ ___ ___ bike around the city.",
        adjectives: ["sleek", "modern", "racing"],
        explanation: "Opinion (sleek) → Age (modern) → Purpose (racing)"
      },
      {
        id: "l2-6",
        sentence: "She keeps a ___ ___ ___ ring in her jewellery box.",
        adjectives: ["tiny", "round", "gold"],
        explanation: "Size (tiny) → Shape (round) → Material (gold)"
      },
      {
        id: "l2-7",
        sentence: "They ordered a ___ ___ ___ pizza for dinner.",
        adjectives: ["delicious", "large", "Italian"],
        explanation: "Opinion (delicious) → Size (large) → Origin (Italian)"
      },
      {
        id: "l2-8",
        sentence: "He bought a ___ ___ ___ sports car last week.",
        adjectives: ["stunning", "new", "red"],
        explanation: "Opinion (stunning) → Age (new) → Colour (red)"
      },
      {
        id: "l2-9",
        sentence: "We purchased a ___ ___ ___ rug for the living room.",
        adjectives: ["beautiful", "square", "Turkish"],
        explanation: "Opinion (beautiful) → Shape (square) → Origin (Turkish)"
      },
      {
        id: "l2-10",
        sentence: "She carried a ___ ___ ___ bag over her shoulder.",
        adjectives: ["stylish", "black", "leather"],
        explanation: "Opinion (stylish) → Colour (black) → Material (leather)"
      }
    ]
  },

  // ─────────────────────────────────────────────
  // LEVEL 3 — Complex Adjective Chains (Challenge)
  // ─────────────────────────────────────────────
  {
    level: 3,
    title: "Master Challenge",
    description: "Chain 3 to 4 adjectives spanning diverse categories",
    items: [
      {
        id: "l3-1",
        sentence: "They rented a ___ ___ ___ apartment in the city centre.",
        adjectives: ["luxurious", "spacious", "modern"],
        explanation: "Opinion (luxurious) → Size (spacious) → Age (modern)"
      },
      {
        id: "l3-2",
        sentence: "He gave her an ___ ___ ___ necklace on their anniversary.",
        adjectives: ["exquisite", "antique", "diamond"],
        explanation: "Opinion (exquisite) → Age (antique) → Material (diamond)"
      },
      {
        id: "l3-3",
        sentence: "We sat around a ___ ___ ___ table during the meeting.",
        adjectives: ["huge", "oval", "conference"],
        explanation: "Size (huge) → Shape (oval) → Purpose (conference)"
      },
      {
        id: "l3-4",
        sentence: "She works on an ___ ___ ___ laptop on the train.",
        adjectives: ["expensive", "slim", "Japanese"],
        explanation: "Opinion (expensive) → Size (slim) → Origin (Japanese)"
      },
      {
        id: "l3-5",
        sentence: "He drank from a ___ ___ ___ mug every morning.",
        adjectives: ["charming", "green", "ceramic"],
        explanation: "Opinion (charming) → Colour (green) → Material (ceramic)"
      },
      {
        id: "l3-6",
        sentence: "They uncovered a ___ ___ ___ statue in the ruins.",
        adjectives: ["mysterious", "ancient", "Greek"],
        explanation: "Opinion (mysterious) → Age (ancient) → Origin (Greek)"
      },
      {
        id: "l3-7",
        sentence: "She packed a ___ ___ ___ bag for the weekend trip.",
        adjectives: ["handy", "small", "sleeping"],
        explanation: "Opinion (handy) → Size (small) → Purpose (sleeping)"
      },
      {
        id: "l3-8",
        sentence: "He wore an ___ ___ ___ suit to the interview.",
        adjectives: ["elegant", "dark", "woollen"],
        explanation: "Opinion (elegant) → Colour (dark) → Material (woollen)"
      },
      {
        id: "l3-9",
        sentence: "We admired the ___ ___ ___ tower in the town square.",
        adjectives: ["magnificent", "tall", "clock"],
        explanation: "Opinion (magnificent) → Size (tall) → Purpose (clock)"
      },
      {
        id: "l3-10",
        sentence: "She served soup in ___ ___ ___ bowls at the party.",
        adjectives: ["delicate", "white", "porcelain"],
        explanation: "Opinion (delicate) → Colour (white) → Material (porcelain)"
      }
    ]
  }
];
