import Link from "next/link";
import { TopBar } from "@/components/layout/TopBar";
import { ComingSoon } from "@/components/ui/ComingSoon";

export default function RecallPage() {
  return (
    <>
      <TopBar title="Recall" />
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
          title="Recall" 
          description="Practice and review what you've learned. Coming soon with spaced repetition and personalized exercises." 
        />
      </div>
    </>
  );
}
