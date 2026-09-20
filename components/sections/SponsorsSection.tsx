"use client";

import React from "react";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { siteData } from "@/lib/siteData";

export default function SponsorsSection() {
  return (
    <section className="space-y-8 py-6">
      {/* Title */}
      <div className="space-y-1">
        <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 block">
          industry & media alliances
        </span>
        <h2 className="text-2xl font-mono font-bold text-foreground">
          Sponsors & Partners
        </h2>
        <p className="text-xs sm:text-sm font-sans text-zinc-600 dark:text-zinc-400">
          Official competition partners and supporters. Agreements are currently being finalized.
        </p>
      </div>

      {/* Status Line */}
      <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
        <span>partner tiers open for sponsorship · placeholders shown below</span>
      </div>

      {/* Tier Breakdowns (Clean, No Panel Backgrounds) */}
      <div className="space-y-8">
        {siteData.sponsors.map((tier, idx) => (
          <div key={idx} className="space-y-3">
            <div className="flex items-baseline justify-between border-b border-zinc-100 dark:border-zinc-900 pb-1.5 text-xs font-mono">
              <span className="font-semibold text-foreground">
                {tier.name}
              </span>
              <span className="text-zinc-500 dark:text-zinc-400">
                {tier.contribution ? `${tier.contribution} tier` : tier.tagline}
              </span>
            </div>

            {/* Minimalist Outline Slots (Zero Filled Background) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono">
              {tier.slots.map((slot, sIdx) => (
                <div
                  key={sIdx}
                  className="py-4 px-3 border border-dashed border-zinc-300 dark:border-zinc-800 text-center text-zinc-400 hover:text-foreground hover:border-zinc-400 transition-colors"
                >
                  <div className="font-medium text-zinc-500 dark:text-zinc-400">
                    {slot.name}
                  </div>
                  <div className="text-[10px] text-zinc-400 dark:text-zinc-600 mt-0.5">
                    [ in finalization ]
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Partnership Proposal CTA */}
      <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 space-y-3">
        <h3 className="text-sm font-mono font-semibold text-foreground uppercase tracking-wider">
          Partner with PJDSC 2026
        </h3>
        <p className="text-xs sm:text-sm font-sans text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Collaborate with UP DSSoc to empower over 600 student data scientists and healthcare analytics innovators across 30+ universities nationwide. Gain direct recruitment visibility, deliver keynote sessions, and mentor future leaders.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-1 text-xs font-mono">
          <a
            href={`mailto:${siteData.event.contactEmail}?subject=PJDSC%202026%20Sponsorship%20Inquiry`}
            className="inline-flex items-center gap-1 font-semibold text-foreground underline underline-offset-4 hover:text-[#234766] dark:hover:text-[#E38363] transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>inquire for sponsorship</span>
          </a>

          <a
            href="/docs/PJDSC 2026 Sponsorship Deck.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-zinc-500 hover:text-foreground transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>sponsorship deck (pdf)</span>
          </a>

          <a
            href="/docs/PJDSC 2026 Partnership Deck (1).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-zinc-500 hover:text-foreground transition-colors"
          >
            <span>media partnership deck (pdf)</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
