import { TopBar } from "@/components/layout/TopBar";
import { SupportContent } from "@/components/technical-support/SupportContent";

export default function GoogleSignInPage() {
  return (
    <>
      <TopBar title="Google Sign-In Issues" backHref="/technical-support" />
      <SupportContent
        title="Issues with Google Sign-In"
        description="Troubleshooting problems with Google authentication"
        sections={[
          {
            title: "Common Issues & Solutions",
            content: [
              "Sign-in button not responding → Refresh page and check internet connection",
              "Error 'Authentication failed' → Clear browser cache and try again",
              "Redirect loop after sign-in → Disable browser extensions and retry",
              "Account not found → Check you're using the correct Google account",
              "'Access denied' error → Ensure Google services are enabled in your account"
            ]
          },
          {
            title: "Step-by-Step Troubleshooting",
            content: [
              "1. Clear browser cache: Ctrl+Shift+Delete (Windows) or Cmd+Shift+Delete (Mac)",
              "2. Disable ad blockers and browser extensions temporarily",
              "3. Try a different browser (Chrome, Firefox, Safari)",
              "4. Check your internet connection speed and stability",
              "5. Ensure your Google account has 2FA disabled or access codes ready",
              "6. Restart your device and try again"
            ]
          },
          {
            title: "Account Recovery",
            content: [
              "If you can't access your existing English to be account:",
              "Go to Settings → Google → Manage your account → Security",
              "Check 'Third-party apps with account access'",
              "Remove 'English to be' and try signing in fresh",
              "This will reset the connection but preserve your progress"
            ]
          },
          {
            title: "Mobile App Issues",
            content: [
              "Update the English to be app to latest version",
              "Clear app cache: Settings → Apps → English to be → Storage → Clear cache",
              "Ensure Google Play Services are updated (Android)",
              "Check App Store for iOS updates (iPhone/iPad)",
              "Try signing in with Google Chrome browser instead of app"
            ]
          },
          {
            title: "Advanced Solutions",
            content: [
              "Check if your Google account has any security alerts",
              "Verify your account age is 13+ (Google requirement)",
              "Ensure you're not in a restricted network (school/work)",
              "Try signing in from a different network connection",
              "Contact Google support if account has issues"
            ]
          }
        ]}
      />
    </>
  );
}
