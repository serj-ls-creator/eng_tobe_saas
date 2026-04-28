import { notFound } from "next/navigation";
import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { Card } from "@/components/ui/card";
import { SENT_CATS } from "@/constants/categories";
import { isPremium } from "@/lib/isPremium";
import Link from "next/link";

export default async function ErrorHuntPage() {
  const premium = await isPremium();

  // Find the A1-C2 category
  const category = SENT_CATS.find(cat => cat.id === "a1-c2");
  if (!category) notFound();

  // Find the error-hunt topic
  const topic = category.topics?.find(t => t.id === "error-hunt");
  if (!topic) notFound();

  // Find the subcategory
  const subcategory = topic.subcategories?.find(s => s.id === "basic-errors");
  if (!subcategory) notFound();

  const locked = !topic.isFree && !premium;

  return (
    <>
      <TopBar title={subcategory.name} />
      <div className="content-shell">
        <div className="mb-4">
          <Link 
            href="/sentences/a1-c2"
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            ← Back to A1 to C2
          </Link>
        </div>

        <div className="mb-6">
          <Card className="border border-dashed border-white/10 p-4 text-center">
            <div className="mb-2 text-[10px] uppercase tracking-[0.3em] text-zinc-600">Practice</div>
            <h3 className="mb-1 text-sm font-semibold">{subcategory.name}</h3>
            <div className="text-xs leading-relaxed text-zinc-500">
              {subcategory.description}
            </div>
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
