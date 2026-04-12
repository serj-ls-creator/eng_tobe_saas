"use client";

import { useEffect, useState } from "react";

export function useIsPremium(initialValue = false) {
  const [isPremium, setIsPremium] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadPremiumState() {
      try {
        const response = await fetch("/api/me/premium", {
          method: "GET",
          cache: "no-store"
        });

        if (!response.ok || !isMounted) {
          return;
        }

        const payload = (await response.json()) as { isPremium: boolean };
        setIsPremium(payload.isPremium);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    void loadPremiumState();

    return () => {
      isMounted = false;
    };
  }, []);

  return { isPremium, isLoading };
}
