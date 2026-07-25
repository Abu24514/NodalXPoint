"use client";

import { motion } from "framer-motion";
import { FiFolder, FiSmile, FiHeadphones, FiGlobe } from "react-icons/fi";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

// NOTE: placeholder figures — swap with real company numbers when available
const OVERVIEW_STATS = [
  { icon: FiFolder, value: "250+", label: "Projects Delivered" },
  { icon: FiSmile, value: "98%", label: "Client Satisfaction" },
  { icon: FiHeadphones, value: "24/7", label: "Support" },
  { icon: FiGlobe, value: "Global", label: "Delivery" },
];

export default function StatsSection() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="grid grid-cols-2 gap-5"
    >
      {OVERVIEW_STATS.map((stat) => (
        <motion.div
          key={stat.label}
          variants={fadeUp}
          className="rounded-2xl border border-gray-200 bg-white/70 p-5 backdrop-blur-sm transition-all hover:border-[#2e3192]/30 hover:shadow-md"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2e3192]/10 text-[#2e3192]">
            <stat.icon size={18} />
          </span>
          <p className="mt-4 font-display text-2xl font-extrabold text-gray-900">{stat.value}</p>
          <p className="mt-1 text-xs font-medium text-gray-500">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}