import { notFound } from "next/navigation";
import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { Card } from "@/components/ui/card";
import { SENT_CATS } from "@/constants/categories";
import { isPremium } from "@/lib/isPremium";
import Link from "next/link";
import { PremiumBadge } from "@/components/ui/PremiumBadge";

type Activity = {
  id: string;
  name: string;
  description: string;
};

const PHRASAL_VERB_ACTIVITIES: Activity[] = [
  {
    id: "cards",
    name: "Cards",
    description: "Phrasal verb and meaning cards"
  },
  {
    id: "multiple-choice",
    name: "Multiple Choice",
    description: "Pick the right meaning"
  },
  {
    id: "synonym-pair",
    name: "Synonym Pair",
    description: "Match phrasal verb pairs"
  },
  {
    id: "letter-hunt",
    name: "Letter Hunt",
    description: "Find missing letters"
  },
  {
    id: "unscramble",
    name: "Unscramble",
    description: "Arrange letters correctly"
  },
  {
    id: "word-check",
    name: "Word Check",
    description: "Verify phrasal verb pairs"
  }
];

interface PageProps {
  params: {
    topicId: string;
    subcategoryId: string;
  };
}

export default async function SubcategoryPage({ params }: PageProps) {
  const { topicId, subcategoryId } = params;
  const premium = await isPremium();

  // Find the phrasal-verbs category
  const category = SENT_CATS.find(cat => cat.id === "phrasal-verbs");
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
            href={`/sentences/phrasal-verbs/${topicId}`}
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
          {PHRASAL_VERB_ACTIVITIES.map((activity: Activity, index: number) => (
            <div key={activity.id} className={`fade-up fade-up-d${Math.min(index + 1, 5)}`}>
              <Link href={locked ? "/premium" : `/sentences/phrasal-verbs/${topicId}/${subcategoryId}/${activity.id}`}>
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
