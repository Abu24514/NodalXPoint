"use client";

import { motion } from "framer-motion";
import {
  FiHeart, FiBriefcase, FiLock, FiShoppingCart, FiFileText,
  FiTruck, FiSettings, FiCloud, FiShield, FiZap, FiCheckCircle
} from "react-icons/fi";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

const INDUSTRIES = [
  { name: "Healthcare", icon: FiHeart }, { name: "Finance", icon: FiBriefcase },
  { name: "Banking", icon: FiLock }, { name: "E-Commerce", icon: FiShoppingCart },
  { name: "Education", icon: FiFileText }, { name: "Logistics", icon: FiTruck },
  { name: "Manufacturing", icon: FiSettings }, { name: "SaaS", icon: FiCloud },
  { name: "Government", icon: FiShield }, { name: "Startups", icon: FiZap },
];

const WHY_US = [
  "Experienced QA Engineers", "Certified Security Experts", "Automation First Approach",
  "Enterprise Security Standards", "Detailed & Transparent Reporting", "Faster Release Cycles",
  "Cost Effective Solutions", "24/7 Support & Monitoring",
];

const BENEFITS = [
  { title: "Risk Mitigation", desc: "Identify and resolve critical vulnerabilities before they impact users or the business." },
  { title: "Enhanced Brand Trust", desc: "Deliver flawless, secure experiences that build unshakeable confidence with your customers." },
  { title: "Regulatory Compliance", desc: "Ensure your software meets stringent industry standards like HIPAA, GDPR, and PCI-DSS." },
  { title: "Reduced Development Costs", desc: "Catching bugs early in the CI/CD pipeline costs exponentially less than fixing them in production." },
  { title: "Accelerated Time-to-Market", desc: "Robust automation frameworks allow your team to ship features faster with high confidence." },
  { title: "Optimized Performance", desc: "Guarantee your applications can handle peak traffic events without degradation or downtime." },
  { title: "Data Protection", desc: "Fortify sensitive user data against unauthorized access, breaches, and cyber threats." },
  { title: "Seamless User Experience", desc: "Eliminate UI glitches, broken links, and frustrating workflows across all devices." },
  { title: "Objective Quality Assessment", desc: "Gain unbiased, data-driven insights into the actual health and readiness of your software." },
  { title: "Future-Proof Architecture", desc: "Secure code reviews ensure your foundation can safely scale alongside your business." },
];

export default function QAFeatures() {
  return (
    <div className="space-y-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
          <h2 className="font-display text-3xl font-bold text-slate-900">Industries We Serve</h2>
          <div className="grid grid-cols-2 gap-4">
            {INDUSTRIES.map((industry, idx) => (
              <motion.div key={idx} variants={fadeUp} className="group flex items-center gap-4 p-4 rounded-2xl border border-slate-200/60 bg-white hover:border-blue-300 hover:shadow-sm transition-all duration-300">
                <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                  <industry.icon className="text-blue-600" size={18} />
                </div>
                <span className="font-semibold text-sm text-slate-800">{industry.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
          <h2 className="font-display text-3xl font-bold text-slate-900">Why Choose Nodal X Point</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHY_US.map((reason, idx) => (
              <motion.div key={idx} variants={fadeUp} className="flex items-center gap-3 p-4 rounded-2xl bg-linear-to-r from-blue-50/50 to-transparent border border-blue-100/50 hover:bg-blue-50 transition-colors">
                <FiCheckCircle className="text-blue-600 shrink-0" size={20} />
                <span className="font-semibold text-sm text-slate-800">{reason}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="space-y-16">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">Business Value & Key Benefits</h2>
          <p className="mt-4 text-slate-600 text-lg">How our quality assurance and security protocols directly impact your business success.</p>
        </motion.div>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {BENEFITS.map((benefit, idx) => (
            <motion.div key={idx} variants={fadeUp} className="group rounded-3xl border border-slate-200/60 bg-white p-6 shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-300">
              <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center mb-5 text-slate-700 font-bold group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                {idx + 1}
              </div>
              <h4 className="font-bold text-slate-900 mb-3">{benefit.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}