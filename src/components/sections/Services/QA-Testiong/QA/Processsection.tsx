"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import SectionHeader from "@/components/common/SectionBadge";

type ProcessStep = { step: string; title: string; desc: string };

type ProcessSectionProps = {
  process: ProcessStep[];
};

export default function ProcessSection({ process }: ProcessSectionProps) {
  return (
    <div className="space-y-12">
      <SectionHeader
        badge="Our Process"
        title="How We"
        titleHighlight="Work"
        subtitle="Our streamlined approach to quality assurance."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {/* Connecting line — visible only where the steps actually line up */}
        <div className="pointer-events-none absolute top-10 left-0 right-0 hidden h-px bg-slate-200 lg:block" />

        {process.map((step, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <span className="absolute -top-4 -right-4 z-0 text-6xl font-black text-slate-50">
              {step.step}
            </span>
            <div className="relative z-10">
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                {step.step}
              </div>
              <h4 className="mb-2 text-lg font-bold text-slate-900">{step.title}</h4>
              <p className="text-sm text-slate-600">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}