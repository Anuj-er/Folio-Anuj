'use client';

import React from 'react';
import { BorderBeam } from "@/components/ui/border-beam";
import { cn } from "@/lib/utils";
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
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

    const projects: Project[] = [
        {
          title: "ProTrack Dashboard",
          description: "A modern project management dashboard with real-time analytics and team collaboration features.",
          image: "/previous-work/Protrack.png",
          githubLink: "https://github.com/Jiya-Damara/ProTrack2",
          liveLink: "https://jiya-damara.github.io/ProTrack2/",
          tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap" , "Dashboard"]
        },
        {
          title: "Ucampus-InfoSite",
          description: "Ucampus-InfoSite is a website for showcasing the Ucampus app, designed to enhance the  experience for students.",
          image: "/previous-work/og_image.png",
          githubLink: "https://github.com/Anuj-er/Ucampus-InfoSite",
          liveLink: "https://ucampus.vercel.app",
          tags: [
            "html5","reactjs" ,"food-app" ,"app-information"]
        },
        {
          title: "By The Cook",
          description: "A food recipe website with a collection of delicious recipes from around the world.",
          image: "/previous-work/Cafe.png",
          githubLink: "https://github.com/Anuj-er/Cafe-Website/",
          liveLink: "https://anuj-er.github.io/Cafe-Website/",
          tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Cafe"]
        },
        
        {
          title: "Library-Management-System-Cpp",
          description: "A console-based Library Management System developed in C++.",
          image: "/previous-work/interface-c++.png",
          githubLink: "https://github.com/yourusername/homepage-builder",
          liveLink: "https://homepage-builder.demo",
          tags: ["C++", "OOP", "CLI"]
        }
      ];

  return (
    <section id="Projects" className="relative w-full py-20">
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-6xl font-bold bg-gradient-to-r from-[#60a5fa] via-[#a78bfa] to-[#60a5fa] bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-xl text-white/70">
            A collection of my recent work and experiments
          </p>
        </div>
        
        {/* Projects scroll container */}
        <div className="relative">
          {/* Projects wrapper */}
          <div className="flex gap-8 overflow-x-auto pb-8 px-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative flex-none w-[400px]"
              >
                {/* Card container */}
                <div className="relative h-[600px] rounded-3xl border border-white/10 overflow-hidden backdrop-blur-sm bg-white/5">
                  {/* Image section */}
                  <div className="relative h-[250px]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="object-cover w-full h-full"
                    />
                    {/* Soft gradient overlay for image */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0e0e0e]/80" />
                  </div>

                  {/* Content section */}
                  <div className="relative p-8 h-[350px] flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-4 transition-all duration-300
                      bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] bg-clip-text group-hover:text-transparent">
                      {project.title}
                    </h3>
                    
                    <p className="text-white/70 mb-6 line-clamp-3 group-hover:text-white/90 transition-colors duration-300">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-sm rounded-full bg-white/5 text-white/70 border border-white/10
                            hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="mt-auto flex gap-4">
                      <Link
                        href={project.githubLink}
                        target="_blank"
                        className="flex items-center justify-center flex-1 gap-2 rounded-xl border border-white/10 
                          bg-white/5 py-3 text-white/90 transition-all duration-300 
                          hover:bg-white/10 hover:border-white/30 hover:text-white"
                      >
                        <FaGithub className="text-xl" />
                        <span>Source Code</span>
                      </Link>
                      <Link
                        href={project.liveLink}
                        target="_blank"
                        className="flex items-center justify-center flex-1 gap-2 rounded-xl 
                          bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] py-3 text-white
                          transition-all duration-300 hover:opacity-90 hover:translate-y-[-2px]"
                      >
                        <FaExternalLinkAlt className="text-lg" />
                        <span>Live Preview</span>
                      </Link>
                    </div>
                  </div>

                  {/* Border effect */}
                  <BorderBeam className="opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll fade indicators */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}