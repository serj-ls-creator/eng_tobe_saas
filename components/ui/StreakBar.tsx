import { Flame } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { STREAK_DAYS, UI_TEXT } from "@/constants/ui";

interface StreakBarProps {
  streak: number;
  completedTasks: number;
  totalTasks: number;
}

export function StreakBar({ streak, completedTasks, totalTasks }: StreakBarProps) {
  const currentDayIndex = (new Date().getDay() + 6) % 7;
  const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <Card className="p-4">
      <div className="mb-4 flex items-center justify-between">
        {STREAK_DAYS.map((day, index) => {
          const isDone = index < currentDayIndex;
          const isCurrent = index === currentDayIndex;

          return (
            <div key={`${day}-${index}`} className="flex flex-col items-center gap-1">
              <span className={`text-[10px] ${isCurrent ? "font-medium text-white" : "text-zinc-600"}`}>{day}</span>
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs ${
                  isDone
                    ? "border-yellow-500/30 bg-yellow-500/15 text-yellow-400"
                    : "border-white/10 bg-white/[0.03] text-zinc-700"
                }`}
              >
                {isDone ? "OK" : ""}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mb-2 flex items-center justify-between text-xs">
        <span className="text-zinc-500">{UI_TEXT.dailyProgress}</span>
        <span className="text-cyan-400">
          {completedTasks}/{totalTasks} tasks
        </span>
      </div>
      <Progress value={progress} />
      <div className="mt-4 inline-flex items-center gap-1 rounded-full bg-yellow-500/10 px-2.5 py-1 text-xs font-semibold text-yellow-400">
        <Flame className="h-3.5 w-3.5" />
        Day {streak}
      </div>
    </Card>
  );
}
