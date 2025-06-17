'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const greetings = [
  { text: 'नमस्ते', language: 'Hindi' },
  { text: 'Hello!', language: 'English' },
  { text: 'Hola', language: 'Spanish' },
  { text: 'Ciao', language: 'Italian' },
  { text: 'Bonjour', language: 'French' },
  { text: '안녕하세요', language: 'Korean' },
  { text: 'مرحبا', language: 'Arabic' },
  { text: 'Hallo', language: 'German' },
  { text: 'નમસ્તે', language: 'Gujarati' },
  { text: 'আদাব', language: 'Bengali' },
  { text: 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ', language: 'Punjabi' },
  { text: 'राम राम', language: 'Haryanvi' },
];

// Custom event for greeting animation completion
export const GREETING_COMPLETE_EVENT = "greetingAnimationComplete";
// Animation exit duration in milliseconds (must match the exit animation duration)
export const EXIT_ANIMATION_DURATION = 1200; // Adding extra buffer to be safe

const AnimatedGreetings: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [exitAnimationStarted, setExitAnimationStarted] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Effect for greeting text cycle
  useEffect(() => {
    if (currentIndex < greetings.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, getDuration(currentIndex));

      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
      setExitAnimationStarted(true);
    }
  }, [currentIndex]);

  // Separate effect to handle exit animation completion
  useEffect(() => {
    if (exitAnimationStarted) {
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      // Wait for exit animation to complete before dispatching event
      timeoutRef.current = setTimeout(() => {
        // When animation fully completes (including exit animation), 
        // dispatch a custom event and store in localStorage
        console.log("Exit animation completed, dispatching event");
        localStorage.setItem('greetingAnimationComplete', 'true');
        
        // Dispatch custom event to notify other components
        const event = new Event(GREETING_COMPLETE_EVENT);
        window.dispatchEvent(event);
      }, EXIT_ANIMATION_DURATION);
      
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }
  }, [exitAnimationStarted]);

  const getDuration = (index: number): number => {
    if (index < greetings.length - 1 && index !== 0) {
      return 200;
    } else {
      return 1000;
    }
  };

  return (
    <AnimatePresence
      onExitComplete={() => {
        console.log("AnimatePresence onExitComplete triggered");
        // Only dispatch if exitAnimationStarted is true to avoid duplicate events
        if (exitAnimationStarted) {
          localStorage.setItem('greetingAnimationComplete', 'true');
          const event = new Event(GREETING_COMPLETE_EVENT);
          window.dispatchEvent(event);
        }
      }}
    >
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-40 bg-[#f0f0f0] text-[#000]"
          initial={{ y: 0, borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
          exit={{
            y: '-100%',
            borderBottomLeftRadius: '100%',
            borderBottomRightRadius: '100%',
          }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <div className="flex h-screen items-center justify-center">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
            >
              {greetings[currentIndex]?.text || ''}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimatedGreetings;
