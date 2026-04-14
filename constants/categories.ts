import type { Category, SentenceCategory, WordCategory } from "@/types";

import { UI_COLORS } from "@/constants/ui";

const WORD_GAME_ACTIVITIES = [
  {
    id: "cards",
    name: "Cards",
    description: "Word and synonym cards"
  },
  {
    id: "synonym-pair",
    name: "Synonym Pair",
    description: "Match word pairs"
  },
  {
    id: "multiple-choice",
    name: "Multiple Choice",
    description: "Pick the right answer"
  },
  {
    id: "letter-hunt",
    name: "Letter Hunt",
    description: "Find missing letters"
  },
  {
    id: "transcribe",
    name: "Transcribe",
    description: "Listen and write synonym"
  },
  {
    id: "unscramble",
    name: "Unscramble",
    description: "Arrange letters correctly"
  }
] as const;

function createTopicActivities(categoryId: string, topicId: string) {
  return WORD_GAME_ACTIVITIES.map((activity) => ({
    ...activity,
    href: `/words#${categoryId}-${topicId}-${activity.id}`
  }));
}

export const CATS: WordCategory[] = [
  {
    id: "pronounce",
    name: "Pronounce",
    description: "Sounds and stress patterns",
    icon: "Mic",
    color: UI_COLORS.pink,
    section: "words",
    href: "/words#pronounce",
    access: "free",
    isFree: true,
    order: 1,
    topics: [
      {
        id: "dont-pronounce",
        name: "Don't pronounce",
        description: "Silent letters and tricky sounds",
        href: "/words#dont-pronounce"
      },
      {
        id: "pronunciation",
        name: "Pronunciation",
        description: "Clearer word production",
        href: "/words#pronunciation"
      }
    ]
  },
  {
    id: "basic-advanced",
    name: "Basic -> Advanced",
    description: "Upgrade everyday words",
    icon: "TrendingUp",
    color: UI_COLORS.cyan,
    section: "words",
    href: "/words#basic-advanced",
    access: "free",
    isFree: true,
    order: 2,
    topics: [
      {
        id: "people",
        name: "People",
        description: "Advanced vocabulary for describing people||100 words",
        access: "free",
        isFree: true,
        subcategories: [
          { id: "appearance", name: "Appearance", description: "Physical appearance vocabulary||10 words" },
          { id: "thinking", name: "Thinking", description: "Thought processes vocabulary||10 words" },
          { id: "emotions", name: "Emotions", description: "Feelings and emotions vocabulary||10 words" },
          { id: "relationships", name: "Relationships", description: "Social relationships vocabulary||10 words" },
          { id: "actions", name: "Actions", description: "People actions and behavior||10 words" },
          { id: "speech", name: "Speech", description: "Speaking and communication||10 words" },
          { id: "personality", name: "Personality", description: "Character traits vocabulary||10 words" },
          { id: "social", name: "Social", description: "Social interactions vocabulary||10 words" },
          { id: "energy", name: "Energy", description: "Energy levels and states||10 words" },
          { id: "identity", name: "Identity", description: "Personal identity vocabulary||10 words" }
        ]
      },
      {
        id: "world",
        name: "World",
        description: "Global and cultural vocabulary||100 words",
        access: "free",
        isFree: true,
        subcategories: [
          { id: "home", name: "Home", description: "House and living space||10 words" },
          { id: "neighbourhood", name: "Neighbourhood", description: "Local area vocabulary||10 words" },
          { id: "nature", name: "Nature", description: "Natural environment vocabulary||10 words" },
          { id: "weather", name: "Weather", description: "Weather and climate||10 words" },
          { id: "travel", name: "Travel", description: "Travel and transportation||10 words" },
          { id: "architecture", name: "Architecture", description: "Buildings and structures||10 words" },
          { id: "objects", name: "Objects", description: "Everyday objects||10 words" },
          { id: "materials", name: "Materials", description: "Materials and substances||10 words" },
          { id: "space", name: "Space", description: "Space and astronomy||10 words" },
          { id: "atmosphere", name: "Atmosphere", description: "Atmosphere and environment||10 words" }
        ]
      },
      {
        id: "digital",
        name: "Digital",
        description: "Modern technology and internet vocabulary||100 words",
        access: "premium",
        isFree: false,
        subcategories: [
          { id: "devices", name: "Devices", description: "Electronic devices||10 words" },
          { id: "internet", name: "Internet", description: "Internet and web||10 words" },
          { id: "social-media", name: "Social Media", description: "Social platforms vocabulary||10 words" },
          { id: "startup", name: "Startup", description: "Startup and business||10 words" },
          { id: "communication", name: "Communication", description: "Digital communication||10 words" },
          { id: "data", name: "Data", description: "Data and information||10 words" },
          { id: "security", name: "Security", description: "Digital security||10 words" },
          { id: "automation", name: "Automation", description: "Automation and AI||10 words" },
          { id: "trends", name: "Trends", description: "Digital trends||10 words" },
          { id: "work-tools", name: "Work Tools", description: "Digital work tools||10 words" }
        ]
      },
      {
        id: "life",
        name: "Life",
        description: "Everyday life and experiences vocabulary||100 words",
        access: "premium",
        isFree: false,
        subcategories: [
          { id: "food", name: "Food", description: "Food and meals||10 words" },
          { id: "drinks", name: "Drinks", description: "Beverages vocabulary||10 words" },
          { id: "cooking", name: "Cooking", description: "Cooking and kitchen||10 words" },
          { id: "restaurant", name: "Restaurant", description: "Dining out vocabulary||10 words" },
          { id: "hobbies", name: "Hobbies", description: "Hobbies and interests||10 words" },
          { id: "sports", name: "Sports", description: "Sports and fitness||10 words" },
          { id: "routine", name: "Routine", description: "Daily routines||10 words" },
          { id: "beauty", name: "Beauty", description: "Beauty and care||10 words" },
          { id: "health", name: "Health", description: "Health and wellness||10 words" },
          { id: "shopping", name: "Shopping", description: "Shopping and retail||10 words" }
        ]
      },
      {
        id: "mind",
        name: "Mind",
        description: "Thinking and mental processes vocabulary||100 words",
        access: "premium",
        isFree: false,
        subcategories: [
          { id: "logic", name: "Logic", description: "Logical thinking||10 words" },
          { id: "learning", name: "Learning", description: "Learning processes||10 words" },
          { id: "problem-solving", name: "Problem Solving", description: "Solving problems||10 words" },
          { id: "creativity", name: "Creativity", description: "Creative thinking||10 words" },
          { id: "focus", name: "Focus", description: "Concentration and attention||10 words" },
          { id: "planning", name: "Planning", description: "Planning and organizing||10 words" },
          { id: "habits", name: "Habits", description: "Habits and behavior||10 words" },
          { id: "growth", name: "Growth", description: "Personal growth||10 words" },
          { id: "leadership", name: "Leadership", description: "Leadership skills||10 words" },
          { id: "philosophy", name: "Philosophy", description: "Philosophical concepts||10 words" }
        ]
      }
    ]
  },
  {
    id: "synonyms",
    name: "Synonyms",
    description: "Expand your vocabulary",
    icon: "RefreshCw",
    color: UI_COLORS.yellow,
    section: "words",
    href: "/words#synonyms",
    access: "free",
    isFree: true,
    order: 3,
    topics: [
      {
        id: "health",
        name: "Health",
        description: "Health vocabulary pairs",
        activities: createTopicActivities("synonyms", "health")
      },
      {
        id: "education",
        name: "Education",
        description: "School and learning vocabulary",
        activities: createTopicActivities("synonyms", "education")
      },
      {
        id: "technology",
        name: "Technology",
        description: "Digital and tech vocabulary",
        activities: createTopicActivities("synonyms", "technology")
      },
      {
        id: "environment",
        name: "Environment",
        description: "Nature and climate vocabulary",
        activities: createTopicActivities("synonyms", "environment")
      }
    ]
  },
  {
    id: "antonyms",
    name: "Antonyms",
    description: "Opposite meanings",
    icon: "ArrowLeftRight",
    color: UI_COLORS.purple,
    section: "words",
    href: "/words#antonyms",
    access: "premium",
    isFree: false,
    order: 4,
    topics: [
      {
        id: "health",
        name: "Health",
        description: "Opposites in health vocabulary",
        activities: createTopicActivities("antonyms", "health")
      }
    ]
  },
  {
    id: "rude-polite",
    name: "Rude -> Polite",
    description: "Sound more respectful",
    icon: "ShieldAlert",
    color: UI_COLORS.pink,
    section: "words",
    href: "/words#rude-polite",
    access: "premium",
    isFree: false,
    order: 5
  },
  {
    id: "formal-informal",
    name: "Formal -> Informal",
    description: "Know when to use which",
    icon: "Shirt",
    color: UI_COLORS.cyan,
    section: "words",
    href: "/words#formal-informal",
    access: "premium",
    isFree: false,
    order: 6
  },
  {
    id: "time-words",
    name: "Time words",
    description: "Express time like a native",
    icon: "Clock3",
    color: UI_COLORS.yellow,
    section: "words",
    href: "/words#time-words",
    access: "premium",
    isFree: false,
    order: 7
  },
  {
    id: "slang",
    name: "Slang",
    description: "Modern texting language",
    icon: "MessageSquareMore",
    color: UI_COLORS.purple,
    section: "words",
    href: "/words#slang",
    access: "premium",
    isFree: false,
    order: 8,
    topics: [
      {
        id: "texting-language",
        name: "Texting language",
        description: "Shortcuts and chat slang",
        href: "/words#texting-language"
      }
    ]
  }
];

