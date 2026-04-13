import Link from "next/link";
import { TopBar } from "@/components/layout/TopBar";
import { ComingSoon } from "@/components/ui/ComingSoon";

export default function LeaderboardPage() {
  return (
    <>
      <TopBar title="Leaderboard" />
      <div className="content-shell">
        <div className="mb-4">
          <Link 
            href="/" 
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
        <ComingSoon 
          title="Leaderboard" 
          description="Compete with other learners and climb the rankings. Coming soon with achievements and rewards." 
        />
      </div>
    </>
  );
}
