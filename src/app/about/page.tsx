import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import AboutHero from "@/components/sections/About/AboutHero";
import TechnologyStack from "@/components/sections/Services/TechnologyStack";
import WhyChooseUs from "@/components/sections/Services/WhyChooseUs";
import IndustryGrid from "@/components/sections/Services/IndustryGrid";
import DevelopmentProcess from "@/components/sections/Services/DevelopmentProcess";
import Who from "@/components/sections/About/AboutWho";
import CTA from "@/components/sections/Home/cta";
import OurMissionAndVision from "@/components/sections/About/OurMissionAndVision";
import Values from "@/components/sections/About/Values";
import CompanyState from "@/components/sections/About/CompanyStats";
import AboutFAQ from "@/components/sections/About/Aboutfaq";


export const metadata: Metadata = {
  title: "About | nodalXpoint",
  description: "Our story, our people, open roles, and how to reach nodalXpoint.",
};

export default function AboutPage() {
  return (
    <main className="bg-canvas">
      <Navbar />
      <AboutHero />
      <Who/>
      <OurMissionAndVision/>
      <WhyChooseUs />
      <DevelopmentProcess />
      <TechnologyStack/>
      <IndustryGrid />
      <Values/>
      <CompanyState/>
      <AboutFAQ/>
       <CTA/>
      <Footer />
    </main>
  );
}