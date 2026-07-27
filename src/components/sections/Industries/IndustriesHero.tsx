"use client";

import PageHero, { HeroConfig } from "@/components/common/PageHero";
import { INDUSTRY_DETAILS, IndustryKey } from "@/lib/industriesData";

const DEFAULT_CONFIG: HeroConfig = {
  badge: "Industries We Serve",
  title: "Purpose-Built Solutions for",
  titleHighlight: "Every Industry",
  subtitle: "From HIPAA-compliant healthcare platforms to bank-grade fintech infrastructure — engineered around what each industry actually needs.",
  accentGlow: "var(--color-node)",
};

export default function IndustriesHero({ slug }: { slug?: string }) {
  const HERO_CONFIGS: Record<string, HeroConfig> = Object.keys(INDUSTRY_DETAILS).reduce((acc, key) => {
    const data = INDUSTRY_DETAILS[key as IndustryKey];
    acc[key] = {
      badge: data.badge,
      title: "Transforming",
      titleHighlight: data.title,
      subtitle: data.tagline,
      accentGlow: data.theme.glow,
    };
    return acc;
  }, {} as Record<string, HeroConfig>);

  return (
    <PageHero slug={slug} configs={HERO_CONFIGS} defaultConfig={DEFAULT_CONFIG} />
  );
}