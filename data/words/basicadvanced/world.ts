// ============================================================
// WORLD — Basic → Advanced vocabulary
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

export const WORLD: Subcategory[] = [

  // ─────────────────────────────────────────
  // 1. HOME
  // ─────────────────────────────────────────
  {
    id: 'home',
    name: 'Home',
    words: [
      {
        basic: 'Living room',
        advanced: 'Lounge',
        transcription: '/laʊndʒ/',
        wrong: ['Lodge', 'Loft', 'Lobby', 'Lane'],
      },
      {
        basic: 'Bedroom',
        advanced: 'Chamber',
        transcription: '/ˈtʃeɪmbər/',
        wrong: ['Corridor', 'Cabin', 'Corner', 'Canopy'],
      },
      {
        basic: 'Messy',
        advanced: 'Cluttered',
        transcription: '/ˈklʌtərd/',
        wrong: ['Crafted', 'Curved', 'Coated', 'Compact'],
      },
      {
        basic: 'Clean',
        advanced: 'Pristine',
        transcription: '/ˈprɪstiːn/',
        wrong: ['Private', 'Primary', 'Precise', 'Profound'],
      },
      {
        basic: 'Cozy',
        advanced: 'Intimate',
        transcription: '/ˈɪntɪmət/',
        wrong: ['Isolated', 'Immense', 'Inviting', 'Intense'],
      },
      {
        basic: 'Old house',
        advanced: 'Vintage property',
        transcription: '/ˈvɪntɪdʒ ˈprɒpəti/',
        wrong: ['Visual property', 'Vacant property', 'Valued property', 'Varied property'],
      },
      {
        basic: 'Big window',
        advanced: 'Panoramic window',
        transcription: '/ˌpænəˈræmɪk ˈwɪndəʊ/',
        wrong: ['Partial window', 'Pivoting window', 'Passive window', 'Polished window'],
      },
      {
        basic: 'Furniture',
        advanced: 'Furnishings',
        transcription: '/ˈfɜːrnɪʃɪŋz/',
        wrong: ['Foundations', 'Fixtures', 'Features', 'Finishes'],
      },
      {
        basic: 'Decoration',
        advanced: 'Aesthetic',
        transcription: '/esˈθetɪk/',
        wrong: ['Altitude', 'Attribute', 'Attitude', 'Appetite'],
      },
      {
        basic: 'Rented flat',
        advanced: 'Leased apartment',
        transcription: '/liːst əˈpɑːrtmənt/',
        wrong: ['Listed apartment', 'Linked apartment', 'Lined apartment', 'Lifted apartment'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 2. NEIGHBOURHOOD
  // ─────────────────────────────────────────
  {
    id: 'neighbourhood',
    name: 'Neighbourhood',
    words: [
      {
        basic: 'Area',
        advanced: 'District',
        transcription: '/ˈdɪstrɪkt/',
        wrong: ['Distant', 'Display', 'Dispute', 'Dismiss'],
      },
      {
        basic: 'Street',
        advanced: 'Boulevard',
        transcription: '/ˈbuːləvɑːrd/',
        wrong: ['Boundary', 'Bracket', 'Barrier', 'Balance'],
      },
      {
        basic: 'Busy area',
        advanced: 'Bustling district',
        transcription: '/ˈbʌslɪŋ ˈdɪstrɪkt/',
        wrong: ['Blended district', 'Blocked district', 'Broad district', 'Broken district'],
      },
      {
        basic: 'Safe area',
        advanced: 'Secure neighbourhood',
        transcription: '/sɪˈkjʊər ˈneɪbəhʊd/',
        wrong: ['Shared neighbourhood', 'Scenic neighbourhood', 'Simple neighbourhood', 'Sorted neighbourhood'],
      },
      {
        basic: 'Poor area',
        advanced: 'Deprived area',
        transcription: '/dɪˈpraɪvd ˈeəriə/',
        wrong: ['Divided area', 'Distant area', 'Declared area', 'Defined area'],
      },
      {
        basic: 'Rich area',
        advanced: 'Affluent neighbourhood',
        transcription: '/ˈæfluənt ˈneɪbəhʊd/',
        wrong: ['Active neighbourhood', 'Adopted neighbourhood', 'Advanced neighbourhood', 'Agreed neighbourhood'],
      },
      {
        basic: 'Neighbour',
        advanced: 'Resident',
        transcription: '/ˈrezɪdənt/',
        wrong: ['Referee', 'Reporter', 'Recruiter', 'Receiver'],
      },
      {
        basic: 'Local shop',
        advanced: 'Convenience store',
        transcription: '/kənˈviːniəns stɔːr/',
        wrong: ['Community store', 'Collective store', 'Combined store', 'Common store'],
      },
      {
        basic: 'Park',
        advanced: 'Green space',
        transcription: '/ɡriːn speɪs/',
        wrong: ['Grand space', 'General space', 'Guided space', 'Ground space'],
      },
      {
        basic: 'Main road',
        advanced: 'Arterial road',
        transcription: '/ɑːrˈtɪəriəl rəʊd/',
        wrong: ['Annual road', 'Actual road', 'Adjusted road', 'Adopted road'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 3. NATURE
  // ─────────────────────────────────────────
  {
    id: 'nature',
    name: 'Nature',
    words: [
      {
        basic: 'Forest',
        advanced: 'Woodland',
        transcription: '/ˈwʊdlənd/',
        wrong: ['Wetland', 'Wasteland', 'Watershed', 'Waterfront'],
      },
      {
        basic: 'River',
        advanced: 'Waterway',
        transcription: '/ˈwɔːtərweɪ/',
        wrong: ['Watershed', 'Waterfront', 'Wetland', 'Woodland'],
      },
      {
        basic: 'Big rock',
        advanced: 'Boulder',
        transcription: '/ˈboʊldər/',
        wrong: ['Barrier', 'Border', 'Burrow', 'Branch'],
      },
      {
        basic: 'Wild animal',
        advanced: 'Wildlife',
        transcription: '/ˈwaɪldlaɪf/',
        wrong: ['Windfall', 'Withered', 'Winding', 'Wistful'],
      },
      {
        basic: 'Green land',
        advanced: 'Meadow',
        transcription: '/ˈmedoʊ/',
        wrong: ['Margin', 'Mound', 'Marsh', 'Manor'],
      },
      {
        basic: 'Dirty water',
        advanced: 'Contaminated water',
        transcription: '/kənˈtæmɪneɪtɪd ˈwɔːtər/',
        wrong: ['Controlled water', 'Collected water', 'Converted water', 'Combined water'],
      },
      {
        basic: 'Plant',
        advanced: 'Vegetation',
        transcription: '/ˌvedʒɪˈteɪʃən/',
        wrong: ['Variation', 'Vibration', 'Validation', 'Ventilation'],
      },
      {
        basic: 'Flat land',
        advanced: 'Plain',
        transcription: '/pleɪn/',
        wrong: ['Patch', 'Peak', 'Plateau', 'Pond'],
      },
      {
        basic: 'Animal home',
        advanced: 'Habitat',
        transcription: '/ˈhæbɪtæt/',
        wrong: ['Heritage', 'Hazard', 'Harvest', 'Harmony'],
      },
      {
        basic: 'Dry land',
        advanced: 'Arid landscape',
        transcription: '/ˈærɪd ˈlændskeɪp/',
        wrong: ['Active landscape', 'Altered landscape', 'Annual landscape', 'Applied landscape'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 4. WEATHER
  // ─────────────────────────────────────────
  {
    id: 'weather',
    name: 'Weather',
    words: [
      {
        basic: 'Hot',
        advanced: 'Scorching',
        transcription: '/ˈskɔːrtʃɪŋ/',
        wrong: ['Scattering', 'Shifting', 'Scathed', 'Scraping'],
      },
      {
        basic: 'Cold',
        advanced: 'Freezing',
        transcription: '/ˈfriːzɪŋ/',
        wrong: ['Fading', 'Falling', 'Flowing', 'Forming'],
      },
      {
        basic: 'Windy',
        advanced: 'Blustery',
        transcription: '/ˈblʌstəri/',
        wrong: ['Blurry', 'Blended', 'Blocked', 'Blotted'],
      },
      {
        basic: 'Rainy',
        advanced: 'Torrential',
        transcription: '/təˈrenʃəl/',
        wrong: ['Terminal', 'Textural', 'Tropical', 'Temporal'],
      },
      {
        basic: 'Cloudy',
        advanced: 'Overcast',
        transcription: '/ˈoʊvərkæst/',
        wrong: ['Outspread', 'Outpaced', 'Outward', 'Outlined'],
      },
      {
        basic: 'Sunny',
        advanced: 'Clear skies',
        transcription: '/klɪər skaɪz/',
        wrong: ['Clean skies', 'Calm skies', 'Cool skies', 'Crisp skies'],
      },
      {
        basic: 'Foggy',
        advanced: 'Misty',
        transcription: '/ˈmɪsti/',
        wrong: ['Mighty', 'Minimal', 'Mixed', 'Muted'],
      },
      {
        basic: 'Storm',
        advanced: 'Tempest',
        transcription: '/ˈtempɪst/',
        wrong: ['Terrain', 'Texture', 'Tension', 'Terminal'],
      },
      {
        basic: 'Nice weather',
        advanced: 'Mild conditions',
        transcription: '/maɪld kənˈdɪʃənz/',
        wrong: ['Mixed conditions', 'Modern conditions', 'Mutual conditions', 'Managed conditions'],
      },
      {
        basic: 'Bad weather',
        advanced: 'Harsh conditions',
        transcription: '/hɑːrʃ kənˈdɪʃənz/',
        wrong: ['Hard conditions', 'Heavy conditions', 'High conditions', 'Hot conditions'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 5. TRAVEL
  // ─────────────────────────────────────────
  {
    id: 'travel',
    name: 'Travel',
    words: [
      {
        basic: 'Trip',
        advanced: 'Expedition',
        transcription: '/ˌekspɪˈdɪʃən/',
        wrong: ['Expansion', 'Expression', 'Extension', 'Expectation'],
      },
      {
        basic: 'Hotel',
        advanced: 'Accommodation',
        transcription: '/əˌkɒməˈdeɪʃən/',
        wrong: ['Achievement', 'Acquisition', 'Acknowledgement', 'Accumulation'],
      },
      {
        basic: 'Sightseeing',
        advanced: 'Exploration',
        transcription: '/ˌekspləˈreɪʃən/',
        wrong: ['Expectation', 'Explanation', 'Exploitation', 'Expression'],
      },
      {
        basic: 'Guide',
        advanced: 'Local expert',
        transcription: '/ˈloʊkəl ˈekspɜːrt/',
        wrong: ['Local event', 'Local effort', 'Local element', 'Local entry'],
      },
      {
        basic: 'Cheap flight',
        advanced: 'Budget airline',
        transcription: '/ˈbʌdʒɪt ˈeərlaɪn/',
        wrong: ['Basic airline', 'Blended airline', 'Booked airline', 'Broad airline'],
      },
      {
        basic: 'Passport',
        advanced: 'Travel document',
        transcription: '/ˈtrævəl ˈdɒkjʊmənt/',
        wrong: ['Travel discount', 'Travel display', 'Travel distance', 'Travel detail'],
      },
      {
        basic: 'Tourist',
        advanced: 'Traveller',
        transcription: '/ˈtrævələr/',
        wrong: ['Trader', 'Tracker', 'Transfer', 'Trainer'],
      },
      {
        basic: 'Border',
        advanced: 'Frontier',
        transcription: '/ˈfrʌntiər/',
        wrong: ['Fragment', 'Framework', 'Fraction', 'Frequency'],
      },
      {
        basic: 'Far away',
        advanced: 'Remote',
        transcription: '/rɪˈmoʊt/',
        wrong: ['Revised', 'Refined', 'Restored', 'Resolved'],
      },
      {
        basic: 'Holiday',
        advanced: 'Retreat',
        transcription: '/rɪˈtriːt/',
        wrong: ['Reveal', 'Review', 'Revive', 'Reward'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 6. ARCHITECTURE
  // ─────────────────────────────────────────
  {
    id: 'architecture',
    name: 'Architecture',
    words: [
      {
        basic: 'Building',
        advanced: 'Structure',
        transcription: '/ˈstrʌktʃər/',
        wrong: ['Segment', 'Surface', 'Sequence', 'System'],
      },
      {
        basic: 'Old building',
        advanced: 'Heritage site',
        transcription: '/ˈherɪtɪdʒ saɪt/',
        wrong: ['Historic site', 'Humble site', 'Hidden site', 'Handled site'],
      },
      {
        basic: 'New building',
        advanced: 'Modern structure',
        transcription: '/ˈmɒdərn ˈstrʌktʃər/',
        wrong: ['Managed structure', 'Merged structure', 'Mounted structure', 'Mixed structure'],
      },
      {
        basic: 'Tall building',
        advanced: 'Skyscraper',
        transcription: '/ˈskaɪskreɪpər/',
        wrong: ['Skyline', 'Skylight', 'Skyway', 'Skyward'],
      },
      {
        basic: 'Roof',
        advanced: 'Canopy',
        transcription: '/ˈkænəpi/',
        wrong: ['Capacity', 'Category', 'Capture', 'Canvas'],
      },
      {
        basic: 'Entrance',
        advanced: 'Facade',
        transcription: '/fəˈsɑːd/',
        wrong: ['Factor', 'Feature', 'Format', 'Formula'],
      },
      {
        basic: 'Floor plan',
        advanced: 'Layout',
        transcription: '/ˈleɪaʊt/',
        wrong: ['Layover', 'Landmark', 'Linkage', 'Ledger'],
      },
      {
        basic: 'Wall',
        advanced: 'Partition',
        transcription: '/pɑːrˈtɪʃən/',
        wrong: ['Pattern', 'Platform', 'Passage', 'Pathway'],
      },
      {
        basic: 'Design style',
        advanced: 'Architectural style',
        transcription: '/ˌɑːrkɪˈtektʃərəl staɪl/',
        wrong: ['Automated style', 'Applied style', 'Abstract style', 'Approved style'],
      },
      {
        basic: 'Open space inside',
        advanced: 'Atrium',
        transcription: '/ˈeɪtriəm/',
        wrong: ['Altitude', 'Attribute', 'Attitude', 'Aptitude'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 7. OBJECTS
  // ─────────────────────────────────────────
  {
    id: 'objects',
    name: 'Objects',
    words: [
      {
        basic: 'Thing',
        advanced: 'Object',
        transcription: '/ˈɒbdʒɪkt/',
        wrong: ['Output', 'Option', 'Outcome', 'Outline'],
      },
      {
        basic: 'Old thing',
        advanced: 'Antique',
        transcription: '/ænˈtiːk/',
        wrong: ['Anchor', 'Aspect', 'Asset', 'Angle'],
      },
      {
        basic: 'Tool',
        advanced: 'Instrument',
        transcription: '/ˈɪnstrəmənt/',
        wrong: ['Instance', 'Input', 'Insight', 'Intention'],
      },
      {
        basic: 'Copy',
        advanced: 'Replica',
        transcription: '/ˈreplɪkə/',
        wrong: ['Release', 'Record', 'Receipt', 'Request'],
      },
      {
        basic: 'Broken',
        advanced: 'Defective',
        transcription: '/dɪˈfektɪv/',
        wrong: ['Decisive', 'Defensive', 'Definite', 'Derived'],
      },
      {
        basic: 'Useful',
        advanced: 'Functional',
        transcription: '/ˈfʌŋkʃənəl/',
        wrong: ['Factual', 'Formal', 'Flexible', 'Focused'],
      },
      {
        basic: 'Handmade',
        advanced: 'Crafted',
        transcription: '/ˈkrɑːftɪd/',
        wrong: ['Captured', 'Claimed', 'Cleared', 'Coded'],
      },
      {
        basic: 'Small item',
        advanced: 'Compact device',
        transcription: '/ˈkɒmpækt dɪˈvaɪs/',
        wrong: ['Coded device', 'Covered device', 'Custom device', 'Common device'],
      },
      {
        basic: 'Expensive item',
        advanced: 'Luxury good',
        transcription: '/ˈlʌkʃəri ɡʊd/',
        wrong: ['Leading good', 'Limited good', 'Linked good', 'Listed good'],
      },
      {
        basic: 'Rare item',
        advanced: 'Collectible',
        transcription: '/kəˈlektɪbəl/',
        wrong: ['Comparable', 'Compatible', 'Competitive', 'Compelling'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 8. MATERIALS
  // ─────────────────────────────────────────
  {
    id: 'materials',
    name: 'Materials',
    words: [
      {
        basic: 'Hard',
        advanced: 'Rigid',
        transcription: '/ˈrɪdʒɪd/',
        wrong: ['Rounded', 'Refined', 'Rugged', 'Robust'],
      },
      {
        basic: 'Soft',
        advanced: 'Pliable',
        transcription: '/ˈplaɪəbəl/',
        wrong: ['Polished', 'Portable', 'Precise', 'Practical'],
      },
      {
        basic: 'See-through',
        advanced: 'Transparent',
        transcription: '/trænsˈpærənt/',
        wrong: ['Temporary', 'Terminal', 'Textured', 'Tropical'],
      },
      {
        basic: 'Shiny',
        advanced: 'Glossy',
        transcription: '/ˈɡlɒsi/',
        wrong: ['Gradual', 'Graphic', 'Graceful', 'Generous'],
      },
      {
        basic: 'Rough',
        advanced: 'Coarse',
        transcription: '/kɔːrs/',
        wrong: ['Compact', 'Curved', 'Coated', 'Crafted'],
      },
      {
        basic: 'Smooth',
        advanced: 'Sleek',
        transcription: '/sliːk/',
        wrong: ['Steady', 'Strict', 'Subtle', 'Sharp'],
      },
      {
        basic: 'Natural',
        advanced: 'Organic',
        transcription: '/ɔːrˈɡænɪk/',
        wrong: ['Original', 'Outlined', 'Ordered', 'Official'],
      },
      {
        basic: 'Man-made',
        advanced: 'Synthetic',
        transcription: '/sɪnˈθetɪk/',
        wrong: ['Specific', 'Symbolic', 'Systemic', 'Scenic'],
      },
      {
        basic: 'Light',
        advanced: 'Lightweight',
        transcription: '/ˈlaɪtweɪt/',
        wrong: ['Likewise', 'Lifetime', 'Lively', 'Lifelike'],
      },
      {
        basic: 'Strong material',
        advanced: 'Durable',
        transcription: '/ˈdjʊərəbəl/',
        wrong: ['Dynamic', 'Distinct', 'Diverse', 'Digital'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 9. SPACE
  // ─────────────────────────────────────────
  {
    id: 'space',
    name: 'Space',
    words: [
      {
        basic: 'Big area',
        advanced: 'Vast expanse',
        transcription: '/væst ɪkˈspæns/',
        wrong: ['Valid expanse', 'Varied expanse', 'Virtual expanse', 'Visual expanse'],
      },
      {
        basic: 'Small area',
        advanced: 'Confined space',
        transcription: '/kənˈfaɪnd speɪs/',
        wrong: ['Covered space', 'Connected space', 'Combined space', 'Controlled space'],
      },
      {
        basic: 'Empty',
        advanced: 'Vacant',
        transcription: '/ˈveɪkənt/',
        wrong: ['Valued', 'Varied', 'Visible', 'Virtual'],
      },
      {
        basic: 'Crowded',
        advanced: 'Congested',
        transcription: '/kənˈdʒestɪd/',
        wrong: ['Confirmed', 'Connected', 'Contained', 'Converted'],
      },
      {
        basic: 'Far',
        advanced: 'Distant',
        transcription: '/ˈdɪstənt/',
        wrong: ['Defined', 'Derived', 'Devoted', 'Directed'],
      },
      {
        basic: 'Near',
        advanced: 'Adjacent',
        transcription: '/əˈdʒeɪsənt/',
        wrong: ['Adopted', 'Advanced', 'Adjusted', 'Admitted'],
      },
      {
        basic: 'Underground',
        advanced: 'Subterranean',
        transcription: '/ˌsʌbtəˈreɪniən/',
        wrong: ['Substantial', 'Subsequent', 'Subjective', 'Substitute'],
      },
      {
        basic: 'High up',
        advanced: 'Elevated',
        transcription: '/ˈelɪveɪtɪd/',
        wrong: ['Eliminated', 'Embedded', 'Emerged', 'Enabled'],
      },
      {
        basic: 'Open area',
        advanced: 'Expansive space',
        transcription: '/ɪkˈspænsɪv speɪs/',
        wrong: ['Expected space', 'Explicit space', 'Exposed space', 'Extended space'],
      },
      {
        basic: 'Hidden place',
        advanced: 'Secluded spot',
        transcription: '/sɪˈkluːdɪd spɒt/',
        wrong: ['Selected spot', 'Separate spot', 'Settled spot', 'Shared spot'],
      },
    ],
  },

  // ─────────────────────────────────────────
  // 10. ATMOSPHERE
  // ─────────────────────────────────────────
  {
    id: 'atmosphere',
    name: 'Atmosphere',
    words: [
      {
        basic: 'Nice vibe',
        advanced: 'Welcoming ambience',
        transcription: '/ˈwelkəmɪŋ ˈæmbiəns/',
        wrong: ['Working ambience', 'Winding ambience', 'Winning ambience', 'Wider ambience'],
      },
      {
        basic: 'Bad vibe',
        advanced: 'Tense atmosphere',
        transcription: '/tens ˈætməsfɪər/',
        wrong: ['Total atmosphere', 'Typical atmosphere', 'Tight atmosphere', 'Traditional atmosphere'],
      },
      {
        basic: 'Quiet place',
        advanced: 'Tranquil setting',
        transcription: '/ˈtræŋkwɪl ˈsetɪŋ/',
        wrong: ['Tracked setting', 'Trained setting', 'Trusted setting', 'Tested setting'],
      },
      {
        basic: 'Lively place',
        advanced: 'Vibrant scene',
        transcription: '/ˈvaɪbrənt siːn/',
        wrong: ['Visible scene', 'Varied scene', 'Virtual scene', 'Valued scene'],
      },
      {
        basic: 'Romantic',
        advanced: 'Intimate',
        transcription: '/ˈɪntɪmət/',
        wrong: ['Intense', 'Inviting', 'Immense', 'Isolated'],
      },
      {
        basic: 'Scary place',
        advanced: 'Eerie location',
        transcription: '/ˈɪəri ləʊˈkeɪʃən/',
        wrong: ['Early location', 'Easy location', 'Equal location', 'Exact location'],
      },
      {
        basic: 'Feeling',
        advanced: 'Ambience',
        transcription: '/ˈæmbiəns/',
        wrong: ['Ability', 'Absence', 'Account', 'Advance'],
      },
      {
        basic: 'Mood',
        advanced: 'Vibe',
        transcription: '/vaɪb/',
        wrong: ['View', 'Value', 'Venue', 'Voice'],
      },
      {
        basic: 'Warm feeling',
        advanced: 'Inviting atmosphere',
        transcription: '/ɪnˈvaɪtɪŋ ˈætməsfɪər/',
        wrong: ['Involved atmosphere', 'Improved atmosphere', 'Intended atmosphere', 'Increased atmosphere'],
      },
      {
        basic: 'Dark mood',
        advanced: 'Gloomy atmosphere',
        transcription: '/ˈɡluːmi ˈætməsfɪər/',
        wrong: ['Global atmosphere', 'General atmosphere', 'Genuine atmosphere', 'Given atmosphere'],
      },
    ],
  },
]
