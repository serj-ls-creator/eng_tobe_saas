// ============================================================
// EMOTIONS & REACTIONS — Slang emotion words vs standard equivalents
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

export const EMOTIONS_REACTIONS: Subcategory[] = [

  // ─────────────────────────────────────────
  // 1. POSITIVE
  // ─────────────────────────────────────────
  {
    id: 'positive',
    name: 'Positive',
    words: [
      {
        basic: 'Hyped',
        advanced: 'Excited',
        transcription: '/ɪkˈsaɪtɪd/',
        wrong: ['Exhausted', 'Envious', 'Empathetic', 'Eager'],
      },
      {
        basic: 'Stoked',
        advanced: 'Thrilled',
        transcription: '/θrɪld/',
        wrong: ['Troubled', 'Timid', 'Tolerant', 'Tense'],
      },
      {
        basic: 'Pumped',
        advanced: 'Enthusiastic',
        transcription: '/ɪnˌθjuːziˈæstɪk/',
        wrong: ['Efficient', 'Empathetic', 'Ethical', 'Extreme'],
      },
      {
        basic: 'Vibing',
        advanced: 'Content',
        transcription: '/ˈkɒntent/',
        wrong: ['Cautious', 'Capable', 'Cheerful', 'Consistent'],
      },
      {
        basic: 'Gassed',
        advanced: 'Elated',
        transcription: '/ɪˈleɪtɪd/',
        wrong: ['Exhausted', 'Envious', 'Empathetic', 'Eager'],
      },
      {
        basic: 'Buzzing',
        advanced: 'Exhilarated',
        transcription: '/ɪɡˈzɪləreɪtɪd/',
        wrong: ['Examined', 'Exchanged', 'Executed', 'Expanded'],
      },
      {
        basic: 'Living',
        advanced: 'Fulfilled',
        transcription: '/fʊlˈfɪld/',
        wrong: ['Focused', 'Fascinated', 'Fearful', 'Frustrated'],
      },
      {
        basic: 'Blessed',
        advanced: 'Grateful',
        transcription: '/ˈɡreɪtfl/',
        wrong: ['Graceful', 'Greedy', 'Grounded', 'Genuine'],
      },
      {
        basic: 'Chuffed',
        advanced: 'Pleased',
        transcription: '/pliːzd/',
        wrong: ['Pressed', 'Proud', 'Passive', 'Peculiar'],
      },
      {
        basic: 'On cloud nine',
        advanced: 'Overjoyed',
        transcription: '/ˌoʊvərˈdʒɔɪd/',
        wrong: ['Overrated', 'Overused', 'Overdone', 'Overruled'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 2. NEGATIVE
  // ─────────────────────────────────────────
  {
    id: 'negative',
    name: 'Negative',
    words: [
      {
        basic: 'Salty',
        advanced: 'Bitter',
        transcription: '/ˈbɪtər/',
        wrong: ['Bold', 'Brave', 'Brief', 'Bright'],
      },
      {
        basic: 'Pressed',
        advanced: 'Upset',
        transcription: '/ʌpˈset/',
        wrong: ['Upbeat', 'Upfront', 'Upright', 'Upgrade'],
      },
      {
        basic: 'Sour',
        advanced: 'Resentful',
        transcription: '/rɪˈzentfl/',
        wrong: ['Reliable', 'Resilient', 'Rational', 'Relaxed'],
      },
      {
        basic: 'Bummed',
        advanced: 'Disappointed',
        transcription: '/ˌdɪsəˈpɔɪntɪd/',
        wrong: ['Discouraged', 'Disturbed', 'Distracted', 'Disrupted'],
      },
      {
        basic: 'Gutted',
        advanced: 'Devastated',
        transcription: '/ˈdevəsteɪtɪd/',
        wrong: ['Devoted', 'Dignified', 'Diligent', 'Directed'],
      },
      {
        basic: 'Salty',
        advanced: 'Irritated',
        transcription: '/ˈɪrɪteɪtɪd/',
        wrong: ['Inspired', 'Interested', 'Involved', 'Impressed'],
      },
      {
        basic: 'Triggered',
        advanced: 'Provoked',
        transcription: '/prəˈvoʊkt/',
        wrong: ['Proceeded', 'Produced', 'Promoted', 'Protected'],
      },
      {
        basic: 'Salty',
        advanced: 'Envious',
        transcription: '/ˈenviəs/',
        wrong: ['Elated', 'Empathetic', 'Engaged', 'Enthusiastic'],
      },
      {
        basic: 'Miffed',
        advanced: 'Annoyed',
        transcription: '/əˈnɔɪd/',
        wrong: ['Adapted', 'Admired', 'Admitted', 'Adopted'],
      },
      {
        basic: 'Fuming',
        advanced: 'Furious',
        transcription: '/ˈfjʊəriəs/',
        wrong: ['Fearful', 'Frustrated', 'Fulfilled', 'Fascinated'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 3. SURPRISE
  // ─────────────────────────────────────────
  {
    id: 'surprise',
    name: 'Surprise',
    words: [
      {
        basic: 'Shook',
        advanced: 'Shocked',
        transcription: '/ʃɒkt/',
        wrong: ['Shared', 'Shifted', 'Shown', 'Shrunk'],
      },
      {
        basic: 'Shook',
        advanced: 'Stunned',
        transcription: '/stʌnd/',
        wrong: ['Stubborn', 'Skeptical', 'Sensitive', 'Spontaneous'],
      },
      {
        basic: 'Gagged',
        advanced: 'Astonished',
        transcription: '/əˈstɒnɪʃt/',
        wrong: ['Ambitious', 'Anxious', 'Absorbed', 'Amused'],
      },
      {
        basic: 'Shook',
        advanced: 'Speechless',
        transcription: '/ˈspiːtʃləs/',
        wrong: ['Stubborn', 'Skeptical', 'Sensitive', 'Spontaneous'],
      },
      {
        basic: 'Mindblown',
        advanced: 'Astounded',
        transcription: '/əˈstaʊndɪd/',
        wrong: ['Ambitious', 'Anxious', 'Absorbed', 'Amused'],
      },
      {
        basic: 'Caught off guard',
        advanced: 'Unprepared',
        transcription: '/ˌʌnprɪˈpeərd/',
        wrong: ['Unproductive', 'Unsuccessful', 'Unsatisfactory', 'Unprofessional'],
      },
      {
        basic: 'Floored',
        advanced: 'Overwhelmed',
        transcription: '/ˌoʊvərˈwelmd/',
        wrong: ['Overrated', 'Overused', 'Overdone', 'Overruled'],
      },
      {
        basic: 'Shook',
        advanced: 'Taken aback',
        transcription: '/ˈteɪkən əˈbæk/',
        wrong: ['Taken apart', 'Taken away', 'Taken down', 'Taken over'],
      },
      {
        basic: 'Wowed',
        advanced: 'Impressed',
        transcription: '/ɪmˈprest/',
        wrong: ['Inspired', 'Interested', 'Involved', 'Informed'],
      },
      {
        basic: 'Gobsmacked',
        advanced: 'Dumbfounded',
        transcription: '/ˈdʌmfaʊndɪd/',
        wrong: ['Devoted', 'Dignified', 'Diligent', 'Directed'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 4. INTENSITY
  // ─────────────────────────────────────────
  {
    id: 'intensity',
    name: 'Intensity',
    words: [
      {
        basic: 'Dead',
        advanced: 'Exhausted',
        transcription: '/ɪɡˈzɔːstɪd/',
        wrong: ['Elated', 'Envious', 'Eager', 'Empowered'],
      },
      {
        basic: 'Dying',
        advanced: 'Overwhelmed',
        transcription: '/ˌoʊvərˈwelmd/',
        wrong: ['Overrated', 'Overused', 'Overdone', 'Overruled'],
      },
      {
        basic: 'Obsessed',
        advanced: 'Captivated',
        transcription: '/ˈkæptɪveɪtɪd/',
        wrong: ['Calculated', 'Captured', 'Carried', 'Caused'],
      },
      {
        basic: 'Screaming',
        advanced: 'Ecstatic',
        transcription: '/ɪkˈstætɪk/',
        wrong: ['Effective', 'Efficient', 'Ethical', 'Extreme'],
      },
      {
        basic: 'Losing it',
        advanced: 'Overwhelmed',
        transcription: '/ˌoʊvərˈwelmd/',
        wrong: ['Overrated', 'Overused', 'Overdone', 'Overruled'],
      },
      {
        basic: 'Freaking out',
        advanced: 'Panicking',
        transcription: '/ˈpænɪkɪŋ/',
        wrong: ['Patient', 'Peaceful', 'Perceptive', 'Persistent'],
      },
      {
        basic: 'Losing my mind',
        advanced: 'Distressed',
        transcription: '/dɪˈstrest/',
        wrong: ['Distributed', 'Divided', 'Documented', 'Drafted'],
      },
      {
        basic: 'Can not even',
        advanced: 'Speechless',
        transcription: '/ˈspiːtʃləs/',
        wrong: ['Stubborn', 'Skeptical', 'Sensitive', 'Spontaneous'],
      },
      {
        basic: 'So done',
        advanced: 'Exasperated',
        transcription: '/ɪɡˈzæspəreɪtɪd/',
        wrong: ['Examined', 'Exchanged', 'Executed', 'Expanded'],
      },
      {
        basic: 'Shaking',
        advanced: 'Trembling',
        transcription: '/ˈtremblɪŋ/',
        wrong: ['Tracking', 'Training', 'Transferring', 'Transforming'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 5. SOCIAL
  // ─────────────────────────────────────────
  {
    id: 'social',
    name: 'Social',
    words: [
      {
        basic: 'Awkward',
        advanced: 'Uncomfortable',
        transcription: '/ʌnˈkʌmftəbl/',
        wrong: ['Unacceptable', 'Unavoidable', 'Unachievable', 'Unapproachable'],
      },
      {
        basic: 'Cringe',
        advanced: 'Embarrassed',
        transcription: '/ɪmˈbærəst/',
        wrong: ['Empowered', 'Encouraged', 'Engaged', 'Enhanced'],
      },
      {
        basic: 'Vibe check',
        advanced: 'Assessment',
        transcription: '/əˈsesmənt/',
        wrong: ['Assignment', 'Assumption', 'Attachment', 'Attention'],
      },
      {
        basic: 'Mood',
        advanced: 'Relatable',
        transcription: '/rɪˈleɪtəbl/',
        wrong: ['Reliable', 'Resilient', 'Rational', 'Relaxed'],
      },
      {
        basic: 'Felt that',
        advanced: 'Empathized',
        transcription: '/ˈempəθaɪzd/',
        wrong: ['Examined', 'Exchanged', 'Executed', 'Expanded'],
      },
      {
        basic: 'Big yikes',
        advanced: 'Concerning',
        transcription: '/kənˈsɜːrnɪŋ/',
        wrong: ['Confusing', 'Challenging', 'Changing', 'Checking'],
      },
      {
        basic: 'Oof',
        advanced: 'Sympathetic',
        transcription: '/ˌsɪmpəˈθetɪk/',
        wrong: ['Systematic', 'Structured', 'Successful', 'Supportive'],
      },
      {
        basic: 'Felt',
        advanced: 'Understood',
        transcription: '/ˌʌndəˈstʊd/',
        wrong: ['Upgraded', 'Updated', 'Uploaded', 'Urged'],
      },
      {
        basic: 'Lowkey sad',
        advanced: 'Melancholic',
        transcription: '/ˌmelənˈkɒlɪk/',
        wrong: ['Motivated', 'Mindful', 'Mournful', 'Magnanimous'],
      },
      {
        basic: 'Not okay',
        advanced: 'Struggling',
        transcription: '/ˈstrʌɡlɪŋ/',
        wrong: ['Structured', 'Successful', 'Supportive', 'Systematic'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 6. ONLINE
  // ─────────────────────────────────────────
  {
    id: 'online',
    name: 'Online',
    words: [
      {
        basic: 'Salty',
        advanced: 'Hostile',
        transcription: '/ˈhɒstaɪl/',
        wrong: ['Humble', 'Honest', 'Hopeful', 'Helpful'],
      },
      {
        basic: 'Triggered',
        advanced: 'Offended',
        transcription: '/əˈfendɪd/',
        wrong: ['Observed', 'Obtained', 'Occupied', 'Omitted'],
      },
      {
        basic: 'Ratio',
        advanced: 'Criticized',
        transcription: '/ˈkrɪtɪsaɪzd/',
        wrong: ['Calculated', 'Captured', 'Carried', 'Caused'],
      },
      {
        basic: 'Cancelled',
        advanced: 'Rejected',
        transcription: '/rɪˈdʒektɪd/',
        wrong: ['Released', 'Relied', 'Remained', 'Removed'],
      },
      {
        basic: 'Clowned',
        advanced: 'Mocked',
        transcription: '/mɒkt/',
        wrong: ['Managed', 'Monitored', 'Motivated', 'Modified'],
      },
      {
        basic: 'Dragged',
        advanced: 'Criticized',
        transcription: '/ˈkrɪtɪsaɪzd/',
        wrong: ['Calculated', 'Captured', 'Carried', 'Caused'],
      },
      {
        basic: 'Roasted',
        advanced: 'Ridiculed',
        transcription: '/ˈrɪdɪkjuːld/',
        wrong: ['Reviewed', 'Revised', 'Rethought', 'Reassessed'],
      },
      {
        basic: 'Clapped back',
        advanced: 'Responded',
        transcription: '/rɪˈspɒndɪd/',
        wrong: ['Reviewed', 'Revised', 'Rethought', 'Reassessed'],
      },
      {
        basic: 'Exposed',
        advanced: 'Revealed',
        transcription: '/rɪˈviːld/',
        wrong: ['Reviewed', 'Revised', 'Rethought', 'Reassessed'],
      },
      {
        basic: 'Cancelled',
        advanced: 'Boycotted',
        transcription: '/ˈbɔɪkɒtɪd/',
        wrong: ['Blocked', 'Banned', 'Barred', 'Broken'],
      },
    ],
  },
]
