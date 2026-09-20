"use client";

import React, { useState } from "react";
import { siteData } from "@/lib/siteData";

export default function TimelineSection() {
  const [phaseFilter, setPhaseFilter] = useState<string>("all");

  const filteredTimeline = phaseFilter === "all"
    ? siteData.timeline
    : siteData.timeline.filter((item) => item.phase === phaseFilter);

  return (
    <section className="space-y-8 py-6">
      {/* Title */}
      <div className="space-y-1">
        <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 block">
          milestones / schedule
        </span>
        <h2 className="text-2xl font-mono font-bold text-foreground">
          Event Timeline
        </h2>
        <p className="text-xs sm:text-sm font-sans text-zinc-600 dark:text-zinc-400">
          Official schedule from registration through to the culminating event in Metro Manila.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-mono border-b border-zinc-200 dark:border-zinc-800 pb-2">
        {["all", "registration", "proposal", "development", "finals"].map((p) => (
          <button
            key={p}
            onClick={() => setPhaseFilter(p)}
            className={`${
              phaseFilter === p
                ? "text-foreground font-semibold border-b border-foreground pb-0.5"
                : "text-zinc-500 hover:text-foreground"
            } transition-colors capitalize cursor-pointer`}
          >
            {p}
          </button>
        ))}
      </div>

      {/* Timeline Stream (matching artemiui.github.io/about experience timeline) */}
      <div className="space-y-6 pl-1 border-l-2 border-zinc-200 dark:border-zinc-800 ml-1">
        {filteredTimeline.map((item, idx) => (
          <div key={idx} className="relative pl-5 space-y-1.5">
            {/* Minimal node bullet */}
            <div
              className={`absolute -left-[5px] top-1.5 w-2 h-2 rounded-full ${
                item.highlight
                  ? "bg-[#234766] dark:bg-[#E38363] ring-2 ring-[#234766]/20 dark:ring-[#E38363]/30"
                  : "bg-zinc-400 dark:bg-zinc-600"
              }`}
            />

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <h3 className="font-mono font-medium text-sm text-foreground">
                {item.title}
              </h3>
              <span className="text-xs font-mono font-semibold text-[#234766] dark:text-[#E38363]">
                {item.date}
              </span>
            </div>

            <p className="text-xs font-sans text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
        * All milestones are scheduled in Philippine Standard Time (PST / UTC+8). Subject to minor operational updates.
      </div>
    </section>
  );
}
