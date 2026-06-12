import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { DeleteAccountClient } from "@/components/account/DeleteAccountClient";

export default function DeleteAccountPage() {
  return (
    <>
      <TopBar title="Delete Account" backHref="/more" />
      <DeleteAccountClient />
    </>
  );
}
