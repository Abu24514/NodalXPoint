"use client";

import { motion } from "framer-motion";

const QUOTES = [
  {
    quote:
      "They rebuilt our booking system in six weeks and it hasn't gone down once since. Support answers the same day, every time.",
    name: "Aarav Mehta",
    role: "Operations Lead, Retail chain",
    initials: "AM",
  },
  {
    quote:
      "Our old CRM was three spreadsheets pretending to be one tool. What they built actually matches how our sales team works.",
    name: "Priya Nair",
    role: "Founder, D2C brand",
    initials: "PN",
  },
  {
    quote:
      "The SEO work was the first agency engagement where the monthly report actually explained what changed and why.",
    name: "Karan Shah",
    role: "Marketing Head, B2B services",
    initials: "KS",
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-ink sm:text-xs sm:tracking-[0.25em]">
            What Clients Say
          </p>
          <h2 className="mt-4 font-display text-2xl font-semibold leading-tight text-body sm:text-3xl md:text-4xl">
            Their words, not our marketing copy.
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {QUOTES.map((q, i) => (
            <motion.div
              key={q.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col rounded-2xl border border-line bg-surface p-7"
            >
              <p className="text-sm leading-6 text-body">&ldquo;{q.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-node/10 text-xs font-semibold text-node">
                  {q.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-body">{q.name}</p>
                  <p className="text-xs text-muted-ink">{q.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}