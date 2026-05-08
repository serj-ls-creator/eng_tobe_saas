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
              "Our order process is conducted by our online reseller Paddle.com. Paddle.com is the Merchant of Record for all our orders. Paddle handles all customer service inquiries and returns.",
              "Premium subscriptions provide access to enhanced features.",
              "Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period.",
              "Prices are subject to change with 30 days' notice via email or in-app notification."
            ]
          },
          {
            title: "4. Refund Policy",
            content: [
              "We offer a 14-day money-back guarantee for initial subscriptions if the service does not meet your expectations or technical issues prevent use. After this period, no refunds are provided for partial months. Please contact Paddle.com or our support for refund requests."
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
              "These terms are governed by the laws of Ukraine. Any disputes shall be resolved in the courts of this jurisdiction or via binding arbitration as provided by Paddle.com"
            ]
          }
        ]}
        footerText="© 2025 English to be. All rights reserved."
      />
    </>
  );
}
