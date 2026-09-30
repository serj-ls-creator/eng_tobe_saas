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
    word: true,
    ipa: true,
    definition: false,
    translation: false,
    synonyms: false,
    notes: false,
  },
  back: {
    word: false,
    ipa: true,
    definition: true,
    translation: true,
    synonyms: true,
    notes: true,
  },
};

// Legacy interface alias for compatibility if needed
export type VocabularySettings = VocabularyCardDisplaySettings;
export const DEFAULT_VOCABULARY_SETTINGS = DEFAULT_VOCABULARY_CARD_SETTINGS;

const LOCAL_STORAGE_WORDS_KEY = "eng_tobe_my_vocabulary_words";
const LOCAL_STORAGE_SETS_KEY = "eng_tobe_my_vocabulary_sets";
const LOCAL_STORAGE_SETTINGS_KEY = "eng_tobe_my_vocabulary_settings";
const LOCAL_STORAGE_FLASHCARD_SETTINGS_KEY = "eng_tobe_my_vocabulary_flashcard_settings";
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
    return getLocalWords();
  }

  try {
    const { data, error } = await supabase
      .from("user_vocabulary")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (error) {
      console.warn("Error fetching vocabulary from Supabase, fallback to local:", error);
      return getLocalWords();
    }

    if (data && data.length > 0) {
      saveLocalWords(data as UserWord[]);
      return data as UserWord[];
    } else {
      // If Supabase has 0 words but local has words from guest, we can keep or sync
      const local = getLocalWords();
      return local;
    }
  } catch (err) {
    return getLocalWords();
  }
}

// Fetch all user vocabulary sets
export async function fetchUserVocabularySets(): Promise<VocabularySet[]> {
  const supabase = createSupabaseBrowserClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return getLocalSets();
  }

  try {
    const { data, error } = await supabase
      .from("user_vocabulary_sets")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: true });

    if (error) {
      return getLocalSets();
    }

    if (data) {
      saveLocalSets(data as VocabularySet[]);
      return data as VocabularySet[];
    }
    return getLocalSets();
  } catch (err) {
    return getLocalSets();
  }
}

// Add word
export async function addUserVocabularyWord(
  wordData: Omit<UserWord, "id" | "created_at">
): Promise<{ success: boolean; word?: UserWord; error?: string; limitReached?: boolean }> {
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
