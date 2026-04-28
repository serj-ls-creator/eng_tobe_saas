import { TopBar } from "@/components/layout/TopBar";
import { SupportContent } from "@/components/technical-support/SupportContent";

export default function AccountDeletionPage() {
  return (
    <>
      <TopBar title="Account Deletion" backHref="/technical-support" />
      <SupportContent
        title="Account Deletion and Data Removal"
        description="How to permanently delete your account and remove all personal data"
        sections={[
          {
            title: "Before You Delete - Important Warnings",
            content: [
              "Account deletion is PERMANENT and cannot be undone",
              "All learning progress (words, lessons, achievements) will be lost",
              "Premium subscriptions will be immediately cancelled",
              "No refund for remaining premium time",
              "You'll need to create new account to use app again"
            ]
          },
          {
            title: "Step-by-Step Deletion Process",
            content: [
              "1. Go to Profile page (bottom navigation → More → Profile)",
              "2. Scroll down and tap 'Delete Account' (red text)",
              "3. Read the warning message carefully",
              "4. Type 'DELETE' to confirm you understand",
              "5. Tap final confirmation button",
              "6. Account will be deleted within 24 hours"
            ]
          },
          {
            title: "What Gets Deleted Immediately",
            content: [
              "All learning progress and statistics",
              "Personal profile information (name, avatar, email)",
              "Premium subscription and payment history",
              "Streak data and achievements",
              "App preferences and custom settings",
              "All stored data in our databases"
            ]
          },
          {
            title: "What We Keep (Anonymized Only)",
            content: [
              "Anonymous usage statistics (no personal info)",
              "Aggregated learning data (trends, not individual)",
              "Bug reports and feedback (no identifiers)",
              "App performance metrics",
              "This helps us improve English to be for everyone"
            ]
          },
          {
            title: "Better Alternatives to Deletion",
            content: [
              "Take a break: Sign out and uninstall app",
              "Cancel premium: Keep account, stop payments",
              "Reset progress: Start fresh, keep profile",
              "Account suspension: Temporary pause option",
              "Data export: Download your progress first"
            ]
          },
          {
            title: "Data Export Before Deletion",
            content: [
              "To export your data before deletion:",
              "Go to Profile → Request Data Export",
              "We'll send CSV file with your progress within 24 hours",
              "Includes: words learned, lessons completed, streak history",
              "Save this file for your records",
              "Wait for export before proceeding with deletion"
            ]
          },
          {
            title: "Common Deletion Problems & Solutions",
            content: [
              "Can't find delete option → Update app to latest version",
              "Delete button not working → Clear cache and try again",
              "Can't access account → Contact support for deletion",
              "Want to undo deletion → Impossible, account is gone",
              "Created new account with same email → Wait 30 days first"
            ]
          }
        ]}
      />
    </>
  );
}
