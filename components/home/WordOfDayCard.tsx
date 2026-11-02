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
}

export function WordOfDayCard({
  title,
  simple,
  synonym,
  transcription,
  explanation,
}: WordOfDayCardProps) {
  const router = useRouter();
  const [showSignupPrompt, setShowSignupPrompt] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(false);

  const handleAddToVocabulary = async () => {
    if (checkingAuth) return;

    setCheckingAuth(true);
    try {
      const { data: { user } } = await createSupabaseBrowserClient().auth.getUser();
      if (!user) {
        setShowSignupPrompt(true);
        return;
      }

      router.push(`/vocabulary/add?word=${encodeURIComponent(synonym)}`);
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
        <div className="mb-1 grid grid-cols-[minmax(0,1fr)_auto] grid-rows-[auto_auto] items-center gap-x-3 gap-y-1.5">
          <div className="col-start-1 row-start-1 flex min-w-0 items-center gap-2">
            <span className="min-w-0 break-words text-xs text-zinc-400">{transcription}</span>
            <StrictEnglishTTS text={synonym} />
          </div>
          <button
            type="button"
            onClick={handleAddToVocabulary}
            disabled={checkingAuth}
            className="col-start-2 row-span-2 row-start-1 flex h-10 items-center justify-center gap-1.5 self-center rounded-control bg-cyan-400 px-3 text-xs font-semibold text-black transition-colors hover:bg-cyan-300 active:scale-[0.98] disabled:opacity-60"
          >
            <BookPlus className="h-4 w-4 shrink-0" />
            <span className="whitespace-nowrap">
              {checkingAuth ? 'Checking...' : 'Save word'}
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
