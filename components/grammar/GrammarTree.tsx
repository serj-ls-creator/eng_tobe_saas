"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

import { Card } from "@/components/ui/card";
import { getIcon } from "@/lib/icons";
import { buildProgressKey, getProgressCardClass, type LearningProgressSnapshot } from "@/lib/learning-progress-shared";
import type { GrammarSection } from "@/constants/grammar";

export function GrammarTree({ sections, progress }: { sections: GrammarSection[]; progress: LearningProgressSnapshot }) {
  const [openSections, setOpenSections] = useState<string[]>([]);

  function toggleSection(sectionId: string) {
    setOpenSections((current) => current.includes(sectionId)
      ? current.filter((id) => id !== sectionId)
      : [...current, sectionId]);
  }

  return (
    <div className="space-y-3">
      {sections.map((section, index) => {
        const Icon = getIcon(section.icon);
        const hasTopics = Boolean(section.topics?.length);
        const isOpen = openSections.includes(section.id);
        const status = progress.containerStatuses[buildProgressKey({ section: "grammar", categoryId: section.id })] ?? "none";

        return (
          <div key={section.id} className={`fade-up fade-up-d${Math.min(index + 1, 5)}`}>
            <Card className={`overflow-hidden ${getProgressCardClass(status)}`}>
              {hasTopics ? (
                <button type="button" onClick={() => toggleSection(section.id)} aria-expanded={isOpen}
                  className="flex w-full items-center gap-3 p-4 text-left">
                  <div className="flex h-10 w-10 items-center justify-center rounded-control" style={{ backgroundColor: `${section.color}25` }}>
                    <Icon className="h-5 w-5" style={{ color: section.color }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="mb-1 truncate text-sm font-semibold">{section.name}</p>
                    <p className="truncate text-[11px] text-zinc-500">{section.description}</p>
                  </div>
                  {isOpen ? <ChevronDown className="h-5 w-5 text-zinc-500" /> : <ChevronRight className="h-5 w-5 text-zinc-500" />}
                </button>
              ) : (
                <Link href={section.href} className="flex items-center gap-3 p-4 transition-colors hover:bg-white/[0.03]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-control" style={{ backgroundColor: `${section.color}25` }}>
                    <Icon className="h-5 w-5" style={{ color: section.color }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="mb-1 truncate text-sm font-semibold">{section.name}</p>
                    <p className="truncate text-[11px] text-zinc-500">{section.description}</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-zinc-500" />
                </Link>
              )}

              {hasTopics && isOpen ? (
                <div className="border-t border-white/5 px-4 pb-4">
                  <div className="space-y-2 pt-4">
                    {section.topics!.map((topic) => (
                      <Link key={topic.id} href={`/grammar/${section.id}/${topic.id}`}
                        className={`grammar-topic-surface flex items-center justify-between gap-3 px-4 py-3 text-left ${getProgressCardClass(progress.containerStatuses[buildProgressKey({ section: "grammar", categoryId: section.id, topicId: topic.id })] ?? "none")}`}>
                        <span className="min-w-0">
                          <span className="block text-sm font-medium text-white">{topic.name}</span>
                          <span className="mt-1 block text-[11px] leading-5 text-zinc-500">{topic.rule}</span>
                        </span>
                        <ChevronRight className="h-4 w-4 shrink-0 text-zinc-500" />
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </Card>
          </div>
        );
      })}
    </div>
  );
}
