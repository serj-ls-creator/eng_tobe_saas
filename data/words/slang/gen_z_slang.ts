// ============================================================
// GEN Z SLANG
// Structure: 6 subcategories × 10 words
// Each word has: basic (plain English word), advanced (Gen Z slang word), transcription, wrong answers (4)
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

export const GEN_Z_SLANG: Subcategory[] = [

  // ─────────────────────────────────────────
  // 1. APPROVAL
  // ─────────────────────────────────────────
  {
    id: 'approval',
    name: 'Approval',
    words: [
      {
        basic: 'Delicious',
        advanced: 'Bussin',
        transcription: '/ˈbʌsɪn/',
        wrong: ['Busting', 'Bossing', 'Bonding', 'Banking'],
      },
      {
        basic: 'Special',
        advanced: 'Hits different',
        transcription: '/ˌhɪts ˈdɪfrənt/',
        wrong: ['Hits the road', 'Hits the roof', 'Hits the jackpot', 'Hits the brakes'],
      },
      {
        basic: 'Did great',
        advanced: 'Ate',
        transcription: '/eɪt/',
        wrong: ['Axe', 'Age', 'Ape', 'Ant'],
      },
      {
        basic: 'Top level',
        advanced: 'Elite',
        transcription: '/ɪˈliːt/',
        wrong: ['Elect', 'Elbow', 'Elder', 'Eleven'],
      },
      {
        basic: 'Hit song',
        advanced: 'Banger',
        transcription: '/ˈbæŋər/',
        wrong: ['Banner', 'Bandit', 'Banker', 'Barber'],
      },
      {
        basic: 'Perfect',
        advanced: 'Peak',
        transcription: '/piːk/',
        wrong: ['Peek', 'Pace', 'Pack', 'Pale'],
      },
      {
        basic: 'Intense and great',
        advanced: 'Goes hard',
        transcription: '/ˌɡoʊz ˈhɑːrd/',
        wrong: ['Goes home', 'Goes dark', 'Goes bad', 'Goes deaf'],
      },
      {
        basic: 'Flawless',
        advanced: 'Immaculate',
        transcription: '/ɪˈmækjələt/',
        wrong: ['Immature', 'Immense', 'Immune', 'Imminent'],
      },
      {
        basic: 'Helpful',
        advanced: 'Clutch',
        transcription: '/klʌtʃ/',
        wrong: ['Clutter', 'Clinch', 'Cluster', 'Clump'],
      },
      {
        basic: 'Pure and sweet',
        advanced: 'Wholesome',
        transcription: '/ˈhoʊlsəm/',
        wrong: ['Wholesale', 'Wholly', 'Whole', 'Wholehearted'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 2. DISAPPROVAL
  // ─────────────────────────────────────────
  {
    id: 'disapproval',
    name: 'Disapproval',
    words: [
      {
        basic: 'Out of style',
        advanced: 'Cheugy',
        transcription: '/ˈtʃuːɡi/',
        wrong: ['Chewy', 'Choosy', 'Chewed', 'Chunky'],
      },
      {
        basic: 'Doomed',
        advanced: 'Cooked',
        transcription: '/kʊkt/',
        wrong: ['Cooled', 'Cooped', 'Cocked', 'Crooked'],
      },
      {
        basic: 'Fail',
        advanced: 'Flop',
        transcription: '/flɑːp/',
        wrong: ['Flap', 'Flip', 'Flog', 'Flock'],
      },
      {
        basic: 'Terrible',
        advanced: 'Trash',
        transcription: '/træʃ/',
        wrong: ['Trace', 'Track', 'Trail', 'Trap'],
      },
      {
        basic: 'Boring person',
        advanced: 'NPC',
        transcription: '/ˌen piː ˈsiː/',
        wrong: ['NBA', 'NFL', 'NYC', 'NASA'],
      },
      {
        basic: 'Awkward',
        advanced: 'Yikes',
        transcription: '/jaɪks/',
        wrong: ['Yodel', 'Yogurt', 'Yachts', 'Yellow'],
      },
      {
        basic: 'Warning sign',
        advanced: 'Red flag',
        transcription: '/ˌred ˈflæɡ/',
        wrong: ['Red tape', 'Red herring', 'Red carpet', 'Red eye'],
      },
      {
        basic: 'No thanks',
        advanced: 'Hard pass',
        transcription: '/ˌhɑːrd ˈpæs/',
        wrong: ['Hard hat', 'Hard drive', 'Hard luck', 'Hard cash'],
      },
      {
        basic: 'Unrealistic',
        advanced: 'Delulu',
        transcription: '/ˈdeluːluː/',
        wrong: ['Doodle', 'Dollar', 'Dilly', 'Delay'],
      },
      {
        basic: 'Go outside',
        advanced: 'Touch grass',
        transcription: '/ˌtʌtʃ ˈɡræs/',
        wrong: ['Touch base', 'Touch wood', 'Touch screen', 'Touch up'],
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
        basic: 'Confident person',
        advanced: 'Baddie',
        transcription: '/ˈbædi/',
        wrong: ['Buddy', 'Bandit', 'Bunny', 'Babble'],
      },
      {
        basic: 'Attention seeker',
        advanced: 'Pick-me',
        transcription: '/ˈpɪk miː/',
        wrong: ['Pick-up', 'Pick-axe', 'Pickle', 'Picnic'],
      },
      {
        basic: 'Young generation',
        advanced: 'Zoomer',
        transcription: '/ˈzuːmər/',
        wrong: ['Zipper', 'Zombie', 'Zoner', 'Zealot'],
      },
      {
        basic: 'Entitled person',
        advanced: 'Karen',
        transcription: '/ˈkærən/',
        wrong: ['Karaoke', 'Kernel', 'Kennel', 'Karate'],
      },
      {
        basic: 'Famous family kid',
        advanced: 'Nepo baby',
        transcription: '/ˈnepoʊ ˌbeɪbi/',
        wrong: ['Nosy baby', 'Nerdy baby', 'Noisy baby', 'Naughty baby'],
      },
      {
        basic: 'Caring friend',
        advanced: 'Mom friend',
        transcription: '/ˈmɑːm frend/',
        wrong: ['Mom jeans', 'Mom blog', 'Mom van', 'Mom bod'],
      },
      {
        basic: 'Minor person',
        advanced: 'Side character',
        transcription: '/ˈsaɪd ˌkærɪktər/',
        wrong: ['Side dish', 'Side hustle', 'Side street', 'Side effect'],
      },
      {
        basic: 'Hero',
        advanced: 'Main character',
        transcription: '/ˌmeɪn ˈkærɪktər/',
        wrong: ['Main street', 'Main course', 'Main event', 'Main road'],
      },
      {
        basic: 'Anime fan',
        advanced: 'Weeb',
        transcription: '/wiːb/',
        wrong: ['Webb', 'Week', 'Weep', 'Wheel'],
      },
      {
        basic: 'Ordinary person',
        advanced: 'Normie',
        transcription: '/ˈnɔːrmi/',
        wrong: ['Nomad', 'Noodle', 'Nickel', 'Nugget'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 4. SITUATIONS
  // ─────────────────────────────────────────
  {
    id: 'situations',
    name: 'Situations',
    words: [
      {
        basic: 'Secretly',
        advanced: 'Lowkey',
        transcription: '/ˈloʊkiː/',
        wrong: ['Lobby', 'Lucky', 'Locket', 'Lonely'],
      },
      {
        basic: 'Openly',
        advanced: 'Highkey',
        transcription: '/ˈhaɪkiː/',
        wrong: ['Hockey', 'Haiku', 'Hippie', 'Hinge'],
      },
      {
        basic: 'Phase',
        advanced: 'Era',
        transcription: '/ˈɪrə/',
        wrong: ['Ear', 'Err', 'Eerie', 'Earl'],
      },
      {
        basic: 'Stuck in head',
        advanced: 'Rent-free',
        transcription: '/ˌrent ˈfriː/',
        wrong: ['Rent-a-car', 'Risk-free', 'Rust-free', 'Rain-free'],
      },
      {
        basic: 'Mood test',
        advanced: 'Vibe check',
        transcription: '/ˈvaɪb tʃek/',
        wrong: ['Voice check', 'Visa check', 'Value check', 'Vision check'],
      },
      {
        basic: 'Relatable',
        advanced: 'Mood',
        transcription: '/muːd/',
        wrong: ['Moon', 'Mode', 'Mold', 'Mouse'],
      },
      {
        basic: 'Out of control',
        advanced: 'Chaotic',
        transcription: '/keɪˈɑːtɪk/',
        wrong: ['Chasing', 'Cheating', 'Chatting', 'Choosing'],
      },
      {
        basic: 'Wild',
        advanced: 'Unhinged',
        transcription: '/ʌnˈhɪndʒd/',
        wrong: ['Unhooked', 'Unhappy', 'Unheard', 'Unhurt'],
      },
      {
        basic: 'Manipulate',
        advanced: 'Gaslight',
        transcription: '/ˈɡæslaɪt/',
        wrong: ['Gaslamp', 'Gasket', 'Gasp', 'Gasoline'],
      },
      {
        basic: 'Overthink',
        advanced: 'Spiral',
        transcription: '/ˈspaɪrəl/',
        wrong: ['Spinal', 'Spinach', 'Spider', 'Spice'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 5. REACTIONS
  // ─────────────────────────────────────────
  {
    id: 'reactions',
    name: 'Reactions',
    words: [
      {
        basic: 'Speechless',
        advanced: 'Gagged',
        transcription: '/ɡæɡd/',
        wrong: ['Gashed', 'Gassed', 'Gapped', 'Gazed'],
      },
      {
        basic: 'Laughing hard',
        advanced: 'Wheezing',
        transcription: '/ˈwiːzɪŋ/',
        wrong: ['Weaving', 'Wedding', 'Whining', 'Wishing'],
      },
      {
        basic: 'Impressed',
        advanced: 'Sheesh',
        transcription: '/ʃiːʃ/',
        wrong: ['Sheep', 'Sheet', 'Shell', 'Shift'],
      },
      {
        basic: 'Disappointed',
        advanced: 'Bruh',
        transcription: '/brʌ/',
        wrong: ['Brush', 'Brunt', 'Bruise', 'Brick'],
      },
      {
        basic: 'Agreed',
        advanced: 'Valid',
        transcription: '/ˈvælɪd/',
        wrong: ['Value', 'Valley', 'Vapor', 'Valor'],
      },
      {
        basic: 'Understood',
        advanced: 'Say less',
        transcription: '/ˌseɪ ˈles/',
        wrong: ['Say more', 'Say nothing', 'Say when', 'Say cheese'],
      },
      {
        basic: 'True',
        advanced: 'Facts',
        transcription: '/fækts/',
        wrong: ['Fails', 'Fakes', 'Fangs', 'Flags'],
      },
      {
        basic: 'Very excited',
        advanced: 'Screaming',
        transcription: '/ˈskriːmɪŋ/',
        wrong: ['Screening', 'Scribbling', 'Scrubbing', 'Scrambling'],
      },
      {
        basic: 'To be honest',
        advanced: 'NGL',
        transcription: '/ˌen dʒiː ˈel/',
        wrong: ['NGO', 'NHL', 'NATO', 'NCAA'],
      },
      {
        basic: 'Annoyed',
        advanced: 'Ugh',
        transcription: '/ʌɡ/',
        wrong: ['Ugly', 'Urge', 'Usher', 'Upon'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 6. INTERNET
  // ─────────────────────────────────────────
  {
    id: 'internet',
    name: 'Internet',
    words: [
      {
        basic: 'Throw',
        advanced: 'Yeet',
        transcription: '/jiːt/',
        wrong: ['Yeast', 'Yelp', 'Yield', 'Yeti'],
      },
      {
        basic: 'Dumb content',
        advanced: 'Brainrot',
        transcription: '/ˈbreɪnrɑːt/',
        wrong: ['Brainstorm', 'Braincell', 'Brainwave', 'Brainwash'],
      },
      {
        basic: 'Hidden insult post',
        advanced: 'Subtweet',
        transcription: '/ˈsʌbtwiːt/',
        wrong: ['Subtitle', 'Subway', 'Subtext', 'Sublet'],
      },
      {
        basic: 'Support a couple',
        advanced: 'Ship',
        transcription: '/ʃɪp/',
        wrong: ['Shop', 'Shed', 'Sheep', 'Shin'],
      },
      {
        basic: 'Fan community',
        advanced: 'Fandom',
        transcription: '/ˈfændəm/',
        wrong: ['Fantasy', 'Fanfare', 'Fandango', 'Fanzine'],
      },
      {
        basic: 'Delay',
        advanced: 'Lag',
        transcription: '/læɡ/',
        wrong: ['Lap', 'Lad', 'Lug', 'Lack'],
      },
      {
        basic: 'Beginner',
        advanced: 'Noob',
        transcription: '/nuːb/',
        wrong: ['Noon', 'Nook', 'Nope', 'Nose'],
      },
      {
        basic: 'Good game',
        advanced: 'GG',
        transcription: '/ˌdʒiː ˈdʒiː/',
        wrong: ['GM', 'GP', 'GO', 'GT'],
      },
      {
        basic: 'Away from keyboard',
        advanced: 'AFK',
        transcription: '/ˌeɪ ef ˈkeɪ/',
        wrong: ['ASAP', 'ATM', 'AKA', 'AWOL'],
      },
      {
        basic: 'Ruins the surprise',
        advanced: 'Spoiler',
        transcription: '/ˈspɔɪlər/',
        wrong: ['Spooler', 'Spoofer', 'Spoken', 'Spooky'],
      },
    ],
  },
]
