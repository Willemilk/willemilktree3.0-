'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function VisitorCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const base = 50000;
    const daysSince = Math.floor((Date.now() - new Date('2024-01-01').getTime()) / 86400000);
    setCount(base + daysSince * 10 + Math.floor(Math.random() * 10));
  }, []);

  return (
    <motion.div
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.06]"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ borderColor: 'rgba(57, 255, 20, 0.2)' }}
    >
      <span className="text-[10px] text-gray-500 font-medium">visitors</span>
      <span className="text-xs text-[#39ff14] font-mono font-medium">
        {count.toLocaleString()}
      </span>
    </motion.div>
  );
}
