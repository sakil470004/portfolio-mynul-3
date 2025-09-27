import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mynul Islam - Full Stack Developer",
  description: "Passionate Full Stack Developer from Dhaka, Bangladesh. Specialized in MERN stack with 1.5+ years of experience building scalable web applications.",
  keywords: "Full Stack Developer, MERN Stack, React, Node.js, JavaScript, TypeScript, Web Development, Mynul Islam",
  authors: [{ name: "Mynul Islam" }],
  creator: "Mynul Islam",
  openGraph: {
    title: "Mynul Islam - Full Stack Developer",
    description: "Passionate Full Stack Developer specialized in MERN stack development",
    url: "https://mynul-portfolio.vercel.app",
    siteName: "Mynul Islam Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mynul Islam - Full Stack Developer",
    description: "Passionate Full Stack Developer specialized in MERN stack development",
  },
  robots: {
    index: true,
    follow: true,
  },
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
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
