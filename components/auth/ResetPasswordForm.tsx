'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, ArrowLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { UI_TEXT } from '@/constants/ui';
import { createBrowserClient } from '@supabase/ssr';

export function ResetPasswordForm() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      );

      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: 'https://english-tobe.vercel.app/auth/update-password',
      });

      if (error) {
        setError('Failed to send reset email. Please try again.');
      } else {
        setIsSubmitted(true);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="content-shell">
        <div className="max-w-md mx-auto">
          <Card className="p-6 text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-green-400" />
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">Check your email</h2>
            <p className="text-zinc-400 mb-6">
              We've sent you instructions to reset your password.
            </p>
            <Link href="/auth/login">
              <Button variant="outline" className="w-full">
                Back to Login
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="content-shell">
      <div className="max-w-md mx-auto">
        <Card className="p-6">
          <div className="mb-6">
            <Link 
              href="/auth/login" 
              className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Login
            </Link>
          </div>

          <div className="mb-6">
            <h1 className="text-2xl font-bold text-white mb-2">Reset Password</h1>
            <p className="text-sm text-zinc-500">
              Enter your email address and we'll send you a link to reset your password.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-colors"
                placeholder="your@email.com"
              />
            </div>

            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-sm text-red-400">{error}</p>
              </div>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full"
              size="lg"
            >
              {isSubmitting ? 'Sending...' : 'Send Reset Link'}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
