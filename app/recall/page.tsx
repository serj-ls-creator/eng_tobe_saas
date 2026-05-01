import Link from "next/link";

import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { Card } from "@/components/ui/card";
import { getRecallSnapshot, type LearningSection } from "@/lib/learning-progress";

const SECTION_TITLES: Record<LearningSection, string> = {
  words: "Words",
  sentences: "Sentences",
  idioms: "Idioms"
};

export default async function RecallPage() {
  const recall = await getRecallSnapshot();

  return (
    <>
      <TopBar title="Recall" />
      <div className="content-shell">
        <div className="mb-4">
          <Link
            href="/"
            className="text-xs text-zinc-500 transition-colors hover:text-zinc-300"
          >
            {"<-"} Back to Home
          </Link>
        </div>

        {!recall.isLoggedIn ? (
          <Card className="p-5">
            <h2 className="mb-2 text-lg font-semibold text-white">Recall is ready</h2>
            <p className="text-sm text-zinc-400">
              Sign in to save completed activities and automatically send them here for review.
            </p>
          </Card>
        ) : (
          <div className="space-y-5 pb-4">
            {(Object.keys(SECTION_TITLES) as LearningSection[]).map((section) => (
              <section key={section}>
                <div className="mb-3 flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-white">{SECTION_TITLES[section]}</h2>
                  <span className="text-xs text-zinc-500">{recall.sections[section].length} due</span>
                </div>

                {recall.sections[section].length === 0 ? (
                  <Card className="p-4">
                    <p className="text-sm text-zinc-500">Nothing to review here yet.</p>
                  </Card>
                ) : (
                  <div className="space-y-3">
                    {recall.sections[section].map((item) => (
                      <Link key={item.key} href={item.href}>
                        <Card className="p-4">
                          <div className="mb-2 flex items-center justify-between gap-3">
                            <div className="min-w-0">
                              <div className="truncate text-sm font-semibold text-white">{item.title}</div>
                              <div className="text-[11px] text-zinc-500">{item.activityName}</div>
                            </div>
                            <span className="rounded-full border border-white/10 px-2 py-1 text-[10px] text-zinc-300">
                              {item.scoreLabel}
                            </span>
                          </div>
                          <div className="text-[11px] text-cyan-400">Review now</div>
                        </Card>
                      </Link>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
