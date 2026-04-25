import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { TechnicalSupportClient } from "@/components/technical-support/TechnicalSupportClient";

export default function TechnicalSupportPage() {
  return (
    <>
      <TopBar title="Technical Support" />
      <TechnicalSupportClient />
    </>
  );
}
