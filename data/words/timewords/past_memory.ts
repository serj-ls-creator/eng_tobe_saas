// ============================================================
// PAST & MEMORY — Simple vs precise time words (past)
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

export const PAST_MEMORY: Subcategory[] = [

  // ─────────────────────────────────────────
  // 1. RECENTLY
  // ─────────────────────────────────────────
  {
    id: 'recently',
    name: 'Recently',
    words: [
      {
        basic: 'Just now',
        advanced: 'Moments ago',
        transcription: '/ˈmoʊmənts əˈɡoʊ/',
        wrong: ['Minutes ago', 'Hours ago', 'Days ago', 'Weeks ago'],
      },
      {
        basic: 'Recently',
        advanced: 'Lately',
        transcription: '/ˈleɪtli/',
        wrong: ['Largely', 'Lastly', 'Lightly', 'Loosely'],
      },
      {
        basic: 'Not long ago',
        advanced: 'In recent times',
        transcription: '/ɪn ˈriːsnt taɪmz/',
        wrong: ['In recent days', 'In recent weeks', 'In recent months', 'In recent years'],
      },
      {
        basic: 'A while back',
        advanced: 'Some time ago',
        transcription: '/sʌm taɪm əˈɡoʊ/',
        wrong: ['Some days ago', 'Some weeks ago', 'Some months ago', 'Some years ago'],
      },
      {
        basic: 'The other day',
        advanced: 'Previously',
        transcription: '/ˈpriːviəsli/',
        wrong: ['Primarily', 'Practically', 'Particularly', 'Precisely'],
      },
      {
        basic: 'Yesterday',
        advanced: 'The prior day',
        transcription: '/ðə ˈpraɪər deɪ/',
        wrong: ['The next day', 'The same day', 'The last day', 'The first day'],
      },
      {
        basic: 'Last week',
        advanced: 'The preceding week',
        transcription: '/ðə prɪˈsiːdɪŋ wiːk/',
        wrong: ['The following week', 'The current week', 'The same week', 'The next week'],
      },
      {
        basic: 'Just before',
        advanced: 'Immediately prior',
        transcription: '/ɪˈmiːdiətli ˈpraɪər/',
        wrong: ['Immediately after', 'Immediately during', 'Immediately following', 'Immediately preceding'],
      },
      {
        basic: 'Newly',
        advanced: 'Of late',
        transcription: '/əv leɪt/',
        wrong: ['Of note', 'Of course', 'Of record', 'Of interest'],
      },
      {
        basic: 'Fresh',
        advanced: 'Newly',
        transcription: '/ˈnjuːli/',
        wrong: ['Nearly', 'Neatly', 'Nicely', 'Narrowly'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 2. LONG AGO
  // ─────────────────────────────────────────
  {
    id: 'long-ago',
    name: 'Long Ago',
    words: [
      {
        basic: 'Long ago',
        advanced: 'Formerly',
        transcription: '/ˈfɔːrmərli/',
        wrong: ['Fortunately', 'Frequently', 'Fundamentally', 'Formally'],
      },
      {
        basic: 'Back then',
        advanced: 'In those days',
        transcription: '/ɪn ðoʊz deɪz/',
        wrong: ['In these days', 'In our days', 'In past days', 'In old days'],
      },
      {
        basic: 'Ages ago',
        advanced: 'Historically',
        transcription: '/hɪˈstɒrɪkli/',
        wrong: ['Honestly', 'Hopefully', 'Helpfully', 'Harmlessly'],
      },
      {
        basic: 'In the past',
        advanced: 'In bygone times',
        transcription: '/ɪn ˈbaɪɡɒn taɪmz/',
        wrong: ['In recent times', 'In modern times', 'In current times', 'In future times'],
      },
      {
        basic: 'Old days',
        advanced: 'Antiquity',
        transcription: '/ænˈtɪkwɪti/',
        wrong: ['Activity', 'Ability', 'Ambiguity', 'Authority'],
      },
      {
        basic: 'Way back',
        advanced: 'In earlier times',
        transcription: '/ɪn ˈɜːrliər taɪmz/',
        wrong: ['In later times', 'In recent times', 'In modern times', 'In current times'],
      },
      {
        basic: 'Once upon a time',
        advanced: 'In a prior era',
        transcription: '/ɪn ə ˈpraɪər ˈɪərə/',
        wrong: ['In a later era', 'In a recent era', 'In a modern era', 'In a current era'],
      },
      {
        basic: 'Ancient times',
        advanced: 'In antiquity',
        transcription: '/ɪn ænˈtɪkwɪti/',
        wrong: ['In activity', 'In ability', 'In ambiguity', 'In authority'],
      },
      {
        basic: 'Decades ago',
        advanced: 'Several decades prior',
        transcription: '/ˈsevərəl ˈdekeɪdz ˈpraɪər/',
        wrong: ['Several decades later', 'Several decades after', 'Several decades following', 'Several decades hence'],
      },
      {
        basic: 'Centuries ago',
        advanced: 'In past centuries',
        transcription: '/ɪn pɑːst ˈsentʃəriz/',
        wrong: ['In recent centuries', 'In modern centuries', 'In current centuries', 'In future centuries'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 3. SEQUENCE
  // ─────────────────────────────────────────
  {
    id: 'sequence',
    name: 'Sequence',
    words: [
      {
        basic: 'First',
        advanced: 'Initially',
        transcription: '/ɪˈnɪʃəli/',
        wrong: ['Individually', 'Informally', 'Internally', 'Intentionally'],
      },
      {
        basic: 'Then',
        advanced: 'Subsequently',
        transcription: '/ˈsʌbsɪkwəntli/',
        wrong: ['Successfully', 'Sufficiently', 'Suitably', 'Systematically'],
      },
      {
        basic: 'After',
        advanced: 'Following',
        transcription: '/ˈfɒloʊɪŋ/',
        wrong: ['Forming', 'Forcing', 'Focusing', 'Founding'],
      },
      {
        basic: 'Before',
        advanced: 'Previously',
        transcription: '/ˈpriːviəsli/',
        wrong: ['Primarily', 'Practically', 'Particularly', 'Precisely'],
      },
      {
        basic: 'Next',
        advanced: 'Thereafter',
        transcription: '/ˌðeərˈæftər/',
        wrong: ['Therefore', 'Thereby', 'Therein', 'Thereto'],
      },
      {
        basic: 'Last',
        advanced: 'Finally',
        transcription: '/ˈfaɪnəli/',
        wrong: ['Formally', 'Fortunately', 'Frequently', 'Fundamentally'],
      },
      {
        basic: 'At the start',
        advanced: 'At the outset',
        transcription: '/æt ðɪ ˈaʊtset/',
        wrong: ['At the end', 'At the close', 'At the finish', 'At the conclusion'],
      },
      {
        basic: 'In the middle',
        advanced: 'In the interim',
        transcription: '/ɪn ðɪ ˈɪntərɪm/',
        wrong: ['In the end', 'In the close', 'In the finish', 'In the conclusion'],
      },
      {
        basic: 'At the end',
        advanced: 'Ultimately',
        transcription: '/ˈʌltɪmətli/',
        wrong: ['Unexpectedly', 'Unnecessarily', 'Unusually', 'Unfairly'],
      },
      {
        basic: 'Step by step',
        advanced: 'Progressively',
        transcription: '/prəˈɡresɪvli/',
        wrong: ['Previously', 'Primarily', 'Practically', 'Particularly'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 4. DURATION
  // ─────────────────────────────────────────
  {
    id: 'duration',
    name: 'Duration',
    words: [
      {
        basic: 'For a long time',
        advanced: 'For an extended period',
        transcription: '/fər ən ɪkˈstendɪd ˈpɪəriəd/',
        wrong: ['For a short period', 'For a brief period', 'For a limited period', 'For a fixed period'],
      },
      {
        basic: 'For a while',
        advanced: 'For some time',
        transcription: '/fər sʌm taɪm/',
        wrong: ['For some days', 'For some weeks', 'For some months', 'For some years'],
      },
      {
        basic: 'Briefly',
        advanced: 'Momentarily',
        transcription: '/ˌmoʊmənˈterɪli/',
        wrong: ['Moderately', 'Modestly', 'Mostly', 'Mutually'],
      },
      {
        basic: 'All day',
        advanced: 'Throughout the day',
        transcription: '/θruːˈaʊt ðə deɪ/',
        wrong: ['Throughout the week', 'Throughout the month', 'Throughout the year', 'Throughout the period'],
      },
      {
        basic: 'All year',
        advanced: 'Throughout the year',
        transcription: '/θruːˈaʊt ðə jɪər/',
        wrong: ['Throughout the week', 'Throughout the month', 'Throughout the day', 'Throughout the period'],
      },
      {
        basic: 'Short time',
        advanced: 'Brief period',
        transcription: '/briːf ˈpɪəriəd/',
        wrong: ['Brief review', 'Brief update', 'Brief discussion', 'Brief overview'],
      },
      {
        basic: 'Long time',
        advanced: 'Extended period',
        transcription: '/ɪkˈstendɪd ˈpɪəriəd/',
        wrong: ['Extended review', 'Extended update', 'Extended discussion', 'Extended overview'],
      },
      {
        basic: 'Forever',
        advanced: 'Indefinitely',
        transcription: '/ɪnˈdefɪnɪtli/',
        wrong: ['Independently', 'Individually', 'Informally', 'Initially'],
      },
      {
        basic: 'Quickly',
        advanced: 'Promptly',
        transcription: '/ˈprɒmptli/',
        wrong: ['Previously', 'Primarily', 'Practically', 'Particularly'],
      },
      {
        basic: 'Slowly',
        advanced: 'Gradually',
        transcription: '/ˈɡrædʒuəli/',
        wrong: ['Generally', 'Genuinely', 'Globally', 'Greatly'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 5. FREQUENCY
  // ─────────────────────────────────────────
  {
    id: 'frequency',
    name: 'Frequency',
    words: [
      {
        basic: 'Always',
        advanced: 'Consistently',
        transcription: '/kənˈsɪstəntli/',
        wrong: ['Considerably', 'Continuously', 'Correspondingly', 'Critically'],
      },
      {
        basic: 'Often',
        advanced: 'Frequently',
        transcription: '/ˈfriːkwəntli/',
        wrong: ['Formally', 'Fortunately', 'Fundamentally', 'Fully'],
      },
      {
        basic: 'Sometimes',
        advanced: 'Occasionally',
        transcription: '/əˈkeɪʒənəli/',
        wrong: ['Obviously', 'Officially', 'Openly', 'Ordinarily'],
      },
      {
        basic: 'Rarely',
        advanced: 'Seldom',
        transcription: '/ˈseldəm/',
        wrong: ['Separately', 'Seriously', 'Significantly', 'Simply'],
      },
      {
        basic: 'Never',
        advanced: 'At no point',
        transcription: '/æt noʊ pɔɪnt/',
        wrong: ['At no time', 'At no stage', 'At no level', 'At no rate'],
      },
      {
        basic: 'Every day',
        advanced: 'Daily',
        transcription: '/ˈdeɪli/',
        wrong: ['Deeply', 'Directly', 'Distinctly', 'Duly'],
      },
      {
        basic: 'Every week',
        advanced: 'Weekly',
        transcription: '/ˈwiːkli/',
        wrong: ['Widely', 'Wisely', 'Wholly', 'Warmly'],
      },
      {
        basic: 'Every month',
        advanced: 'Monthly',
        transcription: '/ˈmʌnθli/',
        wrong: ['Mostly', 'Mutually', 'Moderately', 'Modestly'],
      },
      {
        basic: 'Again and again',
        advanced: 'Repeatedly',
        transcription: '/rɪˈpiːtɪdli/',
        wrong: ['Reliably', 'Remarkably', 'Respectfully', 'Regrettably'],
      },
      {
        basic: 'Now and then',
        advanced: 'Periodically',
        transcription: '/ˌpɪəriˈɒdɪkli/',
        wrong: ['Previously', 'Primarily', 'Practically', 'Particularly'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 6. MEMORY
  // ─────────────────────────────────────────
  {
    id: 'memory',
    name: 'Memory',
    words: [
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
        wrong: ['Overcome', 'Override', 'Overrate', 'Overuse'],
      },
      {
        basic: 'Think back',
        advanced: 'Reflect',
        transcription: '/rɪˈflekt/',
        wrong: ['Refuse', 'Release', 'Rely', 'Reveal'],
      },
      {
        basic: 'Used to',
        advanced: 'Historically',
        transcription: '/hɪˈstɒrɪkli/',
        wrong: ['Honestly', 'Hopefully', 'Helpfully', 'Harmlessly'],
      },
      {
        basic: 'Look back',
        advanced: 'Retrospectively',
        transcription: '/ˌretrəˈspektɪvli/',
        wrong: ['Respectively', 'Reliably', 'Remarkably', 'Repeatedly'],
      },
      {
        basic: 'Remind',
        advanced: 'Recollect',
        transcription: '/ˌrekəˈlekt/',
        wrong: ['Reconsider', 'Reassess', 'Reorganize', 'Redirect'],
      },
      {
        basic: 'Bring back',
        advanced: 'Evoke',
        transcription: '/ɪˈvoʊk/',
        wrong: ['Evolve', 'Examine', 'Exchange', 'Execute'],
      },
      {
        basic: 'Keep in mind',
        advanced: 'Bear in mind',
        transcription: '/beər ɪn maɪnd/',
        wrong: ['Bear the cost', 'Bear the load', 'Bear the weight', 'Bear with me'],
      },
      {
        basic: 'Flashback',
        advanced: 'Recollection',
        transcription: '/ˌrekəˈlekʃən/',
        wrong: ['Reconsideration', 'Reassessment', 'Reorganization', 'Redirection'],
      },
      {
        basic: 'Nostalgia',
        advanced: 'Reminiscence',
        transcription: '/ˌremɪˈnɪsns/',
        wrong: ['Resilience', 'Resistance', 'Relevance', 'Reliance'],
      },
    ],
  },
]
