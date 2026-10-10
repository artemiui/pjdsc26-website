import type { Metadata } from "next";
import CatalogueSection from "@/components/sections/CatalogueSection";

export const metadata: Metadata = {
  title: "Dataset Catalogue | PJDSC 2026",
  description:
    "Curated collection of suggested public health datasets to jumpstart concept proposals and predictive analytics for the Philippine Junior Data Science Challenge 2026.",
};

export default function CataloguePage() {
  return <CatalogueSection />;
}
