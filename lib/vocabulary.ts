import { createSupabaseBrowserClient } from "@/lib/supabase-browser";

export interface UserWord {
  id: string;
  word: string;
  ipa?: string;
  definition?: string;
  translation?: string;
  synonyms?: string;
  notes?: string;
  set_name: string;
  status: "new" | "learning" | "learned";
  passed_activities?: string[];
  created_at: string;
  updated_at?: string;
}

export interface VocabularySet {
  id: string;
  name: string;
  created_at: string;
}

export interface DictionarySearchResult {
  word: string;
  ipa?: string | null;
  definitions?: string[] | null;
  synonyms?: string[] | null;
}

export interface VocabularyCardDisplaySettings {
  showIpa: boolean;
  showDefinition: boolean;
  showTranslation: boolean;
  showSynonyms: boolean;
  showNotes: boolean;
}

export const DEFAULT_VOCABULARY_CARD_SETTINGS: VocabularyCardDisplaySettings = {
  showIpa: true,
  showDefinition: true,
  showTranslation: true,
  showSynonyms: true,
  showNotes: true,
};

export interface FlashcardSettings {
  front: {
    word: boolean;
    ipa: boolean;
    definition: boolean;
    translation: boolean;
    synonyms: boolean;
    notes: boolean;
  };
  back: {
    word: boolean;
    ipa: boolean;
    definition: boolean;
    translation: boolean;
    synonyms: boolean;
    notes: boolean;
  };
}

export const DEFAULT_FLASHCARD_SETTINGS: FlashcardSettings = {
  front: {
    word: false,
    ipa: false,
    definition: true,
    translation: true,
    synonyms: false,
    notes: false,
  },
  back: {
    word: true,
    ipa: true,
    definition: false,
    translation: false,
    synonyms: true,
    notes: true,
  },
};

export interface UnscrambleSettings {
  showDefinition: boolean;
  showTranslation: boolean;
  showSynonyms: boolean;
  showNotes: boolean;
  showIpa: boolean;
  showAudio: boolean;
}

export const DEFAULT_UNSCRAMBLE_SETTINGS: UnscrambleSettings = {
  showDefinition: true,
  showTranslation: true,
  showSynonyms: false,
  showNotes: false,
  showIpa: false,
  showAudio: true,
};

export type TypeWordSettings = UnscrambleSettings;
export const DEFAULT_TYPE_WORD_SETTINGS: TypeWordSettings = DEFAULT_UNSCRAMBLE_SETTINGS;

// Activity Mastery & State Transitions
export type VocabularyActivityId = "cards" | "unscramble" | "multiple-choice" | "type-the-word";

/**
 * List of currently active required activities that must all be completed
 * for a word to automatically transition from 'learning' to 'learned'.
 * When new activities (like 'multiple-choice') are enabled,
 * simply add their ID to this array.
 */
export const ACTIVE_VOCABULARY_ACTIVITIES: VocabularyActivityId[] = [
  "cards",
  "unscramble",
  "type-the-word",
];

const LOCAL_STORAGE_WORD_PROGRESS_KEY = "eng_tobe_my_vocabulary_word_progress";

export interface WordActivityProgressMap {
  [wordId: string]: VocabularyActivityId[];
}

// Legacy interface alias for compatibility if needed
export type VocabularySettings = VocabularyCardDisplaySettings;
export const DEFAULT_VOCABULARY_SETTINGS = DEFAULT_VOCABULARY_CARD_SETTINGS;

const LOCAL_STORAGE_WORDS_KEY = "eng_tobe_my_vocabulary_words";
const LOCAL_STORAGE_SETS_KEY = "eng_tobe_my_vocabulary_sets";
const LOCAL_STORAGE_SETTINGS_KEY = "eng_tobe_my_vocabulary_settings";
const LOCAL_STORAGE_FLASHCARD_SETTINGS_KEY = "eng_tobe_my_vocabulary_flashcard_settings";
const LOCAL_STORAGE_UNSCRAMBLE_SETTINGS_KEY = "eng_tobe_my_vocabulary_unscramble_settings";
const LOCAL_STORAGE_TYPE_WORD_SETTINGS_KEY = "eng_tobe_my_vocabulary_type_word_settings";
export const FREE_WORDS_LIMIT = 20;

// Helper to get local words
export function getLocalWords(): UserWord[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_WORDS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Failed to parse local words", e);
    return [];
  }
}

