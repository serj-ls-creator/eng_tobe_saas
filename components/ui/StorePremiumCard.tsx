'use client';

import { useState } from 'react';
import { Star, Crown, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';

const COST = 20000;

interface Props {
  points: number;
  isPremium: boolean;
  premiumExpiresAt: string | null;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });
}

export function StorePremiumCard({ points, isPremium, premiumExpiresAt }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [newExpiry, setNewExpiry] = useState<string | null>(premiumExpiresAt);
  const [currentPoints, setCurrentPoints] = useState(points);
  const [currentPremium, setCurrentPremium] = useState(isPremium);

  const canBuy = currentPoints >= COST;
  const missing = COST - currentPoints;

  const handleBuy = async () => {
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
      {/* Points balance */}
      <Card className="p-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-500/20">
          <Star className="h-5 w-5 text-yellow-400" />
        </div>
        <div>
          <div className="text-xs text-zinc-500 mb-0.5">Your balance</div>
          <div className="text-lg font-bold text-white">{currentPoints.toLocaleString()} pts</div>
        </div>
      </Card>

      {/* Premium card */}
      <Card className="p-6 border border-white/10 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 pointer-events-none" />

        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/20">
              <Crown className="h-6 w-6 text-purple-400" />
            </div>
            <div>
              <div className="text-base font-bold text-white">Premium — 1 Month</div>
              <div className="text-xs text-zinc-500">Full access to all content</div>
            </div>
          </div>

          {/* Features */}
          <ul className="space-y-2 mb-6">
            {[
              'All Words categories',
              'All Idioms categories',
              'Sentences B1–C2',
              'All Games',
              'Future premium updates',
            ].map(f => (
              <li key={f} className="flex items-center gap-2 text-sm text-zinc-400">
                <Zap className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          {/* Price */}
          <div className="flex items-center justify-between mb-4">
            <div className="text-2xl font-black text-white">
              {COST.toLocaleString()}
              <span className="text-sm font-normal text-yellow-400 ml-1">pts</span>
            </div>
            {currentPremium && newExpiry && (
              <div className="text-xs text-green-400 text-right">
                Active until<br />
                <span className="font-semibold">{formatDate(newExpiry)}</span>
              </div>
            )}
          </div>

          {/* Status / Button */}
          {success ? (
            <div className="w-full py-3 rounded-xl bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-semibold text-center">
              🎉 Premium activated until {newExpiry ? formatDate(newExpiry) : ''}
            </div>
          ) : (
            <>
              {!canBuy && (
                <p className="text-xs text-zinc-500 mb-3 text-center">
                  You need{' '}
                  <span className="text-yellow-400 font-semibold">
                    {missing.toLocaleString()} more pts
                  </span>{' '}
                  to unlock
                </p>
              )}
              {currentPremium && newExpiry && (
                <p className="text-xs text-zinc-500 mb-3 text-center">
                  Buying will extend your premium by 30 days
                </p>
              )}
              <button
                onClick={handleBuy}
                disabled={!canBuy || loading}
                className="w-full py-3 rounded-xl font-bold text-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                style={{
                  background: canBuy ? 'linear-gradient(135deg, #A855F7, #00E5FF)' : undefined,
                  backgroundColor: canBuy ? undefined : 'rgba(255,255,255,0.05)',
                  color: canBuy ? '#000' : '#71717a',
                }}
              >
                {loading ? 'Processing…' : canBuy ? 'Buy Premium — 1 Month' : `Need ${missing.toLocaleString()} more pts`}
              </button>
              {error && (
                <p className="text-xs text-red-400 mt-2 text-center">{error}</p>
              )}
            </>
          )}
        </div>
      </Card>

      <p className="text-xs text-zinc-600 text-center">
        Earn points by completing activities · 10 pts per activity
      </p>
    </div>
  );
}
