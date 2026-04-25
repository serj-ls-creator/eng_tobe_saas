import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { MoreClient } from "@/components/more/MoreClient";

export default function MorePage() {
  return (
    <>
      <TopBar title="More" />
      <MoreClient />
    </>
  );
}
