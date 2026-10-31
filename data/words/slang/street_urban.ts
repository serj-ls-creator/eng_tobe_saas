// ============================================================
// STREET & URBAN — Slang
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
        wrong: ['Bully', 'Barber', 'Bandit', 'Butler'],
      },
      {
        basic: 'Friend',
        advanced: 'Homie',
        transcription: '/ˈhoʊmi/',
        wrong: ['Hobby', 'Hammer', 'Harbor', 'Hero'],
      },
      {
        basic: 'Friend group',
        advanced: 'Crew',
        transcription: '/kruː/',
        wrong: ['Crown', 'Crater', 'Crumb', 'Crane'],
      },
      {
        basic: 'Brother',
        advanced: 'Bro',
        transcription: '/broʊ/',
        wrong: ['Boy', 'Bot', 'Bow', 'Box'],
      },
      {
        basic: 'Family',
        advanced: 'Fam',
        transcription: '/fæm/',
        wrong: ['Fan', 'Fad', 'Fib', 'Fax'],
      },
      {
        basic: 'Greatest',
        advanced: 'GOAT',
        transcription: '/ɡoʊt/',
        wrong: ['Gold', 'Glove', 'Ghost', 'Gem'],
      },
      {
        basic: 'Informer',
        advanced: 'Snitch',
        transcription: '/snɪtʃ/',
        wrong: ['Sneeze', 'Snack', 'Snore', 'Sniff'],
      },
      {
        basic: 'Original',
        advanced: 'OG',
        transcription: '/ˌoʊ ˈdʒiː/',
        wrong: ['OK', 'OB', 'OT', 'OJ'],
      },
      {
        basic: 'Party pooper',
        advanced: 'Buzzkill',
        transcription: '/ˈbʌzkɪl/',
        wrong: ['Buzzard', 'Bulldog', 'Bucket', 'Butter'],
      },
      {
        basic: 'Critic',
        advanced: 'Hater',
        transcription: '/ˈheɪtər/',
        wrong: ['Hunter', 'Helper', 'Hatter', 'Hitter'],
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
        basic: 'Dollars',
        advanced: 'Bucks',
        transcription: '/bʌks/',
        wrong: ['Bugs', 'Bulbs', 'Bumps', 'Bunks'],
      },
      {
        basic: 'Thousand dollars',
        advanced: 'Grand',
        transcription: '/ɡrænd/',
        wrong: ['Grain', 'Grape', 'Grant', 'Grasp'],
      },
      {
        basic: 'Lots of money',
        advanced: 'Stacks',
        transcription: '/stæks/',
        wrong: ['Stakes', 'Stocks', 'Stairs', 'Stalks'],
      },
      {
        basic: 'Rich',
        advanced: 'Loaded',
        transcription: '/ˈloʊdɪd/',
        wrong: ['Lonely', 'Lazy', 'Lucky', 'Loyal'],
      },
      {
        basic: 'No money',
        advanced: 'Broke',
        transcription: '/broʊk/',
        wrong: ['Brook', 'Broom', 'Brave', 'Bread'],
      },
      {
        basic: 'Overpriced',
        advanced: 'Rip-off',
        transcription: '/ˈrɪp ɔːf/',
        wrong: ['Rain-check', 'Road-trip', 'Run-down', 'Roll-over'],
      },
      {
        basic: 'Take for free',
        advanced: 'Mooch',
        transcription: '/muːtʃ/',
        wrong: ['Mouse', 'Mouth', 'Mood', 'Mulch'],
      },
      {
        basic: 'Rich person',
        advanced: 'Baller',
        transcription: '/ˈbɔːlər/',
        wrong: ['Baker', 'Banker', 'Bomber', 'Bowler'],
      },
      {
        basic: 'Hundred dollars',
        advanced: 'Benjamin',
        transcription: '/ˈbendʒəmɪn/',
        wrong: ['Benefit', 'Bandana', 'Barrel', 'Biscuit'],
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
        basic: 'Work hard',
        advanced: 'Grind',
        transcription: '/ɡraɪnd/',
        wrong: ['Grape', 'Grill', 'Grunt', 'Gripe'],
      },
      {
        basic: 'Leave',
        advanced: 'Bounce',
        transcription: '/baʊns/',
        wrong: ['Bounty', 'Bounds', 'Bonus', 'Bunch'],
      },
      {
        basic: 'Relax',
        advanced: 'Chill',
        transcription: '/tʃɪl/',
        wrong: ['Chirp', 'Chunk', 'Charm', 'Churn'],
      },
      {
        basic: 'Party',
        advanced: 'Turn up',
        transcription: '/ˌtɜːrn ˈʌp/',
        wrong: ['Tune up', 'Tip up', 'Tie up', 'Take up'],
      },
      {
        basic: 'Arrive',
        advanced: 'Pull up',
        transcription: '/ˌpʊl ˈʌp/',
        wrong: ['Push up', 'Put up', 'Pass up', 'Pack up'],
      },
      {
        basic: 'Sleep',
        advanced: 'Crash',
        transcription: '/kræʃ/',
        wrong: ['Crush', 'Crawl', 'Crack', 'Cross'],
      },
      {
        basic: 'Succeed',
        advanced: 'Slay',
        transcription: '/sleɪ/',
        wrong: ['Slap', 'Slam', 'Slip', 'Slice'],
      },
      {
        basic: 'Answer back',
        advanced: 'Clap back',
        transcription: '/ˈklæp bæk/',
        wrong: ['Cut back', 'Call back', 'Crawl back', 'Climb back'],
      },
      {
        basic: 'Enjoy',
        advanced: 'Vibe',
        transcription: '/vaɪb/',
        wrong: ['Vine', 'Vial', 'Vice', 'Vase'],
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
        basic: 'Apartment',
        advanced: 'Pad',
        transcription: '/pæd/',
        wrong: ['Pan', 'Pal', 'Pit', 'Pod'],
      },
      {
        basic: 'Favorite place',
        advanced: 'Spot',
        transcription: '/spɑːt/',
        wrong: ['Spoon', 'Spore', 'Sport', 'Spout'],
      },
      {
        basic: 'Street',
        advanced: 'Block',
        transcription: '/blɑːk/',
        wrong: ['Blend', 'Bless', 'Blink', 'Bloom'],
      },
      {
        basic: 'Corner store',
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
        basic: 'Middle of nowhere',
        advanced: 'Boonies',
        transcription: '/ˈbuːniz/',
        wrong: ['Bunnies', 'Bonuses', 'Boulevards', 'Bridges'],
      },
      {
        basic: 'Cheap bar',
        advanced: 'Dive',
        transcription: '/daɪv/',
        wrong: ['Dime', 'Dine', 'Dire', 'Dirt'],
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
        basic: 'Cool',
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
        basic: 'Stylish',
        advanced: 'Fresh',
        transcription: '/freʃ/',
        wrong: ['Fraud', 'Frame', 'Fruit', 'Frost'],
      },
      {
        basic: 'Real',
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
        basic: 'Stunning',
        advanced: 'Snatched',
        transcription: '/snætʃt/',
        wrong: ['Scratched', 'Stitched', 'Stretched', 'Scrubbed'],
      },
      {
        basic: 'Great song',
        advanced: 'Slaps',
        transcription: '/slæps/',
        wrong: ['Slams', 'Slips', 'Slides', 'Slopes'],
      },
      {
        basic: 'Smooth and cool',
        advanced: 'Fly',
        transcription: '/flaɪ/',
        wrong: ['Fry', 'Flux', 'Flow', 'Fled'],
      },
      {
        basic: 'Awesome',
        advanced: 'Sick',
        transcription: '/sɪk/',
        wrong: ['Sip', 'Sink', 'Silk', 'Sign'],
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
        basic: 'Argument',
        advanced: 'Beef',
        transcription: '/biːf/',
        wrong: ['Beet', 'Beach', 'Beam', 'Beard'],
      },
      {
        basic: 'Insult',
        advanced: 'Diss',
        transcription: '/dɪs/',
        wrong: ['Dish', 'Dip', 'Dig', 'Dim'],
      },
      {
        basic: 'Clever insult',
        advanced: 'Burn',
        transcription: '/bɜːrn/',
        wrong: ['Barn', 'Bird', 'Burp', 'Burst'],
      },
      {
        basic: 'Subtle insult',
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
        basic: 'Bitter',
        advanced: 'Salty',
        transcription: '/ˈsɔːlti/',
        wrong: ['Sandy', 'Silky', 'Sugary', 'Spicy'],
      },
      {
        basic: 'Small-minded',
        advanced: 'Petty',
        transcription: '/ˈpeti/',
        wrong: ['Pretty', 'Peachy', 'Pushy', 'Pasty'],
      },
      {
        basic: 'End a fight',
        advanced: 'Squash',
        transcription: '/skwɑːʃ/',
        wrong: ['Squad', 'Squid', 'Square', 'Squish'],
      },
      {
        basic: 'Annoy',
        advanced: 'Bug',
        transcription: '/bʌɡ/',
        wrong: ['Bud', 'Bus', 'Bun', 'Bum'],
      },
      {
        basic: 'Trouble',
        advanced: 'Drama',
        transcription: '/ˈdrɑːmə/',
        wrong: ['Dream', 'Draft', 'Drawer', 'Dragon'],
      },
    ],
  },
]
