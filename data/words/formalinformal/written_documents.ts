// ============================================================
// WRITTEN DOCUMENTS — Informal vs formal document equivalents
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
        advanced: 'Initiate',
        transcription: '/ɪˈnɪʃieɪt/',
        wrong: ['Indicate', 'Influence', 'Inspect', 'Integrate'],
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
        basic: 'Make',
        advanced: 'Formulate',
        transcription: '/ˈfɔːrmjuleɪt/',
        wrong: ['Filter', 'Find', 'Fix', 'Focus'],
      },
      {
        basic: 'Think about',
        advanced: 'Consider',
        transcription: '/kənˈsɪdər/',
        wrong: ['Contain', 'Convince', 'Convert', 'Convey'],
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
        advanced: 'Solution',
        transcription: '/səˈluːʃən/',
        wrong: ['Statement', 'Summary', 'Support', 'Survey'],
      },
      {
        basic: 'Idea',
        advanced: 'Proposal',
        transcription: '/prəˈpoʊzl/',
        wrong: ['Process', 'Product', 'Profile', 'Progress'],
      },
      {
        basic: 'Change',
        advanced: 'Amendment',
        transcription: '/əˈmendmənt/',
        wrong: ['Assessment', 'Assignment', 'Assumption', 'Attachment'],
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
        wrong: ['Hence', 'Hereby', 'Herein', 'Hereto'],
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
        transcription: '/ˈðeərfɔːr/',
        wrong: ['Thereafter', 'Thereby', 'Therein', 'Thereto'],
      },
      {
        basic: 'And',
        advanced: 'Moreover',
        transcription: '/mɔːrˈoʊvər/',
        wrong: ['Meanwhile', 'Merely', 'Mostly', 'Mutually'],
      },
      {
        basic: 'Because',
        advanced: 'Consequently',
        transcription: '/ˈkɒnsɪkwəntli/',
        wrong: ['Considerably', 'Consistently', 'Continuously', 'Correspondingly'],
      },
      {
        basic: 'Still',
        advanced: 'Nevertheless',
        transcription: '/ˌnevərðəˈles/',
        wrong: ['Nonetheless', 'Notably', 'Normally', 'Necessarily'],
      },
      {
        basic: 'Even so',
        advanced: 'Notwithstanding',
        transcription: '/ˌnɒtwɪðˈstændɪŋ/',
        wrong: ['Nonetheless', 'Nevertheless', 'Notably', 'Normally'],
      },
      {
        basic: 'In the end',
        advanced: 'Ultimately',
        transcription: '/ˈʌltɪmətli/',
        wrong: ['Unexpectedly', 'Unnecessarily', 'Unusually', 'Unfairly'],
      },
      {
        basic: 'On top of that',
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
        transcription: '/prɪˈzjuːməbli/',
        wrong: ['Previously', 'Primarily', 'Practically', 'Particularly'],
      },
      {
        basic: 'I think',
        advanced: 'It appears',
        transcription: '/ɪt əˈpɪərz/',
        wrong: ['It applies', 'It arrives', 'It assigns', 'It assists'],
      },
      {
        basic: 'Seems like',
        advanced: 'It would appear',
        transcription: '/ɪt wʊd əˈpɪər/',
        wrong: ['It would apply', 'It would arrive', 'It would assign', 'It would assist'],
      },
      {
        basic: 'Might',
        advanced: 'May',
        transcription: '/meɪ/',
        wrong: ['Must', 'Made', 'Mark', 'Meet'],
      },
      {
        basic: 'Could be',
        advanced: 'Arguably',
        transcription: '/ˈɑːrɡjuəbli/',
        wrong: ['Accordingly', 'Apparently', 'Approximately', 'Alternatively'],
      },
      {
        basic: 'Sort of',
        advanced: 'To some extent',
        transcription: '/tə sʌm ɪkˈstent/',
        wrong: ['To some degree', 'To some level', 'To some point', 'To some measure'],
      },
      {
        basic: 'Not sure',
        advanced: 'Uncertain',
        transcription: '/ʌnˈsɜːrtn/',
        wrong: ['Unclear', 'Unfair', 'Unusual', 'Unexpected'],
      },
      {
        basic: 'Roughly',
        advanced: 'Approximately',
        transcription: '/əˈprɒksɪmətli/',
        wrong: ['Accordingly', 'Apparently', 'Additionally', 'Alternatively'],
      },
      {
        basic: 'Looks like',
        advanced: 'Suggests that',
        transcription: '/səˈdʒests ðæt/',
        wrong: ['Supports that', 'Sustains that', 'Surrounds that', 'Surveys that'],
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
        basic: 'Big',
        advanced: 'Substantial',
        transcription: '/səbˈstænʃl/',
        wrong: ['Successful', 'Sufficient', 'Suitable', 'Systematic'],
      },
      {
        basic: 'Main',
        advanced: 'Principal',
        transcription: '/ˈprɪnsɪpl/',
        wrong: ['Practical', 'Precise', 'Previous', 'Primary'],
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
        basic: 'In the end',
        advanced: 'In conclusion',
        transcription: '/ɪn kənˈkluːʒən/',
        wrong: ['In summary', 'In essence', 'In brief', 'In short'],
      },
      {
        basic: 'So',
        advanced: 'Hence',
        transcription: '/hens/',
        wrong: ['Here', 'Hold', 'Hope', 'Hear'],
      },
      {
        basic: 'To sum up',
        advanced: 'To summarize',
        transcription: '/tə ˈsʌməraɪz/',
        wrong: ['To conclude', 'To finalize', 'To complete', 'To close'],
      },
      {
        basic: 'All in all',
        advanced: 'On balance',
        transcription: '/ɒn ˈbæləns/',
        wrong: ['On purpose', 'On record', 'On schedule', 'On track'],
      },
      {
        basic: 'Bottom line',
        advanced: 'Ultimately',
        transcription: '/ˈʌltɪmətli/',
        wrong: ['Unexpectedly', 'Unnecessarily', 'Unusually', 'Unfairly'],
      },
      {
        basic: 'The point is',
        advanced: 'In essence',
        transcription: '/ɪn ˈesns/',
        wrong: ['In summary', 'In brief', 'In short', 'In total'],
      },
      {
        basic: 'Finally',
        advanced: 'In closing',
        transcription: '/ɪn ˈkloʊzɪŋ/',
        wrong: ['In summary', 'In essence', 'In brief', 'In short'],
      },
      {
        basic: 'Overall',
        advanced: 'On the whole',
        transcription: '/ɒn ðə hoʊl/',
        wrong: ['On the other hand', 'On the contrary', 'On the surface', 'On the basis'],
      },
      {
        basic: 'Clearly',
        advanced: 'It is evident',
        transcription: '/ɪt ɪz ˈevɪdənt/',
        wrong: ['It is effective', 'It is efficient', 'It is ethical', 'It is extreme'],
      },
      {
        basic: 'In short',
        advanced: 'To conclude',
        transcription: '/tə kənˈkluːd/',
        wrong: ['To confirm', 'To connect', 'To consider', 'To contain'],
      },
    ],
  },
]
