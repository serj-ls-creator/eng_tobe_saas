'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { SOUND_EFFECTS_EVENT, SOUND_EFFECTS_STORAGE_KEY } from '@/lib/sound-effects';

type SoundKind = 'correct' | 'wrong';

function readStoredSoundEffects(): boolean {
  if (typeof window === 'undefined') return true;

  const rawValue = window.localStorage.getItem(SOUND_EFFECTS_STORAGE_KEY);
  if (rawValue === null) return true;

  return rawValue === 'true';
}

export function useSoundEffects() {
  const [enabled, setEnabledState] = useState(true);
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    setEnabledState(readStoredSoundEffects());

    const syncFromStorage = () => {
      setEnabledState(readStoredSoundEffects());
    };

    window.addEventListener('storage', syncFromStorage);
    window.addEventListener(SOUND_EFFECTS_EVENT, syncFromStorage as EventListener);

    return () => {
      window.removeEventListener('storage', syncFromStorage);
      window.removeEventListener(SOUND_EFFECTS_EVENT, syncFromStorage as EventListener);
    };
  }, []);

  const setEnabled = useCallback((nextValue: boolean) => {
    setEnabledState(nextValue);
    window.localStorage.setItem(SOUND_EFFECTS_STORAGE_KEY, String(nextValue));
    window.dispatchEvent(new Event(SOUND_EFFECTS_EVENT));
  }, []);

  const ensureAudioContext = useCallback(() => {
    if (typeof window === 'undefined') return null;

    const AudioContextCtor = window.AudioContext || (window as typeof window & {
      webkitAudioContext?: typeof AudioContext;
    }).webkitAudioContext;

    if (!AudioContextCtor) return null;

    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContextCtor();
    }

    if (audioContextRef.current.state === 'suspended') {
      void audioContextRef.current.resume();
    }

    return audioContextRef.current;
  }, []);

  const play = useCallback((kind: SoundKind) => {
    if (!enabled) return;

    const context = ensureAudioContext();
    if (!context) return;

    const now = context.currentTime;
    const notes =
      kind === 'correct'
        ? [
            { frequency: 660, duration: 0.08, gain: 0.05 },
            { frequency: 880, duration: 0.12, gain: 0.06 },
          ]
        : [
            { frequency: 360, duration: 0.09, gain: 0.055 },
            { frequency: 240, duration: 0.14, gain: 0.05 },
          ];

    notes.forEach((note, index) => {
      const startAt = now + index * 0.09;
      const oscillator = context.createOscillator();
      const gainNode = context.createGain();

      oscillator.type = kind === 'correct' ? 'sine' : 'triangle';
      oscillator.frequency.setValueAtTime(note.frequency, startAt);

      gainNode.gain.setValueAtTime(0.0001, startAt);
      gainNode.gain.exponentialRampToValueAtTime(note.gain, startAt + 0.02);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, startAt + note.duration);

      oscillator.connect(gainNode);
      gainNode.connect(context.destination);

      oscillator.start(startAt);
      oscillator.stop(startAt + note.duration);
    });
  }, [enabled, ensureAudioContext]);

  return {
    enabled,
    setEnabled,
    playCorrect: () => play('correct'),
    playWrong: () => play('wrong'),
  };
}
