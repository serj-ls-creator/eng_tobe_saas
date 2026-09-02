import Link from "next/link";
import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { Card } from "@/components/ui/card";
import { adjectiveOrderLevels } from "@/data/grammar/adjectiveorder/sentence_builder";
import { buildProgressKey, getLearningProgressSnapshot, getProgressCardClass } from "@/lib/learning-progress";

export const dynamic = "force-dynamic";

const LEVEL_COLORS = [
  {
    color: "text-emerald-400",
    border: "hover:border-emerald-500/50",
    dot: "bg-emerald-400",
    badgeBg: "bg-emerald-400/10 text-emerald-300"
  },
  {
    color: "text-cyan-400",
    border: "hover:border-cyan-500/50",
    dot: "bg-cyan-400",
    badgeBg: "bg-cyan-400/10 text-cyan-300"
  },
  {
    color: "text-purple-400",
    border: "hover:border-purple-500/50",
    dot: "bg-purple-400",
    badgeBg: "bg-purple-400/10 text-purple-300"
  }
];

export default async function AdjectiveOrderSentenceBuilderLevelsPage() {
  const progress = await getLearningProgressSnapshot();

  return (
    <>
      <TopBar title="Adjective Order — Sentence Builder" />
      <div className="content-shell pb-8">
        <div className="mb-4">
          <Link
            href="/grammar/adjective-order"
            className="text-xs text-zinc-500 transition-colors hover:text-zinc-300"
          >
            &larr; Back to Adjective Order
          </Link>
        </div>

        <div className="mb-6 rounded-[28px] border border-cyan-400/20 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.22),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_35%),linear-gradient(180deg,_rgba(15,23,42,0.96),_rgba(2,6,23,0.96))] p-5">
          <div className="mb-2 text-[10px] uppercase tracking-[0.28em] text-cyan-300">Adjective Order &middot; Practice</div>
          <h1 className="mb-2 text-3xl font-black text-white">Sentence Builder</h1>
          <p className="text-sm text-zinc-200">
            Choose a difficulty level and place the adjectives in the correct natural order before the noun.
          </p>
        </div>

        <div className="space-y-3">
          {adjectiveOrderLevels.map((lvl, index) => {
            const style = LEVEL_COLORS[index % LEVEL_COLORS.length];
            const status =
              progress.activityStatuses[
                buildProgressKey({
                  section: "grammar",
                  categoryId: "adjective-order",
                  topicId: "sentence-builder",
                  levelId: `level-${lvl.level}`,
                  activityId: "sentence-builder"
                })
              ] ?? "none";

            const progressClass = getProgressCardClass(status);

            return (
              <div key={lvl.level} className={`fade-up fade-up-d${Math.min(index + 1, 5)}`}>
                <Link href={`/grammar/adjective-order/sentence-builder/level-${lvl.level}`}>
                  <Card
                    className={`h-full p-5 cursor-pointer transition-all border ${
                      progressClass || `border-white/10 ${style.border}`
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2.5">
                        <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${style.dot}`} />
                        <div className={`text-base font-bold ${style.color}`}>
                          Level {lvl.level} &mdash; {lvl.title}
                        </div>
                      </div>
                      <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full shrink-0 ${style.badgeBg}`}>
                        {lvl.items.length} sentences
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm leading-relaxed text-zinc-400 pl-5">
                      {lvl.description}
                    </div>
                  </Card>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
