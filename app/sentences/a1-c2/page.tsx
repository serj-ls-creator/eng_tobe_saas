import Link from "next/link";
import { TopBar } from "@/components/layout/TopBar";
import { Card } from "@/components/ui/card";

const sentences = [
  "How are you?",
  "How old are you?", 
  "I don't know.",
  "I don't understand.",
  "I like coffee.",
  "I like it.",
  "I need help.",
  "I think.",
  "I understand.",
  "I'm angry.",
  "I'm busy.",
  "I'm fine.",
  "I'm happy.",
  "I'm hungry.",
  "I'm late.",
  "I'm sick.",
  "I'm sorry.",
  "I'm tired.",
  "I'm very busy.",
  "It's easy.",
  "It's expensive.",
  "It's funny.",
  "It's good.",
  "Let's go.",
  "Yes."
].sort(); // Sort alphabetically

export default function A1ToC2Page() {
  return (
    <>
      <TopBar title="A1 to C2" />
      <div className="content-shell">
        <div className="mb-4">
          <Link 
            href="/sentences" 
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            &larr; Back to Sentences
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
          {sentences.map((sentence, index) => (
            <div key={index} className={`fade-up fade-up-d${Math.min(index + 1, 5)}`}>
              <Card className="p-4">
                <div className="text-sm font-medium text-white">{sentence}</div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
