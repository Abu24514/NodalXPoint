"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

type Tool = { name: string; icon: IconType };

type CapabilitiesToolsSectionProps = {
  capabilities: string[];
  tools: Tool[];
};

export default function CapabilitiesToolsSection({
  capabilities,
  tools,
}: CapabilitiesToolsSectionProps) {
  return (
    <div className="grid gap-12 md:grid-cols-2">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Core Capabilities</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-blue-600" />
              <span className="text-sm font-medium text-slate-700">{cap}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Tools & Technologies</h2>
        <div className="flex flex-wrap gap-3">
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 shadow-sm transition-shadow hover:shadow-md"
            >
              <tool.icon className="text-lg text-blue-600" />
              <span className="text-sm font-semibold text-slate-700">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}