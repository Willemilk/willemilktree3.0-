export default function CoolStuff() {
  return (
    <div className="min-h-screen p-8">
      <main className="max-w-4xl mx-auto">
        {/* Navigation */}
        <nav className="flex gap-4 justify-center mb-12">
          <a href="/" className="px-6 py-3 rounded-lg">
            Home
          </a>
          <a href="/about" className="px-6 py-3 rounded-lg">
            About
          </a>
        </nav>

        {/* Cool Stuff Content */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-8">Cool Stuff</h1>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-4">My Projects</h2>
            <p className="text-lg mb-4">
              Check out my GitHub for my projects! Most of my repos are private since they're school stuff, but you can see what I'm working on.
            </p>
            <a
              href="https://github.com/Willemilk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl underline"
            >
              → Visit my GitHub
            </a>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">More coming soon...</h2>
            <p className="text-lg">
              I'll add more cool stuff here as I build it! 🚀
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
