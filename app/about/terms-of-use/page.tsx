import { TopBar } from "@/components/layout/TopBar";
import { SupportContent } from "@/components/technical-support/SupportContent";

export default function TermsOfUsePage() {
  return (
    <>
      <TopBar title="Terms of Use" backHref="/about" />
      <SupportContent
        title="Terms of Use"
        description="Legal terms and conditions for using English to be"
        sections={[
          {
            title: "Acceptance of Terms",
            content: [
              "By accessing and using English to be, you accept and agree to be bound by these terms",
              "If you do not agree to these terms, please do not use our service",
              "We reserve the right to modify these terms at any time",
              "Continued use of the service constitutes acceptance of any changes",
              "Users are responsible for reviewing terms periodically"
            ]
          },
          {
            title: "Service Description",
            content: [
              "English to be is a mobile-first English learning application",
              "We provide vocabulary, idioms, sentences learning, and educational games",
              "Service includes free and premium subscription options",
              "Content is provided for educational purposes only",
              "We strive for accuracy but do not guarantee perfect content"
            ]
          },
          {
            title: "User Accounts and Responsibilities",
            content: [
              "Users must be at least 13 years old to create an account",
              "You are responsible for maintaining the confidentiality of your account",
              "You must provide accurate and complete registration information",
              "One account per person is permitted unless authorized otherwise",
              "You are responsible for all activities under your account"
            ]
          },
          {
            title: "Subscription and Payment Terms",
            content: [
              "Premium subscriptions are available for enhanced features",
              "Payment is processed through secure third-party payment providers",
              "Subscriptions automatically renew unless cancelled",
              "No refunds for partial months of subscription",
              "Prices are subject to change with 30 days notice"
            ]
          },
          {
            title: "Intellectual Property Rights",
            content: [
              "All content, features, and functionality are owned by English to be",
              "Users may not copy, modify, distribute, or reverse engineer our service",
              "User-generated content remains the property of the user",
              "We grant users a limited, non-exclusive license to use our service",
              "All trademarks, service marks, and trade names are our property"
            ]
          },
          {
            title: "Privacy and Data Protection",
            content: [
              "We collect and use personal information as described in our Privacy Policy",
              "We implement reasonable security measures to protect user data",
              "We do not sell personal information to third parties",
              "Users have rights to access, correct, or delete their personal data",
              "Data processing complies with applicable privacy laws"
            ]
          },
          {
            title: "Prohibited Activities",
            content: [
              "Using the service for any illegal or unauthorized purpose",
              "Attempting to gain unauthorized access to our systems",
              "Interfering with or disrupting the service or servers",
              "Using automated tools to access the service excessively",
              "Impersonating any person or entity or misrepresenting your identity"
            ]
          },
          {
            title: "Disclaimers and Limitations",
            content: [
              "Service is provided 'as is' without warranties of any kind",
              "We do not guarantee uninterrupted or error-free service",
              "We are not responsible for any loss of data or user-generated content",
              "Educational outcomes are not guaranteed and vary by individual effort",
              "We are not liable for any indirect, incidental, or consequential damages"
            ]
          },
          {
            title: "Termination",
            content: [
              "Users may terminate their account at any time through the app",
              "We reserve the right to suspend or terminate accounts for violations",
              "Termination results in loss of access to premium features",
              "Data deletion requests will be processed according to our Privacy Policy",
              "We may modify or discontinue the service at any time without notice"
            ]
          },
          {
            title: "Governing Law and Disputes",
            content: [
              "These terms are governed by the laws of the jurisdiction where we operate",
              "Disputes will be resolved through binding arbitration when possible",
              "Users waive right to class action lawsuits and jury trials",
              "We retain the right to seek injunctive relief for violations",
              "Severability clause applies if any provision is found invalid"
            ]
          },
          {
            title: "Contact Information",
            content: [
              "For questions about these terms, contact our support team",
              "Legal inquiries should be directed to our legal department",
              "We respond to inquiries within 5 business days",
              "Emergency requests will be handled with priority",
              "All communications should be in English for faster processing"
            ]
          }
        ]}
      />
    </>
  );
}
