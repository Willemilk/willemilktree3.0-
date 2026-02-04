import { FaGithub, FaYoutube, FaTwitter, FaTiktok, FaInstagram, FaDiscord } from 'react-icons/fa';
import { SiApplemusic } from 'react-icons/si';

export default function Home() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Willemilk',
      icon: <FaGithub className="w-8 h-8" />,
      description: 'Random projects, mostly school stuff (most of my repos are private!)',
      color: 'hover:text-[#ff10f0]'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@willemilk1942',
      icon: <FaYoutube className="w-8 h-8" />,
      description: 'Create gaming videos mostly geometry dash… not really "trying to make it", just sharing stuff!',
      color: 'hover:text-[#ff0055]'
    },
    {
      name: 'Twitter/X',
      url: 'https://x.com/WillemdeWit040',
      icon: <FaTwitter className="w-8 h-8" />,
      description: 'Mostly scrolling and watching people argue 😭',
      color: 'hover:text-[#00ffff]'
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@willemdewit10',
      icon: <FaTiktok className="w-8 h-8" />,
      description: 'Using less now because of Reels (new account cant login to the old one anymore)',
      color: 'hover:text-[#ff10f0]'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/willemilk/',
      icon: <FaInstagram className="w-8 h-8" />,
      description: 'Life stuff and reels doomscrolling',
      color: 'hover:text-[#ff0055]'
    },
    {
      name: 'Apple Music',
      url: 'https://music.apple.com/profile/wjpmdewit',
      icon: <SiApplemusic className="w-8 h-8" />,
      description: 'Stuff I\'m listening to lately',
      color: 'hover:text-[#00ff00]'
    },
    {
      name: 'Discord',
      url: '#',
      icon: <FaDiscord className="w-8 h-8" />,
      description: 'Willemilk - feel free to add me i like talking to randoms',
      color: 'hover:text-[#00ffff]'
    }
  ];

  return (
    <div className="min-h-screen p-8">
      <main className="max-w-4xl mx-auto">
        {/* Header with rainbow gradient */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-[#ff10f0] via-[#00ffff] to-[#00ff00] bg-clip-text text-transparent animate-[rainbow_5s_ease_infinite] bg-[length:200%_auto]">
            Hey, I'm Willem
          </h1>
          <p className="text-xl text-[#00ffff]">
            this is my linktree about me erm idunno tbh but just take a look
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex gap-4 justify-center mb-12">
          <a href="/about" className="px-6 py-3 rounded-lg border-2 border-[#ff10f0] text-[#ff10f0] hover:bg-[#ff10f0] hover:text-black transition-all">
            About
          </a>
          <a href="/cool-stuff" className="px-6 py-3 rounded-lg border-2 border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff] hover:text-black transition-all">
            Cool Stuff
          </a>
        </nav>

        {/* Social Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target={link.url !== '#' ? '_blank' : undefined}
              rel={link.url !== '#' ? 'noopener noreferrer' : undefined}
              className={`p-6 border-2 border-[#00ffff] rounded-lg hover:scale-105 transition-all hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] ${link.color}`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  {link.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{link.name}</h3>
                  <p className="text-sm opacity-80">{link.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
