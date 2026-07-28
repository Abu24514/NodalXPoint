// Yahan se react-icons hata diye gaye hain
export type Technology = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: string; // Type ko explicitly string kar diya gaya hai
  capabilities: string[];
};

export const TECHNOLOGIES: Technology[] = [
  {
    slug: "clouds",
    title: "Clouds",
    tagline: "AWS, Azure & scalable cloud infrastructure.",
    description: "Architecting resilient, automated cloud infrastructure designed for high availability, security, and global scale.",
    icon: "FaCloud", // Ab ye string hai
    capabilities: ["AWS & Azure Architecture", "Cloud Migration", "Serverless Infrastructure", "Auto-scaling Systems"],
  },
  {
    slug: "ai-ml",
    title: "AI-ML",
    tagline: "Generative AI & machine learning models.",
    description: "Building intelligent workflows, custom LLMs, and predictive analytics that transform raw data into decision intelligence.",
    icon: "PiSparkleLight", 
    capabilities: ["Custom LLM Fine-Tuning", "Predictive Analytics", "NLP Pipelines", "Computer Vision"],
  },
  {
    slug: "data-science",
    title: "Data Science",
    tagline: "Data engineering, analytics & insights.",
    description: "Unlocking enterprise value through modern data engineering pipelines, real-time analytics, and visual dashboards.",
    icon: "FaChartLine",
    capabilities: ["Data Pipeline Engineering", "Real-Time Analytics", "ETL/ELT Workflows", "Business Intelligence Dashboards"],
  },
  {
    slug: "blockchain",
    title: "Blockchain",
    tagline: "Secure, decentralized blockchain solutions.",
    description: "Developing robust smart contracts, decentralized finance protocols, and secure Web3 integrations for modern applications.",
    icon: "FaShieldAlt",
    capabilities: ["Smart Contract Development", "DeFi Protocols", "Web3 Integration", "Security Auditing"],
  },
  {
    slug: "devops",
    title: "DevOps",
    tagline: "Docker, CI/CD & infrastructure automation.",
    description: "Accelerating software delivery with seamless automated pipelines, containerization, and proactive monitoring.",
    icon: "FaGlobe",
    capabilities: ["Docker & Kubernetes", "Automated CI/CD Pipelines", "Infrastructure as Code (IaC)", "System Observability"],
  },
];

export function getTechnologyBySlug(slug: string) {
  return TECHNOLOGIES.find((t) => t.slug === slug);
}