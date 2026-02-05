'use client';

import { motion } from 'framer-motion';
import PageTransition from '../_components/PageTransition';
import { StaggerContainer, FadeUp } from '../_components/MotionElements';

const achievements = [
  { title: '4 Extreme demons + stats', desc: 'Geometry Dash accomplishments with full stats.', icon: '👹', gradient: 'from-[#ff0055] to-[#ff4488]' },
  { title: 'Fortnite Freebuilds', desc: 'I am almost "Ashamed" of being able to freebuild in fortnite because the competitive community is so corny but here it is', icon: '🏗️', gradient: 'from-[#00ffff] to-[#0088ff]' },
  { title: 'Beat Terraria Calamity on Master mode Infernum', desc: 'Beaten calamity infernum on a master mode patch (normally you can only play expert mode on infernum)', icon: '🔥', gradient: 'from-[#ff6600] to-[#ffaa00]' },
  { title: 'Jevil / Spamton NEO at 2× speed', desc: 'Used cheat engine to make the game go at 2x speed and beat Jevil and spamton neo that way (Jevil was significantly more difficult)', icon: '🃏', gradient: 'from-[#ff10f0] to-[#aa00ff]' },
  { title: 'Celeste — every C-Side golden', desc: 'Collected the golden strawberries on all C-Sides.', icon: '🍓', gradient: 'from-[#ff0055] to-[#ff6688]' },
  { title: 'Splatoon 1 speedrun — 38 minutes', desc: 'Any% route PB at 38:xx.', icon: '🦑', gradient: 'from-[#39ff14] to-[#00ff88]' },
  { title: 'Pokémon GO — rare finds / stats', desc: 'Highlight catches and profile stats.', icon: '⚡', gradient: 'from-[#fff700] to-[#ffcc00]' },
  { title: 'Sans — no hit', desc: 'Undertale Genocide Sans fight taken with zero hits.', icon: '💀', gradient: 'from-[#00ffff] to-[#ffffff]' },
  { title: 'Still thinking...', desc: 'Another showcase slot is commmiinnnggg', icon: '🤔', gradient: 'from-[#ff10f0] to-[#00ffff]' },
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

export default function CoolStuff() {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col items-center p-4 md:p-8">
        <main className="w-full max-w-4xl flex flex-col items-center">
          {/* Navigation */}
          <motion.nav
            className="flex gap-4 justify-center mb-8 flex-wrap"
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
                className="relative px-6 py-3 rounded-xl font-bold overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#ff10f0] via-[#00ffff] to-[#39ff14] p-[2px]">
                  <span className="absolute inset-[2px] rounded-[10px] bg-black/90" />
                </span>
                <span className="relative z-10 bg-gradient-to-r from-[#ff10f0] to-[#00ffff] bg-clip-text text-transparent">
                  {item.label}
                </span>
              </motion.a>
            ))}
          </motion.nav>

          {/* Title */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1
              className="text-4xl md:text-6xl font-bold mb-4"
              style={{
                background: 'linear-gradient(135deg, #39ff14 0%, #00ffff 50%, #ff10f0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Cool Stuff / Achievements
            </h1>
            <motion.p
              className="text-gray-300 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Here is a list of cool things I&apos;ve achieved over the years.
            </motion.p>
            <motion.p
              className="text-xs text-[#ff10f0] font-mono"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              I AM STILL WORKING ON THIS PAGE
            </motion.p>
          </motion.div>

          {/* Achievements Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12 w-full" delay={0.3}>
            {achievements.map((achievement, i) => (
              <FadeUp key={achievement.title}>
                <motion.div
                  className="relative p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center overflow-hidden group h-full"
                  whileHover={{ scale: 1.03, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  {/* Gradient background on hover */}
                  <motion.span
                    className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Gradient border on hover */}
                  <motion.span
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${achievement.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}
                    style={{ padding: '1px' }}
                  />
                  <span className="absolute inset-[1px] rounded-2xl bg-black/95 group-hover:bg-black/90 transition-colors" />

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.div
                      className="text-5xl mb-3 inline-block"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                      whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                    >
                      {achievement.icon}
                    </motion.div>
                    <h3 className={`text-lg font-bold mb-2 bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent`}>
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {achievement.desc}
                    </p>
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </StaggerContainer>

          {/* 100% Completions Section */}
          <motion.section
            className="w-full mb-8 p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.h2
              className="text-2xl font-bold text-center mb-2 flex items-center justify-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.span
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ rotate: { duration: 4, repeat: Infinity, ease: 'linear' }, scale: { duration: 2, repeat: Infinity } }}
              >
                🏆
              </motion.span>
              <span className="bg-gradient-to-r from-[#39ff14] to-[#fff700] bg-clip-text text-transparent">
                100% Completions
              </span>
              <motion.span
                animate={{ rotate: -360, scale: [1, 1.2, 1] }}
                transition={{ rotate: { duration: 4, repeat: Infinity, ease: 'linear' }, scale: { duration: 2, repeat: Infinity, delay: 1 } }}
              >
                🏆
              </motion.span>
            </motion.h2>
            <p className="text-sm text-gray-500 mb-6 text-center">
              100% some games over various consoles
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {completions.map((game, i) => (
                <motion.div
                  key={game}
                  className="flex items-center gap-2 py-2 px-3 rounded-lg group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + i * 0.03 }}
                  whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', x: 5 }}
                >
                  <motion.span
                    className="text-sm flex-shrink-0"
                    style={{ color: ['#ff10f0', '#00ffff', '#39ff14', '#fff700', '#ff6600', '#ff0055'][i % 6] }}
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    ✓
                  </motion.span>
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                    {game}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="text-xs text-gray-600 mt-6 italic text-center p-3 rounded-lg border border-white/5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              Note: I have played and finished way more games than this list. These are just the ones I 100%ed (that I remember).
            </motion.p>
          </motion.section>

          {/* Footer */}
          <motion.div
            className="py-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
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
