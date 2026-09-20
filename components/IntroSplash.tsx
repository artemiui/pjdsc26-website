"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function IntroSplash() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("pjdsc_intro_seen");
    if (hasSeenIntro === "true") {
      setIsVisible(false);
      return;
    }

    const timer = setTimeout(() => {
      handleDismiss();
    }, 2200);

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
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          onClick={handleDismiss}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-[#0a0a0b] cursor-pointer select-none"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative flex flex-col items-center justify-center">
            {/* Logo */}
            <div className="w-40 h-32 sm:w-52 sm:h-40 flex items-center justify-center">
              <Image
                src="/assets/logos-ver2026/pjdsc 2026/svg/Black Bars_1.svg"
                alt="PJDSC 2026 Logo"
                width={240}
                height={170}
                priority
                className="w-full h-full object-contain dark:invert"
              />
            </div>

            {/* Subtle pulse glow */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.15, 0.35, 0.15],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-brand-teal/15 dark:bg-brand-coral/10 blur-3xl rounded-full pointer-events-none -z-10"
            />
          </motion.div>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="absolute bottom-8 text-[11px] font-medium tracking-widest text-[#234766] dark:text-[#88beaf] uppercase pointer-events-none"
          >
            click to enter
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
