import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import IndustriesHero from "@/components/sections/Industries/IndustriesHero";

import { INDUSTRY_DETAILS, IndustryKey } from "@/lib/industriesData"; 
import Education from "@/components/sections/Industries/education";
import Finance from "@/components/sections/Industries/Financial";
import Healthcare from "@/components/sections/Industries/healthcare";
import Ecommerce from "@/components/sections/Industries/Ecommerce";

export function generateStaticParams() {
  return Object.keys(INDUSTRY_DETAILS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = INDUSTRY_DETAILS[slug as IndustryKey];
  if (!page) return {};
  return { title: `${page.title} | nodalXpoint`, description: page.tagline };
}

export default async function IndustrySubPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  if (!(slug in INDUSTRY_DETAILS)) {
    return notFound();
  }

  const page = INDUSTRY_DETAILS[slug as IndustryKey];
  
  const { icon: Icon, ...pageData } = page;

  return (
    <main className="bg-canvas min-h-screen font-body text-body">
      <Navbar />
      <IndustriesHero slug={slug} />
      {slug === "ecommerce" && <Ecommerce page={pageData} />}
      {slug === "healthcare" && <Healthcare page={pageData} />}
      {slug === "finance" && <Finance page={pageData} />}
      {slug === "education" && <Education page={pageData} />}

      <section className="py-24 px-6 bg-surface border-t border-line relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-4xl bg-node/10 text-node shadow-sm">
            <Icon size={40} />
          </div>
          <h2 className="font-display text-3xl font-semibold text-body sm:text-4xl mb-6">
            {pageData.ctaTitle}
          </h2>
          <p className="text-lg text-muted-ink mb-10 max-w-2xl mx-auto">
            {pageData.ctaSubtitle}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-node px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-node-soft hover:shadow-xl hover:shadow-node/20"
          >
            Start Your Project
            <FiArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}