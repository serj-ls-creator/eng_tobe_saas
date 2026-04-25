import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { AboutClient } from "@/components/about/AboutClient";

export default function AboutPage() {
  return (
    <>
      <TopBar title="About App" />
      <AboutClient />
    </>
  );
}
