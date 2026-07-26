"use client";

import { motion, type Variants } from "framer-motion";
import SectionHeader from "@/components/common/SectionBadge";
import {
  FiUsers, FiShield, FiRefreshCw, FiMessageSquare, FiTrendingUp, FiAward
} from "react-icons/fi";

const WHY_US = [
  {
    icon: FiShield,
    title: "Reliable & Secure",
    desc: "We follow industry best practices to keep your applications secure, stable, and protected."
  },
  {
    icon: FiTrendingUp,
    title: "Scalable Solutions",
    desc: "Our solutions are built to grow with your business, supporting future expansion without compromise."
  },
  {
    icon: FiUsers,
    title: "Client-Centric Approach",
    desc: "We work closely with every client, ensuring clear communication and solutions tailored to business goals."
  },
  {
    icon: FiRefreshCw,
    title: "Continuous Improvement",
    desc: "We continuously optimize, update, and enhance your digital products to maximize long-term value."
  },
  {
    icon: FiMessageSquare,
    title: "Transparent Communication",
    desc: "Regular updates, clear reporting, and complete visibility throughout every stage of our partnership."
  },
  {
    icon: FiAward,
    title: "Long-Term Partnership",
    desc: "We don't just deliver projects. We build lasting partnerships that support your business as it grows."
  }
];

// Framer Motion variants for a smooth staggered slide-in effect
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Slightly slower stagger for elegance
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 1, 0.5, 1] as [number, number, number, number], // Custom easing for a premium feel
    },
  },
};

export default function MaintenanceWhy() {
  return (
    <div className="space-y-12 py-12">
      {/* Header Animation */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeader
          badge="Why"
          title="Why teams choose "
          titleHighlight="Nodal X Point."
        />
      </motion.div>

      {/* Two-Column Modern List Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2 lg:gap-y-10"
      >
        {WHY_US.map((w) => {
          const Icon = w.icon;
          return (
            <motion.div
              key={w.title}
              variants={itemVariants}
              className="group relative flex flex-col sm:flex-row items-start gap-5 rounded-2xl border border-transparent p-5 transition-all duration-300 hover:border-line hover:bg-surface sm:p-6"
            >
              {/* Subtle animated left accent line on hover */}
              <div
                className="absolute left-0 top-1/2 h-0 w-1 -translate-y-1/2 rounded-r-full bg-node opacity-0 transition-all duration-300 group-hover:h-2/3 group-hover:opacity-100 hidden sm:block"
              />

              {/* Icon Box: Changes from outlined to filled on hover */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-line bg-canvas text-node transition-all duration-300 group-hover:border-node group-hover:bg-node group-hover:text-canvas">
                <Icon size={24} className="transition-transform duration-300 group-hover:scale-110" />
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <h4 className="font-display text-lg font-bold text-body transition-colors duration-300 group-hover:text-node">
                  {w.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-ink">
                  {w.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}