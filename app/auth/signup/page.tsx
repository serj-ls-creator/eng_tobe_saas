import { TopBar } from "@/components/layout/TopBar";
import { AuthForm } from "@/components/auth/AuthForm";
import { UI_TEXT } from "@/constants/ui";
import { signupAction } from "@/app/auth/actions";

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
