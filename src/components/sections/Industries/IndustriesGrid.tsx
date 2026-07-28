"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiCheckCircle } from "react-icons/fi";
import { INDUSTRIES } from "@/lib/industriesData";

export default function IndustriesGrid() {
  return (
    <section className="relative w-full bg-canvas py-20 sm:py-28 grid-lines">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {INDUSTRIES.map((industry, i) => {
            const Icon = industry.icon;

            // Map standard theme colors based on slug
            const theme = {
              healthcare: { accent: "text-emerald-600", bg: "bg-emerald-50", border: "hover:border-emerald-300" },
              education: { accent: "text-indigo-600", bg: "bg-indigo-50", border: "hover:border-indigo-300" },
              ecommerce: { accent: "text-amber-600", bg: "bg-amber-50", border: "hover:border-amber-300" },
              finance: { accent: "text-cyan-600", bg: "bg-cyan-50", border: "hover:border-cyan-300" },
            }[industry.slug] || { accent: "text-node", bg: "bg-node/10", border: "hover:border-node/50" };

            return (
              <motion.div
                key={industry.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={`/industries/${industry.slug}`}
                  className={`group flex flex-col justify-between h-full rounded-4xl border border-line bg-surface p-8 sm:p-10 shadow-sm transition-all duration-300 hover:shadow-xl ${theme.border}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${theme.bg} ${theme.accent} transition-transform duration-300 group-hover:scale-110`}>
                        <Icon size={28} />
                      </div>
                      <div className={`h-10 w-10 flex items-center justify-center rounded-full border border-line text-muted-ink transition-colors group-hover:${theme.bg} group-hover:${theme.accent}`}>
                        <FiArrowUpRight size={20} />
                      </div>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-body mb-3">
                      {industry.title}
                    </h3>
                    <p className="text-muted-ink leading-relaxed">
                      {industry.tagline}
                    </p>

                    <div className="mt-6 rounded-xl border border-line bg-canvas/50 p-4">
                      <p className="text-sm font-medium text-body">
                        <span className={`font-bold ${theme.accent}`}>💡 Concept: </span>
                        {industry.easySummary}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-line grid grid-cols-2 gap-3">
                    {industry.highlights.map((feat, idx) => (
                      <span key={idx} className="flex items-center gap-2 text-sm font-medium text-muted-ink">
                        <FiCheckCircle className={theme.accent} size={16} />
                        {feat}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}