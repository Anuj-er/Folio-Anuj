'use client';

import React, { useRef, useState, useEffect } from 'react';
import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/lib/utils";
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';
import { getProjects } from '@/lib/actions';

interface Project {
  _id?: string;
  title: string;
  description: string;
  image: string;
  githubLink: string;
  liveLink: string;
  tags: string[];
}

export default function AllProjects({ initialProjects = [] }: { initialProjects?: Project[] }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [hasFetched, setHasFetched] = useState(initialProjects.length > 0);

  // Fetch projects on mount if not provided via props
  useEffect(() => {
    if (!hasFetched) {
      const fetchProjects = async () => {
        const data = await getProjects();
        if (data && data.length > 0) {
          setProjects(data);
          setHasFetched(true);
        }
      };
      fetchProjects();
    }
  }, [hasFetched]);

  // Check scroll position to show/hide buttons
  const checkScrollPosition = () => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftButton(scrollLeft > 0);
    setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10); // 10px buffer
  };

  // Handle scroll events
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollPosition);
      // Initial check
      checkScrollPosition();

      return () => scrollContainer.removeEventListener('scroll', checkScrollPosition);
    }
  }, [projects]); // Re-run when projects load

  // Scroll left or right
  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth * 0.8; // 80% of visible width

    container.scrollTo({
      left: direction === 'left'
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount,
      behavior: 'smooth'
    });
  };

  // If no projects yet, show loading or nothing (or skeleton)
  if (projects.length === 0) return null;

  return (
    <section id="Projects" className="relative w-full py-10 sm:py-20">
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-8 sm:mb-16 space-y-2 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#60a5fa] via-[#a78bfa] to-[#60a5fa] bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70">
            A collection of my recent work and experiments
          </p>
        </div>

        {/* Projects scroll container with navigation buttons */}
        <div className="relative">
          {/* Left scroll button */}
          {showLeftButton && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 text-white rounded-full p-2 sm:p-3 shadow-lg border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-110"
              aria-label="Scroll left"
            >
              <FaChevronLeft className="text-lg sm:text-xl" />
            </button>
          )}

          {/* Right scroll button */}
          {showRightButton && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 text-white rounded-full p-2 sm:p-3 shadow-lg border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-110"
              aria-label="Scroll right"
            >
              <FaChevronRight className="text-lg sm:text-xl" />
            </button>
          )}

          {/* Projects wrapper */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto pb-6 sm:pb-8 px-2 sm:px-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative flex-none w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px]"
              >
                {/* Card container */}
                <div className="relative h-[550px] sm:h-[600px] md:h-[650px] rounded-2xl sm:rounded-3xl border border-white/10 overflow-hidden backdrop-blur-sm bg-white/5">
                  {/* Image section */}
                  <div className="relative h-[200px] sm:h-[220px] md:h-[250px]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 360px, 400px"
                      className="object-contain bg-black/20"
                    />
                    {/* Soft gradient overlay for image */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0e0e0e]/80" />
                  </div>

                  {/* Content section */}
                  <div className="relative p-4 sm:p-6 md:p-8 h-[350px] sm:h-[380px] flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 transition-all duration-300
                      bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] bg-clip-text group-hover:text-transparent">
                      {project.title}
                    </h3>

                    <div className="mb-4 sm:mb-6 h-[80px] overflow-y-auto pr-1 custom-scrollbar relative">
                      <p className="text-sm sm:text-base text-white/70 group-hover:text-white/90 transition-colors duration-300">
                        {project.description}
                      </p>
                      {project.description.length > 100 && (
                        <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[#0e0e0e]/80 to-transparent pointer-events-none"></div>
                      )}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-white/5 text-white/70 border border-white/10
                            hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="mt-auto flex gap-2 sm:gap-4">
                      {project.githubLink && (
                        <Link
                          href={project.githubLink}
                          target="_blank"
                          className="flex items-center justify-center flex-1 gap-1.5 sm:gap-2 rounded-xl border border-white/10 
                            bg-white/5 py-2.5 sm:py-3 text-sm sm:text-base text-white/90 transition-all duration-300 
                            hover:bg-white/10 hover:border-white/30 hover:text-white"
                        >
                          <FaGithub className="text-lg sm:text-xl" />
                          <span>Source Code</span>
                        </Link>
                      )}
                      {project.liveLink && (
                        <Link
                          href={project.liveLink}
                          target="_blank"
                          className="flex items-center justify-center flex-1 gap-1.5 sm:gap-2 rounded-xl 
                            bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] py-2.5 sm:py-3 text-sm sm:text-base text-white
                            transition-all duration-300 hover:opacity-90 hover:translate-y-[-2px]"
                        >
                          <FaExternalLinkAlt className="text-base sm:text-lg" />
                          <span>Live Preview</span>
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Border effect */}
                  <BorderBeam className="opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>

          {/* Scroll fade indicators */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-black to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 bg-gradient-to-l from-black to-transparent pointer-events-none" />
        </div>

        {/* Scroll hint text */}
        <div className="text-center mt-4 text-white/40 text-sm flex items-center justify-center gap-2">
          <FaChevronLeft className="text-xs" />
          <span>Scroll to explore more projects</span>
          <FaChevronRight className="text-xs" />
        </div>
      </div>
    </section>
  );
}