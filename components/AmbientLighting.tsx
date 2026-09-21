"use client";

import React from "react";
import { motion } from "framer-motion";

interface AmbientLightingProps {
  variant?: "hero" | "section" | "footer";
  showBeams?: boolean;
  showNodeWeb?: boolean;
}

export default function AmbientLighting({
  variant = "hero",
  showBeams = true,
  showNodeWeb = true,
}: AmbientLightingProps) {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
      aria-hidden="true"
    >
      {/* 1. Subtle Radial Glow Orbs (Mapped from Brand Colors) */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[480px] bg-gradient-to-b from-[#6E9E94]/15 via-[#234766]/10 to-transparent dark:from-[#88beaf]/15 dark:via-[#7ca5cb]/10 blur-3xl rounded-full" />
      
      <div className="absolute top-1/4 -left-20 w-[420px] h-[420px] bg-[#234766]/8 dark:bg-[#7ca5cb]/10 blur-3xl rounded-full" />
      
      <div className="absolute top-1/3 -right-20 w-[460px] h-[460px] bg-[#E38363]/10 dark:bg-[#ee9577]/12 blur-3xl rounded-full" />

      {/* 2. Vertical Accent Light Beams (Inspired by Sentinels & Edufy References) */}
      {showBeams && (
        <div className="absolute inset-0 flex justify-between px-2 sm:px-8 opacity-45 dark:opacity-30">
          {/* Left Vertical Beam Group */}
          <div className="flex items-end gap-2 sm:gap-4 h-full w-1/3 max-w-[280px]">
            <motion.div
              className="w-4 sm:w-7 rounded-t-xl bg-gradient-to-t from-[#234766]/20 via-[#6E9E94]/15 to-transparent h-[65%]"
              animate={{ height: ["62%", "68%", "62%"] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="w-4 sm:w-7 rounded-t-xl bg-gradient-to-t from-[#6E9E94]/25 via-[#234766]/10 to-transparent h-[82%]"
              animate={{ height: ["78%", "86%", "78%"] }}
              transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            <motion.div
              className="hidden sm:block w-7 rounded-t-xl bg-gradient-to-t from-[#234766]/15 via-[#E38363]/10 to-transparent h-[50%]"
              animate={{ height: ["48%", "54%", "48%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.div
              className="hidden md:block w-7 rounded-t-xl bg-gradient-to-t from-[#6E9E94]/20 via-transparent to-transparent h-[72%]"
              animate={{ height: ["70%", "76%", "70%"] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            />
          </div>

          {/* Right Vertical Beam Group */}
          <div className="flex items-end justify-end gap-2 sm:gap-4 h-full w-1/3 max-w-[280px]">
            <motion.div
              className="hidden md:block w-7 rounded-t-xl bg-gradient-to-t from-[#234766]/20 via-[#6E9E94]/10 to-transparent h-[70%]"
              animate={{ height: ["67%", "74%", "67%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            />
            <motion.div
              className="hidden sm:block w-7 rounded-t-xl bg-gradient-to-t from-[#E38363]/20 via-[#234766]/15 to-transparent h-[55%]"
              animate={{ height: ["52%", "60%", "52%"] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            />
            <motion.div
              className="w-4 sm:w-7 rounded-t-xl bg-gradient-to-t from-[#6E9E94]/25 via-[#234766]/15 to-transparent h-[85%]"
              animate={{ height: ["81%", "89%", "81%"] }}
              transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            />
            <motion.div
              className="w-4 sm:w-7 rounded-t-xl bg-gradient-to-t from-[#234766]/25 via-[#6E9E94]/10 to-transparent h-[60%]"
              animate={{ height: ["58%", "65%", "58%"] }}
              transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      )}

      {/* 3. Node Web Constellation Graphic (Inspired by ZkCloud & Scribe references) */}
      {showNodeWeb && variant === "hero" && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-full max-w-[900px] h-[360px] opacity-35 dark:opacity-25 pointer-events-none">
          <svg
            viewBox="0 0 900 360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            {/* Elliptical Orbit Paths */}
            <ellipse
              cx="450"
              cy="180"
              rx="380"
              ry="110"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4 4"
              className="text-[#234766]/30 dark:text-[#7ca5cb]/30"
            />
            <ellipse
              cx="450"
              cy="180"
              rx="260"
              ry="75"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="2 3"
              className="text-[#6E9E94]/40 dark:text-[#88beaf]/40"
            />
            <ellipse
              cx="450"
              cy="180"
              rx="140"
              ry="45"
              stroke="currentColor"
              strokeWidth="1"
              className="text-[#E38363]/30 dark:text-[#ee9577]/30"
            />

            {/* Connecting Geometric Lines */}
            <line x1="120" y1="170" x2="310" y2="125" stroke="currentColor" strokeWidth="1" className="text-[#234766]/25 dark:text-[#7ca5cb]/25" />
            <line x1="310" y1="125" x2="450" y2="180" stroke="currentColor" strokeWidth="1" className="text-[#6E9E94]/30 dark:text-[#88beaf]/30" />
            <line x1="450" y1="180" x2="590" y2="135" stroke="currentColor" strokeWidth="1" className="text-[#6E9E94]/30 dark:text-[#88beaf]/30" />
            <line x1="590" y1="135" x2="780" y2="190" stroke="currentColor" strokeWidth="1" className="text-[#234766]/25 dark:text-[#7ca5cb]/25" />
            <line x1="220" y1="215" x2="450" y2="180" stroke="currentColor" strokeWidth="1" className="text-[#E38363]/25 dark:text-[#ee9577]/25" />
            <line x1="450" y1="180" x2="680" y2="225" stroke="currentColor" strokeWidth="1" className="text-[#E38363]/25 dark:text-[#ee9577]/25" />

            {/* Orbiting Constellation Nodes */}
            <circle cx="120" cy="170" r="4" fill="#234766" className="dark:fill-[#7ca5cb]" />
            <circle cx="220" cy="215" r="3" fill="#6E9E94" className="dark:fill-[#88beaf]" />
            <circle cx="310" cy="125" r="5" fill="#234766" className="dark:fill-[#7ca5cb]" />
            <circle cx="380" cy="230" r="3.5" fill="#E38363" className="dark:fill-[#ee9577]" />
            
            {/* Center Core Node */}
            <circle cx="450" cy="180" r="8" fill="#234766" fillOpacity="0.15" />
            <circle cx="450" cy="180" r="4" fill="#234766" className="dark:fill-[#7ca5cb]" />

            <circle cx="520" cy="130" r="3.5" fill="#6E9E94" className="dark:fill-[#88beaf]" />
            <circle cx="590" cy="135" r="5" fill="#234766" className="dark:fill-[#7ca5cb]" />
            <circle cx="680" cy="225" r="3" fill="#E38363" className="dark:fill-[#ee9577]" />
            <circle cx="780" cy="190" r="4" fill="#234766" className="dark:fill-[#7ca5cb]" />
          </svg>
        </div>
      )}
    </div>
  );
}
