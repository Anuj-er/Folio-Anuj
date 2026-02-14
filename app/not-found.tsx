'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHome, FaGhost } from 'react-icons/fa';

export default function NotFound() {
    return (
        <div className="relative min-h-screen w-full bg-black flex items-center justify-center overflow-hidden p-4">
            {/* Background Orbs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px] animate-pulse delay-700" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-20" />

            <div className="relative z-10 flex flex-col items-center text-center">
                {/* Animated Ghost */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="mb-8"
                >
                    <FaGhost className="text-7xl sm:text-8xl md:text-9xl text-white/20" />
                </motion.div>

                {/* Glitchy 404 */}
                <div className="relative mb-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-8xl sm:text-9xl font-black tracking-tighter text-white"
                    >
                        404
                    </motion.h1>
                    <motion.div
                        animate={{
                            x: [-2, 2, -1, 1, 0],
                            opacity: [0.5, 0.8, 0.5, 0.8, 0],
                        }}
                        transition={{
                            duration: 0.2,
                            repeat: Infinity,
                            repeatDelay: 3,
                        }}
                        className="absolute inset-0 text-8xl sm:text-9xl font-black tracking-tighter text-blue-500/50 translate-x-1"
                    >
                        404
                    </motion.div>
                    <motion.div
                        animate={{
                            x: [2, -2, 1, -1, 0],
                            opacity: [0.5, 0.8, 0.5, 0.8, 0],
                        }}
                        transition={{
                            duration: 0.2,
                            repeat: Infinity,
                            repeatDelay: 3,
                        }}
                        className="absolute inset-0 text-8xl sm:text-9xl font-black tracking-tighter text-purple-500/50 -translate-x-1"
                    >
                        404
                    </motion.div>
                </div>

                {/* Funny Message */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-4 max-w-lg"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Page Not Found
                    </h2>
                    <p className="text-lg text-white/60 font-medium">
                        &quot;Whoops! This page vanished faster than my social life during finals week.&quot;
                        <br />
                        <span className="text-sm font-normal italic opacity-70">
                            Either this link is broken, or you just found a secret level that doesn&apos;t exist yet.
                        </span>
                    </p>
                </motion.div>

                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-12"
                >
                    <Link
                        href="/"
                        className="group relative flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-transparent hover:text-white border-2 border-white transition-all duration-300"
                    >
                        <FaHome className="group-hover:-translate-y-1 transition-transform" />
                        Go Back Home
                    </Link>
                </motion.div>

                {/* Playful Footer */}
                <p className="mt-12 text-xs text-white/30 tracking-widest uppercase">
                    Lost? Don&apos;t worry, we&apos;ve all been there.
                </p>
            </div>

            {/* Floating Particles */}
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white/20 rounded-full"
                    animate={{
                        y: [Math.random() * 1000, -100],
                        x: [Math.random() * 1000, Math.random() * 1000],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                />
            ))}
        </div>
    );
}
