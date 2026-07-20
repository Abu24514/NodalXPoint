"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "120+", label: "Projects delivered" },
  { value: "93%", label: "Client retention" },
  { value: "<2hrs", label: "Avg. response time" },
  { value: "8+", label: "Years combined experience" },
];

export default function Stats() {
  return (
    <section className="relative w-full bg-node py-14 sm:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-6 sm:grid-cols-4 sm:gap-y-0">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex flex-col items-center text-center sm:border-l sm:border-white/15 sm:first:border-l-0"
          >
            <span className="font-display text-3xl font-semibold text-white sm:text-4xl">
              {s.value}
            </span>
            <span className="mt-2 text-xs text-white/70 sm:text-sm">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}