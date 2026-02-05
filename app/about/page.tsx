'use client';

import { motion } from 'framer-motion';
import PageTransition from '../_components/PageTransition';
import { StaggerContainer, FadeUp } from '../_components/MotionElements';

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
  { emoji: '🎮', label: 'Gaming', gradient: 'from-[#39ff14] to-[#00ff88]' },
  { emoji: '⏱️', label: 'Speedrunning', gradient: 'from-[#ff10f0] to-[#ff6699]' },
  { emoji: '💻', label: 'Coding', gradient: 'from-[#00ffff] to-[#0088ff]' },
  { emoji: '🎵', label: 'Music', gradient: 'from-[#fff700] to-[#ffaa00]' },
  { emoji: '💪', label: 'Gym', gradient: 'from-[#ff6600] to-[#ff8844]' },
  { emoji: '🍳', label: 'Cooking', gradient: 'from-[#ff0055] to-[#ff4488]' },
  { emoji: '🐦', label: 'Twitter', gradient: 'from-[#00ffff] to-[#0066ff]' },
  { emoji: '📱', label: 'Doomscrolling', gradient: 'from-[#ff10f0] to-[#aa00ff]' },
];

export default function About() {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col items-center p-4 md:p-8">
        <main className="w-full max-w-3xl flex flex-col items-center">
          {/* Navigation */}
          <motion.nav
            className="flex gap-4 justify-center mb-8 flex-wrap"
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
                className="relative px-6 py-3 rounded-xl font-bold overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#ff10f0] via-[#00ffff] to-[#39ff14] p-[2px]">
                  <span className="absolute inset-[2px] rounded-[10px] bg-black/90" />
                </span>
                <span className="relative z-10 bg-gradient-to-r from-[#00ffff] to-[#39ff14] bg-clip-text text-transparent">
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
                background: 'linear-gradient(135deg, #ff10f0 0%, #00ffff 50%, #39ff14 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              HEY HOI HELLO, I&apos;M WILLEM DE WIT
            </h1>
            <motion.div
              className="flex items-center justify-center gap-4"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.span
                className="text-xl text-[#fff700]"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                ★
              </motion.span>
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#00ffff] to-transparent" />
              <motion.span
                className="text-xl text-[#fff700]"
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                ★
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Bio Section */}
          <motion.section
            className="w-full mb-8 p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ borderColor: 'rgba(255, 16, 240, 0.3)' }}
          >
            <h2 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-[#ff10f0] to-[#00ffff] bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-gray-300 leading-relaxed text-center mb-4">
              Hey, hoi, hello, my name is Willem de Wit (aka Willemilk). I am Willem, I am 18 years old (August 2007), and I live in Noord-Brabant, the Netherlands, the same place where Maya from the cartoon Ongezellig is from. Wowzers!
            </p>
            <p className="text-gray-300 leading-relaxed text-center mb-6">
              My hobbies are programming, gaming, and watching people argue on Twitter about absolutely nothing. I also like going to the gym to clear my mind. I also like cooking, but I am not the best at it, sadly...
            </p>

            {/* Cooking placeholder */}
            <motion.div
              className="rounded-xl p-6 text-center bg-black/40 border border-white/5"
              whileHover={{ scale: 1.02, borderColor: 'rgba(0, 255, 255, 0.3)' }}
            >
              <p className="text-[#00ffff] mb-3 font-bold">Actual footage of me cooking (probably):</p>
              <motion.div
                className="text-6xl inline-block"
                animate={{ rotate: [0, -5, 5, -5, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              >
                🔥🍳💀
              </motion.div>
            </motion.div>
          </motion.section>

          {/* Interests */}
          <motion.section
            className="w-full mb-8 p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-[#00ffff] to-[#39ff14] bg-clip-text text-transparent">
              My Interests
            </h2>
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4" delay={0.5}>
              {interests.map((interest, i) => (
                <FadeUp key={interest.label}>
                  <motion.div
                    className="relative p-4 rounded-xl text-center bg-black/40 border border-white/5 overflow-hidden group"
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.span
                      className={`absolute inset-0 bg-gradient-to-br ${interest.gradient} opacity-0 group-hover:opacity-20 transition-opacity`}
                    />
                    <motion.div
                      className="text-3xl mb-2 relative z-10"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                    >
                      {interest.emoji}
                    </motion.div>
                    <div className={`text-sm font-bold relative z-10 bg-gradient-to-r ${interest.gradient} bg-clip-text text-transparent`}>
                      {interest.label}
                    </div>
                  </motion.div>
                </FadeUp>
              ))}
            </StaggerContainer>
          </motion.section>

          {/* Gaming Section */}
          <motion.section
            className="w-full mb-8 p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-[#39ff14] to-[#fff700] bg-clip-text text-transparent">
              Gaming
            </h2>
            <p className="text-gray-300 leading-relaxed text-center mb-6">
              Like I said, I love gaming, it&apos;s my biggest hobby ever, and that probably won&apos;t change anytime soon. Of course, I have a lot of cool things achieved in various games over the last 14 years or so. To see that, check out the{' '}
              <motion.a
                href="/cool-stuff"
                className="text-[#ff10f0] font-bold"
                whileHover={{ color: '#00ffff' }}
              >
                cool stuff page
              </motion.a>
              . But now I want to talk about my favorite games per genre.
            </p>
            <p className="text-sm text-gray-500 mb-8 italic text-center">
              The list contains a lot of mainstream games. I&apos;m trying to get into more niche, not-as-well-known games over the last year, but that is a different story.
            </p>

            {/* Game Categories */}
            {Object.entries(favoriteGames).map(([category, games], catIndex) => (
              <div key={category} className="mb-8">
                <motion.h3
                  className="text-xl font-bold text-center mb-4 flex items-center justify-center gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + catIndex * 0.1 }}
                >
                  <motion.span
                    className="text-[#fff700]"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  >
                    ⭐
                  </motion.span>
                  <span className="text-[#ff10f0]">{category}</span>
                  <motion.span
                    className="text-[#fff700]"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  >
                    ⭐
                  </motion.span>
                </motion.h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {games.map((game, i) => (
                    <motion.div
                      key={game.name + game.year}
                      className="p-4 rounded-xl bg-black/40 border border-white/5 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + catIndex * 0.1 + i * 0.1 }}
                      whileHover={{ scale: 1.03, borderColor: 'rgba(0, 255, 255, 0.3)' }}
                    >
                      <h4 className="text-[#00ffff] font-bold mb-1">{game.name}</h4>
                      <span className="text-[10px] text-[#39ff14] font-mono">{game.year}</span>
                      <p className="text-xs text-gray-500 mt-2">{game.desc}</p>
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
            transition={{ delay: 1 }}
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
