'use client';

import React, { memo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getProjects } from '@/lib/actions';
import {
  SiNextdotjs, SiReact, SiTypescript, SiNodedotjs, SiExpress, SiMongodb,
  SiPython, SiCplusplus, SiDocker, SiGit, SiTailwindcss, SiPostman, SiLeetcode
} from 'react-icons/si';
import { FaGraduationCap, FaLaptopCode, FaJava } from 'react-icons/fa';

const skillIcons = {
  frontend: () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10">
      <path
        fill="currentColor"
        d="M12 18.178l-4.62-1.256-.328-3.544h2.27l.158 1.844 2.52.667 2.52-.667.26-2.866H6.96l-.635-6.678h11.35l-.227 2.21H8.822l.204 2.256h8.217l-.624 6.778L12 18.178z"
      />
      <path
        fill="currentColor"
        d="M3 2h18l-1.623 18L12 22l-7.377-2L3 2zm2.188 2L6.49 18.434 12 19.928l5.51-1.494L18.812 4H5.188z"
      />
    </svg>
  ),
  backend: () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10">
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
      />
      <path
        fill="currentColor"
        d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
      />
    </svg>
  ),
  programming: () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10">
      <path
        fill="currentColor"
        d="M8 3a2 2 0 00-2 2v4a2 2 0 01-2 2H3v2h1a2 2 0 012 2v4a2 2 0 002 2h2v-2H8v-5a2 2 0 00-2-2 2 2 0 002-2V5h2V3H8zm8 0a2 2 0 012 2v4a2 2 0 002 2h1v2h-1a2 2 0 00-2 2v4a2 2 0 01-2 2h-2v-2h2v-5a2 2 0 012-2 2 2 0 01-2-2V5h-2V3h2z"
      />
    </svg>
  )
};

// Memoize the skill icons to prevent unnecessary re-renders
const SkillIcon = memo(({ Icon }: { Icon: React.FC }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="text-white/70 hover:text-white transition-colors"
  >
    <Icon />
  </motion.div>
));

SkillIcon.displayName = 'SkillIcon';

