"use client";

import { useState, useEffect, useCallback, useMemo, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { 
  Settings, 
  ChevronLeft, 
  ChevronRight, 
  RotateCw, 
  Check, 
  Plus, 
  BookMarked,
  X,
  Volume2,
  Sparkles,
  Trophy
} from "lucide-react";

import { TopBar } from "@/components/layout/TopBar";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { StrictEnglishTTS } from "@/components/audio/StrictEnglishTTS";
import { usePoints } from "@/lib/usePoints";
import { useAutoFlip } from "@/lib/useAutoFlip";
import { 
  fetchUserVocabulary, 
  fetchUserVocabularySets, 
  getStoredFlashcardSettings, 
  saveStoredFlashcardSettings, 
  updateUserVocabularyWord,
  recordWordActivityProgress,
  UserWord, 
  VocabularySet, 
  FlashcardSettings, 
  DEFAULT_FLASHCARD_SETTINGS 
} from "@/lib/vocabulary";

type CardFieldKey = "word" | "ipa" | "definition" | "translation" | "synonyms" | "notes";

const FIELD_LABELS: Record<CardFieldKey, string> = {
  word: "Word",
  ipa: "Pronunciation / IPA",
  definition: "English definition",
  translation: "Translation",
  synonyms: "Synonyms",
  notes: "My notes",
};

function VocabularyCardsContent() {
  const points = usePoints();
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialSet = searchParams.get("set") || "all";

  const [words, setWords] = useState<UserWord[]>([]);
  const [sets, setSets] = useState<VocabularySet[]>([]);
  const [selectedSet, setSelectedSet] = useState<string>(initialSet);
  const [loading, setLoading] = useState(true);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [autoFlip, setAutoFlip] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);

  // Flashcard front/back settings
  const [flashcardSettings, setFlashcardSettings] = useState<FlashcardSettings>(DEFAULT_FLASHCARD_SETTINGS);
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        setFlashcardSettings(getStoredFlashcardSettings());
        const [loadedWords, loadedSets] = await Promise.all([
          fetchUserVocabulary(),
          fetchUserVocabularySets(),
        ]);
        setWords(loadedWords);
        setSets(loadedSets);
      } catch (err) {
        console.error("Failed to load cards data:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // Filtered words for practice
  const practiceWords = useMemo(() => {
    if (selectedSet === "all") return words;
    return words.filter((w) => w.set_name === selectedSet);
  }, [words, selectedSet]);

  const currentWord = practiceWords[currentIndex] as UserWord | undefined;

  const handleFlip = useCallback(() => {
    setIsFlipped((v) => !v);
  }, []);

  useAutoFlip({
    enabled: autoFlip,
    isFlipped,
    cardIndex: currentIndex,
    delay: 2200,
    onFlip: handleFlip,
  });

  const handleNext = async () => {
    const word = practiceWords[currentIndex];

    // Record that card activity was passed/reviewed for this word
    if (word) {
      const res = await recordWordActivityProgress(word.id, "cards", true);
      setWords((prev) =>
        prev.map((w) => (w.id === word.id ? { ...w, status: res.status } : w))
      );
    }

    if (currentIndex < practiceWords.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setIsFlipped(false);
    } else {
      setShowCompletion(true);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setShowCompletion(false);
  };

  const toggleFieldSetting = (side: "front" | "back", field: CardFieldKey) => {
    const updated: FlashcardSettings = {
      ...flashcardSettings,
      [side]: {
        ...flashcardSettings[side],
        [field]: !flashcardSettings[side][field],
      },
    };
    setFlashcardSettings(updated);
    saveStoredFlashcardSettings(updated);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <TopBar points={points} />

      <div className="content-shell pb-16">
        {/* Header & Controls */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <Link
              href="/vocabulary/learn"
              className="inline-flex items-center text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              ← Back to Learn
            </Link>

            {/* Flashcard Settings Button */}
            <button
              type="button"
              onClick={() => setShowSettingsModal(true)}
              className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-zinc-900 px-3 py-1.5 text-xs font-semibold text-zinc-300 hover:text-white transition-colors"
            >
              <Settings className="h-3.5 w-3.5" />
              <span>Card Settings</span>
            </button>
          </div>

          <div className="flex items-center justify-between gap-3">
            <div>
              <h1 className="text-2xl font-black tracking-tight text-white">
                Flashcards
              </h1>
              <p className="text-xs text-zinc-400">
                {selectedSet === "all" ? "All Vocabulary Words" : `Category: ${selectedSet}`}
              </p>
            </div>

            {/* Category Dropdown */}
            <select
              value={selectedSet}
              onChange={(e) => {
                setSelectedSet(e.target.value);
                setCurrentIndex(0);
                setIsFlipped(false);
              }}
              className="rounded-xl border border-white/10 bg-zinc-900 px-3 py-1.5 text-xs font-bold text-cyan-300 focus:border-cyan-400 focus:outline-none"
            >
              <option value="all">All Words ({words.length})</option>
              {sets.map((s) => (
                <option key={s.id} value={s.name}>
                  {s.name} ({words.filter((w) => w.set_name === s.name).length})
                </option>
              ))}
            </select>
          </div>
        </div>

        {loading ? (
          <div className="py-20 text-center text-sm text-zinc-500">
            Loading flashcards...
          </div>
        ) : practiceWords.length === 0 ? (
          <Card className="border-white/10 bg-zinc-900/50 p-8 text-center mt-6">
            <BookMarked className="mx-auto h-10 w-10 text-zinc-500 mb-3" />
            <h3 className="text-base font-bold text-white mb-1">
              No words to practice
            </h3>
            <p className="text-xs text-zinc-400 mb-5">
              {selectedSet === "all"
                ? "Your dictionary is empty. Add words first to start flashcard practice!"
                : `No words found in "${selectedSet}". Add words to this category or choose All Words.`}
            </p>
            <Link
              href="/vocabulary/add"
              className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-4 py-2.5 text-xs font-bold text-black shadow-md"
            >
              <Plus className="h-4 w-4" />
              Add Word
            </Link>
          </Card>
        ) : currentWord ? (
          <>
            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-xs text-zinc-400 font-medium">Progress</span>
                <span className="text-xs text-cyan-400 font-bold">
                  {currentIndex + 1} / {practiceWords.length}
                </span>
              </div>
              <Progress
                value={((currentIndex + 1) / practiceWords.length) * 100}
                className="h-2 bg-zinc-800"
              />
            </div>

            {/* Auto Flip Toggle */}
            <div className="mb-4 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900/80 px-3 py-1 text-xs">
                <span className="text-zinc-400">Auto Flip:</span>
                <button
                  type="button"
                  onClick={() => setAutoFlip((v) => !v)}
                  className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold transition-colors ${
                    autoFlip
                      ? "bg-cyan-400 text-black"
                      : "bg-zinc-800 text-zinc-400 hover:text-white"
                  }`}
                >
                  {autoFlip ? "On" : "Off"}
                </button>
              </div>
            </div>

            {/* Flip Card */}
            <div className="mb-6 flex justify-center">
              <div
                onClick={handleFlip}
                className="cursor-pointer w-full max-w-[390px] select-none"
                style={{
                  height: "260px",
                  perspective: "1500px",
                }}
              >
                <div
                  className="relative w-full h-full"
                  style={{
                    transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* Front Side */}
                  <div
                    className="absolute inset-0 rounded-[28px] border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-zinc-900 to-zinc-950 p-6 flex flex-col justify-between shadow-xl"
                    style={{
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-400">
                        Front
                      </span>
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="shrink-0"
                      >
                        <StrictEnglishTTS text={currentWord.word} />
                      </div>
                    </div>

                    <div className="text-center my-auto space-y-2">
                      {flashcardSettings.front.word && (
                        <h2 className="text-2xl font-black text-white tracking-tight">
                          {currentWord.word}
                        </h2>
                      )}

                      {flashcardSettings.front.ipa && currentWord.ipa && (
                        <div className="text-sm font-ipa tracking-wide text-cyan-300">
                          {currentWord.ipa}
                        </div>
                      )}

                      {flashcardSettings.front.definition && currentWord.definition && (
                        <p className="text-xs text-zinc-300 line-clamp-3 leading-relaxed">
                          {currentWord.definition}
                        </p>
                      )}

                      {flashcardSettings.front.translation && currentWord.translation && (
                        <div className="text-xs font-semibold text-pink-300">
                          {currentWord.translation}
                        </div>
                      )}

                      {flashcardSettings.front.synonyms && currentWord.synonyms && (
                        <div className="text-[11px] text-zinc-400">
                          <span className="text-zinc-500">Synonyms: </span>
                          {currentWord.synonyms}
                        </div>
                      )}

                      {flashcardSettings.front.notes && currentWord.notes && (
                        <div className="text-[11px] text-amber-300 italic">
                          💡 {currentWord.notes}
                        </div>
                      )}
                    </div>

                    <div className="text-center text-[10px] uppercase tracking-wider text-zinc-500 font-medium">
                      Tap card to flip ↺
                    </div>
                  </div>

                  {/* Back Side */}
                  <div
                    className="absolute inset-0 rounded-[28px] border border-purple-400/30 bg-gradient-to-br from-slate-900 via-purple-950/40 to-zinc-950 p-6 flex flex-col justify-between shadow-xl"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-400">
                        Back
                      </span>
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="shrink-0"
                      >
                        <StrictEnglishTTS text={currentWord.word} />
                      </div>
                    </div>

                    <div className="text-center my-auto space-y-2">
                      {flashcardSettings.back.word && (
                        <h2 className="text-2xl font-black text-white tracking-tight">
                          {currentWord.word}
                        </h2>
                      )}

                      {flashcardSettings.back.ipa && currentWord.ipa && (
                        <div className="text-sm font-ipa tracking-wide text-purple-300">
                          {currentWord.ipa}
                        </div>
                      )}

                      {flashcardSettings.back.definition && currentWord.definition && (
                        <p className="text-xs text-zinc-200 line-clamp-3 leading-relaxed">
                          {currentWord.definition}
                        </p>
                      )}

                      {flashcardSettings.back.translation && currentWord.translation && (
                        <div className="text-sm font-bold text-pink-300">
                          {currentWord.translation}
                        </div>
                      )}

                      {flashcardSettings.back.synonyms && currentWord.synonyms && (
                        <div className="text-[11px] text-zinc-400">
                          <span className="text-zinc-500">Synonyms: </span>
                          {currentWord.synonyms}
                        </div>
                      )}

                      {flashcardSettings.back.notes && currentWord.notes && (
                        <div className="text-[11px] text-amber-300 italic">
                          💡 {currentWord.notes}
                        </div>
                      )}
                    </div>

                    <div className="text-center text-[10px] uppercase tracking-wider text-purple-400/70 font-medium">
                      Tap card to flip ↺
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-3 max-w-[390px] mx-auto">
              <button
                type="button"
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className="flex-1 rounded-2xl border border-white/10 bg-zinc-900 py-3.5 text-xs font-bold text-white transition-colors disabled:opacity-40 disabled:pointer-events-none hover:bg-zinc-800"
              >
                Previous
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="flex-1 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 py-3.5 text-xs font-black text-black shadow-lg shadow-cyan-500/20 transition-transform active:scale-95"
              >
                {currentIndex === practiceWords.length - 1 ? "Finish" : "Next"}
              </button>
            </div>
          </>
        ) : null}
      </div>

      {/* Settings Modal (vocab/settings.html style with Front & Back toggles) */}
      {showSettingsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl border border-white/15 bg-zinc-900 p-5 shadow-2xl animate-fade-up max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Settings className="h-4 w-4 text-cyan-400" />
                <h3 className="text-base font-bold text-white">Flashcard Display Settings</h3>
              </div>
              <button
                onClick={() => setShowSettingsModal(false)}
                className="rounded-full p-1 text-zinc-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className="text-xs text-zinc-400 mb-4">
              Choose what information is visible on the Front side and Back side of cards.
            </p>

            <div className="grid grid-cols-2 gap-3 divide-x divide-white/5 mb-5">
              {/* Front Side */}
              <div>
                <div className="mb-2 text-xs font-extrabold uppercase tracking-wider text-cyan-400">
                  Front Side
                </div>
                <div className="space-y-2">
                  {(Object.keys(FIELD_LABELS) as CardFieldKey[]).map((key) => {
                    const active = flashcardSettings.front[key];
                    return (
                      <button
                        key={`modal-front-${key}`}
                        type="button"
                        onClick={() => toggleFieldSetting("front", key)}
                        className="w-full flex items-center gap-2 text-left py-1 cursor-pointer"
                      >
                        <div
                          className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-md border transition-colors ${
                            active
                              ? "bg-cyan-400 border-cyan-400 text-black"
                              : "border-white/20 bg-zinc-800 text-transparent"
                          }`}
                        >
                          <Check className="h-3 w-3 stroke-[3]" />
                        </div>
                        <span
                          className={`text-xs ${
                            active ? "text-white font-medium" : "text-zinc-500"
                          }`}
                        >
                          {FIELD_LABELS[key]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Back Side */}
              <div className="pl-3">
                <div className="mb-2 text-xs font-extrabold uppercase tracking-wider text-purple-400">
                  Back Side
                </div>
                <div className="space-y-2">
                  {(Object.keys(FIELD_LABELS) as CardFieldKey[]).map((key) => {
                    const active = flashcardSettings.back[key];
                    return (
                      <button
                        key={`modal-back-${key}`}
                        type="button"
                        onClick={() => toggleFieldSetting("back", key)}
                        className="w-full flex items-center gap-2 text-left py-1 cursor-pointer"
                      >
                        <div
                          className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-md border transition-colors ${
                            active
                              ? "bg-purple-400 border-purple-400 text-black"
                              : "border-white/20 bg-zinc-800 text-transparent"
                          }`}
                        >
                          <Check className="h-3 w-3 stroke-[3]" />
                        </div>
                        <span
                          className={`text-xs ${
                            active ? "text-white font-medium" : "text-zinc-500"
                          }`}
                        >
                          {FIELD_LABELS[key]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowSettingsModal(false)}
              className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 py-2.5 text-xs font-extrabold text-black"
            >
              Done
            </button>
            <button
              type="button"
              onClick={() => {
                setFlashcardSettings(DEFAULT_FLASHCARD_SETTINGS);
                saveStoredFlashcardSettings(DEFAULT_FLASHCARD_SETTINGS);
              }}
              className="mt-2 w-full rounded-xl border border-white/10 py-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
            >
              Reset to defaults
            </button>
          </div>
        </div>
      )}

      {/* Completion Modal */}
      {showCompletion && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-4 backdrop-blur-md">
          <div className="w-full max-w-sm rounded-3xl border border-cyan-400/30 bg-zinc-900 p-6 text-center shadow-2xl animate-fade-up">
            <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 text-black shadow-lg shadow-cyan-500/20">
              <Trophy className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-black text-white mb-1">
              Well Done!
            </h3>
            <p className="text-xs text-zinc-400 mb-5 leading-relaxed">
              You reviewed all <strong className="text-white">{practiceWords.length} cards</strong> in this session.
            </p>
            <div className="space-y-2">
              <button
                type="button"
                onClick={handleRestart}
                className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 py-3 text-xs font-black text-black shadow-md transition-transform active:scale-95"
              >
                Practice Again
              </button>
              <Link
                href="/vocabulary/learn"
                className="block w-full rounded-xl border border-white/10 bg-zinc-800 py-2.5 text-xs font-bold text-zinc-300 hover:text-white"
              >
                Back to Learn
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function VocabularyCardsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black text-white p-8 text-center text-sm">Loading cards...</div>}>
      <VocabularyCardsContent />
    </Suspense>
  );
}
