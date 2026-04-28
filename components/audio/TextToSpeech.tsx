'use client';

import { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface TextToSpeechProps {
  text: string;
  className?: string;
}

export function TextToSpeech({ text, className = '' }: TextToSpeechProps) {
  const language = 'en-US'; // Fixed to English
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(true);

  // Ensure voices are loaded
  useEffect(() => {
    const loadVoices = () => {
      window.speechSynthesis.getVoices();
    };

    // Load voices immediately
    loadVoices();
    
    // Also load when voices change (Chrome fix)
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  const speak = () => {
    if (!('speechSynthesis' in window)) {
      setIsSupported(false);
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Force English settings
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;

    // Get all available voices
    const voices = window.speechSynthesis.getVoices();
    console.log('Available voices:', voices.map(v => `${v.name} (${v.lang})`));

    // Try multiple approaches to force English
    let voiceSet = false;

    // Approach 1: Find exact en-US voice
    const usVoice = voices.find(voice => voice.lang === 'en-US');
    if (usVoice) {
      utterance.voice = usVoice;
      voiceSet = true;
      console.log('Using US voice:', usVoice.name);
    }

    // Approach 2: Find any English voice
    if (!voiceSet) {
      const anyEnglishVoice = voices.find(voice => voice.lang.startsWith('en-'));
      if (anyEnglishVoice) {
        utterance.voice = anyEnglishVoice;
        voiceSet = true;
        console.log('Using any English voice:', anyEnglishVoice.name, anyEnglishVoice.lang);
      }
    }

    // Approach 3: Force language setting multiple times
    utterance.lang = 'en-US';
    
    utterance.onstart = () => {
      console.log('Speech started with voice:', utterance.voice?.name, utterance.voice?.lang);
      setIsSpeaking(true);
    };
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = (event) => {
      console.error('Speech error:', event);
      setIsSpeaking(false);
      setIsSupported(false);
    };

    // Small delay to ensure voice is set
    setTimeout(() => {
      window.speechSynthesis.speak(utterance);
    }, 100);
  };

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  if (!isSupported) {
    return (
      <div className={`flex items-center text-zinc-500 ${className}`}>
        <VolumeX className="w-4 h-4" />
      </div>
    );
  }

  return (
    <button
      onClick={isSpeaking ? stopSpeaking : speak}
      className={`flex items-center justify-center w-8 h-8 rounded-lg bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-400 transition-colors ${className}`}
      title={isSpeaking ? 'Stop speaking (English)' : 'Speak text (English)'}
    >
      {isSpeaking ? (
        <VolumeX className="w-4 h-4" />
      ) : (
        <Volume2 className="w-4 h-4" />
      )}
    </button>
  );
}
