"use client";

import { motion } from "framer-motion";
import { FaLaptopHouse, FaGraduationCap, FaUserCheck, FaUsers } from "react-icons/fa";

const PERKS = [
  {
    icon: FaLaptopHouse,
    title: "Remote-friendly",
    description: "Work from home or from the office — what matters is the work getting done well.",
  },
  {
    icon: FaUserCheck,
    title: "Real ownership",
    description: "You'll be talking to clients and making decisions in your first few weeks, not just observing.",
  },
  {
    icon: FaGraduationCap,
    title: "Learning budget",
    description: "A yearly budget for courses, certifications, or conferences relevant to your role.",
  },
  {
    icon: FaUsers,
    title: "Small teams",
    description: "You'll know everyone on every project — no ten-layer approval chain to get anything shipped.",
  },
];

export default function WhyJoinUs() {
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
            Why nodalXpoint
          </p>
          <h2 className="mt-4 font-display text-2xl font-semibold leading-tight text-body sm:text-3xl md:text-4xl">
            What working here actually looks like.
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PERKS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-7"
              >
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-node transition-transform duration-300 group-hover:scale-x-100" />
                <Icon size={20} className="text-node" />
                <h3 className="mt-5 font-display text-lg font-semibold text-body">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-6 text-muted-ink">{p.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}