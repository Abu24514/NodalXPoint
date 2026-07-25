"use client";

import {
  FiGlobe, FiLayers, FiTool, FiShield, FiZap, FiServer,
  FiDatabase, FiHardDrive, FiLock, FiCloud, FiImage,
  FiMail, FiCreditCard, FiCode, FiBarChart2, FiActivity,
  FiMessageCircle, FiAlertTriangle
} from "react-icons/fi";

const SERVICES = [
  { icon: FiGlobe, title: "Website Maintenance", desc: "Ongoing updates, content changes, and technical upkeep to keep your site running flawlessly." },
  { icon: FiLayers, title: "Web Application Maintenance", desc: "Continuous support for complex web apps, covering releases, dependencies, and stability." },
  { icon: FiTool, title: "Bug Fixes & Issue Resolution", desc: "Rapid diagnosis and resolution of bugs before they impact your users or revenue." },
  { icon: FiShield, title: "Security Updates & Patch Management", desc: "Timely patching of vulnerabilities and frameworks to keep your platform hardened." },
  { icon: FiZap, title: "Performance Optimization", desc: "Speed audits, caching, and code-level tuning for faster load times and Core Web Vitals." },
  { icon: FiServer, title: "Server & Hosting Management", desc: "Provisioning, scaling, and health checks across your hosting and cloud infrastructure." },
  { icon: FiDatabase, title: "Database Optimization", desc: "Query tuning, indexing, and schema refinement for reliable, high-speed data access." },
  { icon: FiHardDrive, title: "Backup & Disaster Recovery", desc: "Automated backups and tested recovery plans so you're never one incident from data loss." },
  { icon: FiLock, title: "SSL Certificate & Domain Management", desc: "Renewals, DNS records, and domain health monitored so your platform stays trusted and live." },
  { icon: FiCloud, title: "Cloudflare Configuration & Monitoring", desc: "CDN, firewall rules, and DDoS protection tuned and monitored for consistent uptime." },
  { icon: FiImage, title: "Cloudinary Asset Management", desc: "Media pipelines, transformations, and storage kept optimized as your library grows." },
  { icon: FiMail, title: "Email Service Maintenance", desc: "Deliverability, SPF/DKIM, and SMTP health checks for Resend and transactional email." },
  { icon: FiCreditCard, title: "Payment Gateway Maintenance", desc: "Ongoing reliability checks for Razorpay, Stripe, and PayPal payment flows." },
  { icon: FiCode, title: "API Monitoring & Integration Support", desc: "Uptime and error tracking across every third-party API your platform depends on." },
  { icon: FiBarChart2, title: "Analytics & SEO Monitoring", desc: "Tracking accuracy, indexing health, and technical SEO reviewed on a regular cadence." },
  { icon: FiActivity, title: "Website Uptime Monitoring", desc: "24/7 automated checks with instant alerts the moment something goes down." },
  { icon: FiMessageCircle, title: "Technical Consultation", desc: "Direct access to engineers for architecture guidance and technical decision-making." },
  { icon: FiAlertTriangle, title: "Emergency Support", desc: "Priority-response SLA for critical, business-impacting incidents, any time of day." },
];

export default function MaintenanceGrid() {
  return (
    <div className="space-y-6">
      <div className="max-w-2xl">
        <h3 className="font-display text-2xl font-extrabold text-[#0F172A] sm:text-3xl">
          Everything your platform needs to keep running
        </h3>
        <p className="mt-2 text-sm text-slate-500 sm:text-base">
          A single support plan covering infrastructure, security, integrations, and performance.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <div
            key={s.title}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/40 hover:shadow-[0_12px_30px_-14px_rgba(37,99,235,0.35)]"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2563EB]/10 text-[#2563EB] transition-colors duration-300 group-hover:bg-[#2563EB] group-hover:text-white">
              <s.icon size={20} />
            </span>
            <h4 className="mt-4 font-display text-base font-bold text-[#0F172A]">{s.title}</h4>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-500 sm:text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}