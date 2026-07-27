import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import TechnologyHero from "@/components/sections/Technology/TechnologyHero";
import TechnologyGrid from "@/components/sections/Technology/TechnologyGrid";
import CTA from "@/components/sections/Home/cta";
import TechnologyStack from "@/components/sections/Services/TechnologyStack";
import TechnologyFaq from "@/components/sections/Technology/Technologyfaq";
import TechnologyOverview from "@/components/sections/Technology/TechnologyOverview";
import Stats from "@/components/sections/Home/stats";
import IndustryGrid from "@/components/sections/Services/IndustryGrid";

export const metadata: Metadata = {
  title: "Technology | nodalXpoint",
  description: "Technologies we build with — Clouds, AI-ML, Data Science, Blockchain, and DevOps.",
};

export default function TechnologyPage() {
  return (
    <main className="bg-canvas">
      <Navbar />
      <TechnologyHero />
      <TechnologyOverview/>
      <TechnologyGrid />
      <TechnologyStack/>
      <IndustryGrid />
      <Stats/>
      <TechnologyFaq/>
      <CTA/>
      <Footer />
    </main>
  );
}