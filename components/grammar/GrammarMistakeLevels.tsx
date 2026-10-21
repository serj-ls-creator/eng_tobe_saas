import Link from "next/link";
import { Card } from "@/components/ui/card";
import { buildProgressKey, getProgressCardClass, type LearningProgressSnapshot } from "@/lib/learning-progress-shared";
import type { MistakeLevel } from "@/data/grammar/find_the_mistake";

const LEVEL_COLORS = [
  { color: "text-emerald-400", border: "hover:border-emerald-500/50", dot: "bg-emerald-400", badgeBg: "bg-emerald-400/10 text-emerald-300" },
  { color: "text-cyan-400", border: "hover:border-cyan-500/50", dot: "bg-cyan-400", badgeBg: "bg-cyan-400/10 text-cyan-300" },
  { color: "text-purple-400", border: "hover:border-purple-500/50", dot: "bg-purple-400", badgeBg: "bg-purple-400/10 text-purple-300" },
  { color: "text-amber-400", border: "hover:border-amber-500/50", dot: "bg-amber-400", badgeBg: "bg-amber-400/10 text-amber-300" },
];

export function GrammarMistakeLevels({
  categoryId,
  topicId,
  title,
  levels,
  basePath,
  backHref,
  progress,
}: {
  categoryId: string;
  topicId: string;
  title: string;
  levels: MistakeLevel[];
  basePath: string;
  backHref: string;
  progress: LearningProgressSnapshot;
}) {
  return (
    <>
      <div className="mb-4">
        <Link href={backHref} className="text-xs text-zinc-500 transition-colors hover:text-zinc-300">&larr; Back to {title}</Link>
      </div>
      <div className="mb-6 section-hero p-5">
        <div className="mb-2 text-[10px] uppercase tracking-[0.28em] text-theme">{title} &middot; Practice</div>
        <h1 className="mb-2 text-3xl font-black text-white">Find the Mistake</h1>
        <p className="text-sm text-zinc-200">Choose a level, then find one incorrect sentence in each set of five.</p>
      </div>
      <div className="space-y-3">
        {levels.map((level, index) => {
          const style = LEVEL_COLORS[index % LEVEL_COLORS.length];
          const status = progress.activityStatuses[buildProgressKey({
            section: "grammar",
            categoryId,
            topicId,
            levelId: `level-${level.level}`,
            activityId: "find-the-mistake",
          })] ?? "none";
          return (
            <Link key={level.level} href={`${basePath}/level-${level.level}`} className={`block fade-up fade-up-d${Math.min(index + 1, 5)}`}>
              <Card className={`h-full border p-5 transition-all ${getProgressCardClass(status) || `border-white/10 ${style.border}`}`}>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${style.dot}`} />
                    <div className={`text-base font-bold ${style.color}`}>Level {level.level} &mdash; {level.title}</div>
                  </div>
                  <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${style.badgeBg}`}>{level.items.length} rounds</span>
                </div>
                <div className="pl-5 text-xs leading-relaxed text-zinc-400 sm:text-sm">{level.description}</div>
              </Card>
            </Link>
          );
        })}
      </div>
    </>
  );
}
