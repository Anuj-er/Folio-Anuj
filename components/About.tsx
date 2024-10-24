"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { FaCode, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <section id="about" className="relative min-h-screen w-full py-16 px-4">
      <div className="mx-auto max-w-6xl">
        <motion.div 
          className="grid gap-8 md:grid-cols-[2fr,1fr]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="overflow-hidden rounded-2xl border border-[#292929] bg-black/50 backdrop-blur-sm">
            <div className="p-6 md:p-8">
              <motion.div {...fadeInUp} className="space-y-6">
                <div className="space-y-2">
                  <span className="inline-block rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400">
                    HackIndia National Finalist
                  </span>
                  <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
                    Anuj Kumar
                  </h1>
                  <p className="text-xl font-semibold text-gray-400">
                    Curious Mind | Tech Enthusiast | Innovator
                  </p>
                </div>

                <div className="space-y-4 text-gray-300">
                  <motion.p {...fadeInUp} className="leading-relaxed">
                    Based in Chandigarh, India, I'm a second-year Computer Science Engineering student at Chitkara University, 
                    with a deep passion for learning and solving real-world problems through technology.
                  </motion.p>
                  
                  <motion.p {...fadeInUp} className="leading-relaxed">
                    From exploring diverse programming languages to working on cutting-edge projects, I am driven by my curiosity 
                    and the desire to make an impact in the tech space.
                  </motion.p>

                  <motion.div {...fadeInUp} className="rounded-lg bg-[#1a1a1a] p-4">
                    <h3 className="mb-2 font-semibold text-gray-200">Current Focus</h3>
                    <div className="space-y-3">
                      <p className="flex items-center gap-2 text-gray-300">
                        <FaCode className="h-4 w-4 text-blue-400" />
                        Developing full-stack web development skills
                      </p>
                      <p className="flex items-center gap-2 text-gray-300">
                        <FaCode className="h-4 w-4 text-blue-400" />
                        Building practical projects and solutions
                      </p>
                      <Link 
                        href="https://github.com/Anuj-er" 
                        target="_blank"
                        className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        <FaGithub className="h-4 w-4" />
                        View my projects on GitHub
                      </Link>
                    </div>
                  </motion.div>
                </div>

                <motion.div {...fadeInUp} className="pt-4">
                  <button 
                    className="group flex items-center gap-2 rounded-lg border border-[#292929] bg-[#1a1a1a] px-4 py-2 text-white transition-all hover:bg-[#292929]"
                  >
                    <IoDocumentTextOutline className="h-5 w-5 transition-transform group-hover:scale-110" />
                    <span>View Resume</span>
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>

          <motion.div 
            {...fadeInUp}
            className="relative aspect-square overflow-hidden rounded-2xl border border-[#292929]"
          >
            <Image
              src="/anuj.png"
              alt="Anuj Kumar"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;