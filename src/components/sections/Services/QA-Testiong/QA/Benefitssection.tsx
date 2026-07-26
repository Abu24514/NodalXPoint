"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import SectionHeader from "@/components/common/SectionBadge";

type Benefit = { title: string; desc: string; icon: IconType };

type BenefitsSectionProps = {
  benefits: Benefit[];
};

export default function BenefitsSection({ benefits }: BenefitsSectionProps) {
  return (
    <div className="space-y-12">
      <SectionHeader
        badge="Why It Matters"
        title="Key"
        titleHighlight="Benefits"
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-6 md:grid-cols-3"
      >
        {benefits.map((benefit, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="group rounded-3xl border border-blue-100 bg-blue-50/50 p-8 text-center transition-shadow hover:shadow-md"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 4 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm"
            >
              <benefit.icon size={28} />
            </motion.div>
            <h4 className="mb-3 text-lg font-bold text-slate-900">{benefit.title}</h4>
            <p className="text-sm text-slate-600">{benefit.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}