// ============================================================
// WITH STRANGERS — Rude/casual vs polite equivalents
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

export const WITH_STRANGERS: Subcategory[] = [

  // ─────────────────────────────────────────
  // 1. GREETINGS
  // ─────────────────────────────────────────
  {
    id: 'greetings',
    name: 'Greetings',
    words: [
      {
        basic: 'Hey',
        advanced: 'Excuse me',
        transcription: '/ɪkˈskjuːz miː/',
        wrong: ['Pardon me', 'Allow me', 'Forgive me', 'Permit me'],
      },
      {
        basic: 'Yo',
        advanced: 'Good day',
        transcription: '/ɡʊd deɪ/',
        wrong: ['Good luck', 'Good work', 'Good job', 'Good call'],
      },
      {
        basic: 'Sup',
        advanced: 'How do you do',
        transcription: '/haʊ duː juː duː/',
        wrong: ['How are things', 'How goes it', 'How is life', 'How have you been'],
      },
      {
        basic: 'Hi there',
        advanced: 'Good morning',
        transcription: '/ɡʊd ˈmɔːrnɪŋ/',
        wrong: ['Good evening', 'Good afternoon', 'Good night', 'Good luck'],
      },
      {
        basic: 'What up',
        advanced: 'How are you',
        transcription: '/haʊ ɑːr juː/',
        wrong: ['Who are you', 'Where are you', 'Why are you', 'What are you'],
      },
      {
        basic: 'Hiya',
        advanced: 'Pleased to meet',
        transcription: '/pliːzd tə miːt/',
        wrong: ['Happy to meet', 'Glad to meet', 'Nice to meet', 'Great to meet'],
      },
      {
        basic: 'Howdy',
        advanced: 'Good afternoon',
        transcription: '/ɡʊd ˌɑːftərˈnuːn/',
        wrong: ['Good morning', 'Good evening', 'Good night', 'Good day'],
      },
      {
        basic: 'Oi',
        advanced: 'Pardon me',
        transcription: '/ˈpɑːrdən miː/',
        wrong: ['Excuse me', 'Allow me', 'Forgive me', 'Permit me'],
      },
      {
        basic: 'Alright',
        advanced: 'How do you do',
        transcription: '/haʊ duː juː duː/',
        wrong: ['How are things', 'How goes it', 'How is life', 'How have you been'],
      },
      {
        basic: 'Heya',
        advanced: 'Good evening',
        transcription: '/ɡʊd ˈiːvnɪŋ/',
        wrong: ['Good morning', 'Good afternoon', 'Good night', 'Good day'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 2. ASKING HELP
  // ─────────────────────────────────────────
  {
    id: 'asking-help',
    name: 'Asking Help',
    words: [
      {
        basic: 'Help me',
        advanced: 'Could you assist',
        transcription: '/kʊd juː əˈsɪst/',
        wrong: ['Could you advise', 'Could you attend', 'Could you approve', 'Could you arrange'],
      },
      {
        basic: 'Tell me',
        advanced: 'Could you explain',
        transcription: '/kʊd juː ɪkˈspleɪn/',
        wrong: ['Could you expand', 'Could you explore', 'Could you express', 'Could you examine'],
      },
      {
        basic: 'Where is it',
        advanced: 'Could you direct me',
        transcription: '/kʊd juː dɪˈrekt miː/',
        wrong: ['Could you guide me', 'Could you show me', 'Could you lead me', 'Could you take me'],
      },
      {
        basic: 'Do this',
        advanced: 'Would you mind',
        transcription: '/wʊd juː maɪnd/',
        wrong: ['Would you like', 'Would you help', 'Would you check', 'Would you try'],
      },
      {
        basic: 'Give me',
        advanced: 'May I have',
        transcription: '/meɪ aɪ hæv/',
        wrong: ['May I take', 'May I use', 'May I keep', 'May I borrow'],
      },
      {
        basic: 'Move',
        advanced: 'Excuse me please',
        transcription: '/ɪkˈskjuːz miː pliːz/',
        wrong: ['Pardon me please', 'Allow me please', 'Forgive me please', 'Permit me please'],
      },
      {
        basic: 'What time',
        advanced: 'Could you tell me',
        transcription: '/kʊd juː tel miː/',
        wrong: ['Could you show me', 'Could you help me', 'Could you guide me', 'Could you remind me'],
      },
      {
        basic: 'I need',
        advanced: 'I would appreciate',
        transcription: '/aɪ wʊd əˈpriːʃieɪt/',
        wrong: ['I would accept', 'I would allow', 'I would advise', 'I would agree'],
      },
      {
        basic: 'Can you',
        advanced: 'Would it be possible',
        transcription: '/wʊd ɪt biː ˈpɒsɪbl/',
        wrong: ['Would it be ready', 'Would it be needed', 'Would it be ideal', 'Would it be clear'],
      },
      {
        basic: 'Hurry',
        advanced: 'When convenient',
        transcription: '/wen kənˈviːniənt/',
        wrong: ['When possible', 'When ready', 'When needed', 'When free'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 3. INTERRUPTING
  // ─────────────────────────────────────────
  {
    id: 'interrupting',
    name: 'Interrupting',
    words: [
      {
        basic: 'Wait',
        advanced: 'One moment please',
        transcription: '/wʌn ˈmoʊmənt pliːz/',
        wrong: ['One second please', 'One minute please', 'One step please', 'One point please'],
      },
      {
        basic: 'Stop',
        advanced: 'If I may',
        transcription: '/ɪf aɪ meɪ/',
        wrong: ['If I can', 'If I should', 'If I must', 'If I could'],
      },
      {
        basic: 'Listen',
        advanced: 'May I interject',
        transcription: '/meɪ aɪ ˌɪntərˈdʒekt/',
        wrong: ['May I interrupt', 'May I intervene', 'May I interfere', 'May I intercede'],
      },
      {
        basic: 'Hold on',
        advanced: 'Pardon the interruption',
        transcription: '/ˈpɑːrdən ðɪ ˌɪntəˈrʌpʃən/',
        wrong: ['Pardon the delay', 'Pardon the issue', 'Pardon the change', 'Pardon the error'],
      },
      {
        basic: 'Hang on',
        advanced: 'Bear with me',
        transcription: '/beər wɪð miː/',
        wrong: ['Bear in mind', 'Bear the cost', 'Bear the load', 'Bear the weight'],
      },
      {
        basic: 'Shush',
        advanced: 'Please allow me',
        transcription: '/pliːz əˈlaʊ miː/',
        wrong: ['Please advise me', 'Please assist me', 'Please attend me', 'Please approve me'],
      },
      {
        basic: 'Quiet',
        advanced: 'A brief point',
        transcription: '/ə briːf pɔɪnt/',
        wrong: ['A brief note', 'A brief word', 'A brief idea', 'A brief comment'],
      },
      {
        basic: 'Actually',
        advanced: 'If I could add',
        transcription: '/ɪf aɪ kʊd æd/',
        wrong: ['If I could say', 'If I could note', 'If I could share', 'If I could mention'],
      },
      {
        basic: 'But',
        advanced: 'I would like to add',
        transcription: '/aɪ wʊd laɪk tə æd/',
        wrong: ['I would like to say', 'I would like to note', 'I would like to share', 'I would like to mention'],
      },
      {
        basic: 'No wait',
        advanced: 'Forgive the interruption',
        transcription: '/fərˈɡɪv ðɪ ˌɪntəˈrʌpʃən/',
        wrong: ['Forgive the delay', 'Forgive the issue', 'Forgive the change', 'Forgive the error'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 4. DECLINING
  // ─────────────────────────────────────────
  {
    id: 'declining',
    name: 'Declining',
    words: [
      {
        basic: 'No',
        advanced: 'I am afraid not',
        transcription: '/aɪ æm əˈfreɪd nɒt/',
        wrong: ['I am not sure', 'I am not ready', 'I am not able', 'I am not free'],
      },
      {
        basic: 'Nope',
        advanced: 'Unfortunately not',
        transcription: '/ʌnˈfɔːrtʃənətli nɒt/',
        wrong: ['Regrettably not', 'Sadly not', 'Clearly not', 'Certainly not'],
      },
      {
        basic: 'Not interested',
        advanced: 'I must decline',
        transcription: '/aɪ mʌst dɪˈklaɪn/',
        wrong: ['I must refuse', 'I must reject', 'I must cancel', 'I must withdraw'],
      },
      {
        basic: 'Can not',
        advanced: 'I am unable to',
        transcription: '/aɪ æm ʌnˈeɪbl tə/',
        wrong: ['I am unwilling to', 'I am unready to', 'I am unsure to', 'I am unfit to'],
      },
      {
        basic: 'Pass',
        advanced: 'I will pass on that',
        transcription: '/aɪ wɪl pɑːs ɒn ðæt/',
        wrong: ['I will skip that', 'I will avoid that', 'I will miss that', 'I will drop that'],
      },
      {
        basic: 'Not now',
        advanced: 'Perhaps another time',
        transcription: '/pərˈhæps əˈnʌðər taɪm/',
        wrong: ['Perhaps another day', 'Perhaps another way', 'Perhaps another place', 'Perhaps another option'],
      },
      {
        basic: 'Busy',
        advanced: 'Prior commitment',
        transcription: '/ˈpraɪər kəˈmɪtmənt/',
        wrong: ['Prior engagement', 'Prior arrangement', 'Prior obligation', 'Prior appointment'],
      },
      {
        basic: 'Not my thing',
        advanced: 'Not for me',
        transcription: '/nɒt fər miː/',
        wrong: ['Not my style', 'Not my choice', 'Not my preference', 'Not my decision'],
      },
      {
        basic: 'Whatever',
        advanced: 'I respectfully decline',
        transcription: '/aɪ rɪˈspektfəli dɪˈklaɪn/',
        wrong: ['I respectfully refuse', 'I respectfully reject', 'I respectfully cancel', 'I respectfully withdraw'],
      },
      {
        basic: 'No thanks',
        advanced: 'I appreciate the offer',
        transcription: '/aɪ əˈpriːʃieɪt ðɪ ˈɒfər/',
        wrong: ['I appreciate the help', 'I appreciate the time', 'I appreciate the effort', 'I appreciate the thought'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 5. COMPLAINING
  // ─────────────────────────────────────────
  {
    id: 'complaining',
    name: 'Complaining',
    words: [
      {
        basic: 'This sucks',
        advanced: 'Unsatisfactory',
        transcription: '/ˌʌnsætɪsˈfæktəri/',
        wrong: ['Unsuccessful', 'Unproductive', 'Unprepared', 'Unprofessional'],
      },
      {
        basic: 'Terrible',
        advanced: 'Below standard',
        transcription: '/bɪˈloʊ ˈstændərd/',
        wrong: ['Below average', 'Below target', 'Below par', 'Below expectations'],
      },
      {
        basic: 'Broken',
        advanced: 'Not functioning',
        transcription: '/nɒt ˈfʌŋkʃənɪŋ/',
        wrong: ['Not working', 'Not running', 'Not operating', 'Not responding'],
      },
      {
        basic: 'Rip-off',
        advanced: 'Overpriced',
        transcription: '/ˌoʊvərˈpraɪst/',
        wrong: ['Overrated', 'Overused', 'Overdone', 'Overruled'],
      },
      {
        basic: 'Awful',
        advanced: 'Deeply disappointing',
        transcription: '/ˈdiːpli ˌdɪsəˈpɔɪntɪŋ/',
        wrong: ['Deeply concerning', 'Deeply troubling', 'Deeply upsetting', 'Deeply frustrating'],
      },
      {
        basic: 'Rude staff',
        advanced: 'Unprofessional service',
        transcription: '/ˌʌnprəˈfeʃənl ˈsɜːrvɪs/',
        wrong: ['Unacceptable service', 'Inadequate service', 'Poor service', 'Bad service'],
      },
      {
        basic: 'Too slow',
        advanced: 'Unreasonably delayed',
        transcription: '/ʌnˈriːzənəbli dɪˈleɪd/',
        wrong: ['Unreasonably slow', 'Unreasonably late', 'Unreasonably long', 'Unreasonably held'],
      },
      {
        basic: 'Wrong order',
        advanced: 'Incorrect item',
        transcription: '/ɪnˈkɒrekt ˈaɪtəm/',
        wrong: ['Incorrect order', 'Incorrect product', 'Incorrect choice', 'Incorrect selection'],
      },
      {
        basic: 'Disgusting',
        advanced: 'Highly unpleasant',
        transcription: '/ˈhaɪli ʌnˈplezənt/',
        wrong: ['Highly unusual', 'Highly unlikely', 'Highly unfair', 'Highly unclear'],
      },
      {
        basic: 'Scam',
        advanced: 'Misleading',
        transcription: '/ˌmɪsˈliːdɪŋ/',
        wrong: ['Misusing', 'Misplacing', 'Misreading', 'Misjudging'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 6. THANKING
  // ─────────────────────────────────────────
  {
    id: 'thanking',
    name: 'Thanking',
    words: [
      {
        basic: 'Thanks',
        advanced: 'I am grateful',
        transcription: '/aɪ æm ˈɡreɪtfl/',
        wrong: ['I am happy', 'I am pleased', 'I am glad', 'I am satisfied'],
      },
      {
        basic: 'Cheers',
        advanced: 'Much appreciated',
        transcription: '/mʌtʃ əˈpriːʃieɪtɪd/',
        wrong: ['Much needed', 'Much better', 'Much improved', 'Much expected'],
      },
      {
        basic: 'Cool',
        advanced: 'Sincerely thankful',
        transcription: '/sɪnˈsɪərli ˈθæŋkfl/',
        wrong: ['Sincerely sorry', 'Sincerely pleased', 'Sincerely glad', 'Sincerely happy'],
      },
      {
        basic: 'No worries',
        advanced: 'My pleasure',
        transcription: '/maɪ ˈpleʒər/',
        wrong: ['My choice', 'My decision', 'My preference', 'My opinion'],
      },
      {
        basic: 'Sure',
        advanced: 'Certainly',
        transcription: '/ˈsɜːrtnli/',
        wrong: ['Clearly', 'Closely', 'Correctly', 'Carefully'],
      },
      {
        basic: 'Yep',
        advanced: 'Absolutely',
        transcription: '/ˈæbsəluːtli/',
        wrong: ['Actually', 'Apparently', 'Approximately', 'Accordingly'],
      },
      {
        basic: 'Awesome',
        advanced: 'Deeply appreciated',
        transcription: '/ˈdiːpli əˈpriːʃieɪtɪd/',
        wrong: ['Deeply needed', 'Deeply valued', 'Deeply respected', 'Deeply admired'],
      },
      {
        basic: 'You rock',
        advanced: 'Truly grateful',
        transcription: '/ˈtruːli ˈɡreɪtfl/',
        wrong: ['Truly sorry', 'Truly pleased', 'Truly glad', 'Truly happy'],
      },
      {
        basic: 'Thanks a lot',
        advanced: 'I am indebted',
        transcription: '/aɪ æm ɪnˈdetɪd/',
        wrong: ['I am impressed', 'I am inspired', 'I am interested', 'I am involved'],
      },
      {
        basic: 'Thx',
        advanced: 'With gratitude',
        transcription: '/wɪð ˈɡrætɪtjuːd/',
        wrong: ['With respect', 'With regards', 'With pleasure', 'With appreciation'],
      },
    ],
  },
]
