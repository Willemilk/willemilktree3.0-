import { FaGithub, FaYoutube, FaTwitter, FaTiktok, FaInstagram, FaDiscord } from 'react-icons/fa';
import { SiApplemusic } from 'react-icons/si';

export default function Home() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Willemilk',
      icon: <FaGithub className="w-8 h-8" />,
      description: 'Random projects, mostly school stuff (most of my repos are private!)'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@willemilk1942',
      icon: <FaYoutube className="w-8 h-8" />,
      description: 'Create gaming videos mostly geometry dash… not really "trying to make it", just sharing stuff!'
    },
    {
      name: 'Twitter/X',
      url: 'https://x.com/WillemdeWit040',
      icon: <FaTwitter className="w-8 h-8" />,
      description: 'Mostly scrolling and watching people argue 😭'
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@willemdewit10',
      icon: <FaTiktok className="w-8 h-8" />,
      description: 'Using less now because of Reels (new account cant login to the old one anymore)'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/willemilk/',
      icon: <FaInstagram className="w-8 h-8" />,
      description: 'Life stuff and reels doomscrolling'
    },
    {
      name: 'Apple Music',
      url: 'https://music.apple.com/profile/wjpmdewit',
      icon: <SiApplemusic className="w-8 h-8" />,
      description: 'Stuff I\'m listening to lately'
    },
    {
      name: 'Discord',
      url: '#',
      icon: <FaDiscord className="w-8 h-8" />,
      description: 'Willemilk - feel free to add me i like talking to randoms'
    }
  ];

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
          <a href="/about" className="px-6 py-3 rounded-lg border-2 border-current hover:bg-white hover:text-black transition-colors">
            About
          </a>
          <a href="/cool-stuff" className="px-6 py-3 rounded-lg border-2 border-current hover:bg-white hover:text-black transition-colors">
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
              className="p-6 border-2 border-current rounded-lg hover:scale-105 transition-transform"
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
