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
        <Link href="/words" className="block cursor-pointer">
          <div className="mb-2 text-[10px] uppercase tracking-[0.3em] text-zinc-500">{title}</div>
          <div className="mb-1 flex items-center gap-2">
            <span className="text-sm text-zinc-500 line-through">{simple}</span>
            <span className="text-cyan-400">-&gt;</span>
          </div>
        </Link>
        <div className="flex min-w-0 items-center gap-2">
          <div className="min-w-0 flex-1">
            <div className="flex min-w-0 items-center gap-2">
              <Link href="/words" className="min-w-0 truncate text-lg font-semibold">{synonym}</Link>
              <span className="shrink-0 text-[11px] text-zinc-400">{transcription}</span>
              <StrictEnglishTTS text={synonym} />
            </div>
            <Link href="/words" className="mt-1 block text-[11px] text-zinc-500">{explanation}</Link>
          </div>
          <div className="flex shrink-0 items-center gap-1">
            <button
              type="button"
              onClick={handleAddToVocabulary}
              disabled={checkingAuth}
              className="flex min-h-8 shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 px-1.5 py-1 text-[9px] font-bold leading-[14px] text-black shadow-md shadow-cyan-500/10 transition-all hover:opacity-95 active:scale-[0.98] disabled:opacity-60"
            >
              <BookPlus className="h-3 w-3 shrink-0" />
              <span>{checkingAuth ? 'Checking...' : 'Add to My Vocabulary'}</span>
            </button>
          </div>
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
              <Link href="/auth/signup" className="rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-3 py-2.5 text-center text-xs font-bold text-black">Sign Up</Link>
              <Link href="/auth/login" className="rounded-xl border border-white/10 bg-zinc-800 px-3 py-2.5 text-center text-xs font-bold text-white hover:bg-zinc-700">Log In</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
