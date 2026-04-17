'use client';

import { useEffect, useRef } from 'react';

// Large static pool of English-learning vocabulary
const WORD_POOL = [
  // Grammar
  'Noun', 'Verb', 'Adjective', 'Adverb', 'Pronoun', 'Preposition', 'Conjunction',
  'Tense', 'Present', 'Past', 'Future', 'Perfect', 'Continuous', 'Passive', 'Active',
  'Singular', 'Plural', 'Article', 'Clause', 'Phrase', 'Sentence', 'Paragraph',
  // Vocabulary
  'Vocabulary', 'Synonym', 'Antonym', 'Idiom', 'Metaphor', 'Simile', 'Proverb',
  'Slang', 'Formal', 'Informal', 'Prefix', 'Suffix', 'Root', 'Etymology',
  // Skills
  'Fluency', 'Grammar', 'Pronunciation', 'Listening', 'Speaking', 'Reading', 'Writing',
  'Comprehension', 'Spelling', 'Dictation', 'Translation', 'Conversation', 'Dialogue',
  // Learning
  'Practice', 'Repeat', 'Memorize', 'Review', 'Progress', 'Improve', 'Master',
  'Study', 'Learn', 'Understand', 'Analyze', 'Recall', 'Focus', 'Motivation',
  // Words
  'Ambitious', 'Eloquent', 'Resilient', 'Sincere', 'Courageous', 'Generous',
  'Compassionate', 'Diligent', 'Authentic', 'Optimistic', 'Versatile', 'Innovative',
  'Determined', 'Confident', 'Empathetic', 'Persistent', 'Articulate', 'Insightful',
  // Phrases
  'Break a leg', 'Hit the books', 'Under the weather', 'Piece of cake',
  'Keep it up', 'Well done', 'Think twice', 'Speak up', 'Carry on',
  'Take notes', 'Good point', 'Make sense', 'Bear in mind', 'In a nutshell',
  // More vocabulary
  'Narrative', 'Context', 'Inference', 'Coherent', 'Elaborate', 'Demonstrate',
  'Evaluate', 'Summarize', 'Analyze', 'Justify', 'Interpret', 'Reflect',
  'Collaborate', 'Communicate', 'Negotiate', 'Persuade', 'Debate', 'Discuss',
  'Vocabulary', 'Diction', 'Rhetoric', 'Syntax', 'Semantics', 'Phonetics',
  'English', 'Language', 'Expression', 'Meaning', 'Definition', 'Usage',
];

const SIZES = [
  { cls: 'text-xs',   blur: '0px'   },
  { cls: 'text-sm',   blur: '0.3px' },
  { cls: 'text-sm',   blur: '0px'   },
  { cls: 'text-base', blur: '0.5px' },
  { cls: 'text-base', blur: '0px'   },
  { cls: 'text-lg',   blur: '0.8px' },
  { cls: 'text-xl',   blur: '1.2px' },
  { cls: 'text-2xl',  blur: '1.8px' },
  { cls: 'text-xs',   blur: '1px'   },
  { cls: 'text-sm',   blur: '0.6px' },
];

interface Config {
  word: string;
  op: string;
  dur: string;
  delay: string;
  mx: string;
  tilt: string;
  top: string;
  left: string;
  sizeIdx: number;
}

function makeConfig(i: number, total: number): Config {
  const word = WORD_POOL[Math.floor(Math.random() * WORD_POOL.length)];
  const op   = (0.05 + Math.random() * 0.15).toFixed(2);
  const dur  = (18 + Math.random() * 20).toFixed(1) + 's';
  const delay = -(Math.random() * 25).toFixed(1) + 's'; // negative = already mid-flight
  const mx   = (Math.random() > 0.5 ? 1 : -1) * (20 + Math.random() * 50) + 'px';
  const tilt = (Math.random() > 0.5 ? 1 : -1) * (2 + Math.random() * 12) + 'deg';
  const top  = (10 + Math.random() * 85).toFixed(0) + 'vh';
  const left = (Math.random() * 90).toFixed(0) + '%';
  const sizeIdx = Math.floor(Math.random() * SIZES.length);
  return { word, op, dur, delay, mx, tilt, top, left, sizeIdx };
}

const COUNT = 40; // number of simultaneous flying words

export function FlyingWordsEng() {
  // Stable configs generated once on mount (no SSR mismatch)
  const configs = useRef<Config[]>([]);
  if (configs.current.length === 0) {
    configs.current = Array.from({ length: COUNT }, (_, i) => makeConfig(i, COUNT));
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {configs.current.map((c, i) => {
        const { cls, blur } = SIZES[c.sizeIdx];
        return (
          <div
            key={i}
            className={`flying-word ${cls}`}
            style={{
              '--op': c.op,
              '--dur': c.dur,
              '--mx': c.mx,
              '--my': '0px',
              '--tilt': c.tilt,
              top: c.top,
              left: c.left,
              animationDelay: c.delay,
              filter: blur !== '0px' ? `blur(${blur})` : undefined,
            } as React.CSSProperties}
          >
            {c.word}
          </div>
        );
      })}
    </div>
  );
}
