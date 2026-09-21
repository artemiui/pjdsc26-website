"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ArrowUpRight, Sparkles } from "lucide-react";
import { siteData } from "@/lib/siteData";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Minimalist Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Window (Clean rounded-3xl container with hairline border) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 12 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="relative w-full max-w-lg bg-white/95 dark:bg-[#0f141a]/95 backdrop-blur-[16px] border border-black/[0.08] dark:border-white/[0.12] rounded-3xl shadow-2xl p-7 sm:p-9 z-10 my-8 space-y-6"
        >
          {/* Header */}
          <div className="flex items-start justify-between border-b border-black/[0.06] dark:border-white/[0.08] pb-4">
            <div>
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#234766]/10 text-[#234766] dark:bg-[#7ca5cb]/15 dark:text-[#7ca5cb] mb-1">
                registration / pjdsc 2026
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#234766] dark:text-[#7ca5cb]">
                Team Registration
              </h3>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-black/[0.04] dark:bg-white/[0.06] flex items-center justify-center text-zinc-400 hover:text-zinc-700 dark:hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Pricing & Deadlines Cards */}
          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.04] dark:border-white/[0.06] flex justify-between items-center">
              <div>
                <span className="font-bold text-sm text-[#234766] dark:text-[#7ca5cb] block">Early Registration</span>
                <span className="text-[#2b4458]/70 dark:text-zinc-400 text-[11px]">Sept 21 (5:00 PM) – Sept 25 · Regional Quota</span>
              </div>
              <span className="font-extrabold text-sm text-[#234766] dark:text-[#E38363] font-mono">₱300.00 / pax</span>
            </div>

            <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.04] dark:border-white/[0.06] flex justify-between items-center">
              <div>
                <span className="font-bold text-sm text-[#234766] dark:text-[#7ca5cb] block">Regular Registration</span>
                <span className="text-[#2b4458]/70 dark:text-zinc-400 text-[11px]">Sept 28 – Sept 30 · Open Demographic</span>
              </div>
              <span className="font-extrabold text-sm text-[#234766] dark:text-[#ee9577] font-mono">₱350.00 / pax</span>
            </div>
          </div>

          {/* Key Guidelines */}
          <div className="space-y-2 text-xs text-[#2b4458]/85 dark:text-zinc-300 leading-relaxed bg-black/[0.02] dark:bg-white/[0.02] p-4 rounded-2xl border border-black/[0.04] dark:border-white/[0.05]">
            <p>• Teams must comprise <strong className="text-[#234766] dark:text-[#7ca5cb]">3 to 5 senior high school or undergraduate students</strong>.</p>
            <p>• Early registration enforces a quota of <strong className="text-[#234766] dark:text-[#7ca5cb]">5 teams per region</strong> (NCR, Luzon, Visayas, Mindanao).</p>
            <p>• Maximum <strong className="text-[#234766] dark:text-[#7ca5cb]">40 slots nationwide</strong>. Once slots are validated, registration closes.</p>
            <p>• Strictly non-refundable. Payment proof must be uploaded to confirm your slot.</p>
          </div>

          {/* Action Link to Google Form */}
          <div className="pt-2 space-y-3">
            <a
              href={siteData.event.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-5 bg-[#234766] hover:bg-[#1a354c] dark:bg-[#E38363] dark:hover:bg-[#d87556] text-white dark:text-zinc-950 text-xs font-bold rounded-full shadow-md shadow-[#234766]/15 dark:shadow-[#E38363]/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Proceed to Registration Form (Google Forms)</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="text-center">
              <span className="text-[11px] text-[#6E9E94] dark:text-[#88beaf] font-medium">
                Official submission portal managed by UP Data Science Society
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
