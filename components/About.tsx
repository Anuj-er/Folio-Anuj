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
    <section id="about" className="relative min-h-screen w-full py-4 sm:py-6 md:py-8 px-4">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 md:grid-cols-[2fr,1fr]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Main Content Card */}
          <div className="overflow-hidden rounded-xl sm:rounded-2xl border border-[#292929] bg-black/50 backdrop-blur-sm">
            <div className="p-4 sm:p-6 md:p-8">
              <motion.div {...fadeInUp} className="space-y-4 sm:space-y-6">
                {/* Header Section */}
                <div className="space-y-2 sm:space-y-3">
                  <span className="inline-block rounded-full bg-blue-500/10 px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium text-blue-400">
                    HackIndia National Finalist
                  </span>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                    Anuj Kumar
                  </h1>
                  <p className="text-lg sm:text-xl font-semibold text-gray-400">
                    Curious Mind | Tech Enthusiast | Innovator
                  </p>
                </div>

                {/* Description Section */}
                <div className="space-y-3 sm:space-y-4 text-gray-300">
                  <motion.p {...fadeInUp} className="text-sm sm:text-base leading-relaxed">
                    Based in Chandigarh, India, I'm a second-year Computer Science Engineering student at Chitkara University,
                    with a deep passion for learning and solving real-world problems through technology.
                  </motion.p>

                  <motion.p {...fadeInUp} className="text-sm sm:text-base leading-relaxed">
                    From exploring diverse programming languages to working on cutting-edge projects, I am driven by my curiosity
                    and the desire to make an impact in the tech space.
                  </motion.p>

                  {/* Current Focus Card */}
                  <motion.div {...fadeInUp} className="rounded-lg bg-[#1a1a1a] p-3 sm:p-4">
                    <h3 className="mb-2 text-sm sm:text-base font-semibold text-gray-200">Current Focus</h3>
                    <div className="space-y-2 sm:space-y-3">
                      <p className="flex items-center gap-2 text-sm sm:text-base text-gray-300">
                        <FaCode className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400 flex-shrink-0" />
                        Developing full-stack web development skills
                      </p>
                      <p className="flex items-center gap-2 text-sm sm:text-base text-gray-300">
                        <FaCode className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400 flex-shrink-0" />
                        Building practical projects and solutions
                      </p>
                      <Link
                        href="https://github.com/Anuj-er"
                        target="_blank"
                        className="flex items-center gap-2 text-sm sm:text-base text-gray-300 hover:text-blue-400 transition-colors"
                      >
                        <FaGithub className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                        View my projects on GitHub
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Image Section */}
          <motion.div
            {...fadeInUp}
            className="relative h-[300px] sm:h-[400px] md:h-full w-full max-w-[400px] mx-auto md:mx-0 overflow-hidden rounded-xl sm:rounded-2xl border border-[#292929]"
          >
            <Image
              src="/Anuj.png"
              alt="Anuj Kumar"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;