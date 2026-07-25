"use client";

import { motion } from "framer-motion";
import { viewportOnce } from "@/lib/motion";
import { ElementType } from "react";

export interface ProcessStep {
  step: string;
  title: string;
  icon: ElementType;
  desc: string;
}

interface ProcessProps {
  steps: ProcessStep[];
  badge?: string;
  title?: string;
  bgColor?: string; 
}

export default function ProcessTimeline({
  steps,
  badge = "Our Process",
  title = "A proven path from idea to production.",
  bgColor = "bg-transparent", 
}: ProcessProps) {
  return (
  
    <section className={`relative w-full py-20 sm:py-28 ${bgColor}`}>
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-ink sm:text-xs sm:tracking-[0.25em]">
            {badge}
          </p>
          <h2 className="mt-4 font-display text-2xl font-semibold leading-tight text-body sm:text-3xl md:text-4xl">
            {title}
          </h2>
        </motion.div>

       
        <div className="relative mt-16 hidden lg:block">
          <div className="absolute left-0 right-0 top-6 h-px bg-line" />
          <div className="grid grid-cols-7 gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative flex flex-col items-center text-center"
              >
            
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-node bg-transparent text-node">
                  <s.icon size={18} />
                </span>
                <span className="mt-3 font-mono text-[11px] font-semibold text-node">{s.step}</span>
                <h3 className="mt-1 font-display text-sm font-semibold text-body">{s.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-ink">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative mt-12 space-y-10 lg:hidden">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-line" />
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative flex gap-5"
            >
              <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-node bg-transparent text-node">
                <s.icon size={16} />
              </span>
              <div className="pt-1.5">
                <span className="font-mono text-[11px] font-semibold text-node">{s.step}</span>
                <h3 className="mt-0.5 font-display text-base font-semibold text-body">{s.title}</h3>
                <p className="mt-1 text-sm leading-6 text-muted-ink">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}