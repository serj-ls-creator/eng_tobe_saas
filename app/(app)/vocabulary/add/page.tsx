"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { 
  Search, 
  Plus, 
  Sparkles, 
  FolderPlus, 
  Check, 
  Crown, 
  Volume2, 
  Loader2,
  X
} from "lucide-react";

import { TopBar } from "@/components/layout/TopBar";
import { Card } from "@/components/ui/card";
import { StrictEnglishTTS } from "@/components/audio/StrictEnglishTTS";
import { usePoints } from "@/lib/usePoints";
import { 
  fetchUserVocabulary, 
  fetchUserVocabularySets, 
  addUserVocabularyWord, 
  updateUserVocabularyWord, 
  searchSupabaseDictionary, 
  getExactDictionaryEntry, 
  createVocabularySet, 
  UserWord, 
  VocabularySet, 
  DictionarySearchResult,
  FREE_WORDS_LIMIT 
} from "@/lib/vocabulary";

function AddWordForm() {
  const points = usePoints();
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get("id");

  // Form State
  const [word, setWord] = useState("");
  const [ipa, setIpa] = useState("");
  const [definition, setDefinition] = useState("");
  const [translation, setTranslation] = useState("");
  const [synonyms, setSynonyms] = useState("");
  const [notes, setNotes] = useState("");
  const [setName, setSetName] = useState("General");
  const [status, setStatus] = useState<"new" | "learning" | "learned">("new");

  const [sets, setSets] = useState<VocabularySet[]>([]);
  const [isSearchingDb, setIsSearchingDb] = useState(false);
  const [dbFoundStatus, setDbFoundStatus] = useState<"idle" | "found" | "not_found">("idle");
  const [suggestions, setSuggestions] = useState<DictionarySearchResult[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [limitModalOpen, setLimitModalOpen] = useState(false);
  const [showCreateSetModal, setShowCreateSetModal] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [isCreatingCategory, setIsCreatingCategory] = useState(false);

  // Load existing sets & if editing, existing word
  useEffect(() => {
    async function init() {
      try {
        const [loadedSets, loadedWords] = await Promise.all([
          fetchUserVocabularySets(),
          fetchUserVocabulary(),
        ]);
        setSets(loadedSets);

        if (editId) {
          const target = loadedWords.find((w) => w.id === editId);
          if (target) {
            setWord(target.word);
            setIpa(target.ipa || "");
            setDefinition(target.definition || "");
            setTranslation(target.translation || "");
            setSynonyms(target.synonyms || "");
            setNotes(target.notes || "");
            setSetName(target.set_name || "General");
            setStatus(target.status || "new");
          }
        }
      } catch (e) {
        console.error("Init add/edit error:", e);
      }
    }
    init();
  }, [editId]);

  // Dictionary lookup trigger
  const handleSearchDictionary = async (searchWordOverride?: string) => {
    const targetWord = (searchWordOverride || word).trim();
    if (!targetWord) return;

    setIsSearchingDb(true);
    setDbFoundStatus("idle");
    setShowSuggestions(false);

    try {
      const entry = await getExactDictionaryEntry(targetWord);
      if (entry) {
        setDbFoundStatus("found");
        setWord(entry.word);
        if (entry.ipa) setIpa(entry.ipa);
        if (entry.definitions && entry.definitions.length > 0) {
          setDefinition(entry.definitions.join("; "));
        }
        if (entry.synonyms && entry.synonyms.length > 0) {
          setSynonyms(entry.synonyms.join(", "));
        }
      } else {
        // Fallback: search suggestions
        const results = await searchSupabaseDictionary(targetWord, 5);
        if (results.length > 0) {
          setSuggestions(results);
          setShowSuggestions(true);
          setDbFoundStatus("idle");
        } else {
          setDbFoundStatus("not_found");
        }
      }
    } catch (err) {
      console.error("Search error:", err);
      setDbFoundStatus("not_found");
    } finally {
      setIsSearchingDb(false);
    }
  };

  const handleApplySuggestion = (item: DictionarySearchResult) => {
    setWord(item.word);
    if (item.ipa) setIpa(item.ipa);
    if (item.definitions && item.definitions.length > 0) {
      setDefinition(item.definitions.join("; "));
    }
    if (item.synonyms && item.synonyms.length > 0) {
      setSynonyms(item.synonyms.join(", "));
    }
    setShowSuggestions(false);
    setDbFoundStatus("found");
  };

  const handleCreateNewCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCategoryName.trim() || isCreatingCategory) return;
    setIsCreatingCategory(true);
    try {
      const created = await createVocabularySet(newCategoryName.trim());
      if (created) {
        setSets((prev) => [...prev, created]);
        setSetName(created.name);
        setShowCreateSetModal(false);
        setNewCategoryName("");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsCreatingCategory(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!word.trim() || submitting) return;

    setSubmitting(true);
    try {
      if (editId) {
        const res = await updateUserVocabularyWord(editId, {
          word: word.trim(),
          ipa: ipa.trim(),
          definition: definition.trim(),
          translation: translation.trim(),
          synonyms: synonyms.trim(),
          notes: notes.trim(),
          set_name: setName,
          status,
        });
        if (res.success) {
          router.push("/vocabulary/list");
        }
      } else {
        const res = await addUserVocabularyWord({
          word: word.trim(),
          ipa: ipa.trim(),
          definition: definition.trim(),
          translation: translation.trim(),
          synonyms: synonyms.trim(),
          notes: notes.trim(),
          set_name: setName,
          status,
        });

        if (res.limitReached) {
          setLimitModalOpen(true);
        } else if (res.success) {
          router.push("/vocabulary/list");
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <TopBar points={points} />

      <div className="content-shell pb-16">
        {/* Back Link */}
        <div className="mb-3">
          <Link
            href="/vocabulary/list"
            className="inline-flex items-center text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            ← Back to My Dictionary
          </Link>
        </div>

        {/* Title */}
        <div className="mb-4">
          <h1 className="text-2xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {editId ? "Edit Word" : "Add Word"}
            </span>
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            Fill in the details or search dictionary to autofill definitions and pronunciation.
          </p>
          <div className="mt-3 h-0.5 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Card: Word & Search */}
          <Card className="border-white/10 bg-zinc-900/90 p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Word & Lookup
              </span>
            </div>

            {/* Word Input with Search Button */}
            <div className="mb-3">
              <label className="block text-xs font-semibold text-zinc-400 mb-1.5">
                Word or Expression <span className="text-rose-400">*</span>
              </label>
              <div className="relative flex gap-2">
                <input
                  type="text"
                  value={word}
                  onChange={(e) => {
                    setWord(e.target.value);
                    setDbFoundStatus("idle");
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleSearchDictionary();
                    }
                  }}
                  placeholder="e.g. abduct, persistent, resilient"
                  required
                  className="flex-1 rounded-xl border border-cyan-400/30 bg-zinc-950 px-3.5 py-2.5 text-sm font-semibold text-white placeholder-zinc-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 shadow-inner"
                />
                <button
                  type="button"
                  onClick={() => handleSearchDictionary()}
                  disabled={isSearchingDb || !word.trim()}
                  className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-3.5 py-2.5 text-xs font-bold text-black disabled:opacity-50 transition-transform active:scale-95 shadow-md shadow-cyan-500/10"
                >
                  {isSearchingDb ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Search className="h-4 w-4" />
                  )}
                  <span>Search</span>
                </button>
              </div>

              {/* Status banner */}
              {dbFoundStatus === "found" && (
                <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <Check className="h-3.5 w-3.5" /> Found in dictionary! Details autofilled.
                </div>
              )}
              {dbFoundStatus === "not_found" && (
                <div className="mt-2 text-xs text-zinc-400">
                  Not found in cloud dictionary. You can manually fill the fields below!
                </div>
              )}

              {/* Suggestions Dropdown */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="mt-2 rounded-xl border border-white/10 bg-zinc-950 p-2 space-y-1 shadow-xl">
                  <div className="px-2 py-1 text-[10px] font-bold text-zinc-500 uppercase">
                    Dictionary Suggestions:
                  </div>
                  {suggestions.map((item) => (
                    <button
                      key={item.word}
                      type="button"
                      onClick={() => handleApplySuggestion(item)}
                      className="w-full text-left flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs hover:bg-zinc-800 transition-colors"
                    >
                      <span className="font-bold text-cyan-300">{item.word}</span>
                      {item.ipa && <span className="text-zinc-400 font-ipa text-[11px]">{item.ipa}</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* IPA Phonetic & Speaker */}
            <div className="mb-3">
              <label className="block text-xs font-semibold text-zinc-400 mb-1.5">
                Pronunciation / IPA
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={ipa}
                  onChange={(e) => setIpa(e.target.value)}
                  placeholder="/ æbˈdʌkt /"
                  className="flex-1 rounded-xl border border-white/10 bg-zinc-800 px-3.5 py-2.5 text-sm font-ipa text-zinc-200 placeholder-zinc-600 focus:border-cyan-400 focus:outline-none"
                />
                {word.trim() && (
                  <div className="shrink-0">
                    <StrictEnglishTTS text={word.trim()} />
                  </div>
                )}
              </div>
            </div>

            {/* Definition */}
            <div className="mb-3">
              <label className="block text-xs font-semibold text-zinc-400 mb-1.5">
                English Definition
              </label>
              <textarea
                value={definition}
                onChange={(e) => setDefinition(e.target.value)}
                placeholder="Explain the word in simple English..."
                rows={2}
                className="w-full rounded-xl border border-white/10 bg-zinc-800 px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 focus:border-cyan-400 focus:outline-none resize-none leading-relaxed"
              />
            </div>

            {/* Translation */}
            <div className="mb-3">
              <label className="block text-xs font-semibold text-zinc-400 mb-1.5">
                Translation
              </label>
              <input
                type="text"
                value={translation}
                onChange={(e) => setTranslation(e.target.value)}
                placeholder="Translation in your language"
                className="w-full rounded-xl border border-pink-500/20 bg-zinc-800 px-3.5 py-2.5 text-sm text-pink-200 placeholder-zinc-600 focus:border-pink-400 focus:outline-none"
              />
            </div>

            {/* Synonyms */}
            <div>
              <label className="block text-xs font-semibold text-zinc-400 mb-1.5">
                Synonyms
              </label>
              <input
                type="text"
                value={synonyms}
                onChange={(e) => setSynonyms(e.target.value)}
                placeholder="e.g. kidnap, carry off, seize"
                className="w-full rounded-xl border border-white/10 bg-zinc-800 px-3.5 py-2.5 text-xs text-zinc-300 placeholder-zinc-600 focus:border-cyan-400 focus:outline-none"
              />
            </div>
          </Card>

          {/* Card: Personal Notes */}
          <Card className="border-white/10 bg-zinc-900/90 p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
              <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                Personal Notes & Mnemonics
              </span>
            </div>

            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Write an example sentence, context, or a memory hook..."
              rows={3}
              maxLength={1000}
              className="w-full rounded-xl border border-white/10 bg-zinc-800 px-3.5 py-2.5 text-xs text-zinc-300 placeholder-zinc-600 focus:border-purple-400 focus:outline-none resize-none leading-relaxed"
            />
            <div className="mt-1 text-right text-[10px] text-zinc-500">
              {notes.length} / 1000
            </div>
          </Card>

          {/* Card: Category / Set & Status */}
          <Card className="border-white/10 bg-zinc-900/90 p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Category & Learning Status
              </span>
            </div>

            {/* Set Selection */}
            <div className="mb-4">
              <label className="block text-xs font-semibold text-zinc-400 mb-1.5">
                Category (Set)
              </label>
              <div className="flex gap-2">
                <select
                  value={setName}
                  onChange={(e) => setSetName(e.target.value)}
                  className="flex-1 rounded-xl border border-white/10 bg-zinc-800 px-3.5 py-2.5 text-xs text-white focus:border-amber-400 focus:outline-none"
                >
                  <option value="General">General</option>
                  {sets
                    .filter((s) => s.name !== "General")
                    .map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                </select>
                <button
                  type="button"
                  onClick={() => setShowCreateSetModal(true)}
                  className="flex items-center gap-1 rounded-xl border border-dashed border-amber-400/40 bg-amber-400/10 px-3 py-2 text-xs font-bold text-amber-300 hover:bg-amber-400/20 transition-colors"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>New Set</span>
                </button>
              </div>
            </div>

            {/* Status Selection */}
            <div>
              <label className="block text-xs font-semibold text-zinc-400 mb-1.5">
                Status
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setStatus("new")}
                  className={`rounded-xl py-2 text-xs font-bold transition-all ${
                    status === "new"
                      ? "bg-cyan-400 text-black shadow-md shadow-cyan-500/10"
                      : "border border-white/10 bg-zinc-800 text-zinc-400"
                  }`}
                >
                  ● New
                </button>
                <button
                  type="button"
                  onClick={() => setStatus("learning")}
                  className={`rounded-xl py-2 text-xs font-bold transition-all ${
                    status === "learning"
                      ? "bg-amber-400 text-black shadow-md shadow-amber-500/10"
                      : "border border-white/10 bg-zinc-800 text-zinc-400"
                  }`}
                >
                  ◐ Learning
                </button>
                <button
                  type="button"
                  onClick={() => setStatus("learned")}
                  className={`rounded-xl py-2 text-xs font-bold transition-all ${
                    status === "learned"
                      ? "bg-emerald-400 text-black shadow-md shadow-emerald-500/10"
                      : "border border-white/10 bg-zinc-800 text-zinc-400"
                  }`}
                >
                  ✓ Learned
                </button>
              </div>
            </div>
          </Card>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitting || !word.trim()}
            className="w-full rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 py-3.5 text-sm font-extrabold text-black shadow-lg shadow-purple-500/20 transition-transform active:scale-[0.98] disabled:opacity-50"
          >
            {submitting
              ? "Saving..."
              : editId
              ? "Save Changes"
              : "Add to Dictionary"}
          </button>
        </form>
      </div>

      {/* Modal: Create Category */}
      {showCreateSetModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-3xl border border-white/15 bg-zinc-900 p-5 shadow-2xl animate-fade-up">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <FolderPlus className="h-5 w-5 text-amber-400" />
                <h3 className="text-base font-bold text-white">New Category</h3>
              </div>
              <button
                onClick={() => setShowCreateSetModal(false)}
                className="rounded-full p-1 text-zinc-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleCreateNewCategory} className="space-y-4">
              <div>
                <input
                  type="text"
                  value={newCategoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                  placeholder="e.g. Work, Slang, Exam Prep"
                  required
                  autoFocus
                  className="w-full rounded-xl border border-white/10 bg-zinc-800 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-amber-400 focus:outline-none"
                />
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setShowCreateSetModal(false)}
                  className="flex-1 rounded-xl border border-white/10 bg-zinc-800 py-2.5 text-xs font-semibold text-zinc-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isCreatingCategory || !newCategoryName.trim()}
                  className="flex-1 rounded-xl bg-amber-400 py-2.5 text-xs font-bold text-black disabled:opacity-50"
                >
                  {isCreatingCategory ? "Creating..." : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Free Tier Limit Reached */}
      {limitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-3xl border border-amber-400/30 bg-zinc-900 p-6 text-center shadow-2xl animate-fade-up">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 text-black shadow-lg shadow-amber-500/20">
              <Crown className="h-7 w-7" />
            </div>
            <h3 className="text-lg font-black text-white mb-2">
              Free Limit Reached
            </h3>
            <p className="text-xs text-zinc-400 mb-5 leading-relaxed">
              You have reached the free limit of <strong className="text-white">{FREE_WORDS_LIMIT} words</strong> in My Dictionary. Upgrade to Premium for unlimited words and advanced practice!
            </p>
            <div className="space-y-2">
              <Link
                href="/premium"
                className="block w-full rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 py-3 text-xs font-extrabold text-black shadow-md hover:opacity-95"
              >
                Upgrade to Premium
              </Link>
              <button
                type="button"
                onClick={() => setLimitModalOpen(false)}
                className="w-full rounded-xl border border-white/10 bg-zinc-800 py-2.5 text-xs font-semibold text-zinc-400 hover:text-white"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function VocabularyAddPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black text-white p-8 text-center text-sm">Loading...</div>}>
      <AddWordForm />
    </Suspense>
  );
}
