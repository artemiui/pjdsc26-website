"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  ExternalLink,
  Copy,
  Check,
  Sparkles,
  ArrowLeft,
  Coffee,
  Users,
  HelpCircle,
  ShieldCheck,
  Download,
  FileDown,
} from "lucide-react";
import { siteData } from "@/lib/siteData";
import AmbientLighting from "@/components/AmbientLighting";

function ZoomLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M1.5 5.25a2.25 2.25 0 0 1 2.25-2.25h10.5A2.25 2.25 0 0 1 16.5 5.25v13.5a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18.75V5.25zM18 8.658l4.032-2.915A.75.75 0 0 1 23.25 6.35v11.3a.75.75 0 0 1-1.218.607L18 15.342V8.658z" />
    </svg>
  );
}

export default function ProgrammeSection() {
  const [copiedLink, setCopiedLink] = useState(false);

  const prog = siteData.programme;

  const handleCopy = (text: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const getItemIcon = (title: string, isBreak?: boolean) => {
    if (isBreak) return <Coffee className="w-4 h-4 text-[#E38363]" />;
    const lower = title.toLowerCase();
    if (lower.includes("keynote") || lower.includes("talk")) {
      return <Sparkles className="w-4 h-4 text-[#234766] dark:text-[#88beaf]" />;
    }
    if (lower.includes("activity") || lower.includes("peer-review")) {
      return <Users className="w-4 h-4 text-[#6E9E94]" />;
    }
    if (lower.includes("forum") || lower.includes("q&a")) {
      return <HelpCircle className="w-4 h-4 text-[#234766] dark:text-[#7ca5cb]" />;
    }
    return <Clock className="w-4 h-4 text-zinc-400 dark:text-zinc-500" />;
  };

  return (
    <section className="relative overflow-hidden pt-28 sm:pt-36 pb-20 sm:pb-28">
      {/* Ambient Lighting */}
      <AmbientLighting variant="section" showBeams={true} showNodeWeb={false} />

      <div className="relative z-10 max-w-[1150px] mx-auto px-5 sm:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/timeline"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#234766] dark:text-[#7ca5cb] hover:underline cursor-pointer group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Back to Timeline</span>
          </Link>
        </div>

        {/* Hero Section Header - Simplified without badge */}
        <div className="mb-8 sm:mb-10 max-w-3xl">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#234766] dark:text-[#7ca5cb] tracking-tight leading-tight">
            {prog.title || "Project Development Workshop Programme"}
          </h1>

          <p className="text-sm sm:text-base text-[#253f56]/80 dark:text-zinc-300 mt-2.5 leading-relaxed">
            Schedule, onsite venue location, and hybrid online session details for the Project Development Workshop.
          </p>
        </div>

        {/* ================================================================= */}
        {/* Key Details: Date/Time, Onsite Venue, Online Session              */}
        {/* ================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          
          {/* Card 1: Event Schedule */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="p-6 rounded-3xl border border-black/[0.08] dark:border-white/[0.1] bg-white/80 dark:bg-zinc-900/60 backdrop-blur-sm shadow-xs flex flex-col justify-between"
          >
            <div>
              <Calendar className="w-5 h-5 text-[#E38363] mb-3" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-400">
                Event Schedule
              </span>
              <h2 className="text-lg font-extrabold text-[#234766] dark:text-[#f3f6f8] mt-1">
                {prog.date}
              </h2>
              <div className="flex items-center gap-2 mt-2 text-sm font-semibold text-[#2b4458]/80 dark:text-zinc-300">
                <Clock className="w-4 h-4 text-[#E38363] shrink-0" />
                <span>{prog.time}</span>
              </div>
            </div>
            <div className="mt-5 pt-3.5 border-t border-black/[0.05] dark:border-white/[0.06] text-xs text-zinc-500 dark:text-zinc-400">
              Philippine Standard Time (PST · UTC+8)
            </div>
          </motion.div>

          {/* Card 2: Onsite Session */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.25 }}
            className="p-6 rounded-3xl border border-black/[0.08] dark:border-white/[0.1] bg-white/80 dark:bg-zinc-900/60 backdrop-blur-sm shadow-xs flex flex-col justify-between"
          >
            <div>
              <MapPin className="w-5 h-5 text-[#234766] dark:text-[#7ca5cb] mb-3" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-400">
                Onsite Session
              </span>
              <h2 className="text-lg font-extrabold text-[#234766] dark:text-[#f3f6f8] mt-1">
                {prog.venueName}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-[#2b4458]/75 dark:text-zinc-300 leading-relaxed">
                Face-to-face workshop, mentor engagement, and collaborative review sessions.
              </p>
            </div>
            <div className="mt-5 pt-3.5 border-t border-black/[0.05] dark:border-white/[0.06]">
              <a
                href={prog.venueMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#234766] dark:text-[#88beaf] hover:text-[#E38363] dark:hover:text-[#E38363] transition-colors"
              >
                <span>Open Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Card 3: Online Session Link (Microsoft UI Style Zoom Interface) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.25 }}
            className="p-6 rounded-3xl border border-black/[0.08] dark:border-white/[0.1] bg-white/80 dark:bg-zinc-900/60 backdrop-blur-sm shadow-xs flex flex-col justify-between"
          >
            <div>
              <ZoomLogo className="w-5 h-5 text-[#0B5CFF] mb-3" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-400">
                Online Session Link
              </span>
              <h2 className="text-lg font-extrabold text-[#234766] dark:text-[#f3f6f8] mt-1">
                Join Zoom Meeting
              </h2>
              {prog.zoomMeetingId && (
                <p className="mt-2 text-xs font-mono text-[#2b4458]/80 dark:text-zinc-300">
                  Meeting ID: <span className="font-bold text-[#234766] dark:text-[#f3f6f8]">{prog.zoomMeetingId}</span>
                </p>
              )}
            </div>

            {/* Microsoft UI Fluent Button Interface */}
            <div className="mt-5 pt-3.5 border-t border-black/[0.05] dark:border-white/[0.06] flex items-center gap-2">
              <a
                href={prog.zoomUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-[6px] bg-[#0B5CFF] hover:bg-[#004ee0] active:bg-[#0043c7] text-white text-xs font-semibold shadow-[0_1px_2px_rgba(0,0,0,0.12)] border border-[#004bd9] transition-all duration-150 select-none active:translate-y-[0.5px] cursor-pointer"
              >
                <ZoomLogo className="w-3.5 h-3.5 fill-white shrink-0" />
                <span>Join Meeting</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>

              <button
                onClick={() => handleCopy(prog.zoomUrl)}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-[6px] bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700/80 active:bg-zinc-100 dark:active:bg-zinc-700 text-[#242424] dark:text-zinc-200 text-xs font-medium border border-[#d1d1d1] dark:border-zinc-700 shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all duration-150 cursor-pointer select-none active:translate-y-[0.5px]"
                title="Copy Zoom Meeting Link"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 dark:text-emerald-400 font-medium">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-500" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

        </div>

        {/* ================================================================= */}
        {/* Workshop Attachment Download Note                                 */}
        {/* ================================================================= */}
        {prog.attachment && (
          <div className="mb-10 p-5 sm:p-6 rounded-2xl border border-black/[0.08] dark:border-white/[0.1] bg-white/80 dark:bg-zinc-900/60 backdrop-blur-sm shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-3.5">
              <FileDown className="w-5 h-5 text-[#E38363] shrink-0 mt-0.5 sm:mt-0" />
              <div>
                <span className="text-xs font-bold text-[#234766] dark:text-[#7ca5cb] block">
                  Workshop Materials Notice
                </span>
                <p className="text-xs sm:text-sm text-[#2b4458]/85 dark:text-zinc-300 mt-0.5 leading-relaxed">
                  {prog.attachment.note}{" "}
                  <span className="font-semibold font-mono text-[#234766] dark:text-[#f3f6f8]">
                    {prog.attachment.name}
                  </span>
                  {prog.attachment.fileSize && (
                    <span className="text-zinc-400 dark:text-zinc-500 font-mono text-xs ml-1.5">
                      ({prog.attachment.fileSize})
                    </span>
                  )}
                </p>
              </div>
            </div>

            <div className="shrink-0">
              <a
                href={prog.attachment.url}
                download={prog.attachment.name}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-[6px] bg-[#234766] hover:bg-[#1a354c] dark:bg-[#E38363] dark:hover:bg-[#d87556] text-white dark:text-zinc-950 text-xs font-semibold shadow-xs transition-all cursor-pointer active:translate-y-[0.5px]"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Attachment</span>
              </a>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* Simplified Programme Flow List                                    */}
        {/* ================================================================= */}
        <div className="p-6 sm:p-8 rounded-3xl border border-black/[0.08] dark:border-white/[0.1] bg-white/80 dark:bg-zinc-900/60 backdrop-blur-sm shadow-xs mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-5 border-b border-black/[0.06] dark:border-white/[0.08]">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#234766] dark:text-[#7ca5cb] tracking-tight">
              Programme Flow
            </h2>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-zinc-500 dark:text-zinc-400">
              <Clock className="w-3.5 h-3.5 text-[#E38363]" />
              <span>12:30 PM – 4:30 PM PST</span>
            </div>
          </div>

          {/* Schedule Line Items - Minimalist without secondary tags or box backgrounds */}
          <div className="space-y-2">
            {prog.schedule.map((item, idx) => {
              const isBreak = item.isBreak;
              return (
                <div
                  key={idx}
                  className={`px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl border transition-all duration-150 flex items-center justify-between gap-3 ${
                    isBreak
                      ? "bg-[#E38363]/5 border-[#E38363]/20 dark:bg-[#E38363]/10"
                      : "bg-white/60 dark:bg-zinc-900/40 border-black/[0.05] dark:border-white/[0.06] hover:bg-white dark:hover:bg-zinc-900/80"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="shrink-0">
                      {getItemIcon(item.title, isBreak)}
                    </div>
                    <h3
                      className={`text-sm sm:text-base font-bold ${
                        isBreak
                          ? "text-[#E38363] dark:text-[#f29a7c]"
                          : "text-[#234766] dark:text-[#f3f6f8]"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <div className="shrink-0">
                    <span
                      className={`font-mono text-xs font-semibold px-2.5 py-0.5 rounded-md ${
                        isBreak
                          ? "text-[#c25c39] dark:text-[#f4a78c] bg-[#E38363]/10"
                          : "text-zinc-500 dark:text-zinc-400 bg-black/[0.03] dark:bg-white/[0.04]"
                      }`}
                    >
                      {item.time}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================================================================= */}
        {/* Stage 2 Reminder Callout Banner                                   */}
        {/* ================================================================= */}
        <div className="p-6 sm:p-7 rounded-3xl border border-[#6E9E94]/30 bg-[#6E9E94]/10 dark:bg-[#6E9E94]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="flex items-start gap-3.5">
            <ShieldCheck className="w-5 h-5 text-[#245c50] dark:text-[#88beaf] shrink-0 mt-0.5" />
            <div>
              <h3 className="text-base font-extrabold text-[#234766] dark:text-[#f3f6f8]">
                Stage 2: Solution Development in Progress
              </h3>
              <p className="text-xs sm:text-sm text-[#253f56]/85 dark:text-zinc-300 mt-1 max-w-2xl leading-relaxed">
                Keep in mind that absolute anonymity must be maintained — no identifying marks, team names, or school affiliations are permitted in your codebase, slide decks, or video demonstrations.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3 w-full sm:w-auto">
            <Link
              href="/primer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-[#234766] hover:bg-[#1a354c] dark:bg-[#E38363] dark:hover:bg-[#d87556] text-white dark:text-zinc-950 text-xs font-bold transition-all shadow-xs"
            >
              <span>View Primer & Rules</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
