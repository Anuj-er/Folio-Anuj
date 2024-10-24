'use client';

import React, { useState, useEffect } from 'react';
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
  { text: 'राम राम', language: 'Haryanvi' },
  { text: 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ', language: 'Punjabi' },
];

const AnimatedGreetings: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < greetings.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, getDuration(currentIndex));

      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex]);

  const getDuration = (index: number): number => {
    if (index < greetings.length - 1 && index !== 0) {
      return 200;
    } else {
      return 1000;
    }
  };

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-20 bg-[#f0f0f0] text-[#000]"
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
              className="text-8xl"
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
