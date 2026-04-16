// ============================================================
// FUTURE & PLANS — Simple vs precise future time words
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

export const FUTURE_PLANS: Subcategory[] = [

  // ─────────────────────────────────────────
  // 1. SOON
  // ─────────────────────────────────────────
  {
    id: 'soon',
    name: 'Soon',
    words: [
      {
        basic: 'Soon',
        advanced: 'Shortly',
        transcription: '/ˈʃɔːrtli/',
        wrong: ['Sharply', 'Slightly', 'Slowly', 'Smoothly'],
      },
      {
        basic: 'In a bit',
        advanced: 'Imminently',
        transcription: '/ˈɪmɪnəntli/',
        wrong: ['Importantly', 'Impressively', 'Independently', 'Individually'],
      },
      {
        basic: 'Any day now',
        advanced: 'Forthcoming',
        transcription: '/ˈfɔːrθkʌmɪŋ/',
        wrong: ['Forthright', 'Forthwith', 'Forward', 'Formal'],
      },
      {
        basic: 'Coming up',
        advanced: 'Upcoming',
        transcription: '/ˈʌpkʌmɪŋ/',
        wrong: ['Outgoing', 'Ongoing', 'Incoming', 'Overcoming'],
      },
      {
        basic: 'Not long now',
        advanced: 'In due course',
        transcription: '/ɪn djuː kɔːrs/',
        wrong: ['In due time', 'In due order', 'In due process', 'In due measure'],
      },
      {
        basic: 'Almost time',
        advanced: 'Approaching',
        transcription: '/əˈproʊtʃɪŋ/',
        wrong: ['Adapting', 'Achieving', 'Acquiring', 'Agreeing'],
      },
      {
        basic: 'Next',
        advanced: 'Subsequently',
        transcription: '/ˈsʌbsɪkwəntli/',
        wrong: ['Successfully', 'Sufficiently', 'Suitably', 'Systematically'],
      },
      {
        basic: 'Right around the corner',
        advanced: 'Imminent',
        transcription: '/ˈɪmɪnənt/',
        wrong: ['Important', 'Impressive', 'Independent', 'Individual'],
      },
      {
        basic: 'Before long',
        advanced: 'In the near future',
        transcription: '/ɪn ðə nɪər ˈfjuːtʃər/',
        wrong: ['In the far future', 'In the distant future', 'In the recent future', 'In the immediate future'],
      },
      {
        basic: 'Very soon',
        advanced: 'Presently',
        transcription: '/ˈprezntli/',
        wrong: ['Previously', 'Primarily', 'Practically', 'Particularly'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 2. PLANNING
  // ─────────────────────────────────────────
  {
    id: 'planning',
    name: 'Planning',
    words: [
      {
        basic: 'Plan to',
        advanced: 'Intend to',
        transcription: '/ɪnˈtend tə/',
        wrong: ['Indicate to', 'Influence to', 'Inspect to', 'Integrate to'],
      },
      {
        basic: 'Going to',
        advanced: 'Shall',
        transcription: '/ʃæl/',
        wrong: ['Share', 'Shift', 'Show', 'Shrink'],
      },
      {
        basic: 'Want to',
        advanced: 'Aim to',
        transcription: '/eɪm tə/',
        wrong: ['Adapt to', 'Achieve to', 'Acquire to', 'Agree to'],
      },
      {
        basic: 'Hope to',
        advanced: 'Aspire to',
        transcription: '/əˈspaɪər tə/',
        wrong: ['Assign to', 'Assist to', 'Associate to', 'Assume to'],
      },
      {
        basic: 'Will do',
        advanced: 'Commit to',
        transcription: '/kəˈmɪt tə/',
        wrong: ['Confirm to', 'Connect to', 'Consider to', 'Contain to'],
      },
      {
        basic: 'Set to',
        advanced: 'Scheduled',
        transcription: '/ˈʃedjuːld/',
        wrong: ['Searched', 'Selected', 'Separated', 'Structured'],
      },
      {
        basic: 'Lined up',
        advanced: 'Arranged',
        transcription: '/əˈreɪndʒd/',
        wrong: ['Adapted', 'Admired', 'Admitted', 'Adopted'],
      },
      {
        basic: 'In the works',
        advanced: 'In development',
        transcription: '/ɪn dɪˈveləpmənt/',
        wrong: ['In review', 'In discussion', 'In progress', 'In execution'],
      },
      {
        basic: 'On the agenda',
        advanced: 'Proposed',
        transcription: '/prəˈpoʊzd/',
        wrong: ['Proceeded', 'Produced', 'Promoted', 'Protected'],
      },
      {
        basic: 'Mapped out',
        advanced: 'Strategized',
        transcription: '/ˈstrætədʒaɪzd/',
        wrong: ['Summarized', 'Supervised', 'Supported', 'Succeeded'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 3. PREDICTION
  // ─────────────────────────────────────────
  {
    id: 'prediction',
    name: 'Prediction',
    words: [
      {
        basic: 'Will',
        advanced: 'Shall',
        transcription: '/ʃæl/',
        wrong: ['Share', 'Shift', 'Show', 'Shrink'],
      },
      {
        basic: 'Probably',
        advanced: 'Likely',
        transcription: '/ˈlaɪkli/',
        wrong: ['Largely', 'Lastly', 'Lightly', 'Loosely'],
      },
      {
        basic: 'Expect',
        advanced: 'Anticipate',
        transcription: '/ænˈtɪsɪpeɪt/',
        wrong: ['Adjust', 'Achieve', 'Acquire', 'Agree'],
      },
      {
        basic: 'Think will',
        advanced: 'Forecast',
        transcription: '/ˈfɔːrkɑːst/',
        wrong: ['Forward', 'Formal', 'Focused', 'Fulfilled'],
      },
      {
        basic: 'Guess',
        advanced: 'Project',
        transcription: '/prəˈdʒekt/',
        wrong: ['Proceed', 'Produce', 'Promote', 'Propose'],
      },
      {
        basic: 'Should happen',
        advanced: 'Expected',
        transcription: '/ɪkˈspektɪd/',
        wrong: ['Examined', 'Exchanged', 'Executed', 'Expanded'],
      },
      {
        basic: 'Bound to',
        advanced: 'Inevitable',
        transcription: '/ɪnˈevɪtəbl/',
        wrong: ['Ineffective', 'Incomplete', 'Inconsistent', 'Incorrect'],
      },
      {
        basic: 'Looks like',
        advanced: 'Projected',
        transcription: '/prəˈdʒektɪd/',
        wrong: ['Proceeded', 'Produced', 'Promoted', 'Protected'],
      },
      {
        basic: 'Set to happen',
        advanced: 'Anticipated',
        transcription: '/ænˈtɪsɪpeɪtɪd/',
        wrong: ['Adjusted', 'Achieved', 'Acquired', 'Agreed'],
      },
      {
        basic: 'On track',
        advanced: 'On course',
        transcription: '/ɒn kɔːrs/',
        wrong: ['On record', 'On schedule', 'On purpose', 'On balance'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 4. INTENTION
  // ─────────────────────────────────────────
  {
    id: 'intention',
    name: 'Intention',
    words: [
      {
        basic: 'Mean to',
        advanced: 'Intend to',
        transcription: '/ɪnˈtend tə/',
        wrong: ['Indicate to', 'Influence to', 'Inspect to', 'Integrate to'],
      },
      {
        basic: 'Try to',
        advanced: 'Endeavor to',
        transcription: '/ɪnˈdevər tə/',
        wrong: ['Enforce to', 'Engage to', 'Enhance to', 'Ensure to'],
      },
      {
        basic: 'Aim for',
        advanced: 'Strive for',
        transcription: '/straɪv fər/',
        wrong: ['Stand for', 'State for', 'Stay for', 'Step for'],
      },
      {
        basic: 'Want',
        advanced: 'Desire',
        transcription: '/dɪˈzaɪər/',
        wrong: ['Detect', 'Devote', 'Differ', 'Direct'],
      },
      {
        basic: 'Decide to',
        advanced: 'Resolve to',
        transcription: '/rɪˈzɒlv tə/',
        wrong: ['Respond to', 'Restore to', 'Retain to', 'Return to'],
      },
      {
        basic: 'Set out to',
        advanced: 'Undertake',
        transcription: '/ˌʌndərˈteɪk/',
        wrong: ['Underuse', 'Underrate', 'Undervalue', 'Undermine'],
      },
      {
        basic: 'On purpose',
        advanced: 'Deliberately',
        transcription: '/dɪˈlɪbərɪtli/',
        wrong: ['Decisively', 'Dedicatedly', 'Diligently', 'Directly'],
      },
      {
        basic: 'By choice',
        advanced: 'Voluntarily',
        transcription: '/ˈvɒləntərɪli/',
        wrong: ['Vigilantly', 'Virtuously', 'Versatilely', 'Vulnerably'],
      },
      {
        basic: 'Committed',
        advanced: 'Dedicated',
        transcription: '/ˈdedɪkeɪtɪd/',
        wrong: ['Decided', 'Declared', 'Declined', 'Defended'],
      },
      {
        basic: 'Focused on',
        advanced: 'Oriented toward',
        transcription: '/ˈɔːriəntɪd təˈwɔːrd/',
        wrong: ['Oriented away', 'Oriented back', 'Oriented down', 'Oriented up'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 5. DEADLINE
  // ─────────────────────────────────────────
  {
    id: 'deadline',
    name: 'Deadline',
    words: [
      {
        basic: 'Due date',
        advanced: 'Deadline',
        transcription: '/ˈdedlaɪn/',
        wrong: ['Dateline', 'Baseline', 'Guideline', 'Headline'],
      },
      {
        basic: 'By then',
        advanced: 'By that date',
        transcription: '/baɪ ðæt deɪt/',
        wrong: ['By that time', 'By that point', 'By that stage', 'By that moment'],
      },
      {
        basic: 'On time',
        advanced: 'Punctually',
        transcription: '/ˈpʌŋktʃuəli/',
        wrong: ['Previously', 'Primarily', 'Practically', 'Particularly'],
      },
      {
        basic: 'Late',
        advanced: 'Overdue',
        transcription: '/ˌoʊvərˈdjuː/',
        wrong: ['Overrated', 'Overused', 'Overdone', 'Overruled'],
      },
      {
        basic: 'Rush',
        advanced: 'Expedite',
        transcription: '/ˈekspɪdaɪt/',
        wrong: ['Examine', 'Exchange', 'Execute', 'Expand'],
      },
      {
        basic: 'Time limit',
        advanced: 'Time constraint',
        transcription: '/taɪm kənˈstreɪnt/',
        wrong: ['Time control', 'Time concern', 'Time conflict', 'Time condition'],
      },
      {
        basic: 'Cutoff',
        advanced: 'Final date',
        transcription: '/ˈfaɪnl deɪt/',
        wrong: ['Final note', 'Final point', 'Final thought', 'Final comment'],
      },
      {
        basic: 'Overdue',
        advanced: 'Past due',
        transcription: '/pɑːst djuː/',
        wrong: ['Past time', 'Past point', 'Past stage', 'Past moment'],
      },
      {
        basic: 'On schedule',
        advanced: 'On track',
        transcription: '/ɒn træk/',
        wrong: ['On record', 'On purpose', 'On balance', 'On course'],
      },
      {
        basic: 'Behind',
        advanced: 'Delayed',
        transcription: '/dɪˈleɪd/',
        wrong: ['Defended', 'Defined', 'Delivered', 'Described'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 6. UNCERTAINTY
  // ─────────────────────────────────────────
  {
    id: 'uncertainty',
    name: 'Uncertainty',
    words: [
      {
        basic: 'Maybe',
        advanced: 'Potentially',
        transcription: '/pəˈtenʃəli/',
        wrong: ['Previously', 'Primarily', 'Practically', 'Particularly'],
      },
      {
        basic: 'Perhaps',
        advanced: 'Conceivably',
        transcription: '/kənˈsiːvəbli/',
        wrong: ['Considerably', 'Consistently', 'Continuously', 'Correspondingly'],
      },
      {
        basic: 'Might',
        advanced: 'Possibly',
        transcription: '/ˈpɒsɪbli/',
        wrong: ['Previously', 'Primarily', 'Practically', 'Particularly'],
      },
      {
        basic: 'Not sure',
        advanced: 'Uncertain',
        transcription: '/ʌnˈsɜːrtn/',
        wrong: ['Unclear', 'Unfair', 'Unusual', 'Unexpected'],
      },
      {
        basic: 'Could happen',
        advanced: 'Probable',
        transcription: '/ˈprɒbəbl/',
        wrong: ['Practical', 'Precise', 'Previous', 'Primary'],
      },
      {
        basic: 'Depends',
        advanced: 'Contingent',
        transcription: '/kənˈtɪndʒənt/',
        wrong: ['Consistent', 'Confident', 'Cautious', 'Creative'],
      },
      {
        basic: 'Who knows',
        advanced: 'Indeterminate',
        transcription: '/ˌɪndɪˈtɜːrmɪnɪt/',
        wrong: ['Indifferent', 'Impulsive', 'Insightful', 'Intuitive'],
      },
      {
        basic: 'Unclear',
        advanced: 'Ambiguous',
        transcription: '/æmˈbɪɡjuəs/',
        wrong: ['Ambitious', 'Analytical', 'Adaptable', 'Articulate'],
      },
      {
        basic: 'Up in the air',
        advanced: 'Undecided',
        transcription: '/ˌʌndɪˈsaɪdɪd/',
        wrong: ['Undiscovered', 'Undiscussed', 'Undismissed', 'Undisplayed'],
      },
      {
        basic: 'Risky',
        advanced: 'Speculative',
        transcription: '/ˈspekjulətɪv/',
        wrong: ['Structured', 'Successful', 'Supportive', 'Systematic'],
      },
    ],
  },
]
