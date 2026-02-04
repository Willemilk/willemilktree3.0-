'use client';

const bars = [3, 7, 5, 9, 4, 8, 6, 10, 3, 7, 5, 8, 4, 9, 6, 11];

export default function NowPlaying() {
  return (
    <div className="neon-box bg-black/70 p-4 rounded-lg max-w-xs w-full backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <div className="w-14 h-14 bg-gradient-to-br from-[#ff10f0] via-[#00ffff] to-[#39ff14] rounded-lg animate-[spin-slow_4s_linear_infinite] flex items-center justify-center text-2xl shadow-[0_0_20px_rgba(255,16,240,0.5)]">
          ♪
        </div>
        <div className="flex-1 min-w-0">
          <div className="pixel-font text-[8px] text-[#39ff14] mb-1 animate-[color-cycle_3s_linear_infinite]">
            NOW PLAYING
          </div>
          <div className="text-sm text-white font-bold truncate">
            something epic
          </div>
          <div className="text-xs text-[#00ffff] truncate">
            probably geometry dash music
          </div>
        </div>
      </div>
      {/* Equalizer bars */}
      <div className="flex gap-[3px] mt-3 justify-center items-end h-5">
        {bars.map((h, i) => (
          <div
            key={i}
            className="w-1.5 rounded-full"
            style={{
              height: `${h * 10}%`,
              background: `linear-gradient(to top, #ff10f0, #00ffff)`,
              animation: `float ${0.4 + (i % 4) * 0.15}s ease-in-out infinite`,
              animationDelay: `${i * 0.08}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
