import { HeroConfig } from "@/components/common/PageHero";

export interface TechTag {
  text: string;
  icon: string;
}

export interface SectionConfig {
  title: string;
  titleHighlight?: string;
  description: string;
  tags: TechTag[];
  images: {
    primarySrc: string;
    primaryAlt?: string;
    secondarySrc?: string;
    secondaryAlt?: string;
  };
  floatingStat?: {
    label: string;
    value: string;
  };
}

export interface DetailItem {
  title: string;
  description: string;
}

export interface DetailConfig {
  title: string;
  tagline: string;
  description: string;
  services?: readonly DetailItem[];
  features?: readonly DetailItem[];
  processTitle: string;
  processSubtitle: string;
  process: readonly string[];
  ctaTitle: string;
  ctaSubtitle: string;
}

export const TECHNOLOGY_SERVICES: Record<
  string,
  {
    hero: HeroConfig;
    overview?: SectionConfig;
    features?: SectionConfig;
    detail?: DetailConfig;
  }
> = {
  clouds: {
    hero: {
      badge: "CLOUD SOLUTIONS",
      title: "Cloud",
      titleHighlight: "Infrastructure",
      subtitle: "Empowering your business with scalable, secure, and reliable cloud infrastructure.",
    },
    overview: {
      title: "Scalable & Secure",
      titleHighlight: "Cloud Deployment.",
      description: "Seamlessly move your workloads to the cloud with minimal downtime. We automate and monitor your cloud infrastructure to ensure optimal efficiency, uptime, and maximum performance across all environments.",
      tags: [
        { text: "High Availability", icon: "FiActivity" },
        { text: "Serverless Computing", icon: "FiServer" },
        { text: "Secure Architecture", icon: "FiShield" }
      ],
      images: {
        primarySrc: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
        secondarySrc: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop"
      },
      floatingStat: { label: "Uptime", value: "99.99% Guaranteed" }
    },
    features: {
      title: "Comprehensive",
      titleHighlight: "Cloud Capabilities.",
      description: "Everything you need to build, scale, and secure your cloud environments effectively.",
      tags: [
        { text: "Cloud Migration", icon: "FiUploadCloud" },
        { text: "Cloud Security", icon: "FiLock" },
        { text: "Infrastructure Management", icon: "FiSettings" },
        { text: "Performance Optimization", icon: "FiTrendingUp" },
        { text: "Serverless Solutions", icon: "FiZap" },
        { text: "Cloud DevOps", icon: "FiTerminal" }
      ],
      images: {
        primarySrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop"
      }
    },
    detail: {
      title: "Cloud Infrastructure",
      tagline: "Enterprise-Grade Cloud Architecture",
      description: "We architect resilient, multi-region cloud ecosystems on AWS, Azure, and Vercel with zero downtime, ensuring your business scales without limits.",
      services: [
        { title: "Cloud Migration", description: "Seamless migration from legacy systems to modern cloud environments." },
        { title: "Multi-Cloud Strategy", description: "Unified deployment across AWS, Azure, and Google Cloud." },
        { title: "Serverless Architecture", description: "Event-driven, auto-scaling functions with no server management." },
        { title: "Cloud Security", description: "End-to-end encryption, IAM policies, and compliance frameworks." },
        { title: "Cost Optimization", description: "Right-sizing resources to reduce cloud spend without losing performance." },
        { title: "Disaster Recovery", description: "Automated backups and failover across multiple regions." }
      ],
      features: [
        { title: "99.99% Uptime", description: "Multi-region failover guarantees near-zero downtime." },
        { title: "Auto-Scaling", description: "Infrastructure that expands and contracts with real traffic." },
        { title: "Cost Efficient", description: "Pay only for the compute and storage you actually use." }
      ],
      processTitle: "Our Cloud Delivery Process",
      processSubtitle: "From assessment to full production deployment",
      process: [
        "Infrastructure Assessment",
        "Architecture Design",
        "Migration & Deployment",
        "Monitoring & Optimization"
      ],
      ctaTitle: "Ready to move to the cloud?",
      ctaSubtitle: "Let's build your scalable infrastructure today."
    }
  },

  "ai-ml": {
    hero: {
      badge: "AI & MACHINE LEARNING",
      title: "Artificial",
      titleHighlight: "Intelligence",
      subtitle: "Transforming your data into intelligent, automated, and predictive insights using AI and ML.",
    },
    overview: {
      title: "Intelligent & Predictive",
      titleHighlight: "Data Systems.",
      description: "Gain actionable insights with predictive modeling to make data-driven decisions. We utilize neural networks and deep learning to analyze patterns, images, and natural language at an unprecedented scale.",
      tags: [
        { text: "Predictive Analytics", icon: "FiPieChart" },
        { text: "Deep Learning", icon: "FiCpu" },
        { text: "Intelligent Automation", icon: "FiSettings" }
      ],
      images: {
        primarySrc: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
        secondarySrc: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=800&auto=format&fit=crop"
      },
      floatingStat: { label: "Automation", value: "10x Faster" }
    },
    features: {
      title: "Our AI & ML",
      titleHighlight: "Solutions.",
      description: "Strategic guidance and implementation for integrating AI into your products and workflows effectively.",
      tags: [
        { text: "Predictive Modeling", icon: "FiTrendingUp" },
        { text: "Computer Vision", icon: "FiEye" },
        { text: "NLP Solutions", icon: "FiMessageSquare" },
        { text: "Data Analysis", icon: "FiDatabase" },
        { text: "AI Innovation", icon: "FiZap" },
        { text: "AI Consulting", icon: "FiBriefcase" }
      ],
      images: {
        primarySrc: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"
      }
    },
    detail: {
      title: "AI & Machine Learning",
      tagline: "Predictive AI & Generative Neural Workflows",
      description: "Custom LLMs, NLP pipelines, and computer vision models engineered to automate complex decision-making across your organization.",
      services: [
        { title: "Custom LLM Development", description: "Fine-tuned language models built for your specific domain." },
        { title: "Computer Vision", description: "Image and video recognition for automation and quality control." },
        { title: "NLP Pipelines", description: "Text analysis, sentiment detection, and chatbots at scale." },
        { title: "Predictive Modeling", description: "Forecasting models that turn historical data into foresight." },
        { title: "AI Integration", description: "Embedding AI capabilities into your existing products and tools." },
        { title: "MLOps", description: "Continuous training, deployment, and monitoring of ML models." }
      ],
      features: [
        { title: "10x Faster Automation", description: "Replace manual workflows with intelligent decision engines." },
        { title: "Domain-Specific Accuracy", description: "Models trained on your data, not generic datasets." },
        { title: "Scalable Inference", description: "Low-latency predictions even under heavy load." }
      ],
      processTitle: "Our AI Development Process",
      processSubtitle: "From data collection to production-grade models",
      process: [
        "Data Collection & Labeling",
        "Model Selection & Training",
        "Evaluation & Fine-Tuning",
        "Deployment & Monitoring"
      ],
      ctaTitle: "Ready to bring AI into your workflows?",
      ctaSubtitle: "Let's design an intelligent system built around your data."
    }
  },

  "data-science": {
    hero: {
      badge: "DATA SCIENCE",
      title: "Data-Driven",
      titleHighlight: "Decisions",
      subtitle: "Transform raw data into actionable insights to power smarter business decisions.",
    },
    overview: {
      title: "Advanced Data",
      titleHighlight: "Analytics.",
      description: "Efficiently process and analyze large datasets for meaningful insights. We help you implement intelligent models to automate decisions, predict outcomes, and manage big data seamlessly.",
      tags: [
        { text: "Big Data", icon: "FiDatabase" },
        { text: "Actionable Insights", icon: "FiTarget" },
        { text: "Data Visualization", icon: "FiBarChart2" }
      ],
      images: {
        primarySrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
        secondarySrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
      },
      floatingStat: { label: "Processing", value: "Real-time" }
    },
    features: {
      title: "Unlock Your",
      titleHighlight: "Data Potential.",
      description: "A structured methodology to extract insights efficiently and effectively.",
      tags: [
        { text: "Data Collection", icon: "FiDownload" },
        { text: "Data Cleaning", icon: "FiFilter" },
        { text: "Predictive Analytics", icon: "FiTrendingUp" },
        { text: "Machine Learning", icon: "FiCpu" },
        { text: "Big Data Management", icon: "FiHardDrive" },
        { text: "Reporting & Visualization", icon: "FiPieChart" }
      ],
      images: {
        primarySrc: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop"
      }
    },
    detail: {
      title: "Data Science",
      tagline: "Real-Time Data Pipelines & Analytics",
      description: "Turn raw big data into structured insights using modern ETL workflows, data lakes, and live BI dashboards.",
      services: [
        { title: "ETL Pipeline Development", description: "Automated extraction, transformation, and loading of data." },
        { title: "Data Warehousing", description: "Centralized, query-optimized storage for structured analytics." },
        { title: "BI Dashboards", description: "Live, interactive dashboards for business decision-making." },
        { title: "Statistical Modeling", description: "Hypothesis testing and data-driven experimentation." },
        { title: "Data Lake Architecture", description: "Unified storage for structured and unstructured data at scale." },
        { title: "Real-Time Analytics", description: "Stream processing for instant insights on live data." }
      ],
      features: [
        { title: "Real-Time Processing", description: "Insights delivered as data arrives, not hours later." },
        { title: "Actionable Insights", description: "Reports designed for decisions, not just numbers." },
        { title: "Scalable Storage", description: "Handles terabytes of data without performance loss." }
      ],
      processTitle: "Our Data Science Process",
      processSubtitle: "From raw data to actionable business intelligence",
      process: [
        "Data Collection",
        "Cleaning & Transformation",
        "Modeling & Analysis",
        "Visualization & Reporting"
      ],
      ctaTitle: "Ready to unlock your data's potential?",
      ctaSubtitle: "Let's turn your raw data into real business insights."
    }
  },

  blockchain: {
    hero: {
      badge: "BLOCKCHAIN SOLUTIONS",
      title: "Decentralized",
      titleHighlight: "Innovation",
      subtitle: "Leverage blockchain technology to create secure, transparent, and decentralized solutions.",
    },
    overview: {
      title: "Secure & Transparent",
      titleHighlight: "Networks.",
      description: "Eliminate intermediaries and increase transparency with distributed ledgers. Ensure tamper-proof, encrypted digital transactions tailored to modernize your business operations.",
      tags: [
        { text: "Decentralized", icon: "FiShare2" },
        { text: "Tamper-Proof", icon: "FiShield" },
        { text: "Transparent", icon: "FiEye" }
      ],
      images: {
        primarySrc: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=1000&auto=format&fit=crop",
        secondarySrc: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop"
      },
      floatingStat: { label: "Security", value: "Bank-Grade" }
    },
    features: {
      title: "Start Your",
      titleHighlight: "Blockchain Journey.",
      description: "Partner with us to build secure, decentralized, and transparent applications.",
      tags: [
        { text: "Secure Transactions", icon: "FiLock" },
        { text: "Smart Contracts", icon: "FiFileText" },
        { text: "Decentralized Network", icon: "FiGlobe" },
        { text: "dApp Development", icon: "FiLayout" },
        { text: "Ledger Architecture", icon: "FiDatabase" },
        { text: "Tokenization", icon: "FiCodesandbox" }
      ],
      images: {
        primarySrc: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=1000&auto=format&fit=crop"
      }
    },
    detail: {
      title: "Blockchain",
      tagline: "Bank-Grade Smart Contracts & Web3 Protocols",
      description: "Tamper-proof distributed ledgers, audited smart contracts, and secure cryptographic transactions for the next generation of applications.",
      services: [
        { title: "Smart Contract Development", description: "Audited, gas-optimized contracts on Ethereum and other chains." },
        { title: "dApp Development", description: "Full-stack decentralized applications with Web3 integration." },
        { title: "Tokenization", description: "Custom token creation for utility, governance, or assets." },
        { title: "NFT Platforms", description: "Marketplaces and minting infrastructure for digital assets." },
        { title: "Blockchain Consulting", description: "Strategy for adopting decentralized systems in your business." },
        { title: "Security Audits", description: "Comprehensive smart contract audits to prevent exploits." }
      ],
      features: [
        { title: "Bank-Grade Security", description: "Cryptographic guarantees against tampering and fraud." },
        { title: "Full Transparency", description: "Every transaction is verifiable on a public ledger." },
        { title: "No Intermediaries", description: "Direct, trustless transactions between parties." }
      ],
      processTitle: "Our Blockchain Development Process",
      processSubtitle: "From concept to audited, deployed smart contracts",
      process: [
        "Requirements & Architecture",
        "Smart Contract Development",
        "Security Auditing",
        "Deployment & Monitoring"
      ],
      ctaTitle: "Ready to go decentralized?",
      ctaSubtitle: "Let's build your secure blockchain solution."
    }
  },

  devops: {
    hero: {
      badge: "DEVOPS SOLUTIONS",
      title: "Continuous",
      titleHighlight: "Integration",
      subtitle: "Streamline development and operations with automation, CI/CD, and cloud efficiency.",
    },
    overview: {
      title: "Automate & Deploy",
      titleHighlight: "Efficiently.",
      description: "Manage and provision infrastructure efficiently using automation tools. We seamlessly deploy applications to multiple environments with minimal downtime, delivering high-quality software faster.",
      tags: [
        { text: "Automated Pipelines", icon: "FiFastForward" },
        { text: "Zero Downtime", icon: "FiCheckCircle" },
        { text: "Infrastructure as Code", icon: "FiTerminal" }
      ],
      images: {
        primarySrc: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1000&auto=format&fit=crop",
        secondarySrc: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=800&auto=format&fit=crop"
      },
      floatingStat: { label: "Deployment", value: "Fully Automated" }
    },
    features: {
      title: "Accelerate Your",
      titleHighlight: "Software Delivery.",
      description: "A structured approach to automate, deploy, and monitor applications efficiently.",
      tags: [
        { text: "Continuous Integration", icon: "FiRefreshCw" },
        { text: "Continuous Deployment", icon: "FiSend" },
        { text: "Infrastructure Automation", icon: "FiServer" },
        { text: "Automated Testing", icon: "FiCheckSquare" },
        { text: "Monitoring & Logging", icon: "FiActivity" },
        { text: "Cloud Efficiency", icon: "FiCloud" }
      ],
      images: {
        primarySrc: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop"
      }
    },
    detail: {
      title: "DevOps",
      tagline: "Automated CI/CD & Kubernetes Delivery",
      description: "Eliminate deployment friction with Infrastructure as Code, Docker containers, and fully automated pipelines.",
      services: [
        { title: "CI/CD Pipeline Setup", description: "Automated build, test, and deployment workflows." },
        { title: "Containerization", description: "Docker-based packaging for consistent environments." },
        { title: "Kubernetes Orchestration", description: "Scalable container management across clusters." },
        { title: "Infrastructure as Code", description: "Reproducible infrastructure using Terraform and similar tools." },
        { title: "Monitoring & Alerting", description: "Real-time visibility into system health and performance." },
        { title: "Release Automation", description: "Zero-downtime deployments with rollback safety." }
      ],
      features: [
        { title: "Fully Automated Deployment", description: "Ship code to production with a single trigger." },
        { title: "Zero Downtime Releases", description: "Rolling updates that keep services always available." },
        { title: "Faster Delivery Cycles", description: "Reduced lead time from commit to production." }
      ],
      processTitle: "Our DevOps Implementation Process",
      processSubtitle: "From pipeline design to continuous delivery",
      process: [
        "Infrastructure Audit",
        "Pipeline & Automation Design",
        "Implementation & Testing",
        "Monitoring & Continuous Improvement"
      ],
      ctaTitle: "Ready to automate your delivery pipeline?",
      ctaSubtitle: "Let's streamline your development and operations."
    }
  }
};