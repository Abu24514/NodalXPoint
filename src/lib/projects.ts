import khilhat from "@/assests/e-com.webp";
import schoolerp from "@/assests/erp.webp";
import resturant from "@/assests/res.webp";
import type { StaticImageData } from "next/image";

export type Project = {
  slug: string;
  tag: string;
  title: string;
  result: string;
  description: string;
  tech: string[];
  gradient: string;
  url: string;
  image: StaticImageData;
};

export const PROJECTS: Project[] = [
  {
    slug: "khilat",
    tag: "E-commerce",
    title: "Khilat",
    result: "Ethnic wear storefront with a handcrafted, editorial feel.",
    description:
      "A handcrafted ethnic wear storefront built for discovery and conversion — clean product browsing, category filters, and an editorial homepage that puts the collection front and center.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Java Spring Boot", "PostgreSQL"],
    gradient: "from-node/90 to-node-soft/70",
    url: "http://72.61.229.22/",
    image: khilhat,
  },
  {
    slug: "schoolerp",
    tag: "SaaS + ERP",
    title: "SchoolERP",
    result: "Attendance, fees, and analytics in one management system.",
    description:
      "A complete school management system covering real-time attendance tracking, automated fee management, and advanced analytics & reports — built as a single dashboard for admins, teachers, and staff.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Java Spring Boot", "PostgreSQL"],
    gradient: "from-signal/80 to-node/70",
    url: "http://72.61.229.22/sms/auth/login",
    image: schoolerp,
  },
  {
    slug: "restaurant-ordering",
    tag: "Web App",
    title: "Restaurant ordering platform",
    result: "Menu browsing and online ordering for restaurants & hotels.",
    description:
      "An online ordering platform for restaurants & hotels — browse menus by category, search by name or code, and place orders directly.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Java Spring Boot", "PostgreSQL"],
    gradient: "from-node-soft/80 to-signal/60",
    url: "https://www.fusionpos.in/allinone",
    image: resturant,
  },
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}