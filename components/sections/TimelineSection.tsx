"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { siteData } from "@/lib/siteData";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Clock,
  CheckCircle2,
  Award,
} from "lucide-react";
import AmbientLighting from "@/components/AmbientLighting";

const phases = [
  { id: "all", label: "All Milestones" },
  { id: "registration", label: "Registration" },
  { id: "proposal", label: "Concept Proposal" },
  { id: "development", label: "Development" },
  { id: "finals", label: "Finals & Pitching" },
] as const;

const phaseColors: Record<string, { badge: string; dot: string }> = {
  registration: {
    badge: "bg-[#234766]/10 text-[#234766] dark:bg-[#7ca5cb]/15 dark:text-[#7ca5cb]",
    dot: "bg-[#234766] dark:bg-[#7ca5cb]",
  },
  proposal: {
    badge: "bg-[#6E9E94]/15 text-[#2b5950] dark:bg-[#6E9E94]/20 dark:text-[#88beaf]",
    dot: "bg-[#6E9E94]",
  },
  development: {
    badge: "bg-amber-500/15 text-amber-800 dark:bg-amber-400/20 dark:text-amber-300",
    dot: "bg-amber-500",
  },
  finals: {
    badge: "bg-[#E38363]/15 text-[#c45a38] dark:bg-[#E38363]/20 dark:text-[#ee9577]",
    dot: "bg-[#E38363]",
  },
};

