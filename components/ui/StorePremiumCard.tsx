'use client';

import { useState } from 'react';
import { Star, Crown, Zap } from 'lucide-react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';

const POINTS_COST_1_MONTH = 20000;

const PREMIUM_FEATURES = [
  'All Words categories',
  'All Idioms categories',
  'Sentences A1-C2',
  'All Games',
  'Future premium updates',
];

const PREMIUM_PLANS = [
  {
    id: '6-month',
    title: '6 Months',
    price: '$34.99',
    save: 'Save 27%',
    popular: false,
  },
  {
    id: '3-month',
    title: '3 Months',
    price: '$19.99',
    save: 'Save 16%',
    popular: true,
  },
  {
    id: '1-month',
    title: '1 Month',
    price: '$7.99',
    save: null,
    popular: false,
  },
];

interface UserProfile {
  id?: string;
  user_id?: string;
}

interface Props {
  points: number;
  isPremium: boolean;
  premiumExpiresAt: string | null;
  user: UserProfile | null;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function StorePremiumCard({ points, isPremium, premiumExpiresAt, user }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [newExpiry, setNewExpiry] = useState<string | null>(premiumExpiresAt);
  const [currentPoints, setCurrentPoints] = useState(points);
  const [currentPremium, setCurrentPremium] = useState(isPremium);

  const canBuyWithPoints = currentPoints >= POINTS_COST_1_MONTH;
  const missing = POINTS_COST_1_MONTH - currentPoints;

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

  return (
    <div className="space-y-4">
      <Card className="p-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-500/20">
          <Star className="h-5 w-5 text-yellow-400" />
        </div>
        <div>
          <div className="text-xs text-zinc-500 mb-0.5">Your balance</div>
          <div className="text-lg font-bold text-white">{currentPoints.toLocaleString()} pts</div>
        </div>
      </Card>

      {currentPremium && newExpiry && (
        <div className="rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-center text-sm text-green-400">
          Premium active until <span className="font-semibold">{formatDate(newExpiry)}</span>
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
            className={`relative px-6 pb-6 ${plan.popular ? 'pt-8' : 'pt-6'} ${
              plan.popular
                ? 'border border-cyan-400/30 shadow-[0_0_40px_rgba(0,229,255,0.08)]'
                : 'border border-white/10'
            }`}
          >
          <div className="absolute inset-0 rounded-[inherit] overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5" />
          </div>

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
              <div className="space-y-3">
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
                ) : (
                  <>
                    {currentPremium && newExpiry && (
                      <p className="text-xs text-zinc-500 text-center">
                        Buying will extend your premium by 1 month
                      </p>
                    )}

                    <button
                      disabled
                      className="w-full py-3 rounded-xl font-bold text-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                      style={{
                        background: 'linear-gradient(135deg, #A855F7, #00E5FF)',
                        color: '#000',
                      }}
                    >
                      Buy Premium — 1 Month
                    </button>

                    {success ? (
                      <div className="w-full py-3 rounded-xl bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-semibold text-center">
                        Premium activated until {newExpiry ? formatDate(newExpiry) : ''}
                      </div>
                    ) : (
                      <>
                        {!canBuyWithPoints && (
                          <p className="text-xs text-zinc-500 text-center">
                            You need{' '}
                            <span className="text-yellow-400 font-semibold">
                              {missing.toLocaleString()} more pts
                            </span>{' '}
                            to unlock with points
                          </p>
                        )}
                        <button
                          onClick={handleBuyWithPoints}
                          disabled={!canBuyWithPoints || loading}
                          className="w-full py-3 rounded-xl font-bold text-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                          style={{
                            background: canBuyWithPoints ? 'linear-gradient(135deg, #A855F7, #00E5FF)' : undefined,
                            backgroundColor: canBuyWithPoints ? undefined : 'rgba(255,255,255,0.05)',
                            color: canBuyWithPoints ? '#000' : '#71717a',
                          }}
                        >
                          {loading ? 'Processing…' : canBuyWithPoints ? 'Buy with points — 1 Month' : `Need ${missing.toLocaleString()} more pts`}
                        </button>
                      </>
                    )}
                  </>
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

      {error && (
        <p className="text-xs text-red-400 text-center">{error}</p>
      )}

      <p className="text-xs text-zinc-600 text-center">
        Earn points by completing activities · 10 pts per activity
      </p>
    </div>
  );
}
