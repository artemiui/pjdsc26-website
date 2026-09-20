"use client";

import React from "react";
import Image from "next/image";
import { Mail, Facebook, Linkedin, Github } from "lucide-react";
import { siteData } from "@/lib/siteData";

export default function OrganizerSection() {
  const org = siteData.organizer;

  return (
    <section className="space-y-8 py-6">
      {/* Title */}
      <div className="space-y-1">
        <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 block">
          about the organizer
        </span>
        <h2 className="text-2xl font-mono font-bold text-foreground">
          UP Data Science Society
        </h2>
        <p className="text-xs sm:text-sm font-sans text-zinc-600 dark:text-zinc-400">
          The pioneer data science organization at the University of the Philippines Diliman, founded in 2020.
        </p>
      </div>

      {/* Header Bio */}
      <div className="flex items-start gap-4 pt-2">
        <div className="w-14 h-14 rounded-md border border-zinc-200 dark:border-zinc-800 p-1.5 shrink-0 flex items-center justify-center">
          <Image
            src="/assets/logos-ver2026/up dssoc/updssoclogoicon.png"
            alt="UP DSSoc Icon"
            width={56}
            height={56}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h3 className="font-mono font-semibold text-base text-foreground">
              {org.name}
            </h3>
            <span className="text-xs font-mono text-zinc-400">({org.acronym})</span>
          </div>
          <p className="text-xs font-sans text-zinc-500 dark:text-zinc-400">
            {org.institution} · Core values: Purposeful Learning, Community for Innovation, Utak at Puso
          </p>

          <div className="flex items-center gap-3 pt-1 text-xs font-mono text-zinc-500">
            <a
              href={`mailto:${org.socialLinks.email}`}
              className="hover:text-foreground transition-colors inline-flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>email</span>
            </a>
            <a
              href={org.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              facebook
            </a>
            <a
              href={org.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              linkedin
            </a>
            <a
              href={org.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              github
            </a>
          </div>
        </div>
      </div>

      {/* Narrative */}
      <div className="text-xs sm:text-sm font-sans text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-3 pt-2">
        <p>{org.description}</p>
      </div>

      {/* Vision & Mission */}
      <div className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
        <div className="space-y-1">
          <h4 className="text-xs font-mono font-semibold text-zinc-500 uppercase tracking-wider">
            Vision
          </h4>
          <p className="text-xs sm:text-sm font-sans text-zinc-700 dark:text-zinc-300 leading-relaxed">
            {org.vision}
          </p>
        </div>

        <div className="space-y-1 pt-2">
          <h4 className="text-xs font-mono font-semibold text-zinc-500 uppercase tracking-wider">
            Mission
          </h4>
          <p className="text-xs sm:text-sm font-sans text-zinc-700 dark:text-zinc-300 leading-relaxed">
            {org.mission}
          </p>
        </div>
      </div>

      {/* Core Values (Clean List) */}
      <div className="space-y-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
        <h4 className="text-xs font-mono font-semibold text-zinc-500 uppercase tracking-wider">
          Core Values
        </h4>
        <div className="space-y-3 pl-1 border-l-2 border-zinc-200 dark:border-zinc-800 ml-1">
          {org.coreValues.map((val, idx) => (
            <div key={idx} className="relative pl-5 space-y-0.5">
              <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-100" />
              <h5 className="font-mono font-medium text-xs text-foreground">
                {val.title}
              </h5>
              <p className="text-xs font-sans text-zinc-600 dark:text-zinc-400">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Impact Stats */}
      <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
          {siteData.impactStats.map((st, i) => (
            <div key={i} className="space-y-0.5">
              <div className="text-lg font-bold text-foreground">
                {st.value}
              </div>
              <div className="text-zinc-500 dark:text-zinc-400 text-[11px]">
                {st.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Past Iterations */}
      <div className="space-y-2 pt-4 border-t border-zinc-200 dark:border-zinc-800">
        <h4 className="text-xs font-mono font-semibold text-zinc-500 uppercase tracking-wider">
          Past Iterations (2021 – 2025)
        </h4>
        <div className="divide-y divide-zinc-100 dark:divide-zinc-900 text-xs font-mono">
          {org.pastIterations.map((it) => (
            <div key={it.year} className="py-2 flex items-baseline justify-between">
              <span className="font-semibold text-foreground">PJDSC {it.year}</span>
              <span className="text-zinc-500 dark:text-zinc-400 font-sans text-right">
                {it.theme}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
