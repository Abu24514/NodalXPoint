"use client";

import { motion } from "framer-motion";
import {
  FiCode,
  FiGlobe,
  FiSmartphone,
  FiLink,
  FiCloud,
  FiCheckSquare,
  FiTool,
  FiCpu,
} from "react-icons/fi";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import ServiceCard, { ServiceCardData } from "./ServiceCard";
import SectionHeader from "@/components/common/SectionBadge";

const SERVICES: ServiceCardData[] = [
  {
    title: "Custom Software Development",
    slug: "software-development",
    badge: "Engineering",
    icon: FiCode,
    desc: "Bespoke software architected around your exact workflows and scale needs.",
    features: [
      "Architecture & system design",
      "Scalable backend engineering",
      "Legacy system modernization",
      "Ongoing feature development",
    ],
  },
  {
    title: "Web Development",
    slug: "software-development/web-app",
    badge: "Web",
    icon: FiGlobe,
    desc: "Fast, accessible, SEO-ready web applications built for growth.",
    features: [
      "Next.js & React applications",
      "Headless CMS integration",
      "Performance optimization",
      "SEO-first architecture",
    ],
  },
  {
    title: "Mobile App Development",
    slug: "software-development/mobile-app",
    badge: "Mobile",
    icon: FiSmartphone,
    desc: "Native-feel iOS and Android apps from a shared, maintainable codebase.",
    features: [
      "Cross-platform development",
      "Native performance tuning",
      "App Store & Play Store rollout",
      "Push notifications & offline sync",
    ],
  },
  {
    title: "API Integration",
    slug: "third-party-implementation",
    badge: "Integration",
    icon: FiLink,
    desc: "Secure, low-latency connections to payment, CRM, and analytics platforms.",
    features: [
      "Payment gateway integration",
      "CRM & third-party APIs",
      "Webhook & event pipelines",
      "Rate-limit safe architecture",
    ],
  },
  {
    title: "Cloud & DevOps",
    slug: "technology/clouds",
    badge: "Cloud",
    icon: FiCloud,
    desc: "Resilient, auto-scaling infrastructure with automated CI/CD pipelines.",
    features: [
      "AWS / Azure / Vercel setup",
      "CI/CD pipeline automation",
      "Containerization with Docker",
      "Infrastructure monitoring",
    ],
  },
  {
    title: "QA Testing",
    slug: "qa-testing",
    badge: "Quality",
    icon: FiCheckSquare,
    desc: "Automated and manual testing so every release ships with confidence.",
    features: [
      "Automated regression suites",
      "Manual & exploratory testing",
      "API contract testing",
      "Load & performance testing",
    ],
  },
  {
    title: "Maintenance & Support",
    slug: "maintenance",
    badge: "Reliability",
    icon: FiTool,
    desc: "Proactive monitoring, patching, and rapid fixes for maximum uptime.",
    features: [
      "24/7 system monitoring",
      "Security patching",
      "Dependency updates",
      "Rapid bug resolution",
    ],
  },
  {
    title: "AI & Automation",
    slug: "technology/ai-ml",
    badge: "AI",
    icon: FiCpu,
    desc: "Generative AI and ML pipelines wired directly into real workflows.",
    features: [
      "LLM-powered features",
      "Workflow automation",
      "Custom ML pipelines",
      "AI-assisted internal tooling",
    ],
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-[#faf9f6] py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl space-y-10">
        <SectionHeader
          badge="Core Services"
          title="Engineering Capabilities That Scale"
          titleHighlight="With You."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug + service.title} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
