"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/common/SectionBadge";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const PROCESS = [
  {
    step: "01",
    title: "Discovery & Analysis",
    desc: "Understand project goals, requirements, user flows, and technical architecture before testing begins.",
  },
  {
    step: "02",
    title: "Test Strategy",
    desc: "Create a structured testing plan covering functional, performance, security, and compatibility testing.",
  },
  {
    step: "03",
    title: "Functional Testing",
    desc: "Validate every feature, workflow, and user interaction across supported browsers and devices.",
  },
  {
    step: "04",
    title: "Performance & Security",
    desc: "Measure application speed, scalability, and identify security vulnerabilities before deployment.",
  },
  {
    step: "05",
    title: "Bug Resolution",
    desc: "Track, verify, and retest every issue to ensure a stable and reliable release.",
  },
  {
    step: "06",
    title: "Production Validation",
    desc: "Perform final quality checks and approve the application for a confident production launch.",
  },
];

export default function TestingProcess() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">

        <SectionHeader
          badge="Our Process"
          title="How We Ensure"
          titleHighlight="Software Quality"
        />

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-600"
        >
          Our quality assurance process is designed to identify risks early,
          improve software reliability, and ensure every release is secure,
          stable, and ready for production.
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {PROCESS.map((item) => (
            <motion.div
              key={item.step}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl"
            >
              <span className="absolute right-6 top-6 text-6xl font-black text-slate-100 transition-colors duration-300 group-hover:text-primary/10">
                {item.step}
              </span>

              <div className="mb-6 h-1.5 w-14 rounded-full bg-primary transition-all duration-300 group-hover:w-24" />

              <h3 className="text-xl font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}