import Link from "next/link";
import { TopBarServer as TopBar } from "@/components/layout/TopBarServer";
import { getCurrentProfile, isPremium } from "@/lib/isPremium";
import { StorePremiumCard } from "@/components/ui/StorePremiumCard";

export default async function StorePage() {
  const profile = await getCurrentProfile();
  const premium = await isPremium();

  const points = profile?.points ?? 0;
  const premiumExpiresAt = (profile as any)?.premium_expires_at ?? null;

  return (
    <>
      <TopBar title="Store" />
      <div className="content-shell pb-8">
        <div className="mb-4">
          <Link
            href="/"
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-1">Store</h1>
          <p className="text-zinc-500 text-sm">Spend your points on premium access</p>
        </div>

        <StorePremiumCard
          points={points}
          isPremium={premium}
          premiumExpiresAt={premiumExpiresAt}
        />
      </div>
    </>
  );
}
