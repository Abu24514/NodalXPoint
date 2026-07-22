import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import LeadershipHero from "@/components/sections/Leadership/LeadershipHero";
import TeamGrid from "@/components/sections/Leadership/TeamGrid";
import JoinCTA from "@/components/sections/About/JoinCTA";

export const metadata: Metadata = {
  title: "Leadership | nodalXpoint",
  description: "Meet the people behind nodalXpoint.",
};

export default function LeadershipPage() {
  return (
    <main className="bg-canvas">
      <Navbar />
      <LeadershipHero />
      <TeamGrid />
      <JoinCTA />
      <Footer />
    </main>
  );
}