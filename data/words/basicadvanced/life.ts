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
        advanced: 'Fiery',
        transcription: '/ˈfaɪri/',
        wrong: ['Fluffy', 'Fragile', 'Frozen', 'Fussy'],
      },
      {
        basic: 'Sweet',
        advanced: 'Decadent',
        transcription: '/ˈdekədənt/',
        wrong: ['Distant', 'Dramatic', 'Defensive', 'Dormant'],
      },
      {
        basic: 'Burnt',
        advanced: 'Charred',
        transcription: '/tʃɑːrd/',
        wrong: ['Chilled', 'Crushed', 'Cracked', 'Curdled'],
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
        transcription: '/nuːˈtrɪʃəs/',
        wrong: ['Notable', 'Neutral', 'Naughty', 'Noisy'],
      },
      {
        basic: 'Unhealthy food you love',
        advanced: 'Guilty pleasure',
        transcription: '/ˌɡɪlti ˈpleʒər/',
        wrong: ['Gentle breeze', 'Golden ticket', 'Glass ceiling', 'Grand finale'],
      },
      {
        basic: 'Small snack',
        advanced: 'Nibble',
        transcription: '/ˈnɪbəl/',
        wrong: ['Napkin', 'Needle', 'Nickel', 'Novel'],
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
        transcription: '/eˈspresoʊ/',
        wrong: ['Extract', 'Essence', 'Emulsion', 'Elixir'],
      },
      {
        basic: 'Drink with bubbles',
        advanced: 'Sparkling',
        transcription: '/ˈspɑːrklɪŋ/',
        wrong: ['Sticky', 'Smoky', 'Silky', 'Sleepy'],
      },
      {
        basic: 'Herbal tea',
        advanced: 'Infusion',
        transcription: '/ɪnˈfjuːʒən/',
        wrong: ['Injection', 'Inclusion', 'Inversion', 'Intention'],
      },
      {
        basic: 'Mixed alcohol drink',
        advanced: 'Cocktail',
        transcription: '/ˈkɑːkteɪl/',
        wrong: ['Cabinet', 'Cushion', 'Cottage', 'Chapter'],
      },
      {
        basic: 'Strong alcohol',
        advanced: 'Spirits',
        transcription: '/ˈspɪrɪts/',
        wrong: ['Samples', 'Syrups', 'Sodas', 'Salads'],
      },
      {
        basic: 'Sip',
        advanced: 'Savor',
        transcription: '/ˈseɪvər/',
        wrong: ['Steep', 'Strain', 'Squeeze', 'Stir'],
      },
      {
        basic: 'Cold drink',
        advanced: 'Refreshing',
        transcription: '/rɪˈfreʃɪŋ/',
        wrong: ['Reckless', 'Reliable', 'Rotten', 'Rusty'],
      },
      {
        basic: 'Hot drink',
        advanced: 'Steaming',
        transcription: '/ˈstiːmɪŋ/',
        wrong: ['Stealing', 'Steering', 'Stretching', 'Starving'],
      },
      {
        basic: 'Fresh fruit juice',
        advanced: 'Freshly squeezed',
        transcription: '/ˌfreʃli ˈskwiːzd/',
        wrong: ['Freshly frozen', 'Freshly flavored', 'Freshly filtered', 'Freshly fermented'],
      },
      {
        basic: 'Water without bubbles',
        advanced: 'Still water',
        transcription: '/stɪl ˈwɔːtər/',
        wrong: ['Stored water', 'Strained water', 'Sterilized water', 'Sweetened water'],
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
        advanced: 'Whip up',
        transcription: '/ˌwɪp ˈʌp/',
        wrong: ['Wipe up', 'Wrap up', 'Warm up', 'Wind up'],
      },
      {
        basic: 'Cut',
        advanced: 'Chop',
        transcription: '/tʃɑːp/',
        wrong: ['Chill', 'Coat', 'Cure', 'Crisp'],
      },
      {
        basic: 'Mix quickly',
        advanced: 'Whisk',
        transcription: '/wɪsk/',
        wrong: ['Wipe', 'Wrap', 'Wilt', 'Weigh'],
      },
      {
        basic: 'Fry quickly in oil',
        advanced: 'Sauté',
        transcription: '/soʊˈteɪ/',
        wrong: ['Season', 'Simmer', 'Smoke', 'Steam'],
      },
      {
        basic: 'Cook in water',
        advanced: 'Poach',
        transcription: '/poʊtʃ/',
        wrong: ['Press', 'Proof', 'Purée', 'Pan-fry'],
      },
      {
        basic: 'Add flavor',
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
        basic: 'Soak in sauce first',
        advanced: 'Marinate',
        transcription: '/ˈmærɪneɪt/',
        wrong: ['Measure', 'Mash', 'Melt', 'Mince'],
      },
      {
        basic: 'Kitchen tool',
        advanced: 'Utensil',
        transcription: '/juːˈtensəl/',
        wrong: ['Umbrella', 'Uniform', 'Unicorn', 'Upholstery'],
      },
      {
        basic: 'No meat',
        advanced: 'Plant-based',
        transcription: '/ˌplænt ˈbeɪst/',
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
        wrong: ['Sailor', 'Servant', 'Soldier', 'Singer'],
      },
      {
        basic: 'Pay the bill',
        advanced: 'Settle up',
        transcription: '/ˌsetl ˈʌp/',
        wrong: ['Stand up', 'Set up', 'Sit up', 'Stay up'],
      },
      {
        basic: 'Book a table',
        advanced: 'Make a reservation',
        transcription: '/meɪk ə ˌrezərˈveɪʃən/',
        wrong: ['Make a mistake', 'Make a wish', 'Make a scene', 'Make a toast'],
      },
      {
        basic: 'Small first dish',
        advanced: 'Appetizer',
        transcription: '/ˈæpɪtaɪzər/',
        wrong: ['Applicant', 'Applause', 'Appraisal', 'Appliance'],
      },
      {
        basic: 'Famous dish of the house',
        advanced: 'Signature dish',
        transcription: '/ˈsɪɡnətʃər dɪʃ/',
        wrong: ['Side dish', 'Silver dish', 'Spare dish', 'Sweet dish'],
      },
      {
        basic: 'Tip',
        advanced: 'Gratuity',
        transcription: '/ɡrəˈtuːəti/',
        wrong: ['Gratitude', 'Gravity', 'Grammar', 'Gallery'],
      },
      {
        basic: 'Food to eat at home',
        advanced: 'Takeout',
        transcription: '/ˈteɪkaʊt/',
        wrong: ['Tablecloth', 'Teaspoon', 'Tomato', 'Tuxedo'],
      },
      {
        basic: 'Fancy restaurant',
        advanced: 'Fine dining',
        transcription: '/faɪn ˈdaɪnɪŋ/',
        wrong: ['Fast food', 'Fried food', 'Frozen food', 'Fake food'],
      },
      {
        basic: 'All you can eat',
        advanced: 'Buffet',
        transcription: '/bəˈfeɪ/',
        wrong: ['Bucket', 'Bubble', 'Button', 'Bundle'],
      },
      {
        basic: 'Food left on the plate',
        advanced: 'Leftovers',
        transcription: '/ˈleftoʊvərz/',
        wrong: ['Lecturers', 'Leaflets', 'Legends', 'Landlords'],
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
        wrong: ['Pastry', 'Passage', 'Passport', 'Pasture'],
      },
      {
        basic: 'Drawing',
        advanced: 'Illustration',
        transcription: '/ˌɪləˈstreɪʃən/',
        wrong: ['Illusion', 'Imitation', 'Incident', 'Instinct'],
      },
      {
        basic: 'Writing about your day',
        advanced: 'Journaling',
        transcription: '/ˈdʒɜːrnəlɪŋ/',
        wrong: ['Jogging', 'Juggling', 'Joking', 'Jumping'],
      },
      {
        basic: 'Person who loves reading',
        advanced: 'Bookworm',
        transcription: '/ˈbʊkwɜːrm/',
        wrong: ['Bartender', 'Bodyguard', 'Bookkeeper', 'Bricklayer'],
      },
      {
        basic: 'Person who loves food',
        advanced: 'Foodie',
        transcription: '/ˈfuːdi/',
        wrong: ['Fiddle', 'Folly', 'Fossil', 'Fabric'],
      },
      {
        basic: 'Play music together',
        advanced: 'Jam',
        transcription: '/dʒæm/',
        wrong: ['Jar', 'Jaw', 'Jolt', 'Jail'],
      },
      {
        basic: 'Taking photos',
        advanced: 'Photography',
        transcription: '/fəˈtɑːɡrəfi/',
        wrong: ['Philosophy', 'Physiology', 'Phonology', 'Philanthropy'],
      },
      {
        basic: 'Good at growing plants',
        advanced: 'Green thumb',
        transcription: '/ˌɡriːn ˈθʌm/',
        wrong: ['Green light', 'Green card', 'Green belt', 'Green tea'],
      },
      {
        basic: 'Collecting things',
        advanced: 'Curation',
        transcription: '/kjʊˈreɪʃən/',
        wrong: ['Calculation', 'Celebration', 'Circulation', 'Cancellation'],
      },
      {
        basic: 'Free time activity',
        advanced: 'Pastime',
        transcription: '/ˈpæstaɪm/',
        wrong: ['Pavement', 'Paradise', 'Pasta', 'Parade'],
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
        transcription: '/ˈprɑːɡres/',
        wrong: ['Process', 'Project', 'Protect', 'Produce'],
      },
      {
        basic: 'Very tired after sport',
        advanced: 'Fatigued',
        transcription: '/fəˈtiːɡd/',
        wrong: ['Focused', 'Flexible', 'Fueled', 'Functional'],
      },
      {
        basic: 'Win',
        advanced: 'Triumph',
        transcription: '/ˈtraɪʌmf/',
        wrong: ['Transfer', 'Trigger', 'Trace', 'Track'],
      },
      {
        basic: 'Lose',
        advanced: 'Concede',
        transcription: '/kənˈsiːd/',
        wrong: ['Conceal', 'Conceive', 'Concern', 'Conquer'],
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
        transcription: '/skwɑːd/',
        wrong: ['Squid', 'Square', 'Squirrel', 'Squeak'],
      },
      {
        basic: 'Practice',
        advanced: 'Drill',
        transcription: '/drɪl/',
        wrong: ['Draft', 'Drive', 'Dress', 'Drama'],
      },
      {
        basic: 'Game plan',
        advanced: 'Strategy',
        transcription: '/ˈstrætədʒi/',
        wrong: ['Stranger', 'Shelter', 'Souvenir', 'Sculpture'],
      },
      {
        basic: 'Rest after sport',
        advanced: 'Recovery',
        transcription: '/rɪˈkʌvəri/',
        wrong: ['Rejection', 'Reception', 'Recession', 'Recipe'],
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
        basic: 'Buy quickly',
        advanced: 'Snap up',
        transcription: '/ˌsnæp ˈʌp/',
        wrong: ['Speed up', 'Sign up', 'Show up', 'Shut up'],
      },
      {
        basic: 'On sale',
        advanced: 'Discounted',
        transcription: '/dɪˈskaʊntɪd/',
        wrong: ['Disgusted', 'Disturbed', 'Disguised', 'Distracted'],
      },
      {
        basic: 'Too expensive',
        advanced: 'Overpriced',
        transcription: '/ˌoʊvərˈpraɪst/',
        wrong: ['Overloaded', 'Overrated', 'Overused', 'Overridden'],
      },
      {
        basic: 'Good deal',
        advanced: 'Bargain',
        transcription: '/ˈbɑːrɡɪn/',
        wrong: ['Balcony', 'Banner', 'Barrel', 'Basket'],
      },
      {
        basic: 'Get your money back',
        advanced: 'Refund',
        transcription: '/ˈriːfʌnd/',
        wrong: ['Refuse', 'Refine', 'Reform', 'Refresh'],
      },
      {
        basic: 'Spend a lot of money',
        advanced: 'Splurge',
        transcription: '/splɜːrdʒ/',
        wrong: ['Surge', 'Splash', 'Spare', 'Squeeze'],
      },
      {
        basic: 'Look around without buying',
        advanced: 'Browse',
        transcription: '/braʊz/',
        wrong: ['Bruise', 'Breeze', 'Bribe', 'Brush'],
      },
      {
        basic: 'Online shop',
        advanced: 'Marketplace',
        transcription: '/ˈmɑːrkɪtpleɪs/',
        wrong: ['Manuscript', 'Mountain', 'Magazine', 'Mattress'],
      },
      {
        basic: 'Free gift',
        advanced: 'Freebie',
        transcription: '/ˈfriːbi/',
        wrong: ['Freckle', 'Freezer', 'Frenzy', 'Fringe'],
      },
      {
        basic: 'Limited stock',
        advanced: 'Scarce',
        transcription: '/skers/',
        wrong: ['Scare', 'Scarf', 'Scorch', 'Scatter'],
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
        basic: 'Perfect skin',
        advanced: 'Flawless',
        transcription: '/ˈflɔːləs/',
        wrong: ['Fearless', 'Faithless', 'Flawed', 'Frantic'],
      },
      {
        basic: 'Makeup',
        advanced: 'Cosmetics',
        transcription: '/kɑːzˈmetɪks/',
        wrong: ['Cosmos', 'Costumes', 'Cottages', 'Contacts'],
      },
      {
        basic: 'Clean your face',
        advanced: 'Cleanse',
        transcription: '/klenz/',
        wrong: ['Clinch', 'Clench', 'Chisel', 'Crease'],
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
        wrong: ['Fragment', 'Frequency', 'Fraction', 'Frontier'],
      },
      {
        basic: 'Natural look',
        advanced: 'Effortless',
        transcription: '/ˈefərtləs/',
        wrong: ['Endless', 'Eyeless', 'Enormous', 'Ethical'],
      },
      {
        basic: 'Hairdresser',
        advanced: 'Stylist',
        transcription: '/ˈstaɪlɪst/',
        wrong: ['Scientist', 'Soloist', 'Sculptor', 'Scholar'],
      },
      {
        basic: 'Sun protection',
        advanced: 'SPF',
        transcription: '/ˌes piː ˈef/',
        wrong: ['SOS', 'SUV', 'SIM', 'SMS'],
      },
      {
        basic: 'Well-groomed',
        advanced: 'Put-together',
        transcription: '/ˌpʊt təˈɡeðər/',
        wrong: ['Put-down', 'Put-off', 'Put-on', 'Pull-out'],
      },
      {
        basic: 'Anti-aging',
        advanced: 'Age-defying',
        transcription: '/eɪdʒ dɪˈfaɪɪŋ/',
        wrong: ['Age-defining', 'Age-dependent', 'Age-diverse', 'Age-driven'],
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
        advanced: 'Under the weather',
        transcription: '/ˌʌndər ðə ˈweðər/',
        wrong: ['Under the table', 'Under the moon', 'Under the sun', 'Under the roof'],
      },
      {
        basic: 'Get well',
        advanced: 'Recover',
        transcription: '/rɪˈkʌvər/',
        wrong: ['Refund', 'Resent', 'Relapse', 'Reflect'],
      },
      {
        basic: 'Doctor visit',
        advanced: 'Check-up',
        transcription: '/ˈtʃek ʌp/',
        wrong: ['Check-in', 'Check-out', 'Check-mate', 'Check-list'],
      },
      {
        basic: 'Cure',
        advanced: 'Remedy',
        transcription: '/ˈremədi/',
        wrong: ['Reunion', 'Refuge', 'Rebuke', 'Receipt'],
      },
      {
        basic: 'Exhausted from stress',
        advanced: 'Burnout',
        transcription: '/ˈbɜːrnaʊt/',
        wrong: ['Breakout', 'Blackout', 'Blowout', 'Bailout'],
      },
      {
        basic: 'Talking with an expert',
        advanced: 'Therapy',
        transcription: '/ˈθerəpi/',
        wrong: ['Theory', 'Throne', 'Thirst', 'Thunder'],
      },
      {
        basic: 'Strong body',
        advanced: 'Toned',
        transcription: '/toʊnd/',
        wrong: ['Tuned', 'Tamed', 'Towed', 'Tossed'],
      },
      {
        basic: 'Not eating enough',
        advanced: 'Malnourished',
        transcription: '/mælˈnɜːrɪʃt/',
        wrong: ['Maladjusted', 'Malicious', 'Malformed', 'Marinated'],
      },
      {
        basic: 'Healthy eating',
        advanced: 'Nutrition',
        transcription: '/nuːˈtrɪʃən/',
        wrong: ['Notion', 'Nation', 'Nomination', 'Narration'],
      },
      {
        basic: 'Test for diseases',
        advanced: 'Screening',
        transcription: '/ˈskriːnɪŋ/',
        wrong: ['Scheming', 'Screaming', 'Scrubbing', 'Scribbling'],
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
        advanced: 'Rise and shine',
        transcription: '/ˌraɪz ənd ˈʃaɪn/',
        wrong: ['Rock and roll', 'Rise and fall', 'Rack and ruin', 'Rain or shine'],
      },
      {
        basic: 'Daily habit',
        advanced: 'Ritual',
        transcription: '/ˈrɪtʃuəl/',
        wrong: ['Rumor', 'Revenue', 'Region', 'Rental'],
      },
      {
        basic: 'Someone who wakes up early',
        advanced: 'Early bird',
        transcription: '/ˌɜːrli ˈbɜːrd/',
        wrong: ['Eager beaver', 'Easy rider', 'Eagle eye', 'Empty nest'],
      },
      {
        basic: 'Wash and get ready',
        advanced: 'Freshen up',
        transcription: '/ˌfreʃən ˈʌp/',
        wrong: ['Fill up', 'Fold up', 'Fire up', 'Freeze up'],
      },
      {
        basic: 'Travel to work every day',
        advanced: 'Commute',
        transcription: '/kəˈmjuːt/',
        wrong: ['Compute', 'Commit', 'Commence', 'Compete'],
      },
      {
        basic: 'Short sleep in the day',
        advanced: 'Power nap',
        transcription: '/ˈpaʊər næp/',
        wrong: ['Power cut', 'Power walk', 'Power tool', 'Power bank'],
      },
      {
        basic: 'Plan the week',
        advanced: 'Schedule',
        transcription: '/ˈskedʒuːl/',
        wrong: ['Scandal', 'Scholar', 'Scatter', 'Scenery'],
      },
      {
        basic: 'Relax at the end of the day',
        advanced: 'Unwind',
        transcription: '/ʌnˈwaɪnd/',
        wrong: ['Unfold', 'Uphold', 'Undress', 'Undo'],
      },
      {
        basic: 'Go to sleep',
        advanced: 'Hit the hay',
        transcription: '/ˌhɪt ðə ˈheɪ/',
        wrong: ['Hit the road', 'Hit the roof', 'Hit the jackpot', 'Hit the brakes'],
      },
      {
        basic: 'Doing everything well today',
        advanced: 'On a roll',
        transcription: '/ɑːn ə ˈroʊl/',
        wrong: ['On a whim', 'On the fence', 'On the house', 'On thin ice'],
      },
    ],
  },
]
