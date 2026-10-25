'use client';

import { useState, useEffect } from 'react';
import { Card } from './card';
import { Button } from './button';
import { useCookieConsent } from '@/lib/use-cookie-consent';

export function CookieConsentBanner() {
  const { consent, acceptConsent, declineConsent, mounted } = useCookieConsent();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (mounted && consent === 'pending') {
      // Small delay to prevent flash
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, [mounted, consent]);

  if (!mounted || consent !== 'pending' || !isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="max-w-2xl mx-auto p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-white mb-2">
            Cookie Consent
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            We use cookies to collect anonymous analytics data to improve your experience. 
            This helps us understand how you use the app and make it better. 
            We don't collect personal information.
          </p>
        </div>
        <div className="flex gap-3">
          <Button 
            onClick={acceptConsent}
            className="flex-1 bg-cyan-400 hover:bg-cyan-500 text-black"
          >
            Accept
          </Button>
          <Button 
            onClick={declineConsent}
            variant="outline"
            className="flex-1 border border-white/10 text-white hover:bg-white/5"
          >
            Decline
          </Button>
        </div>
      </Card>
    </div>
  );
}
