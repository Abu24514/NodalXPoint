"use client";

import { motion } from "framer-motion";

const MILESTONES = [
  {
    year: "2019",
    title: "Founded",
    description: "Started as a two-person web studio taking on small business sites.",
  },
  {
    year: "2021",
    title: "First enterprise build",
    description: "Shipped our first full CRM system for a multi-branch retail client.",
  },
  {
    year: "2023",
    title: "100 projects delivered",
    description: "Crossed 100 completed projects across web, mobile, and marketing.",
  },
  {
    year: "2025",
    title: "AI practice launched",
    description: "Added a dedicated AI & automation team as client demand grew.",
  },
];

export default function OurStory() {
  return (
    <section className="relative w-full bg-canvas py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-ink sm:text-xs sm:tracking-[0.25em]">
              Our Story
            </p>
            <h2 className="mt-4 font-display text-2xl font-semibold leading-tight text-body sm:text-3xl md:text-4xl">
              Built by people who&apos;d rather ship than pitch.
            </h2>
            <p className="mt-5 text-sm leading-6 text-muted-ink sm:text-base sm:leading-7">
              We started nodalXpoint because most client work we&apos;d seen elsewhere was split across a web agency, a marketing freelancer, and an app developer who never talked to each other. We wanted one team that could hold the whole picture — the site, the CRM behind it, the campaigns pointing at it, and the systems keeping it running.
            </p>
            <p className="mt-4 text-sm leading-6 text-muted-ink sm:text-base sm:leading-7">
              That&apos;s still how we work: small enough that you talk directly to the people building your project, experienced enough to handle systems that matter to your business.
            </p>
          </motion.div>

          <div className="relative space-y-8">
            <div className="absolute left-5 top-2 bottom-2 w-px bg-line" />
            {MILESTONES.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative flex gap-5"
              >
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-node bg-canvas font-mono text-[11px] font-semibold text-node">
                  {m.year}
                </div>
                <div className="pt-1.5">
                  <h3 className="font-display text-base font-semibold text-body">{m.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-muted-ink">{m.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}