'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BookPlus, X } from 'lucide-react';

import { GlowBorder } from '@/components/ui/GlowBorder';
import { StrictEnglishTTS } from '@/components/audio/StrictEnglishTTS';
import { createSupabaseBrowserClient } from '@/lib/supabase-browser';

interface WordOfDayCardProps {
  title: string;
  simple: string;
  synonym: string;
  transcription: string;
  explanation: string;
  isLoggedIn?: boolean;
}

export function WordOfDayCard({
  title,
  simple,
  synonym,
  transcription,
  explanation,
  isLoggedIn,
}: WordOfDayCardProps) {
  const router = useRouter();
  const [showSignupPrompt, setShowSignupPrompt] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(false);

  const navigateToAdd = (word: string) => {
    const url = `/vocabulary/add?word=${encodeURIComponent(word)}`;
    try {
      router.push(url);
    } catch {
      // Fallback for iOS Safari PWA and other navigation issues
      window.location.href = url;
    }
  };

  const handleAddToVocabulary = async (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();

    // Fast path: if auth state was resolved on the server
    if (isLoggedIn === true) {
      navigateToAdd(synonym);
      return;
    }
    if (isLoggedIn === false) {
      setShowSignupPrompt(true);
      return;
    }

    if (checkingAuth) return;

    setCheckingAuth(true);
    try {
      const supabase = createSupabaseBrowserClient();
      let user: { id: string } | null = null;
      try {
        const { data: { session } } = await supabase.auth.getSession();
        user = session?.user ?? null;
      } catch {
        // getSession failed, try getUser
      }
      if (!user) {
        try {
          const { data } = await supabase.auth.getUser();
          user = data.user;
        } catch {
          // getUser also failed
        }
      }

      if (!user) {
        setShowSignupPrompt(true);
        return;
      }

      navigateToAdd(synonym);
    } catch (error) {
      console.error('Failed to check authentication:', error);
      setShowSignupPrompt(true);
    } finally {
      setCheckingAuth(false);
    }
  };

  return (
    <>
      <GlowBorder innerClassName="hover:opacity-90 transition-opacity">
        <div>
          <Link href="/words" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-cyan-400">
            {title}
          </Link>
          <Link href="/words" className="mb-2 flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-1">
            <span className="min-w-0 break-words text-sm text-zinc-500 line-through">{simple}</span>
            <span className="shrink-0 text-cyan-400" aria-hidden="true">→</span>
            <span className="min-w-0 break-words text-base font-semibold text-white">{synonym}</span>
          </Link>
        </div>
        <div className="mb-1 grid grid-cols-[minmax(0,1fr)_auto] grid-rows-[auto_auto] items-center gap-x-2 gap-y-1">
          <div className="col-start-1 row-start-1 flex min-w-0 items-center gap-2">
            <span className="min-w-0 break-words text-xs text-zinc-400">{transcription}</span>
            <StrictEnglishTTS text={synonym} />
          </div>
          <button
            type="button"
            onClick={handleAddToVocabulary}
            disabled={checkingAuth}
            className="col-start-2 row-span-2 row-start-1 grid h-12 max-h-12 min-h-12 w-[116px] shrink-0 grid-cols-[16px_minmax(0,1fr)] items-center gap-x-1 self-start overflow-hidden rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 px-2 py-1 text-[10px] font-bold leading-tight text-black shadow-md shadow-cyan-500/10 transition-all hover:opacity-95 active:scale-[0.98] disabled:opacity-60"
          >
            <BookPlus className="h-3 w-3 shrink-0" />
            <span className="text-center">
              {checkingAuth ? (
                'Checking...'
              ) : (
                <>
                  <span className="block text-[14px]">Add to</span>
                  <span className="block whitespace-nowrap">My Vocabulary</span>
                </>
              )}
            </span>
          </button>
          <Link href="/words" className="col-start-1 row-start-2 block min-w-0 break-words text-xs text-zinc-400">
            {explanation}
          </Link>
        </div>
      </GlowBorder>

      {showSignupPrompt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-3xl border border-white/15 bg-zinc-900 p-6 shadow-2xl">
            <div className="mb-3 flex items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-bold text-white">Create an account to save words</h2>
                <p className="mt-2 text-sm text-zinc-400">Sign up or log in to access My Vocabulary and add this word.</p>
              </div>
              <button
                type="button"
                onClick={() => setShowSignupPrompt(false)}
                aria-label="Close"
                className="rounded-full p-1 text-zinc-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-2">
              <Link href="/auth/signup" className="rounded-control bg-cyan-400 px-3 py-2.5 text-center text-xs font-semibold text-black transition-colors hover:bg-cyan-300">Sign Up</Link>
              <Link href="/auth/login" className="rounded-control border border-white/10 bg-white/[0.04] px-3 py-2.5 text-center text-xs font-semibold text-white transition-colors hover:bg-white/[0.08]">Log In</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
