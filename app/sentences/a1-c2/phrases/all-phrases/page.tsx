import Link from "next/link";
import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { Card } from "@/components/ui/card";
import { A1_C2_PHRASES } from "@/data/sentences/a1-c2-phrases";

export default function PhrasesPage() {
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
        
        <div className="mb-6">
          <Card className="border border-dashed border-white/10 p-4 text-center">
            <div className="mb-2 text-[10px] uppercase tracking-[0.3em] text-zinc-600">Practice</div>
            <h3 className="mb-1 text-sm font-semibold">Sentence Patterns</h3>
            <p className="text-xs leading-relaxed text-zinc-500">Essential sentences from beginner to advanced level</p>
          </Card>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {A1_C2_PHRASES.sort((a, b) => a.title.localeCompare(b.title)).map((phrase, index) => (
            <div key={phrase.id} className={`fade-up fade-up-d${Math.min(index + 1, 5)}`}>
              <Link href={`/sentences/a1-c2/phrases/all-phrases/${phrase.id}`}>
                <Card className="p-4">
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
