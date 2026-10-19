import Link from "next/link";

import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { Card } from "@/components/ui/card";
import { RecallTree, type RecallTreeNode } from "@/components/recall/RecallTree";
import { getRecallSnapshot, type RecallSection } from "@/lib/learning-progress";
import { isPremium } from "@/lib/isPremium";
import type { RecallItem } from "@/lib/learning-progress-shared";
import { CATS, IDIOM_CATS, ALL_SENTENCE_CATS, GRAMMAR_CATS } from "@/constants/categories";
import { GRAMMAR_SECTIONS, type GrammarTopic } from "@/constants/grammar";

function findGrammarTopic(topics: GrammarTopic[] | undefined, topicId: string | null): GrammarTopic | undefined {
  if (!topicId || !topics) return undefined;
  for (const topic of topics) {
    if (topic.id === topicId) return topic;
    const nested = findGrammarTopic(topic.topics, topicId);
    if (nested) return nested;
  }
  return undefined;
}

const SECTION_TITLES: Record<RecallSection, string> = {
  words: "Words",
  "phrasal-verbs": "Phrasal verbs",
  sentences: "Sentences",
  idioms: "Idioms",
  grammar: "Grammar"
};

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
    const category = ALL_SENTENCE_CATS.find((entry) => entry.id === item.categoryId);
    const topic = category?.topics?.find((entry) => entry.id === item.topicId);
    const subcategory = topic?.subcategories?.find((entry) => entry.id === item.subcategoryId);

    if (item.categoryId === "phrasal-verbs") {
      const label = ["Phrasal verbs", topic?.name, subcategory?.name ?? item.title].filter(Boolean).join(" / ");
      return {
        key: `${item.section}:${item.categoryId}:${item.topicId ?? ""}:${item.subcategoryId ?? ""}`,
        label: label || item.title
      };
    }

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

  if (item.section === "grammar") {
    const grammarSection = GRAMMAR_SECTIONS.find((entry) => entry.id === item.categoryId);
    const category = grammarSection ?? GRAMMAR_CATS.find((entry) => entry.id === item.categoryId);
    const topic = findGrammarTopic(grammarSection?.topics, item.topicId);
    const levelLabel = item.levelId ? item.levelId.replace("level-", "Level ") : null;
    const label = [category?.name ?? "Grammar", topic?.name ?? (item.topicId === "rule" ? "Rule" : null), levelLabel].filter(Boolean).join(" / ");
    return {
      key: `${item.section}:${item.categoryId}:${item.topicId ?? ""}:${item.levelId ?? ""}`,
      label: label || item.title
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

function buildRecallTree(section: RecallSection, items: RecallItem[]): RecallTreeNode[] {
  if (section === "words") {
    const buildCategory = (categoryId: string, label: string): RecallTreeNode | null => {
      const categoryItems = items.filter(item => item.categoryId === categoryId);
      const category = CATS.find(entry => entry.id === categoryId);
      const children = (category?.topics ?? []).map(topic => {
        const topicItems = categoryItems.filter(item => item.topicId === topic.id);
        const subcategories = (topic.subcategories ?? []).flatMap(subcategory => {
          const subItems = topicItems.filter(item => item.subcategoryId === subcategory.id);
          return subItems.length ? [{ id: `words:${categoryId}:${topic.id}:${subcategory.id}`, label: subcategory.name, items: subItems }] : [];
        });
        const looseItems = topicItems.filter(item => !item.subcategoryId);
        if (!subcategories.length && !looseItems.length) return [];
        return [{ id: `words:${categoryId}:${topic.id}`, label: topic.name, children: subcategories, ...(looseItems.length ? { items: looseItems } : {}) }];
      }).flat();
      const specialItems = categoryItems.filter(item => !item.topicId);
      if (!children.length && !specialItems.length) return null;
      return { id: `words:${categoryId}`, label, children, ...(specialItems.length ? { items: specialItems } : {}) };
    };
    return CATS.flatMap(category => {
      const node = buildCategory(category.id, category.name);
      return node ? [node] : [];
    });
  }

  return groupRecallItems(items).map(group => ({ id: group.key, label: group.label, items: group.items }));
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
            {(Object.keys(SECTION_TITLES) as RecallSection[]).map((section) => (
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
                      <RecallTree nodes={buildRecallTree(section, recall.sections[section])} premium={premium} />
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
