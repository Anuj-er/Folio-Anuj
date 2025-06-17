'use client';

import AnimatedGreetings from '@/components/Hello';
import Hero from '@/components/Hero';
import About from '@/components/About';
import TestimonialsSection from '@/components/TestimonialsSection';
import VisualHighlights from '@/components/Gallery';
import SkillsSection from '@/components/SkillsSection';
import AllProjects from '@/components/AllProjects';
import PreviousWork from '@/components/PreviousWork';
import Approach from "@/components/Approach";
import ContactForm from '@/components/ContactForm';
import Goodbye from '@/components/Goodbye';
import { ReactLenis } from '@studio-freight/react-lenis';
import Gallery from '@/components/Gallery';
import GitHubActivity from '@/components/GitHubActivity';

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