import { HeroConfig } from "@/components/common/PageHero";

// DHYAN DEIN: Yahan koi 'react-icons' ka import nahi hoga. 
// Data file me sirf raw strings (text) hona chahiye.

export interface TechTag {
  text: string;
  icon: string; // Ye ab strictly ek string hai
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

export const SOFTWARE_SERVICES: Record<
  string,
  {
    hero: HeroConfig;
    overview?: SectionConfig;
    features?: SectionConfig;
  }
> = {
  "web-app": {
    hero: {
      badge: "WEB APPLICATION DEVELOPMENT",
      title: "Custom Web",
      titleHighlight: "Applications",
      subtitle: "Build scalable, secure, and high-performance web applications tailored to your business goals.",
    },
    overview: {
      title: "Scalable & Secure",
      titleHighlight: "Web Solutions.",
      description: "We build custom web applications that are fast, secure, and scalable. Whether you need a business portal, SaaS platform, CRM, ERP, or customer dashboard, our solutions are designed to improve efficiency, automate workflows, and support long-term business growth.",
      tags: [
        { text: "Fast Development", icon: "FiActivity" },
        { text: "Scalable Architecture", icon: "FiLayers" },
        { text: "Modern Technology", icon: "FiCode" }
      ],
      images: {
        primarySrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
        secondarySrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
      },
      floatingStat: { label: "Performance", value: "99.9% Uptime" }
    },
    features: {
      title: "Core Features of our",
      titleHighlight: "Web Services.",
      description: "Everything you need to scale your business online with a powerful web presence.",
      tags: [
        { text: "Custom Web Applications", icon: "FiLayout" },
        { text: "SaaS Development", icon: "FiCloud" },
        { text: "CRM & ERP Solutions", icon: "FiUsers" },
        { text: "API Integration", icon: "FiCode" },
        { text: "Cloud Deployment", icon: "FiServer" },
        { text: "Ongoing Maintenance", icon: "FiSettings" }
      ],
      images: {
        primarySrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
      }
    }
  },

  "mobile-app": {
    hero: {
      badge: "MOBILE APP DEVELOPMENT",
      title: "Mobile",
      titleHighlight: "Applications",
      subtitle: "Native and cross-platform mobile applications engineered for speed, scalability, and exceptional user experiences.",
    },
    overview: {
      title: "Seamless Mobile",
      titleHighlight: "Experiences.",
      description: "We create high-performance mobile applications for Android and iOS that provide seamless user experiences. Our apps are designed for speed, reliability, and scalability, helping businesses connect with customers anytime and anywhere.",
      tags: [
        { text: "Lightning Fast", icon: "FiActivity" },
        { text: "Native & Hybrid", icon: "FiSmartphone" },
        { text: "User-Centric", icon: "FiUsers" }
      ],
      images: {
        primarySrc: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
        secondarySrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
      },
      floatingStat: { label: "Downloads", value: "1M+ Active Users" }
    },
    features: {
      title: "What's Included in",
      titleHighlight: "Mobile Apps.",
      description: "Feature-rich mobile applications engineered to engage users and drive growth.",
      tags: [
        { text: "Android Development", icon: "FiSmartphone" },
        { text: "iOS Development", icon: "FiSmartphone" },
        { text: "Cross-Platform Apps", icon: "FiLayers" },
        { text: "Push Notifications", icon: "FiBell" },
        { text: "Secure Authentication", icon: "FiLock" },
        { text: "App Maintenance", icon: "FiSettings" }
      ],
      images: {
        primarySrc: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1000&auto=format&fit=crop"
      }
    }
  },

  java: {
    hero: {
      badge: "JAVA DEVELOPMENT",
      title: "Enterprise",
      titleHighlight: "Java Solutions",
      subtitle: "Powerful Java applications built with Spring Boot, microservices, and enterprise-grade architecture.",
    },
    overview: {
      title: "Enterprise-Grade",
      titleHighlight: "Java Systems.",
      description: "Our Java development services focus on enterprise-grade software that is secure, scalable, and reliable. We develop powerful backend systems and business applications capable of handling complex operations with ease.",
      tags: [
        { text: "Secure Architecture", icon: "FiLock" },
        { text: "Highly Scalable", icon: "FiMaximize" },
        { text: "Enterprise Ready", icon: "FiBriefcase" }
      ],
      images: {
        primarySrc: "https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=1000&auto=format&fit=crop",
        secondarySrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
      },
      floatingStat: { label: "Reliability", value: "Enterprise Scale" }
    },
    features: {
      title: "Java Capabilities &",
      titleHighlight: "Features.",
      description: "Comprehensive Java solutions built to withstand heavy enterprise workloads.",
      tags: [
        { text: "Enterprise Applications", icon: "FiServer" },
        { text: "Spring Boot Development", icon: "FiCode" },
        { text: "REST API Development", icon: "FiCpu" },
        { text: "Microservices Architecture", icon: "FiGrid" },
        { text: "Cloud Integration", icon: "FiCloud" },
        { text: "Performance Optimization", icon: "FiActivity" }
      ],
      images: {
        primarySrc: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
      }
    }
  },

  php: {
    hero: {
      badge: "PHP DEVELOPMENT",
      title: "Modern",
      titleHighlight: "PHP Development",
      subtitle: "Secure and scalable PHP applications powered by Laravel and modern backend technologies.",
    },
    overview: {
      title: "Dynamic & Flexible",
      titleHighlight: "PHP Solutions.",
      description: "We develop dynamic and secure PHP applications using modern frameworks to deliver flexible, scalable, and cost-effective business solutions for startups and enterprises.",
      tags: [
        { text: "Cost-Effective", icon: "FiPieChart" },
        { text: "Highly Flexible", icon: "FiLayers" },
        { text: "Modern Frameworks", icon: "FiCode" }
      ],
      images: {
        primarySrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
        secondarySrc: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop"
      },
      floatingStat: { label: "Agility", value: "Rapid Deployment" }
    },
    features: {
      title: "Explore our PHP",
      titleHighlight: "Capabilities.",
      description: "From custom CMS to robust E-commerce platforms, we build it all.",
      tags: [
        { text: "Laravel Development", icon: "FiCode" },
        { text: "Custom PHP Solutions", icon: "FiLayout" },
        { text: "CMS Development", icon: "FiPenTool" },
        { text: "E-commerce Platforms", icon: "FiShoppingCart" },
        { text: "API Integration", icon: "FiCpu" },
        { text: "Maintenance & Support", icon: "FiSettings" }
      ],
      images: {
        primarySrc: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?q=80&w=1000&auto=format&fit=crop"
      }
    }
  },

  python: {
    hero: {
      badge: "PYTHON DEVELOPMENT",
      title: "Python",
      titleHighlight: "Solutions",
      subtitle: "Develop intelligent, scalable, and high-performance Python applications for modern businesses.",
    },
    overview: {
      title: "Intelligent & Smart",
      titleHighlight: "Python Apps.",
      description: "Our Python development services help businesses build intelligent applications, automation systems, and scalable backend solutions powered by modern technologies and clean architecture.",
      tags: [
        { text: "AI Ready", icon: "FiCpu" },
        { text: "Clean Architecture", icon: "FiCheckCircle" },
        { text: "Automated Workflows", icon: "FiSettings" }
      ],
      images: {
        primarySrc: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1000&auto=format&fit=crop",
        secondarySrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
      },
      floatingStat: { label: "Focus", value: "AI & Data" }
    },
    features: {
      title: "Python Powered",
      titleHighlight: "Ecosystem.",
      description: "Leverage the power of Python for next-generation technology solutions.",
      tags: [
        { text: "Backend Development", icon: "FiServer" },
        { text: "AI & Machine Learning", icon: "FiCpu" },
        { text: "Automation Solutions", icon: "FiSettings" },
        { text: "REST APIs", icon: "FiCode" },
        { text: "Data Processing", icon: "FiDatabase" },
        { text: "Cloud Applications", icon: "FiCloud" }
      ],
      images: {
        primarySrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop"
      }
    }
  },

  dotnet: {
    hero: {
      badge: ".NET DEVELOPMENT",
      title: "Enterprise",
      titleHighlight: ".NET Applications",
      subtitle: "Robust enterprise software built with ASP.NET Core and Microsoft technologies.",
    },
    overview: {
      title: "Secure & Robust",
      titleHighlight: ".NET Solutions.",
      description: "We deliver secure and scalable .NET applications tailored to enterprise needs. From web applications to business software, our solutions integrate seamlessly with the Microsoft ecosystem.",
      tags: [
        { text: "Microsoft Stack", icon: "FiLayers" },
        { text: "Highly Secure", icon: "FiLock" },
        { text: "Enterprise Integration", icon: "FiGrid" }
      ],
      images: {
        primarySrc: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1000&auto=format&fit=crop",
        secondarySrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
      },
      floatingStat: { label: "Integrations", value: "Azure Cloud" }
    },
    features: {
      title: "Features of our",
      titleHighlight: ".NET Development.",
      description: "End-to-end .NET solutions built to empower large-scale businesses.",
      tags: [
        { text: "ASP.NET Development", icon: "FiCode" },
        { text: "Enterprise Software", icon: "FiServer" },
        { text: "Desktop Applications", icon: "FiMonitor" },
        { text: "API Development", icon: "FiCpu" },
        { text: "Azure Cloud Integration", icon: "FiCloud" },
        { text: "System Integration", icon: "FiSettings" }
      ],
      images: {
        primarySrc: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop"
      }
    }
  },

  "ui-ux": {
    hero: {
      badge: "UI / UX DESIGN",
      title: "Beautiful",
      titleHighlight: "Digital Experiences",
      subtitle: "User-centered interfaces that combine creativity, usability, accessibility, and business goals.",
    },
    overview: {
      title: "Engaging Digital",
      titleHighlight: "Experiences.",
      description: "We design intuitive and engaging digital experiences that combine aesthetics with usability. Every interface is created with a user-first approach to improve engagement, accessibility, and conversion.",
      tags: [
        { text: "User-First Approach", icon: "FiUsers" },
        { text: "High Conversion", icon: "FiTrendingUp" },
        { text: "Accessible Design", icon: "FiEye" }
      ],
      images: {
        primarySrc: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop",
        secondarySrc: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=800&auto=format&fit=crop"
      },
      floatingStat: { label: "Design", value: "Pixel Perfect" }
    },
    features: {
      title: "Our Comprehensive",
      titleHighlight: "Design Process.",
      description: "From research to prototyping, we craft designs that your users will love.",
      tags: [
        { text: "User Research", icon: "FiUsers" },
        { text: "Wireframing", icon: "FiGrid" },
        { text: "UI Design", icon: "FiPenTool" },
        { text: "Interactive Prototypes", icon: "FiSmartphone" },
        { text: "Design Systems", icon: "FiLayers" },
        { text: "Usability Testing", icon: "FiCheckCircle" }
      ],
      images: {
        primarySrc: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1000&auto=format&fit=crop"
      }
    }
  },
};