"use client";

import { useEffect, useState } from "react";

interface UserState {
  id: string;
  email: string | null;
}

export function useUser() {
  const [user, setUser] = useState<UserState | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadUser() {
      try {
        const response = await fetch("/api/me", {
          method: "GET",
          cache: "no-store"
        });

        if (!response.ok || !isMounted) {
          return;
        }

        const payload = (await response.json()) as { user: UserState | null };
        setUser(payload.user);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    void loadUser();

    return () => {
      isMounted = false;
    };
  }, []);

  return { user, isLoading };
}
