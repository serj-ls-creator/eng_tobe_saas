'use client';

import { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface StrictEnglishTTSProps {
  text: string;
  className?: string;
}

export function StrictEnglishTTS({ text, className = '' }: StrictEnglishTTSProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(true);

  const speak = () => {
    try {
      if (!('speechSynthesis' in window)) {
        console.log('Speech synthesis not supported');
        setIsSupported(false);
        return;
      }

      // Get voices and check for English
      const voices = window.speechSynthesis.getVoices();
      console.log('Available voices:', voices.map(v => `${v.name} (${v.lang})`));
      
      // Filter ONLY English voices
      const englishVoices = voices.filter(voice => 
        voice.lang.startsWith('en')
      );
      
      console.log('English voices found:', englishVoices.length);
      
      if (englishVoices.length === 0) {
        console.log('❌ NO ENGLISH VOICES AVAILABLE - DISABLING TTS');
        setIsSupported(false);
        return;
      }

      setIsSpeaking(true);
      
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Force English settings
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;
      
      // Use the first English voice
      utterance.voice = englishVoices[0];
      console.log('✅ Using English voice:', englishVoices[0].name, englishVoices[0].lang);
      
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
        setIsSupported(false);
      };
      
      // Speak with English voice
      window.speechSynthesis.speak(utterance);
      
    } catch (error) {
      console.error('❌ TTS Error:', error);
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
