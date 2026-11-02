import type { Metadata } from "next";
import { TopBar } from "@/components/layout/TopBar";
import { ResetPasswordForm } from "@/components/auth/ResetPasswordForm";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Reset Your English to be Password",
  description: "Request a password reset link to safely regain access to your English learning account.",
});

export default function ResetPasswordPage() {
  return (
    <>
      <TopBar title="Reset Password" backHref="/auth/login" />
      <ResetPasswordForm />
    </>
  );
}
