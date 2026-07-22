import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import { FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";

const DETAILS = [
  { icon: FiMail, label: "hello@nodalxpoint.com" },
  { icon: FiPhone, label: "+91 98765 43210" },
  { icon: FiMapPin, label: "Jaipur, Rajasthan, India" },
  { icon: FiClock, label: "Replies within 1 business day" },
];

export default function ContactInfo() {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-line bg-node p-7 sm:p-8">
      <div>
        <h3 className="font-display text-lg font-semibold text-white">Reach us directly</h3>
        <ul className="mt-6 space-y-4">
          {DETAILS.map((d) => {
            const Icon = d.icon;
            return (
              <li key={d.label} className="flex items-center gap-3 text-sm text-white/85">
                <Icon size={16} className="shrink-0 text-white/70" />
                {d.label}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-10 flex items-center gap-3">
        {[FaLinkedinIn, FaInstagram, FaXTwitter].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white/80 transition-colors duration-300 hover:border-white hover:text-white"
          >
            <Icon size={14} />
          </a>
        ))}
      </div>
    </div>
  );
}