// Memoize the skill category card
const SkillCategoryCard = memo(({ category, index }: { category: any; index: number }) => (
  <motion.div
    key={category.title}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.02 }}
    className="p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
  >
    <div className="flex items-center gap-2 mb-2">
      <h3 className="text-lg sm:text-xl font-semibold text-white">{category.title}</h3>
    </div>
    <p className="text-xs sm:text-sm text-white/70 mb-4">{category.subtitle}</p>
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill: string) => (
          <motion.span
            key={skill}
            whileHover={{ scale: 1.05 }}
            className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all"
          >
            {skill}
          </motion.span>
        ))}
      </div>
      {category.subSkills && (
        <div className="flex flex-wrap gap-2">
          {category.subSkills.map((skill: string) => (
            <motion.span
              key={skill}
              whileHover={{ scale: 1.05 }}
              className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-purple-500/20 text-purple-300 border border-purple-500/30"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      )}
      <div className="relative h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${category.progress}%` }}
          transition={{ duration: 1, delay: 0.5 }}
          className={`absolute inset-y-0 left-0 bg-gradient-to-r ${category.color} rounded-full`}
        />
      </div>
    </div>
  </motion.div>
));

SkillCategoryCard.displayName = 'SkillCategoryCard';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      subtitle: "Currently enhancing my skills in modern web technologies",
      skills: ["React", "Next.js", "HTML5", "TypeScript", "TailwindCSS", "CSS3"],
      progress: 75,
      learning: true,
      color: "from-blue-400 to-cyan-400"
    },
    {
      title: "Backend Development",
      subtitle: "Learning server-side development fundamentals",
      skills: ["Node.js", "MongoDB", "Express.js", "REST APIs"],
      progress: 65,
      learning: true,
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "Programming Languages & Core Concepts",
      subtitle: "Building strong foundations in programming",
      skills: ["Java", "C++", "Python", "JavaScript"],
      subSkills: ["Operating Systems", "Object-Oriented Programming", "Source Code Management"],
      progress: 80,
      learning: true,
      color: "from-green-400 to-emerald-400"
    }
  ];

  const [projectCount, setProjectCount] = useState<string>("15+");

  useEffect(() => {
    const fetchProjectCount = async () => {
      try {
        const data = await getProjects();
        if (data && data.length > 0) {
          setProjectCount(`${data.length}+`);
        }
      } catch (error) {
        console.error("Failed to fetch projects count", error);
      }
    };
    fetchProjectCount();
  }, []);

  return (
    <div id="journey" className="min-h-screen bg-black py-12 sm:py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-20 relative"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
              Learning Journey
            </span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/70">
            Actively expanding my technical expertise
          </p>

          <div className="flex justify-center gap-4 sm:gap-8 mt-6 sm:mt-8">
            {Object.entries(skillIcons).map(([key, Icon]) => (
              <SkillIcon key={key} Icon={Icon} />
            ))}
          </div>
        </motion.div>

        {/* Achievement Stats - Enhanced Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 sm:mb-12 max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              { label: "", value: "9.0", sublabel: "CGPA", icon: <FaGraduationCap />, gradient: "from-blue-500 to-cyan-500" },
              { label: "", value: "Knight", sublabel: "LeetCode Badge", icon: <SiLeetcode />, gradient: "from-yellow-500 to-orange-500" },
              { label: "", value: projectCount, sublabel: "Projects Built", icon: <FaLaptopCode />, gradient: "from-purple-500 to-pink-500" },
            ].map((stat, idx) => (
              <motion.div
                key={stat.sublabel}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden"
              >
                {/* Gradient glow effect on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${stat.gradient} blur-xl`} />

                <div className="relative z-10 text-center flex flex-col items-center">
                  <div className="text-4xl sm:text-5xl mb-3 group-hover:scale-110 transition-transform duration-300 text-gray-300 group-hover:text-white flex justify-center">{stat.icon}</div>
                  <div className={`text-3xl sm:text-4xl font-black mb-1 text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient}`}>
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-white/90 mb-1">{stat.sublabel}</div>
                  <div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8 sm:mb-12"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
            {[
              { name: "Next.js", icon: <SiNextdotjs className="group-hover:text-white transition-colors" />, color: "hover:bg-black" },
              { name: "React", icon: <SiReact className="group-hover:text-[#61DAFB] transition-colors" />, color: "hover:bg-[#61DAFB]/10 hover:border-[#61DAFB]/30" },
              { name: "TypeScript", icon: <SiTypescript className="group-hover:text-[#3178C6] transition-colors" />, color: "hover:bg-[#3178C6]/10 hover:border-[#3178C6]/30" },
              { name: "Node.js", icon: <SiNodedotjs className="group-hover:text-[#339933] transition-colors" />, color: "hover:bg-[#339933]/10 hover:border-[#339933]/30" },
              { name: "Express", icon: <SiExpress className="group-hover:text-white transition-colors" />, color: "hover:bg-white/10" },
              { name: "MongoDB", icon: <SiMongodb className="group-hover:text-[#47A248] transition-colors" />, color: "hover:bg-[#47A248]/10 hover:border-[#47A248]/30" },
              { name: "Python", icon: <SiPython className="group-hover:text-[#3776AB] transition-colors" />, color: "hover:bg-[#3776AB]/10 hover:border-[#3776AB]/30" },
              { name: "Tailwind", icon: <SiTailwindcss className="group-hover:text-[#06B6D4] transition-colors" />, color: "hover:bg-[#06B6D4]/10 hover:border-[#06B6D4]/30" },
              { name: "Java", icon: <FaJava className="group-hover:text-[#ED8B00] transition-colors" />, color: "hover:bg-[#ED8B00]/10 hover:border-[#ED8B00]/30" },
              { name: "C++", icon: <SiCplusplus className="group-hover:text-[#00599C] transition-colors" />, color: "hover:bg-[#00599C]/10 hover:border-[#00599C]/30" },
              { name: "Docker", icon: <SiDocker className="group-hover:text-[#2496ED] transition-colors" />, color: "hover:bg-[#2496ED]/10 hover:border-[#2496ED]/30" },
              { name: "Postman", icon: <SiPostman className="group-hover:text-[#FF6C37] transition-colors" />, color: "hover:bg-[#FF6C37]/10 hover:border-[#FF6C37]/30" },
              { name: "Git", icon: <SiGit className="group-hover:text-[#F05032] transition-colors" />, color: "hover:bg-[#F05032]/10 hover:border-[#F05032]/30" }
            ].map((tech, idx) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + idx * 0.03 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`group flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 cursor-default ${tech.color}`}
              >
                <span className="text-xl sm:text-2xl text-gray-400 transition-colors duration-300">
                  {tech.icon}
                </span>
                <span className="text-sm sm:text-base font-medium text-gray-300 group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills categories with enhanced animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8 sm:mb-12">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(SkillsSection);