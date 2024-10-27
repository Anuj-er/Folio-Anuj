'use client';

import AnimatedGreetings from '@/components/Hello';
import Hero from '@/components/Hero';
import About from '@/components/About';
import TestimonialsSection from '@/components/TestimonialsSection';
import VisualHighlights from '@/components/Gallery';
import SkillsSection from '@/components/SkillsSection';
import AllProjects from '@/components/AllProjects';
import PreviousWork from '@/components/PreviousWork';
import ContactForm from '@/components/ContactForm';
import Goodbye from '@/components/Goodbye';
import { ReactLenis } from '@studio-freight/react-lenis';
import Gallery from '@/components/Gallery';

const lenisOptions = {
  lerp: 0.05,
  duration: 1.2,
  smoothTouch: false,
  smooth: true,
};

export default function Home() {
  return (
    <ReactLenis root options={lenisOptions}>
      <AnimatedGreetings />
      <Hero />
      <About />
      <TestimonialsSection />
      <SkillsSection />
      <AllProjects />
      <PreviousWork /> 
      <Gallery />
      <ContactForm />
      <Goodbye />
    </ReactLenis>
  );
}
