import type { Metadata } from "next";
import ProgrammeSection from "@/components/sections/ProgrammeSection";

export const metadata: Metadata = {
  title: "Workshop Programme | PJDSC 2026",
  description:
    "Official schedule, onsite venue details, and online Zoom meeting access for the PJDSC 2026 Project Development Workshop on October 17, 2026.",
};

export default function ProgrammePage() {
  return <ProgrammeSection />;
}
