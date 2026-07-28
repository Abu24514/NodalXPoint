import { notFound } from "next/navigation";

import PageHero from "@/components/common/PageHero";
import { SOFTWARE_SERVICES } from "@/data/softwareData";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import CTA from "@/components/sections/Home/cta";
import SoftwareFaq from "@/components/sections/Services/SoftwareDevelopment/Softwarefaq";
import MaintenanceWhy from "@/components/sections/Services/Maintenance/MaintenceWhy";
import IndustryGrid from "@/components/sections/Services/IndustryGrid";

import FeatureShowcase from "@/components/common/FeatureShowcase";

export default async function SoftwarePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = SOFTWARE_SERVICES[slug];

  if (!service) {
    notFound();
  }

  return (
    <main>
      <Navbar />
      <PageHero
        slug={slug}
        configs={Object.fromEntries(
          Object.entries(SOFTWARE_SERVICES).map(([key, value]) => [
            key,
            value.hero,
          ]),
        )}
      />

      {/* Overview Section (Spotlight Style - Image Right) */}
      {service.overview && (
        <FeatureShowcase 
          title={service.overview.title}
          titleHighlight={service.overview.titleHighlight}
          description={service.overview.description}
          tags={service.overview.tags}
          images={service.overview.images}
          floatingStat={service.overview.floatingStat}
        />
      )}

      {/* Features Section (Glassmorphism Grid Style - Image Left) */}
      {service.features && (
        <FeatureShowcase 
          reverse={true} // reverse=true se image left me aa jayegi
          title={service.features.title}
          titleHighlight={service.features.titleHighlight}
          description={service.features.description}
          tags={service.features.tags}
          images={service.features.images}
          floatingStat={service.features.floatingStat}
        />
      )}

      <IndustryGrid />
      <section className="mx-auto max-w-6xl space-y-20 px-4 py-14 sm:px-6">
        <MaintenanceWhy />
      </section>

      <SoftwareFaq />
      <CTA />
      <Footer />
    </main>
  );
}