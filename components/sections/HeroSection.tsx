import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Database, FileText, Github } from "lucide-react";
import { siteData } from "@/lib/siteData";
import MilestoneCountdown from "@/components/MilestoneCountdown";
import DitheredPlantBackground from "@/components/DitheredPlantBackground";

function PatternArtwork() {
  return (
    <div className="pattern-art" aria-hidden="true">
      <div className="art-topline"><span>Public health analytics</span><span>PH / 2026</span></div>
      <svg viewBox="0 0 520 540" fill="none">
        {Array.from({length: 15}, (_, i) => {
          const height = 90 + Math.sin(i * .48) * 85 + i * 8;
          return <rect className="signal-bar" style={{ animationDelay: `${i * -0.23}s` }} key={i} x={83+i*24} y={390-height} width="13" height={height} rx="6.5" fill={i > 9 ? "#e38363" : "#91b7a9"} opacity={.45 + i*.032} />;
        })}
        <path className="health-signal" pathLength="1" d="M53 300H135L161 268L188 316L222 202L251 341L285 247L308 279H352L380 230L408 263H467" stroke="#fafafa" strokeWidth="3" strokeLinejoin="round" />
        <circle className="signal-marker" cx="380" cy="230" r="7" fill="#e38363" stroke="#234766" strokeWidth="3" />
        <path d="M380 223V151H440" stroke="#e38363" strokeWidth="1" />
        <text x="380" y="138" fill="#fafafa" fontSize="10" fontFamily="sans-serif" letterSpacing="0">Find the signal</text>
      </svg>
      <div className="art-bottomline"><span>Trace the pattern.</span><span>Target the cure.</span></div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <div className="event-home">
      <section className="event-hero">
        <DitheredPlantBackground className="hero-cell-background" />
        
        <div className="hero-layout">
          <div className="hero-copy">
            
            <Link href="/finals" className="final-round-tag"><span className="final-round-label">FINAL ROUND</span><span className="final-round-date">Sat, Nov 21 · 8:00 AM</span></Link>
            <h1>Philippine Junior<br /><span>Data Science</span><br />Challenge<span className="title-period">.</span></h1>
            <p className="hero-theme">Trace the Pattern, Target the Cure.</p>
            <p className="hero-description">Turn data into discoveries that matter. Bringing the next generation of Filipino data scientists together to advance public health.</p>
            <div className="hero-actions"><Link href="/primer" className="event-button primary">Explore the challenge <ArrowUpRight size={18} /></Link><Link href="/finals" className="event-button secondary">Finalist primer <ArrowUpRight size={18} /></Link></div>
            <div className="hero-organizer"><Image src="/assets/logos-ver2026/up dssoc/updssoclogoicon.png" alt="" width={32} height={32} /><span>Organized by<br /><strong>UP Data Science Society</strong></span></div>
          </div>
          <PatternArtwork />
        </div>
        <div className="hero-baseline"><span>Science with purpose. Data with direction.</span><a href="#challenge">Discover PJDSC <ArrowDown size={14} /></a></div>
      </section>
      <MilestoneCountdown />
      <section className="event-section announcements-section" aria-labelledby="announcements-heading">
        <div className="section-heading announcements-heading">
          <h2 id="announcements-heading">
            Announcements
          </h2>
        </div>
        <article className="announcement-letter">
          <h3 className="announcement-title">See you at the finals</h3>
          <div className="announcement-body">
            <p>Ten teams advance to the face-to-face final round on <strong>Saturday, November 21, 2026</strong>, at the <strong>CS Auditorium, National Science Complex, UP Diliman</strong>. Ingress starts at 8:00 AM.</p>
            <p>Finalists, the finalist primer has the program flow, venue details, your seating plan, and answers to common questions.</p>
            <p><Link className="editorial-link" href="/finals">Open the finalist primer <ArrowUpRight size={18} /></Link></p>
          </div>
        </article>
      </section>
      <section id="challenge" className="event-section challenge-section">
        <div className="section-heading"><h2>Big questions.<br /><span>Meaningful solutions.</span></h2></div>
        <div className="challenge-content"><p className="section-lead">Better public health starts with a better understanding of data.</p><p>From disease surveillance to healthcare access, PJDSC challenges senior high school and tertiary students to transform real-world datasets into practical solutions for Filipino communities.</p><Link className="editorial-link" href="/about">Get to know PJDSC <ArrowUpRight size={18} /></Link></div>
        <div className="event-stats">{siteData.stats.map(stat => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label === "Slots Available" ? "Team capacity" : stat.label}</span><p>{stat.label === "Slots Available" ? "Across the Philippines" : stat.sub}</p></div>)}</div>
      </section>
      <section className="workshop-feature">
        <div className="workshop-image"><Image src="/assets/workshop-group.png" alt="Participants and speakers at the PJDSC 2026 Project Development Workshop" fill sizes="(max-width: 760px) 100vw, 55vw" className="object-cover" /><span>The PJDSC community · October 17, 2026</span></div>
        <div className="workshop-copy"><h2>Learning together.<br />Building what’s next.</h2><p>Our Project Development Workshop brought teams together at UP Diliman and online for practical analytics tools, expert guidance, and fresh perspectives on public health.</p><p>Dr. Zuniga, Ms. Uriel Alonso, and Dr. Paulyn Claro shared insights to help contenders turn their ideas into working solutions.</p><Link href="/programme" className="editorial-link">Explore the workshop programme <ArrowUpRight size={18} /></Link></div>
      </section>
      <section className="event-section resources-section"><div className="resource-heading"><div><h2>Good work starts here.</h2></div><p>The guidance, data, and tools<br />to take your project further.</p></div>
        <div className="resource-list">{[{num:"01",icon:FileText,title:"The event primer",desc:"Competition mechanics, eligibility, stages, and judging criteria.",href:"/primer",label:"Read the primer"},{num:"02",icon:Database,title:"The dataset catalogue",desc:"Explore curated public health datasets for your next discovery.",href:"/catalogue",label:"Explore datasets"},{num:"03",icon:Github,title:"The open repository",desc:"Historical projects, datasets, and starter notebooks from UP DSSoc.",href:siteData.event.githubRepoLink,label:"Open GitHub"}].map(item => <a key={item.num} href={item.href} className="resource-row" {...(item.href.startsWith("https") ? {target:"_blank",rel:"noopener noreferrer"} : {})}><item.icon size={24} strokeWidth={1.4}/><div><h3>{item.title}</h3><p>{item.desc}</p></div><span className="resource-action">{item.label}</span><ArrowUpRight size={23}/></a>)}</div>
      </section>
      <section className="event-callout"><h2>The next discovery<br />could change everything.</h2><a className="event-button primary" href={siteData.event.facebookLink} target="_blank" rel="noopener noreferrer">Follow the challenge <ArrowUpRight size={18}/></a><span className="callout-year" aria-hidden="true">’26</span></section>
    </div>
  );
}
