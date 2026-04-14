// ============================================================
// LIFE — Basic → Advanced vocabulary
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

export const LIFE: Subcategory[] = [

  // ─────────────────────────────────────────
  // 1. FOOD
  // ─────────────────────────────────────────
  {
    id: 'food',
    name: 'Food',
    words: [
      {
        basic: 'Tasty',
        advanced: 'Delectable',
        transcription: '/dɪˈlektəbəl/',
        wrong: ['Digestible', 'Desirable', 'Detectable', 'Dependable'],
      },
      {
        basic: 'Yummy',
        advanced: 'Scrumptious',
        transcription: '/ˈskrʌmpʃəs/',
        wrong: ['Scrupulous', 'Structured', 'Saturated', 'Seasoned'],
      },
      {
        basic: 'Spicy',
        advanced: 'Pungent',
        transcription: '/ˈpʌndʒənt/',
        wrong: ['Pickled', 'Poached', 'Pureed', 'Peppered'],
      },
      {
        basic: 'Sweet',
        advanced: 'Indulgent',
        transcription: '/ɪnˈdʌldʒənt/',
        wrong: ['Infused', 'Intense', 'Inviting', 'Isolated'],
      },
      {
        basic: 'Bitter',
        advanced: 'Acrid',
        transcription: '/ˈækrɪd/',
        wrong: ['Acidic', 'Active', 'Aerated', 'Aged'],
      },
      {
        basic: 'Sour',
        advanced: 'Tangy',
        transcription: '/ˈtæŋi/',
        wrong: ['Tender', 'Toasted', 'Thick', 'Textured'],
      },
      {
        basic: 'Filling',
        advanced: 'Hearty',
        transcription: '/ˈhɑːrti/',
        wrong: ['Healthy', 'Herbal', 'Homemade', 'Honeyed'],
      },
      {
        basic: 'Healthy food',
        advanced: 'Nutritious',
        transcription: '/njuːˈtrɪʃəs/',
        wrong: ['Natural', 'Notable', 'Neutral', 'Nourished'],
      },
      {
        basic: 'Junk food',
        advanced: 'Processed food',
        transcription: '/ˈprəʊsest fuːd/',
        wrong: ['Packaged food', 'Preserved food', 'Prepared food', 'Portioned food'],
      },
      {
        basic: 'Light meal',
        advanced: 'Wholesome snack',
        transcription: '/ˈhəʊlsəm snæk/',
        wrong: ['Warmed snack', 'Wrapped snack', 'Washed snack', 'Weighed snack'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 2. DRINKS
  // ─────────────────────────────────────────
  {
    id: 'drinks',
    name: 'Drinks',
    words: [
      {
        basic: 'Strong coffee',
        advanced: 'Espresso',
        transcription: '/eˈspresəʊ/',
        wrong: ['Extract', 'Essence', 'Emulsion', 'Elixir'],
      },
      {
        basic: 'Fizzy drink',
        advanced: 'Carbonated beverage',
        transcription: '/ˌkɑːrbəneɪtɪd ˈbevərɪdʒ/',
        wrong: ['Chilled beverage', 'Crafted beverage', 'Canned beverage', 'Citrus beverage'],
      },
      {
        basic: 'Herbal tea',
        advanced: 'Infusion',
        transcription: '/ɪnˈfjuːʒən/',
        wrong: ['Injection', 'Iteration', 'Inclusion', 'Inversion'],
      },
      {
        basic: 'Smoothie',
        advanced: 'Blended drink',
        transcription: '/ˈblendɪd drɪŋk/',
        wrong: ['Bottled drink', 'Brewed drink', 'Boosted drink', 'Balanced drink'],
      },
      {
        basic: 'Alcohol',
        advanced: 'Spirits',
        transcription: '/ˈspɪrɪts/',
        wrong: ['Samples', 'Syrups', 'Sodas', 'Shots'],
      },
      {
        basic: 'Sip',
        advanced: 'Savour',
        transcription: '/ˈseɪvər/',
        wrong: ['Steep', 'Strain', 'Squeeze', 'Stir'],
      },
      {
        basic: 'Cold drink',
        advanced: 'Chilled beverage',
        transcription: '/tʃɪld ˈbevərɪdʒ/',
        wrong: ['Citrus beverage', 'Canned beverage', 'Crafted beverage', 'Carbonated beverage'],
      },
      {
        basic: 'Hot drink',
        advanced: 'Warm beverage',
        transcription: '/wɔːrm ˈbevərɪdʒ/',
        wrong: ['Watered beverage', 'Whole beverage', 'Wild beverage', 'Whipped beverage'],
      },
      {
        basic: 'Fruit juice',
        advanced: 'Fresh-pressed juice',
        transcription: '/freʃ prest dʒuːs/',
        wrong: ['Frozen-pressed juice', 'Filtered-pressed juice', 'Fortified-pressed juice', 'Flavoured-pressed juice'],
      },
      {
        basic: 'Tap water',
        advanced: 'Still water',
        transcription: '/stɪl ˈwɔːtər/',
        wrong: ['Stored water', 'Strained water', 'Sterilised water', 'Sweetened water'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 3. COOKING
  // ─────────────────────────────────────────
  {
    id: 'cooking',
    name: 'Cooking',
    words: [
      {
        basic: 'Cook',
        advanced: 'Prepare',
        transcription: '/prɪˈpeər/',
        wrong: ['Present', 'Process', 'Produce', 'Portion'],
      },
      {
        basic: 'Cut',
        advanced: 'Chop',
        transcription: '/tʃɒp/',
        wrong: ['Chill', 'Coat', 'Cure', 'Crisp'],
      },
      {
        basic: 'Mix',
        advanced: 'Combine',
        transcription: '/kəmˈbaɪn/',
        wrong: ['Coat', 'Chill', 'Crisp', 'Cure'],
      },
      {
        basic: 'Heat up',
        advanced: 'Sauté',
        transcription: '/ˈsɒteɪ/',
        wrong: ['Season', 'Simmer', 'Smoke', 'Steam'],
      },
      {
        basic: 'Cook in water',
        advanced: 'Poach',
        transcription: '/pəʊtʃ/',
        wrong: ['Press', 'Proof', 'Purée', 'Pan-fry'],
      },
      {
        basic: 'Add flavour',
        advanced: 'Season',
        transcription: '/ˈsiːzən/',
        wrong: ['Simmer', 'Sauté', 'Smoke', 'Steam'],
      },
      {
        basic: 'Cook slowly',
        advanced: 'Simmer',
        transcription: '/ˈsɪmər/',
        wrong: ['Sear', 'Season', 'Sauté', 'Smoke'],
      },
      {
        basic: 'Recipe',
        advanced: 'Method',
        transcription: '/ˈmeθəd/',
        wrong: ['Mixture', 'Measure', 'Marinade', 'Mould'],
      },
      {
        basic: 'Kitchen tool',
        advanced: 'Utensil',
        transcription: '/juːˈtensəl/',
        wrong: ['Upgrade', 'Utility', 'Update', 'Upload'],
      },
      {
        basic: 'No meat',
        advanced: 'Plant-based',
        transcription: '/plɑːnt beɪst/',
        wrong: ['Pan-fried', 'Pickled', 'Poached', 'Preserved'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 4. RESTAURANT
  // ─────────────────────────────────────────
  {
    id: 'restaurant',
    name: 'Restaurant',
    words: [
      {
        basic: 'Waiter',
        advanced: 'Server',
        transcription: '/ˈsɜːrvər/',
        wrong: ['Selector', 'Supplier', 'Scheduler', 'Scanner'],
      },
      {
        basic: 'Bill',
        advanced: 'Invoice',
        transcription: '/ˈɪnvɔɪs/',
        wrong: ['Input', 'Index', 'Instance', 'Interface'],
      },
      {
        basic: 'Book a table',
        advanced: 'Make a reservation',
        transcription: '/meɪk ə ˌrezəˈveɪʃən/',
        wrong: ['Make a request', 'Make a review', 'Make a record', 'Make a response'],
      },
      {
        basic: 'Main dish',
        advanced: 'Entrée',
        transcription: '/ˈɒntreɪ/',
        wrong: ['Extract', 'Element', 'Edition', 'Entity'],
      },
      {
        basic: 'Starter',
        advanced: 'Appetiser',
        transcription: '/ˈæpɪtaɪzər/',
        wrong: ['Aggregate', 'Allocator', 'Analyser', 'Applicator'],
      },
      {
        basic: 'Chef special',
        advanced: "Chef's recommendation",
        transcription: '/ʃefs ˌrekəmenˈdeɪʃən/',
        wrong: ["Chef's restriction", "Chef's resolution", "Chef's revision", "Chef's response"],
      },
      {
        basic: 'Tip',
        advanced: 'Gratuity',
        transcription: '/ɡrəˈtjuːɪti/',
        wrong: ['Gateway', 'Gradient', 'Guideline', 'Guarantee'],
      },
      {
        basic: 'Takeaway',
        advanced: 'To-go order',
        transcription: '/tə ɡəʊ ˈɔːrdər/',
        wrong: ['Time-based order', 'Tracked order', 'Trial order', 'Timed order'],
      },
      {
        basic: 'Fancy restaurant',
        advanced: 'Fine dining',
        transcription: '/faɪn ˈdaɪnɪŋ/',
        wrong: ['Fixed dining', 'Filtered dining', 'Featured dining', 'Formal dining'],
      },
      {
        basic: 'All you can eat',
        advanced: 'Buffet',
        transcription: '/bʊˈfeɪ/',
        wrong: ['Bundle', 'Budget', 'Bypass', 'Buffer'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 5. HOBBIES
  // ─────────────────────────────────────────
  {
    id: 'hobbies',
    name: 'Hobbies',
    words: [
      {
        basic: 'Hobby',
        advanced: 'Passion',
        transcription: '/ˈpæʃən/',
        wrong: ['Pattern', 'Pathway', 'Payload', 'Platform'],
      },
      {
        basic: 'Drawing',
        advanced: 'Illustration',
        transcription: '/ˌɪləˈstreɪʃən/',
        wrong: ['Integration', 'Iteration', 'Indication', 'Injection'],
      },
      {
        basic: 'Writing',
        advanced: 'Composition',
        transcription: '/ˌkɒmpəˈzɪʃən/',
        wrong: ['Compression', 'Compilation', 'Computation', 'Conversion'],
      },
      {
        basic: 'Reading',
        advanced: 'Literature',
        transcription: '/ˈlɪtərətʃər/',
        wrong: ['Lifestyle', 'Linkage', 'Layout', 'Leverage'],
      },
      {
        basic: 'Cooking as hobby',
        advanced: 'Culinary arts',
        transcription: '/ˈkʌlɪnəri ɑːrts/',
        wrong: ['Cultural arts', 'Custom arts', 'Current arts', 'Creative arts'],
      },
      {
        basic: 'Playing music',
        advanced: 'Musicianship',
        transcription: '/mjuːˈzɪʃənʃɪp/',
        wrong: ['Methodology', 'Modelling', 'Monitoring', 'Mentorship'],
      },
      {
        basic: 'Taking photos',
        advanced: 'Photography',
        transcription: '/fəˈtɒɡrəfi/',
        wrong: ['Philosophy', 'Physiology', 'Phonology', 'Philanthropy'],
      },
      {
        basic: 'Gardening',
        advanced: 'Horticulture',
        transcription: '/ˈhɔːrtɪkʌltʃər/',
        wrong: ['Hierarchy', 'Heritage', 'Hypothesis', 'Humidity'],
      },
      {
        basic: 'Collecting things',
        advanced: 'Curation',
        transcription: '/kjʊˈreɪʃən/',
        wrong: ['Calculation', 'Calibration', 'Circulation', 'Classification'],
      },
      {
        basic: 'Free time activity',
        advanced: 'Leisure pursuit',
        transcription: '/ˈleʒər pərˈsjuːt/',
        wrong: ['Linked pursuit', 'Loaded pursuit', 'Logged pursuit', 'Listed pursuit'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 6. SPORTS
  // ─────────────────────────────────────────
  {
    id: 'sports',
    name: 'Sports',
    words: [
      {
        basic: 'Work out',
        advanced: 'Train',
        transcription: '/treɪn/',
        wrong: ['Track', 'Tackle', 'Target', 'Trigger'],
      },
      {
        basic: 'Get better',
        advanced: 'Progress',
        transcription: '/ˈprəʊɡres/',
        wrong: ['Process', 'Project', 'Protect', 'Produce'],
      },
      {
        basic: 'Very tired after sport',
        advanced: 'Fatigued',
        transcription: '/fəˈtiːɡd/',
        wrong: ['Focused', 'Flexible', 'Fuelled', 'Functional'],
      },
      {
        basic: 'Win',
        advanced: 'Triumph',
        transcription: '/ˈtraɪʌmf/',
        wrong: ['Transfer', 'Trigger', 'Trace', 'Track'],
      },
      {
        basic: 'Lose',
        advanced: 'Be defeated',
        transcription: '/biː dɪˈfiːtɪd/',
        wrong: ['Be defined', 'Be deployed', 'Be derived', 'Be directed'],
      },
      {
        basic: 'Player',
        advanced: 'Athlete',
        transcription: '/ˈæθliːt/',
        wrong: ['Analyst', 'Advisor', 'Advocate', 'Architect'],
      },
      {
        basic: 'Team',
        advanced: 'Squad',
        transcription: '/skwɒd/',
        wrong: ['Scale', 'Script', 'Schema', 'Scope'],
      },
      {
        basic: 'Practice',
        advanced: 'Drill',
        transcription: '/drɪl/',
        wrong: ['Draft', 'Drive', 'Deploy', 'Debug'],
      },
      {
        basic: 'Game plan',
        advanced: 'Strategy',
        transcription: '/ˈstrætədʒi/',
        wrong: ['Structure', 'Segment', 'Snapshot', 'Schema'],
      },
      {
        basic: 'Rest after sport',
        advanced: 'Recovery',
        transcription: '/rɪˈkʌvəri/',
        wrong: ['Rendering', 'Refactoring', 'Routing', 'Redundancy'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 7. SHOPPING
  // ─────────────────────────────────────────
  {
    id: 'shopping',
    name: 'Shopping',
    words: [
      {
        basic: 'Buy',
        advanced: 'Purchase',
        transcription: '/ˈpɜːrtʃəs/',
        wrong: ['Process', 'Produce', 'Project', 'Publish'],
      },
      {
        basic: 'On sale',
        advanced: 'Discounted',
        transcription: '/dɪsˈkaʊntɪd/',
        wrong: ['Displayed', 'Deployed', 'Distributed', 'Divided'],
      },
      {
        basic: 'Too expensive',
        advanced: 'Overpriced',
        transcription: '/ˌəʊvəˈpraɪst/',
        wrong: ['Overloaded', 'Overrated', 'Overused', 'Overridden'],
      },
      {
        basic: 'Good deal',
        advanced: 'Bargain',
        transcription: '/ˈbɑːrɡɪn/',
        wrong: ['Baseline', 'Backend', 'Bandwidth', 'Bootstrap'],
      },
      {
        basic: 'Send back',
        advanced: 'Return',
        transcription: '/rɪˈtɜːrn/',
        wrong: ['Render', 'Release', 'Refresh', 'Redirect'],
      },
      {
        basic: 'Wish list',
        advanced: 'Saved items',
        transcription: '/seɪvd ˈaɪtəmz/',
        wrong: ['Sorted items', 'Shared items', 'Staged items', 'Selected items'],
      },
      {
        basic: 'Checkout',
        advanced: 'Complete purchase',
        transcription: '/kəmˈpliːt ˈpɜːrtʃəs/',
        wrong: ['Confirm purchase', 'Convert purchase', 'Control purchase', 'Connect purchase'],
      },
      {
        basic: 'Online shop',
        advanced: 'E-commerce platform',
        transcription: '/iː ˈkɒmɜːrs ˈplætfɔːrm/',
        wrong: ['E-content platform', 'E-config platform', 'E-cache platform', 'E-core platform'],
      },
      {
        basic: 'Free delivery',
        advanced: 'Complimentary shipping',
        transcription: '/ˌkɒmplɪˈmentəri ˈʃɪpɪŋ/',
        wrong: ['Compressed shipping', 'Compiled shipping', 'Connected shipping', 'Converted shipping'],
      },
      {
        basic: 'Limited stock',
        advanced: 'Low availability',
        transcription: '/ləʊ əˌveɪləˈbɪlɪti/',
        wrong: ['Low accessibility', 'Low accuracy', 'Low activity', 'Low adaptability'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 8. BEAUTY
  // ─────────────────────────────────────────
  {
    id: 'beauty',
    name: 'Beauty',
    words: [
      {
        basic: 'Skin care',
        advanced: 'Complexion routine',
        transcription: '/kəmˈplekʃən ruːˈtiːn/',
        wrong: ['Crafted routine', 'Cleansing routine', 'Coded routine', 'Custom routine'],
      },
      {
        basic: 'Makeup',
        advanced: 'Cosmetics',
        transcription: '/kɒzˈmetɪks/',
        wrong: ['Composites', 'Components', 'Compilers', 'Complements'],
      },
      {
        basic: 'Moisturiser',
        advanced: 'Hydrating serum',
        transcription: '/haɪˈdreɪtɪŋ ˈsɪərəm/',
        wrong: ['Healing serum', 'Herbal serum', 'Honeyed serum', 'Homemade serum'],
      },
      {
        basic: 'Glow',
        advanced: 'Radiance',
        transcription: '/ˈreɪdiəns/',
        wrong: ['Relevance', 'Resilience', 'Reference', 'Resistance'],
      },
      {
        basic: 'Smell good',
        advanced: 'Fragrance',
        transcription: '/ˈfreɪɡrəns/',
        wrong: ['Framework', 'Fragment', 'Frequency', 'Frontier'],
      },
      {
        basic: 'Natural look',
        advanced: 'No-makeup aesthetic',
        transcription: '/nəʊ ˈmeɪkʌp esˈθetɪk/',
        wrong: ['No-makeup approach', 'No-makeup algorithm', 'No-makeup archive', 'No-makeup attribute'],
      },
      {
        basic: 'Hair care',
        advanced: 'Hair treatment',
        transcription: '/heər ˈtriːtmənt/',
        wrong: ['Hair tracking', 'Hair transfer', 'Hair template', 'Hair trigger'],
      },
      {
        basic: 'Sun protection',
        advanced: 'SPF',
        transcription: '/ˌes piː ˈef/',
        wrong: ['SDK', 'SaaS', 'SQL', 'SSH'],
      },
      {
        basic: 'Well-groomed',
        advanced: 'Polished appearance',
        transcription: '/ˈpɒlɪʃt əˈpɪərəns/',
        wrong: ['Processed appearance', 'Prompted appearance', 'Protected appearance', 'Published appearance'],
      },
      {
        basic: 'Anti-ageing',
        advanced: 'Age-defying',
        transcription: '/eɪdʒ dɪˈfaɪɪŋ/',
        wrong: ['Age-defining', 'Age-detecting', 'Age-deploying', 'Age-deriving'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 9. HEALTH
  // ─────────────────────────────────────────
  {
    id: 'health',
    name: 'Health',
    words: [
      {
        basic: 'Sick',
        advanced: 'Unwell',
        transcription: '/ʌnˈwel/',
        wrong: ['Unstable', 'Unclear', 'Unfit', 'Unsorted'],
      },
      {
        basic: 'Get better',
        advanced: 'Recover',
        transcription: '/rɪˈkʌvər/',
        wrong: ['Refactor', 'Redirect', 'Refresh', 'Render'],
      },
      {
        basic: 'Doctor visit',
        advanced: 'Medical consultation',
        transcription: '/ˈmedɪkəl ˌkɒnsəlˈteɪʃən/',
        wrong: ['Medical configuration', 'Medical compilation', 'Medical conversion', 'Medical compression'],
      },
      {
        basic: 'Painkiller',
        advanced: 'Anti-inflammatory',
        transcription: '/ˌæntɪ ɪnˈflæmətəri/',
        wrong: ['Anti-inflationary', 'Anti-informative', 'Anti-iterative', 'Anti-invasive'],
      },
      {
        basic: 'Tired all the time',
        advanced: 'Chronic fatigue',
        transcription: '/ˈkrɒnɪk fəˈtiːɡ/',
        wrong: ['Chronic failure', 'Chronic feedback', 'Chronic filter', 'Chronic firewall'],
      },
      {
        basic: 'Mental health',
        advanced: 'Psychological wellbeing',
        transcription: '/ˌsaɪkəˈlɒdʒɪkəl ˈwelbiːɪŋ/',
        wrong: ['Psychological workflow', 'Psychological whiteboard', 'Psychological webhook', 'Psychological widget'],
      },
      {
        basic: 'Good shape',
        advanced: 'Physical fitness',
        transcription: '/ˈfɪzɪkəl ˈfɪtnəs/',
        wrong: ['Physical firewall', 'Physical framework', 'Physical frontend', 'Physical filter'],
      },
      {
        basic: 'Not eating enough',
        advanced: 'Malnourished',
        transcription: '/mælˈnʌrɪʃt/',
        wrong: ['Malfunctioning', 'Malformatted', 'Mislabelled', 'Misaligned'],
      },
      {
        basic: 'Healthy eating',
        advanced: 'Balanced diet',
        transcription: '/ˈbælənst ˈdaɪət/',
        wrong: ['Blocked diet', 'Bundled diet', 'Buffered diet', 'Branched diet'],
      },
      {
        basic: 'Check up',
        advanced: 'Routine screening',
        transcription: '/ruːˈtiːn ˈskriːnɪŋ/',
        wrong: ['Routed screening', 'Rendered screening', 'Released screening', 'Replicated screening'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 10. ROUTINE
  // ─────────────────────────────────────────
  {
    id: 'routine',
    name: 'Routine',
    words: [
      {
        basic: 'Wake up',
        advanced: 'Rise',
        transcription: '/raɪz/',
        wrong: ['Run', 'Route', 'Render', 'Release'],
      },
      {
        basic: 'Daily habit',
        advanced: 'Ritual',
        transcription: '/ˈrɪtʃuəl/',
        wrong: ['Runtime', 'Rollback', 'Routing', 'Registry'],
      },
      {
        basic: 'Morning routine',
        advanced: 'AM protocol',
        transcription: '/ˌeɪ em ˈprəʊtəkɒl/',
        wrong: ['AM process', 'AM profile', 'AM proxy', 'AM plugin'],
      },
      {
        basic: 'Get dressed',
        advanced: 'Get ready',
        transcription: '/ɡet ˈredi/',
        wrong: ['Get routed', 'Get rendered', 'Get released', 'Get restored'],
      },
      {
        basic: 'Commute',
        advanced: 'Daily travel',
        transcription: '/ˈdeɪli ˈtrævəl/',
        wrong: ['Daily tracking', 'Daily transfer', 'Daily trigger', 'Daily testing'],
      },
      {
        basic: 'Lunch break',
        advanced: 'Midday recess',
        transcription: '/ˌmɪddeɪ ˈriːses/',
        wrong: ['Midday redirect', 'Midday render', 'Midday release', 'Midday reload'],
      },
      {
        basic: 'Plan the week',
        advanced: 'Schedule',
        transcription: '/ˈʃedjuːl/',
        wrong: ['Script', 'Schema', 'Scope', 'Snapshot'],
      },
      {
        basic: 'Night routine',
        advanced: 'Wind-down ritual',
        transcription: '/wɪnd daʊn ˈrɪtʃuəl/',
        wrong: ['Wire-down ritual', 'Write-down ritual', 'Wrap-down ritual', 'Work-down ritual'],
      },
      {
        basic: 'Go to sleep',
        advanced: 'Retire for the night',
        transcription: '/rɪˈtaɪər fər ðə naɪt/',
        wrong: ['Redirect for the night', 'Render for the night', 'Release for the night', 'Reload for the night'],
      },
      {
        basic: 'Productive day',
        advanced: 'High-output day',
        transcription: '/haɪ ˈaʊtpʊt deɪ/',
        wrong: ['High-overhead day', 'High-overload day', 'High-overflow day', 'High-override day'],
      },
    ],
  },
]
