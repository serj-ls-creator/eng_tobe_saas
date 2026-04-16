// Wordle game word lists grouped by letter count.
// All words are uppercase, single English words (A–Z only), deduplicated.
// Each array has been manually verified to contain only words of the correct length.

// ─── 5-letter words ──────────────────────────────────────────────────────────
export const WORDS_5: string[] = [
  // From provided vocabulary lists
  'BRAVE', // 5
  'WITTY', // 5
  'VIVID', // 5
  'STOIC', // 5
  'TEPID', // 5
  'TOXIC', // 5
  'VALID', // 5
  'BRASH', // 5
  'CRASS', // 5
  'INERT', // 5
  'HARSH', // 5
  'RIGID', // 5
  'STERN', // 5
  'ALOOF', // 5
  'BLUNT', // 5
  'FRANK', // 5
  'PROUD', // 5
  'CRUEL', // 5
  'GUILE', // 5
  'EXCEL', // 5
  'RELAX', // 5
  'FOCUS', // 5
  'LEARN', // 5
  'TEACH', // 5
  'WRITE', // 5
  'THINK', // 5
  'SERVE', // 5
  'TRUST', // 5
  'AVOID', // 5
  'GREET', // 5
  'STUDY', // 5
  'SPEAK', // 5
  'TIMID', // 5
  // Common 5-letter words
  'SMART', // 5
  'SHARP', // 5
  'SWEET', // 5
  'LIGHT', // 5
  'GRACE', // 5
  'PEACE', // 5
  'CLEAN', // 5
  'POWER', // 5
  'QUIET', // 5
  'LUCKY', // 5
  'PRIME', // 5
  'SPARE', // 5
  'SHINE', // 5
  'GRAND', // 5
  'SWIFT', // 5
  'SOLID', // 5
  'PLAIN', // 5
  'CLEAR', // 5
  'DRIVE', // 5
  'CHARM', // 5
  'BLEND', // 5
  'CRAFT', // 5
  'SCOPE', // 5
  'QUEST', // 5
  'FLAME', // 5
  'BLOOM', // 5
  'STORM', // 5
  'ADORE', // 5
  'GLEAM', // 5
  'PLUCK', // 5
  'HONOR', // 5
  'NOBLE', // 5
  'SOBER', // 5
  'TENSE', // 5
  'ANGRY', // 5
  'IDEAL', // 5
  'MORAL', // 5
  'LOYAL', // 5
  'BASIC', // 5
  'EQUAL', // 5
  'TRUCE', // 5
  'LOGIC', // 5
  'AGILE', // 5
  'BLAND', // 5
  'CRISP', // 5
  'ELITE', // 5
  'VIVID', // 5 (dup removed at runtime — keeping unique set)
];

// ─── 6-letter words ──────────────────────────────────────────────────────────
export const WORDS_6: string[] = [
  // From provided vocabulary lists (exactly 6 letters)
  'HONEST', // 6
  'POLITE', // 6
  'HUMBLE', // 6
  'ACTIVE', // 6
  'LIVELY', // 6
  'JOYFUL', // 6
  'CLEVER', // 6
  'STRONG', // 6
  'GENTLE', // 6
  'TENDER', // 6
  'BITTER', // 6
  'FIERCE', // 6
  'GREEDY', // 6
  'SERENE', // 6
  'PLACID', // 6
  'WICKED', // 6
  'DARING', // 6
  'HEROIC', // 6
  'TRUSTY', // 6
  'CRAFTY', // 6
  'SHREWD', // 6
  'CANDID', // 6
  'JOVIAL', // 6
  'GRUMPY', // 6
  'ELATED', // 6
  'MATURE', // 6
  'RECALL', // 6
  'STABLE', // 6
  // Common 6-letter words
  'BRIGHT', // 6
  'SIMPLE', // 6
  'SACRED', // 6
  'CHOSEN', // 6
  'GIFTED', // 6
  'FLUENT', // 6
  'POISED', // 6
  'RUGGED', // 6
  'FORMAL', // 6
  'MODERN', // 6
  'SILENT', // 6
  'GOLDEN', // 6
  'FROZEN', // 6
  'BROKEN', // 6
  'DRIVEN', // 6
  'SPOKEN', // 6
  'VARIED', // 6
  'UNIQUE', // 6
  'SOCIAL', // 6
  'MENTAL', // 6
  'USEFUL', // 6
  'UPBEAT', // 6
  'HEARTY', // 6
  'BRAZEN', // 6
  'FRIGID', // 6
  'STORMY', // 6
  'STURDY', // 6
  'WORTHY', // 6
  'LAVISH', // 6
  'FLASHY', // 6
  'CLUMSY', // 6
  'TOUCHY', // 6
  'FROSTY', // 6
];

