import { redirect } from "next/navigation";

import { getCurrentProfile } from "@/lib/isPremium";
import { getSectionProgressPercentages } from "@/lib/learning-progress";
import { ProfileSection } from "@/components/layout/ProfileSection";

export default async function ProfilePage() {
  const profile = await getCurrentProfile();
  const progress = await getSectionProgressPercentages();
  
  if (!profile) {
    redirect("/login");
  }
  
  return <ProfileSection profile={profile} progress={progress} />;
}
