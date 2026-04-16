// ============================================================
// GEN Z SLANG — Gen Z slang vs standard English equivalents
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

export const GEN_Z_SLANG: Subcategory[] = [

  // ─────────────────────────────────────────
  // 1. APPROVAL
  // ─────────────────────────────────────────
  {
    id: 'approval',
    name: 'Approval',
    words: [
      {
        basic: 'Slay',
        advanced: 'Excel',
        transcription: '/ɪkˈsel/',
        wrong: ['Expand', 'Expect', 'Explain', 'Explore'],
      },
      {
        basic: 'Fire',
        advanced: 'Excellent',
        transcription: '/ˈeksələnt/',
        wrong: ['Effective', 'Efficient', 'Ethical', 'Extreme'],
      },
      {
        basic: 'Bussin',
        advanced: 'Delicious',
        transcription: '/dɪˈlɪʃəs/',
        wrong: ['Decisive', 'Dedicated', 'Diligent', 'Directed'],
      },
      {
        basic: 'Goated',
        advanced: 'Greatest',
        transcription: '/ˈɡreɪtɪst/',
        wrong: ['Graceful', 'Grateful', 'Greedy', 'Grounded'],
      },
      {
        basic: 'Hits different',
        advanced: 'Exceptional',
        transcription: '/ɪkˈsepʃənl/',
        wrong: ['Effective', 'Efficient', 'Ethical', 'Extreme'],
      },
      {
        basic: 'Slaps',
        advanced: 'Outstanding',
        transcription: '/ˌaʊtˈstændɪŋ/',
        wrong: ['Overrated', 'Overused', 'Overdone', 'Overruled'],
      },
      {
        basic: 'Based',
        advanced: 'Admirable',
        transcription: '/ˈædmɪrəbl/',
        wrong: ['Adaptable', 'Approachable', 'Achievable', 'Actionable'],
      },
      {
        basic: 'Lit',
        advanced: 'Amazing',
        transcription: '/əˈmeɪzɪŋ/',
        wrong: ['Adapting', 'Achieving', 'Acquiring', 'Agreeing'],
      },
      {
        basic: 'Iconic',
        advanced: 'Legendary',
        transcription: '/ˈledʒənderi/',
        wrong: ['Logical', 'Loyal', 'Liberal', 'Literal'],
      },
      {
        basic: 'Valid',
        advanced: 'Reasonable',
        transcription: '/ˈriːzənəbl/',
        wrong: ['Reliable', 'Resilient', 'Rational', 'Relaxed'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 2. DISAPPROVAL
  // ─────────────────────────────────────────
  {
    id: 'disapproval',
    name: 'Disapproval',
    words: [
      {
        basic: 'Cringe',
        advanced: 'Embarrassing',
        transcription: '/ɪmˈbærəsɪŋ/',
        wrong: ['Empowering', 'Encouraging', 'Engaging', 'Enhancing'],
      },
      {
        basic: 'Mid',
        advanced: 'Mediocre',
        transcription: '/ˌmiːdiˈoʊkər/',
        wrong: ['Mindful', 'Modest', 'Motivated', 'Meaningful'],
      },
      {
        basic: 'Trash',
        advanced: 'Worthless',
        transcription: '/ˈwɜːrθləs/',
        wrong: ['Wonderful', 'Worthy', 'Wholesome', 'Warm'],
      },
      {
        basic: 'Cap',
        advanced: 'Dishonest',
        transcription: '/dɪsˈɒnɪst/',
        wrong: ['Dismissive', 'Disruptive', 'Distinctive', 'Distracting'],
      },
      {
        basic: 'Flop',
        advanced: 'Failure',
        transcription: '/ˈfeɪljər/',
        wrong: ['Filter', 'Find', 'Fix', 'Focus'],
      },
      {
        basic: 'Clapped',
        advanced: 'Unattractive',
        transcription: '/ˌʌnəˈtræktɪv/',
        wrong: ['Unreliable', 'Uncertain', 'Unfriendly', 'Unusual'],
      },
      {
        basic: 'Ratio',
        advanced: 'Defeated',
        transcription: '/dɪˈfiːtɪd/',
        wrong: ['Devoted', 'Dignified', 'Diligent', 'Directed'],
      },
      {
        basic: 'L',
        advanced: 'Loss',
        transcription: '/lɒs/',
        wrong: ['Luck', 'Lack', 'Lapse', 'Limit'],
      },
      {
        basic: 'Cooked',
        advanced: 'Ruined',
        transcription: '/ˈruːɪnd/',
        wrong: ['Reviewed', 'Revised', 'Rethought', 'Reassessed'],
      },
      {
        basic: 'Npc',
        advanced: 'Boring',
        transcription: '/ˈbɔːrɪŋ/',
        wrong: ['Bold', 'Brave', 'Brief', 'Bright'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 3. PEOPLE
  // ─────────────────────────────────────────
  {
    id: 'people',
    name: 'People',
    words: [
      {
        basic: 'Bestie',
        advanced: 'Best friend',
        transcription: '/best frend/',
        wrong: ['Best choice', 'Best option', 'Best result', 'Best outcome'],
      },
      {
        basic: 'Fam',
        advanced: 'Family',
        transcription: '/ˈfæməli/',
        wrong: ['Famous', 'Familiar', 'Fantastic', 'Faithful'],
      },
      {
        basic: 'Simp',
        advanced: 'Admirer',
        transcription: '/ədˈmaɪərər/',
        wrong: ['Advisor', 'Advocate', 'Associate', 'Architect'],
      },
      {
        basic: 'Karen',
        advanced: 'Complainer',
        transcription: '/kəmˈpleɪnər/',
        wrong: ['Competitor', 'Consultant', 'Consumer', 'Collaborator'],
      },
      {
        basic: 'Boomer',
        advanced: 'Traditionalist',
        transcription: '/trəˈdɪʃənəlɪst/',
        wrong: ['Theorist', 'Therapist', 'Technician', 'Tactician'],
      },
      {
        basic: 'Pick me',
        advanced: 'Attention-seeker',
        transcription: '/əˈtenʃən ˈsiːkər/',
        wrong: ['Attention-giver', 'Attention-holder', 'Attention-keeper', 'Attention-maker'],
      },
      {
        basic: 'Clout chaser',
        advanced: 'Fame-seeker',
        transcription: '/feɪm ˈsiːkər/',
        wrong: ['Fame-giver', 'Fame-holder', 'Fame-keeper', 'Fame-maker'],
      },
      {
        basic: 'Hater',
        advanced: 'Critic',
        transcription: '/ˈkrɪtɪk/',
        wrong: ['Creator', 'Curator', 'Counselor', 'Coordinator'],
      },
      {
        basic: 'Stan',
        advanced: 'Devoted fan',
        transcription: '/dɪˈvoʊtɪd fæn/',
        wrong: ['Devoted friend', 'Devoted follower', 'Devoted supporter', 'Devoted admirer'],
      },
      {
        basic: 'Baddie',
        advanced: 'Confident person',
        transcription: '/ˈkɒnfɪdənt ˈpɜːrsən/',
        wrong: ['Cautious person', 'Creative person', 'Cheerful person', 'Careful person'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 4. SITUATIONS
  // ─────────────────────────────────────────
  {
    id: 'situations',
    name: 'Situations',
    words: [
      {
        basic: 'No cap',
        advanced: 'Honestly',
        transcription: '/ˈɒnɪstli/',
        wrong: ['Obviously', 'Openly', 'Officially', 'Ordinarily'],
      },
      {
        basic: 'Lowkey',
        advanced: 'Somewhat',
        transcription: '/ˈsʌmwɒt/',
        wrong: ['Somehow', 'Sometimes', 'Somewhere', 'Something'],
      },
      {
        basic: 'Highkey',
        advanced: 'Clearly',
        transcription: '/ˈklɪərli/',
        wrong: ['Closely', 'Correctly', 'Carefully', 'Certainly'],
      },
      {
        basic: 'It is what it is',
        advanced: 'Inevitable',
        transcription: '/ɪnˈevɪtəbl/',
        wrong: ['Ineffective', 'Incomplete', 'Inconsistent', 'Incorrect'],
      },
      {
        basic: 'Understood the assignment',
        advanced: 'Performed well',
        transcription: '/pərˈfɔːrmd wel/',
        wrong: ['Performed badly', 'Performed quickly', 'Performed slowly', 'Performed differently'],
      },
      {
        basic: 'Main character',
        advanced: 'Protagonist',
        transcription: '/proʊˈtæɡənɪst/',
        wrong: ['Participant', 'Presenter', 'Producer', 'Provider'],
      },
      {
        basic: 'Era',
        advanced: 'Phase',
        transcription: '/feɪz/',
        wrong: ['Place', 'Pace', 'Face', 'Race'],
      },
      {
        basic: 'Rent free',
        advanced: 'Obsessing',
        transcription: '/əbˈsesɪŋ/',
        wrong: ['Observing', 'Obtaining', 'Occupying', 'Offending'],
      },
      {
        basic: 'Caught in 4K',
        advanced: 'Exposed',
        transcription: '/ɪkˈspoʊzd/',
        wrong: ['Examined', 'Exchanged', 'Executed', 'Expanded'],
      },
      {
        basic: 'Ate',
        advanced: 'Succeeded',
        transcription: '/səkˈsiːdɪd/',
        wrong: ['Structured', 'Supported', 'Sustained', 'Summarized'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 5. REACTIONS
  // ─────────────────────────────────────────
  {
    id: 'reactions',
    name: 'Reactions',
    words: [
      {
        basic: 'Shook',
        advanced: 'Shocked',
        transcription: '/ʃɒkt/',
        wrong: ['Shared', 'Shifted', 'Shown', 'Shrunk'],
      },
      {
        basic: 'Dead',
        advanced: 'Exhausted',
        transcription: '/ɪɡˈzɔːstɪd/',
        wrong: ['Elated', 'Envious', 'Eager', 'Empowered'],
      },
      {
        basic: 'Pressed',
        advanced: 'Bothered',
        transcription: '/ˈbɒðərd/',
        wrong: ['Bold', 'Brave', 'Brief', 'Bright'],
      },
      {
        basic: 'Triggered',
        advanced: 'Offended',
        transcription: '/əˈfendɪd/',
        wrong: ['Observed', 'Obtained', 'Occupied', 'Omitted'],
      },
      {
        basic: 'Gagged',
        advanced: 'Surprised',
        transcription: '/sərˈpraɪzd/',
        wrong: ['Structured', 'Supported', 'Sustained', 'Summarized'],
      },
      {
        basic: 'Screaming',
        advanced: 'Amused',
        transcription: '/əˈmjuːzd/',
        wrong: ['Adapted', 'Admired', 'Admitted', 'Adopted'],
      },
      {
        basic: 'Crying',
        advanced: 'Overwhelmed',
        transcription: '/ˌoʊvərˈwelmd/',
        wrong: ['Overrated', 'Overused', 'Overdone', 'Overruled'],
      },
      {
        basic: 'Obsessed',
        advanced: 'Captivated',
        transcription: '/ˈkæptɪveɪtɪd/',
        wrong: ['Calculated', 'Captured', 'Carried', 'Caused'],
      },
      {
        basic: 'Sending me',
        advanced: 'Hilarious',
        transcription: '/hɪˈleəriəs/',
        wrong: ['Helpful', 'Honest', 'Hopeful', 'Humble'],
      },
      {
        basic: 'Not okay',
        advanced: 'Distressed',
        transcription: '/dɪˈstrest/',
        wrong: ['Distributed', 'Divided', 'Documented', 'Drafted'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 6. INTERNET
  // ─────────────────────────────────────────
  {
    id: 'internet',
    name: 'Internet',
    words: [
      {
        basic: 'Vibe',
        advanced: 'Atmosphere',
        transcription: '/ˈætməsfɪər/',
        wrong: ['Attention', 'Attitude', 'Attraction', 'Assertion'],
      },
      {
        basic: 'Aesthetic',
        advanced: 'Style',
        transcription: '/staɪl/',
        wrong: ['State', 'Stage', 'Stand', 'Start'],
      },
      {
        basic: 'Clout',
        advanced: 'Influence',
        transcription: '/ˈɪnfluəns/',
        wrong: ['Inspect', 'Instruct', 'Integrate', 'Intend'],
      },
      {
        basic: 'Glow up',
        advanced: 'Transformation',
        transcription: '/ˌtrænsfərˈmeɪʃən/',
        wrong: ['Transportation', 'Transmission', 'Transaction', 'Translation'],
      },
      {
        basic: 'Flex',
        advanced: 'Show off',
        transcription: '/ʃoʊ ɒf/',
        wrong: ['Show up', 'Show out', 'Show down', 'Show through'],
      },
      {
        basic: 'Drip',
        advanced: 'Fashion',
        transcription: '/ˈfæʃən/',
        wrong: ['Function', 'Fiction', 'Fraction', 'Friction'],
      },
      {
        basic: 'Fit',
        advanced: 'Outfit',
        transcription: '/ˈaʊtfɪt/',
        wrong: ['Output', 'Outcome', 'Overview', 'Oversight'],
      },
      {
        basic: 'Snatched',
        advanced: 'Stylish',
        transcription: '/ˈstaɪlɪʃ/',
        wrong: ['Stubborn', 'Skeptical', 'Sensitive', 'Spontaneous'],
      },
      {
        basic: 'Understood',
        advanced: 'Acknowledged',
        transcription: '/əkˈnɒlɪdʒd/',
        wrong: ['Adapted', 'Admired', 'Admitted', 'Adopted'],
      },
      {
        basic: 'Periodt',
        advanced: 'Definitively',
        transcription: '/dɪˈfɪnɪtɪvli/',
        wrong: ['Decisively', 'Dedicatedly', 'Diligently', 'Directly'],
      },
    ],
  },
]
