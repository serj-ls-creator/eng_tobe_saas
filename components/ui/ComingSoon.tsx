import { Sparkles } from "lucide-react";

import { Card } from "@/components/ui/card";
import { UI_TEXT } from "@/constants/ui";

interface ComingSoonProps {
  title: string;
  description: string;
}

export function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <Card className="border border-dashed border-white/10 p-6 text-center">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/5">
        <Sparkles className="h-7 w-7 text-cyan-400" />
      </div>
      <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-zinc-600">{UI_TEXT.comingSoon}</p>
      <h3 className="mb-2 text-sm font-semibold">{title}</h3>
      <p className="text-xs leading-relaxed text-zinc-500">{description}</p>
    </Card>
  );
}
