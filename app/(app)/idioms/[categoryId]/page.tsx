import type { Metadata } from "next";
import { CategoryCard } from "@/components/ui/CategoryCard";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { IDIOM_CATS } from "@/constants/categories";
import { isPremium } from "@/lib/isPremium";
import { buildProgressKey, getLearningProgressSnapshot } from "@/lib/learning-progress";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/metadata";

export const dynamic = 'force-dynamic';

interface IdiomCategoryPageProps {
  params: { categoryId: string };
}

export async function generateMetadata({ params }: IdiomCategoryPageProps): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const category = IDIOM_CATS.find((cat) => cat.id === resolvedParams?.categoryId);

  if (!category) {
    return createPageMetadata({
      title: "English Idioms Practice",
      description: "Learn common English idioms and phrases with real-world examples.",
    });
  }

  return createPageMetadata({
    title: `${category.name} - English Idioms Practice`,
    description: category.description || `Learn ${category.name} idioms with simple meanings and examples.`,
  });
}

const IDIOM_LEVELS = [
  {
    id: "level-1",
    name: "Level 1",
    description: "Beginner-friendly idioms (10 idioms)",
    icon: "Sprout",
    color: "#10b981"
  },
  {
    id: "level-2", 
    name: "Level 2",
    description: "Intermediate idioms (10 idioms)",
    icon: "Zap",
    color: "#f59e0b"
  },
  {
    id: "level-3",
    name: "Level 3", 
    description: "Advanced idioms (10 idioms)",
    icon: "Trophy",
    color: "#ef4444"
  }
];

export default async function IdiomCategoryPage({ params }: IdiomCategoryPageProps) {
  const premium = await isPremium();
  const progress = await getLearningProgressSnapshot();
  const category = IDIOM_CATS.find(cat => cat.id === params.categoryId);
  
  if (!category) {
    notFound();
  }

  const locked = !category.isFree && !premium;

  return (
    <>
      <TopBar title={category.name} />
      <div className="content-shell pb-4">
        <div className="mb-4">
          <Link 
            href="/idioms" 
            className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <ArrowLeft className="h-3 w-3" /> Back to Idioms
          </Link>
        </div>
        <div className="mb-6 section-hero p-4">
          <div className="mb-2 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-theme" aria-hidden="true" />
            <span className="text-xs font-medium text-zinc-400">Category</span>
          </div>
          <h1 className="mb-2 text-3xl font-semibold text-foreground">{category.name}</h1>
          <p className="max-w-md text-sm leading-relaxed text-zinc-300">{category.description}</p>
        </div>
        <div className="space-y-2">
          {IDIOM_LEVELS.map((level, index) => (
            <div key={level.id} className={`fade-up fade-up-d${Math.min(index + 1, 5)}`}>
              <CategoryCard
                title={level.name}
                description={level.description}
                icon={level.icon}
                color={level.color}
                href={locked ? "/store" : `/idioms/${category.id}/${level.id}`}
                locked={locked}
                progressStatus={progress.containerStatuses[
                  buildProgressKey({ section: "idioms", categoryId: category.id, levelId: level.id })
                ] ?? "none"}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
