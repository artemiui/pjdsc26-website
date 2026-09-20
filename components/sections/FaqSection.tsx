"use client";

import React, { useState } from "react";
import { ChevronDown, Search, Mail, HelpCircle } from "lucide-react";
import { siteData, FaqItem } from "@/lib/siteData";

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

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Inquiries & Guidance
            </span>
            <span className="text-[11px] font-mono text-zinc-400">9 Core Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-zinc-900 dark:text-zinc-100 mt-1">
            Frequently Asked Questions
          </h2>
          <p className="text-sm font-sans text-zinc-600 dark:text-zinc-400 mt-2">
            Everything you need to know about eligibility, team formation, technical requirements, and culmination day.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-mono">
            {[
              { id: "all", label: "all questions" },
              { id: "eligibility", label: "eligibility" },
              { id: "teams", label: "teams" },
              { id: "technical", label: "technical" },
              { id: "event", label: "culmination" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded capitalize transition-colors ${
                  activeCategory === cat.id
                    ? "bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white font-semibold shadow-xs"
                    : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 text-xs font-mono focus:outline-none focus:ring-1 focus:ring-zinc-400 dark:focus:ring-zinc-600"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center border border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg text-xs font-mono text-zinc-500">
              No matching questions found for "{searchQuery}".
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-lg wireframe-panel bg-white/60 dark:bg-zinc-900/40 overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-zinc-400 dark:text-zinc-500 shrink-0">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-sm sm:text-base font-sans font-semibold text-zinc-900 dark:text-zinc-100">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-zinc-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180 text-zinc-900 dark:text-zinc-100" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm font-sans text-zinc-600 dark:text-zinc-300 leading-relaxed border-t border-zinc-100 dark:border-zinc-800/80">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Support Help Box */}
        <div className="mt-8 p-5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
            <Mail className="w-4 h-4 text-[#234766] dark:text-[#6E9E94]" />
            <span>Still have questions or special team considerations?</span>
          </div>
          <a
            href={`mailto:${siteData.event.contactEmail}`}
            className="text-[#234766] dark:text-[#E38363] hover:underline font-semibold"
          >
            {siteData.event.contactEmail}
          </a>
        </div>
      </div>
    </section>
  );
}
