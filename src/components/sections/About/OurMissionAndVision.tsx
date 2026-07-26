"use client";

import { motion } from "framer-motion";
import { FiTarget, FiEye } from "react-icons/fi";

const ITEMS = [
  {
    icon: FiTarget,
    title: "Our Mission",
    desc: "To empower businesses with innovative technology that simplifies challenges, accelerates growth, and delivers measurable results through reliable and future-ready digital solutions.",
  },
  {
    icon: FiEye,
    title: "Our Vision",
    desc: "To become a trusted global technology partner, helping organizations embrace digital innovation with scalable products, exceptional quality, and long-term collaboration.",
  },
];

export default function OurMissionAndVision() {
  return (
    <section className="relative w-full bg-canvas py-20 ">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-ink sm:text-xs sm:tracking-[0.25em]">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-node" />
            Mission &amp; Vision
          </p>
          <h2 className="mt-4 font-display text-2xl font-semibold leading-tight text-body sm:text-3xl md:text-4xl">
            What drives the work, and where it&apos;s headed.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mt-12 overflow-hidden rounded-2xl border border-line bg-surface"
        >
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full opacity-[0.10] blur-[100px]"
            style={{ background: "var(--color-node)" }}
          />

          <div className="relative grid grid-cols-1 sm:grid-cols-2">
            {ITEMS.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`p-8 sm:p-10 ${
                    i === 0 ? "sm:border-r sm:border-line" : ""
                  } ${i === 1 ? "border-t border-line sm:border-t-0" : ""}`}
                >
                  {/* Safely implemented node color with opacity for the icon box */}
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl overflow-hidden text-node">
                    <div 
                      className="absolute inset-0" 
                      style={{ backgroundColor: "var(--color-node)", opacity: 0.1 }} 
                    />
                    <Icon size={24} className="relative z-10" />
                  </div>
                  
                  <h3 className="mt-6 font-display text-xl font-semibold text-body sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-ink sm:text-base sm:leading-8">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}