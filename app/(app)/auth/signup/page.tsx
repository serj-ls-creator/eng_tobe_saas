import type { Metadata } from "next";
import { TopBar } from "@/components/layout/TopBar";
import { AuthForm } from "@/components/auth/AuthForm";
import { UI_TEXT } from "@/constants/ui";
import { signupAction } from "@/app/(app)/auth/actions";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Create Your Free Learning Account",
  description: "Join English to be for free. Start learning English step by step with daily interactive practice.",
});

export default function SignupPage() {
  return (
    <>
      <TopBar title="Sign Up" backHref="/auth/login" />
      <AuthForm
        title={UI_TEXT.signupTitle}
        subtitle={UI_TEXT.signupSubtitle}
        action={signupAction}
        submitLabel={UI_TEXT.authSignupButton}
        mode="signup"
      />
    </>
  );
}
