import {
  FiCode,
  FiGlobe,
  FiSmartphone,
  FiLink,
  FiCheckSquare,
  FiTool,
} from "react-icons/fi";
import { ServiceCardData } from "@/types/service";

export const SERVICES: ServiceCardData[] = [
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
];
