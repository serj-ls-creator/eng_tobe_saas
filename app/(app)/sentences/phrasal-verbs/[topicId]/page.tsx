import { notFound } from "next/navigation";
import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { Card } from "@/components/ui/card";
import { ALL_SENTENCE_CATS } from "@/constants/categories";
import { isPremium } from "@/lib/isPremium";
import { buildProgressKey, getLearningProgressSnapshot, getProgressCardClass } from "@/lib/learning-progress";
import Link from "next/link";
import { PremiumBadge } from "@/components/ui/PremiumBadge";

export const dynamic = 'force-dynamic';

interface PageProps {
  params: {
    topicId: string;
  };
}

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
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            ← Back to Phrasal verbs
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

        {topic.subcategories && topic.subcategories.length > 0 && (
          <div className="grid grid-cols-2 gap-3">
            {topic.subcategories.map((subcategory, index) => (
              <div key={subcategory.id} className={`fade-up fade-up-d${Math.min(index + 1, 5)}`}>
                <Link href={locked ? "/premium" : `/sentences/phrasal-verbs/${topicId}/${subcategory.id}`}>
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
                    <div className="mb-2 text-sm font-semibold">{subcategory.name}</div>
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
            ))}
          </div>
        )}
      </div>
    </>
  );
}
