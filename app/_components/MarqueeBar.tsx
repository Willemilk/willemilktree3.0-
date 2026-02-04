'use client';

export default function MarqueeBar() {
  const text = "★ welcome 2 my profile XD ★ rawr means i luv u in dinosaur ★ if u dont like it then BYE ★ scene kid 4ever ★ brainrot central ★ X_X ★ :3 ★ hiii everybodyyyy ★ welcome 2 my profile XD ★ rawr means i luv u in dinosaur ★ if u dont like it then BYE ★ scene kid 4ever ★ brainrot central ★ X_X ★ :3 ★ hiii everybodyyyy ";

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-[#ff10f0] via-[#00ffff] to-[#39ff14] py-2 relative">
      <div className="marquee-track whitespace-nowrap">
        <span className="text-black font-bold text-sm px-4 pixel-font">
          {text}
        </span>
        <span className="text-black font-bold text-sm px-4 pixel-font">
          {text}
        </span>
      </div>
    </div>
  );
}
