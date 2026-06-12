import { redirect } from "next/navigation";

import LandingPage from "@/components/landing/LandingPage";
import { getCurrentProfile } from "@/lib/isPremium";

export default async function RootPage() {
  const profile = await getCurrentProfile();

  if (profile) {
    redirect("/home");
  }

  return <LandingPage />;
}
