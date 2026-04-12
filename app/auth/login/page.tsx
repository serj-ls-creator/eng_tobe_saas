import { TopBar } from "@/components/layout/TopBar";
import { AuthForm } from "@/components/auth/AuthForm";
import { UI_TEXT } from "@/constants/ui";
import { loginAction } from "@/app/auth/actions";

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
