"use client";

import React from "react";
import { Download, Mail, ArrowUpRight, Sparkles, Building2 } from "lucide-react";
import { siteData, SponsorTier } from "@/lib/siteData";

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="py-16 sm:py-24 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Industry & Media Alliances
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                Slots Finalizing
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-zinc-900 dark:text-zinc-100 mt-1">
              Sponsors & Partners
            </h2>
            <p className="text-sm font-sans text-zinc-600 dark:text-zinc-400 mt-1">
              Empowering the next generation of data scientists to solve urgent public health challenges.
            </p>
          </div>

          <a
            href="/docs/PJDSC 2026 Sponsorship Deck.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded border border-zinc-300 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 text-xs font-mono text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors shrink-0"
          >
            <Download className="w-3.5 h-3.5 text-zinc-500" />
            <span>Download Sponsorship Deck</span>
          </a>
        </div>

        {/* Notice Banner */}
        <div className="p-4 rounded-lg border border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-900/20 mb-8 text-xs font-mono text-zinc-600 dark:text-zinc-400 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span>Official partner agreements are currently being finalized. Placeholders are shown below.</span>
          </div>
          <span className="hidden sm:inline text-[11px] text-zinc-400">PJDSC '26 Partnerships</span>
        </div>

        {/* Sponsor Tier Grids */}
        <div className="space-y-8">
          {siteData.sponsors.map((tier, idx) => (
            <div key={idx} className="space-y-3">
              <div className="flex items-center justify-between border-b border-zinc-200/80 dark:border-zinc-800 pb-2">
                <div>
                  <span className="text-xs font-mono font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
                    {tier.name}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 ml-2">
                    ({tier.tagline})
                  </span>
                </div>
                {tier.contribution && (
                  <span className="text-xs font-mono font-semibold text-[#234766] dark:text-[#E38363]">
                    {tier.contribution} Tier
                  </span>
                )}
              </div>

              {/* Placeholder Slots */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {tier.slots.map((slot, sIdx) => (
                  <div
                    key={sIdx}
                    className="h-24 sm:h-28 rounded-lg border border-dashed border-zinc-300 dark:border-zinc-700/80 bg-white/40 dark:bg-zinc-900/30 flex flex-col items-center justify-center p-3 text-center transition-colors hover:border-[#234766]/50 dark:hover:border-[#6E9E94]/50 group"
                  >
                    <Building2 className="w-5 h-5 text-zinc-300 dark:text-zinc-600 group-hover:text-zinc-400 transition-colors mb-1.5" />
                    <span className="text-xs font-mono font-medium text-zinc-500 dark:text-zinc-400">
                      {slot.name}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 mt-1">
                      [ Finalizing ]
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Partner With Us CTA Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl wireframe-panel bg-white/60 dark:bg-zinc-900/50 relative overflow-hidden">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-wider text-[#234766] dark:text-[#E38363] font-bold">
              Call for Partnerships
            </span>
            <h3 className="text-xl sm:text-2xl font-sans font-bold text-zinc-900 dark:text-zinc-100 mt-1">
              Partner With PJDSC 2026
            </h3>
            <p className="text-xs sm:text-sm font-sans text-zinc-600 dark:text-zinc-300 mt-2 leading-relaxed">
              Showcase your organization’s dedication to technology, public health analytics, and student innovation. Connect directly with over 600 top data science, AI, and statistics students nationwide.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-xs">
              <a
                href={`mailto:${siteData.event.contactEmail}?subject=PJDSC%202026%20Partnership%20Inquiry`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#234766] text-white hover:bg-[#19344c] dark:bg-[#E38363] dark:text-zinc-950 dark:hover:bg-[#d67252] transition-colors font-medium shadow-xs"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact Partnerships Team</span>
              </a>

              <a
                href="/docs/PJDSC 2026 Partnership Deck (1).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <span>Media Partner Deck</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
