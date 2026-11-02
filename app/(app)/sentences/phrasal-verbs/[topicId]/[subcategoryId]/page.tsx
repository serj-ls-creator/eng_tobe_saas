import { notFound } from "next/navigation";
import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { Card } from "@/components/ui/card";
import { ALL_SENTENCE_CATS } from "@/constants/categories";
import { isPremium } from "@/lib/isPremium";
import { buildProgressKey, getLearningProgressSnapshot, getProgressCardClass } from "@/lib/learning-progress";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PremiumBadge } from "@/components/ui/PremiumBadge";
import { getIcon } from "@/lib/icons";

export const dynamic = 'force-dynamic';

type Activity = {
  id: string;
  name: string;
  description: string;
};

const PHRASAL_VERB_ACTIVITIES: Activity[] = [
  {
    id: "cards",
    name: "Cards",
    description: "Phrasal verb and meaning cards"
  },
  {
    id: "multiple-choice",
    name: "Multiple Choice",
    description: "Pick the right meaning"
  },
  {
    id: "synonym-pair",
    name: "Synonym Pair",
    description: "Match phrasal verb pairs"
  },
  {
    id: "letter-hunt",
    name: "Letter Hunt",
    description: "Find missing letters"
  },
  {
    id: "unscramble",
    name: "Unscramble",
    description: "Arrange letters correctly"
  },
  {
    id: "pair-match",
    name: "Pair Match",
    description: "Verify phrasal verb pairs"
  }
];

const PHRASAL_VERB_ACTIVITY_ICONS: Record<string, { icon: string; color: string }> = {
  cards: { icon: "Layers", color: "#3b82f6" },
  "multiple-choice": { icon: "ListOrdered", color: "#10b981" },
  "synonym-pair": { icon: "ArrowLeftRight", color: "#f59e0b" },
  "letter-hunt": { icon: "Search", color: "#ef4444" },
  unscramble: { icon: "Type", color: "#8b5cf6" },
  "pair-match": { icon: "Puzzle", color: "#ec4899" }
};

interface PageProps {
  params: {
    topicId: string;
    subcategoryId: string;
  };
}

export default async function SubcategoryPage({ params }: PageProps) {
  const { topicId, subcategoryId } = params;
  const premium = await isPremium();
  const progress = await getLearningProgressSnapshot();

  // Find the phrasal-verbs category
  const category = ALL_SENTENCE_CATS.find(cat => cat.id === "phrasal-verbs");
  if (!category) notFound();

  // Find the topic
  const topic = category.topics?.find(t => t.id === topicId);
  if (!topic) notFound();

  // Find the subcategory
  const subcategory = topic.subcategories?.find(sub => sub.id === subcategoryId);
  if (!subcategory) notFound();

  const locked = !topic.isFree && !premium;

  return (
    <>
      <TopBar title={subcategory.name} />
      <div className="content-shell">
        <div className="mb-4">
          <Link 
            href={`/sentences/phrasal-verbs/${topicId}`}
            className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <ArrowLeft className="h-3 w-3" /> Back to {topic.name}
          </Link>
        </div>

        <div className="mb-6 section-hero p-4">
          <div className="mb-2 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-theme" aria-hidden="true" />
            <span className="text-xs font-medium text-zinc-400">Practice</span>
          </div>
          <h1 className="mb-2 text-3xl font-semibold text-foreground">{subcategory.name}</h1>
          <div className="max-w-md text-sm leading-relaxed text-zinc-300">
            {subcategory.description?.includes('||') ? (
              <>
                <div>{subcategory.description.split('||')[0]}</div>
                <div className="text-cyan-400 font-medium">{subcategory.description.split('||')[1]}</div>
              </>
            ) : (
              <div>{subcategory.description}</div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {PHRASAL_VERB_ACTIVITIES.map((activity: Activity, index: number) => {
            const activityStyle = PHRASAL_VERB_ACTIVITY_ICONS[activity.id] ?? { icon: "Sparkles", color: "#A78BFA" };
            const ActivityIcon = getIcon(activityStyle.icon);
            return (
              <div key={activity.id} className={`fade-up fade-up-d${Math.min(index + 1, 5)}`}>
                <Link href={locked ? "/store" : `/sentences/phrasal-verbs/${topicId}/${subcategoryId}/${activity.id}`}>
                  <Card
                    className={`p-4 ${
                      getProgressCardClass(
                        progress.activityStatuses[
                          buildProgressKey({
                            section: "sentences",
                            categoryId: "phrasal-verbs",
                            topicId,
                            subcategoryId,
                            activityId: activity.id
                          })
                        ] ?? "none"
                      )
                    }`}
                  >
                    <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-control" style={{ backgroundColor: `${activityStyle.color}25` }}>
                      <ActivityIcon className="h-4 w-4" style={{ color: activityStyle.color }} />
                    </div>
                    <div className="mb-2 text-sm font-medium">{activity.name}</div>
                    <div className="text-[11px] leading-relaxed text-zinc-500">{activity.description}</div>
                  </Card>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
