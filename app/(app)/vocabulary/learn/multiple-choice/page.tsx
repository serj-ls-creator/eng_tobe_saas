"use client";

import { useCallback, useEffect, useMemo, useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { BookMarked, Check, Plus, Settings, Sliders, X } from "lucide-react";

import { TopBar } from "@/components/layout/TopBar";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CompletionModal } from "@/components/ui/CompletionModal";
import { StrictEnglishTTS } from "@/components/audio/StrictEnglishTTS";
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
  DEFAULT_UNSCRAMBLE_SETTINGS,
} from "@/lib/vocabulary";

type AnswerState = "idle" | "correct" | "wrong";

function shuffle<T,>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function VocabularyMultipleChoiceContent() {
  const points = usePoints();
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialSet = searchParams.get("set") || "all";
  const { playCorrect, playWrong } = useSoundEffects();

  const [words, setWords] = useState<UserWord[]>([]);
  const [sets, setSets] = useState<VocabularySet[]>([]);
  const [selectedSet, setSelectedSet] = useState(initialSet);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answerState, setAnswerState] = useState<AnswerState>("idle");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);
  const [options, setOptions] = useState<UserWord[]>([]);
  const [settings, setSettings] = useState<UnscrambleSettings>(DEFAULT_UNSCRAMBLE_SETTINGS);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        setSettings(getStoredUnscrambleSettings());
        const [loadedWords, loadedSets] = await Promise.all([
          fetchUserVocabulary(),
          fetchUserVocabularySets(),
        ]);
        if (!cancelled) {
          setWords(loadedWords);
          setSets(loadedSets);
        }
      } catch (error) {
        console.error("Failed to load multiple-choice data:", error);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, []);

  const practiceWords = useMemo(
    () => selectedSet === "all" ? words : words.filter((word) => word.set_name === selectedSet),
    [selectedSet, words],
  );
  const currentWord = practiceWords[currentIndex];
  const practiceWordIds = practiceWords.map((word) => word.id).join("|");

  useEffect(() => {
    if (!currentWord || practiceWords.length < 2) {
      setOptions([]);
      return;
    }
    const distractors = shuffle(practiceWords.filter((word) => word.id !== currentWord.id)).slice(0, 4);
    setOptions(shuffle([currentWord, ...distractors]));
    setAnswerState("idle");
    setSelectedId(null);
  }, [currentWord?.id, practiceWordIds]);

  const chooseAnswer = useCallback((option: UserWord) => {
    if (!currentWord || answerState !== "idle") return;
    const isCorrect = option.id === currentWord.id;
    setSelectedId(option.id);
    setAnswerState(isCorrect ? "correct" : "wrong");
    if (isCorrect) {
      playCorrect();
      setCorrectCount((count) => count + 1);
    } else {
      playWrong();
    }
    recordWordActivityProgress(currentWord.id, "multiple-choice", isCorrect).then((result) => {
      setWords((previous) => previous.map((word) => word.id === currentWord.id
        ? { ...word, status: result.status, passed_activities: result.passedActivities }
        : word));
    });
    window.setTimeout(() => {
      if (currentIndex < practiceWords.length - 1) setCurrentIndex((index) => index + 1);
      else setShowCompletion(true);
    }, 1500);
  }, [answerState, currentIndex, currentWord, playCorrect, playWrong, practiceWords.length]);

  const restart = () => {
    setCurrentIndex(0);
    setCorrectCount(0);
    setAnswerState("idle");
    setSelectedId(null);
    setShowCompletion(false);
  };

  const changeSet = (setName: string) => {
    setSelectedSet(setName);
    setCurrentIndex(0);
    setCorrectCount(0);
    setShowCompletion(false);
  };

  const toggleSetting = (key: keyof UnscrambleSettings) => {
    const updated = { ...settings, [key]: !settings[key] };
    setSettings(updated);
    saveStoredUnscrambleSettings(updated);
  };
  const hasAnyPrompt = settings.showDefinition || settings.showTranslation || settings.showSynonyms || settings.showNotes || settings.showIpa;

  return (
    <div className="min-h-screen bg-black text-white">
      <TopBar points={points} />
      <div className="content-shell pb-16">
        <div className="mb-4">
          <div className="mb-3 flex items-center justify-between">
            <Link href="/vocabulary/learn" className="inline-flex items-center text-xs text-zinc-500 hover:text-zinc-300">← Back to Learn</Link>
            <button type="button" onClick={() => setShowSettings(true)} className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-zinc-900 px-3 py-1.5 text-xs font-semibold text-zinc-300 hover:text-white">
              <Settings className="h-3.5 w-3.5 text-emerald-400" /> Settings
            </button>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div>
              <h1 className="text-2xl font-black tracking-tight">Multiple Choice</h1>
              <p className="text-xs text-zinc-400">{selectedSet === "all" ? "All Vocabulary Words" : `Category: ${selectedSet}`}</p>
            </div>
            <select value={selectedSet} onChange={(event) => changeSet(event.target.value)} className="max-w-[50%] rounded-xl border border-white/10 bg-zinc-900 px-3 py-1.5 text-xs font-bold text-emerald-300 focus:border-emerald-400 focus:outline-none">
              <option value="all">All Words ({words.length})</option>
              {sets.map((set) => <option key={set.id} value={set.name}>{set.name} ({words.filter((word) => word.set_name === set.name).length})</option>)}
            </select>
          </div>
        </div>

        {loading ? <div className="py-20 text-center text-sm text-zinc-500">Loading words...</div>
          : practiceWords.length === 0 ? (
            <Card className="mt-6 border-white/10 bg-zinc-900/50 p-8 text-center">
              <BookMarked className="mx-auto mb-3 h-10 w-10 text-zinc-500" />
              <h3 className="mb-1 text-base font-bold">No words to practice</h3>
              <p className="mb-5 text-xs text-zinc-400">{selectedSet === "all" ? "Your dictionary is empty. Add words first to play Multiple Choice!" : `No words found in "${selectedSet}". Add words to this category or choose All Words.`}</p>
              <Link href="/vocabulary/add" className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-4 py-2.5 text-xs font-bold text-black"><Plus className="h-4 w-4" /> Add Word</Link>
            </Card>
          ) : practiceWords.length === 1 ? (
            <Card className="mt-6 border-white/10 bg-zinc-900/50 p-8 text-center">
              <BookMarked className="mx-auto mb-3 h-10 w-10 text-zinc-500" />
              <h3 className="mb-1 text-base font-bold">Add words to this category</h3>
              <p className="mb-5 text-xs text-zinc-400">Multiple Choice needs at least two words in this category.</p>
              <Link href="/vocabulary/add" className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-4 py-2.5 text-xs font-bold text-black"><Plus className="h-4 w-4" /> Add Word</Link>
            </Card>
          ) : currentWord ? <>
            <div className="mb-4">
              <div className="mb-1.5 flex items-center justify-between"><span className="text-xs font-medium text-zinc-400">Progress</span><span className="text-xs font-bold text-emerald-400">{currentIndex + 1} / {practiceWords.length}</span></div>
              <Progress value={((currentIndex + 1) / practiceWords.length) * 100} className="h-2 bg-zinc-800" />
            </div>
            <Card className="relative mb-6 overflow-hidden border border-emerald-400/25 bg-gradient-to-br from-emerald-950/30 via-zinc-900/90 to-zinc-950 p-5 shadow-xl">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400">Clue &amp; Meaning</span>
                {settings.showAudio && <StrictEnglishTTS text={currentWord.word} />}
              </div>
              <div className="my-2 space-y-2 text-center">
                {!hasAnyPrompt && <p className="text-sm font-semibold text-white">{currentWord.definition || currentWord.translation || "Choose the matching word"}</p>}
                {settings.showDefinition && currentWord.definition && <p className="mx-auto max-w-sm text-sm font-medium leading-relaxed text-zinc-200">{currentWord.definition}</p>}
                {settings.showTranslation && currentWord.translation && <div className="text-base font-bold text-pink-300">{currentWord.translation}</div>}
                {settings.showSynonyms && currentWord.synonyms && <div className="text-xs text-zinc-400"><span className="font-medium text-zinc-500">Synonyms: </span>{currentWord.synonyms}</div>}
                {settings.showNotes && currentWord.notes && <div className="mx-auto max-w-xs text-xs italic text-amber-300">💡 {currentWord.notes}</div>}
                {settings.showIpa && currentWord.ipa && <div className="font-ipa text-xs tracking-wide text-cyan-300">{currentWord.ipa}</div>}
              </div>
            </Card>
            <div className="mx-auto max-w-md space-y-3">
              {options.map((option) => {
                let style = "border-white/10 bg-slate-800/60 hover:border-white/20 hover:bg-slate-700/60";
                if (answerState === "correct" && option.id === selectedId) style = "border-green-500/40 bg-green-500/20 text-green-400";
                if (answerState === "wrong" && option.id === selectedId) style = "border-red-500/40 bg-red-500/20 text-red-400";
                else if (answerState === "wrong" && option.id === currentWord.id) style = "border-green-500/40 bg-green-500/20 text-green-400";
                else if (answerState !== "idle" && answerState !== "correct") style = "border-white/5 bg-slate-800/30 opacity-50";
                return <button key={option.id} type="button" onClick={() => chooseAnswer(option)} disabled={answerState !== "idle"} className={`w-full rounded-xl border p-4 text-left transition-all duration-200 disabled:cursor-default ${style}`}><span className="text-sm font-medium">{option.word}</span></button>;
              })}
            </div>
          </> : null}
      </div>

      {showSettings && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm">
        <div className="w-full max-w-sm animate-fade-up rounded-3xl border border-white/15 bg-zinc-900 p-5 shadow-2xl">
          <div className="mb-3 flex items-center justify-between"><div className="flex items-center gap-2"><Sliders className="h-4 w-4 text-emerald-400" /><h3 className="text-base font-bold">Multiple Choice Clues</h3></div><button type="button" onClick={() => setShowSettings(false)} className="rounded-full p-1 text-zinc-400 hover:text-white"><X className="h-4 w-4" /></button></div>
          <p className="mb-4 text-xs text-zinc-400">Select which clues appear above the answer options.</p>
          <div className="mb-5 space-y-2.5">{[
            { key: "showDefinition", label: "English Definition", desc: "Explain meaning in English" },
            { key: "showTranslation", label: "Translation", desc: "Show translated word" },
            { key: "showSynonyms", label: "Synonyms", desc: "Show alternative words" },
            { key: "showNotes", label: "Personal Notes", desc: "Show your personal examples/hooks" },
            { key: "showIpa", label: "Pronunciation / IPA", desc: "Show phonetic transcription" },
            { key: "showAudio", label: "Audio Pronunciation 🔊", desc: "Show speaker button to listen" },
          ].map((item) => {
            const key = item.key as keyof UnscrambleSettings;
            const checked = settings[key];
            return <button key={item.key} type="button" onClick={() => toggleSetting(key)} className="flex w-full cursor-pointer items-start gap-3 rounded-xl border border-white/5 bg-zinc-800/60 p-2.5 text-left hover:bg-zinc-800"><span className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-md border ${checked ? "border-emerald-400 bg-emerald-400 text-black" : "border-white/20 bg-zinc-900 text-transparent"}`}><Check className="h-3 w-3 stroke-[3]" /></span><span className="min-w-0 flex-1"><span className={`block text-xs font-bold ${checked ? "text-white" : "text-zinc-400"}`}>{item.label}</span><span className="mt-0.5 block text-[10px] text-zinc-500">{item.desc}</span></span></button>;
          })}</div>
          <button type="button" onClick={() => setShowSettings(false)} className="w-full rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-500 py-2.5 text-xs font-black text-black">Done</button>
        </div>
      </div>}

      {showCompletion && <CompletionModal completed={correctCount} total={practiceWords.length} categoryId="vocabulary" subcategoryName={selectedSet === "all" ? "My Vocabulary" : selectedSet} progressPayload={{ section: "words", categoryId: "vocabulary", topicId: "multiple-choice", subcategoryId: selectedSet, activityId: "multiple-choice", activityName: "Multiple Choice", title: selectedSet === "all" ? "My Vocabulary" : selectedSet, href: `/vocabulary/learn/multiple-choice?set=${encodeURIComponent(selectedSet)}`, score: correctCount, total: practiceWords.length }} onNextSubcategory={restart} onBackToTopics={() => router.push("/vocabulary/learn")} />}
    </div>
  );
}

export default function VocabularyMultipleChoicePage() {
  return <Suspense fallback={<div className="min-h-screen bg-black p-8 text-center text-sm text-white">Loading Multiple Choice...</div>}><VocabularyMultipleChoiceContent /></Suspense>;
}
