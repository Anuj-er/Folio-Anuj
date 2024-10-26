import React from 'react';
import Globe from "@/components/ui/globe";
import IconCloud from "@/components/ui/icon-cloud";

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

  const slugs = [
    "typescript", "javascript", "python", "cplusplus", "react", "mongodb", "nodejs",
    "html5", "css3", "tailwindcss", "git", "github", "visualstudiocode"
  ];

  return (
    <div id="journey" className="min-h-screen bg-black py-12 sm:py-20">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-20 relative">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
              Learning Journey
            </span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/70">
            Actively expanding my technical expertise
          </p>
          
          <div className="flex justify-center gap-4 sm:gap-8 mt-6 sm:mt-8">
            <div className="text-white/70 hover:text-white transition-colors">
              <skillIcons.frontend />
            </div>
            <div className="text-white/70 hover:text-white transition-colors">
              <skillIcons.backend />
            </div>
            <div className="text-white/70 hover:text-white transition-colors">
              <skillIcons.programming />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-1">
            <div className="h-[300px] sm:h-[400px] rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Globe className="scale-125 sm:scale-150" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Growth Mindset</h2>
                <p className="text-sm sm:text-base text-white/70">Embracing continuous learning and development</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-4 sm:space-y-6">
            {skillCategories.map((category) => (
              <div 
                key={category.title}
                className="p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">{category.title}</h3>
                  {category.learning && (
                    <span className="px-2 py-0.5 rounded-full text-xs bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      Learning
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-white/70 mb-4">{category.subtitle}</p>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all"
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
                          className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-purple-500/20 text-purple-300 border border-purple-500/30"
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

          <div className="lg:col-span-1">
            <div className="h-[300px] sm:h-[400px] rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <IconCloud iconSlugs={slugs} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Tech Stack</h2>
                <p className="text-sm sm:text-base text-white/70">Growing toolkit of technologies</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { label: "Technologies Learning", value: "10+" },
              { label: "Study Hours/Week", value: "30+" },
              { label: "Projects Building", value: "5+" },
              { label: "Learning Progress", value: "60%" }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/70 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;