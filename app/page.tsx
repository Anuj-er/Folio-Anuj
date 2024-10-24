'use client';

import AnimatedGreetings from '@/components/Hello';
import Hero from '@/components/Hero';
import About from '@/components/About';
import PreviousWork from '@/components/PreviousWork';
import Goodbye from '@/components/Goodbye';
import { ReactLenis } from '@studio-freight/react-lenis';

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
      <PreviousWork />
      <Goodbye />
    </ReactLenis>
  );
}
