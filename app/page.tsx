import HeroSection from "@/components/sections/HeroSection";
import PrimerSection from "@/components/sections/PrimerSection";
import TimelineSection from "@/components/sections/TimelineSection";
import OrganizerSection from "@/components/sections/OrganizerSection";
import FaqSection from "@/components/sections/FaqSection";
import SponsorsSection from "@/components/sections/SponsorsSection";

export default function Home() {
  return (
    <div className="space-y-6">
      <HeroSection />
      <div className="border-t border-zinc-200 dark:border-zinc-800" />
      <PrimerSection />
      <div className="border-t border-zinc-200 dark:border-zinc-800" />
      <TimelineSection />
      <div className="border-t border-zinc-200 dark:border-zinc-800" />
      <OrganizerSection />
      <div className="border-t border-zinc-200 dark:border-zinc-800" />
      <FaqSection />
      <div className="border-t border-zinc-200 dark:border-zinc-800" />
      <SponsorsSection />
    </div>
  );
}
