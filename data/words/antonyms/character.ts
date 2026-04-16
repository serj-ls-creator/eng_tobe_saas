// ============================================================
// ANTONYMS — Opposites in character
// Structure: 6 subcategories × 10 words
// basic = one word/short phrase, advanced = its opposite
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

export const CHARACTER: Subcategory[] = [

  // 1. COURAGE
  {
    id: 'courage',
    name: 'Courage',
    words: [
      { basic: 'Brave', advanced: 'Cowardly', transcription: '/ˈkaʊərdli/', wrong: ['Cheerful', 'Cautious', 'Clumsy', 'Crafty'] },
      { basic: 'Bold', advanced: 'Timid', transcription: '/ˈtɪmɪd/', wrong: ['Tense', 'Tired', 'Touchy', 'Trivial'] },
      { basic: 'Daring', advanced: 'Fearful', transcription: '/ˈfɪərfəl/', wrong: ['Faithful', 'Flexible', 'Formal', 'Frugal'] },
      { basic: 'Heroic', advanced: 'Spineless', transcription: '/ˈspaɪnləs/', wrong: ['Stubborn', 'Shallow', 'Sincere', 'Stoic'] },
      { basic: 'Confident', advanced: 'Insecure', transcription: '/ˌɪnsɪˈkjʊər/', wrong: ['Impulsive', 'Indecisive', 'Intense', 'Ironic'] },
      { basic: 'Assertive', advanced: 'Submissive', transcription: '/səbˈmɪsɪv/', wrong: ['Sensitive', 'Sarcastic', 'Skeptical', 'Sociable'] },
      { basic: 'Resilient', advanced: 'Vulnerable', transcription: '/ˈvʌlnərəbəl/', wrong: ['Vibrant', 'Vigilant', 'Virtuous', 'Versatile'] },
      { basic: 'Decisive', advanced: 'Hesitant', transcription: '/ˈhezɪtənt/', wrong: ['Humble', 'Honest', 'Helpful', 'Hopeful'] },
      { basic: 'Gutsy', advanced: 'Meek', transcription: '/miːk/', wrong: ['Moody', 'Messy', 'Modest', 'Mature'] },
      { basic: 'Fearless', advanced: 'Nervous', transcription: '/ˈnɜːrvəs/', wrong: ['Noisy', 'Naive', 'Narrow', 'Neutral'] },
    ],
  },

  // 2. HONESTY
  {
    id: 'honesty',
    name: 'Honesty',
    words: [
      { basic: 'Honest', advanced: 'Dishonest', transcription: '/dɪsˈɒnɪst/', wrong: ['Distant', 'Discreet', 'Diligent', 'Devoted'] },
      { basic: 'Truthful', advanced: 'Deceptive', transcription: '/dɪˈseptɪv/', wrong: ['Decisive', 'Dedicated', 'Delicate', 'Demanding'] },
      { basic: 'Sincere', advanced: 'Fake', transcription: '/feɪk/', wrong: ['Fair', 'Firm', 'Fond', 'Frank'] },
      { basic: 'Transparent', advanced: 'Secretive', transcription: '/ˈsiːkrətɪv/', wrong: ['Sensitive', 'Serious', 'Sharp', 'Shy'] },
      { basic: 'Trustworthy', advanced: 'Unreliable', transcription: '/ˌʌnrɪˈlaɪəbəl/', wrong: ['Unusual', 'Upbeat', 'Urgent', 'Useful'] },
      { basic: 'Open', advanced: 'Sneaky', transcription: '/ˈsniːki/', wrong: ['Stoic', 'Strict', 'Strong', 'Stubborn'] },
      { basic: 'Genuine', advanced: 'Hypocritical', transcription: '/ˌhɪpəˈkrɪtɪkəl/', wrong: ['Helpful', 'Humble', 'Humorous', 'Hardworking'] },
      { basic: 'Loyal', advanced: 'Treacherous', transcription: '/ˈtretʃərəs/', wrong: ['Tolerant', 'Thoughtful', 'Talkative', 'Talented'] },
      { basic: 'Reliable', advanced: 'Untrustworthy', transcription: '/ʌnˈtrʌstwɜːrði/', wrong: ['Unusual', 'Upbeat', 'Urgent', 'Useful'] },
      { basic: 'Ethical', advanced: 'Corrupt', transcription: '/kəˈrʌpt/', wrong: ['Creative', 'Critical', 'Curious', 'Cautious'] },
    ],
  },

  // 3. KINDNESS
  {
    id: 'kindness',
    name: 'Kindness',
    words: [
      { basic: 'Kind', advanced: 'Cruel', transcription: '/kruːəl/', wrong: ['Calm', 'Careful', 'Cheerful', 'Clever'] },
      { basic: 'Generous', advanced: 'Selfish', transcription: '/ˈselfɪʃ/', wrong: ['Serious', 'Sensitive', 'Shy', 'Sincere'] },
      { basic: 'Caring', advanced: 'Indifferent', transcription: '/ɪnˈdɪfərənt/', wrong: ['Impulsive', 'Insightful', 'Intense', 'Inventive'] },
      { basic: 'Warm', advanced: 'Cold-hearted', transcription: '/ˌkoʊldˈhɑːrtɪd/', wrong: ['Confident', 'Consistent', 'Creative', 'Curious'] },
      { basic: 'Empathetic', advanced: 'Callous', transcription: '/ˈkæləs/', wrong: ['Capable', 'Careful', 'Cheerful', 'Clever'] },
      { basic: 'Compassionate', advanced: 'Heartless', transcription: '/ˈhɑːrtləs/', wrong: ['Helpful', 'Honest', 'Humble', 'Humorous'] },
      { basic: 'Gentle', advanced: 'Harsh', transcription: '/hɑːrʃ/', wrong: ['Happy', 'Hardworking', 'Helpful', 'Hopeful'] },
      { basic: 'Supportive', advanced: 'Dismissive', transcription: '/dɪsˈmɪsɪv/', wrong: ['Decisive', 'Dedicated', 'Delightful', 'Devoted'] },
      { basic: 'Thoughtful', advanced: 'Inconsiderate', transcription: '/ˌɪnkənˈsɪdərət/', wrong: ['Impulsive', 'Indecisive', 'Informal', 'Intense'] },
      { basic: 'Forgiving', advanced: 'Resentful', transcription: '/rɪˈzentfəl/', wrong: ['Reliable', 'Reserved', 'Resilient', 'Resourceful'] },
    ],
  },

  // 4. AMBITION
  {
    id: 'ambition',
    name: 'Ambition',
    words: [
      { basic: 'Ambitious', advanced: 'Lazy', transcription: '/ˈleɪzi/', wrong: ['Logical', 'Loyal', 'Liberal', 'Lively'] },
      { basic: 'Driven', advanced: 'Unmotivated', transcription: '/ˌʌnˈmoʊtɪveɪtɪd/', wrong: ['Unusual', 'Upbeat', 'Urgent', 'Useful'] },
      { basic: 'Hardworking', advanced: 'Idle', transcription: '/ˈaɪdəl/', wrong: ['Impulsive', 'Insightful', 'Intense', 'Inventive'] },
      { basic: 'Focused', advanced: 'Distracted', transcription: '/dɪˈstræktɪd/', wrong: ['Decisive', 'Dedicated', 'Delightful', 'Devoted'] },
      { basic: 'Persistent', advanced: 'Quitter', transcription: '/ˈkwɪtər/', wrong: ['Quiet', 'Quick', 'Quirky', 'Qualified'] },
      { basic: 'Proactive', advanced: 'Passive', transcription: '/ˈpæsɪv/', wrong: ['Patient', 'Peaceful', 'Perceptive', 'Playful'] },
      { basic: 'Determined', advanced: 'Indecisive', transcription: '/ˌɪndɪˈsaɪsɪv/', wrong: ['Impulsive', 'Informal', 'Intense', 'Inventive'] },
      { basic: 'Productive', advanced: 'Inefficient', transcription: '/ˌɪnɪˈfɪʃənt/', wrong: ['Impulsive', 'Insightful', 'Intense', 'Inventive'] },
      { basic: 'Disciplined', advanced: 'Impulsive', transcription: '/ˈɪmpʌlsɪv/', wrong: ['Insightful', 'Intense', 'Inventive', 'Informal'] },
      { basic: 'Goal-oriented', advanced: 'Aimless', transcription: '/ˈeɪmləs/', wrong: ['Adaptable', 'Adventurous', 'Affectionate', 'Agile'] },
    ],
  },

  // 5. SOCIAL NATURE
  {
    id: 'social-nature',
    name: 'Social Nature',
    words: [
      { basic: 'Outgoing', advanced: 'Withdrawn', transcription: '/wɪðˈdrɔːn/', wrong: ['Witty', 'Warm', 'Wise', 'Willing'] },
      { basic: 'Sociable', advanced: 'Antisocial', transcription: '/ˌæntiˈsoʊʃəl/', wrong: ['Ambitious', 'Analytical', 'Adaptable', 'Articulate'] },
      { basic: 'Friendly', advanced: 'Hostile', transcription: '/ˈhɒstaɪl/', wrong: ['Humble', 'Honest', 'Helpful', 'Hopeful'] },
      { basic: 'Talkative', advanced: 'Reserved', transcription: '/rɪˈzɜːrvd/', wrong: ['Reliable', 'Resilient', 'Rational', 'Relaxed'] },
      { basic: 'Charming', advanced: 'Repulsive', transcription: '/rɪˈpʌlsɪv/', wrong: ['Reliable', 'Reserved', 'Resilient', 'Resourceful'] },
      { basic: 'Welcoming', advanced: 'Standoffish', transcription: '/ˈstændɒfɪʃ/', wrong: ['Stubborn', 'Stoic', 'Strict', 'Strong'] },
      { basic: 'Cooperative', advanced: 'Uncooperative', transcription: '/ˌʌnkoʊˈɒpərətɪv/', wrong: ['Unusual', 'Upbeat', 'Urgent', 'Useful'] },
      { basic: 'Approachable', advanced: 'Aloof', transcription: '/əˈluːf/', wrong: ['Ambitious', 'Analytical', 'Adaptable', 'Articulate'] },
      { basic: 'Inclusive', advanced: 'Exclusive', transcription: '/ɪkˈskluːsɪv/', wrong: ['Expressive', 'Experienced', 'Energetic', 'Enthusiastic'] },
      { basic: 'Open-minded', advanced: 'Narrow-minded', transcription: '/ˌnæroʊˈmaɪndɪd/', wrong: ['Negative', 'Nervous', 'Neutral', 'Noisy'] },
    ],
  },

  // 6. ATTITUDE
  {
    id: 'attitude',
    name: 'Attitude',
    words: [
      { basic: 'Optimistic', advanced: 'Pessimistic', transcription: '/ˌpesɪˈmɪstɪk/', wrong: ['Passionate', 'Patient', 'Perceptive', 'Playful'] },
      { basic: 'Humble', advanced: 'Arrogant', transcription: '/ˈærəɡənt/', wrong: ['Ambitious', 'Analytical', 'Adaptable', 'Articulate'] },
      { basic: 'Grateful', advanced: 'Ungrateful', transcription: '/ʌnˈɡreɪtfəl/', wrong: ['Unusual', 'Upbeat', 'Urgent', 'Useful'] },
      { basic: 'Patient', advanced: 'Impatient', transcription: '/ɪmˈpeɪʃənt/', wrong: ['Impulsive', 'Insightful', 'Intense', 'Inventive'] },
      { basic: 'Flexible', advanced: 'Rigid', transcription: '/ˈrɪdʒɪd/', wrong: ['Reliable', 'Reserved', 'Resilient', 'Resourceful'] },
      { basic: 'Tolerant', advanced: 'Intolerant', transcription: '/ɪnˈtɒlərənt/', wrong: ['Impulsive', 'Insightful', 'Intense', 'Inventive'] },
      { basic: 'Mature', advanced: 'Immature', transcription: '/ˌɪməˈtjʊər/', wrong: ['Motivated', 'Mindful', 'Modest', 'Mellow'] },
      { basic: 'Responsible', advanced: 'Irresponsible', transcription: '/ɪˌrespɒnˈsɪbəl/', wrong: ['Impulsive', 'Insightful', 'Intense', 'Inventive'] },
      { basic: 'Rational', advanced: 'Irrational', transcription: '/ɪˈræʃənəl/', wrong: ['Reliable', 'Reserved', 'Resilient', 'Resourceful'] },
      { basic: 'Positive', advanced: 'Negative', transcription: '/ˈneɡətɪv/', wrong: ['Nervous', 'Neutral', 'Noisy', 'Naive'] },
    ],
  },
]
