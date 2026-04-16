// ============================================================
// INTERNET & SOCIAL MEDIA — Internet slang vs standard equivalents
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

export const INTERNET_SOCIAL_MEDIA: Subcategory[] = [

  // ─────────────────────────────────────────
  // 1. REACTIONS
  // ─────────────────────────────────────────
  {
    id: 'reactions',
    name: 'Reactions',
    words: [
      {
        basic: 'LOL',
        advanced: 'Laughing',
        transcription: '/ˈlɑːfɪŋ/',
        wrong: ['Listening', 'Learning', 'Leading', 'Leaving'],
      },
      {
        basic: 'ROFL',
        advanced: 'Hysterical',
        transcription: '/hɪˈsterɪkl/',
        wrong: ['Helpful', 'Honest', 'Hopeful', 'Humble'],
      },
      {
        basic: 'SMH',
        advanced: 'Disappointed',
        transcription: '/ˌdɪsəˈpɔɪntɪd/',
        wrong: ['Discouraged', 'Disturbed', 'Distracted', 'Disrupted'],
      },
      {
        basic: 'OMG',
        advanced: 'Astonished',
        transcription: '/əˈstɒnɪʃt/',
        wrong: ['Ambitious', 'Anxious', 'Absorbed', 'Amused'],
      },
      {
        basic: 'IKR',
        advanced: 'Agreed',
        transcription: '/əˈɡriːd/',
        wrong: ['Adapted', 'Admired', 'Admitted', 'Adopted'],
      },
      {
        basic: 'TBH',
        advanced: 'Frankly',
        transcription: '/ˈfræŋkli/',
        wrong: ['Formally', 'Fortunately', 'Frequently', 'Fundamentally'],
      },
      {
        basic: 'NGL',
        advanced: 'Honestly',
        transcription: '/ˈɒnɪstli/',
        wrong: ['Obviously', 'Openly', 'Officially', 'Ordinarily'],
      },
      {
        basic: 'Lmao',
        advanced: 'Amused',
        transcription: '/əˈmjuːzd/',
        wrong: ['Adapted', 'Admired', 'Admitted', 'Adopted'],
      },
      {
        basic: 'Oof',
        advanced: 'Unfortunate',
        transcription: '/ʌnˈfɔːrtʃənɪt/',
        wrong: ['Unexpected', 'Unusual', 'Unclear', 'Unfair'],
      },
      {
        basic: 'Rip',
        advanced: 'Condolences',
        transcription: '/ˌkɒndəˈloʊnsɪz/',
        wrong: ['Conditions', 'Connections', 'Conclusions', 'Contributions'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 2. CONTENT
  // ─────────────────────────────────────────
  {
    id: 'content',
    name: 'Content',
    words: [
      {
        basic: 'Post',
        advanced: 'Publication',
        transcription: '/ˌpʌblɪˈkeɪʃən/',
        wrong: ['Participation', 'Presentation', 'Preservation', 'Promotion'],
      },
      {
        basic: 'Meme',
        advanced: 'Viral image',
        transcription: '/ˈvaɪrəl ˈɪmɪdʒ/',
        wrong: ['Viral video', 'Viral post', 'Viral content', 'Viral trend'],
      },
      {
        basic: 'Thread',
        advanced: 'Discussion chain',
        transcription: '/dɪˈskʌʃən tʃeɪn/',
        wrong: ['Discussion board', 'Discussion group', 'Discussion forum', 'Discussion panel'],
      },
      {
        basic: 'Story',
        advanced: 'Temporary post',
        transcription: '/ˈtempəreri poʊst/',
        wrong: ['Temporary update', 'Temporary content', 'Temporary image', 'Temporary video'],
      },
      {
        basic: 'Reel',
        advanced: 'Short video',
        transcription: '/ʃɔːrt ˈvɪdiəʊ/',
        wrong: ['Short post', 'Short story', 'Short clip', 'Short content'],
      },
      {
        basic: 'Feed',
        advanced: 'Content stream',
        transcription: '/ˈkɒntent striːm/',
        wrong: ['Content board', 'Content group', 'Content forum', 'Content panel'],
      },
      {
        basic: 'Caption',
        advanced: 'Description',
        transcription: '/dɪˈskrɪpʃən/',
        wrong: ['Declaration', 'Definition', 'Delivery', 'Demonstration'],
      },
      {
        basic: 'Hashtag',
        advanced: 'Keyword tag',
        transcription: '/ˈkiːwɜːrd tæɡ/',
        wrong: ['Keyword link', 'Keyword label', 'Keyword mark', 'Keyword sign'],
      },
      {
        basic: 'Collab',
        advanced: 'Collaboration',
        transcription: '/kəˌlæbəˈreɪʃən/',
        wrong: ['Communication', 'Confirmation', 'Consideration', 'Contribution'],
      },
      {
        basic: 'Spam',
        advanced: 'Unwanted content',
        transcription: '/ʌnˈwɒntɪd ˈkɒntent/',
        wrong: ['Unwanted post', 'Unwanted message', 'Unwanted update', 'Unwanted image'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 3. PEOPLE
  // ─────────────────────────────────────────
  {
    id: 'people',
    name: 'People',
    words: [
      {
        basic: 'Influencer',
        advanced: 'Content creator',
        transcription: '/ˈkɒntent kriˈeɪtər/',
        wrong: ['Content manager', 'Content editor', 'Content producer', 'Content director'],
      },
      {
        basic: 'Follower',
        advanced: 'Subscriber',
        transcription: '/səbˈskraɪbər/',
        wrong: ['Supporter', 'Successor', 'Spectator', 'Supervisor'],
      },
      {
        basic: 'Troll',
        advanced: 'Provocateur',
        transcription: '/prəˌvɒkəˈtɜːr/',
        wrong: ['Participant', 'Presenter', 'Producer', 'Provider'],
      },
      {
        basic: 'Bot',
        advanced: 'Automated account',
        transcription: '/ˌɔːtəˈmeɪtɪd əˈkaʊnt/',
        wrong: ['Automated post', 'Automated message', 'Automated update', 'Automated content'],
      },
      {
        basic: 'Lurker',
        advanced: 'Silent observer',
        transcription: '/ˈsaɪlənt əbˈzɜːrvər/',
        wrong: ['Silent follower', 'Silent subscriber', 'Silent viewer', 'Silent reader'],
      },
      {
        basic: 'Verified',
        advanced: 'Authenticated',
        transcription: '/ɔːˈθentɪkeɪtɪd/',
        wrong: ['Adapted', 'Admired', 'Admitted', 'Adopted'],
      },
      {
        basic: 'Creator',
        advanced: 'Producer',
        transcription: '/prəˈdjuːsər/',
        wrong: ['Presenter', 'Provider', 'Participant', 'Promoter'],
      },
      {
        basic: 'Fan base',
        advanced: 'Audience',
        transcription: '/ˈɔːdiəns/',
        wrong: ['Awareness', 'Authority', 'Ability', 'Activity'],
      },
      {
        basic: 'Hater',
        advanced: 'Detractor',
        transcription: '/dɪˈtræktər/',
        wrong: ['Director', 'Distributor', 'Developer', 'Designer'],
      },
      {
        basic: 'Celeb',
        advanced: 'Public figure',
        transcription: '/ˈpʌblɪk ˈfɪɡər/',
        wrong: ['Public speaker', 'Public servant', 'Public official', 'Public person'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 4. ACTIONS
  // ─────────────────────────────────────────
  {
    id: 'actions',
    name: 'Actions',
    words: [
      {
        basic: 'DM',
        advanced: 'Message',
        transcription: '/ˈmesɪdʒ/',
        wrong: ['Mention', 'Monitor', 'Manage', 'Modify'],
      },
      {
        basic: 'Ghosting',
        advanced: 'Ignoring',
        transcription: '/ɪɡˈnɔːrɪŋ/',
        wrong: ['Improving', 'Including', 'Increasing', 'Indicating'],
      },
      {
        basic: 'Sliding in',
        advanced: 'Contacting',
        transcription: '/kənˈtæktɪŋ/',
        wrong: ['Confirming', 'Connecting', 'Considering', 'Containing'],
      },
      {
        basic: 'Repost',
        advanced: 'Share',
        transcription: '/ʃeər/',
        wrong: ['Shift', 'Show', 'Shrink', 'Stand'],
      },
      {
        basic: 'Like',
        advanced: 'Approve',
        transcription: '/əˈpruːv/',
        wrong: ['Adapt', 'Achieve', 'Acquire', 'Agree'],
      },
      {
        basic: 'Unfollow',
        advanced: 'Disconnect',
        transcription: '/ˌdɪskəˈnekt/',
        wrong: ['Discover', 'Discuss', 'Dismiss', 'Display'],
      },
      {
        basic: 'Block',
        advanced: 'Restrict',
        transcription: '/rɪˈstrɪkt/',
        wrong: ['Resolve', 'Respond', 'Restore', 'Retain'],
      },
      {
        basic: 'Tag',
        advanced: 'Mention',
        transcription: '/ˈmenʃən/',
        wrong: ['Monitor', 'Manage', 'Modify', 'Motivate'],
      },
      {
        basic: 'Go live',
        advanced: 'Broadcast',
        transcription: '/ˈbrɔːdkɑːst/',
        wrong: ['Breakdown', 'Breakthrough', 'Buildup', 'Burnout'],
      },
      {
        basic: 'Ratio',
        advanced: 'Outvote',
        transcription: '/ˌaʊtˈvoʊt/',
        wrong: ['Outperform', 'Outreach', 'Outrun', 'Outsource'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 5. STATUS
  // ─────────────────────────────────────────
  {
    id: 'status',
    name: 'Status',
    words: [
      {
        basic: 'Viral',
        advanced: 'Trending',
        transcription: '/ˈtrendɪŋ/',
        wrong: ['Tracking', 'Training', 'Transferring', 'Transforming'],
      },
      {
        basic: 'Cancelled',
        advanced: 'Boycotted',
        transcription: '/ˈbɔɪkɒtɪd/',
        wrong: ['Blocked', 'Banned', 'Barred', 'Broken'],
      },
      {
        basic: 'Verified',
        advanced: 'Confirmed',
        transcription: '/kənˈfɜːrmd/',
        wrong: ['Connected', 'Considered', 'Contained', 'Converted'],
      },
      {
        basic: 'Shadowbanned',
        advanced: 'Restricted',
        transcription: '/rɪˈstrɪktɪd/',
        wrong: ['Reviewed', 'Revised', 'Rethought', 'Reassessed'],
      },
      {
        basic: 'Clout',
        advanced: 'Popularity',
        transcription: '/ˌpɒpjuˈlærɪti/',
        wrong: ['Possibility', 'Productivity', 'Profitability', 'Probability'],
      },
      {
        basic: 'Ratio',
        advanced: 'Criticized',
        transcription: '/ˈkrɪtɪsaɪzd/',
        wrong: ['Calculated', 'Captured', 'Carried', 'Caused'],
      },
      {
        basic: 'Deactivated',
        advanced: 'Suspended',
        transcription: '/səˈspendɪd/',
        wrong: ['Structured', 'Successful', 'Supportive', 'Systematic'],
      },
      {
        basic: 'Pinned',
        advanced: 'Featured',
        transcription: '/ˈfiːtʃərd/',
        wrong: ['Filtered', 'Found', 'Fixed', 'Focused'],
      },
      {
        basic: 'Trending',
        advanced: 'Popular',
        transcription: '/ˈpɒpjulər/',
        wrong: ['Practical', 'Precise', 'Previous', 'Primary'],
      },
      {
        basic: 'Doxed',
        advanced: 'Exposed',
        transcription: '/ɪkˈspoʊzd/',
        wrong: ['Examined', 'Exchanged', 'Executed', 'Expanded'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 6. TRENDS
  // ─────────────────────────────────────────
  {
    id: 'trends',
    name: 'Trends',
    words: [
      {
        basic: 'Challenge',
        advanced: 'Viral trend',
        transcription: '/ˈvaɪrəl trend/',
        wrong: ['Viral post', 'Viral image', 'Viral content', 'Viral video'],
      },
      {
        basic: 'Trend',
        advanced: 'Movement',
        transcription: '/ˈmuːvmənt/',
        wrong: ['Moment', 'Method', 'Measure', 'Message'],
      },
      {
        basic: 'Hype',
        advanced: 'Excitement',
        transcription: '/ɪkˈsaɪtmənt/',
        wrong: ['Engagement', 'Enhancement', 'Enforcement', 'Enjoyment'],
      },
      {
        basic: 'Fad',
        advanced: 'Craze',
        transcription: '/kreɪz/',
        wrong: ['Cause', 'Case', 'Care', 'Call'],
      },
      {
        basic: 'Aesthetic',
        advanced: 'Visual style',
        transcription: '/ˈvɪʒuəl staɪl/',
        wrong: ['Visual state', 'Visual stage', 'Visual stand', 'Visual start'],
      },
      {
        basic: 'Niche',
        advanced: 'Specialized',
        transcription: '/ˈspeʃəlaɪzd/',
        wrong: ['Structured', 'Successful', 'Supportive', 'Systematic'],
      },
      {
        basic: 'Algorithm',
        advanced: 'Recommendation system',
        transcription: '/ˌrekəmenˈdeɪʃən ˈsɪstəm/',
        wrong: ['Recommendation board', 'Recommendation group', 'Recommendation forum', 'Recommendation panel'],
      },
      {
        basic: 'Engagement',
        advanced: 'Interaction rate',
        transcription: '/ˌɪntərˈækʃən reɪt/',
        wrong: ['Interaction board', 'Interaction group', 'Interaction forum', 'Interaction panel'],
      },
      {
        basic: 'Reach',
        advanced: 'Audience size',
        transcription: '/ˈɔːdiəns saɪz/',
        wrong: ['Audience type', 'Audience group', 'Audience level', 'Audience rate'],
      },
      {
        basic: 'Impressions',
        advanced: 'Views',
        transcription: '/vjuːz/',
        wrong: ['Values', 'Voices', 'Versions', 'Visions'],
      },
    ],
  },
]
