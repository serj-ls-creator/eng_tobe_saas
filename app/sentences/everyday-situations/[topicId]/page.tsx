import { notFound } from "next/navigation";
import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { Card } from "@/components/ui/card";
import { SENT_CATS } from "@/constants/categories";
import { isPremium } from "@/lib/isPremium";
import Link from "next/link";

interface PageProps {
  params: {
    topicId: string;
  };
}

export default async function TopicPage({ params }: PageProps) {
  const { topicId } = params;
  const premium = await isPremium();

  // Find the everyday-situations category
  const category = SENT_CATS.find(cat => cat.id === "everyday-situations");
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

        <div className="mb-6 rounded-[28px] border border-cyan-400/20 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.22),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_35%),linear-gradient(180deg,_rgba(15,23,42,0.96),_rgba(2,6,23,0.96))] p-5">
          <div className="mb-2 text-[10px] uppercase tracking-[0.28em] text-cyan-300">Coming Soon</div>
          <h1 className="mb-2 text-3xl font-black text-white">{topic.name}</h1>
          <p className="max-w-md text-sm leading-6 text-zinc-200">
            {topic.description?.includes('||') ? (
              <>
                <div>{topic.description.split('||')[0]}</div>
                <div className="text-cyan-400 font-medium">{topic.description.split('||')[1]}</div>
              </>
            ) : (
              <div>{topic.description}</div>
            )}
          </p>
        </div>

        <Card className="p-8 text-center">
          <div className="text-6xl mb-4">🚧</div>
          <h2 className="text-xl font-semibold mb-2">Coming Soon</h2>
          <p className="text-zinc-400 mb-4">
            This section is under development
          </p>
          <p className="text-sm text-zinc-500">
            We're working on interactive exercises for {topic.name.toLowerCase()}. Check back soon!
          </p>
        </Card>
      </div>
    </>
  );
}
