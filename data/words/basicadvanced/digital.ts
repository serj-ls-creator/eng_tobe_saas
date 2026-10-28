// ============================================================
// DIGITAL — Basic → Advanced vocabulary
// Structure: 10 subcategories × 10 words
// Each word has: basic, advanced, transcription, wrong answers (4)
// Used in quiz: show basic word → pick correct advanced synonym
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

export const DIGITAL: Subcategory[] = [

  // ─────────────────────────────────────────
  // 1. DEVICES
  // ─────────────────────────────────────────
  {
    id: 'devices',
    name: 'Devices',
    words: [
      {
        basic: 'Everywhere',
        advanced: 'Ubiquitous',
        transcription: '/juːˈbɪkwɪtəs/',
        wrong: ['Unanimous', 'Unconscious', 'Unpredictable', 'Unstoppable'],
      },
      {
        basic: 'Easy to use',
        advanced: 'Intuitive',
        transcription: '/ɪnˈtuːɪtɪv/',
        wrong: ['Intensive', 'Intrusive', 'Incentive', 'Inventive'],
      },
      {
        basic: 'Looks like it is from the future',
        advanced: 'Futuristic',
        transcription: '/ˌfjuːtʃəˈrɪstɪk/',
        wrong: ['Fantastic', 'Fashionable', 'Frantic', 'Fraudulent'],
      },
      {
        basic: 'Hard to break',
        advanced: 'Rugged',
        transcription: '/ˈrʌɡɪd/',
        wrong: ['Radiant', 'Rapid', 'Reckless', 'Reluctant'],
      },
      {
        basic: 'Newest and a bit risky',
        advanced: 'Bleeding-edge',
        transcription: '/ˌbliːdɪŋ ˈedʒ/',
        wrong: ['Blood-red', 'Bullet-proof', 'Back-to-back', 'Bite-sized'],
      },
      {
        basic: 'Connected to everything',
        advanced: 'Hyperconnected',
        transcription: '/ˌhaɪpərkəˈnektɪd/',
        wrong: ['Hyperactive', 'Hypersensitive', 'Hypothetical', 'Hysterical'],
      },
      {
        basic: 'Works right away',
        advanced: 'Plug-and-play',
        transcription: '/ˌplʌɡ ən ˈpleɪ/',
        wrong: ['Pick-and-choose', 'Push-and-pull', 'Pros-and-cons', 'Pay-per-view'],
      },
      {
        basic: 'Slow and awkward',
        advanced: 'Clunky',
        transcription: '/ˈklʌŋki/',
        wrong: ['Chunky', 'Cranky', 'Cheeky', 'Cloudy'],
      },
      {
        basic: 'Latest and best technology',
        advanced: 'State-of-the-art',
        transcription: '/ˌsteɪt əv ði ˈɑːrt/',
        wrong: ['State-of-mind', 'Side-by-side', 'Step-by-step', 'Sink-or-swim'],
      },
      {
        basic: 'Very fast',
        advanced: 'Lightning-fast',
        transcription: '/ˌlaɪtnɪŋ ˈfæst/',
        wrong: ['Lightweight', 'Lifelong', 'Lukewarm', 'Long-lasting'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 2. INTERNET
  // ─────────────────────────────────────────
  {
    id: 'internet',
    name: 'Internet',
    words: [
      {
        basic: 'Spend hours clicking from page to page',
        advanced: 'Rabbit hole',
        transcription: '/ˈræbɪt hoʊl/',
        wrong: ['Rat race', 'Red tape', 'Rock bottom', 'Rainy day'],
      },
      {
        basic: 'Only hear opinions you agree with',
        advanced: 'Echo chamber',
        transcription: '/ˈekoʊ ˌtʃeɪmbər/',
        wrong: ['Early bird', 'Easy street', 'Even keel', 'Eleventh hour'],
      },
      {
        basic: 'Website you must pay to read',
        advanced: 'Paywall',
        transcription: '/ˈpeɪwɔːl/',
        wrong: ['Payroll', 'Paycheck', 'Payload', 'Pathway'],
      },
      {
        basic: 'Title that tricks you into clicking',
        advanced: 'Clickbait',
        transcription: '/ˈklɪkbeɪt/',
        wrong: ['Clipboard', 'Cliffhanger', 'Clearance', 'Classroom'],
      },
      {
        basic: 'Make internet slower on purpose',
        advanced: 'Throttle',
        transcription: '/ˈθrɑːtl/',
        wrong: ['Thistle', 'Trundle', 'Tremble', 'Trample'],
      },
      {
        basic: 'Read online without posting',
        advanced: 'Lurk',
        transcription: '/lɜːrk/',
        wrong: ['Lurch', 'Lunge', 'Lick', 'Lark'],
      },
      {
        basic: 'Trail you leave online',
        advanced: 'Digital footprint',
        transcription: '/ˌdɪdʒɪtl ˈfʊtprɪnt/',
        wrong: ['Digital forecast', 'Digital fashion', 'Digital fortune', 'Digital furniture'],
      },
      {
        basic: 'No problems or breaks',
        advanced: 'Seamless',
        transcription: '/ˈsiːmləs/',
        wrong: ['Spotless', 'Shameless', 'Sleepless', 'Selfless'],
      },
      {
        basic: 'Too much information at once',
        advanced: 'Deluge',
        transcription: '/ˈdeljuːdʒ/',
        wrong: ['Delegate', 'Delusion', 'Deluxe', 'Delight'],
      },
      {
        basic: 'Take a break from screens',
        advanced: 'Unplug',
        transcription: '/ʌnˈplʌɡ/',
        wrong: ['Unfold', 'Uphold', 'Undress', 'Undo'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 3. SOCIAL MEDIA
  // ─────────────────────────────────────────
  {
    id: 'social-media',
    name: 'Social Media',
    words: [
      {
        basic: 'Make it reach more people',
        advanced: 'Amplify',
        transcription: '/ˈæmplɪfaɪ/',
        wrong: ['Accuse', 'Admire', 'Annoy', 'Applaud'],
      },
      {
        basic: 'Famous online',
        advanced: 'Viral',
        transcription: '/ˈvaɪrəl/',
        wrong: ['Visual', 'Virtual', 'Visible', 'Variable'],
      },
      {
        basic: 'Online famous person',
        advanced: 'Influencer',
        transcription: '/ˈɪnfluənsər/',
        wrong: ['Investor', 'Inspector', 'Instructor', 'Interviewer'],
      },
      {
        basic: 'Person who starts online fights',
        advanced: 'Troll',
        transcription: '/troʊl/',
        wrong: ['Tourist', 'Trader', 'Tutor', 'Trainer'],
      },
      {
        basic: 'Choose only the best to show',
        advanced: 'Curate',
        transcription: '/ˈkjʊreɪt/',
        wrong: ['Cancel', 'Capture', 'Crumble', 'Cripple'],
      },
      {
        basic: 'One-sided online relationship',
        advanced: 'Parasocial',
        transcription: '/ˌperəˈsoʊʃəl/',
        wrong: ['Peripheral', 'Paranormal', 'Parallel', 'Paternal'],
      },
      {
        basic: 'Feeling left out',
        advanced: 'FOMO',
        transcription: '/ˈfoʊmoʊ/',
        wrong: ['FAQ', 'FBI', 'FYI', 'FIFA'],
      },
      {
        basic: 'Stop replying to someone',
        advanced: 'Ghost',
        transcription: '/ɡoʊst/',
        wrong: ['Guest', 'Guard', 'Giggle', 'Gamble'],
      },
      {
        basic: 'Lasts only a short time',
        advanced: 'Ephemeral',
        transcription: '/ɪˈfemərəl/',
        wrong: ['Eternal', 'Elegant', 'Enormous', 'Essential'],
      },
      {
        basic: 'Read bad news for hours',
        advanced: 'Doomscroll',
        transcription: '/ˈduːmskroʊl/',
        wrong: ['Daydream', 'Dismiss', 'Dodge', 'Download'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 4. WORK TOOLS
  // ─────────────────────────────────────────
  {
    id: 'work-tools',
    name: 'Work Tools',
    words: [
      {
        basic: 'Not enough time or energy',
        advanced: 'Bandwidth',
        transcription: '/ˈbændwɪdθ/',
        wrong: ['Bandage', 'Bandwagon', 'Boundary', 'Bargain'],
      },
      {
        basic: 'Do it again and again to improve',
        advanced: 'Iterate',
        transcription: '/ˈɪtəreɪt/',
        wrong: ['Irritate', 'Imitate', 'Integrate', 'Illustrate'],
      },
      {
        basic: 'Problem that annoys customers',
        advanced: 'Pain point',
        transcription: '/ˈpeɪn pɔɪnt/',
        wrong: ['Pen pal', 'Pie chart', 'Pay raise', 'Pit stop'],
      },
      {
        basic: 'Quick and flexible',
        advanced: 'Agile',
        transcription: '/ˈædʒəl/',
        wrong: ['Ample', 'Acute', 'Austere', 'Ancient'],
      },
      {
        basic: 'Put things off',
        advanced: 'Procrastinate',
        transcription: '/proʊˈkræstɪneɪt/',
        wrong: ['Participate', 'Persuade', 'Perfect', 'Pretend'],
      },
      {
        basic: 'Work very late at night',
        advanced: 'Burn the midnight oil',
        transcription: '/ˌbɜːrn ðə ˌmɪdnaɪt ˈɔɪl/',
        wrong: ['Bite the bullet', 'Break the ice', 'Beat around the bush', 'Bury the hatchet'],
      },
      {
        basic: 'Make it simpler and faster',
        advanced: 'Streamline',
        transcription: '/ˈstriːmlaɪn/',
        wrong: ['Sacrifice', 'Stagger', 'Scatter', 'Sabotage'],
      },
      {
        basic: 'Person who cares about the project',
        advanced: 'Stakeholder',
        transcription: '/ˈsteɪkhoʊldər/',
        wrong: ['Stockbroker', 'Storekeeper', 'Spokesperson', 'Statesman'],
      },
      {
        basic: 'Huge goal that seems impossible',
        advanced: 'Moonshot',
        transcription: '/ˈmuːnʃɑːt/',
        wrong: ['Mugshot', 'Milestone', 'Mastermind', 'Masterpiece'],
      },
      {
        basic: 'Quick team talk',
        advanced: 'Huddle',
        transcription: '/ˈhʌdl/',
        wrong: ['Hurdle', 'Hassle', 'Hurtle', 'Hurry'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 5. COMMUNICATION
  // ─────────────────────────────────────────
  {
    id: 'communication',
    name: 'Communication',
    words: [
      {
        basic: 'Read a message and not reply',
        advanced: 'Leave on read',
        transcription: '/ˌliːv ɑːn ˈred/',
        wrong: ['Leave in peace', 'Lay on thick', 'Let it slide', 'Lead by example'],
      },
      {
        basic: 'Talk about it again later',
        advanced: 'Circle back',
        transcription: '/ˌsɜːrkəl ˈbæk/',
        wrong: ['Cut back', 'Cave in', 'Chip in', 'Crack up'],
      },
      {
        basic: 'Add someone to the conversation',
        advanced: 'Loop in',
        transcription: '/ˌluːp ˈɪn/',
        wrong: ['Lock in', 'Lay in', 'Lean in', 'Lie in'],
      },
      {
        basic: 'Not understanding each other',
        advanced: 'Miscommunication',
        transcription: '/ˌmɪskəˌmjuːnɪˈkeɪʃən/',
        wrong: ['Misfortune', 'Mismatch', 'Mischief', 'Mistrust'],
      },
      {
        basic: 'Using too many words',
        advanced: 'Verbose',
        transcription: '/vɜːrˈboʊs/',
        wrong: ['Verbal', 'Vibrant', 'Vulnerable', 'Valuable'],
      },
      {
        basic: 'Short and clear',
        advanced: 'Succinct',
        transcription: '/səkˈsɪŋkt/',
        wrong: ['Subtle', 'Sincere', 'Stubborn', 'Sufficient'],
      },
      {
        basic: 'Honest and direct',
        advanced: 'Candid',
        transcription: '/ˈkændɪd/',
        wrong: ['Casual', 'Cunning', 'Careless', 'Cordial'],
      },
      {
        basic: 'Seem a certain way to others',
        advanced: 'Come across',
        transcription: '/ˌkʌm əˈkrɔːs/',
        wrong: ['Come around', 'Come along', 'Come through', 'Come apart'],
      },
      {
        basic: 'Hidden meaning in a message',
        advanced: 'Subtext',
        transcription: '/ˈsʌbtekst/',
        wrong: ['Subway', 'Subtitle', 'Substance', 'Sunset'],
      },
      {
        basic: 'Strong opinion to get attention',
        advanced: 'Hot take',
        transcription: '/ˌhɑːt ˈteɪk/',
        wrong: ['Hard sell', 'High five', 'Hot seat', 'Home run'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 6. DATA
  // ─────────────────────────────────────────
  {
    id: 'data',
    name: 'Data',
    words: [
      {
        basic: 'Remove names from data',
        advanced: 'Anonymize',
        transcription: '/əˈnɑːnəmaɪz/',
        wrong: ['Apologize', 'Analyze', 'Authorize', 'Advertise'],
      },
      {
        basic: 'Divide into groups',
        advanced: 'Segment',
        transcription: '/seɡˈment/',
        wrong: ['Settle', 'Scatter', 'Squeeze', 'Sacrifice'],
      },
      {
        basic: 'Link between two things',
        advanced: 'Correlation',
        transcription: '/ˌkɔːrəˈleɪʃən/',
        wrong: ['Corporation', 'Coordination', 'Collaboration', 'Contemplation'],
      },
      {
        basic: 'Guess the future from data',
        advanced: 'Extrapolate',
        transcription: '/ɪkˈstræpəleɪt/',
        wrong: ['Evaporate', 'Evaluate', 'Elaborate', 'Exaggerate'],
      },
      {
        basic: 'Growing faster and faster',
        advanced: 'Exponential',
        transcription: '/ˌekspəˈnenʃəl/',
        wrong: ['Exceptional', 'Experimental', 'Extensional', 'Existential'],
      },
      {
        basic: 'One that does not fit the pattern',
        advanced: 'Outlier',
        transcription: '/ˈaʊtlaɪər/',
        wrong: ['Outfielder', 'Outlaw', 'Outburst', 'Outfit'],
      },
      {
        basic: 'Based on real tests',
        advanced: 'Empirical',
        transcription: '/ɪmˈpɪrɪkəl/',
        wrong: ['Emotional', 'Empathetic', 'Elegant', 'Enthusiastic'],
      },
      {
        basic: 'Not fair',
        advanced: 'Biased',
        transcription: '/ˈbaɪəst/',
        wrong: ['Blessed', 'Blamed', 'Bored', 'Brave'],
      },
      {
        basic: 'Make results look wrong',
        advanced: 'Skew',
        transcription: '/skjuː/',
        wrong: ['Scoop', 'Scold', 'Skate', 'Skim'],
      },
      {
        basic: 'Useful thing you learn from data',
        advanced: 'Insight',
        transcription: '/ˈɪnsaɪt/',
        wrong: ['Incident', 'Insect', 'Install', 'Island'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 7. SECURITY
  // ─────────────────────────────────────────
  {
    id: 'security',
    name: 'Security',
    words: [
      {
        basic: 'Hack',
        advanced: 'Breach',
        transcription: '/briːtʃ/',
        wrong: ['Bridge', 'Branch', 'Bucket', 'Bundle'],
      },
      {
        basic: 'Virus that locks your files for money',
        advanced: 'Ransomware',
        transcription: '/ˈrænsəmwer/',
        wrong: ['Ransack', 'Rainwear', 'Roadwork', 'Restaurant'],
      },
      {
        basic: 'Email that steals your info',
        advanced: 'Phishing',
        transcription: '/ˈfɪʃɪŋ/',
        wrong: ['Pitching', 'Pushing', 'Packing', 'Posting'],
      },
      {
        basic: 'Weak spot in a system',
        advanced: 'Vulnerability',
        transcription: '/ˌvʌlnərəˈbɪləti/',
        wrong: ['Versatility', 'Visibility', 'Viability', 'Validity'],
      },
      {
        basic: 'Danger no one knew about',
        advanced: 'Zero-day',
        transcription: '/ˌzɪroʊ ˈdeɪ/',
        wrong: ['Zero-sum', 'Zero-gravity', 'Zero-waste', 'Zero-point'],
      },
      {
        basic: 'Fake name online',
        advanced: 'Alias',
        transcription: '/ˈeɪliəs/',
        wrong: ['Alibi', 'Album', 'Alloy', 'Alley'],
      },
      {
        basic: 'Trick people into giving secrets',
        advanced: 'Social engineering',
        transcription: '/ˌsoʊʃəl endʒɪˈnɪrɪŋ/',
        wrong: ['Social security', 'Sound engineering', 'Solar energy', 'Special effects'],
      },
      {
        basic: 'Scramble data so no one can read it',
        advanced: 'Encrypt',
        transcription: '/ɪnˈkrɪpt/',
        wrong: ['Excerpt', 'Emerge', 'Embrace', 'Enroll'],
      },
      {
        basic: 'Safe space to test things',
        advanced: 'Sandbox',
        transcription: '/ˈsændbɑːks/',
        wrong: ['Sandwich', 'Sandstorm', 'Saltbox', 'Soapbox'],
      },
      {
        basic: 'Watching people closely',
        advanced: 'Surveillance',
        transcription: '/sərˈveɪləns/',
        wrong: ['Sustenance', 'Surrender', 'Surplus', 'Sentence'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 8. AUTOMATION
  // ─────────────────────────────────────────
  {
    id: 'automation',
    name: 'Automation',
    words: [
      {
        basic: 'AI makes up false facts',
        advanced: 'Hallucinate',
        transcription: '/həˈluːsɪneɪt/',
        wrong: ['Hesitate', 'Hibernate', 'Hypnotize', 'Hyphenate'],
      },
      {
        basic: 'Fake video made with AI',
        advanced: 'Deepfake',
        transcription: '/ˈdiːpfeɪk/',
        wrong: ['Deepfreeze', 'Deadline', 'Daydream', 'Doorbell'],
      },
      {
        basic: 'Instruction you give to AI',
        advanced: 'Prompt',
        transcription: '/prɑːmpt/',
        wrong: ['Profit', 'Problem', 'Promise', 'Proof'],
      },
      {
        basic: 'Smart rule',
        advanced: 'Algorithm',
        transcription: '/ˈælɡərɪðəm/',
        wrong: ['Alligator', 'Almanac', 'Alphabet', 'Altitude'],
      },
      {
        basic: 'Self-running',
        advanced: 'Autonomous',
        transcription: '/ɔːˈtɑːnəməs/',
        wrong: ['Anonymous', 'Ambitious', 'Abandoned', 'Absolute'],
      },
      {
        basic: 'Computer system that works like a brain',
        advanced: 'Neural network',
        transcription: '/ˌnʊrəl ˈnetwɜːrk/',
        wrong: ['Neutral network', 'Nuclear network', 'Natural network', 'Narrow network'],
      },
      {
        basic: 'AI that creates new things',
        advanced: 'Generative',
        transcription: '/ˈdʒenərətɪv/',
        wrong: ['Generous', 'Genuine', 'Gentle', 'Gradual'],
      },
      {
        basic: 'System no one can explain',
        advanced: 'Black box',
        transcription: '/ˌblæk ˈbɑːks/',
        wrong: ['Black hole', 'Blue chip', 'Big bang', 'Brain drain'],
      },
      {
        basic: 'Quickly work through lots of numbers',
        advanced: 'Crunch',
        transcription: '/krʌntʃ/',
        wrong: ['Crouch', 'Cringe', 'Crumble', 'Crank'],
      },
      {
        basic: 'Able to think and feel',
        advanced: 'Sentient',
        transcription: '/ˈsenʃənt/',
        wrong: ['Sentimental', 'Sensible', 'Sensitive', 'Silent'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 9. TRENDS
  // ─────────────────────────────────────────
  {
    id: 'trends',
    name: 'Trends',
    words: [
      {
        basic: 'Spirit of the times',
        advanced: 'Zeitgeist',
        transcription: '/ˈzaɪtɡaɪst/',
        wrong: ['Zephyr', 'Zenith', 'Zealot', 'Zucchini'],
      },
      {
        basic: 'Too old to use',
        advanced: 'Obsolete',
        transcription: '/ˌɑːbsəˈliːt/',
        wrong: ['Optional', 'Offline', 'Original', 'Organic'],
      },
      {
        basic: 'Big change',
        advanced: 'Disruption',
        transcription: '/dɪsˈrʌpʃən/',
        wrong: ['Distraction', 'Dedication', 'Description', 'Decoration'],
      },
      {
        basic: 'Hot topic',
        advanced: 'Buzzword',
        transcription: '/ˈbʌzwɜːrd/',
        wrong: ['Bumblebee', 'Buttercup', 'Backbone', 'Buckle'],
      },
      {
        basic: 'So embarrassing it hurts',
        advanced: 'Cringe',
        transcription: '/krɪndʒ/',
        wrong: ['Crinkle', 'Cramp', 'Crumb', 'Crave'],
      },
      {
        basic: 'Ahead of time',
        advanced: 'Cutting-edge',
        transcription: '/ˌkʌtɪŋ ˈedʒ/',
        wrong: ['Cut-throat', 'Cut-out', 'Cut-down', 'Cold-case'],
      },
      {
        basic: 'Suddenly get very popular',
        advanced: 'Blow up',
        transcription: '/ˌbloʊ ˈʌp/',
        wrong: ['Back up', 'Break up', 'Build up', 'Burn up'],
      },
      {
        basic: 'Too much excitement',
        advanced: 'Hype',
        transcription: '/haɪp/',
        wrong: ['Hive', 'Hike', 'Hippo', 'Hinge'],
      },
      {
        basic: 'Spread very fast',
        advanced: 'Proliferate',
        transcription: '/prəˈlɪfəreɪt/',
        wrong: ['Perforate', 'Pontificate', 'Penetrate', 'Persevere'],
      },
      {
        basic: 'Missing the good old days',
        advanced: 'Nostalgia',
        transcription: '/nɑːˈstældʒə/',
        wrong: ['Neuralgia', 'Nausea', 'Narrative', 'Nostril'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 10. STARTUP
  // ─────────────────────────────────────────
  {
    id: 'startup',
    name: 'Startup',
    words: [
      {
        basic: 'Start with your own money',
        advanced: 'Bootstrap',
        transcription: '/ˈbuːtstræp/',
        wrong: ['Bookshelf', 'Backstage', 'Boardwalk', 'Bodyguard'],
      },
      {
        basic: 'Change plan',
        advanced: 'Pivot',
        transcription: '/ˈpɪvət/',
        wrong: ['Plunge', 'Prowl', 'Plead', 'Pursue'],
      },
      {
        basic: 'Startup worth over a billion dollars',
        advanced: 'Unicorn',
        transcription: '/ˈjuːnɪkɔːrn/',
        wrong: ['Umbrella', 'Uniform', 'Unicycle', 'University'],
      },
      {
        basic: 'Work very hard to succeed',
        advanced: 'Hustle',
        transcription: '/ˈhʌsəl/',
        wrong: ['Hassle', 'Hurdle', 'Hurry', 'Harvest'],
      },
      {
        basic: 'Make money from it',
        advanced: 'Monetize',
        transcription: '/ˈmɑːnətaɪz/',
        wrong: ['Memorize', 'Modernize', 'Mobilize', 'Motivate'],
      },
      {
        basic: 'Short talk to get investors',
        advanced: 'Pitch',
        transcription: '/pɪtʃ/',
        wrong: ['Patch', 'Pinch', 'Pouch', 'Punch'],
      },
      {
        basic: 'Starting to get customers',
        advanced: 'Traction',
        transcription: '/ˈtrækʃən/',
        wrong: ['Tractor', 'Tradition', 'Tension', 'Transaction'],
      },
      {
        basic: 'Time before the money runs out',
        advanced: 'Runway',
        transcription: '/ˈrʌnweɪ/',
        wrong: ['Railroad', 'Roadway', 'Rooftop', 'Riverbank'],
      },
      {
        basic: 'Customers who stop using it',
        advanced: 'Churn',
        transcription: '/tʃɜːrn/',
        wrong: ['Charm', 'Chirp', 'Chunk', 'Chill'],
      },
      {
        basic: 'Can grow easily',
        advanced: 'Scalable',
        transcription: '/ˈskeɪləbəl/',
        wrong: ['Sociable', 'Suitable', 'Sustainable', 'Salvageable'],
      },
    ],
  },
]
