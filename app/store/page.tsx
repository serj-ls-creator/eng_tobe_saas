import { TopBar } from "@/components/layout/TopBar";
import { ComingSoon } from "@/components/ui/ComingSoon";

export default function StorePage() {
  return (
    <>
      <TopBar title="Store" />
      <div className="content-shell">
        <ComingSoon 
          title="Store" 
          description="Get premium features and hints to enhance your learning experience. Coming soon with various purchase options." 
        />
      </div>
    </>
  );
}
