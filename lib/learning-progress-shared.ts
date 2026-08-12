import { CATS, IDIOM_CATS, SENT_CATS, ALL_SENTENCE_CATS, PHRASAL_VERBS_CAT, WORD_GAME_ACTIVITIES } from "@/constants/categories";
import { SILENT_WORD_LEVELS } from "@/data/words/pronounce/silent_words";
import { A1_C2_PHRASES } from "@/data/sentences/a1-c2-phrases";

export type ProgressStatus = "none" | "completed" | "perfect";
export type LearningSection = "words" | "sentences" | "idioms";

export interface RecordLearningProgressPayload {
  section: LearningSection;
  categoryId: string;
  topicId?: string;
  subcategoryId?: string;
  levelId?: string;
  activityId: string;
  activityName: string;
  title: string;
  href: string;
  score?: number | null;
  total?: number | null;
}

export interface LearningProgressRow {
  section: LearningSection;
  category_id: string;
  topic_id: string | null;
  subcategory_id: string | null;
  level_id: string | null;
  activity_id: string;
  activity_name: string;
  title: string;
  href: string;
  score: number | null;
  total: number | null;
  is_perfect: boolean;
  next_recall_at: string;
}

export interface RecallItem {
  key: string;
  section: LearningSection;
  categoryId: string;
  topicId: string | null;
  subcategoryId: string | null;
  levelId: string | null;
  title: string;
  activityName: string;
  href: string;
  scoreLabel: string;
  dueAt: string;
}

export interface LearningProgressSnapshot {
  isLoggedIn: boolean;
  activityStatuses: Record<string, ProgressStatus>;
  containerStatuses: Record<string, ProgressStatus>;
}

export interface RecallSnapshot {
  isLoggedIn: boolean;
  sections: Record<LearningSection, RecallItem[]>;
}

export interface SectionProgressPercentages {
  words: number;
  sentences: number;
  idioms: number;
}

const WORD_ACTIVITY_IDS = WORD_GAME_ACTIVITIES.map((activity) => activity.id);
const PHRASAL_VERB_ACTIVITY_IDS = ["cards", "multiple-choice", "synonym-pair", "letter-hunt", "unscramble", "pair-match"];
const EVERYDAY_ACTIVITY_IDS = ["cards", "reply-builder", "fill-the-gap", "choice", "pairs", "find-the-mistake"];
const IDIOM_ACTIVITY_IDS = ["cards", "multiple-choice", "synonym-pair", "fill-blanks", "find-mistake", "sentence-builder"];
const A1_C2_TOPIC_IDS = ["phrases", "error-hunt", "pairs", "level-match"];
const IDIOM_LEVEL_IDS = ["level-1", "level-2", "level-3"];

export function buildProgressKey(input: {
  section: LearningSection;
  categoryId: string;
  topicId?: string | null;
  subcategoryId?: string | null;
  levelId?: string | null;
  activityId?: string | null;
}): string {
  return [input.section, input.categoryId, input.topicId, input.subcategoryId, input.levelId, input.activityId]
    .filter(Boolean)
    .join(":");
}

export function getProgressCardClass(status: ProgressStatus): string {
  if (status === "perfect") return "border-violet-400/80 shadow-[0_0_0_1px_rgba(167,139,250,0.45)]";
  if (status === "completed") return "border-emerald-400/80 shadow-[0_0_0_1px_rgba(52,211,153,0.35)]";
  return "";
}

function rowToStatus(row: LearningProgressRow): ProgressStatus {
  return row.is_perfect ? "perfect" : "completed";
}

function aggregateStatuses(statuses: ProgressStatus[]): ProgressStatus {
  if (!statuses.length || statuses.every((status) => status === "none")) return "none";
  if (statuses.every((status) => status === "perfect")) return "perfect";
  return "completed";
}

function collectStatuses(
  keys: string[],
  activityStatuses: Record<string, ProgressStatus>,
  containerStatuses: Record<string, ProgressStatus>
): ProgressStatus[] {
  return keys.map((key) => activityStatuses[key] ?? containerStatuses[key] ?? "none");
}

