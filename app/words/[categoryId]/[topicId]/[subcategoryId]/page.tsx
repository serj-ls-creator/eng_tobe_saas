import { notFound } from "next/navigation";
import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { Card } from "@/components/ui/card";
import { CATS, WORD_GAME_ACTIVITIES } from "@/constants/categories";
import { isPremium } from "@/lib/isPremium";
import Link from "next/link";
import { PremiumBadge } from "@/components/ui/PremiumBadge";

type Activity = {
  id: string;
  name: string;
  description: string;
};

interface PageProps {
  params: {
    categoryId: string;
    topicId: string;
    subcategoryId: string;
  };
}


export default async function SubcategoryPage({ params }: PageProps) {
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
      <TopBar title={subcategory.name} />
      <div className="content-shell">
        <div className="mb-4">
          <Link 
            href={`/words/${categoryId}/${topicId}`}
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            ← Back to {topic.name}
          </Link>
        </div>

        <div className="mb-6 rounded-[28px] border border-cyan-400/20 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.22),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_35%),linear-gradient(180deg,_rgba(15,23,42,0.96),_rgba(2,6,23,0.96))] p-5">
          <div className="mb-2 text-[10px] uppercase tracking-[0.28em] text-cyan-300">Practice</div>
          <h1 className="mb-2 text-3xl font-black text-white">{subcategory.name}</h1>
          <p className="max-w-md text-sm leading-6 text-zinc-200">
            {subcategory.description?.includes('||') ? (
              <>
                <div>{subcategory.description.split('||')[0]}</div>
                <div className="text-cyan-400 font-medium">{subcategory.description.split('||')[1]}</div>
              </>
            ) : (
              <div>{subcategory.description}</div>
            )}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {WORD_GAME_ACTIVITIES.map((activity: Activity, index: number) => (
            <div key={activity.id} className={`fade-up fade-up-d${Math.min(index + 1, 5)}`}>
              <Link href={locked ? "/premium" : (activity.id === 'cards' ? `/words/${categoryId}/${topicId}/${subcategoryId}/cards` : activity.id === 'synonym-pair' ? `/words/${categoryId}/${topicId}/${subcategoryId}/synonym-pair` : activity.id === 'multiple-choice' ? `/words/${categoryId}/${topicId}/${subcategoryId}/multiple-choice` : activity.id === 'letter-hunt' ? `/words/${categoryId}/${topicId}/${subcategoryId}/letter-hunt` : activity.id === 'unscramble' ? `/words/${categoryId}/${topicId}/${subcategoryId}/unscramble` : activity.id === 'word-check' ? `/words/${categoryId}/${topicId}/${subcategoryId}/word-check` : `/words#${categoryId}-${topicId}-${subcategoryId}-${activity.id}`)}>
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
