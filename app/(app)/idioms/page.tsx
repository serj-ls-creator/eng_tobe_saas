import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { IDIOM_CATS } from "@/constants/categories";
import { isPremium } from "@/lib/isPremium";
import { buildProgressKey, getLearningProgressSnapshot } from "@/lib/learning-progress";
import { createPageMetadata } from "@/lib/metadata";
import idiomsArt from "@/data/pic/idioms.png";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = createPageMetadata({
  title: "Common English Idioms and Phrases",
  description: "Learn natural English idioms and expressions with practical explanations and interactive tasks.",
});

export default async function IdiomsPage() {
  const premium = await isPremium();
  const progress = await getLearningProgressSnapshot();

  return (
    <>
      <TopBar title="Idioms" />
      <div className="content-shell pb-4">
        <div className="mb-4">
          <Link 
            href="/home" 
            className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <ArrowLeft className="h-3 w-3" /> Back to Home
          </Link>
        </div>

        <div className="mb-6 section-hero relative overflow-hidden p-4">
          <Image
            src={idiomsArt}
            alt=""
            aria-hidden="true"
            draggable={false}
            className="pointer-events-none absolute right-0 top-1/2 w-[60%] -translate-y-1/2 select-none opacity-80"
          />
          <div className="relative z-10 mb-2 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-theme" aria-hidden="true" />
            <span className="text-xs font-medium text-zinc-400">Practice</span>
          </div>
          <h1 className="relative z-10 mb-2 text-3xl font-semibold text-foreground">Idioms</h1>
          <p className="relative z-10 max-w-md text-sm leading-relaxed text-zinc-300">
            Learn everyday English expressions through themed idiom collections and practice.
          </p>
        </div>

        <div className="space-y-2">
          {IDIOM_CATS.map((category, index) => (
            <div key={category.id} className={`fade-up fade-up-d${Math.min(index + 1, 5)}`}>
              <CategoryCard
                title={category.name}
                description={category.description}
                icon={category.icon}
                color={category.color}
                href={category.href}
                locked={!category.isFree && !premium}
                progressStatus={progress.containerStatuses[buildProgressKey({ section: "idioms", categoryId: category.id })] ?? "none"}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
