'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaYoutube, FaTiktok, FaInstagram, FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiApplemusic } from 'react-icons/si';
import NowPlaying from './_components/NowPlaying';
import VisitorCounter from './_components/VisitorCounter';
import PageTransition from './_components/PageTransition';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Willemilk',
    icon: <FaGithub className="w-6 h-6" />,
    description: 'Random projects, mostly school stuff (most of my repos are private!)',
    color: '#39ff14',
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@willemilk1942',
    icon: <FaYoutube className="w-6 h-6" />,
    description: 'Create gaming videos mostly geometry dash… not really "trying to make it", just sharing stuff!',
    color: '#ff0055',
  },
  {
    name: 'Twitter / X',
    url: 'https://x.com/WillemdeWit040',
    icon: <FaXTwitter className="w-6 h-6" />,
    description: 'Mostly scrolling and watching people argue 😭',
    color: '#00ffff',
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@willemdewit10',
    icon: <FaTiktok className="w-6 h-6" />,
    description: 'Using less now because of Reels (new account cant login to the old one anymore)',
    color: '#ff10f0',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/willemilk/',
    icon: <FaInstagram className="w-6 h-6" />,
    description: 'Life stuff and reels doomscrolling',
    color: '#ff6600',
  },
  {
    name: 'Apple Music',
    url: 'https://music.apple.com/profile/wjpmdewit',
    icon: <SiApplemusic className="w-6 h-6" />,
    description: "Stuff I'm listening to lately",
    color: '#ff10f0',
  },
  {
    name: 'Discord',
    url: '#',
    icon: <FaDiscord className="w-6 h-6" />,
    description: 'Willemilk - feel free to add me i like talking to randoms',
    color: '#5865F2',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col items-center p-4 sm:p-6 md:p-8">
        <main className="w-full max-w-2xl flex flex-col items-center">
          {/* Header */}
          <motion.div
            className="text-center mb-10 mt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 gradient-text"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Hey, I&apos;m Willem
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg text-gray-400 max-w-md mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              this is my linktree about me erm idunno tbh but just take a look
            </motion.p>

            {/* Divider */}
            <motion.div
              className="mt-6 flex items-center justify-center gap-4"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#ff10f0]/50" />
              <motion.span
                className="text-lg text-[#00ffff]"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                ✦
              </motion.span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#00ffff]/50" />
            </motion.div>
          </motion.div>

          {/* Navigation */}
          <motion.nav
            className="flex gap-4 justify-center mb-8 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {['About', 'Cool Stuff'].map((item) => (
              <motion.a
                key={item}
                href={item === 'About' ? '/about' : '/cool-stuff'}
                className="relative px-6 py-3 rounded-full font-semibold text-sm overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ff10f0] via-[#00ffff] to-[#39ff14] opacity-20 group-hover:opacity-30 transition-opacity" />
                <span className="absolute inset-[1px] rounded-full bg-[#0a0a0a]" />
                <span className="relative z-10 text-white group-hover:text-[#00ffff] transition-colors">
                  {item}
                </span>
              </motion.a>
            ))}
          </motion.nav>

          {/* Now Playing */}
          <motion.div
            className="mb-8 w-full max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <NowPlaying />
          </motion.div>

          {/* Social Links Grid */}
          <motion.div
            className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target={link.url !== '#' ? '_blank' : undefined}
                rel={link.url !== '#' ? 'noopener noreferrer' : undefined}
                className="relative p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm group overflow-hidden"
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  y: -2,
                  borderColor: `${link.color}30`,
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${link.color}10 0%, transparent 70%)`,
                  }}
                />

                <div className="relative z-10 flex items-center gap-4">
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{
                      backgroundColor: `${link.color}15`,
                      color: link.color,
                    }}
                  >
                    {link.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-white mb-0.5 group-hover:text-[#fff] transition-colors">
                      {link.name}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 group-hover:text-gray-400 transition-colors">
                      {link.description}
                    </p>
                  </div>
                  <motion.span
                    className="text-gray-600 group-hover:text-gray-400 transition-colors text-sm"
                    initial={{ x: 0, opacity: 0.5 }}
                    whileHover={{ x: 3, opacity: 1 }}
                  >
                    →
                  </motion.span>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Visitor Counter */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <VisitorCounter />
          </motion.div>

          {/* Footer */}
          <motion.div
            className="py-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="flex items-center justify-center gap-4 text-lg">
              <motion.span
                className="text-[#ff10f0]/60"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ♥
              </motion.span>
              <motion.span
                className="text-[#00ffff]/60"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                ✦
              </motion.span>
              <motion.span
                className="text-[#39ff14]/60"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                ♥
              </motion.span>
            </div>
          </motion.div>
        </main>
      </div>
    </PageTransition>
  );
}
