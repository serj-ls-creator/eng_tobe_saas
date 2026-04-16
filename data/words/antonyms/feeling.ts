// ============================================================
// FEELING — Antonym pairs (positive vs negative emotions)
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
        wrong: ['Ambition', 'Attention', 'Attraction', 'Assertion'],
      },
      {
        basic: 'Devoted',
        advanced: 'Hostile',
        transcription: '/ˈhɒstaɪl/',
        wrong: ['Humble', 'Honest', 'Hopeful', 'Helpful'],
      },
      {
        basic: 'Fond',
        advanced: 'Bitter',
        transcription: '/ˈbɪtər/',
        wrong: ['Bold', 'Brave', 'Brief', 'Bright'],
      },
      {
        basic: 'Tender',
        advanced: 'Cruel',
        transcription: '/kruːəl/',
        wrong: ['Calm', 'Careful', 'Cheerful', 'Clear'],
      },
      {
        basic: 'Passionate',
        advanced: 'Indifferent',
        transcription: '/ɪnˈdɪfrənt/',
        wrong: ['Impulsive', 'Insightful', 'Intuitive', 'Inventive'],
      },
      {
        basic: 'Warmth',
        advanced: 'Coldness',
        transcription: '/ˈkoʊldnəs/',
        wrong: ['Calmness', 'Closeness', 'Cleverness', 'Clearness'],
      },
      {
        basic: 'Caring',
        advanced: 'Callous',
        transcription: '/ˈkæləs/',
        wrong: ['Capable', 'Cautious', 'Cheerful', 'Consistent'],
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
        transcription: '/ˈsɒroʊ/',
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
        transcription: '/dɪˈspɒndənt/',
        wrong: ['Determined', 'Devoted', 'Dignified', 'Diligent'],
      },
      {
        basic: 'Ecstatic',
        advanced: 'Heartbroken',
        transcription: '/ˈhɑːrtbroʊkən/',
        wrong: ['Hardworking', 'Helpful', 'Honest', 'Hopeful'],
      },
      {
        basic: 'Radiant',
        advanced: 'Melancholy',
        transcription: '/ˈmelənkɒli/',
        wrong: ['Mindful', 'Modest', 'Motivated', 'Meaningful'],
      },
      {
        basic: 'Upbeat',
        advanced: 'Downcast',
        transcription: '/ˈdaʊnkɑːst/',
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
        advanced: 'Dread',
        transcription: '/dred/',
        wrong: ['Doubt', 'Drive', 'Duty', 'Depth'],
      },
      {
        basic: 'Optimistic',
        advanced: 'Pessimistic',
        transcription: '/ˌpesɪˈmɪstɪk/',
        wrong: ['Practical', 'Perceptive', 'Persistent', 'Passionate'],
      },
      {
        basic: 'Confident',
        advanced: 'Fearful',
        transcription: '/ˈfɪərfəl/',
        wrong: ['Faithful', 'Flexible', 'Focused', 'Friendly'],
      },
      {
        basic: 'Eager',
        advanced: 'Apprehensive',
        transcription: '/ˌæprɪˈhensɪv/',
        wrong: ['Ambitious', 'Analytical', 'Adaptable', 'Articulate'],
      },
      {
        basic: 'Trusting',
        advanced: 'Paranoid',
        transcription: '/ˈpærənɔɪd/',
        wrong: ['Patient', 'Peaceful', 'Perceptive', 'Persistent'],
      },
      {
        basic: 'Brave',
        advanced: 'Terrified',
        transcription: '/ˈterɪfaɪd/',
        wrong: ['Thoughtful', 'Tolerant', 'Trustworthy', 'Truthful'],
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
        transcription: '/dɪsˈkʌrɪdʒd/',
        wrong: ['Discovered', 'Discussed', 'Dismissed', 'Displayed'],
      },
      {
        basic: 'Positive',
        advanced: 'Alarmed',
        transcription: '/əˈlɑːrmd/',
        wrong: ['Adapted', 'Admired', 'Admitted', 'Adopted'],
      },
      {
        basic: 'Expectant',
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
        basic: 'Confident',
        advanced: 'Embarrassed',
        transcription: '/ɪmˈbærəst/',
        wrong: ['Empowered', 'Encouraged', 'Engaged', 'Enhanced'],
      },
      {
        basic: 'Honored',
        advanced: 'Disgraced',
        transcription: '/dɪsˈɡreɪst/',
        wrong: ['Dismissed', 'Displayed', 'Disputed', 'Dissolved'],
      },
      {
        basic: 'Arrogant',
        advanced: 'Remorseful',
        transcription: '/rɪˈmɔːrsfl/',
        wrong: ['Reliable', 'Resilient', 'Rational', 'Relaxed'],
      },
      {
        basic: 'Boastful',
        advanced: 'Regretful',
        transcription: '/rɪˈɡretfl/',
        wrong: ['Reliable', 'Resilient', 'Rational', 'Relaxed'],
      },
      {
        basic: 'Vain',
        advanced: 'Mortified',
        transcription: '/ˈmɔːrtɪfaɪd/',
        wrong: ['Motivated', 'Mindful', 'Modest', 'Meaningful'],
      },
      {
        basic: 'Triumphant',
        advanced: 'Defeated',
        transcription: '/dɪˈfiːtɪd/',
        wrong: ['Devoted', 'Dignified', 'Diligent', 'Directed'],
      },
      {
        basic: 'Glorious',
        advanced: 'Dishonorable',
        transcription: '/dɪsˈɒnərəbl/',
        wrong: ['Dismissive', 'Disruptive', 'Distinctive', 'Distracting'],
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
        basic: 'Calm',
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
        transcription: '/wuːnd ʌp/',
        wrong: ['Worn out', 'Washed up', 'Wiped out', 'Worked up'],
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
        basic: 'Grateful',
        advanced: 'Resentful',
        transcription: '/rɪˈzentfl/',
        wrong: ['Reliable', 'Resilient', 'Rational', 'Relaxed'],
      },
      {
        basic: 'Thankful',
        advanced: 'Bitter',
        transcription: '/ˈbɪtər/',
        wrong: ['Bold', 'Brave', 'Brief', 'Bright'],
      },
      {
        basic: 'Appreciative',
        advanced: 'Envious',
        transcription: '/ˈenviəs/',
        wrong: ['Elated', 'Empathetic', 'Engaged', 'Enthusiastic'],
      },
      {
        basic: 'Generous',
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
        advanced: 'Discontented',
        transcription: '/ˌdɪskənˈtentɪd/',
        wrong: ['Discovered', 'Discussed', 'Dismissed', 'Displayed'],
      },
      {
        basic: 'Humble',
        advanced: 'Spiteful',
        transcription: '/ˈspaɪtfl/',
        wrong: ['Stubborn', 'Skeptical', 'Sensitive', 'Spontaneous'],
      },
      {
        basic: 'Forgiving',
        advanced: 'Vindictive',
        transcription: '/vɪnˈdɪktɪv/',
        wrong: ['Vigilant', 'Virtuous', 'Versatile', 'Vulnerable'],
      },
      {
        basic: 'Accepting',
        advanced: 'Resentful',
        transcription: '/rɪˈzentfl/',
        wrong: ['Reliable', 'Resilient', 'Rational', 'Relaxed'],
      },
      {
        basic: 'Blessed',
        advanced: 'Aggrieved',
        transcription: '/əˈɡriːvd/',
        wrong: ['Adapted', 'Admired', 'Admitted', 'Adopted'],
      },
    ],
  },
]
