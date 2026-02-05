'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

// Container for staggered children
export const StaggerContainer = ({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    className={className}
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          delayChildren: delay,
          staggerChildren: 0.1,
        },
      },
    }}
  >
    {children}
  </motion.div>
);

// Fade up item
const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const FadeUp = ({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) => (
  <motion.div className={className} variants={fadeUpVariants}>
    {children}
  </motion.div>
);

// Scale in item
const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const ScaleIn = ({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) => (
  <motion.div className={className} variants={scaleInVariants}>
    {children}
  </motion.div>
);

// Hover scale effect
export const HoverScale = ({
  children,
  className = '',
  scale = 1.05,
}: {
  children: ReactNode;
  className?: string;
  scale?: number;
}) => (
  <motion.div
    className={className}
    whileHover={{ scale }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
  >
    {children}
  </motion.div>
);

// Glow pulse on hover
export const GlowCard = ({
  children,
  className = '',
  glowColor = '#ff10f0',
}: {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}) => (
  <motion.div
    className={className}
    whileHover={{
      boxShadow: `0 0 30px ${glowColor}40, 0 0 60px ${glowColor}20`,
    }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

// Text reveal character by character
export const TextReveal = ({
  text,
  className = '',
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) => (
  <motion.span className={className}>
    {text.split('').map((char, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          delay: delay + i * 0.03,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{ display: 'inline-block' }}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ))}
  </motion.span>
);
