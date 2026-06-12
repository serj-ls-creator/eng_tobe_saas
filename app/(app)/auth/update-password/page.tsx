import { TopBar } from "@/components/layout/TopBar";
import { UpdatePasswordForm } from "@/components/auth/UpdatePasswordForm";

export default function UpdatePasswordPage() {
  return (
    <>
      <TopBar title="Update Password" backHref="/auth/login" />
      <UpdatePasswordForm />
    </>
  );
}
