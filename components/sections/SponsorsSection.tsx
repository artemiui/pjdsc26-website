"use client";

import React from "react";
import { Mail, Clock } from "lucide-react";
import { siteData } from "@/lib/siteData";

const tierColors: Record<string, string> = {
  "Co-Presented By": "border-l-[#E38363]",
  "In Cooperation With": "border-l-[#234766]",
  "Silver Sponsors": "border-l-[#6E9E94]",
  "Bronze Sponsors": "border-l-zinc-400",
  "Official Media Partners": "border-l-zinc-300",
};

export default function SponsorsSection() {
  return (
    <section className="bg-[#F6F3EB]/60">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8 py-14 sm:py-20">
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#6E9E94]">
            Partnerships
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#234766] leading-tight mt-2">
            Sponsors & Partners
          </h2>
          <div className="flex items-center gap-2 mt-3">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <p className="text-sm text-[#253f56]/85">
              Partner tiers are open — agreements are being finalized.
            </p>
          </div>
        </div>

        {/* Sponsor Tiers with "Still Being Finalized" Overlay */}
        <div className="relative rounded-2xl overflow-hidden p-1">
          {/* Muted background sponsor tiers */}
          <div className="space-y-6 opacity-35 blur-[1.5px] select-none pointer-events-none" aria-hidden="true">
            {siteData.sponsors.map((tier, idx) => (
              <div
                key={idx}
                className={`border-l-4 ${tierColors[tier.name] || "border-l-zinc-300"} pl-5 sm:pl-6 py-1`}
              >
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="font-bold text-[#234766]">{tier.name}</h3>
                  <span className="text-xs text-zinc-500 font-medium">
                    {tier.contribution ? `${tier.contribution} tier` : tier.tagline}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                  {tier.slots.map((slot, sIdx) => (
                    <div
                      key={sIdx}
                      className="py-6 px-4 rounded-lg border border-dashed border-zinc-300 text-center bg-white/40"
                    >
                      <div className="text-xs text-[#234766] font-medium">
                        {slot.name}
                      </div>
                      <div className="text-[10px] text-zinc-400 mt-1">
                        [ pending ]
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Prominent Overlay Card */}
          <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 bg-[#F6F3EB]/40 backdrop-blur-xs z-10">
            <div className="w-full max-w-lg bg-white border border-zinc-200/90 rounded-2xl p-7 sm:p-9 text-center shadow-xl space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#E38363]/10 text-[#E38363] flex items-center justify-center mx-auto shadow-inner">
                <Clock className="w-6 h-6 animate-pulse" />
              </div>

              <div className="space-y-2">
                <span className="inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-wider bg-[#234766]/10 text-[#234766] rounded-full">
                  Status Notice
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#234766] leading-snug">
                  Sponsors and partners are still being finalized.
                </h3>
                <p className="text-xs sm:text-sm text-[#2b4458]/80 leading-relaxed max-w-md mx-auto">
                  Official partner announcements, co-presenters, and university partners will be published leading up to the competition launch.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={`mailto:${siteData.event.contactEmail}?subject=PJDSC%202026%20Sponsorship%20Inquiry`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#234766] hover:bg-[#1a354c] text-white text-xs font-semibold rounded-xl shadow-xs transition-all hover:scale-105"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Inquire for Sponsorship
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-800/30">
          <h3 className="text-lg font-bold text-[#234766] dark:text-[#7ca5cb] mb-2">
            Partner with PJDSC 2026
          </h3>
          <p className="text-sm text-[#2b4458]/85 dark:text-zinc-300 leading-relaxed max-w-[600px] mb-5">
            Collaborate with UP DSSoc to empower over 600 student data scientists across 30+ universities nationwide. Gain recruitment visibility, deliver keynote sessions, and mentor future leaders.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${siteData.event.contactEmail}?subject=PJDSC%202026%20Sponsorship%20Inquiry`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#234766] dark:bg-[#E38363] text-white dark:text-zinc-900 text-xs font-semibold rounded-md hover:opacity-90 transition-opacity"
            >
              <Mail className="w-3.5 h-3.5" />
              Inquire for Sponsorship
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
