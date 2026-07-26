"use client";

import { motion } from "framer-motion";
import {
  FiZap,
  FiAward,
  FiShield,
  FiUsers,
  FiTrendingUp,
} from "react-icons/fi";

const VALUES = [
  {
    icon: FiZap,
    title: "Innovation",
    description: "We embrace modern technologies to build future-ready solutions.",
  },
  {
    icon: FiAward,
    title: "Quality",
    description: "Every product is crafted with performance, security, and reliability in mind.",
  },
  {
    icon: FiShield,
    title: "Integrity",
    description: "We believe in transparency, honesty, and building lasting relationships.",
  },
  {
    icon: FiUsers,
    title: "Collaboration",
    description: "We work closely with our clients to turn ideas into successful digital products.",
  },
  {
    icon: FiTrendingUp,
    title: "Growth",
    description: "We continuously learn, improve, and innovate to deliver greater value.",
  },
];

export default function Values() {
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
            Core Values
          </p>
          <h2 className="mt-4 font-display text-2xl font-semibold leading-tight text-body sm:text-3xl md:text-4xl">
            The principles behind every project.
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-7"
              >
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-node transition-transform duration-300 group-hover:scale-x-100" />
                <Icon size={20} className="text-node" />
                <h3 className="mt-5 font-display text-lg font-semibold text-body">{v.title}</h3>
                <p className="mt-2.5 text-sm leading-6 text-muted-ink">{v.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}