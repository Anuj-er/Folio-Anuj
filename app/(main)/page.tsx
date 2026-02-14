'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import AnimatedGreetings from '@/components/Hello';
import Hero from '@/components/Hero';
import About from '@/components/About';
import TestimonialsSection from '@/components/TestimonialsSection';
import SkillsSection from '@/components/SkillsSection';
import AllProjects from '@/components/AllProjects';
import PreviousWork from '@/components/PreviousWork';
import Approach from "@/components/Approach";
import ContactForm from '@/components/ContactForm';
import Goodbye from '@/components/Goodbye';
import { ReactLenis } from '@studio-freight/react-lenis';

// Dynamically import components that might cause SSR issues
const Gallery = dynamic(() => import('@/components/Gallery'), { ssr: false });
const GitHubActivity = dynamic(() => import('@/components/GitHubActivity'), { ssr: false });

const lenisOptions = {
  lerp: 0.1,
  duration: 1.2,
  smoothTouch: false,
  smooth: true,
  wheelMultiplier: 0.7,
  touchMultiplier: 1.5,
  infinite: false,
  orientation: 'vertical' as const,
  gestureOrientation: 'vertical' as const,
  normalizeWheel: true,
};

// This is a client-only page
export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="relative w-16 h-16">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-purple-300/20 rounded-full animate-ping"></div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-t-purple-500 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <ReactLenis root options={lenisOptions}>
      <AnimatedGreetings />
      <Hero />
      <About />
      <SkillsSection />
      <Approach />
      <TestimonialsSection />
      <AllProjects />
      <PreviousWork />
      <Gallery />
      <GitHubActivity />
      <ContactForm />
      <Goodbye />
    </ReactLenis>
  );
}