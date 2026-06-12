import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { ContactClient } from "@/components/contact/ContactClient";

export default function ContactPage() {
  return (
    <>
      <TopBar title="Contact Us" />
      <ContactClient />
    </>
  );
}
