"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const PROJECTS = [
  {
    tag: "Web + SEO",
    title: "Retail chain rebuild",
    result: "Organic traffic up 2.4x in five months.",
    gradient: "from-node/90 to-node-soft/70",
  },
  {
    tag: "Mobile + AI",
    title: "Field service app",
    result: "Job scheduling time cut from hours to minutes.",
    gradient: "from-signal/80 to-node/70",
  },
  {
    tag: "CRM",
    title: "Sales pipeline overhaul",
    result: "Lead response time down to under 10 minutes.",
    gradient: "from-node-soft/80 to-signal/60",
  },
];

export default function Work() {
  return (
    <section className="relative w-full bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-ink sm:text-xs sm:tracking-[0.25em]">
              Selected Work
            </p>
            <h2 className="mt-4 font-display text-2xl font-semibold leading-tight text-body sm:text-3xl md:text-4xl">
              Results we can point to, not just deliverables.
            </h2>
          </div>

          <button className="group flex shrink-0 items-center gap-2 text-sm font-semibold text-node">
            View all work
            <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-line bg-surface"
            >
              <div className={`h-44 w-full bg-linear-to-br ${p.gradient} transition-transform duration-500 group-hover:scale-105`} />
              <div className="p-6">
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-ink">
                  {p.tag}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-body">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-ink">{p.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}