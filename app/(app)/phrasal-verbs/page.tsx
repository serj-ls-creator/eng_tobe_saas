import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { PHRASAL_VERBS_CAT } from "@/constants/categories";
import { PHRASAL_VERB_TOPIC_STYLES } from "@/constants/ui";
import { isPremium } from "@/lib/isPremium";
import { buildProgressKey, getLearningProgressSnapshot } from "@/lib/learning-progress";
import { createPageMetadata } from "@/lib/metadata";
import phverbsArt from "@/data/pic/phverbs.png";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = createPageMetadata({
  title: "Essential English Phrasal Verbs Practice",
  description: "Master essential English phrasal verbs with clear meanings, example sentences, and quizzes.",
});

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
            className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <ArrowLeft className="h-3 w-3" /> Back to Home
          </Link>
        </div>

        <div className="mb-6 section-hero relative overflow-hidden p-4">
          <Image
            src={phverbsArt}
            alt=""
            aria-hidden="true"
            draggable={false}
            className="pointer-events-none absolute right-0 top-1/2 w-[60%] -translate-y-1/2 select-none opacity-80"
          />
          <div className="relative z-10 mb-2 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-theme" aria-hidden="true" />
            <span className="text-xs font-medium text-zinc-400">Practice</span>
          </div>
          <h1 className="relative z-10 mb-2 text-3xl font-semibold text-foreground">Phrasal verbs</h1>
          <p className="relative z-10 max-w-md text-sm leading-relaxed text-zinc-300">
            Master natural verb combinations for work, daily life, emotions, and social interactions
          </p>
        </div>

        <div className="space-y-2">
          {topics.map((topic, index) => {
            const topicStyle = PHRASAL_VERB_TOPIC_STYLES[topic.id as keyof typeof PHRASAL_VERB_TOPIC_STYLES];
            const locked = !topic.isFree && !premium;
            const topicStatus = progress.containerStatuses[
              buildProgressKey({ section: "sentences", categoryId: "phrasal-verbs", topicId: topic.id })
            ] ?? "none";

            return (
              <div key={topic.id} className={`fade-up fade-up-d${Math.min(index + 1, 5)}`}>
                <CategoryCard
                  title={topic.name}
                  description={topic.description}
                  icon={topicStyle?.icon ?? "Rocket"}
                  color={topicStyle?.color ?? "#A78BFA"}
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
