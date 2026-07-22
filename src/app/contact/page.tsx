import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import ContactHero from "@/components/sections/Contact/ContactHero";
import ContactForm from "@/components/sections/Contact/ContactForm";
import ContactInfo from "@/components/sections/Contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contact | nodalXpoint",
  description: "Let's build something together — get in touch with nodalXpoint.",
};

export default function ContactPage() {
  return (
    <main className="bg-canvas">
      <Navbar />
      <ContactHero />

      <section className="w-full bg-canvas py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 lg:grid-cols-[1.4fr_1fr]">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>

      <Footer />
    </main>
  );
}