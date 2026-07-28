"use client";

import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import PageHero from "@/components/common/PageHero";
import CTA from "@/components/sections/Home/cta";

import TechnologyStack from "@/components/sections/Services/TechnologyStack";
import SoftwareFaq from "@/components/sections/Services/SoftwareDevelopment/Softwarefaq";
import DeliveryProcess from "@/components/sections/Services/SoftwareDevelopment/DeliveryProcess";
import SoftwareOverview from "@/components/sections/Services/SoftwareDevelopment/SoftwareOverview";
import SoftwareTypes from "@/components/sections/Services/SoftwareDevelopment/SoftwareTypes";
import Stats from "@/components/sections/Home/stats";

// --- Data Constants ---
const DATA = {
  title: "Software Development",
  tagline: "Custom Web, Mobile & Enterprise Engineering",
  description:
    "Custom software development tailored to your business model, architected for high speed, reliability, and global scale.",
  badge: "Software Engineering",
};

export default function SoftwareDevelopmentPage() {
  return (
    <main className="bg-canvas min-h-screen text-body">
      <Navbar />
      <PageHero
        defaultConfig={{
          badge: DATA.badge,
          title: "Software",
          titleHighlight: "Development",
          subtitle: DATA.tagline,
          accentGlow: "var(--color-node)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 py-20 ">
        <SoftwareOverview />
        <SoftwareTypes />
        <TechnologyStack />
        <DeliveryProcess />
      </div>
      <Stats />
      <SoftwareFaq />
      <CTA />
      <Footer />
    </main>
  );
}
