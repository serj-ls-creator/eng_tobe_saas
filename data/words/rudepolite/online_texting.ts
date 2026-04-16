// ============================================================
// ONLINE TEXTING — Rude/casual online vs polite equivalents
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

export const ONLINE_TEXTING: Subcategory[] = [

  // ─────────────────────────────────────────
  // 1. MESSAGING
  // ─────────────────────────────────────────
  {
    id: 'messaging',
    name: 'Messaging',
    words: [
      {
        basic: 'K',
        advanced: 'Understood',
        transcription: '/ˌʌndəˈstʊd/',
        wrong: ['Upgraded', 'Updated', 'Uploaded', 'Urged'],
      },
      {
        basic: 'Lmk',
        advanced: 'Please inform me',
        transcription: '/pliːz ɪnˈfɔːrm miː/',
        wrong: ['Please advise me', 'Please assist me', 'Please attend me', 'Please approve me'],
      },
      {
        basic: 'Hmu',
        advanced: 'Please contact me',
        transcription: '/pliːz ˈkɒntækt miː/',
        wrong: ['Please call me', 'Please reach me', 'Please message me', 'Please text me'],
      },
      {
        basic: 'Brb',
        advanced: 'One moment',
        transcription: '/wʌn ˈmoʊmənt/',
        wrong: ['One second', 'One minute', 'One step', 'One point'],
      },
      {
        basic: 'Ttyl',
        advanced: 'Talk later',
        transcription: '/tɔːk ˈleɪtər/',
        wrong: ['Talk soon', 'Talk now', 'Talk again', 'Talk more'],
      },
      {
        basic: 'Ngl',
        advanced: 'Honestly',
        transcription: '/ˈɒnɪstli/',
        wrong: ['Obviously', 'Openly', 'Officially', 'Ordinarily'],
      },
      {
        basic: 'Imo',
        advanced: 'In my opinion',
        transcription: '/ɪn maɪ əˈpɪnjən/',
        wrong: ['In my view', 'In my mind', 'In my experience', 'In my judgment'],
      },
      {
        basic: 'Tbh',
        advanced: 'To be frank',
        transcription: '/tə biː fræŋk/',
        wrong: ['To be clear', 'To be fair', 'To be direct', 'To be honest'],
      },
      {
        basic: 'Omw',
        advanced: 'On my way',
        transcription: '/ɒn maɪ weɪ/',
        wrong: ['On my mind', 'On my list', 'On my end', 'On my side'],
      },
      {
        basic: 'Np',
        advanced: 'No problem',
        transcription: '/noʊ ˈprɒbləm/',
        wrong: ['No pressure', 'No purpose', 'No process', 'No progress'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 2. REACTIONS
  // ─────────────────────────────────────────
  {
    id: 'reactions',
    name: 'Reactions',
    words: [
      {
        basic: 'Lol',
        advanced: 'That is amusing',
        transcription: '/ðæt ɪz əˈmjuːzɪŋ/',
        wrong: ['That is interesting', 'That is surprising', 'That is impressive', 'That is unexpected'],
      },
      {
        basic: 'Omg',
        advanced: 'How surprising',
        transcription: '/haʊ sərˈpraɪzɪŋ/',
        wrong: ['How interesting', 'How amusing', 'How impressive', 'How unexpected'],
      },
      {
        basic: 'Smh',
        advanced: 'Disappointing',
        transcription: '/ˌdɪsəˈpɔɪntɪŋ/',
        wrong: ['Discouraging', 'Disturbing', 'Distracting', 'Disruptive'],
      },
      {
        basic: 'Oof',
        advanced: 'Unfortunate',
        transcription: '/ʌnˈfɔːrtʃənɪt/',
        wrong: ['Unexpected', 'Unusual', 'Unclear', 'Unfair'],
      },
      {
        basic: 'Yikes',
        advanced: 'Concerning',
        transcription: '/kənˈsɜːrnɪŋ/',
        wrong: ['Confusing', 'Challenging', 'Changing', 'Checking'],
      },
      {
        basic: 'Nope',
        advanced: 'I disagree',
        transcription: '/aɪ ˌdɪsəˈɡriː/',
        wrong: ['I decline', 'I refuse', 'I reject', 'I withdraw'],
      },
      {
        basic: 'Meh',
        advanced: 'Indifferent',
        transcription: '/ɪnˈdɪfrənt/',
        wrong: ['Impulsive', 'Insightful', 'Intuitive', 'Inventive'],
      },
      {
        basic: 'Wow',
        advanced: 'Remarkable',
        transcription: '/rɪˈmɑːrkəbl/',
        wrong: ['Reliable', 'Resilient', 'Rational', 'Relaxed'],
      },
      {
        basic: 'Ugh',
        advanced: 'Frustrating',
        transcription: '/frʌˈstreɪtɪŋ/',
        wrong: ['Fulfilling', 'Fascinating', 'Fearful', 'Focused'],
      },
      {
        basic: 'Haha',
        advanced: 'Quite funny',
        transcription: '/kwaɪt ˈfʌni/',
        wrong: ['Quite clever', 'Quite smart', 'Quite good', 'Quite nice'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 3. REQUESTS
  // ─────────────────────────────────────────
  {
    id: 'requests',
    name: 'Requests',
    words: [
      {
        basic: 'Send it',
        advanced: 'Please forward',
        transcription: '/pliːz ˈfɔːrwərd/',
        wrong: ['Please follow', 'Please finish', 'Please find', 'Please fix'],
      },
      {
        basic: 'Check this',
        advanced: 'Please review',
        transcription: '/pliːz rɪˈvjuː/',
        wrong: ['Please respond', 'Please revise', 'Please confirm', 'Please update'],
      },
      {
        basic: 'Reply asap',
        advanced: 'At your earliest',
        transcription: '/æt jɔːr ˈɜːrliɪst/',
        wrong: ['At your convenience', 'At your discretion', 'At your request', 'At your suggestion'],
      },
      {
        basic: 'Need this',
        advanced: 'Kindly provide',
        transcription: '/ˈkaɪndli prəˈvaɪd/',
        wrong: ['Kindly confirm', 'Kindly respond', 'Kindly review', 'Kindly update'],
      },
      {
        basic: 'Fix this',
        advanced: 'Please address',
        transcription: '/pliːz əˈdres/',
        wrong: ['Please adjust', 'Please achieve', 'Please acquire', 'Please agree'],
      },
      {
        basic: 'Ping me',
        advanced: 'Please notify me',
        transcription: '/pliːz ˈnoʊtɪfaɪ miː/',
        wrong: ['Please advise me', 'Please assist me', 'Please attend me', 'Please approve me'],
      },
      {
        basic: 'Remind me',
        advanced: 'Please follow up',
        transcription: '/pliːz ˈfɒloʊ ʌp/',
        wrong: ['Please follow through', 'Please follow along', 'Please follow back', 'Please follow out'],
      },
      {
        basic: 'Share it',
        advanced: 'Please distribute',
        transcription: '/pliːz dɪˈstrɪbjuːt/',
        wrong: ['Please discuss', 'Please display', 'Please divide', 'Please draft'],
      },
      {
        basic: 'Confirm',
        advanced: 'Please verify',
        transcription: '/pliːz ˈverɪfaɪ/',
        wrong: ['Please validate', 'Please value', 'Please view', 'Please visit'],
      },
      {
        basic: 'Update me',
        advanced: 'Please advise',
        transcription: '/pliːz ədˈvaɪz/',
        wrong: ['Please assist', 'Please attend', 'Please approve', 'Please arrange'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 4. TONE
  // ─────────────────────────────────────────
  {
    id: 'tone',
    name: 'Tone',
    words: [
      {
        basic: 'Whatever',
        advanced: 'Noted',
        transcription: '/ˈnoʊtɪd/',
        wrong: ['Needed', 'Named', 'Narrowed', 'Navigated'],
      },
      {
        basic: 'Fine',
        advanced: 'Acknowledged',
        transcription: '/əkˈnɒlɪdʒd/',
        wrong: ['Adapted', 'Admired', 'Admitted', 'Adopted'],
      },
      {
        basic: 'Sure',
        advanced: 'Certainly',
        transcription: '/ˈsɜːrtnli/',
        wrong: ['Clearly', 'Closely', 'Correctly', 'Carefully'],
      },
      {
        basic: 'Yep',
        advanced: 'Confirmed',
        transcription: '/kənˈfɜːrmd/',
        wrong: ['Connected', 'Considered', 'Contained', 'Converted'],
      },
      {
        basic: 'Nah',
        advanced: 'Declined',
        transcription: '/dɪˈklaɪnd/',
        wrong: ['Defended', 'Defined', 'Delayed', 'Delivered'],
      },
      {
        basic: 'Dunno',
        advanced: 'Uncertain',
        transcription: '/ʌnˈsɜːrtn/',
        wrong: ['Unclear', 'Unfair', 'Unusual', 'Unexpected'],
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
        basic: 'Gonna',
        advanced: 'Going to',
        transcription: '/ˈɡoʊɪŋ tə/',
        wrong: ['Getting to', 'Giving to', 'Growing to', 'Guiding to'],
      },
      {
        basic: 'Wanna',
        advanced: 'Would like to',
        transcription: '/wʊd laɪk tə/',
        wrong: ['Would need to', 'Would have to', 'Would try to', 'Would plan to'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 5. DISAGREEING
  // ─────────────────────────────────────────
  {
    id: 'disagreeing',
    name: 'Disagreeing',
    words: [
      {
        basic: 'No',
        advanced: 'I disagree',
        transcription: '/aɪ ˌdɪsəˈɡriː/',
        wrong: ['I decline', 'I refuse', 'I reject', 'I withdraw'],
      },
      {
        basic: 'Wrong',
        advanced: 'Incorrect',
        transcription: '/ɪnˈkɒrekt/',
        wrong: ['Incomplete', 'Inconsistent', 'Ineffective', 'Inaccurate'],
      },
      {
        basic: 'Nope',
        advanced: 'Not quite',
        transcription: '/nɒt kwaɪt/',
        wrong: ['Not ready', 'Not ideal', 'Not clear', 'Not possible'],
      },
      {
        basic: 'That is dumb',
        advanced: 'I have concerns',
        transcription: '/aɪ hæv kənˈsɜːrnz/',
        wrong: ['I have doubts', 'I have issues', 'I have questions', 'I have ideas'],
      },
      {
        basic: 'Not happening',
        advanced: 'Not feasible',
        transcription: '/nɒt ˈfiːzɪbl/',
        wrong: ['Not possible', 'Not ready', 'Not ideal', 'Not clear'],
      },
      {
        basic: 'Disagree',
        advanced: 'I see it differently',
        transcription: '/aɪ siː ɪt ˈdɪfrəntli/',
        wrong: ['I see it clearly', 'I see it broadly', 'I see it fully', 'I see it simply'],
      },
      {
        basic: 'Bad idea',
        advanced: 'Worth reconsidering',
        transcription: '/wɜːrθ ˌriːkənˈsɪdərɪŋ/',
        wrong: ['Worth reviewing', 'Worth revising', 'Worth rethinking', 'Worth reassessing'],
      },
      {
        basic: 'Pointless',
        advanced: 'Lacks merit',
        transcription: '/læks ˈmerɪt/',
        wrong: ['Lacks detail', 'Lacks focus', 'Lacks clarity', 'Lacks depth'],
      },
      {
        basic: 'Stupid',
        advanced: 'Ill-advised',
        transcription: '/ˌɪl ədˈvaɪzd/',
        wrong: ['Ill-timed', 'Ill-suited', 'Ill-defined', 'Ill-prepared'],
      },
      {
        basic: 'No way',
        advanced: 'I respectfully disagree',
        transcription: '/aɪ rɪˈspektfəli ˌdɪsəˈɡriː/',
        wrong: ['I respectfully decline', 'I respectfully refuse', 'I respectfully reject', 'I respectfully withdraw'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 6. SIGNING OFF
  // ─────────────────────────────────────────
  {
    id: 'signing-off',
    name: 'Signing Off',
    words: [
      {
        basic: 'Bye',
        advanced: 'Best regards',
        transcription: '/best rɪˈɡɑːrdz/',
        wrong: ['Best wishes', 'Best efforts', 'Best results', 'Best outcomes'],
      },
      {
        basic: 'Later',
        advanced: 'Kind regards',
        transcription: '/kaɪnd rɪˈɡɑːrdz/',
        wrong: ['Kind wishes', 'Kind efforts', 'Kind results', 'Kind outcomes'],
      },
      {
        basic: 'Cya',
        advanced: 'Warm regards',
        transcription: '/wɔːrm rɪˈɡɑːrdz/',
        wrong: ['Warm wishes', 'Warm efforts', 'Warm results', 'Warm outcomes'],
      },
      {
        basic: 'Peace',
        advanced: 'Sincerely',
        transcription: '/sɪnˈsɪərli/',
        wrong: ['Seriously', 'Separately', 'Specifically', 'Steadily'],
      },
      {
        basic: 'Gotta go',
        advanced: 'Talk soon',
        transcription: '/tɔːk suːn/',
        wrong: ['Talk later', 'Talk again', 'Talk more', 'Talk now'],
      },
      {
        basic: 'Ttyl',
        advanced: 'Until next time',
        transcription: '/ʌnˈtɪl nekst taɪm/',
        wrong: ['Until next week', 'Until next month', 'Until next year', 'Until next meeting'],
      },
      {
        basic: 'Laters',
        advanced: 'Yours faithfully',
        transcription: '/jɔːrz ˈfeɪθfəli/',
        wrong: ['Yours truly', 'Yours sincerely', 'Yours respectfully', 'Yours gratefully'],
      },
      {
        basic: 'Take care',
        advanced: 'With best wishes',
        transcription: '/wɪð best ˈwɪʃɪz/',
        wrong: ['With best regards', 'With best efforts', 'With best results', 'With best outcomes'],
      },
      {
        basic: 'Deuces',
        advanced: 'Respectfully',
        transcription: '/rɪˈspektfəli/',
        wrong: ['Reliably', 'Remarkably', 'Repeatedly', 'Regrettably'],
      },
      {
        basic: 'Adios',
        advanced: 'Farewell',
        transcription: '/ˌfeərˈwel/',
        wrong: ['Forward', 'Formal', 'Focused', 'Fulfilled'],
      },
    ],
  },
]
