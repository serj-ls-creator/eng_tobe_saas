import { CategoryCard } from "@/components/ui/CategoryCard";
import { TopBar } from "@/components/layout/TopBar";
import { SENT_CATS } from "@/constants/categories";
import { isPremium } from "@/lib/isPremium";

export default async function SentencesPage() {
  const premium = await isPremium();

  return (
    <>
      <TopBar title="Sentences" />
      <div className="content-shell space-y-2">
        {SENT_CATS.map((category, index) => (
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
    </>
  );
}
