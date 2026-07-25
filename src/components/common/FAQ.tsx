"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import { fadeUp, viewportOnce } from "@/lib/motion";
import SectionHeader from "@/components/common/SectionBadge";

export interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  data: FAQItem[];
  badge?: string;
  title?: string;
  titleHighlight?: string;
}

export default function FAQ({
  data,
  badge = "FAQ",
  title = "Frequently asked",
  titleHighlight = "questions.",
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6 space-y-12">
        {/* Dynamic Header */}
        <SectionHeader
          badge={badge}
          title={title}
          titleHighlight={titleHighlight}
        />

        <div className="space-y-4">
          {data.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={item.q}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className={`relative overflow-hidden rounded-2xl border transition-all ${
                  isOpen
                    ? "border-node/40 bg-surface shadow-sm"
                    : "border-line bg-surface hover:border-node/25"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span
                    className={`font-display text-sm font-semibold sm:text-base ${
                      isOpen ? "text-node" : "text-body"
                    }`}
                  >
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                      isOpen ? "bg-node text-white" : "bg-node/10 text-node"
                    }`}
                  >
                    <FiPlus size={14} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-xs leading-relaxed text-muted-ink sm:text-sm">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}