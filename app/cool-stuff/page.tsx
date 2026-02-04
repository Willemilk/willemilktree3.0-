export default function CoolStuff() {
  return (
    <div className="min-h-screen p-8">
      <main className="max-w-4xl mx-auto">
        {/* Navigation */}
        <nav className="flex gap-4 justify-center mb-12">
          <a href="/" className="px-6 py-3 rounded-lg border-2 border-[#00ff00] text-[#00ff00] hover:bg-[#00ff00] hover:text-black transition-all">
            Home
          </a>
          <a href="/about" className="px-6 py-3 rounded-lg border-2 border-[#ff0055] text-[#ff0055] hover:bg-[#ff0055] hover:text-black transition-all">
            About
          </a>
        </nav>

        {/* Cool Stuff Content */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-[#00ff00] via-[#ff0055] to-[#00ffff] bg-clip-text text-transparent">
            Cool Stuff
          </h1>
        </div>

        <div className="space-y-8">
          <section className="p-6 border-2 border-[#00ff00] rounded-lg hover:shadow-[0_0_20px_rgba(0,255,0,0.5)] transition-all hover:scale-105">
            <h2 className="text-3xl font-bold mb-4 text-[#00ff00]">My Projects ✨</h2>
            <p className="text-lg mb-4 text-[#00ffff]">
              Check out my GitHub for my projects! Most of my repos are private since they're school stuff, but you can see what I'm working on.
            </p>
            <a
              href="https://github.com/Willemilk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl underline text-[#ff10f0] hover:text-[#00ffff] transition-colors"
            >
              → Visit my GitHub ★
            </a>
          </section>

          <section className="p-6 border-2 border-[#ff0055] rounded-lg hover:shadow-[0_0_20px_rgba(255,0,85,0.5)] transition-all">
            <h2 className="text-3xl font-bold mb-4 text-[#ff0055]">More coming soon... 🚀</h2>
            <p className="text-lg text-[#00ffff]">
              I'll add more cool stuff here as I build it! ⭐
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
