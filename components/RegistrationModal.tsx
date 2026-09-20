"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ArrowUpRight } from "lucide-react";
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
          className="fixed inset-0 bg-black/50 backdrop-blur-xs"
        />

        {/* Modal Window (Clean, No bulky cards inside) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 8 }}
          transition={{ duration: 0.18 }}
          className="relative w-full max-w-lg bg-[#ffffff] dark:bg-[#09090b] border border-zinc-200 dark:border-zinc-800 shadow-xl p-6 sm:p-8 z-10 my-8 space-y-6"
        >
          {/* Header */}
          <div className="flex items-start justify-between border-b border-zinc-200 dark:border-zinc-800 pb-4">
            <div>
              <span className="text-[11px] font-semibold text-[#6E9E94] dark:text-[#88beaf] uppercase tracking-wider block">
                registration / pjdsc 2026
              </span>
              <h3 className="text-xl font-bold text-[#234766] dark:text-[#7ca5cb] mt-0.5">
                Team Registration
              </h3>
            </div>
            <button
              onClick={onClose}
              className="text-zinc-400 hover:text-foreground transition-colors p-1"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Pricing & Deadlines */}
          <div className="space-y-3 text-xs">
            <div className="flex justify-between border-b border-zinc-100 dark:border-zinc-900 pb-2">
              <div>
                <span className="font-semibold text-[#234766] dark:text-[#7ca5cb]">Early Registration</span>
                <span className="text-[#2b4458]/70 dark:text-zinc-400 block text-[11px]">Sept 21 (5:00 PM) – Sept 25 · Quota</span>
              </div>
              <span className="font-bold text-[#234766] dark:text-[#E38363]">₱300.00 / pax</span>
            </div>

            <div className="flex justify-between border-b border-zinc-100 dark:border-zinc-900 pb-2">
              <div>
                <span className="font-semibold text-[#234766] dark:text-[#7ca5cb]">Regular Registration</span>
                <span className="text-[#2b4458]/70 dark:text-zinc-400 block text-[11px]">Sept 28 – Sept 30 · Open Demographic</span>
              </div>
              <span className="font-bold text-[#234766] dark:text-[#ee9577]">₱350.00 / pax</span>
            </div>
          </div>

          {/* Key Guidelines */}
          <div className="space-y-2 text-xs font-sans text-[#2b4458]/85 dark:text-zinc-300 leading-relaxed">
            <p>• Teams must comprise <strong className="text-[#234766] dark:text-[#7ca5cb]">3 to 5 senior high school or undergraduate students</strong>.</p>
            <p>• Early registration enforces a quota of <strong className="text-[#234766] dark:text-[#7ca5cb]">5 teams per region</strong> (NCR, Luzon, Visayas, Mindanao).</p>
            <p>• Maximum <strong className="text-[#234766] dark:text-[#7ca5cb]">40 slots nationwide</strong>. Once slots are validated, registration closes.</p>
            <p>• Strictly non-refundable. Payment proof must be uploaded to confirm your slot.</p>
          </div>

          {/* Action Link to Google Form */}
          <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 space-y-3">
            <a
              href={siteData.event.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-1.5 py-2.5 px-4 bg-[#234766] hover:bg-[#1a354c] dark:bg-[#E38363] dark:hover:bg-[#d87556] text-white dark:text-zinc-950 text-xs font-semibold rounded-lg shadow-xs hover:opacity-95 transition-all cursor-pointer"
            >
              <span>Proceed to Registration Form (Google Forms)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <div className="text-center">
              <span className="text-[11px] text-[#6E9E94] dark:text-[#88beaf]">
                Official submission portal managed by UP Data Science Society
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
