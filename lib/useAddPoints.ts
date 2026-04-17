'use client';

/**
 * Adds points to the current user's profile.
 * Silently fails if user is not logged in.
 */
export async function addPoints(points: number): Promise<void> {
  if (points <= 0) return;
  try {
    await fetch('/api/points/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ points }),
    });
  } catch {
    // Silently ignore — points are a nice-to-have, not critical
  }
}
