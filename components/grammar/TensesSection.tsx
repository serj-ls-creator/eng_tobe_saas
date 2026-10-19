"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

import { PremiumBadge } from "@/components/ui/PremiumBadge";
import type { GrammarSection } from "@/constants/grammar";
import { getIcon } from "@/lib/icons";
import { buildProgressKey, getProgressCardClass, type LearningProgressSnapshot } from "@/lib/learning-progress-shared";

const tenseCategoryIcons: Record<string, { icon: string; color: string }> = {
  "tense-basics": { icon: "Layers", color: "#a855f7" },
  "present-tenses": { icon: "CloudSun", color: "#f59e0b" },
  "past-tenses": { icon: "Clock3", color: "#06b6d4" },
  "future-forms-category": { icon: "CalendarDays", color: "#22c55e" },
  "tense-comparisons": { icon: "ArrowLeftRight", color: "#8b5cf6" },
  "time-expressions": { icon: "Clock3", color: "#14b8a6" },
  "common-tense-mistakes": { icon: "ShieldAlert", color: "#f97316" },
};

export function TensesSection({ section, progress, isPremium }: { section: GrammarSection; progress: LearningProgressSnapshot; isPremium: boolean }) {
  const [openTopics, setOpenTopics] = useState<string[]>([]);
  const status = progress.containerStatuses[buildProgressKey({ section: "grammar", categoryId: section.id })] ?? "none";

  function toggleTopic(topicId: string) {
    setOpenTopics((current) => current.includes(topicId)
      ? current.filter((id) => id !== topicId)
      : [...current, topicId]);
  }

  function renderTopic(topic: NonNullable<GrammarSection["topics"]>[number], parentId = "", depth = 0): ReactNode {
    const key = parentId ? `${parentId}/${topic.id}` : topic.id;
    const isOpen = openTopics.includes(key);
    const categoryIcon = depth === 0 ? tenseCategoryIcons[topic.id] : undefined;
    const Icon = categoryIcon ? getIcon(categoryIcon.icon) : undefined;
    const topicStatus = progress.containerStatuses[buildProgressKey({ section: "grammar", categoryId: section.id, topicId: topic.id })] ?? "none";
    if (!topic.topics?.length) {
      return <Link key={key} href={isPremium ? `/grammar/${section.id}/${topic.id}` : "/premium"}
        className={`flex items-center justify-between gap-3 rounded-2xl border border-[#262b38] bg-[linear-gradient(135deg,_rgba(79,209,255,0.10),_rgba(244,114,182,0.10))] px-4 py-3 transition-colors hover:border-[#3c4355] ${getProgressCardClass(topicStatus)}`}>
        <span className="min-w-0">
          <span className="flex items-center gap-2 text-sm font-medium text-white">{topic.name}{!isPremium ? <PremiumBadge /> : null}</span>
          <span className="mt-1 block text-[11px] leading-5 text-zinc-500">{topic.rule}</span>
        </span>
        <ChevronRight className="h-4 w-4 shrink-0 text-zinc-500" />
      </Link>;
    }

    return <div key={key} className={`overflow-hidden rounded-2xl border border-[#262b38] bg-[linear-gradient(135deg,_rgba(79,209,255,0.10),_rgba(244,114,182,0.10))] ${getProgressCardClass(topicStatus)}`}>
      <button type="button" onClick={() => toggleTopic(key)} aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition-colors hover:bg-white/[0.03]">
        {Icon && categoryIcon ? <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: `${categoryIcon.color}25` }}>
          <Icon className="h-5 w-5" style={{ color: categoryIcon.color }} />
        </span> : null}
        <span className="min-w-0 flex-1">
          <span className="flex items-center gap-2 text-sm font-medium text-white">{topic.name}{!isPremium ? <PremiumBadge /> : null}</span>
          <span className="mt-1 block text-[11px] leading-5 text-zinc-500">{topic.rule}</span>
        </span>
        {isOpen ? <ChevronDown className="h-4 w-4 shrink-0 text-zinc-500" /> : <ChevronRight className="h-4 w-4 shrink-0 text-zinc-500" />}
      </button>
      {isOpen ? <div className="space-y-2 border-t border-[#262b38] bg-black/[0.08] p-3">
        {topic.topics.map((child) => renderTopic(child, key, depth + 1))}
      </div> : null}
    </div>;
  }

  return (
    <section className="mt-5" aria-labelledby="tenses-heading">
      <div className={`mb-6 rounded-[28px] border border-cyan-400/20 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.22),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_35%),linear-gradient(180deg,_rgba(15,23,42,0.96),_rgba(2,6,23,0.96))] p-5 ${getProgressCardClass(status)}`}>
        <div className="mb-2 text-[10px] uppercase tracking-[0.28em] text-cyan-300">Practice</div>
        <div className="mb-2 flex items-center gap-3">
          <h2 id="tenses-heading" className="text-3xl font-black text-white">Tenses</h2>
          {!isPremium ? <PremiumBadge /> : null}
        </div>
        <p className="max-w-md text-sm leading-6 text-zinc-200">{section.description}</p>
      </div>

      <div className="space-y-2">
        {section.topics?.map((topic) => renderTopic(topic))}
      </div>
    </section>
  );
}
