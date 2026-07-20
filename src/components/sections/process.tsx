"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    number: "01",
    title: "Discover",
    description: "We map your workflows, customers, and the systems already in place before proposing anything.",
  },
  {
    number: "02",
    title: "Design",
    description: "Wireframes and a visual direction you approve before a single line of production code is written.",
  },
  {
    number: "03",
    title: "Build",
    description: "Two-week cycles with a working preview link every step, so nothing arrives as a surprise at the end.",
  },
  {
    number: "04",
    title: "Launch",
    description: "Migration, testing, and go-live handled on a schedule that fits your business, not ours.",
  },
  {
    number: "05",
    title: "Support",
    description: "A direct line to the team that built it — fixes and small changes without opening a new ticket queue.",
  },
];

export default function Process() {
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
            How We Work
          </p>
          <h2 className="mt-4 font-display text-2xl font-semibold leading-tight text-body sm:text-3xl md:text-4xl">
            Five steps, one connected line from kickoff to launch.
          </h2>
        </motion.div>

        {/* Desktop: horizontal connected timeline */}
        <div className="relative mt-16 hidden lg:block">
          <div className="absolute left-0 right-0 top-5 h-px bg-line" />
          <div className="grid grid-cols-5 gap-6">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pr-6"
              >
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-node bg-canvas font-mono text-xs font-semibold text-node">
                  {s.number}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-body">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-ink">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical connected timeline */}
        <div className="relative mt-12 space-y-10 lg:hidden">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-line" />
          {STEPS.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative flex gap-5 pl-0"
            >
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-node bg-canvas font-mono text-xs font-semibold text-node">
                {s.number}
              </div>
              <div className="pt-1.5">
                <h3 className="font-display text-lg font-semibold text-body">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-muted-ink">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}