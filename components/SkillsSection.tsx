import React, { useState, useEffect } from 'react';
import Globe from "@/components/ui/globe";
import IconCloud from "@/components/ui/icon-cloud";

const slugs = [
  "typescript", "javascript", "python", "cplusplus", "react", "mongodb", "nodejs",
  "html5", "css3", "tailwindcss", "git", "github", "visualstudiocode"
];

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      subtitle: "Currently enhancing my skills in modern web technologies",
      skills: ["React", "HTML5", "TypeScript", "TailwindCSS", "CSS3"],
      progress: 65,
      learning: true
    },
    {
      title: "Backend Development",
      subtitle: "Learning server-side development fundamentals",
      skills: ["Node.js", "MongoDB"],
      progress: 55,
      learning: true
    },
    {
      title: "Programming Languages & Core Concepts",
      subtitle: "Building strong foundations in programming",
      skills: ["C++", "Python"],
      subSkills: ["Operating Systems", "Object-Oriented Programming", "Source Code Management"],
      progress: 60,
      learning: true
    }
  ];

  return (
    <div className="min-h-screen bg-black py-20">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Main Header */}
        <div className="text-center mb-20">
          <h1 className="text-7xl font-bold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
              Learning Journey
            </span>
          </h1>
          <p className="mt-4 text-xl text-white/70">
            Actively expanding my technical expertise
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Globe */}
          <div className="lg:col-span-1">
            <div className="h-[400px] rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Globe className="scale-150" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="text-2xl font-bold text-white mb-2">Growth Mindset</h2>
                <p className="text-white/70">Embracing continuous learning and development</p>
              </div>
            </div>
          </div>

          {/* Middle Column - Skills */}
          <div className="lg:col-span-1 space-y-6">
            {skillCategories.map((category) => (
              <div 
                key={category.title}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  {category.learning && (
                    <span className="px-2 py-0.5 rounded-full text-xs bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      Learning
                    </span>
                  )}
                </div>
                <p className="text-sm text-white/70 mb-4">{category.subtitle}</p>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-sm bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  {category.subSkills && (
                    <div className="flex flex-wrap gap-2">
                      {category.subSkills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full text-sm bg-purple-500/20 text-purple-300 border border-purple-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="relative h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-1000"
                      style={{ width: `${category.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Icon Cloud */}
          <div className="lg:col-span-1">
            <div className="h-[400px] rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <IconCloud iconSlugs={slugs} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="text-2xl font-bold text-white mb-2">Tech Stack</h2>
                <p className="text-white/70">Growing toolkit of technologies</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Learning Stats */}
        <div className="mt-8 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Technologies Learning", value: "10+" },
              { label: "Study Hours/Week", value: "30+" },
              { label: "Projects Building", value: "5+" },
              { label: "Learning Progress", value: "60%" }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  {stat.value}
                </div>
                <div className="text-sm text-white/70 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;