"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

import { PremiumBadge } from "@/components/ui/PremiumBadge";
import { Card } from "@/components/ui/card";
import { getIcon } from "@/lib/icons";
import type { WordCategory } from "@/types";

interface WordsTreeProps {
  categories: WordCategory[];
  isPremium: boolean;
}

export function WordsTree({ categories, isPremium }: WordsTreeProps) {
  const [openCategories, setOpenCategories] = useState<string[]>([]);
  const [openTopics, setOpenTopics] = useState<string[]>([]);

  function toggleCategory(categoryId: string) {
    setOpenCategories((current) =>
      current.includes(categoryId) ? current.filter((item) => item !== categoryId) : [...current, categoryId]
    );
  }

  function toggleTopic(topicKey: string) {
    setOpenTopics((current) =>
      current.includes(topicKey) ? current.filter((item) => item !== topicKey) : [...current, topicKey]
    );
  }

  return (
    <div className="space-y-3">
      {categories.map((category, index) => {
        const Icon = getIcon(category.icon);
        const locked = !category.isFree && !isPremium;
        const isOpen = openCategories.includes(category.id);

        return (
          <div key={category.id} className={`fade-up fade-up-d${Math.min(index + 1, 5)}`}>
            <Card className="overflow-hidden">
              <button
                type="button"
                onClick={() => toggleCategory(category.id)}
                className="flex w-full items-center gap-3 p-4 text-left"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: `${category.color}25` }}>
                  <Icon className="h-5 w-5" style={{ color: category.color }} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex items-center gap-2">
                    <p className="truncate text-sm font-semibold">{category.name}</p>
                    {locked ? <PremiumBadge /> : null}
                  </div>
                  <p className="truncate text-[11px] text-zinc-500">{category.description}</p>
                </div>
                {isOpen ? <ChevronDown className="h-5 w-5 text-zinc-500" /> : <ChevronRight className="h-5 w-5 text-zinc-500" />}
              </button>

              {isOpen ? (
                <div className="border-t border-white/5 px-4 pb-4">
                  {category.topics?.length ? (
                    <div className="space-y-3 pt-4">
                      {category.topics.map((topic) => {
                        const topicKey = `${category.id}-${topic.id}`;
                        const topicOpen = openTopics.includes(topicKey);
                        const hasActivities = Boolean(topic.activities?.length);

                        return (
                          <div key={topic.id} className="rounded-2xl border border-white/8 bg-white/[0.02]">
                            {hasActivities ? (
                              <button
                                type="button"
                                onClick={() => toggleTopic(topicKey)}
                                className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
                              >
                                <div>
                                  <p className="text-sm font-medium text-white">{topic.name}</p>
                                  <p className="text-[11px] text-zinc-500">{topic.description}</p>
                                </div>
                                {topicOpen ? (
                                  <ChevronDown className="h-4 w-4 text-zinc-500" />
                                ) : (
                                  <ChevronRight className="h-4 w-4 text-zinc-500" />
                                )}
                              </button>
                            ) : (
                              <Link
                                href={locked ? "/premium" : topic.href ?? category.href}
                                className="flex items-center justify-between gap-3 px-4 py-3 text-left transition-colors hover:bg-white/[0.04]"
                              >
                                <div>
                                  <p className="text-sm font-medium text-white">{topic.name}</p>
                                  <p className="text-[11px] text-zinc-500">{topic.description}</p>
                                </div>
                                <ChevronRight className="h-4 w-4 text-zinc-500" />
                              </Link>
                            )}

                            {topicOpen && hasActivities ? (
                              <div className="grid grid-cols-2 gap-2 px-3 pb-3">
                                {(topic.activities ?? []).map((activity) => (
                                  <Link
                                    key={activity.id}
                                    href={locked ? "/premium" : activity.href}
                                    className="group rounded-2xl border border-white/10 bg-white/[0.03] p-3 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.08]"
                                  >
                                    <div className="mb-2 text-sm font-semibold text-white">{activity.name}</div>
                                    <div className="text-[11px] leading-relaxed text-zinc-500 transition-colors duration-200 group-hover:text-zinc-300">
                                      {activity.description}
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            ) : null}
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="pt-4">
                      <Link
                        href={locked ? "/premium" : category.href}
                        className="block rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-4 text-sm text-zinc-400 transition-colors hover:bg-white/[0.05]"
                      >
                        Open {category.name}
                      </Link>
                    </div>
                  )}
                </div>
              ) : null}
            </Card>
          </div>
        );
      })}
    </div>
  );
}
