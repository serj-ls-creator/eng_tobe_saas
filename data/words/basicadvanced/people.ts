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
        advanced: 'Gorgeous',
        transcription: '/ˈɡɔːrdʒəs/',
        wrong: ['Generous', 'Genuine', 'Gloomy', 'Grateful'],
      },
      {
        basic: 'Thin',
        advanced: 'Slender',
        transcription: '/ˈslendər/',
        wrong: ['Sincere', 'Stubborn', 'Shallow', 'Striking'],
      },
      {
        basic: 'Cute',
        advanced: 'Adorable',
        transcription: '/əˈdɔːrəbəl/',
        wrong: ['Anxious', 'Ancient', 'Annoying', 'Awkward'],
      },
      {
        basic: 'Grown-up',
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
        advanced: 'Stylish',
        transcription: '/ˈstaɪlɪʃ/',
        wrong: ['Stubborn', 'Selfish', 'Sensitive', 'Shallow'],
      },
      {
        basic: 'Strong',
        advanced: 'Muscular',
        transcription: '/ˈmʌskjʊlər/',
        wrong: ['Mysterious', 'Meticulous', 'Motivated', 'Merciful'],
      },
      {
        basic: 'Ugly',
        advanced: 'Hideous',
        transcription: '/ˈhɪdiəs/',
        wrong: ['Humble', 'Honest', 'Hopeful', 'Hesitant'],
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
        advanced: 'Fearless',
        transcription: '/ˈfɪrləs/',
        wrong: ['Fussy', 'Faithful', 'Fancy', 'Frantic'],
      },
      {
        basic: 'Shy',
        advanced: 'Reserved',
        transcription: '/rɪˈzɜːrvd/',
        wrong: ['Reliable', 'Resilient', 'Rational', 'Relaxed'],
      },
      {
        basic: 'Full of yourself',
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
        basic: 'Unreliable',
        advanced: 'Flaky',
        transcription: '/ˈfleɪki/',
        wrong: ['Fragile', 'Fierce', 'Frugal', 'Fortunate'],
      },
      {
        basic: 'Smart',
        advanced: 'Brilliant',
        transcription: '/ˈbrɪljənt/',
        wrong: ['Bossy', 'Blunt', 'Bitter', 'Boastful'],
      },
      {
        basic: 'Honest',
        advanced: 'Sincere',
        transcription: '/sɪnˈsɪər/',
        wrong: ['Stubborn', 'Skeptical', 'Sensitive', 'Spontaneous'],
      },
      {
        basic: 'Stubborn',
        advanced: 'Headstrong',
        transcription: '/ˈhedstrɔːŋ/',
        wrong: ['Hasty', 'Helpful', 'Harmless', 'Hospitable'],
      },
      {
        basic: 'Friendly',
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
        advanced: 'Devastated',
        transcription: '/ˈdevəsteɪtɪd/',
        wrong: ['Determined', 'Delighted', 'Defensive', 'Dedicated'],
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
        advanced: 'Stunned',
        transcription: '/stʌnd/',
        wrong: ['Sincere', 'Skeptical', 'Satisfied', 'Shameless'],
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
        advanced: 'Mortified',
        transcription: '/ˈmɔːrtɪfaɪd/',
        wrong: ['Motivated', 'Mindful', 'Moody', 'Merciful'],
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
        basic: 'Close friend',
        advanced: 'Confidant',
        transcription: '/ˈkɑːnfɪdænt/',
        wrong: ['Candidate', 'Colleague', 'Critic', 'Contractor'],
      },
      {
        basic: 'Enemy',
        advanced: 'Nemesis',
        transcription: '/ˈneməsɪs/',
        wrong: ['Neighbor', 'Narrator', 'Novice', 'Nominee'],
      },
      {
        basic: 'Perfect partner',
        advanced: 'Soulmate',
        transcription: '/ˈsoʊlmeɪt/',
        wrong: ['Survivor', 'Sponsor', 'Spectator', 'Successor'],
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
        basic: 'Casual friend',
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
        basic: 'Group of friends',
        advanced: 'Entourage',
        transcription: '/ˌɑːntʊˈrɑːʒ/',
        wrong: ['Engineer', 'Employer', 'Executive', 'Examiner'],
      },
      {
        basic: 'Successful couple',
        advanced: 'Power couple',
        transcription: '/ˈpaʊər ˈkʌpəl/',
        wrong: ['Providers', 'Producers', 'Participants', 'Presenters'],
      },
      {
        basic: 'Loner',
        advanced: 'Lone wolf',
        transcription: '/ˌloʊn ˈwʊlf/',
        wrong: ['Landlord', 'Lawyer', 'Lecturer', 'Librarian'],
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
        wrong: ['Stumble', 'Struggle', 'Strive', 'Strict'],
      },
      {
        basic: 'Look',
        advanced: 'Gaze',
        transcription: '/ɡeɪz/',
        wrong: ['Gather', 'Guide', 'Grind', 'Gamble'],
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
        advanced: 'Launch',
        transcription: '/lɔːntʃ/',
        wrong: ['Lease', 'Linger', 'Locate', 'Lurk'],
      },
      {
        basic: 'Change',
        advanced: 'Transform',
        transcription: '/trænsˈfɔːrm/',
        wrong: ['Transfer', 'Trigger', 'Tackle', 'Target'],
      },
      {
        basic: 'Use',
        advanced: 'Leverage',
        transcription: '/ˈlevərɪdʒ/',
        wrong: ['Lecture', 'Lighten', 'Liberate', 'Legislate'],
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
        basic: 'Talk about others',
        advanced: 'Gossip',
        transcription: '/ˈɡɑːsɪp/',
        wrong: ['Greet', 'Glare', 'Guarantee', 'Gulp'],
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
        advanced: 'Rant',
        transcription: '/rænt/',
        wrong: ['Rush', 'Roam', 'Rescue', 'Ripple'],
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
        advanced: 'Grasp',
        transcription: '/ɡræsp/',
        wrong: ['Guard', 'Glow', 'Grill', 'Gift'],
      },
      {
        basic: 'Guess',
        advanced: 'Assume',
        transcription: '/əˈsjuːm/',
        wrong: ['Adjust', 'Achieve', 'Acquire', 'Agree'],
      },
      {
        basic: 'Doubt',
        advanced: 'Second-guess',
        transcription: '/ˌsekənd ˈɡes/',
        wrong: ['Suppress', 'Summarize', 'Sacrifice', 'Simplify'],
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
        basic: 'Judge',
        advanced: 'Evaluate',
        transcription: '/ɪˈvæljueɪt/',
        wrong: ['Eliminate', 'Encourage', 'Enhance', 'Establish'],
      },
      {
        basic: 'Picture in your mind',
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
        basic: 'Meet by chance',
        advanced: 'Bump into',
        transcription: '/ˈbʌmp ˌɪntuː/',
        wrong: ['Borrow', 'Bargain', 'Bounce', 'Bribe'],
      },
      {
        basic: 'Join',
        advanced: 'Participate',
        transcription: '/pɑːrˈtɪsɪpeɪt/',
        wrong: ['Perceive', 'Perform', 'Permit', 'Preserve'],
      },
      {
        basic: 'Avoid',
        advanced: 'Dodge',
        transcription: '/dɑːdʒ/',
        wrong: ['Deliver', 'Deserve', 'Drift', 'Debate'],
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
        basic: 'Meet people for work',
        advanced: 'Network',
        transcription: '/ˈnetwɜːrk/',
        wrong: ['Navigate', 'Neglect', 'Negotiate', 'Nominate'],
      },
      {
        basic: 'Follow rules',
        advanced: 'Comply',
        transcription: '/kəmˈplaɪ/',
        wrong: ['Compete', 'Compose', 'Compute', 'Confirm'],
      },
      {
        basic: 'Get close to someone',
        advanced: 'Bond',
        transcription: '/bɑːnd/',
        wrong: ['Boost', 'Bother', 'Browse', 'Bake'],
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
        basic: 'Out of energy',
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
        basic: 'Positive',
        advanced: 'Upbeat',
        transcription: '/ˈʌpbiːt/',
        wrong: ['Upgrade', 'Upfront', 'Upright', 'Upset'],
      },
      {
        basic: 'Nervous',
        advanced: 'Jittery',
        transcription: '/ˈdʒɪtəri/',
        wrong: ['Jealous', 'Joyful', 'Jaded', 'Jolly'],
      },
      {
        basic: 'Relaxed',
        advanced: 'Laid-back',
        transcription: '/ˌleɪdˈbæk/',
        wrong: ['Laid-off', 'Laid-out', 'Laid-up', 'Lined-up'],
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
        basic: 'Hungry for success',
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
        basic: 'First to do something',
        advanced: 'Trailblazer',
        transcription: '/ˈtreɪlbleɪzər/',
        wrong: ['Traveler', 'Trader', 'Trainer', 'Tutor'],
      },
      {
        basic: 'Fake person',
        advanced: 'Phony',
        transcription: '/ˈfoʊni/',
        wrong: ['Pioneer', 'Patron', 'Pilot', 'Pupil'],
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
