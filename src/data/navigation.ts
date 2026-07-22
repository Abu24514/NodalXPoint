export type MegaMenuItem = {
  title: string;
  description: string;
  href: string;
  icon: string;
  children?: MegaMenuItem[]; // 👈 nested flyout ke liye
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
        href: "/about/our-story",
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
        title: "Policies",
        description: "Privacy, terms & other company policies.",
        href: "/about/policies",
        icon: "shield",
      },
    ],
  },

  {
    title: "Services",
    href: "/services",
    megaMenu: [
      {
        title: "Third Party Implementation",
        description: "Integrate and implement third-party platforms.",
        href: "/services/third-party-implementation",
        icon: "globe",
      },
      {
        title: "Maintenance",
        description: "Ongoing support and application maintenance.",
        href: "/services/maintenance",
        icon: "shield",
      },
      {
        title: "QA Testing",
        description: "Manual, automation & API testing services.",
        href: "/services/qa-testing",
        icon: "chart",
        children: [
          {
            title: "Manual Testing",
            description: "Hands-on testing for functional accuracy.",
            href: "/services/qa-testing/manual-testing",
            icon: "chart",
          },
          {
            title: "Automation Testing",
            description: "Automated test suites for faster releases.",
            href: "/services/qa-testing/automation-testing",
            icon: "sparkles",
          },
          {
            title: "API Testing",
            description: "Reliable, secure API validation.",
            href: "/services/qa-testing/api-testing",
            icon: "cloud",
          },
        ],
      },
      {
        title: "Software Development",
        description: "Custom software across platforms & stacks.",
        href: "/services/software-development",
        icon: "briefcase",
        children: [
          {
            title: "Web App",
            description: "Modern scalable websites and web apps.",
            href: "/services/software-development/web-app",
            icon: "globe",
          },
          {
            title: "Mobile App",
            description: "Android & iOS application development.",
            href: "/services/software-development/mobile-app",
            icon: "mobile",
          },
          {
            title: "Java",
            description: "Enterprise-grade Java solutions.",
            href: "/services/software-development/java",
            icon: "java",
          },
          {
            title: "PHP",
            description: "Robust PHP web development.",
            href: "/services/software-development/php",
            icon: "php",
          },
          {
            title: "Python",
            description: "Python-powered apps, tools & automation.",
            href: "/services/software-development/python",
            icon: "python",
          },
          {
            title: ".NET",
            description: "Scalable .NET applications.",
            href: "/services/software-development/dotnet",
            icon: "shield",
          },
          {
            title: "UI/UX",
            description: "Design that's intuitive and on-brand.",
            href: "/services/software-development/ui-ux",
            icon: "users",
          },
        ],
      },
    ],
  },

  {
    title: "Technology",
    href: "/technology",
    megaMenu: [
      {
        title: "Clouds",
        description: "AWS, Azure & scalable cloud infrastructure.",
        href: "/technology/clouds",
        icon: "cloud",
      },
      {
        title: "AI-ML",
        description: "Generative AI & machine learning models.",
        href: "/technology/ai-ml",
        icon: "sparkles",
      },
      {
        title: "Data Science",
        description: "Data engineering, analytics & insights.",
        href: "/technology/data-science",
        icon: "chart",
      },
      {
        title: "Blockchain",
        description: "Secure, decentralized blockchain solutions.",
        href: "/technology/blockchain",
        icon: "shield",
      },
      {
        title: "DevOps",
        description: "Docker, CI/CD & infrastructure automation.",
        href: "/technology/devops",
        icon: "globe",
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