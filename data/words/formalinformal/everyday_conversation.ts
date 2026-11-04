// ============================================================
// EVERYDAY CONVERSATION — Informal/slang vs formal equivalents
// Structure: 6 subcategories × 10 words
// basic = informal word/phrase, advanced = its formal equivalent
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

export const EVERYDAY_CONVERSATION: Subcategory[] = [

  // ─────────────────────────────────────────
  // 1. GREETINGS
  // ─────────────────────────────────────────
  {
    id: 'greetings',
    name: 'Greetings',
    words: [
      {
        basic: 'Hey',
        advanced: 'Hello',
        transcription: '/həˈloʊ/',
        wrong: ['Help', 'Hold', 'Hope', 'Hear'],
      },
      {
        basic: 'Yo',
        advanced: 'Good day',
        transcription: '/ˌɡʊd ˈdeɪ/',
        wrong: ['Good luck', 'Good work', 'Good job', 'Good call'],
      },
      {
        basic: 'Sup',
        advanced: 'How are you',
        transcription: '/ˌhaʊ ɑːr ˈjuː/',
        wrong: ['How about', 'How else', 'How dare', 'How odd'],
      },
      {
        basic: 'Nice meeting you',
        advanced: 'Delighted',
        transcription: '/dɪˈlaɪtɪd/',
        wrong: ['Disgusted', 'Distracted', 'Dedicated', 'Determined'],
      },
      {
        basic: 'Howdy',
        advanced: 'Salutations',
        transcription: '/ˌsæljuˈteɪʃnz/',
        wrong: ['Situations', 'Solutions', 'Saturations', 'Simulations'],
      },
      {
        basic: 'Hiya',
        advanced: 'Welcome',
        transcription: '/ˈwelkəm/',
        wrong: ['Weather', 'Wealth', 'Welfare', 'Wisdom'],
      },
      {
        basic: 'Come in',
        advanced: 'Please enter',
        transcription: '/ˌpliːz ˈentər/',
        wrong: ['Please exit', 'Please explain', 'Please excuse', 'Please wait'],
      },
      {
        basic: 'Sit down',
        advanced: 'Be seated',
        transcription: '/ˌbiː ˈsiːtɪd/',
        wrong: ['Be sorry', 'Be silent', 'Be sure', 'Be still'],
      },
      {
        basic: 'Good seeing you',
        advanced: 'A pleasure',
        transcription: '/ə ˈpleʒər/',
        wrong: ['A treasure', 'A measure', 'A leisure', 'A pressure'],
      },
      {
        basic: 'Thanks',
        advanced: 'Gratitude',
        transcription: '/ˈɡrætɪtuːd/',
        wrong: ['Grievance', 'Gratuity', 'Graduate', 'Garment'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 2. FAREWELLS
  // ─────────────────────────────────────────
  {
    id: 'farewells',
    name: 'Farewells',
    words: [
      {
        basic: 'Bye bye',
        advanced: 'Goodbye',
        transcription: '/ˌɡʊdˈbaɪ/',
        wrong: ['Goodwill', 'Goodness', 'Goodies', 'Goodman'],
      },
      {
        basic: 'Later',
        advanced: 'Adieu',
        transcription: '/əˈduː/',
        wrong: ['Adjust', 'Admire', 'Advice', 'Adapt'],
      },
      {
        basic: 'See ya',
        advanced: 'Take care',
        transcription: '/ˌteɪk ˈker/',
        wrong: ['Take note', 'Take action', 'Take charge', 'Take control'],
      },
      {
        basic: 'Catch you later',
        advanced: 'Talk soon',
        transcription: '/ˌtɔːk ˈsuːn/',
        wrong: ['Talk back', 'Talk down', 'Talk over', 'Talk shop'],
      },
      {
        basic: 'Gotta go',
        advanced: 'I must leave',
        transcription: '/aɪ ˌmʌst ˈliːv/',
        wrong: ['I must learn', 'I must listen', 'I must lose', 'I must live'],
      },
      {
        basic: 'Peace out',
        advanced: 'Best wishes',
        transcription: '/ˌbest ˈwɪʃɪz/',
        wrong: ['Best friends', 'Best buddies', 'Best sellers', 'Best guesses'],
      },
      {
        basic: 'Cheers',
        advanced: 'Regards',
        transcription: '/rɪˈɡɑːrdz/',
        wrong: ['Records', 'Rewards', 'Rewinds', 'Reasons'],
      },
      {
        basic: 'Hit me up',
        advanced: 'Contact me',
        transcription: '/ˈkɑːntækt miː/',
        wrong: ['Contract me', 'Contain me', 'Convince me', 'Control me'],
      },
      {
        basic: 'Nighty night',
        advanced: 'Good night',
        transcription: '/ˌɡʊd ˈnaɪt/',
        wrong: ['Good morning', 'Good afternoon', 'Good luck', 'Good grief'],
      },
      {
        basic: 'Toodles',
        advanced: 'Au revoir',
        transcription: '/ˌoʊ rəˈvwɑːr/',
        wrong: ['Alright', 'Always', 'Anyway', 'Already'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 3. REACTIONS
  // ─────────────────────────────────────────
  {
    id: 'reactions',
    name: 'Reactions',
    words: [
      {
        basic: 'Wow',
        advanced: 'Remarkable',
        transcription: '/rɪˈmɑːrkəbl/',
        wrong: ['Reliable', 'Resilient', 'Rational', 'Relaxed'],
      },
      {
        basic: 'Unreal',
        advanced: 'Extraordinary',
        transcription: '/ɪkˈstrɔːrdneri/',
        wrong: ['Extensive', 'Extreme', 'Exclusive', 'Expensive'],
      },
      {
        basic: 'Neat',
        advanced: 'Impressive',
        transcription: '/ɪmˈpresɪv/',
        wrong: ['Impulsive', 'Insightful', 'Intuitive', 'Inventive'],
      },
      {
        basic: 'Great',
        advanced: 'Superb',
        transcription: '/suːˈpɜːrb/',
        wrong: ['Suburb', 'Surplus', 'Sarcastic', 'Supposed'],
      },
      {
        basic: 'Gross',
        advanced: 'Repugnant',
        transcription: '/rɪˈpʌɡnənt/',
        wrong: ['Repeated', 'Reluctant', 'Relevant', 'Resident'],
      },
      {
        basic: 'Lame',
        advanced: 'Disappointing',
        transcription: '/ˌdɪsəˈpɔɪntɪŋ/',
        wrong: ['Disturbing', 'Distracting', 'Disruptive', 'Distinctive'],
      },
      {
        basic: 'Meh',
        advanced: 'Mediocre',
        transcription: '/ˌmiːdiˈoʊkər/',
        wrong: ['Mindful', 'Modest', 'Motivated', 'Meaningful'],
      },
      {
        basic: 'Yikes',
        advanced: 'Alarming',
        transcription: '/əˈlɑːrmɪŋ/',
        wrong: ['Adapted', 'Admired', 'Admitted', 'Adopted'],
      },
      {
        basic: 'Ugh',
        advanced: 'Frustrating',
        transcription: '/ˈfrʌstreɪtɪŋ/',
        wrong: ['Fulfilling', 'Fascinating', 'Fearful', 'Focused'],
      },
      {
        basic: 'Bummer',
        advanced: 'Unfortunate',
        transcription: '/ʌnˈfɔːrtʃənət/',
        wrong: ['Unusual', 'Unclear', 'Unfair', 'Unexpected'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 4. AGREEMENT
  // ─────────────────────────────────────────
  {
    id: 'agreement',
    name: 'Agreement',
    words: [
      {
        basic: 'Uh-huh',
        advanced: 'Affirmative',
        transcription: '/əˈfɜːrmətɪv/',
        wrong: ['Alternative', 'Attractive', 'Adoptive', 'Active'],
      },
      {
        basic: 'Yep',
        advanced: 'Absolutely',
        transcription: '/ˈæbsəluːtli/',
        wrong: ['Actually', 'Apparently', 'Approximately', 'Accordingly'],
      },
      {
        basic: 'For sure',
        advanced: 'Without doubt',
        transcription: '/wɪˌðaʊt ˈdaʊt/',
        wrong: ['Without delay', 'Without issue', 'Without change', 'Without error'],
      },
      {
        basic: 'Spot on',
        advanced: 'Correct',
        transcription: '/kəˈrekt/',
        wrong: ['Clear', 'Casual', 'Complete', 'Common'],
      },
      {
        basic: 'That\'s right',
        advanced: 'Accurate',
        transcription: '/ˈækjərət/',
        wrong: ['Active', 'Adaptive', 'Adequate', 'Amiable'],
      },
      {
        basic: 'Of course',
        advanced: 'Naturally',
        transcription: '/ˈnætʃrəli/',
        wrong: ['Normally', 'Notably', 'Necessarily', 'Narrowly'],
      },
      {
        basic: 'No doubt',
        advanced: 'Undoubtedly',
        transcription: '/ʌnˈdaʊtɪdli/',
        wrong: ['Unexpectedly', 'Unnecessarily', 'Unusually', 'Unfairly'],
      },
      {
        basic: 'It\'s a deal',
        advanced: 'Agreed',
        transcription: '/əˈɡriːd/',
        wrong: ['Adapted', 'Admired', 'Admitted', 'Adopted'],
      },
      {
        basic: 'You bet',
        advanced: 'Gladly',
        transcription: '/ˈɡlædli/',
        wrong: ['Gently', 'Grandly', 'Greatly', 'Gravely'],
      },
      {
        basic: 'Works for me',
        advanced: 'Suitable',
        transcription: '/ˈsuːtəbl/',
        wrong: ['Sustainable', 'Sociable', 'Susceptible', 'Sizable'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 5. REFUSAL
  // ─────────────────────────────────────────
  {
    id: 'refusal',
    name: 'Refusal',
    words: [
      {
        basic: 'Nope',
        advanced: 'Decline',
        transcription: '/dɪˈklaɪn/',
        wrong: ['Decide', 'Define', 'Delay', 'Deliver'],
      },
      {
        basic: 'No chance',
        advanced: 'Unthinkable',
        transcription: '/ʌnˈθɪŋkəbl/',
        wrong: ['Unbearable', 'Unreliable', 'Unstoppable', 'Unbeatable'],
      },
      {
        basic: 'Can\'t',
        advanced: 'Unable',
        transcription: '/ʌnˈeɪbl/',
        wrong: ['Unfair', 'Unclear', 'Uneasy', 'Unusual'],
      },
      {
        basic: 'Pass',
        advanced: 'Abstain',
        transcription: '/æbˈsteɪn/',
        wrong: ['Attain', 'Appear', 'Assign', 'Apply'],
      },
      {
        basic: 'Count me out',
        advanced: 'Withdraw',
        transcription: '/wɪðˈdrɔː/',
        wrong: ['Wander', 'Witness', 'Wonder', 'Worsen'],
      },
      {
        basic: 'Not now',
        advanced: 'Postpone',
        transcription: '/poʊˈspoʊn/',
        wrong: ['Propose', 'Prevent', 'Prolong', 'Provoke'],
      },
      {
        basic: 'Forget it',
        advanced: 'Disregard',
        transcription: '/ˌdɪsrɪˈɡɑːrd/',
        wrong: ['Discard', 'Discuss', 'Disguise', 'Disperse'],
      },
      {
        basic: 'Sorry no',
        advanced: 'Regret',
        transcription: '/rɪˈɡret/',
        wrong: ['Reward', 'Resume', 'Retire', 'Reform'],
      },
      {
        basic: 'Whatever',
        advanced: 'Noncommittal',
        transcription: '/ˌnɑːnkəˈmɪtl/',
        wrong: ['Nonessential', 'Nonexistent', 'Nonprofit', 'Nonsense'],
      },
      {
        basic: 'Back off',
        advanced: 'Desist',
        transcription: '/dɪˈzɪst/',
        wrong: ['Desire', 'Despise', 'Detect', 'Depict'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 6. SMALL TALK
  // ─────────────────────────────────────────
  {
    id: 'small-talk',
    name: 'Small Talk',
    words: [
      {
        basic: 'Wanna',
        advanced: 'Would like to',
        transcription: '/wʊd ˈlaɪk tuː/',
        wrong: ['Would need to', 'Would have to', 'Would try to', 'Would plan to'],
      },
      {
        basic: 'Gonna',
        advanced: 'Going to',
        transcription: '/ˈɡoʊɪŋ tuː/',
        wrong: ['Getting to', 'Giving to', 'Growing to', 'Guiding to'],
      },
      {
        basic: 'Kinda',
        advanced: 'Rather',
        transcription: '/ˈræðər/',
        wrong: ['Rapidly', 'Rarely', 'Roughly', 'Recently'],
      },
      {
        basic: 'Sorta',
        advanced: 'Moderately',
        transcription: '/ˈmɑːdərətli/',
        wrong: ['Mainly', 'Merely', 'Mostly', 'Mentally'],
      },
      {
        basic: 'Dunno',
        advanced: 'Unsure',
        transcription: '/ʌnˈʃʊr/',
        wrong: ['Unwise', 'Unfair', 'Unkind', 'Unlucky'],
      },
      {
        basic: 'Chill',
        advanced: 'Relax',
        transcription: '/rɪˈlæks/',
        wrong: ['Reflect', 'Refuse', 'Release', 'Rely'],
      },
      {
        basic: 'Hang out',
        advanced: 'Socialize',
        transcription: '/ˈsoʊʃəlaɪz/',
        wrong: ['Specialize', 'Summarize', 'Sympathize', 'Symbolize'],
      },
      {
        basic: 'Catch up',
        advanced: 'Reconnect',
        transcription: '/ˌriːkəˈnekt/',
        wrong: ['Reconsider', 'Reassess', 'Reorganize', 'Redirect'],
      },
      {
        basic: 'No biggie',
        advanced: 'Not a concern',
        transcription: '/nɑːt ə kənˈsɜːrn/',
        wrong: ['Not a cent', 'Not a chance', 'Not a clue', 'Not a crumb'],
      },
      {
        basic: 'My bad',
        advanced: 'Apologies',
        transcription: '/əˈpɑːlədʒiz/',
        wrong: ['Anthologies', 'Analogies', 'Apologists', 'Archaeologies'],
      },
    ],
  },
]
