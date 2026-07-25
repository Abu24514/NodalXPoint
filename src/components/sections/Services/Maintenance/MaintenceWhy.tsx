"use client";

import {
  FiClock, FiUsers, FiShield, FiLock,
  FiRefreshCw, FiMessageSquare, FiTrendingUp, FiAward
} from "react-icons/fi";

const WHY_US = [
  { icon: FiClock, title: "Fast Response Time", desc: "Critical issues acknowledged within minutes, not days." },
  { icon: FiUsers, title: "Experienced Support Engineers", desc: "Senior engineers who know production systems, not junior triage." },
  { icon: FiShield, title: "Preventive Maintenance", desc: "We fix what's about to break, not just what already has." },
  { icon: FiLock, title: "Secure Infrastructure", desc: "Every layer of your stack monitored and hardened continuously." },
  { icon: FiRefreshCw, title: "Regular Updates", desc: "Scheduled patching keeps you current, never end-of-life." },
  { icon: FiMessageSquare, title: "Transparent Communication", desc: "Clear reporting on what changed, why, and what's next." },
  { icon: FiTrendingUp, title: "Scalable Support", desc: "Plans that grow with your traffic, team, and complexity." },
  { icon: FiAward, title: "Long-Term Partnership", desc: "We stay on as your technical team, not a one-time vendor." },
];

export default function MaintenanceWhy() {
  return (
    <div className="space-y-6">
      <h3 className="font-display text-2xl font-extrabold text-[#0F172A] sm:text-3xl">
        Why teams choose Nodal X Point
      </h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {WHY_US.map((w) => (
          <div
            key={w.title}
            className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 transition-colors duration-300 hover:border-[#06B6D4]/40 hover:bg-white"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#06B6D4]/10 text-[#06B6D4]">
              <w.icon size={18} />
            </span>
            <h4 className="mt-3 font-display text-sm font-bold text-[#0F172A]">{w.title}</h4>
            <p className="mt-1 text-xs leading-relaxed text-slate-500">{w.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}