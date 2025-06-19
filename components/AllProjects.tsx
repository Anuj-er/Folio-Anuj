'use client';

import React, { useRef, useState, useEffect } from 'react';
import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/lib/utils";
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';

interface Project {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  liveLink: string;
  tags: string[];
}

export default function AllProjects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

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
  }, []);

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

  const projects: Project[] = [
    {
      title: "Shipment Tracker",
      description: "A React application forcargo shipment tracking featuring interactive maps, comprehensive dashboard, and Docker support.",
      image: "/Projects/allshipment.png",
      githubLink: "https://github.com/Anuj-er/cargo-tracker-webapp",
      liveLink: "https://shipmenttracker.vercel.app/",
      tags: ["react", "docker", "responsive", "mapbox", "mern-stack", "tracking-api", "shipment-tracking"]
    },
    {
      title: "AutoStash Linux",
      description: "A secure, GUI-based Linux backup system with encryption, incremental backups, GitHub integration, and real-time system monitoring.",
      image: "/Projects/autostash.png",
      githubLink: "https://github.com/Anuj-er/autostash-linux",
      liveLink: "",
      tags: ["linux", "python3", "tkinter-gui"]
    },
    {
      title: "Pharmacy Management System",
      description: "A comprehensive Java application for pharmacy management with inventory control, customer management, and sales processing using custom data structures.",
      image: "/Projects/pharmacy.png",
      githubLink: "https://github.com/Anuj-er/PharmacyManagementSystem-Java-DSA",
      liveLink: "",
      tags: ["java", "linkedlist", "mergesort-algorithm", "dsa"]
    },
    {
      title: "RaitaLeaks",
      description: "A secure social media platform for information sharing with real-time notifications, user authentication, and media support.",
      image: "/Projects/raitaleaks.png",
      githubLink: "https://github.com/Anuj-er/RaitaLeaks",
      liveLink: "https://raita-leaks.vercel.app",
      tags: ["react", "nodejs", "mongodb", "websockets", "cloudinary", "jwt-authentication", "mern-stack"]
    },
    {
      title: "Digital-Clock-App",
      description: "A sleek, customizable digital clock app with responsive design and cross-browser compatibility.",
      image: "/Projects/digitalclock.png",
      githubLink: "https://github.com/Anuj-er/Digital-Clock-App/",
      liveLink: "https://eclipse-clock.vercel.app/",
      tags: ["reactjs", "clock", "weather-api", "tailwind-css"]
    },
    {
      title: "Simple-Calculator-App",
      description: "A fast and responsive calculator app with a clean, modern interface built using React and Tailwind CSS.",
      image: "/Projects/quickCalc.png",
      githubLink: "https://github.com/Anuj-er/Simple-Calculator-App/",
      liveLink: "https://quickcalculator.vercel.app/",
      tags: ["calculator", "reactjs", "tailwindcss", "quickcalc"]
    },
    {
      title: "Testpad-Solutions", 
      description: "A comprehensive repository containing solutions for university courses and assignments.",
      image: "/Projects/Testpad.png",
      githubLink: "https://github.com/Anuj-er/Testpad-Solutions",
      liveLink: "",
      tags: [ "mysql", "html5", "frontend", "backend", "cpp"],
    },
    {
      title: "Folio-Anuj",
      description: "A Next.js-based portfolio showcasing my skills, projects, and experiences with interactive features.",
      image: "/Projects/portfolio.png",
      githubLink: "https://github.com/Anuj-er/Folio-Anuj",
      liveLink: "https://anujer.is-a.dev",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Portfolio"]
    },
    {
      title: "ProTrack Dashboard",
      description: "A modern project management dashboard with real-time analytics and team collaboration features.",
      image: "/Projects/Protrack.png",
      githubLink: "https://github.com/Jiya-Damara/ProTrack2",
      liveLink: "https://jiya-damara.github.io/ProTrack2/",
      tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Dashboard"]
    },
    {
      title: "Ucampus-InfoSite",
      description: "A website showcasing the Ucampus app designed to enhance the student experience.",
      image: "/Projects/ucampus.png",
      githubLink: "https://github.com/Anuj-er/Ucampus-InfoSite",
      liveLink: "https://ucampus.vercel.app",
      tags: ["html5", "reactjs", "food-app", "app-information"]
    },
    {
      title: "By The Cook",
      description: "A food recipe website featuring delicious recipes from around the world.",
      image: "/Projects/bythecook.png",
      githubLink: "https://github.com/Anuj-er/Cafe-Website/",
      liveLink: "https://anuj-er.github.io/Cafe-Website/",
      tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Cafe"]
    },
    {
      title: "Library-Management-System-Cpp",
      description: "A console-based Library Management System developed in C++.",
      image: "/Projects/interface-c++.png",
      githubLink: "https://github.com/Anuj-er/Library-Management-System-Cpp",
      liveLink: "",
      tags: ["C++", "OOP", "CLI"]
    }
  ];

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
                      width={400}
                      height={250}
                      className="object-contain w-full h-full bg-black/20"
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