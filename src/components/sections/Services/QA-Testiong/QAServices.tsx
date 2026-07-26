"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import SectionHeader from "@/components/common/SectionBadge";
import {
  FiCheckSquare,
  FiZap,
  FiShield,
  FiServer,
  FiMonitor,
  FiRefreshCw,
} from "react-icons/fi";

const SERVICES = [
  {
    icon: FiCheckSquare,
    title: "Functional Testing",
    desc: "Verify every feature, workflow, and user interaction to ensure your application performs exactly as expected across all supported platforms.",
  },
  {
    icon: FiZap,
    title: "Performance Testing",
    desc: "Analyze application speed, scalability, and responsiveness to deliver fast, stable, and high-performing digital experiences.",
  },
  {
    icon: FiShield,
    title: "Security Assessment",
    desc: "Identify vulnerabilities, validate security controls, and strengthen your applications against potential threats before deployment.",
  },
  {
    icon: FiServer,
    title: "API Testing",
    desc: "Ensure APIs are reliable, secure, and fully integrated with accurate validation, authentication, and response testing.",
  },
  {
    icon: FiMonitor,
    title: "Cross Browser Testing",
    desc: "Deliver a consistent user experience by testing your application across modern browsers, devices, and operating systems.",
  },
  {
    icon: FiRefreshCw,
    title: "Regression Testing",
    desc: "Ensure new updates, enhancements, and bug fixes never impact existing functionality or application stability.",
  },
];

export default function QAServices() {
  return (
    <section className=" py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 space-y-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                className="group rounded-3xl border border-line bg-surface p-8 transition-all duration-300 hover:-translate-y-2 hover:border-node/30 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-node/10 text-node transition-all duration-300 group-hover:bg-node group-hover:text-white">
                  <Icon size={24} />
                </div>

                <h3 className="mt-6 font-display text-xl font-semibold text-body">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-muted-ink">
                  {service.desc}
                </p>

                <div className="mt-6 h-1 w-14 rounded-full bg-node transition-all duration-300 group-hover:w-full" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}