import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import IndustryGrid from "@/components/sections/Services/IndustryGrid";
import Stats from "@/components/sections/Home/stats";

import PageHero from "@/components/common/PageHero"; 
import SectionHeader from "@/components/common/SectionBadge"; 
import MaintenanceTech from "@/components/sections/Services/Maintenance/MaintenceTech"
import { TECHNOLOGY_SERVICES } from "@/data/Technology";
import TechnologyFaq from "@/components/sections/Technology/Technologyfaq";

type Slug = keyof typeof TECHNOLOGY_SERVICES;

export function generateStaticParams() {
  return Object.keys(TECHNOLOGY_SERVICES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!(slug in TECHNOLOGY_SERVICES)) return {};
  
  const page = TECHNOLOGY_SERVICES[slug as Slug];
  return { 
    title: `${page.hero.title} ${page.hero.titleHighlight} | nodalXpoint`, 
    description: page.hero.subtitle 
  };
}

export default async function TechnologySubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!(slug in TECHNOLOGY_SERVICES)) {
    return notFound();
  }

  const page = TECHNOLOGY_SERVICES[slug as Slug];

  return (
    <main className="bg-canvas min-h-screen font-body text-body">
      <Navbar />
      
      <PageHero defaultConfig={page.hero} />

      {page.overview && (
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
            
              <p className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-ink sm:text-xs sm:tracking-[0.25em]">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-node animate-soft-pulse" />
                Overview
              </p>

              <h2 className="font-display text-4xl font-extrabold mb-6 tracking-tight text-body">
                {page.overview.title} <span className="text-node">{page.overview.titleHighlight}</span>
              </h2>
              <p className="text-lg text-muted-ink mb-8 leading-relaxed">
                {page.overview.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {page.overview.tags.map((tag, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-node/10 text-node flex items-center justify-center">
                      <span className="text-xl font-bold">✓</span>
                    </div>
                    <span className="font-semibold text-body">{tag.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img 
                src={page.overview.images.primarySrc} 
                alt={page.overview.title} 
                className="rounded-3xl shadow-xl w-full object-cover h-112.5" 
              />
              {page.overview.floatingStat && (
                <div className="absolute -bottom-8 -left-8 bg-surface p-5 rounded-2xl shadow-2xl border border-line flex flex-col gap-1 z-10">
                  <span className="text-sm text-muted-ink font-medium uppercase tracking-wider">
                    {page.overview.floatingStat.label}
                  </span>
                  <span className="font-display text-2xl font-bold text-node">
                    {page.overview.floatingStat.value}
                  </span>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

    
      {page.features && (
        <section className="py-20 px-6 bg-surface grid-lines border-y border-line">
          <div className="max-w-7xl mx-auto">
            
            
            <div className="mb-16">
              <SectionHeader 
                badge="Capabilities"
                title={page.features.title}
                titleHighlight={page.features.titleHighlight}
                subtitle={page.features.description}
                highlightColorClass="text-node"
                dotColorClass="bg-node"
              />
            </div>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {page.features.tags.map((tag, index) => (
                <div 
                  key={index} 
                  className="bg-canvas p-8 rounded-3xl shadow-sm border border-line hover:shadow-md hover:border-node/30 transition-all duration-300 flex flex-col items-center text-center group"
                >
                  <div className="w-14 h-14 bg-node/10 text-node group-hover:bg-node group-hover:text-surface transition-colors duration-300 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold">✦</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-body">{tag.text}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <IndustryGrid />
      <Stats />
      <MaintenanceTech/>
      <TechnologyFaq/>
      <Footer />
    </main>
  );
}