export default function TimelineSection() {
  const [phaseFilter, setPhaseFilter] = useState<string>("all");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const filteredTimeline =
    phaseFilter === "all"
      ? siteData.timeline
      : siteData.timeline.filter((item) => item.phase === phaseFilter);

  const updateScrollState = () => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress(Math.min(100, Math.max(0, (scrollLeft / maxScroll) * 100)));
    } else {
      setScrollProgress(100);
    }
  };

  useEffect(() => {
    updateScrollState();
    const el = scrollContainerRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [filteredTimeline]);

  const handleScroll = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const scrollAmount = Math.min(el.clientWidth * 0.8, 380);
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden pt-28 sm:pt-36 pb-20 sm:pb-28">
      {/* Ambient Lighting & Glow */}
      <AmbientLighting variant="section" showBeams={true} showNodeWeb={false} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#234766]/10 dark:bg-[#6E9E94]/15 text-[#234766] dark:text-[#88beaf] text-xs font-bold tracking-widest uppercase mb-3">
              <Clock className="w-3.5 h-3.5 text-[#E38363]" />
              <span>Schedule · Key Milestones</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#234766] dark:text-[#7ca5cb] tracking-tight leading-tight">
              Event Timeline
            </h2>
            <p className="text-sm sm:text-base text-[#253f56]/85 dark:text-zinc-300 mt-2 max-w-[540px]">
              Key milestones from registration through to the grand face-to-face culminating competition in Metro Manila.
            </p>
          </div>

          {/* Navigation Arrows for Horizontal Scroll */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-zinc-400 dark:text-zinc-500 hidden sm:inline-block">
              Scroll timeline
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleScroll("left")}
                disabled={!canScrollLeft}
                aria-label="Scroll left"
                className={`p-2.5 rounded-full border transition-all ${
                  canScrollLeft
                    ? "bg-white dark:bg-zinc-800 text-[#234766] dark:text-zinc-200 border-black/[0.08] dark:border-white/[0.1] shadow-xs cursor-pointer active:scale-95"
                    : "bg-zinc-100/50 dark:bg-zinc-900/50 border-black/[0.04] dark:border-white/[0.06] text-zinc-300 dark:text-zinc-600 cursor-not-allowed opacity-40"
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleScroll("right")}
                disabled={!canScrollRight}
                aria-label="Scroll right"
                className={`p-2.5 rounded-full border transition-all ${
                  canScrollRight
                    ? "bg-white dark:bg-zinc-800 text-[#234766] dark:text-zinc-200 border-black/[0.08] dark:border-white/[0.1] shadow-xs cursor-pointer active:scale-95"
                    : "bg-zinc-100/50 dark:bg-zinc-900/50 border-black/[0.04] dark:border-white/[0.06] text-zinc-300 dark:text-zinc-600 cursor-not-allowed opacity-40"
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Phase Filter Tabs (Pill style) */}
        <div className="flex items-center justify-between gap-4 mb-10 overflow-x-auto pb-2 -mx-5 px-5 sm:mx-0 sm:px-0">
          <div className="flex items-center gap-1.5 p-1.5 bg-white/80 dark:bg-zinc-900/80 rounded-full border border-black/[0.08] dark:border-white/[0.1] shadow-xs shrink-0">
            {phases.map((p) => {
              const active = phaseFilter === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setPhaseFilter(p.id)}
                  className={`px-4 py-2 text-xs font-bold rounded-full transition-all cursor-pointer whitespace-nowrap ${
                    active
                      ? "bg-[#234766] text-white dark:bg-[#7ca5cb] dark:text-zinc-950 shadow-xs"
                      : "text-zinc-500 dark:text-zinc-400 hover:text-[#234766] dark:hover:text-white"
                  }`}
                >
                  {p.label}
                </button>
              );
            })}
          </div>

          <span className="text-xs text-zinc-400 dark:text-zinc-500 sm:hidden shrink-0 flex items-center gap-1 font-mono">
            Swipe sideways &rarr;
          </span>
        </div>

        {/* Horizontal Timeline Track & Bento Cards Container */}
        <div className="relative">
          {/* Connecting Rail Line Behind Dots */}
          <div 
            className="hidden sm:block absolute top-[24px] left-8 right-8 h-0.5 bg-black/[0.08] dark:bg-white/[0.1] z-0" 
            aria-hidden="true"
          />

          {/* Horizontally scrollable container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-5 sm:gap-6 overflow-x-auto pt-2 pb-6 px-1 snap-x snap-mandatory scroll-smooth touch-pan-x"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {filteredTimeline.map((item, idx) => {
              const globalIndex = siteData.timeline.findIndex((t) => t.title === item.title) + 1;
              const stepNumber = String(globalIndex > 0 ? globalIndex : idx + 1).padStart(2, "0");
              const colors = phaseColors[item.phase] || {
                badge: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
                dot: "bg-zinc-400",
              };

              return (
                <motion.div
                  key={item.title + idx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.04, duration: 0.35 }}
                  className="snap-start shrink-0 w-[290px] sm:w-[340px] flex flex-col group"
                >
                  {/* Timeline Rail Milestone Node */}
                  <div className="relative flex items-center mb-5 pl-2 z-10">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                        item.highlight
                          ? "bg-[#E38363] border-white dark:border-zinc-950 text-white shadow-md shadow-[#E38363]/30"
                          : "bg-white dark:bg-zinc-900 border-black/[0.12] dark:border-white/[0.15] text-zinc-500 group-hover:border-[#234766] dark:group-hover:border-[#6E9E94]"
                      } transition-colors text-[11px] font-bold font-mono`}
                    >
                      {item.highlight ? (
                        <Sparkles className="w-3.5 h-3.5" />
                      ) : (
                        <span>{stepNumber}</span>
                      )}
                    </div>
                    {/* Connecting line segment */}
                    <div className="flex-1 h-0.5 bg-black/[0.08] dark:bg-white/[0.1] group-last:bg-transparent ml-2" />
                  </div>

                  {/* Milestone Card Body */}
                  <div
                    className={`flex-1 flex flex-col justify-between p-6 sm:p-7 rounded-3xl border transition-all duration-200 hover:-translate-y-1 ${
                      item.highlight
                        ? "border-[#E38363]/40 bg-white/95 dark:bg-zinc-900/90 shadow-md shadow-[#E38363]/5 hover:border-[#E38363]"
                        : "border-black/[0.08] dark:border-white/[0.1] bg-white/80 dark:bg-zinc-900/60 backdrop-blur-sm hover:border-black/[0.15] dark:hover:border-white/[0.2] hover:shadow-lg"
                    }`}
                  >
                    <div>
                      {/* Phase Tag & Step Indicator */}
                      <div className="flex items-center justify-between gap-2 mb-3.5">
                        <span
                          className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wide capitalize ${colors.badge}`}
                        >
                          {item.phase}
                        </span>

                        {item.highlight && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#E38363]">
                            <Sparkles className="w-3 h-3" />
                            Key Event
                          </span>
                        )}
                      </div>

                      {/* Date with Calendar Icon */}
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#234766] dark:text-[#88beaf] mb-2.5">
                        <Calendar className="w-3.5 h-3.5 text-[#E38363] shrink-0" />
                        <span>{item.date}</span>
                      </div>

                      {/* Title */}
                      <h3 className="font-extrabold text-[#234766] dark:text-[#f3f6f8] text-lg leading-snug group-hover:text-[#E38363] transition-colors">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#2b4458]/80 dark:text-zinc-300 leading-relaxed mt-2.5">
                        {item.description}
                      </p>
                    </div>

                    {/* Card Bottom Meta */}
                    <div className="mt-6 pt-4 border-t border-black/[0.05] dark:border-white/[0.06] flex items-center justify-between text-[11px] text-zinc-400 dark:text-zinc-500">
                      <span className="flex items-center gap-1 font-medium">
                        {item.highlight ? (
                          <>
                            <Award className="w-3.5 h-3.5 text-[#E38363]" />
                            <span className="text-[#E38363] font-semibold">Priority Milestone</span>
                          </>
                        ) : (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400" />
                            <span>Official Phase</span>
                          </>
                        )}
                      </span>
                      <span className="font-mono font-bold">
                        {stepNumber}/09
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Timeline Bottom Progress Bar & PST Note */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-black/[0.08] dark:border-white/[0.1]">
          {/* Interactive Scroll Progress Bar */}
          <div className="flex items-center gap-3 w-full sm:max-w-xs">
            <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
              Progress
            </span>
            <div className="flex-1 h-1.5 bg-black/[0.08] dark:bg-white/[0.1] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#234766] dark:bg-[#E38363] rounded-full transition-all duration-150"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>
            <span className="text-[11px] font-mono font-bold text-zinc-400">
              {Math.round(scrollProgress)}%
            </span>
          </div>

          {/* PST Standard Time Notice */}
          <div className="text-[11px] text-zinc-400 dark:text-zinc-500">
            * All milestones in Philippine Standard Time (PST / UTC+8). Subject to minor operational updates.
          </div>
        </div>
      </div>
    </section>
  );
}
