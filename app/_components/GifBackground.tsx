'use client';

export default function GifBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Animated GIF background - using a classic space/stars gif */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `url('https://i.pinimg.com/originals/4e/de/6e/4ede6ef6f3a842cf4387372d61893628.gif')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Vignette overlay for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.7) 100%)',
        }}
      />
    </div>
  );
}
