"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FiArrowRight, 
  FiCheck, 
  FiDownload, 
  FiTerminal, 
  FiCpu, 
  FiCheckCircle, 
  FiLayers,
  FiZap 
} from "react-icons/fi";

type DetailProps = {
  data: {
    title: string;
    tagline: string;
    description: string;
    services?: readonly { title: string; description: string }[];
    features?: readonly { title: string; description: string }[];
    processTitle: string;
    processSubtitle: string;
    process: readonly string[];
    ctaTitle: string;
    ctaSubtitle: string;
  };
};

export default function TechnologyDetailView({ data }: DetailProps) {
  return (
    <section className="relative w-full bg-canvas py-14 sm:py-20 text-body">
      {/* Background Subtle Lines */}
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-25" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">

        {/* Breadcrumb Navigation */}
        <nav className="mb-10 flex items-center gap-2 font-mono text-xs text-gray-500">
          <Link href="/" className="transition-colors hover:text-node">
            Home
          </Link>
          <span>/</span>
          <Link href="/technology" className="transition-colors hover:text-node">
            Technology
          </Link>
          <span>/</span>
          <span className="font-bold text-body">{data.title}</span>
        </nav>

        {/* 1. Technical Capabilities Matrix (Services) */}
        {data.services && data.services.length > 0 && (
          <div className="mb-16">
            <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest hover:text-node">
                  // Engineering Capabilities
                </span>
                <h2 className="font-display text-2xl font-bold text-body mt-1">
                  Core Services & Architectural Modules
                </h2>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 font-mono text-xs font-semibold text-emerald-700 border border-emerald-200">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                {data.services.length} Modules Available
              </span>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {data.services.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="group relative flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-node/40 hover:shadow-md"
                >
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-node/10 text-node transition-transform group-hover:scale-110">
                        <FiCpu size={18} />
                      </span>
                      <span className="font-mono text-[10px] font-bold text-gray-400 uppercase">
                        MOD_0{i + 1}
                      </span>
                    </div>

                    <h3 className="font-display text-base font-bold text-body group-hover:text-node transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] font-mono text-gray-400">
                    <span>Status: Ready</span>
                    <FiZap className="text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* 2. Key Architecture Features */}
        {data.features && data.features.length > 0 && (
          <div className="mb-16 rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
            <div className="mb-6">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-node">
                // System Benchmarks
              </span>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-body mt-1">
                Why Engineers & Enterprises Trust Our Stack
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {data.features.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="rounded-2xl bg-gray-50/80 p-5 border border-gray-100"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 mb-3">
                    <FiCheck size={16} />
                  </span>
                  <h3 className="font-display text-base font-bold text-body">
                    {feat.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-gray-600">
                    {feat.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* 3. Execution Pipeline (Process Step Timeline) */}
        <div className="mb-16">
          <div className="mb-6 border-b border-gray-200 pb-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-node">
              // Workflow Pipeline
            </span>
            <h2 className="font-display text-2xl font-bold text-body mt-1">
              {data.processTitle}
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-gray-500">{data.processSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data.process.map((step, idx) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="relative flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-node font-mono text-xs font-bold text-white shadow-sm">
                      0{idx + 1}
                    </span>
                    <span className="font-mono text-[10px] text-gray-400 uppercase">PHASE_{idx + 1}</span>
                  </div>
                  <p className="text-sm font-bold text-body leading-snug">{step}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 font-mono text-[10px] text-emerald-600 flex items-center gap-1">
                  <FiCheckCircle size={12} /> Execution Ready
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}