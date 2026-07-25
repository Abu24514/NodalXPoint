"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiArrowRight, 
  FiCheckCircle, 
  FiDownload, 
  FiHeart, 
  FiBookOpen, 
  FiShoppingBag, 
  FiShield,
  FiZap,
  FiActivity
} from "react-icons/fi";
import { INDUSTRY_DETAILS, IndustryKey } from "@/lib/industriesData";

type DetailProps = {
  currentSlug?: string;
};

export default function IndustryDetailView({ currentSlug = "healthcare" }: DetailProps) {
  const initialKey = (Object.keys(INDUSTRY_DETAILS).includes(currentSlug) 
    ? currentSlug 
    : "healthcare") as IndustryKey;

  const [activeKey, setActiveKey] = useState<IndustryKey>(initialKey);
  const data = INDUSTRY_DETAILS[activeKey];

  const industryIcons = {
    healthcare: FiHeart,
    education: FiBookOpen,
    ecommerce: FiShoppingBag,
    finance: FiShield,
  };

  return (
    <section className="relative w-full bg-[#faf9f6] py-16 text-[#14171f] sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* --- 1. Industry Selector Tabs --- */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
            Select an Industry to Explore
          </p>

          <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white p-1.5 shadow-sm">
            {(Object.keys(INDUSTRY_DETAILS) as IndustryKey[]).map((key) => {
              const item = INDUSTRY_DETAILS[key];
              const Icon = industryIcons[key];
              const isActive = activeKey === key;

              return (
                <button
                  key={key}
                  onClick={() => setActiveKey(key)}
                  className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-[#2e3192] text-white shadow-md"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? "text-white" : "text-gray-400"}`} />
                  <span>{item.title.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* --- 2. Main Detail Section --- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeKey}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="space-y-8"
          >
            {/* Top Grid: Concept + Live Demo Metric */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
              
              {/* Left Column: Concept Explanation */}
              <div className="flex flex-col justify-between rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-7">
                <div className="space-y-5">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#2e3192]/10 px-3.5 py-1 text-xs font-semibold text-[#2e3192]">
                    <FiZap size={13} />
                    <span>{data.badge}</span>
                  </div>

                  <div>
                    <h2 className="font-display text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                      {data.title}
                    </h2>
                    <p className="mt-1.5 text-sm text-gray-500 sm:text-base">
                      {data.tagline}
                    </p>
                  </div>

                  {/* Non-Technical Business Explanation */}
                  <div className="rounded-2xl bg-gray-50/80 p-5 space-y-3 border border-gray-100">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#2e3192]">
                      💡 {data.easyExplanation.heading}
                    </p>

                    <div className="space-y-3">
                      {data.easyExplanation.points.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-700">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2e3192]/10 text-[11px] font-bold text-[#2e3192] mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="leading-relaxed">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                  <span>Architecture: Scalable & Enterprise-Grade</span>
                  <span>nodalXpoint</span>
                </div>
              </div>

              {/* Right Column: Clean Metric Widget */}
              <div className="flex flex-col justify-between rounded-3xl border border-gray-200 bg-white p-6 shadow-sm lg:col-span-5">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-bold text-emerald-600 uppercase tracking-wide">Live Infrastructure</span>
                    </div>
                    <span className="text-[11px] font-mono text-gray-400 uppercase">
                      {data.visualWidget.type}
                    </span>
                  </div>

                  <div className="mt-6 space-y-1">
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                      {data.visualWidget.statLabel}
                    </p>
                    <p className="font-display text-4xl font-extrabold text-gray-900">
                      {data.visualWidget.statValue}
                    </p>
                  </div>

                  {/* Status Indicator Pill */}
                  <div className="mt-6 rounded-xl bg-emerald-50 p-3 text-xs font-semibold text-emerald-700 flex items-center gap-2 border border-emerald-100">
                    <FiActivity className="text-emerald-500" />
                    <span>{data.visualWidget.statusText}</span>
                  </div>
                </div>

                {/* Sub Metrics */}
                <div className="mt-8 grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
                  {data.visualWidget.metrics.map((m, i) => (
                    <div key={i} className="rounded-xl bg-gray-50 p-3 border border-gray-100">
                      <p className="text-[10px] font-medium text-gray-400 uppercase">{m.label}</p>
                      <p className="font-bold text-sm text-gray-900 mt-0.5">{m.val}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Feature Capabilities Grid */}
            <div className="space-y-4 pt-2">
              <h3 className="font-display text-lg font-bold text-gray-900">
                Core Capabilities & Features
              </h3>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {data.solutions.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-[#2e3192]/30"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#2e3192]/10 text-[#2e3192]">
                      <FiCheckCircle size={16} />
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-gray-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call To Action Box */}
            <div className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm">
              <h3 className="font-display text-xl font-bold text-gray-900 sm:text-2xl">
                {data.ctaTitle}
              </h3>
              <p className="mx-auto mt-2 max-w-lg text-xs sm:text-sm text-gray-500">
                {data.ctaSubtitle}
              </p>

              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2e3192] px-6 py-3 text-xs font-semibold text-white transition-all hover:bg-[#2e3192]/90"
                >
                  Get Started
                  <FiArrowRight size={14} />
                </Link>

                <a
                  href="/nodal-Brochure.pdf"
                  download="nodalXpoint-Brochure.pdf"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-5 py-3 text-xs font-semibold text-gray-700 hover:bg-gray-100"
                >
                  <FiDownload size={14} />
                  Download Brochure
                </a>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}