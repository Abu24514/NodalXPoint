import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import CareersHero from "@/components/sections/Careers/CareersHero";
import WhyJoinUs from "@/components/sections/Careers/WhyJoinUs";
import OpenRoles from "@/components/sections/Careers/OpenRoles";

export const metadata: Metadata = {
  title: "Careers | nodalXpoint",
  description: "Grow your career with nodalXpoint — see our open roles.",
};

export default function CareersPage() {
  return (
    <main className="bg-canvas">
      <Navbar />
      <CareersHero />
      <WhyJoinUs />
      <OpenRoles />
      <Footer />
    </main>
  );
}