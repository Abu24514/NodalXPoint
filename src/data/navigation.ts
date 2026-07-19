export type MegaMenuItem = {
  title: string;
  description: string;
  href: string;
  icon: string;
};

export type NavItem = {
  title: string;
  href: string; // 👈 optional mat rakho
  megaMenu?: MegaMenuItem[];
};

export const navigation: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },

  {
    title: "About",
    href: "/about", // 👈 Add
    megaMenu: [
      {
        title: "Our Story",
        description: "Know who we are and what we build.",
        href: "/about",
        icon: "company",
      },
      {
        title: "Leadership",
        description: "Meet the people behind NodalXpoint.",
        href: "/about/leadership",
        icon: "users",
      },
      {
        title: "Careers",
        description: "Grow your career with us.",
        href: "/careers",
        icon: "briefcase",
      },
      {
        title: "Contact",
        description: "Let's build something together.",
        href: "/contact",
        icon: "mail",
      },
    ],
  },

  {
    title: "Services",
    href: "/services", // 👈 Add
    megaMenu: [
      {
        title: "Web Development",
        description: "Modern scalable websites and web apps.",
        href: "/services/web",
        icon: "globe",
      },
      {
        title: "Mobile Apps",
        description: "Android & iOS application development.",
        href: "/services/mobile",
        icon: "mobile",
      },
      {
        title: "AI Solutions",
        description: "Generative AI, Chatbots & Automation.",
        href: "/services/ai",
        icon: "sparkles",
      },
      {
        title: "Digital Marketing",
        description: "SEO, Social Media & Paid Ads.",
        href: "/services/marketing",
        icon: "chart",
      },
      {
        title: "Cloud Services",
        description: "AWS, Azure & DevOps.",
        href: "/services/cloud",
        icon: "cloud",
      },
      {
        title: "Cyber Security",
        description: "Security assessment & monitoring.",
        href: "/services/security",
        icon: "shield",
      },
    ],
  },

  {
    title: "Technology",
    href: "/technology",
    megaMenu: [
      {
        title: "Frontend",
        description: "React, Next.js & TypeScript.",
        href: "/technology/frontend",
        icon: "globe",
      },
      {
        title: "Backend",
        description: "Node.js, Express & APIs.",
        href: "/technology/backend",
        icon: "cloud",
      },
      {
        title: "AI & ML",
        description: "OpenAI, Gemini & ML Models.",
        href: "/technology/ai",
        icon: "sparkles",
      },
      {
        title: "DevOps",
        description: "Docker, AWS & CI/CD.",
        href: "/technology/devops",
        icon: "shield",
      },
    ],
  },

  {
    title: "Industries",
    href: "/industries",
    megaMenu: [
      {
        title: "Healthcare",
        description: "Healthcare software solutions.",
        href: "/industries/healthcare",
        icon: "users",
      },
      {
        title: "Education",
        description: "Modern EdTech platforms.",
        href: "/industries/education",
        icon: "company",
      },
      {
        title: "E-Commerce",
        description: "Scalable commerce solutions.",
        href: "/industries/ecommerce",
        icon: "chart",
      },
      {
        title: "Finance",
        description: "Secure FinTech applications.",
        href: "/industries/finance",
        icon: "shield",
      },
    ],
  },

  {
    title: "Contact",
    href: "/contact",
  },
];