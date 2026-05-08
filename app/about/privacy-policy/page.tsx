import { TopBar } from "@/components/layout/TopBar";
import { SupportContent } from "@/components/technical-support/SupportContent";

export default function PrivacyPolicyPage() {
  return (
    <>
      <TopBar title="Privacy Policy" backHref="/about" />
      <SupportContent
        title="Privacy Policy"
        description="Last Updated: May 2026"
        backHref="/about"
        sections={[
          {
            title: "1. Information We Collect",
            content: [
              "Account information: name, email address, Google profile data (provided via Google OAuth).",
              "Learning data: progress, scores, completed lessons, study habits.",
              "Technical data: IP address, device identifiers, browser type."
            ]
          },
          {
            title: "2. How We Use Your Information",
            content: [
              "We use your data to provide the English learning service, personalize your experience, and ensure security. We comply with Google API Services User Data Policy, including the Limited Use requirements."
            ]
          },
          {
            title: "3. Sharing and Disclosure",
            content: [
              "We do not sell your personal information. We share data only with:",
              "Payment Processors: We use Paddle.com for all financial transactions. We do not store your credit card details on our servers; they are processed directly by Paddle.",
              "Cloud Hosting: Data is stored securely on Supabase (infrastructure provided by AWS/DigitalOcean).",
              "Analytics: Tools like Google Analytics or PostHog to understand app usage."
            ]
          },
          {
            title: "4. Children's Privacy",
            content: [
              "Our service is not intended for children under 13 years of age. If we learn we have collected information from a child under 13 without parental consent, we will delete it promptly. For users aged 9-11, the account must be created and managed by a parent or legal guardian."
            ]
          },
          {
            title: "5. Your Rights (GDPR & International Transfers)",
            content: [
              "You have the right to access, correct, or delete your data. As we operate globally, your data may be processed in countries with different data protection laws. We use Standard Contractual Clauses to ensure your data remains protected."
            ]
          },
          {
            title: "6. Data Retention",
            content: [
              "We retain account data while your account is active. Payment records are kept for 7 years to comply with tax and legal requirements."
            ]
          }
        ]}
        footerText="© 2025 English to be. All rights reserved."
      />
    </>
  );
}
