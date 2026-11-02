// ============================================================
// ACTION — Antonym pairs (action word vs opposite action)
// Structure: 6 subcategories × 10 words
// basic = action word, advanced = its opposite
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
        transcription: '/dɪˈmɑːlɪʃ/',
        wrong: ['Deliver', 'Demand', 'Describe', 'Detect'],
      },
      {
        basic: 'Create',
        advanced: 'Obliterate',
        transcription: '/əˈblɪtəreɪt/',
        wrong: ['Obtain', 'Occupy', 'Offend', 'Observe'],
      },
      {
        basic: 'Assemble',
        advanced: 'Dismantle',
        transcription: '/dɪsˈmæntl/',
        wrong: ['Dismiss', 'Dispatch', 'Dispute', 'Distract'],
      },
      {
        basic: 'Produce',
        advanced: 'Consume',
        transcription: '/kənˈsuːm/',
        wrong: ['Contact', 'Continue', 'Convert', 'Convey'],
      },
      {
        basic: 'Construct',
        advanced: 'Raze',
        transcription: '/reɪz/',
        wrong: ['Reach', 'React', 'Recall', 'Reduce'],
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
        wrong: ['Wonder', 'Wrap', 'Write', 'Whistle'],
      },
      {
        basic: 'Repair',
        advanced: 'Wreck',
        transcription: '/rek/',
        wrong: ['Wrist', 'Wrong', 'Wheel', 'Whale'],
      },
      {
        basic: 'Ignite',
        advanced: 'Extinguish',
        transcription: '/ɪkˈstɪŋɡwɪʃ/',
        wrong: ['Exhibit', 'Exploit', 'Explore', 'Expose'],
      },
      {
        basic: 'Fill',
        advanced: 'Drain',
        transcription: '/dreɪn/',
        wrong: ['Dread', 'Dream', 'Drift', 'Draft'],
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
        wrong: ['Remain', 'Reveal', 'Review', 'Revise'],
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
        transcription: '/ˈeɡzɪt/',
        wrong: ['Expand', 'Expect', 'Explain', 'Explore'],
      },
      {
        basic: 'Soar',
        advanced: 'Plummet',
        transcription: '/ˈplʌmɪt/',
        wrong: ['Plunder', 'Plumber', 'Plumage', 'Plastic'],
      },
      {
        basic: 'Rush',
        advanced: 'Dawdle',
        transcription: '/ˈdɔːdl/',
        wrong: ['Dazzle', 'Dabble', 'Dangle', 'Doodle'],
      },
      {
        basic: 'Gather',
        advanced: 'Scatter',
        transcription: '/ˈskætər/',
        wrong: ['Schedule', 'Search', 'Select', 'Scorch'],
      },
      {
        basic: 'Connect',
        advanced: 'Sever',
        transcription: '/ˈsevər/',
        wrong: ['Settle', 'Shelter', 'Sweeten', 'Sustain'],
      },
      {
        basic: 'Expand',
        advanced: 'Shrink',
        transcription: '/ʃrɪŋk/',
        wrong: ['Shield', 'Shiver', 'Shatter', 'Shuffle'],
      },
      {
        basic: 'Open',
        advanced: 'Seal',
        transcription: '/siːl/',
        wrong: ['Search', 'Select', 'Send', 'Settle'],
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
        advanced: 'Clam up',
        transcription: '/ˌklæm ˈʌp/',
        wrong: ['Crack up', 'Cheer up', 'Cut up', 'Cover up'],
      },
      {
        basic: 'Shout',
        advanced: 'Whisper',
        transcription: '/ˈwɪspər/',
        wrong: ['Wonder', 'Witness', 'Withdraw', 'Wander'],
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
        advanced: 'Object',
        transcription: '/əbˈdʒekt/',
        wrong: ['Observe', 'Obtain', 'Occupy', 'Offend'],
      },
      {
        basic: 'Compliment',
        advanced: 'Insult',
        transcription: '/ɪnˈsʌlt/',
        wrong: ['Inform', 'Insist', 'Inspire', 'Intrude'],
      },
      {
        basic: 'Respond',
        advanced: 'Ignore',
        transcription: '/ɪɡˈnɔːr/',
        wrong: ['Ignite', 'Imagine', 'Impress', 'Inspect'],
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
        advanced: 'Conclude',
        transcription: '/kənˈkluːd/',
        wrong: ['Conduct', 'Confuse', 'Contain', 'Convince'],
      },
      {
        basic: 'Hire',
        advanced: 'Lay off',
        transcription: '/ˌleɪ ˈɔːf/',
        wrong: ['Lay out', 'Look off', 'Lift off', 'Log off'],
      },
      {
        basic: 'Delegate',
        advanced: 'Micromanage',
        transcription: '/ˌmaɪkroʊˈmænɪdʒ/',
        wrong: ['Mobilize', 'Motivate', 'Memorize', 'Moderate'],
      },
      {
        basic: 'Approve',
        advanced: 'Veto',
        transcription: '/ˈviːtoʊ/',
        wrong: ['Value', 'Vanish', 'Verify', 'Violate'],
      },
      {
        basic: 'Promote',
        advanced: 'Demote',
        transcription: '/diˈmoʊt/',
        wrong: ['Depend', 'Deploy', 'Describe', 'Deserve'],
      },
      {
        basic: 'Invest',
        advanced: 'Cash out',
        transcription: '/ˌkæʃ ˈaʊt/',
        wrong: ['Cut out', 'Check out', 'Crash out', 'Cool out'],
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
        transcription: '/ˌʃʌt ˈdaʊn/',
        wrong: ['Slow down', 'Step down', 'Sit down', 'Slam down'],
      },
      {
        basic: 'Launch',
        advanced: 'Scrap',
        transcription: '/skræp/',
        wrong: ['Scoop', 'Scrub', 'Scold', 'Scream'],
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
        basic: 'Notice',
        advanced: 'Overlook',
        transcription: '/ˌoʊvərˈlʊk/',
        wrong: ['Obtain', 'Occupy', 'Offend', 'Outline'],
      },
      {
        basic: 'Study',
        advanced: 'Slack off',
        transcription: '/ˌslæk ˈɔːf/',
        wrong: ['Sign off', 'Show off', 'Shut off', 'Switch off'],
      },
      {
        basic: 'Clarify',
        advanced: 'Confuse',
        transcription: '/kənˈfjuːz/',
        wrong: ['Conduct', 'Contain', 'Convince', 'Compose'],
      },
      {
        basic: 'Rehearse',
        advanced: 'Improvise',
        transcription: '/ˈɪmprəvaɪz/',
        wrong: ['Impress', 'Inspire', 'Inflate', 'Insulate'],
      },
      {
        basic: 'Master',
        advanced: 'Flounder',
        transcription: '/ˈflaʊndər/',
        wrong: ['Flatter', 'Flicker', 'Flinch', 'Flutter'],
      },
      {
        basic: 'Uncover',
        advanced: 'Bury',
        transcription: '/ˈberi/',
        wrong: ['Borrow', 'Bounce', 'Blossom', 'Banish'],
      },
      {
        basic: 'Improve',
        advanced: 'Deteriorate',
        transcription: '/dɪˈtɪriəreɪt/',
        wrong: ['Dedicate', 'Demonstrate', 'Deliberate', 'Decorate'],
      },
      {
        basic: 'Focus',
        advanced: 'Distract',
        transcription: '/dɪˈstrækt/',
        wrong: ['Distribute', 'Divide', 'Document', 'Draft'],
      },
      {
        basic: 'Understand',
        advanced: 'Misinterpret',
        transcription: '/ˌmɪsɪnˈtɜːrprɪt/',
        wrong: ['Misplace', 'Misspell', 'Misuse', 'Mislead'],
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
        advanced: 'Shut out',
        transcription: '/ˌʃʌt ˈaʊt/',
        wrong: ['Sell out', 'Sign out', 'Stand out', 'Sort out'],
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
        basic: 'Cheer',
        advanced: 'Heckle',
        transcription: '/ˈhekl/',
        wrong: ['Hassle', 'Hustle', 'Huddle', 'Handle'],
      },
      {
        basic: 'Respect',
        advanced: 'Belittle',
        transcription: '/bɪˈlɪtl/',
        wrong: ['Believe', 'Bargain', 'Bewilder', 'Befriend'],
      },
    ],
  },
]
