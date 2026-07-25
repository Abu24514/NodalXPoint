"use client";

import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import FeatureGrid from "./FeatureGrid";

const HIGHLIGHTS = [
  "Full-cycle engineering, from architecture to launch",
  "Senior-led team, not a rotating bench of juniors",
  "Two-week sprints with a working preview every step",
  "We stay on after launch — no handoff and disappear",
];

export default function CompanyOverview() {
  return (
    <section className="relative w-full overflow-hidden bg-canvas py-20 sm:py-28">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-6xl space-y-14 px-6">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="rounded-2xl border border-line bg-surface p-7 sm:p-8"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-ink">
              What Working With Us Looks Like
            </p>
            <ul className="mt-5 space-y-4">
              {HIGHLIGHTS.map((item) => (
                <motion.li key={item} variants={fadeUp} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-node/10 text-node">
                    <FiCheckCircle size={13} />
                  </span>
                  <span className="text-sm leading-6 text-body">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative"
          >
            <div className="relative w-full overflow-hidden rounded-2xl border border-line bg-surface p-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-line pb-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-rose-400/70" />
                  <div className="h-3 w-3 rounded-full bg-amber-400/70" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400/70" />
                </div>
                <span className="font-mono text-xs text-muted-ink">enterprise_stack.config</span>
              </div>

              <div className="mt-6 space-y-4">
                <div className="space-y-2">
                  <div className="h-2.5 w-3/4 rounded-full bg-node/20" />
                  <div className="h-2.5 w-1/2 rounded-full bg-line" />
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="rounded-xl border border-line bg-canvas p-4">
                    <div className="h-2 w-10 rounded bg-node/30" />
                    <div className="mt-2 h-4 w-16 rounded bg-node" />
                  </div>
                  <div className="rounded-xl border border-line bg-canvas p-4">
                    <div className="h-2 w-10 rounded bg-node/20" />
                    <div className="mt-2 h-4 w-12 rounded bg-node/70" />
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-node/15 bg-node/5 p-3 text-xs font-medium text-node">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  99.9% Production Ready & Automated Scaling
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <FeatureGrid />
      </div>
    </section>
  );
}