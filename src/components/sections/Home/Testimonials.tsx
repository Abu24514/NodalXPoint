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
  {
    quote:
      "The migration to the new cloud infrastructure was seamless. We experienced zero downtime and our load times dropped by 40%.",
    name: "Neha Sharma",
    role: "CTO, Tech Startup",
    initials: "NS",
  },
];

const MARQUEE_QUOTES = [...QUOTES, ...QUOTES];

const QuoteIcon = () => (
  <svg 
    className="mb-5 h-10 w-10 text-node/20" 
    fill="currentColor" 
    viewBox="0 0 32 32" 
    aria-hidden="true"
  >
    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.694 20 9.249L20 14L28 14L28 32L14.017 32L14.017 18ZM0 18L0 10.609C0 4.905 3.748 1.038 9 0L9.995 2.151C7.563 3.068 6 5.694 6 9.249L6 14L14 14L14 32L0 32L0 18Z" />
  </svg>
);

export default function Testimonials() {
  return (
    <section className="relative w-full overflow-hidden bg-canvas py-20 sm:py-28">
      {/* Header Section */}
      <div className="mx-auto max-w-340 px-6">
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
      </div>

      <div className="mx-auto mt-16 flex w-full max-w-340 overflow-hidden px-6 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <motion.div
          className="flex w-max gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30, 
          }}
        >
          {MARQUEE_QUOTES.map((q, i) => (
            <div
              key={`${q.name}-${i}`}
              className="group relative flex w-[85vw] max-w-87.5 shrink-0 flex-col justify-between rounded-3xl border border-line bg-surface p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-node/10 sm:w-[350px] md:w-[400px]"
            >
              <div>
                <QuoteIcon />
                <p className="text-sm italic leading-relaxed text-body md:text-base">
                  &ldquo;{q.quote}&rdquo;
                </p>
              </div>
              
              <div className="mt-8 flex items-center gap-4 border-t border-line/50 pt-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-node/10 text-sm font-bold text-node transition-colors duration-300 group-hover:bg-node group-hover:text-white">
                  {q.initials}
                </span>
                <div>
                  <p className="text-sm font-bold text-body">{q.name}</p>
                  <p className="mt-0.5 text-xs font-medium text-muted-ink">{q.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}