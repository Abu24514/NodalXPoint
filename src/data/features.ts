import {
  FiCode,
  FiGlobe,
  FiSmartphone,
  FiCloud,
  FiCpu,
  FiCheckSquare,
} from "react-icons/fi";
import { FeatureItem } from "@/types/service";

export const FEATURES: FeatureItem[] = [
  { icon: FiCode, title: "Custom Software", desc: "Tailored systems engineered around your exact business logic." },
  { icon: FiGlobe, title: "Web Development", desc: "Fast, accessible, SEO-friendly web applications at scale." },
  { icon: FiSmartphone, title: "Mobile Apps", desc: "Native-feel iOS and Android apps from a single codebase." },
  { icon: FiCloud, title: "Cloud Infrastructure", desc: "Resilient, auto-scaling infrastructure across major providers." },
  { icon: FiCpu, title: "AI Solutions", desc: "Generative AI and ML pipelines built into real workflows." },
  { icon: FiCheckSquare, title: "QA Testing", desc: "Automated and manual testing to ship with confidence." },
];
