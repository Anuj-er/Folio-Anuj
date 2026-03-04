import type { Metadata, Viewport } from 'next';
import { Hanken_Grotesk } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

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
  metadataBase: new URL('https://anujer.is-a.dev'),
  title: {
    default: 'Anuj Siwach | Developer',
    template: '%s | Anuj Siwach'
  },
  description: 'Third-year Computer Science Engineering student and Developer specializing in React, Next.js, and TypeScript. Creating modern web experiences with a focus on performance and user experience.',
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
    url: 'https://anujer.is-a.dev',
    title: 'Anuj Siwach | Developer',
    description: 'Third-year Computer Science Engineering student and Developer specializing in React, Next.js, and TypeScript. Creating modern web experiences with a focus on performance and user experience.',
    siteName: 'Anuj Siwach Portfolio',
    images: [
      {
        url: "https://res.cloudinary.com/folioanuj/image/upload/v1771048070/folio-anuj/og_image.jpg",
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
    description: 'Third-year Computer Science Engineering student and Developer specializing in React, Next.js, and TypeScript. Creating modern web experiences with a focus on performance and user experience.',
    images: ["https://res.cloudinary.com/folioanuj/image/upload/v1771048070/folio-anuj/og_image.jpg"],
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
  verification: {
    google: '-I3qaFArEuaCZ0QYmi7-ATtFvBayIKbfHetKiQDMVlA',
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
          ${hankenGrotesk.className}
        `}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Anuj Siwach",
              "url": "https://anujer.is-a.dev",
              "image": "https://res.cloudinary.com/folioanuj/image/upload/v1771048048/folio-anuj/Anuj.jpg",
              "sameAs": [
                "https://github.com/Anuj-er",
                "https://www.linkedin.com/in/anuj-er/",
                "https://x.com/5iwach"
              ],
              "jobTitle": "Developer",
              "description": "Third-year Computer Science Engineering student and Developer specializing in React, Next.js, and TypeScript. Creating modern web experiences with a focus on performance and user experience.",
              "brand": {
                "@type": "Brand",
                "logo": "https://anujer.is-a.dev/favicon_io/android-chrome-512x512.png"
              },
              "knowsAbout": ["React", "Next.js", "TypeScript", "Web Development", "Computer Science Engineering"]
            })
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}