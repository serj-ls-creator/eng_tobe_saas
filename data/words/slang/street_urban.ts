// ============================================================
// STREET & URBAN — Street/urban slang vs standard equivalents
// Structure: 6 subcategories × 10 words
// ============================================================

export interface WordItem {
  basic: string
  advanced: string
  transcription: string
  wrong: [string, string, string, string]
}

export interface Subcategory {
  id: string
  name: string
  words: WordItem[]
}

export const STREET_URBAN: Subcategory[] = [

  // ─────────────────────────────────────────
  // 1. PEOPLE
  // ─────────────────────────────────────────
  {
    id: 'people',
    name: 'People',
    words: [
      {
        basic: 'Homie',
        advanced: 'Friend',
        transcription: '/frend/',
        wrong: ['Follower', 'Fighter', 'Finder', 'Fixer'],
      },
      {
        basic: 'Bro',
        advanced: 'Companion',
        transcription: '/kəmˈpæniən/',
        wrong: ['Colleague', 'Critic', 'Competitor', 'Counselor'],
      },
      {
        basic: 'Fam',
        advanced: 'Ally',
        transcription: '/ˈælaɪ/',
        wrong: ['Agent', 'Author', 'Advisor', 'Anchor'],
      },
      {
        basic: 'Plug',
        advanced: 'Supplier',
        transcription: '/səˈplaɪər/',
        wrong: ['Supporter', 'Successor', 'Subscriber', 'Spectator'],
      },
      {
        basic: 'OG',
        advanced: 'Veteran',
        transcription: '/ˈvetərən/',
        wrong: ['Volunteer', 'Vendor', 'Validator', 'Visionary'],
      },
      {
        basic: 'Snitch',
        advanced: 'Informant',
        transcription: '/ɪnˈfɔːrmənt/',
        wrong: ['Instructor', 'Inspector', 'Investor', 'Influencer'],
      },
      {
        basic: 'Shorty',
        advanced: 'Partner',
        transcription: '/ˈpɑːrtnər/',
        wrong: ['Provider', 'Producer', 'Participant', 'Presenter'],
      },
      {
        basic: 'Crew',
        advanced: 'Group',
        transcription: '/ɡruːp/',
        wrong: ['Guard', 'Guide', 'Guest', 'Grant'],
      },
      {
        basic: 'Rider',
        advanced: 'Loyal friend',
        transcription: '/ˈlɔɪəl frend/',
        wrong: ['Loyal follower', 'Loyal supporter', 'Loyal admirer', 'Loyal companion'],
      },
      {
        basic: 'Opps',
        advanced: 'Rivals',
        transcription: '/ˈraɪvəlz/',
        wrong: ['Relatives', 'Residents', 'Recipients', 'Referees'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 2. MONEY
  // ─────────────────────────────────────────
  {
    id: 'money',
    name: 'Money',
    words: [
      {
        basic: 'Bread',
        advanced: 'Money',
        transcription: '/ˈmʌni/',
        wrong: ['Mercy', 'Memory', 'Might', 'Mood'],
      },
      {
        basic: 'Bands',
        advanced: 'Thousands',
        transcription: '/ˈθaʊzəndz/',
        wrong: ['Thoughts', 'Threats', 'Themes', 'Things'],
      },
      {
        basic: 'Guap',
        advanced: 'Wealth',
        transcription: '/welθ/',
        wrong: ['Worth', 'Work', 'World', 'Word'],
      },
      {
        basic: 'Racks',
        advanced: 'Large sum',
        transcription: '/lɑːrdʒ sʌm/',
        wrong: ['Large group', 'Large amount', 'Large number', 'Large total'],
      },
      {
        basic: 'Cheese',
        advanced: 'Cash',
        transcription: '/kæʃ/',
        wrong: ['Cost', 'Cause', 'Case', 'Care'],
      },
      {
        basic: 'Loot',
        advanced: 'Earnings',
        transcription: '/ˈɜːrnɪŋz/',
        wrong: ['Efforts', 'Elements', 'Emotions', 'Estimates'],
      },
      {
        basic: 'Cheddar',
        advanced: 'Income',
        transcription: '/ˈɪnkʌm/',
        wrong: ['Insight', 'Impact', 'Index', 'Input'],
      },
      {
        basic: 'Paper',
        advanced: 'Currency',
        transcription: '/ˈkɜːrənsi/',
        wrong: ['Capacity', 'Category', 'Clarity', 'Community'],
      },
      {
        basic: 'Dough',
        advanced: 'Funds',
        transcription: '/fʌndz/',
        wrong: ['Facts', 'Factors', 'Features', 'Fields'],
      },
      {
        basic: 'Stacks',
        advanced: 'Savings',
        transcription: '/ˈseɪvɪŋz/',
        wrong: ['Searches', 'Sections', 'Segments', 'Selections'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 3. ACTIONS
  // ─────────────────────────────────────────
  {
    id: 'actions',
    name: 'Actions',
    words: [
      {
        basic: 'Flex',
        advanced: 'Show off',
        transcription: '/ʃoʊ ɒf/',
        wrong: ['Show up', 'Show out', 'Show down', 'Show through'],
      },
      {
        basic: 'Grind',
        advanced: 'Work hard',
        transcription: '/wɜːrk hɑːrd/',
        wrong: ['Work fast', 'Work slow', 'Work smart', 'Work well'],
      },
      {
        basic: 'Hustle',
        advanced: 'Strive',
        transcription: '/straɪv/',
        wrong: ['Stand', 'State', 'Stay', 'Step'],
      },
      {
        basic: 'Bounce',
        advanced: 'Leave',
        transcription: '/liːv/',
        wrong: ['Listen', 'Locate', 'Linger', 'Lament'],
      },
      {
        basic: 'Dip',
        advanced: 'Depart',
        transcription: '/dɪˈpɑːrt/',
        wrong: ['Depend', 'Deploy', 'Describe', 'Deserve'],
      },
      {
        basic: 'Clap back',
        advanced: 'Retaliate',
        transcription: '/rɪˈtælieɪt/',
        wrong: ['Relocate', 'Renovate', 'Replicate', 'Represent'],
      },
      {
        basic: 'Snitch',
        advanced: 'Inform',
        transcription: '/ɪnˈfɔːrm/',
        wrong: ['Inspire', 'Instruct', 'Integrate', 'Intend'],
      },
      {
        basic: 'Slide',
        advanced: 'Visit',
        transcription: '/ˈvɪzɪt/',
        wrong: ['Validate', 'Value', 'View', 'Voice'],
      },
      {
        basic: 'Pull up',
        advanced: 'Arrive',
        transcription: '/əˈraɪv/',
        wrong: ['Adjust', 'Achieve', 'Acquire', 'Agree'],
      },
      {
        basic: 'Ghost',
        advanced: 'Disappear',
        transcription: '/ˌdɪsəˈpɪər/',
        wrong: ['Discover', 'Discuss', 'Dismiss', 'Display'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 4. PLACES
  // ─────────────────────────────────────────
  {
    id: 'places',
    name: 'Places',
    words: [
      {
        basic: 'Hood',
        advanced: 'Neighborhood',
        transcription: '/ˈneɪbərhʊd/',
        wrong: ['Network', 'Notice', 'Notion', 'Nurture'],
      },
      {
        basic: 'Spot',
        advanced: 'Location',
        transcription: '/loʊˈkeɪʃən/',
        wrong: ['Limitation', 'Liberation', 'Legislation', 'Legitimation'],
      },
      {
        basic: 'Crib',
        advanced: 'Residence',
        transcription: '/ˈrezɪdəns/',
        wrong: ['Relevance', 'Reliance', 'Resilience', 'Resistance'],
      },
      {
        basic: 'Block',
        advanced: 'Street',
        transcription: '/striːt/',
        wrong: ['State', 'Stage', 'Stand', 'Start'],
      },
      {
        basic: 'Trap',
        advanced: 'Territory',
        transcription: '/ˈterɪtɔːri/',
        wrong: ['Tendency', 'Testimony', 'Transparency', 'Treasury'],
      },
      {
        basic: 'Ends',
        advanced: 'Area',
        transcription: '/ˈeəriə/',
        wrong: ['Ability', 'Activity', 'Ambiguity', 'Authority'],
      },
      {
        basic: 'Turf',
        advanced: 'Domain',
        transcription: '/doʊˈmeɪn/',
        wrong: ['Decision', 'Declaration', 'Definition', 'Delivery'],
      },
      {
        basic: 'Stomping ground',
        advanced: 'Home base',
        transcription: '/hoʊm beɪs/',
        wrong: ['Home team', 'Home field', 'Home court', 'Home ground'],
      },
      {
        basic: 'The streets',
        advanced: 'Urban area',
        transcription: '/ˈɜːrbən ˈeəriə/',
        wrong: ['Urban zone', 'Urban district', 'Urban region', 'Urban sector'],
      },
      {
        basic: 'Trap house',
        advanced: 'Hideout',
        transcription: '/ˈhaɪdaʊt/',
        wrong: ['Handout', 'Hangout', 'Holdout', 'Helpout'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 5. APPROVAL
  // ─────────────────────────────────────────
  {
    id: 'approval',
    name: 'Approval',
    words: [
      {
        basic: 'Dope',
        advanced: 'Impressive',
        transcription: '/ɪmˈpresɪv/',
        wrong: ['Impulsive', 'Insightful', 'Intuitive', 'Inventive'],
      },
      {
        basic: 'Fresh',
        advanced: 'Stylish',
        transcription: '/ˈstaɪlɪʃ/',
        wrong: ['Stubborn', 'Skeptical', 'Sensitive', 'Spontaneous'],
      },
      {
        basic: 'Tight',
        advanced: 'Excellent',
        transcription: '/ˈeksələnt/',
        wrong: ['Effective', 'Efficient', 'Ethical', 'Extreme'],
      },
      {
        basic: 'Legit',
        advanced: 'Genuine',
        transcription: '/ˈdʒenjuɪn/',
        wrong: ['Graceful', 'Grateful', 'Greedy', 'Grounded'],
      },
      {
        basic: 'Solid',
        advanced: 'Reliable',
        transcription: '/rɪˈlaɪəbl/',
        wrong: ['Resilient', 'Rational', 'Relaxed', 'Reserved'],
      },
      {
        basic: 'Raw',
        advanced: 'Authentic',
        transcription: '/ɔːˈθentɪk/',
        wrong: ['Automatic', 'Abstract', 'Adaptive', 'Absolute'],
      },
      {
        basic: 'Hard',
        advanced: 'Admirable',
        transcription: '/ˈædmɪrəbl/',
        wrong: ['Adaptable', 'Approachable', 'Achievable', 'Actionable'],
      },
      {
        basic: 'Clean',
        advanced: 'Polished',
        transcription: '/ˈpɒlɪʃt/',
        wrong: ['Passive', 'Peculiar', 'Persistent', 'Playful'],
      },
      {
        basic: 'Sick',
        advanced: 'Outstanding',
        transcription: '/ˌaʊtˈstændɪŋ/',
        wrong: ['Overrated', 'Overused', 'Overdone', 'Overruled'],
      },
      {
        basic: 'Lowkey fire',
        advanced: 'Underrated',
        transcription: '/ˌʌndərˈreɪtɪd/',
        wrong: ['Underused', 'Undervalued', 'Undermined', 'Underestimated'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 6. CONFLICT
  // ─────────────────────────────────────────
  {
    id: 'conflict',
    name: 'Conflict',
    words: [
      {
        basic: 'Beef',
        advanced: 'Conflict',
        transcription: '/ˈkɒnflɪkt/',
        wrong: ['Contact', 'Content', 'Context', 'Contract'],
      },
      {
        basic: 'Squash it',
        advanced: 'Resolve',
        transcription: '/rɪˈzɒlv/',
        wrong: ['Respond', 'Restore', 'Retain', 'Return'],
      },
      {
        basic: 'Beef',
        advanced: 'Dispute',
        transcription: '/dɪˈspjuːt/',
        wrong: ['Display', 'Dismiss', 'Dissolve', 'Distribute'],
      },
      {
        basic: 'Catch hands',
        advanced: 'Confront',
        transcription: '/kənˈfrʌnt/',
        wrong: ['Conform', 'Connect', 'Consider', 'Consist'],
      },
      {
        basic: 'Fade',
        advanced: 'Challenge',
        transcription: '/ˈtʃælɪndʒ/',
        wrong: ['Calculate', 'Capture', 'Categorize', 'Clarify'],
      },
      {
        basic: 'Diss',
        advanced: 'Insult',
        transcription: '/ˈɪnsʌlt/',
        wrong: ['Inspect', 'Instruct', 'Integrate', 'Intend'],
      },
      {
        basic: 'Beef',
        advanced: 'Rivalry',
        transcription: '/ˈraɪvəlri/',
        wrong: ['Reliability', 'Resilience', 'Relevance', 'Reliance'],
      },
      {
        basic: 'Clap back',
        advanced: 'Counter',
        transcription: '/ˈkaʊntər/',
        wrong: ['Confirm', 'Connect', 'Consider', 'Contain'],
      },
      {
        basic: 'Smoke',
        advanced: 'Confront',
        transcription: '/kənˈfrʌnt/',
        wrong: ['Conform', 'Connect', 'Consider', 'Consist'],
      },
      {
        basic: 'Squash',
        advanced: 'Settle',
        transcription: '/ˈsetl/',
        wrong: ['Search', 'Select', 'Separate', 'Structure'],
      },
    ],
  },
]
