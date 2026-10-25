'use client';

import { useState, useEffect } from 'react';

export type ConsentStatus = 'pending' | 'accepted' | 'declined';

const CONSENT_STORAGE_KEY = 'cookie-consent';

export function useCookieConsent() {
  const [consent, setConsent] = useState<ConsentStatus>('pending');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY) as ConsentStatus | null;
    if (stored) {
      setConsent(stored);
      
      // Update Google Consent Mode based on stored consent
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('consent', 'update', {
          'analytics_storage': stored === 'accepted' ? 'granted' : 'denied'
        });
      }
    }
  }, []);

  const acceptConsent = () => {
    localStorage.setItem(CONSENT_STORAGE_KEY, 'accepted');
    setConsent('accepted');
    
    // Update Google Consent Mode
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  };

  const declineConsent = () => {
    localStorage.setItem(CONSENT_STORAGE_KEY, 'declined');
    setConsent('declined');
    
    // Update Google Consent Mode
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
  };

  return {
    consent,
    acceptConsent,
    declineConsent,
    mounted
  };
}
