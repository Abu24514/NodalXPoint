"use client";

import { motion } from "framer-motion";
import {
  FiSearch, FiTerminal, FiSettings, FiRefreshCw, FiActivity,
  FiCode, FiLayers, FiTrendingUp, FiServer, FiAlertTriangle,
  FiMaximize, FiCpu, FiSmartphone, FiUsers
} from "react-icons/fi";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

const QA_SERVICES = [
  { title: "Manual Testing", icon: FiSearch, desc: "Exploratory and scenario-based testing to ensure UI/UX matches human expectations.", benefit: "Catches edge cases automated scripts miss." },
  { title: "Automation Testing", icon: FiTerminal, desc: "Building robust, maintainable test scripts for CI/CD pipelines.", benefit: "Accelerates release cycles and reduces human error." },
  { title: "Functional Testing", icon: FiSettings, desc: "Validating that the software operates exactly according to business requirements.", benefit: "Ensures core features work seamlessly." },
  { title: "Regression Testing", icon: FiRefreshCw, desc: "Automated verification that new code commits do not break existing functionality.", benefit: "Maintains stability across frequent updates." },
  { title: "Smoke & Sanity Testing", icon: FiActivity, desc: "Rapid surface-level testing to verify core critical flows before deep testing.", benefit: "Saves time by quickly validating build health." },
  { title: "API Testing", icon: FiCode, desc: "Direct validation of REST, GraphQL, and SOAP endpoints for data accuracy and performance.", benefit: "Ensures backend reliability independent of the UI." },
  { title: "Integration Testing", icon: FiLayers, desc: "Testing how independent modules and third-party services communicate.", benefit: "Prevents systemic failures in microservices." },
  { title: "Performance Testing", icon: FiTrendingUp, desc: "Benchmarking response times, database queries, and system throughput.", benefit: "Ensures snappy user experiences." },
  { title: "Load Testing", icon: FiServer, desc: "Simulating thousands of concurrent users to evaluate system behavior under high traffic.", benefit: "Prevents downtime during peak usage events." },
  { title: "Stress Testing", icon: FiAlertTriangle, desc: "Pushing the system beyond normal operational capacity to find its breaking point.", benefit: "Identifies hard bottlenecks and failover recovery." },
  { title: "Cross Browser Testing", icon: FiMaximize, desc: "Validating pixel-perfect rendering across Chrome, Safari, Firefox, and Edge.", benefit: "Delivers a consistent experience to all users." },
  { title: "Cross Platform Testing", icon: FiCpu, desc: "Ensuring identical functionality across Windows, macOS, Linux, and custom OS.", benefit: "Maximizes market reach and accessibility." },
  { title: "Mobile Application Testing", icon: FiSmartphone, desc: "Testing native and hybrid apps on real iOS and Android devices.", benefit: "Guarantees app store compliance and fluid mobile UX." },
  { title: "User Acceptance Testing (UAT)", icon: FiUsers, desc: "Final validation phase confirming the software meets the exact needs of end-users.", benefit: "Secures stakeholder sign-off before production release." },
];

export default function QAServicesList() {
  return (
    <div className="space-y-16 relative z-10">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
        <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">QA Testing Services</h2>
        <p className="mt-4 text-slate-600 text-lg">Comprehensive testing strategies to guarantee reliability, performance, and exceptional user experiences.</p>
      </motion.div>
      
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {QA_SERVICES.map((service, idx) => (
          <motion.div key={idx} variants={fadeUp} className="group rounded-3xl border border-slate-200/60 bg-white/80 backdrop-blur-sm p-6 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] transition-all duration-500 hover:-translate-y-1 hover:border-blue-300">
            <div className="flex items-center gap-4 mb-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-3 transition-all duration-300">
                <service.icon size={26} />
              </span>
              <h3 className="font-bold text-lg text-slate-900">{service.title}</h3>
            </div>
            <p className="text-sm text-slate-600 mb-5 leading-relaxed">{service.desc}</p>
            <div className="pt-4 border-t border-slate-100/80">
              <p className="text-xs font-medium text-slate-700"><span className="text-blue-600 font-bold">Business Benefit:</span> {service.benefit}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}