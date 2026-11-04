// ============================================================
// MEETINGS & PRESENTATIONS — Informal vs formal equivalents
// Structure: 6 subcategories × 10 words
// basic = informal word/phrase, advanced = its formal equivalent
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

export const MEETINGS_PRESENTATIONS: Subcategory[] = [

  // ─────────────────────────────────────────
  // 1. OPENING
  // ─────────────────────────────────────────
  {
    id: 'opening',
    name: 'Opening',
    words: [
      {
        basic: 'Hi',
        advanced: 'Greetings',
        transcription: '/ˈɡriːtɪŋz/',
        wrong: ['Gratitude', 'Gestures', 'Garments', 'Gallons'],
      },
      {
        basic: 'Kick off',
        advanced: 'Convene',
        transcription: '/kənˈviːn/',
        wrong: ['Convey', 'Convert', 'Convince', 'Contain'],
      },
      {
        basic: 'Quick',
        advanced: 'Brief',
        transcription: '/briːf/',
        wrong: ['Broad', 'Bold', 'Blunt', 'Bright'],
      },
      {
        basic: 'Talk about',
        advanced: 'Address',
        transcription: '/əˈdres/',
        wrong: ['Adjust', 'Admire', 'Adopt', 'Afford'],
      },
      {
        basic: 'Show slides',
        advanced: 'Present',
        transcription: '/prɪˈzent/',
        wrong: ['Preserve', 'Prevent', 'Predict', 'Preside'],
      },
      {
        basic: 'Meeting plan',
        advanced: 'Agenda',
        transcription: '/əˈdʒendə/',
        wrong: ['Agent', 'Adage', 'Angle', 'Advent'],
      },
      {
        basic: 'People here',
        advanced: 'Attendees',
        transcription: '/ˌætenˈdiːz/',
        wrong: ['Attitudes', 'Attributes', 'Attractions', 'Attorneys'],
      },
      {
        basic: 'Go ahead',
        advanced: 'Proceed',
        transcription: '/prəˈsiːd/',
        wrong: ['Precede', 'Process', 'Produce', 'Protect'],
      },
      {
        basic: 'Heads-up',
        advanced: 'Notification',
        transcription: '/ˌnoʊtɪfɪˈkeɪʃn/',
        wrong: ['Nomination', 'Navigation', 'Negotiation', 'Narration'],
      },
      {
        basic: 'Late',
        advanced: 'Tardy',
        transcription: '/ˈtɑːrdi/',
        wrong: ['Tidy', 'Tasty', 'Timid', 'Tough'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 2. AGREEING
  // ─────────────────────────────────────────
  {
    id: 'agreeing',
    name: 'Agreeing',
    words: [
      {
        basic: 'Yeah',
        advanced: 'Indeed',
        transcription: '/ɪnˈdiːd/',
        wrong: ['Inside', 'Instead', 'Indoors', 'Incline'],
      },
      {
        basic: '100 percent',
        advanced: 'Wholeheartedly',
        transcription: '/ˌhoʊlˈhɑːrtɪdli/',
        wrong: ['Wonderfully', 'Willingly', 'Wearily', 'Widely'],
      },
      {
        basic: 'Good point',
        advanced: 'Well noted',
        transcription: '/ˌwel ˈnoʊtɪd/',
        wrong: ['Well done', 'Well known', 'Well paid', 'Well read'],
      },
      {
        basic: 'Sounds good',
        advanced: 'Acceptable',
        transcription: '/əkˈseptəbl/',
        wrong: ['Adaptable', 'Adorable', 'Applicable', 'Accessible'],
      },
      {
        basic: 'Sure',
        advanced: 'Certainly',
        transcription: '/ˈsɜːrtnli/',
        wrong: ['Considerably', 'Currently', 'Carefully', 'Casually'],
      },
      {
        basic: 'Makes sense',
        advanced: 'Logical',
        transcription: '/ˈlɑːdʒɪkl/',
        wrong: ['Lawful', 'Literal', 'Liberal', 'Legible'],
      },
      {
        basic: 'Right',
        advanced: 'Precisely',
        transcription: '/prɪˈsaɪsli/',
        wrong: ['Presently', 'Primarily', 'Previously', 'Probably'],
      },
      {
        basic: 'Agree',
        advanced: 'Concur',
        transcription: '/kənˈkɜːr/',
        wrong: ['Conduct', 'Confess', 'Convert', 'Convey'],
      },
      {
        basic: 'Fine by me',
        advanced: 'No objection',
        transcription: '/ˌnoʊ əbˈdʒekʃn/',
        wrong: ['No obligation', 'No operation', 'No occasion', 'No omission'],
      },
      {
        basic: 'On board',
        advanced: 'Aligned',
        transcription: '/əˈlaɪnd/',
        wrong: ['Allied', 'Altered', 'Allowed', 'Applied'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 3. DISAGREEING
  // ─────────────────────────────────────────
  {
    id: 'disagreeing',
    name: 'Disagreeing',
    words: [
      {
        basic: 'Disagree',
        advanced: 'Dissent',
        transcription: '/dɪˈsent/',
        wrong: ['Descend', 'Detest', 'Defend', 'Decent'],
      },
      {
        basic: 'Worried',
        advanced: 'Reservations',
        transcription: '/ˌrezərˈveɪʃnz/',
        wrong: ['Reputations', 'Resolutions', 'Reservoirs', 'Revelations'],
      },
      {
        basic: 'Wrong',
        advanced: 'Incorrect',
        transcription: '/ˌɪnkəˈrekt/',
        wrong: ['Incentive', 'Increased', 'Indirect', 'Informal'],
      },
      {
        basic: 'Bad idea',
        advanced: 'Inadvisable',
        transcription: '/ˌɪnədˈvaɪzəbl/',
        wrong: ['Inevitable', 'Invisible', 'Incredible', 'Inflexible'],
      },
      {
        basic: 'Useless',
        advanced: 'Futile',
        transcription: '/ˈfjuːtl/',
        wrong: ['Fragile', 'Fertile', 'Fickle', 'Fluent'],
      },
      {
        basic: 'Pointless',
        advanced: 'Unnecessary',
        transcription: '/ʌnˈnesəseri/',
        wrong: ['Unusual', 'Unlikely', 'Unstable', 'Unwilling'],
      },
      {
        basic: 'Silly',
        advanced: 'Unreasonable',
        transcription: '/ʌnˈriːznəbl/',
        wrong: ['Unreliable', 'Unrestricted', 'Unresolved', 'Unrelated'],
      },
      {
        basic: 'Unfair',
        advanced: 'Inequitable',
        transcription: '/ɪnˈekwɪtəbl/',
        wrong: ['Incurable', 'Inedible', 'Incapable', 'Inclusive'],
      },
      {
        basic: 'Not doable',
        advanced: 'Unfeasible',
        transcription: '/ʌnˈfiːzəbl/',
        wrong: ['Unfashionable', 'Unfaithful', 'Unfamiliar', 'Unfavorable'],
      },
      {
        basic: 'Push back',
        advanced: 'Contest',
        transcription: '/kənˈtest/',
        wrong: ['Content', 'Contrast', 'Context', 'Contact'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 4. SUMMARIZING
  // ─────────────────────────────────────────
  {
    id: 'summarizing',
    name: 'Summarizing',
    words: [
      {
        basic: 'Recap',
        advanced: 'Summarize',
        transcription: '/ˈsʌməraɪz/',
        wrong: ['Signify', 'Specify', 'Simplify', 'Stabilize'],
      },
      {
        basic: 'Main point',
        advanced: 'Crux',
        transcription: '/krʌks/',
        wrong: ['Crush', 'Crash', 'Crisp', 'Crawl'],
      },
      {
        basic: 'Takeaway',
        advanced: 'Insight',
        transcription: '/ˈɪnsaɪt/',
        wrong: ['Incident', 'Insect', 'Install', 'Island'],
      },
      {
        basic: 'Sum up',
        advanced: 'Encapsulate',
        transcription: '/ɪnˈkæpsjuleɪt/',
        wrong: ['Evaporate', 'Eliminate', 'Elevate', 'Exaggerate'],
      },
      {
        basic: 'Wrap up',
        advanced: 'Finalize',
        transcription: '/ˈfaɪnəlaɪz/',
        wrong: ['Finance', 'Fortify', 'Fabricate', 'Falsify'],
      },
      {
        basic: 'Big picture',
        advanced: 'Overview',
        transcription: '/ˈoʊvərvjuː/',
        wrong: ['Overdue', 'Overlap', 'Overtime', 'Overhaul'],
      },
      {
        basic: 'Facts',
        advanced: 'Findings',
        transcription: '/ˈfaɪndɪŋz/',
        wrong: ['Fittings', 'Fendings', 'Feelings', 'Fillings'],
      },
      {
        basic: 'Numbers',
        advanced: 'Statistics',
        transcription: '/stəˈtɪstɪks/',
        wrong: ['Strategies', 'Statements', 'Stations', 'Statutes'],
      },
      {
        basic: 'Proof',
        advanced: 'Evidence',
        transcription: '/ˈevɪdəns/',
        wrong: ['Elements', 'Examples', 'Emphasis', 'Entrance'],
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
  // 5. ASKING
  // ─────────────────────────────────────────
  {
    id: 'asking',
    name: 'Asking',
    words: [
      {
        basic: 'Ask',
        advanced: 'Inquire',
        transcription: '/ɪnˈkwaɪər/',
        wrong: ['Inspire', 'Inspect', 'Inherit', 'Insure'],
      },
      {
        basic: 'Explain',
        advanced: 'Elaborate',
        transcription: '/ɪˈlæbəreɪt/',
        wrong: ['Evaluate', 'Eliminate', 'Emphasize', 'Elevate'],
      },
      {
        basic: 'Feedback',
        advanced: 'Input',
        transcription: '/ˈɪnpʊt/',
        wrong: ['Inch', 'Inkling', 'Insult', 'Intake'],
      },
      {
        basic: 'In charge',
        advanced: 'Responsible',
        transcription: '/rɪˈspɑːnsəbl/',
        wrong: ['Reliable', 'Reasonable', 'Regretful', 'Rebellious'],
      },
      {
        basic: 'Due date',
        advanced: 'Timeline',
        transcription: '/ˈtaɪmlaɪn/',
        wrong: ['Tagline', 'Tideline', 'Treeline', 'Trendline'],
      },
      {
        basic: 'Reason',
        advanced: 'Rationale',
        transcription: '/ˌræʃəˈnæl/',
        wrong: ['Rational', 'Rationing', 'Ratio', 'Rattle'],
      },
      {
        basic: 'Method',
        advanced: 'Approach',
        transcription: '/əˈproʊtʃ/',
        wrong: ['Approval', 'Appeal', 'Appraisal', 'Apparel'],
      },
      {
        basic: 'Tasks',
        advanced: 'Deliverables',
        transcription: '/dɪˈlɪvərəblz/',
        wrong: ['Deliveries', 'Delegates', 'Deadlines', 'Defendants'],
      },
      {
        basic: 'Needs',
        advanced: 'Requirements',
        transcription: '/rɪˈkwaɪərmənts/',
        wrong: ['Requests', 'Resources', 'Reminders', 'Resolutions'],
      },
      {
        basic: 'Costs',
        advanced: 'Expenditure',
        transcription: '/ɪkˈspendɪtʃər/',
        wrong: ['Expedition', 'Expertise', 'Expansion', 'Explosion'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 6. CLOSING
  // ─────────────────────────────────────────
  {
    id: 'closing',
    name: 'Closing',
    words: [
      {
        basic: 'Break up',
        advanced: 'Adjourn',
        transcription: '/əˈdʒɜːrn/',
        wrong: ['Adjust', 'Admire', 'Advance', 'Accuse'],
      },
      {
        basic: 'Bye',
        advanced: 'Farewell',
        transcription: '/ˌferˈwel/',
        wrong: ['Fairway', 'Forward', 'Feather', 'Fortune'],
      },
      {
        basic: 'Meet again',
        advanced: 'Reconvene',
        transcription: '/ˌriːkənˈviːn/',
        wrong: ['Reconsider', 'Reconcile', 'Recover', 'Recruit'],
      },
      {
        basic: 'Thank you',
        advanced: 'Appreciate',
        transcription: '/əˈpriːʃieɪt/',
        wrong: ['Appraise', 'Approach', 'Apologize', 'Appoint'],
      },
      {
        basic: 'Homework',
        advanced: 'Assignments',
        transcription: '/əˈsaɪnmənts/',
        wrong: ['Assistants', 'Assessments', 'Assurances', 'Assemblies'],
      },
      {
        basic: 'Notes',
        advanced: 'Minutes',
        transcription: '/ˈmɪnɪts/',
        wrong: ['Mittens', 'Missiles', 'Minerals', 'Ministers'],
      },
      {
        basic: 'Finish',
        advanced: 'Conclude',
        transcription: '/kənˈkluːd/',
        wrong: ['Conduct', 'Confuse', 'Contain', 'Convince'],
      },
      {
        basic: 'Last words',
        advanced: 'Remarks',
        transcription: '/rɪˈmɑːrks/',
        wrong: ['Remarries', 'Remedies', 'Reminders', 'Removals'],
      },
      {
        basic: 'Handouts',
        advanced: 'Materials',
        transcription: '/məˈtɪriəlz/',
        wrong: ['Mysteries', 'Memorials', 'Marketers', 'Mercenaries'],
      },
      {
        basic: 'Thumbs up',
        advanced: 'Approval',
        transcription: '/əˈpruːvl/',
        wrong: ['Appeal', 'Apparel', 'Appetite', 'Applause'],
      },
    ],
  },
]
