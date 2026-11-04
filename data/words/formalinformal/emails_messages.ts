// ============================================================
// EMAILS & MESSAGES — Informal vs formal equivalents
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

export const EMAILS_MESSAGES: Subcategory[] = [

  // ─────────────────────────────────────────
  // 1. GREETINGS
  // ─────────────────────────────────────────
  {
    id: 'greetings',
    name: 'Greetings',
    words: [
      {
        basic: 'Hey there',
        advanced: 'Dear',
        transcription: '/dɪr/',
        wrong: ['Deep', 'Dense', 'Direct', 'Distinct'],
      },
      {
        basic: 'Hi guys',
        advanced: 'Colleagues',
        transcription: '/ˈkɑːliːɡz/',
        wrong: ['Calendars', 'Colleges', 'Collisions', 'Colonies'],
      },
      {
        basic: 'Dude',
        advanced: 'Sir',
        transcription: '/sɜːr/',
        wrong: ['Sip', 'Soil', 'Sink', 'Silk'],
      },
      {
        basic: 'Hey you',
        advanced: 'Recipient',
        transcription: '/rɪˈsɪpiənt/',
        wrong: ['Receipt', 'Recipe', 'Receptor', 'Reception'],
      },
      {
        basic: 'Boss',
        advanced: 'Supervisor',
        transcription: '/ˈsuːpərvaɪzər/',
        wrong: ['Supporter', 'Successor', 'Surveyor', 'Superstar'],
      },
      {
        basic: 'Pal',
        advanced: 'Associate',
        transcription: '/əˈsoʊsiət/',
        wrong: ['Assassin', 'Assurance', 'Assembly', 'Asset'],
      },
      {
        basic: 'Ma\'am',
        advanced: 'Madam',
        transcription: '/ˈmædəm/',
        wrong: ['Madman', 'Medal', 'Meadow', 'Margin'],
      },
      {
        basic: 'Miss or Mrs',
        advanced: 'Ms.',
        transcription: '/mɪz/',
        wrong: ['Mix', 'Mist', 'Mice', 'Mint'],
      },
      {
        basic: 'Neighbors',
        advanced: 'Residents',
        transcription: '/ˈrezɪdənts/',
        wrong: ['Relatives', 'Recipients', 'Referees', 'Reporters'],
      },
      {
        basic: 'Customers',
        advanced: 'Patrons',
        transcription: '/ˈpeɪtrənz/',
        wrong: ['Patterns', 'Parents', 'Partners', 'Patients'],
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
        basic: 'Ttyl',
        advanced: 'Sincerely',
        transcription: '/sɪnˈsɪrli/',
        wrong: ['Seriously', 'Separately', 'Specifically', 'Steadily'],
      },
      {
        basic: 'Take it easy',
        advanced: 'Cordially',
        transcription: '/ˈkɔːrdʒəli/',
        wrong: ['Carefully', 'Casually', 'Currently', 'Cautiously'],
      },
      {
        basic: 'Yours',
        advanced: 'Respectfully',
        transcription: '/rɪˈspektfəli/',
        wrong: ['Reliably', 'Remarkably', 'Repeatedly', 'Regrettably'],
      },
      {
        basic: 'Thx',
        advanced: 'Gratefully',
        transcription: '/ˈɡreɪtfəli/',
        wrong: ['Gracefully', 'Gradually', 'Generally', 'Gently'],
      },
      {
        basic: 'Looking forward',
        advanced: 'Anticipating',
        transcription: '/ænˈtɪsɪpeɪtɪŋ/',
        wrong: ['Appreciating', 'Accelerating', 'Accumulating', 'Associating'],
      },
      {
        basic: 'Peace',
        advanced: 'Warmly',
        transcription: '/ˈwɔːrmli/',
        wrong: ['Wisely', 'Wildly', 'Weekly', 'Wearily'],
      },
      {
        basic: 'Best',
        advanced: 'Best regards',
        transcription: '/ˌbest rɪˈɡɑːrdz/',
        wrong: ['Best friends', 'Best efforts', 'Best results', 'Best outcomes'],
      },
      {
        basic: 'PS',
        advanced: 'Postscript',
        transcription: '/ˈpoʊstskrɪpt/',
        wrong: ['Prescription', 'Postcard', 'Passport', 'Parchment'],
      },
      {
        basic: 'CC',
        advanced: 'Carbon copy',
        transcription: '/ˌkɑːrbən ˈkɑːpi/',
        wrong: ['Carbon cycle', 'Carbon dioxide', 'Carbon footprint', 'Carbon fiber'],
      },
      {
        basic: 'Sign-off',
        advanced: 'Valediction',
        transcription: '/ˌvælɪˈdɪkʃn/',
        wrong: ['Validation', 'Vindication', 'Verification', 'Vaccination'],
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
        basic: 'Send me',
        advanced: 'Forward',
        transcription: '/ˈfɔːrwərd/',
        wrong: ['Follow', 'Finish', 'Frame', 'Fasten'],
      },
      {
        basic: 'Tell me',
        advanced: 'Advise',
        transcription: '/ədˈvaɪz/',
        wrong: ['Adjust', 'Admire', 'Adopt', 'Apply'],
      },
      {
        basic: 'Check this',
        advanced: 'Review',
        transcription: '/rɪˈvjuː/',
        wrong: ['Revive', 'Rewind', 'Reveal', 'Remove'],
      },
      {
        basic: 'Write back',
        advanced: 'Respond',
        transcription: '/rɪˈspɑːnd/',
        wrong: ['Rescue', 'Refund', 'Retire', 'Remain'],
      },
      {
        basic: 'ASAP',
        advanced: 'Promptly',
        transcription: '/ˈprɑːmptli/',
        wrong: ['Patiently', 'Partially', 'Probably', 'Possibly'],
      },
      {
        basic: 'Hurry up',
        advanced: 'Expedite',
        transcription: '/ˈekspədaɪt/',
        wrong: ['Exhibit', 'Execute', 'Exceed', 'Exempt'],
      },
      {
        basic: 'Give me',
        advanced: 'Provide',
        transcription: '/prəˈvaɪd/',
        wrong: ['Prevent', 'Predict', 'Prepare', 'Protect'],
      },
      {
        basic: 'Do this',
        advanced: 'Complete',
        transcription: '/kəmˈpliːt/',
        wrong: ['Compete', 'Compile', 'Compare', 'Commit'],
      },
      {
        basic: 'I need',
        advanced: 'Request',
        transcription: '/rɪˈkwest/',
        wrong: ['Recall', 'Resolve', 'Retain', 'Reveal'],
      },
      {
        basic: 'Please',
        advanced: 'Kindly',
        transcription: '/ˈkaɪndli/',
        wrong: ['Kidnap', 'Kitchen', 'Kindle', 'Knuckle'],
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
        basic: 'Sorry but',
        advanced: 'Regrettably',
        transcription: '/rɪˈɡretəbli/',
        wrong: ['Reliably', 'Remarkably', 'Repeatedly', 'Respectfully'],
      },
      {
        basic: 'My mistake',
        advanced: 'Oversight',
        transcription: '/ˈoʊvərsaɪt/',
        wrong: ['Overhead', 'Overall', 'Overtime', 'Overdue'],
      },
      {
        basic: 'Oops',
        advanced: 'Inadvertently',
        transcription: '/ˌɪnədˈvɜːrtntli/',
        wrong: ['Independently', 'Individually', 'Informally', 'Initially'],
      },
      {
        basic: 'Too bad',
        advanced: 'Unfortunately',
        transcription: '/ʌnˈfɔːrtʃənətli/',
        wrong: ['Unexpectedly', 'Unnecessarily', 'Unusually', 'Unfairly'],
      },
      {
        basic: 'Running late',
        advanced: 'Delayed',
        transcription: '/dɪˈleɪd/',
        wrong: ['Deceived', 'Declined', 'Defeated', 'Defended'],
      },
      {
        basic: 'Scratch that',
        advanced: 'Retract',
        transcription: '/rɪˈtrækt/',
        wrong: ['Refract', 'Recast', 'React', 'Reduce'],
      },
      {
        basic: 'Typo',
        advanced: 'Error',
        transcription: '/ˈerər/',
        wrong: ['Earner', 'Elder', 'Eraser', 'Era'],
      },
      {
        basic: 'Excuse',
        advanced: 'Justification',
        transcription: '/ˌdʒʌstɪfɪˈkeɪʃn/',
        wrong: ['Jurisdiction', 'Judgment', 'Jealousy', 'Journalism'],
      },
      {
        basic: 'No worries',
        advanced: 'Understood',
        transcription: '/ˌʌndərˈstʊd/',
        wrong: ['Upgraded', 'Updated', 'Uploaded', 'Undone'],
      },
      {
        basic: 'Don\'t be mad',
        advanced: 'Forgiveness',
        transcription: '/fərˈɡɪvnəs/',
        wrong: ['Fairness', 'Fondness', 'Firmness', 'Fitness'],
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
        advanced: 'Notice',
        transcription: '/ˈnoʊtɪs/',
        wrong: ['Notion', 'Novice', 'Nuance', 'Notable'],
      },
      {
        basic: 'Quick update',
        advanced: 'Briefing',
        transcription: '/ˈbriːfɪŋ/',
        wrong: ['Breeding', 'Bridging', 'Briefcase', 'Bringing'],
      },
      {
        basic: 'Warning',
        advanced: 'Advisory',
        transcription: '/ədˈvaɪzəri/',
        wrong: ['Advisor', 'Adversary', 'Aviary', 'Armory'],
      },
      {
        basic: 'Just checking',
        advanced: 'Following up',
        transcription: '/ˌfɑːloʊɪŋ ˈʌp/',
        wrong: ['Falling up', 'Folding up', 'Filling up', 'Fixing up'],
      },
      {
        basic: 'Done',
        advanced: 'Resolved',
        transcription: '/rɪˈzɑːlvd/',
        wrong: ['Revealed', 'Reserved', 'Revised', 'Reduced'],
      },
      {
        basic: 'In progress',
        advanced: 'Underway',
        transcription: '/ˌʌndərˈweɪ/',
        wrong: ['Underused', 'Underrated', 'Undervalued', 'Undermined'],
      },
      {
        basic: 'On hold',
        advanced: 'Suspended',
        transcription: '/səˈspendɪd/',
        wrong: ['Sustained', 'Surpassed', 'Supported', 'Surrounded'],
      },
      {
        basic: 'Stuck',
        advanced: 'Stalled',
        transcription: '/stɔːld/',
        wrong: ['Stacked', 'Stalked', 'Stolen', 'Starved'],
      },
      {
        basic: 'Waiting',
        advanced: 'Pending',
        transcription: '/ˈpendɪŋ/',
        wrong: ['Pitching', 'Pushing', 'Parking', 'Packing'],
      },
      {
        basic: 'Btw',
        advanced: 'Incidentally',
        transcription: '/ˌɪnsɪˈdentəli/',
        wrong: ['Independently', 'Individually', 'Intentionally', 'Initially'],
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
        advanced: 'Enclosed',
        transcription: '/ɪnˈkloʊzd/',
        wrong: ['Enclave', 'Encoded', 'Endorsed', 'Endowed'],
      },
      {
        basic: 'Here it is',
        advanced: 'Herewith',
        transcription: '/hɪrˈwɪð/',
        wrong: ['Heretic', 'Hearsay', 'Heritage', 'Hermit'],
      },
      {
        basic: 'File',
        advanced: 'Document',
        transcription: '/ˈdɑːkjumənt/',
        wrong: ['Dormant', 'Dominant', 'Doctrine', 'Decimal'],
      },
      {
        basic: 'Pic',
        advanced: 'Image',
        transcription: '/ˈɪmɪdʒ/',
        wrong: ['Imagine', 'Impulse', 'Impact', 'Island'],
      },
      {
        basic: 'Zip file',
        advanced: 'Archive',
        transcription: '/ˈɑːrkaɪv/',
        wrong: ['Anchor', 'Airline', 'Antenna', 'Apron'],
      },
      {
        basic: 'Slides',
        advanced: 'Presentation',
        transcription: '/ˌprezənˈteɪʃn/',
        wrong: ['Preservation', 'Prescription', 'Prediction', 'Promotion'],
      },
      {
        basic: 'Rough draft',
        advanced: 'Preliminary',
        transcription: '/prɪˈlɪmɪneri/',
        wrong: ['Primary', 'Predatory', 'Preventive', 'Prophetic'],
      },
      {
        basic: 'Final copy',
        advanced: 'Definitive',
        transcription: '/dɪˈfɪnətɪv/',
        wrong: ['Dedicated', 'Defensive', 'Delicate', 'Descriptive'],
      },
      {
        basic: 'Missing',
        advanced: 'Omitted',
        transcription: '/oʊˈmɪtɪd/',
        wrong: ['Obtained', 'Occupied', 'Offended', 'Operated'],
      },
      {
        basic: 'Bonus',
        advanced: 'Supplementary',
        transcription: '/ˌsʌpləˈmentri/',
        wrong: ['Supervisory', 'Substantial', 'Satisfactory', 'Sedentary'],
      },
    ],
  },
]
