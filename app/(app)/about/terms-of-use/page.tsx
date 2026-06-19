import { TopBar } from "@/components/layout/TopBar";
import { SupportContent } from "@/components/technical-support/SupportContent";

export default function TermsOfUsePage() {
  return (
    <>
      <TopBar title="Terms of Use" backHref="/about" />
      <SupportContent
        title="Terms of Use"
        description="Last Updated: May 2026"
        backHref="/about"
        sections={[
          {
            title: "1. Acceptance of Terms",
            content: [
              "By accessing and using English ToBe, you accept and agree to be bound by these terms. If you do not agree, please do not use our service. We reserve the right to modify these terms at any time. Continued use constitutes acceptance of changes."
            ]
          },
          {
            title: "2. Service Description",
            content: [
              "English ToBe is a mobile-first English learning application providing vocabulary, idioms, educational games, and AI-assisted tools. We offer both free and premium subscription options."
            ]
          },
          {
            title: "3. Subscription and Payment Terms",
            content: [
              "Our order process is conducted by our authorized payment processor. The processor handles all customer service inquiries and returns.",
              "Premium subscriptions provide access to enhanced features.",
              "Subscriptions automatically renew unless cancelled at least 24 hours before end of current period.",
              "Prices are subject to change with 30 days' notice via email or in-app notification."
            ]
          },
          {
            title: "4. Refund Policy",
            content: [
              "We offer a 14-day money-back guarantee for initial subscriptions if service does not meet your expectations or technical issues prevent use. After this period, no refunds are provided for partial months. Please contact our support for refund requests."
            ]
          },
          {
            title: "5. User Accounts",
            content: [
              "Users must be at least 13 years old.",
              "You are responsible for account confidentiality and all activities under your account.",
              "One account per person is permitted."
            ]
          },
          {
            title: "6. Intellectual Property",
            content: [
              "All content, games, and AI-generated learning materials are owned by English ToBe. Users are granted a limited, non-exclusive license for personal, non-commercial use."
            ]
          },
          {
            title: "7. Prohibited Activities",
            content: [
              "Illegal use, attempting to disrupt our servers, or using automated tools (bots) to scrape content is strictly prohibited and will lead to immediate account termination."
            ]
          },
          {
            title: "8. Governing Law",
            content: [
              "These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of Ukraine, without regard to its conflict of law principles. Any disputes arising out of or relating to these terms shall be subject to the exclusive jurisdiction of the competent courts in this jurisdiction."
            ]
          },
          {
            title: "9. Contact & Support",
            content: [
              "If you have any questions about these Terms of Use, please contact us at support@englishtobe.info — we typically respond within 24–48 hours on business days."
            ]
          }
        ]}
        footerText="© 2025 English to be. All rights reserved."
      />
    </>
  );
}
