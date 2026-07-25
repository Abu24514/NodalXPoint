import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import TechnologyHero from "@/components/sections/Technology/TechnologyHero";
import TechnologyDetailView from "@/components/sections/Technology/TechnologyDetailView";

const PAGES = {
  clouds: {
    title: "Cloud Solutions | nodalXpoint",
    description: "Empowering your business with scalable, secure, and reliable cloud infrastructure.",
    data: {
      title: "Cloud Solutions",
      tagline: "Empowering your business with scalable, secure, and reliable cloud infrastructure.",
      description: "Empowering your business with scalable, secure, and reliable cloud infrastructure.",
      services: [
        { title: "Cloud Migration", description: "Seamlessly move your workloads to the cloud with minimal downtime and maximum performance." },
        { title: "Cloud Security", description: "Robust protection and compliance for your data across all cloud environments." },
        { title: "Infrastructure Management", description: "Automate and monitor cloud infrastructure to ensure optimal efficiency and uptime." },
        { title: "Performance Optimization", description: "Enhancing application performance through intelligent resource scaling and monitoring." },
        { title: "Serverless Solutions", description: "Build scalable apps without managing servers — efficient, cost-effective, and fast." },
        { title: "Cloud DevOps", description: "Streamlining CI/CD pipelines and deployments for continuous integration and delivery." },
      ],
      processTitle: "Our Cloud Process",
      processSubtitle: "Efficient cloud deployment for seamless business operations.",
      process: ["Requirement Analysis", "Architecture Design", "Deployment & Configuration", "Monitoring & Optimization"],
      ctaTitle: "Ready to Bring Intelligence to Your Business?",
      ctaSubtitle: "Let's build AI-powered solutions tailored to your goals.",
    },
  },
  "ai-ml": {
    title: "AI & Machine Learning | nodalXpoint",
    description: "Transforming your data into intelligent, automated, and predictive insights using AI and ML.",
    data: {
      title: "AI & Machine Learning",
      tagline: "Transforming your data into intelligent, automated, and predictive insights using AI and ML.",
      description: "Transforming your data into intelligent, automated, and predictive insights using AI and ML.",
      services: [
        { title: "Predictive Analytics", description: "Gain actionable insights with predictive modeling to make data-driven decisions." },
        { title: "Intelligent Automation", description: "Automate repetitive processes with AI bots to improve efficiency and reduce costs." },
        { title: "Deep Learning", description: "Utilize neural networks to analyze patterns, images, and natural language at scale." },
        { title: "Computer Vision", description: "Empowering systems to interpret and understand visual data intelligently." },
        { title: "NLP Solutions", description: "Enhance customer experience with AI-driven chatbots and sentiment analysis." },
        { title: "AI Consulting", description: "Strategic guidance for integrating AI into your products and workflows effectively." },
      ],
      features: [
        { title: "Predictive Modeling", description: "Build intelligent models to forecast trends and outcomes." },
        { title: "Data Analysis", description: "Extract meaningful insights from large datasets efficiently." },
        { title: "AI Innovation", description: "Leverage AI techniques to optimize processes and decisions." },
      ],
      processTitle: "Our AI/ML Process",
      processSubtitle: "Structured methodology to build intelligent solutions efficiently.",
      process: ["Data Collection & Cleaning", "Feature Engineering", "Model Training & Evaluation", "Deployment & Monitoring"],
      ctaTitle: "Ready to Bring Intelligence to Your Business?",
      ctaSubtitle: "Let's build AI-powered solutions tailored to your goals.",
    },
  },
  "data-science": {
    title: "Data Science Solutions | nodalXpoint",
    description: "Transform raw data into actionable insights to power smarter business decisions.",
    data: {
      title: "Data Science Solutions",
      tagline: "Transform raw data into actionable insights to power smarter business decisions.",
      description: "Transform raw data into actionable insights to power smarter business decisions.",
      features: [
        { title: "Predictive Analytics", description: "Gain actionable insights with predictive modeling to make data-driven decisions." },
        { title: "Machine Learning", description: "Implement intelligent models to automate decisions and predictions." },
        { title: "Big Data Management", description: "Efficiently process and analyze large datasets for meaningful insights." },
      ],
      processTitle: "Our Data Science Process",
      processSubtitle: "Structured methodology to extract insights efficiently and effectively.",
      process: ["Data Collection", "Data Cleaning & Processing", "Modeling & Analysis", "Visualization & Reporting"],
      ctaTitle: "Let's Unlock Your Data Potential",
      ctaSubtitle: "Partner with us to transform your data into actionable insights and business value.",
    },
  },
  blockchain: {
    title: "Blockchain Solutions | nodalXpoint",
    description: "Leverage blockchain technology to create secure, transparent, and decentralized solutions.",
    data: {
      title: "Blockchain Solutions",
      tagline: "Leverage blockchain technology to create secure, transparent, and decentralized solutions.",
      description: "Leverage blockchain technology to create secure, transparent, and decentralized solutions.",
      features: [
        { title: "Secure Transactions", description: "Ensure tamper-proof and encrypted digital transactions." },
        { title: "Decentralized Network", description: "Eliminate intermediaries and increase transparency with distributed ledgers." },
        { title: "Smart Contracts", description: "Automate agreements with self-executing smart contracts on blockchain." },
      ],
      processTitle: "Our Blockchain Process",
      processSubtitle: "Structured methodology to implement secure and efficient blockchain solutions.",
      process: ["Requirement Analysis & Feasibility", "Blockchain Architecture Design", "Development & Deployment", "Monitoring & Optimization"],
      ctaTitle: "Start Your Blockchain Journey",
      ctaSubtitle: "Partner with us to build secure, decentralized, and transparent solutions.",
    },
  },
  devops: {
    title: "DevOps Solutions | nodalXpoint",
    description: "Streamline development and operations with automation, CI/CD, and cloud efficiency.",
    data: {
      title: "DevOps Solutions",
      tagline: "Streamline development and operations with automation, CI/CD, and cloud efficiency.",
      description: "Streamline development and operations with automation, CI/CD, and cloud efficiency.",
      features: [
        { title: "Continuous Integration", description: "Automate builds and testing to deliver high-quality software faster." },
        { title: "Continuous Deployment", description: "Seamlessly deploy applications to multiple environments with minimal downtime." },
        { title: "Infrastructure Automation", description: "Manage and provision infrastructure efficiently using automation tools." },
      ],
      processTitle: "Our DevOps Process",
      processSubtitle: "Structured approach to automate, deploy, and monitor applications efficiently.",
      process: ["Planning & Requirement Analysis", "CI/CD Pipeline Setup", "Automated Testing & Deployment", "Monitoring & Optimization"],
      ctaTitle: "Accelerate Your Software Delivery",
      ctaSubtitle: "Partner with us to implement DevOps best practices and streamline operations.",
    },
  },
} as const;

type Slug = keyof typeof PAGES;

export function generateStaticParams() {
  return Object.keys(PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!(slug in PAGES)) return {};
  
  const page = PAGES[slug as Slug];
  return { title: page.title, description: page.description };
}

export default async function TechnologySubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!(slug in PAGES)) {
    return notFound();
  }

  const page = PAGES[slug as Slug];

  return (
    <main className="bg-canvas min-h-screen">
      <Navbar />
      <TechnologyHero slug={slug} />
      <TechnologyDetailView data={page.data} />
      <Footer />
    </main>
  );
}