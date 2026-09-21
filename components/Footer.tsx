"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, ArrowUpRight, Github, Facebook, Linkedin, Clock } from "lucide-react";
import { siteData } from "@/lib/siteData";
import { useRegistration } from "@/lib/registrationContext";

export default function Footer() {
  const { openRegister } = useRegistration();

  return (
    <footer className="relative border-t border-black/[0.08] dark:border-white/[0.1] bg-[#142433] dark:bg-[#070b0e] text-white overflow-hidden mt-auto">
      {/* Ambient Accent Light Beams at Top of Footer (Inspired by Sentinels Reference) */}
      <div 
        className="absolute top-0 inset-x-0 h-40 flex justify-around opacity-25 pointer-events-none select-none"
        aria-hidden="true"
      >
        <div className="w-12 h-full bg-gradient-to-b from-[#6E9E94]/30 to-transparent" />
        <div className="w-16 h-3/4 bg-gradient-to-b from-[#234766]/40 to-transparent" />
        <div className="w-10 h-full bg-gradient-to-b from-[#E38363]/25 to-transparent" />
        <div className="w-14 h-2/3 bg-gradient-to-b from-[#6E9E94]/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1150px] mx-auto px-5 sm:px-8 pt-16 sm:pt-20 pb-12">
        {/* 5-Column Minimalist Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 pb-16 border-b border-white/[0.1]">
          {/* Column 1: Brand & Organizer */}
          <div className="col-span-2 sm:col-span-1 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="w-7 h-7 flex items-center justify-center">
                <Image
                  src="/assets/logos-ver2026/pjdsc 2026/svg/White Bars_1.svg"
                  alt="PJDSC 2026"
                  width={28}
                  height={20}
                  className="w-full h-auto object-contain transition-transform group-hover:scale-105"
                />
              </div>
              <span className="font-bold text-sm text-white tracking-tight">
                PJDSC <span className="text-[#ee9577]">&apos;26</span>
              </span>
            </Link>
            <p className="text-xs text-zinc-300/80 leading-relaxed max-w-[220px]">
              Philippine Junior Data Science Challenge 2026. Organized by the UP Data Science Society.
            </p>
            <div className="pt-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] text-zinc-400 font-mono">
                {siteData.event.edition} · {siteData.event.year}
              </span>
            </div>
          </div>

          {/* Column 2: Competition */}
          <div className="space-y-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-[2px] bg-[#6E9E94]" aria-hidden="true" />
              <h4 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">
                Competition
              </h4>
            </div>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <Link href="/primer" className="hover:text-white transition-colors">
                  Event Primer
                </Link>
              </li>
              <li>
                <Link href="/timeline" className="hover:text-white transition-colors">
                  Timeline & Milestones
                </Link>
              </li>
              <li>
                <Link href="/sponsors" className="hover:text-white transition-colors">
                  Sponsors & Partners
                </Link>
              </li>
              <li>
                <a
                  href={siteData.event.githubRepoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span>GitHub Datasets</span>
                  <ArrowUpRight className="w-3 h-3 text-[#ee9577]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Organization */}
          <div className="space-y-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-[2px] bg-[#E38363]" aria-hidden="true" />
              <h4 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">
                Organization
              </h4>
            </div>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <Link href="/organizer" className="hover:text-white transition-colors">
                  UP Data Science Society
                </Link>
              </li>
              <li>
                <a
                  href={siteData.organizer.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Facebook Page
                </a>
              </li>
              <li>
                <a
                  href={siteData.organizer.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={siteData.organizer.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub Org
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources & Help */}
          <div className="space-y-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-[2px] bg-[#7ca5cb]" aria-hidden="true" />
              <h4 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">
                Resources
              </h4>
            </div>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <a
                  href={siteData.event.proposalTemplateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span>Concept Template</span>
                  <ArrowUpRight className="w-3 h-3 text-[#ee9577]" />
                </a>
              </li>
              <li>
                <a
                  href={siteData.event.proposalSubmissionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Proposal Portal
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteData.event.contactEmail}`}
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  <Mail className="w-3 h-3 text-[#ee9577]" />
                  <span>Support Email</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Registration & Fast CTA */}
          <div className="col-span-2 sm:col-span-1 space-y-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-[2px] bg-emerald-400" aria-hidden="true" />
              <h4 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">
                Registration
              </h4>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Early bird begins Sept 21 at 5:00 PM. Open to 40 teams nationwide.
            </p>
            <div className="pt-1">
              <button
                onClick={openRegister}
                className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#E38363] hover:bg-[#d87556] text-zinc-950 text-xs font-bold rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-[#E38363]/20 cursor-pointer"
              >
                <span>Register Team</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Large Decorative Wordmark / Brand Watermark (Inspired by AutoBiz & Sentinels Reference) */}
        <div className="pt-10 pb-6 flex flex-col sm:flex-row items-baseline justify-between gap-4 select-none opacity-85">
          <div className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white/90">
            PJDSC <span className="text-[#ee9577]">2026</span>
          </div>
          <div className="text-xs text-zinc-400 font-medium text-right sm:max-w-[320px]">
            Advancing Public Health Through Data Science & Computational Innovation
          </div>
        </div>

        {/* Bottom Legal & Rights Strip */}
        <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-400">
          <span>
            © {siteData.event.year} {siteData.organizer.name}. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            <span className="text-[#88beaf]">
              Trace the Pattern, Target the Cure
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
