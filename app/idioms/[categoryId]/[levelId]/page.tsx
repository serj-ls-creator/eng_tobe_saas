import Link from "next/link";
import { TopBar } from "@/components/layout/TopBar";
import { Card } from "@/components/ui/card";
import { IDIOM_CATS } from "@/constants/categories";
import { isPremium } from "@/lib/isPremium";
import { notFound } from "next/navigation";
import { getIcon } from "@/lib/icons";

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
    id: "listen-pick",
    name: "Listen & Pick",
    description: "Listen and select the correct idiom",
    icon: "Headphones",
    color: "#8b5cf6"
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

export default async function IdiomLevelPage({ params }: { params: { categoryId: string; levelId: string } }) {
  const premium = await isPremium();
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
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            {"<-"} Back to {category.name}
          </Link>
        </div>
        
        {/* Activities Grid - 2 per row */}
        <div className="grid grid-cols-2 gap-3">
          {IDIOM_ACTIVITIES.map((activity, index) => {
            const Icon = getIcon(activity.icon);
            return (
              <div key={activity.id} className={`fade-up fade-up-d${Math.min(index + 1, 5)}`}>
                <Link href={locked ? "/premium" : `/idioms/${category.id}/${params.levelId}/${activity.id}`}>
                  <Card className="p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-lg" style={{ backgroundColor: `${activity.color}25` }}>
                        <Icon className="h-3 w-3" style={{ color: activity.color }} />
                      </div>
                      <div className="text-sm font-semibold">{activity.name}</div>
                    </div>
                    <div className="text-[11px] leading-relaxed">
                      {activity.description?.includes('||') ? (
                        <>
                          <div className="text-zinc-500">{activity.description.split('||')[0]}</div>
                          <div className="text-cyan-400 font-medium">{activity.description.split('||')[1]}</div>
                        </>
                      ) : (
                        <div className="text-zinc-500">{activity.description}</div>
                      )}
                    </div>
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
