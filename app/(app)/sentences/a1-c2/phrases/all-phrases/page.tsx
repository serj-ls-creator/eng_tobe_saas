import Link from "next/link";
import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { Card } from "@/components/ui/card";
import { A1_C2_PHRASES } from "@/data/sentences/a1-c2-phrases";
import { buildProgressKey, getLearningProgressSnapshot, getProgressCardClass } from "@/lib/learning-progress";

export const dynamic = 'force-dynamic';

export default async function PhrasesPage() {
  const progress = await getLearningProgressSnapshot();

  return (
    <>
      <TopBar title="Phrases" />
      <div className="content-shell">
        <div className="mb-4">
          <Link 
            href="/sentences/a1-c2" 
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            &larr; Back to A1 to C2
          </Link>
        </div>
        
        <div className="mb-6 rounded-[28px] border border-cyan-400/20 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.22),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_35%),linear-gradient(180deg,_rgba(15,23,42,0.96),_rgba(2,6,23,0.96))] p-5">
          <div className="mb-2 text-[10px] uppercase tracking-[0.28em] text-cyan-300">Practice</div>
          <h1 className="mb-2 text-3xl font-black text-white">Sentence Patterns</h1>
          <p className="max-w-md text-sm leading-6 text-zinc-200">Essential sentences from beginner to advanced level</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {A1_C2_PHRASES.sort((a, b) => a.title.localeCompare(b.title)).map((phrase, index) => (
            <div key={phrase.id} className={`fade-up fade-up-d${Math.min(index + 1, 5)}`}>
              <Link href={`/sentences/a1-c2/phrases/all-phrases/${phrase.id}`}>
                <Card className={`p-4 ${
                  getProgressCardClass(
                    progress.containerStatuses[
                      buildProgressKey({
                        section: "sentences",
                        categoryId: "a1-c2",
                        topicId: "phrases",
                        subcategoryId: phrase.id
                      })
                    ] ?? "none"
                  )
                }`}>
                  <div className="text-sm font-medium text-white">{phrase.title}</div>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
