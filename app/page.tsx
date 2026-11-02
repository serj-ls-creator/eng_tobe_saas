import type { Metadata } from "next";
import { redirect } from "next/navigation";

import LandingPage from "@/components/landing/LandingPage";
import { getCurrentProfile } from "@/lib/isPremium";

export const metadata: Metadata = {
  title: {
    absolute: "Learn English - Small steps. Real progress! | English to be",
  },
  description: "Learn English step by step with daily vocabulary, grammar rules, and fun interactive practice.",
};

export default async function RootPage() {
  const profile = await getCurrentProfile();

  if (profile) {
    redirect("/home");
  }

  return <LandingPage />;
}
