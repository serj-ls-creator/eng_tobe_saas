import { notFound } from "next/navigation";
import { TopBar } from "@/components/layout/TopBar";
import { Card } from "@/components/ui/card";
import { CATS } from "@/constants/categories";
import { isPremium } from "@/lib/isPremium";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { PremiumBadge } from "@/components/ui/PremiumBadge";

interface PageProps {
  params: {
    categoryId: string;
    topicId: string;
  };
}

export default async function TopicPage({ params }: PageProps) {
  const { categoryId, topicId } = params;
  const premium = await isPremium();

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
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            ← Back to Words
          </Link>
        </div>

        {topic.activities && topic.activities.length > 0 ? (
          <div className="grid grid-cols-2 gap-3">
            {topic.activities.map((activity, index) => (
              <div key={activity.id} className={`fade-up fade-up-d${Math.min(index + 1, 5)}`}>
                <Link href={locked ? "/premium" : activity.href}>
                  <Card className="p-4">
                    <div className="mb-2 text-sm font-semibold">{activity.name}</div>
                    <div className="text-[11px] leading-relaxed text-zinc-500">{activity.description}</div>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <Card className="p-6 text-center">
            <div className="mb-4 text-4xl">📚</div>
            <h3 className="mb-2 text-sm font-semibold">{topic.name}</h3>
            <p className="text-xs leading-relaxed text-zinc-500">{topic.description}</p>
          </Card>
        )}
      </div>
    </>
  );
}
