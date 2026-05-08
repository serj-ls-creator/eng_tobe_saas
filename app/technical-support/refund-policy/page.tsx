import { TopBar } from "@/components/layout/TopBar";
import { SupportContent } from "@/components/technical-support/SupportContent";

export default function RefundPolicyPage() {
  return (
    <>
      <TopBar title="Refund Policy" backHref="/technical-support" />
      <SupportContent
        title="Refund Policy"
        description="Our 14-day money-back guarantee and refund terms for Premium subscriptions"
        sections={[
          {
            title: "14-Day Money-Back Guarantee",
            content: [
              "We stand behind our product. If you're not satisfied with your Premium subscription within 14 days of purchase, we'll refund you — no questions asked."
            ]
          },
          {
            title: "1. Overview",
            content: [
              "This Refund Policy applies to all Premium subscription purchases made through our platform",
              "We want you to feel confident when upgrading, which is why we offer a full refund within the first 14 days",
              "The policy is designed to protect your investment while ensuring fair use of our service"
            ]
          },
          {
            title: "2. Eligibility for a Refund",
            content: [
              "Your refund request is submitted within 14 days of the original purchase date",
              "This is your first refund request for the same subscription plan",
              "Your account is in good standing (no fraudulent activity or policy violations)"
            ]
          },
          {
            title: "3. Non-Refundable Cases",
            content: [
              "More than 14 days have passed since the purchase date",
              "The subscription has already been refunded previously",
              "The account was terminated due to a violation of our Terms of Service",
              "Renewal charges — please cancel your subscription before the renewal date to avoid being charged"
            ]
          },
          {
            title: "4. How to Request a Refund",
            content: [
              "To request a refund, please contact us by email with the following information:",
              "Your registered email address",
              "Date of purchase",
              "Reason for the refund (optional, but helpful)",
              "We will process your request within 3–5 business days. The refunded amount will be returned to your original payment method."
            ]
          },
          {
            title: "5. Subscription Cancellation",
            content: [
              "You may cancel your Premium subscription at any time from your account settings",
              "Cancellation stops future charges but does not automatically trigger a refund",
              "If you are within the 14-day window, please contact us to request a refund separately"
            ]
          },
          {
            title: "6. Changes to This Policy",
            content: [
              "We reserve the right to update this Refund Policy at any time",
              "Changes will be posted on this page with an updated date",
              "Continued use of the service after changes constitutes acceptance of the updated policy"
            ]
          }
        ]}
        footerText="© 2025 English to be. All rights reserved. · Last updated: November 2025 · Effective immediately"
      />
    </>
  );
}
