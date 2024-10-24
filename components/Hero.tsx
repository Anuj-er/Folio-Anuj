'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaCaretDown } from 'react-icons/fa';
import { HERO_LINKS } from '@/lib/consts';
import { cn } from "@/lib/utils";

interface MeteorProps {
  number: number;
}

const Meteors = ({ number }: MeteorProps) => {
  const [meteors, setMeteors] = useState<Array<{
    id: number;
    top: number;
    left: number;
    delay: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    setMeteors(
      Array.from({ length: number }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: Math.random() * (3 - 1) + 1,
      }))
    );
  }, [number]);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className={cn(
            "fixed h-0.5 w-0.5 rotate-[215deg] rounded-[9999px]",
            "before:absolute before:top-1/2 before:-left-4 before:h-[1px] before:w-[50px]",
            "before:transform before:bg-gradient-to-r before:from-[#FFD700] before:to-transparent",
            "before:content-['']",
            "bg-[#FFD700]",
            "after:absolute after:top-1/2 after:left-0 after:h-[1px] after:w-[50px]",
            "after:transform after:bg-gradient-to-r after:from-[#FFD700] after:to-transparent",
            "after:content-[''] after:blur-sm",
            "animate-meteor",
            "glow-meteor"
          )}
          style={{
            top: `${meteor.top}%`,
            left: `${meteor.left}%`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

const AnimatedOrb = ({ className }: { className: string }) => (
  <div className={`absolute rounded-full mix-blend-screen filter blur-xl animate-float opacity-30 ${className}`} />
);

const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden bg-[#000000]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1),rgba(0,0,0,1))]" />
    <AnimatedOrb className="h-96 w-96 bg-purple-700/30 left-1/4 top-1/4" />
    <AnimatedOrb className="h-96 w-96 bg-blue-700/30 right-1/4 bottom-1/4" />
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
  </div>
);

const Hero: React.FC = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = window.innerHeight;
      const newScale = 1 + (scrollPosition / maxScroll) * 0.2;
      setScale(newScale > 1.2 ? 1.2 : newScale);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      <AnimatedBackground />
      <Meteors number={20} />

      {/* Glass overlay for content */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

      <div
        className="relative z-10 flex flex-col items-center text-center transition-transform duration-300 ease-out will-change-transform"
        style={{ transform: `scale(${scale})` }}
      >
        <p className="mb-4 text-6xl text-white">
          Hey, I&apos;m{' '}
          <span className="text-7xl font-bold bg-gradient-to-r from-[#60a5fa] via-[#a78bfa] to-[#60a5fa] bg-clip-text text-transparent">
            Anuj
          </span>
        </p>
        <p className="mb-8 text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
          Software Engineer
        </p>
        <p className="mx-auto mb-8 max-w-2xl text-2xl text-white/80 font-light">
          Passionate about learning and solving real-world problems through technology.
        </p>

        <div className="flex space-x-4">
          {HERO_LINKS.map((link, index) => (
            <Link
              key={index}
              href={link.src}
              target="_blank"
              className="rounded-xl border border-white/20 bg-white/10 p-3 text-white transition-all duration-300 hover:scale-110 hover:bg-white/20 backdrop-blur-sm"
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 z-10 flex flex-col items-center">
        <FaCaretDown className="animate-bounce text-4xl text-white duration-2000" />
      </div>
    </div>
  );
};

export default Hero;