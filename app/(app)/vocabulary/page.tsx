"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  BookMarked, 
  Plus, 
  FolderPlus, 
  BookOpen, 
  Gamepad2, 
  ChevronRight, 
  Sparkles,
  Info,
  Layers,
  X
} from "lucide-react";

import { TopBar } from "@/components/layout/TopBar";
import { Card } from "@/components/ui/card";
import { usePoints } from "@/lib/usePoints";
import { 
  fetchUserVocabulary, 
  createVocabularySet, 
  UserWord 
} from "@/lib/vocabulary";

export default function VocabularyHubPage() {
  const points = usePoints();
  const [words, setWords] = useState<UserWord[]>([]);
  const [loading, setLoading] = useState(true);
  const [showNewSetModal, setShowNewSetModal] = useState(false);
  const [newSetName, setNewSetName] = useState("");
  const [setCreating, setSetCreating] = useState(false);
  const [setCreatedSuccess, setSetCreatedSuccess] = useState(false);
  const [showLearnModal, setShowLearnModal] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const userWords = await fetchUserVocabulary();
        setWords(userWords);
      } catch (err) {
        console.error("Failed to load vocabulary words:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const totalWords = words.length;
  const learnedCount = words.filter((w) => w.status === "learned").length;
  const learningCount = words.filter((w) => w.status === "learning").length;
  const newCount = words.filter((w) => w.status === "new").length;
  const progressPercent = totalWords > 0 ? Math.round((learnedCount / totalWords) * 100) : 0;

  const handleCreateSet = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSetName.trim() || setCreating) return;

    setSetCreating(true);
    try {
      const res = await createVocabularySet(newSetName.trim());
      if (res) {
        setSetCreatedSuccess(true);
        setTimeout(() => {
          setSetCreatedSuccess(false);
          setShowNewSetModal(false);
          setNewSetName("");
        }, 1200);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSetCreating(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <TopBar points={points} />

      <div className="content-shell pb-12">
        {/* Back link */}
        <div className="mb-3">
          <Link
            href="/home"
            className="inline-flex items-center text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Title Header */}
        <div className="mb-5 text-center">
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">
            My Vocabulary
          </div>
          <h1 className="mt-1 text-3xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              My Dictionary
            </span>
          </h1>
          <p className="mt-2 text-xs text-zinc-400 leading-relaxed max-w-sm mx-auto">
            Build your own word list, then practice it with games.
          </p>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-80" />
        </div>

        {/* Word Count Hero */}
        <div className="fade-up relative mb-4 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/90 p-5 shadow-2xl backdrop-blur-xl">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-500/10 blur-2xl pointer-events-none" />
          <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl pointer-events-none" />

          <div className="relative z-10 flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 text-black shadow-lg shadow-purple-500/25">
              <BookMarked className="h-7 w-7" />
            </div>
            <div>
              <div className="text-3xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {loading ? "..." : totalWords}
                </span>
              </div>
              <div className="text-xs text-zinc-400 font-medium">
                words in your dictionary
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="fade-up fade-up-d1 mb-4 grid grid-cols-2 gap-3">
          <Link
            href="/vocabulary/add"
            className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 px-4 py-3.5 text-xs font-bold text-black shadow-md shadow-cyan-500/10 transition-transform active:scale-[0.98] hover:opacity-95"
          >
            <Plus className="h-4 w-4 stroke-[3]" />
            <span>Add word</span>
          </Link>

          <button
            onClick={() => setShowNewSetModal(true)}
            className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-zinc-900/90 px-4 py-3.5 text-xs font-bold text-white transition-colors hover:bg-zinc-800 active:scale-[0.98]"
          >
            <FolderPlus className="h-4 w-4 text-purple-400" />
            <span>New category</span>
          </button>
        </div>

        {/* Navigation Cards */}
        <div className="space-y-3 mb-4">
          {/* My Dictionary Card */}
          <Link href="/vocabulary/list" className="block">
            <Card className="fade-up fade-up-d2 group flex items-center gap-4 border-white/10 bg-zinc-900/90 p-4 transition-all hover:border-cyan-400/30 hover:bg-zinc-850">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 text-black shadow-md">
                <BookOpen className="h-6 w-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                  My Dictionary
                </div>
                <div className="text-xs text-zinc-400 mt-0.5 line-clamp-1">
                  Browse all your words, sorted by category.
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-zinc-500 group-hover:text-white transition-colors shrink-0" />
            </Card>
          </Link>

          {/* Learn Card */}
          <Link href="/vocabulary/learn" className="block">
            <Card className="fade-up fade-up-d3 group flex items-center gap-4 border-white/10 bg-zinc-900/90 p-4 transition-all hover:border-purple-400/30 hover:bg-zinc-850">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 text-black shadow-md">
                <Gamepad2 className="h-6 w-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                    Learn
                  </span>
                  <span className="rounded-full bg-purple-400/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-purple-300">
                    Practice
                  </span>
                </div>
                <div className="text-xs text-zinc-400 mt-0.5 line-clamp-1">
                  Practice your words: cards, multiple choice, unscramble.
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-zinc-500 group-hover:text-white transition-colors shrink-0" />
            </Card>
          </Link>
        </div>

        {/* Progress Card */}
        <Card className="fade-up fade-up-d4 mb-4 border-white/10 bg-zinc-900/90 p-4">
          <div className="flex items-center justify-between mb-1">
            <div className="text-sm font-bold text-white">Your progress</div>
            <span className="text-xs font-semibold text-emerald-400">
              {progressPercent}% learned
            </span>
          </div>
          <p className="text-xs text-zinc-400 mb-3">
            Keep practicing to move words from &quot;learning&quot; to &quot;learned&quot;.
          </p>

          {/* Progress Bar */}
          <div className="h-2.5 w-full overflow-hidden rounded-full bg-zinc-800 mb-4">
            <div
              className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
              style={{ width: `${Math.min(100, Math.max(0, progressPercent))}%` }}
            />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-xl bg-zinc-800/70 p-2.5 text-center">
              <div className="text-base font-extrabold text-emerald-400">{learnedCount}</div>
              <div className="text-[10px] text-zinc-400 mt-0.5 font-medium">Learned</div>
            </div>
            <div className="rounded-xl bg-zinc-800/70 p-2.5 text-center">
              <div className="text-base font-extrabold text-amber-400">{learningCount}</div>
              <div className="text-[10px] text-zinc-400 mt-0.5 font-medium">Learning</div>
            </div>
            <div className="rounded-xl bg-zinc-800/70 p-2.5 text-center">
              <div className="text-base font-extrabold text-white">{totalWords}</div>
              <div className="text-[10px] text-zinc-400 mt-0.5 font-medium">Total</div>
            </div>
          </div>
        </Card>

        {/* Tip Box */}
        <div className="fade-up fade-up-d5 flex items-start gap-3 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-950/30 to-purple-950/20 p-3.5">
          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-300">
            <Sparkles className="h-3 w-3" />
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed">
            <strong className="text-white">Tip:</strong> Add a few new words every day, and practice with games once a day — small and steady beats one big session.
          </p>
        </div>
      </div>

      {/* Modal: New Category / Set */}
      {showNewSetModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-3xl border border-white/15 bg-zinc-900 p-5 shadow-2xl animate-fade-up">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <FolderPlus className="h-5 w-5 text-purple-400" />
                <h3 className="text-base font-bold text-white">Create New Category</h3>
              </div>
              <button
                onClick={() => setShowNewSetModal(false)}
                className="rounded-full p-1 text-zinc-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {setCreatedSuccess ? (
              <div className="py-6 text-center text-sm font-semibold text-emerald-400">
                ✓ Category created successfully!
              </div>
            ) : (
              <form onSubmit={handleCreateSet} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 mb-1.5">
                    Category Name
                  </label>
                  <input
                    type="text"
                    value={newSetName}
                    onChange={(e) => setNewSetName(e.target.value)}
                    placeholder="e.g. Travel, Job Interview, Books"
                    required
                    autoFocus
                    className="w-full rounded-xl border border-white/10 bg-zinc-800 px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                </div>

                <div className="flex gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setShowNewSetModal(false)}
                    className="flex-1 rounded-xl border border-white/10 bg-zinc-800 py-2.5 text-xs font-semibold text-zinc-300 hover:bg-zinc-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={setCreating || !newSetName.trim()}
                    className="flex-1 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 py-2.5 text-xs font-bold text-black disabled:opacity-50"
                  >
                    {setCreating ? "Creating..." : "Create"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Modal: Learn (Practice Coming Soon) */}
      {showLearnModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-3xl border border-white/15 bg-zinc-900 p-6 text-center shadow-2xl animate-fade-up">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 text-black">
              <Gamepad2 className="h-7 w-7" />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">
              Practice Modes
            </h3>
            <p className="text-xs text-zinc-400 mb-5 leading-relaxed">
              Interactive practice modes for your custom vocabulary (Flashcards, Wordle, Matching Quiz) are coming soon in the next update!
            </p>
            <button
              onClick={() => setShowLearnModal(false)}
              className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 py-2.5 text-xs font-bold text-black"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
