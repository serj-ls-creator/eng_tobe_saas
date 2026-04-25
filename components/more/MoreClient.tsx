'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { User, Users, LogOut, Trash2, Settings, HeadphonesIcon, Mail, Tag, Info, Volume2, VolumeX } from 'lucide-react';

import { Card } from '@/components/ui/card';
import { useSoundEffects } from '@/hooks/useSoundEffects';
import { createBrowserClient } from '@supabase/ssr';

export function MoreClient() {
  const { enabled, setEnabled } = useSoundEffects();
  const router = useRouter();

  const handleSignOut = async () => {
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  return (
    <div className="content-shell">
      <div className="mb-4">
        <Link href="/" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
          ← Back to Home
        </Link>
      </div>

      <div className="space-y-4">
        {/* Profile Section */}
        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">Profile</h3>
          <div className="space-y-2">
            <Card className="p-4">
              <Link href="/profile" className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <User className="h-5 w-5 text-zinc-400" />
                  <div>
                    <p className="text-sm font-medium">My Profile</p>
                    <p className="text-xs text-zinc-500">View and edit your profile</p>
                  </div>
                </div>
                <div className="text-zinc-400">
                  →
                </div>
              </Link>
            </Card>

            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-zinc-400" />
                  <div>
                    <p className="text-sm font-medium">Invite Friends</p>
                    <p className="text-xs text-zinc-500">Share the app with friends</p>
                  </div>
                </div>
                <button className="rounded-lg bg-white/5 px-3 py-2 text-xs text-zinc-400">
                  Coming Soon
                </button>
              </div>
            </Card>

            <Card className="p-4">
              <button
                onClick={handleSignOut}
                className="flex items-center justify-between w-full"
              >
                <div className="flex items-center gap-3">
                  <LogOut className="h-5 w-5 text-zinc-400" />
                  <div>
                    <p className="text-sm font-medium">Sign Out</p>
                    <p className="text-xs text-zinc-500">Sign out of your account</p>
                  </div>
                </div>
                <div className="text-zinc-400">
                  →
                </div>
              </button>
            </Card>

            <Card className="p-4">
              <Link href="/delete-account" className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10">
                    <Trash2 className="h-5 w-5 text-red-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Delete Account</p>
                    <p className="text-xs text-zinc-500">Permanently delete your account</p>
                  </div>
                </div>
                <div className="text-red-400">
                  →
                </div>
              </Link>
            </Card>
          </div>
        </div>

        {/* Settings Section */}
        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">Settings</h3>
          <div className="space-y-2">
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
          </div>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">Support</h3>
          <div className="space-y-2">
            <Card className="p-4">
              <Link href="/technical-support" className="flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <HeadphonesIcon className="h-5 w-5 text-zinc-400 group-hover:text-white transition-colors" />
                  <div>
                    <p className="text-sm font-medium">Technical Support</p>
                    <p className="text-xs text-zinc-500">Get help with technical issues</p>
                  </div>
                </div>
                <div className="text-zinc-400 group-hover:text-white transition-colors">
                  →
                </div>
              </Link>
            </Card>

            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-zinc-400" />
                  <div>
                    <p className="text-sm font-medium">Contact Us</p>
                    <p className="text-xs text-zinc-500">Reach out with questions</p>
                  </div>
                </div>
                <button className="rounded-lg bg-white/5 px-3 py-2 text-xs text-zinc-400">
                  Coming Soon
                </button>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Tag className="h-5 w-5 text-zinc-400" />
                  <div>
                    <p className="text-sm font-medium">Promo Code</p>
                    <p className="text-xs text-zinc-500">Enter a promotional code</p>
                  </div>
                </div>
                <button className="rounded-lg bg-white/5 px-3 py-2 text-xs text-zinc-400">
                  Coming Soon
                </button>
              </div>
            </Card>

            <Card className="p-4">
              <Link href="/about" className="flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <Info className="h-5 w-5 text-zinc-400 group-hover:text-white transition-colors" />
                  <div>
                    <p className="text-sm font-medium">About App</p>
                    <p className="text-xs text-zinc-500">Learn more about English to be</p>
                  </div>
                </div>
                <div className="text-zinc-400 group-hover:text-white transition-colors">
                  →
                </div>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
