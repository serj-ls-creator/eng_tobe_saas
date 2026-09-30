"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { 
  Layers, 
  HelpCircle, 
  Shuffle, 
  Keyboard, 
  ChevronRight, 
  Lock, 
  BookMarked,
  Sparkles
} from "lucide-react";

import { TopBar } from "@/components/layout/TopBar";
import { Card } from "@/components/ui/card";
import { usePoints } from "@/lib/usePoints";
import { 
  fetchUserVocabulary, 
  fetchUserVocabularySets, 
  UserWord, 
  VocabularySet 
} from "@/lib/vocabulary";

export default function VocabularyLearnPage() {
  const points = usePoints();

  const [words, setWords] = useState<UserWord[]>([]);
  const [sets, setSets] = useState<VocabularySet[]>([]);
  const [selectedSet, setSelectedSet] = useState<string>("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [loadedWords, loadedSets] = await Promise.all([
          fetchUserVocabulary(),
          fetchUserVocabularySets(),
        ]);
        setWords(loadedWords);
        setSets(loadedSets);
      } catch (err) {
        console.error("Failed to load vocabulary:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // Filter words by selected set
  const activeWords = useMemo(() => {
    if (selectedSet === "all") return words;
    return words.filter((w) => w.set_name === selectedSet);
  }, [words, selectedSet]);

  const cardsHref = selectedSet === "all" 
    ? "/vocabulary/learn/cards" 
    : `/vocabulary/learn/cards?set=${encodeURIComponent(selectedSet)}`;

  return (
    <div className="min-h-screen bg-black text-white">
      <TopBar points={points} />

      <div className="content-shell pb-16">
        {/* Back link */}
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
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">
            Practice & Games
          </div>
          <h1 className="mt-1 text-2xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Learn Vocabulary
            </span>
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            Choose a category (set) and practice your words with interactive activities.
          </p>
          <div className="mt-3 h-0.5 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400" />
        </div>

        {/* Category (Set) Selector */}
        <div className="mb-5">
          <label className="block text-xs font-semibold text-zinc-400 mb-2">
            Select Category to Practice
          </label>
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setSelectedSet("all")}
              className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${
                selectedSet === "all"
                  ? "bg-gradient-to-r from-cyan-400 to-purple-500 text-black shadow-md shadow-cyan-500/10"
                  : "border border-white/10 bg-zinc-900 text-zinc-400 hover:text-white"
              }`}
            >
              All Words <span className="opacity-75 ml-1">({words.length})</span>
            </button>
            {sets.map((s) => {
              const count = words.filter((w) => w.set_name === s.name).length;
              return (
                <button
                  key={s.id}
                  onClick={() => setSelectedSet(s.name)}
                  className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${
                    selectedSet === s.name
                      ? "bg-purple-500 text-white shadow-md shadow-purple-500/20"
                      : "border border-white/10 bg-zinc-900 text-zinc-400 hover:text-white"
                  }`}
                >
                  {s.name} <span className="opacity-75 ml-1">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Activities List */}
        <div className="space-y-3">
          {/* 1. Cards (Active) */}
          <Link href={cardsHref} className="block">
            <Card className="fade-up fade-up-d1 group relative overflow-hidden border-cyan-400/30 bg-gradient-to-br from-cyan-950/30 via-zinc-900/90 to-zinc-900 p-4 transition-all hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/10 active:scale-[0.99]">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 text-black shadow-md shadow-cyan-500/20">
                  <Layers className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      Cards
                    </span>
                    <span className="rounded-full bg-cyan-400/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-cyan-400">
                      {activeWords.length} {activeWords.length === 1 ? "card" : "cards"}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1 line-clamp-1">
                    Flip through cards with customizable sides, audio, and definitions.
                  </p>
                </div>
                <ChevronRight className="h-5 w-5 text-cyan-400 group-hover:translate-x-0.5 transition-all shrink-0" />
              </div>
            </Card>
          </Link>

          {/* 2. Multiple Choice (Coming Soon) */}
          <div className="fade-up fade-up-d2">
            <Card className="relative overflow-hidden border-white/5 bg-zinc-900/50 p-4 opacity-70">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-zinc-800 text-zinc-500">
                  <HelpCircle className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-zinc-300">
                      Multiple Choice
                    </span>
                    <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-zinc-400">
                      Coming Soon
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500 mt-1 line-clamp-1">
                    Test your recall by selecting the right definition or translation.
                  </p>
                </div>
                <Lock className="h-4 w-4 text-zinc-600 shrink-0" />
              </div>
            </Card>
          </div>

          {/* 3. Unscramble (Coming Soon) */}
          <div className="fade-up fade-up-d3">
            <Card className="relative overflow-hidden border-white/5 bg-zinc-900/50 p-4 opacity-70">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-zinc-800 text-zinc-500">
                  <Shuffle className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-zinc-300">
                      Unscramble
                    </span>
                    <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-zinc-400">
                      Coming Soon
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500 mt-1 line-clamp-1">
                    Rearrange letters to spell your vocabulary words correctly.
                  </p>
                </div>
                <Lock className="h-4 w-4 text-zinc-600 shrink-0" />
              </div>
            </Card>
          </div>

          {/* 4. Type the Word (Coming Soon) */}
          <div className="fade-up fade-up-d4">
            <Card className="relative overflow-hidden border-white/5 bg-zinc-900/50 p-4 opacity-70">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-zinc-800 text-zinc-500">
                  <Keyboard className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-zinc-300">
                      Type the Word
                    </span>
                    <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-zinc-400">
                      Coming Soon
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500 mt-1 line-clamp-1">
                    Type words from memory based on definitions or translations.
                  </p>
                </div>
                <Lock className="h-4 w-4 text-zinc-600 shrink-0" />
              </div>
            </Card>
          </div>
        </div>

        {/* Empty state alert if set has 0 words */}
        {!loading && activeWords.length === 0 && (
          <div className="mt-6 text-center rounded-2xl border border-white/10 bg-zinc-900/70 p-6">
            <BookMarked className="mx-auto h-8 w-8 text-zinc-500 mb-2" />
            <div className="text-sm font-bold text-white mb-1">
              No words in this category yet
            </div>
            <p className="text-xs text-zinc-400 mb-4">
              Add words to this category to start practicing with flashcards.
            </p>
            <Link
              href="/vocabulary/add"
              className="inline-flex items-center gap-1.5 rounded-xl bg-cyan-400 px-4 py-2.5 text-xs font-bold text-black"
            >
              Add Word
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
