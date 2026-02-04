export default function About() {
  return (
    <div className="min-h-screen p-8">
      <main className="max-w-4xl mx-auto">
        {/* Navigation */}
        <nav className="flex gap-4 justify-center mb-12">
          <a href="/" className="px-6 py-3 rounded-lg border-2 border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff] hover:text-black transition-all">
            Home
          </a>
          <a href="/cool-stuff" className="px-6 py-3 rounded-lg border-2 border-[#ff10f0] text-[#ff10f0] hover:bg-[#ff10f0] hover:text-black transition-all">
            Cool Stuff
          </a>
        </nav>

        {/* About Content */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-[#00ffff] via-[#ff10f0] to-[#00ff00] bg-clip-text text-transparent">
            About Me
          </h1>
        </div>

        <div className="space-y-8">
          <section className="p-6 border-2 border-[#ff10f0] rounded-lg hover:shadow-[0_0_20px_rgba(255,16,240,0.5)] transition-all">
            <h2 className="text-3xl font-bold mb-4 text-[#ff10f0]">Hey there! 👋</h2>
            <p className="text-lg text-[#00ffff]">
              I'm Willem, a student at MBO Software Development
            </p>
          </section>

          <section className="p-6 border-2 border-[#00ffff] rounded-lg hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-all">
            <h2 className="text-3xl font-bold mb-4 text-[#00ffff]">My Interests ✨</h2>
            <ul className="list-none text-lg space-y-3 text-[#00ff00]">
              <li>⭐ Gaming (especially Geometry Dash!)</li>
              <li>★ Speedrunning</li>
              <li>✨ Coding and software development</li>
              <li>♥ Music</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
