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
      { basic: 'Brave', advanced: 'Cowardly', transcription: '/ˈkaʊərdli/', wrong: ['Cheerful', 'Careful', 'Clumsy', 'Crafty'] },
      { basic: 'Bold', advanced: 'Timid', transcription: '/ˈtɪmɪd/', wrong: ['Tense', 'Tired', 'Touchy', 'Trivial'] },
      { basic: 'Daring', advanced: 'Fearful', transcription: '/ˈfɪrfəl/', wrong: ['Faithful', 'Flexible', 'Formal', 'Frugal'] },
      { basic: 'Heroic', advanced: 'Spineless', transcription: '/ˈspaɪnləs/', wrong: ['Stubborn', 'Shallow', 'Sincere', 'Stoic'] },
      { basic: 'Confident', advanced: 'Insecure', transcription: '/ˌɪnsɪˈkjʊr/', wrong: ['Impulsive', 'Indecisive', 'Intense', 'Ironic'] },
      { basic: 'Assertive', advanced: 'Submissive', transcription: '/səbˈmɪsɪv/', wrong: ['Sensitive', 'Sarcastic', 'Skeptical', 'Sociable'] },
      { basic: 'Resilient', advanced: 'Fragile', transcription: '/ˈfrædʒəl/', wrong: ['Fussy', 'Formal', 'Fortunate', 'Fabulous'] },
      { basic: 'Decisive', advanced: 'Hesitant', transcription: '/ˈhezɪtənt/', wrong: ['Humble', 'Honest', 'Helpful', 'Hopeful'] },
      { basic: 'Gutsy', advanced: 'Meek', transcription: '/miːk/', wrong: ['Moody', 'Messy', 'Mellow', 'Mature'] },
      { basic: 'Fearless', advanced: 'Petrified', transcription: '/ˈpetrɪfaɪd/', wrong: ['Pitiful', 'Peaceful', 'Persuaded', 'Polished'] },
    ],
  },

  // 2. HONESTY
  {
    id: 'honesty',
    name: 'Honesty',
    words: [
      { basic: 'Honest', advanced: 'Deceitful', transcription: '/dɪˈsiːtfəl/', wrong: ['Dutiful', 'Decisive', 'Delightful', 'Dignified'] },
      { basic: 'Truthful', advanced: 'Misleading', transcription: '/mɪsˈliːdɪŋ/', wrong: ['Mindful', 'Modest', 'Merciful', 'Miserable'] },
      { basic: 'Sincere', advanced: 'Phony', transcription: '/ˈfoʊni/', wrong: ['Pious', 'Polite', 'Pushy', 'Patient'] },
      { basic: 'Transparent', advanced: 'Secretive', transcription: '/ˈsiːkrətɪv/', wrong: ['Sensitive', 'Serious', 'Sharp', 'Shy'] },
      { basic: 'Trustworthy', advanced: 'Unreliable', transcription: '/ˌʌnrɪˈlaɪəbəl/', wrong: ['Unusual', 'Upbeat', 'Urgent', 'Useful'] },
      { basic: 'Open', advanced: 'Evasive', transcription: '/ɪˈveɪsɪv/', wrong: ['Elegant', 'Earnest', 'Eccentric', 'Eager'] },
      { basic: 'Genuine', advanced: 'Hypocritical', transcription: '/ˌhɪpəˈkrɪtɪkəl/', wrong: ['Helpful', 'Humble', 'Humorous', 'Hardworking'] },
      { basic: 'Loyal', advanced: 'Treacherous', transcription: '/ˈtretʃərəs/', wrong: ['Tolerant', 'Thoughtful', 'Talkative', 'Talented'] },
      { basic: 'Reliable', advanced: 'Flaky', transcription: '/ˈfleɪki/', wrong: ['Fussy', 'Frugal', 'Fortunate', 'Fabulous'] },
      { basic: 'Ethical', advanced: 'Corrupt', transcription: '/kəˈrʌpt/', wrong: ['Creative', 'Critical', 'Curious', 'Cautious'] },
    ],
  },

  // 3. KINDNESS
  {
    id: 'kindness',
    name: 'Kindness',
    words: [
      { basic: 'Kind', advanced: 'Cruel', transcription: '/ˈkruːəl/', wrong: ['Calm', 'Careful', 'Cheerful', 'Clever'] },
      { basic: 'Generous', advanced: 'Stingy', transcription: '/ˈstɪndʒi/', wrong: ['Stubborn', 'Sleepy', 'Silly', 'Sloppy'] },
      { basic: 'Caring', advanced: 'Apathetic', transcription: '/ˌæpəˈθetɪk/', wrong: ['Athletic', 'Authentic', 'Artistic', 'Apologetic'] },
      { basic: 'Warm', advanced: 'Icy', transcription: '/ˈaɪsi/', wrong: ['Idle', 'Ideal', 'Icky', 'Itchy'] },
      { basic: 'Empathetic', advanced: 'Callous', transcription: '/ˈkæləs/', wrong: ['Capable', 'Careful', 'Cheerful', 'Clever'] },
      { basic: 'Compassionate', advanced: 'Heartless', transcription: '/ˈhɑːrtləs/', wrong: ['Helpful', 'Honest', 'Humble', 'Humorous'] },
      { basic: 'Gentle', advanced: 'Brutal', transcription: '/ˈbruːtl/', wrong: ['Brittle', 'Brisk', 'Broken', 'Brilliant'] },
      { basic: 'Supportive', advanced: 'Dismissive', transcription: '/dɪsˈmɪsɪv/', wrong: ['Decisive', 'Dedicated', 'Delightful', 'Devoted'] },
      { basic: 'Thoughtful', advanced: 'Inconsiderate', transcription: '/ˌɪnkənˈsɪdərət/', wrong: ['Impulsive', 'Indecisive', 'Informal', 'Intense'] },
      { basic: 'Forgiving', advanced: 'Vindictive', transcription: '/vɪnˈdɪktɪv/', wrong: ['Vigilant', 'Virtuous', 'Valuable', 'Vibrant'] },
    ],
  },

  // 4. AMBITION
  {
    id: 'ambition',
    name: 'Ambition',
    words: [
      { basic: 'Ambitious', advanced: 'Complacent', transcription: '/kəmˈpleɪsnt/', wrong: ['Compassionate', 'Competent', 'Confident', 'Cooperative'] },
      { basic: 'Driven', advanced: 'Listless', transcription: '/ˈlɪstləs/', wrong: ['Loyal', 'Logical', 'Lavish', 'Lenient'] },
      { basic: 'Hardworking', advanced: 'Slothful', transcription: '/ˈslɔːθfəl/', wrong: ['Slender', 'Sorrowful', 'Spiteful', 'Soulful'] },
      { basic: 'Focused', advanced: 'Scatterbrained', transcription: '/ˈskætərbreɪnd/', wrong: ['Scholarly', 'Scornful', 'Scruffy', 'Scrawny'] },
      { basic: 'Persistent', advanced: 'Wavering', transcription: '/ˈweɪvərɪŋ/', wrong: ['Wandering', 'Watering', 'Weaving', 'Wasting'] },
      { basic: 'Proactive', advanced: 'Passive', transcription: '/ˈpæsɪv/', wrong: ['Patient', 'Peaceful', 'Perceptive', 'Playful'] },
      { basic: 'Determined', advanced: 'Half-hearted', transcription: '/ˌhæf ˈhɑːrtɪd/', wrong: ['Hard-hearted', 'Heavy-handed', 'Hair-raising', 'Hot-blooded'] },
      { basic: 'Productive', advanced: 'Sluggish', transcription: '/ˈslʌɡɪʃ/', wrong: ['Shallow', 'Shiny', 'Subtle', 'Sturdy'] },
      { basic: 'Disciplined', advanced: 'Reckless', transcription: '/ˈreklɪs/', wrong: ['Radiant', 'Rapid', 'Reliable', 'Reserved'] },
      { basic: 'Goal-oriented', advanced: 'Aimless', transcription: '/ˈeɪmləs/', wrong: ['Adaptable', 'Adventurous', 'Affectionate', 'Agile'] },
    ],
  },

  // 5. SOCIAL NATURE
  {
    id: 'social-nature',
    name: 'Social Nature',
    words: [
      { basic: 'Outgoing', advanced: 'Withdrawn', transcription: '/wɪðˈdrɔːn/', wrong: ['Witty', 'Warm', 'Wise', 'Willing'] },
      { basic: 'Sociable', advanced: 'Reclusive', transcription: '/rɪˈkluːsɪv/', wrong: ['Reliable', 'Resilient', 'Resourceful', 'Rational'] },
      { basic: 'Friendly', advanced: 'Hostile', transcription: '/ˈhɑːstl/', wrong: ['Humble', 'Honest', 'Helpful', 'Hopeful'] },
      { basic: 'Talkative', advanced: 'Reserved', transcription: '/rɪˈzɜːrvd/', wrong: ['Reliable', 'Resilient', 'Rational', 'Relaxed'] },
      { basic: 'Charming', advanced: 'Obnoxious', transcription: '/əbˈnɑːkʃəs/', wrong: ['Observant', 'Outgoing', 'Obedient', 'Optimistic'] },
      { basic: 'Welcoming', advanced: 'Standoffish', transcription: '/ˌstændˈɔːfɪʃ/', wrong: ['Stubborn', 'Stoic', 'Strict', 'Strong'] },
      { basic: 'Cooperative', advanced: 'Obstinate', transcription: '/ˈɑːbstɪnət/', wrong: ['Obedient', 'Observant', 'Obvious', 'Obscure'] },
      { basic: 'Approachable', advanced: 'Aloof', transcription: '/əˈluːf/', wrong: ['Ambitious', 'Analytical', 'Adaptable', 'Articulate'] },
      { basic: 'Inclusive', advanced: 'Cliquey', transcription: '/ˈkliːki/', wrong: ['Cheeky', 'Choosy', 'Clingy', 'Cheesy'] },
      { basic: 'Open-minded', advanced: 'Narrow-minded', transcription: '/ˌnæroʊ ˈmaɪndɪd/', wrong: ['Negative', 'Nervous', 'Neutral', 'Noisy'] },
    ],
  },

  // 6. ATTITUDE
  {
    id: 'attitude',
    name: 'Attitude',
    words: [
      { basic: 'Optimistic', advanced: 'Pessimistic', transcription: '/ˌpesɪˈmɪstɪk/', wrong: ['Passionate', 'Patient', 'Perceptive', 'Playful'] },
      { basic: 'Humble', advanced: 'Arrogant', transcription: '/ˈærəɡənt/', wrong: ['Ambitious', 'Adaptable', 'Affectionate', 'Agile'] },
      { basic: 'Grateful', advanced: 'Entitled', transcription: '/ɪnˈtaɪtld/', wrong: ['Eager', 'Elegant', 'Earnest', 'Enthusiastic'] },
      { basic: 'Calm', advanced: 'Hot-headed', transcription: '/ˌhɑːt ˈhedɪd/', wrong: ['Hard-headed', 'Hot-blooded', 'Heavy-handed', 'Half-hearted'] },
      { basic: 'Flexible', advanced: 'Rigid', transcription: '/ˈrɪdʒɪd/', wrong: ['Reliable', 'Reserved', 'Resilient', 'Resourceful'] },
      { basic: 'Tolerant', advanced: 'Judgmental', transcription: '/dʒʌdʒˈmentl/', wrong: ['Joyful', 'Jealous', 'Jaded', 'Jittery'] },
      { basic: 'Mature', advanced: 'Childish', transcription: '/ˈtʃaɪldɪʃ/', wrong: ['Cheerful', 'Chivalrous', 'Choosy', 'Chilly'] },
      { basic: 'Responsible', advanced: 'Negligent', transcription: '/ˈneɡlɪdʒənt/', wrong: ['Naughty', 'Natural', 'Nimble', 'Noble'] },
      { basic: 'Reasonable', advanced: 'Absurd', transcription: '/əbˈsɜːrd/', wrong: ['Ambitious', 'Anxious', 'Awkward', 'Amused'] },
      { basic: 'Positive', advanced: 'Toxic', transcription: '/ˈtɑːksɪk/', wrong: ['Tense', 'Trendy', 'Tragic', 'Tricky'] },
    ],
  },
]
