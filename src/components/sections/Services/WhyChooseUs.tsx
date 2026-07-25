"use client";

import { motion } from "framer-motion";
import {
  FiUsers,
  FiRefreshCw,
  FiMessageCircle,
  FiTrendingUp,
} from "react-icons/fi";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import SectionHeader from "@/components/common/SectionBadge";

const REASONS = [
  {
    icon: FiUsers,
    title: "Experienced Engineers",
    desc: "A senior-led team that has shipped production software across industries.",
  },
  {
    icon: FiRefreshCw,
    title: "Agile Development",
    desc: "Short, reviewable sprints so you see progress every week, not every quarter.",
  },
  {
    icon: FiMessageCircle,
    title: "Transparent Communication",
    desc: "Direct access to your team, clear timelines, no black-box updates.",
  },
  {
    icon: FiTrendingUp,
    title: "Long-Term Partnership",
    desc: "We stay on past launch — maintenance, scaling, and the next feature.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative w-full bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 space-y-12">
        
        <SectionHeader 
          badge="Why Choose Us"
          title="Built to be your long-term"
          titleHighlight="engineering partner."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {REASONS.map((r) => (
            <motion.div
              key={r.title}
              variants={fadeUp}
              className="rounded-2xl border border-line bg-surface p-7 text-center transition-all hover:border-node/40 hover:shadow-lg"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-node/10 text-node">
                <r.icon size={24} />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-body">
                {r.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-ink">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}