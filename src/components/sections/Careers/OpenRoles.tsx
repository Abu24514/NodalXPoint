"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const ROLES = [
  {
    title: "Frontend Developer",
    department: "Engineering",
    location: "Remote / Jaipur",
    type: "Full-time",
  },
  {
    title: "React Native Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "AI/ML Engineer",
    department: "AI & Automation",
    location: "Remote / Jaipur",
    type: "Full-time",
  },
  {
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Jaipur",
    type: "Full-time",
  },
];

export default function OpenRoles() {
  return (
    <section className="relative w-full bg-canvas py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-ink sm:text-xs sm:tracking-[0.25em]">
            Open Roles
          </p>
          <h2 className="mt-4 font-display text-2xl font-semibold leading-tight text-body sm:text-3xl md:text-4xl">
            Currently hiring for these positions.
          </h2>
        </motion.div>

        <div className="mt-10 divide-y divide-line rounded-2xl border border-line bg-surface">
          {ROLES.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group flex flex-col gap-3 p-6 transition-colors duration-300 hover:bg-node/5 sm:flex-row sm:items-center sm:justify-between sm:p-7"
            >
              <div>
                <h3 className="font-display text-base font-semibold text-body">{role.title}</h3>
                <p className="mt-1 text-sm text-muted-ink">
                  {role.department} &middot; {role.location} &middot; {role.type}
                </p>
              </div>

              <Link
                href="/contact"
                className="flex shrink-0 items-center gap-2 text-sm font-semibold text-node"
              >
                Apply now
                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="mt-6 text-sm text-muted-ink">
          Don&apos;t see a fit?{" "}
          <Link href="/contact" className="font-semibold text-node">
            Send us your resume anyway
          </Link>
          .
        </p>
      </div>
    </section>
  );
}