"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import PageHero from "@/components/common/PageHero";
import { FiCheckCircle, FiZap } from "react-icons/fi";

type QASubService = {
  title: string;
  tagline: string;
  description: string;
  badge: string;
  capabilities: string[];
  process: { step: string; title: string; desc: string }[];
};

const QA_SUB_SERVICES: Record<string, QASubService> = {
  "manual-testing": {
    title: "Manual Testing",
    tagline: "Hands-On Testing for Functional Accuracy",
    description:
      "Human-driven exploratory and functional testing that catches usability issues, edge cases, and visual defects automation typically misses.",
    badge: "Functional QA",
    capabilities: [
      "Functional & UI Testing Across Devices",
      "Exploratory & Ad-Hoc Test Sessions",
      "Usability & Accessibility Checks",
      "Cross-Browser & Cross-Platform Validation",
    ],
    process: [
      { step: "01", title: "Requirement Walkthrough", desc: "Understanding user flows and acceptance criteria." },
      { step: "02", title: "Test Case Design", desc: "Writing detailed manual test cases for every scenario." },
      { step: "03", title: "Execution & Exploration", desc: "Running scripted and exploratory testing sessions." },
      { step: "04", title: "Bug Reporting & Retest", desc: "Logging defects with repro steps and verifying fixes." },
    ],
  },
  "automation-testing": {
    title: "Automation Testing",
    tagline: "Automated Test Suites for Faster Releases",
    description:
      "Reusable, CI/CD-integrated automation suites that run on every build, cutting regression time and catching breakages before they ship.",
    badge: "Test Automation",
    capabilities: [
      "Automated Regression Suites (Selenium/Playwright)",
      "CI/CD Pipeline Integration & Triggers",
      "Cross-Browser Automated Execution",
      "Data-Driven & Reusable Test Scripts",
    ],
    process: [
      { step: "01", title: "Framework Setup", desc: "Choosing the right automation stack for your app." },
      { step: "02", title: "Script Development", desc: "Building reusable, maintainable test scripts." },
      { step: "03", title: "CI/CD Wiring", desc: "Hooking suites into your pipeline for auto-runs." },
      { step: "04", title: "Maintenance & Scaling", desc: "Expanding coverage as new features ship." },
    ],
  },
  "api-testing": {
    title: "API Testing",
    tagline: "Reliable, Secure API Validation",
    description:
      "Contract, functional, and security testing across REST and GraphQL endpoints to make sure your APIs behave correctly under real-world load.",
    badge: "API Quality",
    capabilities: [
      "REST & GraphQL Contract Testing",
      "Request/Response Schema Validation",
      "Auth, Token & Permission Testing",
      "Load & Rate-Limit Verification",
    ],
    process: [
      { step: "01", title: "Endpoint Mapping", desc: "Cataloging endpoints, payloads, and auth requirements." },
      { step: "02", title: "Contract Test Design", desc: "Writing schema and response validation tests." },
      { step: "03", title: "Automated Execution", desc: "Running suites against staging on every deploy." },
      { step: "04", title: "Reporting & Sign-Off", desc: "Coverage reports and readiness confirmation." },
    ],
  },
};

export default function QASubServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const data = QA_SUB_SERVICES[slug];

  if (!data) {
    notFound();
  }

  const titleWords = data.title.split(" ");
  const titleHighlight = titleWords.pop();
  const titleMain = titleWords.join(" ");

  return (
    <main className="bg-canvas min-h-screen text-body">
      <Navbar />
      <PageHero
        defaultConfig={{
          badge: data.badge,
          title: titleMain,
          titleHighlight: titleHighlight,
          subtitle: data.tagline,
          accentGlow: "var(--color-node)",
        }}
      />

      <section className="py-14 px-4 sm:px-6 max-w-6xl mx-auto space-y-12">
        <nav className="flex items-center gap-2 font-mono text-xs text-gray-500">
          <Link href="/" className="hover:text-[#2e3192]">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-[#2e3192]">Services</Link>
          <span>/</span>
          <Link href="/services/qa-testing" className="hover:text-[#2e3192]">QA Testing</Link>
          <span>/</span>
          <span className="font-bold text-gray-900">{data.title}</span>
        </nav>

        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <span className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3.5 py-1 text-xs font-semibold text-purple-600 mb-4">
            <FiZap size={13} />
            <span>{data.badge}</span>
          </span>
          <h2 className="font-display text-3xl font-extrabold text-gray-900 sm:text-4xl">{data.title}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-600 sm:text-base">{data.description}</p>
        </div>

        <div className="space-y-4">
          <h3 className="font-display text-xl font-bold text-gray-900">Core Technical Capabilities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.capabilities.map((item) => (
              <div key={item} className="flex items-center gap-3.5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600">
                  <FiCheckCircle size={18} />
                </span>
                <span className="text-xs sm:text-sm font-semibold text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-display text-xl font-bold text-gray-900">{data.title} Workflow</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data.process.map((p) => (
              <div key={p.step} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <span className="font-mono text-xs font-bold text-purple-600 bg-purple-500/10 px-2.5 py-1 rounded-md">
                  PHASE {p.step}
                </span>
                <h4 className="mt-3 font-display text-base font-bold text-gray-900">{p.title}</h4>
                <p className="mt-1 text-xs text-gray-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}