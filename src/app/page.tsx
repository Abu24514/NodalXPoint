import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import Hero from "@/components/sections/Hero/Hero";
import Services from "@/components/sections/service";
import Process from "@/components/sections/process";
import Stats from "@/components/sections/stats";
import Work from "@/components/sections/work";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/cta";
// import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-canvas">
      <Navbar />
      <Hero />
      {/* <TechMarquee /> */}
      <Services />
      <Process />
      <Stats />
      <Work />
      <Testimonials />np
      <CTA />
      <Footer />
    </main>
  );
}