"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Github, Search } from "lucide-react";
import { siteData, DatasetItem } from "@/lib/siteData";

const categoryFilters = [
  { id: "all", label: "All datasets" },
  { id: "philippines", label: "Local (Philippines)" },
  { id: "infectious", label: "Infectious diseases" },
  { id: "environmental", label: "Environmental and WASH" },
  { id: "maternal-pediatric", label: "Maternal and pediatric" },
  { id: "chronic", label: "Chronic diseases and aging" },
  { id: "global", label: "Global health and demographics" },
] as const;

const portals = [
  { name: "Philippine Open Data", href: "https://data.gov.ph", label: "data.gov.ph" },
  { name: "WHO Global Health Observatory", href: "https://www.who.int/data/gho", label: "who.int/data/gho" },
  { name: "Humanitarian Data Exchange (HDX)", href: "https://data.humdata.org", label: "humdata.org" },
  { name: "UNICEF Data Warehouse", href: "https://data.unicef.org", label: "data.unicef.org" },
];

export default function CatalogueSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const datasets = siteData.datasetCatalogue || [];

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return datasets.filter((item: DatasetItem) =>
      (activeCategory === "all" || item.category === activeCategory) &&
      (!q || [item.title, item.subtitle ?? "", item.organization, item.organizationShort, item.description, item.categoryLabel, ...item.highlights]
        .some(field => field.toLowerCase().includes(q)))
    );
  }, [datasets, activeCategory, searchQuery]);

  return (
    <div className="pg">
      <header className="pg-head">
        <h1>Dataset catalogue</h1>
        <p className="pg-lead">Curated open health datasets for predictive modeling, risk analysis, and concept proposals for PJDSC 2026.</p>
      </header>

      <div className="pg-toolbar">
        <div className="pg-tabs" role="tablist" aria-label="Dataset categories">
          {categoryFilters.map(cat => {
            const count = cat.id === "all" ? datasets.length : datasets.filter(d => d.category === cat.id).length;
            return (
              <button key={cat.id} type="button" role="tab" aria-selected={activeCategory === cat.id} onClick={() => setActiveCategory(cat.id)}>
                {cat.label}<span className="pg-count">{count}</span>
              </button>
            );
          })}
        </div>
        <label className="pg-search">
          <Search size={16} strokeWidth={1.5} aria-hidden="true" />
          <input type="search" placeholder="Search" aria-label="Search datasets" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
        </label>
      </div>

      {filtered.length === 0 ? (
        <div className="pg-empty">
          <h2 className="pg-h3">No datasets match your search</h2>
          <p className="pg-text">Try another word or category.</p>
          <button type="button" className="event-button secondary" onClick={() => { setActiveCategory("all"); setSearchQuery(""); }}>Reset filters</button>
        </div>
      ) : (
        <div className="cat-grid">
          {filtered.map(item => (
            <article key={item.id} className="cat-item">
              <div className="cat-meta">
                <strong>{item.organizationShort}</strong>
                {item.timeframe && <span>{item.timeframe}</span>}
                <span><i className="pg-dot" style={{ background: item.scope === "Local (PH)" ? "#e38363" : "#6e9e94" }} />{item.scope}</span>
              </div>
              <h2 className="pg-h3">{item.title}</h2>
              {item.subtitle && <p className="cat-sub">{item.subtitle}</p>}
              <p className="pg-text">{item.description}</p>
              <ul className="pg-list">
                {item.highlights.map(h => <li key={h}>{h}</li>)}
              </ul>
              <div className="cat-foot">
                <span>{item.categoryLabel}</span>
                <a className="pg-link" href={item.url} target="_blank" rel="noopener noreferrer">Source <ArrowUpRight size={14} /></a>
              </div>
            </article>
          ))}
        </div>
      )}

      <section className="cat-extra">
        <div>
          <h2 className="pg-h2">Past PJDSC datasets</h2>
          <p className="pg-text">Previous competition datasets, exploratory data analysis starter notebooks, and code templates are in the official UP Data Science Society GitHub repository.</p>
          <a className="event-button primary" href={siteData.event.githubRepoLink} target="_blank" rel="noopener noreferrer">
            <Github size={16} strokeWidth={1.75} /> Open the repository <ArrowUpRight size={16} />
          </a>
        </div>
        <div>
          <h2 className="pg-h3" style={{ marginBottom: 12 }}>Recommended open data portals</h2>
          <ul className="cat-portals">
            {portals.map(p => (
              <li key={p.href}>
                <span>{p.name}</span>
                <a className="pg-link" href={p.href} target="_blank" rel="noopener noreferrer">{p.label} <ArrowUpRight size={14} /></a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