// Helper to save local words
export function saveLocalWords(words: UserWord[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(LOCAL_STORAGE_WORDS_KEY, JSON.stringify(words));
  } catch (e) {
    console.error("Failed to save local words", e);
  }
}

// Helper to get local sets
export function getLocalSets(): VocabularySet[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_SETS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Failed to parse local sets", e);
    return [];
  }
}

// Helper to save local sets
export function saveLocalSets(sets: VocabularySet[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(LOCAL_STORAGE_SETS_KEY, JSON.stringify(sets));
  } catch (e) {
    console.error("Failed to save local sets", e);
  }
}

// Helper for settings
export function getStoredVocabularySettings(): VocabularyCardDisplaySettings {
  if (typeof window === "undefined") return DEFAULT_VOCABULARY_CARD_SETTINGS;
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_SETTINGS_KEY);
    if (!raw) return DEFAULT_VOCABULARY_CARD_SETTINGS;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed.showIpa === "boolean") {
      return { ...DEFAULT_VOCABULARY_CARD_SETTINGS, ...parsed };
    }
    return DEFAULT_VOCABULARY_CARD_SETTINGS;
  } catch (e) {
    return DEFAULT_VOCABULARY_CARD_SETTINGS;
  }
}

export function saveStoredVocabularySettings(settings: VocabularyCardDisplaySettings) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(LOCAL_STORAGE_SETTINGS_KEY, JSON.stringify(settings));
  } catch (e) {
    console.error("Failed to save settings", e);
  }
}

export function getStoredFlashcardSettings(): FlashcardSettings {
  if (typeof window === "undefined") return DEFAULT_FLASHCARD_SETTINGS;
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_FLASHCARD_SETTINGS_KEY);
    if (!raw) return DEFAULT_FLASHCARD_SETTINGS;
    const parsed = JSON.parse(raw);
    if (parsed && parsed.front && parsed.back) {
      return {
        front: { ...DEFAULT_FLASHCARD_SETTINGS.front, ...parsed.front },
        back: { ...DEFAULT_FLASHCARD_SETTINGS.back, ...parsed.back },
      };
    }
    return DEFAULT_FLASHCARD_SETTINGS;
  } catch (e) {
    return DEFAULT_FLASHCARD_SETTINGS;
  }
}

export function saveStoredFlashcardSettings(settings: FlashcardSettings) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(LOCAL_STORAGE_FLASHCARD_SETTINGS_KEY, JSON.stringify(settings));
  } catch (e) {
    console.error("Failed to save flashcard settings", e);
  }
}

export function getStoredUnscrambleSettings(): UnscrambleSettings {
  if (typeof window === "undefined") return DEFAULT_UNSCRAMBLE_SETTINGS;
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_UNSCRAMBLE_SETTINGS_KEY);
    if (!raw) return DEFAULT_UNSCRAMBLE_SETTINGS;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed.showDefinition === "boolean") {
      return { ...DEFAULT_UNSCRAMBLE_SETTINGS, ...parsed };
    }
    return DEFAULT_UNSCRAMBLE_SETTINGS;
  } catch (e) {
    return DEFAULT_UNSCRAMBLE_SETTINGS;
  }
}

export function saveStoredUnscrambleSettings(settings: UnscrambleSettings) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(LOCAL_STORAGE_UNSCRAMBLE_SETTINGS_KEY, JSON.stringify(settings));
  } catch (e) {
    console.error("Failed to save unscramble settings", e);
  }
}

export function getStoredTypeWordSettings(): TypeWordSettings {
  if (typeof window === "undefined") return DEFAULT_TYPE_WORD_SETTINGS;
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_TYPE_WORD_SETTINGS_KEY);
    if (!raw) return DEFAULT_TYPE_WORD_SETTINGS;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed.showDefinition === "boolean") {
      return { ...DEFAULT_TYPE_WORD_SETTINGS, ...parsed };
    }
    return DEFAULT_TYPE_WORD_SETTINGS;
  } catch (e) {
    return DEFAULT_TYPE_WORD_SETTINGS;
  }
}

export function saveStoredTypeWordSettings(settings: TypeWordSettings) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(LOCAL_STORAGE_TYPE_WORD_SETTINGS_KEY, JSON.stringify(settings));
  } catch (e) {
    console.error("Failed to save type word settings", e);
  }
}

