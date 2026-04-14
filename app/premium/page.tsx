import { CheckCircle2, Crown } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TopBar } from "@/components/layout/TopBar";
import { PREMIUM_FEATURES, UI_TEXT } from "@/constants/ui";
import { createSupabaseServerClient } from "@/lib/supabase";

export default async function PremiumPage() {
  const supabase = createSupabaseServerClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <>
      <TopBar title="Premium" backHref="/" />
      <div className="content-shell pb-4">
        <Card className="fade-up overflow-hidden p-6">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500/25 via-purple-500/25 to-cyan-400/25">
            <Crown className="h-7 w-7 text-yellow-400" />
          </div>
          <h1 className="mb-2 text-2xl font-bold">{UI_TEXT.premiumTitle}</h1>
          <p className="mb-5 text-sm leading-relaxed text-zinc-500">{UI_TEXT.premiumSubtitle}</p>
          <div className="mb-6 space-y-3">
            {PREMIUM_FEATURES.map((feature) => (
              <div key={feature} className="flex items-center gap-3 text-sm text-zinc-300">
                <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                {feature}
              </div>
            ))}
          </div>
          {user ? (
            <form action="/api/checkout" method="POST" className="space-y-3">
              <input type="hidden" name="variantId" value="1" />
              <Button className="w-full" size="lg">
                {UI_TEXT.premiumButton}
              </Button>
            </form>
          ) : (
            <Button asChild className="w-full" size="lg">
              <Link href="/auth/login">{UI_TEXT.authLoginButton}</Link>
            </Button>
          )}
        </Card>
      </div>
    </>
  );
}
