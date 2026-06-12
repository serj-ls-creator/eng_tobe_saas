import { notFound } from "next/navigation";
import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { SENT_CATS } from "@/constants/categories";
import { isPremium } from "@/lib/isPremium";
import Link from "next/link";
import { buildProgressKey, getLearningProgressSnapshot } from "@/lib/learning-progress";

const PAIRS_LEVELS = [
  {
    id: "a2",
    name: "A2",
    description: "Upper beginner level (10 pairs)",
    icon: "Star",
    color: "#10b981"
  },
  {
    id: "b1", 
    name: "B1",
    description: "Intermediate level (10 pairs)",
    icon: "Zap",
    color: "#f59e0b"
  },
  {
    id: "b2",
    name: "B2", 
    description: "Upper intermediate level (10 pairs)",
    icon: "Flame",
    color: "#ef4444"
  },
  {
    id: "c1",
    name: "C1", 
    description: "Advanced level (10 pairs)",
    icon: "Target",
    color: "#8b5cf6"
  },
  {
    id: "c2",
    name: "C2", 
    description: "Proficient level (10 pairs)",
    icon: "Crown",
    color: "#ec4899"
  },
  {
    id: "random",
    name: "Random Mix", 
    description: "Mixed levels from A2 to C2 (10 pairs)",
    icon: "Dice",
    color: "#06b6d4"
  }
];

export default async function PairsPage() {
  const premium = await isPremium();
  const progress = await getLearningProgressSnapshot();

  // Find the A1-C2 category
  const category = SENT_CATS.find(cat => cat.id === "a1-c2");
  if (!category) notFound();

  // Find the pairs topic
  const topic = category.topics?.find(t => t.id === "pairs");
  if (!topic) notFound();

  const locked = !topic.isFree && !premium;

  return (
    <>
      <TopBar title="Pairs" />
      <div className="content-shell pb-4">
        <div className="mb-4">
          <Link 
            href="/sentences/a1-c2" 
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            {"<-"} Back to A1 to C2
          </Link>
        </div>
        <div className="mb-6">
          <p className="text-sm text-zinc-400">Match A1 phrases with their corresponding phrases at different levels</p>
        </div>
        <div className="space-y-2">
          {PAIRS_LEVELS.map((level, index) => {
            const progressStatus = progress.activityStatuses[
              buildProgressKey({
                section: "sentences",
                categoryId: "a1-c2",
                topicId: "pairs",
                subcategoryId: "sentence-pairs",
                levelId: level.id,
                activityId: "pairs"
              })
            ] ?? "none";

            return (
              <div key={level.id} className={`fade-up fade-up-d${Math.min(index + 1, 5)}`}>
                <CategoryCard
                  title={level.name}
                  description={level.description}
                  icon={level.icon}
                  color={level.color}
                  href={locked ? "/premium" : `/sentences/a1-c2/pairs/${level.id}`}
                  locked={locked}
                  progressStatus={progressStatus}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
