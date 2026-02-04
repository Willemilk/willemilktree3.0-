import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Stars from "./_components/Stars";
import Checkerboard from "./_components/Checkerboard";
import SparkleCanvas from "./_components/SparkleCanvas";
import MarqueeBar from "./_components/MarqueeBar";
import MovingBackground from "./_components/MovingBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Willemilk",
  description: "this is my linktree about me erm idunno tbh but just take a look",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* CRT scanline overlay */}
        <div className="crt-overlay" />

        {/* Background layers */}
        <MovingBackground />
        <Checkerboard />
        <Stars />

        {/* Particle effects */}
        <SparkleCanvas />

        {/* Top marquee */}
        <div className="relative z-20 sticky top-0">
          <MarqueeBar />
        </div>

        {/* Main content */}
        <div className="relative z-10">
          {children}
        </div>

        {/* Bottom marquee */}
        <div className="relative z-20">
          <MarqueeBar />
        </div>
      </body>
    </html>
  );
}
