'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

import { Card } from '@/components/ui/card';

export function TechnicalSupportClient() {
  return (
    <div className="content-shell">
      <div className="mb-4">
        <Link href="/more" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
          ← Back to More
        </Link>
      </div>

      <div className="space-y-6">
        {/* Account & Authentication */}
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-500">Account & Authentication</h3>
          <div className="space-y-2">
            <Card className="p-4">
              <button className="flex items-center justify-between w-full group">
                <span className="text-xs font-medium text-white">Issues with Google Sign-In</span>
                <ChevronRight className="h-4 w-4 text-zinc-400 group-hover:text-white transition-colors" />
              </button>
            </Card>

            <Card className="p-4">
              <button className="flex items-center justify-between w-full group">
                <span className="text-xs font-medium text-white">Data loss after logging in</span>
                <ChevronRight className="h-4 w-4 text-zinc-400 group-hover:text-white transition-colors" />
              </button>
            </Card>

            <Card className="p-4">
              <button className="flex items-center justify-between w-full group">
                <span className="text-xs font-medium text-white">Account deletion and data removal</span>
                <ChevronRight className="h-4 w-4 text-zinc-400 group-hover:text-white transition-colors" />
              </button>
            </Card>

            <Card className="p-4">
              <button className="flex items-center justify-between w-full group">
                <span className="text-xs font-medium text-white">Profile settings</span>
                <ChevronRight className="h-4 w-4 text-zinc-400 group-hover:text-white transition-colors" />
              </button>
            </Card>
          </div>
        </div>

        {/* "Words" Section */}
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-500">"Words" Section</h3>
          <div className="space-y-2">
            <Card className="p-4">
              <button className="flex items-center justify-between w-full group">
                <span className="text-xs font-medium text-white">Bugs in games within Words section</span>
                <ChevronRight className="h-4 w-4 text-zinc-400 group-hover:text-white transition-colors" />
              </button>
            </Card>

            <Card className="p-4">
              <button className="flex items-center justify-between w-full group">
                <span className="text-xs font-medium text-white">Incorrect transcriptions</span>
                <ChevronRight className="h-4 w-4 text-zinc-400 group-hover:text-white transition-colors" />
              </button>
            </Card>
          </div>
        </div>

        {/* "Idioms" Section */}
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-500">"Idioms" Section</h3>
          <div className="space-y-2">
            <Card className="p-4">
              <button className="flex items-center justify-between w-full group">
                <span className="text-xs font-medium text-white">Bugs in games within Idioms section</span>
                <ChevronRight className="h-4 w-4 text-zinc-400 group-hover:text-white transition-colors" />
              </button>
            </Card>

            <Card className="p-4">
              <button className="flex items-center justify-between w-full group">
                <span className="text-xs font-medium text-white">Errors in idiom meanings or usage examples</span>
                <ChevronRight className="h-4 w-4 text-zinc-400 group-hover:text-white transition-colors" />
              </button>
            </Card>

            <Card className="p-4">
              <button className="flex items-center justify-between w-full group">
                <span className="text-xs font-medium text-white">Display and loading issues</span>
                <ChevronRight className="h-4 w-4 text-zinc-400 group-hover:text-white transition-colors" />
              </button>
            </Card>
          </div>
        </div>

        {/* "Games" Section */}
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-500">"Games" Section</h3>
          <div className="space-y-2">
            <Card className="p-4">
              <button className="flex items-center justify-between w-full group">
                <span className="text-xs font-medium text-white">Gameplay freezing or UI glitches in separate games</span>
                <ChevronRight className="h-4 w-4 text-zinc-400 group-hover:text-white transition-colors" />
              </button>
            </Card>

            <Card className="p-4">
              <button className="flex items-center justify-between w-full group">
                <span className="text-xs font-medium text-white">Score and achievements calculation errors</span>
                <ChevronRight className="h-4 w-4 text-zinc-400 group-hover:text-white transition-colors" />
              </button>
            </Card>
          </div>
        </div>

        {/* Technical Bugs & Performance */}
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-500">Technical Bugs & Performance</h3>
          <div className="space-y-2">
            <Card className="p-4">
              <button className="flex items-center justify-between w-full group">
                <span className="text-xs font-medium text-white">Application freezing or slow loading</span>
                <ChevronRight className="h-4 w-4 text-zinc-400 group-hover:text-white transition-colors" />
              </button>
            </Card>

            <Card className="p-4">
              <button className="flex items-center justify-between w-full group">
                <span className="text-xs font-medium text-white">Mobile layout and UI responsiveness issues</span>
                <ChevronRight className="h-4 w-4 text-zinc-400 group-hover:text-white transition-colors" />
              </button>
            </Card>

            <Card className="p-4">
              <button className="flex items-center justify-between w-full group">
                <span className="text-xs font-medium text-white">Page rendering errors on specific browsers</span>
                <ChevronRight className="h-4 w-4 text-zinc-400 group-hover:text-white transition-colors" />
              </button>
            </Card>
          </div>
        </div>

        {/* Subscriptions & Access */}
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-500">Subscriptions & Access</h3>
          <div className="space-y-2">
            <Card className="p-4">
              <button className="flex items-center justify-between w-full group">
                <span className="text-xs font-medium text-white">Access to premium features after payment</span>
                <ChevronRight className="h-4 w-4 text-zinc-400 group-hover:text-white transition-colors" />
              </button>
            </Card>

            <Card className="p-4">
              <button className="flex items-center justify-between w-full group">
                <span className="text-xs font-medium text-white">Subscription management and cancellation</span>
                <ChevronRight className="h-4 w-4 text-zinc-400 group-hover:text-white transition-colors" />
              </button>
            </Card>

            <Card className="p-4">
              <button className="flex items-center justify-between w-full group">
                <span className="text-xs font-medium text-white">Payment processing errors</span>
                <ChevronRight className="h-4 w-4 text-zinc-400 group-hover:text-white transition-colors" />
              </button>
            </Card>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-500">Contact Us</h3>
          <div className="space-y-2">
            <Card className="p-4">
              <Link href="/contact" className="block">
                <div className="flex items-center justify-between w-full group">
                  <span className="text-xs font-medium text-white">Send a message to our support team</span>
                  <ChevronRight className="h-4 w-4 text-zinc-400 group-hover:text-white transition-colors" />
                </div>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
