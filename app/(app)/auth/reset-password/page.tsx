import { TopBar } from "@/components/layout/TopBar";
import { ResetPasswordForm } from "@/components/auth/ResetPasswordForm";

export default function ResetPasswordPage() {
  return (
    <>
      <TopBar title="Reset Password" backHref="/auth/login" />
      <ResetPasswordForm />
    </>
  );
}
