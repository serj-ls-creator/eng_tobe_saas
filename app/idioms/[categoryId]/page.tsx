import { CategoryCard } from "@/components/ui/CategoryCard";
import Link from "next/link";
import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { IDIOM_CATS } from "@/constants/categories";
import { isPremium } from "@/lib/isPremium";
import { notFound } from "next/navigation";

const IDIOM_LEVELS = [
  {
    id: "level-1",
    name: "Level 1",
    description: "Beginner-friendly idioms (10 idioms)",
    icon: "Star",
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
    icon: "Flame",
    color: "#ef4444"
  }
];

export default async function IdiomCategoryPage({ params }: { params: { categoryId: string } }) {
  const premium = await isPremium();
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
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            {"<-"} Back to Idioms
          </Link>
        </div>
        <div className="mb-6">
          <p className="text-sm text-zinc-400">{category.description}</p>
        </div>
        <div className="space-y-2">
          {IDIOM_LEVELS.map((level, index) => (
            <div key={level.id} className={`fade-up fade-up-d${Math.min(index + 1, 5)}`}>
              <CategoryCard
                title={level.name}
                description={level.description}
                icon={level.icon}
                color={level.color}
                href={locked ? "/premium" : `/idioms/${category.id}/${level.id}`}
                locked={locked}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
