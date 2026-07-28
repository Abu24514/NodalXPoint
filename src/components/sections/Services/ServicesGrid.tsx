"use client";

import { motion } from "framer-motion";
import { stagger, viewportOnce } from "@/lib/motion";
import ServiceCard from "./ServiceCard";
import SectionHeader from "@/components/common/SectionBadge";
import { SERVICES } from "@/data/services";

export default function ServicesGrid() {
  return (
    <section className="bg-canvas py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl space-y-10">
        <SectionHeader
          badge="Core Services"
          title="Engineering Capabilities That Scale"
          titleHighlight="With You."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug + service.title} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}