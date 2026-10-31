// ============================================================
// EMOTIONS & REACTIONS — Slang
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

export const EMOTIONS_REACTIONS: Subcategory[] = [

  // ─────────────────────────────────────────
  // 1. POSITIVE
  // ─────────────────────────────────────────
  {
    id: 'positive',
    name: 'Positive',
    words: [
      {
        basic: 'Excited',
        advanced: 'Hyped',
        transcription: '/haɪpt/',
        wrong: ['Hiked', 'Hoped', 'Hived', 'Hinged'],
      },
      {
        basic: 'Thrilled',
        advanced: 'Stoked',
        transcription: '/stoʊkt/',
        wrong: ['Stroke', 'Stacked', 'Stalked', 'Stocked'],
      },
      {
        basic: 'Energized',
        advanced: 'Pumped',
        transcription: '/pʌmpt/',
        wrong: ['Pasted', 'Packed', 'Pinched', 'Punched'],
      },
      {
        basic: 'Very happy',
        advanced: 'Giddy',
        transcription: '/ˈɡɪdi/',
        wrong: ['Gloomy', 'Gritty', 'Grumpy', 'Greedy'],
      },
      {
        basic: 'Peaceful',
        advanced: 'Zen',
        transcription: '/zen/',
        wrong: ['Zero', 'Zone', 'Zinc', 'Zeal'],
      },
      {
        basic: 'Cheerful',
        advanced: 'Chipper',
        transcription: '/ˈtʃɪpər/',
        wrong: ['Chipmunk', 'Chapter', 'Charter', 'Chopper'],
      },
      {
        basic: 'Glad',
        advanced: 'Jazzed',
        transcription: '/dʒæzd/',
        wrong: ['Jarred', 'Jaded', 'Jammed', 'Jabbed'],
      },
      {
        basic: 'Relaxed',
        advanced: 'Laid-back',
        transcription: '/ˌleɪd ˈbæk/',
        wrong: ['Laid-off', 'Laid-out', 'Laid-up', 'Lined-up'],
      },
      {
        basic: 'Joyful',
        advanced: 'Over the moon',
        transcription: '/ˌoʊvər ðə ˈmuːn/',
        wrong: ['Over the hill', 'Over the top', 'Over the edge', 'Over the line'],
      },
      {
        basic: 'Delighted',
        advanced: 'Tickled',
        transcription: '/ˈtɪkld/',
        wrong: ['Tackled', 'Tilted', 'Ticked', 'Tugged'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 2. NEGATIVE
  // ─────────────────────────────────────────
  {
    id: 'negative',
    name: 'Negative',
    words: [
      {
        basic: 'Irritated',
        advanced: 'Ticked off',
        transcription: '/ˌtɪkt ˈɔːf/',
        wrong: ['Tipped off', 'Ticked on', 'Tied up', 'Torn off'],
      },
      {
        basic: 'Very angry',
        advanced: 'Livid',
        transcription: '/ˈlɪvɪd/',
        wrong: ['Lively', 'Lucid', 'Liquid', 'Lurid'],
      },
      {
        basic: 'Angry',
        advanced: 'Fuming',
        transcription: '/ˈfjuːmɪŋ/',
        wrong: ['Fumbling', 'Fading', 'Filming', 'Fussing'],
      },
      {
        basic: 'Sad',
        advanced: 'Bummed',
        transcription: '/bʌmd/',
        wrong: ['Bumped', 'Bunched', 'Banned', 'Bombed'],
      },
      {
        basic: 'Very sad',
        advanced: 'Gutted',
        transcription: '/ˈɡʌtɪd/',
        wrong: ['Gutter', 'Gusted', 'Gifted', 'Gasped'],
      },
      {
        basic: 'Done with it',
        advanced: 'Over it',
        transcription: '/ˌoʊvər ˈɪt/',
        wrong: ['Over time', 'Over easy', 'Over here', 'Over there'],
      },
      {
        basic: 'Jealous',
        advanced: 'Jelly',
        transcription: '/ˈdʒeli/',
        wrong: ['Jolly', 'Jewel', 'Jersey', 'Jumpy'],
      },
      {
        basic: 'Stressed',
        advanced: 'Frazzled',
        transcription: '/ˈfræzəld/',
        wrong: ['Frosted', 'Fizzled', 'Freckled', 'Fastened'],
      },
      {
        basic: 'Restless',
        advanced: 'Antsy',
        transcription: '/ˈæntsi/',
        wrong: ['Artsy', 'Aunty', 'Antique', 'Ancient'],
      },
      {
        basic: 'Tired of it',
        advanced: 'Fed up',
        transcription: '/ˌfed ˈʌp/',
        wrong: ['Fill up', 'Fold up', 'Fire up', 'Fix up'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 3. SURPRISE
  // ─────────────────────────────────────────
  {
    id: 'surprise',
    name: 'Surprise',
    words: [
      {
        basic: 'Very shocked',
        advanced: 'Gobsmacked',
        transcription: '/ˈɡɑːbsmækt/',
        wrong: ['Gobbled', 'Goggled', 'Gossiped', 'Grabbed'],
      },
      {
        basic: 'Very impressed',
        advanced: 'Blown away',
        transcription: '/ˌbloʊn əˈweɪ/',
        wrong: ['Blown up', 'Blown out', 'Blown over', 'Blown off'],
      },
      {
        basic: 'Stunned',
        advanced: 'Floored',
        transcription: '/flɔːrd/',
        wrong: ['Flooded', 'Flaked', 'Flavored', 'Flared'],
      },
      {
        basic: 'Surprised',
        advanced: 'Taken aback',
        transcription: '/ˌteɪkən əˈbæk/',
        wrong: ['Taken apart', 'Taken away', 'Taken down', 'Taken over'],
      },
      {
        basic: 'Totally amazed',
        advanced: 'Mindblown',
        transcription: '/ˈmaɪndbloʊn/',
        wrong: ['Mindful', 'Minded', 'Mincing', 'Minted'],
      },
      {
        basic: 'Unexpected',
        advanced: 'Out of nowhere',
        transcription: '/ˌaʊt əv ˈnoʊwer/',
        wrong: ['Out of order', 'Out of luck', 'Out of reach', 'Out of tune'],
      },
      {
        basic: 'Crazy',
        advanced: 'Insane',
        transcription: '/ɪnˈseɪn/',
        wrong: ['Intact', 'Incite', 'Inflate', 'Insight'],
      },
      {
        basic: 'Surprise sound',
        advanced: 'Whoa',
        transcription: '/woʊ/',
        wrong: ['Wag', 'Wax', 'Web', 'Wig'],
      },
      {
        basic: 'Unbelievable',
        advanced: 'No way',
        transcription: '/ˌnoʊ ˈweɪ/',
        wrong: ['No clue', 'No chance', 'No rush', 'No doubt'],
      },
      {
        basic: 'Startled',
        advanced: 'Spooked',
        transcription: '/spuːkt/',
        wrong: ['Spoiled', 'Spotted', 'Spoken', 'Spooled'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 4. INTENSITY
  // ─────────────────────────────────────────
  {
    id: 'intensity',
    name: 'Intensity',
    words: [
      {
        basic: 'Very tired',
        advanced: 'Wiped out',
        transcription: '/ˌwaɪpt ˈaʊt/',
        wrong: ['Wiped up', 'Wiped off', 'Wiped away', 'Wiped down'],
      },
      {
        basic: 'Exhausted',
        advanced: 'Drained',
        transcription: '/dreɪnd/',
        wrong: ['Drowned', 'Dreamed', 'Dragged', 'Drafted'],
      },
      {
        basic: 'Burnt out',
        advanced: 'Fried',
        transcription: '/fraɪd/',
        wrong: ['Freed', 'Framed', 'Frowned', 'Frozen'],
      },
      {
        basic: 'Full of energy',
        advanced: 'Fired up',
        transcription: '/ˌfaɪərd ˈʌp/',
        wrong: ['Filled up', 'Fixed up', 'Folded up', 'Faded up'],
      },
      {
        basic: 'Panicking',
        advanced: 'Freaked out',
        transcription: '/ˌfriːkt ˈaʊt/',
        wrong: ['Fixed out', 'Fell out', 'Flaked out', 'Faded out'],
      },
      {
        basic: 'Overloaded',
        advanced: 'Swamped',
        transcription: '/swɑːmpt/',
        wrong: ['Swapped', 'Stamped', 'Swayed', 'Swiped'],
      },
      {
        basic: 'Very upset',
        advanced: 'Wrecked',
        transcription: '/rekt/',
        wrong: ['Wrapped', 'Wrestled', 'Wrinkled', 'Whisked'],
      },
      {
        basic: 'Going crazy',
        advanced: 'Losing it',
        transcription: '/ˌluːzɪŋ ˈɪt/',
        wrong: ['Losing out', 'Losing face', 'Losing track', 'Losing weight'],
      },
      {
        basic: 'Addicted',
        advanced: 'Hooked',
        transcription: '/hʊkt/',
        wrong: ['Hooped', 'Hacked', 'Hunted', 'Hushed'],
      },
      {
        basic: 'Out of breath',
        advanced: 'Gassed',
        transcription: '/ɡæst/',
        wrong: ['Gashed', 'Gazed', 'Gasped', 'Gagged'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 5. SOCIAL
  // ─────────────────────────────────────────
  {
    id: 'social',
    name: 'Social',
    words: [
      {
        basic: 'Not interested',
        advanced: 'Meh',
        transcription: '/me/',
        wrong: ['Mew', 'Mud', 'Mop', 'Map'],
      },
      {
        basic: 'Close friends',
        advanced: 'Tight',
        transcription: '/taɪt/',
        wrong: ['Tilt', 'Tile', 'Tide', 'Tick'],
      },
      {
        basic: 'Nervous and confused',
        advanced: 'Flustered',
        transcription: '/ˈflʌstərd/',
        wrong: ['Fluttered', 'Flattered', 'Flowered', 'Flurried'],
      },
      {
        basic: 'Liking someone',
        advanced: 'Crushing',
        transcription: '/ˈkrʌʃɪŋ/',
        wrong: ['Crashing', 'Crossing', 'Crunching', 'Crawling'],
      },
      {
        basic: 'Get along',
        advanced: 'Click',
        transcription: '/klɪk/',
        wrong: ['Clip', 'Clap', 'Clink', 'Cling'],
      },
      {
        basic: 'Fake friendly',
        advanced: 'Two-faced',
        transcription: '/ˌtuː ˈfeɪst/',
        wrong: ['Two-fold', 'Two-timed', 'Two-way', 'Two-piece'],
      },
      {
        basic: 'Brutally honest',
        advanced: 'Savage',
        transcription: '/ˈsævɪdʒ/',
        wrong: ['Sausage', 'Savior', 'Savings', 'Salvage'],
      },
      {
        basic: 'Share frustration',
        advanced: 'Vent',
        transcription: '/vent/',
        wrong: ['Veil', 'Vein', 'Vest', 'Verb'],
      },
      {
        basic: 'Unwanted company',
        advanced: 'Third wheel',
        transcription: '/ˌθɜːrd ˈwiːl/',
        wrong: ['Third degree', 'Third party', 'Third place', 'Third base'],
      },
      {
        basic: 'Just friends',
        advanced: 'Friend zone',
        transcription: '/ˈfrend zoʊn/',
        wrong: ['Friend list', 'Friend group', 'Free zone', 'Fun zone'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 6. ONLINE
  // ─────────────────────────────────────────
  {
    id: 'online',
    name: 'Online',
    words: [
      {
        basic: 'Criticize harshly',
        advanced: 'Drag',
        transcription: '/dræɡ/',
        wrong: ['Drum', 'Drain', 'Draft', 'Drawl'],
      },
      {
        basic: 'Make fun of',
        advanced: 'Clown',
        transcription: '/klaʊn/',
        wrong: ['Cloud', 'Clove', 'Clone', 'Clasp'],
      },
      {
        basic: 'Mock publicly',
        advanced: 'Dunk',
        transcription: '/dʌŋk/',
        wrong: ['Dusk', 'Dump', 'Dunce', 'Dunes'],
      },
      {
        basic: 'Secret account',
        advanced: 'Burner',
        transcription: '/ˈbɜːrnər/',
        wrong: ['Burger', 'Barber', 'Bummer', 'Butler'],
      },
      {
        basic: 'Online fight',
        advanced: 'Flame war',
        transcription: '/ˌfleɪm ˈwɔːr/',
        wrong: ['Flash war', 'Fan war', 'Flag war', 'Food war'],
      },
      {
        basic: 'Exposed publicly',
        advanced: 'Called out',
        transcription: '/ˌkɔːld ˈaʊt/',
        wrong: ['Called off', 'Called up', 'Called in', 'Called back'],
      },
      {
        basic: 'Beaten badly',
        advanced: 'Owned',
        transcription: '/oʊnd/',
        wrong: ['Opened', 'Ordered', 'Offered', 'Oiled'],
      },
      {
        basic: 'Reveal secretly',
        advanced: 'Leak',
        transcription: '/liːk/',
        wrong: ['Lick', 'Lake', 'Lead', 'Leap'],
      },
      {
        basic: 'Sarcasm',
        advanced: 'Snark',
        transcription: '/snɑːrk/',
        wrong: ['Shark', 'Snack', 'Spark', 'Stark'],
      },
      {
        basic: 'Encourage',
        advanced: 'Hype up',
        transcription: '/ˌhaɪp ˈʌp/',
        wrong: ['Hike up', 'Hold up', 'Hang up', 'Hurry up'],
      },
    ],
  },
]
