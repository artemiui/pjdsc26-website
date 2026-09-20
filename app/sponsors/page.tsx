"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SponsorsSection from "@/components/sections/SponsorsSection";
import RegistrationModal from "@/components/RegistrationModal";

export default function SponsorsPage() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <div className="flex-1 flex flex-col">
      <Header onOpenRegister={() => setIsRegisterOpen(true)} />
      <main className="flex-1 pt-6">
        <SponsorsSection />
      </main>
      <Footer />
      <RegistrationModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
    </div>
  );
}
