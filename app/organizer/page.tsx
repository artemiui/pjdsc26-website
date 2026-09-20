"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OrganizerSection from "@/components/sections/OrganizerSection";
import RegistrationModal from "@/components/RegistrationModal";

export default function OrganizerPage() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <div className="flex-1 flex flex-col">
      <Header onOpenRegister={() => setIsRegisterOpen(true)} />
      <main className="flex-1 pt-6">
        <OrganizerSection />
      </main>
      <Footer />
      <RegistrationModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
    </div>
  );
}
