"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { FEATURES } from "@/data/features";

export default function FeatureGrid() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
    >
      {FEATURES.map((feature) => (
        <motion.div
          key={feature.title}
          variants={fadeUp}
          whileHover={{ y: -4 }}
          className="group rounded-2xl border border-line bg-surface p-6 transition-all hover:border-node/40 hover:shadow-lg"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-node/10 text-node transition-colors group-hover:bg-node group-hover:text-white">
            <feature.icon size={20} />
          </span>
          <h3 className="mt-4 font-display text-base font-semibold text-body">{feature.title}</h3>
          <p className="mt-1.5 text-xs leading-relaxed text-muted-ink">{feature.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}