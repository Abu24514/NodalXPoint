import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import IndustriesHero from "@/components/sections/Industries/IndustriesHero";
import IndustriesGrid from "@/components/sections/Industries/IndustriesGrid";

export const metadata: Metadata = {
  title: "Industries We Serve | nodalXpoint",
  description: "Purpose-built digital solutions for Healthcare, Education, E-Commerce, and Finance.",
};

export default function IndustriesPage() {
  return (
    <main className="bg-canvas min-h-screen font-body text-body">
      <Navbar />
      <IndustriesHero />
      <IndustriesGrid />
      <Footer />
    </main>
  );
}