"use client";

import SectionHeader from "@/components/common/SectionBadge";
import { motion, Variants } from "framer-motion";
import {
  FiLayout,
  FiSmartphone,
  FiBriefcase,
  FiCloud,
  FiServer,
  FiCheckCircle,
} from "react-icons/fi";

const SOFTWARE_CATEGORIES = [
  {
    category: "Web Development",
    description: "High-performance, responsive web applications and portals.",
    icon: FiLayout,
    items: ["Business Dashboards", "E-Commerce Platforms", "Customer Portals"],
    className: "md:col-span-2 bg-white",
  },
  {
    category: "Mobile Apps",
    description: "Native and cross-platform apps for iOS and Android.",
    icon: FiSmartphone,
    items: ["React Native", "Flutter", "Progressive Web Apps"],
    className: "md:col-span-1 bg-blue-50/50 border-blue-100",
  },
  {
    category: "Enterprise Solutions",
    description: "Secure systems to automate and manage business workflows.",
    icon: FiBriefcase,
    items: ["ERP Systems", "CRM Platforms", "HRMS Portals"],
    className: "md:col-span-1 bg-white",
  },
  {
    category: "SaaS Products",
    description: "Scalable multi-tenant architectures for your next big idea.",
    icon: FiCloud,
    items: ["Subscription Platforms", "Multi-Tenant Apps", "Payment Integrations"],
    className: "md:col-span-1 bg-indigo-50/50 border-indigo-100",
  },
  {
    category: "Backend & APIs",
    description: "Robust server-side logic and seamless third-party integrations.",
    icon: FiServer,
    items: ["RESTful & GraphQL APIs", "Microservices", "Cloud Deployments"],
    className: "md:col-span-1 bg-white",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function SoftwareTypes() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background glowing circle for a premium vibe */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -right-40 w-96 h-96 bg-linear-to-tr from-blue-100/40 to-indigo-100/40 rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="text-center mb-16 relative z-10">
        <SectionHeader
          badge="Our Expertise"
          title="Types of Software "
          titleHighlight="We Build."
          subtitle="From modern web applications to complex enterprise systems, we engineer solutions across all major platforms."
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10"
      >
        {SOFTWARE_CATEGORIES.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className={`p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group ${service.className}`}
          >
            
            {/* Rotating Circle Icon Wrapper */}
            <div className="relative w-16 h-16 mb-6">
              {/* Rotating Outer Dashed Border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-blue-300 transition-colors duration-300"
              />
              <div className="absolute inset-1.5 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-node transition-colors duration-300">
                <service.icon className="text-2xl text-node group-hover:text-white transition-colors duration-300" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              {service.category}
            </h3>

            <p className="text-slate-600 mb-6 leading-relaxed">
              {service.description}
            </p>

            <ul className="space-y-3 mt-auto">
              {service.items.map((item, i) => (
                <li
                  key={i}
                  className="text-slate-700 flex items-center gap-3 font-medium"
                >
                  <FiCheckCircle className="text-node shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}