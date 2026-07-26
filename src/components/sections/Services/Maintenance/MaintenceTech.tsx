"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";
import SectionHeader from "@/components/common/SectionBadge";
import {
  SiLaravel,
  SiFirebase,
  SiCloudinary,
  SiCloudflare,
  SiResend,
  SiRazorpay,
  SiStripe,
  SiPaypal,
  SiVercel,
  SiDigitalocean,
  SiGoogleanalytics,
  SiGooglesearchconsole,
} from "react-icons/si";

const ROW_1 = [
  { name: "Cloudinary", icon: SiCloudinary },
  { name: "Laravel", icon: SiLaravel },
  { name: "Firebase", icon: SiFirebase },
  { name: "Cloudflare", icon: SiCloudflare },
  { name: "Resend", icon: SiResend },
  { name: "Vercel", icon: SiVercel },
];

const ROW_2 = [
  { name: "Razorpay", icon: SiRazorpay },
  { name: "Stripe", icon: SiStripe },
  { name: "PayPal", icon: SiPaypal },
  { name: "DigitalOcean", icon: SiDigitalocean },
  { name: "Google Analytics", icon: SiGoogleanalytics },
  { name: "Search Console", icon: SiGooglesearchconsole },
];

const DURATION = 24; // seconds for one full lap

function MarqueeRow({
  items,
  reverse,
  rowClass,
}: {
  items: typeof ROW_1;
  reverse?: boolean;
  rowClass: string;
}) {
  const count = items.length;

  return (
    <div className={`marquee ${rowClass} ${reverse ? "marquee--reverse" : ""}`}>
      {items.map((tech, i) => {
        const Icon = tech.icon;
        // Evenly stagger each item's start so they're spaced across the loop
        const delay = (DURATION / count) * (count - (i + 1)) * -1;
        return (
          <div
            key={tech.name}
            className="marquee-item"
            style={{ animationDelay: `${delay}s`, animationDuration: `${DURATION}s` }}
            title={tech.name}
          >
            <Icon size={18} />
            <span>{tech.name}</span>
          </div>
        );
      })}
    </div>
  );
}

export default function TechnologiesSupported() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 space-y-14">
        <SectionHeader
          badge="Beyond the Core Stack"
          title="Whatever you already run on, "
          titleHighlight="we support it."
          subtitle="From hosting and payments to analytics and delivery — we plug into the tools your product already depends on."
        />
      </div>

      <div className="mt-8 space-y-5 sm:mt-14">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <MarqueeRow items={ROW_1} rowClass="marquee-row1" />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <MarqueeRow items={ROW_2} rowClass="marquee-row2" reverse />
        </motion.div>
      </div>

      <style>{`
        .marquee {
          --item-w: 150px;
          --item-h: 52px;
          width: 100%;
          max-width: 1536px;
          margin-inline: auto;
          position: relative;
          height: var(--item-h);
          overflow: hidden;
          mask-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 1) 10%,
            rgba(0, 0, 0, 1) 90%,
            rgba(0, 0, 0, 0)
          );
        }

        .marquee-item {
          width: var(--item-w);
          height: var(--item-h);
          border-radius: 9999px;
          position: absolute;
          top: 0;
          left: max(calc(var(--item-w) * 6), 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0 1.25rem;
          white-space: nowrap;
          border: 1px solid #e2e8f0;
          background: #fff;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
          color: #64748b;
          font-size: 0.875rem;
          font-weight: 500;
          animation-name: marquee-scroll-left;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .marquee--reverse .marquee-item {
          animation-name: marquee-scroll-right;
        }

        .marquee:hover .marquee-item {
        border: 1px solid #2e3192;
          animation-play-state: paused;
        }

        @keyframes marquee-scroll-left {
          to {
            left: calc(var(--item-w) * -1);
          }
        }

        @keyframes marquee-scroll-right {
          from {
            left: calc(var(--item-w) * -1);
          }
          to {
            left: max(calc(var(--item-w) * 6), 100%);
          }
        }

        @media (min-width: 768px) {
          .marquee {
            --item-w: 170px;
            --item-h: 56px;
          }
        }
      `}</style>
    </section>
  );
}