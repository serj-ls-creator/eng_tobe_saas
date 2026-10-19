"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { TopBar } from "@/components/layout/TopBar";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CompletionModal } from "@/components/ui/CompletionModal";
import { useSoundEffects } from "@/hooks/useSoundEffects";
import { usePoints } from "@/lib/usePoints";
import type { MistakeLevel } from "@/data/grammar/find_the_mistake";

type AnswerState = "idle" | "correct" | "wrong";

export function GrammarFindMistakeGame({
  categoryId,
  topicId,
  categoryName,
  topicName,
  level,
  basePath,
}: {
  categoryId: string;
  topicId: string;
  categoryName: string;
  topicName: string;
  level: MistakeLevel;
  basePath: string;
}) {
  const router = useRouter();
  const points = usePoints();
  const { playCorrect, playWrong } = useSoundEffects();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answerState, setAnswerState] = useState<AnswerState>("idle");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);
  const answerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentIndex(0);
    setCorrectCount(0);
    setShowCompletion(false);
    setAnswerState("idle");
    setSelectedIndex(null);
  }, [level.level]);

  useEffect(() => {
    if (answerState === "idle") return;
    window.requestAnimationFrame(() => {
      answerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }, [answerState, currentIndex]);

  const currentRound = level.items[currentIndex];

  const advance = useCallback(() => {
    if (currentIndex < level.items.length - 1) {
      setCurrentIndex((index) => index + 1);
      setAnswerState("idle");
      setSelectedIndex(null);
    } else {
      setShowCompletion(true);
    }
  }, [currentIndex, level.items.length]);

  const selectOption = (index: number) => {
    if (answerState !== "idle" || !currentRound) return;
    const option = currentRound.options[index];
    const foundMistake = option.incorrect;
    setSelectedIndex(index);
    setAnswerState(foundMistake ? "correct" : "wrong");
    if (foundMistake) {
      setCorrectCount((count) => count + 1);
      playCorrect();
    } else {
      playWrong();
    }
  };

  if (!currentRound) return null;
  const targetIndex = currentRound.options.findIndex((option) => option.incorrect);
  const progress = ((currentIndex + 1) / level.items.length) * 100;
  const handleBackToLevels = () => router.push(basePath);
  const handleNextLevel = () => router.push(`${basePath}/level-${level.level + 1}`);

  function optionStyle(index: number) {
    if (answerState === "idle") return "border-white/10 bg-slate-800/60 text-white hover:border-cyan-400/50 hover:bg-slate-700/70";
    if (index === targetIndex) return "border-emerald-400/40 bg-emerald-500/15 text-emerald-200";
    if (index === selectedIndex && answerState === "wrong") return "border-rose-400/40 bg-rose-500/15 text-rose-200";
    return "border-white/5 bg-white/[0.02] text-zinc-500 opacity-50";
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <TopBar points={points} />
      <div className="content-shell pb-12 pt-5">
        <div className="mb-4 flex items-center justify-between gap-3">
          <Link href={basePath} className="text-xs text-zinc-500 transition-colors hover:text-zinc-300">&larr; Back to Levels</Link>
          <span className="text-right text-xs font-medium text-zinc-400">Level {level.level} &mdash; {level.title}</span>
        </div>

        <div className="mb-6">
          <div className="mb-2 flex items-center justify-between text-xs text-zinc-400">
            <span>Round {currentIndex + 1} of {level.items.length}</span><span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2 bg-white/10" />
        </div>

        <div className="mb-4">
          <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-cyan-400">{categoryName} &middot; {topicName}</div>
          <h1 className="mt-1 text-2xl font-black text-white">Find the Mistake</h1>
          <p className="mt-2 text-sm text-zinc-400">One of these five sentences has a grammar mistake. Tap it.</p>
        </div>

        <div className="space-y-3">
          {currentRound.options.map((option, index) => (
            <button key={`${currentRound.id}-${index}`} type="button" onClick={() => selectOption(index)} disabled={answerState !== "idle"}
              className={`w-full rounded-2xl border p-4 text-left text-sm leading-6 transition-all ${optionStyle(index)}`}>
              <span className="mr-3 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/5 text-[11px] font-bold text-zinc-400">{String.fromCharCode(65 + index)}</span>
              {option.text}
            </button>
          ))}
        </div>

        {answerState !== "idle" ? (
          <div ref={answerRef} className="scroll-mt-24">
            <Card className={`mt-4 p-4 ${answerState === "correct" ? "border-emerald-500/30 bg-emerald-500/10" : "border-rose-500/30 bg-rose-500/10"}`}>
              <div className={`mb-1 text-xs font-bold uppercase tracking-wider ${answerState === "correct" ? "text-emerald-300" : "text-rose-300"}`}>
                {answerState === "correct" ? "Well done!" : "Not quite"}
              </div>
              <p className="text-sm text-zinc-200">{currentRound.options[targetIndex]?.correction ?? currentRound.options[targetIndex]?.text}</p>
              {currentRound.options[targetIndex]?.explanation ? <p className="mt-1 text-xs leading-5 text-zinc-400">{currentRound.options[targetIndex].explanation}</p> : null}
              <button onClick={advance} className="mt-3 w-full rounded-xl bg-cyan-400 px-4 py-3 text-sm font-bold text-black transition-colors hover:bg-cyan-300">Continue &rarr;</button>
            </Card>
          </div>
        ) : null}
      </div>

      {showCompletion ? (
        <CompletionModal
          completed={correctCount}
          total={level.items.length}
          categoryId={categoryId}
          subcategoryName={`Level ${level.level} — ${level.title}`}
          words={level.items.map((item) => item.options.find((option) => option.incorrect)?.text ?? "")}
          onNextSubcategory={level.level < 4 ? handleNextLevel : undefined}
          onBackToTopics={handleBackToLevels}
        />
      ) : null}
    </div>
  );
}
