import { cn } from "@/lib/utils";

interface ProgressProps {
  value: number;
  className?: string;
}

export function Progress({ value, className }: ProgressProps) {
  return (
    <div className={cn("h-1.5 w-full overflow-hidden rounded-full bg-white/[0.04]", className)}>
      <div
        className="h-full rounded-full bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-500"
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  );
}
