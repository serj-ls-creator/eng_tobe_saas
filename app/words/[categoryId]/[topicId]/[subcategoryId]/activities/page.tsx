import { notFound } from "next/navigation";
import { TopBar } from "@/components/layout/TopBar";
import { Card } from "@/components/ui/card";
import { CATS, WORD_GAME_ACTIVITIES } from "@/constants/categories";
import { isPremium } from "@/lib/isPremium";
import Link from "next/link";
import { PremiumBadge } from "@/components/ui/PremiumBadge";

type Activity = typeof WORD_GAME_ACTIVITIES[number];

interface PageProps {
  params: {
    categoryId: string;
    topicId: string;
    subcategoryId: string;
  };
}


export default async function ActivitiesPage({ params }: PageProps) {
  const { categoryId, topicId, subcategoryId } = params;
  const premium = await isPremium();

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
      <TopBar title="Practice Activities" />
      <div className="content-shell">
        <div className="mb-4">
          <Link 
            href={`/words/${categoryId}/${topicId}/${subcategoryId}`}
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            ← Back to {subcategory.name}
          </Link>
        </div>

        <div className="mb-6">
          <Card className="border border-dashed border-white/10 p-4 text-center">
            <div className="mb-2 text-[10px] uppercase tracking-[0.3em] text-zinc-600">Practice</div>
            <h3 className="mb-1 text-sm font-semibold">{subcategory.name} Activities</h3>
            <p className="text-xs leading-relaxed text-zinc-500">Choose your learning activity</p>
          </Card>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {WORD_GAME_ACTIVITIES.map((activity: Activity, index: number) => (
            <div key={activity.id} className={`fade-up fade-up-d${Math.min(index + 1, 5)}`}>
              <Link href={locked ? "/premium" : activity.id === 'unscramble' ? `/words/${categoryId}/${topicId}/${subcategoryId}/unscramble` : activity.id === 'multiple-choice' ? `/words/${categoryId}/${topicId}/${subcategoryId}/multiple-choice` : activity.id === 'cards' ? `/words/${categoryId}/${topicId}/${subcategoryId}/cards` : activity.id === 'word-check' ? `/words/${categoryId}/${topicId}/${subcategoryId}/word-check` : `/words#${categoryId}-${topicId}-${subcategoryId}-${activity.id}`}>
                <Card className="p-4">
                  <div className="mb-2 text-sm font-semibold">{activity.name}</div>
                  <div className="text-[11px] leading-relaxed text-zinc-500">{activity.description}</div>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
