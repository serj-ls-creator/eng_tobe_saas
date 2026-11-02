import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { Card } from "@/components/ui/card";
import { CATS } from "@/constants/categories";
import { isPremium } from "@/lib/isPremium";
import { buildProgressKey, getLearningProgressSnapshot, getProgressCardClass } from "@/lib/learning-progress";
import Link from "next/link";
import { ArrowLeft, BookOpenText, ChevronRight } from "lucide-react";
import { getIcon } from "@/lib/icons";
import { PremiumBadge } from "@/components/ui/PremiumBadge";
import { createPageMetadata } from "@/lib/metadata";

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

const TOPIC_ICONS: Record<string, string> = {
  // Antonyms
  character: "ShieldCheck",
  state: "Battery",
  action: "ArrowLeftRight",
  feeling: "Drama",
  // Rude -> Polite
  "at-work": "BriefcaseBusiness",
  "with-strangers": "Handshake",
  "in-conflict": "ShieldAlert",
  "online-texting": "MessageSquareMore",
  // Formal -> Informal
  "emails-messages": "FileText",
  "meetings-presentations": "BriefcaseBusiness",
  "everyday-conversation": "MessageCircleMore",
  "written-documents": "BookOpenText",
  // Time words
  "past-memory": "Brain",
  "present-now": "Clock3",
  "future-plans": "CalendarDays",
  "duration-frequency": "Repeat2",
  // Slang
  "gen-z-slang": "Laugh",
  "internet-social-media": "Share2",
  "emotions-reactions": "Drama",
  "street-urban": "MapPin"
};

interface PageProps {
  params: {
    categoryId: string;
    topicId: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const category = CATS.find((cat) => cat.id === resolvedParams?.categoryId);
  const topic = category?.topics?.find((t) => t.id === resolvedParams?.topicId);

  if (!topic) {
    return createPageMetadata({
      title: "English Vocabulary Practice",
      description: "Learn and practice English words and phrases with interactive cards and exercises.",
    });
  }

  return createPageMetadata({
    title: `${topic.name} - English Vocabulary Practice`,
    description: topic.description || `Learn and practice ${topic.name} words with interactive flashcards.`,
  });
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
            className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <ArrowLeft className="h-3 w-3" /> Back to Words
          </Link>
        </div>

        <div className="mb-6 section-hero bg-none bg-surface-raised p-4">
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

        {topic.subcategories && topic.subcategories.length > 0 ? (
          <div className="grid grid-cols-2 gap-3">
            {topic.subcategories.map((subcategory, index) => {
              const subcategoryIconName =
                categoryId === "basic-advanced"
                  ? (BASIC_ADVANCED_SUBCATEGORY_ICONS[subcategory.id] ?? "Sparkles")
                  : (TOPIC_ICONS[topicId] ?? category.icon);
              const SubIcon = getIcon(subcategoryIconName);
              return (
                <div key={subcategory.id} className={`fade-up fade-up-d${Math.min(index + 1, 5)}`}>
                  <Link href={locked ? "/store" : `/words/${categoryId}/${topicId}/${subcategory.id}`}>
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
                      <div className="mb-2 flex items-center gap-2 text-sm font-medium">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-control bg-theme-soft">
                          <SubIcon className="h-4 w-4 text-theme" />
                        </span>
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
              );
            })}
          </div>
        ) : topic.topics ? (
          <div className="grid grid-cols-2 gap-3">
            {topic.topics.map((subtopic, index) => {
              const SubIcon = getIcon(TOPIC_ICONS[topicId] ?? category.icon);
              return (
                <div key={subtopic.id} className={`fade-up fade-up-d${Math.min(index + 1, 5)}`}>
                  <Link href={locked ? "/store" : `/words#${categoryId}-${topicId}-${subtopic.id}`}>
                    <Card className="p-4">
                      <div className="mb-2 flex items-center gap-2 text-sm font-medium">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-control bg-theme-soft">
                          <SubIcon className="h-4 w-4 text-theme" />
                        </span>
                        <span>{subtopic.name}</span>
                      </div>
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
              );
            })}
          </div>
        ) : (
          <Card className="p-6 text-center">
            <div className="mb-3 flex justify-center">
              <span className="flex h-10 w-10 items-center justify-center rounded-control bg-theme-soft">
                <BookOpenText className="h-5 w-5 text-theme" />
              </span>
            </div>
            <h3 className="mb-2 text-sm font-medium">{topic.name}</h3>
            <p className="text-xs leading-relaxed text-zinc-500">{topic.description}</p>
          </Card>
        )}
      </div>
    </>
  );
}