export const IDIOM_CATS: Category[] = [
  {
    id: "food",
    name: "Food Idioms",
    description: "Everyday food expressions",
    icon: "Pizza",
    color: UI_COLORS.yellow,
    section: "idioms",
    href: "/idioms#food",
    access: "free",
    isFree: true,
    order: 1
  },
  {
    id: "weather",
    name: "Weather Idioms",
    description: "Storms, sunshine, and sayings",
    icon: "CloudSun",
    color: UI_COLORS.cyan,
    section: "idioms",
    href: "/idioms#weather",
    access: "free",
    isFree: true,
    order: 2
  },
  {
    id: "emotional",
    name: "Emotional Idioms",
    description: "Feelings and reactions",
    icon: "Drama",
    color: UI_COLORS.pink,
    section: "idioms",
    href: "/idioms#emotional",
    access: "premium",
    isFree: false,
    order: 3
  },
  {
    id: "body",
    name: "Body Parts Idioms",
    description: "Body-based expressions",
    icon: "Dumbbell",
    color: UI_COLORS.purple,
    section: "idioms",
    href: "/idioms#body",
    access: "premium",
    isFree: false,
    order: 4
  },
  {
    id: "animal",
    name: "Animal Idioms",
    description: "Animal-based sayings",
    icon: "PawPrint",
    color: UI_COLORS.yellow,
    section: "idioms",
    href: "/idioms#animal",
    access: "premium",
    isFree: false,
    order: 5
  },
  {
    id: "business",
    name: "Business idioms",
    description: "Office and work expressions",
    icon: "BriefcaseBusiness",
    color: UI_COLORS.cyan,
    section: "idioms",
    href: "/idioms#business",
    access: "premium",
    isFree: false,
    order: 6
  },
  {
    id: "slang-idioms",
    name: "Slang idioms",
    description: "Casual native phrases",
    icon: "Laugh",
    color: UI_COLORS.pink,
    section: "idioms",
    href: "/idioms#slang-idioms",
    access: "premium",
    isFree: false,
    order: 7
  }
];

