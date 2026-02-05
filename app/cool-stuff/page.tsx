'use client';

import { motion } from 'framer-motion';
import PageTransition from '../_components/PageTransition';

const achievements = [
  { title: '4 Extreme demons + stats', desc: 'Geometry Dash accomplishments with full stats.', icon: '👹', color: '#ff0055' },
  { title: 'Fortnite Freebuilds', desc: 'I am almost "Ashamed" of being able to freebuild in fortnite because the competitive community is so corny but here it is', icon: '🏗️', color: '#00ffff' },
  { title: 'Beat Terraria Calamity on Master mode Infernum', desc: 'Beaten calamity infernum on a master mode patch (normally you can only play expert mode on infernum)', icon: '🔥', color: '#ff6600' },
  { title: 'Jevil / Spamton NEO at 2× speed', desc: 'Used cheat engine to make the game go at 2x speed and beat Jevil and spamton neo that way (Jevil was significantly more difficult)', icon: '🃏', color: '#ff10f0' },
  { title: 'Celeste — every C-Side golden', desc: 'Collected the golden strawberries on all C-Sides.', icon: '🍓', color: '#ff0055' },
  { title: 'Splatoon 1 speedrun — 38 minutes', desc: 'Any% route PB at 38:xx.', icon: '🦑', color: '#39ff14' },
  { title: 'Pokémon GO — rare finds / stats', desc: 'Highlight catches and profile stats.', icon: '⚡', color: '#fff700' },
  { title: 'Sans — no hit', desc: 'Undertale Genocide Sans fight taken with zero hits.', icon: '💀', color: '#00ffff' },
  { title: 'Still thinking...', desc: 'Another showcase slot is commmiinnnggg', icon: '🤔', color: '#ff10f0' },
];

const completions = [
  'Terraria — all achievements (Steam)',
  'Celeste — all achievements (Steam)',
  'Geometry Dash — all achievements (Steam)',
  'Metroid AM2R — 100% (PC, fan-made)',
  'Super Mario Odyssey — 999 stars (Nintendo Switch)',
  'Metroid Dread — 100% on hard and normal (Nintendo Switch)',
  'The Legend of Zelda: Breath of the Wild — 100% including all Korok seeds (Nintendo Switch)',
  'Splatoon 2 — Story Mode & Octo Expansion 100% (Nintendo Switch)',
  'Splatoon 3 — Story Mode & Side Order 100% (Nintendo Switch)',
  'Rayman Legends — 100% (Wii U)',
  'LEGO City Undercover — 100% (Wii U)',
  'Super Mario 3D World — 100% (twice)',
  'New Super Mario Bros. U — 100%',
  'New Super Luigi U — 100%',
  'Rayman Origins — 100% (Wii)',
  'Super Mario Galaxy — 121 stars (Wii)',
  'Super Mario Galaxy 2 — 242 stars (Wii)',
  'Metroid Fusion — 100% (Game Boy Advance)',
  'Metroid: Zero Mission — 100% (Game Boy Advance)',
  'Super Mario World — 100% (SNES)',
  'Super Metroid — 100% (SNES)',
  'The Legend of Zelda: A Link to the Past — 100% (SNES)',
  'The Legend of Zelda — 100% (NES)',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.2 },
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

export default function CoolStuff() {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col items-center p-4 sm:p-6 md:p-8">
        <main className="w-full max-w-3xl flex flex-col items-center">
          {/* Navigation */}
          <motion.nav
            className="flex gap-3 justify-center mb-8 flex-wrap"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {[
              { label: 'Home', href: '/' },
              { label: 'About', href: '/about' },
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
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 gradient-text">
              Cool Stuff
            </h1>
            <motion.p
              className="text-gray-400 text-sm sm:text-base mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Here is a list of cool things I&apos;ve achieved over the years.
            </motion.p>
            <motion.p
              className="text-xs text-[#ff10f0]/70 font-mono"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              I AM STILL WORKING ON THIS PAGE
            </motion.p>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {achievements.map((achievement, i) => (
              <motion.div
                key={achievement.title}
                className="relative p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm group overflow-hidden"
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  y: -3,
                  borderColor: `${achievement.color}20`,
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at 50% 30%, ${achievement.color}10 0%, transparent 60%)`,
                  }}
                />

                <div className="relative z-10 text-center">
                  <motion.div
                    className="text-4xl mb-3 inline-block"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
                    whileHover={{ scale: 1.2 }}
                  >
                    {achievement.icon}
                  </motion.div>
                  <h3
                    className="text-sm font-semibold mb-2"
                    style={{ color: achievement.color }}
                  >
                    {achievement.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {achievement.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* 100% Completions Section */}
          <motion.section
            className="w-full p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-lg font-semibold mb-1 text-white/90 flex items-center justify-center gap-2">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              >
                🏆
              </motion.span>
              100% Completions
              <motion.span
                animate={{ rotate: -360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              >
                🏆
              </motion.span>
            </h2>
            <p className="text-xs text-gray-500 mb-5 text-center">
              Games I&apos;ve fully completed over the years
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {completions.map((game, i) => (
                <motion.div
                  key={game}
                  className="flex items-center gap-2 py-2 px-3 rounded-lg group"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.02 }}
                  whileHover={{
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    x: 4,
                  }}
                >
                  <motion.span
                    className="text-xs flex-shrink-0"
                    style={{ color: ['#ff10f0', '#00ffff', '#39ff14', '#fff700', '#ff6600', '#ff0055'][i % 6] }}
                    whileHover={{ scale: 1.3 }}
                  >
                    ✓
                  </motion.span>
                  <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
                    {game}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="text-[11px] text-gray-600 mt-5 italic text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              Note: I have played and finished way more games than this list. These are just the ones I 100%ed (that I remember).
            </motion.p>
          </motion.section>

          {/* Footer */}
          <motion.div
            className="py-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
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
