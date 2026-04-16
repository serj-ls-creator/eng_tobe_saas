// ============================================================
// DURATION & FREQUENCY — Simple vs precise time words
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

export const DURATION_FREQUENCY: Subcategory[] = [

  // ─────────────────────────────────────────
  // 1. ALWAYS-NEVER
  // ─────────────────────────────────────────
  {
    id: 'always-never',
    name: 'Always-Never',
    words: [
      {
        basic: 'Always',
        advanced: 'Consistently',
        transcription: '/kənˈsɪstəntli/',
        wrong: ['Considerably', 'Continuously', 'Correspondingly', 'Critically'],
      },
      {
        basic: 'Never',
        advanced: 'At no point',
        transcription: '/æt noʊ pɔɪnt/',
        wrong: ['At no time', 'At no stage', 'At no level', 'At no rate'],
      },
      {
        basic: 'All the time',
        advanced: 'Perpetually',
        transcription: '/pərˈpetʃuəli/',
        wrong: ['Previously', 'Primarily', 'Practically', 'Particularly'],
      },
      {
        basic: 'Not ever',
        advanced: 'Under no circumstances',
        transcription: '/ˈʌndər noʊ ˈsɜːrkəmstænsɪz/',
        wrong: ['Under no conditions', 'Under no pressure', 'Under no obligation', 'Under no requirement'],
      },
      {
        basic: 'Every time',
        advanced: 'Invariably',
        transcription: '/ɪnˈveəriəbli/',
        wrong: ['Individually', 'Informally', 'Initially', 'Internally'],
      },
      {
        basic: 'Not once',
        advanced: 'Never once',
        transcription: '/ˈnevər wʌns/',
        wrong: ['Never twice', 'Never again', 'Never before', 'Never after'],
      },
      {
        basic: 'Constantly',
        advanced: 'Incessantly',
        transcription: '/ɪnˈsesntli/',
        wrong: ['Independently', 'Individually', 'Informally', 'Initially'],
      },
      {
        basic: 'Without fail',
        advanced: 'Unfailingly',
        transcription: '/ʌnˈfeɪlɪŋli/',
        wrong: ['Unexpectedly', 'Unnecessarily', 'Unusually', 'Unfairly'],
      },
      {
        basic: 'Not at all',
        advanced: 'In no way',
        transcription: '/ɪn noʊ weɪ/',
        wrong: ['In no time', 'In no place', 'In no case', 'In no sense'],
      },
      {
        basic: 'Forever',
        advanced: 'Indefinitely',
        transcription: '/ɪnˈdefɪnɪtli/',
        wrong: ['Independently', 'Individually', 'Informally', 'Initially'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 2. OFTEN-RARELY
  // ─────────────────────────────────────────
  {
    id: 'often-rarely',
    name: 'Often-Rarely',
    words: [
      {
        basic: 'Often',
        advanced: 'Frequently',
        transcription: '/ˈfriːkwəntli/',
        wrong: ['Formally', 'Fortunately', 'Fundamentally', 'Fully'],
      },
      {
        basic: 'Rarely',
        advanced: 'Seldom',
        transcription: '/ˈseldəm/',
        wrong: ['Separately', 'Seriously', 'Significantly', 'Simply'],
      },
      {
        basic: 'A lot',
        advanced: 'Regularly',
        transcription: '/ˈreɡjuləli/',
        wrong: ['Reliably', 'Remarkably', 'Repeatedly', 'Respectfully'],
      },
      {
        basic: 'Hardly ever',
        advanced: 'Infrequently',
        transcription: '/ɪnˈfriːkwəntli/',
        wrong: ['Independently', 'Individually', 'Informally', 'Initially'],
      },
      {
        basic: 'Most of the time',
        advanced: 'Predominantly',
        transcription: '/prɪˈdɒmɪnəntli/',
        wrong: ['Previously', 'Primarily', 'Practically', 'Particularly'],
      },
      {
        basic: 'Not much',
        advanced: 'Sparingly',
        transcription: '/ˈspeərɪŋli/',
        wrong: ['Separately', 'Specifically', 'Steadily', 'Strictly'],
      },
      {
        basic: 'Very often',
        advanced: 'Habitually',
        transcription: '/həˈbɪtʃuəli/',
        wrong: ['Honestly', 'Hopefully', 'Helpfully', 'Harmlessly'],
      },
      {
        basic: 'Almost never',
        advanced: 'Exceptionally rarely',
        transcription: '/ɪkˈsepʃənəli ˈreəli/',
        wrong: ['Exceptionally often', 'Exceptionally frequently', 'Exceptionally regularly', 'Exceptionally commonly'],
      },
      {
        basic: 'Now and then',
        advanced: 'Periodically',
        transcription: '/ˌpɪəriˈɒdɪkli/',
        wrong: ['Previously', 'Primarily', 'Practically', 'Particularly'],
      },
      {
        basic: 'Once in a while',
        advanced: 'Occasionally',
        transcription: '/əˈkeɪʒənəli/',
        wrong: ['Obviously', 'Officially', 'Openly', 'Ordinarily'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 3. LONG-SHORT
  // ─────────────────────────────────────────
  {
    id: 'long-short',
    name: 'Long-Short',
    words: [
      {
        basic: 'Long',
        advanced: 'Extended',
        transcription: '/ɪkˈstendɪd/',
        wrong: ['Examined', 'Exchanged', 'Executed', 'Expanded'],
      },
      {
        basic: 'Short',
        advanced: 'Brief',
        transcription: '/briːf/',
        wrong: ['Broad', 'Bold', 'Bright', 'Brave'],
      },
      {
        basic: 'Very long',
        advanced: 'Prolonged',
        transcription: '/prəˈlɒŋd/',
        wrong: ['Proceeded', 'Produced', 'Promoted', 'Protected'],
      },
      {
        basic: 'Very short',
        advanced: 'Concise',
        transcription: '/kənˈsaɪs/',
        wrong: ['Consistent', 'Confident', 'Cautious', 'Creative'],
      },
      {
        basic: 'Too long',
        advanced: 'Excessive',
        transcription: '/ɪkˈsesɪv/',
        wrong: ['Effective', 'Efficient', 'Ethical', 'Extreme'],
      },
      {
        basic: 'Too short',
        advanced: 'Insufficient',
        transcription: '/ˌɪnsəˈfɪʃnt/',
        wrong: ['Incomplete', 'Inconsistent', 'Incorrect', 'Ineffective'],
      },
      {
        basic: 'Goes on',
        advanced: 'Ongoing',
        transcription: '/ˈɒnɡoʊɪŋ/',
        wrong: ['Outgoing', 'Upcoming', 'Incoming', 'Overcoming'],
      },
      {
        basic: 'Ends fast',
        advanced: 'Transient',
        transcription: '/ˈtrænziənt/',
        wrong: ['Transparent', 'Trustworthy', 'Thoughtful', 'Tolerant'],
      },
      {
        basic: 'Lasts forever',
        advanced: 'Perpetual',
        transcription: '/pərˈpetʃuəl/',
        wrong: ['Practical', 'Precise', 'Previous', 'Primary'],
      },
      {
        basic: 'Quick',
        advanced: 'Momentary',
        transcription: '/ˈmoʊmənteri/',
        wrong: ['Moderately', 'Modestly', 'Mostly', 'Mutually'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 4. REGULAR-IRREGULAR
  // ─────────────────────────────────────────
  {
    id: 'regular-irregular',
    name: 'Regular-Irregular',
    words: [
      {
        basic: 'Regular',
        advanced: 'Consistent',
        transcription: '/kənˈsɪstənt/',
        wrong: ['Confident', 'Cautious', 'Creative', 'Competitive'],
      },
      {
        basic: 'Irregular',
        advanced: 'Sporadic',
        transcription: '/spəˈrædɪk/',
        wrong: ['Specific', 'Steady', 'Strict', 'Strong'],
      },
      {
        basic: 'On and off',
        advanced: 'Intermittent',
        transcription: '/ˌɪntərˈmɪtənt/',
        wrong: ['Independent', 'Individual', 'Informal', 'Internal'],
      },
      {
        basic: 'Steady',
        advanced: 'Systematic',
        transcription: '/ˌsɪstəˈmætɪk/',
        wrong: ['Structured', 'Successful', 'Supportive', 'Sustainable'],
      },
      {
        basic: 'Random',
        advanced: 'Erratic',
        transcription: '/ɪˈrætɪk/',
        wrong: ['Effective', 'Efficient', 'Ethical', 'Extreme'],
      },
      {
        basic: 'Routine',
        advanced: 'Habitual',
        transcription: '/həˈbɪtʃuəl/',
        wrong: ['Helpful', 'Honest', 'Hopeful', 'Humble'],
      },
      {
        basic: 'Unpredictable',
        advanced: 'Variable',
        transcription: '/ˈveəriəbl/',
        wrong: ['Vigilant', 'Virtuous', 'Versatile', 'Vulnerable'],
      },
      {
        basic: 'Predictable',
        advanced: 'Cyclical',
        transcription: '/ˈsɪklɪkl/',
        wrong: ['Critical', 'Crucial', 'Cultural', 'Cumulative'],
      },
      {
        basic: 'Set pattern',
        advanced: 'Recurring',
        transcription: '/rɪˈkɜːrɪŋ/',
        wrong: ['Reviewing', 'Revising', 'Rethinking', 'Reassessing'],
      },
      {
        basic: 'No pattern',
        advanced: 'Haphazard',
        transcription: '/ˌhæpˈhæzərd/',
        wrong: ['Helpful', 'Honest', 'Hopeful', 'Humble'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 5. BRIEF
  // ─────────────────────────────────────────
  {
    id: 'brief',
    name: 'Brief',
    words: [
      {
        basic: 'Quick',
        advanced: 'Fleeting',
        transcription: '/ˈfliːtɪŋ/',
        wrong: ['Focusing', 'Following', 'Forming', 'Forcing'],
      },
      {
        basic: 'Short',
        advanced: 'Momentary',
        transcription: '/ˈmoʊmənteri/',
        wrong: ['Moderately', 'Modestly', 'Mostly', 'Mutually'],
      },
      {
        basic: 'Fast',
        advanced: 'Transient',
        transcription: '/ˈtrænziənt/',
        wrong: ['Transparent', 'Trustworthy', 'Thoughtful', 'Tolerant'],
      },
      {
        basic: 'In a flash',
        advanced: 'Instantaneously',
        transcription: '/ˌɪnstənˈteɪniəsli/',
        wrong: ['Independently', 'Individually', 'Informally', 'Initially'],
      },
      {
        basic: 'Blink of an eye',
        advanced: 'Fleetingly',
        transcription: '/ˈfliːtɪŋli/',
        wrong: ['Formally', 'Fortunately', 'Frequently', 'Fundamentally'],
      },
      {
        basic: 'Just a sec',
        advanced: 'Momentarily',
        transcription: '/ˌmoʊmənˈterɪli/',
        wrong: ['Moderately', 'Modestly', 'Mostly', 'Mutually'],
      },
      {
        basic: 'Passing',
        advanced: 'Ephemeral',
        transcription: '/ɪˈfemərəl/',
        wrong: ['Emotional', 'Empirical', 'Ethical', 'Eventual'],
      },
      {
        basic: 'Not long',
        advanced: 'Short-lived',
        transcription: '/ˌʃɔːrtˈlɪvd/',
        wrong: ['Short-term', 'Short-range', 'Short-sighted', 'Short-handed'],
      },
      {
        basic: 'Gone fast',
        advanced: 'Elapsed',
        transcription: '/ɪˈlæpst/',
        wrong: ['Examined', 'Exchanged', 'Executed', 'Expanded'],
      },
      {
        basic: 'Temporary',
        advanced: 'Provisional',
        transcription: '/prəˈvɪʒənl/',
        wrong: ['Productive', 'Proactive', 'Practical', 'Precise'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 6. PERMANENT
  // ─────────────────────────────────────────
  {
    id: 'permanent',
    name: 'Permanent',
    words: [
      {
        basic: 'Forever',
        advanced: 'Permanently',
        transcription: '/ˈpɜːrmənəntli/',
        wrong: ['Previously', 'Primarily', 'Practically', 'Particularly'],
      },
      {
        basic: 'Always',
        advanced: 'Perpetually',
        transcription: '/pərˈpetʃuəli/',
        wrong: ['Previously', 'Primarily', 'Practically', 'Particularly'],
      },
      {
        basic: 'For good',
        advanced: 'Indefinitely',
        transcription: '/ɪnˈdefɪnɪtli/',
        wrong: ['Independently', 'Individually', 'Informally', 'Initially'],
      },
      {
        basic: 'Lasting',
        advanced: 'Enduring',
        transcription: '/ɪnˈdjʊərɪŋ/',
        wrong: ['Enforcing', 'Engaging', 'Enhancing', 'Ensuring'],
      },
      {
        basic: 'Never ending',
        advanced: 'Perpetual',
        transcription: '/pərˈpetʃuəl/',
        wrong: ['Practical', 'Precise', 'Previous', 'Primary'],
      },
      {
        basic: 'Fixed',
        advanced: 'Immutable',
        transcription: '/ɪˈmjuːtəbl/',
        wrong: ['Impractical', 'Imprecise', 'Improper', 'Impulsive'],
      },
      {
        basic: 'Stays the same',
        advanced: 'Constant',
        transcription: '/ˈkɒnstənt/',
        wrong: ['Consistent', 'Confident', 'Cautious', 'Creative'],
      },
      {
        basic: 'Will not change',
        advanced: 'Irreversible',
        transcription: '/ˌɪrɪˈvɜːrsɪbl/',
        wrong: ['Irresponsible', 'Irrelevant', 'Irregular', 'Irrational'],
      },
      {
        basic: 'Long-lasting',
        advanced: 'Durable',
        transcription: '/ˈdjʊərəbl/',
        wrong: ['Decisive', 'Dedicated', 'Diligent', 'Directed'],
      },
      {
        basic: 'Set in stone',
        advanced: 'Non-negotiable',
        transcription: '/ˌnɒn nɪˈɡoʊʃiəbl/',
        wrong: ['Non-optional', 'Non-flexible', 'Non-adjustable', 'Non-changeable'],
      },
    ],
  },
]
