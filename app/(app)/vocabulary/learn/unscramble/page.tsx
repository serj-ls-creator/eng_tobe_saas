"use client";

import { useState, useEffect, useCallback, useMemo, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { 
  Settings, 
  RotateCcw, 
  Delete, 
  Check, 
  Plus, 
  BookMarked,
  X,
  Volume2,
  Sparkles,
  Shuffle,
  Trophy,
  Sliders
} from "lucide-react";

import { TopBar } from "@/components/layout/TopBar";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { StrictEnglishTTS } from "@/components/audio/StrictEnglishTTS";
import { CompletionModal } from "@/components/ui/CompletionModal";
import { useSoundEffects } from "@/hooks/useSoundEffects";
import { usePoints } from "@/lib/usePoints";
import { 
  fetchUserVocabulary, 
  fetchUserVocabularySets, 
  getStoredUnscrambleSettings, 
  saveStoredUnscrambleSettings, 
  recordWordActivityProgress,
  UserWord, 
  VocabularySet, 
  UnscrambleSettings, 
  DEFAULT_UNSCRAMBLE_SETTINGS 
} from "@/lib/vocabulary";

type AnswerState = "idle" | "correct" | "wrong";

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

interface LetterItem {
  id: string;
  char: string;
  originalIndex: number;
}

function VocabularyUnscrambleContent() {
  const points = usePoints();
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialSet = searchParams.get("set") || "all";

  const { playCorrect, playWrong } = useSoundEffects();

  const [words, setWords] = useState<UserWord[]>([]);
  const [sets, setSets] = useState<VocabularySet[]>([]);
  const [selectedSet, setSelectedSet] = useState<string>(initialSet);
  const [loading, setLoading] = useState(true);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answerState, setAnswerState] = useState<AnswerState>("idle");
  const [correctCount, setCorrectCount] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);

  // Letter scrambling state
  const [scrambledList, setScrambledList] = useState<LetterItem[]>([]);
  const [placedList, setPlacedList] = useState<(LetterItem | null)[]>([]);
  const [usedIds, setUsedIds] = useState<string[]>([]);

  // Settings
  const [settings, setSettings] = useState<UnscrambleSettings>(DEFAULT_UNSCRAMBLE_SETTINGS);
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        setSettings(getStoredUnscrambleSettings());
        const [loadedWords, loadedSets] = await Promise.all([
          fetchUserVocabulary(),
          fetchUserVocabularySets(),
        ]);
        setWords(loadedWords);
        setSets(loadedSets);
      } catch (err) {
        console.error("Failed to load unscramble data:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // Filter words by selected set
  const practiceWords = useMemo(() => {
    if (selectedSet === "all") return words;
    return words.filter((w) => w.set_name === selectedSet);
  }, [words, selectedSet]);

  const currentWord = practiceWords[currentIndex] as UserWord | undefined;

  // Initialize scrambled letters when currentWord changes
  useEffect(() => {
    if (!practiceWords.length) return;
    const wordObj = practiceWords[currentIndex];
    if (!wordObj) return;

    const cleanWord = wordObj.word.trim();
    const rawChars = cleanWord.split("");
    const letterItems: LetterItem[] = rawChars.map((char, index) => ({
      id: `char-${index}-${char}`,
      char,
      originalIndex: index,
    }));

    const shuffled = shuffleArray(letterItems);
    setScrambledList(shuffled);
    setPlacedList(Array(rawChars.length).fill(null));
    setUsedIds([]);
    setAnswerState("idle");
  }, [currentIndex, practiceWords]);

  // Click letter from available letters
  const handleLetterClick = useCallback(
    (item: LetterItem) => {
      if (answerState !== "idle") return;
      if (usedIds.includes(item.id)) return;

      const newUsedIds = [...usedIds, item.id];
      setUsedIds(newUsedIds);

      const newPlaced = [...placedList];
      const nextSlot = newPlaced.findIndex((slot) => slot === null);
      if (nextSlot === -1) return;
      newPlaced[nextSlot] = item;
      setPlacedList(newPlaced);

      // Check if all slots filled
      if (newPlaced.every((slot) => slot !== null)) {
        const targetWord = currentWord?.word.trim() || "";
        const assembled = newPlaced.map((s) => s?.char || "").join("");
        const isCorrect = assembled.toLowerCase() === targetWord.toLowerCase();

        setAnswerState(isCorrect ? "correct" : "wrong");

        if (isCorrect) {
          playCorrect();
          setCorrectCount((prev) => prev + 1);
          if (currentWord) {
            recordWordActivityProgress(currentWord.id, "unscramble", true).then((res) => {
              setWords((prev) =>
                prev.map((w) => (w.id === currentWord.id ? { ...w, status: res.status } : w))
              );
            });
          }
        } else {
          playWrong();
          if (currentWord) {
            recordWordActivityProgress(currentWord.id, "unscramble", false).then((res) => {
              setWords((prev) =>
                prev.map((w) => (w.id === currentWord.id ? { ...w, status: res.status } : w))
              );
            });
          }
        }

        setTimeout(() => {
          if (currentIndex < practiceWords.length - 1) {
            setCurrentIndex((prev) => prev + 1);
          } else {
            setShowCompletion(true);
          }
        }, 1800);
      }
    },
    [answerState, currentWord, currentIndex, placedList, playCorrect, playWrong, practiceWords.length, usedIds]
  );

  // Click on placed slot to remove letter
  const handleSlotClick = useCallback(
    (slotIndex: number) => {
      if (answerState !== "idle") return;
      const targetItem = placedList[slotIndex];
      if (!targetItem) return;

      const newPlaced = [...placedList];
      newPlaced[slotIndex] = null;

      // Shift remaining placed letters left
      const compacted: (LetterItem | null)[] = Array(placedList.length).fill(null);
      let pIdx = 0;
      for (const item of newPlaced) {
        if (item !== null) {
          compacted[pIdx] = item;
          pIdx++;
        }
      }

      setPlacedList(compacted);
      setUsedIds((prev) => prev.filter((id) => id !== targetItem.id));
    },
    [answerState, placedList]
  );

  // Backspace - remove last placed letter
  const handleBackspace = () => {
    if (answerState !== "idle") return;
    const lastPlacedIndex = placedList.map((s) => s !== null).lastIndexOf(true);
    if (lastPlacedIndex === -1) return;
    handleSlotClick(lastPlacedIndex);
  };

  // Reset current word placed letters
  const handleReset = () => {
    if (answerState !== "idle") return;
    setPlacedList(Array(placedList.length).fill(null));
    setUsedIds([]);
  };

  const handleRestartSession = () => {
    setCurrentIndex(0);
    setCorrectCount(0);
    setAnswerState("idle");
    setShowCompletion(false);
  };

  const toggleSetting = (key: keyof UnscrambleSettings) => {
    const updated: UnscrambleSettings = {
      ...settings,
      [key]: !settings[key],
    };
    setSettings(updated);
    saveStoredUnscrambleSettings(updated);
  };

  const hasAnyPrompt =
    settings.showDefinition ||
    settings.showTranslation ||
    settings.showSynonyms ||
    settings.showNotes ||
    settings.showIpa;

  return (
    <div className="min-h-screen bg-black text-white">
      <TopBar points={points} />

      <div className="content-shell pb-16">
        {/* Top Controls */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <Link
              href="/vocabulary/learn"
              className="inline-flex items-center text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              ← Back to Learn
            </Link>

            {/* Settings Button */}
            <button
              type="button"
              onClick={() => setShowSettingsModal(true)}
              className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-zinc-900 px-3 py-1.5 text-xs font-semibold text-zinc-300 hover:text-white transition-colors"
            >
              <Settings className="h-3.5 w-3.5 text-purple-400" />
              <span>Settings</span>
            </button>
          </div>

          <div className="flex items-center justify-between gap-3">
            <div>
              <h1 className="text-2xl font-black tracking-tight text-white flex items-center gap-2">
                <span>Unscramble</span>
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
                setCorrectCount(0);
              }}
              className="rounded-xl border border-white/10 bg-zinc-900 px-3 py-1.5 text-xs font-bold text-purple-300 focus:border-purple-400 focus:outline-none"
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
            Loading words...
          </div>
        ) : practiceWords.length === 0 ? (
          <Card className="border-white/10 bg-zinc-900/50 p-8 text-center mt-6">
            <BookMarked className="mx-auto h-10 w-10 text-zinc-500 mb-3" />
            <h3 className="text-base font-bold text-white mb-1">
              No words to practice
            </h3>
            <p className="text-xs text-zinc-400 mb-5">
              {selectedSet === "all"
                ? "Your dictionary is empty. Add words first to play Unscramble!"
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
            {/* Progress */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-xs text-zinc-400 font-medium">Progress</span>
                <span className="text-xs text-purple-400 font-bold">
                  {currentIndex + 1} / {practiceWords.length}
                </span>
              </div>
              <Progress
                value={((currentIndex + 1) / practiceWords.length) * 100}
                className="h-2 bg-zinc-800"
              />
            </div>

            {/* Prompt Card */}
            <Card className="mb-6 relative overflow-hidden border border-purple-400/25 bg-gradient-to-br from-purple-950/30 via-zinc-900/90 to-zinc-950 p-5 shadow-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-400">
                  Clue & Meaning
                </span>
                {settings.showAudio && currentWord.word && (
                  <div className="shrink-0">
                    <StrictEnglishTTS text={currentWord.word} />
                  </div>
                )}
              </div>

              <div className="space-y-2 text-center my-2">
                {/* Fallback if user disabled everything: show definition or translation */}
                {!hasAnyPrompt && (
                  <p className="text-sm font-semibold text-white">
                    {currentWord.definition || currentWord.translation || "Spell the word"}
                  </p>
                )}

                {/* Definition */}
                {settings.showDefinition && currentWord.definition && (
                  <p className="text-sm text-zinc-200 font-medium leading-relaxed max-w-sm mx-auto">
                    {currentWord.definition}
                  </p>
                )}

                {/* Translation */}
                {settings.showTranslation && currentWord.translation && (
                  <div className="text-base font-bold text-pink-300">
                    {currentWord.translation}
                  </div>
                )}

                {/* Synonyms */}
                {settings.showSynonyms && currentWord.synonyms && (
                  <div className="text-xs text-zinc-400">
                    <span className="text-zinc-500 font-medium">Synonyms: </span>
                    {currentWord.synonyms}
                  </div>
                )}

                {/* Notes */}
                {settings.showNotes && currentWord.notes && (
                  <div className="text-xs text-amber-300 italic max-w-xs mx-auto">
                    💡 {currentWord.notes}
                  </div>
                )}

                {/* IPA */}
                {settings.showIpa && currentWord.ipa && (
                  <div className="text-xs font-ipa tracking-wide text-cyan-300">
                    {currentWord.ipa}
                  </div>
                )}
              </div>

              <div className="text-center text-[10px] uppercase tracking-wider text-zinc-500 font-medium mt-3 pt-2 border-t border-white/5">
                Tap letters below in the correct order
              </div>
            </Card>

            {/* Answer Slots */}
            <div className="mb-5">
              <div className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2.5 text-center font-bold">
                Your Answer
              </div>
              <div className="flex justify-center gap-1.5 flex-wrap min-h-[50px] items-center">
                {placedList.map((item, index) => {
                  const isFilled = item !== null;
                  const targetWord = currentWord?.word.trim() || "";
                  const correctChar = targetWord[index];
                  const isCharMatch = item && correctChar && item.char.toLowerCase() === correctChar.toLowerCase();

                  let colorClasses = "border-white/10 bg-zinc-900/60 text-zinc-600";
                  if (answerState === "correct") {
                    colorClasses = "border-emerald-500/50 bg-emerald-500/20 text-emerald-300 shadow-md shadow-emerald-500/20";
                  } else if (answerState === "wrong") {
                    if (isCharMatch) {
                      colorClasses = "border-emerald-500/50 bg-emerald-500/20 text-emerald-400 shadow-sm";
                    } else {
                      colorClasses = "border-rose-500/50 bg-rose-500/20 text-rose-400 shadow-sm animate-pulse";
                    }
                  } else if (isFilled) {
                    colorClasses = "border-purple-400/40 bg-purple-500/20 text-white shadow-sm";
                  }

                  return (
                    <button
                      key={`slot-${index}`}
                      type="button"
                      onClick={() => handleSlotClick(index)}
                      className={`h-12 w-10 sm:w-11 rounded-xl border-2 flex items-center justify-center text-lg font-black transition-all duration-150 active:scale-95 ${colorClasses}`}
                    >
                      {item ? item.char : "·"}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Available Letters & Controls */}
            <div className="mb-6">
              <div className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2.5 text-center font-bold">
                Available Letters
              </div>
              <div className="flex justify-center gap-2 flex-wrap items-center max-w-sm mx-auto">
                {scrambledList.map((item) => {
                  const isUsed = usedIds.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      disabled={isUsed || answerState !== "idle"}
                      onClick={() => handleLetterClick(item)}
                      className={`h-12 w-10 sm:w-11 rounded-xl border-2 flex items-center justify-center text-lg font-black transition-all duration-150 ${
                        isUsed
                          ? "border-white/5 bg-zinc-900/30 text-zinc-700 opacity-30 cursor-default"
                          : "border-white/15 bg-zinc-800/90 text-white hover:border-purple-400 hover:bg-zinc-700 active:scale-95 shadow-md shadow-black/40"
                      }`}
                    >
                      {item.char}
                    </button>
                  );
                })}

                {/* Backspace Button */}
                {usedIds.length > 0 && answerState === "idle" && (
                  <button
                    type="button"
                    onClick={handleBackspace}
                    className="h-12 w-11 rounded-xl border-2 border-white/10 bg-zinc-800/80 hover:bg-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white transition-all active:scale-95"
                    title="Backspace (Remove last letter)"
                  >
                    ⌫
                  </button>
                )}

                {/* Reset Button */}
                {usedIds.length > 0 && answerState === "idle" && (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="h-12 w-11 rounded-xl border-2 border-white/10 bg-zinc-800/80 hover:bg-zinc-700 flex items-center justify-center text-zinc-400 hover:text-amber-400 transition-all active:scale-95"
                    title="Clear all"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </>
        ) : null}
      </div>

      {/* Settings Modal */}
      {showSettingsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-3xl border border-white/15 bg-zinc-900 p-5 shadow-2xl animate-fade-up">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Sliders className="h-4 w-4 text-purple-400" />
                <h3 className="text-base font-bold text-white">Unscramble Clues</h3>
              </div>
              <button
                onClick={() => setShowSettingsModal(false)}
                className="rounded-full p-1 text-zinc-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className="text-xs text-zinc-400 mb-4">
              Select which clue hints appear above the scrambled letters.
            </p>

            <div className="space-y-2.5 mb-5">
              {[
                { key: "showDefinition", label: "English Definition", desc: "Explain meaning in English" },
                { key: "showTranslation", label: "Translation", desc: "Show translated word" },
                { key: "showSynonyms", label: "Synonyms", desc: "Show alternative words" },
                { key: "showNotes", label: "Personal Notes", desc: "Show your personal examples/hooks" },
                { key: "showIpa", label: "Pronunciation / IPA", desc: "Show phonetic transcription" },
                { key: "showAudio", label: "Audio Pronunciation 🔊", desc: "Show speaker button to listen" },
              ].map((opt) => {
                const isChecked = settings[opt.key as keyof UnscrambleSettings];
                return (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => toggleSetting(opt.key as keyof UnscrambleSettings)}
                    className="w-full flex items-start gap-3 rounded-xl border border-white/5 bg-zinc-800/60 p-2.5 text-left transition-colors hover:bg-zinc-800 cursor-pointer"
                  >
                    <div
                      className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-md border transition-colors ${
                        isChecked
                          ? "bg-purple-400 border-purple-400 text-black shadow-sm"
                          : "border-white/20 bg-zinc-900 text-transparent"
                      }`}
                    >
                      <Check className="h-3 w-3 stroke-[3]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`text-xs font-bold ${isChecked ? "text-white" : "text-zinc-400"}`}>
                        {opt.label}
                      </div>
                      <div className="text-[10px] text-zinc-500 mt-0.5">
                        {opt.desc}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setShowSettingsModal(false)}
              className="w-full rounded-xl bg-gradient-to-r from-purple-400 to-pink-500 py-2.5 text-xs font-black text-black"
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* Completion Modal - standard points and streak update */}
      {showCompletion && (
        <CompletionModal
          completed={correctCount}
          total={practiceWords.length}
          categoryId="vocabulary"
          subcategoryName={selectedSet === "all" ? "My Vocabulary" : selectedSet}
          progressPayload={{
            section: "words",
            categoryId: "vocabulary",
            topicId: "unscramble",
            subcategoryId: selectedSet,
            activityId: "unscramble",
            activityName: "Unscramble",
            title: selectedSet === "all" ? "My Vocabulary" : selectedSet,
            href: `/vocabulary/learn/unscramble?set=${encodeURIComponent(selectedSet)}`,
            score: correctCount,
            total: practiceWords.length,
          }}
          onNextSubcategory={handleRestartSession}
          onBackToTopics={() => router.push("/vocabulary/learn")}
        />
      )}
    </div>
  );
}

export default function VocabularyUnscramblePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black text-white p-8 text-center text-sm">Loading Unscramble...</div>}>
      <VocabularyUnscrambleContent />
    </Suspense>
  );
}
