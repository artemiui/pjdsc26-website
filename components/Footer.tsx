import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteData } from "@/lib/siteData";

export default function Footer() {
  return <footer className="event-footer"><div className="footer-top"><div><Link href="/" className="footer-brand"><Image src="/assets/logos-ver2026/pjdsc 2026/svg/White Bars_1.svg" alt="" width={44} height={34}/>PJDSC 2026</Link><p>Philippine Junior Data Science Challenge.<br/>An initiative of the UP Data Science Society.</p></div><div><span className="eyebrow">EXPLORE</span><Link href="/primer">Event primer</Link><Link href="/timeline">Competition timeline</Link><Link href="/sponsors">Sponsors & partners</Link></div><div><span className="eyebrow">RESOURCES</span><Link href="/catalogue">Dataset catalogue</Link><a href={siteData.event.githubRepoLink} target="_blank" rel="noopener noreferrer">GitHub repository ↗</a><Link href="/faq">Frequently asked questions</Link></div><div><span className="eyebrow">LET’S CONNECT</span><a href={`mailto:${siteData.event.contactEmail}`}>Contact the team <ArrowUpRight size={14}/></a><a href={siteData.event.facebookLink} target="_blank" rel="noopener noreferrer">Facebook <ArrowUpRight size={14}/></a><Link href="/organizer">Meet UP DSSoc</Link></div></div><div className="footer-wordmark" aria-hidden="true">DATA FOR<span> A BETTER PH.</span></div><div className="footer-bottom"><span>© 2026 UP Data Science Society</span><span>Trace the Pattern, Target the Cure.</span><span>MADE FOR MEANINGFUL IMPACT ↗</span></div></footer>;
}
