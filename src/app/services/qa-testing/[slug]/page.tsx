"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import PageHero from "@/components/common/PageHero";
import CTA from "@/components/sections/Home/cta";
import ServiceFaq from "@/components/sections/Services/ServiceFaq";
import BenefitsSection from "@/components/sections/Services/QA-Testiong/QA/Benefitssection";
import ProcessSection from "@/components/sections/Services/QA-Testiong/QA/Processsection";
import CapabilitiesToolsSection from "@/components/sections/Services/QA-Testiong/QA/Capabilitiestoolssection ";
import OverviewSection from "@/components/sections/Services/QA-Testiong/QA/Overviewsection";
import { getQASubService } from "@/data/qa-services";

export default function QASubServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const data = getQASubService(slug);

  if (!data) {
    notFound();
  }

  const titleWords = data.title.split(" ");
  const titleHighlight = titleWords.pop();
  const titleMain = titleWords.join(" ");

  return (
    <main className="bg-canvas min-h-screen text-body">
      <Navbar />
      <PageHero
        defaultConfig={{
          badge: data.badge,
          title: titleMain,
          titleHighlight: titleHighlight,
          subtitle: data.tagline,
          accentGlow: "var(--color-node)",
        }}
      />

      <section className="mx-auto max-w-7xl space-y-24 px-4 py-20 sm:px-6">
        <OverviewSection overview={data.overview} whoItsFor={data.whoItsFor} />

        <CapabilitiesToolsSection capabilities={data.capabilities} tools={data.tools} />

        <ProcessSection process={data.process} />

        <BenefitsSection benefits={data.benefits} />

        <ServiceFaq />
      </section>

      <CTA />
      <Footer />
    </main>
  );
}