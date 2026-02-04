export default function About() {
  return (
    <div className="min-h-screen p-8">
      <main className="max-w-4xl mx-auto">
        {/* Navigation */}
        <nav className="flex gap-4 justify-center mb-12">
          <a href="/" className="px-6 py-3 rounded-lg">
            Home
          </a>
          <a href="/cool-stuff" className="px-6 py-3 rounded-lg">
            Cool Stuff
          </a>
        </nav>

        {/* About Content */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-8">About Me</h1>
        </div>

        <div className="space-y-6">
          <section>
            <h2 className="text-3xl font-bold mb-4">Hey there! 👋</h2>
            <p className="text-lg">
              I'm Willem, a student at MBO Software Development
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">My Interests</h2>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>Gaming (especially Geometry Dash!)</li>
              <li>Speedrunning</li>
              <li>Coding and software development</li>
              <li>Music</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
