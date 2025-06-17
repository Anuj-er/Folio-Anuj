'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { GREETING_COMPLETE_EVENT } from '../Hello';

export const ContactButton = ({ className }: { className?: string }) => {
  const [visible, setVisible] = useState(false);
  const [greetingComplete, setGreetingComplete] = useState(false);
  const listenerInitialized = useRef(false);

  useEffect(() => {
    // Only run this once
    if (!listenerInitialized.current) {
      listenerInitialized.current = true;

      // Initial check with a small delay to ensure DOM is fully loaded
      setTimeout(() => {
        const isGreetingComplete = localStorage.getItem('greetingAnimationComplete') === 'true';
        if (isGreetingComplete) {
          console.log("Greeting already completed in previous session");
          setGreetingComplete(true);
          setVisible(true);
        } else {
          console.log("Waiting for greeting animation to complete...");
        }
      }, 200);

      // Listen for the greeting animation complete event
      const handleGreetingComplete = () => {
        console.log("Greeting animation complete event received!");
        setGreetingComplete(true);
        setVisible(true);
      };

      // Attach event listener
      window.addEventListener(GREETING_COMPLETE_EVENT, handleGreetingComplete);
      
      // Add scroll listener to hide the button after scrolling down too far
      const handleScroll = () => {
        // Only handle scroll events if greeting is complete
        if (greetingComplete) {
          // Show button after greeting animation, but hide after scrolling down a lot
          if (window.scrollY > 2500) {
            setVisible(false);
          } else {
            setVisible(true);
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      
      // Clean up
      return () => {
        window.removeEventListener(GREETING_COMPLETE_EVENT, handleGreetingComplete);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []); // Empty dependency array to ensure this only runs once

  // Separate effect for handling scroll based on greetingComplete state
  useEffect(() => {
    if (greetingComplete) {
      const handleScroll = () => {
        if (window.scrollY > 2500) {
          setVisible(false);
        } else {
          setVisible(true);
        }
      };
      
      // Check initial scroll position
      handleScroll();
      
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [greetingComplete]);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Link 
      href="/#contact" 
      scroll={false}
      onClick={handleContactClick}
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full border-2 border-[#a78bfa] bg-black/50 backdrop-blur-sm text-center font-semibold inline-flex items-center shadow-lg hover:shadow-[#a78bfa]/30 transition-all duration-300 hover:scale-105 hover:bg-white",
        className,
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 lg:-translate-y-10 pointer-events-none'
      )}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-[#60a5fa]/5 via-[#a78bfa]/5 to-[#60a5fa]/5" />
      </div>
      
      <div className="flex items-center gap-1.5 sm:gap-2 relative z-10">
        <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] transition-all duration-300 group-hover:scale-[100.8]"></div>
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 text-white text-xs sm:text-sm">
          Contact Me
        </span>
      </div>
      
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-1.5 sm:gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span className="text-black font-medium text-xs sm:text-sm">Contact Me</span>
        <ArrowRightIcon className="h-3 w-3 sm:h-4 sm:w-4 text-black" />
      </div>
    </Link>
  );
}; 