"use client";

import React from "react";
import Image from "next/image";
import { Mail, Facebook, Linkedin, Github, Sparkles } from "lucide-react";
import { siteData } from "@/lib/siteData";
import AmbientLighting from "@/components/AmbientLighting";

export default function OrganizerSection() {
  const org = siteData.organizer;

  return (
    <section className="relative overflow-hidden pt-28 sm:pt-36 pb-20 sm:pb-28">
      {/* Ambient Radial Glow */}
      <AmbientLighting variant="section" showBeams={false} showNodeWeb={false} />

      <div className="relative z-10 max-w-[1150px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-[#234766]/10 text-[#234766] dark:bg-[#7ca5cb]/15 dark:text-[#7ca5cb] mb-2">
            About the Organizer
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#234766] dark:text-[#7ca5cb] tracking-tight leading-tight">
            UP Data Science Society
          </h2>
          <p className="text-sm sm:text-base text-[#253f56]/85 dark:text-zinc-300 mt-2 leading-relaxed">
            The pioneer data science organization at the University of the Philippines Diliman, founded in 2020.
          </p>
        </div>

        {/* Identity & Overview Bento Card */}
        <div className="p-7 sm:p-9 rounded-3xl border border-black/[0.08] dark:border-white/[0.1] bg-white/80 dark:bg-zinc-900/60 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.03)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] mb-8">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            {/* Logo Container */}
            <div className="w-20 h-20 rounded-2xl bg-white dark:bg-zinc-800 border border-black/[0.08] dark:border-white/[0.1] p-3 shrink-0 flex items-center justify-center shadow-xs">
              <Image
                src="/assets/logos-ver2026/up dssoc/updssoclogoicon.png"
                alt="UP DSSoc Icon"
                width={64}
                height={64}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex-1 space-y-3">
              <div className="flex flex-wrap items-center gap-2.5">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#234766] dark:text-[#7ca5cb]">
                  {org.name}
                </h3>
                <span className="px-2.5 py-0.5 rounded-full bg-black/[0.04] dark:bg-white/[0.08] text-xs font-mono font-bold text-zinc-500 dark:text-zinc-400">
                  {org.acronym}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#6E9E94]/15 text-[#2b5950] dark:bg-[#6E9E94]/20 dark:text-[#88beaf] text-xs font-semibold">
                  Est. {org.founded}
                </span>
              </div>

              <p className="text-sm sm:text-base text-[#2b4458]/85 dark:text-zinc-300 leading-relaxed">
                {org.description}
              </p>

              {/* Social & Contact Logo Buttons (Pill shaped) */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={`mailto:${org.socialLinks.email}`}
                  title={`Email (${org.socialLinks.email})`}
                  aria-label="Email UP Data Science Society"
                  className="w-9 h-9 rounded-full bg-white dark:bg-zinc-800 border border-black/[0.08] dark:border-white/[0.1] flex items-center justify-center text-[#234766] dark:text-[#7ca5cb] hover:border-[#234766] hover:bg-[#234766] hover:text-white dark:hover:bg-[#E38363] dark:hover:text-zinc-950 shadow-xs hover:scale-105 transition-all duration-200"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={org.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                  aria-label="Facebook page"
                  className="w-9 h-9 rounded-full bg-white dark:bg-zinc-800 border border-black/[0.08] dark:border-white/[0.1] flex items-center justify-center text-[#234766] dark:text-[#7ca5cb] hover:border-[#234766] hover:bg-[#234766] hover:text-white dark:hover:bg-[#E38363] dark:hover:text-zinc-950 shadow-xs hover:scale-105 transition-all duration-200"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={org.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  aria-label="LinkedIn profile"
                  className="w-9 h-9 rounded-full bg-white dark:bg-zinc-800 border border-black/[0.08] dark:border-white/[0.1] flex items-center justify-center text-[#234766] dark:text-[#7ca5cb] hover:border-[#234766] hover:bg-[#234766] hover:text-white dark:hover:bg-[#E38363] dark:hover:text-zinc-950 shadow-xs hover:scale-105 transition-all duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={org.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  aria-label="GitHub organization"
                  className="w-9 h-9 rounded-full bg-white dark:bg-zinc-800 border border-black/[0.08] dark:border-white/[0.1] flex items-center justify-center text-[#234766] dark:text-[#7ca5cb] hover:border-[#234766] hover:bg-[#234766] hover:text-white dark:hover:bg-[#E38363] dark:hover:text-zinc-950 shadow-xs hover:scale-105 transition-all duration-200"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission (2 Bento Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="p-7 sm:p-8 rounded-3xl border border-black/[0.08] dark:border-white/[0.1] bg-white/80 dark:bg-zinc-900/60 backdrop-blur-sm shadow-xs hover:-translate-y-1 transition-all duration-200">
            <span className="inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-wider bg-[#234766]/10 text-[#234766] dark:bg-[#7ca5cb]/15 dark:text-[#7ca5cb] rounded-full mb-3">
              Vision
            </span>
            <h4 className="text-xl font-bold text-[#234766] dark:text-[#f3f6f8] mb-2">Our Vision</h4>
            <p className="text-sm text-[#2b4458]/85 dark:text-zinc-300 leading-relaxed">
              {org.vision}
            </p>
          </div>

          <div className="p-7 sm:p-8 rounded-3xl border border-black/[0.08] dark:border-white/[0.1] bg-white/80 dark:bg-zinc-900/60 backdrop-blur-sm shadow-xs hover:-translate-y-1 transition-all duration-200">
            <span className="inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-wider bg-[#E38363]/15 text-[#c45a38] dark:bg-[#E38363]/20 dark:text-[#ee9577] rounded-full mb-3">
              Mission
            </span>
            <h4 className="text-xl font-bold text-[#234766] dark:text-[#f3f6f8] mb-2">Our Mission</h4>
            <p className="text-sm text-[#2b4458]/85 dark:text-zinc-300 leading-relaxed">
              {org.mission}
            </p>
          </div>
        </div>

        {/* Core Values (3 Bento Cards) */}
        <div>
          <div className="mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#234766] dark:text-[#88beaf]">
              Core Values
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {org.coreValues.map((val, idx) => (
              <div
                key={idx}
                className="group p-6 sm:p-7 rounded-3xl border border-black/[0.08] dark:border-white/[0.1] bg-white/80 dark:bg-zinc-900/60 backdrop-blur-sm shadow-xs hover:-translate-y-1 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="w-7 h-7 rounded-full bg-black/[0.03] dark:bg-white/[0.06] text-xs font-mono font-bold flex items-center justify-center text-zinc-400">
                    0{idx + 1}
                  </span>
                  <span className="text-zinc-300 group-hover:text-[#6E9E94] transition-colors">↗</span>
                </div>
                <h5 className="font-extrabold text-base text-[#234766] dark:text-[#f3f6f8] mb-2 group-hover:text-[#6E9E94] dark:group-hover:text-[#ee9577] transition-colors">
                  {val.title}
                </h5>
                <p className="text-xs sm:text-sm text-[#2b4458]/80 dark:text-zinc-400 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
