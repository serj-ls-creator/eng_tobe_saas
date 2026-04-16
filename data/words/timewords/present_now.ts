// ============================================================
// PRESENT & NOW — Simple vs precise present time words
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

export const PRESENT_NOW: Subcategory[] = [

  // ─────────────────────────────────────────
  // 1. RIGHT NOW
  // ─────────────────────────────────────────
  {
    id: 'right-now',
    name: 'Right Now',
    words: [
      {
        basic: 'Now',
        advanced: 'Currently',
        transcription: '/ˈkɜːrəntli/',
        wrong: ['Clearly', 'Closely', 'Correctly', 'Carefully'],
      },
      {
        basic: 'Right now',
        advanced: 'At this moment',
        transcription: '/æt ðɪs ˈmoʊmənt/',
        wrong: ['At this point', 'At this stage', 'At this level', 'At this rate'],
      },
      {
        basic: 'At the moment',
        advanced: 'Presently',
        transcription: '/ˈprezntli/',
        wrong: ['Previously', 'Primarily', 'Practically', 'Particularly'],
      },
      {
        basic: 'This second',
        advanced: 'Immediately',
        transcription: '/ɪˈmiːdiətli/',
        wrong: ['Importantly', 'Impressively', 'Independently', 'Individually'],
      },
      {
        basic: 'Just now',
        advanced: 'At present',
        transcription: '/æt ˈpreznt/',
        wrong: ['At first', 'At last', 'At once', 'At times'],
      },
      {
        basic: 'Today',
        advanced: 'This day',
        transcription: '/ðɪs deɪ/',
        wrong: ['This week', 'This month', 'This year', 'This period'],
      },
      {
        basic: 'This minute',
        advanced: 'Instantly',
        transcription: '/ˈɪnstəntli/',
        wrong: ['Importantly', 'Impressively', 'Independently', 'Individually'],
      },
      {
        basic: 'As of now',
        advanced: 'As of today',
        transcription: '/æz əv təˈdeɪ/',
        wrong: ['As of yesterday', 'As of tomorrow', 'As of last week', 'As of next week'],
      },
      {
        basic: 'This instant',
        advanced: 'Without delay',
        transcription: '/wɪˈðaʊt dɪˈleɪ/',
        wrong: ['Without doubt', 'Without issue', 'Without change', 'Without error'],
      },
      {
        basic: 'Here and now',
        advanced: 'In the present',
        transcription: '/ɪn ðə ˈpreznt/',
        wrong: ['In the past', 'In the future', 'In the moment', 'In the interim'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 2. ONGOING
  // ─────────────────────────────────────────
  {
    id: 'ongoing',
    name: 'Ongoing',
    words: [
      {
        basic: 'Still going',
        advanced: 'Ongoing',
        transcription: '/ˈɒnɡoʊɪŋ/',
        wrong: ['Outgoing', 'Upcoming', 'Incoming', 'Overcoming'],
      },
      {
        basic: 'In progress',
        advanced: 'Underway',
        transcription: '/ˌʌndərˈweɪ/',
        wrong: ['Underused', 'Underrated', 'Undervalued', 'Undermined'],
      },
      {
        basic: 'Happening now',
        advanced: 'In process',
        transcription: '/ɪn ˈproʊses/',
        wrong: ['In progress', 'In review', 'In discussion', 'In development'],
      },
      {
        basic: 'Not done yet',
        advanced: 'Pending',
        transcription: '/ˈpendɪŋ/',
        wrong: ['Proceeding', 'Producing', 'Promoting', 'Proposing'],
      },
      {
        basic: 'Still active',
        advanced: 'Active',
        transcription: '/ˈæktɪv/',
        wrong: ['Actual', 'Adaptive', 'Adequate', 'Affective'],
      },
      {
        basic: 'Running',
        advanced: 'Operational',
        transcription: '/ˌɒpəˈreɪʃənl/',
        wrong: ['Optional', 'Occasional', 'Organizational', 'Observational'],
      },
      {
        basic: 'Continuing',
        advanced: 'Sustained',
        transcription: '/səˈsteɪnd/',
        wrong: ['Structured', 'Successful', 'Supportive', 'Systematic'],
      },
      {
        basic: 'Not finished',
        advanced: 'Incomplete',
        transcription: '/ˌɪnkəmˈpliːt/',
        wrong: ['Inconsistent', 'Incorrect', 'Ineffective', 'Inaccurate'],
      },
      {
        basic: 'Being done',
        advanced: 'In execution',
        transcription: '/ɪn ˌeksɪˈkjuːʃən/',
        wrong: ['In review', 'In discussion', 'In development', 'In progress'],
      },
      {
        basic: 'Live',
        advanced: 'Active',
        transcription: '/ˈæktɪv/',
        wrong: ['Actual', 'Adaptive', 'Adequate', 'Affective'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 3. CURRENT
  // ─────────────────────────────────────────
  {
    id: 'current',
    name: 'Current',
    words: [
      {
        basic: 'These days',
        advanced: 'Nowadays',
        transcription: '/ˈnaʊədeɪz/',
        wrong: ['Neatly', 'Nicely', 'Narrowly', 'Nearly'],
      },
      {
        basic: 'Current',
        advanced: 'Contemporary',
        transcription: '/kənˈtempəreri/',
        wrong: ['Competitive', 'Confident', 'Cautious', 'Creative'],
      },
      {
        basic: 'Modern',
        advanced: 'Present-day',
        transcription: '/ˈpreznt deɪ/',
        wrong: ['Past-day', 'Future-day', 'Recent-day', 'Old-day'],
      },
      {
        basic: 'Up to date',
        advanced: 'Current',
        transcription: '/ˈkɜːrənt/',
        wrong: ['Certain', 'Careful', 'Cheerful', 'Consistent'],
      },
      {
        basic: 'New',
        advanced: 'Recent',
        transcription: '/ˈriːsnt/',
        wrong: ['Reliable', 'Resilient', 'Rational', 'Relaxed'],
      },
      {
        basic: 'Latest',
        advanced: 'Most recent',
        transcription: '/moʊst ˈriːsnt/',
        wrong: ['Most reliable', 'Most resilient', 'Most rational', 'Most relaxed'],
      },
      {
        basic: 'Now',
        advanced: 'At this juncture',
        transcription: '/æt ðɪs ˈdʒʌŋktʃər/',
        wrong: ['At this point', 'At this stage', 'At this level', 'At this rate'],
      },
      {
        basic: 'Today',
        advanced: 'In the current era',
        transcription: '/ɪn ðə ˈkɜːrənt ˈɪərə/',
        wrong: ['In the past era', 'In the future era', 'In the recent era', 'In the modern era'],
      },
      {
        basic: 'This year',
        advanced: 'In the current year',
        transcription: '/ɪn ðə ˈkɜːrənt jɪər/',
        wrong: ['In the past year', 'In the future year', 'In the recent year', 'In the modern year'],
      },
      {
        basic: 'Trending',
        advanced: 'Prevailing',
        transcription: '/prɪˈveɪlɪŋ/',
        wrong: ['Proceeding', 'Producing', 'Promoting', 'Proposing'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 4. IMMEDIATE
  // ─────────────────────────────────────────
  {
    id: 'immediate',
    name: 'Immediate',
    words: [
      {
        basic: 'Fast',
        advanced: 'Promptly',
        transcription: '/ˈprɒmptli/',
        wrong: ['Previously', 'Primarily', 'Practically', 'Particularly'],
      },
      {
        basic: 'Quick',
        advanced: 'Swiftly',
        transcription: '/ˈswɪftli/',
        wrong: ['Separately', 'Specifically', 'Steadily', 'Strictly'],
      },
      {
        basic: 'Right away',
        advanced: 'Forthwith',
        transcription: '/ˌfɔːrθˈwɪð/',
        wrong: ['Formally', 'Fortunately', 'Frequently', 'Fundamentally'],
      },
      {
        basic: 'At once',
        advanced: 'Simultaneously',
        transcription: '/ˌsɪmlˈteɪniəsli/',
        wrong: ['Separately', 'Specifically', 'Steadily', 'Strictly'],
      },
      {
        basic: 'Urgent',
        advanced: 'Time-sensitive',
        transcription: '/ˈtaɪm ˈsensɪtɪv/',
        wrong: ['Time-limited', 'Time-bound', 'Time-critical', 'Time-based'],
      },
      {
        basic: 'ASAP',
        advanced: 'Without delay',
        transcription: '/wɪˈðaʊt dɪˈleɪ/',
        wrong: ['Without doubt', 'Without issue', 'Without change', 'Without error'],
      },
      {
        basic: 'Now',
        advanced: 'Immediately',
        transcription: '/ɪˈmiːdiətli/',
        wrong: ['Importantly', 'Impressively', 'Independently', 'Individually'],
      },
      {
        basic: 'Instant',
        advanced: 'Instantaneous',
        transcription: '/ˌɪnstənˈteɪniəs/',
        wrong: ['Instantiated', 'Instructed', 'Integrated', 'Intended'],
      },
      {
        basic: 'No delay',
        advanced: 'Expeditiously',
        transcription: '/ˌekspɪˈdɪʃəsli/',
        wrong: ['Effectively', 'Efficiently', 'Ethically', 'Extensively'],
      },
      {
        basic: 'Snap',
        advanced: 'In an instant',
        transcription: '/ɪn ən ˈɪnstənt/',
        wrong: ['In a moment', 'In a second', 'In a minute', 'In a flash'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 5. SIMULTANEOUS
  // ─────────────────────────────────────────
  {
    id: 'simultaneous',
    name: 'Simultaneous',
    words: [
      {
        basic: 'At the same time',
        advanced: 'Simultaneously',
        transcription: '/ˌsɪmlˈteɪniəsli/',
        wrong: ['Separately', 'Specifically', 'Steadily', 'Strictly'],
      },
      {
        basic: 'Together',
        advanced: 'Concurrently',
        transcription: '/kənˈkɜːrəntli/',
        wrong: ['Considerably', 'Consistently', 'Continuously', 'Correspondingly'],
      },
      {
        basic: 'At once',
        advanced: 'In parallel',
        transcription: '/ɪn ˈpærəlel/',
        wrong: ['In sequence', 'In order', 'In turn', 'In series'],
      },
      {
        basic: 'Side by side',
        advanced: 'Alongside',
        transcription: '/əˈlɒŋsaɪd/',
        wrong: ['Aside', 'Inside', 'Outside', 'Upside'],
      },
      {
        basic: 'Both at once',
        advanced: 'Jointly',
        transcription: '/ˈdʒɔɪntli/',
        wrong: ['Justly', 'Joyfully', 'Judiciously', 'Jovially'],
      },
      {
        basic: 'While',
        advanced: 'Whilst',
        transcription: '/waɪlst/',
        wrong: ['Within', 'Without', 'Whereby', 'Wherein'],
      },
      {
        basic: 'During',
        advanced: 'Throughout',
        transcription: '/θruːˈaʊt/',
        wrong: ['Therefore', 'Thereby', 'Therein', 'Thereto'],
      },
      {
        basic: 'At the same point',
        advanced: 'Contemporaneously',
        transcription: '/kənˌtempəˈreɪniəsli/',
        wrong: ['Competitively', 'Confidently', 'Cautiously', 'Creatively'],
      },
      {
        basic: 'In sync',
        advanced: 'In unison',
        transcription: '/ɪn ˈjuːnɪsən/',
        wrong: ['In sequence', 'In order', 'In turn', 'In series'],
      },
      {
        basic: 'Matching',
        advanced: 'Corresponding',
        transcription: '/ˌkɒrɪˈspɒndɪŋ/',
        wrong: ['Confirming', 'Connecting', 'Considering', 'Containing'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 6. TEMPORARY
  // ─────────────────────────────────────────
  {
    id: 'temporary',
    name: 'Temporary',
    words: [
      {
        basic: 'For now',
        advanced: 'Temporarily',
        transcription: '/ˈtempərərɪli/',
        wrong: ['Thoughtfully', 'Tolerantly', 'Trustworthily', 'Truthfully'],
      },
      {
        basic: 'Short term',
        advanced: 'Provisional',
        transcription: '/prəˈvɪʒənl/',
        wrong: ['Productive', 'Proactive', 'Practical', 'Precise'],
      },
      {
        basic: 'Not permanent',
        advanced: 'Transient',
        transcription: '/ˈtrænziənt/',
        wrong: ['Transparent', 'Trustworthy', 'Thoughtful', 'Tolerant'],
      },
      {
        basic: 'For a bit',
        advanced: 'Briefly',
        transcription: '/ˈbriːfli/',
        wrong: ['Broadly', 'Boldly', 'Brightly', 'Bravely'],
      },
      {
        basic: 'Just for now',
        advanced: 'Interim',
        transcription: '/ˈɪntərɪm/',
        wrong: ['Internal', 'Intentional', 'Individual', 'Informal'],
      },
      {
        basic: 'Passing',
        advanced: 'Fleeting',
        transcription: '/ˈfliːtɪŋ/',
        wrong: ['Focusing', 'Following', 'Forming', 'Forcing'],
      },
      {
        basic: 'Not lasting',
        advanced: 'Ephemeral',
        transcription: '/ɪˈfemərəl/',
        wrong: ['Emotional', 'Empirical', 'Ethical', 'Eventual'],
      },
      {
        basic: 'Quick fix',
        advanced: 'Stopgap',
        transcription: '/ˈstɒpɡæp/',
        wrong: ['Startup', 'Standout', 'Standby', 'Standoff'],
      },
      {
        basic: 'On hold',
        advanced: 'Suspended',
        transcription: '/səˈspendɪd/',
        wrong: ['Structured', 'Successful', 'Supportive', 'Systematic'],
      },
      {
        basic: 'Filling in',
        advanced: 'Acting',
        transcription: '/ˈæktɪŋ/',
        wrong: ['Adapting', 'Achieving', 'Acquiring', 'Agreeing'],
      },
    ],
  },
]
