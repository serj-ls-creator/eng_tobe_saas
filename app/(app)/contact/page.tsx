import type { Metadata } from "next";
import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { ContactClient } from "@/components/contact/ContactClient";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Support and Send Us Feedback",
  description: "Have questions or suggestions? Contact the English to be team for help and support.",
});

export default function ContactPage() {
  return (
    <>
      <TopBar title="Contact Us" />
      <ContactClient />
    </>
  );
}