// Search Supabase dictionary table
export async function searchSupabaseDictionary(
  query: string,
  limit: number = 8
): Promise<DictionarySearchResult[]> {
  const cleanQuery = query.trim().toLowerCase();
  if (!cleanQuery) return [];

  const supabase = createSupabaseBrowserClient();
  try {
    // Exact match or prefix match
    const { data, error } = await supabase
      .from("dictionary")
      .select("word, ipa, definitions, synonyms")
      .ilike("word", `${cleanQuery}%`)
      .limit(limit);

    if (error) {
      console.warn("Supabase dictionary search error:", error);
      return [];
    }

    return (data || []) as DictionarySearchResult[];
  } catch (err) {
    console.warn("Dictionary search failed:", err);
    return [];
  }
}

// Exact lookup in dictionary table
export async function getExactDictionaryEntry(
  word: string
): Promise<DictionarySearchResult | null> {
  const cleanWord = word.trim().toLowerCase();
  if (!cleanWord) return null;

  const supabase = createSupabaseBrowserClient();
  try {
    const { data, error } = await supabase
      .from("dictionary")
      .select("word, ipa, definitions, synonyms")
      .eq("word", cleanWord)
      .maybeSingle();

    if (error || !data) {
      return null;
    }

    return data as DictionarySearchResult;
  } catch (err) {
    console.warn("Exact lookup failed:", err);
    return null;
  }
}

// Fetch all user vocabulary words
export async function fetchUserVocabulary(): Promise<UserWord[]> {
  const supabase = createSupabaseBrowserClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    // Not logged in — clear any leftover data and return empty
    saveLocalWords([]);
    saveLocalSets([]);
    return [];
  }

  try {
    const { data, error } = await supabase
      .from("user_vocabulary")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (error) {
      console.warn("Error fetching vocabulary from Supabase:", error);
      return [];
    }

    // Always sync local storage to exactly what Supabase returns for this user
    saveLocalWords((data ?? []) as UserWord[]);
    return (data ?? []) as UserWord[];
  } catch (err) {
    console.warn("fetchUserVocabulary error:", err);
    return [];
  }
}

// Fetch all user vocabulary sets
export async function fetchUserVocabularySets(): Promise<VocabularySet[]> {
  const supabase = createSupabaseBrowserClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    saveLocalSets([]);
    return [];
  }

  try {
    const { data, error } = await supabase
      .from("user_vocabulary_sets")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: true });

    if (error) {
      console.warn("fetchUserVocabularySets error:", error);
      return [];
    }

    // Always sync local storage to exactly what Supabase returns for this user
    saveLocalSets((data ?? []) as VocabularySet[]);
    return (data ?? []) as VocabularySet[];
  } catch (err) {
    console.warn("fetchUserVocabularySets error:", err);
    return [];
  }
}

// Add word
export async function addUserVocabularyWord(
  wordData: Omit<UserWord, "id" | "created_at">
): Promise<{ success: boolean; word?: UserWord; error?: string; limitReached?: boolean; duplicate?: boolean }> {
  const supabase = createSupabaseBrowserClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Check premium status if user exists
  let isUserPremium = false;
  if (user) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("is_premium, premium_expires_at")
      .eq("user_id", user.id)
      .maybeSingle();

    if (profile?.is_premium) {
      if (profile.premium_expires_at) {
        isUserPremium = new Date(profile.premium_expires_at) > new Date();
      } else {
        isUserPremium = true;
      }
    }
  }

  // Check word limit for non-premium
  const currentWords = await fetchUserVocabulary();
  if (!isUserPremium && currentWords.length >= FREE_WORDS_LIMIT) {
    return {
      success: false,
      limitReached: true,
      error: `Free limit of ${FREE_WORDS_LIMIT} words reached. Upgrade to Premium for unlimited vocabulary.`,
    };
  }

  // Check for duplicate word (case-insensitive)
  const duplicate = currentWords.find(
    (w) => w.word.toLowerCase().trim() === wordData.word.toLowerCase().trim()
  );
  if (duplicate) {
    return {
      success: false,
      duplicate: true,
      error: `"${wordData.word}" is already in your dictionary.`,
    };
  }

  const now = new Date().toISOString();
  const newWord: UserWord = {
    ...wordData,
    id: typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    created_at: now,
    updated_at: now,
  };

  if (user) {
    try {
      const { data, error } = await supabase
        .from("user_vocabulary")
        .insert({
          user_id: user.id,
          word: wordData.word.trim(),
          ipa: wordData.ipa || null,
          definition: wordData.definition || null,
          translation: wordData.translation || null,
          synonyms: wordData.synonyms || null,
          notes: wordData.notes || null,
          set_name: wordData.set_name || "General",
          status: wordData.status || "new",
          passed_activities: wordData.passed_activities || [],
        })
        .select()
        .single();

      if (error) {
        console.warn("Failed to insert into Supabase, saving locally:", error);
      } else if (data) {
        newWord.id = data.id;
      }
    } catch (err) {
      console.warn("Supabase insert error:", err);
    }
  }

  // Update local storage
  const updatedWords = [newWord, ...currentWords.filter((w) => w.id !== newWord.id)];
  saveLocalWords(updatedWords);

  return { success: true, word: newWord };
}

