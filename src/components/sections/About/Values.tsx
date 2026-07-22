"use client";

import { motion } from "framer-motion";
import { FaHandshake, FaBullseye, FaCommentDots, FaSeedling } from "react-icons/fa";

const VALUES = [
  {
    icon: FaBullseye,
    title: "Ship it right the first time",
    description: "We'd rather spend an extra day in review than hand over something that breaks in production.",
  },
  {
    icon: FaCommentDots,
    title: "Talk in plain language",
    description: "No jargon-heavy reports. If we can't explain a decision simply, we haven't finished thinking it through.",
  },
  {
    icon: FaHandshake,
    title: "Own the outcome",
    description: "We measure our work by what it does for your business, not by hours logged or tickets closed.",
  },
  {
    icon: FaSeedling,
    title: "Build for the long run",
    description: "Every system we hand over is documented and maintainable — by us, or by whoever comes after us.",
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
            How We Think
          </p>
          <h2 className="mt-4 font-display text-2xl font-semibold leading-tight text-body sm:text-3xl md:text-4xl">
            A few things we don&apos;t compromise on.
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {VALUES.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
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