"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface CursorProps {
  color?: string;
  size?: number;
  ringSize?: number;
  delay?: number;
}

export function SmoothCursor({
  color = "#a78bfa",
  size = 8,
  ringSize = 30,
  delay = 0.05,
}: CursorProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Don't show cursor initially
    setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - size / 2);
      cursorY.set(e.clientY - size / 2);
    };

    const handlePointerOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("clickable") ||
        target.hasAttribute("role") && target.getAttribute("role") === "button" ||
        typeof target.onclick === "function" ||
        getComputedStyle(target).cursor === "pointer";

      setIsPointer(!!isClickable);
    };

    const handlePointerLeave = () => {
      cursorX.set(-100);
      cursorY.set(-100);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handlePointerOver);
    window.addEventListener("mouseout", handlePointerLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handlePointerOver);
      window.removeEventListener("mouseout", handlePointerLeave);
    };
  }, [cursorX, cursorY, size]);

  return (
    <>
      {isVisible && (
        <>
          {/* Main cursor - triangle shape */}
          <motion.div
            className="pointer-events-none fixed left-0 top-0 z-[999999] hidden md:block"
            style={{
              x: cursorXSpring,
              y: cursorYSpring,
              width: isPointer ? size * 1.5 : size,
              height: isPointer ? size * 1.5 : size,
              backgroundColor: color,
              opacity: 0.8,
              transform: `rotate(45deg) scale(${isPointer ? 1.2 : 1})`,
              transition: "width 0.2s, height 0.2s, transform 0.3s",
              boxShadow: `0 0 10px ${color}`,
            }}
          />
          
          {/* Outer ring - gradient border */}
          <motion.div
            className="pointer-events-none fixed left-0 top-0 z-[999998] hidden md:block"
            style={{
              x: cursorXSpring,
              y: cursorYSpring,
              width: isPointer ? ringSize * 0.6 : ringSize,
              height: isPointer ? ringSize * 0.6 : ringSize,
              borderRadius: "4px",
              background: "transparent",
              border: `1px solid ${color}`,
              opacity: isPointer ? 0.6 : 0.3,
              transition: "width 0.3s, height 0.3s, opacity 0.3s",
              transform: "translate(-50%, -50%)",
              filter: "blur(1px)",
            }}
          />
          
          {/* Trailing dot */}
          <motion.div
            className="pointer-events-none fixed left-0 top-0 z-[999997] hidden md:block"
            style={{
              x: cursorX,
              y: cursorY,
              width: size / 2,
              height: size / 2,
              borderRadius: "50%",
              backgroundColor: color,
              opacity: 0.5,
              transition: "width 0.2s, height 0.2s",
              boxShadow: `0 0 5px ${color}`,
            }}
          />
        </>
      )}
    </>
  );
} 