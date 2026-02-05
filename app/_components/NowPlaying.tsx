'use client';

import { motion } from 'framer-motion';

const bars = [3, 7, 5, 9, 4, 8, 6, 10, 3, 7, 5, 8];

export default function NowPlaying() {
  return (
    <motion.div
      className="w-full p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm"
      whileHover={{ borderColor: 'rgba(255, 16, 240, 0.15)' }}
    >
      <div className="flex items-center gap-3">
        <motion.div
          className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff10f0]/20 via-[#00ffff]/20 to-[#39ff14]/20 flex items-center justify-center text-xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        >
          ♪
        </motion.div>
        <div className="flex-1 min-w-0">
          <div className="text-[10px] text-[#39ff14]/70 mb-0.5 font-medium tracking-wide">
            NOW PLAYING
          </div>
          <div className="text-sm text-white font-medium truncate">
            something epic
          </div>
          <div className="text-xs text-gray-500 truncate">
            probably geometry dash music
          </div>
        </div>
      </div>

      {/* Equalizer bars */}
      <div className="flex gap-[3px] mt-3 justify-center items-end h-4">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="w-1 rounded-full bg-gradient-to-t from-[#ff10f0]/60 to-[#00ffff]/60"
            animate={{
              height: [`${h * 8}%`, `${((h + 5) % 10 + 3) * 8}%`, `${h * 8}%`],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.05,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
