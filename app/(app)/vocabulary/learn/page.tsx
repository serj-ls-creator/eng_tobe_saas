"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { 
  Layers, 
  HelpCircle, 
  Shuffle, 
  Keyboard, 
  ChevronRight, 
  ChevronDown,
  BookMarked,
  Sparkles
} from "lucide-react";

import { TopBar } from "@/components/layout/TopBar";
import { Card } from "@/components/ui/card";
import { usePoints } from "@/lib/usePoints";
import { 
  fetchVisibleUserVocabulary,
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
        const [vocabulary, loadedSets] = await Promise.all([
          fetchVisibleUserVocabulary(),
          fetchUserVocabularySets(),
        ]);
        setWords(vocabulary.words);
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

  const unscrambleHref = selectedSet === "all"
    ? "/vocabulary/learn/unscramble"
    : `/vocabulary/learn/unscramble?set=${encodeURIComponent(selectedSet)}`;

  const multipleChoiceHref = selectedSet === "all"
    ? "/vocabulary/learn/multiple-choice"
    : `/vocabulary/learn/multiple-choice?set=${encodeURIComponent(selectedSet)}`;

  const typeHref = selectedSet === "all"
    ? "/vocabulary/learn/type-the-word"
    : `/vocabulary/learn/type-the-word?set=${encodeURIComponent(selectedSet)}`;

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
          <div className="relative w-fit max-w-full">
            <select
              value={selectedSet}
              onChange={(event) => setSelectedSet(event.target.value)}
              aria-label="Select category to practice"
              className={`max-w-full appearance-none rounded-full border py-1.5 pl-3.5 pr-9 text-xs font-bold shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400/50 ${
                selectedSet === "all"
                  ? "border-cyan-300/60 bg-zinc-900 text-cyan-100 shadow-cyan-500/10"
                  : "border-purple-400/60 bg-zinc-900 text-purple-200 shadow-purple-500/10"
              }`}
            >
              <option className="bg-zinc-900 text-white" value="all">All Words ({words.length})</option>
              {sets.map((set) => {
                const count = words.filter((word) => word.set_name === set.name).length;
                return <option className="bg-zinc-900 text-white" key={set.id} value={set.name}>{set.name} ({count})</option>;
              })}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-cyan-300" />
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

          {/* 2. Multiple Choice */}
          <Link href={multipleChoiceHref} className="block">
            <Card className="fade-up fade-up-d2 group relative overflow-hidden border-emerald-400/30 bg-gradient-to-br from-emerald-950/30 via-zinc-900/90 to-zinc-900 p-4 transition-all hover:border-emerald-400/60 hover:shadow-lg hover:shadow-emerald-500/10 active:scale-[0.99]">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 text-black shadow-md shadow-emerald-500/20">
                  <HelpCircle className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                      Multiple Choice
                    </span>
                    <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-emerald-400">
                      {activeWords.length} {activeWords.length === 1 ? "word" : "words"}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500 mt-1 line-clamp-1">
                    Test your recall by selecting the right definition or translation.
                  </p>
                </div>
                <ChevronRight className="h-5 w-5 text-emerald-400 group-hover:translate-x-0.5 transition-all shrink-0" />
              </div>
            </Card>
          </Link>

          {/* 3. Unscramble (Active) */}
          <Link href={unscrambleHref} className="block">
            <Card className="fade-up fade-up-d3 group relative overflow-hidden border-purple-400/30 bg-gradient-to-br from-purple-950/30 via-zinc-900/90 to-zinc-900 p-4 transition-all hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/10 active:scale-[0.99]">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 text-black shadow-md shadow-purple-500/20">
                  <Shuffle className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                      Unscramble
                    </span>
                    <span className="rounded-full bg-purple-400/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-purple-400">
                      {activeWords.length} {activeWords.length === 1 ? "word" : "words"}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1 line-clamp-1">
                    Rearrange letters to spell your vocabulary words correctly.
                  </p>
                </div>
                <ChevronRight className="h-5 w-5 text-purple-400 group-hover:translate-x-0.5 transition-all shrink-0" />
              </div>
            </Card>
          </Link>

          {/* 4. Type the Word (Active) */}
          <Link href={typeHref} className="block">
            <Card className="fade-up fade-up-d4 group relative overflow-hidden border-pink-400/30 bg-gradient-to-br from-pink-950/30 via-zinc-900/90 to-zinc-900 p-4 transition-all hover:border-pink-400/60 hover:shadow-lg hover:shadow-pink-500/10 active:scale-[0.99]">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-400 to-purple-500 text-black shadow-md shadow-pink-500/20">
                  <Keyboard className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-white group-hover:text-pink-300 transition-colors">
                      Type the Word
                    </span>
                    <span className="rounded-full bg-pink-400/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-pink-400">
                      {activeWords.length} {activeWords.length === 1 ? "word" : "words"}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1 line-clamp-1">
                    Type words from memory based on definitions or translations.
                  </p>
                </div>
                <ChevronRight className="h-5 w-5 text-pink-400 group-hover:translate-x-0.5 transition-all shrink-0" />
              </div>
            </Card>
          </Link>
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
