import Link from "next/link";
import { BookOpen, Clock, PenLine, type LucideIcon } from "lucide-react";

import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { Card } from "@/components/ui/card";
import { buildProgressKey, getLearningProgressSnapshot, getProgressCardClass } from "@/lib/learning-progress";

export const dynamic = "force-dynamic";

type AdjectiveOrderActivity =
  | {
      id: string;
      title: string;
      description: string;
      href: string;
      icon: LucideIcon;
      available: true;
    }
  | {
      id: string;
      title: string;
      description: string;
      icon?: LucideIcon;
      available: false;
    };

const ACTIVITIES: AdjectiveOrderActivity[] = [
  {
    id: "rule",
    title: "Rule",
    description: "Opinion &rarr; Size &rarr; Age &rarr; Shape...",
    href: "/grammar/adjective-order/rule",
    icon: BookOpen,
    available: true
  },
  {
    id: "sentence-builder",
    title: "Sentence builder",
    description: "Arrange adjectives in order",
    href: "/grammar/adjective-order/sentence-builder",
    icon: PenLine,
    available: true
  },
  { id: "find-the-mistake", title: "Find the Mistake", description: "Coming Soon", available: false },
  { id: "multiple-choice", title: "Multiple Choice", description: "Coming Soon", available: false }
];

export default async function AdjectiveOrderPage() {
  const progress = await getLearningProgressSnapshot();

  const getActivityStatus = (activityId: string) => {
    if (activityId === "rule") {
      return (
        progress.activityStatuses[
          buildProgressKey({
            section: "grammar",
            categoryId: "adjective-order",
            topicId: "rule",
            activityId: "rule"
          })
        ] ?? "none"
      );
    }
    if (activityId === "sentence-builder") {
      return (
        progress.containerStatuses[
          buildProgressKey({
            section: "grammar",
            categoryId: "adjective-order",
            topicId: "sentence-builder"
          })
        ] ?? "none"
      );
    }
    return "none";
  };

  return (
    <>
      <TopBar title="Adjective Order" />
      <div className="content-shell pb-8">
        <div className="mb-4">
          <Link href="/grammar" className="text-xs text-zinc-500 transition-colors hover:text-zinc-300">
            &larr; Back to Grammar
          </Link>
        </div>

        <div className="mb-6 rounded-[28px] border border-cyan-400/20 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.22),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_35%),linear-gradient(180deg,_rgba(15,23,42,0.96),_rgba(2,6,23,0.96))] p-5">
          <div className="mb-2 text-[10px] uppercase tracking-[0.28em] text-cyan-300">Grammar</div>
          <h1 className="mb-2 text-3xl font-black text-white">Adjective Order</h1>
          <p className="max-w-md text-sm leading-6 text-zinc-200">
            Master the natural, fixed order of multiple adjectives before a noun in English.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {ACTIVITIES.map((activity, index) => {
            const status = getActivityStatus(activity.id);
            const card = (
              <Card
                className={`fade-up fade-up-d${Math.min(index + 1, 5)} min-h-[126px] overflow-hidden rounded-[24px] border p-4 transition-all ${
                  activity.available
                    ? `${getProgressCardClass(status) || "border-white/10"} hover:border-cyan-300/40 hover:bg-white/[0.08]`
                    : "border-white/10 opacity-55"
                }`}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                  {activity.available && activity.icon ? (
                    <activity.icon className="h-5 w-5" />
                  ) : (
                    <Clock className="h-5 w-5" />
                  )}
                </div>
                <div className="mb-2 text-sm font-semibold text-white">{activity.title}</div>
                <div
                  className={`text-[11px] leading-relaxed ${activity.available ? "text-cyan-300" : "text-zinc-500"}`}
                  dangerouslySetInnerHTML={{ __html: activity.description }}
                />
              </Card>
            );

            return activity.available ? (
              <Link key={activity.id} href={activity.href}>
                {card}
              </Link>
            ) : (
              <div key={activity.id} aria-disabled="true">
                {card}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
