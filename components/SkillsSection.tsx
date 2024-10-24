import React, { useState, useEffect } from 'react';
import Globe from "@/components/ui/globe";
import IconCloud from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const SkillsSection = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const handleIncrement = () => {
      setValue(prev => prev === 100 ? 0 : prev + 10);
    };
    const interval = setInterval(handleIncrement, 2000);
    return () => clearInterval(interval);
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "TypeScript", "TailwindCSS"],
      progress: 90
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express", "Prisma", "PostgreSQL"],
      progress: 85
    }
  ];

  const metrics = [
    { title: "Problem Solving", value: 95 },
    { title: "Code Quality", value: 90 },
    { title: "Team Collaboration", value: 85 },
    { title: "Learning Speed", value: 88 }
  ];

  return (
    <div className="relative min-h-screen w-full py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
            Skills & Expertise
          </h2>
          <p className="text-xl text-white/70">
            A comprehensive overview of my technical capabilities
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            {skillCategories.map((category, idx) => (
              <div key={category.title} 
                   className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/70
                          hover:bg-white/20 hover:text-white transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="relative h-2 w-full rounded-full bg-white/10">
                    <div
                      className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-1000"
                      style={{ width: `${category.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <div className="relative flex h-64 items-center justify-center rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden">
              <Globe className="absolute top-28" />
              <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
            </div>

            <div className="relative flex h-64 items-center justify-center rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden">
              <IconCloud iconSlugs={slugs} />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric) => (
                <div
                  key={metric.title}
                  className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <div className="flex flex-col items-center">
                    <div className="relative w-20 h-20">
                      <svg viewBox="0 0 36 36" className="w-full h-full">
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="rgba(255, 255, 255, 0.1)"
                          strokeWidth="3"
                        />
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="url(#gradient)"
                          strokeWidth="3"
                          strokeDasharray={`${metric.value}, 100`}
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#60A5FA" />
                            <stop offset="100%" stopColor="#A78BFA" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-lg text-white">
                        {metric.value}%
                      </div>
                    </div>
                    <h4 className="mt-2 text-white/70 text-sm">{metric.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;