"use client";

import { useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import ServiceNode, { IntegrationService } from "./ServiceNode";

interface IntegrationListProps {
  services: IntegrationService[];
}

export default function IntegrationList({ services }: IntegrationListProps) {
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(services[0]?.id || null);
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start center", "end center"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return services;
    return services.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.desc.toLowerCase().includes(q) ||
        s.platforms.some((p) => p.toLowerCase().includes(q))
    );
  }, [query, services]);

  return (
    <div className="space-y-12">
      {/* Search */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="font-display text-xl font-bold text-body">Our Integration Services</h3>
        <div className="relative w-full sm:w-72">
          <FiSearch size={15} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-ink" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search integrations, e.g. Stripe"
            className="w-full rounded-xl border border-line bg-surface py-2.5 pl-10 pr-4 text-sm text-body placeholder:text-muted-ink/70 outline-none transition-colors focus:border-node/50"
          />
        </div>
      </div>

      {/* Node path */}
      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-line bg-surface p-10 text-center">
          <p className="font-mono text-sm text-muted-ink">No node matches “{query}”. Try another platform or service name.</p>
        </div>
      ) : (
        <div ref={trackRef} className="relative">
          {/* static track */}
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-line sm:left-[31px]" />
          {/* animated progress line */}
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-[27px] top-2 bottom-2 w-px origin-top bg-node sm:left-[31px]"
          />

          {filtered.map((service, index) => (
            <ServiceNode
              key={service.id}
              service={service}
              index={index}
              isOpen={openId === service.id}
              onToggle={() => setOpenId(openId === service.id ? null : service.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}