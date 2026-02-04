import { FaGithub, FaYoutube, FaTiktok, FaInstagram, FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiApplemusic } from 'react-icons/si';
import NowPlaying from './_components/NowPlaying';
import VisitorCounter from './_components/VisitorCounter';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Willemilk',
    icon: <FaGithub className="w-8 h-8" />,
    description: 'Random projects, mostly school stuff (most of my repos are private!)',
    accent: '#39ff14',
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@willemilk1942',
    icon: <FaYoutube className="w-8 h-8" />,
    description: 'Create gaming videos mostly geometry dash… not really "trying to make it", just sharing stuff!',
    accent: '#ff0055',
  },
  {
    name: 'Twitter / X',
    url: 'https://x.com/WillemdeWit040',
    icon: <FaXTwitter className="w-8 h-8" />,
    description: 'Mostly scrolling and watching people argue 😭',
    accent: '#00ffff',
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@willemdewit10',
    icon: <FaTiktok className="w-8 h-8" />,
    description: 'Using less now because of Reels (new account cant login to the old one anymore)',
    accent: '#ff10f0',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/willemilk/',
    icon: <FaInstagram className="w-8 h-8" />,
    description: 'Life stuff and reels doomscrolling',
    accent: '#ff6600',
  },
  {
    name: 'Apple Music',
    url: 'https://music.apple.com/profile/wjpmdewit',
    icon: <SiApplemusic className="w-8 h-8" />,
    description: "Stuff I'm listening to lately",
    accent: '#ff10f0',
  },
  {
    name: 'Discord',
    url: '#',
    icon: <FaDiscord className="w-8 h-8" />,
    description: 'Willemilk - feel free to add me i like talking to randoms',
    accent: '#39ff14',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen p-4 md:p-8 checker-bg">
      <main className="max-w-4xl mx-auto">
        {/* Welcome banner */}
        <div className="text-center mb-4">
          <p className="pixel-font text-[10px] md:text-xs text-[#39ff14] animate-[color-cycle_4s_linear_infinite]">
            ★ ★ ★ welcome 2 my profile!!! ★ ★ ★
          </p>
        </div>

        {/* Big header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl impact-font rainbow-text mb-4 glitch-text">
            Hey, I'm Willem
          </h1>
          <p className="text-lg md:text-xl text-[#00ffff] wiggle max-w-lg mx-auto">
            this is my linktree about me erm idunno tbh but just take a look
          </p>

          {/* Decorative scene kid divider */}
          <div className="my-6 flex items-center justify-center gap-2 text-2xl animate-[pulse-glow_2s_ease-in-out_infinite]">
            <span className="animate-[spin-slow_3s_linear_infinite]">★</span>
            <span className="text-[#ff10f0]">♥</span>
            <span className="text-[#00ffff]">X_X</span>
            <span className="text-[#39ff14]">♥</span>
            <span className="animate-[spin-slow_3s_linear_infinite_reverse]">★</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex gap-4 justify-center mb-12 flex-wrap">
          <a
            href="/about"
            className="px-8 py-4 rounded-lg neon-box text-[#ff10f0] font-bold text-lg impact-font tracking-wider hover:bg-[#ff10f0] hover:text-black transition-all glitch-text"
          >
            ★ About ★
          </a>
          <a
            href="/cool-stuff"
            className="px-8 py-4 rounded-lg neon-box text-[#00ffff] font-bold text-lg impact-font tracking-wider hover:bg-[#00ffff] hover:text-black transition-all glitch-text"
          >
            ★ Cool Stuff ★
          </a>
        </nav>

        {/* Now Playing widget */}
        <div className="mb-10 animate-[float_4s_ease-in-out_infinite]">
          <NowPlaying />
        </div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {socialLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.url}
              target={link.url !== '#' ? '_blank' : undefined}
              rel={link.url !== '#' ? 'noopener noreferrer' : undefined}
              className="tilt-card p-5 rounded-lg neon-box bg-black/50 backdrop-blur-sm group"
              style={{
                animationDelay: `${i * 0.2}s`,
                borderColor: link.accent,
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 text-3xl group-hover:animate-[shake_0.5s_ease-in-out]"
                  style={{ color: link.accent }}
                >
                  {link.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3
                    className="text-xl font-bold mb-1 impact-font tracking-wide"
                    style={{ color: link.accent }}
                  >
                    {link.name}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {link.description}
                  </p>
                </div>
                <span className="text-xl opacity-0 group-hover:opacity-100 transition-opacity animate-[float_1s_ease-in-out_infinite]">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Visitor Counter */}
        <div className="text-center mb-8">
          <VisitorCounter />
        </div>

        {/* Footer decorations */}
        <div className="text-center text-xs pixel-font text-[#ff10f0] py-6 space-y-2">
          <p className="animate-[color-cycle_5s_linear_infinite]">
            ♥ made with mass brainrot and zero sleep ♥
          </p>
          <p className="text-[8px] text-gray-600">
            &copy; 2025 willemilk — if ur reading this ur cool
          </p>
        </div>
      </main>
    </div>
  );
}
