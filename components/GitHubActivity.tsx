'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCode, FaStar, FaCodeBranch } from 'react-icons/fa';

interface Contribution {
  date: string;
  count: number;
}

interface Repository {
  name: string;
  description: string;
  url: string;
  stars: number;
  forks: number;
  language: string;
}

// Static repository data to avoid API calls during build
const staticRepos: Repository[] = [
  {
    name: "Folio-Anuj",
    description: "A Next.js-based portfolio showcasing my skills, projects, and experiences with interactive features.",
    url: "https://github.com/Anuj-er/Folio-Anuj",
    stars: 2,
    forks: 0,
    language: "TypeScript"
  },
  {
    name: "cargo-tracker-webapp",
    description: "A React application for cargo shipment tracking featuring interactive maps, comprehensive dashboard, and Docker support.",
    url: "https://github.com/Anuj-er/cargo-tracker-webapp",
    stars: 1,
    forks: 0,
    language: "JavaScript"
  },
  {
    name: "autostash-linux",
    description: "A secure, GUI-based Linux backup system with encryption, incremental backups, GitHub integration, and real-time system monitoring.",
    url: "https://github.com/Anuj-er/autostash-linux",
    stars: 1,
    forks: 0,
    language: "Python"
  },
  {
    name: "RaitaLeaks",
    description: "A secure social media platform for information sharing with real-time notifications, user authentication, and media support.",
    url: "https://github.com/Anuj-er/RaitaLeaks",
    stars: 1,
    forks: 0,
    language: "JavaScript"
  },
  {
    name: "PharmacyManagementSystem-Java-DSA",
    description: "A comprehensive Java application for pharmacy management with inventory control, customer management, and sales processing using custom data structures.",
    url: "https://github.com/Anuj-er/PharmacyManagementSystem-Java-DSA",
    stars: 0,
    forks: 0,
    language: "Java"
  }
];

