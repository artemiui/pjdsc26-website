"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, FileText, ChevronRight, Activity, Cpu, Users2, Trophy, Sparkles } from "lucide-react";
import { siteData } from "@/lib/siteData";
import AsciiMotif from "@/components/AsciiMotif";

interface HeroSectionProps {
  onOpenRegister?: () => void;
}

export default function HeroSection({ onOpenRegister }: HeroSectionProps) {
  return (
    <section id="overview" className="relative pt-10 sm:pt-16 pb-16 sm:pb-24 overflow-hidden">
      {/* Background data dot grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-35 pointer-events-none -z-10" />

      {/* Hero Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Status Pill & ASCII Bio-sprout accent */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono border border-zinc-300/80 dark:border-zinc-700 bg-white/60 dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="uppercase tracking-wider">6th Iteration · Public Health Analytics</span>
          </div>

          <div className="hidden sm:block">
            <AsciiMotif variant="plant" className="opacity-75" />
          </div>
        </div>

        {/* Main Event Title */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shrink-0">
              <Image
                src="/assets/logos-ver2026/pjdsc 2026/svg/Black Bars_1.svg"
                alt="PJDSC Data Bars Logo"
                width={48}
                height={36}
                priority
                className="w-10 sm:w-12 h-auto object-contain dark:invert"
              />
            </div>
            <div>
              <p className="text-xs font-mono tracking-widest text-[#234766] dark:text-[#88beaf] uppercase">
                University of the Philippines Data Science Society Presents
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-zinc-950 dark:text-white tracking-tight leading-tight">
                Philippine Junior Data Science Challenge 2026
              </h1>
            </div>
          </div>

          {/* Theme Banner with Scribe / Isomorphic inspired highlight */}
          <div className="mt-6 p-5 sm:p-6 rounded-xl wireframe-panel bg-white/60 dark:bg-zinc-900/40 relative overflow-hidden">
            {/* Subtle corner badge */}
            <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2">
              Official 2026 Competition Theme
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-sans font-semibold text-zinc-900 dark:text-zinc-100 leading-snug">
              <span className="inline-block bg-[#234766] text-white dark:bg-[#E38363] dark:text-zinc-950 px-2.5 py-0.5 rounded mr-2 text-lg sm:text-2xl font-bold">
                “Trace the Pattern, Target the Cure”
              </span>
              Advancing Public Health Through Data Science
            </h2>

            <p className="mt-4 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans max-w-3xl">
              {siteData.event.challengeStatement}
            </p>
          </div>
        </div>

        {/* Primary CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-xs">
          <button
            onClick={onOpenRegister}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#234766] text-white hover:bg-[#18344c] dark:bg-[#E38363] dark:text-zinc-950 dark:hover:bg-[#d67252] shadow-sm hover:shadow transition-all font-medium"
          >
            <span>register team</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href="#primer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 transition-colors"
          >
            <FileText className="w-4 h-4 text-zinc-500" />
            <span>read primer content</span>
          </a>

          <a
            href="/docs/PJDSC 2026 Sponsorship Deck.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-3 rounded-md text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors"
          >
            <span>sponsorship deck (pdf)</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Quick Numbers Bar (Wireframe modular grid) */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {siteData.stats.map((stat, i) => (
            <div
              key={i}
              className="p-4 rounded-lg wireframe-panel bg-white/40 dark:bg-zinc-900/30 text-left"
            >
              <div className="text-xl sm:text-2xl font-mono font-bold text-[#234766] dark:text-[#E38363]">
                {stat.value}
              </div>
              <div className="text-xs font-sans font-semibold text-zinc-800 dark:text-zinc-200 mt-0.5">
                {stat.label}
              </div>
              <div className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 mt-1">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Focus Sub-Domains Pills */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Key Public Health Analytical Vectors
            </span>
            <span className="text-[11px] font-mono text-zinc-400">10 Focus Areas</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {siteData.topics.map((t, i) => (
              <span
                key={i}
                title={t.desc}
                className="inline-flex items-center text-xs font-mono px-3 py-1.5 rounded-full border border-zinc-200/80 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300 hover:border-[#234766]/50 dark:hover:border-[#6E9E94]/50 transition-colors cursor-default"
              >
                {t.title}
              </span>
            ))}
          </div>
        </div>

        {/* 4 Pillars of PJDSC */}
        <div className="mt-14 pt-10 border-t border-zinc-200 dark:border-zinc-800">
          <div className="mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              The Competition Structure
            </span>
            <h3 className="text-xl font-sans font-bold text-zinc-900 dark:text-zinc-100 mt-1">
              Four Milestones from Proposal to Live Presentation
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {siteData.pillars.map((pillar, i) => (
              <div
                key={i}
                className="p-5 rounded-lg wireframe-panel bg-white/50 dark:bg-zinc-900/30 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-[#6E9E94] dark:text-[#88beaf]">
                      {pillar.num}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 uppercase">
                      {pillar.tag}
                    </span>
                  </div>
                  <h4 className="text-base font-sans font-semibold text-zinc-900 dark:text-zinc-100">
                    {pillar.title}
                  </h4>
                  <p className="text-xs font-sans text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