// Update word
export async function updateUserVocabularyWord(
  id: string,
  wordData: Partial<UserWord>
): Promise<{ success: boolean; word?: UserWord; error?: string }> {
  const supabase = createSupabaseBrowserClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const currentWords = await fetchUserVocabulary();
  const existing = currentWords.find((w) => w.id === id);
  if (!existing) {
    return { success: false, error: "Word not found" };
  }

  const now = new Date().toISOString();
  const updatedWord: UserWord = {
    ...existing,
    ...wordData,
    updated_at: now,
  };

  if (user) {
    try {
      await supabase
        .from("user_vocabulary")
        .update({
          word: updatedWord.word,
          ipa: updatedWord.ipa || null,
          definition: updatedWord.definition || null,
          translation: updatedWord.translation || null,
          synonyms: updatedWord.synonyms || null,
          notes: updatedWord.notes || null,
          set_name: updatedWord.set_name || "General",
          status: updatedWord.status,
          passed_activities: updatedWord.passed_activities || [],
          updated_at: now,
        })
        .eq("id", id)
        .eq("user_id", user.id);
    } catch (err) {
      console.warn("Supabase update error:", err);
    }
  }

  const updatedWords = currentWords.map((w) => (w.id === id ? updatedWord : w));
  saveLocalWords(updatedWords);

  return { success: true, word: updatedWord };
}

export const updateVocabularyWord = updateUserVocabularyWord;

// Delete word
export async function deleteUserVocabularyWord(id: string): Promise<boolean> {
  const supabase = createSupabaseBrowserClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    try {
      await supabase.from("user_vocabulary").delete().eq("id", id).eq("user_id", user.id);
    } catch (err) {
      console.warn("Supabase delete error:", err);
    }
  }

  const currentWords = getLocalWords();
  const filtered = currentWords.filter((w) => w.id !== id);
  saveLocalWords(filtered);
  return true;
}

// Create new set
export async function createVocabularySet(name: string): Promise<VocabularySet | null> {
  const trimmed = name.trim();
  if (!trimmed) return null;

  const supabase = createSupabaseBrowserClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const newSet: VocabularySet = {
    id: typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    name: trimmed,
    created_at: new Date().toISOString(),
  };

  if (user) {
    try {
      const { data, error } = await supabase
        .from("user_vocabulary_sets")
        .insert({
          user_id: user.id,
          name: trimmed,
        })
        .select()
        .single();

      if (!error && data) {
        newSet.id = data.id;
      }
    } catch (err) {
      console.warn("Set create error:", err);
    }
  }

  const sets = getLocalSets();
  if (!sets.some((s) => s.name.toLowerCase() === trimmed.toLowerCase())) {
    const updatedSets = [...sets, newSet];
    saveLocalSets(updatedSets);
  }

  return newSet;
}

// Rename category / set and update all words associated with it
export async function renameVocabularySet(setId: string, oldName: string, newName: string): Promise<boolean> {
  const trimmedNew = newName.trim();
  if (!trimmedNew || oldName === trimmedNew) return false;

  const supabase = createSupabaseBrowserClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    try {
      // 1. Update set name by ID (more reliable than matching by name)
      const { error: setError } = await supabase
        .from("user_vocabulary_sets")
        .update({ name: trimmedNew })
        .eq("id", setId)
        .eq("user_id", user.id);

      if (setError) {
        console.warn("Supabase rename set error:", setError);
        return false;
      }

      // 2. Update all words that reference this set
      const { error: wordsError } = await supabase
        .from("user_vocabulary")
        .update({ set_name: trimmedNew, updated_at: new Date().toISOString() })
        .eq("user_id", user.id)
        .eq("set_name", oldName)
        .select("id");

      if (wordsError) {
        console.warn("Supabase rename set words error:", wordsError);
      }
    } catch (err) {
      console.warn("Supabase rename set error:", err);
      return false;
    }
  }

  // Update local sets
  const sets = getLocalSets();
  const updatedSets = sets.map((s) => (s.id === setId ? { ...s, name: trimmedNew } : s));
  saveLocalSets(updatedSets);

  // Update local words
  const words = getLocalWords();
  const updatedWords = words.map((w) => (w.set_name === oldName ? { ...w, set_name: trimmedNew } : w));
  saveLocalWords(updatedWords);

  return true;
}

