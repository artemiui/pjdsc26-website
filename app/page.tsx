"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import PrimerSection from "@/components/sections/PrimerSection";
import TimelineSection from "@/components/sections/TimelineSection";
import OrganizerSection from "@/components/sections/OrganizerSection";
import FaqSection from "@/components/sections/FaqSection";
import SponsorsSection from "@/components/sections/SponsorsSection";
import RegistrationModal from "@/components/RegistrationModal";

export default function Home() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleOpenRegister = () => {
    setIsRegisterOpen(true);
  };

  const handleCloseRegister = () => {
    setIsRegisterOpen(false);
  };

  return (
    <div className="flex-1 flex flex-col">
      <Header onOpenRegister={handleOpenRegister} />

      <main className="flex-1">
        {/* Hero & Event Overview */}
        <HeroSection onOpenRegister={handleOpenRegister} />

        {/* Competition Primer, Eligibility & Mechanics */}
        <PrimerSection onOpenRegister={handleOpenRegister} />

        {/* Event Timeline */}
        <TimelineSection />

        {/* About the Organizer: UP Data Science Society */}
        <OrganizerSection />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Sponsor Showcase & Placeholders */}
        <SponsorsSection />
      </main>

      <Footer />

      {/* Registration Modal Dialog */}
      <RegistrationModal isOpen={isRegisterOpen} onClose={handleCloseRegister} />
    </div>
  );
}
