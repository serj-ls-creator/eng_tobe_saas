import { TopBar } from "@/components/layout/TopBar";
import { SupportContent } from "@/components/technical-support/SupportContent";

export default function PrivacyPolicyPage() {
  return (
    <>
      <TopBar title="Privacy Policy" backHref="/about" />
      <SupportContent
        title="Privacy Policy"
        description="How we collect, use, and protect your personal information"
        sections={[
          {
            title: "Information We Collect",
            content: [
              "Account information: name, email address, Google profile data",
              "Learning data: progress, scores, completed lessons, study habits",
              "Usage data: app interactions, time spent, feature usage patterns",
              "Device information: browser type, operating system, device identifiers",
              "Technical data: IP address, browser version, screen resolution"
            ]
          },
          {
            title: "How We Use Your Information",
            content: [
              "Provide and maintain our English learning service",
              "Personalize learning experience based on your progress and preferences",
              "Communicate with you about service updates and support",
              "Analyze usage patterns to improve our app and educational content",
              "Ensure security and prevent fraudulent activities",
              "Comply with legal obligations and protect our rights"
            ]
          },
          {
            title: "Data Storage and Security",
            content: [
              "All data is stored securely using industry-standard encryption",
              "We implement appropriate technical and organizational security measures",
              "Access to personal data is limited to authorized personnel only",
              "Regular security audits and vulnerability assessments are conducted",
              "Data is backed up regularly to prevent loss",
              "We retain data only as long as necessary for service provision"
            ]
          },
          {
            title: "Sharing and Disclosure of Information",
            content: [
              "We do not sell or rent your personal information to third parties",
              "We may share aggregated, anonymized data for research and improvement",
              "Service providers: payment processors, cloud hosting, analytics services",
              "Legal compliance: when required by law or to protect our rights",
              "Business transfers: in case of merger, acquisition, or sale of assets",
              "With your explicit consent for specific purposes"
            ]
          },
          {
            title: "Cookies and Tracking Technologies",
            content: [
              "We use essential cookies for basic site functionality and security",
              "Analytics cookies help us understand how our service is used",
              "Preference cookies remember your settings and personalization choices",
              "You can control cookies through your browser settings",
              "Disabling cookies may affect some features of our service",
              "Third-party services may place their own cookies according to their policies"
            ]
          },
          {
            title: "Your Rights and Choices",
            content: [
              "Access: Request a copy of your personal information we hold",
              "Correction: Update or correct inaccurate personal information",
              "Deletion: Request deletion of your personal data (with exceptions)",
              "Portability: Request transfer of your data to another service",
              "Opt-out: Limit certain data collection and marketing communications",
              "Complaint: File a complaint with relevant privacy authorities"
            ]
          },
          {
            title: "Children's Privacy",
            content: [
              "Our service is not intended for children under 13 years of age",
              "We do not knowingly collect personal information from children",
              "If we learn we have collected such information, we will delete it promptly",
              "Parents may contact us to review or delete their child's information",
              "We implement age verification measures where appropriate",
              "Educational content is designed for general audience learning"
            ]
          },
          {
            title: "International Data Transfers",
            content: [
              "Your data may be transferred to and processed in countries other than your own",
              "We ensure appropriate safeguards are in place for international transfers",
              "We comply with applicable data protection laws for cross-border data flows",
              "Standard contractual clauses are used for EU data transfers when required",
              "You may request information about specific data transfer mechanisms",
              "International transfers are limited to what is necessary for service provision"
            ]
          },
          {
            title: "Data Retention",
            content: [
              "Account data: Retained while your account remains active",
              "Learning progress: Retained to provide continuous service experience",
              "Payment records: Retained for legal and accounting requirements (7 years)",
              "Support communications: Retained for service improvement and quality assurance",
              "Marketing data: Retained until you opt out or withdraw consent",
              "Deleted data: Securely erased within 30 days of deletion request"
            ]
          },
          {
            title: "Changes to This Privacy Policy",
            content: [
              "We may update this privacy policy to reflect changes in our practices",
              "Significant changes will be communicated through app notifications",
              "Minor changes will be posted on our website without additional notice",
              "Users will be notified at least 30 days before material changes take effect",
              "Continued use of the service indicates acceptance of updated policy",
              "Date of last revision will always be displayed at the top of this policy"
            ]
          },
          {
            title: "Contact and Complaint Procedures",
            content: [
              "Privacy questions: Contact our privacy team through the app",
              "Data subject requests: Submit through your profile settings or email",
              "Complaints: We will acknowledge within 5 business days and respond within 30 days",
              "Data protection officer: Available for serious privacy concerns",
              "Regulatory complaints: We will cooperate with privacy authorities",
              "Emergency requests: Prioritized handling for data security incidents"
            ]
          }
        ]}
      />
    </>
  );
}
