"use client";

import React from "react";
import Image from "next/image";
import { Globe, Mail, Github, Linkedin, Facebook, Heart, Lightbulb, Compass, Award, ExternalLink } from "lucide-react";
import { siteData } from "@/lib/siteData";

export default function OrganizerSection() {
  const org = siteData.organizer;

  return (
    <section id="organizer" className="py-16 sm:py-24 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Steering Committee
            </span>
            <span className="text-[11px] font-mono text-zinc-400">Founded 2020 · UP Diliman</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-zinc-900 dark:text-zinc-100 mt-1">
            About the Organizer: UP Data Science Society
          </h2>
          <p className="text-sm font-sans text-zinc-600 dark:text-zinc-400 mt-2">
            The pioneering university student organization championing data science for social good in the Philippines.
          </p>
        </div>

        {/* Main Bio Card */}
        <div className="p-6 sm:p-8 rounded-xl wireframe-panel bg-white/60 dark:bg-zinc-900/40 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-zinc-200 dark:border-zinc-800">
            {/* UP DSSoc Logo */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center p-2 shrink-0 overflow-hidden shadow-xs">
              <Image
                src="/assets/logos-ver2026/up dssoc/updssoclogoicon.png"
                alt="UP DSSoc Official Icon"
                width={80}
                height={80}
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-sans font-bold text-zinc-950 dark:text-white">
                  {org.name}
                </h3>
                <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950/80 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                  {org.acronym}
                </span>
              </div>
              <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-0.5">
                {org.institution}
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-3 text-xs font-mono">
                <a
                  href={`mailto:${org.socialLinks.email}`}
                  className="inline-flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{org.socialLinks.email}</span>
                </a>
                <a
                  href={org.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  <Facebook className="w-3.5 h-3.5" />
                  <span>Facebook</span>
                </a>
                <a
                  href={org.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={org.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-4 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
            <p>{org.description}</p>
          </div>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="p-5 rounded-lg wireframe-panel bg-white/60 dark:bg-zinc-900/40">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#234766] dark:text-[#88beaf] mb-2 uppercase">
              <Compass className="w-4 h-4" />
              <span>Our Vision</span>
            </div>
            <p className="text-xs font-sans text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {org.vision}
            </p>
          </div>

          <div className="p-5 rounded-lg wireframe-panel bg-white/60 dark:bg-zinc-900/40">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#234766] dark:text-[#88beaf] mb-2 uppercase">
              <Lightbulb className="w-4 h-4" />
              <span>Our Mission</span>
            </div>
            <p className="text-xs font-sans text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {org.mission}
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-8">
          <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">
            Core Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {org.coreValues.map((val, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg wireframe-panel bg-white/40 dark:bg-zinc-900/30"
              >
                <div className="text-xs font-mono font-bold text-[#234766] dark:text-[#E38363] mb-1">
                  {val.title}
                </div>
                <p className="text-[11px] font-sans text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact by the Numbers */}
        <div className="p-5 rounded-lg wireframe-panel bg-white/50 dark:bg-zinc-900/30 mb-8">
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">
            Collective Impact Across Five Iterations
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {siteData.impactStats.map((st, i) => (
              <div key={i}>
                <div className="text-2xl font-mono font-bold text-[#234766] dark:text-[#6E9E94]">
                  {st.value}
                </div>
                <div className="text-xs font-sans text-zinc-600 dark:text-zinc-400 mt-0.5">
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Iterations Archive */}
        <div className="p-5 rounded-lg wireframe-panel bg-white/40 dark:bg-zinc-900/30">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              PJDSC Legacy (2021 – 2025)
            </span>
            <span className="text-[11px] font-mono text-zinc-400">Hall of Editions</span>
          </div>

          <div className="divide-y divide-zinc-200 dark:divide-zinc-800 text-xs font-mono">
            {org.pastIterations.map((it) => (
              <div key={it.year} className="py-2.5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-zinc-900 dark:text-zinc-100">
                    PJDSC {it.year}
                  </span>
                  <span className="text-zinc-500 dark:text-zinc-400 font-sans">
                    {it.theme}
                  </span>
                </div>
                <span className="text-zinc-400 text-[11px]">Archived</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
