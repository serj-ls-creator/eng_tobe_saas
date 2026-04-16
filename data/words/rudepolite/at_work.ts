// ============================================================
// AT WORK — Rude/blunt vs polite/professional equivalents
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

export const AT_WORK: Subcategory[] = [

  // ─────────────────────────────────────────
  // 1. REQUESTS
  // ─────────────────────────────────────────
  {
    id: 'requests',
    name: 'Requests',
    words: [
      {
        basic: 'Demand',
        advanced: 'Request',
        transcription: '/rɪˈkwest/',
        wrong: ['Require', 'Respond', 'Restore', 'Retain'],
      },
      {
        basic: 'Do it now',
        advanced: 'When possible',
        transcription: '/wen ˈpɒsɪbl/',
        wrong: ['When ready', 'When needed', 'When free', 'When done'],
      },
      {
        basic: 'Give me',
        advanced: 'Could you share',
        transcription: '/kʊd juː ʃeər/',
        wrong: ['Could you send', 'Could you help', 'Could you check', 'Could you fix'],
      },
      {
        basic: 'Fix this',
        advanced: 'Please revise',
        transcription: '/pliːz rɪˈvaɪz/',
        wrong: ['Please review', 'Please respond', 'Please confirm', 'Please update'],
      },
      {
        basic: 'Hurry up',
        advanced: 'Prioritize',
        transcription: '/praɪˈɒrɪtaɪz/',
        wrong: ['Proceed', 'Produce', 'Promote', 'Propose'],
      },
      {
        basic: 'Do this',
        advanced: 'Would you mind',
        transcription: '/wʊd juː maɪnd/',
        wrong: ['Would you like', 'Would you help', 'Would you check', 'Would you try'],
      },
      {
        basic: 'Send it',
        advanced: 'Please forward',
        transcription: '/pliːz ˈfɔːrwərd/',
        wrong: ['Please follow', 'Please finish', 'Please find', 'Please fix'],
      },
      {
        basic: 'Tell me',
        advanced: 'Please advise',
        transcription: '/pliːz ədˈvaɪz/',
        wrong: ['Please assist', 'Please attend', 'Please approve', 'Please arrange'],
      },
      {
        basic: 'Need this',
        advanced: 'I would appreciate',
        transcription: '/aɪ wʊd əˈpriːʃieɪt/',
        wrong: ['I would accept', 'I would allow', 'I would advise', 'I would agree'],
      },
      {
        basic: 'Get it done',
        advanced: 'Please complete',
        transcription: '/pliːz kəmˈpliːt/',
        wrong: ['Please confirm', 'Please contact', 'Please continue', 'Please correct'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 2. DISAGREEMENT
  // ─────────────────────────────────────────
  {
    id: 'disagreement',
    name: 'Disagreement',
    words: [
      {
        basic: 'Wrong',
        advanced: 'Inaccurate',
        transcription: '/ɪnˈækjərɪt/',
        wrong: ['Incomplete', 'Inconsistent', 'Incorrect', 'Ineffective'],
      },
      {
        basic: 'Bad idea',
        advanced: 'Reconsidering',
        transcription: '/ˌriːkənˈsɪdərɪŋ/',
        wrong: ['Reviewing', 'Revising', 'Rethinking', 'Reassessing'],
      },
      {
        basic: 'No',
        advanced: 'Not feasible',
        transcription: '/nɒt ˈfiːzɪbl/',
        wrong: ['Not possible', 'Not ready', 'Not ideal', 'Not clear'],
      },
      {
        basic: 'Disagree',
        advanced: 'Have concerns',
        transcription: '/hæv kənˈsɜːrnz/',
        wrong: ['Have doubts', 'Have issues', 'Have questions', 'Have ideas'],
      },
      {
        basic: 'That fails',
        advanced: 'Needs improvement',
        transcription: '/niːdz ɪmˈpruːvmənt/',
        wrong: ['Needs revision', 'Needs review', 'Needs attention', 'Needs work'],
      },
      {
        basic: 'Pointless',
        advanced: 'Not aligned',
        transcription: '/nɒt əˈlaɪnd/',
        wrong: ['Not approved', 'Not confirmed', 'Not decided', 'Not finalized'],
      },
      {
        basic: 'Reject',
        advanced: 'Decline',
        transcription: '/dɪˈklaɪn/',
        wrong: ['Defend', 'Define', 'Delay', 'Deliver'],
      },
      {
        basic: 'Useless',
        advanced: 'Ineffective',
        transcription: '/ɪnɪˈfektɪv/',
        wrong: ['Incomplete', 'Inconsistent', 'Incorrect', 'Inaccurate'],
      },
      {
        basic: 'Stupid',
        advanced: 'Ill-advised',
        transcription: '/ˌɪl ədˈvaɪzd/',
        wrong: ['Ill-timed', 'Ill-suited', 'Ill-defined', 'Ill-prepared'],
      },
      {
        basic: 'Waste of time',
        advanced: 'Low priority',
        transcription: '/loʊ praɪˈɒrɪti/',
        wrong: ['Low impact', 'Low value', 'Low effort', 'Low risk'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 3. FEEDBACK
  // ─────────────────────────────────────────
  {
    id: 'feedback',
    name: 'Feedback',
    words: [
      {
        basic: 'Blunt',
        advanced: 'Tactful',
        transcription: '/ˈtæktfl/',
        wrong: ['Thoughtful', 'Tolerant', 'Trustworthy', 'Truthful'],
      },
      {
        basic: 'Complain',
        advanced: 'Raise concerns',
        transcription: '/reɪz kənˈsɜːrnz/',
        wrong: ['Raise issues', 'Raise doubts', 'Raise questions', 'Raise points'],
      },
      {
        basic: 'Criticize',
        advanced: 'Provide feedback',
        transcription: '/prəˈvaɪd ˈfiːdbæk/',
        wrong: ['Provide support', 'Provide guidance', 'Provide input', 'Provide help'],
      },
      {
        basic: 'Terrible',
        advanced: 'Below expectations',
        transcription: '/bɪˈloʊ ˌekspekˈteɪʃənz/',
        wrong: ['Below average', 'Below standard', 'Below target', 'Below par'],
      },
      {
        basic: 'Redo this',
        advanced: 'Please revisit',
        transcription: '/pliːz ˌriːˈvɪzɪt/',
        wrong: ['Please review', 'Please revise', 'Please respond', 'Please reconsider'],
      },
      {
        basic: 'Lazy work',
        advanced: 'Lacks effort',
        transcription: '/læks ˈefərt/',
        wrong: ['Lacks detail', 'Lacks focus', 'Lacks clarity', 'Lacks depth'],
      },
      {
        basic: 'Sloppy',
        advanced: 'Needs polish',
        transcription: '/niːdz ˈpɒlɪʃ/',
        wrong: ['Needs review', 'Needs revision', 'Needs attention', 'Needs work'],
      },
      {
        basic: 'Missed it',
        advanced: 'Overlooked',
        transcription: '/ˌoʊvərˈlʊkt/',
        wrong: ['Overrated', 'Overused', 'Overdone', 'Overruled'],
      },
      {
        basic: 'Not good',
        advanced: 'Room to grow',
        transcription: '/ruːm tə ɡroʊ/',
        wrong: ['Room to learn', 'Room to improve', 'Room to develop', 'Room to change'],
      },
      {
        basic: 'Awful',
        advanced: 'Unsatisfactory',
        transcription: '/ˌʌnsætɪsˈfæktəri/',
        wrong: ['Unsuccessful', 'Unproductive', 'Unprepared', 'Unprofessional'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 4. MEETINGS
  // ─────────────────────────────────────────
  {
    id: 'meetings',
    name: 'Meetings',
    words: [
      {
        basic: 'Boring',
        advanced: 'Let us refocus',
        transcription: '/let əs ˌriːˈfoʊkəs/',
        wrong: ['Let us restart', 'Let us rethink', 'Let us regroup', 'Let us reschedule'],
      },
      {
        basic: 'Shut up',
        advanced: 'Let others speak',
        transcription: '/let ˈʌðərz spiːk/',
        wrong: ['Let others share', 'Let others lead', 'Let others decide', 'Let others finish'],
      },
      {
        basic: 'Off topic',
        advanced: 'Not on agenda',
        transcription: '/nɒt ɒn əˈdʒendə/',
        wrong: ['Not on schedule', 'Not on track', 'Not on time', 'Not on point'],
      },
      {
        basic: 'Too long',
        advanced: 'Exceeds time',
        transcription: '/ɪkˈsiːdz taɪm/',
        wrong: ['Exceeds scope', 'Exceeds budget', 'Exceeds limit', 'Exceeds plan'],
      },
      {
        basic: 'Pointless meeting',
        advanced: 'Could be email',
        transcription: '/kʊd biː ˈiːmeɪl/',
        wrong: ['Could be call', 'Could be chat', 'Could be brief', 'Could be skipped'],
      },
      {
        basic: 'Late again',
        advanced: 'Punctuality issue',
        transcription: '/ˌpʌŋktʃuˈælɪti ˈɪʃuː/',
        wrong: ['Attendance issue', 'Scheduling issue', 'Timing issue', 'Planning issue'],
      },
      {
        basic: 'Skip it',
        advanced: 'Reschedule',
        transcription: '/ˌriːˈʃedjuːl/',
        wrong: ['Reconsider', 'Reassess', 'Reorganize', 'Redirect'],
      },
      {
        basic: 'Wrap up',
        advanced: 'Conclude',
        transcription: '/kənˈkluːd/',
        wrong: ['Confirm', 'Connect', 'Consider', 'Contain'],
      },
      {
        basic: 'Move on',
        advanced: 'Proceed',
        transcription: '/prəˈsiːd/',
        wrong: ['Produce', 'Promote', 'Propose', 'Protect'],
      },
      {
        basic: 'Agree already',
        advanced: 'Reach consensus',
        transcription: '/riːtʃ kənˈsensəs/',
        wrong: ['Reach agreement', 'Reach decision', 'Reach conclusion', 'Reach solution'],
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
        basic: 'Rude',
        advanced: 'Professional',
        transcription: '/prəˈfeʃənl/',
        wrong: ['Productive', 'Proactive', 'Practical', 'Precise'],
      },
      {
        basic: 'Aggressive',
        advanced: 'Assertive',
        transcription: '/əˈsɜːrtɪv/',
        wrong: ['Attentive', 'Authentic', 'Ambitious', 'Analytical'],
      },
      {
        basic: 'Sarcastic',
        advanced: 'Constructive',
        transcription: '/kənˈstrʌktɪv/',
        wrong: ['Consistent', 'Cooperative', 'Creative', 'Critical'],
      },
      {
        basic: 'Dismissive',
        advanced: 'Respectful',
        transcription: '/rɪˈspektfl/',
        wrong: ['Reliable', 'Resilient', 'Rational', 'Relaxed'],
      },
      {
        basic: 'Harsh',
        advanced: 'Diplomatic',
        transcription: '/ˌdɪpləˈmætɪk/',
        wrong: ['Decisive', 'Dedicated', 'Diligent', 'Directed'],
      },
      {
        basic: 'Cold',
        advanced: 'Approachable',
        transcription: '/əˈproʊtʃəbl/',
        wrong: ['Adaptable', 'Accountable', 'Achievable', 'Actionable'],
      },
      {
        basic: 'Bossy',
        advanced: 'Collaborative',
        transcription: '/kəˈlæbərətɪv/',
        wrong: ['Competitive', 'Confident', 'Cautious', 'Creative'],
      },
      {
        basic: 'Condescending',
        advanced: 'Inclusive',
        transcription: '/ɪnˈkluːsɪv/',
        wrong: ['Innovative', 'Insightful', 'Inspiring', 'Intentional'],
      },
      {
        basic: 'Blaming',
        advanced: 'Accountable',
        transcription: '/əˈkaʊntəbl/',
        wrong: ['Adaptable', 'Approachable', 'Achievable', 'Actionable'],
      },
      {
        basic: 'Passive-aggressive',
        advanced: 'Transparent',
        transcription: '/trænsˈpærənt/',
        wrong: ['Trustworthy', 'Thoughtful', 'Tolerant', 'Truthful'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 6. APOLOGY
  // ─────────────────────────────────────────
  {
    id: 'apology',
    name: 'Apology',
    words: [
      {
        basic: 'My bad',
        advanced: 'I apologize',
        transcription: '/aɪ əˈpɒlədʒaɪz/',
        wrong: ['I accept', 'I agree', 'I admit', 'I advise'],
      },
      {
        basic: 'Oops',
        advanced: 'My sincere apologies',
        transcription: '/maɪ sɪnˈsɪər əˈpɒlədʒɪz/',
        wrong: ['My sincere thanks', 'My sincere regards', 'My sincere wishes', 'My sincere greetings'],
      },
      {
        basic: 'Not my fault',
        advanced: 'Take ownership',
        transcription: '/teɪk ˈoʊnərʃɪp/',
        wrong: ['Take action', 'Take charge', 'Take control', 'Take note'],
      },
      {
        basic: 'Whatever',
        advanced: 'Acknowledged',
        transcription: '/əkˈnɒlɪdʒd/',
        wrong: ['Adapted', 'Admired', 'Admitted', 'Adopted'],
      },
      {
        basic: 'Sorry',
        advanced: 'Sincerely sorry',
        transcription: '/sɪnˈsɪərli ˈsɒri/',
        wrong: ['Deeply sorry', 'Truly sorry', 'Genuinely sorry', 'Formally sorry'],
      },
      {
        basic: 'Forget it',
        advanced: 'Let us move forward',
        transcription: '/let əs muːv ˈfɔːrwərd/',
        wrong: ['Let us proceed', 'Let us continue', 'Let us resolve', 'Let us discuss'],
      },
      {
        basic: 'Fix it yourself',
        advanced: 'I will rectify',
        transcription: '/aɪ wɪl ˈrektɪfaɪ/',
        wrong: ['I will review', 'I will respond', 'I will revise', 'I will resolve'],
      },
      {
        basic: 'Not ideal',
        advanced: 'Regret the error',
        transcription: '/rɪˈɡret ðɪ ˈerər/',
        wrong: ['Regret the delay', 'Regret the issue', 'Regret the change', 'Regret the outcome'],
      },
      {
        basic: 'Blame others',
        advanced: 'Accept responsibility',
        transcription: '/əkˈsept rɪˌspɒnsɪˈbɪlɪti/',
        wrong: ['Accept feedback', 'Accept criticism', 'Accept changes', 'Accept results'],
      },
      {
        basic: 'Move on',
        advanced: 'Make amends',
        transcription: '/meɪk əˈmendz/',
        wrong: ['Make changes', 'Make progress', 'Make decisions', 'Make adjustments'],
      },
    ],
  },
]
