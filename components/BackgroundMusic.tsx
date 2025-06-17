"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

interface BackgroundMusicProps {
  audioSrc: string;
  initialVolume?: number;
}

export function BackgroundMusic({
  audioSrc,
  initialVolume = 0.5,
}: BackgroundMusicProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio(audioSrc);
    audioRef.current.volume = initialVolume;
    audioRef.current.loop = true;

    // Clean up on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [audioSrc, initialVolume]);

  useEffect(() => {
    // Only control audio if user has interacted
    if (!hasInteracted || !audioRef.current) return;

    if (isPlaying) {
      const playPromise = audioRef.current.play();
      // Handle the play promise to avoid errors
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error("Audio play failed:", error);
          setIsPlaying(false);
        });
      }
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, hasInteracted]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    setHasInteracted(true);
  };

  return (
    <motion.button
      onClick={togglePlay}
      className="fixed bottom-4 left-4 sm:left-6 z-[9999] p-2 sm:p-3 rounded-md bg-gradient-to-br from-purple-600 to-blue-500 text-white shadow-lg hover:shadow-xl border border-white/20 hover:scale-110 transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isPlaying ? "Pause background music" : "Play background music"}
      title={isPlaying ? "Pause background music" : "Play background music"}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={isPlaying ? "playing" : "paused"}
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
          transition={{ duration: 0.2 }}
        >
          {isPlaying ? (
            <Volume2 className="h-4 w-4 sm:h-5 sm:w-5" />
          ) : (
            <VolumeX className="h-4 w-4 sm:h-5 sm:w-5" />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
} 