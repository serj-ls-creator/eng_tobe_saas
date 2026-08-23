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
        wrong: ['Shall we to begin', 'Should we beginning', 'May we started', 'Will we to proceed'],
      },
      {
        basic: 'Hi everyone',
        advanced: 'Greetings everyone',
        transcription: '/ˈɡriːtɪŋz ˈevriwʌn/',
        wrong: ['Salutations everyone', 'Welcomes everyone', 'Regards everyone', 'Appreciations everyone'],
      },
      {
        basic: 'Quick meeting',
        advanced: 'Brief session',
        transcription: '/briːf ˈseʃən/',
        wrong: ['Briefly session', 'Shortening session', 'Briefness session', 'Shorty session'],
      },
      {
        basic: 'Today we talk',
        advanced: 'Today we address',
        transcription: '/təˈdeɪ wiː əˈdres/',
        wrong: ['Today we addressing', 'Today we speech', 'Today we talkative', 'Today we are address'],
      },
      {
        basic: 'Let me show',
        advanced: 'I will present',
        transcription: '/aɪ wɪl prɪˈzent/',
        wrong: ['I will presentation', 'I am present', 'I will showy', 'I shall to present'],
      },
      {
        basic: 'So basically',
        advanced: 'In essence',
        transcription: '/ɪn ˈesns/',
        wrong: ['In essential', 'In basic', 'In essentially', 'In basicness'],
      },
      {
        basic: 'First off',
        advanced: 'To begin with',
        transcription: '/tə bɪˈɡɪn wɪð/',
        wrong: ['To beginning with', 'For begin with', 'To start by with', 'At begin with'],
      },
      {
        basic: 'Agenda today',
        advanced: 'Items to cover',
        transcription: '/ˈaɪtəmz tə ˈkʌvər/',
        wrong: ['Items for cover', 'Items to covering', 'Items on cover', 'Items to coverage'],
      },
      {
        basic: 'Jump right in',
        advanced: 'Proceed directly',
        transcription: '/prəˈsiːd dɪˈrektli/',
        wrong: ['Proceed direct', 'Proceeding directly', 'Proceed directness', 'Process directly'],
      },
      {
        basic: 'Kick things off',
        advanced: 'Formally commence',
        transcription: '/ˈfɔːrməli kəˈmens/',
        wrong: ['Formally commencement', 'Formal commence', 'Formally commencing', 'Formally to commence'],
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
        wrong: ['I concurrence', 'I concurring', 'I am concur', 'I concurment'],
      },
      {
        basic: 'Totally',
        advanced: 'Absolutely agree',
        transcription: '/ˈæbsəluːtli əˈɡriː/',
        wrong: ['Absolute agree', 'Absolutely agreement', 'Absolutly agree', 'Absolute agreeing'],
      },
      {
        basic: 'Good point',
        advanced: 'Well noted',
        transcription: '/wel ˈnoʊtɪd/',
        wrong: ['Good noted', 'Well noting', 'Well notation', 'Well notatedly'],
      },
      {
        basic: 'Sounds good',
        advanced: 'That is acceptable',
        transcription: '/ðæt ɪz əkˈseptəbl/',
        wrong: ['That is accept', 'That is acceptably', 'That is acceptation', 'That is accepting'],
      },
      {
        basic: 'Sure',
        advanced: 'I am in agreement',
        transcription: '/aɪ æm ɪn əˈɡriːmənt/',
        wrong: ['I am in agree', 'I am on agreement', 'I am in agreeable', 'I am with agreement'],
      },
      {
        basic: 'Makes sense',
        advanced: 'That is logical',
        transcription: '/ðæt ɪz ˈlɑːdʒɪkl/',
        wrong: ['That is logic', 'That is logically', 'That is logician', 'That is logica'],
      },
      {
        basic: 'Right',
        advanced: 'Precisely',
        transcription: '/prɪˈsaɪsli/',
        wrong: ['Precise', 'Precisionly', 'Precisement', 'Precisenessly'],
      },
      {
        basic: 'Exactly',
        advanced: 'That is correct',
        transcription: '/ðæt ɪz kəˈrekt/',
        wrong: ['That is correction', 'That is correctly', 'That is correctness', 'That is correctitude'],
      },
      {
        basic: 'I agree',
        advanced: 'I am aligned',
        transcription: '/aɪ æm əˈlaɪnd/',
        wrong: ['I am align', 'I am alignment', 'I am aligning', 'I am alignable'],
      },
      {
        basic: 'Works for me',
        advanced: 'I have no objection',
        transcription: '/aɪ hæv noʊ əbˈdʒekʃən/',
        wrong: ['I have no object', 'I have no objecting', 'I have no objectionable', 'I have not objection'],
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
        wrong: ['On my view', 'In my viewing', 'To my view', 'At my view'],
      },
      {
        basic: 'Not sure',
        advanced: 'I have reservations',
        transcription: '/aɪ hæv ˌrezərˈveɪʃənz/',
        wrong: ['I have reserve', 'I have reserved', 'I have reservings', 'I am reservations'],
      },
      {
        basic: 'Disagree',
        advanced: 'I would challenge that',
        transcription: '/aɪ wʊd ˈtʃælɪndʒ ðæt/',
        wrong: ['I would to challenge that', 'I would challenging that', 'I am challenge that', 'I will challenging that'],
      },
      {
        basic: 'That is wrong',
        advanced: 'I see it differently',
        transcription: '/aɪ siː ɪt ˈdɪfrəntli/',
        wrong: ['I see it different', 'I see it difference', 'I see it differential', 'I am see it differently'],
      },
      {
        basic: 'No',
        advanced: 'I respectfully disagree',
        transcription: '/aɪ rɪˈspektfəli ˌdɪsəˈɡriː/',
        wrong: ['I respectful disagree', 'I respect disagree', 'I respectfully disagreement', 'I am respectfully disagree'],
      },
      {
        basic: 'Bad idea',
        advanced: 'Worth reconsidering',
        transcription: '/wɜːrθ ˌriːkənˈsɪdərɪŋ/',
        wrong: ['Worth to reconsider', 'Worth reconsider', 'Worthy reconsidering', 'Worth reconsiderationally'],
      },
      {
        basic: 'Not right',
        advanced: 'Needs revisiting',
        transcription: '/niːdz ˌriːˈvɪzɪtɪŋ/',
        wrong: ['Needs to revisiting', 'Needs revisit', 'Needs revisitation', 'Needing revisiting'],
      },
      {
        basic: 'Pointless',
        advanced: 'Not aligned',
        transcription: '/nɑːt əˈlaɪnd/',
        wrong: ['Not align', 'Not alignment', 'Not aligning', 'Not alignable'],
      },
      {
        basic: 'Waste of time',
        advanced: 'Low priority',
        transcription: '/loʊ praɪˈɔːrəti/',
        wrong: ['Low prioritize', 'Low prioritization', 'Low prior', 'Low priorityness'],
      },
      {
        basic: 'Useless',
        advanced: 'Lacks merit',
        transcription: '/læks ˈmerɪt/',
        wrong: ['Lacks meritorious', 'Lacks of merit', 'Lacking meritness', 'Lacks merited'],
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
        wrong: ['In summarize', 'In summarization', 'On summary', 'In summarily'],
      },
      {
        basic: 'Long story short',
        advanced: 'To summarize',
        transcription: '/tə ˈsʌməraɪz/',
        wrong: ['To summary', 'To summarization', 'For summarize', 'To summarily'],
      },
      {
        basic: 'Bottom line',
        advanced: 'In conclusion',
        transcription: '/ɪn kənˈkluːʒən/',
        wrong: ['In conclude', 'In conclusive', 'On conclusion', 'In conclusively'],
      },
      {
        basic: 'Main point',
        advanced: 'Key takeaway',
        transcription: '/kiː ˈteɪkəweɪ/',
        wrong: ['Key takeawaying', 'Key takenaway', 'Key take-about', 'Key takingaway'],
      },
      {
        basic: 'To wrap up',
        advanced: 'In closing',
        transcription: '/ɪn ˈkloʊzɪŋ/',
        wrong: ['In close', 'In closurely', 'On closing', 'In closed'],
      },
      {
        basic: 'All in all',
        advanced: 'On the whole',
        transcription: '/ɑːn ðə hoʊl/',
        wrong: ['In the whole', 'On the wholly', 'On whole', 'At the whole'],
      },
      {
        basic: 'The point is',
        advanced: 'The crux is',
        transcription: '/ðə krʌks ɪz/',
        wrong: ['The cruxing is', 'The cruxliness is', 'The crucial is', 'The cruxed is'],
      },
      {
        basic: 'In short',
        advanced: 'Concisely stated',
        transcription: '/kənˈsaɪsli ˈsteɪtɪd/',
        wrong: ['Concise stated', 'Concisely stating', 'Concisely statement', 'Conciseness stated'],
      },
      {
        basic: 'Recap',
        advanced: 'To recapitulate',
        transcription: '/tə riːkəˈpɪtʃəleɪt/',
        wrong: ['To recapitulation', 'For recapitulate', 'To recapitulating', 'To recapitulative'],
      },
      {
        basic: 'Key points',
        advanced: 'Principal findings',
        transcription: '/ˈprɪnsəpl ˈfaɪndɪŋz/',
        wrong: ['Principle findings', 'Principally findings', 'Principal finders', 'Principal finded'],
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
        transcription: '/ɑːr ðer ˈkwɪəriz/',
        wrong: ['Is there queries', 'Are there query', 'Are there querying', 'Do there queries'],
      },
      {
        basic: 'What do you think',
        advanced: 'Your perspective',
        transcription: '/jɔːr pərˈspektɪv/',
        wrong: ['Your perspectively', 'You perspective', 'Your perspectiveness', 'Your perspectival'],
      },
      {
        basic: 'Can you explain',
        advanced: 'Could you elaborate',
        transcription: '/kʊd juː ɪˈlæbəreɪt/',
        wrong: ['Could you to elaborate', 'Could you elaboration', 'Could you elaborating', 'Can you elaborate'],
      },
      {
        basic: 'What is the plan',
        advanced: 'What is the strategy',
        transcription: '/wɑːt ɪz ðə ˈstrætədʒi/',
        wrong: ['What is the strategic', 'What is the strategically', 'What is strategy', 'What is the strategize'],
      },
      {
        basic: 'Who is doing it',
        advanced: 'Who is responsible',
        transcription: '/huː ɪz rɪˈspɑːnsəbl/',
        wrong: ['Who is responsibility', 'Who is responsibly', 'Who are responsible', 'Who is responsibleness'],
      },
      {
        basic: 'When is it due',
        advanced: 'What is the deadline',
        transcription: '/wɑːt ɪz ðə ˈdedlaɪn/',
        wrong: ['What is the deadlining', 'What is deadline', 'What is the deadlined', 'What is the deadnessline'],
      },
      {
        basic: 'Why',
        advanced: 'What is the rationale',
        transcription: '/wɑːt ɪz ðə ˌræʃəˈnæl/',
        wrong: ['What is the rational', 'What is rationale', 'What is the rationally', 'What is the rationalness'],
      },
      {
        basic: 'How',
        advanced: 'What is the approach',
        transcription: '/wɑːt ɪz ðɪ əˈproʊtʃ/',
        wrong: ['What is the approaching', 'What is approach', 'What is the approachable', 'What is the approached'],
      },
      {
        basic: 'Thoughts',
        advanced: 'Any input',
        transcription: '/ˈeni ˈɪnpʊt/',
        wrong: ['Any inputting', 'Any in-pution', 'Any inputted', 'Any inputness'],
      },
      {
        basic: 'Agree',
        advanced: 'Any objections',
        transcription: '/ˈeni əbˈdʒekʃənz/',
        wrong: ['Any objectings', 'Any object', 'Any objectionable', 'Any objectiveness'],
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
        wrong: ['That conclusion', 'That concluding', 'That is concludes', 'That conclusive'],
      },
      {
        basic: 'We are done',
        advanced: 'Meeting adjourned',
        transcription: '/ˈmiːtɪŋ əˈdʒɜːrnd/',
        wrong: ['Meeting adjourn', 'Meeting adjourning', 'Meeting adjournment', 'Meeting is adjourn'],
      },
      {
        basic: 'Next steps',
        advanced: 'Action items',
        transcription: '/ˈækʃən ˈaɪtəmz/',
        wrong: ['Actioning items', 'Actionable items', 'Action itemize', 'Actioned items'],
      },
      {
        basic: 'Follow up',
        advanced: 'Subsequent actions',
        transcription: '/ˈsʌbsɪkwənt ˈækʃənz/',
        wrong: ['Subsequently actions', 'Subsequence actions', 'Subsequenting actions', 'Subsequent actioning'],
      },
      {
        basic: 'Thanks everyone',
        advanced: 'I appreciate your time',
        transcription: '/aɪ əˈpriːʃieɪt jɔːr taɪm/',
        wrong: ['I appreciation your time', 'I appreciative your time', 'I am appreciate your time', 'I appreciate you time'],
      },
      {
        basic: 'See you next time',
        advanced: 'Until our next meeting',
        transcription: '/ənˈtɪl aʊər nekst ˈmiːtɪŋ/',
        wrong: ['Until our next meet', 'Till our next meeting', 'Until our next meetup', 'Until next meeting'],
      },
      {
        basic: 'Wrap up',
        advanced: 'Conclude',
        transcription: '/kənˈkluːd/',
        wrong: ['Conclusion', 'Conclusive', 'Conclusively', 'Concluding'],
      },
      {
        basic: 'Any last things',
        advanced: 'Final remarks',
        transcription: '/ˈfaɪnl rɪˈmɑːrks/',
        wrong: ['Finally remarks', 'Final remarking', 'Final remarkedly', 'Finalize remarks'],
      },
      {
        basic: 'Good meeting',
        advanced: 'Productive session',
        transcription: '/prəˈdʌktɪv ˈseʃən/',
        wrong: ['Productively session', 'Productivity session', 'Production session', 'Producting session'],
      },
      {
        basic: 'Bye',
        advanced: 'Thank you all',
        transcription: '/θæŋk juː ɔːl/',
        wrong: ['Thanks you all', 'Thanking you all', 'Thank you alls', 'Thank to you all'],
      },
    ],
  },
]