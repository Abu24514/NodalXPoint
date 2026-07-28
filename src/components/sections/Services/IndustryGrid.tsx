"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import SectionHeader from "@/components/common/SectionBadge";
import { INDUSTRIES } from "@/data/industries";

export default function IndustryGrid() {
  return (
    <section className="relative w-full bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 space-y-12">
        <SectionHeader
          badge="Industries We Serve"
          title="Domain experience across"
          titleHighlight=" sectors."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4"
        >
          {INDUSTRIES.map((ind) => (
            <motion.div
              key={ind.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-line bg-surface p-5 transition-all hover:border-node/40 hover:shadow-md"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-node/10 text-node transition-colors group-hover:bg-node group-hover:text-white">
                <ind.icon size={18} />
              </span>
              <h3 className="mt-3 font-display text-sm font-semibold text-body">
                {ind.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-ink">
                {ind.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
