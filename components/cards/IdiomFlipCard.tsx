'use client';

import { useState } from 'react';
import { Idiom } from '@/lib/idioms';

interface IdiomFlipCardProps {
  idiom: Idiom;
  isFlipped: boolean;
  onFlip: () => void;
}

export function IdiomFlipCard({ idiom, isFlipped, onFlip }: IdiomFlipCardProps) {
  return (
    <>
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes shake {
          0%, 100% { transform: rotateY(180deg) rotateZ(0deg); }
          25% { transform: rotateY(180deg) rotateZ(-1deg); }
          75% { transform: rotateY(180deg) rotateZ(1deg); }
        }
      `}</style>
      
      <div 
        className="mx-auto cursor-pointer max-w-full"
        style={{ 
          width: 'min(400px, 100% - 2rem)', 
          height: '220px',
          perspective: '1500px'
        }}
        onClick={onFlip}
      >
        <div 
          className="relative w-full h-full"
          style={{
            transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
          }}
        >
        {/* Front side */}
        <div 
          className="absolute inset-0 rounded-[32px] border border-white/10 flex flex-col justify-center items-center p-8"
          style={{ 
            backfaceVisibility: 'hidden',
            backgroundColor: '#0F172A'
          }}
        >
          <span className="absolute top-6 text-[10px] font-bold text-[#64748b] uppercase tracking-[0.2em]">
            Idiom
          </span>
          <p className="text-[clamp(20px,5vw,24px)] text-[#cbd5e1] text-center m-0 leading-relaxed">
            {idiom.idiom}
          </p>
          <div className="absolute bottom-6 text-[9px] text-[#475569] uppercase tracking-[0.1em]">
            Tap to flip
          </div>
        </div>

        {/* Back side */}
        <div 
          className="absolute inset-0 rounded-[32px] border border-white/10 flex flex-col justify-center items-center p-8"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
            backgroundSize: '200% 200%',
            borderColor: isFlipped ? 'rgba(34, 211, 238, 0.4)' : 'rgba(255, 255, 255, 0.1)',
            boxShadow: isFlipped ? '0 0 30px rgba(34, 211, 238, 0.15)' : 'none',
            transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
            animation: isFlipped ? 'gradientMove 6s ease infinite, shake 0.3s ease-in-out' : 'none'
          }}
        >
          <span className="absolute top-6 text-[10px] font-bold text-[#64748b] uppercase tracking-[0.2em]">
            Meaning
          </span>
          <p className="text-[clamp(16px,4vw,20px)] font-medium text-white text-center m-0 leading-tight">
            {idiom.meaning}
          </p>
          <div className="absolute bottom-6 text-[9px] text-cyan-400/60 uppercase tracking-[0.1em]">
            Expert Level
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
