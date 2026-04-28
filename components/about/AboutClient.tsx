'use client';

import Link from 'next/link';
import { FileText, Shield } from 'lucide-react';

import { Card } from '@/components/ui/card';

export function AboutClient() {
  return (
    <div className="content-shell">
      <div className="mb-4">
        <Link href="/more" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
          ← Back to More
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/logo.svg" 
            alt="English to be Logo" 
            className="w-24 h-24 mx-auto"
          />
        </div>

        {/* App Name */}
        <h1 className="text-3xl font-bold text-white mb-12">
          English to be
        </h1>

        {/* Buttons */}
        <div className="space-y-3 w-full max-w-xs">
          <Card className="p-4">
            <Link href="/about/terms-of-use" className="flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-zinc-400 group-hover:text-white transition-colors" />
                <span className="text-sm font-medium text-white">Terms of Use</span>
              </div>
              <div className="text-zinc-400 group-hover:text-white transition-colors">
                →
              </div>
            </Link>
          </Card>

          <Card className="p-4">
            <Link href="/about/privacy-policy" className="flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-zinc-400 group-hover:text-white transition-colors" />
                <span className="text-sm font-medium text-white">Privacy Policy</span>
              </div>
              <div className="text-zinc-400 group-hover:text-white transition-colors">
                →
              </div>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
