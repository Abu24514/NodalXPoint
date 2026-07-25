"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiCheckCircle } from "react-icons/fi";
import { INDUSTRIES } from "@/lib/industriesData";

export default function IndustriesGrid() {
  return (
    <section className="relative w-full bg-canvas py-16 sm:py-24">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {INDUSTRIES.map((industry, i) => {
            const Icon = industry.icon;

            // Custom color themes according to industry
            const themeStyles = {
              healthcare: {
                accent: "text-emerald-500",
                badgeBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
                hoverBorder: "hover:border-emerald-500/40",
                glowBg: "from-emerald-500/10 via-teal-500/5 to-transparent",
                iconBg: "bg-emerald-500/10 text-emerald-500",
              },
              education: {
                accent: "text-indigo-500",
                badgeBg: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
                hoverBorder: "hover:border-indigo-500/40",
                glowBg: "from-indigo-500/10 via-sky-500/5 to-transparent",
                iconBg: "bg-indigo-500/10 text-indigo-500",
              },
              ecommerce: {
                accent: "text-amber-500",
                badgeBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
                hoverBorder: "hover:border-amber-500/40",
                glowBg: "from-amber-500/10 via-orange-500/5 to-transparent",
                iconBg: "bg-amber-500/10 text-amber-500",
              },
              finance: {
                accent: "text-cyan-500",
                badgeBg: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
                hoverBorder: "hover:border-cyan-500/40",
                glowBg: "from-cyan-500/10 via-blue-500/5 to-transparent",
                iconBg: "bg-cyan-500/10 text-cyan-500",
              },
            }[industry.slug as "healthcare" | "education" | "ecommerce" | "finance"] || {
              accent: "text-node",
              badgeBg: "bg-node/10 text-node border-node/20",
              hoverBorder: "hover:border-node/40",
              glowBg: "from-node/10 to-transparent",
              iconBg: "bg-node/10 text-node",
            };

            return (
              <motion.div
                key={industry.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link
                  href={`/industries/${industry.slug}`}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-line bg-surface p-8 shadow-sm transition-all duration-300 ${themeStyles.hoverBorder} hover:shadow-xl`}
                >
                  {/* Hover Accent Glow Background */}
                  <div
                    className={`pointer-events-none absolute inset-0 bg-linear-to-br ${themeStyles.glowBg} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  />

                  <div>
                    {/* Top Header: Icon + Category Badge */}
                    <div className="flex items-center justify-between">
                      <span
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${themeStyles.iconBg} transition-transform duration-300 group-hover:scale-110`}
                      >
                        <Icon size={22} />
                      </span>

                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${themeStyles.badgeBg}`}
                      >
                        {industry.slug}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <div className="mt-6">
                      <h3 className="flex items-center justify-between font-display text-2xl font-bold text-body transition-colors group-hover:text-body">
                        {industry.title}
                        <FiArrowUpRight
                          size={22}
                          className={`text-muted-ink transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${themeStyles.accent}`}
                        />
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-ink">
                        {industry.tagline}
                      </p>
                    </div>

                    {/* Simplified Non-Technical Concept Box (English) */}
                    {industry.easySummary && (
                      <div className="mt-5 rounded-xl border border-line/60 bg-canvas/60 p-3.5 backdrop-blur-sm">
                        <p className="text-xs font-medium text-body/90">
                          <span className={`font-semibold ${themeStyles.accent}`}>
                            💡 Key Highlight:{" "}
                          </span>
                          {industry.easySummary}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Footer Highlights / Quick Features */}
                  {industry.highlights && (
                    <div className="mt-6 pt-5 border-t border-line/80 grid grid-cols-2 gap-2 text-xs text-muted-ink">
                      {industry.highlights.map((feat, idx) => (
                        <span key={idx} className="flex items-center gap-1.5 font-medium text-body/80">
                          <FiCheckCircle className={`shrink-0 ${themeStyles.accent}`} size={13} />
                          <span className="truncate">{feat}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}