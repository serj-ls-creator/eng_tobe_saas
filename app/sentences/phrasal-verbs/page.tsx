import { notFound } from "next/navigation";
import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { Card } from "@/components/ui/card";
import { SENT_CATS } from "@/constants/categories";
import { isPremium } from "@/lib/isPremium";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { PremiumBadge } from "@/components/ui/PremiumBadge";

export default async function PhrasalVerbsPage() {
  const premium = await isPremium();

  // Find the phrasal-verbs category
  const category = SENT_CATS.find(cat => cat.id === "phrasal-verbs");
  if (!category) notFound();

  const locked = !category.isFree && !premium;

  return (
    <>
      <TopBar title={category.name} />
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
            <div className="mb-2 text-[10px] uppercase tracking-[0.3em] text-zinc-600">Phrasal Verbs</div>
            <h3 className="mb-1 text-sm font-semibold">{category.name}</h3>
            <p className="text-xs leading-relaxed text-zinc-500">{category.description}</p>
            <div className="mt-2 text-xs text-cyan-400">B2 Level</div>
          </Card>
        </div>

        {category.topics && category.topics.length > 0 && (
          <div className="grid grid-cols-2 gap-3">
            {category.topics.map((topic, index) => (
              <div key={topic.id} className={`fade-up fade-up-d${Math.min(index + 1, 5)}`}>
                <Link href={locked ? "/premium" : `/sentences/phrasal-verbs/${topic.id}`}>
                  <Card className="p-4">
                    <div className="mb-2 text-sm font-semibold">{topic.name}</div>
                    <div className="text-[11px] leading-relaxed">
                      {topic.description?.includes('||') ? (
                        <>
                          <div className="text-zinc-500">{topic.description.split('||')[0]}</div>
                          <div className="text-cyan-400 font-medium">{topic.description.split('||')[1]}</div>
                        </>
                      ) : (
                        <div className="text-zinc-500">{topic.description}</div>
                      )}
                    </div>
                    {!topic.isFree && (
                      <div className="mt-2">
                        <PremiumBadge />
                      </div>
                    )}
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
