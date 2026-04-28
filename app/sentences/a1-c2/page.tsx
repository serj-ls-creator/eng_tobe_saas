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
        <div className="mb-4">
          <Link 
            href="/sentences"
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            ← Back to Sentences
          </Link>
        </div>

        <div className="mb-6 rounded-[28px] border border-cyan-400/20 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.22),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_35%),linear-gradient(180deg,_rgba(15,23,42,0.96),_rgba(2,6,23,0.96))] p-5">
          <div className="mb-2 text-[10px] uppercase tracking-[0.28em] text-cyan-300">Practice</div>
          <h1 className="mb-2 text-3xl font-black text-white">{category.name}</h1>
          <p className="max-w-md text-sm leading-6 text-zinc-200">
            {category.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {A1_C2_ACTIVITIES.map((activity, index) => (
            <div key={activity.id} className={`fade-up fade-up-d${Math.min(index + 1, 5)}`}>
              <Link href={`/sentences/a1-c2/${activity.id}`}>
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
