"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

export type SectionHeaderProps = {
  badge: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  highlightColorClass?: string; 
  dotColorClass?: string;       
};

export default function SectionHeader({
  badge,
  title,
  titleHighlight,
  subtitle,
  highlightColorClass = "text-[#2e3192]", 
  dotColorClass = "bg-[#2e3192]",       
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="mx-auto max-w-3xl text-center"
    >
      <p className="mb-4 flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500 sm:text-xs sm:tracking-[0.25em]">
        <span className={`h-1.5 w-1.5 shrink-0 rounded-full animate-soft-pulse ${dotColorClass}`} />
        {badge}
      </p>

      <h2 className="font-display text-2xl font-semibold leading-[1.2] text-gray-900 sm:text-3xl md:text-4xl">
        {title}
        {titleHighlight && (
          <>
            {" "}
            <span className={highlightColorClass}>{titleHighlight}</span>
          </>
        )}
      </h2>


      {subtitle && (
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base sm:leading-7">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}