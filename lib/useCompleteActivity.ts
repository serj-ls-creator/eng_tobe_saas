'use client';

export interface ActivityResult {
  streak: number;
  dailyActivities: number;
  dayCompleted: boolean;
}

export async function completeActivity(): Promise<ActivityResult | null> {
  try {
    const res = await fetch('/api/activity/complete', { method: 'POST' });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}
