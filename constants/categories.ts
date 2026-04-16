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
  return WORD_GAME_ACTIVITIES.map((activity) => {
    if (activity.id === 'cards') {
      return {
        ...activity,
        href: `/words/${categoryId}/${topicId}/[subcategoryId]/cards`
      };
    }
    return {
      ...activity,
      href: `/words#${categoryId}-${topicId}-${activity.id}`
    };
  });
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
    id: "antonyms",
    name: "Antonyms",
    description: "Opposite meanings",
    icon: "ArrowLeftRight",
    color: UI_COLORS.purple,
    section: "words",
    href: "/words#antonyms",
    access: "premium",
    isFree: false,
    order: 3,
    topics: [
      {
        id: "character",
        name: "Opposites in character",
        description: "Brave/cowardly, honest/dishonest||60 words",
        href: "/words#character"
      },
      {
        id: "state",
        name: "Opposites in state",
        description: "Awake/asleep, hungry/full||60 words",
        href: "/words#state"
      },
      {
        id: "action",
        name: "Opposites in action",
        description: "Build/destroy, push/pull||60 words",
        href: "/words#action"
      },
      {
        id: "feeling",
        name: "Opposites in feeling",
        description: "Love/hate, joy/sadness||60 words",
        href: "/words#feeling"
      },
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
    order: 4,
    topics: [
      {
        id: "at-work",
        name: "At work",
        description: "Professional communication||60 words",
        href: "/words#at-work"
      },
      {
        id: "with-strangers",
        name: "With strangers",
        description: "Polite ways to approach people||60 words",
        href: "/words#with-strangers"
      },
      {
        id: "in-conflict",
        name: "In conflict",
        description: "Disagree respectfully||60 words",
        href: "/words#in-conflict"
      },
      {
        id: "online-texting",
        name: "Online & texting",
        description: "Digital politeness||60 words",
        href: "/words#online-texting"
      }
    ]
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
    order: 5,
    topics: [
      {
        id: "emails-messages",
        name: "Emails & messages",
        description: "Written communication||60 words",
        href: "/words#emails-messages"
      },
      {
        id: "meetings-presentations",
        name: "Meetings & presentations",
        description: "Professional speaking||60 words",
        href: "/words#meetings-presentations"
      },
      {
        id: "everyday-conversation",
        name: "Everyday conversation",
        description: "Casual vs formal talk||60 words",
        href: "/words#everyday-conversation"
      },
      {
        id: "written-documents",
        name: "Written documents",
        description: "Reports, essays, papers||60 words",
        href: "/words#written-documents"
      }
    ]
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
    order: 6,
    topics: [
      {
        id: "past-memory",
        name: "Past & memory",
        description: "Remembering and past events||60 words",
        href: "/words#past-memory"
      },
      {
        id: "present-now",
        name: "Present & now",
        description: "Current moment and immediate actions||60 words",
        href: "/words#present-now"
      },
      {
        id: "future-plans",
        name: "Future & plans",
        description: "Upcoming events and intentions||60 words",
        href: "/words#future-plans"
      },
      {
        id: "duration-frequency",
        name: "Duration & frequency",
        description: "How long and how often||60 words",
        href: "/words#duration-frequency"
      }
    ]
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
    order: 7,
    topics: [
      {
        id: "gen-z-slang",
        name: "Gen Z slang",
        description: "Modern youth language and expressions||60 words",
        href: "/words#gen-z-slang"
      },
      {
        id: "internet-social-media",
        name: "Internet & social media",
        description: "Online communication||60 words",
        href: "/words#internet-social-media"
      },
      {
        id: "emotions-reactions",
        name: "Emotions & reactions",
        description: "Express feelings online||60 words",
        href: "/words#emotions-reactions"
      },
      {
        id: "street-urban",
        name: "Street & urban",
        description: "City language and culture||60 words",
        href: "/words#street-urban"
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
    href: "/idioms/food",
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
    href: "/idioms/weather",
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
    href: "/idioms/emotional",
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
    href: "/idioms/body",
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
    href: "/idioms/animal",
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
    href: "/idioms/business",
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
    href: "/idioms/slang-idioms",
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
    id: "everyday-situations",
    name: "Everyday Situations",
    description: "Practical phrases for daily life conversations",
    icon: "Users",
    color: UI_COLORS.cyan,
    section: "sentences",
    href: "/sentences#everyday-situations",
    access: "premium",
    isFree: false,
    order: 3,
    level: "B1",
    topics: [
      {
        id: "dining-out",
        name: "Dining Out",
        description: "Restaurant phrases: table requests, allergies, separate bills",
        access: "premium",
        isFree: false,
        subcategories: [
          { id: "table-requests", name: "Table Requests", description: "How to ask for a table by the window" },
          { id: "allergies", name: "Allergies", description: "How to inform about food allergies" },
          { id: "separate-bills", name: "Separate Bills", description: "How to ask for separate checks" }
        ]
      },
      {
        id: "travel-airport",
        name: "Travel & Airport",
        description: "Check-in, security, flight delays, gate information",
        access: "premium",
        isFree: false,
        subcategories: [
          { id: "check-in", name: "Check-in", description: "Flight registration process" },
          { id: "security", name: "Security", description: "Going through security screening" },
          { id: "flight-delays", name: "Flight Delays", description: "Asking about delayed flights" },
          { id: "gate-info", name: "Gate Information", description: "Finding your departure gate" }
        ]
      },
      {
        id: "shopping-prices",
        name: "Shopping & Prices",
        description: "Store conversations: sizes, prices, returns, exchanges",
        access: "premium",
        isFree: false,
        subcategories: [
          { id: "sizes", name: "Sizes", description: "Asking about clothing sizes" },
          { id: "prices", name: "Prices", description: "Clarifying product prices" },
          { id: "returns", name: "Returns", description: "Return and exchange policies" }
        ]
      },
      {
        id: "hotel-accommodation",
        name: "Hotel & Accommodation",
        description: "Check-in/out, room requests, complaints, amenities",
        access: "premium",
        isFree: false,
        subcategories: [
          { id: "checkin-out", name: "Check-in/out", description: "Hotel arrival and departure" },
          { id: "room-requests", name: "Room Requests", description: "Towel changes, extra amenities" },
          { id: "complaints", name: "Complaints", description: "AC/Wi-Fi issues, problems" }
        ]
      },
      {
        id: "directions-transport",
        name: "Directions & Transport",
        description: "Asking for directions, buying tickets, taxi rides",
        access: "premium",
        isFree: false,
        subcategories: [
          { id: "asking-directions", name: "Asking Directions", description: "How to ask for directions" },
          { id: "public-transport", name: "Public Transport", description: "Metro/bus tickets" },
          { id: "taxi", name: "Taxi", description: "Calling taxi and trip cost" }
        ]
      },
      {
        id: "health-pharmacy",
        name: "Health & Pharmacy",
        description: "Describing symptoms, buying medicine, medical help",
        access: "premium",
        isFree: false,
        subcategories: [
          { id: "symptoms", name: "Symptoms", description: "Describing headache, cold symptoms" },
          { id: "pharmacy", name: "Pharmacy", description: "Buying medicine without prescription" }
        ]
      },
      {
        id: "socializing-smalltalk",
        name: "Socializing & Small Talk",
        description: "Conversation starters, weather, hobbies, work topics",
        access: "premium",
        isFree: false,
        subcategories: [
          { id: "conversation-starters", name: "Conversation Starters", description: "Polite phrases to begin talking" },
          { id: "small-talk", name: "Small Talk", description: "Weather, hobbies, work topics" }
        ]
      },
      {
        id: "bank-money",
        name: "At the Bank & Money",
        description: "Cash withdrawal, currency exchange, card issues",
        access: "premium",
        isFree: false,
        subcategories: [
          { id: "cash-withdrawal", name: "Cash Withdrawal", description: "Getting cash from ATM/bank" },
          { id: "currency-exchange", name: "Currency Exchange", description: "Exchanging money" },
          { id: "card-issues", name: "Card Issues", description: "Blocked card problems" }
        ]
      },
      {
        id: "work-office",
        name: "Work & Office",
        description: "Meetings, requests, deadlines, colleague conversations",
        access: "premium",
        isFree: false,
        subcategories: [
          { id: "meetings", name: "Meetings", description: "Scheduling and arranging meetings" },
          { id: "requests", name: "Requests", description: "Polite requests for help" },
          { id: "deadlines", name: "Deadlines", description: "Clarifying project deadlines" }
        ]
      },
      {
        id: "emergency-situations",
        name: "Emergency Situations",
        description: "Calling for help, reporting theft, police/medical emergencies",
        access: "premium",
        isFree: false,
        subcategories: [
          { id: "calling-help", name: "Calling for Help", description: "How to call for assistance" },
          { id: "reporting-theft", name: "Reporting Theft", description: "Reporting stolen passport" },
          { id: "emergency-services", name: "Emergency Services", description: "Calling police/doctor" }
        ]
      }
    ]
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
    order: 4,
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
    order: 5
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
