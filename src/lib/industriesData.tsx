import { 
  FiHeart, 
  FiBookOpen, 
  FiShoppingBag, 
  FiShield 
} from "react-icons/fi";
import type { IconType } from "react-icons";

export const INDUSTRY_DETAILS = {
  healthcare: {
    slug: "healthcare",
    title: "Healthcare Solutions",
    tagline: "Doctor & Patient Care Made Simple",
    badge: "Medical & Health Tech",
    icon: FiHeart,
    theme: {
      accent: "text-emerald-600",
      border: "border-emerald-200",
      glow: "rgba(16, 185, 129, 0.12)",
      cardBg: "bg-emerald-50/50",
      pill: "bg-emerald-100 text-emerald-700 border-emerald-200",
    },
    easyExplanation: {
      heading: "Key Business Concept",
      points: [
        "Digital EHR Systems: Keep all patient health records, diagnostic reports, and medical history secure and accessible.",
        "Seamless Appointments: Allow patients to book consultations online without waiting in long clinic queues.",
        "Virtual Consultation: Enable remote video visits so patients can consult doctors from the comfort of home."
      ]
    },
    visualWidget: {
      type: "healthcare",
      statLabel: "Patient Vitals Sync",
      statValue: "99.9%",
      statusText: "HIPAA Compliant & Encrypted",
      metrics: [
        { label: "Heart Rate Monitor", val: "72 BPM (Normal)" },
        { label: "E-Prescriptions Sent", val: "12,450+" },
      ]
    },
    solutions: [
      "Patient Management & EHR Systems",
      "Online Appointment & Doctor Scheduling",
      "Telemedicine & Video Consultation Platforms",
      "HIPAA-Compliant Patient Data Security"
    ],
    ctaTitle: "Digitize Your Hospital or Clinic Today",
    ctaSubtitle: "Manage patient records, billing, and remote consultations in one unified platform."
  },

  education: {
    slug: "education",
    title: "EdTech & Learning Platforms",
    tagline: "Smart Schools, Colleges & Online Coaching",
    badge: "Education & Learning",
    icon: FiBookOpen,
    theme: {
      accent: "text-indigo-600",
      border: "border-indigo-200",
      glow: "rgba(99, 102, 241, 0.12)",
      cardBg: "bg-indigo-50/50",
      pill: "bg-indigo-100 text-indigo-700 border-indigo-200",
    },
    easyExplanation: {
      heading: "Key Business Concept",
      points: [
        "Virtual Classrooms: Students can stream video lectures, access study material, and take tests anytime.",
        "Automated Administration: Generate attendance reports, fee receipts, and course schedules automatically.",
        "Parent Updates: Send real-time student progress reports directly to parents' mobile devices."
      ]
    },
    visualWidget: {
      type: "education",
      statLabel: "Student Engagement Rate",
      statValue: "94.8%",
      statusText: "Auto Assessment Active",
      metrics: [
        { label: "Active Modules", val: "48 Courses" },
        { label: "Certificates Awarded", val: "8,900+" },
      ]
    },
    solutions: [
      "School & Institute Management Software",
      "Automated Attendance & Online Fee Collection",
      "Interactive Virtual Classroom & Quiz System",
      "Parent-Teacher Communication Applications"
    ],
    ctaTitle: "Upgrade Your Campus to a Smart Digital Platform",
    ctaSubtitle: "Streamline student administration, exams, and payments effortlessly."
  },

  ecommerce: {
    slug: "ecommerce",
    title: "E-Commerce & Digital Stores",
    tagline: "High-Converting Online Storefronts",
    badge: "Shopping & Retail",
    icon: FiShoppingBag,
    theme: {
      accent: "text-amber-600",
      border: "border-amber-200",
      glow: "rgba(245, 158, 11, 0.12)",
      cardBg: "bg-amber-50/50",
      pill: "bg-amber-100 text-amber-700 border-amber-200",
    },
    easyExplanation: {
      heading: "Key Business Concept",
      points: [
        "24/7 Digital Storefront: Expand your retail footprint globally with an always-open digital shop.",
        "One-Click Checkout: Support UPI, Apple Pay, Cards, and Digital Wallets for effortless payments.",
        "Live Shipment Tracking: Give customers real-time updates on their order location and delivery date."
      ]
    },
    visualWidget: {
      type: "ecommerce",
      statLabel: "Checkout Conversion Speed",
      statValue: "1.2s",
      statusText: "High-Speed Payment Gateway",
      metrics: [
        { label: "Cart Recovery", val: "+34% Boost" },
        { label: "Orders Processed", val: "45,200+" },
      ]
    },
    solutions: [
      "Custom Storefronts & Shopping Mobile Apps",
      "Real-Time Inventory & Stock Management",
      "Multi-Currency & Regional Payment Integration",
      "Lightning-Fast Performance & E-Commerce SEO"
    ],
    ctaTitle: "Build Your High-Converting Online Store",
    ctaSubtitle: "Scale your revenue with blazing-fast store speeds and secure multi-channel checkout."
  },

  finance: {
    slug: "finance",
    title: "FinTech & Banking Solutions",
    tagline: "Bank-Grade Security & Payment Infrastructure",
    badge: "Banking & Financial Tech",
    icon: FiShield,
    theme: {
      accent: "text-cyan-600",
      border: "border-cyan-200",
      glow: "rgba(6, 182, 212, 0.12)",
      cardBg: "bg-cyan-50/50",
      pill: "bg-cyan-100 text-cyan-700 border-cyan-200",
    },
    easyExplanation: {
      heading: "Key Business Concept",
      points: [
        "Bank-Level Security: Multi-layered authentication and end-to-end encryption keep user funds safe.",
        "Real-Time Fraud Alerts: Automated AI algorithms immediately flag suspicious transactions.",
        "Financial Analytics: Clear dashboards showing real-time revenue, expenses, and transaction logs."
      ]
    },
    visualWidget: {
      type: "finance",
      statLabel: "Data Encryption Standard",
      statValue: "256-Bit",
      statusText: "Real-Time Fraud Prevention Active",
      metrics: [
        { label: "Uptime SLA", val: "99.99%" },
        { label: "Transactions Secured", val: "$10M+ Monthly" },
      ]
    },
    solutions: [
      "Secure Money Transfer & E-Wallet Platforms",
      "Financial Reporting & Live Auditing Dashboards",
      "KYC, Identity Verification & Fraud Prevention",
      "Regulatory Compliant Banking Architecture"
    ],
    ctaTitle: "Engineer Safe, Scalable & Compliant FinTech Products",
    ctaSubtitle: "Protect every transaction with top-tier security standards and instant processing."
  }
} as const;