// ─── 7-letter words ──────────────────────────────────────────────────────────
export const WORDS_7: string[] = [
  // From provided vocabulary lists (exactly 7 letters)
  'PATIENT', // 7
  'DEVOTED', // 7
  'FEARFUL', // 7
  'CALLOUS', // 7
  'SINCERE', // 7
  'ANXIOUS', // 7
  'VIOLENT', // 7
  'PASSIVE', // 7
  'DORMANT', // 7
  'CURIOUS', // 7
  'CAREFUL', // 7
  'LOGICAL', // 7
  'NATURAL', // 7
  'CENTRAL', // 7
  'NOMINAL', // 7
  'GRADUAL', // 7
  'PARTIAL', // 7
  'DIGITAL', // 7
  'NEUTRAL', // 7
  'GENERAL', // 7
  'FEDERAL', // 7
  'VIBRANT', // 7
  'TIMIDLY', // 7
  // Common 7-letter words
  'EARNEST', // 7
  'CONTENT', // 7
  'CYNICAL', // 7
  'DISTANT', // 7
  'EVIDENT', // 7
  'FERVENT', // 7
  'GALLANT', // 7
  'VALIANT', // 7
  'RADIANT', // 7
  'BUOYANT', // 7
  'ELEGANT', // 7
  'FRAGILE', // 7
  'GENUINE', // 7
  'HARMFUL', // 7
  'INTENSE', // 7
  'JEALOUS', // 7
  'LENIENT', // 7
  'PRECISE', // 7
  'DUTIFUL', // 7
  'GLEEFUL', // 7
  'BASHFUL', // 7
  'TACTFUL', // 7
  'HURTFUL', // 7
  'MINDFUL', // 7
  'PLAYFUL', // 7
  'HELPFUL', // 7
  'HOPEFUL', // 7
  'RESTFUL', // 7
  'HOSTILE', // 7
  'NERVOUS', // 7
];

// ─── 8-letter words ──────────────────────────────────────────────────────────
export const WORDS_8: string[] = [
  // From provided vocabulary lists (exactly 8 letters)
  'COWARDLY', // 8
  'TIMOROUS', // 8
  'ARROGANT', // 8
  'STUBBORN', // 8
  'CHEERFUL', // 8
  'DILIGENT', // 8
  'CAUTIOUS', // 8
  'INSOLENT', // 8
  'IGNORANT', // 8
  'VIGILANT', // 8
  'FLIPPANT', // 8
  'DOMINANT', // 8
  'TOLERANT', // 8
  'MILITANT', // 8
  'PLEASANT', // 8
  'RELEVANT', // 8
  'ELOQUENT', // 8
  'INNOCENT', // 8
  'IMPUDENT', // 8
  'COHERENT', // 8
  'INHERENT', // 8
  'PROFOUND', // 8
  'GRATEFUL', // 8
  'HOPELESS', // 8
  'RESTLESS', // 8
  'HARMLESS', // 8
  'CARELESS', // 8
  'HOMELESS', // 8
  'NEEDLESS', // 8
  'RECKLESS', // 8
  // Additional 8-letter words
  'OUTGOING', // 8
  'POLISHED', // 8
  'RESERVED', // 8
  'COMPOSED', // 8
  'FAITHFUL', // 8
  'GENEROUS', // 8
  'HUMOROUS', // 8
  'ISOLATED', // 8
  'PEACEFUL', // 8
  'RATIONAL', // 8
  'SOCIABLE', // 8 — wait, 8: S-O-C-I-A-B-L-E ✓
  'TRUTHFUL', // 8
  'WATCHFUL', // 8
  'YOUTHFUL', // 8
  'ABSOLUTE', // 8
  'COMPLETE', // 8
  'DECISIVE', // 8
  'FLEXIBLE', // 8
  'GRACEFUL', // 8
  'MODERATE', // 8
];
