"use client";

import { motion, type Variants } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import ServiceConstellation from "./Serviceconstellation";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-canvas pb-8 pt-16 sm:pt-24">
      <div className="grid-lines absolute inset-0 opacity-70" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-105 w-105 -translate-x-1/2 rounded-full opacity-[0.10] blur-[110px]"
        style={{ background: "var(--color-node)" }}
      />

      {/* Headline block — centered, full-width */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-3xl px-6 text-center"
      >
        <motion.p
          variants={item}
          className="mb-5 flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-ink sm:mb-6 sm:text-xs sm:tracking-[0.25em]"
        >
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-node animate-soft-pulse" />
          nodalXpoint &middot; IT Solutions
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-3xl font-semibold leading-[1.15] text-body xs:text-4xl sm:text-5xl sm:leading-[1.08] md:text-6xl"
        >
          The <span className="text-node">nodalXpoint</span> where your business meets technology.
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-5 max-w-xl text-sm leading-6 text-muted-ink sm:mt-6 sm:text-base sm:leading-7 lg:text-lg"
        >
          Six disciplines, one team, every piece connected — hover a node below to see how it plugs into your business.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row sm:gap-4"
        >
          <Link href="/contact" className="group flex w-full items-center justify-center gap-2 rounded-full border border-node bg-node px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-transparent hover:text-node sm:w-auto">
            Start a Project
            <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link href="/work" className="w-full rounded-full border border-gray-400 px-7 py-3 text-sm font-semibold text-body transition duration-300 hover:border-node/70 hover:text-node sm:w-auto">
            See Our Work
          </Link>
        </motion.div>
      </motion.div>

      {/* Interactive service constellation — desktop signature piece + mobile fallback */}
      <ServiceConstellation />
    </section>
  );
}