// ============================================================
// MIND — Basic → Advanced vocabulary
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

export const MIND: Subcategory[] = [

  // ─────────────────────────────────────────
  // 1. LOGIC
  // ─────────────────────────────────────────
  {
    id: 'logic',
    name: 'Logic',
    words: [
      {
        basic: 'Makes sense',
        advanced: 'Coherent',
        transcription: '/koʊˈhɪrənt/',
        wrong: ['Cunning', 'Courageous', 'Compassionate', 'Cautious'],
      },
      {
        basic: 'Does not make sense',
        advanced: 'Absurd',
        transcription: '/əbˈsɜːrd/',
        wrong: ['Ancient', 'Ambitious', 'Awkward', 'Amused'],
      },
      {
        basic: 'Proof',
        advanced: 'Evidence',
        transcription: '/ˈevɪdəns/',
        wrong: ['Extension', 'Exception', 'Execution', 'Extraction'],
      },
      {
        basic: 'Main idea',
        advanced: 'Premise',
        transcription: '/ˈpremɪs/',
        wrong: ['Pressure', 'Prestige', 'Presence', 'Pleasure'],
      },
      {
        basic: 'Conclusion',
        advanced: 'Inference',
        transcription: '/ˈɪnfərəns/',
        wrong: ['Insult', 'Instinct', 'Industry', 'Illusion'],
      },
      {
        basic: 'Wrong thinking',
        advanced: 'Fallacy',
        transcription: '/ˈfæləsi/',
        wrong: ['Fortune', 'Fashion', 'Fragment', 'Feature'],
      },
      {
        basic: 'Step by step',
        advanced: 'Systematic',
        transcription: '/ˌsɪstəˈmætɪk/',
        wrong: ['Sympathetic', 'Spontaneous', 'Stubborn', 'Suspicious'],
      },
      {
        basic: 'Based on facts',
        advanced: 'Rational',
        transcription: '/ˈræʃənəl/',
        wrong: ['Reactive', 'Redundant', 'Repetitive', 'Restrictive'],
      },
      {
        basic: 'Not logical',
        advanced: 'Irrational',
        transcription: '/ɪˈræʃənəl/',
        wrong: ['Impatient', 'Innocent', 'Ignorant', 'Immune'],
      },
      {
        basic: 'Clear thinking',
        advanced: 'Analytical',
        transcription: '/ˌænəˈlɪtɪkəl/',
        wrong: ['Artistic', 'Anxious', 'Arrogant', 'Adventurous'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 2. LEARNING
  // ─────────────────────────────────────────
  {
    id: 'learning',
    name: 'Learning',
    words: [
      {
        basic: 'Learn',
        advanced: 'Absorb',
        transcription: '/əbˈzɔːrb/',
        wrong: ['Admire', 'Adjust', 'Arrange', 'Assist'],
      },
      {
        basic: 'Remember',
        advanced: 'Retain',
        transcription: '/rɪˈteɪn/',
        wrong: ['Refuse', 'Rescue', 'Resign', 'Retreat'],
      },
      {
        basic: 'Practice',
        advanced: 'Reinforce',
        transcription: '/ˌriːɪnˈfɔːrs/',
        wrong: ['Reveal', 'Reject', 'Rebel', 'Recycle'],
      },
      {
        basic: 'Learn perfectly',
        advanced: 'Master',
        transcription: '/ˈmæstər/',
        wrong: ['Mourn', 'Mingle', 'Murmur', 'Muddle'],
      },
      {
        basic: 'Bad at something',
        advanced: 'Novice',
        transcription: '/ˈnɑːvɪs/',
        wrong: ['Neighbor', 'Nuisance', 'Narrator', 'Nominee'],
      },
      {
        basic: 'Good at something',
        advanced: 'Proficient',
        transcription: '/prəˈfɪʃənt/',
        wrong: ['Persistent', 'Prominent', 'Proactive', 'Progressive'],
      },
      {
        basic: 'Expert',
        advanced: 'Guru',
        transcription: '/ˈɡʊruː/',
        wrong: ['Guard', 'Guest', 'Gambler', 'Gardener'],
      },
      {
        basic: 'False belief',
        advanced: 'Misconception',
        transcription: '/ˌmɪskənˈsepʃən/',
        wrong: ['Misfortune', 'Mischief', 'Misery', 'Mistrust'],
      },
      {
        basic: 'Learn from mistake',
        advanced: 'Reflect',
        transcription: '/rɪˈflekt/',
        wrong: ['Refund', 'Relax', 'Reserve', 'Refresh'],
      },
      {
        basic: 'Way of learning',
        advanced: 'Technique',
        transcription: '/tekˈniːk/',
        wrong: ['Tension', 'Terrain', 'Tribute', 'Trophy'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 3. PROBLEM SOLVING
  // ─────────────────────────────────────────
  {
    id: 'problem-solving',
    name: 'Problem Solving',
    words: [
      {
        basic: 'Fix',
        advanced: 'Resolve',
        transcription: '/rɪˈzɑːlv/',
        wrong: ['Resist', 'Restrict', 'Retire', 'Reveal'],
      },
      {
        basic: 'Find the cause',
        advanced: 'Diagnose',
        transcription: '/ˌdaɪəɡˈnoʊs/',
        wrong: ['Distribute', 'Delegate', 'Dismiss', 'Decorate'],
      },
      {
        basic: 'Think of ideas',
        advanced: 'Brainstorm',
        transcription: '/ˈbreɪnstɔːrm/',
        wrong: ['Backfire', 'Bargain', 'Blueprint', 'Boycott'],
      },
      {
        basic: 'Best possible',
        advanced: 'Optimal',
        transcription: '/ˈɑːptɪməl/',
        wrong: ['Optional', 'Obvious', 'Ordinary', 'Outdated'],
      },
      {
        basic: 'Change direction',
        advanced: 'Pivot',
        transcription: '/ˈpɪvət/',
        wrong: ['Plunge', 'Prowl', 'Plead', 'Pursue'],
      },
      {
        basic: 'Test a solution',
        advanced: 'Validate',
        transcription: '/ˈvælɪdeɪt/',
        wrong: ['Vanish', 'Venture', 'Vacate', 'Violate'],
      },
      {
        basic: 'Break into parts',
        advanced: 'Dissect',
        transcription: '/daɪˈsekt/',
        wrong: ['Distract', 'Deliver', 'Decline', 'Disturb'],
      },
      {
        basic: 'Make it simpler',
        advanced: 'Streamline',
        transcription: '/ˈstriːmlaɪn/',
        wrong: ['Sacrifice', 'Stagger', 'Scatter', 'Sabotage'],
      },
      {
        basic: 'Think ahead',
        advanced: 'Anticipate',
        transcription: '/ænˈtɪsɪpeɪt/',
        wrong: ['Accuse', 'Apologize', 'Arrange', 'Attract'],
      },
      {
        basic: 'Quick fix',
        advanced: 'Hack',
        transcription: '/hæk/',
        wrong: ['Haunt', 'Hurdle', 'Haste', 'Hoax'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 4. CREATIVITY
  // ─────────────────────────────────────────
  {
    id: 'creativity',
    name: 'Creativity',
    words: [
      {
        basic: 'New idea',
        advanced: 'Concept',
        transcription: '/ˈkɑːnsept/',
        wrong: ['Context', 'Contract', 'Convert', 'Control'],
      },
      {
        basic: 'Original',
        advanced: 'Innovative',
        transcription: '/ˈɪnəveɪtɪv/',
        wrong: ['Innocent', 'Intense', 'Impatient', 'Insecure'],
      },
      {
        basic: 'Think differently',
        advanced: 'Think outside the box',
        transcription: '/θɪŋk ˌaʊtˈsaɪd ðə ˈbɑːks/',
        wrong: ['Think over the moon', 'Think under the weather', 'Think on thin ice', 'Think by the book'],
      },
      {
        basic: 'Source of ideas',
        advanced: 'Muse',
        transcription: '/mjuːz/',
        wrong: ['Mule', 'Maze', 'Mess', 'Mask'],
      },
      {
        basic: 'Copy someone',
        advanced: 'Imitate',
        transcription: '/ˈɪmɪteɪt/',
        wrong: ['Inherit', 'Inhale', 'Insert', 'Inquire'],
      },
      {
        basic: 'Make something new',
        advanced: 'Invent',
        transcription: '/ɪnˈvent/',
        wrong: ['Inspect', 'Invest', 'Inflate', 'Injure'],
      },
      {
        basic: 'Artistic',
        advanced: 'Expressive',
        transcription: '/ɪkˈspresɪv/',
        wrong: ['Extensive', 'Exclusive', 'Expansive', 'Exhaustive'],
      },
      {
        basic: 'Big imagination',
        advanced: 'Visionary',
        transcription: '/ˈvɪʒəneri/',
        wrong: ['Voluntary', 'Vulnerable', 'Variable', 'Versatile'],
      },
      {
        basic: 'Rough version',
        advanced: 'Draft',
        transcription: '/dræft/',
        wrong: ['Drain', 'Drawer', 'Dragon', 'Drift'],
      },
      {
        basic: 'Make better',
        advanced: 'Refine',
        transcription: '/rɪˈfaɪn/',
        wrong: ['Rebel', 'Relax', 'Resent', 'Retire'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 5. FOCUS
  // ─────────────────────────────────────────
  {
    id: 'focus',
    name: 'Focus',
    words: [
      {
        basic: 'Pay attention',
        advanced: 'Concentrate',
        transcription: '/ˈkɑːnsəntreɪt/',
        wrong: ['Confess', 'Collapse', 'Complain', 'Cooperate'],
      },
      {
        basic: 'Distracted',
        advanced: 'Absent-minded',
        transcription: '/ˌæbsənt ˈmaɪndɪd/',
        wrong: ['Absolute', 'Abrupt', 'Abundant', 'Anxious'],
      },
      {
        basic: 'Deep work',
        advanced: 'Immersed',
        transcription: '/ɪˈmɜːrst/',
        wrong: ['Improved', 'Included', 'Initiated', 'Integrated'],
      },
      {
        basic: 'Stay on task',
        advanced: 'Disciplined',
        transcription: '/ˈdɪsɪplɪnd/',
        wrong: ['Disgusted', 'Distant', 'Dishonest', 'Dramatic'],
      },
      {
        basic: 'Lose focus',
        advanced: 'Zone out',
        transcription: '/ˌzoʊn ˈaʊt/',
        wrong: ['Zoom out', 'Zip up', 'Zero out', 'Zone in'],
      },
      {
        basic: 'One thing at a time',
        advanced: 'Single-tasking',
        transcription: '/ˈsɪŋɡəl ˌtæskɪŋ/',
        wrong: ['Single-handed', 'Single-file', 'Single-use', 'Single-origin'],
      },
      {
        basic: 'Hard to ignore',
        advanced: 'Compelling',
        transcription: '/kəmˈpelɪŋ/',
        wrong: ['Complaining', 'Compromising', 'Competing', 'Complimenting'],
      },
      {
        basic: 'Block out noise',
        advanced: 'Tune out',
        transcription: '/ˌtuːn ˈaʊt/',
        wrong: ['Turn up', 'Take off', 'Tear down', 'Tip over'],
      },
      {
        basic: 'Fully present',
        advanced: 'Mindful',
        transcription: '/ˈmaɪndfʊl/',
        wrong: ['Mournful', 'Moody', 'Mindless', 'Merciful'],
      },
      {
        basic: 'Flow state',
        advanced: 'In the zone',
        transcription: '/ɪn ðə ˈzoʊn/',
        wrong: ['In the dark', 'In a rut', 'In a pickle', 'In hot water'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 6. PLANNING
  // ─────────────────────────────────────────
  {
    id: 'planning',
    name: 'Planning',
    words: [
      {
        basic: 'Plan',
        advanced: 'Strategy',
        transcription: '/ˈstrætədʒi/',
        wrong: ['Statement', 'Sculpture', 'Sentiment', 'Silence'],
      },
      {
        basic: 'Goal',
        advanced: 'Objective',
        transcription: '/əbˈdʒektɪv/',
        wrong: ['Obstacle', 'Observer', 'Obsession', 'Offering'],
      },
      {
        basic: 'Important point in a plan',
        advanced: 'Milestone',
        transcription: '/ˈmaɪlstoʊn/',
        wrong: ['Mixture', 'Miracle', 'Mystery', 'Majority'],
      },
      {
        basic: 'Step',
        advanced: 'Phase',
        transcription: '/feɪz/',
        wrong: ['Parcel', 'Puzzle', 'Pledge', 'Pastry'],
      },
      {
        basic: 'Write down',
        advanced: 'Document',
        transcription: '/ˈdɑːkjumənt/',
        wrong: ['Dismiss', 'Decorate', 'Delight', 'Despise'],
      },
      {
        basic: 'Check progress',
        advanced: 'Review',
        transcription: '/rɪˈvjuː/',
        wrong: ['Rescue', 'Rebuild', 'Retreat', 'Reward'],
      },
      {
        basic: 'Change the plan',
        advanced: 'Adapt',
        transcription: '/əˈdæpt/',
        wrong: ['Admire', 'Adopt', 'Attach', 'Annoy'],
      },
      {
        basic: 'Most important',
        advanced: 'Priority',
        transcription: '/praɪˈɔːrəti/',
        wrong: ['Property', 'Prejudice', 'Presence', 'Prisoner'],
      },
      {
        basic: 'Long-term plan',
        advanced: 'Roadmap',
        transcription: '/ˈroʊdmæp/',
        wrong: ['Railroad', 'Rainbow', 'Rooftop', 'Reservoir'],
      },
      {
        basic: 'Backup plan',
        advanced: 'Contingency',
        transcription: '/kənˈtɪndʒənsi/',
        wrong: ['Consistency', 'Courtesy', 'Curiosity', 'Capacity'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 7. HABITS
  // ─────────────────────────────────────────
  {
    id: 'habits',
    name: 'Habits',
    words: [
      {
        basic: 'Daily habit',
        advanced: 'Routine',
        transcription: '/ruːˈtiːn/',
        wrong: ['Rumor', 'Revenue', 'Region', 'Rental'],
      },
      {
        basic: 'Hurting your own progress',
        advanced: 'Self-sabotage',
        transcription: '/ˌself ˈsæbətɑːʒ/',
        wrong: ['Self-service', 'Self-esteem', 'Self-control', 'Self-portrait'],
      },
      {
        basic: 'Taking care of yourself',
        advanced: 'Self-care',
        transcription: '/ˌself ˈker/',
        wrong: ['Self-pity', 'Self-doubt', 'Self-image', 'Self-defense'],
      },
      {
        basic: 'Do it without thinking',
        advanced: 'Autopilot',
        transcription: '/ˈɔːtoʊpaɪlət/',
        wrong: ['Attitude', 'Anchor', 'Auction', 'Asylum'],
      },
      {
        basic: 'Start a habit',
        advanced: 'Kickstart',
        transcription: '/ˈkɪkstɑːrt/',
        wrong: ['Kidnap', 'Kneel', 'Knock', 'Knit'],
      },
      {
        basic: 'Forget old habits',
        advanced: 'Unlearn',
        transcription: '/ʌnˈlɜːrn/',
        wrong: ['Unwind', 'Uphold', 'Unfold', 'Undergo'],
      },
      {
        basic: 'Do every day',
        advanced: 'Consistent',
        transcription: '/kənˈsɪstənt/',
        wrong: ['Casual', 'Content', 'Careless', 'Curious'],
      },
      {
        basic: 'Trigger for a habit',
        advanced: 'Cue',
        transcription: '/kjuː/',
        wrong: ['Cube', 'Cure', 'Cuff', 'Curb'],
      },
      {
        basic: 'Reward yourself',
        advanced: 'Indulge',
        transcription: '/ɪnˈdʌldʒ/',
        wrong: ['Impress', 'Inflict', 'Imply', 'Insist'],
      },
      {
        basic: 'Days in a row',
        advanced: 'Streak',
        transcription: '/striːk/',
        wrong: ['Stream', 'Strike', 'Stripe', 'Strand'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 8. GROWTH
  // ─────────────────────────────────────────
  {
    id: 'growth',
    name: 'Growth',
    words: [
      {
        basic: 'Get better',
        advanced: 'Evolve',
        transcription: '/ɪˈvɑːlv/',
        wrong: ['Escape', 'Exhaust', 'Explode', 'Exclaim'],
      },
      {
        basic: 'Level up',
        advanced: 'Elevate',
        transcription: '/ˈelɪveɪt/',
        wrong: ['Evaporate', 'Embarrass', 'Entertain', 'Exaggerate'],
      },
      {
        basic: 'Challenge yourself',
        advanced: 'Push boundaries',
        transcription: '/pʊʃ ˈbaʊndəriz/',
        wrong: ['Push buttons', 'Push papers', 'Push brooms', 'Push carts'],
      },
      {
        basic: 'Stuck, no progress',
        advanced: 'Plateau',
        transcription: '/plæˈtoʊ/',
        wrong: ['Pillar', 'Pocket', 'Parcel', 'Puddle'],
      },
      {
        basic: 'Bounce back from problems',
        advanced: 'Resilience',
        transcription: '/rɪˈzɪliəns/',
        wrong: ['Relevance', 'Reference', 'Residence', 'Reluctance'],
      },
      {
        basic: 'Open to change',
        advanced: 'Adaptable',
        transcription: '/əˈdæptəbəl/',
        wrong: ['Accessible', 'Accountable', 'Actionable', 'Achievable'],
      },
      {
        basic: 'Self-improvement',
        advanced: 'Transformation',
        transcription: '/ˌtrænsfərˈmeɪʃən/',
        wrong: ['Transaction', 'Translation', 'Transmission', 'Transport'],
      },
      {
        basic: 'Keep moving forward',
        advanced: 'Momentum',
        transcription: '/məˈmentəm/',
        wrong: ['Monument', 'Memento', 'Magnitude', 'Mortgage'],
      },
      {
        basic: 'Know yourself',
        advanced: 'Self-awareness',
        transcription: '/ˌself əˈwernəs/',
        wrong: ['Self-centered', 'Self-taught', 'Self-made', 'Self-driven'],
      },
      {
        basic: 'Want to achieve a lot',
        advanced: 'Ambitious',
        transcription: '/æmˈbɪʃəs/',
        wrong: ['Anonymous', 'Abrupt', 'Absolute', 'Alert'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 9. LEADERSHIP
  // ─────────────────────────────────────────
  {
    id: 'leadership',
    name: 'Leadership',
    words: [
      {
        basic: 'Lead',
        advanced: 'Inspire',
        transcription: '/ɪnˈspaɪər/',
        wrong: ['Insist', 'Intrude', 'Imprison', 'Ignore'],
      },
      {
        basic: 'Give tasks',
        advanced: 'Delegate',
        transcription: '/ˈdelɪɡeɪt/',
        wrong: ['Defeat', 'Decline', 'Deceive', 'Deserve'],
      },
      {
        basic: 'Be in charge',
        advanced: 'Call the shots',
        transcription: '/ˌkɔːl ðə ˈʃɑːts/',
        wrong: ['Call it a day', 'Cut to the chase', 'Cross the line', 'Cry over spilled milk'],
      },
      {
        basic: 'Motivate others',
        advanced: 'Empower',
        transcription: '/ɪmˈpaʊər/',
        wrong: ['Emphasize', 'Employ', 'Envy', 'Endure'],
      },
      {
        basic: 'Take responsibility',
        advanced: 'Ownership',
        transcription: '/ˈoʊnərʃɪp/',
        wrong: ['Outcome', 'Opponent', 'Oversight', 'Orchestra'],
      },
      {
        basic: 'Work together',
        advanced: 'Collaborate',
        transcription: '/kəˈlæbəreɪt/',
        wrong: ['Calculate', 'Calibrate', 'Circulate', 'Communicate'],
      },
      {
        basic: 'See the future',
        advanced: 'Forward-thinking',
        transcription: '/ˌfɔːrwərd ˈθɪŋkɪŋ/',
        wrong: ['Fast-moving', 'Far-fetched', 'Fun-loving', 'Full-time'],
      },
      {
        basic: 'Support your team',
        advanced: 'Have their back',
        transcription: '/hæv ðer ˈbæk/',
        wrong: ['Have a ball', 'Have a blast', 'Have a cow', 'Have the floor'],
      },
      {
        basic: 'Stay calm under pressure',
        advanced: 'Composed',
        transcription: '/kəmˈpoʊzd/',
        wrong: ['Complained', 'Competed', 'Compared', 'Complicated'],
      },
      {
        basic: 'Guide the team',
        advanced: 'Mentor',
        transcription: '/ˈmentɔːr/',
        wrong: ['Magnet', 'Marshal', 'Mortgage', 'Mattress'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 10. PHILOSOPHY
  // ─────────────────────────────────────────
  {
    id: 'philosophy',
    name: 'Philosophy',
    words: [
      {
        basic: 'Right and wrong',
        advanced: 'Ethics',
        transcription: '/ˈeθɪks/',
        wrong: ['Emotions', 'Empires', 'Enzymes', 'Elements'],
      },
      {
        basic: 'Meaning of life',
        advanced: 'Existential',
        transcription: '/ˌeɡzɪˈstenʃəl/',
        wrong: ['Exponential', 'Experimental', 'Extensional', 'Exceptional'],
      },
      {
        basic: 'Way of thinking',
        advanced: 'Mindset',
        transcription: '/ˈmaɪndset/',
        wrong: ['Mixture', 'Monument', 'Majority', 'Melody'],
      },
      {
        basic: 'Personal values',
        advanced: 'Principles',
        transcription: '/ˈprɪnsɪpəlz/',
        wrong: ['Prisoners', 'Promises', 'Pretenders', 'Poisons'],
      },
      {
        basic: 'Life view',
        advanced: 'Perspective',
        transcription: '/pəˈspektɪv/',
        wrong: ['Pretense', 'Paradise', 'Passport', 'Penalty'],
      },
      {
        basic: 'Accept what is',
        advanced: 'Stoic',
        transcription: '/ˈstoʊɪk/',
        wrong: ['Static', 'Stylish', 'Strict', 'Stubborn'],
      },
      {
        basic: 'Question everything',
        advanced: 'Skeptical',
        transcription: '/ˈskeptɪkəl/',
        wrong: ['Sarcastic', 'Superstitious', 'Sophisticated', 'Sentimental'],
      },
      {
        basic: 'Live in the moment',
        advanced: 'Seize the day',
        transcription: '/ˌsiːz ðə ˈdeɪ/',
        wrong: ['Save the day', 'Skip the day', 'Spend the day', 'Spoil the day'],
      },
      {
        basic: 'Free will',
        advanced: 'Autonomy',
        transcription: '/ɔːˈtɑːnəmi/',
        wrong: ['Authority', 'Anatomy', 'Astronomy', 'Alliance'],
      },
      {
        basic: 'Inner peace',
        advanced: 'Serenity',
        transcription: '/səˈrenəti/',
        wrong: ['Severity', 'Sincerity', 'Security', 'Sensitivity'],
      },
    ],
  },
]
