"use client";

import { useEffect } from "react";

export function PwaRegister() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) {
      return;
    }

    const registerWorker = async () => {
      try {
        await navigator.serviceWorker.register("/sw.js", {
          scope: "/"
        });
      } catch {
        // Ошибка регистрации не должна ломать приложение.
      }
    };

    void registerWorker();
  }, []);

  return null;
}
