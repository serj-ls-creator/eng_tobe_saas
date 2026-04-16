// ============================================================
// ACTION — Antonym pairs (action word vs opposite action)
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

export const ACTION: Subcategory[] = [

  // ─────────────────────────────────────────
  // 1. CREATION
  // ─────────────────────────────────────────
  {
    id: 'creation',
    name: 'Creation',
    words: [
      {
        basic: 'Build',
        advanced: 'Demolish',
        transcription: '/dɪˈmɒlɪʃ/',
        wrong: ['Deliver', 'Demand', 'Describe', 'Detect'],
      },
      {
        basic: 'Create',
        advanced: 'Destroy',
        transcription: '/dɪˈstrɔɪ/',
        wrong: ['Discuss', 'Display', 'Divide', 'Draft'],
      },
      {
        basic: 'Design',
        advanced: 'Dismantle',
        transcription: '/dɪsˈmæntl/',
        wrong: ['Dismiss', 'Dispatch', 'Dispute', 'Dissolve'],
      },
      {
        basic: 'Assemble',
        advanced: 'Disassemble',
        transcription: '/ˌdɪsəˈsembl/',
        wrong: ['Discard', 'Disclose', 'Disconnect', 'Discourage'],
      },
      {
        basic: 'Produce',
        advanced: 'Consume',
        transcription: '/kənˈsjuːm/',
        wrong: ['Contact', 'Continue', 'Convert', 'Convey'],
      },
      {
        basic: 'Construct',
        advanced: 'Raze',
        transcription: '/reɪz/',
        wrong: ['Reach', 'React', 'Recall', 'Reduce'],
      },
      {
        basic: 'Compose',
        advanced: 'Destroy',
        transcription: '/dɪˈstrɔɪ/',
        wrong: ['Discuss', 'Display', 'Divide', 'Draft'],
      },
      {
        basic: 'Invent',
        advanced: 'Copy',
        transcription: '/ˈkɒpi/',
        wrong: ['Confirm', 'Connect', 'Consider', 'Contain'],
      },
      {
        basic: 'Plant',
        advanced: 'Uproot',
        transcription: '/ʌpˈruːt/',
        wrong: ['Update', 'Upgrade', 'Upload', 'Urge'],
      },
      {
        basic: 'Grow',
        advanced: 'Wither',
        transcription: '/ˈwɪðər/',
        wrong: ['Wonder', 'Worsen', 'Wrap', 'Write'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 2. MOVEMENT
  // ─────────────────────────────────────────
  {
    id: 'movement',
    name: 'Movement',
    words: [
      {
        basic: 'Push',
        advanced: 'Pull',
        transcription: '/pʊl/',
        wrong: ['Pause', 'Pass', 'Patch', 'Pick'],
      },
      {
        basic: 'Advance',
        advanced: 'Retreat',
        transcription: '/rɪˈtriːt/',
        wrong: ['Return', 'Reveal', 'Review', 'Revise'],
      },
      {
        basic: 'Arrive',
        advanced: 'Depart',
        transcription: '/dɪˈpɑːrt/',
        wrong: ['Depend', 'Deploy', 'Describe', 'Deserve'],
      },
      {
        basic: 'Enter',
        advanced: 'Exit',
        transcription: '/ˈeksɪt/',
        wrong: ['Expand', 'Expect', 'Explain', 'Explore'],
      },
      {
        basic: 'Rise',
        advanced: 'Descend',
        transcription: '/dɪˈsend/',
        wrong: ['Decide', 'Declare', 'Decline', 'Defend'],
      },
      {
        basic: 'Accelerate',
        advanced: 'Decelerate',
        transcription: '/diːˈseləreɪt/',
        wrong: ['Dedicate', 'Define', 'Delay', 'Deliver'],
      },
      {
        basic: 'Gather',
        advanced: 'Scatter',
        transcription: '/ˈskætər/',
        wrong: ['Schedule', 'Search', 'Select', 'Separate'],
      },
      {
        basic: 'Attach',
        advanced: 'Detach',
        transcription: '/dɪˈtætʃ/',
        wrong: ['Detect', 'Determine', 'Develop', 'Differ'],
      },
      {
        basic: 'Expand',
        advanced: 'Contract',
        transcription: '/ˈkɒntrækt/',
        wrong: ['Control', 'Convert', 'Correct', 'Create'],
      },
      {
        basic: 'Open',
        advanced: 'Seal',
        transcription: '/siːl/',
        wrong: ['Search', 'Secure', 'Select', 'Send'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 3. COMMUNICATION
  // ─────────────────────────────────────────
  {
    id: 'communication',
    name: 'Communication',
    words: [
      {
        basic: 'Speak',
        advanced: 'Stay silent',
        transcription: '/steɪ ˈsaɪlənt/',
        wrong: ['Stay active', 'Stay calm', 'Stay focused', 'Stay ready'],
      },
      {
        basic: 'Shout',
        advanced: 'Whisper',
        transcription: '/ˈwɪspər/',
        wrong: ['Wonder', 'Witness', 'Withdraw', 'Withhold'],
      },
      {
        basic: 'Reveal',
        advanced: 'Conceal',
        transcription: '/kənˈsiːl/',
        wrong: ['Confirm', 'Connect', 'Consider', 'Contain'],
      },
      {
        basic: 'Publish',
        advanced: 'Suppress',
        transcription: '/səˈpres/',
        wrong: ['Support', 'Surpass', 'Survive', 'Sustain'],
      },
      {
        basic: 'Announce',
        advanced: 'Withhold',
        transcription: '/wɪðˈhoʊld/',
        wrong: ['Withdraw', 'Witness', 'Wonder', 'Worsen'],
      },
      {
        basic: 'Praise',
        advanced: 'Criticize',
        transcription: '/ˈkrɪtɪsaɪz/',
        wrong: ['Calculate', 'Capture', 'Clarify', 'Classify'],
      },
      {
        basic: 'Accept',
        advanced: 'Reject',
        transcription: '/rɪˈdʒekt/',
        wrong: ['Release', 'Rely', 'Remain', 'Remove'],
      },
      {
        basic: 'Agree',
        advanced: 'Disagree',
        transcription: '/ˌdɪsəˈɡriː/',
        wrong: ['Discover', 'Discuss', 'Dismiss', 'Display'],
      },
      {
        basic: 'Ask',
        advanced: 'Answer',
        transcription: '/ˈɑːnsər/',
        wrong: ['Achieve', 'Acquire', 'Adapt', 'Address'],
      },
      {
        basic: 'Respond',
        advanced: 'Evade',
        transcription: '/ɪˈveɪd/',
        wrong: ['Evaluate', 'Examine', 'Exchange', 'Execute'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 4. WORK
  // ─────────────────────────────────────────
  {
    id: 'work',
    name: 'Work',
    words: [
      {
        basic: 'Start',
        advanced: 'Finish',
        transcription: '/ˈfɪnɪʃ/',
        wrong: ['Focus', 'Follow', 'Force', 'Form'],
      },
      {
        basic: 'Hire',
        advanced: 'Fire',
        transcription: '/faɪər/',
        wrong: ['Filter', 'Find', 'Fix', 'Flag'],
      },
      {
        basic: 'Assign',
        advanced: 'Revoke',
        transcription: '/rɪˈvoʊk/',
        wrong: ['Resolve', 'Respond', 'Restore', 'Retain'],
      },
      {
        basic: 'Approve',
        advanced: 'Reject',
        transcription: '/rɪˈdʒekt/',
        wrong: ['Relate', 'Release', 'Rely', 'Remove'],
      },
      {
        basic: 'Promote',
        advanced: 'Demote',
        transcription: '/dɪˈmoʊt/',
        wrong: ['Depend', 'Deploy', 'Describe', 'Deserve'],
      },
      {
        basic: 'Invest',
        advanced: 'Withdraw',
        transcription: '/wɪðˈdrɔː/',
        wrong: ['Withhold', 'Witness', 'Wonder', 'Worsen'],
      },
      {
        basic: 'Earn',
        advanced: 'Spend',
        transcription: '/spend/',
        wrong: ['Split', 'Spread', 'Stand', 'State'],
      },
      {
        basic: 'Succeed',
        advanced: 'Fail',
        transcription: '/feɪl/',
        wrong: ['Filter', 'Find', 'Fix', 'Focus'],
      },
      {
        basic: 'Activate',
        advanced: 'Shut down',
        transcription: '/ʃʌt daʊn/',
        wrong: ['Slow down', 'Step down', 'Break down', 'Calm down'],
      },
      {
        basic: 'Launch',
        advanced: 'Cancel',
        transcription: '/ˈkænsəl/',
        wrong: ['Capture', 'Carry', 'Cause', 'Change'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 5. LEARNING
  // ─────────────────────────────────────────
  {
    id: 'learning',
    name: 'Learning',
    words: [
      {
        basic: 'Learn',
        advanced: 'Forget',
        transcription: '/fərˈɡet/',
        wrong: ['Follow', 'Force', 'Form', 'Forward'],
      },
      {
        basic: 'Memorize',
        advanced: 'Overlook',
        transcription: '/ˌoʊvərˈlʊk/',
        wrong: ['Overcome', 'Override', 'Overrate', 'Overuse'],
      },
      {
        basic: 'Study',
        advanced: 'Neglect',
        transcription: '/nɪˈɡlekt/',
        wrong: ['Notice', 'Notify', 'Nurture', 'Navigate'],
      },
      {
        basic: 'Teach',
        advanced: 'Mislead',
        transcription: '/ˌmɪsˈliːd/',
        wrong: ['Misuse', 'Modify', 'Monitor', 'Motivate'],
      },
      {
        basic: 'Practice',
        advanced: 'Abandon',
        transcription: '/əˈbændən/',
        wrong: ['Absorb', 'Accept', 'Achieve', 'Acquire'],
      },
      {
        basic: 'Understand',
        advanced: 'Misunderstand',
        transcription: '/ˌmɪsʌndəˈstænd/',
        wrong: ['Misplace', 'Misread', 'Misuse', 'Misjudge'],
      },
      {
        basic: 'Discover',
        advanced: 'Conceal',
        transcription: '/kənˈsiːl/',
        wrong: ['Confirm', 'Connect', 'Consider', 'Contain'],
      },
      {
        basic: 'Improve',
        advanced: 'Regress',
        transcription: '/rɪˈɡres/',
        wrong: ['Reject', 'Release', 'Rely', 'Remove'],
      },
      {
        basic: 'Focus',
        advanced: 'Distract',
        transcription: '/dɪˈstrækt/',
        wrong: ['Distribute', 'Divide', 'Document', 'Draft'],
      },
      {
        basic: 'Absorb',
        advanced: 'Dismiss',
        transcription: '/dɪsˈmɪs/',
        wrong: ['Display', 'Dispute', 'Dissolve', 'Distribute'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 6. SOCIAL
  // ─────────────────────────────────────────
  {
    id: 'social',
    name: 'Social',
    words: [
      {
        basic: 'Help',
        advanced: 'Hinder',
        transcription: '/ˈhɪndər/',
        wrong: ['Handle', 'Harm', 'Harvest', 'Highlight'],
      },
      {
        basic: 'Unite',
        advanced: 'Divide',
        transcription: '/dɪˈvaɪd/',
        wrong: ['Discuss', 'Display', 'Dispute', 'Dissolve'],
      },
      {
        basic: 'Include',
        advanced: 'Exclude',
        transcription: '/ɪkˈskluːd/',
        wrong: ['Examine', 'Exchange', 'Execute', 'Expand'],
      },
      {
        basic: 'Trust',
        advanced: 'Betray',
        transcription: '/bɪˈtreɪ/',
        wrong: ['Believe', 'Belong', 'Benefit', 'Block'],
      },
      {
        basic: 'Protect',
        advanced: 'Endanger',
        transcription: '/ɪnˈdeɪndʒər/',
        wrong: ['Enforce', 'Engage', 'Enhance', 'Ensure'],
      },
      {
        basic: 'Forgive',
        advanced: 'Resent',
        transcription: '/rɪˈzent/',
        wrong: ['Reserve', 'Resolve', 'Respond', 'Restore'],
      },
      {
        basic: 'Welcome',
        advanced: 'Shun',
        transcription: '/ʃʌn/',
        wrong: ['Share', 'Shift', 'Show', 'Shrink'],
      },
      {
        basic: 'Cooperate',
        advanced: 'Obstruct',
        transcription: '/əbˈstrʌkt/',
        wrong: ['Obtain', 'Occupy', 'Offend', 'Omit'],
      },
      {
        basic: 'Encourage',
        advanced: 'Discourage',
        transcription: '/dɪsˈkʌrɪdʒ/',
        wrong: ['Discover', 'Discuss', 'Dismiss', 'Display'],
      },
      {
        basic: 'Respect',
        advanced: 'Disrespect',
        transcription: '/ˌdɪsrɪˈspekt/',
        wrong: ['Dismiss', 'Dispute', 'Dissolve', 'Distract'],
      },
    ],
  },
]
