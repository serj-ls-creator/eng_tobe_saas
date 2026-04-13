import { TopBar } from "@/components/layout/TopBar";
import { ComingSoon } from "@/components/ui/ComingSoon";

export default function RecallPage() {
  return (
    <>
      <TopBar title="Recall" />
      <div className="content-shell">
        <ComingSoon 
          title="Recall" 
          description="Practice and review what you've learned. Coming soon with spaced repetition and personalized exercises." 
        />
      </div>
    </>
  );
}
