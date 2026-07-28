"use client";
import PageHero from "@/components/common/PageHero";
export default function CareersHero() {
  return (
    <PageHero
      defaultConfig={{
        badge: "Careers",
        title: "Grow your career",
        titleHighlight: "with us.",
        subtitle:
          "We hire slowly and keep teams small, so every new person gets real ownership from week one — not a queue of tickets nobody explains.",
        accentGlow: "var(--color-node)",
      }}
    />
  );
}
