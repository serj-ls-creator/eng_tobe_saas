import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { SettingsClient } from "@/components/settings/SettingsClient";

export default function SettingsPage() {
  return (
    <>
      <TopBar title="Settings" />
      <SettingsClient />
    </>
  );
}
