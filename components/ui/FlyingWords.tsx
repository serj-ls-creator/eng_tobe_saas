'use client';

interface FlyingWordsProps {
  words: string[];
}

export function FlyingWords({ words }: FlyingWordsProps) {
  const configs = words.map((word, i) => {
    const op = (0.06 + Math.random() * 0.1).toFixed(2);
    const dur = (22 + Math.random() * 18).toFixed(1) + 's';
    const mx = (Math.random() > 0.5 ? 1 : -1) * (25 + Math.random() * 40) + 'px';
    const tilt = (Math.random() > 0.5 ? 1 : -1) * (3 + Math.random() * 8) + 'deg';
    const top = (20 + Math.random() * 80).toFixed(0) + 'vh';
    const left = (5 + (i / words.length) * 85).toFixed(0) + '%';
    const size = i % 3 === 0 ? 'text-sm' : i % 3 === 1 ? 'text-base' : 'text-lg';

    return { word, op, dur, mx, tilt, top, left, size };
  });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {configs.map((c, i) => (
        <div
          key={i}
          className={`flying-word ${c.size}`}
          style={{
            '--op': c.op,
            '--dur': c.dur,
            '--mx': c.mx,
            '--my': '0px',
            '--tilt': c.tilt,
            top: c.top,
            left: c.left,
          } as React.CSSProperties}
        >
          {c.word}
        </div>
      ))}
    </div>
  );
}
