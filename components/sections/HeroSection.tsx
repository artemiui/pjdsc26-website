"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Clock, Github, Database, GitBranch, Trophy, FolderGit2, Code2, Facebook, Bell, Megaphone } from "lucide-react";
import { siteData } from "@/lib/siteData";
import { useRegistration } from "@/lib/registrationContext";
import DitheredPlantBackground from "@/components/DitheredPlantBackground";

export default function HeroSection() {
  const { openRegister } = useRegistration();

  // Countdown timer to Early Registration (Sept 21, 2026 5:00 PM PST / UTC+8)
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 1,
    hours: 1,
    minutes: 36,
    seconds: 0,
  });

  useEffect(() => {
    // Sept 21, 2026 17:00:00 GMT+0800
    const targetDate = new Date("2026-09-21T17:00:00+08:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-grid-pattern">
      {/* Top Triple Color Accent Stripe (Navy / Teal / Coral) */}
      <div className="h-1.5 w-full flex relative z-10">
        <div className="flex-1 bg-[#234766]" />
        <div className="w-24 sm:w-48 bg-[#6E9E94]" />
        <div className="w-16 sm:w-32 bg-[#E38363]" />
      </div>

      {/* Animated Botanical Dithered Plant Background */}
      <DitheredPlantBackground />

      {/* Main Centered Hero Container */}
      <div className="relative z-10 max-w-[1150px] mx-auto px-5 sm:px-8 pt-6 sm:pt-8 lg:pt-10">
        <div className="max-w-[900px] mx-auto text-center">
          
          {/* Brand Logos: PJDSC & UP DSSoc */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-4 sm:gap-5 mb-8 sm:mb-10"
          >
            {/* PJDSC Logo */}
            <div className="w-10 h-8 sm:w-12 sm:h-9 flex items-center justify-center">
              <Image
                src="/assets/logos-ver2026/pjdsc 2026/svg/Black Bars_1.svg"
                alt="PJDSC 2026 Logo"
                width={48}
                height={34}
                priority
                className="w-full h-auto object-contain dark:invert"
              />
            </div>

            {/* Subtle Divider */}
            <div className="h-5 sm:h-6 w-px bg-zinc-300 dark:bg-zinc-700" aria-hidden="true" />

            {/* UP DSSoc Logo */}
            <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center">
              <Image
                src="/assets/logos-ver2026/up dssoc/updssoclogoicon.png"
                alt="UP Data Science Society Logo"
                width={36}
                height={36}
                priority
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          {/* Large Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.55 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-sans font-extrabold tracking-tight text-center leading-[1.08]"
          >
            <span className="inline-block bg-gradient-to-b from-[#60ab99] via-[#408374] to-[#245c50] dark:from-[#88beaf] dark:via-[#6E9E94] dark:to-[#38665c] bg-clip-text text-transparent pb-1">
              Philippine Junior
            </span>{" "}
            <br className="hidden sm:inline" />
            <span className="inline-block bg-gradient-to-b from-[#60ab99] via-[#408374] to-[#245c50] dark:from-[#88beaf] dark:via-[#6E9E94] dark:to-[#38665c] bg-clip-text text-transparent pb-1">
              Data Science Challenge
            </span>
          </motion.h1>

          {/* Subheading & Theme Statement */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="mt-6 sm:mt-8 max-w-[720px] mx-auto text-center"
          >
            <p className="text-lg sm:text-2xl font-semibold text-[#234766] dark:text-[#E38363] leading-snug">
              Trace the Pattern, Target the Cure: Advancing Public Health with Data Science
            </p>
          </motion.div>

          {/* Centered CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3.5 mt-9 sm:mt-10"
          >
            <button
              onClick={openRegister}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#234766] dark:bg-[#E38363] text-white dark:text-zinc-950 text-sm font-bold rounded-xl hover:opacity-90 transition-all hover:shadow-lg hover:shadow-[#234766]/20 dark:hover:shadow-[#E38363]/20 cursor-pointer"
            >
              Register Team
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <Link
              href="/primer"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-zinc-300 dark:border-zinc-700 bg-white/70 dark:bg-zinc-800/60 backdrop-blur-xs text-sm font-medium text-[#234766] dark:text-zinc-200 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <FileText className="w-4 h-4 text-[#E38363]" />
              Read Primer
            </Link>
          </motion.div>

          {/* Subtle Live Status & Specs Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 text-xs text-zinc-500 dark:text-zinc-400"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100/80 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/60">
              <Clock className="w-3.5 h-3.5 text-[#E38363]" />
              <span>Early Registration:</span>
              <span className="font-bold text-[#234766] dark:text-[#f3f6f8]">
                {timeLeft.days}d {String(timeLeft.hours).padStart(2, "0")}h {String(timeLeft.minutes).padStart(2, "0")}m {String(timeLeft.seconds).padStart(2, "0")}s
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* 6 Impact Stats Grid (Nationwide Reach & Community) */}
      <div className="relative z-10 max-w-[1150px] mx-auto px-5 sm:px-8 mt-12 sm:mt-16 mb-14 sm:mb-20">
        <div className="rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-[#F6F3EB] dark:bg-[#151516] p-8 sm:p-12 lg:p-14 shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 lg:gap-x-14 gap-y-8 sm:gap-y-10">
            {siteData.impactStats.map((stat, i) => (
              <div key={i} className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-[#142433] dark:text-[#f3f6f8] tracking-tight">
                  {stat.title}
                </h3>
                <p className="text-sm text-[#2b4458]/85 dark:text-zinc-400 leading-relaxed max-w-[340px]">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Staggered Gradient Data Bars Graphic — Animated Sliding Telemetry */}
      <div className="relative z-10 w-full space-y-0 overflow-hidden select-none" aria-hidden="true">
        {/* Bar 1: Deep Navy / Indigo with subtle halftone dot texture */}
        <motion.div 
          className="h-7 sm:h-9 w-[28%] sm:w-[24%] rounded-r-xs relative overflow-hidden -ml-12 sm:-ml-16"
          animate={{
            x: [0, 90, 0],
            backgroundPosition: ["0px 0px", "96px 0px"],
          }}
          transition={{
            x: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            backgroundPosition: { duration: 12, repeat: Infinity, ease: "linear" },
          }}
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.25) 1.2px, transparent 1.2px), linear-gradient(to right, #122131, #234766, #3b6b94)`,
            backgroundSize: '8px 8px, 100% 100%'
          }}
        >
          {/* Sliding Data Pulse Shimmer */}
          <motion.div
            className="absolute inset-0 w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
            animate={{ x: ["-100%", "400%"] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
          />
        </motion.div>
        
        {/* Bar 2: Sky Blue / Cyan with halftone grid */}
        <motion.div 
          className="h-7 sm:h-9 w-[48%] sm:w-[44%] rounded-r-xs relative overflow-hidden -ml-12 sm:-ml-16"
          animate={{
            x: [0, 120, 0],
            backgroundPosition: ["0px 0px", "-120px 0px"],
          }}
          transition={{
            x: { duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
            backgroundPosition: { duration: 14, repeat: Infinity, ease: "linear" },
          }}
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.38) 1.2px, transparent 1.2px), linear-gradient(to right, #346187, #4f8db4, #75b2d4)`,
            backgroundSize: '6px 6px, 100% 100%'
          }}
        >
          <motion.div
            className="absolute inset-0 w-32 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12"
            animate={{ x: ["-100%", "350%"] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.8 }}
          />
        </motion.div>
        
        {/* Bar 3: Sage Teal / Mint gradient */}
        <motion.div 
          className="h-7 sm:h-9 w-[70%] sm:w-[66%] rounded-r-xs relative overflow-hidden -ml-12 sm:-ml-16"
          animate={{
            x: [0, 85, 0],
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            x: { duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
            backgroundPosition: { duration: 16, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            backgroundImage: `linear-gradient(to right, #4a776e, #6E9E94, #9ec8bd, #6E9E94)`
          }}
        >
          <motion.div
            className="absolute inset-0 w-36 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12"
            animate={{ x: ["-100%", "400%"] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 }}
          />
        </motion.div>
        
        {/* Bar 4: Forest Green / Chartreuse Yellow with halftone grid */}
        <motion.div 
          className="h-7 sm:h-9 w-[88%] sm:w-[84%] rounded-r-xs relative overflow-hidden -ml-12 sm:-ml-16"
          animate={{
            x: [0, 60, 0],
            backgroundPosition: ["0px 0px", "140px 0px"],
          }}
          transition={{
            x: { duration: 9.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
            backgroundPosition: { duration: 18, repeat: Infinity, ease: "linear" },
          }}
          style={{
            backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.18) 1.2px, transparent 1.2px), linear-gradient(to right, #1d463a, #437a54, #dcb94f)`,
            backgroundSize: '7px 7px, 100% 100%'
          }}
        >
          <motion.div
            className="absolute inset-0 w-40 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
            animate={{ x: ["-100%", "300%"] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.2 }}
          />
        </motion.div>
        
        {/* Bar 5: Full Width Plum / Warm Coral / Peach Gradient */}
        <motion.div 
          className="h-8 sm:h-10 w-[calc(100%+80px)] -ml-10 relative overflow-hidden"
          animate={{
            x: [-25, 25, -25],
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            x: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            backgroundPosition: { duration: 14, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            backgroundImage: `linear-gradient(to right, #381e42, #7a3556, #c25f48, #E38363, #f5b9a4, #E38363, #7a3556)`
          }}
        >
          <motion.div
            className="absolute inset-0 w-48 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
            animate={{ x: ["-100%", "500%"] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.5 }}
          />
        </motion.div>
      </div>

      {/* Challenge Statement Banner — Warm Cream Accent (from brandbook #F6F3EB) */}
      <div className="bg-[#F6F3EB] dark:bg-[#151516] border-y border-zinc-200 dark:border-zinc-800">
        <div className="max-w-[1150px] mx-auto px-5 sm:px-8 py-14 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs font-bold tracking-widest uppercase text-[#E38363]">
                The 2026 Challenge Theme
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#234766] dark:text-[#7ca5cb] leading-tight">
                Public Health Analytics
              </h2>
              <p className="text-xs text-[#6E9E94] dark:text-zinc-400 font-medium">
                Data-driven solutions for resilient communities
              </p>
            </div>

            <div className="lg:col-span-8 space-y-5">
              <p className="text-sm sm:text-base text-[#1b3449]/90 dark:text-zinc-200 leading-relaxed font-sans">
                {siteData.event.challengeStatement}
              </p>

              {/* 10 Focus Areas as Interactive Chip Grid */}
              <div className="pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#234766] dark:text-[#88beaf] block mb-3">
                  10 Key Innovation Tracks:
                </span>
                <div className="flex flex-wrap gap-2">
                  {siteData.topics.map((topic, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-md bg-white dark:bg-zinc-800 border border-zinc-300/80 dark:border-zinc-700 text-[#234766] dark:text-zinc-200 hover:border-[#234766] dark:hover:border-[#6E9E94] hover:text-[#234766] dark:hover:text-[#6E9E94] transition-colors cursor-default font-medium"
                      title={topic.desc}
                    >
                      {topic.title}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Four Pillars of PJDSC */}
      <div className="max-w-[1150px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <div className="mb-10 sm:mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-[#6E9E94]">
            Competition Framework
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#234766] dark:text-[#7ca5cb] leading-tight mt-2">
            Four Pillars of PJDSC 2026
          </h2>
          <p className="text-sm text-[#2b4458]/80 dark:text-zinc-400 mt-2 max-w-[560px]">
            A progressive competition structure designed to take teams from foundational skills to deployment-ready analytics prototypes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {siteData.pillars.map((pillar, i) => (
            <div
              key={i}
              className="group relative p-6 sm:p-7 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/40 backdrop-blur-xs hover:border-[#234766]/30 dark:hover:border-[#6E9E94]/30 hover:shadow-md transition-all"
            >
              <span className="text-5xl font-extrabold text-[#234766]/10 dark:text-[#6E9E94]/15 absolute top-5 right-6 select-none group-hover:text-[#234766]/25 dark:group-hover:text-[#6E9E94]/30 transition-colors">
                {pillar.num}
              </span>
              <div className="relative pr-8">
                <span className="inline-block px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider bg-[#234766]/10 dark:bg-[#6E9E94]/15 text-[#234766] dark:text-[#6E9E94] rounded mb-3">
                  {pillar.tag}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#234766] dark:text-zinc-100 group-hover:text-[#6E9E94] dark:group-hover:text-[#ee9577] transition-colors mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#2b4458]/80 dark:text-zinc-300 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Cash Prizes Section (Matching Official Reference Badges) */}
        <div className="mt-16 sm:mt-24">
          <div className="text-center max-w-[620px] mx-auto mb-10 sm:mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-[#E38363]/10 text-[#E38363] dark:bg-[#E38363]/20 dark:text-[#ee9577]">
              <Trophy className="w-3.5 h-3.5" />
              Competition Rewards
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#234766] dark:text-[#7ca5cb] leading-tight mt-2.5">
              ₱50,000 Cash Prize Pool
            </h2>
            <p className="text-sm sm:text-base text-[#2b4458]/85 dark:text-zinc-300 mt-2.5">
              Awarded to the top performing teams demonstrating outstanding predictive modeling, clinical relevance, and impactful public health solutions.
            </p>
          </div>

          {/* Prize Badges Container (matching exact reference visual) */}
          <div className="max-w-[780px] mx-auto space-y-4 sm:space-y-6">
            
            {/* 1st Place — Champion (Centered Top) */}
            <div className="flex justify-center">
              <div className="w-full sm:w-[440px] bg-[#DE9B15] rounded-2xl sm:rounded-3xl p-4 sm:p-5 flex items-center gap-4 sm:gap-6 shadow-md hover:scale-[1.02] transition-transform">
                {/* 1st Circle */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#ECCB78] flex items-center justify-center shrink-0 shadow-inner">
                  <div className="flex items-baseline text-[#4A320A]">
                    <span className="text-2xl sm:text-3xl font-extrabold leading-none">1</span>
                    <span className="text-xs font-bold tracking-tight">ST</span>
                  </div>
                </div>
                {/* Text */}
                <div className="text-white">
                  <span className="block text-[11px] sm:text-xs font-bold tracking-widest uppercase text-white/90">
                    Champion
                  </span>
                  <span className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-none">
                    P25000
                  </span>
                </div>
              </div>
            </div>

            {/* Runners Up Row (2nd & 3rd Place) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              
              {/* 2nd Place — First Runner Up */}
              <div className="bg-[#445154] rounded-2xl sm:rounded-3xl p-4 sm:p-5 flex items-center gap-4 sm:gap-5 shadow-md hover:scale-[1.02] transition-transform">
                {/* 2nd Circle */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#A5BAC0] flex items-center justify-center shrink-0 shadow-inner">
                  <div className="flex items-baseline text-[#222E31]">
                    <span className="text-2xl sm:text-3xl font-extrabold leading-none">2</span>
                    <span className="text-xs font-bold tracking-tight">ND</span>
                  </div>
                </div>
                {/* Text */}
                <div className="text-white">
                  <span className="block text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white/90">
                    First Runner Up
                  </span>
                  <span className="text-3xl sm:text-4xl lg:text-[38px] font-extrabold tracking-tight leading-none">
                    P15000
                  </span>
                </div>
              </div>

              {/* 3rd Place — Second Runner Up */}
              <div className="bg-[#382C1E] rounded-2xl sm:rounded-3xl p-4 sm:p-5 flex items-center gap-4 sm:gap-5 shadow-md hover:scale-[1.02] transition-transform">
                {/* 3rd Circle */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#B57D48] flex items-center justify-center shrink-0 shadow-inner">
                  <div className="flex items-baseline text-[#251B10]">
                    <span className="text-2xl sm:text-3xl font-extrabold leading-none">3</span>
                    <span className="text-xs font-bold tracking-tight">RD</span>
                  </div>
                </div>
                {/* Text */}
                <div className="text-white">
                  <span className="block text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white/90">
                    Second Runner Up
                  </span>
                  <span className="text-3xl sm:text-4xl lg:text-[38px] font-extrabold tracking-tight leading-none">
                    P10000
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Dedicated PJDSC Facebook Official Updates Panel */}
        <div className="mt-14 sm:mt-18 relative rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-gradient-to-br from-white via-zinc-50/70 to-zinc-100/50 dark:from-zinc-900/90 dark:via-zinc-900/60 dark:to-zinc-950/80 p-6 sm:p-8 lg:p-10 shadow-sm overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div 
            className="absolute -top-24 -right-24 w-72 h-72 bg-[#1877F2]/10 dark:bg-[#1877F2]/15 rounded-full blur-3xl pointer-events-none" 
            aria-hidden="true" 
          />
          <div 
            className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#6E9E94]/10 dark:bg-[#6E9E94]/15 rounded-full blur-3xl pointer-events-none" 
            aria-hidden="true" 
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Left Info Column */}
            <div className="space-y-4 max-w-[620px]">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1877F2]/10 text-[#1877F2] dark:bg-[#1877F2]/15 dark:text-[#5890FF]">
                  <Facebook className="w-3.5 h-3.5" />
                  Official Announcements
                </span>
                <span className="text-xs font-semibold text-[#E38363] dark:text-[#ee9577]">
                  @pjdsc.updssoc
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#234766] dark:text-[#7ca5cb] tracking-tight leading-tight">
                  Official Facebook Page
                </h3>
                <p className="text-sm sm:text-base text-[#2b4458]/85 dark:text-zinc-300 leading-relaxed mt-2.5">
                  Follow the official PJDSC Facebook page for timely competition updates, timeline reminders, workshop schedules, and live challenge announcements. All major updates are released here first.
                </p>
              </div>

              {/* Badges / Specs */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-xs font-medium text-[#234766] dark:text-zinc-200">
                  <Bell className="w-3.5 h-3.5 text-[#1877F2]" />
                  <span>Competition Updates</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-xs font-medium text-[#234766] dark:text-zinc-200">
                  <Clock className="w-3.5 h-3.5 text-[#6E9E94]" />
                  <span>Timeline Reminders</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-xs font-medium text-[#234766] dark:text-zinc-200">
                  <Megaphone className="w-3.5 h-3.5 text-[#E38363]" />
                  <span>Live Announcements</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-xs font-medium text-[#234766] dark:text-zinc-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Active Channel</span>
                </div>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 lg:w-[260px]">
              <a
                href={siteData.event.facebookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1877F2] hover:bg-[#166fe5] dark:bg-[#1877F2] dark:hover:bg-[#166fe5] text-white text-sm font-bold rounded-xl shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <Facebook className="w-4 h-4" />
                <span>Visit Facebook Page</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="p-3 rounded-xl bg-zinc-100/90 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/60 text-[11px] text-zinc-500 dark:text-zinc-400">
                <span className="block font-semibold text-[#234766] dark:text-[#7ca5cb] mb-0.5">
                  Facebook Page:
                </span>
                <a
                  href={siteData.event.facebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] select-all break-all text-[#2b4458] dark:text-zinc-300 font-sans hover:underline"
                >
                  facebook.com/pjdsc.updssoc
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Dedicated PJDSC GitHub Datasets Repository Panel */}
        <div className="mt-8 sm:mt-10 relative rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-gradient-to-br from-white via-zinc-50/70 to-zinc-100/50 dark:from-zinc-900/90 dark:via-zinc-900/60 dark:to-zinc-950/80 p-6 sm:p-8 lg:p-10 shadow-sm overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div 
            className="absolute -top-24 -right-24 w-72 h-72 bg-[#6E9E94]/10 dark:bg-[#6E9E94]/15 rounded-full blur-3xl pointer-events-none" 
            aria-hidden="true" 
          />
          <div 
            className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#234766]/10 dark:bg-[#234766]/20 rounded-full blur-3xl pointer-events-none" 
            aria-hidden="true" 
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Left Info Column */}
            <div className="space-y-4 max-w-[620px]">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#234766]/10 text-[#234766] dark:bg-[#6E9E94]/15 dark:text-[#88beaf]">
                  <Github className="w-3.5 h-3.5" />
                  Official Open Data
                </span>
                <span className="text-xs font-semibold text-[#E38363] dark:text-[#ee9577]">
                  UP-DSSoc / PJDSC-Datasets
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#234766] dark:text-[#7ca5cb] tracking-tight leading-tight">
                  PJDSC Datasets & Projects Repository
                </h3>
                <p className="text-sm sm:text-base text-[#2b4458]/85 dark:text-zinc-300 leading-relaxed mt-2.5">
                  Access historical projects, challenge datasets, and open sourcecode curated by UP Data Science Society for challenge participants.
                </p>
              </div>

              {/* Badges / Specs */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-xs font-medium text-[#234766] dark:text-zinc-200">
                  <FolderGit2 className="w-3.5 h-3.5 text-[#234766] dark:text-[#88beaf]" />
                  <span>Historical Projects</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-xs font-medium text-[#234766] dark:text-zinc-200">
                  <Database className="w-3.5 h-3.5 text-[#6E9E94]" />
                  <span>Challenge Datasets</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-xs font-medium text-[#234766] dark:text-zinc-200">
                  <Code2 className="w-3.5 h-3.5 text-[#E38363]" />
                  <span>Open Sourcecode</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-xs font-medium text-[#234766] dark:text-zinc-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Free & Open Source</span>
                </div>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 lg:w-[260px]">
              <a
                href={siteData.event.githubRepoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#234766] hover:bg-[#1a354c] dark:bg-[#E38363] dark:hover:bg-[#d87556] text-white dark:text-zinc-950 text-sm font-bold rounded-xl shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <Github className="w-4 h-4" />
                <span>Open in GitHub</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="p-3 rounded-xl bg-zinc-100/90 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/60 text-[11px] text-zinc-500 dark:text-zinc-400">
                <span className="block font-semibold text-[#234766] dark:text-[#7ca5cb] mb-0.5">
                  Repository:
                </span>
                <a
                  href={siteData.event.githubRepoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] select-all break-all text-[#2b4458] dark:text-zinc-300 font-sans hover:underline"
                >
                  github.com/UP-DSSoc/PJDSC-Datasets
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Essential Resource Documents Row */}
        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-2 text-[#2b4458]/80 dark:text-zinc-400">
            <span className="font-semibold text-[#234766] dark:text-[#7ca5cb]">Official Guidelines:</span>
            <Link
              href="/primer"
              className="inline-flex items-center gap-1.5 hover:text-[#234766] dark:hover:text-[#E38363] transition-colors text-[#234766] dark:text-[#88beaf] font-semibold"
            >
              <FileText className="w-3.5 h-3.5 text-[#E38363]" />
              Interactive Primer & Mechanics
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <button
            onClick={openRegister}
            className="inline-flex items-center gap-1 text-[#234766] dark:text-[#E38363] font-bold hover:underline cursor-pointer"
          >
            <span>Register Now</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
