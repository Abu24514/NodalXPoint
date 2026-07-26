"use client";

import { motion } from "framer-motion";
import { FiCheckCircle, FiTarget } from "react-icons/fi";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

type OverviewSectionProps = {
  overview: string;
  whoItsFor: string[];
};

export default function OverviewSection({ overview, whoItsFor }: OverviewSectionProps) {
  return (
    <div className="grid gap-12 lg:grid-cols-12 items-start">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="lg:col-span-7 space-y-6"
      >
        <h2 className="text-3xl font-bold text-slate-900">Overview</h2>
        <p className="text-lg leading-relaxed text-slate-600">{overview}</p>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="lg:col-span-5 rounded-3xl bg-slate-50 border border-slate-200 p-8"
      >
        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <FiTarget className="text-blue-600" /> Ideal For
        </h3>
        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-4"
        >
          {whoItsFor.map((item, i) => (
            <motion.li
              key={i}
              variants={fadeUp}
              className="flex items-start gap-3 text-slate-700"
            >
              <FiCheckCircle className="mt-1 shrink-0 text-blue-600" />
              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
}