// Delete category / set and move all its words to 'General'
export async function deleteVocabularySet(name: string): Promise<boolean> {
  if (!name || name === "General") return false;

  const supabase = createSupabaseBrowserClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    try {
      // 1. Delete set from user_vocabulary_sets
      await supabase
        .from("user_vocabulary_sets")
        .delete()
        .eq("user_id", user.id)
        .eq("name", name);

      // 2. Move words in user_vocabulary from this set to 'General'
      await supabase
        .from("user_vocabulary")
        .update({ set_name: "General", updated_at: new Date().toISOString() })
        .eq("user_id", user.id)
        .eq("set_name", name);
    } catch (err) {
      console.warn("Supabase delete set error:", err);
    }
  }

  // Remove from local sets
  const sets = getLocalSets();
  const updatedSets = sets.filter((s) => s.name !== name);
  saveLocalSets(updatedSets);

  // Move local words to 'General'
  const words = getLocalWords();
  const updatedWords = words.map((w) => (w.set_name === name ? { ...w, set_name: "General" } : w));
  saveLocalWords(updatedWords);

  return true;
}

// ---------------------------------------------------------------------------
// Word Activity Progress & Automatic Mastery
// ---------------------------------------------------------------------------

export function getAllWordActivityProgress(): WordActivityProgressMap {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_WORD_PROGRESS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.error("Failed to parse word progress", e);
    return {};
  }
}

export function getWordCompletedActivities(wordId: string): VocabularyActivityId[] {
  const currentWords = getLocalWords();
  const word = currentWords.find((w) => w.id === wordId);
  if (word && Array.isArray(word.passed_activities)) {
    return word.passed_activities as VocabularyActivityId[];
  }
  const map = getAllWordActivityProgress();
  return map[wordId] || [];
}

/**
 * Record progress for a word in a specific activity.
 * - When an activity is passed, it is added to the word's completed activities in Supabase database.
 * - If the word is 'new', it is promoted to 'learning'.
 * - If ALL active required activities (e.g. ['cards', 'unscramble']) are completed,
 *   the word is automatically promoted to 'learned'.
 * - Stored directly in Supabase `user_vocabulary` table with local cache fallback.
 */
export async function recordWordActivityProgress(
  wordId: string,
  activityId: VocabularyActivityId,
  passed: boolean = true
): Promise<{ status: "new" | "learning" | "learned"; passedActivities: VocabularyActivityId[] }> {
  const currentWords = getLocalWords();
  const word = currentWords.find((w) => w.id === wordId);

  const existingActivities: VocabularyActivityId[] = Array.isArray(word?.passed_activities)
    ? (word!.passed_activities as VocabularyActivityId[])
    : (getAllWordActivityProgress()[wordId] || []);

  let updatedActivities = [...existingActivities];
  if (passed && !updatedActivities.includes(activityId)) {
    updatedActivities.push(activityId);
  }

  // Also sync local storage progress map
  if (typeof window !== "undefined") {
    try {
      const progressMap = getAllWordActivityProgress();
      progressMap[wordId] = updatedActivities;
      localStorage.setItem(LOCAL_STORAGE_WORD_PROGRESS_KEY, JSON.stringify(progressMap));
    } catch (e) {
      console.error("Failed to save word progress cache", e);
    }
  }

  // Check if all currently required active activities are completed
  const hasCompletedAllActive = ACTIVE_VOCABULARY_ACTIVITIES.every((req) =>
    updatedActivities.includes(req)
  );

  let newStatus: "new" | "learning" | "learned" = word?.status || "new";

  if (hasCompletedAllActive) {
    newStatus = "learned";
  } else if (newStatus === "new") {
    newStatus = "learning";
  }

  // Persist directly to Supabase DB and local storage
  await updateUserVocabularyWord(wordId, {
    status: newStatus,
    passed_activities: updatedActivities,
  });

  return { status: newStatus, passedActivities: updatedActivities };
}

