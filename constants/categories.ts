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
        href: "/words/pronounce/dont-pronounce",
        access: "premium",
        isFree: false
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
        access: "premium",
        isFree: false,
        subcategories: [
          { id: "courage", name: "Courage", description: "Brave vs cowardly||10 words" },
          { id: "honesty", name: "Honesty", description: "Honest vs dishonest||10 words" },
          { id: "kindness", name: "Kindness", description: "Kind vs cruel||10 words" },
          { id: "ambition", name: "Ambition", description: "Ambitious vs lazy||10 words" },
          { id: "social-nature", name: "Social Nature", description: "Outgoing vs withdrawn||10 words" },
          { id: "attitude", name: "Attitude", description: "Optimistic vs pessimistic||10 words" }
        ]
      },
      {
        id: "state",
        name: "Opposites in state",
        description: "Awake/asleep, hungry/full||60 words",
        access: "premium",
        isFree: false,
        subcategories: [
          { id: "consciousness", name: "Consciousness", description: "Awake vs asleep||10 words" },
          { id: "hunger", name: "Hunger & Thirst", description: "Hungry vs full||10 words" },
          { id: "health-state", name: "Health", description: "Healthy vs ill||10 words" },
          { id: "mood", name: "Mood", description: "Happy vs miserable||10 words" },
          { id: "comfort", name: "Comfort", description: "Safe vs threatened||10 words" },
          { id: "activity-level", name: "Activity Level", description: "Active vs inactive||10 words" }
        ]
      },
      {
        id: "action",
        name: "Opposites in action",
        description: "Build/destroy, push/pull||60 words",
        access: "premium",
        isFree: false,
        subcategories: [
          { id: "creation", name: "Creation", description: "Build vs demolish||10 words" },
          { id: "movement", name: "Movement", description: "Push vs pull||10 words" },
          { id: "communication", name: "Communication", description: "Speak vs stay silent||10 words" },
          { id: "work", name: "Work", description: "Start vs finish||10 words" },
          { id: "learning", name: "Learning", description: "Learn vs forget||10 words" },
          { id: "social", name: "Social", description: "Help vs hinder||10 words" }
        ]
      },
      {
        id: "feeling",
        name: "Opposites in feeling",
        description: "Love/hate, joy/sadness||60 words",
        access: "premium",
        isFree: false,
        subcategories: [
          { id: "love-hate", name: "Love-Hate", description: "Love vs hate||10 words" },
          { id: "joy-sadness", name: "Joy-Sadness", description: "Joy vs grief||10 words" },
          { id: "hope-fear", name: "Hope-Fear", description: "Hope vs dread||10 words" },
          { id: "pride-shame", name: "Pride-Shame", description: "Pride vs shame||10 words" },
          { id: "calm-stress", name: "Calm-Stress", description: "Calm vs tense||10 words" },
          { id: "gratitude-resentment", name: "Gratitude-Resentment", description: "Grateful vs resentful||10 words" }
        ]
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
        access: "premium",
        isFree: false,
        subcategories: [
          { id: "requests", name: "Requests", description: "Demand vs request||10 words" },
          { id: "disagreement", name: "Disagreement", description: "Wrong vs inaccurate||10 words" },
          { id: "feedback", name: "Feedback", description: "Blunt vs tactful||10 words" },
          { id: "meetings", name: "Meetings", description: "Boring vs unproductive||10 words" },
          { id: "tone", name: "Tone", description: "Rude vs professional||10 words" },
          { id: "apology", name: "Apology", description: "My bad vs I apologize||10 words" }
        ]
      },
      {
        id: "with-strangers",
        name: "With strangers",
        description: "Polite ways to approach people||60 words",
        access: "premium",
        isFree: false,
        subcategories: [
          { id: "greetings", name: "Greetings", description: "Hey vs excuse me||10 words" },
          { id: "asking-help", name: "Asking Help", description: "Help me vs could you assist||10 words" },
          { id: "interrupting", name: "Interrupting", description: "Wait vs one moment||10 words" },
          { id: "declining", name: "Declining", description: "No vs I am afraid not||10 words" },
          { id: "complaining", name: "Complaining", description: "This sucks vs unsatisfactory||10 words" },
          { id: "thanking", name: "Thanking", description: "Thanks vs I am grateful||10 words" }
        ]
      },
      {
        id: "in-conflict",
        name: "In conflict",
        description: "Disagree respectfully||60 words",
        access: "premium",
        isFree: false,
        subcategories: [
          { id: "disagreeing", name: "Disagreeing", description: "Wrong vs mistaken||10 words" },
          { id: "blaming", name: "Blaming", description: "Blame vs address||10 words" },
          { id: "demanding", name: "Demanding", description: "Must vs essential||10 words" },
          { id: "reacting", name: "Reacting", description: "Furious vs deeply concerned||10 words" },
          { id: "tone", name: "Tone", description: "Aggressive vs firm||10 words" },
          { id: "resolving", name: "Resolving", description: "Give up vs compromise||10 words" }
        ]
      },
      {
        id: "online-texting",
        name: "Online & texting",
        description: "Digital politeness||60 words",
        access: "premium",
        isFree: false,
        subcategories: [
          { id: "messaging", name: "Messaging", description: "K vs understood||10 words" },
          { id: "reactions", name: "Reactions", description: "Lol vs that is amusing||10 words" },
          { id: "requests", name: "Requests", description: "Send it vs please forward||10 words" },
          { id: "tone", name: "Tone", description: "Whatever vs noted||10 words" },
          { id: "disagreeing", name: "Disagreeing", description: "No vs I disagree||10 words" },
          { id: "signing-off", name: "Signing Off", description: "Bye vs best regards||10 words" }
        ]
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
        access: "premium",
        isFree: false,
        subcategories: [
          { id: "greetings", name: "Greetings", description: "Hey vs dear||10 words" },
          { id: "closings", name: "Closings", description: "Bye vs best regards||10 words" },
          { id: "requests", name: "Requests", description: "Can you vs could you kindly||10 words" },
          { id: "apologies", name: "Apologies", description: "Sorry vs I apologize||10 words" },
          { id: "updates", name: "Updates", description: "FYI vs please note||10 words" },
          { id: "attachments", name: "Attachments", description: "See attached vs please find enclosed||10 words" }
        ]
      },
      {
        id: "meetings-presentations",
        name: "Meetings & presentations",
        description: "Professional speaking||60 words",
        access: "premium",
        isFree: false,
        subcategories: [
          { id: "opening", name: "Opening", description: "Let us start vs shall we begin||10 words" },
          { id: "agreeing", name: "Agreeing", description: "Yeah vs I concur||10 words" },
          { id: "disagreeing", name: "Disagreeing", description: "I think vs in my view||10 words" },
          { id: "summarizing", name: "Summarizing", description: "So basically vs in summary||10 words" },
          { id: "asking", name: "Asking", description: "Any questions vs are there queries||10 words" },
          { id: "closing", name: "Closing", description: "That is it vs that concludes||10 words" }
        ]
      },
      {
        id: "everyday-conversation",
        name: "Everyday conversation",
        description: "Casual vs formal talk||60 words",
        access: "premium",
        isFree: false,
        subcategories: [
          { id: "greetings", name: "Greetings", description: "Hey vs hello||10 words" },
          { id: "farewells", name: "Farewells", description: "Bye vs farewell||10 words" },
          { id: "reactions", name: "Reactions", description: "Wow vs remarkable||10 words" },
          { id: "agreement", name: "Agreement", description: "Yeah vs certainly||10 words" },
          { id: "refusal", name: "Refusal", description: "Nope vs I decline||10 words" },
          { id: "small-talk", name: "Small Talk", description: "Wanna vs would like to||10 words" }
        ]
      },
      {
        id: "written-documents",
        name: "Written documents",
        description: "Reports, essays, papers||60 words",
        access: "premium",
        isFree: false,
        subcategories: [
          { id: "verbs", name: "Verbs", description: "Use vs utilize||10 words" },
          { id: "nouns", name: "Nouns", description: "Problem vs issue||10 words" },
          { id: "connectors", name: "Connectors", description: "But vs however||10 words" },
          { id: "hedging", name: "Hedging", description: "Maybe vs potentially||10 words" },
          { id: "emphasis", name: "Emphasis", description: "Very vs significantly||10 words" },
          { id: "conclusions", name: "Conclusions", description: "In the end vs in conclusion||10 words" }
        ]
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
        access: "premium",
        isFree: false,
        subcategories: [
          { id: "recently", name: "Recently", description: "Just now vs moments ago||10 words" },
          { id: "long-ago", name: "Long Ago", description: "Long ago vs formerly||10 words" },
          { id: "sequence", name: "Sequence", description: "First vs initially||10 words" },
          { id: "duration", name: "Duration", description: "For a while vs for some time||10 words" },
          { id: "frequency", name: "Frequency", description: "Often vs frequently||10 words" },
          { id: "memory", name: "Memory", description: "Remember vs recall||10 words" }
        ]
      },
      {
        id: "present-now",
        name: "Present & now",
        description: "Current moment and immediate actions||60 words",
        access: "premium",
        isFree: false,
        subcategories: [
          { id: "right-now", name: "Right Now", description: "Now vs currently||10 words" },
          { id: "ongoing", name: "Ongoing", description: "In progress vs underway||10 words" },
          { id: "current", name: "Current", description: "These days vs nowadays||10 words" },
          { id: "immediate", name: "Immediate", description: "Fast vs promptly||10 words" },
          { id: "simultaneous", name: "Simultaneous", description: "At the same time vs simultaneously||10 words" },
          { id: "temporary", name: "Temporary", description: "For now vs temporarily||10 words" }
        ]
      },
      {
        id: "future-plans",
        name: "Future & plans",
        description: "Upcoming events and intentions||60 words",
        access: "premium",
        isFree: false,
        subcategories: [
          { id: "soon", name: "Soon", description: "Soon vs shortly||10 words" },
          { id: "planning", name: "Planning", description: "Plan to vs intend to||10 words" },
          { id: "prediction", name: "Prediction", description: "Will vs shall||10 words" },
          { id: "intention", name: "Intention", description: "Mean to vs intend to||10 words" },
          { id: "deadline", name: "Deadline", description: "Due date vs deadline||10 words" },
          { id: "uncertainty", name: "Uncertainty", description: "Maybe vs potentially||10 words" }
        ]
      },
      {
        id: "duration-frequency",
        name: "Duration & frequency",
        description: "How long and how often||60 words",
        access: "premium",
        isFree: false,
        subcategories: [
          { id: "always-never", name: "Always-Never", description: "Always vs consistently||10 words" },
          { id: "often-rarely", name: "Often-Rarely", description: "Often vs frequently||10 words" },
          { id: "long-short", name: "Long-Short", description: "Long vs extended||10 words" },
          { id: "regular-irregular", name: "Regular-Irregular", description: "Regular vs consistent||10 words" },
          { id: "brief", name: "Brief", description: "Quick vs fleeting||10 words" },
          { id: "permanent", name: "Permanent", description: "Forever vs permanently||10 words" }
        ]
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
        access: "premium",
        isFree: false,
        subcategories: [
          { id: "approval", name: "Approval", description: "Slay vs excel||10 words" },
          { id: "disapproval", name: "Disapproval", description: "Cringe vs embarrassing||10 words" },
          { id: "people", name: "People", description: "Bestie vs best friend||10 words" },
          { id: "situations", name: "Situations", description: "No cap vs honestly||10 words" },
          { id: "reactions", name: "Reactions", description: "Shook vs shocked||10 words" },
          { id: "internet", name: "Internet", description: "Vibe vs atmosphere||10 words" }
        ]
      },
      {
        id: "internet-social-media",
        name: "Internet & social media",
        description: "Online communication||60 words",
        access: "premium",
        isFree: false,
        subcategories: [
          { id: "reactions", name: "Reactions", description: "LOL vs laughing||10 words" },
          { id: "content", name: "Content", description: "Post vs publication||10 words" },
          { id: "people", name: "People", description: "Influencer vs content creator||10 words" },
          { id: "actions", name: "Actions", description: "DM vs message||10 words" },
          { id: "status", name: "Status", description: "Viral vs trending||10 words" },
          { id: "trends", name: "Trends", description: "Challenge vs viral trend||10 words" }
        ]
      },
      {
        id: "emotions-reactions",
        name: "Emotions & reactions",
        description: "Express feelings online||60 words",
        access: "premium",
        isFree: false,
        subcategories: [
          { id: "positive", name: "Positive", description: "Hyped vs excited||10 words" },
          { id: "negative", name: "Negative", description: "Salty vs bitter||10 words" },
          { id: "surprise", name: "Surprise", description: "Shook vs shocked||10 words" },
          { id: "intensity", name: "Intensity", description: "Dead vs exhausted||10 words" },
          { id: "social", name: "Social", description: "Awkward vs uncomfortable||10 words" },
          { id: "online", name: "Online", description: "Salty vs hostile||10 words" }
        ]
      },
      {
        id: "street-urban",
        name: "Street & urban",
        description: "City language and culture||60 words",
        access: "premium",
        isFree: false,
        subcategories: [
          { id: "people", name: "People", description: "Homie vs friend||10 words" },
          { id: "money", name: "Money", description: "Bread vs money||10 words" },
          { id: "actions", name: "Actions", description: "Flex vs show off||10 words" },
          { id: "places", name: "Places", description: "Hood vs neighborhood||10 words" },
          { id: "approval", name: "Approval", description: "Dope vs impressive||10 words" },
          { id: "conflict", name: "Conflict", description: "Beef vs conflict||10 words" }
        ]
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
    id: "wordle",
    name: "Wordle",
    description: "Guess the hidden word",
    icon: "Hash",
    color: UI_COLORS.cyan,
    section: "games",
    href: "/games/wordle",
    access: "free",
    isFree: true,
    order: 1
  },
  {
    id: "memory",
    name: "Memory",
    description: "Match vocabulary pairs",
    icon: "Brain",
    color: UI_COLORS.pink,
    section: "games",
    href: "/games/memory",
    access: "free",
    isFree: true,
    order: 2
  },
  {
    id: "negotiation",
    name: "Negotiation",
    description: "Branching dialogue quests",
    icon: "Handshake",
    color: UI_COLORS.yellow,
    section: "games",
    href: "/games/negotiation",
    access: "premium",
    isFree: false,
    order: 3
  }
];
