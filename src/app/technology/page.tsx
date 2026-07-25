import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import TechnologyHero from "@/components/sections/Technology/TechnologyHero";
import TechnologyGrid from "@/components/sections/Technology/TechnologyGrid";

export const metadata: Metadata = {
  title: "Technology | nodalXpoint",
  description: "Technologies we build with — Clouds, AI-ML, Data Science, Blockchain, and DevOps.",
};

export default function TechnologyPage() {
  return (
    <main className="bg-canvas">
      <Navbar />
      <TechnologyHero />
      <TechnologyGrid />
      <Footer />
    </main>
  );
}