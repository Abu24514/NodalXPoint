"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { ElementType } from "react";

export interface IntegrationService {
  id: string;
  icon: ElementType;
  title: string;
  desc: string;
  platforms: string[];
}

interface ServiceNodeProps {
  service: IntegrationService;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

export default function ServiceNode({ service, index, isOpen, onToggle }: ServiceNodeProps) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: (index % 6) * 0.05 }}
      className="relative pl-20 pb-8 last:pb-0 sm:pl-24"
    >
      {/* Node badge */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-full border-2 bg-surface transition-colors duration-300 sm:h-16 sm:w-16 ${
          isOpen ? "border-node text-node" : "border-line text-muted-ink hover:border-node/50 hover:text-node"
        }`}
      >
        <span
          className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
            isOpen ? "animate-soft-pulse bg-node/10" : "opacity-0"
          }`}
        />
        <Icon size={22} className="relative" />
      </button>
      <span className="absolute left-[26px] -top-1 font-mono text-[9px] text-muted-ink/70 sm:left-[30px]">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Content card */}
      <div
        className={`overflow-hidden rounded-2xl border bg-surface transition-colors duration-300 ${
          isOpen ? "border-node/40" : "border-line"
        }`}
      >
        <button onClick={onToggle} className="flex w-full items-center justify-between gap-4 p-5 text-left">
          <div>
            <h4 className="font-display text-base font-bold text-body sm:text-lg">{service.title}</h4>
            <p className="mt-1 text-xs leading-relaxed text-muted-ink sm:text-sm">{service.desc}</p>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <span className="hidden rounded-full bg-node/10 px-2.5 py-1 font-mono text-[10px] font-semibold text-node sm:inline-block">
              {service.platforms.length} apps
            </span>
            <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="text-muted-ink">
              <FiChevronDown size={18} />
            </motion.span>
          </div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex flex-wrap gap-2 border-t border-line px-5 py-4">
                {service.platforms.map((p, pi) => (
                  <motion.span
                    key={p}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: pi * 0.04 }}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-canvas px-3 py-1.5 font-mono text-[11px] font-medium text-body"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                    {p}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}