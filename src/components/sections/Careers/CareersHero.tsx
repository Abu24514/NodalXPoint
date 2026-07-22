"use client";

import { motion } from "framer-motion";

export default function CareersHero() {
  return (
    <section className="relative w-full overflow-hidden bg-canvas pb-4 pt-16 sm:pt-20">
      <div className="grid-lines absolute inset-0 opacity-60" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-[320px] -translate-x-1/2 rounded-full opacity-[0.10] blur-[100px]"
        style={{ background: "var(--color-node)" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto max-w-3xl px-6 text-center"
      >
        <p className="mb-5 flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-ink sm:text-xs sm:tracking-[0.25em]">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-node animate-soft-pulse" />
          Careers
        </p>

        <h1 className="font-display text-3xl font-semibold leading-[1.15] text-body sm:text-4xl md:text-5xl">
          Grow your career <span className="text-node">with us.</span>
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-muted-ink sm:text-base sm:leading-7">
          We hire slowly and keep teams small, so every new person gets real ownership from week one — not a queue of tickets nobody explains.
        </p>
      </motion.div>
    </section>
  );
}