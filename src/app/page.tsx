import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import Hero from "@/components/sections/Hero/Hero";
import Services from "@/components/sections/Home/service";
import Process from "@/components/sections/Home/process";
import Stats from "@/components/sections/Home/stats";
import Work from "@/components/sections/Home/work";
import Testimonials from "@/components/sections/Home/Testimonials";
import CTA from "@/components/sections/Home/cta";

export default function Home() {
  return (
    <main className="bg-canvas">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Stats />
      <Work />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}