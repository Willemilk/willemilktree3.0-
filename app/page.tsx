'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaYoutube, FaTiktok, FaInstagram, FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiApplemusic } from 'react-icons/si';
import NowPlaying from './_components/NowPlaying';
import VisitorCounter from './_components/VisitorCounter';
import PageTransition from './_components/PageTransition';
import { StaggerContainer, FadeUp, ScaleIn } from './_components/MotionElements';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Willemilk',
    icon: <FaGithub className="w-7 h-7" />,
    description: 'Random projects, mostly school stuff (most of my repos are private!)',
    gradient: 'from-[#39ff14] to-[#00ff88]',
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@willemilk1942',
    icon: <FaYoutube className="w-7 h-7" />,
    description: 'Create gaming videos mostly geometry dash… not really "trying to make it", just sharing stuff!',
    gradient: 'from-[#ff0055] to-[#ff4488]',
  },
  {
    name: 'Twitter / X',
    url: 'https://x.com/WillemdeWit040',
    icon: <FaXTwitter className="w-7 h-7" />,
    description: 'Mostly scrolling and watching people argue 😭',
    gradient: 'from-[#00ffff] to-[#0088ff]',
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@willemdewit10',
    icon: <FaTiktok className="w-7 h-7" />,
    description: 'Using less now because of Reels (new account cant login to the old one anymore)',
    gradient: 'from-[#ff10f0] to-[#ff6699]',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/willemilk/',
    icon: <FaInstagram className="w-7 h-7" />,
    description: 'Life stuff and reels doomscrolling',
    gradient: 'from-[#ff6600] to-[#ffaa00]',
  },
  {
    name: 'Apple Music',
    url: 'https://music.apple.com/profile/wjpmdewit',
    icon: <SiApplemusic className="w-7 h-7" />,
    description: "Stuff I'm listening to lately",
    gradient: 'from-[#ff10f0] to-[#aa00ff]',
  },
  {
    name: 'Discord',
    url: '#',
    icon: <FaDiscord className="w-7 h-7" />,
    description: 'Willemilk - feel free to add me i like talking to randoms',
    gradient: 'from-[#5865F2] to-[#00ffff]',
  },
];

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col items-center justify-start p-4 md:p-8">
        <main className="w-full max-w-3xl flex flex-col items-center">
          {/* Header with text reveal */}
          <motion.div
            className="text-center mb-8 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
              initial={{ opacity: 0, y: 50, filter: 'blur(20px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              style={{
                background: 'linear-gradient(135deg, #ff10f0 0%, #00ffff 50%, #39ff14 100%)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'rainbow 4s ease infinite',
              }}
            >
              Hey, I&apos;m Willem
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              this is my linktree about me erm idunno tbh but just take a look
            </motion.p>

            {/* Animated divider */}
            <motion.div
              className="my-6 flex items-center justify-center gap-4"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <motion.span
                className="text-2xl text-[#fff700]"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                ★
              </motion.span>
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#ff10f0] to-transparent" />
              <motion.span
                className="text-xl text-[#00ffff]"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✦
              </motion.span>
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#00ffff] to-transparent" />
              <motion.span
                className="text-2xl text-[#fff700]"
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                ★
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Navigation */}
          <motion.nav
            className="flex gap-4 justify-center mb-10 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {['About', 'Cool Stuff'].map((item, i) => (
              <motion.a
                key={item}
                href={item === 'About' ? '/about' : '/cool-stuff'}
                className="relative px-8 py-4 rounded-xl font-bold text-lg overflow-hidden group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                {/* Gradient border */}
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#ff10f0] via-[#00ffff] to-[#39ff14] p-[2px]">
                  <span className="absolute inset-[2px] rounded-[10px] bg-black/90 backdrop-blur-sm" />
                </span>
                {/* Hover glow */}
                <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#ff10f0]/20 via-[#00ffff]/20 to-[#39ff14]/20 blur-xl" />
                <span className="relative z-10 bg-gradient-to-r from-[#ff10f0] via-[#00ffff] to-[#39ff14] bg-clip-text text-transparent">
                  {item}
                </span>
              </motion.a>
            ))}
          </motion.nav>

          {/* Now Playing widget */}
          <motion.div
            className="mb-10 w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <NowPlaying />
          </motion.div>

          {/* Social Links Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 w-full" delay={1.1}>
            {socialLinks.map((link) => (
              <FadeUp key={link.name}>
                <motion.a
                  href={link.url}
                  target={link.url !== '#' ? '_blank' : undefined}
                  rel={link.url !== '#' ? 'noopener noreferrer' : undefined}
                  className="relative p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 group overflow-hidden"
                  whileHover={{ scale: 1.02, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  {/* Gradient border on hover */}
                  <motion.span
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${link.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    style={{ padding: '1px' }}
                  />
                  <span className="absolute inset-[1px] rounded-2xl bg-black/90 group-hover:bg-black/80 transition-colors" />

                  {/* Glow effect */}
                  <motion.span
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${link.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
                  />

                  <div className="relative z-10 flex items-center gap-4">
                    <motion.div
                      className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-br ${link.gradient}`}
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.4 }}
                    >
                      {link.icon}
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-white mb-0.5">
                        {link.name}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
                        {link.description}
                      </p>
                    </div>
                    <motion.span
                      className="text-gray-500 group-hover:text-white transition-colors"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                    >
                      →
                    </motion.span>
                  </div>
                </motion.a>
              </FadeUp>
            ))}
          </StaggerContainer>

          {/* Visitor Counter */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            <VisitorCounter />
          </motion.div>

          {/* Footer */}
          <motion.div
            className="py-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <div className="flex items-center justify-center gap-4 text-xl">
              <motion.span
                className="text-[#ff10f0]"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ♥
              </motion.span>
              <motion.span
                className="text-[#00ffff]"
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              >
                ✦
              </motion.span>
              <motion.span
                className="text-[#39ff14]"
                animate={{ y: [0, -5, 0] }}
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
