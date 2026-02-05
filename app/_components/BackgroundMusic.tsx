'use client';

import { useState, useRef, useEffect } from 'react';

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Auto-play after first user interaction with the page
    const handleInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
      }
    };

    document.addEventListener('click', handleInteraction, { once: true });
    return () => document.removeEventListener('click', handleInteraction);
  }, [hasInteracted]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="https://cdn.discordapp.com/attachments/1234567890/femtanyl.mp3"
      />

      {/* Floating music control button */}
      <button
        onClick={togglePlay}
        className="fixed bottom-4 right-4 z-[100] w-14 h-14 rounded-full neon-box bg-black/80 backdrop-blur-sm flex items-center justify-center text-2xl hover:scale-110 transition-transform group"
        style={{ borderColor: isPlaying ? '#39ff14' : '#ff10f0' }}
        title={isPlaying ? 'Pause music' : 'Play music'}
      >
        <span className={`${isPlaying ? 'animate-[spin-slow_2s_linear_infinite]' : ''}`}>
          {isPlaying ? '♪' : '▶'}
        </span>

        {/* Pulse ring when playing */}
        {isPlaying && (
          <span className="absolute inset-0 rounded-full border-2 border-[#39ff14] animate-ping opacity-30" />
        )}
      </button>

      {/* Now playing indicator */}
      {isPlaying && (
        <div className="fixed bottom-20 right-4 z-[100] px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-sm border border-[#39ff14] text-xs">
          <span className="text-[#39ff14] animate-[color-cycle_3s_linear_infinite]">♫</span>
          <span className="text-gray-300 ml-2">Femtanyl</span>
        </div>
      )}
    </>
  );
}
