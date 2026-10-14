import { notFound } from "next/navigation";
import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { Card } from "@/components/ui/card";
import { CATS } from "@/constants/categories";
import { isPremium } from "@/lib/isPremium";
import { buildProgressKey, getLearningProgressSnapshot, getProgressCardClass } from "@/lib/learning-progress";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getIcon } from "@/lib/icons";
import { PremiumBadge } from "@/components/ui/PremiumBadge";

export const dynamic = 'force-dynamic';

const BASIC_ADVANCED_SUBCATEGORY_ICONS: Record<string, string> = {
  appearance: "Shirt", thinking: "Brain", emotions: "Laugh", relationships: "Handshake",
  actions: "Zap", speech: "MessageCircleMore", personality: "Drama", social: "Users",
  energy: "Battery", identity: "Fingerprint",
  home: "Home", neighbourhood: "MapPin", nature: "Flower2", weather: "CloudSun",
  travel: "Compass", architecture: "Building2", objects: "Package", materials: "Layers",
  space: "Orbit", atmosphere: "Wind",
  devices: "Smartphone", internet: "Globe", "social-media": "Share2", startup: "Rocket",
  communication: "MessagesSquare", data: "ChartNoAxesColumn", security: "ShieldCheck",
  automation: "Workflow", trends: "TrendingUp", "work-tools": "Wrench",
  food: "Pizza", drinks: "CupSoda", cooking: "CookingPot", restaurant: "Utensils",
  hobbies: "Palette", sports: "Dumbbell", routine: "CalendarDays", beauty: "Sparkles",
  health: "HeartPulse", shopping: "ShoppingBag",
  logic: "Network", learning: "GraduationCap", "problem-solving": "Puzzle",
  creativity: "Lightbulb", focus: "Focus", planning: "ListTodo", habits: "Repeat2",
  growth: "Sprout", leadership: "Crown", philosophy: "BookOpenText"
};

interface PageProps {
  params: {
    categoryId: string;
    topicId: string;
  };
}

export default async function TopicPage({ params }: PageProps) {
  const { categoryId, topicId } = params;
  const premium = await isPremium();
  const progress = await getLearningProgressSnapshot();

  // Find the category
  const category = CATS.find(cat => cat.id === categoryId);
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
            href="/words" 
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            ← Back to Words
          </Link>
        </div>

        <div className="mb-6 rounded-[28px] border border-cyan-400/20 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.22),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_35%),linear-gradient(180deg,_rgba(15,23,42,0.96),_rgba(2,6,23,0.96))] p-5">
          <div className="mb-2 text-[10px] uppercase tracking-[0.28em] text-cyan-300">Topic</div>
          <h1 className="mb-2 text-3xl font-black text-white">{topic.name}</h1>
          <div className="max-w-md text-sm leading-6 text-zinc-200">
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

        {topic.subcategories && topic.subcategories.length > 0 ? (
          <div className="grid grid-cols-2 gap-3">
            {topic.subcategories.map((subcategory, index) => (
              <div key={subcategory.id} className={`fade-up fade-up-d${Math.min(index + 1, 5)}`}>
                <Link href={locked ? "/premium" : `/words/${categoryId}/${topicId}/${subcategory.id}`}>
                  <Card
                    className={`p-4 ${
                      getProgressCardClass(
                        progress.containerStatuses[
                          buildProgressKey({
                            section: "words",
                            categoryId,
                            topicId,
                            subcategoryId: subcategory.id
                          })
                        ] ?? "none"
                      )
                    }`}
                  >
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
                      {categoryId === "basic-advanced" && (() => {
                        const Icon = getIcon(BASIC_ADVANCED_SUBCATEGORY_ICONS[subcategory.id] ?? "Sparkles");
                        return <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-400/15"><Icon className="h-4 w-4 text-cyan-300" /></span>;
                      })()}
                      <span>{subcategory.name}</span>
                    </div>
                    <div className="text-[11px] leading-relaxed">
                    {subcategory.description?.includes('||') ? (
                      <>
                        <div className="text-zinc-500">{subcategory.description.split('||')[0]}</div>
                        <div className="text-cyan-400 font-medium">10 words</div>
                      </>
                    ) : (
                      <div className="text-zinc-500">{subcategory.description}</div>
                    )}
                  </div>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        ) : topic.topics ? (
          <div className="grid grid-cols-2 gap-3">
            {topic.topics.map((subtopic, index) => (
              <div key={subtopic.id} className={`fade-up fade-up-d${Math.min(index + 1, 5)}`}>
                <Link href={locked ? "/premium" : `/words#${categoryId}-${topicId}-${subtopic.id}`}>
                  <Card className="p-4">
                    <div className="mb-2 text-sm font-semibold">{subtopic.name}</div>
                    <div className="text-[11px] leading-relaxed">
                    {subtopic.description?.includes('||') ? (
                      <>
                        <div className="text-zinc-500">{subtopic.description.split('||')[0]}</div>
                        <div className="text-cyan-400 font-medium">10 words</div>
                      </>
                    ) : (
                      <div className="text-zinc-500">{subtopic.description}</div>
                    )}
                  </div>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <Card className="p-6 text-center">
            <div className="mb-4 text-4xl">📚</div>
            <h3 className="mb-2 text-sm font-semibold">{topic.name}</h3>
            <p className="text-xs leading-relaxed text-zinc-500">{topic.description}</p>
          </Card>
        )}
      </div>
    </>
  );
}
