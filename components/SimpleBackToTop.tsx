"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function SimpleBackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls down 800px
      if (window.scrollY > 800) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    
    // Clean up the event listener
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a 
      href="#" 
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
      className={`
        fixed bottom-4 right-4 sm:right-6 z-[9999] 
        p-2 sm:p-3 flex items-center justify-center 
        rounded-md bg-gradient-to-br from-purple-600 to-blue-500 
        text-white shadow-lg hover:shadow-xl 
        border border-white/20 hover:scale-110 
        transition-all duration-300
        ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'}
      `}
      style={{
        boxShadow: "0 0 20px rgba(168, 85, 247, 0.5)" 
      }}
      aria-label="Back to top"
    >
      <ArrowUp className="h-4 w-4 sm:h-6 sm:w-6 stroke-[2.5]" />
    </a>
  );
} 