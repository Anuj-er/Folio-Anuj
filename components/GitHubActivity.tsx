'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';

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

const staticRepos: Repository[] = [
    {
        name: 'Folio-Anuj',
        description: 'Personal portfolio website built with Next.js, TypeScript, and Tailwind CSS',
        url: 'https://github.com/anuj-er/Folio-Anuj',
        stars: 5,
        forks: 2,
        language: 'TypeScript'
    },
    {
        name: 'DSA-Practice',
        description: 'Data Structures and Algorithms practice problems and solutions',
        url: 'https://github.com/anuj-er/DSA-Practice',
        stars: 12,
        forks: 4,
        language: 'Java'
    },
    {
        name: 'Web-Dev-Projects',
        description: 'Collection of web development projects and experiments',
        url: 'https://github.com/anuj-er/Web-Dev-Projects',
        stars: 8,
        forks: 3,
        language: 'JavaScript'
    }
];

const GitHubActivity = () => {
    const [contributions, setContributions] = useState<Contribution[]>([]);
    const [repos, setRepos] = useState<Repository[]>(staticRepos);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [username] = useState('anuj-er');

    useEffect(() => {
        const mockContributions = generateMockContributions();
        setContributions(mockContributions);
        setIsLoading(false);

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
                console.error('Error fetching GitHub data:', err);
            }
        };

        if (typeof window !== 'undefined') {
            fetchRealData();
        }
    }, [username]);

    const generateMockContributions = (): Contribution[] => {
        const contributions: Contribution[] = [];
        const today = new Date();

        // Generate 30 days of contributions
        for (let i = 29; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            const count = Math.floor(Math.random() * 10);

            contributions.push({
                date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
                count
            });
        }

        return contributions;
    };

    const getContributionColor = (count: number): string => {
        if (count === 0) return 'bg-gray-800/60';
        if (count <= 2) return 'bg-purple-900/60';
        if (count <= 4) return 'bg-purple-700/70';
        if (count <= 6) return 'bg-purple-500/80';
        return 'bg-purple-400';
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

    return (
        <section className="w-full py-12 sm:py-16 md:py-20 bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#60a5fa] via-[#a78bfa] to-[#60a5fa] bg-clip-text text-transparent">
                        Social & Coding Stats
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto mt-3">
                        Track my coding journey across GitHub, LeetCode, and professional networks
                    </p>
                </motion.div>

                {isLoading ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex justify-center items-center py-20"
                    >
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
                    </motion.div>
                ) : error ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-10 text-red-400"
                    >
                        {error}
                    </motion.div>
                ) : (
                    <>
                        {/* Top Row: LeetCode Stats Only */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-4 max-w-3xl mx-auto"
                        >
                            {/* LeetCode Stats */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                whileHover={{ y: -2 }}
                                className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-white/15 transition-all"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-orange-500 to-yellow-600 flex items-center justify-center">
                                        <span className="text-sm">⚔️</span>
                                    </div>
                                    <h3 className="text-xs font-bold text-white">LeetCode Stats</h3>
                                    <a
                                        href="https://leetcode.com/u/anujer/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[10px] text-orange-400 hover:text-orange-300 ml-auto"
                                    >
                                        Profile →
                                    </a>
                                </div>

                                {/* Full LeetCode Stats Card */}
                                <div className="rounded-lg overflow-hidden bg-black/20">
                                    <img
                                        src="https://leetcard.jacoblin.cool/anujer?theme=dark&font=Ubuntu&ext=contest"
                                        alt="LeetCode Stats"
                                        className="w-full h-auto max-h-[280px] object-contain"
                                        loading="lazy"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* GitHub Activity Grid - 2 Columns: Contribution + Repos */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="grid grid-cols-1 lg:grid-cols-2 gap-4"
                        >
                            {/* Contribution graph - Left */}
                            <motion.div
                                variants={itemVariants}
                                className="bg-black/20 backdrop-blur-xl rounded-lg p-4 border border-white/10 hover:border-white/20 transition-all duration-300"
                            >
                                <div className="flex items-center mb-3">
                                    <div className="w-7 h-7 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500/80 to-blue-500/80 mr-2">
                                        <FaGithub className="text-sm text-white" />
                                    </div>
                                    <h3 className="text-sm font-semibold text-white">Contribution Activity</h3>
                                </div>

                                <div className="grid grid-cols-7 gap-1 p-2">
                                    {contributions.map((contribution, index) => (
                                        <motion.div
                                            key={index}
                                            className="relative group"
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ delay: index * 0.01, duration: 0.3 }}
                                        >
                                            <div
                                                className={`w-full aspect-square rounded-sm ${getContributionColor(contribution.count)} hover:scale-110 transition-all duration-300 shadow-sm border border-white/5`}
                                            ></div>
                                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900/90 backdrop-blur-md text-[10px] text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10 shadow-lg z-20">
                                                <div className="font-medium">{contribution.count} contributions</div>
                                                <div className="text-[9px] text-gray-300">{contribution.date}</div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="mt-3 flex justify-between items-center text-xs text-white/70 bg-white/5 p-2 rounded-lg">
                                    <span>Past 30 Days</span>
                                    <div className="flex items-center">
                                        <span className="mr-1 text-[10px]">Less</span>
                                        <div className="flex space-x-0.5">
                                            <div className="w-3 h-3 rounded-sm bg-gray-800/60 border border-white/5"></div>
                                            <div className="w-3 h-3 rounded-sm bg-purple-900/80 border border-white/5"></div>
                                            <div className="w-3 h-3 rounded-sm bg-purple-700/80 border border-white/5"></div>
                                            <div className="w-3 h-3 rounded-sm bg-purple-500/90 border border-white/5"></div>
                                            <div className="w-3 h-3 rounded-sm bg-purple-300 border border-white/5"></div>
                                        </div>
                                        <span className="ml-1 text-[10px]">More</span>
                                    </div>
                                </div>

                                <a
                                    href={`https://github.com/${username}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-3 inline-flex items-center gap-2 text-xs text-purple-400 hover:text-purple-300 transition-colors group"
                                >
                                    <span>View full GitHub profile</span>
                                    <span className="transform transition-transform group-hover:translate-x-1">→</span>
                                </a>
                            </motion.div>

                            {/* Recent repositories - Right (keeping your improved version) */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                whileHover={{ y: -2 }}
                                className="p-3 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 hover:border-blue-500/30 transition-all"
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                        <FaCodeBranch className="text-sm text-white" />
                                    </div>
                                    <h3 className="text-sm font-bold text-white">Recent Repositories</h3>
                                </div>

                                <div className="space-y-2.5">
                                    {repos.slice(0, 3).map((repo, index) => (
                                        <div
                                            key={index}
                                            className="p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/30 transition-all group"
                                        >
                                            <a
                                                href={repo.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm font-semibold text-blue-400 hover:text-blue-300 line-clamp-1 block group-hover:underline"
                                            >
                                                {repo.name}
                                            </a>
                                            <p className="text-xs text-white/60 mt-1 line-clamp-2">{repo.description}</p>
                                            <div className="flex items-center gap-3 mt-2 text-xs text-white/50">
                                                {repo.language && (
                                                    <span className="flex items-center gap-1">
                                                        <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                                        {repo.language}
                                                    </span>
                                                )}
                                                <span className="flex items-center gap-1">
                                                    <FaStar className="text-yellow-400" /> {repo.stars}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <FaCodeBranch className="text-green-400" /> {repo.forks}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </div>
        </section>
    );
};

export default GitHubActivity;

