"use client";

import React, { useState } from "react";
import { Calendar, Clock, CheckCircle2, CircleDot, AlertCircle } from "lucide-react";
import { siteData, TimelineItem } from "@/lib/siteData";

export default function TimelineSection() {
  const [filter, setFilter] = useState<string>("all");

  const filteredTimeline = filter === "all"
    ? siteData.timeline
    : siteData.timeline.filter((item) => item.phase === filter);

  return (
    <section id="timeline" className="py-16 sm:py-24 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Official Roadmap
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-zinc-900 dark:text-zinc-100 mt-1">
              Event Timeline & Milestones
            </h2>
            <p className="text-sm font-sans text-zinc-600 dark:text-zinc-400 mt-1">
              Key dates for team registration, submission cutoffs, workshops, and the grand culmination.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-mono">
            {["all", "registration", "proposal", "development", "finals"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-2.5 py-1 rounded capitalize transition-colors ${
                  filter === f
                    ? "bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white font-semibold shadow-xs"
                    : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l border-zinc-300 dark:border-zinc-700 space-y-8 my-6">
          {filteredTimeline.map((item, idx) => {
            return (
              <div key={idx} className="relative group">
                {/* Node marker on the line */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 bg-[#faf8f5] dark:bg-[#09090b] transition-colors ${
                    item.highlight
                      ? "border-[#234766] dark:border-[#E38363] bg-[#234766] dark:bg-[#E38363]"
                      : "border-zinc-400 dark:border-zinc-600"
                  }`}
                />

                {/* Card */}
                <div
                  className={`p-5 rounded-lg wireframe-panel transition-all ${
                    item.highlight
                      ? "bg-white/80 dark:bg-zinc-900/60 border-zinc-400/80 dark:border-zinc-600/80 shadow-xs"
                      : "bg-white/40 dark:bg-zinc-900/30"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                    <span className="text-xs font-mono font-bold text-[#234766] dark:text-[#E38363]">
                      {item.date}
                    </span>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 w-fit">
                      {item.phase}
                    </span>
                  </div>

                  <h3 className="text-base font-sans font-bold text-zinc-900 dark:text-zinc-100">
                    {item.title}
                  </h3>

                  <p className="text-xs font-sans text-zinc-600 dark:text-zinc-400 mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Schedule Disclaimers */}
        <div className="mt-8 p-4 rounded border border-zinc-200 dark:border-zinc-800 bg-white/30 dark:bg-zinc-900/20 text-xs font-mono text-zinc-500 dark:text-zinc-400 flex items-center justify-between">
          <span>* Note: Schedule and exact times are subject to minor adjustments by the steering committee.</span>
          <span className="text-zinc-400 dark:text-zinc-500">UTC+8 (PHT)</span>
        </div>
      </div>
    </section>
  );
}
