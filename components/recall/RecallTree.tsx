"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { PremiumBadge } from "@/components/ui/PremiumBadge";
import type { RecallItem } from "@/lib/learning-progress-shared";
import { isRecallItemPremiumLocked } from "@/lib/learning-progress-shared";

export interface RecallTreeNode {
  id: string;
  label: string;
  children?: RecallTreeNode[];
  items?: RecallItem[];
}

function dueLabel(dueAt: string): string {
  const days = Math.floor((new Date(dueAt).getTime() - Date.now()) / 86400000);
  return days < 0 ? `Overdue ${Math.abs(days)}d` : days === 0 ? "Due today" : `Due in ${days}d`;
}

export function RecallTree({ nodes, premium }: { nodes: RecallTreeNode[]; premium: boolean }) {
  const [open, setOpen] = useState<string[]>([]);
  const toggle = (id: string) => setOpen(current => current.includes(id) ? current.filter(x => x !== id) : [...current, id]);

  function renderNode(node: RecallTreeNode, depth = 0) {
    const expanded = open.includes(node.id);
    const hasChildren = Boolean(node.children?.length);
    const count = hasChildren ? node.children!.reduce((sum, child) => sum + countItems(child), 0) : node.items?.length ?? 0;
    return <div key={node.id} className={depth ? "ml-3 border-l border-white/10 pl-3" : ""}>
      <Card className="overflow-hidden border-border bg-card">
        <button type="button" onClick={() => toggle(node.id)} aria-expanded={expanded} className="flex w-full items-center gap-3 p-4 text-left transition-colors hover:bg-white/[0.03]">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-control bg-cyan-400/10 text-cyan-300"><span className="text-xs font-bold">{depth === 0 ? "↻" : "•"}</span></span>
          <span className="min-w-0 flex-1"><span className="block truncate text-sm font-semibold text-white">{node.label}</span><span className="mt-1 block text-[11px] text-zinc-500">{count} {count === 1 ? "activity" : "activities"} to review</span></span>
          {expanded ? <ChevronDown className="h-5 w-5 text-zinc-500" /> : <ChevronRight className="h-5 w-5 text-zinc-500" />}
        </button>
        {expanded ? <div className="space-y-2 border-t border-white/5 p-3">{hasChildren ? node.children!.map(child => renderNode(child, depth + 1)) : node.items?.map(item => {
          const locked = isRecallItemPremiumLocked(item, premium);
          return <Link key={item.key} href={locked ? "/store" : item.href} className="block rounded-xl border border-white/8 bg-white/[0.03] p-3 transition-colors hover:bg-white/[0.06]">
            <div className="flex items-center justify-between gap-3"><div className="min-w-0"><div className="mb-1 flex items-center gap-2"><span className="truncate text-sm font-semibold text-white">{item.activityName}</span>{locked ? <PremiumBadge /> : null}</div><div className="flex items-center gap-2 text-[11px]"><span className="text-zinc-500">{item.scoreLabel}</span><span className="text-zinc-600">•</span><span className="text-zinc-400">{dueLabel(item.dueAt)}</span></div></div><span className="shrink-0 text-[11px] text-cyan-400">{locked ? "Premium required" : "Review now"}</span></div>
          </Link>;
        })}</div> : null}
      </Card>
    </div>;
  }

  return <div className="space-y-3">{nodes.map(node => renderNode(node))}</div>;
}

function countItems(node: RecallTreeNode): number {
  return node.children?.reduce((sum, child) => sum + countItems(child), 0) ?? node.items?.length ?? 0;
}
