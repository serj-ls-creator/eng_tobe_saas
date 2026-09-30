"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  Check, 
  Settings as SettingsIcon, 
  Sliders, 
  Sparkles,
  Volume2,
  FolderPlus,
  Pencil,
  Trash2,
  Folder,
  Plus,
  X,
  AlertTriangle
} from "lucide-react";

import { TopBar } from "@/components/layout/TopBar";
import { Card } from "@/components/ui/card";
import { usePoints } from "@/lib/usePoints";
import { 
  getStoredVocabularySettings, 
  saveStoredVocabularySettings, 
  fetchUserVocabularySets,
  fetchUserVocabulary,
  createVocabularySet,
  renameVocabularySet,
  deleteVocabularySet,
  VocabularyCardDisplaySettings,
  VocabularySet,
  UserWord
} from "@/lib/vocabulary";

interface DisplayFieldOption {
  key: keyof VocabularyCardDisplaySettings;
  label: string;
  description: string;
}

const DISPLAY_OPTIONS: DisplayFieldOption[] = [
  {
    key: "showIpa",
    label: "Pronunciation (IPA)",
    description: "Show phonetic transcription next to the word",
  },
  {
    key: "showDefinition",
    label: "English Definition",
    description: "Display explanation in simple English",
  },
  {
    key: "showTranslation",
    label: "Translation",
    description: "Show word translation in your language",
  },
  {
    key: "showSynonyms",
    label: "Synonyms",
    description: "Display similar words and alternative phrases",
  },
  {
    key: "showNotes",
    label: "Personal Notes",
    description: "Show personal examples, context, or memory tricks",
  },
];

