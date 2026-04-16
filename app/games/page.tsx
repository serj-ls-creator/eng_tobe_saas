import Link from "next/link";
import { ComingSoon } from "@/components/ui/ComingSoon";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { TopBar } from "@/components/layout/TopBar";
import { GAME_CATS } from "@/constants/categories";
import { UI_TEXT } from "@/constants/ui";
import { isPremium } from "@/lib/isPremium";

export default async function GamesPage() {
  const premium = await isPremium();

  return (
    <>
      <TopBar title="Games" />
      <div className="content-shell">
        <div className="mb-4">
          <Link 
            href="/" 
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
        <div className="mb-4 space-y-2">
          {GAME_CATS.map((category, index) => (
            <div key={category.id} className={`fade-up fade-up-d${Math.min(index + 1, 5)}`}>
              <CategoryCard
                title={category.name}
                description={category.description}
                icon={category.icon}
                color={category.color}
                href={category.href}
                locked={!category.isFree && !premium}
              />
            </div>
          ))}
        </div>
        <div className="fade-up fade-up-d4">
          <ComingSoon title="Games are in progress" description="Wordle, Memory, and Negotiations will open here." />
        </div>
      </div>
    </>
  );
}
