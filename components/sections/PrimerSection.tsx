"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, ArrowUpRight, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/lib/siteData";

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
    <section className="bg-zinc-50/50 dark:bg-zinc-900/20">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8 py-14 sm:py-20">
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#E38363]">
            Competition Guide
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#234766] dark:text-[#7ca5cb] leading-tight mt-2">
            Event Primer & Mechanics
          </h2>
          <p className="text-sm text-[#253f56]/85 dark:text-zinc-300 mt-2 max-w-[560px]">
            Everything you need to know — eligibility, registration flow, competition stages, and how your work is evaluated.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-1 mb-8 p-1 bg-zinc-100 dark:bg-zinc-800/50 rounded-lg w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-xs font-medium rounded-md transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-white dark:bg-zinc-700 text-[#234766] dark:text-[#E38363] shadow-sm font-semibold"
                  : "text-[#234766]/70 dark:text-zinc-400 hover:text-[#234766] dark:hover:text-[#f3f6f8]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {/* TAB 1: ELIGIBILITY */}
            {activeTab === "mechanics" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {[
                  {
                    title: "Team Eligibility",
                    items: [
                      "Teams of **3 to 5 members** from any accredited Philippine institution.",
                      "Open to **senior high school** and **undergraduate / tertiary** students.",
                      "**Cross-university** and inter-regional teams are welcome.",
                      "Students on **Leave of Absence (LOA)** remain eligible.",
                    ],
                  },
                  {
                    title: "Capacity & Quotas",
                    items: [
                      "Maximum **40 teams nationwide** (first-come, first-served).",
                      "**Early Registration:** 5 slots per region (NCR, Luzon, Visayas, Mindanao).",
                      "**Regular Registration:** Open to all demographics.",
                      "At least one representative must attend the **Virtual Launch (Oct 10)**.",
                    ],
                  },
                  {
                    title: "Registration Fees",
                    items: [
                      "**Early Bird:** ₱300.00 per member (Sept 21–25).",
                      "**Regular:** ₱350.00 per member (Sept 28–30).",
                      "Covers workshops, mentorship, evaluation, and event access.",
                      "**Strict no-refund policy** once slots are secured.",
                    ],
                  },
                  {
                    title: "Important Notes",
                    items: [
                      "UP DSSoc members may compete (excluding ExecBoard & PJDSC core).",
                      "Proof of enrollment may be requested during verification.",
                      "Unpaid slots are forfeited and released to the waitlist.",
                    ],
                  },
                ].map((block, idx) => (
                  <div key={idx} className="space-y-3">
                    <h3 className="text-sm font-bold text-[#234766] dark:text-[#88beaf]">
                      {block.title}
                    </h3>
                    <ul className="space-y-2">
                      {block.items.map((item, i) => (
                        <li key={i} className="flex gap-2.5 text-sm text-[#2b4458]/85 dark:text-zinc-300 leading-relaxed">
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
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
                      className="relative p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-[#234766]/30 dark:hover:border-[#6E9E94]/30 transition-colors"
                    >
                      <span className="text-3xl font-extrabold text-[#234766]/10 dark:text-[#6E9E94]/15 absolute top-3 right-4 select-none">
                        {s.step}
                      </span>
                      <div className="relative">
                        <h4 className="font-bold text-sm text-[#234766] dark:text-[#7ca5cb]">{s.title}</h4>
                        <span className="text-xs text-[#E38363] font-semibold mt-1 block">
                          {s.date}
                        </span>
                        <p className="text-xs text-[#2b4458]/80 dark:text-zinc-400 mt-2 leading-relaxed">
                          {s.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Schema Image */}
                <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-50 dark:bg-zinc-800/50 border-b border-zinc-200 dark:border-zinc-800">
                    <span className="text-xs font-semibold text-[#234766] dark:text-[#88beaf]">Registration Schema</span>
                    <a
                      href="/docs/Early Registration (1).png"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-zinc-500 hover:text-[#234766] dark:hover:text-[#E38363] transition-colors inline-flex items-center gap-1 font-medium"
                    >
                      Full image <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <div className="p-4 flex justify-center bg-white dark:bg-zinc-900">
                    <Image
                      src="/docs/Early Registration (1).png"
                      alt="Registration Schema"
                      width={680}
                      height={360}
                      className="w-full max-h-72 object-contain"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: STAGES */}
            {activeTab === "stages" && (
              <div className="space-y-4">
                {siteData.stages.map((stg, i) => (
                  <div
                    key={stg.id}
                    className="p-5 sm:p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-[#234766]/20 dark:hover:border-[#6E9E94]/20 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-lg bg-[#234766]/10 dark:bg-[#6E9E94]/15 text-[#234766] dark:text-[#88beaf] text-xs font-bold flex items-center justify-center">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h4 className="font-bold text-[#234766] dark:text-[#7ca5cb]">{stg.name}</h4>
                      </div>
                      <div className="flex items-center gap-3 text-xs">
                        <span className="text-[#E38363] font-bold">{stg.date}</span>
                        <span className="text-zinc-400">·</span>
                        <span className="text-[#234766] dark:text-[#88beaf] font-medium">{stg.deliverable}</span>
                      </div>
                    </div>
                    <p className="text-sm text-[#2b4458]/85 dark:text-zinc-300 leading-relaxed mb-3">
                      {stg.summary}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {stg.requirements.map((req, rIdx) => (
                        <li key={rIdx} className="flex gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                          <span className="shrink-0 w-1 h-1 rounded-full bg-brand-coral mt-1.5" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 4: JUDGING CRITERIA */}
            {activeTab === "criteria" && (
              <div className="space-y-6">
                <div className="flex gap-1 p-1 bg-zinc-100 dark:bg-zinc-800/50 rounded-lg w-fit">
                  <button
                    onClick={() => setCriteriaType("elimination")}
                    className={`px-4 py-1.5 text-xs rounded-md transition-all cursor-pointer ${
                      criteriaType === "elimination"
                        ? "bg-white dark:bg-zinc-700 text-[#234766] dark:text-[#E38363] shadow-sm font-semibold"
                        : "text-[#234766]/70 dark:text-zinc-400 hover:text-[#234766] dark:hover:text-[#f3f6f8]"
                    }`}
                  >
                    Elimination Round
                  </button>
                  <button
                    onClick={() => setCriteriaType("finals")}
                    className={`px-4 py-1.5 text-xs rounded-md transition-all cursor-pointer ${
                      criteriaType === "finals"
                        ? "bg-white dark:bg-zinc-700 text-[#234766] dark:text-[#E38363] shadow-sm font-semibold"
                        : "text-[#234766]/70 dark:text-zinc-400 hover:text-[#234766] dark:hover:text-[#f3f6f8]"
                    }`}
                  >
                    Final Round
                  </button>
                </div>

                <div className="space-y-3">
                  {(criteriaType === "elimination" ? siteData.criteriaElimination : siteData.criteriaFinals).map(
                    (crit, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-sm font-bold text-[#234766] dark:text-[#7ca5cb]">{crit.category}</h4>
                          <span className="text-sm font-bold text-[#E38363] dark:text-[#ee9577]">
                            {crit.weight}
                          </span>
                        </div>
                        <p className="text-xs text-[#2b4458]/80 dark:text-zinc-400 mb-2">{crit.description}</p>
                        <ul className="space-y-1">
                          {crit.points.map((pt, pIdx) => (
                            <li key={pIdx} className="flex gap-2 text-xs text-[#2b4458]/85 dark:text-zinc-300">
                              <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[#6E9E94] mt-1.5" />
                              {pt}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Resource Links */}
        <div className="mt-10 pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center gap-4 text-xs">
          <a
            href={siteData.event.proposalTemplateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#2b4458]/75 dark:text-zinc-400 hover:text-[#234766] dark:hover:text-[#E38363] transition-colors font-medium"
          >
            Concept Proposal Template
            <ArrowUpRight className="w-3.5 h-3.5 text-[#E38363]" />
          </a>
          <span className="text-zinc-300 dark:text-zinc-700">·</span>
          <a
            href={siteData.event.githubRepoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#2b4458]/75 dark:text-zinc-400 hover:text-[#234766] dark:hover:text-[#E38363] transition-colors font-medium"
          >
            <Github className="w-3.5 h-3.5 text-[#234766] dark:text-[#7ca5cb]" />
            Official Datasets Repository (GitHub)
            <ArrowUpRight className="w-3.5 h-3.5 text-[#E38363]" />
          </a>
        </div>
      </div>
    </section>
  );
}
