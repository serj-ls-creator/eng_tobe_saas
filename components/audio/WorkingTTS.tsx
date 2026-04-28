'use client';

import { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface WorkingTTSProps {
  text: string;
  className?: string;
}

export function WorkingTTS({ text, className = '' }: WorkingTTSProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(true);

  const speak = async () => {
    try {
      setIsSpeaking(true);
      
      // Try working TTS APIs that don't block CORS
      const apis = [
        // Google Translate TTS (most reliable)
        `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=en&client=tw-ob`,
        // Alternative Google TTS
        `https://translate.google.com/translate_tts?ie=UTF-8&tl=en&q=${encodeURIComponent(text)}`,
        // Watson TTS (IBM Cloud - free tier)
        `https://text-to-speech-demo.ng.bluemix.net/api/synthesize?text=${encodeURIComponent(text)}&voice=en-US_MichaelV3Voice`,
        // Natural Readers TTS
        `https://api.naturalreaders.com/v2/tts/?msg=${encodeURIComponent(text)}&lang=en-US`,
        // Voice RSS TTS (free tier)
        `https://api.voicerss.org/?key=demo&hl=en-us&src=${encodeURIComponent(text)}&c=mp3`,
      ];

      let audioPlayed = false;

      for (const apiUrl of apis) {
        try {
          console.log(`🔍 Trying API: ${apiUrl}`);
          
          const audio = new Audio();
          audio.src = apiUrl;
          audio.crossOrigin = 'anonymous';
          
          const result = await new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
              setIsSpeaking(false);
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
              setIsSpeaking(false);
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
          setIsSpeaking(false);
          continue;
        }
      }

      // If all APIs failed, try a simple approach
      console.log('🔄 All APIs failed, trying simple approach...');
      await trySimpleApproach();
      
    } catch (error) {
      console.error('❌ TTS Error:', error);
      setIsSpeaking(false);
      setIsSupported(false);
    }
  };

  const trySimpleApproach = async () => {
    return new Promise((resolve, reject) => {
      try {
        // Create a data URI with a simple beep to indicate TTS attempted
        const beepData = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBi+Gy+/TgjMGHm7A7+OZURE';
        
        const audio = new Audio(beepData);
        
        audio.onplay = () => {
          console.log('🔊 Beep played (TTS unavailable)');
          setIsSpeaking(false);
        };

        audio.onended = () => {
          console.log('🔊 Beep ended');
          setIsSpeaking(false);
          resolve(true);
        };

        audio.onerror = () => {
          console.log('❌ Even beep failed');
          setIsSpeaking(false);
          setIsSupported(false);
          reject(new Error('No audio available'));
        };

        audio.play().catch(reject);
        
      } catch (error) {
        console.error('❌ Simple approach failed:', error);
        setIsSpeaking(false);
        setIsSupported(false);
        reject(error);
      }
    });
  };

  const stopSpeaking = () => {
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
