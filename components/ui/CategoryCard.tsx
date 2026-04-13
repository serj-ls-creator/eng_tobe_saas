import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { PremiumBadge } from "@/components/ui/PremiumBadge";
import { Card } from "@/components/ui/card";
import { getIcon } from "@/lib/icons";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
  href: string;
  locked?: boolean;
  badge?: string;
}

export function CategoryCard({ title, description, icon, color, href, locked = false, badge }: CategoryCardProps) {
  const Icon = getIcon(icon);

  return (
    <Link href={locked ? "/premium" : href} aria-disabled={locked}>
      <Card className="p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: `${color}25` }}>
            <Icon className="h-5 w-5" style={{ color }} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="mb-1 flex items-center gap-2">
              <p className="truncate text-sm font-semibold">{title}</p>
              {locked ? <PremiumBadge /> : null}
              {badge ? (
                <span className="rounded-full bg-white/5 px-2 py-1 text-[10px] font-medium text-zinc-400">{badge}</span>
              ) : null}
            </div>
            <div className="text-[11px]">
              {description?.includes('||') ? (
                <>
                  <div className="text-zinc-500 truncate">{description.split('||')[0]}</div>
                  <div className="text-cyan-400 font-medium">10 words</div>
                </>
              ) : (
                <div className="text-zinc-500 truncate">{description}</div>
              )}
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-zinc-600" />
        </div>
      </Card>
    </Link>
  );
}
