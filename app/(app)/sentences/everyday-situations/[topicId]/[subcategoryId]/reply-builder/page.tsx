import { notFound } from "next/navigation";
import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { Card } from "@/components/ui/card";
import { SENT_CATS } from "@/constants/categories";
import { isPremium } from "@/lib/isPremium";
import Link from "next/link";

export const dynamic = 'force-dynamic';

interface PageProps {
  params: {
    topicId: string;
    subcategoryId: string;
  };
}

const MODES = [
  {
    id: "positive",
    name: "Positive Response",
    description: "Build affirmative replies to each situation",
    color: "text-emerald-400",
    border: "hover:border-emerald-500/50",
    dot: "bg-emerald-400",
  },
  {
    id: "negative",
    name: "Negative Response",
    description: "Build declining or refusing replies",
    color: "text-red-400",
    border: "hover:border-red-500/50",
    dot: "bg-red-400",
  },
  {
    id: "question",
    name: "Question Reply",
    description: "Build interrogative responses to each prompt",
    color: "text-cyan-400",
    border: "hover:border-cyan-500/50",
    dot: "bg-cyan-400",
  },
  {
    id: "mix",
    name: "Mix",
    description: "Random mix of all three response types",
    color: "text-purple-400",
    border: "hover:border-purple-500/50",
    dot: "bg-purple-400",
  },
];

export default async function ReplyBuilderModePage({ params }: PageProps) {
  const { topicId, subcategoryId } = params;
  const premium = await isPremium();

  const category = SENT_CATS.find(cat => cat.id === "everyday-situations");
  if (!category) notFound();

  const topic = category.topics?.find(t => t.id === topicId);
  if (!topic) notFound();

  const subcategory = topic.subcategories?.find(sub => sub.id === subcategoryId);
  if (!subcategory) notFound();

  const locked = !topic.isFree && !premium;

  return (
    <>
      <TopBar title="Reply Builder" />
      <div className="content-shell">
        <div className="mb-4">
          <Link
            href={`/sentences/everyday-situations/${topicId}/${subcategoryId}`}
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            ← Back to {subcategory.name}
          </Link>
        </div>

        <div className="mb-6 rounded-[28px] border border-cyan-400/20 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.22),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_35%),linear-gradient(180deg,_rgba(15,23,42,0.96),_rgba(2,6,23,0.96))] p-5">
          <div className="mb-2 text-[10px] uppercase tracking-[0.28em] text-cyan-300">Reply Builder</div>
          <h1 className="mb-2 text-3xl font-black text-white">{subcategory.name}</h1>
          <p className="text-sm text-zinc-200">Choose the type of replies you want to build</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {MODES.map((mode, index) => (
            <div key={mode.id} className={`fade-up fade-up-d${Math.min(index + 1, 5)}`}>
              <Link href={locked ? "/premium" : `/sentences/everyday-situations/${topicId}/${subcategoryId}/reply-builder/${mode.id}`}>
                <Card className={`p-4 h-full cursor-pointer transition-all ${mode.border}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`w-2 h-2 rounded-full ${mode.dot}`} />
                    <div className={`text-sm font-semibold ${mode.color}`}>{mode.name}</div>
                  </div>
                  <div className="text-[11px] leading-relaxed text-zinc-500">{mode.description}</div>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
