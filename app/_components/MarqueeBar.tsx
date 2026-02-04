'use client';

export default function MarqueeBar() {
  const symbols = "★ ♥ ✦ ♪ ✧ ☆ ♡ ✨ ★ ♥ ✦ ♪ ✧ ☆ ♡ ✨ ★ ♥ ✦ ♪ ✧ ☆ ♡ ✨ ★ ♥ ✦ ♪ ✧ ☆ ♡ ✨ ★ ♥ ✦ ♪ ✧ ☆ ♡ ✨ ";

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-[#ff10f0] via-[#00ffff] to-[#39ff14] py-1.5 relative">
      <div className="marquee-track whitespace-nowrap">
        <span className="text-black font-bold text-sm px-4">
          {symbols}
        </span>
        <span className="text-black font-bold text-sm px-4">
          {symbols}
        </span>
      </div>
    </div>
  );
}
