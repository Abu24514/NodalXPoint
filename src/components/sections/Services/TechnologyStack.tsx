"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import SectionHeader from "@/components/common/SectionBadge";
import { STACK } from "@/data/techStack";

export default function TechnologyStack() {
  return (
    <section className="relative w-full bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 space-y-14">

        <SectionHeader
          badge="Enterprise Tech Stack"
          title="Built for scale with "
          titleHighlight="modern engineering."
          subtitle="We leverage production-tested frameworks, distributed systems, and modern observability tools to build resilient software."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5"
        >
          {STACK.map((group) => (
            <motion.div
              key={group.category}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-6"
            >
              <span className="absolute left-0 top-0 h-0.5 w-full origin-left scale-x-0 bg-node transition-transform duration-300 group-hover:scale-x-100" />

              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-body">
                {group.category}
              </h3>

              <div className="grid grid-cols-3 gap-3">
                {group.items.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.1, rotate: -2 }}
                    title={tech.name}
                    className="flex aspect-square w-full items-center justify-center rounded-xl border border-line bg-canvas text-muted-ink transition-all duration-300 hover:border-node/40 hover:bg-node/5 hover:text-node"
                  >
                    <tech.icon size={22} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}