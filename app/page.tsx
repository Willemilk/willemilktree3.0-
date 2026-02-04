export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <main className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4">
            Hey, I'm Willem
          </h1>
          <p className="text-xl">
            this is my linktree about me erm idunno tbh but just take a look
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex gap-4 justify-center mb-12">
          <a href="/about" className="px-6 py-3 rounded-lg">
            About
          </a>
          <a href="/cool-stuff" className="px-6 py-3 rounded-lg">
            Cool Stuff
          </a>
        </nav>

        {/* Social Links Grid - Coming soon */}
        <div className="text-center">
          <p>Social links coming soon...</p>
        </div>
      </main>
    </div>
  );
}
