'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaCaretDown } from 'react-icons/fa';
import { HERO_LINKS } from '@/lib/consts';
import { cn } from "@/lib/utils";

interface ParticleProps {
  className?: string;
  quantity?: number;
  ease?: number;
  color?: string;
  refresh?: boolean;
}

const Particles = ({ 
  className = "",
  quantity = 100,
  ease = 80,
  color = "#ffffff",
  refresh = false 
}: ParticleProps) => {
  const [particles, setParticles] = useState<Array<{
    x: number;
    y: number;
    size: number;
    id: number;
    directionX: number;
    directionY: number;
  }>>([]);

  useEffect(() => {
    const generateParticles = () => {
      return Array.from({ length: quantity }, (_, i) => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        id: i,
        directionX: (Math.random() - 0.5) * 0.5,
        directionY: (Math.random() - 0.5) * 0.5,
      }));
    };

    setParticles(generateParticles());
  }, [quantity, refresh]);

  useEffect(() => {
    const moveParticles = () => {
      setParticles(prevParticles =>
        prevParticles.map(particle => ({
          ...particle,
          x: ((particle.x + particle.directionX + 100) % 100),
          y: ((particle.y + particle.directionY + 100) % 100),
        }))
      );
    };

    const intervalId = setInterval(moveParticles, ease);
    return () => clearInterval(intervalId);
  }, [ease]);

  return (
    <div className={cn("fixed inset-0 pointer-events-none", className)}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full mix-blend-screen"
          style={{
            backgroundColor: color,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: 0.6,
            transform: `scale(${particle.size})`,
            transition: `all ${ease}ms linear`,
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
  <div className="absolute inset-0 overflow-hidden bg-black">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1),rgba(0,0,0,1))]" />
    {/* Adjusted orb positions for better mobile display */}
    <AnimatedOrb className="h-64 w-64 md:h-96 md:w-96 bg-purple-700/30 left-[10%] md:left-1/4 top-1/4" />
    <AnimatedOrb className="h-64 w-64 md:h-96 md:w-96 bg-blue-700/30 right-[10%] md:right-1/4 bottom-1/4" />
    <div className="absolute inset-0 bg-grid opacity-20" />
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
      <Particles
        quantity={60}
        ease={50}
        color="#ffffff"
        className="z-9"
        refresh={false}
      />

      {/* Glass overlay for content */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

      <div
        className="relative z-10 flex flex-col items-center text-center transition-transform duration-300 ease-out will-change-transform px-4 sm:px-6"
        style={{ transform: `scale(${scale})` }}
      >
        <p className="mb-2 sm:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
          Hey, I&apos;m{' '}
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#60a5fa] via-[#a78bfa] to-[#60a5fa] bg-clip-text text-transparent animate-shimmer bg-shimmer">
            Anuj Kumar
          </span>
        </p>
        <p className="mb-4 sm:mb-6 md:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
          Developer
        </p>
        <p className="mx-auto mb-6 sm:mb-8 max-w-[90%] sm:max-w-2xl text-lg sm:text-xl md:text-2xl text-white/80 font-light leading-relaxed">
          Passionate about learning and solving real-world problems through technology.
        </p>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {HERO_LINKS.map((link, index) => (
            <Link
              key={index}
              href={link.src}
              target="_blank"
              className="group relative rounded-xl border border-white/20 bg-white/10 p-2 sm:p-3 text-white transition-all duration-300 hover:scale-110 hover:bg-white/20 backdrop-blur-sm overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
              </div>
              <div className="text-xl sm:text-2xl">
                {link.icon}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 z-10 flex flex-col items-center">
        <FaCaretDown className="animate-bounce text-2xl sm:text-4xl text-white duration-2000" />
      </div>
    </div>
  );
};

export default Hero;