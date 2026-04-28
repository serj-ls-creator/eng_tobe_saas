import Link from "next/link";
import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { Card } from "@/components/ui/card";
import { SENT_CATS } from "@/constants/categories";

const A1_C2_ACTIVITIES = [
  {
    id: "phrases",
    name: "Phrases",
    description: "Practice sentence patterns"
  },
  {
    id: "error-hunt", 
    name: "Error Hunt",
    description: "Find mistakes in sentences"
  },
  {
    id: "pairs",
    name: "Pairs", 
    description: "Match sentence elements"
  },
  {
    id: "level-match",
    name: "Level Match",
    description: "Match levels to sentences"
  }
];

export default async function A1C2Page() {
  // Find the A1-C2 category
  const category = SENT_CATS.find(cat => cat.id === "a1-c2");
  if (!category) return null;

  return (
    <>
      <TopBar title={category.name} />
      <div className="content-shell">
        <div className="mb-6">
          <Card className="border border-dashed border-white/10 p-4 text-center">
            <div className="mb-2 text-[10px] uppercase tracking-[0.3em] text-zinc-600">Practice</div>
            <h3 className="mb-1 text-sm font-semibold">{category.name}</h3>
            <div className="text-xs leading-relaxed text-zinc-500">
              {category.description}
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {A1_C2_ACTIVITIES.map((activity, index) => (
            <div key={activity.id} className={`fade-up fade-up-d${Math.min(index + 1, 5)}`}>
              <Link href={`/sentences/a1-c2/${activity.id}/${activity.id === 'phrases' ? 'all-phrases' : activity.id === 'error-hunt' ? 'basic-errors' : activity.id === 'pairs' ? 'sentence-pairs' : 'progression-match'}`}>
                <Card className="p-4">
                  <div className="mb-2 text-sm font-semibold">{activity.name}</div>
                  <div className="text-[11px] leading-relaxed text-zinc-500">{activity.description}</div>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
