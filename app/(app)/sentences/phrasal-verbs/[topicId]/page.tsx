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

interface PageProps {
  params: {
    topicId: string;
  };
}

const PHRASAL_VERB_SUBCATEGORY_STYLES: Record<string, { icon: string; color: string }> = {
  // Work & Career
  getting_started: { icon: "Rocket", color: "#22C55E" },
  daily_tasks: { icon: "ListTodo", color: "#3B82F6" },
  communication: { icon: "MessagesSquare", color: "#06B6D4" },
  problems: { icon: "ShieldAlert", color: "#F59E0B" },
  progress: { icon: "TrendingUp", color: "#10B981" },
  leaving: { icon: "ArrowLeftRight", color: "#A855F7" },
  // Relationships & Social
  meeting_people: { icon: "Handshake", color: "#A855F7" },
  friendship: { icon: "HeartPulse", color: "#EC4899" },
  conflict: { icon: "Drama", color: "#EF4444" },
  romance: { icon: "Flower2", color: "#F472B6" },
  family: { icon: "Home", color: "#22C55E" },
  community: { icon: "Users", color: "#06B6D4" },
  // Mind & Emotions
  feeling_good: { icon: "Laugh", color: "#3B82F6" },
  feeling_bad: { icon: "Drama", color: "#EF4444" },
  thinking: { icon: "Brain", color: "#6366F1" },
  decision_making: { icon: "ListTodo", color: "#F59E0B" },
  stress: { icon: "Battery", color: "#F97316" },
  motivation: { icon: "Zap", color: "#EAB308" },
  // Daily Life
  morning_routine: { icon: "Clock3", color: "#F97316" },
  money: { icon: "TrendingUp", color: "#22C55E" },
  travel: { icon: "Compass", color: "#06B6D4" },
  health: { icon: "HeartPulse", color: "#EF4444" },
  home: { icon: "Home", color: "#3B82F6" },
  technology: { icon: "Smartphone", color: "#8B5CF6" }
};

export default async function TopicPage({ params }: PageProps) {
  const { topicId } = params;
  const premium = await isPremium();
  const progress = await getLearningProgressSnapshot();

  // Find the phrasal-verbs category
  const category = ALL_SENTENCE_CATS.find(cat => cat.id === "phrasal-verbs");
  if (!category) notFound();

  // Find the topic
  const topic = category.topics?.find(t => t.id === topicId);
  if (!topic) notFound();

  const locked = !category.isFree && !premium;

  return (
    <>
      <TopBar title={topic.name} />
      <div className="content-shell">
        <div className="mb-4">
          <Link 
            href="/phrasal-verbs" 
            className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <ArrowLeft className="h-3 w-3" /> Back to Phrasal verbs
          </Link>
        </div>

        <div className="mb-6 section-hero p-4">
          <div className="mb-2 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-theme" aria-hidden="true" />
            <span className="text-xs font-medium text-zinc-400">Topic</span>
          </div>
          <h1 className="mb-2 text-3xl font-semibold text-foreground">{topic.name}</h1>
          <div className="max-w-md text-sm leading-relaxed text-zinc-300">
            {topic.description?.includes('||') ? (
              <>
                <div>{topic.description.split('||')[0]}</div>
                <div className="text-cyan-400 font-medium">{topic.description.split('||')[1]}</div>
              </>
            ) : (
              <div>{topic.description}</div>
            )}
          </div>
        </div>

        {topic.subcategories && topic.subcategories.length > 0 && (
          <div className="grid grid-cols-2 gap-3">
            {topic.subcategories.map((subcategory, index) => {
              const subcategoryStyle = PHRASAL_VERB_SUBCATEGORY_STYLES[subcategory.id] ?? { icon: "Rocket", color: "#A78BFA" };
              const SubIcon = getIcon(subcategoryStyle.icon);
              return (
                <div key={subcategory.id} className={`fade-up fade-up-d${Math.min(index + 1, 5)}`}>
                  <Link href={locked ? "/store" : `/sentences/phrasal-verbs/${topicId}/${subcategory.id}`}>
                    <Card
                      className={`p-4 ${
                        getProgressCardClass(
                          progress.containerStatuses[
                            buildProgressKey({
                              section: "sentences",
                              categoryId: "phrasal-verbs",
                              topicId,
                              subcategoryId: subcategory.id
                            })
                          ] ?? "none"
                        )
                      }`}
                    >
                      <div className="mb-2 flex items-center gap-2 text-sm font-medium">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-control" style={{ backgroundColor: `${subcategoryStyle.color}25` }}>
                          <SubIcon className="h-4 w-4" style={{ color: subcategoryStyle.color }} />
                        </span>
                        <span>{subcategory.name}</span>
                      </div>
                      <div className="text-[11px] leading-relaxed">
                        {subcategory.description?.includes('||') ? (
                          <>
                            <div className="text-zinc-500">{subcategory.description.split('||')[0]}</div>
                            <div className="text-cyan-400 font-medium">{subcategory.description.split('||')[1]}</div>
                          </>
                        ) : (
                          <div className="text-zinc-500">{subcategory.description}</div>
                        )}
                      </div>
                    </Card>
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
