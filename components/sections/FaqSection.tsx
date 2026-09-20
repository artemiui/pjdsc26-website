"use client";

import React, { useState } from "react";
import { Plus, Minus, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/lib/siteData";

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
    <section className="bg-zinc-50/50 dark:bg-zinc-900/20">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8 py-14 sm:py-20">
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#E38363]">
            Support
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#234766] dark:text-[#7ca5cb] leading-tight mt-2">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#253f56]/85 dark:text-zinc-300 mt-2 max-w-[480px]">
            Answers about team formation, eligibility, technical guidelines, and the culminating event.
          </p>
        </div>

        {/* Filter + Search Row */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-1 p-1 bg-zinc-100 dark:bg-zinc-800/50 rounded-lg w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs rounded-md capitalize transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-white dark:bg-zinc-700 text-[#234766] dark:text-[#E38363] shadow-sm font-semibold"
                    : "text-[#234766]/70 dark:text-zinc-400 hover:text-[#234766] dark:hover:text-[#f3f6f8]"
                }`}
              >
                {cat === "event" ? "Culmination" : cat}
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-52 px-3 py-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#234766]/20 dark:focus:ring-[#6E9E94]/20 transition-all text-[#234766] dark:text-zinc-100 placeholder:text-zinc-400"
          />
        </div>

        {/* FAQ Accordion */}
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-white dark:bg-zinc-800/20">
          {filteredFaqs.length === 0 ? (
            <div className="py-12 text-center text-sm text-zinc-400">
              No matching questions found.
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`${
                    idx !== filteredFaqs.length - 1 ? "border-b border-zinc-200 dark:border-zinc-700/50" : ""
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full text-left flex items-start justify-between gap-4 px-5 py-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="text-xs text-[#234766] dark:text-[#88beaf] font-bold shrink-0">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-sm font-semibold text-[#234766] dark:text-[#f3f6f8] group-hover:text-[#E38363] dark:group-hover:text-[#E38363] transition-colors">
                        {faq.question}
                      </h3>
                    </div>
                    <span className="text-zinc-400 shrink-0 mt-0.5">
                      {isOpen ? <Minus className="w-4 h-4 text-[#E38363]" /> : <Plus className="w-4 h-4" />}
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
                        <div className="px-5 pb-4 pl-12 text-sm text-[#2b4458]/85 dark:text-zinc-300 leading-relaxed">
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

        {/* Contact Support */}
        <div className="mt-8 flex items-center justify-between text-sm">
          <span className="text-[#2b4458]/80 dark:text-zinc-400">Have an inquiry not answered here?</span>
          <a
            href={`mailto:${siteData.event.contactEmail}`}
            className="inline-flex items-center gap-1.5 text-[#234766] dark:text-[#E38363] font-semibold text-xs hover:underline transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            {siteData.event.contactEmail}
          </a>
        </div>
      </div>
    </section>
  );
}
