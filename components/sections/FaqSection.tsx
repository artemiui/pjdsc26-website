"use client";

import { useState } from "react";
import { Plus, Search } from "lucide-react";
import { siteData } from "@/lib/siteData";

const categories = [
  { id: "all", label: "All" },
  { id: "eligibility", label: "Eligibility" },
  { id: "teams", label: "Teams" },
  { id: "technical", label: "Technical" },
  { id: "event", label: "Culmination" },
] as const;

export default function FaqSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const q = searchQuery.toLowerCase().trim();

  const filteredFaqs = siteData.faqs.filter(faq =>
    (activeCategory === "all" || faq.category === activeCategory) &&
    (!q || faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q))
  );

  return (
    <div className="pg">
      <header className="pg-head">
        <h1>Frequently asked questions</h1>
        <p className="pg-lead">Answers about team formation, eligibility, technical guidelines, and the culminating event.</p>
      </header>

      <div className="pg-toolbar">
        <div className="pg-tabs" role="tablist" aria-label="Question categories">
          {categories.map(cat => (
            <button key={cat.id} type="button" role="tab" aria-selected={activeCategory === cat.id} onClick={() => setActiveCategory(cat.id)}>
              {cat.label}
            </button>
          ))}
        </div>
        <label className="pg-search">
          <Search size={16} strokeWidth={1.5} aria-hidden="true" />
          <input type="search" placeholder="Search" aria-label="Search questions" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
        </label>
      </div>

      {filteredFaqs.length === 0 ? (
        <div className="pg-empty">
          <h2 className="pg-h3">No questions match your search</h2>
          <p className="pg-text">Try another word, or show every category.</p>
          <button type="button" className="event-button secondary" onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}>Clear search</button>
        </div>
      ) : (
        <div className="faq-list pg-rule">
          {filteredFaqs.map(faq => (
            <details key={faq.question}>
              <summary>{faq.question}<Plus size={18} strokeWidth={1.5} aria-hidden="true" /></summary>
              <p className="pg-text">{faq.answer}</p>
            </details>
          ))}
        </div>
      )}

      <p className="pg-contact">Have a question not answered here? Email the team at <a href={`mailto:${siteData.event.contactEmail}`}>{siteData.event.contactEmail}</a></p>
    </div>
  );
}
