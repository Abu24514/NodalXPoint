"use client";

import { motion } from "framer-motion";
import { FiCode, FiCpu, FiSmartphone, FiLayers } from "react-icons/fi";

const CAPABILITIES = [
  { icon: FiCode, label: "Web Development" },
  { icon: FiCpu, label: "AI Solutions" },
  { icon: FiSmartphone, label: "Mobile Apps" },
  { icon: FiLayers, label: "UI/UX Design" },
];

export default function AboutWho() {
  return (
    <section className="relative w-full overflow-hidden bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left: eyebrow + heading */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-ink sm:text-xs sm:tracking-[0.25em]">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-node" />
              Who We Are
            </p>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.15] text-body sm:text-4xl md:text-[2.75rem]">
              Building digital solutions that{" "}
              <span className="text-node">drive growth.</span>
            </h2>

            <div className="mt-8 hidden lg:block">
              <div className="h-px w-16 bg-line" />
              <p className="mt-4 text-xs leading-relaxed text-muted-ink">
                A technology partner for startups, businesses, and enterprises
                building for the long run.
              </p>
            </div>
          </motion.div>

          {/* Right: description + capability strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative lg:col-span-7"
          >
            <div className="relative overflow-hidden rounded-2xl border border-line bg-surface p-8 sm:p-10">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-[0.12] blur-[80px]"
                style={{ background: "var(--color-node)" }}
              />

              <p className="relative text-base leading-8 text-body sm:text-lg sm:leading-9">
                NodalXpoint is a technology company specializing in web
                development, AI solutions, mobile applications, UI/UX design,
                and digital transformation. We help startups, businesses, and
                enterprises build scalable, secure, and high-performance
                digital products that solve real business challenges and
                create long-term value.
              </p>

              <div className="relative mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {CAPABILITIES.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <motion.div
                      key={c.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.4, delay: 0.15 + i * 0.06 }}
                      className="flex flex-col items-start gap-2.5 rounded-xl border border-line bg-canvas px-4 py-4"
                    >
                      <Icon size={16} className="text-node" />
                      <span className="text-xs font-medium leading-tight text-body">
                        {c.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}