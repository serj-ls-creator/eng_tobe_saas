import { TopBar } from "@/components/layout/TopBar";
import { ComingSoon } from "@/components/ui/ComingSoon";

export default function LeaderboardPage() {
  return (
    <>
      <TopBar title="Leaderboard" />
      <div className="content-shell">
        <ComingSoon 
          title="Leaderboard" 
          description="Compete with other learners and climb the rankings. Coming soon with achievements and rewards." 
        />
      </div>
    </>
  );
}
