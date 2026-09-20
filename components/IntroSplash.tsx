"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface IntroSplashProps {
  onComplete?: () => void;
}

export default function IntroSplash({ onComplete }: IntroSplashProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if user already saw intro during current session
    const hasSeenIntro = sessionStorage.getItem("pjdsc_intro_seen");
    if (hasSeenIntro === "true") {
      setIsVisible(false);
      onComplete?.();
      return;
    }

    // Auto-fade out after 2.0 seconds
    const timer = setTimeout(() => {
      handleDismiss();
    }, 2000);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        handleDismiss();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    try {
      sessionStorage.setItem("pjdsc_intro_seen", "true");
    } catch (e) {}
    setTimeout(() => {
      onComplete?.();
    }, 900);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          onClick={handleDismiss}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white cursor-pointer select-none"
          title="Click to enter"
        >
          {/* Subtle bio-data lattice line */}
          <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />

          {/* Centered Event Logo Only (No text) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex flex-col items-center justify-center p-8 z-10"
          >
            {/* Event Logo: SVG Vector of the PJDSC Data Bars + ECG line */}
            <div className="relative w-36 h-28 sm:w-48 sm:h-36 md:w-56 md:h-40 flex items-center justify-center">
              <Image
                src="/assets/logos-ver2026/pjdsc 2026/svg/Black Bars_1.svg"
                alt="PJDSC 2026 Logo"
                width={240}
                height={170}
                priority
                className="w-full h-full object-contain"
              />

              {/* Heartbeat pulse glow effect on the ECG center */}
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.2, 0.45, 0.2],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-emerald-500/10 blur-xl rounded-full pointer-events-none -z-10"
              />
            </div>
          </motion.div>

          {/* Minimalist skip hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute bottom-8 text-[11px] font-mono tracking-widest text-zinc-400 uppercase pointer-events-none"
          >
            click or press esc to enter
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
