import Link from "next/link";

import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { Card } from "@/components/ui/card";
import { PremiumBadge } from "@/components/ui/PremiumBadge";
import { getRecallSnapshot, type LearningSection } from "@/lib/learning-progress";
import { isPremium } from "@/lib/isPremium";
import { isRecallItemPremiumLocked, type RecallItem } from "@/lib/learning-progress-shared";
import { CATS, IDIOM_CATS, SENT_CATS } from "@/constants/categories";

const SECTION_TITLES: Record<LearningSection, string> = {
  words: "Words",
  sentences: "Sentences",
  idioms: "Idioms"
};

function getDueLabel(dueAt: string): string {
  const now = new Date();
  const due = new Date(dueAt);
  const msPerDay = 86400000;
  const diffDays = Math.floor((due.getTime() - now.getTime()) / msPerDay);

  if (diffDays < 0) {
    return `Overdue ${Math.abs(diffDays)}d`;
  }

  if (diffDays === 0) {
    return "Due today";
  }

  return `Due in ${diffDays}d`;
}

function getRecallGroup(item: RecallItem): { key: string; label: string } {
  if (item.section === "words") {
    const category = CATS.find((entry) => entry.id === item.categoryId);
    const topic = category?.topics?.find((entry) => entry.id === item.topicId);
    const subcategory = topic?.subcategories?.find((entry) => entry.id === item.subcategoryId);
    const label = [topic?.name, subcategory?.name ?? item.title].filter(Boolean).join(" / ");

    return {
      key: `${item.section}:${item.categoryId}:${item.topicId ?? ""}:${item.subcategoryId ?? item.levelId ?? ""}`,
      label: label || item.title
    };
  }

  if (item.section === "sentences") {
    const category = SENT_CATS.find((entry) => entry.id === item.categoryId);
    const topic = category?.topics?.find((entry) => entry.id === item.topicId);
    const subcategory = topic?.subcategories?.find((entry) => entry.id === item.subcategoryId);

    if (item.categoryId === "a1-c2" && item.topicId === "phrases") {
      return {
        key: `${item.section}:${item.categoryId}:${item.topicId}:${item.subcategoryId ?? ""}`,
        label: `Phrases / ${item.title}`
      };
    }

    const label = [topic?.name, subcategory?.name ?? item.title].filter(Boolean).join(" / ");
    return {
      key: `${item.section}:${item.categoryId}:${item.topicId ?? ""}:${item.subcategoryId ?? ""}`,
      label: label || item.title
    };
  }

  if (item.section === "idioms") {
    const category = IDIOM_CATS.find((entry) => entry.id === item.categoryId);
    const levelLabel = item.levelId?.replace("level-", "Level ") ?? item.title;
    return {
      key: `${item.section}:${item.categoryId}:${item.levelId ?? ""}`,
      label: [category?.name, levelLabel].filter(Boolean).join(" / ")
    };
  }

  return { key: item.key, label: item.title };
}

function groupRecallItems(items: RecallItem[]): Array<{ key: string; label: string; items: RecallItem[] }> {
  const groups = new Map<string, { key: string; label: string; items: RecallItem[] }>();

  items.forEach((item) => {
    const group = getRecallGroup(item);
    const existing = groups.get(group.key);

    if (existing) {
      existing.items.push(item);
      return;
    }

    groups.set(group.key, {
      key: group.key,
      label: group.label,
      items: [item]
    });
  });

  return Array.from(groups.values())
    .map((group) => ({
      ...group,
      items: [...group.items].sort(
        (left, right) => new Date(left.dueAt).getTime() - new Date(right.dueAt).getTime()
      )
    }))
    .sort((left, right) => {
      const leftOldest = left.items[0] ? new Date(left.items[0].dueAt).getTime() : 0;
      const rightOldest = right.items[0] ? new Date(right.items[0].dueAt).getTime() : 0;
      return leftOldest - rightOldest;
    });
}

export default async function RecallPage() {
  const recall = await getRecallSnapshot();
  const premium = await isPremium();

  return (
    <>
      <TopBar title="Recall" />
      <div className="content-shell">
        <div className="mb-4">
          <Link
            href="/home"
            className="text-xs text-zinc-500 transition-colors hover:text-zinc-300"
          >
            {"<-"} Back to Home
          </Link>
        </div>

        <div className="mb-6 rounded-[28px] border border-cyan-400/20 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.22),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_35%),linear-gradient(180deg,_rgba(15,23,42,0.96),_rgba(2,6,23,0.96))] p-5">
          <div className="mb-2 text-[10px] uppercase tracking-[0.28em] text-cyan-300">Review</div>
          <h1 className="mb-2 text-3xl font-black text-white">Recall</h1>
          <p className="max-w-md text-sm leading-6 text-zinc-200">
            Review your completed activities and strengthen your memory with spaced repetition
          </p>
        </div>

        {!recall.isLoggedIn ? (
          <Card className="p-5">
            <h2 className="mb-2 text-lg font-semibold text-white">Recall is ready</h2>
            <p className="text-sm text-zinc-400">
              Sign in to save completed activities and automatically send them here for review.
            </p>
          </Card>
        ) : (
          <div className="space-y-5 pb-4">
            {(Object.keys(SECTION_TITLES) as LearningSection[]).map((section) => (
              <section key={section}>
                <details className="group" open={false}>
                  <summary className="mb-3 flex cursor-pointer list-none items-center justify-between rounded-2xl border border-zinc-600 bg-zinc-800/80 px-4 py-3">
                    <h2 className="text-lg font-semibold text-white">{SECTION_TITLES[section]}</h2>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-zinc-300">{recall.sections[section].length} due</span>
                      <span className="text-xs text-zinc-300 transition-transform group-open:rotate-180">⌄</span>
                    </div>
                  </summary>

                  {recall.sections[section].length === 0 ? (
                    <Card className="p-4">
                      <p className="text-sm text-zinc-500">Nothing to review here yet.</p>
                    </Card>
                  ) : (
                    <div className="space-y-3">
                      {groupRecallItems(recall.sections[section]).map((group) => (
                        <Card key={group.key} className="p-4">
                          <div className="mb-3 text-sm font-semibold text-white">{group.label}</div>
                          <div className="space-y-2">
                            {group.items.map((item) => (
                              <Link key={item.key} href={isRecallItemPremiumLocked(item, premium) ? "/premium" : item.href}>
                                <div className="rounded-xl border border-white/8 bg-white/[0.03] p-3 transition-colors hover:bg-white/[0.05]">
                                  <div className="mb-2 flex items-center justify-between gap-3">
                                    <div className="min-w-0">
                                      <div className="mb-1 flex items-center gap-2">
                                        <div className="truncate text-sm font-semibold text-white">{item.activityName}</div>
                                        {isRecallItemPremiumLocked(item, premium) ? <PremiumBadge /> : null}
                                      </div>
                                      <div className="flex items-center gap-2 text-[11px]">
                                        <span className="text-zinc-500">{item.scoreLabel}</span>
                                        <span className="text-zinc-600">•</span>
                                        <span className="text-zinc-400">{getDueLabel(item.dueAt)}</span>
                                      </div>
                                    </div>
                                    <div className="text-[11px] text-cyan-400">
                                      {isRecallItemPremiumLocked(item, premium) ? "Premium required" : "Review now"}
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </Card>
                      ))}
                    </div>
                  )}
                </details>
              </section>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
