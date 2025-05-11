import Image from 'next/image';
import React from 'react';
import { Timeline } from '@/components/ui/timeline';
import Link from 'next/link';

export default function PreviousWork() {
  const data = [
    {
      title: 'HackFest25',
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-200 md:text-sm">
            Our team had the incredible opportunity to present our innovative idea to experienced mentors. The feedback and insights we received were invaluable, helping us refine our concept and approach.
            <br /><br />
            Can't wait to implement the suggestions and take our project to the next level! 💡
          </p>
          <div className="grid grid-cols-1 gap-4 mt-4">
            <div className="relative h-20 md:h-44 lg:h-[400px]">
              <Image
                src="/previous-work/hackfest25.jpg"
                alt="HackFest25 Experience"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                loading="eager"
                className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'HackIndia\'25 Mentoring Experience',
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-200 md:text-sm">
            Mentoring at HackIndia'25, Spark 7 was an incredible journey! 🔥
            <br /><br />
            From being '404 Name Not Found' (Anushi, Akanksha, Parnika, and I) last year to returning as mentors alongside our seniors - Teena Goyal, TANYA BATRA, Swastik Verma and Khushdeep Sharma. The experience of sharing insights and receiving a 𝗟𝗲𝘁𝘁𝗲𝗿 𝗼𝗳 𝗔𝗽𝗽𝗿𝗲𝗰𝗶𝗮𝘁𝗶𝗼𝗻 made it all worthwhile.
            <br /><br />
            What started as a learning experience last year transformed into an opportunity to give back. From debugging code to guiding teams, every moment was a chance to share knowledge and grow together. Huge thanks to Stephen SIMON and Evolve AI for making Spark 7 a memorable event. From learning to mentoring, it's been a truly fulfilling experience! 🙌
          </p>
          <div className="grid grid-cols-1 gap-4 mt-4">
            <div className="relative h-20 md:h-44 lg:h-[400px]">
              <Image
                src="/previous-work/hack_gallery.png"
                alt="HackIndia'25 Mentoring Experience"
                fill
                className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'FusionFest Hackathon',
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-200 md:text-sm">
          Last month, I had the privilege of participating in the 36-hour Web3 & MERN 'Fusion Fest' hackathon organized by the Design Thinking Club, in collaboration with HackwithIndia, Unstop.
          </p>
          <div className="grid grid-cols-1 gap-4 mt-4">
            <div className="relative h-20 md:h-44 lg:h-[400px]">
              <Image
                src="/previous-work/fusionFest.jpeg"
                alt="FusionFest Hackathon"
                fill
                className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Somnium Victory',
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-200 md:text-sm">
          I am thrilled to share that our team, "404 Coders", secured 1st place at the 𝘚𝘖𝘔𝘕𝘐𝘜𝘔 hackathon.
          </p>
          <div className="grid grid-cols-1 gap-4 mt-4">
            <div className="relative h-20 md:h-44 lg:h-[400px]">
              <Image
                src="/previous-work/Somnium.jpeg"
                alt="Somnium Victory"
                fill
                className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'TestPad Solution!',
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-200 md:text-sm">
            Back at it with a brand-new repo - this one's bigger, better, and Built with an incredible crew 📣💪
          </p>
          <p className="text-xs font-normal text-gray-300">
            GitHub Repository: <Link href={'https://2ly.link/20s9O'} className="text-gray-300 no-underline" target="_blank" rel="noopener noreferrer">TestPad Solution</Link><br />
            Profile link: <Link href={'https://github.com/Anuj-er'} className="text-gray-300 no-underline" target="_blank" rel="noopener noreferrer">Anuj's GitHub</Link>
          </p>
          <div className="grid grid-cols-1 gap-4 mt-4">
            <div className="relative h-20 md:h-44 lg:h-[400px]">
              <Image
                src="/previous-work/TestPad.png"
                alt="TestPad Solution Repository Overview"
                fill
                className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Creating Portfolio Website",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-200 md:text-sm">
            This project is a showcase of my skills, projects, and accomplishments as a developer. It's a Next.js-based site 🧑‍💻 designed to highlight my journey, experiences, and tech stack while integrating features like an interactive gallery 📸, recent updates section 📰.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <div className="relative h-20 md:h-44 lg:h-[400px]">
              <Image
                src="/og_image.png"
                alt="og_image"
                fill
                className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'HackIndia Hackathon Experience!',
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-200 md:text-sm">
            Just Posted a Linkedin Post sharing my HackIndia Experience {' '}
            <Link href={'https://www.linkedin.com/posts/anuj-er_hackindia-hackindia2024-404namenotfound-activity-7253842414077915137-des2?utm_source=share&utm_medium=member_desktop'} className="text-gray-300 no-underline" target="_blank"
              rel="noopener noreferrer">
              here
            </Link>
          </p>
          <div className="grid grid-cols-1 gap-4">
            <div className="relative h-20 md:h-44 lg:h-[400px]">
              <Image
              // Corrected File Name
                src="/previous-work/HackIndia.jpg"
                alt="HackIndia 2024 Experience"
                fill
                className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'UCampus Info-site',
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-200 md:text-sm">
            UCampus Info-site is a platform showcasing the UCampus app, aimed at enhancing the student experience by simplifying key tasks such as food ordering from on-campus outlets, purchasing gym memberships, and managing uniform orders. The site provides detailed information on all app features, giving students a streamlined way to interact with campus services.    Check it out{' '}
            <Link href={'https://ucampus.vercel.app'} className="text-gray-300 no-underline" target="_blank"
              rel="noopener noreferrer">
              here
            </Link>
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              'og_image.png',
              'homepage.png',
              'explore.png',
              'food_outlet.png'
            ].map((image, index) => (
              <div key={index} className="relative h-20 md:h-44 lg:h-60">
                <Image
                  src={`/previous-work/${image}`}
                  alt={`UCampus screenshot ${index + 1}`}
                  fill
                  className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: 'ProTrack',
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-200 md:text-sm">
            Built ProTrack, a collaborative platform developed as a team project to track analytics and reports. This platform provides users with comprehensive insights and performance tracking across various domains, enabling informed decision-making and strategic planning. Check it out{' '}
            <Link href={'https://jiya-damara.github.io/ProTrack2/'} className="text-gray-300 no-underline" target="_blank"
              rel="noopener noreferrer">
              here
            </Link>
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              'Protrack.png',
              'Protrack-2.png',
              'Protrack-3.png',
              'Protrack-4.png'
            ].map((image, index) => (
              <div key={index} className="relative h-20 md:h-44 lg:h-60">
                <Image
                  src={`/previous-work/${image}`}
                  alt={`ProTrack screenshot ${index + 1}`}
                  fill
                  className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: 'Dean\'s List',
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-200 md:text-sm">
            Excited to share that I've made the Dean's List! 🎉 Check out my latest LinkedIn post to see the recognition and what it means to me.{' '}
            <Link href={'https://www.linkedin.com/posts/anuj-er_starprogrammer-codingcommunity-activity-7196424956539203586-jgHw?utm_source=share&utm_medium=member_desktop'} className="text-gray-300 no-underline" target="_blank"
              rel="noopener noreferrer">
              here
            </Link>
          </p>
          <div className="grid grid-cols-1 gap-4">
            <div className="relative h-20 md:h-44 lg:h-[400px]">
              <Image
                src="/previous-work/Dean-list.png"
                alt="Dean's List Recognition"
                fill
                className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full bg-black" id="prev-work">
      <Timeline data={data} />
    </div>
  );
}