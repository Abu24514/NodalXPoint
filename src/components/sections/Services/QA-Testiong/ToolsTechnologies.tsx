"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import SectionHeader from "@/components/common/SectionBadge";
import { IconType } from "react-icons";

import {
  FiShield,
  FiActivity,
  FiCode,
  FiLayers,
} from "react-icons/fi";

import {
  SiCypress,
  SiSelenium,
  SiPostman,
  SiJest,
  SiGithub,
  SiGithubactions,
  SiDocker,
  SiVercel,
} from "react-icons/si";

type Tool = {
  name: string;
  icon?: IconType;
};

type Category = {
  title: string;
  icon: IconType;
  tools: Tool[];
};

const CATEGORIES: Category[] = [
  {
    title: "Automation Testing",
    icon: FiActivity,
    tools: [
      { name: "Playwright", icon: FiCode },
      { name: "Cypress", icon: SiCypress },
      { name: "Selenium", icon: SiSelenium },
      { name: "Jest", icon: SiJest },
    ],
  },
  {
    title: "API Testing",
    icon: FiCode,
    tools: [{ name: "Postman", icon: SiPostman }],
  },
  {
    title: "DevOps & CI/CD",
    icon: FiLayers,
    tools: [
      { name: "GitHub", icon: SiGithub },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Docker", icon: SiDocker },
      { name: "Vercel", icon: SiVercel },
    ],
  },
  {
    title: "Security & Quality",
    icon: FiShield,
    tools: [
      { name: "OWASP ZAP" },
      { name: "Burp Suite" },
      { name: "Lighthouse" },
      { name: "Performance Audit" },
    ],
  },
];

export default function ToolsTechnologies() {
  return (
    <section className=" py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 space-y-16">
        <SectionHeader
          badge="Tools & Technologies"
          title="Modern QA"
          titleHighlight="technology stack."
          subtitle="We leverage industry-leading testing frameworks, automation platforms, and development tools to ensure every application meets the highest standards of quality, security, and performance."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {CATEGORIES.map((category, idx) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-3xl border border-line bg-surface p-7 shadow-sm transition-colors duration-300 hover:border-node/30 hover:shadow-xl sm:p-8"
              >
                {/* Accent line on hover */}
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-node transition-transform duration-300 group-hover:scale-x-100" />

                {/* Ambient corner glow */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-node/5 blur-3xl transition-all duration-500 group-hover:bg-node/10" />

                <div className="relative flex items-center gap-4">
                  <span className="font-mono text-xs font-semibold text-muted-ink/40">
                    0{idx + 1}
                  </span>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-node/10 text-node transition-all duration-300 group-hover:bg-node group-hover:text-white">
                    <CategoryIcon size={20} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-body sm:text-xl">
                    {category.title}
                  </h3>
                </div>

                <div className="relative mt-6 flex flex-wrap gap-2.5">
                  {category.tools.map((tool) => {
                    const ToolIcon = tool.icon;
                    return (
                      <motion.div
                        key={tool.name}
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-2 rounded-full border border-line bg-canvas px-4 py-2 text-sm font-medium text-body transition-colors duration-300 hover:border-node/30 hover:bg-node/5 hover:text-node"
                      >
                        {ToolIcon ? (
                          <ToolIcon className="text-node" />
                        ) : (
                          <span className="h-1.5 w-1.5 rounded-full bg-node" />
                        )}
                        {tool.name}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}