// ============================================================
// MEETINGS & PRESENTATIONS — Informal vs formal equivalents
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

export const MEETINGS_PRESENTATIONS: Subcategory[] = [

  // ─────────────────────────────────────────
  // 1. OPENING
  // ─────────────────────────────────────────
  {
    id: 'opening',
    name: 'Opening',
    words: [
      {
        basic: 'Let us start',
        advanced: 'Shall we begin',
        transcription: '/ʃæl wiː bɪˈɡɪn/',
        wrong: ['Shall we proceed', 'Shall we continue', 'Shall we discuss', 'Shall we review'],
      },
      {
        basic: 'Hi everyone',
        advanced: 'Good morning all',
        transcription: '/ɡʊd ˈmɔːrnɪŋ ɔːl/',
        wrong: ['Good evening all', 'Good afternoon all', 'Good night all', 'Good day all'],
      },
      {
        basic: 'Quick meeting',
        advanced: 'Brief session',
        transcription: '/briːf ˈseʃən/',
        wrong: ['Brief review', 'Brief update', 'Brief discussion', 'Brief overview'],
      },
      {
        basic: 'Today we talk',
        advanced: 'Today we address',
        transcription: '/təˈdeɪ wiː əˈdres/',
        wrong: ['Today we discuss', 'Today we review', 'Today we cover', 'Today we present'],
      },
      {
        basic: 'Let me show',
        advanced: 'I will present',
        transcription: '/aɪ wɪl prɪˈzent/',
        wrong: ['I will discuss', 'I will review', 'I will cover', 'I will address'],
      },
      {
        basic: 'So basically',
        advanced: 'In essence',
        transcription: '/ɪn ˈesns/',
        wrong: ['In summary', 'In brief', 'In short', 'In total'],
      },
      {
        basic: 'First off',
        advanced: 'To begin with',
        transcription: '/tə bɪˈɡɪn wɪð/',
        wrong: ['To start with', 'To open with', 'To lead with', 'To proceed with'],
      },
      {
        basic: 'Agenda today',
        advanced: 'Items to cover',
        transcription: '/ˈaɪtəmz tə ˈkʌvər/',
        wrong: ['Items to discuss', 'Items to review', 'Items to address', 'Items to present'],
      },
      {
        basic: 'Jump right in',
        advanced: 'Proceed directly',
        transcription: '/prəˈsiːd dɪˈrektli/',
        wrong: ['Proceed quickly', 'Proceed briefly', 'Proceed simply', 'Proceed clearly'],
      },
      {
        basic: 'Kick things off',
        advanced: 'Formally commence',
        transcription: '/ˈfɔːrməli kəˈmens/',
        wrong: ['Formally begin', 'Formally start', 'Formally open', 'Formally launch'],
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
        advanced: 'I concur',
        transcription: '/aɪ kənˈkɜːr/',
        wrong: ['I confirm', 'I connect', 'I consider', 'I contain'],
      },
      {
        basic: 'Totally',
        advanced: 'Absolutely agree',
        transcription: '/ˈæbsəluːtli əˈɡriː/',
        wrong: ['Absolutely confirm', 'Absolutely support', 'Absolutely accept', 'Absolutely approve'],
      },
      {
        basic: 'Good point',
        advanced: 'Well noted',
        transcription: '/wel ˈnoʊtɪd/',
        wrong: ['Well received', 'Well taken', 'Well said', 'Well done'],
      },
      {
        basic: 'Sounds good',
        advanced: 'That is acceptable',
        transcription: '/ðæt ɪz əkˈseptəbl/',
        wrong: ['That is agreeable', 'That is appropriate', 'That is achievable', 'That is actionable'],
      },
      {
        basic: 'Sure',
        advanced: 'I am in agreement',
        transcription: '/aɪ æm ɪn əˈɡriːmənt/',
        wrong: ['I am in support', 'I am in favor', 'I am in line', 'I am in accord'],
      },
      {
        basic: 'Makes sense',
        advanced: 'That is logical',
        transcription: '/ðæt ɪz ˈlɒdʒɪkl/',
        wrong: ['That is practical', 'That is rational', 'That is reasonable', 'That is sensible'],
      },
      {
        basic: 'Right',
        advanced: 'Precisely',
        transcription: '/prɪˈsaɪsli/',
        wrong: ['Previously', 'Primarily', 'Practically', 'Particularly'],
      },
      {
        basic: 'Exactly',
        advanced: 'That is correct',
        transcription: '/ðæt ɪz kəˈrekt/',
        wrong: ['That is clear', 'That is certain', 'That is confirmed', 'That is complete'],
      },
      {
        basic: 'I agree',
        advanced: 'I am aligned',
        transcription: '/aɪ æm əˈlaɪnd/',
        wrong: ['I am approved', 'I am confirmed', 'I am decided', 'I am finalized'],
      },
      {
        basic: 'Works for me',
        advanced: 'I have no objection',
        transcription: '/aɪ hæv noʊ əbˈdʒekʃən/',
        wrong: ['I have no concern', 'I have no issue', 'I have no doubt', 'I have no question'],
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
        basic: 'I think',
        advanced: 'In my view',
        transcription: '/ɪn maɪ vjuː/',
        wrong: ['In my mind', 'In my opinion', 'In my experience', 'In my judgment'],
      },
      {
        basic: 'Not sure',
        advanced: 'I have reservations',
        transcription: '/aɪ hæv ˌrezərˈveɪʃənz/',
        wrong: ['I have concerns', 'I have doubts', 'I have questions', 'I have issues'],
      },
      {
        basic: 'Disagree',
        advanced: 'I would challenge that',
        transcription: '/aɪ wʊd ˈtʃælɪndʒ ðæt/',
        wrong: ['I would question that', 'I would dispute that', 'I would contest that', 'I would oppose that'],
      },
      {
        basic: 'That is wrong',
        advanced: 'I see it differently',
        transcription: '/aɪ siː ɪt ˈdɪfrəntli/',
        wrong: ['I see it clearly', 'I see it broadly', 'I see it fully', 'I see it simply'],
      },
      {
        basic: 'No',
        advanced: 'I respectfully disagree',
        transcription: '/aɪ rɪˈspektfəli ˌdɪsəˈɡriː/',
        wrong: ['I respectfully decline', 'I respectfully refuse', 'I respectfully reject', 'I respectfully withdraw'],
      },
      {
        basic: 'Bad idea',
        advanced: 'Worth reconsidering',
        transcription: '/wɜːrθ ˌriːkənˈsɪdərɪŋ/',
        wrong: ['Worth reviewing', 'Worth revising', 'Worth rethinking', 'Worth reassessing'],
      },
      {
        basic: 'Not right',
        advanced: 'Needs revisiting',
        transcription: '/niːdz ˌriːˈvɪzɪtɪŋ/',
        wrong: ['Needs reviewing', 'Needs revising', 'Needs rethinking', 'Needs reassessing'],
      },
      {
        basic: 'Pointless',
        advanced: 'Not aligned',
        transcription: '/nɒt əˈlaɪnd/',
        wrong: ['Not approved', 'Not confirmed', 'Not decided', 'Not finalized'],
      },
      {
        basic: 'Waste of time',
        advanced: 'Low priority',
        transcription: '/loʊ praɪˈɒrɪti/',
        wrong: ['Low impact', 'Low value', 'Low effort', 'Low risk'],
      },
      {
        basic: 'Useless',
        advanced: 'Lacks merit',
        transcription: '/læks ˈmerɪt/',
        wrong: ['Lacks detail', 'Lacks focus', 'Lacks clarity', 'Lacks depth'],
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
        basic: 'So basically',
        advanced: 'In summary',
        transcription: '/ɪn ˈsʌməri/',
        wrong: ['In essence', 'In brief', 'In short', 'In total'],
      },
      {
        basic: 'Long story short',
        advanced: 'To summarize',
        transcription: '/tə ˈsʌməraɪz/',
        wrong: ['To conclude', 'To finalize', 'To complete', 'To close'],
      },
      {
        basic: 'Bottom line',
        advanced: 'In conclusion',
        transcription: '/ɪn kənˈkluːʒən/',
        wrong: ['In summary', 'In essence', 'In brief', 'In short'],
      },
      {
        basic: 'Main point',
        advanced: 'Key takeaway',
        transcription: '/kiː ˈteɪkəweɪ/',
        wrong: ['Key finding', 'Key result', 'Key outcome', 'Key insight'],
      },
      {
        basic: 'To wrap up',
        advanced: 'In closing',
        transcription: '/ɪn ˈkloʊzɪŋ/',
        wrong: ['In summary', 'In essence', 'In brief', 'In short'],
      },
      {
        basic: 'All in all',
        advanced: 'On the whole',
        transcription: '/ɒn ðə hoʊl/',
        wrong: ['On the other hand', 'On the contrary', 'On the surface', 'On the basis'],
      },
      {
        basic: 'The point is',
        advanced: 'The crux is',
        transcription: '/ðə krʌks ɪz/',
        wrong: ['The issue is', 'The matter is', 'The concern is', 'The question is'],
      },
      {
        basic: 'In short',
        advanced: 'Concisely stated',
        transcription: '/kənˈsaɪsli ˈsteɪtɪd/',
        wrong: ['Clearly stated', 'Briefly stated', 'Simply stated', 'Directly stated'],
      },
      {
        basic: 'Recap',
        advanced: 'To recapitulate',
        transcription: '/tə riːkəˈpɪtjuleɪt/',
        wrong: ['To reconsider', 'To reassess', 'To reorganize', 'To redirect'],
      },
      {
        basic: 'Key points',
        advanced: 'Principal findings',
        transcription: '/ˈprɪnsɪpl ˈfaɪndɪŋz/',
        wrong: ['Principal results', 'Principal outcomes', 'Principal insights', 'Principal conclusions'],
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
        basic: 'Any questions',
        advanced: 'Are there queries',
        transcription: '/ɑːr ðeər ˈkwɪəriz/',
        wrong: ['Are there concerns', 'Are there issues', 'Are there doubts', 'Are there ideas'],
      },
      {
        basic: 'What do you think',
        advanced: 'Your perspective',
        transcription: '/jɔːr pərˈspektɪv/',
        wrong: ['Your opinion', 'Your view', 'Your thought', 'Your idea'],
      },
      {
        basic: 'Can you explain',
        advanced: 'Could you elaborate',
        transcription: '/kʊd juː ɪˈlæbəreɪt/',
        wrong: ['Could you expand', 'Could you explore', 'Could you express', 'Could you examine'],
      },
      {
        basic: 'What is the plan',
        advanced: 'What is the strategy',
        transcription: '/wɒt ɪz ðə ˈstrætədʒi/',
        wrong: ['What is the approach', 'What is the method', 'What is the process', 'What is the solution'],
      },
      {
        basic: 'Who is doing it',
        advanced: 'Who is responsible',
        transcription: '/huː ɪz rɪˈspɒnsɪbl/',
        wrong: ['Who is accountable', 'Who is available', 'Who is assigned', 'Who is involved'],
      },
      {
        basic: 'When is it due',
        advanced: 'What is the deadline',
        transcription: '/wɒt ɪz ðə ˈdedlaɪn/',
        wrong: ['What is the timeline', 'What is the schedule', 'What is the timeframe', 'What is the date'],
      },
      {
        basic: 'Why',
        advanced: 'What is the rationale',
        transcription: '/wɒt ɪz ðə ˈræʃənæl/',
        wrong: ['What is the reason', 'What is the purpose', 'What is the goal', 'What is the basis'],
      },
      {
        basic: 'How',
        advanced: 'What is the approach',
        transcription: '/wɒt ɪz ðɪ əˈproʊtʃ/',
        wrong: ['What is the method', 'What is the process', 'What is the strategy', 'What is the solution'],
      },
      {
        basic: 'Thoughts',
        advanced: 'Any input',
        transcription: '/ˈeni ˈɪnpʊt/',
        wrong: ['Any output', 'Any outcome', 'Any result', 'Any feedback'],
      },
      {
        basic: 'Agree',
        advanced: 'Any objections',
        transcription: '/ˈeni əbˈdʒekʃənz/',
        wrong: ['Any concerns', 'Any issues', 'Any doubts', 'Any questions'],
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
        basic: 'That is it',
        advanced: 'That concludes',
        transcription: '/ðæt kənˈkluːdz/',
        wrong: ['That confirms', 'That connects', 'That considers', 'That contains'],
      },
      {
        basic: 'We are done',
        advanced: 'Meeting adjourned',
        transcription: '/ˈmiːtɪŋ əˈdʒɜːrnd/',
        wrong: ['Meeting approved', 'Meeting confirmed', 'Meeting decided', 'Meeting finalized'],
      },
      {
        basic: 'Next steps',
        advanced: 'Action items',
        transcription: '/ˈækʃən ˈaɪtəmz/',
        wrong: ['Action points', 'Action plans', 'Action tasks', 'Action goals'],
      },
      {
        basic: 'Follow up',
        advanced: 'Subsequent actions',
        transcription: '/ˈsʌbsɪkwənt ˈækʃənz/',
        wrong: ['Subsequent steps', 'Subsequent tasks', 'Subsequent plans', 'Subsequent goals'],
      },
      {
        basic: 'Thanks everyone',
        advanced: 'I appreciate your time',
        transcription: '/aɪ əˈpriːʃieɪt jɔːr taɪm/',
        wrong: ['I appreciate your help', 'I appreciate your effort', 'I appreciate your input', 'I appreciate your support'],
      },
      {
        basic: 'See you next time',
        advanced: 'Until our next meeting',
        transcription: '/ʌnˈtɪl aʊər nekst ˈmiːtɪŋ/',
        wrong: ['Until our next session', 'Until our next call', 'Until our next review', 'Until our next discussion'],
      },
      {
        basic: 'Wrap up',
        advanced: 'Conclude',
        transcription: '/kənˈkluːd/',
        wrong: ['Confirm', 'Connect', 'Consider', 'Contain'],
      },
      {
        basic: 'Any last things',
        advanced: 'Final remarks',
        transcription: '/ˈfaɪnl rɪˈmɑːrks/',
        wrong: ['Final notes', 'Final points', 'Final thoughts', 'Final comments'],
      },
      {
        basic: 'Good meeting',
        advanced: 'Productive session',
        transcription: '/prəˈdʌktɪv ˈseʃən/',
        wrong: ['Productive review', 'Productive update', 'Productive discussion', 'Productive overview'],
      },
      {
        basic: 'Bye',
        advanced: 'Thank you all',
        transcription: '/θæŋk juː ɔːl/',
        wrong: ['Thank you much', 'Thank you kindly', 'Thank you sincerely', 'Thank you greatly'],
      },
    ],
  },
]
