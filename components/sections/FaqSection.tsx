"use client";

import React, { useState } from "react";
import { Plus, Minus, Mail, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/lib/siteData";
import AmbientLighting from "@/components/AmbientLighting";

const categories = ["all", "eligibility", "teams", "technical", "event"] as const;

export default function FaqSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = siteData.faqs.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="relative overflow-hidden pt-28 sm:pt-36 pb-20 sm:pb-28">
      {/* Ambient Lighting */}
      <AmbientLighting variant="section" showBeams={false} showNodeWeb={false} />

      <div className="relative z-10 max-w-[1150px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-[#E38363]/15 text-[#c45a38] dark:bg-[#E38363]/20 dark:text-[#ee9577] mb-2">
            Support
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#234766] dark:text-[#7ca5cb] tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#253f56]/85 dark:text-zinc-300 mt-2 leading-relaxed">
            Answers about team formation, eligibility, technical guidelines, and the culminating event.
          </p>
        </div>

        {/* Filter Tabs + Search Row (Pill-shaped containers) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-1 p-1.5 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md rounded-full border border-black/[0.08] dark:border-white/[0.1] shadow-xs w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-full capitalize transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#234766] text-white dark:bg-[#7ca5cb] dark:text-zinc-950 shadow-xs"
                    : "text-[#234766]/70 dark:text-zinc-400 hover:text-[#234766] dark:hover:text-[#f3f6f8]"
                }`}
              >
                {cat === "event" ? "Culmination" : cat}
              </button>
            ))}
          </div>

          {/* Search Pill Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-black/[0.08] dark:border-white/[0.1] rounded-full text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#234766]/20 dark:focus:ring-[#7ca5cb]/30 transition-all text-[#234766] dark:text-zinc-100 placeholder:text-zinc-400 shadow-xs"
            />
          </div>
        </div>

        {/* FAQ Bento Accordion Container */}
        <div className="rounded-3xl border border-black/[0.08] dark:border-white/[0.1] bg-white/80 dark:bg-zinc-900/60 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.03)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] overflow-hidden">
          {filteredFaqs.length === 0 ? (
            <div className="py-14 text-center text-sm text-zinc-400">
              No matching questions found.
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`${
                    idx !== filteredFaqs.length - 1 ? "border-b border-black/[0.06] dark:border-white/[0.08]" : ""
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full text-left flex items-start justify-between gap-4 px-6 sm:px-8 py-5 hover:bg-black/[0.02] dark:hover:bg-white/[0.03] transition-colors cursor-pointer group"
                  >
                    <div className="flex items-baseline gap-3.5">
                      <span className="text-xs text-[#234766] dark:text-[#88beaf] font-mono font-bold shrink-0">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-[#234766] dark:text-[#f3f6f8] group-hover:text-[#E38363] dark:group-hover:text-[#ee9577] transition-colors">
                        {faq.question}
                      </h3>
                    </div>
                    <span className="w-7 h-7 rounded-full bg-black/[0.03] dark:bg-white/[0.06] flex items-center justify-center shrink-0 mt-0.5 text-zinc-400 group-hover:text-[#234766] dark:group-hover:text-[#E38363] transition-colors">
                      {isOpen ? <Minus className="w-3.5 h-3.5 text-[#E38363]" /> : <Plus className="w-3.5 h-3.5" />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 sm:px-8 pb-6 pl-12 sm:pl-16 text-sm text-[#2b4458]/85 dark:text-zinc-300 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>

        {/* Contact Support Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span className="text-[#2b4458]/80 dark:text-zinc-400">
            Have an inquiry not answered here?
          </span>
          <a
            href={`mailto:${siteData.event.contactEmail}`}
            className="inline-flex items-center gap-1.5 text-[#234766] dark:text-[#E38363] font-bold hover:underline transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#E38363]" />
            <span>{siteData.event.contactEmail}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
