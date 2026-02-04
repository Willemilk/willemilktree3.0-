const achievements = [
  {
    title: '4 Extreme demons + stats',
    desc: 'Geometry Dash accomplishments with full stats.',
    icon: '👹',
    color: '#ff0055',
  },
  {
    title: 'Fortnite Freebuilds',
    desc: 'I am almost "Ashamed" of being able to freebuild in fortnite because the competitive community is so corny but here it is',
    icon: '🏗️',
    color: '#00ffff',
  },
  {
    title: 'Beat Terraria Calamity on Master mode Infernum',
    desc: 'Beaten calamity infernum on a master mode patch (normally you can only play expert mode on infernum)',
    icon: '🔥',
    color: '#ff6600',
  },
  {
    title: 'Jevil / Spamton NEO at 2× speed',
    desc: 'Used cheat engine to make the game go at 2x speed and beat Jevil and spamton neo that way (Jevil was significantly more difficult)',
    icon: '🃏',
    color: '#ff10f0',
  },
  {
    title: 'Celeste — every C-Side golden',
    desc: 'Collected the golden strawberries on all C-Sides.',
    icon: '🍓',
    color: '#ff0055',
  },
  {
    title: 'Splatoon 1 speedrun — 38 minutes',
    desc: 'Any% route PB at 38:xx.',
    icon: '🦑',
    color: '#39ff14',
  },
  {
    title: 'Pokémon GO — rare finds / stats',
    desc: 'Highlight catches and profile stats.',
    icon: '⚡',
    color: '#fff700',
  },
  {
    title: 'Sans — no hit',
    desc: 'Undertale Genocide Sans fight taken with zero hits.',
    icon: '💀',
    color: '#00ffff',
  },
  {
    title: 'Still thinking...',
    desc: 'Another showcase slot is commmiinnnggg',
    icon: '🤔',
    color: '#ff10f0',
  },
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
    <div className="min-h-screen flex flex-col items-center p-4 md:p-8 checker-bg">
      <main className="w-full max-w-4xl flex flex-col items-center">
        {/* Navigation */}
        <nav className="flex gap-4 justify-center mb-8 flex-wrap">
          <a href="/" className="px-6 py-3 rounded-lg neon-box text-[#00ffff] font-bold impact-font hover:bg-[#00ffff] hover:text-black transition-all">
            Home
          </a>
          <a href="/about" className="px-6 py-3 rounded-lg neon-box text-[#ff10f0] font-bold impact-font hover:bg-[#ff10f0] hover:text-black transition-all">
            About
          </a>
        </nav>

        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl impact-font rainbow-text mb-4 glitch-text">
            Cool Stuff / Achievements
          </h1>
          <p className="text-lg text-[#00ffff] wiggle">
            Here is a list of cool things I&apos;ve achieved over the years.
          </p>
          <p className="pixel-font text-[10px] text-[#ff10f0] mt-2 blink">
            I AM STILL WORKING ON THIS PAGE
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12 w-full">
          {achievements.map((achievement, i) => (
            <div
              key={achievement.title}
              className="tilt-card neon-box rounded-lg p-5 bg-black/50 backdrop-blur-sm group text-center"
              style={{
                borderColor: achievement.color,
              }}
            >
              {/* Icon */}
              <div
                className="text-5xl mb-3 animate-[float_3s_ease-in-out_infinite] group-hover:animate-[shake_0.5s_ease-in-out] inline-block"
                style={{ animationDelay: `${i * 0.3}s` }}
              >
                {achievement.icon}
              </div>
              <h3
                className="text-lg font-bold impact-font leading-tight mb-2"
                style={{ color: achievement.color }}
              >
                {achievement.title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {achievement.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 100% Completions Section */}
        <section className="neon-box rounded-lg p-6 md:p-8 bg-black/50 backdrop-blur-sm mb-8 w-full">
          <h2 className="text-3xl impact-font text-[#39ff14] mb-2 glitch-text flex items-center justify-center gap-3">
            <span className="animate-[spin-slow_3s_linear_infinite] text-2xl">🏆</span>
            100% Completions
            <span className="animate-[spin-slow_3s_linear_infinite_reverse] text-2xl">🏆</span>
          </h2>
          <p className="text-sm text-gray-400 mb-6 text-center">
            100% some games over various consoles
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {completions.map((game, i) => (
              <div
                key={game}
                className="flex items-center gap-2 py-2 px-3 rounded hover:bg-white/5 transition-colors group"
              >
                <span
                  className="text-sm group-hover:animate-[spin-slow_0.5s_linear] flex-shrink-0"
                  style={{ color: ['#ff10f0', '#00ffff', '#39ff14', '#fff700', '#ff6600', '#ff0055'][i % 6] }}
                >
                  ✓
                </span>
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                  {game}
                </span>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-500 mt-6 italic dashed-border rounded p-3 text-center">
            Note: I have played and finished way more games than this list. These are just the ones I 100%ed (that I remember).
          </p>
        </section>

        {/* Footer */}
        <div className="py-6">
          <div className="flex items-center justify-center gap-3 text-xl animate-[pulse-glow_3s_ease-in-out_infinite]">
            <span className="text-[#ff10f0] animate-[float_2s_ease-in-out_infinite]">♥</span>
            <span className="text-[#00ffff] animate-[spin-slow_4s_linear_infinite]">✦</span>
            <span className="text-[#39ff14] animate-[float-reverse_2.5s_ease-in-out_infinite]">♥</span>
          </div>
        </div>
      </main>
    </div>
  );
}
