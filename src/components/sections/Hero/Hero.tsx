"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const PATHS = [
  { d: "M 60 120 C 320 160, 620 260, 980 420", delay: 0 },
  { d: "M 30 340 C 300 330, 640 380, 980 430", delay: 0.6 },
  { d: "M 80 560 C 340 500, 660 460, 980 440", delay: 1.2 },
  { d: "M 120 760 C 380 620, 700 500, 990 450", delay: 1.8 },
  { d: "M 1360 100 C 1180 200, 1060 300, 990 420", delay: 0.3 },
  { d: "M 1400 700 C 1200 600, 1080 500, 995 445", delay: 0.9 },
];

const NODE_CENTER = { x: 990, y: 435 };

const SERVICES = [
  "Web Development",
  "Mobile Apps",
  "CRM Systems",
  "SEO",
  "AI & ML",
  "Digital Marketing",
];

function NodeNetwork({ reduced }: { reduced: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 860"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden h-full w-full opacity-[0.45] sm:block lg:opacity-[0.35]"
    >
      {PATHS.map((p, i) => (
        <path key={i} d={p.d} fill="none" stroke="var(--color-line-ink)" strokeWidth="1" />
      ))}

      {!reduced &&
        PATHS.map((p, i) => (
          <circle key={`pulse-${i}`} r="3.2" fill="var(--color-brass)">
            <animateMotion dur="4.5s" begin={`${p.delay}s`} repeatCount="indefinite" path={p.d} keyPoints="0;1" keyTimes="0;1" calcMode="linear" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="4.5s" begin={`${p.delay}s`} repeatCount="indefinite" />
          </circle>
        ))}

      <circle cx={NODE_CENTER.x} cy={NODE_CENTER.y} r="5" fill="var(--color-brass)" />
      <circle cx={NODE_CENTER.x} cy={NODE_CENTER.y} r="14" fill="none" stroke="var(--color-brass)" strokeWidth="1" opacity="0.4" className={reduced ? "" : "animate-ping"} style={{ animationDuration: "3s" }} />
      <circle cx={NODE_CENTER.x} cy={NODE_CENTER.y} r="26" fill="none" stroke="var(--color-brass)" strokeWidth="1" opacity="0.15" />
    </svg>
  );
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <section className="relative flex w-full items-start overflow-hidden bg-ink py-16 sm:min-h-[92vh] sm:items-center sm:py-0">
      {/* Mesh background grid lines */}
      <div className="grid-lines absolute inset-0 opacity-40 sm:opacity-60" />

      {/* Dynamic Glow Effect */}
      <div
        className="pointer-events-none absolute top-1/3 rounded-full opacity-20 blur-[80px] -right-20 h-72 w-72 sm:-right-40 sm:h-96 sm:w-96 sm:blur-[120px] lg:h-130 lg:w-130 lg:-right-60"
        style={{ background: "var(--color-brass)" }}
      />

      <NodeNetwork reduced={reduced} />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* LEFT COLUMN: Main Typography & CTAs */}
          <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl">
            <motion.p variants={item} className="mb-5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-ink sm:mb-6 sm:text-xs sm:tracking-[0.25em]">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
              nodalXpoint &middot; IT Solutions
            </motion.p>

            <motion.h1 variants={item} className="font-display text-3xl font-semibold leading-[1.15] text-body xs:text-4xl sm:text-5xl sm:leading-[1.08] md:text-6xl">
              The <span className="text-brass-soft">nodal point</span> where your business meets technology.
            </motion.h1>

            <motion.p variants={item} className="mt-5 max-w-xl text-sm leading-6 text-muted-ink sm:mt-6 sm:text-base sm:leading-7 lg:text-lg">
              We design and build the websites, apps, and systems your business runs on — CRMs, SEO, and AI included. One team, every piece connected.
            </motion.p>

            {/* Micro-tags list */}
            <motion.ul variants={item} className="mt-5 flex flex-wrap items-center gap-2 sm:mt-6">
              {SERVICES.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-line-ink px-3 py-1.5 text-[11px] font-medium text-muted-ink transition-colors duration-300 hover:border-brass/50 hover:text-brass-soft sm:px-3.5 sm:text-xs"
                >
                  {s}
                </li>
              ))}
            </motion.ul>

            {/* Interactive Action CTA Blocks */}
            <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <button className="group flex items-center justify-center gap-2 rounded-full border border-brass bg-brass px-7 py-3 text-sm font-semibold text-ink transition duration-300 hover:bg-transparent hover:text-brass-soft w-full sm:w-auto">
                Start a Project
                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <button className="rounded-full border border-line-ink px-7 py-3 text-sm font-semibold text-body transition duration-300 hover:border-brass/50 hover:text-brass-soft w-full sm:w-auto">
                See Our Work
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Interactive Tech Graphics Overlay */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative hidden items-center justify-center lg:flex"
          >
            <div className="absolute h-130 w-130 rounded-full bg-brass/10 blur-[130px]" />
            <div className="absolute h-105 w-105 rounded-full border border-line-ink/40" />
            <div className="absolute h-80 w-80 rounded-full border border-line-ink/20" />

            {/* Smooth Floating Tech Graphic */}
            <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}>
              <Image
                src="/tech.png"
                alt="Technology Illustration"
                width={475}
                height={480}
                priority
                className="drop-shadow-[0_0_80px_rgba(200,160,40,.35)]"
              />
            </motion.div>

            {/* AI Overlay Badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute left-0 top-16 rounded-2xl border border-line-ink bg-white/5 px-5 py-4 backdrop-blur-xl"
            >
              <p className="text-xs text-muted-ink">AI Automation</p>
              <h3 className="mt-1 text-xl font-semibold text-body">98%</h3>
            </motion.div>

            {/* Metrics Projects Overlay Badge */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute bottom-14 right-0 rounded-2xl border border-line-ink bg-white/5 px-5 py-4 backdrop-blur-xl"
            >
              <p className="text-xs text-muted-ink">Projects</p>
              <h3 className="mt-1 text-xl font-semibold text-body">120+</h3>
            </motion.div>
          </motion.div>
          
        </div>
      </div>

      {/* Smooth Scroll indicator block */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-9 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="text-[11px] uppercase tracking-[0.2em] text-muted-ink">Scroll</span>
        <span className="h-8 w-px overflow-hidden bg-line-ink">
          <span className={`block h-full w-full bg-brass ${reduced ? "" : "animate-scroll-line"}`} />
        </span>
      </motion.div>
    </section>
  );
}