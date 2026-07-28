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

export const TECHNOLOGY_SERVICES: Record<
  string,
  {
    hero: HeroConfig;
    overview?: SectionConfig;
    features?: SectionConfig;
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
    }
  }
};