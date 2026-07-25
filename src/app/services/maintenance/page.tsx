"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import PageHero from "@/components/common/PageHero";
import CTA from "@/components/sections/Home/cta";
import MaintenanceGrid from "@/components/sections/Services/Maintenance/MaintenaceGrid";
import MaintenanceFlow from "@/components/sections/Services/Maintenance/MaintenceFlow";
import MaintenanceWhy from "@/components/sections/Services/Maintenance/MaintenceWhy";
import MaintenanceTech from "@/components/sections/Services/Maintenance/MaintenceTech";

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
          badge: DATA.badge,
          title: "Maintenance &",
          titleHighlight: "Support",
          subtitle: DATA.tagline,
          accentGlow: "#2563EB",
        }}
      />

      <section className="mx-auto max-w-6xl space-y-20 px-4 py-14 sm:px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 font-mono text-xs text-slate-500">
          <Link href="/" className="hover:text-[#2563EB]">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-[#2563EB]">Services</Link>
          <span>/</span>
          <span className="font-bold text-[#0F172A]">{DATA.title}</span>
        </nav>

       
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