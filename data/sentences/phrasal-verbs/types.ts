// ============================================================
// PHRASAL VERBS — Common Types
// ============================================================

export interface PhrasalVerb {
  basic: string       // phrasal verb shown to player
  advanced: string    // correct meaning
  wrong: [string, string, string, string]  // 4 wrong options
}

export interface Subcategory {
  id: string
  name: string
  verbs: PhrasalVerb[]
}
