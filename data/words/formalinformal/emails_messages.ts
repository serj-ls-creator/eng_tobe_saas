// ============================================================
// EMAILS & MESSAGES — Informal vs formal equivalents
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

export const EMAILS_MESSAGES: Subcategory[] = [

  // ─────────────────────────────────────────
  // 1. GREETINGS
  // ─────────────────────────────────────────
  {
    id: 'greetings',
    name: 'Greetings',
    words: [
      {
        basic: 'Hey',
        advanced: 'Dear',
        transcription: '/dɪər/',
        wrong: ['Deep', 'Dense', 'Direct', 'Distinct'],
      },
      {
        basic: 'Hi',
        advanced: 'Good morning',
        transcription: '/ɡʊd ˈmɔːrnɪŋ/',
        wrong: ['Good evening', 'Good afternoon', 'Good night', 'Good luck'],
      },
      {
        basic: 'Hello',
        advanced: 'To whom it concerns',
        transcription: '/tə huːm ɪt kənˈsɜːrnz/',
        wrong: ['To whom it applies', 'To whom it matters', 'To whom it relates', 'To whom it belongs'],
      },
      {
        basic: 'Yo',
        advanced: 'Greetings',
        transcription: '/ˈɡriːtɪŋz/',
        wrong: ['Guidance', 'Gratitude', 'Guarantee', 'Governance'],
      },
      {
        basic: 'Sup',
        advanced: 'I hope this finds you',
        transcription: '/aɪ hoʊp ðɪs faɪndz juː/',
        wrong: ['I hope this helps you', 'I hope this reaches you', 'I hope this suits you', 'I hope this serves you'],
      },
      {
        basic: 'What is up',
        advanced: 'I trust you are well',
        transcription: '/aɪ trʌst juː ɑːr wel/',
        wrong: ['I trust you are ready', 'I trust you are free', 'I trust you are available', 'I trust you are informed'],
      },
      {
        basic: 'Hey there',
        advanced: 'Dear Sir',
        transcription: '/dɪər sɜːr/',
        wrong: ['Dear Team', 'Dear All', 'Dear Friend', 'Dear Guest'],
      },
      {
        basic: 'Hiya',
        advanced: 'Dear Madam',
        transcription: '/dɪər ˈmædəm/',
        wrong: ['Dear Team', 'Dear All', 'Dear Friend', 'Dear Guest'],
      },
      {
        basic: 'Morning',
        advanced: 'Good day',
        transcription: '/ɡʊd deɪ/',
        wrong: ['Good luck', 'Good work', 'Good job', 'Good call'],
      },
      {
        basic: 'Howdy',
        advanced: 'Salutations',
        transcription: '/ˌsæljuˈteɪʃənz/',
        wrong: ['Situations', 'Simulations', 'Specifications', 'Submissions'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 2. CLOSINGS
  // ─────────────────────────────────────────
  {
    id: 'closings',
    name: 'Closings',
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
        basic: 'Take care',
        advanced: 'Warm regards',
        transcription: '/wɔːrm rɪˈɡɑːrdz/',
        wrong: ['Warm wishes', 'Warm efforts', 'Warm results', 'Warm outcomes'],
      },
      {
        basic: 'Cheers',
        advanced: 'Yours sincerely',
        transcription: '/jɔːrz sɪnˈsɪərli/',
        wrong: ['Yours truly', 'Yours faithfully', 'Yours respectfully', 'Yours gratefully'],
      },
      {
        basic: 'Thanks',
        advanced: 'With gratitude',
        transcription: '/wɪð ˈɡrætɪtjuːd/',
        wrong: ['With respect', 'With regards', 'With pleasure', 'With appreciation'],
      },
      {
        basic: 'See you',
        advanced: 'Until next time',
        transcription: '/ʌnˈtɪl nekst taɪm/',
        wrong: ['Until next week', 'Until next month', 'Until next year', 'Until next meeting'],
      },
      {
        basic: 'Talk soon',
        advanced: 'Awaiting your reply',
        transcription: '/əˈweɪtɪŋ jɔːr rɪˈplaɪ/',
        wrong: ['Awaiting your response', 'Awaiting your feedback', 'Awaiting your decision', 'Awaiting your approval'],
      },
      {
        basic: 'Cya',
        advanced: 'Respectfully',
        transcription: '/rɪˈspektfəli/',
        wrong: ['Reliably', 'Remarkably', 'Repeatedly', 'Regrettably'],
      },
      {
        basic: 'Peace',
        advanced: 'Sincerely',
        transcription: '/sɪnˈsɪərli/',
        wrong: ['Seriously', 'Separately', 'Specifically', 'Steadily'],
      },
      {
        basic: 'Laters',
        advanced: 'Yours faithfully',
        transcription: '/jɔːrz ˈfeɪθfəli/',
        wrong: ['Yours truly', 'Yours sincerely', 'Yours respectfully', 'Yours gratefully'],
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
        basic: 'Can you',
        advanced: 'Could you kindly',
        transcription: '/kʊd juː ˈkaɪndli/',
        wrong: ['Could you quickly', 'Could you briefly', 'Could you simply', 'Could you clearly'],
      },
      {
        basic: 'Send me',
        advanced: 'Please forward',
        transcription: '/pliːz ˈfɔːrwərd/',
        wrong: ['Please follow', 'Please finish', 'Please find', 'Please fix'],
      },
      {
        basic: 'I need',
        advanced: 'I would be grateful',
        transcription: '/aɪ wʊd biː ˈɡreɪtfl/',
        wrong: ['I would be happy', 'I would be pleased', 'I would be glad', 'I would be satisfied'],
      },
      {
        basic: 'Tell me',
        advanced: 'Please advise',
        transcription: '/pliːz ədˈvaɪz/',
        wrong: ['Please assist', 'Please attend', 'Please approve', 'Please arrange'],
      },
      {
        basic: 'Check this',
        advanced: 'Please review',
        transcription: '/pliːz rɪˈvjuː/',
        wrong: ['Please respond', 'Please revise', 'Please confirm', 'Please update'],
      },
      {
        basic: 'Reply asap',
        advanced: 'At your earliest convenience',
        transcription: '/æt jɔːr ˈɜːrliɪst kənˈviːniəns/',
        wrong: ['At your earliest request', 'At your earliest suggestion', 'At your earliest discretion', 'At your earliest opportunity'],
      },
      {
        basic: 'Get back to me',
        advanced: 'Please respond',
        transcription: '/pliːz rɪˈspɒnd/',
        wrong: ['Please review', 'Please revise', 'Please confirm', 'Please update'],
      },
      {
        basic: 'Do this',
        advanced: 'Kindly action',
        transcription: '/ˈkaɪndli ˈækʃən/',
        wrong: ['Kindly confirm', 'Kindly respond', 'Kindly review', 'Kindly update'],
      },
      {
        basic: 'Hurry',
        advanced: 'As soon as possible',
        transcription: '/æz suːn æz ˈpɒsɪbl/',
        wrong: ['As soon as needed', 'As soon as ready', 'As soon as free', 'As soon as done'],
      },
      {
        basic: 'Give me',
        advanced: 'I would appreciate',
        transcription: '/aɪ wʊd əˈpriːʃieɪt/',
        wrong: ['I would accept', 'I would allow', 'I would advise', 'I would agree'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 4. APOLOGIES
  // ─────────────────────────────────────────
  {
    id: 'apologies',
    name: 'Apologies',
    words: [
      {
        basic: 'Sorry',
        advanced: 'I apologize',
        transcription: '/aɪ əˈpɒlədʒaɪz/',
        wrong: ['I accept', 'I agree', 'I admit', 'I advise'],
      },
      {
        basic: 'My bad',
        advanced: 'I sincerely apologize',
        transcription: '/aɪ sɪnˈsɪərli əˈpɒlədʒaɪz/',
        wrong: ['I deeply apologize', 'I truly apologize', 'I formally apologize', 'I genuinely apologize'],
      },
      {
        basic: 'Oops',
        advanced: 'Regrettably',
        transcription: '/rɪˈɡretəbli/',
        wrong: ['Reliably', 'Remarkably', 'Repeatedly', 'Respectfully'],
      },
      {
        basic: 'My fault',
        advanced: 'I take responsibility',
        transcription: '/aɪ teɪk rɪˌspɒnsɪˈbɪlɪti/',
        wrong: ['I take action', 'I take charge', 'I take control', 'I take note'],
      },
      {
        basic: 'Too bad',
        advanced: 'I regret to inform',
        transcription: '/aɪ rɪˈɡret tə ɪnˈfɔːrm/',
        wrong: ['I regret to advise', 'I regret to announce', 'I regret to confirm', 'I regret to report'],
      },
      {
        basic: 'Forget it',
        advanced: 'Please disregard',
        transcription: '/pliːz ˌdɪsrɪˈɡɑːrd/',
        wrong: ['Please dismiss', 'Please discard', 'Please decline', 'Please delete'],
      },
      {
        basic: 'Whoops',
        advanced: 'Inadvertently',
        transcription: '/ˌɪnədˈvɜːrtəntli/',
        wrong: ['Independently', 'Individually', 'Informally', 'Initially'],
      },
      {
        basic: 'Not my fault',
        advanced: 'Unforeseen circumstances',
        transcription: '/ˌʌnfɔːˈsiːn ˈsɜːrkəmstænsɪz/',
        wrong: ['Unforeseen changes', 'Unforeseen delays', 'Unforeseen issues', 'Unforeseen problems'],
      },
      {
        basic: 'Late reply',
        advanced: 'Delayed response',
        transcription: '/dɪˈleɪd rɪˈspɒns/',
        wrong: ['Delayed reaction', 'Delayed action', 'Delayed decision', 'Delayed feedback'],
      },
      {
        basic: 'Missed it',
        advanced: 'Oversight on my part',
        transcription: '/ˈoʊvərsaɪt ɒn maɪ pɑːrt/',
        wrong: ['Oversight on their part', 'Oversight on our part', 'Oversight on your part', 'Oversight on all parts'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 5. UPDATES
  // ─────────────────────────────────────────
  {
    id: 'updates',
    name: 'Updates',
    words: [
      {
        basic: 'FYI',
        advanced: 'Please note',
        transcription: '/pliːz noʊt/',
        wrong: ['Please check', 'Please confirm', 'Please review', 'Please update'],
      },
      {
        basic: 'Just so you know',
        advanced: 'For your information',
        transcription: '/fər jɔːr ˌɪnfərˈmeɪʃən/',
        wrong: ['For your reference', 'For your records', 'For your review', 'For your consideration'],
      },
      {
        basic: 'Heads up',
        advanced: 'Please be advised',
        transcription: '/pliːz biː ədˈvaɪzd/',
        wrong: ['Please be informed', 'Please be aware', 'Please be notified', 'Please be reminded'],
      },
      {
        basic: 'Quick update',
        advanced: 'Status update',
        transcription: '/ˈsteɪtəs ˈʌpdeɪt/',
        wrong: ['Status report', 'Status review', 'Status check', 'Status change'],
      },
      {
        basic: 'Btw',
        advanced: 'Additionally',
        transcription: '/əˈdɪʃənəli/',
        wrong: ['Accordingly', 'Apparently', 'Approximately', 'Alternatively'],
      },
      {
        basic: 'Just checking',
        advanced: 'Following up',
        transcription: '/ˈfɒloʊɪŋ ʌp/',
        wrong: ['Following through', 'Following along', 'Following back', 'Following out'],
      },
      {
        basic: 'Any news',
        advanced: 'Awaiting update',
        transcription: '/əˈweɪtɪŋ ˈʌpdeɪt/',
        wrong: ['Awaiting response', 'Awaiting feedback', 'Awaiting decision', 'Awaiting approval'],
      },
      {
        basic: 'Done',
        advanced: 'Completed',
        transcription: '/kəmˈpliːtɪd/',
        wrong: ['Confirmed', 'Connected', 'Considered', 'Contained'],
      },
      {
        basic: 'In progress',
        advanced: 'Underway',
        transcription: '/ˌʌndərˈweɪ/',
        wrong: ['Underused', 'Underrated', 'Undervalued', 'Undermined'],
      },
      {
        basic: 'All good',
        advanced: 'No further action',
        transcription: '/noʊ ˈfɜːrðər ˈækʃən/',
        wrong: ['No further review', 'No further changes', 'No further updates', 'No further issues'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 6. ATTACHMENTS
  // ─────────────────────────────────────────
  {
    id: 'attachments',
    name: 'Attachments',
    words: [
      {
        basic: 'See attached',
        advanced: 'Please find enclosed',
        transcription: '/pliːz faɪnd ɪnˈkloʊzd/',
        wrong: ['Please find attached', 'Please find included', 'Please find appended', 'Please find below'],
      },
      {
        basic: 'Here it is',
        advanced: 'Attached herewith',
        transcription: '/əˈtætʃt ˌhɪərˈwɪð/',
        wrong: ['Attached herein', 'Attached hereby', 'Attached hereto', 'Attached hereafter'],
      },
      {
        basic: 'Check the file',
        advanced: 'Please refer to',
        transcription: '/pliːz rɪˈfɜːr tə/',
        wrong: ['Please respond to', 'Please review to', 'Please revise to', 'Please confirm to'],
      },
      {
        basic: 'I sent it',
        advanced: 'Forwarded for review',
        transcription: '/ˈfɔːrwərdɪd fər rɪˈvjuː/',
        wrong: ['Forwarded for approval', 'Forwarded for feedback', 'Forwarded for reference', 'Forwarded for action'],
      },
      {
        basic: 'Look at this',
        advanced: 'For your reference',
        transcription: '/fər jɔːr ˈrefrəns/',
        wrong: ['For your records', 'For your review', 'For your information', 'For your consideration'],
      },
      {
        basic: 'File below',
        advanced: 'Document enclosed',
        transcription: '/ˈdɒkjumənt ɪnˈkloʊzd/',
        wrong: ['Document attached', 'Document included', 'Document appended', 'Document below'],
      },
      {
        basic: 'Read this',
        advanced: 'Please review',
        transcription: '/pliːz rɪˈvjuː/',
        wrong: ['Please respond', 'Please revise', 'Please confirm', 'Please update'],
      },
      {
        basic: 'I attached',
        advanced: 'I have appended',
        transcription: '/aɪ hæv əˈpendɪd/',
        wrong: ['I have attached', 'I have included', 'I have enclosed', 'I have added'],
      },
      {
        basic: 'Two files',
        advanced: 'Two documents enclosed',
        transcription: '/tuː ˈdɒkjuməns ɪnˈkloʊzd/',
        wrong: ['Two documents attached', 'Two documents included', 'Two documents appended', 'Two documents below'],
      },
      {
        basic: 'Missing file',
        advanced: 'Omitted in error',
        transcription: '/əˈmɪtɪd ɪn ˈerər/',
        wrong: ['Omitted in haste', 'Omitted in draft', 'Omitted in review', 'Omitted in transit'],
      },
    ],
  },
]
