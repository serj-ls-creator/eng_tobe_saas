import { notFound } from "next/navigation";
import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { Card } from "@/components/ui/card";
import { SENT_CATS } from "@/constants/categories";
import { isPremium } from "@/lib/isPremium";
import { buildProgressKey, getLearningProgressSnapshot, getProgressCardClass } from "@/lib/learning-progress";
import Link from "next/link";

export const dynamic = 'force-dynamic';

type Activity = {
  id: string;
  name: string;
  description: string;
  href?: string; // optional custom href (for multi-step games)
};

const EVERYDAY_ACTIVITIES: Activity[] = [
  {
    id: "cards",
    name: "Cards",
    description: "Dialogue practice cards",
  },
  {
    id: "reply-builder",
    name: "Reply Builder",
    description: "Assemble the perfect reply, word by word",
  },
  {
    id: "fill-the-gap",
    name: "Fill the Gap",
    description: "at, on, in, of, a, the — or nothing",
  },
  {
    id: "choice",
    name: "Choice",
    description: "Coming Soon",
  },
  {
    id: "pairs",
    name: "Pairs",
    description: "Coming Soon",
  },
  {
    id: "find-the-mistake",
    name: "Find the Mistake",
    description: "Coming Soon",
  },
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
  const progress = await getLearningProgressSnapshot();

  // Find the everyday-situations category
  const category = SENT_CATS.find(cat => cat.id === "everyday-situations");
  if (!category) notFound();

  // Find the topic
  const topic = category.topics?.find(t => t.id === topicId);
  if (!topic) notFound();

  // Find the subcategory
  const subcategory = topic.subcategories?.find(sub => sub.id === subcategoryId);
  if (!subcategory) notFound();

  const locked = !topic.isFree && !premium;

  return (
    <>
      <TopBar title={subcategory.name} />
      <div className="content-shell">
        <div className="mb-4">
          <Link 
            href={`/sentences/everyday-situations/${topicId}`}
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            ← Back to {topic.name}
          </Link>
        </div>

        <div className="mb-6 rounded-[28px] border border-cyan-400/20 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.22),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_35%),linear-gradient(180deg,_rgba(15,23,42,0.96),_rgba(2,6,23,0.96))] p-5">
          <div className="mb-2 text-[10px] uppercase tracking-[0.28em] text-cyan-300">Practice</div>
          <h1 className="mb-2 text-3xl font-black text-white">{subcategory.name}</h1>
          <div className="max-w-md text-sm leading-6 text-zinc-200">
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
          {EVERYDAY_ACTIVITIES.map((activity: Activity, index: number) => (
            <div key={activity.id} className={`fade-up fade-up-d${Math.min(index + 1, 5)}`}>
              <Link href={locked ? "/premium" : `/sentences/everyday-situations/${topicId}/${subcategoryId}/${activity.id}`}>
                <Card
                  className={`p-4 h-full cursor-pointer hover:border-cyan-500/50 transition-all ${
                    getProgressCardClass(
                      progress.activityStatuses[
                        buildProgressKey({
                          section: "sentences",
                          categoryId: "everyday-situations",
                          topicId,
                          subcategoryId,
                          activityId: activity.id
                        })
                      ] ?? "none"
                    )
                  }`}
                >
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
