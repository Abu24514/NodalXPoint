"use client";

import PageHero, { HeroConfig } from "@/components/common/PageHero";

const DEFAULT_CONFIG: HeroConfig = {
  badge: "Industries We Serve",
  title: "Purpose-Built Solutions for",
  titleHighlight: "Every Industry",
  subtitle: "From HIPAA-compliant healthcare platforms to bank-grade fintech infrastructure — engineered around what each industry actually needs.",
  accentGlow: "var(--color-node)",
};

const HERO_CONFIGS: Record<string, HeroConfig> = {
  healthcare: {
    badge: "Medical & Health Tech",
    title: "Engineering Smart & Human-Centric",
    titleHighlight: "Healthcare",
    subtitle: "HIPAA-compliant EHR platforms, telemedicine apps, and clinical workflow automation built for modern hospitals.",
    accentGlow: "var(--color-node)",
  },
  education: {
    badge: "Education & EdTech",
    title: "Empowering Next-Gen Learning",
    titleHighlight: "Platforms",
    subtitle: "Smart LMS, auto-grading engines, virtual classrooms, and campus management software that scale with students.",
    accentGlow: "var(--color-node)",
  },
  ecommerce: {
    badge: "Shopping & Retail Tech",
    title: "High-Speed Stores Built for",
    titleHighlight: "Max Conversion",
    subtitle: "Blazing fast storefronts, 1-click checkout, instant inventory sync, and real-time order tracking systems.",
    accentGlow: "var(--color-node)",
  },
  finance: {
    badge: "Banking & FinTech",
    title: "Bank-Grade Infrastructure &",
    titleHighlight: "Safe Payments",
    subtitle: "256-bit encrypted ledger systems, automated fraud detection, wallet architectures, and seamless KYC flows.",
    accentGlow: "var(--color-node)",
  },
};

export default function IndustriesHero({ slug }: { slug?: string }) {
  return (
    <PageHero slug={slug} configs={HERO_CONFIGS} defaultConfig={DEFAULT_CONFIG} />
  );
}