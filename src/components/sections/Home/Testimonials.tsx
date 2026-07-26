"use client";

import { motion } from "framer-motion";
import { FaQuoteRight, FaStar } from "react-icons/fa6";

type Quote = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

const QUOTES: Quote[] = [
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

// Two full sets so the loop feels populated, not sparse
const ROW = [...QUOTES, ...QUOTES];

const DURATION = 30; // seconds for one full lap — slower than the tech marquee so quotes stay readable

function TestimonialMarqueeRow({ items }: { items: Quote[] }) {
  const count = items.length;

  return (
    <div className="t-marquee">
      {items.map((t, i) => {
        const delay = (DURATION / count) * (count - (i + 1)) * -1;
        return (
          <div
            key={`${t.name}-${i}`}
            className="t-marquee-item"
            style={{ animationDelay: `${delay}s`, animationDuration: `${DURATION}s` }}
          >
            <FaQuoteRight className="t-quote-mark" />

            <div className="t-stars">
              {Array.from({ length: 5 }).map((_, s) => (
                <FaStar key={s} size={11} />
              ))}
            </div>

            <p className="t-quote">{t.quote}</p>

            <div className="t-author">
              <span className="t-avatar">{t.initials}</span>
              <div>
                <p className="t-name">{t.name}</p>
                <p className="t-role">{t.role}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative w-full overflow-hidden bg-canvas py-14 sm:py-20">
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
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="mt-9 sm:mt-12"
      >
        <TestimonialMarqueeRow items={ROW} />
      </motion.div>

      <style>{`
        .t-marquee {
          --item-w: 290px;
          --item-h: 190px;
          width: 100%;
          max-width: 1536px;
          margin-inline: auto;
          position: relative;
          height: var(--item-h);
          overflow: hidden;
          mask-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 1) 8%,
            rgba(0, 0, 0, 1) 92%,
            rgba(0, 0, 0, 0)
          );
        }

        .t-marquee-item {
          width: var(--item-w);
          height: var(--item-h);
          border-radius: 1.25rem;
          position: absolute;
          top: 0;
          left: max(calc(var(--item-w) * 6), 100%);
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding: 1.25rem;
          overflow: hidden;
          border: 1px solid #e6e2d8;
          border-top: 3px solid #2e3192;
          background: linear-gradient(160deg, #ffffff 0%, #f7f7fb 100%);
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.06);
          animation-name: t-marquee-scroll-left;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          transition: box-shadow 0.25s ease;
        }

        .t-marquee:hover .t-marquee-item {
          animation-play-state: paused;
        }

        .t-marquee-item:hover {
          box-shadow: 0 14px 32px rgba(46, 49, 146, 0.14);
        }

        .t-quote-mark {
          position: absolute;
          top: 0.6rem;
          right: 0.9rem;
          font-size: 2.5rem;
          color: #2e3192;
          opacity: 0.07;
        }

        .t-stars {
          display: flex;
          gap: 0.2rem;
          color: #f5b544;
        }

        .t-quote {
          position: relative;
          font-family: var(--font-display, inherit);
          font-style: italic;
          font-size: 0.85rem;
          line-height: 1.35rem;
          color: #1e293b;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }

        .t-author {
          margin-top: auto;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding-top: 0.4rem;
          border-top: 1px solid #ece9e0;
        }

        .t-avatar {
          display: flex;
          height: 2.1rem;
          width: 2.1rem;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          background: #2e3192;
          box-shadow: 0 0 0 3px rgba(46, 49, 146, 0.12);
          color: #fff;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.02em;
        }

        .t-name {
          font-size: 0.8rem;
          font-weight: 600;
          color: #0f172a;
        }

        .t-role {
          font-size: 0.7rem;
          color: #64748b;
        }

        @keyframes t-marquee-scroll-left {
          to {
            left: calc(var(--item-w) * -1);
          }
        }

        @media (min-width: 768px) {
          .t-marquee {
            --item-w: 340px;
            --item-h: 175px;
          }
        }
      `}</style>
    </section>
  );
}