import Link from "next/link";
import { TopBar } from "@/components/layout/TopBar";
import { ComingSoon } from "@/components/ui/ComingSoon";

export default function StorePage() {
  return (
    <>
      <TopBar title="Store" />
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
          title="Store" 
          description="Get premium features and hints to enhance your learning experience. Coming soon with various purchase options." 
        />
      </div>
    </>
  );
}
