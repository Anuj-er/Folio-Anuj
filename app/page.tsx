'use client';

import dynamic from 'next/dynamic';
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
export default function Home() {
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