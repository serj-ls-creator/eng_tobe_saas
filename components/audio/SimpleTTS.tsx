'use client';

import { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface SimpleTTSProps {
  text: string;
  className?: string;
}

export function SimpleTTS({ text, className = '' }: SimpleTTSProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(true);

  const speak = () => {
    try {
      if (!('speechSynthesis' in window)) {
        console.log('Speech synthesis not supported');
        setIsSupported(false);
        return;
      }

      setIsSpeaking(true);
      
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      // Get voices and try to force English
      const voices = window.speechSynthesis.getVoices();
      console.log('Available voices:', voices.map(v => `${v.name} (${v.lang})`));
      
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Force English settings
      utterance.lang = 'en-US';
      utterance.rate = 0.8; // Slower for better comprehension
      utterance.pitch = 1.0;
      utterance.volume = 1.0;
      
      // Try to find any voice that mentions English
      let selectedVoice = null;
      
      // First try: exact en-US
      selectedVoice = voices.find(voice => voice.lang === 'en-US');
      
      // Second try: any English variant
      if (!selectedVoice) {
        selectedVoice = voices.find(voice => voice.lang.startsWith('en'));
      }
      
      // Third try: voice with 'English' in name
      if (!selectedVoice) {
        selectedVoice = voices.find(voice => voice.name.toLowerCase().includes('english'));
      }
      
      // Fourth try: any voice (last resort)
      if (!selectedVoice && voices.length > 0) {
        selectedVoice = voices[0];
        console.log('Using first available voice as last resort:', selectedVoice.name);
      }
      
      if (selectedVoice) {
        utterance.voice = selectedVoice;
        console.log('Selected voice:', selectedVoice.name, selectedVoice.lang);
      }
      
      utterance.onstart = () => {
        console.log('Speech started');
        setIsSpeaking(true);
      };
      
      utterance.onend = () => {
        console.log('Speech ended');
        setIsSpeaking(false);
      };
      
      utterance.onerror = (event) => {
        console.error('Speech error:', event);
        setIsSpeaking(false);
      };
      
      // Small delay to ensure settings are applied
      setTimeout(() => {
        window.speechSynthesis.speak(utterance);
      }, 100);
      
    } catch (error) {
      console.error('TTS Error:', error);
      setIsSpeaking(false);
      setIsSupported(false);
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
      <div className={`flex items-center text-zinc-500 ${className}`}>
        <VolumeX className="w-4 h-4" />
      </div>
    );
  }

  return (
    <button
      onClick={isSpeaking ? stopSpeaking : speak}
      className={`flex items-center justify-center w-8 h-8 rounded-lg bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-400 transition-colors ${className}`}
      title={isSpeaking ? 'Stop speaking' : 'Speak text (Try to force English)'}
    >
      {isSpeaking ? (
        <VolumeX className="w-4 h-4" />
      ) : (
        <Volume2 className="w-4 h-4" />
      )}
    </button>
  );
}
