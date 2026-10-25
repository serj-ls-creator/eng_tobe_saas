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
        advanced: 'Suite',
        transcription: '/swiːt/',
        wrong: ['Shed', 'Stable', 'Sofa', 'Stairway'],
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
        advanced: 'Snug',
        transcription: '/snʌɡ/',
        wrong: ['Sturdy', 'Shallow', 'Stark', 'Sparse'],
      },
      {
        basic: 'Old-fashioned',
        advanced: 'Vintage',
        transcription: '/ˈvɪntɪdʒ/',
        wrong: ['Vacant', 'Valid', 'Vague', 'Vital'],
      },
      {
        basic: 'Big view',
        advanced: 'Panoramic',
        transcription: '/ˌpænəˈræmɪk/',
        wrong: ['Passive', 'Polished', 'Plentiful', 'Patient'],
      },
      {
        basic: 'Furniture',
        advanced: 'Furnishings',
        transcription: '/ˈfɜːrnɪʃɪŋz/',
        wrong: ['Foundations', 'Fixtures', 'Features', 'Finishes'],
      },
      {
        basic: 'Decoration',
        advanced: 'Décor',
        transcription: '/deɪˈkɔːr/',
        wrong: ['Debris', 'Debate', 'Decade', 'Detail'],
      },
      {
        basic: 'One-room flat',
        advanced: 'Studio',
        transcription: '/ˈstuːdioʊ/',
        wrong: ['Stable', 'Station', 'Storage', 'Stadium'],
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
        basic: 'Busy',
        advanced: 'Bustling',
        transcription: '/ˈbʌslɪŋ/',
        wrong: ['Blended', 'Blocked', 'Broad', 'Bitter'],
      },
      {
        basic: 'Safe area',
        advanced: 'Haven',
        transcription: '/ˈheɪvən/',
        wrong: ['Hazard', 'Hurdle', 'Hammer', 'Habit'],
      },
      {
        basic: 'Poor area',
        advanced: 'Run-down',
        transcription: '/ˌrʌn ˈdaʊn/',
        wrong: ['Rural', 'Radical', 'Reliable', 'Reserved'],
      },
      {
        basic: 'Rich area',
        advanced: 'Upscale',
        transcription: '/ˌʌpˈskeɪl/',
        wrong: ['Upfront', 'Upright', 'Upset', 'Upgrade'],
      },
      {
        basic: 'Neighbour',
        advanced: 'Resident',
        transcription: '/ˈrezɪdənt/',
        wrong: ['Referee', 'Reporter', 'Recruiter', 'Receiver'],
      },
      {
        basic: 'Small trendy shop',
        advanced: 'Boutique',
        transcription: '/buːˈtiːk/',
        wrong: ['Barrier', 'Balcony', 'Border', 'Bracket'],
      },
      {
        basic: 'Quiet green place',
        advanced: 'Oasis',
        transcription: '/oʊˈeɪsɪs/',
        wrong: ['Outlet', 'Orbit', 'Origin', 'Oven'],
      },
      {
        basic: 'Main road',
        advanced: 'Highway',
        transcription: '/ˈhaɪweɪ/',
        wrong: ['Harbor', 'Hallway', 'Hedge', 'Headline'],
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
        basic: 'Small river',
        advanced: 'Creek',
        transcription: '/kriːk/',
        wrong: ['Cliff', 'Crater', 'Canyon', 'Cavern'],
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
        basic: 'Dirty',
        advanced: 'Polluted',
        transcription: '/pəˈluːtɪd/',
        wrong: ['Polished', 'Portable', 'Precise', 'Patient'],
      },
      {
        basic: 'Plant',
        advanced: 'Vegetation',
        transcription: '/ˌvedʒɪˈteɪʃən/',
        wrong: ['Variation', 'Vibration', 'Validation', 'Ventilation'],
      },
      {
        basic: 'Flat land',
        advanced: 'Prairie',
        transcription: '/ˈpreri/',
        wrong: ['Pebble', 'Peak', 'Pond', 'Patch'],
      },
      {
        basic: 'Animal home',
        advanced: 'Habitat',
        transcription: '/ˈhæbɪtæt/',
        wrong: ['Heritage', 'Hazard', 'Harvest', 'Harmony'],
      },
      {
        basic: 'Dry land',
        advanced: 'Arid',
        transcription: '/ˈærɪd/',
        wrong: ['Active', 'Annual', 'Applied', 'Ancient'],
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
        advanced: 'Frigid',
        transcription: '/ˈfrɪdʒɪd/',
        wrong: ['Fragile', 'Fierce', 'Frantic', 'Fertile'],
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
        advanced: 'Radiant',
        transcription: '/ˈreɪdiənt/',
        wrong: ['Rapid', 'Remote', 'Rigid', 'Rural'],
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
        basic: 'Nice warm weather',
        advanced: 'Balmy',
        transcription: '/ˈbɑːmi/',
        wrong: ['Barren', 'Bleak', 'Brisk', 'Bland'],
      },
      {
        basic: 'Bad weather',
        advanced: 'Brutal',
        transcription: '/ˈbruːtl/',
        wrong: ['Brief', 'Broad', 'Bright', 'Brave'],
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
        advanced: 'Getaway',
        transcription: '/ˈɡetəweɪ/',
        wrong: ['Garment', 'Gesture', 'Glimpse', 'Gallery'],
      },
      {
        basic: 'Hotel',
        advanced: 'Accommodation',
        transcription: '/əˌkɒməˈdeɪʃən/',
        wrong: ['Achievement', 'Acquisition', 'Acknowledgement', 'Accumulation'],
      },
      {
        basic: 'See the sights',
        advanced: 'Explore',
        transcription: '/ɪkˈsplɔːr/',
        wrong: ['Expand', 'Export', 'Express', 'Exploit'],
      },
      {
        basic: 'Secret place',
        advanced: 'Hidden gem',
        transcription: '/ˌhɪdn ˈdʒem/',
        wrong: ['Heavy gear', 'High gate', 'Hollow tree', 'Humble home'],
      },
      {
        basic: 'Cheap flight',
        advanced: 'Budget airline',
        transcription: '/ˈbʌdʒɪt ˈeərlaɪn/',
        wrong: ['Blended airline', 'Booked airline', 'Broad airline', 'Bright airline'],
      },
      {
        basic: 'Cheap hotel',
        advanced: 'Hostel',
        transcription: '/ˈhɑːstl/',
        wrong: ['Harbor', 'Hollow', 'Hamlet', 'Hazard'],
      },
      {
        basic: 'Traveler with a backpack',
        advanced: 'Backpacker',
        transcription: '/ˈbækpækər/',
        wrong: ['Banker', 'Baker', 'Barber', 'Builder'],
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
        advanced: 'Landmark',
        transcription: '/ˈlændmɑːrk/',
        wrong: ['Landlord', 'Lantern', 'Lagoon', 'Lawn'],
      },
      {
        basic: 'New and modern',
        advanced: 'Contemporary',
        transcription: '/kənˈtempəreri/',
        wrong: ['Compact', 'Casual', 'Cautious', 'Comfortable'],
      },
      {
        basic: 'Tall building',
        advanced: 'Skyscraper',
        transcription: '/ˈskaɪskreɪpər/',
        wrong: ['Skyline', 'Skylight', 'Skyway', 'Skyward'],
      },
      {
        basic: 'Top-floor flat',
        advanced: 'Penthouse',
        transcription: '/ˈpenthaʊs/',
        wrong: ['Pavement', 'Pillar', 'Pavilion', 'Platform'],
      },
      {
        basic: 'Front of a building',
        advanced: 'Facade',
        transcription: '/fəˈsɑːd/',
        wrong: ['Factor', 'Feature', 'Format', 'Formula'],
      },
      {
        basic: 'Floor plan',
        advanced: 'Layout',
        transcription: '/ˈleɪaʊt/',
        wrong: ['Layover', 'Linkage', 'Ledger', 'Lattice'],
      },
      {
        basic: 'Wall between rooms',
        advanced: 'Partition',
        transcription: '/pɑːrˈtɪʃən/',
        wrong: ['Pattern', 'Platform', 'Passage', 'Pathway'],
      },
      {
        basic: 'Simple clean style',
        advanced: 'Minimalist',
        transcription: '/ˈmɪnɪməlɪst/',
        wrong: ['Mechanic', 'Magnet', 'Marshal', 'Mediator'],
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
        basic: 'Tech thing',
        advanced: 'Gadget',
        transcription: '/ˈɡædʒɪt/',
        wrong: ['Glacier', 'Ghost', 'Goblet', 'Ginger'],
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
        advanced: 'Artisanal',
        transcription: '/ˌɑːrtɪˈzænl/',
        wrong: ['Artificial', 'Annual', 'Ancient', 'Adequate'],
      },
      {
        basic: 'Small item',
        advanced: 'Pocket-sized',
        transcription: '/ˈpɑːkɪt saɪzd/',
        wrong: ['Polished', 'Potent', 'Peaceful', 'Pleasant'],
      },
      {
        basic: 'Expensive thing',
        advanced: 'Luxury',
        transcription: '/ˈlʌkʃəri/',
        wrong: ['Lumber', 'Locket', 'Ledger', 'Lecture'],
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
        advanced: 'Plush',
        transcription: '/plʌʃ/',
        wrong: ['Pivotal', 'Precise', 'Portable', 'Peaceful'],
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
        basic: 'Stretchy',
        advanced: 'Elastic',
        transcription: '/ɪˈlæstɪk/',
        wrong: ['Eternal', 'Eager', 'Earnest', 'Emerald'],
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
        basic: 'Huge',
        advanced: 'Vast',
        transcription: '/væst/',
        wrong: ['Valid', 'Varied', 'Virtual', 'Visual'],
      },
      {
        basic: 'Small and tight',
        advanced: 'Cramped',
        transcription: '/kræmpt/',
        wrong: ['Coated', 'Crafted', 'Curved', 'Calm'],
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
        basic: 'Big and open inside',
        advanced: 'Spacious',
        transcription: '/ˈspeɪʃəs/',
        wrong: ['Special', 'Subtle', 'Shallow', 'Sturdy'],
      },
      {
        basic: 'Hidden place',
        advanced: 'Hideaway',
        transcription: '/ˈhaɪdəweɪ/',
        wrong: ['Harbor', 'Hammock', 'Horizon', 'Habit'],
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
        advanced: 'Welcoming',
        transcription: '/ˈwelkəmɪŋ/',
        wrong: ['Working', 'Winding', 'Wasteful', 'Wary'],
      },
      {
        basic: 'Bad vibe',
        advanced: 'Tense',
        transcription: '/tens/',
        wrong: ['Total', 'Tropical', 'Thorough', 'Tidy'],
      },
      {
        basic: 'Quiet place',
        advanced: 'Tranquil',
        transcription: '/ˈtræŋkwəl/',
        wrong: ['Typical', 'Trusted', 'Tested', 'Tangled'],
      },
      {
        basic: 'Lively place',
        advanced: 'Buzzing',
        transcription: '/ˈbʌzɪŋ/',
        wrong: ['Bossy', 'Barren', 'Bitter', 'Bleak'],
      },
      {
        basic: 'Romantic',
        advanced: 'Intimate',
        transcription: '/ˈɪntɪmət/',
        wrong: ['Intense', 'Inviting', 'Immense', 'Isolated'],
      },
      {
        basic: 'Scary place',
        advanced: 'Eerie',
        transcription: '/ˈɪri/',
        wrong: ['Early', 'Easy', 'Equal', 'Exact'],
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
        basic: 'Warm and friendly',
        advanced: 'Inviting',
        transcription: '/ɪnˈvaɪtɪŋ/',
        wrong: ['Involved', 'Improved', 'Intended', 'Increased'],
      },
      {
        basic: 'Dark mood',
        advanced: 'Gloomy',
        transcription: '/ˈɡluːmi/',
        wrong: ['Global', 'General', 'Genuine', 'Given'],
      },
    ],
  },
]
