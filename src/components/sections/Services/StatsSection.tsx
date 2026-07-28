"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { OVERVIEW_STATS } from "@/data/stats";

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
          className="rounded-2xl border border-gray-200 bg-white/70 p-5 backdrop-blur-sm transition-all hover:border-node/30 hover:shadow-md"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-node/10 text-node">
            <stat.icon size={18} />
          </span>
          <p className="mt-4 font-display text-2xl font-extrabold text-gray-900">{stat.value}</p>
          <p className="mt-1 text-xs font-medium text-gray-500">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}