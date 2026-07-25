"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export default function CTA() {
  return (
    <section className="w-full bg-canvas px-6 py-20 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-node px-8 py-16 text-center sm:px-16"
      >
        <div className="node-grid absolute inset-0 opacity-20" />

        <div className="relative z-10">
          <h2 className="mx-auto max-w-2xl font-display text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl">
            Ready to find your business&apos;s nodal point?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-white/75 sm:text-base">
            Tell us what you&apos;re building. We&apos;ll reply within one business day with next steps, not a sales script.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <button className="group flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-node transition duration-300 hover:bg-white/90 sm:w-auto">
              Start a Project
              <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button className="w-full rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:border-white/60 sm:w-auto">
              Talk to the Team
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}