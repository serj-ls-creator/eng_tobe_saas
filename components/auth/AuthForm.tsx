"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UI_TEXT } from "@/constants/ui";
import { signInWithGoogle } from "@/app/auth/actions";

interface AuthFormProps {
  title: string;
  subtitle: string;
  action: (
    prevState: { error: string | null; success?: boolean },
    formData: FormData
  ) => Promise<{ error: string | null; success?: boolean }>;
  submitLabel: string;
  mode: "login" | "signup";
}

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? "Loading..." : label}
    </Button>
  );
}

export function AuthForm({ title, subtitle, action, submitLabel, mode }: AuthFormProps) {
  const [state, formAction] = useFormState(action, { error: null, success: false });
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (state.success && mode === "signup") {
      setIsSuccess(true);
    }
  }, [mode, state.success]);

  return (
    <div className="content-shell">
      <div className="fade-up mx-auto mt-10 w-full max-w-sm">
        <div className="mb-6">
          <h1 className="mb-2 text-2xl font-bold">{title}</h1>
          <p className="text-sm text-zinc-500">{subtitle}</p>
        </div>

        {isSuccess ? (
          <p className="text-sm text-emerald-400">{UI_TEXT.authSignupSuccess}</p>
        ) : (
          <div className="space-y-4">
            <form action={signInWithGoogle}>
              <Button type="submit" variant="default" className="w-full">
                Continue with Google
              </Button>
            </form>

            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-600">or</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <form action={formAction} className="space-y-4">
            {mode === "signup" ? (
              <div className="space-y-2">
                <label className="text-sm text-zinc-400">{UI_TEXT.fullNameLabel}</label>
                <Input name="fullName" placeholder="Alex Johnson" required />
              </div>
            ) : null}
            <div className="space-y-2">
              <label className="text-sm text-zinc-400">{UI_TEXT.emailLabel}</label>
              <Input name="email" type="email" placeholder="you@example.com" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-zinc-400">{UI_TEXT.passwordLabel}</label>
              <Input name="password" type="password" placeholder="********" minLength={6} required />
            </div>
            {state.error ? <p className="text-sm text-pink-400">{state.error}</p> : null}
            <SubmitButton label={submitLabel} />
            </form>
          </div>
        )}

        <div className="mt-4 flex justify-between items-center text-sm">
          {mode === "login" ? (
            <>
              <Link href="/auth/signup" className="text-cyan-400">
                {UI_TEXT.authSwitchToSignup}
              </Link>
              <Link href="/auth/reset-password" className="text-cyan-400">
                Change my password
              </Link>
            </>
          ) : (
            <Link href="/auth/login" className="text-cyan-400">
              {UI_TEXT.authSwitchToLogin}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
