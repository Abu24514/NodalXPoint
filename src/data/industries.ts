import {
  FiHeart,
  FiDollarSign,
  FiBook,
  FiTruck,
  FiSettings,
  FiShoppingBag,
  FiCloud,
  FiHome,
} from "react-icons/fi";
import { IndustryItem } from "@/types/service";

export const INDUSTRIES: IndustryItem[] = [
  {
    icon: FiHeart,
    title: "Healthcare",
    desc: "HIPAA-aware platforms for patient care and records.",
  },
  {
    icon: FiDollarSign,
    title: "FinTech",
    desc: "Secure, compliant financial and payment systems.",
  },
  {
    icon: FiBook,
    title: "Education",
    desc: "Modern EdTech platforms for learners and institutions.",
  },
  {
    icon: FiTruck,
    title: "Logistics",
    desc: "Real-time tracking and fleet management systems.",
  },
  {
    icon: FiSettings,
    title: "Manufacturing",
    desc: "Production, inventory, and supply chain software.",
  },
  {
    icon: FiShoppingBag,
    title: "Retail",
    desc: "Scalable commerce experiences across channels.",
  },
  {
    icon: FiCloud,
    title: "SaaS",
    desc: "Multi-tenant platforms built to scale with usage.",
  },
  {
    icon: FiHome,
    title: "Real Estate",
    desc: "Listing, CRM, and property management platforms.",
  },
];
