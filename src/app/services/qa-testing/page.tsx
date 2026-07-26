"use client";

import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import PageHero from "@/components/common/PageHero";
import CTA from "@/components/sections/Home/cta"; 
import MaintenanceWhy from "@/components/sections/Services/Maintenance/MaintenceWhy";
import TestingProcess from "@/components/sections/Services/QA-Testiong/TestingProcess";
import QAServices from "@/components/sections/Services/QA-Testiong/QAServices";
import ToolsTechnologies from "@/components/sections/Services/QA-Testiong/ToolsTechnologies";
import ServiceFaq from "@/components/sections/Services/ServiceFaq";

export default function QATestingAndSecurityPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans overflow-hidden">
      <Navbar />

      <PageHero
        defaultConfig={{
          badge: "Enterprise Quality & Protection",
          title: "QA Testing &",
          titleHighlight: "Security",
          subtitle: "End-to-End Bug Detection, Performance Optimization & Cyber Security",
          accentGlow: "#3b82f6", 
        }}
      />

      <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-32">
        <QAServices/>
        <MaintenanceWhy/>
        <TestingProcess/>
        <ToolsTechnologies/>
        <ServiceFaq/>
      </section>
      <CTA />

      <Footer />
    </main>
  );
}