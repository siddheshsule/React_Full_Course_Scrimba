import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Anton } from "next/font/google";
import "./globals.css";

// Importing and configuring fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Importing Anton font for meme-style text
const antonFont = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: ["400"], // Anton has a single weight
});

// Metadata for the application
export const metadata: Metadata = {
  title: "My Next.js App",
  description: "An amazing Next.js application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* You can add additional meta tags or link tags here */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${antonFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