export type IndustryKey = keyof typeof INDUSTRY_DETAILS;

// Grid view interfaces and export array for IndustriesGrid component
export interface IndustryGridItem {
  slug: IndustryKey;
  title: string;
  tagline: string;
  icon: IconType;
  easySummary: string;
  highlights: string[];
}

export const INDUSTRIES: IndustryGridItem[] = [
  {
    slug: "healthcare",
    title: INDUSTRY_DETAILS.healthcare.title,
    tagline: INDUSTRY_DETAILS.healthcare.tagline,
    icon: FiHeart,
    easySummary: INDUSTRY_DETAILS.healthcare.easyExplanation.points[0],
    highlights: ["EHR Systems", "Telemedicine Ready"],
  },
  {
    slug: "education",
    title: INDUSTRY_DETAILS.education.title,
    tagline: INDUSTRY_DETAILS.education.tagline,
    icon: FiBookOpen,
    easySummary: INDUSTRY_DETAILS.education.easyExplanation.points[0],
    highlights: ["Smart Learning", "Auto Fees & Attendance"],
  },
  {
    slug: "ecommerce",
    title: INDUSTRY_DETAILS.ecommerce.title,
    tagline: INDUSTRY_DETAILS.ecommerce.tagline,
    icon: FiShoppingBag,
    easySummary: INDUSTRY_DETAILS.ecommerce.easyExplanation.points[0],
    highlights: ["1-Click Checkout", "Live Order Tracking"],
  },
  {
    slug: "finance",
    title: INDUSTRY_DETAILS.finance.title,
    tagline: INDUSTRY_DETAILS.finance.tagline,
    icon: FiShield,
    easySummary: INDUSTRY_DETAILS.finance.easyExplanation.points[0],
    highlights: ["256-Bit Encryption", "Instant Fraud Alerts"],
  },
];