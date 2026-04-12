import { CategoryCard } from "@/components/ui/CategoryCard";
import { TopBar } from "@/components/layout/TopBar";
import { IDIOM_CATS } from "@/constants/categories";
import { isPremium } from "@/lib/isPremium";

export default async function IdiomsPage() {
  const premium = await isPremium();

  return (
    <>
      <TopBar title="Idioms" />
      <div className="content-shell space-y-2">
        {IDIOM_CATS.map((category, index) => (
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
