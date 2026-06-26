'use client';

import { useState } from 'react';
import { Star, Crown, Zap } from 'lucide-react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { CreemCheckout } from '@creem_io/nextjs';

const POINTS_COST_1_MONTH = 20000;

const PREMIUM_FEATURES = [
  'All Words categories',
  'All Idioms categories',
  'Sentences A1-C2',
  'All Games',
  'Future premium updates',
];

const PREMIUM_PLANS = [
  { id: '6-month', title: '6 Months', price: '$34.99', save: 'Save 27%', popular: false },
  { id: '3-month', title: '3 Months', price: '$19.99', save: 'Save 16%', popular: true },
  { id: '1-month', title: '1 Month', price: '$7.99', save: null, popular: false },
];

interface UserProfile {
  id?: string;
  user_id?: string;
  email?: string;
  creem_subscription_status?: string | null;
}

const creemProductId = process.env.NEXT_PUBLIC_CREEM_PRODUCT_ID;

interface Props {
  points: number;
  isPremium: boolean;
  premiumExpiresAt: string | null;
  subscriptionStatus: string | null;
  user: UserProfile | null;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function StorePremiumCard({ points, isPremium, premiumExpiresAt, subscriptionStatus, user }: Props) {
  const [loading, setLoading] = useState(false);
  const [portalLoading, setPortalLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [newExpiry, setNewExpiry] = useState<string | null>(premiumExpiresAt);
  const [currentPoints, setCurrentPoints] = useState(points);
  const [currentPremium, setCurrentPremium] = useState(isPremium);

  const canBuyWithPoints = currentPoints >= POINTS_COST_1_MONTH;
  const missing = POINTS_COST_1_MONTH - currentPoints;
  const isScheduledCancel = subscriptionStatus === 'scheduled_cancel';

  const handleBuyWithPoints = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/premium/buy', { method: 'POST' });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? 'Something went wrong');
      } else {
        setSuccess(true);
        setNewExpiry(data.premium_expires_at);
        setCurrentPoints(data.points_remaining);
        setCurrentPremium(true);
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleManageSubscription = async () => {
    setPortalLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/checkout/portal', {
        method: 'POST',
      });
      const data = await response.json();

      if (!response.ok) {
        setError(data.error ?? 'Failed to open subscription management');
        return;
      }

      if (data.portal_url) {
        window.location.href = data.portal_url;
        return;
      }

      setError('Portal link was not returned');
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setPortalLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <Card className="p-4 flex items-center gap-3 bg-zinc-900/95 border-zinc-700/60">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-500/20">
          <Star className="h-5 w-5 text-yellow-400" />
        </div>
        <div>
          <div className="text-xs text-zinc-500 mb-0.5">Your balance</div>
          <div className="text-lg font-bold text-white">{currentPoints.toLocaleString()} pts</div>
        </div>
      </Card>

      {currentPremium && newExpiry && (
        <div className="flex min-h-[52px] items-center justify-center rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-center text-sm text-green-400">
          <span className="leading-snug">
            Premium active until <span className="font-semibold whitespace-nowrap">{formatDate(newExpiry)}</span>
          </span>
        </div>
      )}

      {PREMIUM_PLANS.map((plan) => (
        <div
          key={plan.id}
          className={plan.popular ? 'relative z-10 pt-3' : 'relative'}
        >
          {plan.popular && (
            <div
              className="absolute top-3 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 bg-cyan-400 text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-[0_0_12px_rgba(0,229,255,0.45)]"
              aria-hidden
            >
              Most Popular
            </div>
          )}

          <Card
            className={`relative px-6 pb-6 bg-zinc-900/95 border-zinc-700/60 ${plan.popular ? 'pt-8' : 'pt-6'} ${
              plan.popular
                ? 'shadow-[0_0_40px_rgba(0,229,255,0.08)]'
                : ''
            }`}
          >
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/20">
                  <Crown className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-base font-bold text-white">{plan.title}</div>
                  <div className="text-xs text-zinc-500">Full access to all content</div>
                </div>
              </div>

              <div className="flex items-baseline gap-2 mb-1">
                <div className="text-2xl font-black text-white">{plan.price}</div>
                {plan.id === '1-month' && (
                  <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
                    Subscription
                  </span>
                )}
                {plan.save && (
                  <div className={`text-xs font-medium ${plan.popular ? 'text-cyan-400' : 'text-pink-400'}`}>
                    {plan.save}
                  </div>
                )}
              </div>

              <ul className="space-y-2 mb-6 mt-4">
                {PREMIUM_FEATURES.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-zinc-400">
                    <Zap className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {plan.id === '1-month' ? (
                <div className="space-y-4">
                  {!user ? (
                    <Link
                      href="/auth/login"
                      className="w-full py-3 rounded-xl font-bold text-sm transition-colors text-center min-h-[44px] flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, #A855F7, #00E5FF)',
                        color: '#000',
                      }}
                    >
                      Sign in
                    </Link>
                  ) : currentPremium ? (
                    <div className="space-y-3">
                      <button
                        onClick={handleManageSubscription}
                        disabled={portalLoading}
                        className="w-full py-3 rounded-xl font-bold text-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                        style={{
                          background: 'linear-gradient(135deg, #A855F7, #00E5FF)',
                          color: '#000',
                        }}
                      >
                        {portalLoading ? 'Opening...' : 'Manage Subscription'}
                      </button>
                      <div className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center">
                        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500">
                          Subscription status
                        </p>
                        <p className="mt-1 text-sm font-semibold text-green-400">
                          {newExpiry
                            ? isScheduledCancel
                              ? `Premium active until ${formatDate(newExpiry)}`
                              : `Next billing date: ${formatDate(newExpiry)}`
                            : 'Subscription is active'}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-zinc-500">
                          {isScheduledCancel
                            ? 'Auto-renewal is turned off.'
                            : `Your subscription is active. You can cancel anytime — premium stays active until the end of the billing cycle.`}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {creemProductId ? (
                        <CreemCheckout
                          productId={creemProductId}
                          customer={user.email ? { email: user.email } : undefined}
                          successUrl="/store"
                          referenceId={user.user_id || user.id || ''}
                          metadata={{ source: 'web' }}
                        >
                          <button
                            className="w-full py-3 rounded-xl font-bold text-sm transition-colors hover:opacity-90 animate-pulse"
                            style={{
                              background: 'linear-gradient(135deg, #A855F7, #00E5FF)',
                              color: '#000',
                            }}
                          >
                            Buy Premium - 1 Month
                          </button>
                        </CreemCheckout>
                      ) : (
                        <button
                          disabled
                          className="w-full py-3 rounded-xl font-bold text-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                          style={{
                            background: 'linear-gradient(135deg, #A855F7, #00E5FF)',
                            color: '#000',
                          }}
                        >
                          Buy Premium - 1 Month (Config Error)
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-3">
                  {!user ? (
                    <Link
                      href="/auth/login"
                      className="w-full py-3 rounded-xl font-bold text-sm transition-colors text-center min-h-[44px] flex items-center justify-center"
                      style={{
                        background: plan.popular ? '#00E5FF' : 'rgba(255,255,255,0.1)',
                        color: plan.popular ? '#000' : '#fff',
                      }}
                    >
                      Sign in
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="w-full py-3 rounded-xl font-bold text-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                      style={{
                        background: plan.popular ? '#00E5FF' : 'rgba(255,255,255,0.1)',
                        color: plan.popular ? '#000' : '#fff',
                      }}
                    >
                      Choose Plan
                    </button>
                  )}
                </div>
              )}
            </div>
          </Card>
        </div>
      ))}

      <Card className="relative px-6 pb-6 pt-6 bg-zinc-900/95 border-zinc-700/60">
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/20">
              <Star className="h-6 w-6 text-yellow-400" />
            </div>
            <div>
              <div className="text-base font-bold text-white">1 Month via Points</div>
              <div className="text-xs text-zinc-500">Use your earned points for premium access</div>
            </div>
          </div>

          <div className="flex items-baseline gap-2 mb-1">
            <div className="text-2xl font-black text-white">{POINTS_COST_1_MONTH.toLocaleString()} pts</div>
            <div className="text-xs font-medium text-yellow-400">Points only</div>
          </div>

          <div className="rounded-xl border border-zinc-700/60 bg-zinc-950/70 px-4 py-4 mt-4">
            <ul className="mb-4 space-y-2 text-sm text-zinc-400">
              {PREMIUM_FEATURES.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Zap className="h-3.5 w-3.5 shrink-0 text-cyan-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-white">Current balance</p>
                <p className="text-xs text-zinc-500">Available points in your account</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-white">{currentPoints.toLocaleString()} pts</p>
                {!canBuyWithPoints && (
                  <p className="text-xs text-zinc-500">{missing.toLocaleString()} more needed</p>
                )}
              </div>
            </div>

            <button
              onClick={handleBuyWithPoints}
              disabled={!canBuyWithPoints || loading}
              className="mt-4 w-full py-3 rounded-xl font-bold text-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              style={{
                background: canBuyWithPoints ? 'linear-gradient(135deg, #A855F7, #00E5FF)' : undefined,
                backgroundColor: canBuyWithPoints ? undefined : 'rgba(255,255,255,0.05)',
                color: canBuyWithPoints ? '#000' : '#71717a',
              }}
            >
              {loading ? 'Processing...' : canBuyWithPoints ? 'Buy with points - 1 Month' : `Need ${missing.toLocaleString()} more pts`}
            </button>
          </div>
        </div>
      </Card>

      {error && <p className="text-xs text-red-400 text-center">{error}</p>}

      <p className="text-xs text-zinc-600 text-center">
        Earn points by completing activities · 10 pts per activity
      </p>

      <p className="text-xs leading-relaxed text-zinc-500 text-center">
        Your subscription will automatically renew for the same duration unless canceled at least 24 hours before the end of the current period. You can cancel at any time at no additional cost, and your subscription will remain active until the end of the current billing cycle.
      </p>

    </div>
  );
}
