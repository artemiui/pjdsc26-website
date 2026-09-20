"use client";

import React, { useState } from "react";
import { Plus, Minus, Mail } from "lucide-react";
import { siteData } from "@/lib/siteData";

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
    <section className="space-y-8 py-6">
      {/* Title */}
      <div className="space-y-1">
        <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 block">
          frequently asked questions
        </span>
        <h2 className="text-2xl font-mono font-bold text-foreground">
          Frequently Asked Questions
        </h2>
        <p className="text-xs sm:text-sm font-sans text-zinc-600 dark:text-zinc-400">
          Answers regarding team formation, eligibility, technical guidelines, and the finals.
        </p>
      </div>

      {/* Filter Tabs & Search */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-2.5 text-xs font-mono">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          {["all", "eligibility", "teams", "technical", "event"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`${
                activeCategory === cat
                  ? "text-foreground font-semibold border-b border-foreground pb-0.5"
                  : "text-zinc-500 hover:text-foreground"
              } transition-colors capitalize cursor-pointer`}
            >
              {cat === "event" ? "culmination" : cat}
            </button>
          ))}
        </div>

        <div>
          <input
            type="text"
            placeholder="filter..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-36 sm:w-44 px-2 py-1 bg-transparent border-b border-zinc-300 dark:border-zinc-700 text-xs font-mono focus:outline-none focus:border-foreground transition-colors"
          />
        </div>
      </div>

      {/* Accordion List (Zero Panel Backgrounds) */}
      <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
        {filteredFaqs.length === 0 ? (
          <div className="py-8 text-center text-xs font-mono text-zinc-400">
            No matching questions found.
          </div>
        ) : (
          filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-4 space-y-2">
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left flex items-start justify-between gap-4 focus:outline-none cursor-pointer group"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 shrink-0">
                      {String(idx + 1).padStart(2, "0")}.
                    </span>
                    <h3 className="text-sm font-mono font-medium text-foreground group-hover:text-[#234766] dark:group-hover:text-[#E38363] transition-colors">
                      {faq.question}
                    </h3>
                  </div>

                  <span className="text-zinc-400 dark:text-zinc-500 shrink-0 mt-0.5">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="pl-7 text-xs sm:text-sm font-sans text-zinc-600 dark:text-zinc-400 leading-relaxed pt-1">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Support Line */}
      <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-500 flex items-center justify-between">
        <span>Have an inquiry not answered here?</span>
        <a
          href={`mailto:${siteData.event.contactEmail}`}
          className="text-foreground hover:underline inline-flex items-center gap-1"
        >
          <Mail className="w-3 h-3" />
          <span>{siteData.event.contactEmail}</span>
        </a>
      </div>
    </section>
  );
}
