'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function IntroAnimation() {
  const [showIntro, setShowIntro] = useState(true);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Check if we've already shown intro this session
    if (sessionStorage.getItem('introShown')) {
      setShowIntro(false);
      return;
    }

    const timers = [
      setTimeout(() => setStage(1), 500),
      setTimeout(() => setStage(2), 1200),
      setTimeout(() => setStage(3), 2000),
      setTimeout(() => {
        setShowIntro(false);
        sessionStorage.setItem('introShown', 'true');
      }, 2800),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="fixed inset-0 z-[200] bg-black flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            style={{
              background: 'radial-gradient(circle at center, #ff10f0 0%, transparent 50%), radial-gradient(circle at 30% 70%, #00ffff 0%, transparent 40%), radial-gradient(circle at 70% 30%, #39ff14 0%, transparent 40%)',
            }}
          />

          {/* Main content */}
          <div className="relative text-center">
            {/* Stars burst */}
            <AnimatePresence>
              {stage >= 1 && (
                <>
                  {[...Array(12)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="absolute text-2xl"
                      initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                        x: Math.cos((i * Math.PI * 2) / 12) * 150,
                        y: Math.sin((i * Math.PI * 2) / 12) * 150,
                      }}
                      transition={{ duration: 1, delay: i * 0.05 }}
                      style={{ color: ['#ff10f0', '#00ffff', '#39ff14', '#fff700'][i % 4] }}
                    >
                      ✦
                    </motion.span>
                  ))}
                </>
              )}
            </AnimatePresence>

            {/* Name reveal */}
            <motion.h1
              className="text-6xl md:text-8xl font-bold impact-font"
              initial={{ opacity: 0, scale: 0.5, filter: 'blur(20px)' }}
              animate={stage >= 1 ? {
                opacity: 1,
                scale: 1,
                filter: 'blur(0px)',
              } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: 'linear-gradient(90deg, #ff10f0, #00ffff, #39ff14)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 60px rgba(255, 16, 240, 0.5)',
              }}
            >
              WILLEMILK
            </motion.h1>

            {/* Underline */}
            <motion.div
              className="h-1 mx-auto mt-4 rounded-full"
              initial={{ width: 0, opacity: 0 }}
              animate={stage >= 2 ? { width: '80%', opacity: 1 } : {}}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              style={{
                background: 'linear-gradient(90deg, #ff10f0, #00ffff, #39ff14)',
                maxWidth: '300px',
              }}
            />

            {/* Loading dots */}
            <motion.div
              className="mt-6 flex justify-center gap-2"
              initial={{ opacity: 0 }}
              animate={stage >= 2 ? { opacity: 1 } : {}}
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-2 h-2 rounded-full bg-[#00ffff]"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.15,
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Corner decorations */}
          <motion.div
            className="absolute top-8 left-8 text-4xl"
            initial={{ opacity: 0, rotate: -180 }}
            animate={stage >= 1 ? { opacity: 0.5, rotate: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            ✦
          </motion.div>
          <motion.div
            className="absolute bottom-8 right-8 text-4xl"
            initial={{ opacity: 0, rotate: 180 }}
            animate={stage >= 1 ? { opacity: 0.5, rotate: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            ✦
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
