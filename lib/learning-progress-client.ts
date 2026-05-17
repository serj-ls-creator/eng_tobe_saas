'use client';

import type { RecordLearningProgressPayload } from "@/lib/learning-progress-shared";

export async function recordLearningProgress(payload: RecordLearningProgressPayload): Promise<void> {
  try {
    await fetch("/api/learning-progress/record", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
  } catch {
    // Progress saving is helpful but should never block the learning flow.
  }
}