export function buildLearningProgressSnapshot(rows: LearningProgressRow[], isLoggedIn = true): LearningProgressSnapshot {
  const activityStatuses: Record<string, ProgressStatus> = {};
  const containerStatuses: Record<string, ProgressStatus> = {};

  rows.forEach((row) => {
    const key = buildProgressKey({
      section: row.section,
      categoryId: row.category_id,
      topicId: row.topic_id,
      subcategoryId: row.subcategory_id,
      levelId: row.level_id,
      activityId: row.activity_id
    });
    activityStatuses[key] = rowToStatus(row);
  });

  CATS.forEach((category) => {
    const categoryKey = buildProgressKey({ section: "words", categoryId: category.id });
    const topicStatuses: ProgressStatus[] = [];

    category.topics?.forEach((topic) => {
      const topicKey = buildProgressKey({ section: "words", categoryId: category.id, topicId: topic.id });

      if (category.id === "pronounce" && topic.id === "dont-pronounce") {
        const levelStatuses = SILENT_WORD_LEVELS.map((level) => {
          const key = buildProgressKey({
            section: "words",
            categoryId: "pronounce",
            topicId: "dont-pronounce",
            levelId: level.id,
            activityId: "dont-pronounce"
          });

          return activityStatuses[key] ?? "none";
        });

        const topicStatus = aggregateStatuses(levelStatuses);
        containerStatuses[topicKey] = topicStatus;
        topicStatuses.push(topicStatus);
        return;
      }

      if (!topic.subcategories?.length) return;

      const subcategoryStatuses = topic.subcategories.map((subcategory) => {
        const subcategoryKey = buildProgressKey({
          section: "words",
          categoryId: category.id,
          topicId: topic.id,
          subcategoryId: subcategory.id
        });

        const childKeys = WORD_ACTIVITY_IDS.map((activityId) =>
          buildProgressKey({
            section: "words",
            categoryId: category.id,
            topicId: topic.id,
            subcategoryId: subcategory.id,
            activityId
          })
        );

        const status = aggregateStatuses(collectStatuses(childKeys, activityStatuses, containerStatuses));
        containerStatuses[subcategoryKey] = status;
        return status;
      });

      const topicStatus = aggregateStatuses(subcategoryStatuses);
      containerStatuses[topicKey] = topicStatus;
      topicStatuses.push(topicStatus);
    });

    containerStatuses[categoryKey] = aggregateStatuses(topicStatuses);
  });

  const phrasalCategory = PHRASAL_VERBS_CAT;
  if (phrasalCategory?.topics?.length) {
    const topicStatuses = phrasalCategory.topics.map((topic) => {
      const topicKey = buildProgressKey({ section: "sentences", categoryId: "phrasal-verbs", topicId: topic.id });

      const subcategoryStatuses =
        topic.subcategories?.map((subcategory) => {
          const subcategoryKey = buildProgressKey({
            section: "sentences",
            categoryId: "phrasal-verbs",
            topicId: topic.id,
            subcategoryId: subcategory.id
          });

          const childKeys = PHRASAL_VERB_ACTIVITY_IDS.map((activityId) =>
            buildProgressKey({
              section: "sentences",
              categoryId: "phrasal-verbs",
              topicId: topic.id,
              subcategoryId: subcategory.id,
              activityId
            })
          );

          const status = aggregateStatuses(collectStatuses(childKeys, activityStatuses, containerStatuses));
          containerStatuses[subcategoryKey] = status;
          return status;
        }) ?? [];

      const topicStatus = aggregateStatuses(subcategoryStatuses);
      containerStatuses[topicKey] = topicStatus;
      return topicStatus;
    });

    containerStatuses[buildProgressKey({ section: "sentences", categoryId: "phrasal-verbs" })] = aggregateStatuses(topicStatuses);
  }

  const everydayCategory = SENT_CATS.find((category) => category.id === "everyday-situations");
  if (everydayCategory?.topics?.length) {
    const topicStatuses = everydayCategory.topics.map((topic) => {
      const topicKey = buildProgressKey({ section: "sentences", categoryId: "everyday-situations", topicId: topic.id });

      const subcategoryStatuses =
        topic.subcategories?.map((subcategory) => {
          const subcategoryKey = buildProgressKey({
            section: "sentences",
            categoryId: "everyday-situations",
            topicId: topic.id,
            subcategoryId: subcategory.id
          });

          const childKeys = EVERYDAY_ACTIVITY_IDS.map((activityId) =>
            buildProgressKey({
              section: "sentences",
              categoryId: "everyday-situations",
              topicId: topic.id,
              subcategoryId: subcategory.id,
              activityId
            })
          );

          const status = aggregateStatuses(collectStatuses(childKeys, activityStatuses, containerStatuses));
          containerStatuses[subcategoryKey] = status;
          return status;
        }) ?? [];

      const topicStatus = aggregateStatuses(subcategoryStatuses);
      containerStatuses[topicKey] = topicStatus;
      return topicStatus;
    });

    containerStatuses[buildProgressKey({ section: "sentences", categoryId: "everyday-situations" })] = aggregateStatuses(topicStatuses);
  }

  const a1c2Statuses = A1_C2_TOPIC_IDS.map((topicId) => {
    const topicKey = buildProgressKey({ section: "sentences", categoryId: "a1-c2", topicId });

    if (topicId === "phrases") {
      const phraseStatuses = A1_C2_PHRASES.map((phrase) => {
        const phraseContainerKey = buildProgressKey({
          section: "sentences",
          categoryId: "a1-c2",
          topicId: "phrases",
          subcategoryId: phrase.id
        });
        const phraseActivityKey = buildProgressKey({
          section: "sentences",
          categoryId: "a1-c2",
          topicId: "phrases",
          subcategoryId: phrase.id,
          activityId: "phrase-view"
        });

        const status = activityStatuses[phraseActivityKey] ?? "none";
        containerStatuses[phraseContainerKey] = status;
        return status;
      });

      const status = aggregateStatuses(phraseStatuses);
      containerStatuses[topicKey] = status;
      return status;
    }

    if (topicId === "pairs") {
      const childKeys = ["a2", "b1", "b2", "c1", "c2", "random"].map((levelId) =>
        buildProgressKey({
          section: "sentences",
          categoryId: "a1-c2",
          topicId: "pairs",
          subcategoryId: "sentence-pairs",
          levelId,
          activityId: "pairs"
        })
      );
      const status = aggregateStatuses(collectStatuses(childKeys, activityStatuses, containerStatuses));
      containerStatuses[topicKey] = status;
      return status;
    }

    if (topicId === "error-hunt") {
      const key = buildProgressKey({
        section: "sentences",
        categoryId: "a1-c2",
        topicId: "error-hunt",
        subcategoryId: "basic-errors",
        activityId: "error-hunt"
      });
      const status = activityStatuses[key] ?? "none";
      containerStatuses[topicKey] = status;
      return status;
    }

    if (topicId === "level-match") {
      const key = buildProgressKey({
        section: "sentences",
        categoryId: "a1-c2",
        topicId: "level-match",
        subcategoryId: "progression-match",
        activityId: "level-match"
      });
      const status = activityStatuses[key] ?? "none";
      containerStatuses[topicKey] = status;
      return status;
    }

    const matchingKeys = Object.keys(activityStatuses).filter((key) => key.startsWith(`${topicKey}:`));
    const status = aggregateStatuses(collectStatuses(matchingKeys, activityStatuses, containerStatuses));
    containerStatuses[topicKey] = status;
    return status;
  });
  containerStatuses[buildProgressKey({ section: "sentences", categoryId: "a1-c2" })] = aggregateStatuses(a1c2Statuses);

  IDIOM_CATS.forEach((category) => {
    const categoryKey = buildProgressKey({ section: "idioms", categoryId: category.id });
    const levelStatuses = IDIOM_LEVEL_IDS.map((levelId) => {
      const levelKey = buildProgressKey({ section: "idioms", categoryId: category.id, levelId });
      const childKeys = IDIOM_ACTIVITY_IDS.map((activityId) =>
        buildProgressKey({ section: "idioms", categoryId: category.id, levelId, activityId })
      );
      const status = aggregateStatuses(collectStatuses(childKeys, activityStatuses, containerStatuses));
      containerStatuses[levelKey] = status;
      return status;
    });
    containerStatuses[categoryKey] = aggregateStatuses(levelStatuses);
  });

  return { isLoggedIn, activityStatuses, containerStatuses };
}

