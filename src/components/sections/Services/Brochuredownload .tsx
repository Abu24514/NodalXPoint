"use client";

import { motion } from "framer-motion";
import { FiDownload, FiCheck } from "react-icons/fi";

const INCLUDES = [
  "Full service breakdown",
  "Tech stack & frameworks",
  "Industry expertise",
  "How we engage & deliver",
];

export default function BrochureDownload() {
  return (
    <section className="relative w-full overflow-hidden bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-line bg-surface">
          <div
            className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full opacity-[0.12] blur-[100px]"
            style={{ background: "var(--color-node)" }}
          />

          <div className="relative grid grid-cols-1 items-center gap-12 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:gap-16 lg:p-14">
            {/* Left: copy */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-ink sm:text-xs sm:tracking-[0.25em]">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-node" />
                Company Brochure
              </p>
              <h2 className="mt-4 font-display text-2xl font-semibold leading-tight text-body sm:text-3xl md:text-4xl">
                Everything we do, in one download.
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-6 text-muted-ink sm:text-base sm:leading-7">
                A complete overview of our services, technology stack, and
                industry expertise — ready to share with your team or
                stakeholders.
              </p>

              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {INCLUDES.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-body">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-node/10 text-node">
                      <FiCheck size={12} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="/nodal-Brochure.pdf"
                download
                className="group mt-8 inline-flex items-center gap-2 rounded-full border border-node bg-node px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-transparent hover:text-node"
              >
                Download Brochure
                <FiDownload className="transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </motion.div>

            {/* Right: document mockup */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative mx-auto hidden w-[220px] shrink-0 sm:block"
            >
              <div className="absolute -right-4 -top-4 h-full w-full rounded-xl border border-line bg-canvas" />
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [-2, 1, -2] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 0,
                  y: -14,
                  boxShadow: "0 30px 60px -15px rgba(0,0,0,0.35)",
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative flex h-[300px] w-[220px] cursor-pointer flex-col justify-between rounded-xl border border-line bg-node p-5 shadow-xl transition-shadow duration-300"
              >
                <div>
                  <p className="font-display text-sm font-bold text-white">
                    nodalXPoint
                  </p>
                  <p className="mt-1 text-[10px] leading-snug text-white/70">
                    Empowering Data. Engineering Intelligence.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="h-1.5 w-full rounded-full bg-white/20" />
                  <div className="h-1.5 w-3/4 rounded-full bg-white/20" />
                  <div className="h-1.5 w-5/6 rounded-full bg-white/20" />
                </div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-white/60">
                  Brochure · PDF
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}