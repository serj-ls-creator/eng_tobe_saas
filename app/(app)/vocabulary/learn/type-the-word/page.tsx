"use client";

import { useState, useEffect, useCallback, useMemo, useRef, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { 
  Settings, 
  RotateCcw, 
  Check, 
  Plus, 
  BookMarked,
  X,
  Sliders,
  Keyboard as KeyboardIcon
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
  getStoredTypeWordSettings, 
  saveStoredTypeWordSettings, 
  recordWordActivityProgress,
  UserWord, 
  VocabularySet, 
  TypeWordSettings, 
  DEFAULT_TYPE_WORD_SETTINGS 
} from "@/lib/vocabulary";

type AnswerState = "idle" | "correct" | "wrong";

const KEYBOARD_ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "⌫"],
];

function VocabularyTypeWordContent() {
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
  const [typedValue, setTypedValue] = useState("");
  const [answerState, setAnswerState] = useState<AnswerState>("idle");
  const [correctCount, setCorrectCount] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);

  // Settings
  const [settings, setSettings] = useState<TypeWordSettings>(DEFAULT_TYPE_WORD_SETTINGS);
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    async function loadData() {
      try {
        setSettings(getStoredTypeWordSettings());
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

  // Filter words by selected set
  const practiceWords = useMemo(() => {
    if (selectedSet === "all") return words;
    return words.filter((w) => w.set_name === selectedSet);
  }, [words, selectedSet]);

  const currentWord = practiceWords[currentIndex] as UserWord | undefined;

  // Reset typed input and focus when word changes
  useEffect(() => {
    setTypedValue("");
    setAnswerState("idle");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentIndex, practiceWords]);

  // Handle submission
  const handleSubmit = useCallback(() => {
    if (answerState !== "idle") return;
    if (!typedValue.trim() || !currentWord) return;

    const targetWord = currentWord.word.trim();
    const isMatch = typedValue.trim().toLowerCase() === targetWord.toLowerCase();

    setAnswerState(isMatch ? "correct" : "wrong");

    if (isMatch) {
      playCorrect();
      setCorrectCount((prev) => prev + 1);
      recordWordActivityProgress(currentWord.id, "type-the-word", true).then((res) => {
        setWords((prev) =>
          prev.map((w) => (w.id === currentWord.id ? { ...w, status: res.status } : w))
        );
      });
    } else {
      playWrong();
      recordWordActivityProgress(currentWord.id, "type-the-word", false).then((res) => {
        setWords((prev) =>
          prev.map((w) => (w.id === currentWord.id ? { ...w, status: res.status } : w))
        );
      });
    }

    setTimeout(() => {
      if (currentIndex < practiceWords.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        setShowCompletion(true);
      }
    }, 1800);
  }, [answerState, currentWord, currentIndex, playCorrect, playWrong, practiceWords.length, typedValue]);

  // Handle Virtual / Physical Key presses
  const handleKey = useCallback(
    (key: string) => {
      if (answerState !== "idle") return;

      if (key === "ENTER") {
        handleSubmit();
        return;
      }

      if (key === "⌫" || key === "BACKSPACE") {
        setTypedValue((prev) => prev.slice(0, -1));
        return;
      }

      if (/^[a-zA-Z\s'-]$/.test(key)) {
        setTypedValue((prev) => prev + key);
      }
    },
    [answerState, handleSubmit]
  );

  // Physical keyboard listener
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (showSettingsModal || showCompletion) return;
      if (e.key === "Enter") {
        e.preventDefault();
        handleKey("ENTER");
      } else if (e.key === "Backspace") {
        handleKey("⌫");
      } else if (/^[a-zA-Z\s'-]$/.test(e.key)) {
        handleKey(e.key);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handleKey, showSettingsModal, showCompletion]);

  const handleRestartSession = () => {
    setCurrentIndex(0);
    setCorrectCount(0);
    setTypedValue("");
    setAnswerState("idle");
    setShowCompletion(false);
  };

  const toggleSetting = (key: keyof TypeWordSettings) => {
    const updated: TypeWordSettings = {
      ...settings,
      [key]: !settings[key],
    };
    setSettings(updated);
    saveStoredTypeWordSettings(updated);
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
              <Settings className="h-3.5 w-3.5 text-pink-400" />
              <span>Settings</span>
            </button>
          </div>

          <div className="flex items-center justify-between gap-3">
            <div>
              <h1 className="text-2xl font-black tracking-tight text-white flex items-center gap-2">
                <span>Type the Word</span>
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
                setTypedValue("");
              }}
              className="rounded-xl border border-white/10 bg-zinc-900 px-3 py-1.5 text-xs font-bold text-pink-300 focus:border-pink-400 focus:outline-none"
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
                ? "Your dictionary is empty. Add words first to play Type the Word!"
                : `No words found in "${selectedSet}". Add words to this category or choose All Words.`}
            </p>
            <Link
              href="/vocabulary/add"
              className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-pink-400 to-purple-500 px-4 py-2.5 text-xs font-bold text-black shadow-md"
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
                <span className="text-xs text-pink-400 font-bold">
                  {currentIndex + 1} / {practiceWords.length}
                </span>
              </div>
              <Progress
                value={((currentIndex + 1) / practiceWords.length) * 100}
                className="h-2 bg-zinc-800"
              />
            </div>

            {/* Clue Prompt Card */}
            <Card className="mb-5 relative overflow-hidden border border-pink-400/25 bg-gradient-to-br from-pink-950/30 via-zinc-900/90 to-zinc-950 p-5 shadow-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-pink-400">
                  Clue & Meaning
                </span>
                {settings.showAudio && currentWord.word && (
                  <div className="shrink-0">
                    <StrictEnglishTTS text={currentWord.word} />
                  </div>
                )}
              </div>

              <div className="space-y-2 text-center my-2">
                {/* Fallback if user disabled everything */}
                {!hasAnyPrompt && (
                  <p className="text-sm font-semibold text-white">
                    {currentWord.definition || currentWord.translation || "Type the word"}
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
                  <div className="text-base font-bold text-cyan-300">
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
                  <div className="text-xs font-ipa tracking-wide text-purple-300">
                    {currentWord.ipa}
                  </div>
                )}
              </div>

              <div className="text-center text-[10px] uppercase tracking-wider text-zinc-500 font-medium mt-3 pt-2 border-t border-white/5">
                Type the correct English word below
              </div>
            </Card>

            {/* Typing Input Box */}
            <div className="mb-5">
              <div className="relative max-w-sm mx-auto">
                <div
                  className={`flex h-14 w-full items-center justify-center rounded-2xl border-2 px-4 transition-all duration-200 ${
                    answerState === "correct"
                      ? "border-emerald-500 bg-emerald-500/20 text-emerald-300 shadow-lg shadow-emerald-500/25 ring-2 ring-emerald-500/40"
                      : answerState === "wrong"
                      ? "border-rose-500 bg-rose-500/20 text-rose-300 shadow-lg shadow-rose-500/25 ring-2 ring-rose-500/40 animate-pulse"
                      : "border-white/15 bg-zinc-900/90 text-white focus-within:border-pink-400/80 focus-within:shadow-md focus-within:shadow-pink-500/10"
                  }`}
                >
                  <span className="text-xl sm:text-2xl font-black uppercase tracking-wider select-none text-center">
                    {typedValue ? typedValue : (
                      <span className="text-zinc-600 text-sm font-normal normal-case tracking-normal">
                        Type here or tap keyboard...
                      </span>
                    )}
                  </span>
                </div>

                {/* Target word reveal on wrong answer */}
                {answerState === "wrong" && (
                  <div className="mt-2 text-center text-xs font-bold text-rose-400">
                    Correct word: <span className="text-white uppercase font-black">{currentWord.word}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Virtual On-Screen Keyboard */}
            <div className="mb-4">
              <div className="flex flex-col gap-1.5 items-center w-full max-w-md mx-auto select-none">
                {KEYBOARD_ROWS.map((row, ri) => (
                  <div key={ri} className="flex gap-1 sm:gap-1.5 justify-center w-full">
                    {row.map((key) => {
                      const isEnter = key === "ENTER";
                      const isBack = key === "⌫";

                      let keyClasses = "h-11 sm:h-12 rounded-xl font-black text-sm sm:text-base flex items-center justify-center transition-all active:scale-95 shadow-md ";

                      if (isEnter) {
                        keyClasses += "flex-[1.5] max-w-[70px] sm:max-w-[80px] bg-emerald-500 text-black hover:bg-emerald-400 font-bold text-xs uppercase tracking-wider";
                      } else if (isBack) {
                        keyClasses += "flex-[1.2] max-w-[55px] sm:max-w-[65px] bg-zinc-800 border border-white/10 text-zinc-300 hover:bg-zinc-700 text-base";
                      } else {
                        keyClasses += "flex-1 max-w-[34px] sm:max-w-[42px] bg-zinc-800/90 border border-white/15 text-white hover:border-pink-400 hover:bg-zinc-700";
                      }

                      return (
                        <button
                          key={key}
                          type="button"
                          disabled={answerState !== "idle"}
                          onClick={() => handleKey(key)}
                          className={keyClasses}
                        >
                          {key}
                        </button>
                      );
                    })}
                  </div>
                ))}
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
                <Sliders className="h-4 w-4 text-pink-400" />
                <h3 className="text-base font-bold text-white">Clue Settings</h3>
              </div>
              <button
                onClick={() => setShowSettingsModal(false)}
                className="rounded-full p-1 text-zinc-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className="text-xs text-zinc-400 mb-4">
              Select which clue hints appear above the input box.
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
                const isChecked = settings[opt.key as keyof TypeWordSettings];
                return (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => toggleSetting(opt.key as keyof TypeWordSettings)}
                    className="w-full flex items-start gap-3 rounded-xl border border-white/5 bg-zinc-800/60 p-2.5 text-left transition-colors hover:bg-zinc-800 cursor-pointer"
                  >
                    <div
                      className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-md border transition-colors ${
                        isChecked
                          ? "bg-pink-400 border-pink-400 text-black shadow-sm"
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
              className="w-full rounded-xl bg-gradient-to-r from-pink-400 to-purple-500 py-2.5 text-xs font-black text-black"
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
            topicId: "type-the-word",
            subcategoryId: selectedSet,
            activityId: "type-the-word",
            activityName: "Type the Word",
            title: selectedSet === "all" ? "My Vocabulary" : selectedSet,
            href: `/vocabulary/learn/type-the-word?set=${encodeURIComponent(selectedSet)}`,
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

export default function VocabularyTypeWordPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black text-white p-8 text-center text-sm">Loading Type the Word...</div>}>
      <VocabularyTypeWordContent />
    </Suspense>
  );
}
