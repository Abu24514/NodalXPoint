"use client";

import {
  SiReact, SiNextdotjs, SiNodedotjs, SiLaravel, SiMongodb,
  SiMysql, SiPostgresql, SiFirebase, SiCloudinary, SiCloudflare,
  SiResend, SiRazorpay, SiStripe, SiPaypal, SiVercel,
  SiDigitalocean, SiGithub, SiGoogleanalytics, SiGooglesearchconsole
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const TECH = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Laravel", icon: SiLaravel },
  { name: "MongoDB", icon: SiMongodb },
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Firebase", icon: SiFirebase },
  { name: "Cloudinary", icon: SiCloudinary },
  { name: "Cloudflare", icon: SiCloudflare },
  { name: "Resend", icon: SiResend },
  { name: "Razorpay", icon: SiRazorpay },
  { name: "Stripe", icon: SiStripe },
  { name: "PayPal", icon: SiPaypal },
  { name: "AWS", icon: FaAws },
  { name: "Vercel", icon: SiVercel },
  { name: "DigitalOcean", icon: SiDigitalocean },
  { name: "GitHub", icon: SiGithub },
  { name: "Google Analytics", icon: SiGoogleanalytics },
  { name: "Search Console", icon: SiGooglesearchconsole },
];

export default function MaintenanceTech() {
  return (
    <div className="space-y-6">
      <h3 className="font-display text-2xl font-extrabold text-[#0F172A] sm:text-3xl">
        Technologies we support
      </h3>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-5">
        {TECH.map((t) => (
          <div
            key={t.name}
            title={t.name}
            className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white p-5 text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2563EB]/40 hover:text-[#2563EB]"
          >
            <t.icon size={24} />
            <span className="text-center text-[11px] font-medium text-[#0F172A]">{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}