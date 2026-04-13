import { redirect } from "next/navigation";

import { getCurrentProfile } from "@/lib/isPremium";
import { ProfileSection } from "@/components/layout/ProfileSection";

export default async function ProfilePage() {
  const profile = await getCurrentProfile();
  
  if (!profile) {
    redirect("/login");
  }
  
  return <ProfileSection profile={profile} />;
}
