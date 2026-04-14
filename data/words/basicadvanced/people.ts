// ============================================================
// PEOPLE — Basic → Advanced vocabulary
// Structure: 10 subcategories × 10 words
// Each word has: basic, advanced, transcription, wrong answers (4)
// Used in quiz: show basic word → pick correct advanced synonym
// ============================================================

export interface WordItem {
  basic: string        // простое слово
  advanced: string     // продвинутый синоним (правильный ответ)
  transcription: string
  wrong: [string, string, string, string]  // 4 неправильных варианта
}

export interface Subcategory {
  id: string
  name: string
  words: WordItem[]
}

export const PEOPLE: Subcategory[] = [

  // ─────────────────────────────────────────
  // 1. APPEARANCE
  // ─────────────────────────────────────────
  {
    id: 'appearance',
    name: 'Appearance',
    words: [
      {
        basic: 'Good-looking',
        advanced: 'Attractive',
        transcription: '/əˈtræktɪv/',
        wrong: ['Aggressive', 'Attentive', 'Authentic', 'Assertive'],
      },
      {
        basic: 'Thin',
        advanced: 'Slender',
        transcription: '/ˈslendər/',
        wrong: ['Sincere', 'Stubborn', 'Shallow', 'Striking'],
      },
      {
        basic: 'Fat',
        advanced: 'Overweight',
        transcription: '/ˌoʊvərˈweɪt/',
        wrong: ['Outspoken', 'Observant', 'Ordinary', 'Outdated'],
      },
      {
        basic: 'Old',
        advanced: 'Mature',
        transcription: '/məˈtjʊər/',
        wrong: ['Modest', 'Moody', 'Mellow', 'Messy'],
      },
      {
        basic: 'Young-looking',
        advanced: 'Youthful',
        transcription: '/ˈjuːθfəl/',
        wrong: ['Yielding', 'Yearning', 'Yelling', 'Yielded'],
      },
      {
        basic: 'Well-dressed',
        advanced: 'Elegant',
        transcription: '/ˈelɪɡənt/',
        wrong: ['Energetic', 'Emotional', 'Efficient', 'Eccentric'],
      },
      {
        basic: 'Strong',
        advanced: 'Muscular',
        transcription: '/ˈmʌskjʊlər/',
        wrong: ['Mysterious', 'Meticulous', 'Motivated', 'Merciful'],
      },
      {
        basic: 'Ugly',
        advanced: 'Unattractive',
        transcription: '/ˌʌnəˈtræktɪv/',
        wrong: ['Unreliable', 'Uncertain', 'Unfriendly', 'Unusual'],
      },
      {
        basic: 'Tall',
        advanced: 'Towering',
        transcription: '/ˈtaʊərɪŋ/',
        wrong: ['Tolerant', 'Timid', 'Talented', 'Talkative'],
      },
      {
        basic: 'Neat',
        advanced: 'Polished',
        transcription: '/ˈpɒlɪʃt/',
        wrong: ['Passive', 'Peculiar', 'Persistent', 'Playful'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 2. PERSONALITY
  // ─────────────────────────────────────────
  {
    id: 'personality',
    name: 'Personality',
    words: [
      {
        basic: 'Kind',
        advanced: 'Compassionate',
        transcription: '/kəmˈpæʃənət/',
        wrong: ['Competitive', 'Confident', 'Cautious', 'Creative'],
      },
      {
        basic: 'Brave',
        advanced: 'Courageous',
        transcription: '/kəˈreɪdʒəs/',
        wrong: ['Curious', 'Cheerful', 'Careful', 'Clever'],
      },
      {
        basic: 'Shy',
        advanced: 'Reserved',
        transcription: '/rɪˈzɜːrvd/',
        wrong: ['Reliable', 'Resilient', 'Rational', 'Relaxed'],
      },
      {
        basic: 'Rude',
        advanced: 'Arrogant',
        transcription: '/ˈærəɡənt/',
        wrong: ['Ambitious', 'Analytical', 'Adaptable', 'Articulate'],
      },
      {
        basic: 'Funny',
        advanced: 'Witty',
        transcription: '/ˈwɪti/',
        wrong: ['Warm', 'Wise', 'Willing', 'Wholesome'],
      },
      {
        basic: 'Lazy',
        advanced: 'Indolent',
        transcription: '/ˈɪndələnt/',
        wrong: ['Impulsive', 'Insightful', 'Intuitive', 'Inventive'],
      },
      {
        basic: 'Smart',
        advanced: 'Intelligent',
        transcription: '/ɪnˈtelɪdʒənt/',
        wrong: ['Idealistic', 'Imaginative', 'Impulsive', 'Inflexible'],
      },
      {
        basic: 'Honest',
        advanced: 'Sincere',
        transcription: '/sɪnˈsɪər/',
        wrong: ['Stubborn', 'Skeptical', 'Sensitive', 'Spontaneous'],
      },
      {
        basic: 'Stubborn',
        advanced: 'Persistent',
        transcription: '/pərˈsɪstənt/',
        wrong: ['Pessimistic', 'Practical', 'Perceptive', 'Passionate'],
      },
      {
        basic: 'Talkative',
        advanced: 'Outgoing',
        transcription: '/ˈaʊtɡoʊɪŋ/',
        wrong: ['Optimistic', 'Objective', 'Obsessive', 'Organized'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 3. EMOTIONS
  // ─────────────────────────────────────────
  {
    id: 'emotions',
    name: 'Emotions',
    words: [
      {
        basic: 'Happy',
        advanced: 'Elated',
        transcription: '/ɪˈleɪtɪd/',
        wrong: ['Exhausted', 'Envious', 'Empathetic', 'Eager'],
      },
      {
        basic: 'Sad',
        advanced: 'Melancholic',
        transcription: '/ˌmelənˈkɒlɪk/',
        wrong: ['Motivated', 'Mindful', 'Mournful', 'Magnanimous'],
      },
      {
        basic: 'Angry',
        advanced: 'Furious',
        transcription: '/ˈfjʊəriəs/',
        wrong: ['Fearful', 'Frustrated', 'Fulfilled', 'Fascinated'],
      },
      {
        basic: 'Scared',
        advanced: 'Terrified',
        transcription: '/ˈterɪfaɪd/',
        wrong: ['Thrilled', 'Touched', 'Tense', 'Thoughtful'],
      },
      {
        basic: 'Surprised',
        advanced: 'Astonished',
        transcription: '/əˈstɒnɪʃt/',
        wrong: ['Ambitious', 'Anxious', 'Absorbed', 'Amused'],
      },
      {
        basic: 'Tired',
        advanced: 'Exhausted',
        transcription: '/ɪɡˈzɔːstɪd/',
        wrong: ['Elated', 'Envious', 'Eager', 'Empowered'],
      },
      {
        basic: 'Excited',
        advanced: 'Thrilled',
        transcription: '/θrɪld/',
        wrong: ['Troubled', 'Timid', 'Tolerant', 'Tense'],
      },
      {
        basic: 'Worried',
        advanced: 'Anxious',
        transcription: '/ˈæŋkʃəs/',
        wrong: ['Amused', 'Absorbed', 'Admired', 'Assured'],
      },
      {
        basic: 'Jealous',
        advanced: 'Envious',
        transcription: '/ˈenviəs/',
        wrong: ['Elated', 'Empathetic', 'Engaged', 'Enthusiastic'],
      },
      {
        basic: 'Ashamed',
        advanced: 'Humiliated',
        transcription: '/hjuːˈmɪlieɪtɪd/',
        wrong: ['Hopeful', 'Horrified', 'Heartbroken', 'Hesitant'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 4. RELATIONSHIPS
  // ─────────────────────────────────────────
  {
    id: 'relationships',
    name: 'Relationships',
    words: [
      {
        basic: 'Friend',
        advanced: 'Companion',
        transcription: '/kəmˈpæniən/',
        wrong: ['Colleague', 'Critic', 'Competitor', 'Counselor'],
      },
      {
        basic: 'Enemy',
        advanced: 'Rival',
        transcription: '/ˈraɪvəl/',
        wrong: ['Relative', 'Resident', 'Recipient', 'Referee'],
      },
      {
        basic: 'Partner',
        advanced: 'Companion',
        transcription: '/kəmˈpæniən/',
        wrong: ['Competitor', 'Counselor', 'Candidate', 'Contributor'],
      },
      {
        basic: 'Boss',
        advanced: 'Supervisor',
        transcription: '/ˈsuːpərvaɪzər/',
        wrong: ['Supporter', 'Successor', 'Subscriber', 'Spectator'],
      },
      {
        basic: 'Helper',
        advanced: 'Ally',
        transcription: '/ˈælaɪ/',
        wrong: ['Agent', 'Author', 'Advisor', 'Anchor'],
      },
      {
        basic: 'Stranger',
        advanced: 'Acquaintance',
        transcription: '/əˈkweɪntəns/',
        wrong: ['Ambassador', 'Advocate', 'Associate', 'Architect'],
      },
      {
        basic: 'Teacher',
        advanced: 'Mentor',
        transcription: '/ˈmentɔːr/',
        wrong: ['Manager', 'Mediator', 'Member', 'Monitor'],
      },
      {
        basic: 'Follower',
        advanced: 'Devotee',
        transcription: '/ˌdevəˈtiː/',
        wrong: ['Delegate', 'Designer', 'Director', 'Developer'],
      },
      {
        basic: 'Couple',
        advanced: 'Partners',
        transcription: '/ˈpɑːrtnərz/',
        wrong: ['Providers', 'Producers', 'Participants', 'Presenters'],
      },
      {
        basic: 'Loner',
        advanced: 'Introvert',
        transcription: '/ˈɪntrəvɜːrt/',
        wrong: ['Investor', 'Inspector', 'Influencer', 'Instructor'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 5. ACTIONS
  // ─────────────────────────────────────────
  {
    id: 'actions',
    name: 'Actions',
    words: [
      {
        basic: 'Walk',
        advanced: 'Stroll',
        transcription: '/stroʊl/',
        wrong: ['Stride', 'Stumble', 'Struggle', 'Strive'],
      },
      {
        basic: 'Look',
        advanced: 'Observe',
        transcription: '/əbˈzɜːrv/',
        wrong: ['Obtain', 'Occupy', 'Offend', 'Omit'],
      },
      {
        basic: 'Say',
        advanced: 'Express',
        transcription: '/ɪkˈspres/',
        wrong: ['Expand', 'Expose', 'Explore', 'Exploit'],
      },
      {
        basic: 'Help',
        advanced: 'Assist',
        transcription: '/əˈsɪst/',
        wrong: ['Avoid', 'Accept', 'Achieve', 'Advise'],
      },
      {
        basic: 'Show',
        advanced: 'Demonstrate',
        transcription: '/ˈdemənstreɪt/',
        wrong: ['Decrease', 'Deliver', 'Demand', 'Depend'],
      },
      {
        basic: 'Think',
        advanced: 'Reflect',
        transcription: '/rɪˈflekt/',
        wrong: ['Refuse', 'Release', 'Rely', 'Reveal'],
      },
      {
        basic: 'Stop',
        advanced: 'Cease',
        transcription: '/siːs/',
        wrong: ['Confirm', 'Concern', 'Capture', 'Compare'],
      },
      {
        basic: 'Start',
        advanced: 'Initiate',
        transcription: '/ɪˈnɪʃieɪt/',
        wrong: ['Indicate', 'Influence', 'Inspect', 'Integrate'],
      },
      {
        basic: 'Change',
        advanced: 'Transform',
        transcription: '/trænsˈfɔːrm/',
        wrong: ['Transfer', 'Trigger', 'Tackle', 'Target'],
      },
      {
        basic: 'Use',
        advanced: 'Utilize',
        transcription: '/ˈjuːtəlaɪz/',
        wrong: ['Upgrade', 'Update', 'Undergo', 'Undermine'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 6. SPEECH
  // ─────────────────────────────────────────
  {
    id: 'speech',
    name: 'Speech',
    words: [
      {
        basic: 'Say again',
        advanced: 'Reiterate',
        transcription: '/riˈɪtəreɪt/',
        wrong: ['Reflect', 'Respond', 'Reveal', 'Resolve'],
      },
      {
        basic: 'Talk about',
        advanced: 'Discuss',
        transcription: '/dɪˈskʌs/',
        wrong: ['Dismiss', 'Display', 'Distribute', 'Divide'],
      },
      {
        basic: 'Ask',
        advanced: 'Inquire',
        transcription: '/ɪnˈkwaɪər/',
        wrong: ['Inform', 'Inspire', 'Instruct', 'Integrate'],
      },
      {
        basic: 'Promise',
        advanced: 'Commit',
        transcription: '/kəˈmɪt/',
        wrong: ['Confirm', 'Compare', 'Compete', 'Compile'],
      },
      {
        basic: 'Lie',
        advanced: 'Deceive',
        transcription: '/dɪˈsiːv/',
        wrong: ['Declare', 'Defend', 'Define', 'Deliver'],
      },
      {
        basic: 'Agree',
        advanced: 'Consent',
        transcription: '/kənˈsent/',
        wrong: ['Contain', 'Convince', 'Convert', 'Convey'],
      },
      {
        basic: 'Complain',
        advanced: 'Criticize',
        transcription: '/ˈkrɪtɪsaɪz/',
        wrong: ['Calculate', 'Capture', 'Clarify', 'Classify'],
      },
      {
        basic: 'Praise',
        advanced: 'Compliment',
        transcription: '/ˈkɒmplɪment/',
        wrong: ['Compete', 'Complete', 'Compose', 'Compress'],
      },
      {
        basic: 'Explain',
        advanced: 'Elaborate',
        transcription: '/ɪˈlæbəreɪt/',
        wrong: ['Eliminate', 'Employ', 'Enable', 'Enforce'],
      },
      {
        basic: 'Warn',
        advanced: 'Caution',
        transcription: '/ˈkɔːʃən/',
        wrong: ['Calculate', 'Capture', 'Categorize', 'Challenge'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 7. THINKING
  // ─────────────────────────────────────────
  {
    id: 'thinking',
    name: 'Thinking',
    words: [
      {
        basic: 'Understand',
        advanced: 'Comprehend',
        transcription: '/ˌkɒmprɪˈhend/',
        wrong: ['Compete', 'Compile', 'Complete', 'Conform'],
      },
      {
        basic: 'Guess',
        advanced: 'Assume',
        transcription: '/əˈsjuːm/',
        wrong: ['Adjust', 'Achieve', 'Acquire', 'Agree'],
      },
      {
        basic: 'Doubt',
        advanced: 'Question',
        transcription: '/ˈkwestʃən/',
        wrong: ['Qualify', 'Quantify', 'Quote', 'Query'],
      },
      {
        basic: 'Remember',
        advanced: 'Recall',
        transcription: '/rɪˈkɔːl/',
        wrong: ['Reject', 'Relate', 'Release', 'Replace'],
      },
      {
        basic: 'Forget',
        advanced: 'Overlook',
        transcription: '/ˌoʊvərˈlʊk/',
        wrong: ['Overcome', 'Overuse', 'Overrate', 'Override'],
      },
      {
        basic: 'Notice',
        advanced: 'Perceive',
        transcription: '/pərˈsiːv/',
        wrong: ['Perform', 'Permit', 'Pursue', 'Produce'],
      },
      {
        basic: 'Decide',
        advanced: 'Determine',
        transcription: '/dɪˈtɜːrmɪn/',
        wrong: ['Develop', 'Decrease', 'Deliver', 'Describe'],
      },
      {
        basic: 'Plan',
        advanced: 'Strategize',
        transcription: '/ˈstrætədʒaɪz/',
        wrong: ['Summarize', 'Supervise', 'Support', 'Succeed'],
      },
      {
        basic: 'Compare',
        advanced: 'Evaluate',
        transcription: '/ɪˈvæljueɪt/',
        wrong: ['Eliminate', 'Encourage', 'Enhance', 'Establish'],
      },
      {
        basic: 'Make up',
        advanced: 'Imagine',
        transcription: '/ɪˈmædʒɪn/',
        wrong: ['Improve', 'Include', 'Indicate', 'Influence'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 8. SOCIAL
  // ─────────────────────────────────────────
  {
    id: 'social',
    name: 'Social',
    words: [
      {
        basic: 'Meet',
        advanced: 'Encounter',
        transcription: '/ɪnˈkaʊntər/',
        wrong: ['Endure', 'Enforce', 'Enhance', 'Engage'],
      },
      {
        basic: 'Join',
        advanced: 'Participate',
        transcription: '/pɑːrˈtɪsɪpeɪt/',
        wrong: ['Perceive', 'Perform', 'Permit', 'Preserve'],
      },
      {
        basic: 'Avoid',
        advanced: 'Exclude',
        transcription: '/ɪkˈskluːd/',
        wrong: ['Examine', 'Exchange', 'Execute', 'Expand'],
      },
      {
        basic: 'Share',
        advanced: 'Contribute',
        transcription: '/kənˈtrɪbjuːt/',
        wrong: ['Control', 'Convert', 'Convey', 'Cooperate'],
      },
      {
        basic: 'Fight',
        advanced: 'Confront',
        transcription: '/kənˈfrʌnt/',
        wrong: ['Conform', 'Connect', 'Consider', 'Consist'],
      },
      {
        basic: 'Celebrate',
        advanced: 'Commemorate',
        transcription: '/kəˈmeməreɪt/',
        wrong: ['Communicate', 'Compare', 'Complete', 'Compile'],
      },
      {
        basic: 'Follow rules',
        advanced: 'Comply',
        transcription: '/kəmˈplaɪ/',
        wrong: ['Compete', 'Compose', 'Compute', 'Confirm'],
      },
      {
        basic: 'Belong',
        advanced: 'Identify with',
        transcription: '/aɪˈdentɪfaɪ wɪð/',
        wrong: ['Integrate with', 'Interact with', 'Invest in', 'Improve on'],
      },
      {
        basic: 'Lead',
        advanced: 'Influence',
        transcription: '/ˈɪnfluəns/',
        wrong: ['Inspect', 'Instruct', 'Integrate', 'Intend'],
      },
      {
        basic: 'Support',
        advanced: 'Advocate',
        transcription: '/ˈædvəkeɪt/',
        wrong: ['Achieve', 'Acquire', 'Adapt', 'Address'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 9. ENERGY
  // ─────────────────────────────────────────
  {
    id: 'energy',
    name: 'Energy',
    words: [
      {
        basic: 'Tired',
        advanced: 'Drained',
        transcription: '/dreɪnd/',
        wrong: ['Driven', 'Devoted', 'Dynamic', 'Determined'],
      },
      {
        basic: 'Active',
        advanced: 'Vibrant',
        transcription: '/ˈvaɪbrənt/',
        wrong: ['Vigilant', 'Virtuous', 'Versatile', 'Vulnerable'],
      },
      {
        basic: 'Full of energy',
        advanced: 'Enthusiastic',
        transcription: '/ɪnˌθjuːziˈæstɪk/',
        wrong: ['Efficient', 'Empathetic', 'Ethical', 'Extreme'],
      },
      {
        basic: 'Calm',
        advanced: 'Composed',
        transcription: '/kəmˈpoʊzd/',
        wrong: ['Cautious', 'Capable', 'Cheerful', 'Consistent'],
      },
      {
        basic: 'Stressed',
        advanced: 'Overwhelmed',
        transcription: '/ˌoʊvərˈwelmd/',
        wrong: ['Overrated', 'Overused', 'Overdone', 'Overlooked'],
      },
      {
        basic: 'Motivated',
        advanced: 'Driven',
        transcription: '/ˈdrɪvən/',
        wrong: ['Distant', 'Diverse', 'Decisive', 'Doubtful'],
      },
      {
        basic: 'Lazy',
        advanced: 'Lethargic',
        transcription: '/ləˈθɑːrdʒɪk/',
        wrong: ['Logical', 'Loyal', 'Liberal', 'Literal'],
      },
      {
        basic: 'Happy',
        advanced: 'Upbeat',
        transcription: '/ˈʌpbiːt/',
        wrong: ['Upgrade', 'Upfront', 'Upright', 'Upset'],
      },
      {
        basic: 'Nervous',
        advanced: 'Agitated',
        transcription: '/ˈædʒɪteɪtɪd/',
        wrong: ['Adapted', 'Admired', 'Admitted', 'Adopted'],
      },
      {
        basic: 'Relaxed',
        advanced: 'Laid-back',
        transcription: '/ˌleɪdˈbæk/',
        wrong: ['Laid-off', 'Laid-out', 'Left-back', 'Low-key'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 10. IDENTITY
  // ─────────────────────────────────────────
  {
    id: 'identity',
    name: 'Identity',
    words: [
      {
        basic: 'Leader',
        advanced: 'Visionary',
        transcription: '/ˈvɪʒəneri/',
        wrong: ['Volunteer', 'Vendor', 'Veteran', 'Validator'],
      },
      {
        basic: 'Follower',
        advanced: 'Conformist',
        transcription: '/kənˈfɔːrmɪst/',
        wrong: ['Collaborator', 'Competitor', 'Consultant', 'Consumer'],
      },
      {
        basic: 'Creative person',
        advanced: 'Innovator',
        transcription: '/ˈɪnəveɪtər/',
        wrong: ['Instructor', 'Inspector', 'Investor', 'Influencer'],
      },
      {
        basic: 'Private person',
        advanced: 'Introvert',
        transcription: '/ˈɪntrəvɜːrt/',
        wrong: ['Investor', 'Inspector', 'Influencer', 'Instructor'],
      },
      {
        basic: 'Open person',
        advanced: 'Extrovert',
        transcription: '/ˈekstrəvɜːrt/',
        wrong: ['Expert', 'Executor', 'Examiner', 'Exhibitor'],
      },
      {
        basic: 'Self-made',
        advanced: 'Ambitious',
        transcription: '/æmˈbɪʃəs/',
        wrong: ['Analytical', 'Adaptable', 'Articulate', 'Assertive'],
      },
      {
        basic: 'Role model',
        advanced: 'Icon',
        transcription: '/ˈaɪkɒn/',
        wrong: ['Index', 'Input', 'Insight', 'Issue'],
      },
      {
        basic: 'Unique person',
        advanced: 'Individual',
        transcription: '/ˌɪndɪˈvɪdʒuəl/',
        wrong: ['Indicator', 'Influence', 'Initiative', 'Insight'],
      },
      {
        basic: 'Fake person',
        advanced: 'Hypocrite',
        transcription: '/ˈhɪpəkrɪt/',
        wrong: ['Highlight', 'Habitat', 'Heritage', 'Hierarchy'],
      },
      {
        basic: 'Real',
        advanced: 'Authentic',
        transcription: '/ɔːˈθentɪk/',
        wrong: ['Automatic', 'Abstract', 'Adaptive', 'Absolute'],
      },
    ],
  },
]
