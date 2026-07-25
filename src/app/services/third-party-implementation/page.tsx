"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import PageHero from "@/components/common/PageHero";
import IntegrationList from "@/components/sections/Services/thirdpartyImp/IntegrationList"
import {
  FiCloud, FiShield, FiCreditCard, FiMail, FiMessageSquare,
  FiLock, FiMapPin, FiCpu, FiBarChart2, FiMessageCircle,
  FiTruck, FiCalendar, FiVideo, FiBell, FiFolder,
} from "react-icons/fi";

const DATA = {
  title: "Third Party Implementation",
  tagline: "Seamless SaaS, Payment, and API Integrations",
  badge: "API Integration",
};

const SERVICES = [
  { id: "cloud-storage", icon: FiCloud, title: "Cloud Storage", desc: "Store and manage images, videos, documents, and backups securely.", platforms: ["Cloudinary", "AWS S3", "Google Cloud Storage"] },
  { id: "cdn-security", icon: FiShield, title: "CDN & Security", desc: "Improve website speed, SSL security, DDoS protection, and global performance.", platforms: ["Cloudflare", "AWS CloudFront"] },
  { id: "payment-gateway", icon: FiCreditCard, title: "Payment Gateway", desc: "Accept secure online payments through multiple payment providers.", platforms: ["Razorpay", "Stripe", "PayPal", "Cashfree", "PhonePe Payment Gateway"] },
  { id: "email", icon: FiMail, title: "Email Services", desc: "Send OTPs, verification emails, newsletters, invoices, and transactional emails.", platforms: ["Resend", "SendGrid", "Brevo (Sendinblue)", "Amazon SES", "Mailgun"] },
  { id: "sms-otp", icon: FiMessageSquare, title: "SMS & OTP Services", desc: "Deliver OTPs, notifications, and alerts instantly.", platforms: ["MSG91", "Twilio", "Textlocal", "Fast2SMS"] },
  { id: "auth", icon: FiLock, title: "Authentication & Login", desc: "Enable secure user authentication with modern login options.", platforms: ["Google Login", "Facebook Login", "Apple Sign-In", "GitHub Login", "Microsoft Login"] },
  { id: "maps", icon: FiMapPin, title: "Maps & Location", desc: "Integrate maps, live location, and geolocation features.", platforms: ["Google Maps", "Mapbox"] },
  { id: "ai", icon: FiCpu, title: "AI & Automation", desc: "Enhance applications with AI-powered features.", platforms: ["OpenAI", "Google Gemini", "OCR APIs", "Image Recognition APIs"] },
  { id: "analytics", icon: FiBarChart2, title: "Analytics & Tracking", desc: "Track visitors, conversions, and user behavior.", platforms: ["Google Analytics", "Google Tag Manager", "Meta Pixel", "Microsoft Clarity"] },
  { id: "live-chat", icon: FiMessageCircle, title: "Live Chat & Support", desc: "Provide real-time customer support directly from your website.", platforms: ["Tawk.to", "Crisp", "Intercom", "Zendesk Chat"] },
  { id: "shipping", icon: FiTruck, title: "Shipping & Logistics", desc: "Integrate shipping providers for eCommerce businesses.", platforms: ["Shiprocket", "Delhivery", "Blue Dart APIs"] },
  { id: "booking", icon: FiCalendar, title: "Booking & Scheduling", desc: "Allow customers to book appointments online.", platforms: ["Calendly", "Google Calendar Integration"] },
  { id: "video", icon: FiVideo, title: "Video & Meetings", desc: "Integrate video conferencing and online meetings.", platforms: ["Zoom", "Google Meet", "Jitsi Meet"] },
  { id: "push", icon: FiBell, title: "Push Notifications", desc: "Send real-time browser and mobile notifications.", platforms: ["Firebase Cloud Messaging", "OneSignal"] },
  { id: "files", icon: FiFolder, title: "File Management", desc: "Upload and manage documents securely.", platforms: ["Cloudinary", "Google Drive API", "Dropbox API"] },
];

export default function ThirdPartyPage() {
  return (
    <main className="bg-canvas min-h-screen text-body">
      <Navbar />

      <PageHero
        defaultConfig={{
          badge: DATA.badge,
          title: "Third Party",
          titleHighlight: "Implementation",
          subtitle: DATA.tagline,
          accentGlow: "var(--color-node)",
        }}
      />

      <section className="py-14 px-4 sm:px-6 max-w-4xl mx-auto space-y-12">
        <nav className="flex items-center gap-2 font-mono text-xs text-muted-ink">
          <Link href="/" className="hover:text-node">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-node">Services</Link>
          <span>/</span>
          <span className="font-bold text-body">{DATA.title}</span>
        </nav>

        <IntegrationList services={SERVICES} />
      </section>

      <Footer />
    </main>
  );
}