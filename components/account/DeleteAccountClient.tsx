'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { createSupabaseBrowserClient } from '@/lib/supabase-browser';

type Step = 1 | 2 | 'done';

export function DeleteAccountClient() {
  const [isReady, setIsReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [step, setStep] = useState<Step>(1);
  const [confirmText, setConfirmText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canConfirmFinal = useMemo(() => confirmText.trim().toUpperCase() === 'DELETE', [confirmText]);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const supabase = createSupabaseBrowserClient();
        const { data } = await supabase.auth.getUser();
        if (cancelled) return;
        setIsLoggedIn(Boolean(data.user));
      } catch {
        if (cancelled) return;
        setIsLoggedIn(false);
      } finally {
        if (cancelled) return;
        setIsReady(true);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const handleBegin = () => {
    setError(null);
    setStep(2);
  };

  const handleDelete = async () => {
    if (!canConfirmFinal || isDeleting) return;

    setIsDeleting(true);
    setError(null);

    try {
      const res = await fetch('/api/account/delete', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({ confirm: 'DELETE' })
      });

      const data = (await res.json().catch(() => null)) as { deleted?: boolean; error?: string } | null;

      if (!res.ok || !data?.deleted) {
        throw new Error(data?.error || 'Failed to delete account. Please try again.');
      }

      const supabase = createSupabaseBrowserClient();
      await supabase.auth.signOut();

      setStep('done');
      window.location.href = '/';
    } catch (e) {
      const message = e instanceof Error ? e.message : 'Failed to delete account. Please try again.';
      setError(message);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="content-shell">
      <div className="mb-4">
        <Link href="/more" className="text-xs text-zinc-500 transition-colors hover:text-zinc-300">
          ← Back to More
        </Link>
      </div>

      {isReady && !isLoggedIn ? (
        <Card className="p-5">
          <h2 className="mb-2 text-lg font-semibold text-white">You are not signed in</h2>
          <p className="mb-4 text-sm text-zinc-400">Please sign in to delete your account.</p>
          <div className="flex gap-3">
            <Button type="button" variant="secondary" onClick={() => (window.location.href = '/more')}>
              Back
            </Button>
            <Button type="button" onClick={() => (window.location.href = '/auth/login')}>
              Sign in
            </Button>
          </div>
        </Card>
      ) : null}

      {isReady && isLoggedIn && step === 1 ? (
        <Card className="p-5">
          <h2 className="mb-2 text-lg font-semibold text-white">Delete your account</h2>
          <p className="mb-4 text-sm text-zinc-400">
            This action is permanent. Your learning progress, points, streaks, and any saved activity history will be
            deleted.
          </p>

          <div className="space-y-2 text-sm text-zinc-400">
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              You will permanently lose:
              <div className="mt-2 space-y-1 text-xs text-zinc-500">
                <div>- Learning progress (Words, Sentences, Idioms)</div>
                <div>- Recall history</div>
                <div>- Points and streaks</div>
                <div>- Profile data</div>
              </div>
            </div>
          </div>

          {error ? <div className="mt-4 text-sm text-red-400">{error}</div> : null}

          <div className="mt-5 flex gap-3">
            <Button type="button" variant="secondary" onClick={() => (window.location.href = '/more')}>
              Cancel
            </Button>
            <Button type="button" onClick={handleBegin} className="bg-red-500 text-white hover:bg-red-400">
              I understand, continue
            </Button>
          </div>
        </Card>
      ) : null}

      {isReady && isLoggedIn && step === 2 ? (
        <Card className="p-5">
          <h2 className="mb-2 text-lg font-semibold text-white">Final confirmation</h2>
          <p className="mb-4 text-sm text-zinc-400">
            To confirm, type <span className="font-semibold text-white">DELETE</span> below. This cannot be undone.
          </p>

          <div className="space-y-2">
            <Input
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value)}
              placeholder="Type DELETE to confirm"
              autoCapitalize="characters"
              autoCorrect="off"
              spellCheck={false}
            />
          </div>

          {error ? <div className="mt-4 text-sm text-red-400">{error}</div> : null}

          <div className="mt-5 flex gap-3">
            <Button type="button" variant="secondary" onClick={() => setStep(1)} disabled={isDeleting}>
              Back
            </Button>
            <Button
              type="button"
              onClick={handleDelete}
              disabled={!canConfirmFinal || isDeleting}
              className="bg-red-500 text-white hover:bg-red-400"
            >
              {isDeleting ? 'Deleting…' : 'Delete my account'}
            </Button>
          </div>
        </Card>
      ) : null}
    </div>
  );
}
