// ============================================================
// DIGITAL — Basic → Advanced vocabulary
// Structure: 10 subcategories × 10 words
// Each word has: basic, advanced, transcription, wrong answers (4)
// Used in quiz: show basic word → pick correct advanced synonym
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

export const DIGITAL: Subcategory[] = [

  // ─────────────────────────────────────────
  // 1. DEVICES
  // ─────────────────────────────────────────
  {
    id: 'devices',
    name: 'Devices',
    words: [
      {
        basic: 'Phone',
        advanced: 'Smartphone',
        transcription: '/ˈsmɑːrtfoʊn/',
        wrong: ['Spreadsheet', 'Subnetwork', 'Softboard', 'Soundboard'],
      },
      {
        basic: 'Computer',
        advanced: 'Workstation',
        transcription: '/ˈwɜːrksteɪʃən/',
        wrong: ['Wireframe', 'Whiteboard', 'Webserver', 'Workflow'],
      },
      {
        basic: 'Broken device',
        advanced: 'Malfunctioning',
        transcription: '/mælˈfʌŋkʃənɪŋ/',
        wrong: ['Monitoring', 'Migrating', 'Mounting', 'Modifying'],
      },
      {
        basic: 'Charger',
        advanced: 'Power adapter',
        transcription: '/ˈpaʊər əˈdæptər/',
        wrong: ['Patch adapter', 'Port adapter', 'Proxy adapter', 'Plugin adapter'],
      },
      {
        basic: 'Screen',
        advanced: 'Display',
        transcription: '/dɪˈspleɪ/',
        wrong: ['Dispatch', 'Disposal', 'Distance', 'Distribute'],
      },
      {
        basic: 'Old device',
        advanced: 'Obsolete hardware',
        transcription: '/ˌɒbsəˈliːt ˈhɑːrdweər/',
        wrong: ['Optional hardware', 'Offline hardware', 'Output hardware', 'Original hardware'],
      },
      {
        basic: 'Tiny computer',
        advanced: 'Microprocessor',
        transcription: '/ˌmaɪkrəʊˈprəʊsesər/',
        wrong: ['Middleware', 'Microbrowser', 'Microserver', 'Microservice'],
      },
      {
        basic: 'Wireless',
        advanced: 'Bluetooth-enabled',
        transcription: '/ˈbluːtuːθ ɪˈneɪbəld/',
        wrong: ['Broadband-enabled', 'Browser-enabled', 'Backup-enabled', 'Batch-enabled'],
      },
      {
        basic: 'Memory card',
        advanced: 'Storage device',
        transcription: '/ˈstɔːrɪdʒ dɪˈvaɪs/',
        wrong: ['Streaming device', 'Scripting device', 'Scanning device', 'Syncing device'],
      },
      {
        basic: 'Headphones',
        advanced: 'Audio peripheral',
        transcription: '/ˈɔːdiəʊ pəˈrɪfərəl/',
        wrong: ['Access peripheral', 'Active peripheral', 'Analog peripheral', 'Assigned peripheral'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 2. INTERNET
  // ─────────────────────────────────────────
  {
    id: 'internet',
    name: 'Internet',
    words: [
      {
        basic: 'Website',
        advanced: 'Platform',
        transcription: '/ˈplætfɔːrm/',
        wrong: ['Payload', 'Pathway', 'Pipeline', 'Prototype'],
      },
      {
        basic: 'Search',
        advanced: 'Query',
        transcription: '/ˈkwɪəri/',
        wrong: ['Queue', 'Quota', 'Quote', 'Quite'],
      },
      {
        basic: 'Slow internet',
        advanced: 'Low bandwidth',
        transcription: '/ləʊ ˈbændwɪdθ/',
        wrong: ['Low backend', 'Low baseline', 'Low bitrate', 'Low buffer'],
      },
      {
        basic: 'Fast internet',
        advanced: 'High-speed connection',
        transcription: '/haɪ spiːd kəˈnekʃən/',
        wrong: ['Hard-coded connection', 'Hybrid connection', 'Hosted connection', 'HTTP connection'],
      },
      {
        basic: 'Homepage',
        advanced: 'Landing page',
        transcription: '/ˈlændɪŋ peɪdʒ/',
        wrong: ['Launch page', 'Linked page', 'Layered page', 'Legacy page'],
      },
      {
        basic: 'Logged in',
        advanced: 'Authenticated',
        transcription: '/ɔːˈθentɪkeɪtɪd/',
        wrong: ['Automated', 'Aggregated', 'Accelerated', 'Allocated'],
      },
      {
        basic: 'Saved data',
        advanced: 'Cached content',
        transcription: '/kæʃt ˈkɒntent/',
        wrong: ['Cloned content', 'Coded content', 'Compiled content', 'Compressed content'],
      },
      {
        basic: 'Link',
        advanced: 'Hyperlink',
        transcription: '/ˈhaɪpərlɪŋk/',
        wrong: ['Hostname', 'Header', 'Handler', 'Hashcode'],
      },
      {
        basic: 'Pop-up',
        advanced: 'Overlay',
        transcription: '/ˈoʊvərleɪ/',
        wrong: ['Overload', 'Override', 'Overwrite', 'Overflow'],
      },
      {
        basic: 'Offline',
        advanced: 'Disconnected',
        transcription: '/ˌdɪskəˈnektɪd/',
        wrong: ['Distributed', 'Disabled', 'Deprecated', 'Deployed'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 3. SOCIAL MEDIA
  // ─────────────────────────────────────────
  {
    id: 'social_media',
    name: 'Social Media',
    words: [
      {
        basic: 'Post',
        advanced: 'Content',
        transcription: '/ˈkɒntent/',
        wrong: ['Context', 'Contract', 'Control', 'Convert'],
      },
      {
        basic: 'Followers',
        advanced: 'Audience',
        transcription: '/ˈɔːdiəns/',
        wrong: ['Authors', 'Agents', 'Analysts', 'Advisors'],
      },
      {
        basic: 'Famous online',
        advanced: 'Viral',
        transcription: '/ˈvaɪrəl/',
        wrong: ['Visual', 'Virtual', 'Visible', 'Variable'],
      },
      {
        basic: 'Online famous person',
        advanced: 'Influencer',
        transcription: '/ˈɪnfluənsər/',
        wrong: ['Investor', 'Inspector', 'Instructor', 'Integrator'],
      },
      {
        basic: 'Fake account',
        advanced: 'Bot',
        transcription: '/bɒt/',
        wrong: ['Bug', 'Build', 'Branch', 'Bridge'],
      },
      {
        basic: 'Online hate',
        advanced: 'Cyberbullying',
        transcription: '/ˈsaɪbərbʊliɪŋ/',
        wrong: ['Cybercrime', 'Cyberspace', 'Cybersecurity', 'Cyberattack'],
      },
      {
        basic: 'Share again',
        advanced: 'Repost',
        transcription: '/ˌriːˈpəʊst/',
        wrong: ['Redirect', 'Refresh', 'Reload', 'Render'],
      },
      {
        basic: 'Comments section',
        advanced: 'Engagement',
        transcription: '/ɪnˈɡeɪdʒmənt/',
        wrong: ['Enhancement', 'Expansion', 'Expression', 'Extension'],
      },
      {
        basic: 'Story view',
        advanced: 'Impression',
        transcription: '/ɪmˈpreʃən/',
        wrong: ['Interface', 'Instance', 'Iteration', 'Integration'],
      },
      {
        basic: 'Paid post',
        advanced: 'Sponsored content',
        transcription: '/ˈspɒnsərd ˈkɒntent/',
        wrong: ['Scripted content', 'Stored content', 'Streamed content', 'Staged content'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 4. WORK TOOLS
  // ─────────────────────────────────────────
  {
    id: 'work_tools',
    name: 'Work Tools',
    words: [
      {
        basic: 'To-do list',
        advanced: 'Task manager',
        transcription: '/tɑːsk ˈmænɪdʒər/',
        wrong: ['Time manager', 'Team manager', 'Tag manager', 'Tab manager'],
      },
      {
        basic: 'Video call',
        advanced: 'Virtual meeting',
        transcription: '/ˈvɜːrtʃuəl ˈmiːtɪŋ/',
        wrong: ['Visual meeting', 'Verified meeting', 'Vendor meeting', 'Version meeting'],
      },
      {
        basic: 'Shared file',
        advanced: 'Collaborative document',
        transcription: '/kəˈlæbərətɪv ˈdɒkjʊmənt/',
        wrong: ['Compiled document', 'Converted document', 'Copied document', 'Controlled document'],
      },
      {
        basic: 'Email chain',
        advanced: 'Thread',
        transcription: '/θred/',
        wrong: ['Trigger', 'Tracker', 'Transfer', 'Template'],
      },
      {
        basic: 'Work chat',
        advanced: 'Messaging platform',
        transcription: '/ˈmesɪdʒɪŋ ˈplætfɔːrm/',
        wrong: ['Monitoring platform', 'Mapping platform', 'Merging platform', 'Matching platform'],
      },
      {
        basic: 'Plan board',
        advanced: 'Project dashboard',
        transcription: '/ˈprɒdʒekt ˈdæʃbɔːrd/',
        wrong: ['Product dashboard', 'Profile dashboard', 'Proxy dashboard', 'Plugin dashboard'],
      },
      {
        basic: 'Auto task',
        advanced: 'Workflow automation',
        transcription: '/ˈwɜːrkfləʊ ˌɔːtəˈmeɪʃən/',
        wrong: ['Website automation', 'Webhook automation', 'Widget automation', 'Wrapper automation'],
      },
      {
        basic: 'Cloud save',
        advanced: 'Cloud storage',
        transcription: '/klaʊd ˈstɔːrɪdʒ/',
        wrong: ['Cloud scripting', 'Cloud scanning', 'Cloud sourcing', 'Cloud syncing'],
      },
      {
        basic: 'Work report',
        advanced: 'Analytics report',
        transcription: '/ˌænəˈlɪtɪks rɪˈpɔːrt/',
        wrong: ['Access report', 'Action report', 'Archive report', 'Audit report'],
      },
      {
        basic: 'Password manager',
        advanced: 'Credential vault',
        transcription: '/krɪˈdenʃəl vɔːlt/',
        wrong: ['Content vault', 'Cached vault', 'Config vault', 'Custom vault'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 5. COMMUNICATION
  // ─────────────────────────────────────────
  {
    id: 'communication',
    name: 'Communication',
    words: [
      {
        basic: 'Message',
        advanced: 'Correspondence',
        transcription: '/ˌkɒrɪˈspɒndəns/',
        wrong: ['Compression', 'Conversion', 'Comparison', 'Connection'],
      },
      {
        basic: 'Reply',
        advanced: 'Respond',
        transcription: '/rɪˈspɒnd/',
        wrong: ['Restore', 'Restrict', 'Retrieve', 'Revert'],
      },
      {
        basic: 'Forwarded',
        advanced: 'Redirected',
        transcription: '/ˌriːdɪˈrektɪd/',
        wrong: ['Refreshed', 'Released', 'Rendered', 'Replicated'],
      },
      {
        basic: 'Group chat',
        advanced: 'Channel',
        transcription: '/ˈtʃænəl/',
        wrong: ['Cluster', 'Circuit', 'Cipher', 'Client'],
      },
      {
        basic: 'Sent to all',
        advanced: 'Broadcast',
        transcription: '/ˈbrɔːdkɑːst/',
        wrong: ['Bandwidth', 'Bootstrap', 'Backend', 'Bytecode'],
      },
      {
        basic: 'Online meeting',
        advanced: 'Webinar',
        transcription: '/ˈwebɪnɑːr/',
        wrong: ['Webpack', 'Webhook', 'Widget', 'Wrapper'],
      },
      {
        basic: 'Notification',
        advanced: 'Alert',
        transcription: '/əˈlɜːrt/',
        wrong: ['Alias', 'Anchor', 'Archive', 'Array'],
      },
      {
        basic: 'Spam',
        advanced: 'Unsolicited message',
        transcription: '/ʌnˈsɒlɪsɪtɪd ˈmesɪdʒ/',
        wrong: ['Unstructured message', 'Unstored message', 'Unsigned message', 'Unlinked message'],
      },
      {
        basic: 'Private chat',
        advanced: 'Direct message',
        transcription: '/daɪˈrekt ˈmesɪdʒ/',
        wrong: ['Default message', 'Defined message', 'Deployed message', 'Dynamic message'],
      },
      {
        basic: 'Emoji',
        advanced: 'Digital expression',
        transcription: '/ˈdɪdʒɪtəl ɪkˈspreʃən/',
        wrong: ['Dynamic expression', 'Defined expression', 'Deployed expression', 'Default expression'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 6. DATA
  // ─────────────────────────────────────────
  {
    id: 'data',
    name: 'Data',
    words: [
      {
        basic: 'Numbers',
        advanced: 'Metrics',
        transcription: '/ˈmetrɪks/',
        wrong: ['Methods', 'Models', 'Modules', 'Modes'],
      },
      {
        basic: 'File',
        advanced: 'Dataset',
        transcription: '/ˈdeɪtəset/',
        wrong: ['Dataflow', 'Datatype', 'Datagram', 'Database'],
      },
      {
        basic: 'Backup',
        advanced: 'Redundancy',
        transcription: '/rɪˈdʌndənsi/',
        wrong: ['Repository', 'Rendering', 'Refactoring', 'Routing'],
      },
      {
        basic: 'Collect data',
        advanced: 'Aggregate',
        transcription: '/ˈæɡrɪɡeɪt/',
        wrong: ['Allocate', 'Authenticate', 'Automate', 'Archive'],
      },
      {
        basic: 'Chart',
        advanced: 'Visualisation',
        transcription: '/ˌvɪʒuəlaɪˈzeɪʃən/',
        wrong: ['Validation', 'Versioning', 'Virtualisation', 'Verification'],
      },
      {
        basic: 'Sort data',
        advanced: 'Filter',
        transcription: '/ˈfɪltər/',
        wrong: ['Format', 'Flatten', 'Fork', 'Fetch'],
      },
      {
        basic: 'Study data',
        advanced: 'Analyse',
        transcription: '/ˈænəlaɪz/',
        wrong: ['Allocate', 'Automate', 'Authenticate', 'Archive'],
      },
      {
        basic: 'Data mistake',
        advanced: 'Corrupt data',
        transcription: '/kəˈrʌpt ˈdeɪtə/',
        wrong: ['Cached data', 'Cloned data', 'Compiled data', 'Compressed data'],
      },
      {
        basic: 'Raw info',
        advanced: 'Unprocessed data',
        transcription: '/ʌnˈprəʊsest ˈdeɪtə/',
        wrong: ['Unstructured data', 'Unsigned data', 'Unlinked data', 'Unstored data'],
      },
      {
        basic: 'Results',
        advanced: 'Output',
        transcription: '/ˈaʊtpʊt/',
        wrong: ['Overlay', 'Override', 'Overflow', 'Overwrite'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 7. SECURITY
  // ─────────────────────────────────────────
  {
    id: 'security',
    name: 'Security',
    words: [
      {
        basic: 'Hack',
        advanced: 'Breach',
        transcription: '/briːtʃ/',
        wrong: ['Bridge', 'Branch', 'Buffer', 'Bundle'],
      },
      {
        basic: 'Password',
        advanced: 'Credentials',
        transcription: '/krɪˈdenʃəlz/',
        wrong: ['Clusters', 'Circuits', 'Configs', 'Caches'],
      },
      {
        basic: 'Virus',
        advanced: 'Malware',
        transcription: '/ˈmælweər/',
        wrong: ['Middleware', 'Microware', 'Metaware', 'Mainware'],
      },
      {
        basic: 'Fake website',
        advanced: 'Phishing site',
        transcription: '/ˈfɪʃɪŋ saɪt/',
        wrong: ['Patching site', 'Polling site', 'Parsing site', 'Proxy site'],
      },
      {
        basic: 'Safe connection',
        advanced: 'Encrypted channel',
        transcription: '/ɪnˈkrɪptɪd ˈtʃænəl/',
        wrong: ['Enabled channel', 'Embedded channel', 'Extended channel', 'External channel'],
      },
      {
        basic: 'Two-step login',
        advanced: 'Two-factor authentication',
        transcription: '/tuː ˈfæktər ɔːˌθentɪˈkeɪʃən/',
        wrong: ['Two-factor authorisation', 'Two-factor allocation', 'Two-factor automation', 'Two-factor aggregation'],
      },
      {
        basic: 'Blocked',
        advanced: 'Restricted access',
        transcription: '/rɪˈstrɪktɪd ˈækses/',
        wrong: ['Reduced access', 'Redirected access', 'Released access', 'Rendered access'],
      },
      {
        basic: 'Safe copy',
        advanced: 'Secure backup',
        transcription: '/sɪˈkjʊər ˈbækʌp/',
        wrong: ['Shared backup', 'Staged backup', 'Static backup', 'Stored backup'],
      },
      {
        basic: 'Online attack',
        advanced: 'Cyberattack',
        transcription: '/ˈsaɪbərətæk/',
        wrong: ['Cybercrime', 'Cyberspace', 'Cyberbullying', 'Cyberloop'],
      },
      {
        basic: 'Permission',
        advanced: 'Access rights',
        transcription: '/ˈækses raɪts/',
        wrong: ['Action rights', 'Archive rights', 'Audit rights', 'Assign rights'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 8. AUTOMATION
  // ─────────────────────────────────────────
  {
    id: 'automation',
    name: 'Automation',
    words: [
      {
        basic: 'Auto task',
        advanced: 'Automated workflow',
        transcription: '/ˌɔːtəˈmeɪtɪd ˈwɜːrkfləʊ/',
        wrong: ['Allocated workflow', 'Archived workflow', 'Assigned workflow', 'Audited workflow'],
      },
      {
        basic: 'Robot',
        advanced: 'Bot',
        transcription: '/bɒt/',
        wrong: ['Build', 'Buffer', 'Bundle', 'Branch'],
      },
      {
        basic: 'Auto reply',
        advanced: 'Automated response',
        transcription: '/ˌɔːtəˈmeɪtɪd rɪˈspɒns/',
        wrong: ['Allocated response', 'Archived response', 'Assigned response', 'Audited response'],
      },
      {
        basic: 'Scheduled',
        advanced: 'Triggered',
        transcription: '/ˈtrɪɡərd/',
        wrong: ['Tracked', 'Tested', 'Tagged', 'Traced'],
      },
      {
        basic: 'Self-running',
        advanced: 'Autonomous',
        transcription: '/ɔːˈtɒnəməs/',
        wrong: ['Automated', 'Aggregated', 'Authenticated', 'Allocated'],
      },
      {
        basic: 'Smart rule',
        advanced: 'Algorithm',
        transcription: '/ˈælɡərɪðəm/',
        wrong: ['Allocation', 'Abstraction', 'Aggregation', 'Annotation'],
      },
      {
        basic: 'Auto fill',
        advanced: 'Pre-populated',
        transcription: '/priː ˈpɒpjʊleɪtɪd/',
        wrong: ['Pre-packaged', 'Pre-patched', 'Pre-parsed', 'Pre-processed'],
      },
      {
        basic: 'Repeat task',
        advanced: 'Recurring process',
        transcription: '/rɪˈkɜːrɪŋ ˈprəʊses/',
        wrong: ['Redirected process', 'Released process', 'Rendered process', 'Replicated process'],
      },
      {
        basic: 'AI tool',
        advanced: 'Machine learning model',
        transcription: '/məˈʃiːn ˈlɜːrnɪŋ ˈmɒdəl/',
        wrong: ['Manual learning model', 'Managed learning model', 'Mapped learning model', 'Merged learning model'],
      },
      {
        basic: 'Smart system',
        advanced: 'Intelligent automation',
        transcription: '/ɪnˈtelɪdʒənt ˌɔːtəˈmeɪʃən/',
        wrong: ['Integrated automation', 'Indexed automation', 'Injected automation', 'Isolated automation'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 9. TRENDS
  // ─────────────────────────────────────────
  {
    id: 'trends',
    name: 'Trends',
    words: [
      {
        basic: 'Popular',
        advanced: 'Trending',
        transcription: '/ˈtrendɪŋ/',
        wrong: ['Tracked', 'Triggered', 'Throttled', 'Tagged'],
      },
      {
        basic: 'New thing',
        advanced: 'Emerging concept',
        transcription: '/ɪˈmɜːrdʒɪŋ ˈkɒnsept/',
        wrong: ['Encoded concept', 'Enabled concept', 'Extended concept', 'External concept'],
      },
      {
        basic: 'Old trend',
        advanced: 'Outdated',
        transcription: '/ˌaʊtˈdeɪtɪd/',
        wrong: ['Overloaded', 'Overlapped', 'Overridden', 'Overused'],
      },
      {
        basic: 'Big change',
        advanced: 'Disruption',
        transcription: '/dɪsˈrʌpʃən/',
        wrong: ['Distribution', 'Duplication', 'Deprecation', 'Deployment'],
      },
      {
        basic: 'Hot topic',
        advanced: 'Buzzword',
        transcription: '/ˈbʌzwɜːrd/',
        wrong: ['Bytecode', 'Bootstrap', 'Backend', 'Bandwidth'],
      },
      {
        basic: 'Copy a trend',
        advanced: 'Adopt',
        transcription: '/əˈdɒpt/',
        wrong: ['Allocate', 'Analyse', 'Automate', 'Archive'],
      },
      {
        basic: 'Ahead of time',
        advanced: 'Cutting-edge',
        transcription: '/ˈkʌtɪŋ edʒ/',
        wrong: ['Cloud-based', 'Code-driven', 'Cache-enabled', 'Client-side'],
      },
      {
        basic: 'Spread fast',
        advanced: 'Go viral',
        transcription: '/ɡəʊ ˈvaɪrəl/',
        wrong: ['Go virtual', 'Go visible', 'Go variable', 'Go verified'],
      },
      {
        basic: 'Future idea',
        advanced: 'Innovation',
        transcription: '/ˌɪnəˈveɪʃən/',
        wrong: ['Integration', 'Iteration', 'Injection', 'Indexing'],
      },
      {
        basic: 'Normal now',
        advanced: 'Mainstream',
        transcription: '/ˈmeɪnstriːm/',
        wrong: ['Metadata', 'Middleware', 'Microservice', 'Migration'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 10. STARTUP
  // ─────────────────────────────────────────
  {
    id: 'startup',
    name: 'Startup',
    words: [
      {
        basic: 'New company',
        advanced: 'Startup',
        transcription: '/ˈstɑːrtʌp/',
        wrong: ['Staging', 'Scripting', 'Streaming', 'Syncing'],
      },
      {
        basic: 'First version',
        advanced: 'MVP',
        transcription: '/ˌem viː ˈpiː/',
        wrong: ['API', 'CDN', 'SDK', 'CLI'],
      },
      {
        basic: 'Money raised',
        advanced: 'Funding round',
        transcription: '/ˈfʌndɪŋ raʊnd/',
        wrong: ['Feature round', 'Filter round', 'Firewall round', 'Fallback round'],
      },
      {
        basic: 'Fast growth',
        advanced: 'Scaling',
        transcription: '/ˈskeɪlɪŋ/',
        wrong: ['Scripting', 'Scanning', 'Scheduling', 'Scoping'],
      },
      {
        basic: 'Business idea',
        advanced: 'Value proposition',
        transcription: '/ˈvæljuː ˌprɒpəˈzɪʃən/',
        wrong: ['Virtual proposition', 'Vendor proposition', 'Version proposition', 'Variable proposition'],
      },
      {
        basic: 'Early users',
        advanced: 'Early adopters',
        transcription: '/ˈɜːrli əˈdɒptərz/',
        wrong: ['Early adapters', 'Early allocators', 'Early auditors', 'Early archivists'],
      },
      {
        basic: 'Change plan',
        advanced: 'Pivot',
        transcription: '/ˈpɪvət/',
        wrong: ['Plugin', 'Payload', 'Pipeline', 'Pointer'],
      },
      {
        basic: 'Business model',
        advanced: 'Revenue stream',
        transcription: '/ˈrevənjuː striːm/',
        wrong: ['Request stream', 'Render stream', 'Runtime stream', 'Response stream'],
      },
      {
        basic: 'Investor',
        advanced: 'Venture capitalist',
        transcription: '/ˈventʃər ˈkæpɪtəlɪst/',
        wrong: ['Virtual capitalist', 'Vendor capitalist', 'Verified capitalist', 'Version capitalist'],
      },
      {
        basic: 'Team culture',
        advanced: 'Startup ecosystem',
        transcription: '/ˈstɑːrtʌp ˈiːkəʊsɪstəm/',
        wrong: ['Staging ecosystem', 'Streaming ecosystem', 'Scripting ecosystem', 'Syncing ecosystem'],
      },
    ],
  },
]
