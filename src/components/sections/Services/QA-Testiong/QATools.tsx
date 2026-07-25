"use client";

import { motion } from "framer-motion";
import { FiActivity, FiShield, FiCheckCircle, FiMonitor, FiCrosshair, FiTerminal } from "react-icons/fi";
import { SiSelenium, SiCypress, SiAppium, SiPostman, SiApachejmeter, SiOwasp, SiWireshark } from "react-icons/si";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const TOOLS_QA = [
  { name: "Selenium", icon: SiSelenium },
  { name: "Cypress", icon: SiCypress },
  { name: "Appium", icon: SiAppium },
  { name: "Postman", icon: SiPostman },
  { name: "JMeter", icon: SiApachejmeter },
  { name: "BrowserStack", icon: FiMonitor },
  { name: "TestRail", icon: FiCheckCircle }, 
];

const TOOLS_SECURITY = [
  { name: "Burp Suite", icon: FiShield }, 
  { name: "OWASP ZAP", icon: SiOwasp },
  { name: "Nessus", icon: FiCrosshair }, 
  { name: "Nmap", icon: FiActivity }, 
  { name: "Wireshark", icon: SiWireshark },
  { name: "Metasploit", icon: FiTerminal }, 
];

export default function QATools() {
  return (
    <div className="space-y-16">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
        <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">Technologies & Tools</h2>
        <p className="mt-4 text-slate-600 text-lg">Leveraging industry-standard enterprise tooling for precision engineering and security.</p>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="rounded-4xl border border-slate-200/60 bg-white p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <span className="p-2.5 bg-blue-100 text-blue-600 rounded-xl"><FiActivity size={20}/></span> 
            QA & Automation Stack
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            {TOOLS_QA.map((tool, idx) => (
              <div key={idx} className="group flex flex-col items-center justify-center p-4 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50 hover:shadow-sm transition-all duration-300">
                <tool.icon size={30} className="text-slate-600 group-hover:text-blue-600 mb-3 transition-colors" />
                <span className="text-[11px] font-semibold text-slate-700 text-center">{tool.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="rounded-4xl border border-slate-200/60 bg-white p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <span className="p-2.5 bg-indigo-100 text-indigo-600 rounded-xl"><FiShield size={20}/></span> 
            Security & Audit Stack
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            {TOOLS_SECURITY.map((tool, idx) => (
              <div key={idx} className="group flex flex-col items-center justify-center p-4 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50 hover:shadow-sm transition-all duration-300">
                <tool.icon size={30} className="text-slate-600 group-hover:text-indigo-600 mb-3 transition-colors" />
                <span className="text-[11px] font-semibold text-slate-700 text-center">{tool.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}