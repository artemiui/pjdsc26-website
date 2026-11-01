import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Database, FileText, Github } from "lucide-react";
import { siteData } from "@/lib/siteData";
import MilestoneCountdown from "@/components/MilestoneCountdown";

function PatternArtwork() {
  return (
    <div className="pattern-art" aria-hidden="true">
      <div className="art-topline"><span>PUBLIC HEALTH ANALYTICS</span><span>PH / 2026</span></div>
      <svg viewBox="0 0 520 540" fill="none">
        <defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#a8c7bc" opacity=".3" /></pattern></defs>
        <rect width="520" height="540" fill="url(#dots)" />
        <circle cx="260" cy="267" r="192" stroke="#a8c7bc" strokeOpacity=".22" />
        <circle cx="260" cy="267" r="145" stroke="#a8c7bc" strokeOpacity=".35" />
        <circle cx="260" cy="267" r="96" stroke="#a8c7bc" strokeOpacity=".25" />
        <path d="M260 50V480M43 267H477" stroke="#a8c7bc" strokeOpacity=".25" strokeDasharray="4 8" />
        {Array.from({length: 15}, (_, i) => {
          const height = 90 + Math.sin(i * .48) * 85 + i * 8;
          return <rect key={i} x={83+i*24} y={390-height} width="13" height={height} rx="6.5" fill={i > 9 ? "#e38363" : "#91b7a9"} opacity={.45 + i*.032} />;
        })}
        <path d="M53 300H135L161 268L188 316L222 202L251 341L285 247L308 279H352L380 230L408 263H467" stroke="#f6f3eb" strokeWidth="3" strokeLinejoin="round" />
        <circle cx="380" cy="230" r="7" fill="#e38363" stroke="#234766" strokeWidth="3" />
        <path d="M380 223V151H440" stroke="#e38363" strokeWidth="1" />
        <text x="380" y="138" fill="#f6f3eb" fontSize="10" fontFamily="sans-serif" letterSpacing="2">FIND THE SIGNAL</text>
        <text x="64" y="464" fill="#a8c7bc" fontSize="10" fontFamily="sans-serif" letterSpacing="2">DATA → INSIGHT → IMPACT</text>
      </svg>
      <div className="art-bottomline"><span>Trace the pattern.</span><span>Target the cure. ↗</span></div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <div className="event-home">
      <section className="event-hero">
        
        <div className="hero-layout">
          <div className="hero-copy">
            
            <h1>Philippine Junior<br /><span>Data Science</span><br />Challenge<span className="title-period">.</span></h1>
            <p className="hero-theme">Trace the Pattern, Target the Cure.</p>
            <p className="hero-description">Turn data into discoveries that matter. Bringing the next generation of Filipino data scientists together to advance public health.</p>
            <div className="hero-actions"><Link href="/primer" className="event-button primary">Explore the challenge <ArrowUpRight size={18} /></Link><Link href="/catalogue" className="event-button secondary">Browse datasets <ArrowUpRight size={18} /></Link></div>
            <div className="hero-organizer"><Image src="/assets/logos-ver2026/up dssoc/updssoclogoicon.png" alt="" width={32} height={32} /><span>Organized by<br /><strong>UP Data Science Society</strong></span></div>
          </div>
          <PatternArtwork />
        </div>
        <div className="hero-baseline"><span>SCIENCE WITH PURPOSE. DATA WITH DIRECTION.</span><a href="#challenge">Discover PJDSC <ArrowDown size={14} /></a></div>
      </section>
      <MilestoneCountdown />
      <section id="challenge" className="event-section challenge-section">
        <div className="section-heading"><h2>Big questions.<br /><span>Meaningful solutions.</span></h2></div>
        <div className="challenge-content"><p className="section-lead">Better public health starts with a better understanding of data.</p><p>From disease surveillance to healthcare access, PJDSC challenges senior high school and tertiary students to transform real-world datasets into practical solutions for Filipino communities.</p><Link className="editorial-link" href="/about">Get to know PJDSC <ArrowUpRight size={18} /></Link></div>
        <div className="event-stats">{siteData.stats.map(stat => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label === "Slots Available" ? "Team capacity" : stat.label}</span><p>{stat.label === "Slots Available" ? "Across the Philippines" : stat.sub}</p></div>)}</div>
      </section>
      <section className="workshop-feature">
        <div className="workshop-image"><Image src="/assets/workshop-group.png" alt="Participants and speakers at the PJDSC 2026 Project Development Workshop" fill sizes="(max-width: 760px) 100vw, 55vw" className="object-cover" /><span>THE PJDSC COMMUNITY / OCTOBER 17, 2026</span></div>
        <div className="workshop-copy"><h2>Learning together.<br />Building what’s next.</h2><p>Our Project Development Workshop brought teams together at UP Diliman and online for practical analytics tools, expert guidance, and fresh perspectives on public health.</p><p>Dr. Zuniga, Ms. Uriel Alonso, and Dr. Paulyn Claro shared insights to help contenders turn their ideas into working solutions.</p><Link href="/programme" className="editorial-link">Explore the workshop programme <ArrowUpRight size={18} /></Link></div>
      </section>
      <section className="event-section resources-section"><div className="resource-heading"><div><h2>Good work starts here.</h2></div><p>The guidance, data, and tools<br />to take your project further.</p></div>
        <div className="resource-list">{[{num:"01",icon:FileText,title:"The event primer",desc:"Competition mechanics, eligibility, stages, and judging criteria.",href:"/primer",label:"Read the primer"},{num:"02",icon:Database,title:"The dataset catalogue",desc:"Explore curated public health datasets for your next discovery.",href:"/catalogue",label:"Explore datasets"},{num:"03",icon:Github,title:"The open repository",desc:"Historical projects, datasets, and starter notebooks from UP DSSoc.",href:siteData.event.githubRepoLink,label:"Open GitHub"}].map(item => <a key={item.num} href={item.href} className="resource-row" {...(item.href.startsWith("https") ? {target:"_blank",rel:"noopener noreferrer"} : {})}><item.icon size={24} strokeWidth={1.4}/><div><h3>{item.title}</h3><p>{item.desc}</p></div><span className="resource-action">{item.label}</span><ArrowUpRight size={23}/></a>)}</div>
      </section>
      <section className="event-callout"><h2>The next discovery<br />could change everything.</h2><a className="event-button primary" href={siteData.event.facebookLink} target="_blank" rel="noopener noreferrer">Follow the challenge <ArrowUpRight size={18}/></a><span className="callout-year" aria-hidden="true">’26</span></section>
    </div>
  );
}
