"use client";

import React from "react";
import { Mail, Sparkles, Building2, Radio } from "lucide-react";
import { siteData } from "@/lib/siteData";
import AmbientLighting from "@/components/AmbientLighting";

const tierBadgeColors: Record<string, { badge: string; border: string; accent: string }> = {
  "Co-Presented By": {
    badge: "bg-[#E38363]/15 text-[#c45a38] dark:bg-[#E38363]/20 dark:text-[#ee9577]",
    border: "border-l-[#E38363]",
    accent: "text-[#E38363]",
  },
  "In Cooperation With": {
    badge: "bg-[#234766]/10 text-[#234766] dark:bg-[#7ca5cb]/15 dark:text-[#7ca5cb]",
    border: "border-l-[#234766] dark:border-l-[#7ca5cb]",
    accent: "text-[#234766] dark:text-[#7ca5cb]",
  },
  "Also Brought To You By": {
    badge: "bg-[#6E9E94]/15 text-[#2b5950] dark:bg-[#6E9E94]/20 dark:text-[#88beaf]",
    border: "border-l-[#6E9E94]",
    accent: "text-[#6E9E94]",
  },
  "Official Media Partners": {
    badge: "bg-indigo-500/10 text-indigo-700 dark:bg-indigo-400/15 dark:text-indigo-300",
    border: "border-l-indigo-500",
    accent: "text-indigo-500",
  },
};

export default function SponsorsSection() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-36 pb-20 sm:pb-28">
      {/* Ambient Lighting */}
      <AmbientLighting variant="section" showBeams={false} showNodeWeb={false} />

      <div className="relative z-10 max-w-[1150px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-[#6E9E94]/15 text-[#2b5950] dark:bg-[#6E9E94]/20 dark:text-[#88beaf] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Partnerships & Alliances
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#234766] dark:text-[#7ca5cb] tracking-tight leading-tight">
            Sponsors & Partners
          </h2>
          <p className="text-sm sm:text-base text-[#253f56]/85 dark:text-zinc-300 mt-2.5 leading-relaxed">
            Proudly supported by industry pioneers, academic institutions, and student organizations dedicated to advancing Philippine data science and public health analytics.
          </p>
        </div>

        {/* Sponsor Tiers Bento Grid */}
        <div className="space-y-10 sm:space-y-12">
          {siteData.sponsors.map((tier, idx) => {
            const style = tierBadgeColors[tier.name] || {
              badge: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
              border: "border-l-zinc-400",
              accent: "text-zinc-500",
            };

            const isMedia = tier.name === "Official Media Partners";

            return (
              <div
                key={idx}
                className="p-7 sm:p-9 rounded-3xl border border-black/[0.08] dark:border-white/[0.1] bg-white/80 dark:bg-zinc-900/60 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.03)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)]"
              >
                {/* Tier Title Bar */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6 pb-4 border-b border-black/[0.06] dark:border-white/[0.08]">
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${style.badge}`}>
                      {tier.tagline}
                    </span>
                    <h3 className="font-extrabold text-xl sm:text-2xl text-[#234766] dark:text-[#f3f6f8]">
                      {tier.name}
                    </h3>
                  </div>

                  <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                    {tier.slots.length} {tier.slots.length === 1 ? "Partner" : "Partners"}
                  </span>
                </div>

                {/* Partners Bento Grid */}
                <div
                  className={`grid ${
                    isMedia
                      ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5"
                      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
                  }`}
                >
                  {tier.slots.map((slot, sIdx) => (
                    <div
                      key={sIdx}
                      className="group relative p-5 sm:p-6 rounded-2xl border border-black/[0.06] dark:border-white/[0.08] bg-white dark:bg-zinc-800/70 hover:border-[#234766]/30 dark:hover:border-[#6E9E94]/40 hover:-translate-y-1 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                    >
                      {/* Top indicator & category icon */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="w-8 h-8 rounded-full bg-black/[0.03] dark:bg-white/[0.06] flex items-center justify-center text-zinc-400 group-hover:text-[#234766] dark:group-hover:text-[#E38363] transition-colors">
                          {isMedia ? <Radio className="w-3.5 h-3.5" /> : <Building2 className="w-4 h-4" />}
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold">
                          Confirmed
                        </span>
                      </div>

                      {/* Partner Name */}
                      <div>
                        <h4 className="font-bold text-sm sm:text-base text-[#142433] dark:text-[#f3f6f8] group-hover:text-[#234766] dark:group-hover:text-[#7ca5cb] transition-colors leading-snug">
                          {slot.name}
                        </h4>
                      </div>

                      {/* Micro corner indicator */}
                      <div className="mt-4 pt-2 border-t border-black/[0.03] dark:border-white/[0.05] flex items-center justify-between text-[11px] text-zinc-400">
                        <span className="font-mono text-[10px]">PJDSC &apos;26 Partner</span>
                        <span className="text-zinc-300 group-hover:text-[#6E9E94] transition-colors">↗</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Partnership CTA Bento Card */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl border border-black/[0.08] dark:border-white/[0.1] bg-white/80 dark:bg-zinc-900/60 backdrop-blur-sm shadow-xs">
          <span className="inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-wider bg-[#6E9E94]/15 text-[#2b5950] dark:bg-[#6E9E94]/20 dark:text-[#88beaf] rounded-full mb-3">
            Collaborate With Us
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#234766] dark:text-[#7ca5cb] mb-3">
            Partner with PJDSC 2026
          </h3>
          <p className="text-sm text-[#2b4458]/85 dark:text-zinc-300 leading-relaxed max-w-2xl mb-6">
            Collaborate with UP DSSoc to empower over 600 student data scientists across 30+ universities nationwide. Gain recruitment visibility, deliver keynote sessions, and mentor future leaders.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${siteData.event.contactEmail}?subject=PJDSC%202026%20Sponsorship%20Inquiry`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#234766] hover:bg-[#1a354c] dark:bg-[#E38363] dark:hover:bg-[#d87556] text-white dark:text-zinc-950 text-xs font-bold rounded-full shadow-sm transition-all duration-200 hover:scale-105"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Inquire for Sponsorship</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
