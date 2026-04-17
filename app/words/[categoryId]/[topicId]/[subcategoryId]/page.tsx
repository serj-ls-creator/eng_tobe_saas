import { notFound } from "next/navigation";
import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { Card } from "@/components/ui/card";
import { CATS } from "@/constants/categories";
import { isPremium } from "@/lib/isPremium";
import Link from "next/link";
import { PremiumBadge } from "@/components/ui/PremiumBadge";

interface PageProps {
  params: {
    categoryId: string;
    topicId: string;
    subcategoryId: string;
  };
}

const WORD_GAME_ACTIVITIES = [
  {
    id: "cards",
    name: "Cards",
    description: "Word and synonym cards"
  },
  {
    id: "synonym-pair",
    name: "Synonym Pair",
    description: "Match word pairs"
  },
  {
    id: "multiple-choice",
    name: "Multiple Choice",
    description: "Pick the right answer"
  },
  {
    id: "letter-hunt",
    name: "Letter Hunt",
    description: "Find missing letters"
  },
  {
    id: "transcribe",
    name: "Transcribe",
    description: "Listen and write synonym"
  },
  {
    id: "unscramble",
    name: "Unscramble",
    description: "Arrange letters correctly"
  }
] as const;

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

        <div className="mb-6">
          <Card className="border border-dashed border-white/10 p-4 text-center">
            <div className="mb-2 text-[10px] uppercase tracking-[0.3em] text-zinc-600">Practice</div>
            <h3 className="mb-1 text-sm font-semibold">{subcategory.name}</h3>
            <div className="text-xs leading-relaxed">
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
        </div>

        <div className="grid grid-cols-2 gap-3">
          {WORD_GAME_ACTIVITIES.map((activity, index) => (
            <div key={activity.id} className={`fade-up fade-up-d${Math.min(index + 1, 5)}`}>
              <Link href={locked ? "/premium" : (activity.id === 'cards' ? `/words/${categoryId}/${topicId}/${subcategoryId}/cards` : activity.id === 'synonym-pair' ? `/words/${categoryId}/${topicId}/${subcategoryId}/synonym-pair` : activity.id === 'multiple-choice' ? `/words/${categoryId}/${topicId}/${subcategoryId}/multiple-choice` : activity.id === 'letter-hunt' ? `/words/${categoryId}/${topicId}/${subcategoryId}/letter-hunt` : activity.id === 'unscramble' ? `/words/${categoryId}/${topicId}/${subcategoryId}/unscramble` : `/words#${categoryId}-${topicId}-${subcategoryId}-${activity.id}`)}>
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
