// ============================================================
// EVERYDAY CONVERSATION — Informal/slang vs formal equivalents
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

export const EVERYDAY_CONVERSATION: Subcategory[] = [

  // ─────────────────────────────────────────
  // 1. GREETINGS
  // ─────────────────────────────────────────
  {
    id: 'greetings',
    name: 'Greetings',
    words: [
      {
        basic: 'Hey',
        advanced: 'Hello',
        transcription: '/həˈloʊ/',
        wrong: ['Help', 'Hold', 'Hope', 'Hear'],
      },
      {
        basic: 'Sup',
        advanced: 'How are you',
        transcription: '/haʊ ɑːr juː/',
        wrong: ['Who are you', 'Where are you', 'Why are you', 'What are you'],
      },
      {
        basic: 'Yo',
        advanced: 'Good day',
        transcription: '/ɡʊd deɪ/',
        wrong: ['Good luck', 'Good work', 'Good job', 'Good call'],
      },
      {
        basic: 'Howdy',
        advanced: 'Good afternoon',
        transcription: '/ɡʊd ˌɑːftərˈnuːn/',
        wrong: ['Good morning', 'Good evening', 'Good night', 'Good day'],
      },
      {
        basic: 'Hiya',
        advanced: 'Pleased to meet you',
        transcription: '/pliːzd tə miːt juː/',
        wrong: ['Happy to meet you', 'Glad to meet you', 'Nice to meet you', 'Great to meet you'],
      },
      {
        basic: 'What is up',
        advanced: 'How do you do',
        transcription: '/haʊ duː juː duː/',
        wrong: ['How are things', 'How goes it', 'How is life', 'How have you been'],
      },
      {
        basic: 'Alright',
        advanced: 'How are you doing',
        transcription: '/haʊ ɑːr juː ˈduːɪŋ/',
        wrong: ['How are you feeling', 'How are you going', 'How are you managing', 'How are you coping'],
      },
      {
        basic: 'Morning',
        advanced: 'Good morning',
        transcription: '/ɡʊd ˈmɔːrnɪŋ/',
        wrong: ['Good evening', 'Good afternoon', 'Good night', 'Good luck'],
      },
      {
        basic: 'Evening',
        advanced: 'Good evening',
        transcription: '/ɡʊd ˈiːvnɪŋ/',
        wrong: ['Good morning', 'Good afternoon', 'Good night', 'Good day'],
      },
      {
        basic: 'Night',
        advanced: 'Good night',
        transcription: '/ɡʊd naɪt/',
        wrong: ['Good morning', 'Good afternoon', 'Good evening', 'Good day'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 2. FAREWELLS
  // ─────────────────────────────────────────
  {
    id: 'farewells',
    name: 'Farewells',
    words: [
      {
        basic: 'Bye',
        advanced: 'Farewell',
        transcription: '/ˌfeərˈwel/',
        wrong: ['Forward', 'Formal', 'Focused', 'Fulfilled'],
      },
      {
        basic: 'Later',
        advanced: 'Until next time',
        transcription: '/ʌnˈtɪl nekst taɪm/',
        wrong: ['Until next week', 'Until next month', 'Until next year', 'Until next meeting'],
      },
      {
        basic: 'See ya',
        advanced: 'Goodbye',
        transcription: '/ˌɡʊdˈbaɪ/',
        wrong: ['Goodnight', 'Goodwill', 'Goodness', 'Goodness'],
      },
      {
        basic: 'Catch you later',
        advanced: 'Talk soon',
        transcription: '/tɔːk suːn/',
        wrong: ['Talk later', 'Talk again', 'Talk more', 'Talk now'],
      },
      {
        basic: 'Peace out',
        advanced: 'Take care',
        transcription: '/teɪk keər/',
        wrong: ['Take note', 'Take action', 'Take charge', 'Take control'],
      },
      {
        basic: 'Gotta go',
        advanced: 'I must be off',
        transcription: '/aɪ mʌst biː ɒf/',
        wrong: ['I must be done', 'I must be ready', 'I must be free', 'I must be going'],
      },
      {
        basic: 'Laters',
        advanced: 'Until we meet again',
        transcription: '/ʌnˈtɪl wiː miːt əˈɡen/',
        wrong: ['Until we talk again', 'Until we see again', 'Until we speak again', 'Until we chat again'],
      },
      {
        basic: 'Adios',
        advanced: 'Goodbye for now',
        transcription: '/ˌɡʊdˈbaɪ fər naʊ/',
        wrong: ['Goodbye for good', 'Goodbye for real', 'Goodbye for sure', 'Goodbye for ever'],
      },
      {
        basic: 'Deuces',
        advanced: 'I bid you farewell',
        transcription: '/aɪ bɪd juː ˌfeərˈwel/',
        wrong: ['I bid you goodbye', 'I bid you goodnight', 'I bid you goodwill', 'I bid you goodness'],
      },
      {
        basic: 'Toodles',
        advanced: 'Cheerio',
        transcription: '/ˌtʃɪəriˈoʊ/',
        wrong: ['Cheerful', 'Cheerless', 'Cheering', 'Cheered'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 3. REACTIONS
  // ─────────────────────────────────────────
  {
    id: 'reactions',
    name: 'Reactions',
    words: [
      {
        basic: 'Wow',
        advanced: 'Remarkable',
        transcription: '/rɪˈmɑːrkəbl/',
        wrong: ['Reliable', 'Resilient', 'Rational', 'Relaxed'],
      },
      {
        basic: 'No way',
        advanced: 'Unbelievable',
        transcription: '/ˌʌnbɪˈliːvəbl/',
        wrong: ['Unacceptable', 'Unavoidable', 'Unachievable', 'Unapproachable'],
      },
      {
        basic: 'Cool',
        advanced: 'Impressive',
        transcription: '/ɪmˈpresɪv/',
        wrong: ['Impulsive', 'Insightful', 'Intuitive', 'Inventive'],
      },
      {
        basic: 'Awesome',
        advanced: 'Exceptional',
        transcription: '/ɪkˈsepʃənl/',
        wrong: ['Effective', 'Efficient', 'Ethical', 'Extreme'],
      },
      {
        basic: 'Gross',
        advanced: 'Unpleasant',
        transcription: '/ʌnˈplezənt/',
        wrong: ['Unusual', 'Unclear', 'Unfair', 'Unexpected'],
      },
      {
        basic: 'Lame',
        advanced: 'Disappointing',
        transcription: '/ˌdɪsəˈpɔɪntɪŋ/',
        wrong: ['Discouraging', 'Disturbing', 'Distracting', 'Disruptive'],
      },
      {
        basic: 'Sick',
        advanced: 'Outstanding',
        transcription: '/ˌaʊtˈstændɪŋ/',
        wrong: ['Overrated', 'Overused', 'Overdone', 'Overruled'],
      },
      {
        basic: 'Meh',
        advanced: 'Mediocre',
        transcription: '/ˌmiːdiˈoʊkər/',
        wrong: ['Mindful', 'Modest', 'Motivated', 'Meaningful'],
      },
      {
        basic: 'Yikes',
        advanced: 'Alarming',
        transcription: '/əˈlɑːrmɪŋ/',
        wrong: ['Adapted', 'Admired', 'Admitted', 'Adopted'],
      },
      {
        basic: 'Ugh',
        advanced: 'Frustrating',
        transcription: '/frʌˈstreɪtɪŋ/',
        wrong: ['Fulfilling', 'Fascinating', 'Fearful', 'Focused'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 4. AGREEMENT
  // ─────────────────────────────────────────
  {
    id: 'agreement',
    name: 'Agreement',
    words: [
      {
        basic: 'Yeah',
        advanced: 'Certainly',
        transcription: '/ˈsɜːrtnli/',
        wrong: ['Clearly', 'Closely', 'Correctly', 'Carefully'],
      },
      {
        basic: 'Yep',
        advanced: 'Indeed',
        transcription: '/ɪnˈdiːd/',
        wrong: ['Instead', 'Inward', 'Inward', 'Inward'],
      },
      {
        basic: 'Totally',
        advanced: 'Absolutely',
        transcription: '/ˈæbsəluːtli/',
        wrong: ['Actually', 'Apparently', 'Approximately', 'Accordingly'],
      },
      {
        basic: 'For sure',
        advanced: 'Without doubt',
        transcription: '/wɪˈðaʊt daʊt/',
        wrong: ['Without delay', 'Without issue', 'Without change', 'Without error'],
      },
      {
        basic: 'Exactly',
        advanced: 'Precisely',
        transcription: '/prɪˈsaɪsli/',
        wrong: ['Previously', 'Primarily', 'Practically', 'Particularly'],
      },
      {
        basic: 'Right',
        advanced: 'Correct',
        transcription: '/kəˈrekt/',
        wrong: ['Clear', 'Certain', 'Confirmed', 'Complete'],
      },
      {
        basic: 'True',
        advanced: 'Accurate',
        transcription: '/ˈækjərɪt/',
        wrong: ['Active', 'Actual', 'Adaptive', 'Adequate'],
      },
      {
        basic: 'Of course',
        advanced: 'Naturally',
        transcription: '/ˈnætʃərəli/',
        wrong: ['Normally', 'Notably', 'Necessarily', 'Narrowly'],
      },
      {
        basic: 'No doubt',
        advanced: 'Undoubtedly',
        transcription: '/ʌnˈdaʊtɪdli/',
        wrong: ['Unexpectedly', 'Unnecessarily', 'Unusually', 'Unfairly'],
      },
      {
        basic: 'Agreed',
        advanced: 'Concurred',
        transcription: '/kənˈkɜːrd/',
        wrong: ['Confirmed', 'Connected', 'Considered', 'Contained'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 5. REFUSAL
  // ─────────────────────────────────────────
  {
    id: 'refusal',
    name: 'Refusal',
    words: [
      {
        basic: 'Nope',
        advanced: 'I decline',
        transcription: '/aɪ dɪˈklaɪn/',
        wrong: ['I defend', 'I define', 'I delay', 'I deliver'],
      },
      {
        basic: 'No way',
        advanced: 'I am unable',
        transcription: '/aɪ æm ʌnˈeɪbl/',
        wrong: ['I am unwilling', 'I am unready', 'I am unsure', 'I am unfit'],
      },
      {
        basic: 'Not happening',
        advanced: 'Out of the question',
        transcription: '/aʊt əv ðə ˈkwestʃən/',
        wrong: ['Out of the way', 'Out of the loop', 'Out of the picture', 'Out of the running'],
      },
      {
        basic: 'Pass',
        advanced: 'I must decline',
        transcription: '/aɪ mʌst dɪˈklaɪn/',
        wrong: ['I must refuse', 'I must reject', 'I must cancel', 'I must withdraw'],
      },
      {
        basic: 'Not interested',
        advanced: 'I respectfully decline',
        transcription: '/aɪ rɪˈspektfəli dɪˈklaɪn/',
        wrong: ['I respectfully refuse', 'I respectfully reject', 'I respectfully cancel', 'I respectfully withdraw'],
      },
      {
        basic: 'Can not',
        advanced: 'Unfortunately unable',
        transcription: '/ʌnˈfɔːrtʃənətli ʌnˈeɪbl/',
        wrong: ['Unfortunately unwilling', 'Unfortunately unready', 'Unfortunately unsure', 'Unfortunately unfit'],
      },
      {
        basic: 'Not now',
        advanced: 'Perhaps another time',
        transcription: '/pərˈhæps əˈnʌðər taɪm/',
        wrong: ['Perhaps another day', 'Perhaps another way', 'Perhaps another place', 'Perhaps another option'],
      },
      {
        basic: 'Forget it',
        advanced: 'I am afraid not',
        transcription: '/aɪ æm əˈfreɪd nɒt/',
        wrong: ['I am not sure', 'I am not ready', 'I am not able', 'I am not free'],
      },
      {
        basic: 'No thanks',
        advanced: 'I appreciate the offer',
        transcription: '/aɪ əˈpriːʃieɪt ðɪ ˈɒfər/',
        wrong: ['I appreciate the help', 'I appreciate the time', 'I appreciate the effort', 'I appreciate the thought'],
      },
      {
        basic: 'Whatever',
        advanced: 'I would rather not',
        transcription: '/aɪ wʊd ˈrɑːðər nɒt/',
        wrong: ['I would rather wait', 'I would rather skip', 'I would rather avoid', 'I would rather pass'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 6. SMALL TALK
  // ─────────────────────────────────────────
  {
    id: 'small-talk',
    name: 'Small Talk',
    words: [
      {
        basic: 'Wanna',
        advanced: 'Would like to',
        transcription: '/wʊd laɪk tə/',
        wrong: ['Would need to', 'Would have to', 'Would try to', 'Would plan to'],
      },
      {
        basic: 'Gonna',
        advanced: 'Going to',
        transcription: '/ˈɡoʊɪŋ tə/',
        wrong: ['Getting to', 'Giving to', 'Growing to', 'Guiding to'],
      },
      {
        basic: 'Kinda',
        advanced: 'Somewhat',
        transcription: '/ˈsʌmwɒt/',
        wrong: ['Somehow', 'Sometimes', 'Somewhere', 'Something'],
      },
      {
        basic: 'Sorta',
        advanced: 'Partially',
        transcription: '/ˈpɑːrʃəli/',
        wrong: ['Practically', 'Precisely', 'Previously', 'Primarily'],
      },
      {
        basic: 'Dunno',
        advanced: 'I am not certain',
        transcription: '/aɪ æm nɒt ˈsɜːrtn/',
        wrong: ['I am not sure', 'I am not ready', 'I am not able', 'I am not free'],
      },
      {
        basic: 'Chill',
        advanced: 'Relax',
        transcription: '/rɪˈlæks/',
        wrong: ['Reflect', 'Refuse', 'Release', 'Rely'],
      },
      {
        basic: 'Hang out',
        advanced: 'Spend time',
        transcription: '/spend taɪm/',
        wrong: ['Spend money', 'Spend effort', 'Spend energy', 'Spend resources'],
      },
      {
        basic: 'Catch up',
        advanced: 'Reconnect',
        transcription: '/ˌriːkəˈnekt/',
        wrong: ['Reconsider', 'Reassess', 'Reorganize', 'Redirect'],
      },
      {
        basic: 'No biggie',
        advanced: 'Not a concern',
        transcription: '/nɒt ə kənˈsɜːrn/',
        wrong: ['Not a problem', 'Not an issue', 'Not a matter', 'Not a worry'],
      },
      {
        basic: 'My bad',
        advanced: 'I apologize',
        transcription: '/aɪ əˈpɒlədʒaɪz/',
        wrong: ['I accept', 'I agree', 'I admit', 'I advise'],
      },
    ],
  },
]
