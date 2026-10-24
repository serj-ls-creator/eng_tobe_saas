'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export function pickPreferredEnglishVoice(englishVoices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  if (!englishVoices || englishVoices.length === 0) return null;

  const maleHints = [
    'male',
    'david',
    'mark',
    'daniel',
    'alex',
    'michael',
    'thomas',
    'george',
    'james',
    'john',
    'peter',
    'paul',
    'brian',
    'fred',
    'ralph',
  ];

  const exactUS = englishVoices.filter((v) => v.lang === 'en-US');
  const candidates = exactUS.length ? exactUS : englishVoices;

  const byName = candidates.find((v) => maleHints.some((hint) => v.name.toLowerCase().includes(hint)));
  return byName ?? candidates[0];
}

export function speakStrictEnglish(
  text: string,
  callbacks?: {
    onStart?: () => void;
    onEnd?: () => void;
    onError?: (event: any) => void;
  },
): boolean {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return false;
  }

  const voices = window.speechSynthesis.getVoices();
  const englishVoices = voices.filter(
    (voice) => voice.lang && voice.lang.toLowerCase().startsWith('en'),
  );

  // STRICT: If no English voice is available, NEVER speak (prevents Russian/foreign voice fallback)
  if (englishVoices.length === 0) {
    console.log('❌ STRICT TTS: No English voices available - speech aborted');
    return false;
  }

  const preferredVoice = pickPreferredEnglishVoice(englishVoices);
  if (!preferredVoice) {
    return false;
  }

  try {
    window.speechSynthesis.cancel();

    setTimeout(() => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = preferredVoice;
      utterance.lang = preferredVoice.lang || 'en-US';
      utterance.rate = 0.8;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;

      utterance.onstart = () => {
        callbacks?.onStart?.();
      };
      utterance.onend = () => {
        callbacks?.onEnd?.();
      };
      utterance.onerror = (event) => {
        callbacks?.onError?.(event);
      };

      window.speechSynthesis.speak(utterance);
    }, 100);

    return true;
  } catch (error) {
    console.error('❌ StrictEnglishTTS speak error:', error);
    return false;
  }
}

export interface StrictEnglishTTSProps {
  text: string;
  className?: string;
  autoPlay?: boolean;
}

export function StrictEnglishTTS({ text, className = '', autoPlay = false }: StrictEnglishTTSProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const [voicesLoaded, setVoicesLoaded] = useState(false);
  const hasAutoPlayedRef = useRef<string | null>(null);

  // Load voices on mount
  useEffect(() => {
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();

      if (voices.length === 0) {
        setVoicesLoaded(false);
        return false;
      }

      const englishVoices = voices.filter(
        (voice) => voice.lang && voice.lang.toLowerCase().startsWith('en'),
      );

      if (englishVoices.length === 0) {
        console.log('❌ NO ENGLISH VOICES - TTS DISABLED');
        setIsSupported(false);
      } else {
        setIsSupported(true);
      }

      setVoicesLoaded(true);
      return true;
    };

    loadVoices();

    let attempts = 0;
    const interval = window.setInterval(() => {
      attempts += 1;
      const done = loadVoices();
      if (done || attempts >= 20) {
        window.clearInterval(interval);
      }
    }, 300);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  const speak = useCallback(() => {
    if (!('speechSynthesis' in window)) {
      setIsSupported(false);
      return;
    }

    if (!voicesLoaded) {
      window.speechSynthesis.getVoices();
      return;
    }

    if (!isSupported) {
      return;
    }

    const success = speakStrictEnglish(text, {
      onStart: () => setIsSpeaking(true),
      onEnd: () => setIsSpeaking(false),
      onError: () => setIsSpeaking(false),
    });

    if (!success) {
      setIsSupported(false);
      setIsSpeaking(false);
    }
  }, [isSupported, text, voicesLoaded]);

  useEffect(() => {
    if (autoPlay && isSupported && voicesLoaded && hasAutoPlayedRef.current !== text) {
      hasAutoPlayedRef.current = text;
      speak();
    }
  }, [autoPlay, isSupported, speak, text, voicesLoaded]);

  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  };

  if (!isSupported) {
    return (
      <div className={`flex items-center text-zinc-500 ${className}`} title="English TTS not available">
        <VolumeX className="w-4 h-4" />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={isSpeaking ? stopSpeaking : speak}
      className={`flex items-center justify-center w-8 h-8 rounded-lg bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-400 transition-colors ${className}`}
      title={isSpeaking ? 'Stop speaking' : 'Speak text (English Only)'}
    >
      {isSpeaking ? (
        <VolumeX className="w-4 h-4" />
      ) : (
        <Volume2 className="w-4 h-4" />
      )}
    </button>
  );
}
