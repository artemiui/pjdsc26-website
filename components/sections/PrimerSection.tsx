"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, ArrowUpRight, Github, CheckCircle2, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/lib/siteData";
import AmbientLighting from "@/components/AmbientLighting";

const tabs = [
  { id: "mechanics" as const, label: "Eligibility & Rules" },
  { id: "schema" as const, label: "Registration" },
  { id: "stages" as const, label: "Stages" },
  { id: "criteria" as const, label: "Judging" },
];

export default function PrimerSection() {
  const [activeTab, setActiveTab] = useState<"mechanics" | "schema" | "stages" | "criteria">("mechanics");
  const [criteriaType, setCriteriaType] = useState<"elimination" | "finals">("elimination");

  return (
    <section className="relative overflow-hidden pt-28 sm:pt-36 pb-20 sm:pb-28">
      {/* Ambient Radial Glow & Beams */}
      <AmbientLighting variant="section" showBeams={false} showNodeWeb={false} />

      <div className="relative z-10 max-w-[1150px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-[#E38363]/15 text-[#c45a38] dark:bg-[#E38363]/20 dark:text-[#ee9577] mb-2">
            Competition Guide
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#234766] dark:text-[#7ca5cb] tracking-tight leading-tight">
            Event Primer & Mechanics
          </h2>
          <p className="text-sm sm:text-base text-[#253f56]/85 dark:text-zinc-300 mt-3 leading-relaxed">
            Everything you need to know — eligibility, registration flow, competition stages, and how your work is evaluated.
          </p>
        </div>

        {/* Floating Pill Tab Navigation */}
        <div className="flex flex-wrap gap-1 mb-10 p-1.5 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md rounded-full border border-black/[0.08] dark:border-white/[0.1] shadow-xs w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 text-xs font-bold rounded-full transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[#234766] text-white dark:bg-[#7ca5cb] dark:text-zinc-950 shadow-sm"
                  : "text-[#234766]/70 dark:text-zinc-400 hover:text-[#234766] dark:hover:text-[#f3f6f8] hover:bg-black/[0.03] dark:hover:bg-white/[0.05]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {/* TAB 1: ELIGIBILITY & RULES (BENTO 4-CARD GRID) */}
            {activeTab === "mechanics" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Team Eligibility",
                    badge: "Composition",
                    items: [
                      "Teams of **3 to 5 members** from any accredited Philippine institution.",
                      "Open to **senior high school** and **undergraduate / tertiary** students.",
                      "**Cross-university** and inter-regional teams are welcome.",
                      "Students on **Leave of Absence (LOA)** remain eligible.",
                    ],
                  },
                  {
                    title: "Capacity & Quotas",
                    badge: "Demographics",
                    items: [
                      "Maximum **40 teams nationwide** (first-come, first-served).",
                      "**Early Registration:** 5 slots per region (NCR, Luzon, Visayas, Mindanao).",
                      "**Regular Registration:** Open to all demographics.",
                      "At least one representative must attend the **Virtual Launch (Oct 10)**.",
                    ],
                  },
                  {
                    title: "Registration Fees",
                    badge: "Pricing",
                    items: [
                      "**Early Bird:** ₱300.00 per member (Sept 21–25).",
                      "**Regular:** ₱350.00 per member (Sept 28–30).",
                      "Covers workshops, mentorship, evaluation, and event access.",
                      "**Strict no-refund policy** once slots are secured.",
                    ],
                  },
                  {
                    title: "Important Notes",
                    badge: "Guidelines",
                    items: [
                      "UP DSSoc members may compete (excluding ExecBoard & PJDSC core).",
                      "Proof of enrollment may be requested during verification.",
                      "Unpaid slots are forfeited and released to the waitlist.",
                    ],
                  },
                ].map((block, idx) => (
                  <div
                    key={idx}
                    className="p-7 sm:p-8 rounded-3xl border border-black/[0.08] dark:border-white/[0.1] bg-white/80 dark:bg-zinc-900/60 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.03)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#234766]/10 text-[#234766] dark:bg-[#7ca5cb]/15 dark:text-[#7ca5cb]">
                        {block.badge}
                      </span>
                      <span className="text-xs text-zinc-400 font-mono">0{idx + 1}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#234766] dark:text-[#f3f6f8] mb-4">
                      {block.title}
                    </h3>

                    <ul className="space-y-3">
                      {block.items.map((item, i) => (
                        <li key={i} className="flex gap-3 text-sm text-[#2b4458]/85 dark:text-zinc-300 leading-relaxed">
                          <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[#E38363] mt-2" />
                          <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#234766] dark:text-[#f3f6f8] font-bold">$1</strong>') }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 2: REGISTRATION SCHEMA */}
            {activeTab === "schema" && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[
                    {
                      step: "01",
                      title: "Early Registration",
                      date: "Sept 21–25, 2026",
                      detail: "Regional quota (5 per region). Early bird fee ₱300/pax. Opens Sept 21 at 5:00 PM.",
                    },
                    {
                      step: "02",
                      title: "Regular Registration",
                      date: "Sept 28–30, 2026",
                      detail: "Open demographic, first-come first-served until 40-team cap. Standard fee ₱350/pax.",
                    },
                    {
                      step: "03",
                      title: "Verification",
                      date: "Upon payment",
                      detail: "Fee receipt validated, team officially confirmed. Unpaid slots forfeited to waitlist.",
                    },
                  ].map((s, i) => (
                    <div
                      key={i}
                      className="group relative p-7 rounded-3xl border border-black/[0.08] dark:border-white/[0.1] bg-white/80 dark:bg-zinc-900/60 backdrop-blur-sm shadow-xs hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="w-8 h-8 rounded-full bg-[#234766]/10 dark:bg-[#7ca5cb]/15 text-[#234766] dark:text-[#7ca5cb] font-bold text-xs flex items-center justify-center font-mono">
                          {s.step}
                        </span>
                        <span className="text-zinc-400 group-hover:text-[#234766] dark:group-hover:text-[#E38363] transition-colors">↗</span>
                      </div>
                      <h4 className="font-bold text-base text-[#234766] dark:text-[#7ca5cb]">{s.title}</h4>
                      <span className="inline-block text-xs text-[#E38363] font-bold mt-1">
                        {s.date}
                      </span>
                      <p className="text-xs sm:text-sm text-[#2b4458]/80 dark:text-zinc-400 mt-2.5 leading-relaxed">
                        {s.detail}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Schema Image Preview Card */}
                <div className="rounded-3xl border border-black/[0.08] dark:border-white/[0.1] bg-white/90 dark:bg-zinc-900/80 backdrop-blur-md overflow-hidden shadow-sm">
                  <div className="flex items-center justify-between px-6 py-3.5 bg-black/[0.02] dark:bg-white/[0.03] border-b border-black/[0.06] dark:border-white/[0.08]">
                    <span className="text-xs font-bold text-[#234766] dark:text-[#88beaf]">Registration Schema Workflow</span>
                    <a
                      href="/docs/Early Registration (1).png"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-zinc-500 hover:text-[#234766] dark:hover:text-[#E38363] transition-colors inline-flex items-center gap-1 font-semibold"
                    >
                      <span>Full image</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <div className="p-6 flex justify-center bg-white dark:bg-zinc-950">
                    <Image
                      src="/docs/Early Registration (1).png"
                      alt="Registration Schema"
                      width={720}
                      height={380}
                      className="w-full max-h-80 object-contain"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: STAGES */}
            {activeTab === "stages" && (
              <div className="space-y-5">
                {siteData.stages.map((stg, i) => (
                  <div
                    key={stg.id}
                    className="p-7 sm:p-8 rounded-3xl border border-black/[0.08] dark:border-white/[0.1] bg-white/80 dark:bg-zinc-900/60 backdrop-blur-sm shadow-xs hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="w-9 h-9 rounded-2xl bg-[#234766]/10 dark:bg-[#6E9E94]/15 text-[#234766] dark:text-[#88beaf] text-xs font-bold flex items-center justify-center font-mono">
                          0{i + 1}
                        </span>
                        <h4 className="font-extrabold text-lg text-[#234766] dark:text-[#7ca5cb]">{stg.name}</h4>
                      </div>
                      <div className="flex items-center gap-3 text-xs">
                        <span className="px-3 py-1 rounded-full bg-[#E38363]/15 text-[#c45a38] dark:bg-[#E38363]/20 dark:text-[#ee9577] font-bold">
                          {stg.date}
                        </span>
                        <span className="text-zinc-300 dark:text-zinc-700">·</span>
                        <span className="text-[#234766] dark:text-[#88beaf] font-semibold">{stg.deliverable}</span>
                      </div>
                    </div>
                    <p className="text-sm text-[#2b4458]/85 dark:text-zinc-300 leading-relaxed mb-4">
                      {stg.summary}
                    </p>
                    <div className="pt-3 border-t border-black/[0.05] dark:border-white/[0.06]">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block mb-2">Key Requirements:</span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {stg.requirements.map((req, rIdx) => (
                          <li key={rIdx} className="flex gap-2 text-xs text-[#2b4458]/80 dark:text-zinc-400">
                            <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[#6E9E94] mt-1.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 4: JUDGING CRITERIA */}
            {activeTab === "criteria" && (
              <div className="space-y-6">
                <div className="flex gap-1.5 p-1.5 bg-white/80 dark:bg-zinc-900/80 rounded-full border border-black/[0.08] dark:border-white/[0.1] shadow-xs w-fit">
                  <button
                    onClick={() => setCriteriaType("elimination")}
                    className={`px-5 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                      criteriaType === "elimination"
                        ? "bg-[#234766] text-white dark:bg-[#7ca5cb] dark:text-zinc-950 shadow-sm"
                        : "text-[#234766]/70 dark:text-zinc-400 hover:text-[#234766] dark:hover:text-[#f3f6f8]"
                    }`}
                  >
                    Elimination Round
                  </button>
                  <button
                    onClick={() => setCriteriaType("finals")}
                    className={`px-5 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                      criteriaType === "finals"
                        ? "bg-[#234766] text-white dark:bg-[#7ca5cb] dark:text-zinc-950 shadow-sm"
                        : "text-[#234766]/70 dark:text-zinc-400 hover:text-[#234766] dark:hover:text-[#f3f6f8]"
                    }`}
                  >
                    Final Round
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {(criteriaType === "elimination" ? siteData.criteriaElimination : siteData.criteriaFinals).map(
                    (crit, i) => (
                      <div
                        key={i}
                        className="p-6 sm:p-7 rounded-3xl border border-black/[0.08] dark:border-white/[0.1] bg-white/80 dark:bg-zinc-900/60 backdrop-blur-sm shadow-xs hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <h4 className="text-base font-bold text-[#234766] dark:text-[#7ca5cb] leading-snug">
                              {crit.category}
                            </h4>
                            <span className="px-3 py-1 rounded-full bg-[#E38363]/15 text-[#c45a38] dark:bg-[#E38363]/20 dark:text-[#ee9577] text-xs font-extrabold font-mono shrink-0">
                              {crit.weight}
                            </span>
                          </div>
                          <p className="text-xs text-[#2b4458]/75 dark:text-zinc-400 mb-3">{crit.description}</p>
                          <ul className="space-y-1.5">
                            {crit.points.map((pt, pIdx) => (
                              <li key={pIdx} className="flex gap-2 text-xs text-[#2b4458]/85 dark:text-zinc-300">
                                <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[#6E9E94] mt-1.5" />
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Resource Links Fast Strip */}
        <div className="mt-12 pt-6 border-t border-black/[0.08] dark:border-white/[0.1] flex flex-wrap items-center gap-5 text-xs">
          <a
            href={siteData.event.proposalTemplateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#2b4458]/80 dark:text-zinc-300 hover:text-[#234766] dark:hover:text-[#E38363] transition-colors font-semibold"
          >
            <span>Concept Proposal Template</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#E38363]" />
          </a>
          <span className="text-zinc-300 dark:text-zinc-700">·</span>
          <a
            href={siteData.event.githubRepoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#2b4458]/80 dark:text-zinc-300 hover:text-[#234766] dark:hover:text-[#E38363] transition-colors font-semibold"
          >
            <Github className="w-3.5 h-3.5 text-[#234766] dark:text-[#7ca5cb]" />
            <span>Official Datasets Repository (GitHub)</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#E38363]" />
          </a>
        </div>
      </div>
    </section>
  );
}
