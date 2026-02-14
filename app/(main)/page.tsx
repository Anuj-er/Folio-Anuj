import NextDynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import About from '@/components/About';
import TestimonialsSection from '@/components/TestimonialsSection';
import SkillsSection from '@/components/SkillsSection';
import AllProjects from '@/components/AllProjects';
import PreviousWork from '@/components/PreviousWork';
import Approach from "@/components/Approach";
import ContactForm from '@/components/ContactForm';
import Goodbye from '@/components/Goodbye';
import HomeClientWrapper from '@/components/HomeClientWrapper';
import { getAboutData, getProjects, getExperiences } from '@/lib/actions';

export const dynamic = 'force-dynamic';

// Dynamically import components that might cause SSR issues
const Gallery = NextDynamic(() => import('@/components/Gallery'), { ssr: false });
const GitHubActivity = NextDynamic(() => import('@/components/GitHubActivity'), { ssr: false });

// This is now a Server Component
export default async function Home() {
  // Fetch all data on the server
  const [aboutData, projectsData, experiencesData] = await Promise.all([
    getAboutData(),
    getProjects(),
    getExperiences()
  ]);

  return (
    <HomeClientWrapper>
      <Hero initialData={aboutData} />
      <About initialData={aboutData} />
      <SkillsSection />
      <Approach />
      <TestimonialsSection />
      <AllProjects initialProjects={projectsData} />
      <PreviousWork initialExperiences={experiencesData} />
      <Gallery />
      <GitHubActivity />
      <ContactForm />
      <Goodbye />
    </HomeClientWrapper>
  );
}