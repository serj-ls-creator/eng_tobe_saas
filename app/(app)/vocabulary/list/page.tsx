"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  Search, 
  Settings, 
  Plus, 
  Pencil, 
  Trash2, 
  Check, 
  Layers, 
  FolderPlus,
  BookMarked,
  Volume2
} from "lucide-react";

import { TopBar } from "@/components/layout/TopBar";
import { Card } from "@/components/ui/card";
import { StrictEnglishTTS } from "@/components/audio/StrictEnglishTTS";
import { usePoints } from "@/lib/usePoints";
import { 
  fetchUserVocabulary, 
  fetchUserVocabularySets, 
  updateUserVocabularyWord, 
  deleteUserVocabularyWord, 
  getStoredVocabularySettings,
  VocabularyCardDisplaySettings,
  DEFAULT_VOCABULARY_CARD_SETTINGS,
  UserWord, 
  VocabularySet 
} from "@/lib/vocabulary";

type StatusFilter = "all" | "new" | "learning" | "learned";

export default function VocabularyListPage() {
  const points = usePoints();
  const router = useRouter();

  const [words, setWords] = useState<UserWord[]>([]);
  const [sets, setSets] = useState<VocabularySet[]>([]);
  const [displaySettings, setDisplaySettings] = useState<VocabularyCardDisplaySettings>(DEFAULT_VOCABULARY_CARD_SETTINGS);
  const [loading, setLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [selectedSet, setSelectedSet] = useState<string>("all");

  const [wordToDelete, setWordToDelete] = useState<UserWord | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        setDisplaySettings(getStoredVocabularySettings());
        const [loadedWords, loadedSets] = await Promise.all([
          fetchUserVocabulary(),
          fetchUserVocabularySets(),
        ]);
        setWords(loadedWords);
        setSets(loadedSets);
      } catch (err) {
        console.error("Failed to load vocabulary data:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // Counts
  const counts = useMemo(() => {
    return {
      all: words.length,
      new: words.filter((w) => w.status === "new").length,
      learning: words.filter((w) => w.status === "learning").length,
      learned: words.filter((w) => w.status === "learned").length,
    };
  }, [words]);

  // Filtered words
  const filteredWords = useMemo(() => {
    return words.filter((w) => {
      // Status filter
      if (statusFilter !== "all" && w.status !== statusFilter) {
        return false;
      }
      // Set filter
      if (selectedSet !== "all" && w.set_name !== selectedSet) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesWord = w.word.toLowerCase().includes(q);
        const matchesDef = w.definition?.toLowerCase().includes(q);
        const matchesTrans = w.translation?.toLowerCase().includes(q);
        const matchesSyn = w.synonyms?.toLowerCase().includes(q);
        const matchesNotes = w.notes?.toLowerCase().includes(q);
        if (!matchesWord && !matchesDef && !matchesTrans && !matchesSyn && !matchesNotes) {
          return false;
        }
      }
      return true;
    });
  }, [words, statusFilter, selectedSet, searchQuery]);

  // Cycle status on pill click: new -> learning -> learned -> new
  const handleCycleStatus = async (word: UserWord) => {
    const nextStatusMap: Record<UserWord["status"], UserWord["status"]> = {
      new: "learning",
      learning: "learned",
      learned: "new",
    };
    const nextStatus = nextStatusMap[word.status];

    setWords((prev) =>
      prev.map((w) => (w.id === word.id ? { ...w, status: nextStatus } : w))
    );

    await updateUserVocabularyWord(word.id, { status: nextStatus });
  };

  // Delete word
  const handleDeleteWord = async () => {
    if (!wordToDelete) return;
    const id = wordToDelete.id;
    setWords((prev) => prev.filter((w) => w.id !== id));
    setWordToDelete(null);
    await deleteUserVocabularyWord(id);
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      <TopBar points={points} />

      <div className="content-shell pb-28">
        {/* Back Link */}
        <div className="mb-3">
          <Link
            href="/vocabulary"
            className="inline-flex items-center text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            ← Back to My Vocabulary
          </Link>
        </div>

        {/* Title Header */}
        <div className="mb-4">
          <h1 className="text-2xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              My Dictionary
            </span>
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            {words.length} {words.length === 1 ? "word" : "words"} · tap status to change or ✏️ to edit.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-3">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search your words, meanings..."
            className="w-full rounded-2xl border border-white/10 bg-zinc-900/90 pl-10 pr-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 transition-all"
          />
        </div>

        {/* Status Filter Pills */}
        <div className="flex gap-2 overflow-x-auto pb-1 mb-3 scrollbar-none">
          <button
            onClick={() => setStatusFilter("all")}
            className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${
              statusFilter === "all"
                ? "bg-gradient-to-r from-cyan-400 to-purple-500 text-black shadow-md shadow-cyan-500/10"
                : "border border-white/10 bg-zinc-900 text-zinc-400 hover:text-white"
            }`}
          >
            All <span className="opacity-75 ml-1">{counts.all}</span>
          </button>
          <button
            onClick={() => setStatusFilter("new")}
            className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${
              statusFilter === "new"
                ? "bg-cyan-400 text-black shadow-md shadow-cyan-500/10"
                : "border border-white/10 bg-zinc-900 text-zinc-400 hover:text-white"
            }`}
          >
            New <span className="opacity-75 ml-1">{counts.new}</span>
          </button>
          <button
            onClick={() => setStatusFilter("learning")}
            className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${
              statusFilter === "learning"
                ? "bg-amber-400 text-black shadow-md shadow-amber-500/10"
                : "border border-white/10 bg-zinc-900 text-zinc-400 hover:text-white"
            }`}
          >
            Learning <span className="opacity-75 ml-1">{counts.learning}</span>
          </button>
          <button
            onClick={() => setStatusFilter("learned")}
            className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${
              statusFilter === "learned"
                ? "bg-emerald-400 text-black shadow-md shadow-emerald-500/10"
                : "border border-white/10 bg-zinc-900 text-zinc-400 hover:text-white"
            }`}
          >
            Learned <span className="opacity-75 ml-1">{counts.learned}</span>
          </button>
        </div>

        {/* Set Row & Settings Icon */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex flex-1 gap-2 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setSelectedSet("all")}
              className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                selectedSet === "all"
                  ? "border border-purple-400/50 bg-purple-500/15 text-purple-300"
                  : "border border-white/10 bg-zinc-900 text-zinc-400 hover:text-white"
              }`}
            >
              All sets
            </button>
            {sets.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedSet(s.name)}
                className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                  selectedSet === s.name
                    ? "border border-purple-400/50 bg-purple-500/15 text-purple-300"
                    : "border border-white/10 bg-zinc-900 text-zinc-400 hover:text-white"
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>

          <Link
            href="/vocabulary/settings"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-zinc-900 text-zinc-400 hover:text-white transition-colors"
            title="Settings"
          >
            <Settings className="h-4 w-4" />
          </Link>
        </div>

        {/* Word List */}
        {loading ? (
          <div className="py-12 text-center text-sm text-zinc-500">
            Loading your dictionary...
          </div>
        ) : filteredWords.length === 0 ? (
          <Card className="border-white/10 bg-zinc-900/50 p-8 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-800 text-zinc-400">
              <BookMarked className="h-6 w-6" />
            </div>
            <h3 className="text-sm font-bold text-white mb-1">
              {searchQuery || statusFilter !== "all" || selectedSet !== "all"
                ? "No matching words found"
                : "Your dictionary is empty"}
            </h3>
            <p className="text-xs text-zinc-400 mb-4 max-w-xs mx-auto">
              {searchQuery || statusFilter !== "all" || selectedSet !== "all"
                ? "Try clearing filters or search query."
                : "Add your first word and build your vocabulary list!"}
            </p>
            {(!searchQuery && statusFilter === "all" && selectedSet === "all") && (
              <Link
                href="/vocabulary/add"
                className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-4 py-2.5 text-xs font-bold text-black"
              >
                <Plus className="h-4 w-4" />
                Add Word
              </Link>
            )}
          </Card>
        ) : (
          <div className="space-y-3">
            {filteredWords.map((word) => (
              <Card
                key={word.id}
                className="relative overflow-hidden border-white/10 bg-zinc-900/90 p-4 transition-all hover:border-white/20"
              >
                {/* Left Status Bar */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 ${
                    word.status === "learned"
                      ? "bg-emerald-400"
                      : word.status === "learning"
                      ? "bg-amber-400"
                      : "bg-cyan-400"
                  }`}
                />

                <div className="pl-1">
                  {/* Top: Word, IPA, Speaker */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-baseline gap-2.5 flex-wrap">
                      <span className="text-base font-extrabold text-white">
                        {word.word}
                      </span>
                      {displaySettings.showIpa && word.ipa && (
                        <span className="text-xs text-zinc-400 font-mono">
                          {word.ipa}
                        </span>
                      )}
                    </div>
                    <div className="shrink-0">
                      <StrictEnglishTTS text={word.word} />
                    </div>
                  </div>

                  {/* Definition */}
                  {displaySettings.showDefinition && word.definition && (
                    <p className="text-xs text-zinc-300 mt-1.5 leading-relaxed">
                      {word.definition}
                    </p>
                  )}

                  {/* Translation */}
                  {displaySettings.showTranslation && word.translation && (
                    <p className="text-xs font-medium text-pink-300 mt-1">
                      {word.translation}
                    </p>
                  )}

                  {/* Synonyms */}
                  {displaySettings.showSynonyms && word.synonyms && (
                    <div className="text-[11px] text-zinc-400 mt-1">
                      <span className="text-zinc-500 font-medium">Synonyms: </span>
                      {word.synonyms}
                    </div>
                  )}

                  {/* Notes */}
                  {displaySettings.showNotes && word.notes && (
                    <div className="mt-2 rounded-lg bg-zinc-800/60 p-2 text-[11px] text-zinc-300 italic border border-white/5">
                      💡 {word.notes}
                    </div>
                  )}

                  {/* Bottom: Status Pill, Set Badge, Actions */}
                  <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      {/* Clickable status pill to cycle */}
                      <button
                        onClick={() => handleCycleStatus(word)}
                        title="Click to change status"
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-bold transition-transform active:scale-95 ${
                          word.status === "learned"
                            ? "bg-emerald-400/15 text-emerald-400 ring-1 ring-emerald-400/30"
                            : word.status === "learning"
                            ? "bg-amber-400/15 text-amber-400 ring-1 ring-amber-400/30"
                            : "bg-cyan-400/15 text-cyan-400 ring-1 ring-cyan-400/30"
                        }`}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-current" />
                        {word.status === "learned"
                          ? "Learned"
                          : word.status === "learning"
                          ? "Learning"
                          : "New"}
                      </button>

                      {word.set_name && word.set_name !== "General" && (
                        <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-[10px] text-zinc-400">
                          {word.set_name}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5">
                      {/* Edit Button */}
                      <Link
                        href={`/vocabulary/add?id=${word.id}`}
                        className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-800 text-zinc-400 hover:text-cyan-300 hover:bg-zinc-700 transition-colors"
                        title="Edit word"
                      >
                        <Pencil className="h-3.5 w-3.5" />
                      </Link>

                      {/* Delete Button */}
                      <button
                        onClick={() => setWordToDelete(word)}
                        className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-800 text-zinc-400 hover:text-rose-400 hover:bg-zinc-700 transition-colors"
                        title="Delete word"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Floating Add Button */}
      <Link
        href="/vocabulary/add"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black shadow-xl shadow-purple-500/30 transition-transform active:scale-90 hover:scale-105"
        title="Add new word"
      >
        <Plus className="h-7 w-7 stroke-[2.5]" />
      </Link>

      {/* Delete Confirmation Modal */}
      {wordToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-3xl border border-white/15 bg-zinc-900 p-5 shadow-2xl animate-fade-up">
            <h3 className="text-base font-bold text-white mb-2">Delete Word</h3>
            <p className="text-xs text-zinc-400 mb-5 leading-relaxed">
              Are you sure you want to remove &quot;<strong className="text-white">{wordToDelete.word}</strong>&quot; from your dictionary?
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setWordToDelete(null)}
                className="flex-1 rounded-xl border border-white/10 bg-zinc-800 py-2.5 text-xs font-semibold text-zinc-300 hover:bg-zinc-700"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteWord}
                className="flex-1 rounded-xl bg-rose-500 py-2.5 text-xs font-bold text-white hover:bg-rose-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
