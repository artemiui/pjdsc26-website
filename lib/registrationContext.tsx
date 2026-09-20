"use client";

import React, { createContext, useContext, useState } from "react";
import RegistrationModal from "@/components/RegistrationModal";

interface RegistrationContextType {
  isOpen: boolean;
  openRegister: () => void;
  closeRegister: () => void;
}

const RegistrationContext = createContext<RegistrationContextType | undefined>(undefined);

export function RegistrationProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openRegister = () => setIsOpen(true);
  const closeRegister = () => setIsOpen(false);

  return (
    <RegistrationContext.Provider value={{ isOpen, openRegister, closeRegister }}>
      {children}
      <RegistrationModal isOpen={isOpen} onClose={closeRegister} />
    </RegistrationContext.Provider>
  );
}

export function useRegistration() {
  const context = useContext(RegistrationContext);
  if (!context) {
    throw new Error("useRegistration must be used within a RegistrationProvider");
  }
  return context;
}
