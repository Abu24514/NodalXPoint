"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import SectionHeader from "@/components/common/SectionBadge";
import {
  FiGlobe,
  FiTool,
  FiShield,
  FiZap,
  FiCloud,
  FiHardDrive,
  FiTrendingUp,
  FiHeadphones,
} from "react-icons/fi";

export const SERVICES = [
  {
    icon: FiGlobe,
    title: "Website Maintenance",
    desc: "Keep your website secure, up to date, and performing at its best with regular maintenance, updates, and technical improvements.",
  },
  {
    icon: FiTool,
    title: "Bug Fixes & Issue Resolution",
    desc: "Quickly identify and resolve technical issues to minimize downtime and ensure a seamless user experience.",
  },
  {
    icon: FiShield,
    title: "Security Monitoring",
    desc: "Protect your applications with proactive security updates, vulnerability monitoring, and threat prevention.",
  },
  {
    icon: FiZap,
    title: "Performance Optimization",
    desc: "Improve speed, stability, and overall application performance through continuous monitoring and optimization.",
  },
  {
    icon: FiCloud,
    title: "Server & Cloud Management",
    desc: "Manage hosting infrastructure, cloud environments, deployments, and server health for maximum reliability.",
  },
  {
    icon: FiHardDrive,
    title: "Backup & Disaster Recovery",
    desc: "Automated backups and reliable recovery strategies help protect your business from unexpected data loss.",
  },
  {
    icon: FiTrendingUp,
    title: "Feature Enhancements",
    desc: "Extend your product with new features, improvements, and enhancements as your business continues to grow.",
  },
  {
    icon: FiHeadphones,
    title: "Dedicated Technical Support",
    desc: "Get expert technical assistance, troubleshooting, and ongoing guidance whenever your business needs it.",
  },
];

export default function MaintenanceGrid() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 space-y-16">

        {/* Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-colors duration-300 hover:border-[#2563EB]/30 hover:shadow-xl"
              >
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-[#2563EB] transition-transform duration-300 group-hover:scale-x-100" />

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2563EB]/10 text-[#2563EB] transition-all duration-300 group-hover:bg-[#2563EB] group-hover:text-white">
                  <Icon size={24} />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}