export default function VocabularySettingsPage() {
  const points = usePoints();
  const router = useRouter();

  const [settings, setSettings] = useState<VocabularyCardDisplaySettings>(getStoredVocabularySettings());
  const [sets, setSets] = useState<VocabularySet[]>([]);
  const [words, setWords] = useState<UserWord[]>([]);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Set management modals
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newSetName, setNewSetName] = useState("");
  const [isCreatingSet, setIsCreatingSet] = useState(false);

  const [setToRename, setSetToRename] = useState<VocabularySet | null>(null);
  const [renamedName, setRenamedName] = useState("");
  const [isRenaming, setIsRenaming] = useState(false);

  const [setToDelete, setSetToDelete] = useState<VocabularySet | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const loadData = async () => {
    try {
      setSettings(getStoredVocabularySettings());
      const [loadedSets, loadedWords] = await Promise.all([
        fetchUserVocabularySets(),
        fetchUserVocabulary(),
      ]);
      setSets(loadedSets);
      setWords(loadedWords);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const toggleField = (key: keyof VocabularyCardDisplaySettings) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSave = () => {
    saveStoredVocabularySettings(settings);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      router.push("/vocabulary/list");
    }, 700);
  };

  // Create set
  const handleCreateSet = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSetName.trim() || isCreatingSet) return;
    setIsCreatingSet(true);
    try {
      const created = await createVocabularySet(newSetName.trim());
      if (created) {
        setNewSetName("");
        setShowCreateModal(false);
        await loadData();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsCreatingSet(false);
    }
  };

  // Rename set
  const handleRenameSet = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!setToRename || !renamedName.trim() || isRenaming) return;
    setIsRenaming(true);
    try {
      const ok = await renameVocabularySet(setToRename.name, renamedName.trim());
      if (ok) {
        setSetToRename(null);
        setRenamedName("");
        await loadData();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsRenaming(false);
    }
  };

  // Delete set
  const handleDeleteSet = async () => {
    if (!setToDelete || isDeleting) return;
    setIsDeleting(true);
    try {
      const ok = await deleteVocabularySet(setToDelete.name);
      if (ok) {
        setSetToDelete(null);
        await loadData();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsDeleting(false);
    }
  };

  // Word count per set
  const getWordCountForSet = (setName: string) => {
    return words.filter((w) => w.set_name === setName).length;
  };

  // Sample data for live preview
  const sample = {
    word: "resilience",
    ipa: "/ rɪˈzɪliəns /",
    definition: "The capacity to recover quickly from difficulties; toughness.",
    translation: "Endurance, stamina",
    synonyms: "grit, persistence, tenacity",
    notes: "Remember: Keep going despite any obstacle!",
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <TopBar points={points} />

      <div className="content-shell pb-20">
        {/* Back Link */}
        <div className="mb-3">
          <Link
            href="/vocabulary/list"
            className="inline-flex items-center text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            ← Back to My Dictionary
          </Link>
        </div>

        {/* Header */}
        <div className="mb-4">
          <h1 className="text-2xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Vocabulary Settings
            </span>
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            Configure card display and manage your custom vocabulary categories.
          </p>
          <div className="mt-3 h-0.5 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400" />
        </div>

        {/* Section 1: Single Column Display Toggles */}
        <Card className="mb-4 border-white/10 bg-zinc-900/90 p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Visible Card Fields
            </span>
          </div>

          <div className="space-y-2.5">
            {DISPLAY_OPTIONS.map((opt) => {
              const isChecked = settings[opt.key];
              return (
                <button
                  key={opt.key}
                  type="button"
                  onClick={() => toggleField(opt.key)}
                  className="w-full flex items-start gap-3 rounded-xl border border-white/5 bg-zinc-800/60 p-3 text-left transition-colors hover:bg-zinc-800 cursor-pointer"
                >
                  <div
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                      isChecked
                        ? "bg-cyan-400 border-cyan-400 text-black shadow-sm"
                        : "border-white/20 bg-zinc-900 text-transparent"
                    }`}
                  >
                    <Check className="h-3.5 w-3.5 stroke-[3]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`text-xs font-bold ${isChecked ? "text-white" : "text-zinc-400"}`}>
                      {opt.label}
                    </div>
                    <div className="text-[11px] text-zinc-500 mt-0.5">
                      {opt.description}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </Card>

        {/* Section 2: Live Card Preview */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2 px-1">
            <span className="h-2 w-2 rounded-full bg-pink-400 shadow-[0_0_8px_rgba(244,114,182,0.8)]" />
            <span className="text-xs font-bold uppercase tracking-wider text-pink-400">
              Live Card Preview
            </span>
          </div>

          <Card className="relative overflow-hidden border-white/10 bg-zinc-900/90 p-4 shadow-xl">
            {/* Left Status Bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-400" />

            <div className="pl-1">
              {/* Word, IPA & Audio preview */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-baseline gap-2.5 flex-wrap">
                  <span className="text-base font-extrabold text-white">
                    {sample.word}
                  </span>
                  {settings.showIpa && (
                    <span className="text-xs text-zinc-400 font-ipa tracking-wide">
                      {sample.ipa}
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-yellow-500/10 text-yellow-400">
                  <Volume2 className="h-4 w-4" />
                </div>
              </div>

              {/* Definition */}
              {settings.showDefinition && (
                <p className="text-xs text-zinc-300 mt-1.5 leading-relaxed">
                  {sample.definition}
                </p>
              )}

              {/* Translation */}
              {settings.showTranslation && (
                <p className="text-xs font-medium text-pink-300 mt-1">
                  {sample.translation}
                </p>
              )}

              {/* Synonyms */}
              {settings.showSynonyms && (
                <div className="text-[11px] text-zinc-400 mt-1">
                  <span className="text-zinc-500 font-medium">Synonyms: </span>
                  {sample.synonyms}
                </div>
              )}

              {/* Notes */}
              {settings.showNotes && (
                <div className="mt-2 rounded-lg bg-zinc-800/60 p-2 text-[11px] text-zinc-300 italic border border-white/5">
                  💡 {sample.notes}
                </div>
              )}

              {/* Bottom pill preview */}
              <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/15 px-2.5 py-0.5 text-[10px] font-bold text-emerald-400 ring-1 ring-emerald-400/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  Learned
                </span>
                <span className="text-[10px] text-zinc-500 font-medium">Preview</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Section 3: Manage Categories (Sets) */}
        <Card className="mb-5 border-white/10 bg-zinc-900/90 p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
              <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                Categories (Sets)
              </span>
            </div>

            <button
              type="button"
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-1 rounded-xl bg-purple-500/15 border border-purple-400/30 px-2.5 py-1 text-xs font-bold text-purple-300 hover:bg-purple-500/25 transition-colors"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>New Category</span>
            </button>
          </div>

          <p className="text-xs text-zinc-400 mb-3 leading-relaxed">
            Organize words by topics. When a category is deleted, its words are automatically moved to the <strong className="text-white">General</strong> category.
          </p>

          <div className="space-y-2">
            {/* General (Default) */}
            <div className="flex items-center justify-between rounded-xl border border-white/5 bg-zinc-800/40 px-3.5 py-2.5">
              <div className="flex items-center gap-2.5">
                <Folder className="h-4 w-4 text-zinc-400" />
                <div>
                  <span className="text-xs font-bold text-white">General</span>
                  <span className="ml-2 rounded-md bg-zinc-800 px-1.5 py-0.5 text-[10px] text-zinc-400">
                    Default
                  </span>
                </div>
              </div>
              <span className="text-xs text-zinc-500 font-medium">
                {getWordCountForSet("General")} {getWordCountForSet("General") === 1 ? "word" : "words"}
              </span>
            </div>

            {/* Custom Sets */}
            {sets.map((s) => {
              const count = getWordCountForSet(s.name);
              return (
                <div
                  key={s.id}
                  className="flex items-center justify-between rounded-xl border border-white/5 bg-zinc-800/60 px-3.5 py-2.5 transition-colors hover:border-white/10"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Folder className="h-4 w-4 text-purple-400 shrink-0" />
                    <div className="truncate">
                      <span className="text-xs font-bold text-white">{s.name}</span>
                      <span className="ml-2 text-[11px] text-zinc-500 font-medium">
                        ({count} {count === 1 ? "word" : "words"})
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0 ml-2">
                    {/* Rename Button */}
                    <button
                      type="button"
                      onClick={() => {
                        setSetToRename(s);
                        setRenamedName(s.name);
                      }}
                      className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-800 text-zinc-400 hover:text-cyan-300 hover:bg-zinc-700 transition-colors"
                      title="Rename category"
                    >
                      <Pencil className="h-3.5 w-3.5" />
                    </button>

                    {/* Delete Button */}
                    <button
                      type="button"
                      onClick={() => setSetToDelete(s)}
                      className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-800 text-zinc-400 hover:text-rose-400 hover:bg-zinc-700 transition-colors"
                      title="Delete category"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Save Settings Button */}
        <button
          onClick={handleSave}
          className="w-full rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 py-3.5 text-sm font-extrabold text-black shadow-lg shadow-purple-500/20 transition-transform active:scale-[0.98]"
        >
          {savedSuccess ? "✓ Settings Saved!" : "Save Settings"}
        </button>
      </div>

      {/* Modal: Create Category */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-3xl border border-white/15 bg-zinc-900 p-5 shadow-2xl animate-fade-up">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <FolderPlus className="h-5 w-5 text-purple-400" />
                <h3 className="text-base font-bold text-white">New Category</h3>
              </div>
              <button
                onClick={() => setShowCreateModal(false)}
                className="rounded-full p-1 text-zinc-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleCreateSet} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-400 mb-1.5">
                  Category Name
                </label>
                <input
                  type="text"
                  value={newSetName}
                  onChange={(e) => setNewSetName(e.target.value)}
                  placeholder="e.g. Travel, Job Interview, Slang"
                  required
                  autoFocus
                  className="w-full rounded-xl border border-white/10 bg-zinc-800 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-purple-400 focus:outline-none"
                />
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1 rounded-xl border border-white/10 bg-zinc-800 py-2.5 text-xs font-semibold text-zinc-300 hover:bg-zinc-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isCreatingSet || !newSetName.trim()}
                  className="flex-1 rounded-xl bg-purple-500 py-2.5 text-xs font-bold text-white disabled:opacity-50 hover:bg-purple-600"
                >
                  {isCreatingSet ? "Creating..." : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Rename Category */}
      {setToRename && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-3xl border border-white/15 bg-zinc-900 p-5 shadow-2xl animate-fade-up">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Pencil className="h-4 w-4 text-cyan-400" />
                <h3 className="text-base font-bold text-white">Rename Category</h3>
              </div>
              <button
                onClick={() => setSetToRename(null)}
                className="rounded-full p-1 text-zinc-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleRenameSet} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-400 mb-1.5">
                  Category Name
                </label>
                <input
                  type="text"
                  value={renamedName}
                  onChange={(e) => setRenamedName(e.target.value)}
                  placeholder="New category name"
                  required
                  autoFocus
                  className="w-full rounded-xl border border-white/10 bg-zinc-800 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setSetToRename(null)}
                  className="flex-1 rounded-xl border border-white/10 bg-zinc-800 py-2.5 text-xs font-semibold text-zinc-300 hover:bg-zinc-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isRenaming || !renamedName.trim()}
                  className="flex-1 rounded-xl bg-cyan-400 py-2.5 text-xs font-bold text-black disabled:opacity-50 hover:bg-cyan-300"
                >
                  {isRenaming ? "Saving..." : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Delete Category Confirmation */}
      {setToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-3xl border border-rose-500/30 bg-zinc-900 p-5 shadow-2xl animate-fade-up">
            <div className="flex items-center gap-2.5 mb-2 text-rose-400">
              <AlertTriangle className="h-5 w-5 shrink-0" />
              <h3 className="text-base font-bold text-white">Delete Category</h3>
            </div>

            <p className="text-xs text-zinc-400 mb-3 leading-relaxed">
              Are you sure you want to delete <strong className="text-white">&quot;{setToDelete.name}&quot;</strong>?
            </p>

            <div className="mb-4 rounded-xl border border-amber-400/20 bg-amber-400/10 p-3 text-[11px] text-amber-300 leading-relaxed">
              ℹ️ All <strong className="text-white">{getWordCountForSet(setToDelete.name)} words</strong> in this category will be preserved and moved to the <strong className="text-white">General</strong> category.
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setSetToDelete(null)}
                className="flex-1 rounded-xl border border-white/10 bg-zinc-800 py-2.5 text-xs font-semibold text-zinc-300 hover:bg-zinc-700"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDeleteSet}
                disabled={isDeleting}
                className="flex-1 rounded-xl bg-rose-500 py-2.5 text-xs font-bold text-white disabled:opacity-50 hover:bg-rose-600"
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
