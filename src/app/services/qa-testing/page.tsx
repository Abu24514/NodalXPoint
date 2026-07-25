"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import PageHero from "@/components/common/PageHero";
import CTA from "@/components/sections/Home/cta"; 



import QAAbout from "@/components/sections/Services/QA-Testiong/QAAbout";
import QAServicesList from "@/components/sections/Services/QA-Testiong/QAServicesList";
import SecurityServicesList from "@/components/sections/Services/QA-Testiong/SecurityServicesList";
import TestingProcess from "@/components/sections/Services/QA-Testiong/TestingProcess";
import QATools from "@/components/sections/Services/QA-Testiong/QATools";
import QAFeatures from "@/components/sections/Services/QA-Testiong/QAFeatures";

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
        
        {/* Background Decorative Blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo-400/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3"></div>

        {/* Breadcrumb */}
        <motion.nav 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="flex items-center gap-2 font-mono text-xs text-slate-500 relative z-10"
        >
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
          <span>/</span>
          <span className="font-bold text-slate-900">QA Testing & Security</span>
        </motion.nav>

        <QAAbout/>
        <QAServicesList />
        <SecurityServicesList />
        <TestingProcess />
        <QATools />
        <QAFeatures />
      </section>

      <CTA />

      <Footer />
    </main>
  );
}