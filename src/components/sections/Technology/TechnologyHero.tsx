"use client";

import PageHero, { HeroConfig } from "@/components/common/PageHero";

type TechHeroProps = {
  slug?: string;
};

// Dynamic Configuration per Technology Slug
const TECH_HERO_CONFIGS: Record<string, HeroConfig> = {
  clouds: {
    badge: "Cloud Infrastructure",
    title: "Scalable, High-Availability Cloud",
    titleHighlight: "Ecosystems",
    subtitle: "Architecting resilient, multi-region cloud infrastructures on AWS, Azure, and Vercel with zero downtime.",
    accentGlow: "var(--color-node)",
  },
  "ai-ml": {
    badge: "Artificial Intelligence",
    title: "Predictive AI & Generative Neural",
    titleHighlight: "Workflows",
    subtitle: "Custom LLMs, NLP pipelines, and computer vision models engineered to automate complex decision-making.",
    accentGlow: "var(--color-node)",
  },
  "data-science": {
    badge: "Data Engineering",
    title: "Real-Time Data Pipelines &",
    titleHighlight: "Analytics",
    subtitle: "Turn raw big data into structured insights using modern ETL workflows, data lakes, and live BI dashboards.",
    accentGlow: "var(--color-node)",
  },
  blockchain: {
    badge: "Decentralized Systems",
    title: "Bank-Grade Smart Contracts &",
    titleHighlight: "Web3 Protocols",
    subtitle: "Tamper-proof distributed ledgers, audited smart contracts, and secure cryptographic transactions.",
    accentGlow: "var(--color-node)",
  },
  devops: {
    badge: "DevOps & Automation",
    title: "Automated CI/CD &",
    titleHighlight: "Kubernetes Delivery",
    subtitle: "Eliminate deployment friction with Infrastructure as Code, Docker containers, and automated pipelines.",
    accentGlow: "var(--color-node)",
  },
};

const DEFAULT_TECH_CONFIG: HeroConfig = {
  badge: "Modern Technology Stack",
  title: "Engineered with cutting-edge stack &",
  titleHighlight: "frameworks.",
  subtitle: "We leverage scalable cloud infrastructure, AI models, and automated CI/CD pipelines to build production-ready software.",
  accentGlow: "var(--color-node)",
};

export default function TechnologyHero({ slug }: TechHeroProps) {
  return (
    <PageHero
      slug={slug}
      configs={TECH_HERO_CONFIGS}
      defaultConfig={DEFAULT_TECH_CONFIG}
    />
  );
}