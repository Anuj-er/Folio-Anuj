import type { Metadata, Viewport } from 'next';
import { Hanken_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import { Analytics } from '@vercel/analytics/react';
import { ConditionalContactButton } from '@/components/ConditionalContactButton';
import { SimpleBackToTop } from '../components/SimpleBackToTop';
import { SmoothCursor } from '../components/magicui/smooth-cursor';
import { BackgroundMusic } from '../components/BackgroundMusic';

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--font-hanken-grotesk',
});

// Separate viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#000000',
  colorScheme: 'dark',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://siwach.vercel.app'),
  title: {
    default: 'Anuj Siwach | Developer',
    template: '%s | Anuj Siwach'
  },
  description: 'Developer specializing in React, Next.js, and TypeScript. Creating modern web experiences with a focus on performance and user experience.',
  keywords: ['Anuj Siwach', 'Developer', 'React Developer', 'Next.js Developer', 'TypeScript', 'Web Development'],
  authors: [{ name: 'Anuj Siwach' }],
  creator: 'Anuj Siwach',
  publisher: 'Anuj Siwach',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://siwach.vercel.app',
    title: 'Anuj Siwach | Developer',
    description: 'Developer specializing in React, Next.js, and TypeScript. Creating modern web experiences with a focus on performance and user experience.',
    siteName: 'Anuj Siwach Portfolio',
    images: [
      {
        url: '/og_image.png',
        width: 1200,
        height: 630,
        alt: 'Anuj Siwach - Developer',
        type: 'image/png',
      },
    ],
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Anuj Siwach | Developer',
    description: 'Developer specializing in React, Next.js, and TypeScript. Creating modern web experiences with a focus on performance and user experience.',
    images: ['/og_image.png'],
    creator: '@5iwach',
    site: '@5iwach',
  },

  // Icons
  icons: {
    icon: [
      { url: '/favicon_io/favicon.ico' },
      { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon_io/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },

  // Web Manifest
  manifest: '/site.webmanifest',

  // Robots
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
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`
          select-none 
          bg-black 
          text-white
          antialiased 
          min-h-screen
          md:cursor-none
          ${hankenGrotesk.className}
        `}
      >
        {/* Contact button with conditional positioning */}
        <ConditionalContactButton />
        
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="py-4 sm:py-6 lg:py-8">
              {children}
            </div>
          </main>
          <footer className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            {}
          </footer>
        </div>
        
        {/* Static back to top button */}
        <SimpleBackToTop />
        
        {/* Background music control */}
        <BackgroundMusic audioSrc="/audio/background.mp3" initialVolume={0.5} />
        
        {/* Custom smooth cursor */}
        <SmoothCursor color="#a78bfa" size={10} ringSize={32} />
        
        <Analytics />
      </body>
    </html>
  );
}