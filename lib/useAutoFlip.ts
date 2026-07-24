'use client';

import { useEffect, useRef } from 'react';

/**
 * Automatically flips a card once after `delay` ms when it's NOT flipped yet.
 * Fires only once per card (resets when `cardIndex` changes).
 * Does nothing when `enabled` is false or card is already flipped.
 */
export function useAutoFlip({
  enabled,
  isFlipped,
  cardIndex,
  delay = 2000,
  onFlip,
}: {
  enabled: boolean;
  isFlipped: boolean;
  cardIndex: number;
  delay?: number;
  onFlip: () => void;
}) {
  // Track whether we already auto-flipped this card
  const firedRef = useRef(false);

  // Reset flag when card changes
  useEffect(() => {
    firedRef.current = false;
  }, [cardIndex]);

  useEffect(() => {
    if (!enabled || isFlipped || firedRef.current) return;

    const timer = setTimeout(() => {
      if (!firedRef.current) {
        firedRef.current = true;
        onFlip();
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [enabled, isFlipped, cardIndex, delay, onFlip]);
}
