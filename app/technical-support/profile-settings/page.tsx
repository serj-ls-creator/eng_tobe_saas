import { TopBar } from "@/components/layout/TopBar";
import { SupportContent } from "@/components/technical-support/SupportContent";

export default function ProfileSettingsPage() {
  return (
    <>
      <TopBar title="Profile Settings" backHref="/technical-support" />
      <SupportContent
        title="Profile Settings"
        description="Managing your personal information and preferences"
        sections={[
          {
            title: "Profile Customization Guide",
            content: [
              "Avatar selection: Tap avatar → Choose from 50+ emojis",
              "Display name: Tap name → Type new name → Save",
              "Email updates: Profile → Email → Enter new email → Verify",
              "Character limits: Name max 20 characters, no special symbols",
              "Avatar changes: Instant, no save button needed"
            ]
          },
          {
            title: "Privacy & Security Settings",
            content: [
              "Profile visibility: Currently private (only you can see)",
              "Data sharing: Opt-in only for analytics improvement",
              "Password reset: Use 'Change my password' in login page",
              "Session management: Auto-logout after 30 days inactivity",
              "Account recovery: Linked to your Google account"
            ]
          },
          {
            title: "Learning Preferences Setup",
            content: [
              "Daily goals: Set 5-50 words per day in Profile section",
              "Difficulty: Auto-adjusts based on your performance",
              "Audio settings: Enable/disable pronunciation in each lesson",
              "Theme: Dark mode enabled by default (eye protection)",
              "Reminders: Set daily notification time in device settings"
            ]
          },
          {
            title: "Premium Management",
            content: [
              "Check status: Store page shows current premium expiry",
              "Renew subscription: Store → Buy Premium (extends current)",
              "Payment issues: Contact support with payment receipt",
              "Cancel auto-renew: Store → Manage subscription → Cancel",
              "Restore purchases: Sign out/back in if premium not showing"
            ]
          },
          {
            title: "Data & Progress Management",
            content: [
              "Progress backup: Automatic cloud sync with Google account",
              "Export data: Profile → Request Data Export (CSV file)",
              "Reset progress: Profile → Reset Progress (warning: permanent)",
              "Sync issues: Sign out/back in to force sync",
              "Cross-device: Same Google account = same progress everywhere"
            ]
          },
          {
            title: "Common Profile Issues & Fixes",
            content: [
              "Avatar not saving → Clear browser cache and retry",
              "Name not changing → Check for special characters, try shorter name",
              "Settings not syncing → Check internet connection, restart app",
              "Premium not working → Verify subscription in Store page",
              "Can't save changes → Ensure you're logged in with correct account"
            ]
          },
          {
            title: "Advanced Profile Options",
            content: [
              "Account merge: Contact support if you have multiple accounts",
              "Data deletion: Full account deletion available in Profile",
              "Accessibility: Large text option in device settings",
              "Offline mode: Downloaded lessons work without internet",
              "Language: Currently English only (more languages coming soon)"
            ]
          }
        ]}
      />
    </>
  );
}
