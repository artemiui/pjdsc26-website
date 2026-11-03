"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteData } from "@/lib/siteData";

export default function MilestoneCountdown() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);
  const milestone = now === null ? null : siteData.milestones.find(item => new Date(item.targetDate).getTime() > now);
  const remaining = milestone && now ? Math.max(0, new Date(milestone.targetDate).getTime() - now) : 0;
  const values = [Math.floor(remaining / 86400000), Math.floor(remaining / 3600000) % 24, Math.floor(remaining / 60000) % 60, Math.floor(remaining / 1000) % 60];
  return <section className="milestone-strip" aria-label="Next competition milestone"><div><h2>{now === null ? "Every stage brings us closer." : milestone?.name || "A challenge with lasting impact."}</h2><p className="milestone-date">{milestone?.dateDisplay || "Explore the full competition timeline."}</p>{milestone?.id === "top-10-announcement" && <p className="milestone-note">Subject to change based on the event calendar.</p>}</div>{milestone && <div className="countdown" aria-label="Time until next milestone">{values.map((value, i) => <div key={i}><strong>{String(value).padStart(2, "0")}</strong><span>{["DAYS","HOURS","MINS","SECS"][i]}</span></div>)}</div>}<Link href="/timeline" className="milestone-link">Full timeline <ArrowUpRight size={18}/></Link></section>;
}
