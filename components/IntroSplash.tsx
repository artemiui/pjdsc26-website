"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function IntroSplash() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Exactly 3 seconds total: 2.25s presentation + 0.75s graceful dissolve exit
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2250);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsVisible(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-[#0a0a0b] select-none"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative flex flex-col items-center justify-center"
          >
            {/* Logo */}
            <div className="w-28 h-20 sm:w-36 sm:h-26 flex items-center justify-center">
              <Image
                src="/assets/logos-ver2026/pjdsc 2026/svg/Black Bars_1.svg"
                alt="PJDSC 2026 Logo"
                width={160}
                height={115}
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
              className="absolute inset-0 bg-[#6E9E94]/15 dark:bg-[#E38363]/10 blur-3xl rounded-full pointer-events-none -z-10"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
