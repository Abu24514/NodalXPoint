"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import PageHero from "@/components/common/PageHero";
import CTA from "@/components/sections/Home/cta";

import {
  FiLayout,
  FiSmartphone,
  FiBriefcase,
  FiCloud,
  FiServer,
  FiCheckCircle,
  FiPlus,
} from "react-icons/fi";
import {
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiVuedotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiGooglecloud,
  SiFlutter,
  SiKotlin,
  SiSwift,
  SiDotnet,
  SiPhp,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";

// --- Data Constants ---
const DATA = {
  title: "Software Development",
  tagline: "Custom Web, Mobile & Enterprise Engineering",
  description:
    "Custom software development tailored to your business model, architected for high speed, reliability, and global scale.",
  badge: "Software Engineering",
};

const PROCESS = [
  { title: "Requirement Discovery", desc: "Understanding business goals and project scope." },
  { title: "UI/UX Design", desc: "Creating modern interfaces and prototypes." },
  { title: "Architecture Planning", desc: "Designing scalable software architecture." },
  { title: "Development", desc: "Building secure and optimized applications." },
  { title: "Testing & QA", desc: "Ensuring performance, security, and reliability." },
  { title: "Deployment", desc: "Launching applications on cloud infrastructure." },
  { title: "Maintenance", desc: "Continuous improvements and monitoring." },
];

const BENTO_SERVICES = [
  { category: "Web Development", icon: FiLayout, items: ["Business Websites", "Web Applications", "Dashboards", "Portals"], className: "md:col-span-2 bg-white" },
  { category: "Mobile Apps", icon: FiSmartphone, items: ["Android Apps", "iOS Apps", "Flutter", "React Native"], className: "md:col-span-1 bg-blue-50 border-blue-100" },
  { category: "Enterprise", icon: FiBriefcase, items: ["ERP Systems", "CRM Platforms", "Automation Tools"], className: "md:col-span-1 bg-white" },
  { category: "SaaS Products", icon: FiCloud, items: ["Subscription Platforms", "Multi-Tenant Apps"], className: "md:col-span-1 bg-indigo-50 border-indigo-100" },
  { category: "Backend & Cloud", icon: FiServer, items: ["APIs", "Microservices", "Database Systems", "Third Party Integrations"], className: "md:col-span-3 bg-white" },
];

const TECH_CATEGORIES = [
  { name: "Frontend", tools: [{ name: "React", icon: SiReact }, { name: "Next.js", icon: SiNextdotjs }, { name: "Angular", icon: SiAngular }, { name: "Vue", icon: SiVuedotjs }, { name: "Tailwind", icon: SiTailwindcss }] },
  { name: "Backend", tools: [{ name: "Node.js", icon: SiNodedotjs }, { name: "Python", icon: SiPython }, { name: "Java", icon: FaJava }, { name: ".NET", icon: SiDotnet }, { name: "PHP", icon: SiPhp }] },
  { name: "Mobile", tools: [{ name: "Flutter", icon: SiFlutter }, { name: "React Native", icon: SiReact }, { name: "Kotlin", icon: SiKotlin }, { name: "Swift", icon: SiSwift }] },
  { name: "Database", tools: [{ name: "PostgreSQL", icon: SiPostgresql }, { name: "MySQL", icon: SiMysql }, { name: "MongoDB", icon: SiMongodb }, { name: "Redis", icon: SiRedis }] },
  { name: "Cloud", tools: [{ name: "AWS", icon: FaAws }, { name: "Azure", icon: FiCloud }, { name: "GCP", icon: SiGooglecloud }] },
];

const FAQS = [
  { q: "What type of software does Nodal X Point develop?", a: "We build scalable web apps, mobile applications, enterprise SaaS platforms, and robust cloud architectures tailored to your exact business needs." },
  { q: "Do you create custom enterprise applications?", a: "Yes, we engineer highly secure and compliant enterprise solutions designed to automate workflows and scale globally." },
  { q: "Which technologies do you use?", a: "Our core stack revolves around Next.js, React, Node.js, Python, AWS, and Flutter, ensuring modern, fast, and future-proof products." },
  { q: "Do you provide maintenance support?", a: "Absolutely. We offer 24/7 monitoring, security patching, and iterative feature development post-launch." },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function SoftwareDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="bg-canvas min-h-screen text-body">
      <Navbar />
      <PageHero
        defaultConfig={{
          badge: DATA.badge,
          title: "Software",
          titleHighlight: "Development",
          subtitle: DATA.tagline,
          accentGlow: "var(--color-node)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 py-20 space-y-24">
        {/* About Section */}
        <section className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            variants={fadeUp} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            className="space-y-6"
          >
            <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">Engineering Software That Drives Growth.</h2>
            <p className="text-lg text-slate-600">{DATA.description}</p>
          </motion.div>
          <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm">
            <h3 className="font-bold text-lg mb-6">Built For Scale</h3>
            <ul className="space-y-4">
              {["Full-Stack Web & Next.js Apps", "Native & Cross-Platform Mobile", "Enterprise Java & Python Backends"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <FiCheckCircle />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Bento Services */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-center">Comprehensive Solutions</h2>
          <div className="grid md:grid-cols-3 gap-6 auto-rows-62.5">
            {BENTO_SERVICES.map((s) => (
              <div key={s.category} className={`p-8 rounded-3xl border border-slate-200 ${s.className}`}>
                <div className="w-12 h-12 bg-slate-900/5 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                  <s.icon size={24} />
                </div>
                <h3 className="font-bold text-xl mb-4">{s.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span key={item} className="text-xs bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-600">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-center">Modern Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {TECH_CATEGORIES.map((cat) => (
              <div key={cat.name} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-4">{cat.name}</h4>
                <div className="space-y-3">
                  {cat.tools.map((t) => (
                    <div key={t.name} className="flex items-center gap-2 text-sm text-slate-600">
                      <t.icon size={16} className="text-blue-600" /> {t.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Workflow */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold text-center">Delivery Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((p, idx) => (
              <div key={p.title} className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
                <span className="text-blue-600 font-bold text-sm">{String(idx + 1).padStart(2, "0")}</span>
                <h3 className="font-bold mt-2">{p.title}</h3>
                <p className="text-sm text-slate-500 mt-1">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
          {FAQS.map((faq, i) => (
            <div key={faq.q} className="bg-white border border-slate-200 rounded-2xl p-6">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex justify-between items-center w-full font-bold text-left"
                aria-expanded={openFaq === i}
              >
                {faq.q}
                <FiPlus className={`shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`} />
              </button>
              <AnimatePresence initial={false}>
                {openFaq === i && (
                  <motion.p
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="text-slate-600 text-sm overflow-hidden"
                  >
                    {faq.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </section>
      </div>

      <CTA />
      <Footer />
    </main>
  );
}