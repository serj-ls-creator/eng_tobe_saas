import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { Card } from "@/components/ui/card";
import { IDIOM_CATS } from "@/constants/categories";
import { isPremium } from "@/lib/isPremium";
import { notFound } from "next/navigation";
import { getIcon } from "@/lib/icons";
import { buildProgressKey, getLearningProgressSnapshot, getProgressCardClass } from "@/lib/learning-progress";

export const dynamic = 'force-dynamic';

const IDIOM_ACTIVITIES = [
  {
    id: "cards",
    name: "Cards",
    description: "Practice idioms with flashcards",
    icon: "LayoutGrid",
    color: "#3b82f6"
  },
  {
    id: "multiple-choice",
    name: "Multiple Choice",
    description: "Choose the correct meaning",
    icon: "CheckCircle",
    color: "#10b981"
  },
  {
    id: "synonym-pair",
    name: "Synonym Pair",
    description: "Match idioms with meanings",
    icon: "Link2",
    color: "#f59e0b"
  },
    {
    id: "fill-blanks",
    name: "Fill the Blanks",
    description: "Complete the idiom sentences",
    icon: "Edit3",
    color: "#ef4444"
  },
  {
    id: "find-mistake",
    name: "Find the Mistake",
    description: "Identify incorrect usage",
    icon: "XCircle",
    color: "#ec4899"
  },
  {
    id: "sentence-builder",
    name: "Sentence Builder",
    description: "Create sentences with idioms",
    icon: "PlusCircle",
    color: "#06b6d4"
  }
];

const IDIOM_ACTIVITY_ICONS: Record<string, { icon: string; color: string }> = {
  cards: { icon: "Layers", color: "#3b82f6" },
  "multiple-choice": { icon: "ListOrdered", color: "#10b981" },
  "synonym-pair": { icon: "ArrowLeftRight", color: "#f59e0b" },
  "fill-blanks": { icon: "FileText", color: "#ef4444" },
  "find-mistake": { icon: "ShieldAlert", color: "#ec4899" },
  "sentence-builder": { icon: "ListTodo", color: "#06b6d4" }
};

export default async function IdiomLevelPage({ params }: { params: { categoryId: string; levelId: string } }) {
  const premium = await isPremium();
  const progress = await getLearningProgressSnapshot();
  const category = IDIOM_CATS.find(cat => cat.id === params.categoryId);
  
  if (!category) {
    notFound();
  }

  const locked = !category.isFree && !premium;
  const levelName = params.levelId.replace('level-', 'Level ');

  return (
    <>
      <TopBar title={`${category.name} - ${levelName}`} />
      <div className="content-shell pb-4">
        <div className="mb-4">
          <Link 
            href={`/idioms/${category.id}`} 
            className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <ArrowLeft className="h-3 w-3" /> Back to {category.name}
          </Link>
        </div>

        <div className="mb-6 section-hero p-4">
          <div className="mb-2 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-theme" aria-hidden="true" />
            <span className="text-xs font-medium text-zinc-400">{levelName}</span>
          </div>
          <h1 className="text-3xl font-semibold text-foreground">{category.name}</h1>
        </div>
        
        {/* Activities Grid - 2 per row */}
        <div className="grid grid-cols-2 gap-3">
          {IDIOM_ACTIVITIES.map((activity, index) => {
            const activityStyle = IDIOM_ACTIVITY_ICONS[activity.id] ?? { icon: "Sparkles", color: "#A78BFA" };
            const ActivityIcon = getIcon(activityStyle.icon);
            return (
              <div key={activity.id} className={`fade-up fade-up-d${Math.min(index + 1, 5)}`}>
                <Link href={locked ? "/store" : `/idioms/${category.id}/${params.levelId}/${activity.id}`}>
                  <Card
                    className={`p-4 ${
                      getProgressCardClass(
                        progress.activityStatuses[
                          buildProgressKey({
                            section: "idioms",
                            categoryId: category.id,
                            levelId: params.levelId,
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
