"use client";

import PageHero from "@/components/common/PageHero";

export default function LeadershipHero() {
  return (
    <PageHero
      defaultConfig={{
        badge: "Leadership",
        title: "Meet the people behind",
        titleHighlight: "nodalXpoint.",
        subtitle:
          " A small team of leads who each still work directly on client projects — not a management layer that only shows up in kickoff calls.",
        accentGlow: "var(--color-node)",
      }}
    />
  );
}