export const SENT_CATS: SentenceCategory[] = [
  {
    id: "a1-c2",
    name: "A1 to C2",
    description: "Sentence patterns from beginner to advanced",
    icon: "BookOpenText",
    color: UI_COLORS.cyan,
    section: "sentences",
    href: "/sentences/a1-c2",
    access: "free",
    isFree: true,
    order: 1,
    level: "A2"
  },
  {
    id: "phrasal-verbs",
    name: "Phrasal verbs",
    description: "Natural verb combinations",
    icon: "Rocket",
    color: UI_COLORS.pink,
    section: "sentences",
    href: "/sentences#phrasal-verbs",
    access: "premium",
    isFree: false,
    order: 2,
    level: "B2"
  },
  {
    id: "dont-say-very-easy",
    name: "Don't say: Very easy",
    description: "Swap weak phrases for stronger ones",
    icon: "GraduationCap",
    color: UI_COLORS.yellow,
    section: "sentences",
    href: "/sentences#dont-say-very-easy",
    access: "premium",
    isFree: false,
    order: 3,
    level: "C2"
  },
  {
    id: "slang-modern-english",
    name: "Slang / Modern English",
    description: "Sound like a native",
    icon: "Sparkles",
    color: UI_COLORS.purple,
    section: "sentences",
    href: "/sentences#slang-modern-english",
    access: "premium",
    isFree: false,
    order: 4
  }
];

export const GAME_CATS: Category[] = [
  {
    id: "wodrle",
    name: "Wodrle",
    description: "Guess the hidden word",
    icon: "Hash",
    color: UI_COLORS.cyan,
    section: "games",
    href: "/games#wodrle",
    access: "premium",
    isFree: false,
    order: 1
  },
  {
    id: "memory",
    name: "Memory",
    description: "Match vocabulary pairs",
    icon: "Brain",
    color: UI_COLORS.pink,
    section: "games",
    href: "/games#memory",
    access: "premium",
    isFree: false,
    order: 2
  },
  {
    id: "negotiations",
    name: "Negotiations",
    description: "Choose the best response",
    icon: "Handshake",
    color: UI_COLORS.yellow,
    section: "games",
    href: "/games#negotiations",
    access: "premium",
    isFree: false,
    order: 3
  }
];
