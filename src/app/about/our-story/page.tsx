import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import OurStoryHero from "@/components/sections/About/OurStoryHero";
import OurStory from "@/components/sections/About/OurStory";
import Values from "@/components/sections/About/Values";
import JoinCTA from "@/components/sections/About/JoinCTA";

export const metadata: Metadata = {
  title: "Our Story | nodalXpoint",
  description: "Know who we are and what we build.",
};

export default function OurStoryPage() {
  return (
    <main className="bg-canvas">
      <Navbar />
      <OurStoryHero />
      <OurStory />
      <Values />
      <JoinCTA />
      <Footer />
    </main>
  );
}