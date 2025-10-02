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
  title: 'Mynul Islam',
  description:
    'Experienced Full Stack Developer based in Dhaka, Bangladesh, specializing in MERN stack and modern web technologies. Passionate about building scalable applications and sharing knowledge with the tech community.',
  keywords:
    'Mynul Islam, Mynul, Sakil, Full-stack Developer, MERN Stack, React, Next.js, Node.js, Express.js, MongoDB, JavaScript, TypeScript, Web Development, Dhaka, Bangladesh, Programming Hero, Software Engineer',
  applicationName: 'Portfolio of Mynul Islam',
  creator: 'Mynul Islam',
  publisher: 'Mynul Islam',
  category: 'personal',
  metadataBase: new URL('https://portfolio-mynul-3.vercel.app/'),
  openGraph: {
    title: 'Mynul Islam - Full Stack Developer',
    description:
      'Experienced Full Stack Developer based in Dhaka, Bangladesh, specializing in MERN stack and modern web technologies. Passionate about building scalable applications and sharing knowledge with the tech community.',
    images: ['/me.png'],
    siteName: 'Portfolio of Mynul Islam',
    locale: 'en_US',
    type: 'website',
    url: 'https://portfolio-mynul-3.vercel.app/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mynul Islam - Full Stack Developer',
    description:
      'Experienced Full Stack Developer based in Dhaka, Bangladesh, specializing in MERN stack and modern web technologies. Building innovative web applications with modern technologies.',
    creator: '@mynul_sakil',
    images: ['/me.png'] // Must be an absolute URL
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
