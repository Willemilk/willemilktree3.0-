'use client';

export default function Stars() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Star decorations */}
      <div className="absolute top-10 left-10 text-4xl animate-[spin-slow_3s_linear_infinite] text-[#ff10f0]">
        ⭐
      </div>
      <div className="absolute top-20 right-20 text-3xl animate-[spin-slow_4s_linear_infinite] text-[#00ffff]">
        ★
      </div>
      <div className="absolute bottom-20 left-20 text-5xl animate-[float_3s_ease-in-out_infinite] text-[#00ff00]">
        ✨
      </div>
      <div className="absolute bottom-10 right-10 text-4xl animate-[float_2s_ease-in-out_infinite] text-[#ff0055]">
        ⭐
      </div>
      <div className="absolute top-1/2 left-5 text-3xl animate-[spin-slow_5s_linear_infinite] text-[#ff10f0]">
        ★
      </div>
      <div className="absolute top-1/3 right-10 text-4xl animate-[float_4s_ease-in-out_infinite] text-[#00ffff]">
        ✨
      </div>
    </div>
  );
}
