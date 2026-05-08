import { TopBar } from "@/components/layout/TopBar";
import { SupportContent } from "@/components/technical-support/SupportContent";

export default function RefundPolicyPage() {
  return (
    <>
      <TopBar title="Refund Policy" backHref="/technical-support" />
      <SupportContent
        title="Refund Policy"
        description="Last Updated: May 2026"
        sections={[
          {
            title: "1. 14-Day Money-Back Guarantee",
            content: [
              "We stand behind our product. If you're not satisfied with your Premium subscription within 14 days of purchase, we'll refund you — no questions asked. This policy does not affect your statutory rights."
            ]
          },
          {
            title: "2. Eligibility for a Refund",
            content: [
              "Your refund request is submitted within 14 days of the original purchase date.",
              "This is your first refund request for the same subscription plan.",
              "Your account is in good standing (no policy violations)."
            ]
          },
          {
            title: "3. Non-Refundable Cases",
            content: [
              "More than 14 days have passed since the purchase date.",
              "Renewal charges — please cancel your subscription before the renewal date to avoid being charged.",
              "The account was terminated due to a violation of our Terms of Service."
            ]
          },
          {
            title: "4. How to Request a Refund",
            content: [
              "Payments are processed by Paddle.com (our Merchant of Record). You can request a refund by contacting English ToBe support or Paddle's support team directly.",
              "To request a refund through us, please use the Contact Support button below and provide your registered email address and purchase date.",
              "We will process your request within 3–5 business days. Please note that it may take an additional 5–10 business days for the funds to appear on your bank statement, depending on your financial institution."
            ]
          },
          {
            title: "5. Subscription Cancellation",
            content: [
              "You may cancel your Premium subscription at any time from your account settings. Cancellation stops future charges but does not automatically trigger a refund for the current period."
            ]
          }
        ]}
        footerText="© 2025 English to be. All rights reserved."
      />
    </>
  );
}
