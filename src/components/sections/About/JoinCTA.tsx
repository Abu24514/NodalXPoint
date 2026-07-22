"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export default function JoinCTA() {
  return (
    <section className="w-full bg-canvas px-6 pb-24 pt-4 sm:pb-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-line bg-surface p-10"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-ink sm:text-xs">
            Careers
          </p>
          <h3 className="mt-4 font-display text-xl font-semibold text-body sm:text-2xl">
            Grow your career with us.
          </h3>
          <p className="mt-3 text-sm leading-6 text-muted-ink">
            We hire slowly and keep teams small — every new person gets real ownership from week one.
          </p>
          <Link
            href="/careers"
            className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-node"
          >
            View open roles
            <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-3xl bg-node p-10"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 sm:text-xs">
            Contact
          </p>
          <h3 className="mt-4 font-display text-xl font-semibold text-white sm:text-2xl">
            Let&apos;s build something together.
          </h3>
          <p className="mt-3 text-sm leading-6 text-white/75">
            Tell us what you&apos;re working on — we reply within one business day.
          </p>
          <Link
            href="/contact"
            className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white"
          >
            Get in touch
            <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}