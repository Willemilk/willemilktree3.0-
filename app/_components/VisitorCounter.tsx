'use client';

import { useState, useEffect } from 'react';

export default function VisitorCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Fake visitor counter that increments randomly
    const base = 48213;
    const daysSince = Math.floor((Date.now() - new Date('2024-01-01').getTime()) / 86400000);
    setCount(base + daysSince * 7 + Math.floor(Math.random() * 5));
  }, []);

  return (
    <div className="inline-block border-2 border-[#ff10f0] bg-black/80 px-4 py-2 rounded">
      <div className="pixel-font text-[10px] text-[#00ffff] mb-1 text-center">
        ★ VISITORS ★
      </div>
      <div className="pixel-font text-lg text-[#39ff14] text-center tracking-wider">
        {count.toLocaleString()}
      </div>
    </div>
  );
}
