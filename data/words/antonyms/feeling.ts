// ============================================================
// FEELING — Antonym pairs (positive vs negative emotions)
// Structure: 6 subcategories × 10 words
// basic = feeling word, advanced = its opposite
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

export const FEELING: Subcategory[] = [

  // ─────────────────────────────────────────
  // 1. LOVE-HATE
  // ─────────────────────────────────────────
  {
    id: 'love-hate',
    name: 'Love-Hate',
    words: [
      {
        basic: 'Love',
        advanced: 'Hate',
        transcription: '/heɪt/',
        wrong: ['Hope', 'Hurt', 'Haste', 'Haze'],
      },
      {
        basic: 'Adore',
        advanced: 'Despise',
        transcription: '/dɪˈspaɪz/',
        wrong: ['Desire', 'Detect', 'Devote', 'Differ'],
      },
      {
        basic: 'Cherish',
        advanced: 'Loathe',
        transcription: '/loʊð/',
        wrong: ['Lament', 'Linger', 'Listen', 'Locate'],
      },
      {
        basic: 'Affection',
        advanced: 'Aversion',
        transcription: '/əˈvɜːrʒən/',
        wrong: ['Ambition', 'Attention', 'Assertion', 'Abrasion'],
      },
      {
        basic: 'Devoted',
        advanced: 'Indifferent',
        transcription: '/ɪnˈdɪfrənt/',
        wrong: ['Impulsive', 'Insightful', 'Intuitive', 'Inventive'],
      },
      {
        basic: 'Fond',
        advanced: 'Repulsed',
        transcription: '/rɪˈpʌlst/',
        wrong: ['Reliable', 'Reserved', 'Resilient', 'Resourceful'],
      },
      {
        basic: 'Tender',
        advanced: 'Harsh',
        transcription: '/hɑːrʃ/',
        wrong: ['Happy', 'Hardworking', 'Helpful', 'Hopeful'],
      },
      {
        basic: 'Passionate',
        advanced: 'Lukewarm',
        transcription: '/ˌluːkˈwɔːrm/',
        wrong: ['Lonesome', 'Lavish', 'Lethal', 'Lenient'],
      },
      {
        basic: 'Compassion',
        advanced: 'Contempt',
        transcription: '/kənˈtempt/',
        wrong: ['Content', 'Contest', 'Context', 'Contract'],
      },
      {
        basic: 'Admiration',
        advanced: 'Disdain',
        transcription: '/dɪsˈdeɪn/',
        wrong: ['Debate', 'Decay', 'Dagger', 'Divorce'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 2. JOY-SADNESS
  // ─────────────────────────────────────────
  {
    id: 'joy-sadness',
    name: 'Joy-Sadness',
    words: [
      {
        basic: 'Joy',
        advanced: 'Grief',
        transcription: '/ɡriːf/',
        wrong: ['Grace', 'Greed', 'Growth', 'Guard'],
      },
      {
        basic: 'Cheerful',
        advanced: 'Gloomy',
        transcription: '/ˈɡluːmi/',
        wrong: ['Graceful', 'Grateful', 'Greedy', 'Grounded'],
      },
      {
        basic: 'Delight',
        advanced: 'Sorrow',
        transcription: '/ˈsɑːroʊ/',
        wrong: ['Safety', 'Silence', 'Strength', 'Support'],
      },
      {
        basic: 'Bliss',
        advanced: 'Misery',
        transcription: '/ˈmɪzəri/',
        wrong: ['Memory', 'Mercy', 'Might', 'Mood'],
      },
      {
        basic: 'Elated',
        advanced: 'Dejected',
        transcription: '/dɪˈdʒektɪd/',
        wrong: ['Devoted', 'Dignified', 'Diligent', 'Directed'],
      },
      {
        basic: 'Gleeful',
        advanced: 'Mournful',
        transcription: '/ˈmɔːrnfəl/',
        wrong: ['Mindful', 'Modest', 'Motivated', 'Meaningful'],
      },
      {
        basic: 'Jubilant',
        advanced: 'Despondent',
        transcription: '/dɪˈspɑːndənt/',
        wrong: ['Determined', 'Devoted', 'Dignified', 'Diligent'],
      },
      {
        basic: 'Ecstatic',
        advanced: 'Heartbroken',
        transcription: '/ˈhɑːrtbroʊkən/',
        wrong: ['Hardworking', 'Helpful', 'Honest', 'Hopeful'],
      },
      {
        basic: 'Light-hearted',
        advanced: 'Melancholy',
        transcription: '/ˈmelənkɑːli/',
        wrong: ['Mighty', 'Mellow', 'Mature', 'Merry'],
      },
      {
        basic: 'Upbeat',
        advanced: 'Downcast',
        transcription: '/ˈdaʊnkæst/',
        wrong: ['Doubtful', 'Driven', 'Dynamic', 'Decisive'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 3. HOPE-FEAR
  // ─────────────────────────────────────────
  {
    id: 'hope-fear',
    name: 'Hope-Fear',
    words: [
      {
        basic: 'Hope',
        advanced: 'Despair',
        transcription: '/dɪˈsper/',
        wrong: ['Debate', 'Defeat', 'Delight', 'Decay'],
      },
      {
        basic: 'Encouraged',
        advanced: 'Disheartened',
        transcription: '/dɪsˈhɑːrtnd/',
        wrong: ['Dampened', 'Darkened', 'Deafened', 'Deepened'],
      },
      {
        basic: 'Certain',
        advanced: 'Doubtful',
        transcription: '/ˈdaʊtfəl/',
        wrong: ['Dutiful', 'Delightful', 'Dreadful', 'Dignified'],
      },
      {
        basic: 'Eager',
        advanced: 'Reluctant',
        transcription: '/rɪˈlʌktənt/',
        wrong: ['Reliable', 'Reserved', 'Resilient', 'Resourceful'],
      },
      {
        basic: 'Trusting',
        advanced: 'Paranoid',
        transcription: '/ˈperənɔɪd/',
        wrong: ['Patient', 'Peaceful', 'Perceptive', 'Persistent'],
      },
      {
        basic: 'Safe',
        advanced: 'Threatened',
        transcription: '/ˈθretnd/',
        wrong: ['Thrilled', 'Tolerated', 'Targeted', 'Tempted'],
      },
      {
        basic: 'Assured',
        advanced: 'Anxious',
        transcription: '/ˈæŋkʃəs/',
        wrong: ['Ambitious', 'Analytical', 'Adaptable', 'Articulate'],
      },
      {
        basic: 'Inspired',
        advanced: 'Discouraged',
        transcription: '/dɪˈskɜːrɪdʒd/',
        wrong: ['Discovered', 'Discussed', 'Dismissed', 'Displayed'],
      },
      {
        basic: 'Relieved',
        advanced: 'Uneasy',
        transcription: '/ʌnˈiːzi/',
        wrong: ['Unusual', 'Upbeat', 'Urgent', 'Useful'],
      },
      {
        basic: 'Looking forward',
        advanced: 'Dreading',
        transcription: '/ˈdredɪŋ/',
        wrong: ['Deciding', 'Declining', 'Defending', 'Defining'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 4. PRIDE-SHAME
  // ─────────────────────────────────────────
  {
    id: 'pride-shame',
    name: 'Pride-Shame',
    words: [
      {
        basic: 'Pride',
        advanced: 'Shame',
        transcription: '/ʃeɪm/',
        wrong: ['Share', 'Shift', 'Show', 'Shrink'],
      },
      {
        basic: 'Proud',
        advanced: 'Humiliated',
        transcription: '/hjuːˈmɪlieɪtɪd/',
        wrong: ['Hopeful', 'Horrified', 'Heartbroken', 'Hesitant'],
      },
      {
        basic: 'Dignified',
        advanced: 'Disgraced',
        transcription: '/dɪsˈɡreɪst/',
        wrong: ['Dismissed', 'Displayed', 'Disputed', 'Dissolved'],
      },
      {
        basic: 'Self-assured',
        advanced: 'Embarrassed',
        transcription: '/ɪmˈberəst/',
        wrong: ['Empowered', 'Encouraged', 'Engaged', 'Enhanced'],
      },
      {
        basic: 'Honored',
        advanced: 'Slighted',
        transcription: '/ˈslaɪtɪd/',
        wrong: ['Sighted', 'Slated', 'Smiled', 'Soothed'],
      },
      {
        basic: 'Arrogant',
        advanced: 'Unassuming',
        transcription: '/ˌʌnəˈsuːmɪŋ/',
        wrong: ['Unwilling', 'Unraveling', 'Unyielding', 'Unfolding'],
      },
      {
        basic: 'Boastful',
        advanced: 'Modest',
        transcription: '/ˈmɑːdɪst/',
        wrong: ['Moody', 'Mighty', 'Merry', 'Mellow'],
      },
      {
        basic: 'Shameless',
        advanced: 'Remorseful',
        transcription: '/rɪˈmɔːrsfəl/',
        wrong: ['Reliable', 'Resilient', 'Rational', 'Relaxed'],
      },
      {
        basic: 'Triumphant',
        advanced: 'Defeated',
        transcription: '/dɪˈfiːtɪd/',
        wrong: ['Devoted', 'Dignified', 'Diligent', 'Directed'],
      },
      {
        basic: 'Glorious',
        advanced: 'Pitiful',
        transcription: '/ˈpɪtɪfəl/',
        wrong: ['Peaceful', 'Playful', 'Powerful', 'Plentiful'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 5. CALM-STRESS
  // ─────────────────────────────────────────
  {
    id: 'calm-stress',
    name: 'Calm-Stress',
    words: [
      {
        basic: 'At ease',
        advanced: 'Tense',
        transcription: '/tens/',
        wrong: ['Tired', 'Timid', 'Tolerant', 'Truthful'],
      },
      {
        basic: 'Relaxed',
        advanced: 'Stressed',
        transcription: '/strest/',
        wrong: ['Stubborn', 'Skeptical', 'Sensitive', 'Spontaneous'],
      },
      {
        basic: 'Peaceful',
        advanced: 'Agitated',
        transcription: '/ˈædʒɪteɪtɪd/',
        wrong: ['Adapted', 'Admired', 'Admitted', 'Adopted'],
      },
      {
        basic: 'Serene',
        advanced: 'Frantic',
        transcription: '/ˈfræntɪk/',
        wrong: ['Flexible', 'Focused', 'Friendly', 'Fulfilled'],
      },
      {
        basic: 'Composed',
        advanced: 'Overwhelmed',
        transcription: '/ˌoʊvərˈwelmd/',
        wrong: ['Overrated', 'Overused', 'Overdone', 'Overlooked'],
      },
      {
        basic: 'Tranquil',
        advanced: 'Panicked',
        transcription: '/ˈpænɪkt/',
        wrong: ['Patient', 'Peaceful', 'Perceptive', 'Persistent'],
      },
      {
        basic: 'Steady',
        advanced: 'Rattled',
        transcription: '/ˈrætld/',
        wrong: ['Rational', 'Reliable', 'Resilient', 'Relaxed'],
      },
      {
        basic: 'Mellow',
        advanced: 'Wound up',
        transcription: '/ˌwaʊnd ˈʌp/',
        wrong: ['Worn out', 'Washed up', 'Wiped out', 'Walked out'],
      },
      {
        basic: 'Easygoing',
        advanced: 'Uptight',
        transcription: '/ˌʌpˈtaɪt/',
        wrong: ['Upbeat', 'Upfront', 'Upright', 'Upgrade'],
      },
      {
        basic: 'Untroubled',
        advanced: 'Distressed',
        transcription: '/dɪˈstrest/',
        wrong: ['Distributed', 'Divided', 'Documented', 'Drafted'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 6. GRATITUDE-RESENTMENT
  // ─────────────────────────────────────────
  {
    id: 'gratitude-resentment',
    name: 'Gratitude-Resentment',
    words: [
      {
        basic: 'Thankful',
        advanced: 'Resentful',
        transcription: '/rɪˈzentfəl/',
        wrong: ['Reliable', 'Resilient', 'Rational', 'Relaxed'],
      },
      {
        basic: 'Appreciative',
        advanced: 'Scornful',
        transcription: '/ˈskɔːrnfəl/',
        wrong: ['Scholarly', 'Scrupulous', 'Sorrowful', 'Scrawny'],
      },
      {
        basic: 'Giving',
        advanced: 'Grudging',
        transcription: '/ˈɡrʌdʒɪŋ/',
        wrong: ['Graceful', 'Grateful', 'Greedy', 'Grounded'],
      },
      {
        basic: 'Content',
        advanced: 'Jealous',
        transcription: '/ˈdʒeləs/',
        wrong: ['Joyful', 'Judicious', 'Justified', 'Jovial'],
      },
      {
        basic: 'Satisfied',
        advanced: 'Frustrated',
        transcription: '/ˈfrʌstreɪtɪd/',
        wrong: ['Fascinated', 'Fulfilled', 'Focused', 'Friendly'],
      },
      {
        basic: 'Gracious',
        advanced: 'Spiteful',
        transcription: '/ˈspaɪtfəl/',
        wrong: ['Stubborn', 'Skeptical', 'Sensitive', 'Spontaneous'],
      },
      {
        basic: 'Understanding',
        advanced: 'Merciless',
        transcription: '/ˈmɜːrsɪləs/',
        wrong: ['Memorable', 'Mindless', 'Marvelous', 'Mysterious'],
      },
      {
        basic: 'Accepting',
        advanced: 'Defiant',
        transcription: '/dɪˈfaɪənt/',
        wrong: ['Decent', 'Diligent', 'Dedicated', 'Devoted'],
      },
      {
        basic: 'Blessed',
        advanced: 'Cursed',
        transcription: '/ˈkɜːrsɪd/',
        wrong: ['Cursive', 'Curious', 'Curved', 'Cunning'],
      },
      {
        basic: 'Fortunate',
        advanced: 'Aggrieved',
        transcription: '/əˈɡriːvd/',
        wrong: ['Adapted', 'Admired', 'Admitted', 'Adopted'],
      },
    ],
  },
]
