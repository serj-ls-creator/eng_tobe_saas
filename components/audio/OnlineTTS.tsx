'use client';

import { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface OnlineTTSProps {
  text: string;
  className?: string;
}

export function OnlineTTS({ text, className = '' }: OnlineTTSProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(true);

  const speak = async () => {
    try {
      setIsSpeaking(true);
      
      // Try multiple TTS APIs
      const apis = [
        // Google Translate TTS
        `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=en&client=tw-ob`,
        // Alternative Google TTS
        `https://translate.google.com/translate_tts?ie=UTF-8&tl=en&q=${encodeURIComponent(text)}`,
        // Text-to-speech.org
        `https://text-to-speech.org/speech?text=${encodeURIComponent(text)}&lang=en`,
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
            }, 3000);

            audio.onplay = () => {
              clearTimeout(timeout);
              console.log('Audio started playing');
              setIsSpeaking(true);
              audioPlayed = true;
            };

            audio.onended = () => {
              clearTimeout(timeout);
              console.log('Audio ended');
              setIsSpeaking(false);
              resolve(true);
            };

            audio.onerror = (error) => {
              clearTimeout(timeout);
              console.error('Audio error:', error);
              reject(error);
            };

            audio.play().catch(reject);
          });

          if (result) {
            console.log('Successfully played audio');
            return;
          }
        } catch (error) {
          console.log(`API ${apiUrl} failed, trying next...`);
          continue;
        }
      }

      // If all APIs failed, try browser TTS with forced English
      console.log('All APIs failed, trying browser TTS with forced English');
      await tryBrowserTTS();
      
    } catch (error) {
      console.error('TTS Error:', error);
      setIsSpeaking(false);
      setIsSupported(false);
    }
  };

  const tryBrowserTTS = async () => {
    return new Promise((resolve, reject) => {
      try {
        if (!('speechSynthesis' in window)) {
          reject(new Error('Speech synthesis not supported'));
          return;
        }

        // Force reload voices
        window.speechSynthesis.cancel();
        const voices = window.speechSynthesis.getVoices();
        console.log('Available voices:', voices.map(v => `${v.name} (${v.lang})`));

        const utterance = new SpeechSynthesisUtterance(text);
        
        // Force English settings
        utterance.lang = 'en-US';
        utterance.rate = 0.8; // Slower rate
        utterance.pitch = 1.0;
        utterance.volume = 1.0;

        // Try to find any English voice
        const englishVoices = voices.filter(voice => 
          voice.lang.includes('en')
        );

        if (englishVoices.length > 0) {
          utterance.voice = englishVoices[0];
          console.log('Using English voice:', englishVoices[0].name);
        }

        utterance.onstart = () => {
          console.log('Browser TTS started');
          setIsSpeaking(true);
        };

        utterance.onend = () => {
          console.log('Browser TTS ended');
          setIsSpeaking(false);
          resolve(true);
        };

        utterance.onerror = (event) => {
          console.error('Browser TTS error:', event);
          setIsSpeaking(false);
          reject(event);
        };

        // Small delay to ensure settings are applied
        setTimeout(() => {
          window.speechSynthesis.speak(utterance);
        }, 100);

      } catch (error) {
        console.error('Browser TTS setup error:', error);
        reject(error);
      }
    });
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
    
    // Stop speech synthesis
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
      title={isSpeaking ? 'Stop speaking' : 'Speak text (English)'}
    >
      {isSpeaking ? (
        <VolumeX className="w-4 h-4" />
      ) : (
        <Volume2 className="w-4 h-4" />
      )}
    </button>
  );
}
