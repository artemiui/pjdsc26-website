"use client";

import React from "react";
import Image from "next/image";
import { Mail, Sparkles } from "lucide-react";
import { siteData } from "@/lib/siteData";
import AmbientLighting from "@/components/AmbientLighting";

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
            const isOfficialPartners = tier.name === "Official Partners";

            return (
              <div
                key={idx}
                className="p-7 sm:p-9 rounded-3xl border border-black/[0.08] dark:border-white/[0.1] bg-white/80 dark:bg-zinc-900/60 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.03)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)]"
              >
                {/* Tier Title Bar */}
                <div className="mb-6 pb-4 border-b border-black/[0.06] dark:border-white/[0.08]">
                  <h3 className="font-extrabold text-xl sm:text-2xl text-[#234766] dark:text-[#f3f6f8]">
                    {tier.name}
                  </h3>
                </div>

                {/* Partners Bento Grid */}
                <div
                  className={`grid ${
                    isOfficialPartners
                      ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5"
                      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
                  }`}
                >
                  {tier.slots.map((slot, sIdx) => (
                    <div
                      key={sIdx}
                      className="group relative p-5 sm:p-6 rounded-2xl border border-black/[0.06] dark:border-white/[0.08] bg-white dark:bg-zinc-800/70 hover:border-[#234766]/30 dark:hover:border-[#6E9E94]/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
                    >
                      {/* Top directional indicator */}
                      <div className="flex justify-end mb-3 text-xs">
                        <span className="text-zinc-300 dark:text-zinc-600 group-hover:text-[#6E9E94] dark:group-hover:text-[#88beaf] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-sm font-bold">
                          ↗
                        </span>
                      </div>

                      {/* Prominent Logo Showcase Container (fits according to aspect ratio) */}
                      <div
                        className={`w-full ${
                          isOfficialPartners ? "h-24 sm:h-28" : "h-32 sm:h-36"
                        } rounded-xl bg-white dark:bg-white/[0.06] p-4 flex items-center justify-center mb-4 border border-black/[0.04] dark:border-white/[0.06] shadow-xs group-hover:border-black/[0.08] dark:group-hover:border-white/[0.12] transition-colors`}
                      >
                        {slot.logo ? (
                          <div className="relative w-full h-full">
                            <Image
                              src={slot.logo}
                              alt={slot.name}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-contain"
                            />
                          </div>
                        ) : (
                          <span className="text-xs font-semibold text-zinc-400">
                            {slot.name}
                          </span>
                        )}
                      </div>

                      {/* Partner Name */}
                      <div className="pt-1">
                        <h4 className="font-bold text-sm sm:text-base text-[#142433] dark:text-[#f3f6f8] group-hover:text-[#234766] dark:group-hover:text-[#7ca5cb] transition-colors leading-snug">
                          {slot.name}
                        </h4>
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
