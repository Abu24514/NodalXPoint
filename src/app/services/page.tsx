"use client";

import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import PageHero from "@/components/common/PageHero";
import CompanyOverview from "@/components/sections/Services/CompanyOverview";
import ServicesGrid from "@/components/sections/Services/ServicesGrid";
import DevelopmentProcess from "@/components/sections/Services/DevelopmentProcess";
import TechnologyStack from "@/components/sections/Services/TechnologyStack";
import IndustryGrid from "@/components/sections/Services/IndustryGrid";
import WhyChooseUs from "@/components/sections/Services/WhyChooseUs";
import Stats from "@/components/sections/Home/stats";
import CTA from "@/components/sections/Home/cta";
import ServiceFaq from "@/components/sections/Services/ServiceFaq";
import BrochureDownload from "@/components/sections/Services/Brochuredownload ";
export default function ServicesMainPage() {
  return (
    <main className="bg-canvas min-h-screen text-body">
      <Navbar />
      <PageHero
        defaultConfig={{
          badge: "OUR CORE SERVICES",
          title: "Enterprise Software Solutions Built for",
          titleHighlight: "Modern Businesses.",
          subtitle:
            "We design, build, deploy and maintain scalable digital products that help businesses grow faster through modern engineering, cloud technologies and AI-powered solutions.",
          accentGlow: "var(--color-node)",
        }}
      />
      <CompanyOverview />
      <ServicesGrid />
      <DevelopmentProcess />
      <TechnologyStack />
      <IndustryGrid />
      <WhyChooseUs />
      <Stats />
      <BrochureDownload/>
      <ServiceFaq/>
      <CTA />
      <Footer />
    </main>
  );
}