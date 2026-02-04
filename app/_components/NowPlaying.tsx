'use client';

export default function NowPlaying() {
  return (
    <div className="dashed-border bg-black/60 p-4 rounded-lg max-w-xs mx-auto">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-br from-[#ff10f0] to-[#00ffff] rounded animate-[spin-slow_4s_linear_infinite] flex items-center justify-center text-xl">
          ♪
        </div>
        <div className="flex-1 min-w-0">
          <div className="pixel-font text-[8px] text-[#39ff14] mb-1 animate-[color-cycle_3s_linear_infinite]">
            ♫ NOW PLAYING ♫
          </div>
          <div className="text-sm text-white font-bold truncate">
            something epic
          </div>
          <div className="text-xs text-[#00ffff] truncate">
            probably geometry dash music
          </div>
        </div>
      </div>
      {/* Fake equalizer bars */}
      <div className="flex gap-1 mt-3 justify-center items-end h-4">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="w-1.5 bg-gradient-to-t from-[#ff10f0] to-[#00ffff] rounded-full"
            style={{
              height: `${Math.random() * 100}%`,
              animation: `float ${0.5 + Math.random() * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
