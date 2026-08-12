import Link from "next/link";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { PHRASAL_VERBS_CAT } from "@/constants/categories";
import { isPremium } from "@/lib/isPremium";
import { buildProgressKey, getLearningProgressSnapshot } from "@/lib/learning-progress";

export const dynamic = 'force-dynamic';

export default async function PhrasalVerbsPage() {
  const premium = await isPremium();
  const progress = await getLearningProgressSnapshot();
  const topics = PHRASAL_VERBS_CAT.topics ?? [];

  return (
    <>
      <TopBar title="Phrasal verbs" />
      <div className="content-shell pb-4">
        <div className="mb-4">
          <Link 
            href="/home" 
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="mb-6 rounded-[28px] border border-cyan-400/20 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.22),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_35%),linear-gradient(180deg,_rgba(15,23,42,0.96),_rgba(2,6,23,0.96))] p-5">
          <div className="mb-2 text-[10px] uppercase tracking-[0.28em] text-cyan-300">Practice</div>
          <h1 className="mb-2 text-3xl font-black text-white">Phrasal verbs</h1>
          <p className="max-w-md text-sm leading-6 text-zinc-200">
            Master natural verb combinations for work, daily life, emotions, and social interactions
          </p>
        </div>

        <div className="space-y-3">
          {topics.map((topic, index) => {
            const locked = !topic.isFree && !premium;
            const topicStatus = progress.containerStatuses[
              buildProgressKey({ section: "sentences", categoryId: "phrasal-verbs", topicId: topic.id })
            ] ?? "none";

            return (
              <div key={topic.id} className={`fade-up fade-up-d${Math.min(index + 1, 5)}`}>
                <CategoryCard
                  title={topic.name}
                  description={topic.description}
                  icon="Rocket"
                  color="#ec4899"
                  href={`/sentences/phrasal-verbs/${topic.id}`}
                  locked={locked}
                  progressStatus={topicStatus}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
