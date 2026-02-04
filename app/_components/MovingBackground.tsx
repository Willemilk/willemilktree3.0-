'use client';

export default function MovingBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated gradient blobs */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.07] blur-[120px]"
        style={{
          background: 'radial-gradient(circle, #ff10f0, transparent)',
          animation: 'float 8s ease-in-out infinite',
          top: '-10%',
          left: '-10%',
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.07] blur-[120px]"
        style={{
          background: 'radial-gradient(circle, #00ffff, transparent)',
          animation: 'float-reverse 10s ease-in-out infinite',
          top: '40%',
          right: '-10%',
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.05] blur-[100px]"
        style={{
          background: 'radial-gradient(circle, #39ff14, transparent)',
          animation: 'float 12s ease-in-out infinite',
          bottom: '-5%',
          left: '30%',
        }}
      />
      <div
        className="absolute w-[350px] h-[350px] rounded-full opacity-[0.06] blur-[100px]"
        style={{
          background: 'radial-gradient(circle, #fff700, transparent)',
          animation: 'float-reverse 9s ease-in-out infinite',
          top: '20%',
          left: '50%',
        }}
      />

      {/* Grid lines overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          animation: 'bg-scroll 20s linear infinite',
        }}
      />
    </div>
  );
}
