// ============================================================
// IN CONFLICT — Aggressive/blunt vs diplomatic equivalents
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

export const IN_CONFLICT: Subcategory[] = [

  // ─────────────────────────────────────────
  // 1. DISAGREEING
  // ─────────────────────────────────────────
  {
    id: 'disagreeing',
    name: 'Disagreeing',
    words: [
      {
        basic: 'Wrong',
        advanced: 'Mistaken',
        transcription: '/mɪˈsteɪkən/',
        wrong: ['Misused', 'Misplaced', 'Misread', 'Misjudged'],
      },
      {
        basic: 'No way',
        advanced: 'I beg to differ',
        transcription: '/aɪ beɡ tə ˈdɪfər/',
        wrong: ['I beg to ask', 'I beg to note', 'I beg to add', 'I beg to say'],
      },
      {
        basic: 'Nonsense',
        advanced: 'Unfounded',
        transcription: '/ʌnˈfaʊndɪd/',
        wrong: ['Unfinished', 'Unfocused', 'Unforced', 'Unformed'],
      },
      {
        basic: 'Ridiculous',
        advanced: 'Unreasonable',
        transcription: '/ʌnˈriːzənəbl/',
        wrong: ['Unreliable', 'Unresolved', 'Unrelated', 'Unrecognized'],
      },
      {
        basic: 'That is false',
        advanced: 'Factually incorrect',
        transcription: '/ˈfæktʃuəli ɪnˈkɒrekt/',
        wrong: ['Factually unclear', 'Factually missing', 'Factually weak', 'Factually vague'],
      },
      {
        basic: 'Disagree',
        advanced: 'Respectfully differ',
        transcription: '/rɪˈspektfəli ˈdɪfər/',
        wrong: ['Respectfully decline', 'Respectfully refuse', 'Respectfully reject', 'Respectfully withdraw'],
      },
      {
        basic: 'Not true',
        advanced: 'Inaccurate',
        transcription: '/ɪnˈækjərɪt/',
        wrong: ['Incomplete', 'Inconsistent', 'Incorrect', 'Ineffective'],
      },
      {
        basic: 'Absurd',
        advanced: 'Implausible',
        transcription: '/ɪmˈplɔːzɪbl/',
        wrong: ['Impractical', 'Imprecise', 'Improper', 'Impulsive'],
      },
      {
        basic: 'Lie',
        advanced: 'Misleading',
        transcription: '/ˌmɪsˈliːdɪŋ/',
        wrong: ['Misusing', 'Misplacing', 'Misreading', 'Misjudging'],
      },
      {
        basic: 'Stupid idea',
        advanced: 'Ill-conceived',
        transcription: '/ˌɪl kənˈsiːvd/',
        wrong: ['Ill-timed', 'Ill-suited', 'Ill-defined', 'Ill-prepared'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 2. BLAMING
  // ─────────────────────────────────────────
  {
    id: 'blaming',
    name: 'Blaming',
    words: [
      {
        basic: 'Blame',
        advanced: 'Address',
        transcription: '/əˈdres/',
        wrong: ['Adjust', 'Achieve', 'Acquire', 'Agree'],
      },
      {
        basic: 'Your fault',
        advanced: 'Shared responsibility',
        transcription: '/ʃeərd rɪˌspɒnsɪˈbɪlɪti/',
        wrong: ['Shared decision', 'Shared outcome', 'Shared effort', 'Shared result'],
      },
      {
        basic: 'You caused this',
        advanced: 'Contributing factor',
        transcription: '/kənˈtrɪbjuːtɪŋ ˈfæktər/',
        wrong: ['Contributing issue', 'Contributing error', 'Contributing problem', 'Contributing cause'],
      },
      {
        basic: 'Accuse',
        advanced: 'Raise concern',
        transcription: '/reɪz kənˈsɜːrn/',
        wrong: ['Raise issue', 'Raise doubt', 'Raise question', 'Raise point'],
      },
      {
        basic: 'Screw up',
        advanced: 'Oversight',
        transcription: '/ˈoʊvərsaɪt/',
        wrong: ['Overuse', 'Overrate', 'Override', 'Overrule'],
      },
      {
        basic: 'Incompetent',
        advanced: 'Needs development',
        transcription: '/niːdz dɪˈveləpmənt/',
        wrong: ['Needs improvement', 'Needs revision', 'Needs review', 'Needs attention'],
      },
      {
        basic: 'Useless',
        advanced: 'Underperforming',
        transcription: '/ˌʌndərpərˈfɔːrmɪŋ/',
        wrong: ['Underestimating', 'Undervaluing', 'Underutilizing', 'Undermining'],
      },
      {
        basic: 'Careless',
        advanced: 'Lacking diligence',
        transcription: '/ˈlækɪŋ ˈdɪlɪdʒəns/',
        wrong: ['Lacking focus', 'Lacking effort', 'Lacking clarity', 'Lacking depth'],
      },
      {
        basic: 'Irresponsible',
        advanced: 'Unaccountable',
        transcription: '/ˌʌnəˈkaʊntəbl/',
        wrong: ['Unadaptable', 'Unapproachable', 'Unachievable', 'Unactionable'],
      },
      {
        basic: 'Negligent',
        advanced: 'Inattentive',
        transcription: '/ɪnəˈtentɪv/',
        wrong: ['Inactive', 'Inadequate', 'Inaccurate', 'Incomplete'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 3. DEMANDING
  // ─────────────────────────────────────────
  {
    id: 'demanding',
    name: 'Demanding',
    words: [
      {
        basic: 'Do it now',
        advanced: 'Urgently needed',
        transcription: '/ˈɜːrdʒəntli ˈniːdɪd/',
        wrong: ['Urgently wanted', 'Urgently required', 'Urgently requested', 'Urgently expected'],
      },
      {
        basic: 'Must',
        advanced: 'Essential',
        transcription: '/ɪˈsenʃl/',
        wrong: ['Effective', 'Efficient', 'Ethical', 'Extreme'],
      },
      {
        basic: 'Now',
        advanced: 'Immediately',
        transcription: '/ɪˈmiːdiətli/',
        wrong: ['Importantly', 'Impressively', 'Independently', 'Individually'],
      },
      {
        basic: 'Fix it',
        advanced: 'Resolve promptly',
        transcription: '/rɪˈzɒlv ˈprɒmptli/',
        wrong: ['Resolve quickly', 'Resolve urgently', 'Resolve directly', 'Resolve fully'],
      },
      {
        basic: 'Give me',
        advanced: 'I require',
        transcription: '/aɪ rɪˈkwaɪər/',
        wrong: ['I request', 'I respond', 'I restore', 'I retain'],
      },
      {
        basic: 'Comply',
        advanced: 'Adhere to',
        transcription: '/ədˈhɪər tə/',
        wrong: ['Adjust to', 'Achieve to', 'Acquire to', 'Agree to'],
      },
      {
        basic: 'Obey',
        advanced: 'Follow protocol',
        transcription: '/ˈfɒloʊ ˈproʊtəkɒl/',
        wrong: ['Follow procedure', 'Follow guidelines', 'Follow rules', 'Follow standards'],
      },
      {
        basic: 'No excuses',
        advanced: 'Accountability expected',
        transcription: '/əˌkaʊntəˈbɪlɪti ɪkˈspektɪd/',
        wrong: ['Accountability needed', 'Accountability required', 'Accountability demanded', 'Accountability assumed'],
      },
      {
        basic: 'Deadline',
        advanced: 'Time-sensitive',
        transcription: '/ˈtaɪm ˈsensɪtɪv/',
        wrong: ['Time-limited', 'Time-bound', 'Time-critical', 'Time-based'],
      },
      {
        basic: 'No choice',
        advanced: 'Non-negotiable',
        transcription: '/ˌnɒn nɪˈɡoʊʃiəbl/',
        wrong: ['Non-optional', 'Non-flexible', 'Non-adjustable', 'Non-changeable'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 4. REACTING
  // ─────────────────────────────────────────
  {
    id: 'reacting',
    name: 'Reacting',
    words: [
      {
        basic: 'Furious',
        advanced: 'Deeply concerned',
        transcription: '/ˈdiːpli kənˈsɜːrnd/',
        wrong: ['Deeply troubled', 'Deeply upset', 'Deeply worried', 'Deeply affected'],
      },
      {
        basic: 'Outraged',
        advanced: 'Strongly opposed',
        transcription: '/ˈstrɒŋli əˈpoʊzd/',
        wrong: ['Strongly affected', 'Strongly concerned', 'Strongly troubled', 'Strongly upset'],
      },
      {
        basic: 'Shocked',
        advanced: 'Taken aback',
        transcription: '/ˈteɪkən əˈbæk/',
        wrong: ['Taken apart', 'Taken away', 'Taken down', 'Taken over'],
      },
      {
        basic: 'Upset',
        advanced: 'Displeased',
        transcription: '/dɪsˈpliːzd/',
        wrong: ['Dismissed', 'Displayed', 'Disputed', 'Dissolved'],
      },
      {
        basic: 'Annoyed',
        advanced: 'Frustrated',
        transcription: '/frʌˈstreɪtɪd/',
        wrong: ['Fulfilled', 'Fascinated', 'Fearful', 'Focused'],
      },
      {
        basic: 'Livid',
        advanced: 'Highly dissatisfied',
        transcription: '/ˈhaɪli ˌdɪssætɪsˈfaɪd/',
        wrong: ['Highly concerned', 'Highly troubled', 'Highly upset', 'Highly affected'],
      },
      {
        basic: 'Disgusted',
        advanced: 'Deeply offended',
        transcription: '/ˈdiːpli əˈfendɪd/',
        wrong: ['Deeply troubled', 'Deeply upset', 'Deeply worried', 'Deeply affected'],
      },
      {
        basic: 'Snapping',
        advanced: 'Losing composure',
        transcription: '/ˈluːzɪŋ kəmˈpoʊʒər/',
        wrong: ['Losing patience', 'Losing focus', 'Losing control', 'Losing interest'],
      },
      {
        basic: 'Exploding',
        advanced: 'Overwhelmed',
        transcription: '/ˌoʊvərˈwelmd/',
        wrong: ['Overrated', 'Overused', 'Overdone', 'Overruled'],
      },
      {
        basic: 'Raging',
        advanced: 'Intensely frustrated',
        transcription: '/ɪnˈtensli frʌˈstreɪtɪd/',
        wrong: ['Intensely concerned', 'Intensely troubled', 'Intensely upset', 'Intensely affected'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 5. TONE
  // ─────────────────────────────────────────
  {
    id: 'tone',
    name: 'Tone',
    words: [
      {
        basic: 'Aggressive',
        advanced: 'Firm',
        transcription: '/fɜːrm/',
        wrong: ['Fair', 'Fast', 'Fine', 'Free'],
      },
      {
        basic: 'Hostile',
        advanced: 'Direct',
        transcription: '/dɪˈrekt/',
        wrong: ['Decent', 'Defined', 'Devoted', 'Driven'],
      },
      {
        basic: 'Sarcastic',
        advanced: 'Candid',
        transcription: '/ˈkændɪd/',
        wrong: ['Capable', 'Cautious', 'Cheerful', 'Consistent'],
      },
      {
        basic: 'Threatening',
        advanced: 'Assertive',
        transcription: '/əˈsɜːrtɪv/',
        wrong: ['Attentive', 'Authentic', 'Ambitious', 'Analytical'],
      },
      {
        basic: 'Condescending',
        advanced: 'Measured',
        transcription: '/ˈmeʒərd/',
        wrong: ['Mindful', 'Modest', 'Motivated', 'Meaningful'],
      },
      {
        basic: 'Dismissive',
        advanced: 'Composed',
        transcription: '/kəmˈpoʊzd/',
        wrong: ['Cautious', 'Capable', 'Cheerful', 'Consistent'],
      },
      {
        basic: 'Blunt',
        advanced: 'Frank',
        transcription: '/fræŋk/',
        wrong: ['Fair', 'Fast', 'Fine', 'Free'],
      },
      {
        basic: 'Harsh',
        advanced: 'Straightforward',
        transcription: '/ˈstreɪtfɔːrwərd/',
        wrong: ['Structured', 'Successful', 'Supportive', 'Sustainable'],
      },
      {
        basic: 'Cold',
        advanced: 'Neutral',
        transcription: '/ˈnjuːtrəl/',
        wrong: ['Notable', 'Noticed', 'Nurtured', 'Navigated'],
      },
      {
        basic: 'Rude',
        advanced: 'Tactful',
        transcription: '/ˈtæktfl/',
        wrong: ['Thoughtful', 'Tolerant', 'Trustworthy', 'Truthful'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 6. RESOLVING
  // ─────────────────────────────────────────
  {
    id: 'resolving',
    name: 'Resolving',
    words: [
      {
        basic: 'Give up',
        advanced: 'Compromise',
        transcription: '/ˈkɒmprəmaɪz/',
        wrong: ['Compete', 'Complete', 'Compose', 'Compress'],
      },
      {
        basic: 'Back off',
        advanced: 'De-escalate',
        transcription: '/diː ˈeskəleɪt/',
        wrong: ['De-activate', 'De-centralize', 'De-construct', 'De-regulate'],
      },
      {
        basic: 'Drop it',
        advanced: 'Move forward',
        transcription: '/muːv ˈfɔːrwərd/',
        wrong: ['Move ahead', 'Move along', 'Move past', 'Move beyond'],
      },
      {
        basic: 'Fine',
        advanced: 'Mutually agreed',
        transcription: '/ˈmjuːtʃuəli əˈɡriːd/',
        wrong: ['Mutually decided', 'Mutually confirmed', 'Mutually accepted', 'Mutually resolved'],
      },
      {
        basic: 'Deal with it',
        advanced: 'Address the issue',
        transcription: '/əˈdres ðɪ ˈɪʃuː/',
        wrong: ['Address the problem', 'Address the concern', 'Address the matter', 'Address the conflict'],
      },
      {
        basic: 'Settle',
        advanced: 'Reach resolution',
        transcription: '/riːtʃ ˌrezəˈluːʃən/',
        wrong: ['Reach agreement', 'Reach decision', 'Reach conclusion', 'Reach consensus'],
      },
      {
        basic: 'Calm down',
        advanced: 'Regain composure',
        transcription: '/rɪˈɡeɪn kəmˈpoʊʒər/',
        wrong: ['Regain patience', 'Regain focus', 'Regain control', 'Regain interest'],
      },
      {
        basic: 'Apologize',
        advanced: 'Acknowledge fault',
        transcription: '/əkˈnɒlɪdʒ fɔːlt/',
        wrong: ['Acknowledge error', 'Acknowledge issue', 'Acknowledge problem', 'Acknowledge concern'],
      },
      {
        basic: 'Talk it out',
        advanced: 'Open dialogue',
        transcription: '/ˈoʊpən ˈdaɪəlɒɡ/',
        wrong: ['Open discussion', 'Open debate', 'Open forum', 'Open conversation'],
      },
      {
        basic: 'Fix it',
        advanced: 'Remediate',
        transcription: '/rɪˈmiːdieɪt/',
        wrong: ['Relocate', 'Renovate', 'Replicate', 'Represent'],
      },
    ],
  },
]
