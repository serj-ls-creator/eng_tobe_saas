'use client';

import Link from 'next/link';
import { Trash2, Volume2, VolumeX } from 'lucide-react';

import { Card } from '@/components/ui/card';
import { useSoundEffects } from '@/hooks/useSoundEffects';

export function SettingsClient() {
  const { enabled, setEnabled } = useSoundEffects();

  return (
    <div className="content-shell">
      <div className="mb-4">
        <Link href="/" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
          ← Back to Home
        </Link>
      </div>
      <div className="space-y-3">
        <Card className="p-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Volume2 className="h-5 w-5 text-zinc-400" />
                <div>
                  <p className="text-sm font-medium">Sound Effects</p>
                  <p className="text-xs text-zinc-500">Enable feedback sounds in games</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setEnabled(!enabled)}
                className={`rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                  enabled
                    ? 'bg-cyan-400 text-black hover:bg-cyan-300'
                    : 'bg-white/5 text-zinc-400 hover:bg-white/10'
                }`}
              >
                {enabled ? 'On' : 'Off'}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <VolumeX className="h-5 w-5 text-zinc-400" />
                <div>
                  <p className="text-sm font-medium">Voice Over</p>
                  <p className="text-xs text-zinc-500">Toggle pronunciation audio</p>
                </div>
              </div>
              <button className="rounded-lg bg-white/5 px-3 py-2 text-xs text-zinc-400">
                Coming Soon
              </button>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10">
                <Trash2 className="h-5 w-5 text-red-400" />
              </div>
              <div>
                <p className="text-sm font-medium">Delete Account</p>
                <p className="text-xs text-zinc-500">Permanently delete your account</p>
              </div>
            </div>
            <Link
              href="/delete-account"
              className="rounded-lg bg-red-500/10 px-3 py-2 text-xs text-red-400 hover:bg-red-500/20 transition-colors"
            >
              Delete
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
