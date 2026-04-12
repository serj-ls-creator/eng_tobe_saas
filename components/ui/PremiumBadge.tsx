import { Lock } from "lucide-react";

import { UI_TEXT } from "@/constants/ui";

export function PremiumBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-zinc-300">
      <Lock className="h-3 w-3" />
      {UI_TEXT.lockedLabel}
    </span>
  );
}
