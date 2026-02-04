import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Stars from "./_components/Stars";
import Checkerboard from "./_components/Checkerboard";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Willemilk - Hey I'm Willem",
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
        <Checkerboard />
        <Stars />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
