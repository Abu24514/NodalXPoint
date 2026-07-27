"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FaGlobe, FaMobileAlt, FaUsers, FaPaintBrush, FaCogs } from "react-icons/fa";
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
    id: "uiux",
    label: "UI/UX",
    icon: FaPaintBrush,
    x: 690,
    y: 436,
    path: "M690,436 C665,370 630,305 600,260",
    blurb: "Design that's intuitive, on-brand, and easy to use.",
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
    id: "devops",
    label: "DevOps",
    icon: FaCogs,
    x: 1108,
    y: 372,
    path: "M1108,372 C950,338 758,296 600,260",
    blurb: "CI/CD pipelines and infrastructure that ship faster, safer.",
  },
] as const;

const VIEW_W = 1200;
const VIEW_H = 480;

export default function ServiceConstellation() {
  const reducedMotion = useReducedMotion();
  const [hovered, setHovered] = useState<(typeof NODES)[number]["id"] | null>(null);
  const activeNode = NODES.find((n) => n.id === hovered) ?? null;

  return (
    <>
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
              style={{ animationDuration: "2s",
                transformOrigin: `${HUB.x}px ${HUB.y}px`
               }}
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
    </>
  );
}