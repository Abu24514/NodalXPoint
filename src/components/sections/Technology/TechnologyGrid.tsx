"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { TECHNOLOGIES } from "@/lib/technologies";

export default function TechnologyGrid() {
  return (
    <section className="relative w-full bg-canvas py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {TECHNOLOGIES.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  href={`/technology/${tech.slug}`}
                  className="group flex items-start gap-4 rounded-2xl border border-line bg-surface p-7 transition-colors duration-300 hover:border-node/40"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-node/10 text-node">
                    <Icon size={18} />
                  </span>

                  <div className="flex-1">
                    <h3 className="flex items-center justify-between font-display text-lg font-semibold text-body">
                      {tech.title}
                      <FiArrowUpRight className="text-muted-ink transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-node" />
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-muted-ink">
                      {tech.tagline}
                    </p>
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