function formatScoreLabel(row: LearningProgressRow): string {
  if (typeof row.score === "number" && typeof row.total === "number") return `${row.score}/${row.total}`;
  return "Completed";
}

export function buildRecallSnapshot(rows: LearningProgressRow[], isLoggedIn = true): RecallSnapshot {
  const sections: Record<LearningSection, RecallItem[]> = { words: [], sentences: [], idioms: [] };

  rows.forEach((row) => {
    const key = buildProgressKey({
      section: row.section,
      categoryId: row.category_id,
      topicId: row.topic_id,
      subcategoryId: row.subcategory_id,
      levelId: row.level_id,
      activityId: row.activity_id
    });

    sections[row.section].push({
      key,
      section: row.section,
      categoryId: row.category_id,
      topicId: row.topic_id,
      subcategoryId: row.subcategory_id,
      levelId: row.level_id,
      title: row.title,
      activityName: row.activity_name,
      href: row.href,
      scoreLabel: formatScoreLabel(row),
      dueAt: row.next_recall_at
    });
  });

  return { isLoggedIn, sections };
}

function buildWordsActivityKeys(): string[] {
  const keys: string[] = [];

  CATS.forEach((category) => {
    category.topics?.forEach((topic) => {
      if (category.id === "pronounce" && topic.id === "dont-pronounce") {
        SILENT_WORD_LEVELS.forEach((level) => {
          keys.push(
            buildProgressKey({
              section: "words",
              categoryId: "pronounce",
              topicId: "dont-pronounce",
              levelId: level.id,
              activityId: "dont-pronounce"
            })
          );
        });
        return;
      }

      topic.subcategories?.forEach((subcategory) => {
        WORD_ACTIVITY_IDS.forEach((activityId) => {
          keys.push(
            buildProgressKey({
              section: "words",
              categoryId: category.id,
              topicId: topic.id,
              subcategoryId: subcategory.id,
              activityId
            })
          );
        });
      });
    });
  });

  return keys;
}

