// ============================================================
// ANTONYMS — Opposites in state
// Structure: 6 subcategories × 10 words
// basic = state word, advanced = its opposite
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
      { basic: 'Conscious', advanced: 'Out cold', transcription: '/ˌaʊt ˈkoʊld/', wrong: ['Out loud', 'Out west', 'Out front', 'Out back'] },
      { basic: 'Alert', advanced: 'Drowsy', transcription: '/ˈdraʊzi/', wrong: ['Dynamic', 'Daring', 'Decisive', 'Devoted'] },
      { basic: 'Sober', advanced: 'Intoxicated', transcription: '/ɪnˈtɑːksɪkeɪtɪd/', wrong: ['Inspired', 'Intense', 'Involved', 'Isolated'] },
      { basic: 'Energized', advanced: 'Exhausted', transcription: '/ɪɡˈzɔːstɪd/', wrong: ['Excited', 'Eager', 'Earnest', 'Efficient'] },
      { basic: 'Rested', advanced: 'Fatigued', transcription: '/fəˈtiːɡd/', wrong: ['Faithful', 'Flexible', 'Focused', 'Formal'] },
      { basic: 'Sharp', advanced: 'Groggy', transcription: '/ˈɡrɑːɡi/', wrong: ['Grateful', 'Genuine', 'Generous', 'Gentle'] },
      { basic: 'Attentive', advanced: 'Absent-minded', transcription: '/ˌæbsənt ˈmaɪndɪd/', wrong: ['Ambitious', 'Analytical', 'Adaptable', 'Articulate'] },
      { basic: 'Present', advanced: 'Spaced out', transcription: '/ˌspeɪst ˈaʊt/', wrong: ['Sold out', 'Sworn out', 'Stood out', 'Stepped out'] },
      { basic: 'Clear-headed', advanced: 'Dazed', transcription: '/deɪzd/', wrong: ['Dazzled', 'Dozed', 'Doused', 'Dared'] },
    ],
  },

  // 2. HUNGER & THIRST
  {
    id: 'hunger',
    name: 'Hunger & Thirst',
    words: [
      { basic: 'Hungry', advanced: 'Satiated', transcription: '/ˈseɪʃieɪtɪd/', wrong: ['Saturated', 'Situated', 'Salivated', 'Sedated'] },
      { basic: 'Starving', advanced: 'Stuffed', transcription: '/stʌft/', wrong: ['Stubborn', 'Stoic', 'Strict', 'Strong'] },
      { basic: 'Thirsty', advanced: 'Quenched', transcription: '/kwentʃt/', wrong: ['Quiet', 'Quick', 'Quirky', 'Qualified'] },
      { basic: 'Craving', advanced: 'Nauseated', transcription: '/ˈnɔːzieɪtɪd/', wrong: ['Nervous', 'Neutral', 'Noisy', 'Naive'] },
      { basic: 'Famished', advanced: 'Gorged', transcription: '/ɡɔːrdʒd/', wrong: ['Gouged', 'Gauged', 'Gargled', 'Gripped'] },
      { basic: 'Empty', advanced: 'Replete', transcription: '/rɪˈpliːt/', wrong: ['Reliable', 'Reserved', 'Resilient', 'Resourceful'] },
      { basic: 'Dehydrated', advanced: 'Replenished', transcription: '/rɪˈplenɪʃt/', wrong: ['Relocated', 'Renovated', 'Replicated', 'Rehearsed'] },
      { basic: 'Malnourished', advanced: 'Well-fed', transcription: '/ˌwel ˈfed/', wrong: ['Well-known', 'Well-read', 'Well-off', 'Well-paid'] },
      { basic: 'Appetizing', advanced: 'Revolting', transcription: '/rɪˈvoʊltɪŋ/', wrong: ['Revealing', 'Rewarding', 'Reviving', 'Reasoning'] },
      { basic: 'Tasty', advanced: 'Bland', transcription: '/blænd/', wrong: ['Brave', 'Brief', 'Bright', 'Broad'] },
    ],
  },

  // 3. HEALTH
  {
    id: 'health-state',
    name: 'Health',
    words: [
      { basic: 'Healthy', advanced: 'Ill', transcription: '/ɪl/', wrong: ['Impulsive', 'Insightful', 'Intense', 'Inventive'] },
      { basic: 'Fit', advanced: 'Out of shape', transcription: '/ˌaʊt əv ˈʃeɪp/', wrong: ['Out of order', 'Out of luck', 'Out of reach', 'Out of tune'] },
      { basic: 'Strong', advanced: 'Frail', transcription: '/freɪl/', wrong: ['Fair', 'Fame', 'Flat', 'Fail'] },
      { basic: 'Recovered', advanced: 'Bedridden', transcription: '/ˈbedrɪdn/', wrong: ['Bewildered', 'Bearded', 'Bordered', 'Bedeviled'] },
      { basic: 'Energetic', advanced: 'Lethargic', transcription: '/ləˈθɑːrdʒɪk/', wrong: ['Logical', 'Loyal', 'Liberal', 'Lively'] },
      { basic: 'Stable', advanced: 'Critical', transcription: '/ˈkrɪtɪkəl/', wrong: ['Creative', 'Curious', 'Cautious', 'Cheerful'] },
      { basic: 'Immune', advanced: 'Susceptible', transcription: '/səˈseptəbəl/', wrong: ['Suitable', 'Sustainable', 'Sociable', 'Sensible'] },
      { basic: 'Healed', advanced: 'Injured', transcription: '/ˈɪndʒərd/', wrong: ['Inspired', 'Informed', 'Invited', 'Ignored'] },
      { basic: 'Balanced', advanced: 'Erratic', transcription: '/ɪˈrætɪk/', wrong: ['Eager', 'Earnest', 'Elegant', 'Elusive'] },
      { basic: 'Thriving', advanced: 'Declining', transcription: '/dɪˈklaɪnɪŋ/', wrong: ['Decisive', 'Dedicated', 'Delightful', 'Devoted'] },
    ],
  },

  // 4. MOOD
  {
    id: 'mood',
    name: 'Mood',
    words: [
      { basic: 'Happy', advanced: 'Miserable', transcription: '/ˈmɪzrəbəl/', wrong: ['Motivated', 'Mindful', 'Mature', 'Modest'] },
      { basic: 'Lively', advanced: 'Lifeless', transcription: '/ˈlaɪfləs/', wrong: ['Lawless', 'Limitless', 'Loveless', 'Legless'] },
      { basic: 'Playful', advanced: 'Solemn', transcription: '/ˈsɑːləm/', wrong: ['Sociable', 'Stubborn', 'Shallow', 'Sarcastic'] },
      { basic: 'Cheery', advanced: 'Grumpy', transcription: '/ˈɡrʌmpi/', wrong: ['Gentle', 'Grateful', 'Graceful', 'Gifted'] },
      { basic: 'Excited', advanced: 'Subdued', transcription: '/səbˈduːd/', wrong: ['Selfish', 'Sleepy', 'Sturdy', 'Shallow'] },
      { basic: 'Carefree', advanced: 'Heavy-hearted', transcription: '/ˌhevi ˈhɑːrtɪd/', wrong: ['Hot-headed', 'Hard-hearted', 'Half-hearted', 'Heavy-handed'] },
      { basic: 'Sunny', advanced: 'Sullen', transcription: '/ˈsʌlən/', wrong: ['Sunken', 'Sudden', 'Sullied', 'Sallow'] },
      { basic: 'Pleasant', advanced: 'Surly', transcription: '/ˈsɜːrli/', wrong: ['Surely', 'Sorely', 'Sourly', 'Smelly'] },
      { basic: 'Enthusiastic', advanced: 'Jaded', transcription: '/ˈdʒeɪdɪd/', wrong: ['Jarred', 'Jammed', 'Jaunty', 'Jealous'] },
      { basic: 'Motivated', advanced: 'Burned out', transcription: '/ˌbɜːrnd ˈaʊt/', wrong: ['Bold', 'Brave', 'Bright', 'Broad'] },
    ],
  },

  // 5. COMFORT
  {
    id: 'comfort',
    name: 'Comfort',
    words: [
      { basic: 'Toasty', advanced: 'Freezing', transcription: '/ˈfriːzɪŋ/', wrong: ['Friendly', 'Focused', 'Formal', 'Flexible'] },
      { basic: 'Comfortable', advanced: 'Ill at ease', transcription: '/ˌɪl ət ˈiːz/', wrong: ['Ill-advised', 'Ill-fated', 'Ill-mannered', 'Ill-tempered'] },
      { basic: 'Secure', advanced: 'Precarious', transcription: '/prɪˈkeriəs/', wrong: ['Patient', 'Peculiar', 'Previous', 'Precious'] },
      { basic: 'Sheltered', advanced: 'Exposed', transcription: '/ɪkˈspoʊzd/', wrong: ['Expressive', 'Experienced', 'Energetic', 'Enthusiastic'] },
      { basic: 'Settled', advanced: 'Turbulent', transcription: '/ˈtɜːrbjələnt/', wrong: ['Talented', 'Tolerant', 'Thoughtful', 'Talkative'] },
      { basic: 'Cozy', advanced: 'Bleak', transcription: '/bliːk/', wrong: ['Bold', 'Brave', 'Bright', 'Broad'] },
      { basic: 'Grounded', advanced: 'Disoriented', transcription: '/dɪsˈɔːrientɪd/', wrong: ['Decisive', 'Dedicated', 'Delightful', 'Devoted'] },
      { basic: 'Familiar', advanced: 'Alien', transcription: '/ˈeɪliən/', wrong: ['Active', 'Ample', 'Amiable', 'Ancient'] },
      { basic: 'Protected', advanced: 'Defenseless', transcription: '/dɪˈfenslɪs/', wrong: ['Dependable', 'Desirable', 'Delicate', 'Disciplined'] },
      { basic: 'Soft', advanced: 'Scratchy', transcription: '/ˈskrætʃi/', wrong: ['Sturdy', 'Scruffy', 'Scrawny', 'Sloppy'] },
    ],
  },

  // 6. ACTIVITY LEVEL
  {
    id: 'activity-level',
    name: 'Activity Level',
    words: [
      { basic: 'Active', advanced: 'Sedentary', transcription: '/ˈsedənteri/', wrong: ['Sedative', 'Solitary', 'Salutary', 'Secretary'] },
      { basic: 'Busy', advanced: 'Idle', transcription: '/ˈaɪdl/', wrong: ['Ideal', 'Icy', 'Idol', 'Item'] },
      { basic: 'Efficient', advanced: 'Wasteful', transcription: '/ˈweɪstfəl/', wrong: ['Wealthy', 'Weary', 'Wicked', 'Wishful'] },
      { basic: 'Engaged', advanced: 'Detached', transcription: '/dɪˈtætʃt/', wrong: ['Dedicated', 'Defiant', 'Decent', 'Devoted'] },
      { basic: 'Booked up', advanced: 'Free', transcription: '/friː/', wrong: ['Fear', 'Fair', 'Fiber', 'Field'] },
      { basic: 'Moving', advanced: 'Motionless', transcription: '/ˈmoʊʃənləs/', wrong: ['Mindless', 'Moonless', 'Mirthless', 'Meaningless'] },
      { basic: 'Working', advanced: 'Off duty', transcription: '/ˌɔːf ˈduːti/', wrong: ['Off limits', 'Off balance', 'Off guard', 'Off track'] },
      { basic: 'Rushed', advanced: 'Leisurely', transcription: '/ˈliːʒərli/', wrong: ['Lavish', 'Lonely', 'Lawless', 'Learned'] },
      { basic: 'Dynamic', advanced: 'Stagnant', transcription: '/ˈstæɡnənt/', wrong: ['Stubborn', 'Stoic', 'Strict', 'Strong'] },
      { basic: 'On the go', advanced: 'Stationary', transcription: '/ˈsteɪʃəneri/', wrong: ['Stationery', 'Sensory', 'Salutary', 'Statuary'] },
    ],
  },
]
