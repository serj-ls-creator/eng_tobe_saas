import Link from "next/link";
import { BookOpenText, CircleHelp, PenLine } from "lucide-react";
import { notFound, redirect } from "next/navigation";
import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { Card } from "@/components/ui/card";
import { findGrammarTopic, GRAMMAR_SECTIONS } from "@/constants/grammar";
import { isPremium } from "@/lib/isPremium";

export default async function GrammarTopicPage({ params }: { params: { categoryId: string; topicId: string } }) {
  const section = GRAMMAR_SECTIONS.find((item) => item.id === params.categoryId);
  const topic = findGrammarTopic(section?.topics, params.topicId);
  if (!section || !topic) notFound();
  if (section.id === "tenses" && !(await isPremium())) redirect("/premium");

  return (
    <>
      <TopBar title={topic.name} />
      <div className="content-shell pb-4">
        <div className="mb-4">
          <Link href="/grammar" className="text-xs text-zinc-500 transition-colors hover:text-zinc-300">← Back to Grammar</Link>
        </div>
        <div className="mb-6 rounded-[28px] border border-cyan-400/20 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.22),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_35%),linear-gradient(180deg,_rgba(15,23,42,0.96),_rgba(2,6,23,0.96))] p-5">
          <div className="mb-2 text-[10px] uppercase tracking-[0.28em] text-cyan-300">{section.name}</div>
          <h1 className="mb-2 text-3xl font-black text-white">{topic.name}</h1>
          <p className="max-w-md text-sm leading-6 text-zinc-200">Choose an activity to study this topic.</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Link href={`/grammar/${section.id}/${topic.id}/rule`}>
            <Card className="min-h-[126px] overflow-hidden rounded-[24px] border border-white/10 p-4 transition-all hover:border-cyan-300/40 hover:bg-white/[0.08]">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200"><BookOpenText className="h-5 w-5" /></div>
              <div className="mb-2 text-sm font-semibold text-white">Rule</div>
              <div className="text-[11px] leading-relaxed text-cyan-300">A short guide to {topic.name.toLowerCase()}</div>
            </Card>
          </Link>
          {topic.id === "adjective-order" && <Link href="/grammar/adjective-order/sentence-builder">
            <Card className="min-h-[126px] overflow-hidden rounded-[24px] border border-white/10 p-4 transition-all hover:border-violet-300/40 hover:bg-white/[0.08]">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-300/10 text-violet-200"><PenLine className="h-5 w-5" /></div>
              <div className="mb-2 text-sm font-semibold text-white">Sentence Builder</div>
              <div className="text-[11px] leading-relaxed text-violet-300">Build sentences with adjectives in the correct order</div>
            </Card>
          </Link>}
          {topic.id === "word-order" ? <Link href="/grammar/word-order/find-the-mistake">
            <Card className="min-h-[126px] overflow-hidden rounded-[24px] border border-white/10 p-4 transition-all hover:border-cyan-300/40 hover:bg-white/[0.08]">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200"><CircleHelp className="h-5 w-5" /></div>
              <div className="mb-2 text-sm font-semibold text-white">Find the Mistake</div>
              <div className="text-[11px] leading-relaxed text-cyan-300">Find and fix word order mistakes</div>
            </Card>
          </Link> : <div aria-disabled="true">
            <Card className="min-h-[126px] overflow-hidden rounded-[24px] border border-white/10 p-4 opacity-55">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200"><CircleHelp className="h-5 w-5" /></div>
              <div className="mb-2 text-sm font-semibold text-white">Find the Mistake</div>
              <div className="text-[11px] leading-relaxed text-zinc-500">Coming Soon</div>
            </Card>
          </div>}
        </div>
      </div>
    </>
  );
}