function buildSentencesActivityKeys(): string[] {
  const keys: string[] = [];

  ALL_SENTENCE_CATS.forEach((category) => {
    if (category.id === "phrasal-verbs") {
      category.topics?.forEach((topic) => {
        topic.subcategories?.forEach((subcategory) => {
          PHRASAL_VERB_ACTIVITY_IDS.forEach((activityId) => {
            keys.push(
              buildProgressKey({
                section: "sentences",
                categoryId: "phrasal-verbs",
                topicId: topic.id,
                subcategoryId: subcategory.id,
                activityId
              })
            );
          });
        });
      });
      return;
    }

    if (category.id === "everyday-situations") {
      category.topics?.forEach((topic) => {
        topic.subcategories?.forEach((subcategory) => {
          EVERYDAY_ACTIVITY_IDS.forEach((activityId) => {
            keys.push(
              buildProgressKey({
                section: "sentences",
                categoryId: "everyday-situations",
                topicId: topic.id,
                subcategoryId: subcategory.id,
                activityId
              })
            );
          });
        });
      });
      return;
    }

    if (category.id === "a1-c2") {
      A1_C2_PHRASES.forEach((phrase) => {
        keys.push(
          buildProgressKey({
            section: "sentences",
            categoryId: "a1-c2",
            topicId: "phrases",
            subcategoryId: phrase.id,
            activityId: "phrase-view"
          })
        );
      });

      keys.push(buildProgressKey({ section: "sentences", categoryId: "a1-c2", topicId: "error-hunt", subcategoryId: "basic-errors", activityId: "error-hunt" }));
      ["a2", "b1", "b2", "c1", "c2", "random"].forEach((levelId) => {
        keys.push(
          buildProgressKey({
            section: "sentences",
            categoryId: "a1-c2",
            topicId: "pairs",
            subcategoryId: "sentence-pairs",
            levelId,
            activityId: "pairs"
          })
        );
      });
      keys.push(buildProgressKey({ section: "sentences", categoryId: "a1-c2", topicId: "level-match", subcategoryId: "progression-match", activityId: "level-match" }));
    }
  });

  return keys;
}

function buildIdiomsActivityKeys(): string[] {
  const keys: string[] = [];

  IDIOM_CATS.forEach((category) => {
    IDIOM_LEVEL_IDS.forEach((levelId) => {
      IDIOM_ACTIVITY_IDS.forEach((activityId) => {
        keys.push(
          buildProgressKey({
            section: "idioms",
            categoryId: category.id,
            levelId,
            activityId
          })
        );
      });
    });
  });

  return keys;
}

function scoreStatus(status: ProgressStatus): number {
  if (status === "perfect") return 1;
  if (status === "completed") return 0.5;
  return 0;
}

function toPercent(keys: string[], activityStatuses: Record<string, ProgressStatus>): number {
  if (!keys.length) return 0;
  const total = keys.reduce((sum, key) => sum + scoreStatus(activityStatuses[key] ?? "none"), 0);
  return Math.round((total / keys.length) * 100);
}

export function buildSectionProgressPercentages(snapshot: LearningProgressSnapshot): SectionProgressPercentages {
  return {
    words: toPercent(buildWordsActivityKeys(), snapshot.activityStatuses),
    sentences: toPercent(buildSentencesActivityKeys(), snapshot.activityStatuses),
    idioms: toPercent(buildIdiomsActivityKeys(), snapshot.activityStatuses)
  };
}

export function isRecallItemPremiumLocked(
  item: Pick<RecallItem, "section" | "categoryId" | "topicId">,
  hasPremium: boolean
): boolean {
  if (hasPremium) {
    return false;
  }

  if (item.section === "words") {
    const category = CATS.find((entry) => entry.id === item.categoryId);
    if (!category) {
      return false;
    }

    if (!category.isFree) {
      return true;
    }

    if (item.topicId) {
      const topic = category.topics?.find((entry) => entry.id === item.topicId);
      if (topic && topic.isFree === false) {
        return true;
      }
    }

    return false;
  }

  if (item.section === "sentences") {
    const category = ALL_SENTENCE_CATS.find((entry) => entry.id === item.categoryId);
    if (!category) {
      return false;
    }

    if (!category.isFree) {
      return true;
    }

    if (item.topicId) {
      const topic = category.topics?.find((entry) => entry.id === item.topicId);
      if (topic && topic.isFree === false) {
        return true;
      }
    }

    return false;
  }

  if (item.section === "idioms") {
    const category = IDIOM_CATS.find((entry) => entry.id === item.categoryId);
    return category ? !category.isFree : false;
  }

  return false;
}
