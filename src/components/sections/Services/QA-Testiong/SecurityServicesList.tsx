"use client";

import { motion } from "framer-motion";
import {
  FiCrosshair, FiShield, FiCode, FiLayers, FiTerminal,
  FiServer, FiCloud, FiCheckCircle, FiFileText, FiLock,
  FiAlertTriangle, FiSettings, FiActivity
} from "react-icons/fi";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

const SECURITY_SERVICES = [
  { title: "Vulnerability Assessment", icon: FiCrosshair, desc: "Scanning infrastructure and code for known vulnerabilities and misconfigurations.", value: "Identifies weak points before malicious actors do." },
  { title: "Penetration Testing", icon: FiShield, desc: "Simulated ethical hacking attacks to exploit vulnerabilities and test defenses.", value: "Provides actionable proof of exploitability." },
  { title: "Secure Code Review", icon: FiCode, desc: "Line-by-line manual and automated analysis of source code to find security flaws.", value: "Embeds security at the foundation of the application." },
  { title: "Web Application Security", icon: FiLayers, desc: "Testing against SQL injection, XSS, CSRF, and logic flaws in web platforms.", value: "Protects sensitive customer data and brand reputation." },
  { title: "API Security Testing", icon: FiTerminal, desc: "Securing endpoints against unauthorized access, data exposure, and abuse.", value: "Safeguards the backbone of modern applications." },
  { title: "Network Security Assessment", icon: FiServer, desc: "Evaluating firewalls, routers, and internal networks for security gaps.", value: "Hardens the perimeter against external intrusion." },
  { title: "Cloud Security", icon: FiCloud, desc: "Auditing AWS, Azure, and GCP configurations for IAM policies and storage security.", value: "Prevents catastrophic cloud data leaks." },
  { title: "OWASP Top 10 Validation", icon: FiCheckCircle, desc: "Strict adherence to testing against the ten most critical web application security risks.", value: "Ensures baseline industry-standard protection." },
  { title: "Security Audit", icon: FiFileText, desc: "Comprehensive review of IT security policies, controls, and physical infrastructure.", value: "Aligns security posture with business objectives." },
  { title: "Compliance Assessment", icon: FiLock, desc: "Ensuring adherence to GDPR, HIPAA, PCI-DSS, SOC 2, and ISO 27001 standards.", value: "Avoids severe legal penalties and builds trust." },
  { title: "Risk Assessment", icon: FiAlertTriangle, desc: "Evaluating the potential impact and likelihood of specific cyber threats.", value: "Prioritizes security investments effectively." },
  { title: "DevSecOps", icon: FiSettings, desc: "Integrating automated security checks natively into the CI/CD pipeline.", value: "Catches security bugs as soon as they are written." },
  { title: "Security Monitoring", icon: FiActivity, desc: "Continuous surveillance of logs, traffic, and endpoints for suspicious behavior.", value: "Enables rapid incident response to active threats." },
];

export default function SecurityServicesList() {
  return (
    <div className="space-y-16 relative z-10">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
        <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">Enterprise Security Services</h2>
        <p className="mt-4 text-slate-600 text-lg">Proactive threat modeling, ethical hacking, and compliance auditing to safeguard your digital assets.</p>
      </motion.div>
      
      <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SECURITY_SERVICES.map((service, idx) => (
          <motion.div key={idx} variants={fadeUp} className="group rounded-3xl border border-slate-200/60 bg-white/80 backdrop-blur-sm p-6 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.15)] transition-all duration-500 hover:-translate-y-1 hover:border-indigo-300">
            <div className="flex items-center gap-4 mb-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white group-hover:-rotate-3 transition-all duration-300">
                <service.icon size={26} />
              </span>
              <h3 className="font-bold text-lg text-slate-900">{service.title}</h3>
            </div>
            <p className="text-sm text-slate-600 mb-5 leading-relaxed">{service.desc}</p>
            <div className="pt-4 border-t border-slate-100/80">
              <p className="text-xs font-medium text-slate-700"><span className="text-indigo-600 font-bold">Value:</span> {service.value}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}