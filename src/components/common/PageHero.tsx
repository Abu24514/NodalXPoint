"use client";

import { motion } from "framer-motion";

export type HeroConfig = {
  badge: string;
  title: string;
  titleHighlight?: string;
  subtitle: string;
  accentGlow?: string;
};

type PageHeroProps = {
  slug?: string;
  configs?: Record<string, HeroConfig>;
  defaultConfig?: HeroConfig;
};

const BASE_DEFAULT: HeroConfig = {
  badge: "NodalXpoint Tech",
  title: "Built for the digital platforms we engineer best.",
  subtitle: "Leveraging cutting-edge frameworks, scalable cloud infrastructure, and intelligent automation.",
  accentGlow: "var(--color-node)",
};

export default function PageHero({ slug, configs, defaultConfig }: PageHeroProps) {
  const activeDefault = defaultConfig || BASE_DEFAULT;
  const config = (slug && configs && configs[slug]) ? configs[slug] : activeDefault;

  return (
    <section className="relative w-full overflow-hidden bg-canvas pb-4 pt-16 sm:pt-20">
      <div className="grid-lines absolute inset-0 opacity-60" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-[320px] -translate-x-1/2 rounded-full opacity-[0.10] blur-[100px]"
        style={{ background: config.accentGlow || "var(--color-node)" }}
      />

      <motion.div
        key={slug || config.badge}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mx-auto max-w-3xl px-6 text-center"
      >
        <p className="mb-5 flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-ink sm:text-xs sm:tracking-[0.25em]">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-node animate-soft-pulse" />
          {config.badge}
        </p>

        <h1 className="font-display text-3xl font-semibold leading-[1.15] text-body sm:text-4xl md:text-5xl">
          {config.title}
          {config.titleHighlight && (
            <>
              {" "}
              <span className="text-node">{config.titleHighlight}</span>
            </>
          )}
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-muted-ink sm:text-base sm:leading-7">
          {config.subtitle}
        </p>
      </motion.div>
    </section>
  );
}