import { TopBar } from "@/components/layout/TopBar";
import { SupportContent } from "@/components/technical-support/SupportContent";

export default function DataLossPage() {
  return (
    <>
      <TopBar title="Data Loss Issues" backHref="/technical-support" />
      <SupportContent
        title="Data Loss After Logging In"
        description="What to do when your progress or data appears to be missing"
        sections={[
          {
            title: "Data Loss Issues & Quick Fixes",
            content: [
              "Progress reset to zero → Sign out and sign back in completely",
              "Lessons showing incomplete → Wait 2-3 minutes for data sync",
              "Premium status not recognized → Check subscription and refresh page",
              "Profile settings missing → Clear browser cache and reload",
              "Streak count reset → Check if you missed a day and wait for reset"
            ]
          },
          {
            title: "Step-by-Step Data Recovery",
            content: [
              "1. Sign out: Profile → Sign Out → Confirm",
              "2. Clear browser cache: Ctrl+Shift+Delete → Select 'All time'",
              "3. Close all browser tabs and restart browser",
              "4. Go to english-tobe.vercel.app and sign in with same Google account",
              "5. Wait 3-5 minutes for full data synchronization",
              "6. Refresh the page if progress doesn't appear immediately"
            ]
          },
          {
            title: "Premium Status Recovery",
            content: [
              "If premium features aren't working:",
              "Check your email for subscription confirmation",
              "Go to Store page to verify premium status",
              "Contact support with payment receipt if needed",
              "Try purchasing premium again (won't charge if already active)",
              "Check if subscription expired and renew if necessary"
            ]
          },
          {
            title: "Cross-Device Sync Solutions",
            content: [
              "Data not syncing between devices?",
              "Ensure same Google account on all devices",
              "Check internet connection on all devices",
              "Update app to latest version on all devices",
              "Sign out and back in on all devices",
              "Wait 5-10 minutes for cross-device synchronization"
            ]
          },
          {
            title: "Account Merge Solutions",
            content: [
              "If you accidentally created multiple accounts:",
              "Identify which account has your main progress",
              "Contact support to merge accounts",
              "Provide email addresses of all accounts",
              "Specify which account should be the primary",
              "We'll merge all progress within 24-48 hours"
            ]
          },
          {
            title: "Emergency Data Recovery",
            content: [
              "If all else fails, emergency steps:",
              "Try accessing from incognito mode (different browser session)",
              "Use a different device or browser",
              "Check if data appears on mobile app vs web",
              "Screenshot any remaining progress for reference",
              "Contact support immediately with detailed information"
            ]
          }
        ]}
      />
    </>
  );
}
