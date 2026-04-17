'use client';

export async function completeActivity(): Promise<void> {
  try {
    await fetch('/api/activity/complete', { method: 'POST' });
  } catch {
    // Silently ignore
  }
}
