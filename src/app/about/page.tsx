import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import AboutHero from "@/components/sections/About/AboutHero";
import AboutHub from "@/components/sections/About/Abouthub";

export const metadata: Metadata = {
  title: "About | nodalXpoint",
  description: "Our story, our people, open roles, and how to reach nodalXpoint.",
};

export default function AboutPage() {
  return (
    <main className="bg-canvas">
      <Navbar />
      <AboutHero />
      <AboutHub />
      <Footer />
    </main>
  );
}