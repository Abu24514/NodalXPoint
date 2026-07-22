"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const TEAM = [
  { name: "Rohan Kapoor", role: "Founder & CEO", initials: "RK" },
  { name: "Sanya Verma", role: "Head of Engineering", initials: "SV" },
  { name: "Arjun Malhotra", role: "Head of Design", initials: "AM" },
];

export default function Leadership() {
  return (
    <section className="relative w-full bg-canvas py-20 sm:py-24">
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
              Leadership
            </p>
            <h2 className="mt-4 font-display text-2xl font-semibold leading-tight text-body sm:text-3xl md:text-4xl">
              Meet the people behind nodalXpoint.
            </h2>
          </div>

          <Link
            href="/about/leadership"
            className="group flex shrink-0 items-center gap-2 text-sm font-semibold text-node"
          >
            Meet the full team
            <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {TEAM.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-line bg-surface p-7 text-center"
            >
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-node/10 font-display text-lg font-semibold text-node">
                {person.initials}
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-body">{person.name}</h3>
              <p className="mt-1 text-sm text-muted-ink">{person.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}