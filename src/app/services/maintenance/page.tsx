"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import PageHero from "@/components/common/PageHero";
import CTA from "@/components/sections/Home/cta";
import MaintenanceFlow from "@/components/sections/Services/Maintenance/MaintenceFlow";
import MaintenanceWhy from "@/components/sections/Services/Maintenance/MaintenceWhy";
import MaintenanceTech from "@/components/sections/Services/Maintenance/MaintenceTech";
import MaintenanceGrid from "@/components/sections/Services/Maintenance/MaintenanceGrid";

const DATA = {
  title: "Maintenance & Support",
  tagline: "24/7 System Health, Security Patching & Optimization",
  description:
    "Proactive application monitoring, dependency updates, server health checks, and rapid bug fixing to guarantee maximum uptime.",
  badge: "System Reliability",
};

export default function MaintenancePage() {
  return (
    <main className="min-h-screen bg-white text-[#0F172A]">
      <Navbar />
        <PageHero
              defaultConfig={{
                badge: "Maintenance & Support",
                title: "Reliable Support That Grows With ",
                titleHighlight: "Your Business.",
                subtitle:
                  "Launching your project is just the beginning. At NodalXpoint, we provide continuous maintenance, proactive monitoring, and dedicated technical support to ensure your digital products remain secure, high-performing, and ready to evolve with your business needs.",
                accentGlow: "var(--color-node)",
              }}
            />

      <section className="mx-auto max-w-6xl space-y-20 px-4 py-14 sm:px-6">
        <MaintenanceGrid/>
        <MaintenanceFlow />
        <MaintenanceWhy />
        <MaintenanceTech />
      </section>

      <CTA />
      <Footer />
    </main>
  );
}