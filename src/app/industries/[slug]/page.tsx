import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import IndustriesHero from "@/components/sections/Industries/IndustriesHero";
import IndustryDetailView from "@/components/sections/Industries/IndustryDetailView";
import { INDUSTRY_DETAILS, IndustryKey } from "@/lib/industriesData";

export function generateStaticParams() {
  return Object.keys(INDUSTRY_DETAILS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = INDUSTRY_DETAILS[slug as IndustryKey];
  if (!page) return {};
  return { 
    title: `${page.title} | nodalXpoint`, 
    description: page.tagline 
  };
}

export default async function IndustrySubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = INDUSTRY_DETAILS[slug as IndustryKey];

  if (!page) return notFound();

  return (
    <main className="bg-canvas min-h-screen">
      <Navbar />
      {/* Slug Pass Karein Dynamic Hero Text aur Floating Cards ke Liye */}
      <IndustriesHero slug={slug} />
      <IndustryDetailView currentSlug={slug} />
      <Footer />
    </main>
  );
}