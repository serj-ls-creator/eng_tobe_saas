import { notFound } from "next/navigation";
import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { Card } from "@/components/ui/card";
import { SENT_CATS } from "@/constants/categories";
import { isPremium } from "@/lib/isPremium";
import Link from "next/link";
import { PremiumBadge } from "@/components/ui/PremiumBadge";

interface PageProps {
  params: {
    topicId: string;
  };
}

export default async function TopicPage({ params }: PageProps) {
  const { topicId } = params;
  const premium = await isPremium();

  // Find the phrasal-verbs category
  const category = SENT_CATS.find(cat => cat.id === "phrasal-verbs");
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
            href="/sentences" 
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            ← Back to Sentences
          </Link>
        </div>

        <div className="mb-6">
          <Card className="border border-dashed border-white/10 p-4 text-center">
            <div className="mb-2 text-[10px] uppercase tracking-[0.3em] text-zinc-600">Topic</div>
            <h3 className="mb-1 text-sm font-semibold">{topic.name}</h3>
            <div className="text-xs leading-relaxed">
              {topic.description?.includes('||') ? (
                <>
                  <div className="text-zinc-500">{topic.description.split('||')[0]}</div>
                  <div className="text-cyan-400 font-medium">{topic.description.split('||')[1]}</div>
                </>
              ) : (
                <div className="text-zinc-500">{topic.description}</div>
              )}
            </div>
          </Card>
        </div>

        {topic.subcategories && topic.subcategories.length > 0 && (
          <div className="grid grid-cols-2 gap-3">
            {topic.subcategories.map((subcategory, index) => (
              <div key={subcategory.id} className={`fade-up fade-up-d${Math.min(index + 1, 5)}`}>
                <Link href={locked ? "/premium" : `/sentences/phrasal-verbs/${topicId}/${subcategory.id}`}>
                  <Card className="p-4">
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
