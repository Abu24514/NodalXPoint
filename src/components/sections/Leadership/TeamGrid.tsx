"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const TEAM = [
  {
    name: "Mohammad Asif",
    role: "Founder",
    bio: "Founded nodalXpoint with a vision to build innovative digital solutions, leading the company's strategy, growth, and client relationships.",
    photo: "https://res.cloudinary.com/ax3pwond/image/upload/v1785089544/Founder_kkn91m.jpg",
  },
  {
    name: "Yusuf Lesani",
    role: "Co-founder",
    bio: "Works closely with the founder to drive operations, manage projects, and ensure seamless collaboration across every team.",
    photo: "https://res.cloudinary.com/ax3pwond/image/upload/v1785089550/Co-founder_bhhewr.png",
  },
  {
    name: "Zohaib Tahir",
    role: "CTO",
    bio: "Leads the technology vision, architects scalable solutions, and ensures the delivery of secure, high-performance products.",
    photo: "https://res.cloudinary.com/ax3pwond/image/upload/v1785089731/Screenshot_2026-01-20_183845_akdzav.jpg",
  },
  {
    name: "Arish Azmi",
    role: "Developer & Designer",
    bio: "Combines modern development with intuitive UI/UX design to create fast, engaging, and user-focused digital experiences.",
    photo: "https://res.cloudinary.com/ax3pwond/image/upload/v1785089768/1000062513-removebg-previe_en3lpk.jpg",
  },
  {
    name: "Abhay",
    role: "Developer",
    bio: "Develops reliable, scalable, and efficient web applications while maintaining clean code and delivering high-quality solutions.",
    photo: "https://res.cloudinary.com/ax3pwond/image/upload/v1785090001/595399361_3162525987241359_1996109459266545666_n_1_w738ab.jpg",
  },
  {
    name: "Md Warish",
    role: "Developer",
    bio: "Focuses on building responsive features, improving application performance, and delivering smooth user experiences across platforms.",
    photo: "https://res.cloudinary.com/ax3pwond/image/upload/v1785095932/WhatsApp_Image_2026-07-26_at_11.57.57_PM_tfp8y3.jpg",
  },
];

// Polygon clip path matching the 4-corner cut frame
const CARD_CLIP_PATH =
  "polygon(32px 0%, calc(100% - 32px) 0%, 100% 32px, 100% calc(100% - 32px), calc(100% - 32px) 100%, 32px 100%, 0% calc(100% - 32px), 0% 32px)";

export default function TeamGrid() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="relative w-full bg-[#050507] py-16 sm:py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((person) => {
            const isHovered = hovered === person.name;

            return (
              <motion.div
                key={person.name}
                className="group relative flex flex-col items-center cursor-pointer"
                onMouseEnter={() => setHovered(person.name)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* --- Outer Card Container --- */}
                <div className="relative w-full aspect-3/4 max-w-[320px] p-[2.5px] transition-all duration-300">
                  
                  {/* 1. Neon Purple Outer Frame Border */}
                  <div
                    className={`absolute inset-0 transition-colors duration-300 ${
                      isHovered ? "bg-[#a855f7] shadow-[0_0_25px_rgba(168,85,247,0.4)]" : "bg-[#8b5cf6]"
                    }`}
                    style={{ clipPath: CARD_CLIP_PATH }}
                  />

                  {/* 2. Side Accent Bars (Right-Top & Left-Bottom) */}
                  {/* Right Top Cyber Accent Bar */}
                  <span
                    className={`absolute -right-1.75 top-12 h-10 w-[3.5px] rounded-xs transition-colors duration-300 ${
                      isHovered ? "bg-[#c084fc]" : "bg-[#a855f7]"
                    }`}
                  />
                  {/* Left Bottom Cyber Accent Bar */}
                  <span
                    className={`absolute -left-1.75 bottom-16 h-10 w-[3.5px] rounded-xs transition-colors duration-300 ${
                      isHovered ? "bg-[#c084fc]" : "bg-[#a855f7]"
                    }`}
                  />

                  {/* 3. Inner Card Content Wrapper (Strict Clipping to Prevent Overflow) */}
                  <div
                    className="relative h-full w-full overflow-hidden bg-[#0d0d10]"
                    style={{ clipPath: CARD_CLIP_PATH }}
                  >
                    {/* Dark Lightning Bolt Pattern Background */}
                    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] background-size-[20px_20px]">
                      <svg className="w-full h-full text-zinc-700 opacity-25" fill="currentColor">
                        <pattern id="lightning-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                          <path d="M 25 10 L 15 30 L 22 30 L 18 50 L 35 25 L 26 25 Z" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#lightning-grid)" />
                      </svg>
                    </div>

                    {/* Person Photo */}
                    <img
                      src={person.photo}
                      alt={person.name}
                      className={`relative z-10 h-full w-full object-cover transition-all duration-500 ${
                        isHovered
                          ? "grayscale-0 scale-105 brightness-105"
                          : "grayscale contrast-125 opacity-90"
                      }`}
                    />

                    {/* Gradient Fade + Bold Name Overlay */}
                    <div className="absolute inset-x-0 bottom-0 z-20 bg-linear-to-t from-black/95 via-black/50 to-transparent pb-6 pt-16 text-center">
                      <h3 className="font-display text-lg font-bold tracking-wide text-white drop-shadow-md">
                        {person.name}
                      </h3>
                      <p
                        className={`text-xs font-semibold text-purple-400 transition-all duration-300 ${
                          isHovered
                            ? "max-h-6 opacity-100 mt-1"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        {person.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bio Below Card */}
                <p className="mt-4 max-w-75 text-center text-xs leading-relaxed text-zinc-400">
                  {person.bio}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}