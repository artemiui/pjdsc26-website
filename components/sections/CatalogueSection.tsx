"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { 
  Search, 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2, 
  Globe2, 
  MapPin, 
  Clock, 
  Building2, 
  FolderGit2, 
  Info,
  Filter,
  ExternalLink
} from "lucide-react";
import { siteData, DatasetItem } from "@/lib/siteData";
import AmbientLighting from "@/components/AmbientLighting";

const categoryFilters = [
  { id: "all", label: "All Datasets" },
  { id: "philippines", label: "Local (Philippines)" },
  { id: "infectious", label: "Infectious Diseases" },
  { id: "environmental", label: "Environmental & WASH" },
  { id: "maternal-pediatric", label: "Maternal & Pediatric" },
  { id: "chronic", label: "Chronic Diseases & Aging" },
  { id: "global", label: "Global Health & Demographics" },
] as const;

export default function CatalogueSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const datasets = siteData.datasetCatalogue || [];

  const filteredDatasets = useMemo(() => {
    return datasets.filter((item: DatasetItem) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        (item.subtitle && item.subtitle.toLowerCase().includes(q)) ||
        item.organization.toLowerCase().includes(q) ||
        item.organizationShort.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q) ||
        item.highlights.some((h) => h.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [datasets, activeCategory, searchQuery]);

  return (
    <section className="relative overflow-hidden pt-28 sm:pt-36 pb-20 sm:pb-28">
      {/* Ambient Lighting */}
      <AmbientLighting variant="section" showBeams={false} showNodeWeb={false} />

      <div className="relative z-10 max-w-[1180px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 max-w-3xl">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#234766] dark:text-[#7ca5cb] tracking-tight leading-tight">
            Dataset Catalogue
          </h1>
          <p className="text-sm sm:text-base text-[#253f56]/85 dark:text-zinc-300 mt-3 leading-relaxed">
            Curated open health datasets to kickstart your predictive modeling, risk analysis, and concept proposals for PJDSC 2026.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-2 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Filter Category Pills */}
            <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md rounded-2xl sm:rounded-full border border-black/[0.08] dark:border-white/[0.1] shadow-xs">
              {categoryFilters.map((cat) => {
                const count =
                  cat.id === "all"
                    ? datasets.length
                    : datasets.filter((d) => d.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer inline-flex items-center gap-1.5 ${
                      activeCategory === cat.id
                        ? "bg-[#234766] text-white dark:bg-[#7ca5cb] dark:text-zinc-950 shadow-xs"
                        : "text-[#234766]/70 dark:text-zinc-400 hover:text-[#234766] dark:hover:text-[#f3f6f8] hover:bg-black/[0.03] dark:hover:bg-white/[0.05]"
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        activeCategory === cat.id
                          ? "bg-white/20 dark:bg-black/20 text-white dark:text-zinc-950"
                          : "bg-black/[0.05] dark:bg-white/[0.08] text-zinc-500 dark:text-zinc-400"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Datasets Grid */}
        {filteredDatasets.length === 0 ? (
          <div className="py-20 text-center rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/40 p-8">
            <Info className="w-8 h-8 text-zinc-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-[#234766] dark:text-[#7ca5cb]">
              No datasets found matching your search
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
              Try adjusting your search terms or selecting another category.
            </p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-1.5 text-xs font-semibold rounded-full bg-[#234766] text-white dark:bg-[#7ca5cb] dark:text-zinc-950 hover:opacity-90 transition-opacity"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredDatasets.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col justify-between rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white/85 dark:bg-zinc-900/70 p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-[#6E9E94]/40 dark:hover:border-[#6E9E94]/40 transition-all duration-200"
              >
                <div>
                  {/* Top Meta Badges */}
                  <div className="flex items-center justify-between gap-2 mb-3 text-[11px]">
                    <span className="inline-flex items-center gap-1 font-semibold text-[#234766] dark:text-[#7ca5cb]">
                      <Building2 className="w-3 h-3 text-[#6E9E94]" />
                      {item.organizationShort}
                    </span>

                    <div className="flex items-center gap-1.5">
                      {item.timeframe && (
                        <span className="inline-flex items-center gap-1 text-[10px] text-zinc-500 dark:text-zinc-400 font-mono">
                          <Clock className="w-2.5 h-2.5" />
                          {item.timeframe}
                        </span>
                      )}
                      <span
                        className={`px-2 py-0.5 rounded-full font-semibold text-[10px] ${
                          item.scope === "Local (PH)"
                            ? "bg-[#E38363]/15 text-[#c45a38] dark:bg-[#E38363]/25 dark:text-[#ee9577]"
                            : "bg-[#6E9E94]/15 text-[#246857] dark:bg-[#6E9E94]/25 dark:text-[#88beaf]"
                        }`}
                      >
                        {item.scope}
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold text-[#234766] dark:text-[#f3f6f8] group-hover:text-[#2e7d69] dark:group-hover:text-[#88beaf] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-xs font-mono text-[#E38363] dark:text-[#ee9577] mt-0.5">
                      {item.subtitle}
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-xs text-[#2b4458]/85 dark:text-zinc-300 leading-relaxed mt-2.5">
                    {item.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 space-y-1.5">
                    {item.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-1.5 text-[11px] text-[#2b4458]/80 dark:text-zinc-400 leading-tight"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6E9E94] shrink-0 mt-1" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer / Action Link */}
                <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between gap-3">
                  <span className="text-[10px] font-medium text-zinc-500 dark:text-zinc-400 truncate">
                    {item.categoryLabel}
                  </span>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-[#234766] hover:text-white dark:hover:bg-[#7ca5cb] dark:hover:text-zinc-950 text-xs font-semibold text-[#234766] dark:text-zinc-200 transition-colors shadow-2xs"
                  >
                    <span>Source</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Dedicated GitHub Datasets & Additional Open Data Portals Callout */}
        <div className="mt-14 sm:mt-18 rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white/70 dark:bg-zinc-900/60 p-6 sm:p-8 lg:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#234766] dark:text-[#7ca5cb] tracking-tight">
                Explore Historical PJDSC Challenge Datasets
              </h3>
              <p className="text-xs sm:text-sm text-[#2b4458]/85 dark:text-zinc-300 leading-relaxed">
                Looking for previous competition datasets, exploratory data analysis (EDA) starter notebooks, and code templates? Access the official UP Data Science Society GitHub repository.
              </p>
              <div className="pt-2">
                <a
                  href={siteData.event.githubRepoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#234766] hover:bg-[#1a354c] text-white text-xs font-bold rounded-xl transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer shadow-xs"
                >
                  <FolderGit2 className="w-3.5 h-3.5" />
                  <span>Open PJDSC GitHub Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 p-5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/80 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#234766] dark:text-[#88beaf]">
                Recommended Open Data Portals
              </h4>
              <ul className="space-y-2 text-xs text-[#2b4458]/85 dark:text-zinc-300">
                <li className="flex items-center justify-between">
                  <span>data.gov.ph (Philippine Open Data)</span>
                  <a
                    href="https://data.gov.ph"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E38363] hover:underline inline-flex items-center gap-0.5 font-mono text-[11px]"
                  >
                    data.gov.ph <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
                <li className="flex items-center justify-between">
                  <span>WHO Global Health Observatory</span>
                  <a
                    href="https://www.who.int/data/gho"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E38363] hover:underline inline-flex items-center gap-0.5 font-mono text-[11px]"
                  >
                    who.int/data/gho <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
                <li className="flex items-center justify-between">
                  <span>Humanitarian Data Exchange (HDX)</span>
                  <a
                    href="https://data.humdata.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E38363] hover:underline inline-flex items-center gap-0.5 font-mono text-[11px]"
                  >
                    humdata.org <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
                <li className="flex items-center justify-between">
                  <span>UNICEF Data Warehouse</span>
                  <a
                    href="https://data.unicef.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E38363] hover:underline inline-flex items-center gap-0.5 font-mono text-[11px]"
                  >
                    data.unicef.org <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