const GitHubActivity = () => {
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [repos, setRepos] = useState<Repository[]>(staticRepos);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [username] = useState('anuj-er'); // Your GitHub username

  useEffect(() => {
    // Only generate mock contributions on client-side
    const mockContributions = generateMockContributions();
    setContributions(mockContributions);
    setIsLoading(false);
    
    // Optional: Try to fetch real data if we're on the client side
    const fetchRealData = async () => {
      try {
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=5`);
        
        if (reposResponse.ok) {
          const reposData = await reposResponse.json();
          
          const formattedRepos: Repository[] = reposData.map((repo: any) => ({
            name: repo.name,
            description: repo.description || 'No description available',
            url: repo.html_url,
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            language: repo.language || 'Not specified'
          }));
          
          setRepos(formattedRepos);
        }
      } catch (err) {
        // Silently fail - we'll use the static data
        console.error('Error fetching GitHub data:', err);
      }
    };
    
    // Only run in browser environment
    if (typeof window !== 'undefined') {
      fetchRealData();
    }
  }, [username]);

  // Generate mock contribution data for visualization
  const generateMockContributions = (): Contribution[] => {
    const contributions: Contribution[] = [];
    const now = new Date();
    
    for (let i = 30; i >= 0; i--) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      
      // Random count between 0-10 for demonstration
      const count = Math.floor(Math.random() * 11);
      
      contributions.push({
        date: date.toISOString().split('T')[0],
        count
      });
    }
    
    return contributions;
  };

  const getContributionColor = (count: number): string => {
    if (count === 0) return 'bg-gray-800/60';
    if (count < 3) return 'bg-purple-900/80';
    if (count < 6) return 'bg-purple-700/80';
    if (count < 9) return 'bg-purple-500/90';
    return 'bg-purple-300';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const repoVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <section id="github-activity" className="w-full min-h-screen flex items-center justify-center p-4 overflow-hidden relative">
      {/* Background gradient elements */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-700/20 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-700/20 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#60a5fa] via-[#a78bfa] to-[#60a5fa] bg-clip-text text-transparent">
            What's Happening in My World
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            A glimpse into my open-source journey and recent GitHub contributions
          </p>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center items-center h-60">
            <div className="relative w-16 h-16">
              <div className="absolute top-0 left-0 w-full h-full border-4 border-purple-300/20 rounded-full animate-ping"></div>
              <div className="absolute top-0 left-0 w-full h-full border-4 border-t-purple-500 rounded-full animate-spin"></div>
            </div>
          </div>
        ) : error ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-400 text-center p-8 bg-red-900/10 backdrop-blur-sm rounded-xl border border-red-500/20"
          >
            {error}
          </motion.div>
        ) : (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Contribution graph */}
            <motion.div 
              variants={itemVariants}
              className="bg-black/20 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-[0_0_25px_rgba(168,85,247,0.15)] hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] transition-all duration-500"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500/80 to-blue-500/80 mr-3">
                  <FaGithub className="text-xl text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Contribution Activity</h3>
              </div>
              
              <div className="grid grid-cols-7 gap-1.5 p-2">
                {contributions.map((contribution, index) => (
                  <motion.div 
                    key={index} 
                    className="relative group"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.01, duration: 0.3 }}
                  >
                    <div 
                      className={`w-full aspect-square rounded-md ${getContributionColor(contribution.count)} hover:scale-110 transition-all duration-300 shadow-sm border border-white/5`}
                    ></div>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900/90 backdrop-blur-md text-xs text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10 shadow-lg z-20">
                      <div className="font-medium">{contribution.count} contributions</div>
                      <div className="text-gray-300">{contribution.date}</div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900/90 border-r border-b border-white/10"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-6 flex justify-between items-center text-sm text-white/70 bg-white/5 p-3 rounded-lg">
                <span>Past 30 Days</span>
                <div className="flex items-center">
                  <span className="mr-2 text-xs">Less</span>
                  <div className="flex space-x-1">
                    <div className="w-4 h-4 rounded-sm bg-gray-800/60 border border-white/5"></div>
                    <div className="w-4 h-4 rounded-sm bg-purple-900/80 border border-white/5"></div>
                    <div className="w-4 h-4 rounded-sm bg-purple-700/80 border border-white/5"></div>
                    <div className="w-4 h-4 rounded-sm bg-purple-500/90 border border-white/5"></div>
                    <div className="w-4 h-4 rounded-sm bg-purple-300 border border-white/5"></div>
                  </div>
                  <span className="ml-2 text-xs">More</span>
                </div>
              </div>
              
              <a 
                href={`https://github.com/${username}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors group"
              >
                <span>View full GitHub profile</span>
                <span className="transform transition-transform group-hover:translate-x-1">→</span>
              </a>
            </motion.div>
            
            {/* Recent repositories */}
            <motion.div 
              variants={itemVariants}
              className="bg-black/20 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-[0_0_25px_rgba(96,165,250,0.15)] hover:shadow-[0_0_30px_rgba(96,165,250,0.25)] transition-all duration-500"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500/80 to-purple-500/80 mr-3">
                  <FaCodeBranch className="text-xl text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">Recent Repositories</h3>
              </div>
              
              <div className="space-y-4">
                {repos.map((repo, index) => (
                  <motion.div 
                    key={index}
                    custom={index}
                    variants={repoVariants}
                    className="p-5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300 border border-white/10 transform hover:-translate-y-1 hover:shadow-lg transition-all"
                  >
                    <h4 className="font-medium text-white text-lg flex items-center">
                      <a 
                        href={repo.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition-colors flex-1"
                      >
                        {repo.name}
                      </a>
                      <FaGithub className="text-white/50" />
                    </h4>
                    <p className="text-sm text-white/70 mt-2 mb-3 line-clamp-2">{repo.description}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-white/70">
                      {repo.language && (
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                          <span>{repo.language}</span>
                        </div>
                      )}
                      <div className="flex items-center">
                        <FaStar className="mr-1.5 text-yellow-500" />
                        <span>{repo.stars}</span>
                      </div>
                      <div className="flex items-center">
                        <FaCodeBranch className="mr-1.5 text-green-500" />
                        <span>{repo.forks}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default GitHubActivity; 