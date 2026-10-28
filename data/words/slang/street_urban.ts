// ============================================================
// STREET & URBAN — Slang
// Structure: 6 subcategories × 10 words
// Each word has: basic (plain English), advanced (slang), transcription, wrong answers (4)
// Used in quiz: show basic phrase → pick the correct slang word
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
        basic: 'Best friend',
        advanced: 'Bestie',
        transcription: '/ˈbesti/',
        wrong: ['Bully', 'Banker', 'Bandit', 'Butler'],
      },
      {
        basic: 'Close friend',
        advanced: 'Homie',
        transcription: '/ˈhoʊmi/',
        wrong: ['Hobby', 'Hammer', 'Harbor', 'Hero'],
      },
      {
        basic: 'Group of close friends',
        advanced: 'Crew',
        transcription: '/kruː/',
        wrong: ['Crown', 'Crater', 'Crumb', 'Crane'],
      },
      {
        basic: 'Friend who is always there for you',
        advanced: 'Ride or die',
        transcription: '/ˌraɪd ɔːr ˈdaɪ/',
        wrong: ['Rise and shine', 'Rock and roll', 'Rack and ruin', 'Rain or shine'],
      },
      {
        basic: 'Person who tells on others',
        advanced: 'Snitch',
        transcription: '/snɪtʃ/',
        wrong: ['Sneeze', 'Snack', 'Snore', 'Sniff'],
      },
      {
        basic: 'Person who tries to be like someone else',
        advanced: 'Wannabe',
        transcription: '/ˈwɑːnəbi/',
        wrong: ['Wanderer', 'Wizard', 'Warden', 'Whisper'],
      },
      {
        basic: 'Greatest of all time',
        advanced: 'GOAT',
        transcription: '/ɡoʊt/',
        wrong: ['Gold', 'Glove', 'Ghost', 'Gem'],
      },
      {
        basic: 'Person who criticizes you out of jealousy',
        advanced: 'Hater',
        transcription: '/ˈheɪtər/',
        wrong: ['Hunter', 'Helper', 'Hatter', 'Hitter'],
      },
      {
        basic: 'Person who ruins the fun',
        advanced: 'Buzzkill',
        transcription: '/ˈbʌzkɪl/',
        wrong: ['Buzzard', 'Bulldog', 'Bucket', 'Butter'],
      },
      {
        basic: 'Person who loves fashion',
        advanced: 'Fashionista',
        transcription: '/ˌfæʃəˈnɪstə/',
        wrong: ['Fisherman', 'Florist', 'Fireman', 'Farmer'],
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
        basic: 'Money',
        advanced: 'Dough',
        transcription: '/doʊ/',
        wrong: ['Dove', 'Dock', 'Door', 'Dawn'],
      },
      {
        basic: 'One thousand dollars',
        advanced: 'A grand',
        transcription: '/ə ˈɡrænd/',
        wrong: ['A group', 'A grain', 'A grade', 'A grant'],
      },
      {
        basic: 'Hundred-dollar bill',
        advanced: 'Benjamin',
        transcription: '/ˈbendʒəmɪn/',
        wrong: ['Benefit', 'Bandana', 'Barrel', 'Biscuit'],
      },
      {
        basic: 'Lots of money',
        advanced: 'Stacks',
        transcription: '/stæks/',
        wrong: ['Stakes', 'Stocks', 'Stairs', 'Stalks'],
      },
      {
        basic: 'Very rich',
        advanced: 'Loaded',
        transcription: '/ˈloʊdɪd/',
        wrong: ['Lonely', 'Lazy', 'Lucky', 'Loyal'],
      },
      {
        basic: 'Have no money',
        advanced: 'Broke',
        transcription: '/broʊk/',
        wrong: ['Brook', 'Broom', 'Brave', 'Bread'],
      },
      {
        basic: 'Too expensive for what you get',
        advanced: 'Rip-off',
        transcription: '/ˈrɪp ɔːf/',
        wrong: ['Rain-check', 'Road-trip', 'Run-down', 'Roll-over'],
      },
      {
        basic: 'Get a lot of money or a great deal',
        advanced: 'Secure the bag',
        transcription: '/sɪˌkjʊr ðə ˈbæɡ/',
        wrong: ['Spill the beans', 'Save the day', 'Shake a leg', 'Spread the word'],
      },
      {
        basic: 'Pay for everyone',
        advanced: 'Pick up the tab',
        transcription: '/ˌpɪk ʌp ðə ˈtæb/',
        wrong: ['Pull the plug', 'Pass the buck', 'Pay the price', 'Pick a fight'],
      },
      {
        basic: 'Take things from others without paying',
        advanced: 'Mooch',
        transcription: '/muːtʃ/',
        wrong: ['Mouse', 'Mouth', 'Mood', 'Mulch'],
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
        basic: 'Show off',
        advanced: 'Flex',
        transcription: '/fleks/',
        wrong: ['Flip', 'Flop', 'Fling', 'Float'],
      },
      {
        basic: 'Work very hard',
        advanced: 'Grind',
        transcription: '/ɡraɪnd/',
        wrong: ['Grain', 'Grape', 'Grill', 'Grunt'],
      },
      {
        basic: 'Leave quickly',
        advanced: 'Bounce',
        transcription: '/baʊns/',
        wrong: ['Bounty', 'Bounds', 'Bonus', 'Bunch'],
      },
      {
        basic: 'Go out and have a big night',
        advanced: 'Turn up',
        transcription: '/ˌtɜːrn ˈʌp/',
        wrong: ['Tune up', 'Tip up', 'Tie up', 'Take up'],
      },
      {
        basic: 'Arrive somewhere',
        advanced: 'Pull up',
        transcription: '/ˌpʊl ˈʌp/',
        wrong: ['Push up', 'Put up', 'Pass up', 'Pack up'],
      },
      {
        basic: 'Relax',
        advanced: 'Chill',
        transcription: '/tʃɪl/',
        wrong: ['Chirp', 'Chunk', 'Charm', 'Churn'],
      },
      {
        basic: 'Share gossip',
        advanced: 'Spill the tea',
        transcription: '/ˌspɪl ðə ˈtiː/',
        wrong: ['Stir the pot', 'Save the date', 'Skip the line', 'Shake the tree'],
      },
      {
        basic: 'Fall asleep suddenly',
        advanced: 'Crash',
        transcription: '/kræʃ/',
        wrong: ['Crush', 'Crawl', 'Crack', 'Cross'],
      },
      {
        basic: 'Do something really well',
        advanced: 'Slay',
        transcription: '/sleɪ/',
        wrong: ['Slap', 'Slam', 'Slip', 'Slice'],
      },
      {
        basic: 'Reply with a clever comeback',
        advanced: 'Clap back',
        transcription: '/ˈklæp bæk/',
        wrong: ['Cut back', 'Call back', 'Crawl back', 'Climb back'],
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
        basic: 'Neighborhood',
        advanced: 'Hood',
        transcription: '/hʊd/',
        wrong: ['Hoof', 'Hook', 'Hoop', 'Hose'],
      },
      {
        basic: 'Home',
        advanced: 'Crib',
        transcription: '/krɪb/',
        wrong: ['Crab', 'Crop', 'Crow', 'Crumb'],
      },
      {
        basic: 'Place where friends hang out',
        advanced: 'Hangout',
        transcription: '/ˈhæŋaʊt/',
        wrong: ['Handout', 'Holdout', 'Hideout', 'Helpout'],
      },
      {
        basic: 'Favorite place to go',
        advanced: 'Spot',
        transcription: '/spɑːt/',
        wrong: ['Spoon', 'Spore', 'Sport', 'Spout'],
      },
      {
        basic: 'Small corner store',
        advanced: 'Bodega',
        transcription: '/boʊˈdeɪɡə/',
        wrong: ['Bonanza', 'Bandana', 'Bungalow', 'Bonfire'],
      },
      {
        basic: 'Secret bar',
        advanced: 'Speakeasy',
        transcription: '/ˈspiːkiːzi/',
        wrong: ['Spaghetti', 'Speedway', 'Spectacle', 'Speedboat'],
      },
      {
        basic: 'New York City',
        advanced: 'The Big Apple',
        transcription: '/ðə ˌbɪɡ ˈæpəl/',
        wrong: ['The Big Easy', 'The Big Smoke', 'The Big Peach', 'The Big D'],
      },
      {
        basic: 'Place where everyone goes out',
        advanced: 'Hot spot',
        transcription: '/ˈhɑːt spɑːt/',
        wrong: ['Hot seat', 'Hot potato', 'Hot air', 'Hot sauce'],
      },
      {
        basic: 'Middle of nowhere',
        advanced: 'The boonies',
        transcription: '/ðə ˈbuːniz/',
        wrong: ['The bunnies', 'The bonuses', 'The boulevards', 'The bridges'],
      },
      {
        basic: 'Small cheap place that is actually great',
        advanced: 'Hole-in-the-wall',
        transcription: '/ˌhoʊl ɪn ðə ˈwɔːl/',
        wrong: ['Hall of fame', 'Heart of gold', 'Home away from home', 'Head over heels'],
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
        basic: 'Very good',
        advanced: 'Fire',
        transcription: '/ˈfaɪər/',
        wrong: ['Fear', 'Fair', 'Fiber', 'Field'],
      },
      {
        basic: 'Really cool',
        advanced: 'Dope',
        transcription: '/doʊp/',
        wrong: ['Dome', 'Dime', 'Dose', 'Drape'],
      },
      {
        basic: 'Amazing',
        advanced: 'Lit',
        transcription: '/lɪt/',
        wrong: ['Lid', 'Lip', 'Lick', 'List'],
      },
      {
        basic: 'Perfect, well done',
        advanced: 'On point',
        transcription: '/ɑːn ˈpɔɪnt/',
        wrong: ['On edge', 'On hold', 'On board', 'On duty'],
      },
      {
        basic: 'Stylish and new',
        advanced: 'Fresh',
        transcription: '/freʃ/',
        wrong: ['Fraud', 'Frame', 'Fruit', 'Frost'],
      },
      {
        basic: 'Real and honest',
        advanced: 'Legit',
        transcription: '/ləˈdʒɪt/',
        wrong: ['Lethal', 'Lenient', 'Lively', 'Leisure'],
      },
      {
        basic: 'Great style',
        advanced: 'Drip',
        transcription: '/drɪp/',
        wrong: ['Drop', 'Drag', 'Draw', 'Drum'],
      },
      {
        basic: 'Looks amazing',
        advanced: 'Snatched',
        transcription: '/snætʃt/',
        wrong: ['Scratched', 'Stitched', 'Stretched', 'Scrubbed'],
      },
      {
        basic: 'Song is really good',
        advanced: 'Slaps',
        transcription: '/slæps/',
        wrong: ['Slams', 'Slips', 'Slides', 'Slopes'],
      },
      {
        basic: 'Famous and unforgettable',
        advanced: 'Iconic',
        transcription: '/aɪˈkɑːnɪk/',
        wrong: ['Ironic', 'Inbound', 'Intense', 'Inland'],
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
        basic: 'Argument between people',
        advanced: 'Beef',
        transcription: '/biːf/',
        wrong: ['Beet', 'Beach', 'Beam', 'Beard'],
      },
      {
        basic: 'Insult someone',
        advanced: 'Diss',
        transcription: '/dɪs/',
        wrong: ['Dish', 'Dip', 'Dig', 'Dim'],
      },
      {
        basic: 'Make fun of someone in a playful way',
        advanced: 'Roast',
        transcription: '/roʊst/',
        wrong: ['Roar', 'Roam', 'Rope', 'Robe'],
      },
      {
        basic: 'Insult someone in a sneaky way',
        advanced: 'Throw shade',
        transcription: '/ˌθroʊ ˈʃeɪd/',
        wrong: ['Throw up', 'Throw in', 'Throw away', 'Throw out'],
      },
      {
        basic: 'Not trustworthy',
        advanced: 'Shady',
        transcription: '/ˈʃeɪdi/',
        wrong: ['Shaky', 'Shabby', 'Shallow', 'Shaggy'],
      },
      {
        basic: 'Say mean things to scare others',
        advanced: 'Trash talk',
        transcription: '/ˈtræʃ tɔːk/',
        wrong: ['Table talk', 'Talk show', 'Tall tale', 'Tea time'],
      },
      {
        basic: 'Make peace after a fight',
        advanced: 'Bury the hatchet',
        transcription: '/ˌberi ðə ˈhætʃɪt/',
        wrong: ['Bite the bullet', 'Break the ice', 'Beat the heat', 'Burn bridges'],
      },
      {
        basic: 'Stay angry for a long time',
        advanced: 'Hold a grudge',
        transcription: '/ˌhoʊld ə ˈɡrʌdʒ/',
        wrong: ['Hold a candle', 'Hold a party', 'Hold a meeting', 'Hold a breath'],
      },
      {
        basic: 'Bitter about something small',
        advanced: 'Salty',
        transcription: '/ˈsɔːlti/',
        wrong: ['Sandy', 'Silky', 'Sugary', 'Spicy'],
      },
      {
        basic: 'Annoyed about tiny things',
        advanced: 'Petty',
        transcription: '/ˈpeti/',
        wrong: ['Pretty', 'Peachy', 'Pushy', 'Pasty'],
      },
    ],
  },
]
