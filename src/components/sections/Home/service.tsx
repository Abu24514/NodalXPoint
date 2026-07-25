"use client";

import { motion } from "framer-motion";
import { FaGlobe, FaMobileAlt, FaUsers, FaChartLine } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { PiSparkleLight } from "react-icons/pi";

const SERVICES = [
  {
    icon: FaGlobe,
    title: "Web Development",
    description:
      "Marketing sites, web apps, and e-commerce builds on modern frameworks — fast by default, easy for your team to update.",
  },
  {
    icon: FaMobileAlt,
    title: "Mobile Apps",
    description:
      "Native-feel iOS and Android apps from a single codebase, shipped to both app stores and kept running after launch.",
  },
  {
    icon: FaUsers,
    title: "CRM Systems",
    description:
      "Pipelines, follow-ups, and customer records built around how your team actually sells — not a rigid off-the-shelf tool.",
  },
  {
    icon: FaChartLine,
    title: "SEO",
    description:
      "Technical fixes, content structure, and link strategy aimed at rankings that hold, not a one-month spike.",
  },
  {
    icon: PiSparkleLight,
    title: "AI & ML",
    description:
      "Chat assistants, document automation, and models trained on your own data — practical AI, not a demo that never ships.",
  },
  {
    icon: HiOutlineMail,
    title: "Digital Marketing",
    description:
      "Paid, social, and email campaigns run against real conversion numbers, reported in plain language every month.",
  },
];

export default function Services() {
  return (
    <section className="relative w-full bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-ink sm:text-xs sm:tracking-[0.25em]">
            What We Build
          </p>
          <h2 className="mt-4 font-display text-2xl font-semibold leading-tight text-body sm:text-3xl md:text-4xl">
            Every service your business needs, none of it siloed.
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-7"
              >
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-node transition-transform duration-300 group-hover:scale-x-100" />

                <Icon size={22} className="text-node" />

                <h3 className="mt-5 font-display text-lg font-semibold text-body">
                  {s.title}
                </h3>

                <p className="mt-2.5 text-sm leading-6 text-muted-ink">
                  {s.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}