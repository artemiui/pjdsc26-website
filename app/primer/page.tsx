"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PrimerSection from "@/components/sections/PrimerSection";
import RegistrationModal from "@/components/RegistrationModal";

export default function PrimerPage() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <div className="flex-1 flex flex-col">
      <Header onOpenRegister={() => setIsRegisterOpen(true)} />
      <main className="flex-1 pt-6">
        <PrimerSection onOpenRegister={() => setIsRegisterOpen(true)} />
      </main>
      <Footer />
      <RegistrationModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
    </div>
  );
}
