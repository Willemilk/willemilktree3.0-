'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  char: string;
  rotation: number;
  rotationSpeed: number;
  life: number;
  maxLife: number;
}

const COLORS = ['#ff10f0', '#00ffff', '#39ff14', '#fff700', '#ff6600', '#ff0055'];
const CHARS = ['✨', '⭐', '★', '♥', '♪', '✦', '✧', '☆', '💀', '♡', 'X_X'];

export default function SparkleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Spawn ambient particles
    const spawnAmbient = () => {
      if (particlesRef.current.length < 60) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: -20,
          vx: (Math.random() - 0.5) * 1.5,
          vy: Math.random() * 2 + 0.5,
          size: Math.random() * 16 + 8,
          opacity: Math.random() * 0.8 + 0.2,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          char: CHARS[Math.floor(Math.random() * CHARS.length)],
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.05,
          life: 0,
          maxLife: Math.random() * 300 + 200,
        });
      }
    };

    // Spawn mouse trail particles
    const spawnMouseTrail = (x: number, y: number) => {
      if (particlesRef.current.length < 120) {
        for (let i = 0; i < 2; i++) {
          particlesRef.current.push({
            x: x + (Math.random() - 0.5) * 20,
            y: y + (Math.random() - 0.5) * 20,
            vx: (Math.random() - 0.5) * 3,
            vy: (Math.random() - 0.5) * 3 - 1,
            size: Math.random() * 14 + 6,
            opacity: 1,
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
            char: ['✨', '⭐', '★', '♥', '✦'][Math.floor(Math.random() * 5)],
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.1,
            life: 0,
            maxLife: Math.random() * 60 + 40,
          });
        }
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      spawnMouseTrail(e.clientX, e.clientY);
    };
    window.addEventListener('mousemove', onMouseMove);

    let lastAmbient = 0;
    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (time - lastAmbient > 200) {
        spawnAmbient();
        lastAmbient = time;
      }

      particlesRef.current = particlesRef.current.filter(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;
        p.life++;
        p.opacity = Math.max(0, 1 - p.life / p.maxLife);

        if (p.life > p.maxLife || p.y > canvas.height + 20) return false;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.opacity;
        ctx.font = `${p.size}px serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(p.char, 0, 0);
        ctx.restore();

        return true;
      });

      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
