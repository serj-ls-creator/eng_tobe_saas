'use client';

import { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface StrictEnglishTTSProps {
  text: string;
  className?: string;
}

export function StrictEnglishTTS({ text, className = '' }: StrictEnglishTTSProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const [voicesLoaded, setVoicesLoaded] = useState(false);

  function pickPreferredEnglishVoice(englishVoices: SpeechSynthesisVoice[]) {
    const maleHints = [
      "male",
      "david",
      "mark",
      "daniel",
      "alex",
      "michael",
      "thomas",
      "george",
      "james",
      "john",
      "peter",
      "paul",
      "brian",
      "fred",
      "ralph"
    ];

    const exactUS = englishVoices.filter((v) => v.lang === "en-US");
    const candidates = exactUS.length ? exactUS : englishVoices;

    const byName = candidates.find((v) => maleHints.some((hint) => v.name.toLowerCase().includes(hint)));
    return byName ?? candidates[0];
  }

  // Load voices on mount
  useEffect(() => {
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      console.log('🔍 Loading voices, total:', voices.length);

      // On some browsers (especially mobile), voices are loaded asynchronously.
      // When `voices.length === 0`, we should not mark TTS as unsupported yet.
      if (voices.length === 0) {
        setVoicesLoaded(false);
        return false;
      }
      
      const englishVoices = voices.filter(voice => voice.lang.startsWith('en'));
      console.log('🇺🇸 English voices:', englishVoices.length);
      
      if (englishVoices.length === 0) {
        console.log('❌ NO ENGLISH VOICES - TTS DISABLED');
        setIsSupported(false);
      } else {
        console.log('✅ ENGLISH VOICES AVAILABLE:', englishVoices.map(v => v.name));
        setIsSupported(true);
      }
      
      setVoicesLoaded(true);
      return true;
    };

    // Load immediately
    loadVoices();

    // IMPORTANT: `speechSynthesis.onvoiceschanged` is a single global handler.
    // When multiple <StrictEnglishTTS /> instances are rendered, assigning it here
    // causes the last mounted instance to overwrite the others.
    // Instead, poll per-instance for a short time until voices are available.
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

  const speak = () => {
    try {
      if (!('speechSynthesis' in window)) {
        console.log('❌ Speech synthesis not supported');
        setIsSupported(false);
        return;
      }

      if (!voicesLoaded) {
        console.log('⏳ Voices not loaded yet, please wait...');
        // Re-trigger voices load attempt (helps on some devices).
        window.speechSynthesis.getVoices();
        return;
      }

      if (!isSupported) {
        console.log('❌ TTS not supported (no English voices)');
        return;
      }

      console.log('🎤 Starting speech for:', text);
      
      // Get fresh voices
      const voices = window.speechSynthesis.getVoices();
      const englishVoices = voices.filter(voice => voice.lang.startsWith('en'));
      
      if (englishVoices.length === 0) {
        console.log('❌ NO ENGLISH VOICES AVAILABLE');
        setIsSupported(false);
        return;
      }

      setIsSpeaking(true);
      
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      // Small delay to ensure cancel is processed
      setTimeout(() => {
        const utterance = new SpeechSynthesisUtterance(text);
        
        // Force English settings
        utterance.lang = 'en-US';
        utterance.rate = 0.8;
        utterance.pitch = 1.0;
        utterance.volume = 1.0;
        
        // Prefer a likely male English voice if available
        const preferredVoice = pickPreferredEnglishVoice(englishVoices);
        utterance.voice = preferredVoice;
        console.log('✅ Using English voice:', preferredVoice.name);
        
        utterance.onstart = () => {
          console.log('✅ English speech started');
          setIsSpeaking(true);
        };
        
        utterance.onend = () => {
          console.log('✅ English speech ended');
          setIsSpeaking(false);
        };
        
        utterance.onerror = (event) => {
          console.error('❌ English speech error:', event);
          setIsSpeaking(false);
        };
        
        // Speak with English voice
        window.speechSynthesis.speak(utterance);
      }, 100);
      
    } catch (error) {
      console.error('❌ TTS Error:', error);
      setIsSpeaking(false);
    }
  };

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
