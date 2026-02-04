'use client';

export default function Stars() {
  const items = [
    { emoji: '⭐', top: '5%', left: '3%', size: '2rem', anim: 'spin-slow', dur: '3s', color: '#ff10f0' },
    { emoji: '★', top: '12%', right: '8%', size: '1.8rem', anim: 'spin-slow', dur: '4s', color: '#00ffff' },
    { emoji: '✨', bottom: '15%', left: '5%', size: '2.5rem', anim: 'float', dur: '3s', color: '#39ff14' },
    { emoji: '♥', top: '25%', right: '3%', size: '1.5rem', anim: 'float', dur: '2.5s', color: '#ff0055' },
    { emoji: '★', top: '45%', left: '2%', size: '1.8rem', anim: 'spin-slow', dur: '5s', color: '#ff10f0' },
    { emoji: '✨', top: '30%', right: '5%', size: '2rem', anim: 'float', dur: '4s', color: '#00ffff' },
    { emoji: '♥', bottom: '30%', right: '4%', size: '1.3rem', anim: 'float-reverse', dur: '3.5s', color: '#ff10f0' },
    { emoji: '⭐', bottom: '5%', right: '12%', size: '2rem', anim: 'spin-slow', dur: '6s', color: '#fff700' },
    { emoji: '☆', top: '60%', left: '4%', size: '1.6rem', anim: 'float', dur: '4.5s', color: '#39ff14' },
    { emoji: '♪', top: '70%', right: '6%', size: '1.5rem', anim: 'float-reverse', dur: '3s', color: '#ff6600' },
    { emoji: '💀', top: '80%', left: '7%', size: '1.4rem', anim: 'spin-slow', dur: '7s', color: '#00ffff' },
    { emoji: 'X_X', top: '15%', left: '12%', size: '0.8rem', anim: 'float', dur: '5s', color: '#ff10f0' },
    { emoji: ':3', bottom: '25%', left: '3%', size: '0.8rem', anim: 'float-reverse', dur: '4s', color: '#39ff14' },
    { emoji: '♡', top: '50%', right: '2%', size: '1.8rem', anim: 'float', dur: '3.5s', color: '#ff0055' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {items.map((item, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
            fontSize: item.size,
            color: item.color,
            animation: `${item.anim} ${item.dur} ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
            opacity: 0.7,
          }}
        >
          {item.emoji}
        </div>
      ))}
    </div>
  );
}
