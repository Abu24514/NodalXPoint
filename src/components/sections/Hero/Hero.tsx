"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { FaGlobe, FaMobileAlt, FaUsers, FaChartLine } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { PiSparkleLight } from "react-icons/pi";

const HUB = { x: 600, y: 260 };

const NODES = [
  {
    id: "web",
    label: "Web Development",
    icon: FaGlobe,
    x: 90,
    y: 78,
    path: "M90,78 C250,120 420,180 600,260",
    blurb: "Fast, modern websites built to convert visitors into customers.",
  },
  {
    id: "mobile",
    label: "Mobile Apps",
    icon: FaMobileAlt,
    x: 300,
    y: 400,
    path: "M300,400 C400,350 500,305 600,260",
    blurb: "iOS and Android apps your customers open every day.",
  },
  {
    id: "crm",
    label: "CRM Systems",
    icon: FaUsers,
    x: 520,
    y: 44,
    path: "M520,44 C550,110 578,185 600,260",
    blurb: "Custom CRMs that keep every lead and client in one place.",
  },
  {
    id: "seo",
    label: "SEO",
    icon: FaChartLine,
    x: 690,
    y: 436,
    path: "M690,436 C665,370 630,305 600,260",
    blurb: "Rankings that turn search traffic into real business.",
  },
  {
    id: "ai",
    label: "AI & ML",
    icon: PiSparkleLight,
    x: 910,
    y: 84,
    path: "M910,84 C800,135 685,195 600,260",
    blurb: "Automation and models trained on your own data.",
  },
  {
    id: "marketing",
    label: "Digital Marketing",
    icon: HiOutlineMail,
    x: 1108,
    y: 372,
    path: "M1108,372 C950,338 758,296 600,260",
    blurb: "Campaigns across every channel your customers use.",
  },
] as const;

const VIEW_W = 1200;
const VIEW_H = 480;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const [hovered, setHovered] = useState<(typeof NODES)[number]["id"] | null>(null);
  const activeNode = NODES.find((n) => n.id === hovered) ?? null;

  return (
    <section className="relative w-full overflow-hidden bg-canvas pb-8 pt-16 sm:pt-24">
      <div className="grid-lines absolute inset-0 opacity-70" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-105 w-105 -translate-x-1/2 rounded-full opacity-[0.10] blur-[110px]"
        style={{ background: "var(--color-node)" }}
      />

      {/* Headline block — centered, full-width */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-3xl px-6 text-center"
      >
        <motion.p
          variants={item}
          className="mb-5 flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-ink sm:mb-6 sm:text-xs sm:tracking-[0.25em]"
        >
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-node animate-soft-pulse" />
          nodalXpoint &middot; IT Solutions
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-3xl font-semibold leading-[1.15] text-body xs:text-4xl sm:text-5xl sm:leading-[1.08] md:text-6xl"
        >
          The <span className="text-node">nodal point</span> where your business meets technology.
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-5 max-w-xl text-sm leading-6 text-muted-ink sm:mt-6 sm:text-base sm:leading-7 lg:text-lg"
        >
          Six disciplines, one team, every piece connected — hover a node below to see how it plugs into your business.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row sm:gap-4"
        >
          <button className="group flex w-full items-center justify-center gap-2 rounded-full border border-node bg-node px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-transparent hover:text-node sm:w-auto">
            Start a Project
            <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <button className="w-full rounded-full border border-line px-7 py-3 text-sm font-semibold text-body transition duration-300 hover:border-node/40 hover:text-node sm:w-auto">
            See Our Work
          </button>
        </motion.div>
      </motion.div>

      {/* Interactive service constellation — desktop signature piece */}
      <div className="relative z-10 mx-auto mt-10 hidden max-w-7xl px-6 lg:block">
        <div className="relative h-120 w-full">
          <svg
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            preserveAspectRatio="xMidYMid meet"
            className="absolute inset-0 h-full w-full"
          >
            <defs>
              <linearGradient id="hubGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" style={{ stopColor: "var(--color-node)" }} />
                <stop offset="100%" style={{ stopColor: "var(--color-signal)" }} />
              </linearGradient>
            </defs>

            {NODES.map((n) => {
              const isActive = hovered === n.id;
              return (
                <path
                  key={n.id}
                  d={n.path}
                  fill="none"
                  stroke={isActive ? "var(--color-node)" : "var(--color-line)"}
                  strokeWidth={isActive ? 2 : 1.25}
                  className="transition-all duration-300"
                />
              );
            })}

            {!reducedMotion &&
              NODES.map((n, i) => (
                <circle key={`pulse-${n.id}`} r="3" fill={i % 2 === 0 ? "var(--color-node)" : "var(--color-signal)"} opacity={hovered && hovered !== n.id ? 0.15 : 1}>
                  <animateMotion dur="4.5s" begin={`${i * 0.5}s`} repeatCount="indefinite" path={n.path} keyPoints="0;1" keyTimes="0;1" calcMode="linear" />
                  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="4.5s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
                </circle>
              ))}

            <circle cx={HUB.x} cy={HUB.y} r="30" fill="url(#hubGradient)" opacity={0.12} />
            <circle cx={HUB.x} cy={HUB.y} r="16" fill="url(#hubGradient)" />
            <circle
              cx={HUB.x}
              cy={HUB.y}
              r="24"
              fill="none"
              stroke="var(--color-node)"
              strokeWidth="1"
              opacity="0.35"
              className={reducedMotion ? "" : "animate-ping"}
              style={{ animationDuration: "3s" }}
            />
          </svg>

          {/* Hub label */}
          <div
            className="absolute flex -translate-x-1/2 translate-y-6 flex-col items-center"
            style={{ left: `${(HUB.x / VIEW_W) * 100}%`, top: `${(HUB.y / VIEW_H) * 100}%` }}
          >
            <span className="rounded-full border border-line bg-surface px-3 py-1 text-[11px] font-semibold text-body shadow-[0_10px_30px_-10px_rgba(20,23,31,0.25)]">
              nodalXpoint
            </span>
          </div>

          {/* Service node chips */}
          {NODES.map((n) => {
            const Icon = n.icon;
            const isActive = hovered === n.id;
            return (
              <button
                key={n.id}
                type="button"
                onMouseEnter={() => setHovered(n.id)}
                onFocus={() => setHovered(n.id)}
                onMouseLeave={() => setHovered(null)}
                onBlur={() => setHovered(null)}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${(n.x / VIEW_W) * 100}%`, top: `${(n.y / VIEW_H) * 100}%` }}
              >
                <span
                  className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium shadow-[0_10px_30px_-12px_rgba(20,23,31,0.2)] transition-all duration-300
                    ${
                      isActive
                        ? "scale-110 border-node bg-node text-white"
                        : "border-line bg-surface text-muted-ink hover:border-node/40 hover:text-node"
                    }`}
                >
                  <Icon size={13} />
                  {n.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Shared description panel */}
        <div className="mx-auto -mt-2 flex h-14 max-w-md items-center justify-center text-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeNode?.id ?? "default"}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="text-sm text-muted-ink"
            >
              {activeNode ? activeNode.blurb : "Hover a node to see how it connects to your business."}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile fallback — simple chip row, no hover interaction needed */}
      <div className="relative z-10 mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-2 px-6 lg:hidden">
        {NODES.map((n) => (
          <span
            key={n.id}
            className="rounded-full border border-line bg-surface px-3 py-1.5 text-[11px] font-medium text-muted-ink"
          >
            {n.label}
          </span>
        ))}
      </div>
    </section>
  );
}