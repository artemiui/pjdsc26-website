"use client";

import React from "react";
import Image from "next/image";
import { Mail, Facebook, Linkedin, Github } from "lucide-react";
import { siteData } from "@/lib/siteData";

export default function OrganizerSection() {
  const org = siteData.organizer;

  return (
    <section>
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8 py-14 sm:py-20">
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#234766] dark:text-[#88beaf]">
            About the Organizer
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#234766] dark:text-[#7ca5cb] leading-tight mt-2">
            UP Data Science Society
          </h2>
          <p className="text-sm text-[#253f56]/85 dark:text-zinc-300 mt-2">
            The pioneer data science organization at the University of the Philippines Diliman, founded in 2020.
          </p>
        </div>

        {/* Identity Row */}
        <div className="flex items-start gap-5 mb-8 p-5 sm:p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/20">
          <div className="w-16 h-16 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 p-2 shrink-0 flex items-center justify-center">
            <Image
              src="/assets/logos-ver2026/up dssoc/updssoclogoicon.png"
              alt="UP DSSoc Icon"
              width={56}
              height={56}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-bold text-[#234766] dark:text-[#7ca5cb]">{org.name}</h3>
              <span className="text-xs text-zinc-400">({org.acronym})</span>
            </div>
            <p className="text-sm text-[#2b4458]/85 dark:text-zinc-300 leading-relaxed">
              {org.description}
            </p>
            {/* Social & Contact Logo Buttons */}
            <div className="flex items-center gap-2.5 mt-4">
              <a
                href={`mailto:${org.socialLinks.email}`}
                title={`Email (${org.socialLinks.email})`}
                aria-label="Email UP Data Science Society"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-[#234766] dark:text-[#7ca5cb] hover:border-[#234766] dark:hover:border-[#E38363] hover:text-[#E38363] dark:hover:text-[#E38363] hover:shadow-xs hover:scale-105 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={org.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                aria-label="Facebook page"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-[#234766] dark:text-[#7ca5cb] hover:border-[#234766] dark:hover:border-[#E38363] hover:text-[#E38363] dark:hover:text-[#E38363] hover:shadow-xs hover:scale-105 transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={org.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                aria-label="LinkedIn profile"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-[#234766] dark:text-[#7ca5cb] hover:border-[#234766] dark:hover:border-[#E38363] hover:text-[#E38363] dark:hover:text-[#E38363] hover:shadow-xs hover:scale-105 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={org.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                aria-label="GitHub organization"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-[#234766] dark:text-[#7ca5cb] hover:border-[#234766] dark:hover:border-[#E38363] hover:text-[#E38363] dark:hover:text-[#E38363] hover:shadow-xs hover:scale-105 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <h4 className="text-xs font-bold text-[#234766] dark:text-[#88beaf] uppercase tracking-wider mb-2">Vision</h4>
            <p className="text-sm text-[#2b4458]/85 dark:text-zinc-300 leading-relaxed">{org.vision}</p>
          </div>
          <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <h4 className="text-xs font-bold text-[#E38363] uppercase tracking-wider mb-2">Mission</h4>
            <p className="text-sm text-[#2b4458]/85 dark:text-zinc-300 leading-relaxed">{org.mission}</p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-10">
          <h4 className="text-xs font-bold text-[#234766] dark:text-[#88beaf] uppercase tracking-wider mb-4">Core Values</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {org.coreValues.map((val, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-[#234766]/20 dark:hover:border-[#6E9E94]/20 transition-colors">
                <h5 className="font-bold text-sm text-[#234766] dark:text-[#f3f6f8] mb-1">{val.title}</h5>
                <p className="text-xs text-[#2b4458]/80 dark:text-zinc-400 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
