// ============================================================
// ANTONYMS — Opposites in state
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

export const STATE: Subcategory[] = [

  // 1. CONSCIOUSNESS
  {
    id: 'consciousness',
    name: 'Consciousness',
    words: [
      { basic: 'Awake', advanced: 'Asleep', transcription: '/əˈsliːp/', wrong: ['Aware', 'Active', 'Alert', 'Alive'] },
      { basic: 'Conscious', advanced: 'Unconscious', transcription: '/ʌnˈkɒnʃəs/', wrong: ['Uncertain', 'Unclear', 'Unhappy', 'Unique'] },
      { basic: 'Alert', advanced: 'Drowsy', transcription: '/ˈdraʊzi/', wrong: ['Dynamic', 'Daring', 'Decisive', 'Devoted'] },
      { basic: 'Sober', advanced: 'Intoxicated', transcription: '/ɪnˈtɒksɪkeɪtɪd/', wrong: ['Inspired', 'Intense', 'Involved', 'Isolated'] },
      { basic: 'Energized', advanced: 'Exhausted', transcription: '/ɪɡˈzɔːstɪd/', wrong: ['Excited', 'Eager', 'Earnest', 'Efficient'] },
      { basic: 'Rested', advanced: 'Fatigued', transcription: '/fəˈtiːɡd/', wrong: ['Faithful', 'Flexible', 'Focused', 'Formal'] },
      { basic: 'Sharp', advanced: 'Groggy', transcription: '/ˈɡrɒɡi/', wrong: ['Grateful', 'Genuine', 'Generous', 'Gentle'] },
      { basic: 'Attentive', advanced: 'Absent-minded', transcription: '/ˌæbsənt ˈmaɪndɪd/', wrong: ['Ambitious', 'Analytical', 'Adaptable', 'Articulate'] },
      { basic: 'Present', advanced: 'Distracted', transcription: '/dɪˈstræktɪd/', wrong: ['Decisive', 'Dedicated', 'Delightful', 'Devoted'] },
      { basic: 'Focused', advanced: 'Zoned out', transcription: '/zoʊnd aʊt/', wrong: ['Zealous', 'Zesty', 'Zippy', 'Zeal'] },
    ],
  },

  // 2. HUNGER & THIRST
  {
    id: 'hunger',
    name: 'Hunger & Thirst',
    words: [
      { basic: 'Hungry', advanced: 'Full', transcription: '/fʊl/', wrong: ['Funny', 'Furious', 'Faithful', 'Flexible'] },
      { basic: 'Starving', advanced: 'Satisfied', transcription: '/ˈsætɪsfaɪd/', wrong: ['Serious', 'Sensitive', 'Shy', 'Sincere'] },
      { basic: 'Thirsty', advanced: 'Hydrated', transcription: '/ˈhaɪdreɪtɪd/', wrong: ['Humble', 'Honest', 'Helpful', 'Hopeful'] },
      { basic: 'Craving', advanced: 'Repulsed', transcription: '/rɪˈpʌlst/', wrong: ['Reliable', 'Reserved', 'Resilient', 'Resourceful'] },
      { basic: 'Famished', advanced: 'Stuffed', transcription: '/stʌft/', wrong: ['Stubborn', 'Stoic', 'Strict', 'Strong'] },
      { basic: 'Peckish', advanced: 'Overfed', transcription: '/ˌoʊvərˈfed/', wrong: ['Optimistic', 'Outgoing', 'Objective', 'Organized'] },
      { basic: 'Dehydrated', advanced: 'Quenched', transcription: '/kwentʃt/', wrong: ['Quiet', 'Quick', 'Quirky', 'Qualified'] },
      { basic: 'Empty', advanced: 'Replete', transcription: '/rɪˈpliːt/', wrong: ['Reliable', 'Reserved', 'Resilient', 'Resourceful'] },
      { basic: 'Malnourished', advanced: 'Nourished', transcription: '/ˈnɜːrɪʃt/', wrong: ['Nervous', 'Neutral', 'Noisy', 'Naive'] },
      { basic: 'Appetite', advanced: 'Disgust', transcription: '/dɪsˈɡʌst/', wrong: ['Decisive', 'Dedicated', 'Delightful', 'Devoted'] },
    ],
  },

  // 3. HEALTH
  {
    id: 'health-state',
    name: 'Health',
    words: [
      { basic: 'Healthy', advanced: 'Ill', transcription: '/ɪl/', wrong: ['Impulsive', 'Insightful', 'Intense', 'Inventive'] },
      { basic: 'Fit', advanced: 'Unfit', transcription: '/ʌnˈfɪt/', wrong: ['Unusual', 'Upbeat', 'Urgent', 'Useful'] },
      { basic: 'Strong', advanced: 'Weak', transcription: '/wiːk/', wrong: ['Witty', 'Warm', 'Wise', 'Willing'] },
      { basic: 'Recovered', advanced: 'Sick', transcription: '/sɪk/', wrong: ['Serious', 'Sensitive', 'Shy', 'Sincere'] },
      { basic: 'Energetic', advanced: 'Lethargic', transcription: '/ləˈθɑːrdʒɪk/', wrong: ['Logical', 'Loyal', 'Liberal', 'Lively'] },
      { basic: 'Stable', advanced: 'Critical', transcription: '/ˈkrɪtɪkəl/', wrong: ['Creative', 'Curious', 'Cautious', 'Cheerful'] },
      { basic: 'Immune', advanced: 'Vulnerable', transcription: '/ˈvʌlnərəbəl/', wrong: ['Vibrant', 'Vigilant', 'Virtuous', 'Versatile'] },
      { basic: 'Healed', advanced: 'Injured', transcription: '/ˈɪndʒərd/', wrong: ['Impulsive', 'Insightful', 'Intense', 'Inventive'] },
      { basic: 'Balanced', advanced: 'Unstable', transcription: '/ʌnˈsteɪbəl/', wrong: ['Unusual', 'Upbeat', 'Urgent', 'Useful'] },
      { basic: 'Thriving', advanced: 'Declining', transcription: '/dɪˈklaɪnɪŋ/', wrong: ['Decisive', 'Dedicated', 'Delightful', 'Devoted'] },
    ],
  },

  // 4. MOOD
  {
    id: 'mood',
    name: 'Mood',
    words: [
      { basic: 'Happy', advanced: 'Miserable', transcription: '/ˈmɪzərəbəl/', wrong: ['Motivated', 'Mindful', 'Mature', 'Modest'] },
      { basic: 'Calm', advanced: 'Agitated', transcription: '/ˈædʒɪteɪtɪd/', wrong: ['Ambitious', 'Analytical', 'Adaptable', 'Articulate'] },
      { basic: 'Cheerful', advanced: 'Gloomy', transcription: '/ˈɡluːmi/', wrong: ['Genuine', 'Generous', 'Gentle', 'Grateful'] },
      { basic: 'Relaxed', advanced: 'Tense', transcription: '/tens/', wrong: ['Tolerant', 'Thoughtful', 'Talkative', 'Talented'] },
      { basic: 'Content', advanced: 'Restless', transcription: '/ˈrestləs/', wrong: ['Reliable', 'Reserved', 'Resilient', 'Resourceful'] },
      { basic: 'Upbeat', advanced: 'Downcast', transcription: '/ˈdaʊnkɑːst/', wrong: ['Decisive', 'Dedicated', 'Delightful', 'Devoted'] },
      { basic: 'Serene', advanced: 'Anxious', transcription: '/ˈæŋkʃəs/', wrong: ['Ambitious', 'Analytical', 'Adaptable', 'Articulate'] },
      { basic: 'Elated', advanced: 'Depressed', transcription: '/dɪˈprest/', wrong: ['Decisive', 'Dedicated', 'Delightful', 'Devoted'] },
      { basic: 'Enthusiastic', advanced: 'Apathetic', transcription: '/ˌæpəˈθetɪk/', wrong: ['Ambitious', 'Analytical', 'Adaptable', 'Articulate'] },
      { basic: 'Motivated', advanced: 'Burned out', transcription: '/bɜːrnd aʊt/', wrong: ['Bold', 'Brave', 'Bright', 'Broad'] },
    ],
  },

  // 5. COMFORT
  {
    id: 'comfort',
    name: 'Comfort',
    words: [
      { basic: 'Warm', advanced: 'Freezing', transcription: '/ˈfriːzɪŋ/', wrong: ['Friendly', 'Focused', 'Formal', 'Flexible'] },
      { basic: 'Comfortable', advanced: 'Uncomfortable', transcription: '/ʌnˈkʌmftəbəl/', wrong: ['Unusual', 'Upbeat', 'Urgent', 'Useful'] },
      { basic: 'Safe', advanced: 'Threatened', transcription: '/ˈθretənd/', wrong: ['Thoughtful', 'Tolerant', 'Talented', 'Talkative'] },
      { basic: 'Sheltered', advanced: 'Exposed', transcription: '/ɪkˈspoʊzd/', wrong: ['Expressive', 'Experienced', 'Energetic', 'Enthusiastic'] },
      { basic: 'Settled', advanced: 'Unsettled', transcription: '/ʌnˈsetəld/', wrong: ['Unusual', 'Upbeat', 'Urgent', 'Useful'] },
      { basic: 'Secure', advanced: 'Insecure', transcription: '/ˌɪnsɪˈkjʊər/', wrong: ['Impulsive', 'Insightful', 'Intense', 'Inventive'] },
      { basic: 'Grounded', advanced: 'Disoriented', transcription: '/dɪsˈɔːriəntɪd/', wrong: ['Decisive', 'Dedicated', 'Delightful', 'Devoted'] },
      { basic: 'Cozy', advanced: 'Bleak', transcription: '/bliːk/', wrong: ['Bold', 'Brave', 'Bright', 'Broad'] },
      { basic: 'At ease', advanced: 'On edge', transcription: '/ɒn edʒ/', wrong: ['Optimistic', 'Outgoing', 'Objective', 'Organized'] },
      { basic: 'Protected', advanced: 'Vulnerable', transcription: '/ˈvʌlnərəbəl/', wrong: ['Vibrant', 'Vigilant', 'Virtuous', 'Versatile'] },
    ],
  },

  // 6. ACTIVITY LEVEL
  {
    id: 'activity-level',
    name: 'Activity Level',
    words: [
      { basic: 'Active', advanced: 'Inactive', transcription: '/ɪnˈæktɪv/', wrong: ['Impulsive', 'Insightful', 'Intense', 'Inventive'] },
      { basic: 'Busy', advanced: 'Idle', transcription: '/ˈaɪdəl/', wrong: ['Impulsive', 'Insightful', 'Intense', 'Inventive'] },
      { basic: 'Productive', advanced: 'Unproductive', transcription: '/ˌʌnprəˈdʌktɪv/', wrong: ['Unusual', 'Upbeat', 'Urgent', 'Useful'] },
      { basic: 'Engaged', advanced: 'Disengaged', transcription: '/ˌdɪsɪnˈɡeɪdʒd/', wrong: ['Decisive', 'Dedicated', 'Delightful', 'Devoted'] },
      { basic: 'Occupied', advanced: 'Free', transcription: '/friː/', wrong: ['Friendly', 'Focused', 'Formal', 'Flexible'] },
      { basic: 'Moving', advanced: 'Still', transcription: '/stɪl/', wrong: ['Stubborn', 'Stoic', 'Strict', 'Strong'] },
      { basic: 'Working', advanced: 'Resting', transcription: '/ˈrestɪŋ/', wrong: ['Reliable', 'Reserved', 'Resilient', 'Resourceful'] },
      { basic: 'Motivated', advanced: 'Apathetic', transcription: '/ˌæpəˈθetɪk/', wrong: ['Ambitious', 'Analytical', 'Adaptable', 'Articulate'] },
      { basic: 'Dynamic', advanced: 'Stagnant', transcription: '/ˈstæɡnənt/', wrong: ['Stubborn', 'Stoic', 'Strict', 'Strong'] },
      { basic: 'On the go', advanced: 'Stationary', transcription: '/ˈsteɪʃəneri/', wrong: ['Stubborn', 'Stoic', 'Strict', 'Strong'] },
    ],
  },
]
