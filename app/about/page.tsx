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

export default function About() {
  return (
    <div className="min-h-screen p-4 md:p-8 checker-bg">
      <main className="max-w-4xl mx-auto">
        {/* Navigation */}
        <nav className="flex gap-4 justify-center mb-8 flex-wrap">
          <a href="/" className="px-6 py-3 rounded-lg neon-box text-[#00ffff] font-bold impact-font hover:bg-[#00ffff] hover:text-black transition-all">
            ← Home
          </a>
          <a href="/cool-stuff" className="px-6 py-3 rounded-lg neon-box text-[#39ff14] font-bold impact-font hover:bg-[#39ff14] hover:text-black transition-all">
            Cool Stuff →
          </a>
        </nav>

        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl impact-font rainbow-text mb-4 glitch-text">
            HEY HOI HELLO, I'M WILLEM DE WIT
          </h1>
          <div className="flex items-center justify-center gap-2 text-xl animate-[pulse-glow_2s_ease-in-out_infinite]">
            <span className="animate-[spin-slow_3s_linear_infinite]">★</span>
            <span className="text-[#ff10f0]">♥</span>
            <span className="text-[#00ffff]">about me!!</span>
            <span className="text-[#39ff14]">♥</span>
            <span className="animate-[spin-slow_3s_linear_infinite_reverse]">★</span>
          </div>
        </div>

        {/* Bio Section */}
        <section className="neon-box rounded-lg p-6 md:p-8 bg-black/50 backdrop-blur-sm mb-8 tilt-card">
          <h2 className="text-3xl impact-font text-[#ff10f0] mb-4 glitch-text">
            ★ About Me ★
          </h2>
          <p className="text-lg leading-relaxed text-gray-200 mb-4">
            Hey, hoi, hello, my name is Willem de Wit (aka Willemilk). I am Willem, I am 18 years old (August 2007), and I live in Noord-Brabant, the Netherlands, the same place where Maya from the cartoon Ongezellig is from. Wowzers!
          </p>
          <p className="text-lg leading-relaxed text-gray-200 mb-4">
            My hobbies are programming, gaming, and watching people argue on Twitter about absolutely nothing. I also like going to the gym to clear my mind. I also like cooking, but I am not the best at it, sadly...
          </p>

          {/* Cooking GIF placeholder */}
          <div className="dashed-border rounded-lg p-6 text-center bg-black/40 my-6">
            <p className="text-[#00ffff] mb-3 font-bold">Actual footage of me cooking (probably):</p>
            <div className="text-6xl animate-[shake_2s_ease-in-out_infinite] inline-block">
              🔥🍳💀
            </div>
            <p className="text-xs text-gray-500 mt-2 pixel-font">[ insert epic cooking fail gif here ]</p>
          </div>
        </section>

        {/* Interests */}
        <section className="neon-box rounded-lg p-6 md:p-8 bg-black/50 backdrop-blur-sm mb-8 tilt-card">
          <h2 className="text-3xl impact-font text-[#00ffff] mb-6 glitch-text">
            ★ My Interests ★
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { emoji: '🎮', label: 'Gaming', color: '#39ff14' },
              { emoji: '⏱️', label: 'Speedrunning', color: '#ff10f0' },
              { emoji: '💻', label: 'Coding', color: '#00ffff' },
              { emoji: '🎵', label: 'Music', color: '#fff700' },
              { emoji: '💪', label: 'Gym', color: '#ff6600' },
              { emoji: '🍳', label: 'Cooking (badly)', color: '#ff0055' },
              { emoji: '🐦', label: 'Twitter Drama', color: '#00ffff' },
              { emoji: '📱', label: 'Doomscrolling', color: '#ff10f0' },
            ].map((interest) => (
              <div
                key={interest.label}
                className="dashed-border rounded-lg p-4 text-center bg-black/40 hover:scale-110 transition-transform"
                style={{ borderColor: interest.color }}
              >
                <div className="text-3xl mb-2 animate-[float_3s_ease-in-out_infinite]">
                  {interest.emoji}
                </div>
                <div className="text-sm font-bold" style={{ color: interest.color }}>
                  {interest.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gaming Section */}
        <section className="neon-box rounded-lg p-6 md:p-8 bg-black/50 backdrop-blur-sm mb-8">
          <h2 className="text-3xl impact-font text-[#39ff14] mb-4 glitch-text">
            ★ Gaming ★
          </h2>
          <p className="text-lg text-gray-200 mb-6 leading-relaxed">
            Like I said, I love gaming, it's my biggest hobby ever, and that probably won't change anytime soon. Of course, I have a lot of cool things achieved in various games over the last 14 years or so. To see that, check out the{' '}
            <a href="/cool-stuff" className="text-[#ff10f0] underline hover:text-[#00ffff] transition-colors font-bold">
              cool stuff page
            </a>
            . But now I want to talk about my favorite games per genre.
          </p>
          <p className="text-sm text-gray-400 mb-8 italic">
            The list contains a lot of mainstream games. I'm trying to get into more niche, not-as-well-known games over the last year, but that is a different story. So my list does not really contain any lesser-known games (I am sorry if that bothers you).
          </p>

          {/* Game Categories */}
          {Object.entries(favoriteGames).map(([category, games]) => (
            <div key={category} className="mb-8">
              <h3 className="text-2xl impact-font text-[#ff10f0] mb-4 flex items-center gap-2">
                <span className="animate-[spin-slow_3s_linear_infinite] text-[#fff700]">⭐</span>
                {category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {games.map((game) => (
                  <div
                    key={game.name + game.year}
                    className="tilt-card dashed-border rounded-lg p-4 bg-black/60"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-bold text-[#00ffff]">{game.name}</h4>
                      <span className="pixel-font text-[10px] text-[#39ff14] whitespace-nowrap ml-2">
                        {game.year}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">{game.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Footer */}
        <div className="text-center py-6">
          <div className="flex items-center justify-center gap-2 text-xl mb-4">
            <span className="text-[#ff10f0]">♥</span>
            <span className="text-[#00ffff]">X_X</span>
            <span className="text-[#39ff14]">♥</span>
          </div>
          <p className="pixel-font text-[8px] text-gray-600">
            thx 4 reading all of that lol
          </p>
        </div>
      </main>
    </div>
  );
}
