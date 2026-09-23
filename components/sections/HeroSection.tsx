"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  FileText,
  Clock,
  Github,
  Facebook,
  Trophy,
  Sparkles,
} from "lucide-react";
import { siteData } from "@/lib/siteData";
import { useRegistration } from "@/lib/registrationContext";
import DitheredPlantBackground from "@/components/DitheredPlantBackground";
import AmbientLighting from "@/components/AmbientLighting";

export default function HeroSection() {
  const { openRegister } = useRegistration();

  // Multi-event dynamic countdown timer state
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Automatically determine the earliest upcoming milestone relative to current time
  const getLiveMilestoneIndex = () => {
    const now = Date.now();
    const idx = siteData.milestones.findIndex(
      (m) => new Date(m.targetDate).getTime() > now
    );
    return idx !== -1 ? idx : siteData.milestones.length - 1;
  };

  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
    setActiveMilestoneIndex(getLiveMilestoneIndex());
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const updateCountdown = () => {
      const now = Date.now();
      const liveIdx = getLiveMilestoneIndex();
      setActiveMilestoneIndex(liveIdx);

      const current = siteData.milestones[liveIdx] || siteData.milestones[0];
      const targetTime = new Date(current.targetDate).getTime();
      const difference = targetTime - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [mounted]);

  const currentMilestone = siteData.milestones[activeMilestoneIndex] || siteData.milestones[0];

  return (
    <div className="relative overflow-hidden">
      {/* ========================================================================= */}
      {/* SECTION 1: HERO CONTAINER WITH AMBIENT LIGHTING & DUAL PILL CTAs        */}
      {/* ========================================================================= */}
      <section className="relative min-h-[85vh] flex flex-col justify-center pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-grid-pattern">
        {/* Top Triple Color Accent Stripe (Navy / Teal / Coral) */}
        <div className="h-1.5 w-full flex absolute top-0 inset-x-0 z-20">
          <div className="flex-1 bg-[#234766]" />
          <div className="w-24 sm:w-48 bg-[#6E9E94]" />
          <div className="w-16 sm:w-32 bg-[#E38363]" />
        </div>

        {/* Ambient Lighting: Vertical Light Beams + Radial Glow + Node Web Constellation */}
        <AmbientLighting variant="hero" showBeams={true} showNodeWeb={true} />

        {/* Animated Botanical Dithered Plant Background */}
        <DitheredPlantBackground />

        {/* Hero Content Wrapper */}
        <div className="relative z-10 max-w-[1150px] mx-auto px-5 sm:px-8">
          <div className="max-w-[900px] mx-auto text-center">
            
            {/* Centered Brand Logos in Glass Pill Container */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center gap-3 sm:gap-4 px-4 py-2 rounded-full border border-black/[0.08] dark:border-white/[0.1] bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md shadow-xs mb-8"
            >
              {/* PJDSC Logo */}
              <div className="w-8 h-6 sm:w-9 sm:h-7 flex items-center justify-center">
                <Image
                  src="/assets/logos-ver2026/pjdsc 2026/svg/Black Bars_1.svg"
                  alt="PJDSC 2026 Logo"
                  width={36}
                  height={26}
                  priority
                  className="w-full h-auto object-contain dark:invert"
                />
              </div>

              <div className="h-4 w-px bg-zinc-300 dark:bg-zinc-700" aria-hidden="true" />

              {/* UP DSSoc Logo */}
              <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center">
                <Image
                  src="/assets/logos-ver2026/up dssoc/updssoclogoicon.png"
                  alt="UP Data Science Society Logo"
                  width={28}
                  height={28}
                  priority
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>

            {/* High-Impact Hero Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.55 }}
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
              transition={{ delay: 0.22, duration: 0.5 }}
              className="mt-6 sm:mt-8 max-w-[720px] mx-auto text-center"
            >
              <p className="text-lg sm:text-2xl font-semibold text-[#234766] dark:text-[#E38363] leading-snug">
                Trace the Pattern, Target the Cure: Advancing Public Health with Data Science
              </p>
            </motion.div>

            {/* Dual Centered CTA Buttons (Pill-shaped: 1 high-contrast primary, 1 outlined ghost) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-3.5 mt-8 sm:mt-10"
            >
              {/* High-Contrast Primary CTA Pill */}
              <button
                onClick={openRegister}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#234766] hover:bg-[#18354e] dark:bg-[#E38363] dark:hover:bg-[#d87556] text-white dark:text-zinc-950 text-sm font-bold rounded-full transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] shadow-lg shadow-[#234766]/20 dark:shadow-[#E38363]/25 cursor-pointer"
              >
                <span>Register Team</span>
              </button>

              {/* Outlined Ghost CTA Pill */}
              <Link
                href="/primer"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-black/[0.12] dark:border-white/[0.15] bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md text-sm font-medium text-[#234766] dark:text-zinc-200 rounded-full hover:bg-black/[0.04] dark:hover:bg-white/[0.08] hover:border-[#234766]/30 dark:hover:border-white/30 transition-all duration-200"
              >
                <FileText className="w-4 h-4 text-[#E38363]" />
                <span>Read Primer</span>
              </Link>
            </motion.div>

            {/* Live Countdown Timer in Refined Status Pill */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.42, duration: 0.5 }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 text-xs"
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-black/[0.08] dark:border-white/[0.1] shadow-xs text-zinc-600 dark:text-zinc-300">
                <Clock className="w-3.5 h-3.5 text-[#E38363]" />
                <span className="font-medium text-zinc-700 dark:text-zinc-200">
                  {currentMilestone.prefix}
                </span>
                <span className="font-bold text-[#234766] dark:text-[#f3f6f8] font-mono tracking-tight">
                  {timeLeft.days}d {String(timeLeft.hours).padStart(2, "0")}h {String(timeLeft.minutes).padStart(2, "0")}m {String(timeLeft.seconds).padStart(2, "0")}s
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: 6 IMPACT STATS BENTO GRID (CONTAINER DEPTH & ROUNDED CARDS)    */}
      {/* ========================================================================= */}
      <section className="relative z-10 max-w-[1150px] mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-[#234766]/10 text-[#234766] dark:bg-[#7ca5cb]/15 dark:text-[#7ca5cb] mb-2">
            Nationwide Reach
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#234766] dark:text-[#7ca5cb] tracking-tight">
            Empowering the Next Generation
          </h2>
        </div>

        {/* Bento Grid: 6 Impact Cards with hairline borders and subtle lift */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {siteData.impactStats.map((stat, i) => (
            <div
              key={i}
              className="group relative p-6 sm:p-7 rounded-3xl border border-black/[0.08] dark:border-white/[0.1] bg-white/80 dark:bg-zinc-900/60 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.03)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1 hover:shadow-lg transition-all duration-200 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle top-right corner glow on hover */}
              <div 
                className="absolute -top-12 -right-12 w-28 h-28 bg-[#6E9E94]/10 dark:bg-[#6E9E94]/15 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-300 pointer-events-none" 
                aria-hidden="true" 
              />

              <div>
                {/* Header row: soft category badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                    Metric 0{i + 1}
                  </span>
                </div>

                {/* Big Stat Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#142433] dark:text-[#f3f6f8] tracking-tight group-hover:text-[#234766] dark:group-hover:text-[#7ca5cb] transition-colors">
                  {stat.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#2b4458]/85 dark:text-zinc-400 leading-relaxed mt-2.5">
                  {stat.desc}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="mt-5 pt-3 border-t border-black/[0.04] dark:border-white/[0.06] flex items-center justify-between text-[11px] text-zinc-400 font-medium">
                <span>PJDSC Impact</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#6E9E94]" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: ANIMATED SLIDING TELEMETRY BARS TRANSITION                    */}
      {/* ========================================================================= */}
      <div className="relative z-10 w-full space-y-0 overflow-hidden select-none my-4" aria-hidden="true">
        {/* Bar 1: Deep Navy with subtle dot pattern */}
        <motion.div 
          className="h-7 sm:h-8 w-[28%] sm:w-[24%] rounded-r-full relative overflow-hidden -ml-8 sm:-ml-12"
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
        />
        
        {/* Bar 2: Cyan / Sky Blue */}
        <motion.div 
          className="h-7 sm:h-8 w-[48%] sm:w-[44%] rounded-r-full relative overflow-hidden -ml-8 sm:-ml-12"
          animate={{
            x: [0, 120, 0],
          }}
          transition={{
            x: { duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
          }}
          style={{
            backgroundImage: `linear-gradient(to right, #2c5478, #4f8db4, #75b2d4)`
          }}
        />
        
        {/* Bar 3: Sage Teal / Mint */}
        <motion.div 
          className="h-7 sm:h-8 w-[70%] sm:w-[66%] rounded-r-full relative overflow-hidden -ml-8 sm:-ml-12"
          animate={{
            x: [0, 85, 0],
          }}
          transition={{
            x: { duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
          }}
          style={{
            backgroundImage: `linear-gradient(to right, #3f685f, #6E9E94, #9ec8bd)`
          }}
        />
        
        {/* Bar 4: Forest Green / Chartreuse Yellow */}
        <motion.div 
          className="h-7 sm:h-8 w-[88%] sm:w-[84%] rounded-r-full relative overflow-hidden -ml-8 sm:-ml-12"
          animate={{
            x: [0, 60, 0],
          }}
          transition={{
            x: { duration: 9.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
          }}
          style={{
            backgroundImage: `linear-gradient(to right, #1d463a, #437a54, #dcb94f)`
          }}
        />
        
        {/* Bar 5: Full Width Coral Gradient */}
        <motion.div 
          className="h-8 sm:h-9 w-[calc(100%+60px)] -ml-8 relative overflow-hidden"
          animate={{
            x: [-20, 20, -20],
          }}
          transition={{
            x: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            backgroundImage: `linear-gradient(to right, #381e42, #7a3556, #c25f48, #E38363, #f5b9a4, #E38363, #7a3556)`
          }}
        />
      </div>

      {/* ========================================================================= */}
      {/* SECTION 4: CHALLENGE THEME & FOCUS TRACKS (WARM CREAM TONAL CONTRAST)    */}
      {/* ========================================================================= */}
      <section className="bg-[#F6F3EB] dark:bg-[#11161d] border-y border-black/[0.08] dark:border-white/[0.1] py-16 sm:py-24 transition-colors">
        <div className="max-w-[1150px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Header Column */}
            <div className="lg:col-span-4 space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-[#E38363]/15 text-[#c45a38] dark:bg-[#E38363]/20 dark:text-[#ee9577]">
                The 2026 Challenge Theme
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#234766] dark:text-[#7ca5cb] leading-tight">
                Public Health Analytics
              </h2>
              <p className="text-sm text-[#6E9E94] dark:text-zinc-400 font-medium">
                Data-driven solutions for resilient communities
              </p>
            </div>

            {/* Right Narrative & Focus Areas */}
            <div className="lg:col-span-8 space-y-6">
              {/* Challenge Statement Card */}
              <div className="p-6 sm:p-7 rounded-3xl border border-black/[0.08] dark:border-white/[0.1] bg-white/80 dark:bg-zinc-900/60 backdrop-blur-xs shadow-xs">
                <p className="text-sm sm:text-base text-[#1b3449]/90 dark:text-zinc-200 leading-relaxed font-sans">
                  {siteData.event.challengeStatement}
                </p>
              </div>

              {/* 10 Focus Tracks Bento Pills */}
              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#234766] dark:text-[#88beaf] block mb-3">
                  10 Key Innovation Tracks:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
                  {siteData.topics.map((topic, i) => (
                    <div
                      key={i}
                      className="group p-3 rounded-2xl bg-white dark:bg-zinc-800/80 border border-black/[0.06] dark:border-white/[0.08] hover:border-[#234766]/30 dark:hover:border-[#6E9E94]/40 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 cursor-default"
                      title={topic.desc}
                    >
                      <div className="flex items-center justify-between text-[10px] text-zinc-400 font-mono mb-1">
                        <span>#{String(i + 1).padStart(2, "0")}</span>
                      </div>
                      <span className="text-xs font-semibold text-[#234766] dark:text-zinc-200 block leading-snug">
                        {topic.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: FOUR PILLARS BENTO GRID (INSPIRED BY CADRO & ISOMORPHIC LABS) */}
      {/* ========================================================================= */}
      <section className="max-w-[1150px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <div className="mb-10 sm:mb-14 max-w-xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-[#6E9E94]/15 text-[#2b5950] dark:bg-[#6E9E94]/20 dark:text-[#88beaf] mb-2">
            Competition Framework
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#234766] dark:text-[#7ca5cb] leading-tight">
            Four Pillars of PJDSC 2026
          </h2>
          <p className="text-sm text-[#2b4458]/80 dark:text-zinc-400 mt-2 leading-relaxed">
            A progressive competition structure designed to take teams from foundational skills to deployment-ready analytics prototypes.
          </p>
        </div>

        {/* Bento 2x2 Feature Grid with soft background tints */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {siteData.pillars.map((pillar, i) => (
            <div
              key={i}
              className="group relative p-7 sm:p-8 rounded-3xl border border-black/[0.08] dark:border-white/[0.1] bg-white/80 dark:bg-zinc-900/50 backdrop-blur-sm hover:-translate-y-1 hover:shadow-xl hover:border-[#234766]/30 dark:hover:border-[#6E9E94]/30 transition-all duration-200 overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle top ambient radial glow */}
              <div 
                className="absolute top-0 right-0 w-36 h-36 bg-[#234766]/5 dark:bg-[#6E9E94]/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-300 pointer-events-none" 
                aria-hidden="true" 
              />

              <div>
                {/* Top Row: Pill Tag */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <span className="inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-wider bg-[#234766]/10 dark:bg-[#6E9E94]/15 text-[#234766] dark:text-[#88beaf] rounded-full">
                    {pillar.tag}
                  </span>
                </div>

                {/* Big Number + Title */}
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-zinc-400 dark:text-zinc-500">
                    Phase {pillar.num}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#234766] dark:text-zinc-100 group-hover:text-[#6E9E94] dark:group-hover:text-[#ee9577] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#2b4458]/85 dark:text-zinc-300 leading-relaxed pt-1">
                    {pillar.desc}
                  </p>
                </div>
              </div>

              {/* Card Footer Meta */}
              <div className="mt-8 pt-4 border-t border-black/[0.05] dark:border-white/[0.06] flex items-center justify-between text-xs text-zinc-400 font-medium">
                <span>Official Track</span>
                <span className="font-mono text-[11px]">{pillar.num}/04</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: CASH PRIZES (REFINED BENTO REWARDS CONTAINER)                 */}
      {/* ========================================================================= */}
      <section className="border-t border-black/[0.08] dark:border-white/[0.1] bg-zinc-50/50 dark:bg-zinc-950/40 py-16 sm:py-24">
        <div className="max-w-[1150px] mx-auto px-5 sm:px-8">
          <div className="text-center max-w-[620px] mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-[#E38363]/15 text-[#c45a38] dark:bg-[#E38363]/20 dark:text-[#ee9577] mb-2">
              <Trophy className="w-3.5 h-3.5" />
              Competition Rewards
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#234766] dark:text-[#7ca5cb] leading-tight">
              ₱50,000 Cash Prize Pool
            </h2>
            <p className="text-sm sm:text-base text-[#2b4458]/85 dark:text-zinc-300 mt-2.5 leading-relaxed">
              Awarded to the top performing teams demonstrating outstanding predictive modeling, clinical relevance, and impactful public health solutions.
            </p>
          </div>

          {/* Prize Cards Container */}
          <div className="max-w-[820px] mx-auto space-y-5">
            {/* 1st Place — Champion (Centered Top Bento Card) */}
            <div className="flex justify-center">
              <div className="w-full sm:w-[480px] bg-gradient-to-r from-[#DE9B15] to-[#c78508] rounded-3xl p-5 sm:p-6 flex items-center gap-5 sm:gap-6 shadow-lg shadow-[#DE9B15]/15 hover:-translate-y-1 transition-all duration-200">
                {/* 1st Circle */}
                <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-[#ECCB78] flex items-center justify-center shrink-0 shadow-inner">
                  <div className="flex items-baseline text-[#4A320A]">
                    <span className="text-3xl sm:text-4xl font-extrabold leading-none">1</span>
                    <span className="text-xs font-bold tracking-tight">ST</span>
                  </div>
                </div>
                {/* Text */}
                <div className="text-white">
                  <span className="block text-xs font-bold tracking-widest uppercase text-white/90">
                    Champion
                  </span>
                  <span className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-none">
                    P25000
                  </span>
                  <span className="block text-[11px] text-white/80 mt-1 font-medium">
                    Cash Prize + Official Trophy & Certificates
                  </span>
                </div>
              </div>
            </div>

            {/* Runners Up Row (2nd & 3rd Place) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* 2nd Place — First Runner Up */}
              <div className="bg-[#445154] rounded-3xl p-5 sm:p-6 flex items-center gap-4 sm:gap-5 shadow-md hover:-translate-y-1 transition-all duration-200">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#A5BAC0] flex items-center justify-center shrink-0 shadow-inner">
                  <div className="flex items-baseline text-[#222E31]">
                    <span className="text-2xl sm:text-3xl font-extrabold leading-none">2</span>
                    <span className="text-xs font-bold tracking-tight">ND</span>
                  </div>
                </div>
                <div className="text-white">
                  <span className="block text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white/90">
                    First Runner Up
                  </span>
                  <span className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-none">
                    P15000
                  </span>
                  <span className="block text-[11px] text-white/70 mt-1">
                    Cash Prize + Certificates
                  </span>
                </div>
              </div>

              {/* 3rd Place — Second Runner Up */}
              <div className="bg-[#382C1E] rounded-3xl p-5 sm:p-6 flex items-center gap-4 sm:gap-5 shadow-md hover:-translate-y-1 transition-all duration-200">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#B57D48] flex items-center justify-center shrink-0 shadow-inner">
                  <div className="flex items-baseline text-[#251B10]">
                    <span className="text-2xl sm:text-3xl font-extrabold leading-none">3</span>
                    <span className="text-xs font-bold tracking-tight">RD</span>
                  </div>
                </div>
                <div className="text-white">
                  <span className="block text-[10px] sm:text-xs font-bold tracking-widest uppercase text-white/90">
                    Second Runner Up
                  </span>
                  <span className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-none">
                    P10000
                  </span>
                  <span className="block text-[11px] text-white/70 mt-1">
                    Cash Prize + Certificates
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: OFFICIAL CHANNELS & DATASETS REPOSITORY (BENTO FEATURE CARDS)   */}
      {/* ========================================================================= */}
      <section className="max-w-[1150px] mx-auto px-5 sm:px-8 py-16 sm:py-24 space-y-10">
        
        {/* Dedicated PJDSC Facebook Official Updates Bento Card */}
        <div className="group relative rounded-3xl border border-black/[0.08] dark:border-white/[0.1] bg-white/80 dark:bg-zinc-900/60 p-7 sm:p-9 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] overflow-hidden transition-all duration-200 hover:-translate-y-1">
          {/* Ambient Radial Glows */}
          <div 
            className="absolute -top-24 -right-24 w-72 h-72 bg-[#1877F2]/10 dark:bg-[#1877F2]/15 rounded-full blur-3xl pointer-events-none" 
            aria-hidden="true" 
          />
          <div 
            className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#6E9E94]/10 dark:bg-[#6E9E94]/15 rounded-full blur-3xl pointer-events-none" 
            aria-hidden="true" 
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-[#1877F2]/10 text-[#1877F2]">
                Official Social Channel
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#234766] dark:text-[#7ca5cb] tracking-tight leading-tight">
                Official Facebook Page
              </h3>
              <p className="text-sm text-[#2b4458]/85 dark:text-zinc-300 leading-relaxed">
                Follow the official PJDSC Facebook page for timely competition updates, timeline reminders, workshop schedules, and live challenge announcements. All major updates are released here first.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row lg:flex-col gap-3">
                <a
                  href={siteData.event.facebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs font-bold rounded-full shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer w-fit"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Visit Facebook Page</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href={siteData.event.facebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#2b4458]/70 dark:text-zinc-400 hover:text-[#1877F2] transition-colors inline-flex items-center gap-1 font-mono"
                >
                  <span>facebook.com/pjdsc.updssoc</span>
                </a>
              </div>
            </div>

            {/* Right Screenshot Preview in Rounded Device Card */}
            <div className="lg:col-span-7">
              <a
                href={siteData.event.facebookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group/preview block relative rounded-2xl border border-black/[0.08] dark:border-white/[0.1] bg-zinc-100/50 dark:bg-zinc-800/50 shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md hover:border-[#1877F2]/40"
              >
                {/* Browser-like minimal header bar */}
                <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-black/[0.06] dark:border-white/[0.08] bg-white/80 dark:bg-zinc-800/80">
                  <span className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                  <span className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                  <span className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                  <span className="text-[11px] text-zinc-400 dark:text-zinc-400 font-mono ml-2 truncate">
                    facebook.com/pjdsc.updssoc
                  </span>
                </div>
                {/* Screenshot Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-50 dark:bg-zinc-900">
                  <Image
                    src="/assets/facebook-preview.png"
                    alt="Official PJDSC Facebook Page"
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover/preview:scale-[1.02]"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Dedicated PJDSC GitHub Datasets Repository Bento Card */}
        <div className="group relative rounded-3xl border border-black/[0.08] dark:border-white/[0.1] bg-white/80 dark:bg-zinc-900/60 p-7 sm:p-9 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] overflow-hidden transition-all duration-200 hover:-translate-y-1">
          {/* Ambient Radial Glows */}
          <div 
            className="absolute -top-24 -right-24 w-72 h-72 bg-[#6E9E94]/10 dark:bg-[#6E9E94]/15 rounded-full blur-3xl pointer-events-none" 
            aria-hidden="true" 
          />
          <div 
            className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#234766]/10 dark:bg-[#234766]/15 rounded-full blur-3xl pointer-events-none" 
            aria-hidden="true" 
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-[#234766]/10 text-[#234766] dark:bg-[#7ca5cb]/15 dark:text-[#7ca5cb]">
                Open Data & Starter Kits
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#234766] dark:text-[#7ca5cb] tracking-tight leading-tight">
                PJDSC Datasets & Projects Repository
              </h3>
              <p className="text-sm text-[#2b4458]/85 dark:text-zinc-300 leading-relaxed">
                Access historical competition projects, challenge datasets, starter notebooks, and open sourcecode curated by UP Data Science Society for challenge participants.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row lg:flex-col gap-3">
                <a
                  href={siteData.event.githubRepoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#234766] hover:bg-[#1a354c] text-white text-xs font-bold rounded-full shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer w-fit"
                >
                  <Github className="w-4 h-4" />
                  <span>Open in GitHub</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href={siteData.event.githubRepoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#2b4458]/70 dark:text-zinc-400 hover:text-[#234766] transition-colors inline-flex items-center gap-1 font-mono"
                >
                  <span>github.com/UP-DSSoc/PJDSC-Datasets</span>
                </a>
              </div>
            </div>

            {/* Right Screenshot Preview in Rounded Device Card */}
            <div className="lg:col-span-7">
              <a
                href={siteData.event.githubRepoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group/preview block relative rounded-2xl border border-black/[0.08] dark:border-white/[0.1] bg-zinc-950 shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md hover:border-[#234766]/40"
              >
                {/* Browser-like minimal header bar */}
                <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-zinc-800 bg-zinc-900">
                  <span className="w-2 h-2 rounded-full bg-zinc-700" />
                  <span className="w-2 h-2 rounded-full bg-zinc-700" />
                  <span className="w-2 h-2 rounded-full bg-zinc-700" />
                  <span className="text-[11px] text-zinc-400 font-mono ml-2 truncate">
                    github.com/UP-DSSoc/PJDSC-Datasets
                  </span>
                </div>
                {/* Screenshot Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-950">
                  <Image
                    src="/assets/github-repo-screenshot.png"
                    alt="PJDSC GitHub Datasets Repository Preview"
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover/preview:scale-[1.02]"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Essential Guidelines Fast Bar */}
        <div className="pt-6 border-t border-black/[0.08] dark:border-white/[0.1] flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-2 text-[#2b4458]/80 dark:text-zinc-400">
            <span className="font-semibold text-[#234766] dark:text-[#7ca5cb]">Official Guidelines:</span>
            <Link
              href="/primer"
              className="inline-flex items-center gap-1.5 hover:text-[#234766] dark:hover:text-[#E38363] transition-colors text-[#234766] dark:text-[#88beaf] font-semibold"
            >
              <FileText className="w-3.5 h-3.5 text-[#E38363]" />
              <span>Interactive Primer & Mechanics</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <button
            onClick={openRegister}
            className="inline-flex items-center gap-1 text-[#234766] dark:text-[#E38363] font-bold hover:underline cursor-pointer"
          >
            <span>Register Now</span>
          </button>
        </div>

      </section>
    </div>
  );
}
