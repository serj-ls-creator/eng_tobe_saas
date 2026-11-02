import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { Card } from "@/components/ui/card";
import { CATS, WORD_GAME_ACTIVITIES } from "@/constants/categories";
import { isPremium } from "@/lib/isPremium";
import { buildProgressKey, getLearningProgressSnapshot, getProgressCardClass } from "@/lib/learning-progress";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PremiumBadge } from "@/components/ui/PremiumBadge";
import { getIcon } from "@/lib/icons";
import { createPageMetadata } from "@/lib/metadata";

export const dynamic = 'force-dynamic';

type Activity = {
  id: string;
  name: string;
  description: string;
};

const ACTIVITY_ICONS: Record<string, string> = {
  cards: "Layers",
  "synonym-pair": "ArrowLeftRight",
  "multiple-choice": "ListOrdered",
  "letter-hunt": "Search",
  "word-check": "ShieldCheck",
  unscramble: "Type"
};

interface PageProps {
  params: {
    categoryId: string;
    topicId: string;
    subcategoryId: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const category = CATS.find((cat) => cat.id === resolvedParams?.categoryId);
  const topic = category?.topics?.find((t) => t.id === resolvedParams?.topicId);
  const subcategory = topic?.subcategories?.find((sub) => sub.id === resolvedParams?.subcategoryId);

  if (!subcategory) {
    return createPageMetadata({
      title: "English Word Practice",
      description: "Learn and practice English words with interactive flashcards and exercises.",
    });
  }

  return createPageMetadata({
    title: `${subcategory.name} - English Word Practice`,
    description: subcategory.description || `Practice ${subcategory.name} English words with interactive flashcards.`,
  });
}

export default async function SubcategoryPage({ params }: PageProps) {
  const { categoryId, topicId, subcategoryId } = params;
  const premium = await isPremium();
  const progress = await getLearningProgressSnapshot();

  // Find the category
  const category = CATS.find(cat => cat.id === categoryId);
  if (!category) notFound();

  // Find the topic
  const topic = category.topics?.find(t => t.id === topicId);
  if (!topic) notFound();

  // Find the subcategory
  const subcategory = topic.subcategories?.find(sub => sub.id === subcategoryId);
  if (!subcategory) notFound();

  const locked = !category.isFree && !premium;

  return (
    <>
      <TopBar title={subcategory.name} />
      <div className="content-shell">
        <div className="mb-4">
          <Link 
            href={`/words/${categoryId}/${topicId}`}
            className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <ArrowLeft className="h-3 w-3" /> Back to {topic.name}
          </Link>
        </div>

        <div className="mb-6 section-hero bg-none bg-surface-raised p-4">
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
          {WORD_GAME_ACTIVITIES.map((activity: Activity, index: number) => {
            const ActivityIcon = getIcon(ACTIVITY_ICONS[activity.id] ?? "Sparkles");
            return (
              <div key={activity.id} className={`fade-up fade-up-d${Math.min(index + 1, 5)}`}>
                <Link href={locked ? "/store" : (activity.id === 'cards' ? `/words/${categoryId}/${topicId}/${subcategoryId}/cards` : activity.id === 'synonym-pair' ? `/words/${categoryId}/${topicId}/${subcategoryId}/synonym-pair` : activity.id === 'multiple-choice' ? `/words/${categoryId}/${topicId}/${subcategoryId}/multiple-choice` : activity.id === 'letter-hunt' ? `/words/${categoryId}/${topicId}/${subcategoryId}/letter-hunt` : activity.id === 'unscramble' ? `/words/${categoryId}/${topicId}/${subcategoryId}/unscramble` : activity.id === 'word-check' ? `/words/${categoryId}/${topicId}/${subcategoryId}/word-check` : `/words#${categoryId}-${topicId}-${subcategoryId}-${activity.id}`)}>
                  <Card
                    className={`p-4 ${
                      getProgressCardClass(
                        progress.activityStatuses[
                          buildProgressKey({
                            section: "words",
                            categoryId,
                            topicId,
                            subcategoryId,
                            activityId: activity.id
                          })
                        ] ?? "none"
                      )
                    }`}
                  >
                    <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-control bg-theme-soft">
                      <ActivityIcon className="h-4 w-4 text-theme" />
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
