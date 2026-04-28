'use client';

import { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface GoogleTextToSpeechProps {
  text: string;
  className?: string;
}

export function GoogleTextToSpeech({ text, className = '' }: GoogleTextToSpeechProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(true);

  const speak = () => {
    try {
      setIsSpeaking(true);
      
      // Create audio element with Google Translate TTS
      const audio = new Audio();
      audio.src = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=en&client=tw-ob`;
      audio.crossOrigin = 'anonymous';
      
      let audioStarted = false;
      
      audio.onplay = () => {
        console.log('Audio started playing');
        audioStarted = true;
        setIsSpeaking(true);
      };
      
      audio.onended = () => {
        console.log('Audio ended');
        setIsSpeaking(false);
      };
      
      audio.onerror = (error) => {
        console.error('Audio error:', error);
        if (!audioStarted) {
          setIsSpeaking(false);
          console.log('Falling back to browser TTS');
          fallbackToBrowserTTS();
        }
      };
      
      // Set timeout for fallback
      const fallbackTimeout = setTimeout(() => {
        if (!audioStarted) {
          console.log('Audio timeout, falling back to browser TTS');
          setIsSpeaking(false);
          fallbackToBrowserTTS();
        }
      }, 2000);
      
      audio.play().then(() => {
        console.log('Audio play initiated');
      }).catch(error => {
        console.error('Audio play error:', error);
        clearTimeout(fallbackTimeout);
        setIsSpeaking(false);
        console.log('Immediate fallback to browser TTS');
        fallbackToBrowserTTS();
      });
      
    } catch (error) {
      console.error('TTS Error:', error);
      setIsSpeaking(false);
      fallbackToBrowserTTS();
    }
  };

  const fallbackToBrowserTTS = () => {
    try {
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        
        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => {
          setIsSpeaking(false);
          setIsSupported(false);
        };
        
        window.speechSynthesis.speak(utterance);
      }
    } catch (error) {
      console.error('Fallback TTS error:', error);
      setIsSpeaking(false);
      setIsSupported(false);
    }
  };

  const stopSpeaking = () => {
    // Stop any audio
    const audios = document.getElementsByTagName('audio');
    for (let i = 0; i < audios.length; i++) {
      audios[i].pause();
      audios[i].currentTime = 0;
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
      title={isSpeaking ? 'Stop speaking' : 'Speak text (Google English)'}
    >
      {isSpeaking ? (
        <VolumeX className="w-4 h-4" />
      ) : (
        <Volume2 className="w-4 h-4" />
      )}
    </button>
  );
}
