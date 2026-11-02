import type { Metadata } from "next";
import { TopBar } from "@/components/layout/TopBar";
import { AuthForm } from "@/components/auth/AuthForm";
import { UI_TEXT } from "@/constants/ui";
import { loginAction } from "@/app/(app)/auth/actions";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Sign In to Your Learning Account",
  description: "Log in to English to be to keep your daily streak, track progress, and practice vocabulary.",
});

export default function LoginPage() {
  return (
    <>
      <TopBar title="Login" backHref="/" />
      <AuthForm
        title={UI_TEXT.loginTitle}
        subtitle={UI_TEXT.loginSubtitle}
        action={loginAction}
        submitLabel={UI_TEXT.authLoginButton}
        mode="login"
      />
    </>
  );
}
