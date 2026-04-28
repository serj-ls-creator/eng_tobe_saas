import { notFound } from "next/navigation";
import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { Card } from "@/components/ui/card";
import { SENT_CATS } from "@/constants/categories";
import { isPremium } from "@/lib/isPremium";
import Link from "next/link";

interface PageProps {
  params: {
    topicId: string;
    subcategoryId: string;
  };
}

export default async function WordCheckPage({ params }: PageProps) {
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
      <TopBar title="Word Check" />
      <div className="content-shell">
        <div className="mb-4">
          <Link 
            href={`/sentences/phrasal-verbs/${topicId}/${subcategoryId}`}
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            ← Back to {subcategory.name}
          </Link>
        </div>

        <div className="mb-6">
          <Card className="border border-dashed border-white/10 p-8 text-center">
            <div className="mb-4 text-6xl">✓</div>
            <h3 className="mb-2 text-lg font-semibold">Word Check Activity</h3>
            <p className="text-sm leading-relaxed text-zinc-500 mb-4">
              Verify phrasal verb meanings and usage
            </p>
            <div className="text-xs text-cyan-400">
              {topic.name} → {subcategory.name} → Word Check
            </div>
            {locked && (
              <div className="mt-4 text-xs text-amber-400">
                Premium feature - Upgrade to access
              </div>
            )}
          </Card>
        </div>

        {!locked && (
          <Card className="p-6 text-center">
            <div className="mb-4 text-4xl">🚧</div>
            <h3 className="mb-2 text-sm font-semibold">Coming Soon</h3>
            <p className="text-xs leading-relaxed text-zinc-500">
              This activity is under development. Check back soon!
            </p>
          </Card>
        )}
      </div>
    </>
  );
}
