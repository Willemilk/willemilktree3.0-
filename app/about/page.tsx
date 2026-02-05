'use client';

import { motion } from 'framer-motion';
import PageTransition from '../_components/PageTransition';

const favoriteGames = {
  '2D Platformer': [
    { name: 'Celeste', year: '2018', desc: 'Celeste is a 2018 platforming video game by Maddy Makes Games.' },
    { name: 'Geometry Dash', year: '2013', desc: 'Geometry Dash is a series of music platforming video games.' },
    { name: 'New Super Mario Bros. Wii', year: '2009', desc: 'New Super Mario Bros. Wii is a side-scrolling 2.5D platform video game.' },
  ],
  'Favorites Of All Time': [
    { name: 'Super Mario Galaxy 1/2', year: '2007/2010', desc: 'Super Mario Galaxy is a 2007 platform game developed and published by Nintendo.' },
    { name: 'DELTARUNE', year: '2018–', desc: 'Deltarune is a role-playing video game created by American indie developer Toby Fox.' },
    { name: 'Terraria', year: '2011', desc: 'Terraria is an action-adventure sandbox game developed by Re-Logic.' },
    { name: 'Geometry Dash', year: '2013', desc: 'Geometry Dash is a series of music platforming video games.' },
  ],
};

const interests = [
  { emoji: '🎮', label: 'Gaming', color: '#39ff14' },
  { emoji: '⏱️', label: 'Speedrunning', color: '#ff10f0' },
  { emoji: '💻', label: 'Coding', color: '#00ffff' },
  { emoji: '🎵', label: 'Music', color: '#fff700' },
  { emoji: '💪', label: 'Gym', color: '#ff6600' },
  { emoji: '🍳', label: 'Cooking', color: '#ff0055' },
  { emoji: '🐦', label: 'Twitter', color: '#00ffff' },
  { emoji: '📱', label: 'Scrolling', color: '#ff10f0' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function About() {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col items-center p-4 sm:p-6 md:p-8">
        <main className="w-full max-w-2xl flex flex-col items-center">
          {/* Navigation */}
          <motion.nav
            className="flex gap-3 justify-center mb-10 flex-wrap"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {[
              { label: 'Home', href: '/' },
              { label: 'Cool Stuff', href: '/cool-stuff' },
            ].map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="relative px-5 py-2.5 rounded-full font-medium text-sm overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ff10f0]/20 via-[#00ffff]/20 to-[#39ff14]/20 group-hover:opacity-100 opacity-50 transition-opacity" />
                <span className="absolute inset-[1px] rounded-full bg-[#0a0a0a]" />
                <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors">
                  {item.label}
                </span>
              </motion.a>
            ))}
          </motion.nav>

          {/* Title */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold mb-3 gradient-text">
              About Me
            </h1>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#ff10f0]/50" />
              <motion.span
                className="text-[#00ffff]/60"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                ✦
              </motion.span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#00ffff]/50" />
            </div>
          </motion.div>

          {/* Bio Card */}
          <motion.section
            className="w-full mb-6 p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-lg font-semibold mb-4 text-white/90">
              Hey there! 👋
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4 text-sm sm:text-base">
              Hey, hoi, hello, my name is Willem de Wit (aka Willemilk). I am Willem, I am 18 years old (August 2007), and I live in Noord-Brabant, the Netherlands, the same place where Maya from the cartoon Ongezellig is from. Wowzers!
            </p>
            <p className="text-gray-400 leading-relaxed mb-5 text-sm sm:text-base">
              My hobbies are programming, gaming, and watching people argue on Twitter about absolutely nothing. I also like going to the gym to clear my mind. I also like cooking, but I am not the best at it, sadly...
            </p>

            {/* Cooking placeholder */}
            <motion.div
              className="rounded-xl p-4 text-center bg-white/[0.02] border border-white/[0.04]"
              whileHover={{ borderColor: 'rgba(0, 255, 255, 0.1)' }}
            >
              <p className="text-gray-500 text-sm mb-2">Actual footage of me cooking (probably):</p>
              <motion.div
                className="text-5xl inline-block"
                animate={{ rotate: [0, -3, 3, -3, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              >
                🔥🍳💀
              </motion.div>
            </motion.div>
          </motion.section>

          {/* Interests */}
          <motion.section
            className="w-full mb-6 p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-lg font-semibold mb-4 text-white/90">
              My Interests
            </h2>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {interests.map((interest, i) => (
                <motion.div
                  key={interest.label}
                  className="relative p-3 rounded-xl text-center bg-white/[0.02] border border-white/[0.04] group overflow-hidden"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    borderColor: `${interest.color}20`,
                  }}
                >
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${interest.color}08 0%, transparent 70%)`,
                    }}
                  />
                  <motion.div
                    className="text-3xl mb-1 relative z-10"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                  >
                    {interest.emoji}
                  </motion.div>
                  <div
                    className="text-xs font-medium relative z-10"
                    style={{ color: interest.color }}
                  >
                    {interest.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Gaming Section */}
          <motion.section
            className="w-full mb-6 p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-lg font-semibold mb-3 text-white/90">
              Gaming 🎮
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4 text-sm sm:text-base">
              Like I said, I love gaming, it&apos;s my biggest hobby ever. Check out the{' '}
              <motion.a
                href="/cool-stuff"
                className="text-[#ff10f0] hover:text-[#00ffff] transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                cool stuff page
              </motion.a>
              {' '}for my achievements. Here are my favorite games:
            </p>

            {Object.entries(favoriteGames).map(([category, games], catIndex) => (
              <div key={category} className="mb-5 last:mb-0">
                <h3 className="text-sm font-medium text-gray-300 mb-3 flex items-center gap-2">
                  <motion.span
                    className="text-[#fff700]"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                  >
                    ⭐
                  </motion.span>
                  {category}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {games.map((game, i) => (
                    <motion.div
                      key={game.name + game.year}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] group"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + catIndex * 0.1 + i * 0.05 }}
                      whileHover={{
                        borderColor: 'rgba(0, 255, 255, 0.15)',
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      }}
                    >
                      <h4 className="text-sm font-medium text-[#00ffff] mb-0.5">{game.name}</h4>
                      <span className="text-[10px] text-[#39ff14] font-mono">{game.year}</span>
                      <p className="text-[11px] text-gray-500 mt-1.5 leading-relaxed">{game.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.section>

          {/* Footer */}
          <motion.div
            className="py-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
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
