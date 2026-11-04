// ============================================================
// WRITTEN DOCUMENTS — Informal vs formal document equivalents
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

export const WRITTEN_DOCUMENTS: Subcategory[] = [

  // ─────────────────────────────────────────
  // 1. VERBS
  // ─────────────────────────────────────────
  {
    id: 'verbs',
    name: 'Verbs',
    words: [
      {
        basic: 'Use',
        advanced: 'Utilize',
        transcription: '/ˈjuːtəlaɪz/',
        wrong: ['Upgrade', 'Update', 'Undergo', 'Undermine'],
      },
      {
        basic: 'Show',
        advanced: 'Demonstrate',
        transcription: '/ˈdemənstreɪt/',
        wrong: ['Decrease', 'Deliver', 'Demand', 'Depend'],
      },
      {
        basic: 'Help',
        advanced: 'Facilitate',
        transcription: '/fəˈsɪlɪteɪt/',
        wrong: ['Filter', 'Find', 'Fix', 'Focus'],
      },
      {
        basic: 'Start',
        advanced: 'Commence',
        transcription: '/kəˈmens/',
        wrong: ['Commit', 'Compare', 'Compile', 'Complain'],
      },
      {
        basic: 'End',
        advanced: 'Terminate',
        transcription: '/ˈtɜːrmɪneɪt/',
        wrong: ['Transfer', 'Trigger', 'Tackle', 'Target'],
      },
      {
        basic: 'Get',
        advanced: 'Obtain',
        transcription: '/əbˈteɪn/',
        wrong: ['Occupy', 'Offend', 'Omit', 'Operate'],
      },
      {
        basic: 'Look at',
        advanced: 'Examine',
        transcription: '/ɪɡˈzæmɪn/',
        wrong: ['Exchange', 'Execute', 'Expand', 'Expect'],
      },
      {
        basic: 'Find out',
        advanced: 'Ascertain',
        transcription: '/ˌæsərˈteɪn/',
        wrong: ['Assess', 'Assign', 'Assist', 'Associate'],
      },
      {
        basic: 'Buy',
        advanced: 'Purchase',
        transcription: '/ˈpɜːrtʃəs/',
        wrong: ['Perform', 'Persuade', 'Prohibit', 'Provoke'],
      },
      {
        basic: 'Need',
        advanced: 'Require',
        transcription: '/rɪˈkwaɪər/',
        wrong: ['Recall', 'Resolve', 'Retain', 'Reveal'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 2. NOUNS
  // ─────────────────────────────────────────
  {
    id: 'nouns',
    name: 'Nouns',
    words: [
      {
        basic: 'Problem',
        advanced: 'Issue',
        transcription: '/ˈɪʃuː/',
        wrong: ['Input', 'Insight', 'Impact', 'Index'],
      },
      {
        basic: 'Answer',
        advanced: 'Response',
        transcription: '/rɪˈspɑːns/',
        wrong: ['Resource', 'Reward', 'Reserve', 'Release'],
      },
      {
        basic: 'Idea',
        advanced: 'Proposal',
        transcription: '/prəˈpoʊzl/',
        wrong: ['Process', 'Product', 'Profile', 'Progress'],
      },
      {
        basic: 'Change',
        advanced: 'Modification',
        transcription: '/ˌmɑːdɪfɪˈkeɪʃən/',
        wrong: ['Motivation', 'Moderation', 'Meditation', 'Mediation'],
      },
      {
        basic: 'Talk',
        advanced: 'Discussion',
        transcription: '/dɪˈskʌʃən/',
        wrong: ['Decision', 'Declaration', 'Definition', 'Delivery'],
      },
      {
        basic: 'Goal',
        advanced: 'Objective',
        transcription: '/əbˈdʒektɪv/',
        wrong: ['Obligation', 'Observation', 'Occurrence', 'Operation'],
      },
      {
        basic: 'Rule',
        advanced: 'Regulation',
        transcription: '/ˌreɡjuˈleɪʃən/',
        wrong: ['Relation', 'Relevance', 'Requirement', 'Resolution'],
      },
      {
        basic: 'Check',
        advanced: 'Assessment',
        transcription: '/əˈsesmənt/',
        wrong: ['Assignment', 'Assumption', 'Attachment', 'Attention'],
      },
      {
        basic: 'Plan',
        advanced: 'Strategy',
        transcription: '/ˈstrætədʒi/',
        wrong: ['Statement', 'Summary', 'Support', 'Survey'],
      },
      {
        basic: 'Result',
        advanced: 'Outcome',
        transcription: '/ˈaʊtkʌm/',
        wrong: ['Output', 'Overview', 'Oversight', 'Obligation'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 3. CONNECTORS
  // ─────────────────────────────────────────
  {
    id: 'connectors',
    name: 'Connectors',
    words: [
      {
        basic: 'But',
        advanced: 'However',
        transcription: '/haʊˈevər/',
        wrong: ['Hence', 'Hardly', 'Hopefully', 'Honestly'],
      },
      {
        basic: 'Also',
        advanced: 'Furthermore',
        transcription: '/ˈfɜːrðərmɔːr/',
        wrong: ['Formerly', 'Fortunately', 'Frequently', 'Fundamentally'],
      },
      {
        basic: 'So',
        advanced: 'Therefore',
        transcription: '/ˈðerfɔːr/',
        wrong: ['Thereafter', 'Thankfully', 'Thoroughly', 'Typically'],
      },
      {
        basic: 'Plus',
        advanced: 'Moreover',
        transcription: '/mɔːrˈoʊvər/',
        wrong: ['Meanwhile', 'Merely', 'Mostly', 'Mutually'],
      },
      {
        basic: 'Because of',
        advanced: 'Due to',
        transcription: '/ˈduː tuː/',
        wrong: ['Down to', 'Due for', 'Dating back', 'Driven by'],
      },
      {
        basic: 'Still',
        advanced: 'Nevertheless',
        transcription: '/ˌnevərðəˈles/',
        wrong: ['Notably', 'Normally', 'Necessarily', 'Nominally'],
      },
      {
        basic: 'Even so',
        advanced: 'Nonetheless',
        transcription: '/ˌnʌnðəˈles/',
        wrong: ['Naturally', 'Narrowly', 'Nationally', 'Noticeably'],
      },
      {
        basic: 'In the end',
        advanced: 'Ultimately',
        transcription: '/ˈʌltɪmətli/',
        wrong: ['Unexpectedly', 'Unnecessarily', 'Unusually', 'Unfairly'],
      },
      {
        basic: 'What\'s more',
        advanced: 'Additionally',
        transcription: '/əˈdɪʃənəli/',
        wrong: ['Accordingly', 'Apparently', 'Approximately', 'Alternatively'],
      },
      {
        basic: 'That is why',
        advanced: 'Thus',
        transcription: '/ðʌs/',
        wrong: ['Then', 'There', 'These', 'Those'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 4. HEDGING
  // ─────────────────────────────────────────
  {
    id: 'hedging',
    name: 'Hedging',
    words: [
      {
        basic: 'Maybe',
        advanced: 'Potentially',
        transcription: '/pəˈtenʃəli/',
        wrong: ['Previously', 'Primarily', 'Practically', 'Particularly'],
      },
      {
        basic: 'Probably',
        advanced: 'Presumably',
        transcription: '/prɪˈzuːməbli/',
        wrong: ['Predominantly', 'Prominently', 'Promptly', 'Properly'],
      },
      {
        basic: 'I think',
        advanced: 'In my view',
        transcription: '/ɪn maɪ ˈvjuː/',
        wrong: ['In my place', 'In my favor', 'In my turn', 'In my hands'],
      },
      {
        basic: 'Seems like',
        advanced: 'It would appear',
        transcription: '/ɪt wʊd əˈpɪr/',
        wrong: ['It would apply', 'It would arrive', 'It would assign', 'It would assist'],
      },
      {
        basic: 'Kind of',
        advanced: 'Somewhat',
        transcription: '/ˈsʌmwʌt/',
        wrong: ['Sometimes', 'Somewhere', 'Something', 'Sometime'],
      },
      {
        basic: 'Could be',
        advanced: 'Conceivably',
        transcription: '/kənˈsiːvəbli/',
        wrong: ['Considerably', 'Conveniently', 'Conversely', 'Consistently'],
      },
      {
        basic: 'Sort of',
        advanced: 'Partially',
        transcription: '/ˈpɑːrʃəli/',
        wrong: ['Particularly', 'Primarily', 'Practically', 'Previously'],
      },
      {
        basic: 'Not sure',
        advanced: 'Uncertain',
        transcription: '/ʌnˈsɜːrtn/',
        wrong: ['Unwilling', 'Unfair', 'Unusual', 'Unexpected'],
      },
      {
        basic: 'Roughly',
        advanced: 'Approximately',
        transcription: '/əˈprɑːksɪmətli/',
        wrong: ['Accordingly', 'Apparently', 'Additionally', 'Alternatively'],
      },
      {
        basic: 'Looks like',
        advanced: 'Appears',
        transcription: '/əˈpɪrz/',
        wrong: ['Applies', 'Arrives', 'Assigns', 'Assists'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 5. EMPHASIS
  // ─────────────────────────────────────────
  {
    id: 'emphasis',
    name: 'Emphasis',
    words: [
      {
        basic: 'Very',
        advanced: 'Significantly',
        transcription: '/sɪɡˈnɪfɪkəntli/',
        wrong: ['Separately', 'Specifically', 'Steadily', 'Strictly'],
      },
      {
        basic: 'Really',
        advanced: 'Substantially',
        transcription: '/səbˈstænʃəli/',
        wrong: ['Successfully', 'Sufficiently', 'Suitably', 'Systematically'],
      },
      {
        basic: 'A lot',
        advanced: 'Considerably',
        transcription: '/kənˈsɪdərəbli/',
        wrong: ['Consistently', 'Continuously', 'Correspondingly', 'Critically'],
      },
      {
        basic: 'Super',
        advanced: 'Exceptionally',
        transcription: '/ɪkˈsepʃənəli/',
        wrong: ['Effectively', 'Efficiently', 'Ethically', 'Extensively'],
      },
      {
        basic: 'Totally',
        advanced: 'Entirely',
        transcription: '/ɪnˈtaɪərli/',
        wrong: ['Equally', 'Essentially', 'Eventually', 'Evidently'],
      },
      {
        basic: 'Key',
        advanced: 'Fundamental',
        transcription: '/ˌfʌndəˈmentl/',
        wrong: ['Functional', 'Formal', 'Focused', 'Fulfilled'],
      },
      {
        basic: 'Huge',
        advanced: 'Immense',
        transcription: '/ɪˈmens/',
        wrong: ['Immune', 'Impact', 'Imply', 'Impose'],
      },
      {
        basic: 'Main',
        advanced: 'Principal',
        transcription: '/ˈprɪnsəpl/',
        wrong: ['Practical', 'Precise', 'Previous', 'Private'],
      },
      {
        basic: 'Must',
        advanced: 'Imperative',
        transcription: '/ɪmˈperətɪv/',
        wrong: ['Impressive', 'Impulsive', 'Inclusive', 'Innovative'],
      },
      {
        basic: 'Clear',
        advanced: 'Evident',
        transcription: '/ˈevɪdənt/',
        wrong: ['Effective', 'Efficient', 'Ethical', 'Extreme'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 6. CONCLUSIONS
  // ─────────────────────────────────────────
  {
    id: 'conclusions',
    name: 'Conclusions',
    words: [
      {
        basic: 'To wrap up',
        advanced: 'In conclusion',
        transcription: '/ɪn kənˈkluːʒən/',
        wrong: ['In contrast', 'In context', 'In control', 'In common'],
      },
      {
        basic: 'Which means',
        advanced: 'Consequently',
        transcription: '/ˈkɑːnsɪkwentli/',
        wrong: ['Considerably', 'Consistently', 'Continuously', 'Correspondingly'],
      },
      {
        basic: 'To sum up',
        advanced: 'In summary',
        transcription: '/ɪn ˈsʌməri/',
        wrong: ['In theory', 'In practice', 'In person', 'In turn'],
      },
      {
        basic: 'All in all',
        advanced: 'On balance',
        transcription: '/ɑːn ˈbæləns/',
        wrong: ['On purpose', 'On record', 'On schedule', 'On track'],
      },
      {
        basic: 'Most of all',
        advanced: 'Above all',
        transcription: '/əˌbʌv ˈɔːl/',
        wrong: ['After all', 'Along all', 'Among all', 'Against all'],
      },
      {
        basic: 'The point is',
        advanced: 'In essence',
        transcription: '/ɪn ˈesns/',
        wrong: ['In public', 'In person', 'In vain', 'In turn'],
      },
      {
        basic: 'Finally',
        advanced: 'In closing',
        transcription: '/ɪn ˈkloʊzɪŋ/',
        wrong: ['In place', 'In line', 'In hand', 'In store'],
      },
      {
        basic: 'Overall',
        advanced: 'On the whole',
        transcription: '/ɑːn ðə ˈhoʊl/',
        wrong: ['On the other hand', 'On the contrary', 'On the surface', 'On the basis'],
      },
      {
        basic: 'Looking back',
        advanced: 'In retrospect',
        transcription: '/ɪn ˈretrəspekt/',
        wrong: ['In reality', 'In relief', 'In return', 'In response'],
      },
      {
        basic: 'In short',
        advanced: 'In brief',
        transcription: '/ɪn ˈbriːf/',
        wrong: ['In bulk', 'In bed', 'In bloom', 'In debt'],
      },
    ],
  },
]
