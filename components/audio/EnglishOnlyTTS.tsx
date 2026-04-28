'use client';

import { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface EnglishOnlyTTSProps {
  text: string;
  className?: string;
}

export function EnglishOnlyTTS({ text, className = '' }: EnglishOnlyTTSProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(true);

  const speak = async () => {
    try {
      setIsSpeaking(true);
      
      // Try multiple English-only TTS APIs
      const apis = [
        // Google Translate TTS - most reliable
        `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=en&client=tw-ob`,
        // Alternative Google TTS
        `https://translate.google.com/translate_tts?ie=UTF-8&tl=en&q=${encodeURIComponent(text)}`,
        // ResponsiveVoice (free tier)
        `https://responsivevoice.org/responsivevoice/getvoice.php?t=${encodeURIComponent(text)}&tl=en`,
        // ESpeak (web-based)
        `https://espeak.js.org/voice.html?text=${encodeURIComponent(text)}&voice=en`,
      ];

      let audioPlayed = false;

      for (const apiUrl of apis) {
        try {
          console.log(`Trying API: ${apiUrl}`);
          
          const audio = new Audio();
          audio.src = apiUrl;
          audio.crossOrigin = 'anonymous';
          
          const result = await new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
              reject(new Error('Audio timeout'));
            }, 5000);

            audio.onplay = () => {
              clearTimeout(timeout);
              console.log('✅ Audio started playing from:', apiUrl);
              setIsSpeaking(true);
              audioPlayed = true;
            };

            audio.onended = () => {
              clearTimeout(timeout);
              console.log('✅ Audio ended');
              setIsSpeaking(false);
              resolve(true);
            };

            audio.onerror = (error) => {
              clearTimeout(timeout);
              console.log('❌ Audio error for:', apiUrl);
              reject(error);
            };

            audio.play().catch(reject);
          });

          if (result) {
            console.log('🎉 Successfully played audio from:', apiUrl);
            return;
          }
        } catch (error) {
          console.log(`❌ API ${apiUrl} failed, trying next...`);
          continue;
        }
      }

      // If all APIs failed, show error
      console.log('❌ All English TTS APIs failed');
      setIsSpeaking(false);
      setIsSupported(false);
      
    } catch (error) {
      console.error('❌ TTS Error:', error);
      setIsSpeaking(false);
      setIsSupported(false);
    }
  };

  const stopSpeaking = () => {
    // Stop any audio elements
    const audios = document.getElementsByTagName('audio');
    for (let i = 0; i < audios.length; i++) {
      try {
        audios[i].pause();
        audios[i].currentTime = 0;
      } catch (e) {
        // Ignore errors
      }
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
