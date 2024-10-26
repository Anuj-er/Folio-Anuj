import type { Metadata } from 'next';
import { Hanken_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import { Analytics } from '@vercel/analytics/react';

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--font-hanken-grotesk',
});

export const metadata: Metadata = {
  title: 'Anuj Siwach',
  description: 'Welcome to my portfolio website :)',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  themeColor: '#000000',
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
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="py-4 sm:py-6 lg:py-8">
              {children}
            </div>
          </main>
          <footer className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            {/* Add footer content if needed */}
          </footer>
        </div>
        <Analytics />
      </body>
    </html>
  );
}