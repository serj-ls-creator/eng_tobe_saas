// ============================================================
// INTERNET & SOCIAL MEDIA — Slang
// Structure: 6 subcategories × 10 words
// Each word has: basic (plain English word), advanced (slang word), transcription, wrong answers (4)
// Used in quiz: show basic word → pick the correct slang word
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

export const INTERNET_SOCIAL_MEDIA: Subcategory[] = [

  // ─────────────────────────────────────────
  // 1. REACTIONS
  // ─────────────────────────────────────────
  {
    id: 'reactions',
    name: 'Reactions',
    words: [
      {
        basic: 'Lie',
        advanced: 'Cap',
        transcription: '/kæp/',
        wrong: ['Cab', 'Cop', 'Cup', 'Cat'],
      },
      {
        basic: 'Honestly',
        advanced: 'No cap',
        transcription: '/ˌnoʊ ˈkæp/',
        wrong: ['No clue', 'No cash', 'No chance', 'No rush'],
      },
      {
        basic: 'Suspicious',
        advanced: 'Sus',
        transcription: '/sʌs/',
        wrong: ['Sob', 'Sun', 'Sub', 'Sum'],
      },
      {
        basic: 'Shocked',
        advanced: 'Shook',
        transcription: '/ʃʊk/',
        wrong: ['Shake', 'Shoot', 'Shoe', 'Shop'],
      },
      {
        basic: 'Very funny',
        advanced: 'Dead',
        transcription: '/ded/',
        wrong: ['Deaf', 'Deck', 'Debt', 'Dent'],
      },
      {
        basic: 'Love',
        advanced: 'Obsessed',
        transcription: '/əbˈsest/',
        wrong: ['Obscured', 'Observed', 'Obsolete', 'Oppressed'],
      },
      {
        basic: 'Win',
        advanced: 'W',
        transcription: '/ˈdʌbəl juː/',
        wrong: ['L', 'V', 'X', 'Z'],
      },
      {
        basic: 'Okay',
        advanced: 'Bet',
        transcription: '/bet/',
        wrong: ['Bat', 'Bit', 'Bad', 'Beg'],
      },
      {
        basic: 'Ouch',
        advanced: 'Oof',
        transcription: '/uːf/',
        wrong: ['Oops', 'Oven', 'Oats', 'Otter'],
      },
      {
        basic: 'Me too',
        advanced: 'Same',
        transcription: '/seɪm/',
        wrong: ['Sane', 'Sale', 'Safe', 'Sand'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 2. CONTENT
  // ─────────────────────────────────────────
  {
    id: 'content',
    name: 'Content',
    words: [
      {
        basic: 'Home feed',
        advanced: 'FYP',
        transcription: '/ˌef waɪ ˈpiː/',
        wrong: ['FAQ', 'FBI', 'FYI', 'FTP'],
      },
      {
        basic: 'Point of view',
        advanced: 'POV',
        transcription: '/ˌpiː oʊ ˈviː/',
        wrong: ['PDF', 'PIN', 'PTA', 'PTO'],
      },
      {
        basic: 'Summary',
        advanced: 'TL;DR',
        transcription: '/ˌtiː el ˈdiː ɑːr/',
        wrong: ['TBA', 'TBD', 'TGIF', 'TMI'],
      },
      {
        basic: 'Makeover',
        advanced: 'Glow-up',
        transcription: '/ˈɡloʊ ʌp/',
        wrong: ['Grow-up', 'Give-up', 'Get-up', 'Gear-up'],
      },
      {
        basic: 'Style',
        advanced: 'Aesthetic',
        transcription: '/esˈθetɪk/',
        wrong: ['Athletic', 'Authentic', 'Acoustic', 'Adequate'],
      },
      {
        basic: 'Proof',
        advanced: 'Receipts',
        transcription: '/rɪˈsiːts/',
        wrong: ['Recipes', 'Receptions', 'Rebates', 'Refunds'],
      },
      {
        basic: 'Cheesy',
        advanced: 'Corny',
        transcription: '/ˈkɔːrni/',
        wrong: ['Corner', 'Coral', 'Cozy', 'Cargo'],
      },
      {
        basic: 'Mood',
        advanced: 'Vibes',
        transcription: '/vaɪbz/',
        wrong: ['Vines', 'Vices', 'Vases', 'Vikings'],
      },
      {
        basic: 'Gossip',
        advanced: 'Tea',
        transcription: '/tiː/',
        wrong: ['Tee', 'Tray', 'Tent', 'Toad'],
      },
      {
        basic: 'Funny picture',
        advanced: 'Meme',
        transcription: '/miːm/',
        wrong: ['Memo', 'Mime', 'Maze', 'Motto'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 3. PEOPLE
  // ─────────────────────────────────────────
  {
    id: 'people',
    name: 'People',
    words: [
      {
        basic: 'Super fan',
        advanced: 'Stan',
        transcription: '/stæn/',
        wrong: ['Star', 'Stay', 'Stun', 'Stag'],
      },
      {
        basic: 'Charm',
        advanced: 'Rizz',
        transcription: '/rɪz/',
        wrong: ['Rice', 'Risk', 'Rise', 'Rink'],
      },
      {
        basic: 'Fake profile',
        advanced: 'Catfish',
        transcription: '/ˈkætfɪʃ/',
        wrong: ['Catwalk', 'Cattle', 'Catalog', 'Cabbage'],
      },
      {
        basic: 'Dramatic',
        advanced: 'Extra',
        transcription: '/ˈekstrə/',
        wrong: ['Exit', 'Eagle', 'Elbow', 'Engine'],
      },
      {
        basic: 'Follows you back',
        advanced: 'Mutual',
        transcription: '/ˈmjuːtʃuəl/',
        wrong: ['Mutter', 'Muscle', 'Mural', 'Mustard'],
      },
      {
        basic: 'Always online',
        advanced: 'Chronically online',
        transcription: '/ˌkrɑːnɪkli ˈɑːnlaɪn/',
        wrong: ['Chronically late', 'Chronically ill', 'Chronically tired', 'Chronically broke'],
      },
      {
        basic: 'Trend leader',
        advanced: 'Trendsetter',
        transcription: '/ˈtrendˌsetər/',
        wrong: ['Typesetter', 'Taxpayer', 'Teammate', 'Tiebreaker'],
      },
      {
        basic: 'Loud supporter',
        advanced: 'Cheerleader',
        transcription: '/ˈtʃɪrˌliːdər/',
        wrong: ['Chairlift', 'Chainsaw', 'Checklist', 'Cherry-picker'],
      },
      {
        basic: 'Fake cool person',
        advanced: 'Poser',
        transcription: '/ˈpoʊzər/',
        wrong: ['Poker', 'Porter', 'Pouter', 'Pilot'],
      },
      {
        basic: 'Too devoted',
        advanced: 'Simp',
        transcription: '/sɪmp/',
        wrong: ['Skip', 'Slim', 'Sip', 'Snip'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 4. ACTIONS
  // ─────────────────────────────────────────
  {
    id: 'actions',
    name: 'Actions',
    words: [
      {
        basic: 'Boycott',
        advanced: 'Cancel',
        transcription: '/ˈkænsəl/',
        wrong: ['Candle', 'Canal', 'Cannon', 'Canvas'],
      },
      {
        basic: 'Spy on',
        advanced: 'Creep',
        transcription: '/kriːp/',
        wrong: ['Crimp', 'Crypt', 'Creek', 'Crisp'],
      },
      {
        basic: 'Mock playfully',
        advanced: 'Roast',
        transcription: '/roʊst/',
        wrong: ['Roar', 'Roam', 'Rope', 'Robe'],
      },
      {
        basic: 'Watch nonstop',
        advanced: 'Binge',
        transcription: '/bɪndʒ/',
        wrong: ['Bingo', 'Binder', 'Bench', 'Bunch'],
      },
      {
        basic: 'Say too much',
        advanced: 'Overshare',
        transcription: '/ˌoʊvərˈʃer/',
        wrong: ['Overdue', 'Overlook', 'Overcome', 'Overnight'],
      },
      {
        basic: 'Break plans',
        advanced: 'Flake',
        transcription: '/fleɪk/',
        wrong: ['Flame', 'Flask', 'Flare', 'Flank'],
      },
      {
        basic: 'Promote',
        advanced: 'Boost',
        transcription: '/buːst/',
        wrong: ['Boot', 'Boom', 'Bone', 'Book'],
      },
      {
        basic: 'Exit',
        advanced: 'Dip',
        transcription: '/dɪp/',
        wrong: ['Dig', 'Dim', 'Dish', 'Dive'],
      },
      {
        basic: 'Private message',
        advanced: 'DM',
        transcription: '/ˌdiː ˈem/',
        wrong: ['DJ', 'DNA', 'DIY', 'DVD'],
      },
      {
        basic: 'Release',
        advanced: 'Drop',
        transcription: '/drɑːp/',
        wrong: ['Drum', 'Draw', 'Drag', 'Drip'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 5. STATUS
  // ─────────────────────────────────────────
  {
    id: 'status',
    name: 'Status',
    words: [
      {
        basic: 'Average',
        advanced: 'Mid',
        transcription: '/mɪd/',
        wrong: ['Mad', 'Mud', 'Mix', 'Mild'],
      },
      {
        basic: 'Calm',
        advanced: 'Unbothered',
        transcription: '/ʌnˈbɑːðərd/',
        wrong: ['Unbuttoned', 'Uncovered', 'Unbalanced', 'Unhurried'],
      },
      {
        basic: 'Old news',
        advanced: 'Played out',
        transcription: '/ˌpleɪd ˈaʊt/',
        wrong: ['Pulled out', 'Pushed out', 'Pointed out', 'Passed out'],
      },
      {
        basic: 'Influence',
        advanced: 'Clout',
        transcription: '/klaʊt/',
        wrong: ['Cloud', 'Clown', 'Clove', 'Club'],
      },
      {
        basic: 'Loss',
        advanced: 'L',
        transcription: '/el/',
        wrong: ['K', 'M', 'N', 'P'],
      },
      {
        basic: 'Legendary',
        advanced: 'Iconic',
        transcription: '/aɪˈkɑːnɪk/',
        wrong: ['Ironic', 'Inbound', 'Intense', 'Inland'],
      },
      {
        basic: 'Upset',
        advanced: 'Pressed',
        transcription: '/prest/',
        wrong: ['Pretzel', 'Preached', 'Praised', 'Pranked'],
      },
      {
        basic: 'Praise',
        advanced: 'Props',
        transcription: '/prɑːps/',
        wrong: ['Pops', 'Pros', 'Plops', 'Prompts'],
      },
      {
        basic: 'Lucky',
        advanced: 'Blessed',
        transcription: '/ˈblesɪd/',
        wrong: ['Blasted', 'Blamed', 'Blocked', 'Blended'],
      },
      {
        basic: 'Turn-off',
        advanced: 'Ick',
        transcription: '/ɪk/',
        wrong: ['Ice', 'Ink', 'Inn', 'Itch'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 6. TRENDS
  // ─────────────────────────────────────────
  {
    id: 'trends',
    name: 'Trends',
    words: [
      {
        basic: 'Flashback',
        advanced: 'Throwback',
        transcription: '/ˈθroʊbæk/',
        wrong: ['Tieback', 'Toolbox', 'Trackpad', 'Turnback'],
      },
      {
        basic: 'Remake',
        advanced: 'Remix',
        transcription: '/ˈriːmɪks/',
        wrong: ['Reflex', 'Relax', 'Rewind', 'Relic'],
      },
      {
        basic: 'Catchy song',
        advanced: 'Earworm',
        transcription: '/ˈɪrwɜːrm/',
        wrong: ['Earring', 'Earthworm', 'Earmuff', 'Earplug'],
      },
      {
        basic: 'False news',
        advanced: 'Fake news',
        transcription: '/ˌfeɪk ˈnuːz/',
        wrong: ['Fast food', 'Fair play', 'Fine print', 'Free speech'],
      },
      {
        basic: 'Private joke',
        advanced: 'Inside joke',
        transcription: '/ˌɪnsaɪd ˈdʒoʊk/',
        wrong: ['Inside job', 'Inside out', 'Inside track', 'Inside story'],
      },
      {
        basic: 'Overused',
        advanced: 'Overplayed',
        transcription: '/ˌoʊvərˈpleɪd/',
        wrong: ['Overpaid', 'Overgrown', 'Overhead', 'Overlaid'],
      },
      {
        basic: 'Following the crowd',
        advanced: 'Bandwagon',
        transcription: '/ˈbændwæɡən/',
        wrong: ['Bandstand', 'Baggage', 'Ballroom', 'Bathtub'],
      },
      {
        basic: 'Hot trend',
        advanced: 'Craze',
        transcription: '/kreɪz/',
        wrong: ['Crane', 'Crate', 'Crave', 'Crawl'],
      },
      {
        basic: 'Special words',
        advanced: 'Lingo',
        transcription: '/ˈlɪŋɡoʊ/',
        wrong: ['Lilac', 'Linen', 'Lobby', 'Lemon'],
      },
      {
        basic: 'Surprise ending',
        advanced: 'Plot twist',
        transcription: '/ˈplɑːt twɪst/',
        wrong: ['Pot roast', 'Pop quiz', 'Pen pal', 'Pit stop'],
      },
    ],
  },
]
