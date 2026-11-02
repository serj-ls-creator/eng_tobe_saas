import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { getCurrentProfile } from "@/lib/isPremium";
import { getSectionProgressPercentages } from "@/lib/learning-progress";
import { ProfileSection } from "@/components/layout/ProfileSection";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "My Profile and Learning Stats",
  description: "Track your English learning progress, daily streak, earned points, and account settings.",
});

export default async function ProfilePage() {
  const profile = await getCurrentProfile();
  const progress = await getSectionProgressPercentages();
  
  if (!profile) {
    redirect("/login");
  }
  
  return <ProfileSection profile={profile} progress={progress} />;
}
